/* ===========================================================================
 * GROUP REPLY ASSISTANT - ROUTING + LINK BUILDING
 * ===========================================================================
 *
 * REMINDER OF WHAT THIS TOOL IS NOT: it does not log into Facebook, browse or
 * read groups, post or reply, or use browser automation against Facebook.
 * Every action on Facebook is taken by a human, by hand. See config.js.
 *
 * ---------------------------------------------------------------------------
 * WHY THIS IS PLAIN CODE AND NOT THE MODEL'S JOB
 * ---------------------------------------------------------------------------
 * 1. The "why this brand" line can only be honest if a rule produced it. A
 *    rule-generated reason quotes the literal matched text and is true by
 *    construction. A model-generated reason is a plausible sentence.
 * 2. Same post pasted twice gives the same brand, link and reason. Models drift.
 * 3. There are 73 slugs, one of which differs per brand and one of which is
 *    dead. A model given that list WILL eventually emit a wrong URL. Code
 *    cannot.
 *
 * As of 2026-08-29 there is NO model involved at all. The tool was simplified
 * to link lookup only, so everything here runs in the browser with no API key
 * and no cost. route() and applyExtractedVenue() are retained because they are
 * well tested and handle a full pasted post; lookup() is what the page uses.
 * =========================================================================== */

(function (root, factory) {
  /* Same UMD wrapper as config.js: one file, used by the browser page and
   * by the Node tests. No build step, no duplicated logic. */
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./config.js'));
  else root.GR_ROUTING = factory(root.GR_CONFIG);
}(typeof self !== 'undefined' ? self : this, function (config) {

/* ---------------------------------------------------------------------------
 * text helpers
 * ------------------------------------------------------------------------ */

/** Strip zero-width and control characters. Pasted Facebook text is full of
 *  them, and they break naive substring matching in ways nobody can see. */
/* Written as explicit \u escapes on purpose. These ranges were originally
 * pasted as literal bytes, which rendered as unreadable garbage in an editor
 * and made it impossible to tell a control-character class from a negated
 * one at a glance. Do NOT "clean this up" back into literal characters. */
const CONTROL_CHARS   = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const ZERO_WIDTH      = /[\u200B-\u200D\u2060\uFEFF]/g;
const COMBINING_MARKS = /[\u0300-\u036F]/g;

function clean(text) {
  return String(text || "")
    .replace(CONTROL_CHARS, "")
    // Replace zero-width characters with a SPACE, not nothing. Deleting them
    // fuses adjacent words ("in<ZWSP>Orlando" -> "inOrlando") and the city
    // silently stops matching. Over-splitting is the safe direction here.
    .replace(ZERO_WIDTH, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function norm(text) {
  return clean(text)
    .toLowerCase()
    .normalize("NFKD")
    .replace(COMBINING_MARKS, "");
}

/** Matching form: punctuation collapsed to spaces so "St. Aug" and "st aug"
 *  are the same string. Applied to BOTH sides of every comparison. Without
 *  this, every alias containing a period silently never matches. */
function matchNorm(text) {
  return norm(text).replace(/[^a-z0-9]+/g, ' ').trim();
}

/** Word-boundary-aware contains. Prevents "dj" matching inside "adjacent"
 *  and "sax" matching inside "saxophone". Both sides go through matchNorm. */
function has(haystack, needle) {
  const n = matchNorm(needle);
  if (!n) return false;
  const h = matchNorm(haystack);
  const escaped = n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Tolerate a plural "s" on the last word. Without this, the keyword
  // "photographer" does not match the post "Favorite wedding photographers?"
  // because the boundary check sees the trailing s - which silently broke
  // every plural ask, the single most common phrasing in these groups.
  const withPlural = n.endsWith('s') ? escaped : `${escaped}s?`;
  return new RegExp(`(^|[^a-z0-9])${withPlural}([^a-z0-9]|$)`).test(h);
}

/* Vendor and entertainment keywords alone are not enough. "Just booked our
 * venue!!" contains the word "venue" but is not asking for anything, and
 * drafting a reply to it is how you become the person who comments on
 * everything. An intent needs a keyword AND a signal that they are actually
 * looking for something. */
const SEEKING_SIGNALS = [
  'recommend', 'recommendation', 'recommendations', 'rec', 'recs', 'suggestion', 'suggestions',
  'looking for', 'need', 'needs', 'searching', 'search for', 'anyone', 'anybody', 'any one',
  'know of', 'know any', 'who should', 'who do', 'where do', 'help', 'advice',
  'hiring', 'book', 'booking', 'quote', 'quotes', 'available', 'availability',
  'thoughts on', 'worth it', 'should i',
  // Added after probing real phrasings - these four were all being skipped and
  // they are among the most common ways people actually ask in these groups.
  'idea', 'ideas', 'who did', 'who does', 'who did everyone', 'anyone use', 'anyone used',
  'best', 'favorite', 'favourite', 'go to', 'top', 'opinions', 'input',
  'referral', 'referrals', 'vendor list', 'used for', 'use for',
  // bare 'any' - 'Any good caterers in Orlando?' has no other signal, and that
  // shape is everywhere. Safe because it still requires a category keyword too.
  'any', 'know a', 'know anyone',
  // vendor-fell-through posts rarely contain a seeking word but are the
  // highest-intent posts in any group
  'cancelled', 'canceled', 'fell through', 'backed out', 'dropped out', 'ghosted',
  'replace', 'replacing', 'left us', 'bailed',
];

function isSeeking(haystack) {
  return SEEKING_SIGNALS.some((s) => has(haystack, s));
}

/** Human-readable name from a slug, for fuzzy matching against what the model
 *  extracted. 'ritz-carlton-amelia-island' -> 'ritz carlton amelia island' */
function slugToWords(slug) {
  return slug.replace(/-/g, ' ');
}

const STOP_WORDS = new Set(['the', 'at', 'a', 'an', 'of', 'and', 'in', 'on', 'club', 'wedding']);

function tokens(text) {
  return norm(text)
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t && !STOP_WORDS.has(t));
}

/* ---------------------------------------------------------------------------
 * slugify - group name to UTM campaign
 * ------------------------------------------------------------------------ */

function slugifyGroup(name) {
  let s = String(name || '')
    .normalize('NFKD')
    .replace(COMBINING_MARKS, "")
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (s.length > 60) s = s.slice(0, 60).replace(/-+$/, '');
  if (!s) s = config.utm.fallbackCampaign;

  // Tripwire: after the pass above this is guaranteed [a-z0-9-]. If it ever
  // is not, the slugify regressed - fall back rather than emit a broken URL.
  if (!/^[a-z0-9-]+$/.test(s)) return { slug: config.utm.fallbackCampaign, warning: 'Group name produced an invalid campaign tag, used unknown-group instead.' };
  return { slug: s, warning: null };
}

/* ---------------------------------------------------------------------------
 * entity detection
 * ------------------------------------------------------------------------ */

function matchableNames(entry) {
  const names = [slugToWords(entry.slug)];
  if (entry.slugByBrand) for (const s of Object.values(entry.slugByBrand)) names.push(slugToWords(s));
  if (entry.aliases) names.push(...entry.aliases);
  return names;
}

/** Direct text scan. Longest match wins so "casa marina hotel" beats
 *  "casa marina" and "ponte vedra inn and club" beats "ponte vedra". */
function findInText(list, haystack) {
  let best = null;
  let bestLen = 0;
  for (const entry of list) {
    for (const name of matchableNames(entry)) {
      if (name.length > bestLen && has(haystack, name)) {
        best = entry;
        bestLen = name.length;
      }
    }
  }
  return best;
}

/** Fuzzy match a name the model extracted ("the Ritz in Amelia") against the
 *  venue list. Requires a confident overlap - we would rather fall through to a
 *  city page than link the wrong venue. */
function fuzzyMatchVenue(extracted) {
  const want = tokens(extracted);
  if (!want.length) return null;

  let best = null;
  let bestScore = 0;

  for (const entry of config.venues) {
    for (const name of matchableNames(entry)) {
      const have = tokens(name);
      if (!have.length) continue;
      const hits = want.filter((t) => have.includes(t)).length;
      if (!hits) continue;
      // Score = how much of the config name was covered, tie-broken by how
      // much of the extracted string was used. Both matter: "ritz" alone
      // should still find ritz-carlton-amelia-island, but "club" should not
      // match every country club.
      const score = (hits / have.length) * 0.6 + (hits / want.length) * 0.4;
      if (score > bestScore) {
        bestScore = score;
        best = entry;
      }
    }
  }

  return bestScore >= 0.45 ? best : null;
}

function detectGuestCount(haystack) {
  // "about 50 people", "50 guests", "~120 people", "150 person"
  const m = haystack.match(/(\d{2,4})\s*(?:\+)?\s*(?:people|guests|person|pax|attendees)/i);
  if (m) return parseInt(m[1], 10);
  const m2 = haystack.match(/(?:about|around|roughly|approx\.?|~)\s*(\d{2,4})\b/i);
  if (m2) return parseInt(m2[1], 10);
  return null;
}

/* ---------------------------------------------------------------------------
 * intent
 * ------------------------------------------------------------------------ */

function detectIntent(haystack) {
  // Entertainment first. "photo booth" lives in the entertainment list and is
  // checked before the vendor "photos" keyword, which is the whole reason the
  // order matters here.
  const entertainment = config.intents.entertainment.some((k) => has(haystack, k));

  let vendorKey = null;
  for (const [key, def] of Object.entries(config.intents.vendor)) {
    if (def.keywords.some((k) => has(haystack, k))) { vendorKey = key; break; }
  }

  // "photo booth" must not read as a photographer ask.
  if (vendorKey === 'photographer' && (has(haystack, 'photo booth') || has(haystack, 'photobooth'))) {
    const otherPhotog = ['photographer', 'photog', 'photography'].some((k) => has(haystack, k));
    if (!otherPhotog) vendorKey = null;
  }

  // A keyword without a seeking signal is someone talking about their wedding,
  // not asking for help. Return 'neither' so the tool tells the user to skip it.
  if (!isSeeking(haystack)) return { type: 'neither', vendorKey: null };

  if (entertainment && vendorKey) return { type: 'both', vendorKey };
  if (vendorKey) return { type: 'vendor', vendorKey };
  if (entertainment) return { type: 'entertainment', vendorKey: null };
  return { type: 'neither', vendorKey: null };
}

/* ---------------------------------------------------------------------------
 * brand
 * ------------------------------------------------------------------------ */

function routeBrand(haystack, venue, override) {
  if (override === 'cos' || override === 'ae') {
    return { brand: override, reason: 'You set this manually.', rule: 'override', matchText: null };
  }

  const r = config.routing;

  for (const rule of r.forceCos) {
    const hit = rule.match.find((m) => has(haystack, m));
    if (hit) return { brand: 'cos', reason: rule.reason.replace('%MATCH%', hit), rule: 'forceCos', matchText: hit };
  }

  if (venue && r.cosOnlyVenues.includes(venue.slug)) {
    return { brand: 'cos', reason: r.cosOnlyVenueReason, rule: 'cosOnlyVenue', matchText: venue.slug };
  }

  for (const rule of r.forceAe) {
    const hit = rule.match.find((m) => has(haystack, m));
    if (hit) return { brand: 'ae', reason: rule.reason.replace('%MATCH%', hit), rule: 'forceAe', matchText: hit };
  }

  const guests = detectGuestCount(haystack);
  if (guests !== null && guests < r.guestCountAeBelow) {
    return { brand: 'ae', reason: r.guestCountReason.replace('%COUNT%', String(guests)), rule: 'guestCount', matchText: String(guests) };
  }

  for (const rule of r.softCos) {
    const hit = rule.match.find((m) => has(haystack, m));
    if (hit) return { brand: 'cos', reason: rule.reason.replace('%MATCH%', hit), rule: 'softCos', matchText: hit };
  }

  return { brand: r.defaultBrand, reason: r.defaultReason, rule: 'default', matchText: null };
}

/* ---------------------------------------------------------------------------
 * page selection
 * ------------------------------------------------------------------------ */

function slugForBrand(entry, brand) {
  return (entry.slugByBrand && entry.slugByBrand[brand]) || entry.slug;
}

function pickPage({ intent, brand, venue, city, haystack, brandRule }) {
  // --- vendor referral ---------------------------------------------------
  if (intent.type === 'vendor' || intent.type === 'both') {
    const def = config.intents.vendor[intent.vendorKey];
    if (!def) return { kind: 'none', path: null };

    // A venue ask with a known city is better served by that city's page -
    // it is about their actual market and lists venues there.
    if (def.preferCityPage && city) {
      return { kind: 'city', path: config.cityPathTemplate.replace('%SLUG%', city.slug), vendorKey: intent.vendorKey };
    }
    return { kind: 'vendor', path: def.page, vendorKey: intent.vendorKey };
  }

  // --- entertainment lead ------------------------------------------------
  if (venue) {
    return { kind: 'venue', path: config.venuePathTemplate.replace('%SLUG%', slugForBrand(venue, brand)) };
  }

  if (brand === config.cheapPage.brand && brandRule === 'forceAe' && config.cheapPage.preferOverCity) {
    return { kind: 'cheap', path: config.cheapPage.path };
  }

  if (city) {
    return { kind: 'city', path: config.cityPathTemplate.replace('%SLUG%', city.slug) };
  }

  for (const svc of config.services) {
    if (!svc.keywords.some((k) => has(haystack, k))) continue;
    const p = svc.path[brand];
    if (p) return { kind: 'service', path: p, serviceId: svc.id };
  }

  return { kind: 'home', path: config.brands[brand].home };
}

/* ---------------------------------------------------------------------------
 * URL assembly
 * ------------------------------------------------------------------------ */

function buildUrl(brandKey, path, groupSlug) {
  const brand = config.brands[brandKey];
  const query = `utm_source=${config.utm.source}&utm_medium=${config.utm.medium}&utm_campaign=${groupSlug}`;
  const url = brand.domain + path + (path.includes('?') ? '&' : '?') + query;

  /* Validate the shape ourselves rather than leaning on the URL constructor.
   * The old version wrapped `new URL(url)` in a broad try/catch, which meant
   * ANY error - including URL simply not existing in the environment - silently
   * degraded every link to the homepage. That is a very quiet way to ship a
   * broken tool. This check has no global dependencies and cannot throw. */
  const looksValid = /^https:\/\/[a-z0-9.-]+\/[^\s]*$/i.test(url);
  if (looksValid) return { url, warning: null };

  const fallback = brand.domain + brand.home + '?' + query;
  return { url: fallback, warning: 'Built an invalid link, so this is the homepage instead. Check config.js.' };
}

/* ---------------------------------------------------------------------------
 * main entry point
 * ------------------------------------------------------------------------ */

function route(input) {
  const warnings = [];
  const postText = clean(input.postText);
  const hint = clean(input.venueOrCity);
  const haystack = norm(`${postText} ${hint}`);

  const intent = detectIntent(haystack);

  // Direct scan first. The model's extracted venue name is layered on top of
  // this later, in resolveExtractedVenue().
  const venue = findInText(config.venues, haystack);
  const city = findInText(config.cities, haystack);

  const brandInfo = routeBrand(haystack, venue, input.brandOverride);
  const brandKey = intent.type === 'vendor' ? config.vendorBrand : brandInfo.brand;

  const { slug: groupSlug, warning: slugWarning } = slugifyGroup(input.groupName);
  if (slugWarning) warnings.push(slugWarning);

  // no-promo: config match is a one-way override of the checkbox
  const groupLower = norm(input.groupName);
  const configMatch = config.noPromoGroups.find((frag) => groupLower.includes(norm(frag)));
  const noPromo = Boolean(configMatch) || Boolean(input.noPromo);
  const noPromoSource = configMatch ? 'config' : (input.noPromo ? 'manual' : null);

  const page = pickPage({ intent, brand: brandKey, venue, city, haystack, brandRule: brandInfo.rule });

  let url = null;
  if (page.path) {
    const built = buildUrl(brandKey, page.path, groupSlug);
    url = built.url;
    if (built.warning) warnings.push(built.warning);
  }

  // Ambiguous = nothing to route on. Server drafts an ask-back version too.
  const ambiguous =
    intent.type === 'entertainment' &&
    !venue && !city &&
    brandInfo.rule === 'default' &&
    detectGuestCount(haystack) === null;

  return {
    intent: intent.type,
    vendorKey: intent.vendorKey,
    brand: brandKey,
    brandLabel: config.brands[brandKey].label,
    brandReason: intent.type === 'vendor'
      ? 'This is a vendor referral, so it links the COS directory. AE has no vendor pages.'
      : brandInfo.reason,
    brandRule: brandInfo.rule,
    matched: {
      rule: brandInfo.rule,
      text: brandInfo.matchText,
      venue: venue ? venue.slug : null,
      city: city ? city.slug : null,
      service: page.serviceId || null,
      vendorCategory: page.vendorKey || null,
      guests: detectGuestCount(haystack),
    },
    pageKind: page.kind,
    url,
    groupSlug,
    noPromo,
    noPromoSource,
    ambiguous,
    warnings,
  };
}

/** Second pass: the model told us which venue it saw. If our direct scan
 *  missed it, fuzzy-match and rebuild the link. Never changes the brand
 *  silently - a cosOnlyVenue discovered here is surfaced as a suggestion. */
function applyExtractedVenue(routed, extractedName) {
  if (!extractedName || routed.matched.venue) return routed;
  if (routed.intent === 'vendor') return routed;

  const venue = fuzzyMatchVenue(extractedName);
  if (!venue) return routed;

  const slug = slugForBrand(venue, routed.brand);
  const built = buildUrl(routed.brand, config.venuePathTemplate.replace('%SLUG%', slug), routed.groupSlug);

  const out = {
    ...routed,
    pageKind: 'venue',
    url: built.url,
    matched: { ...routed.matched, venue: venue.slug },
    warnings: [...routed.warnings],
  };
  if (built.warning) out.warnings.push(built.warning);

  if (config.routing.cosOnlyVenues.includes(venue.slug) && routed.brand !== 'cos') {
    out.brandSuggestion = {
      brand: 'cos',
      note: `${slugToWords(venue.slug)} is a COS venue. This draft is in AE's voice - switch?`,
    };
  }

  return out;
}

/* ---------------------------------------------------------------------------
 * LOOKUP MODE - the primary way this tool is used
 * ---------------------------------------------------------------------------
 * You type a short phrase ("photo jax", "dj treasury", "planner") and get the
 * right link. Two things differ from route():
 *
 * 1. NO SEEKING GATE. route() requires a post to sound like someone asking for
 *    something, so the tool does not draft replies to "just booked our venue!!".
 *    In lookup mode YOU are the seeking signal - you typed it on purpose.
 *
 * 2. SHORT FORMS. Nobody types "photographer" on a phone. "photo", "vid",
 *    "coord" and friends map to categories here and nowhere else, because they
 *    are too loose to use against real post text ("photo" would swallow every
 *    photo booth question).
 * ------------------------------------------------------------------------ */

const LOOKUP_SHORTCUTS = [
  // Order matters: the first match wins, so the more specific entries -
  // anything containing "booth" - must come before the bare photo/video ones.
  { match: ['photo booth', 'photobooth', 'booth', '360'], kind: 'service', id: 'photobooth' },
  { match: ['photo', 'photos', 'pic', 'pics', 'photog', 'photographer', 'photography'], kind: 'vendor', id: 'photographer' },
  { match: ['video', 'vid', 'videos', 'videographer', 'videography'], kind: 'vendor', id: 'videographer' },
  { match: ['planner', 'plan', 'coord', 'coordinator', 'day of'], kind: 'vendor', id: 'planner' },
  { match: ['venue', 'venues'], kind: 'vendor', id: 'venue' },
  { match: ['bar', 'bartender', 'bartenders', 'booze', 'drinks'], kind: 'vendor', id: 'bar' },
  { match: ['cater', 'caterer', 'caterers', 'catering', 'food'], kind: 'vendor', id: 'catering' },
  { match: ['sax', 'saxophone', 'live music', 'musician'], kind: 'service', id: 'sax' },
  { match: ['uplighting', 'uplight', 'lighting', 'lights'], kind: 'service', id: 'lighting' },
  { match: ['spark', 'sparks', 'cold spark', 'cloud', 'dancing on a cloud'], kind: 'service', id: 'effects' },
  { match: ['dj', 'djs', 'music', 'mc', 'emcee', 'dance'], kind: 'service', id: 'dj' },
];

function lookup(input) {
  const raw = clean(input.query);
  const haystack = norm(raw);
  const warnings = [];

  const { slug: groupSlug, warning: slugWarning } = slugifyGroup(input.groupName);
  if (slugWarning) warnings.push(slugWarning);

  const venue = findInText(config.venues, haystack);
  const city = findInText(config.cities, haystack);

  let shortcut = null;
  for (const s of LOOKUP_SHORTCUTS) {
    if (s.match.some((m) => has(haystack, m))) { shortcut = s; break; }
  }

  /* --- vendor category -------------------------------------------------- */
  if (shortcut && shortcut.kind === 'vendor') {
    const def = config.intents.vendor[shortcut.id];
    const usesCity = def.preferCityPage && city;
    const path = usesCity
      ? config.cityPathTemplate.replace('%SLUG%', city.slug)
      : def.page;
    const built = buildUrl(config.vendorBrand, path, groupSlug);
    if (built.warning) warnings.push(built.warning);
    return {
      ok: true,
      kind: 'vendor',
      what: def.label,
      brand: config.vendorBrand,
      brandLabel: config.brands[config.vendorBrand].label,
      note: usesCity
        ? `Venues in ${slugToWords(city.slug)}.`
        : `Our ${def.label} page. AE has no vendor pages, so this is always the COS one.`,
      url: built.url,
      alt: null,
      matched: { venue: null, city: city ? city.slug : null, shortcut: shortcut.id },
      warnings,
    };
  }

  /* --- entertainment: needs a brand ------------------------------------- */
  const svcDef = shortcut && shortcut.kind === 'service'
    ? config.services.find((s) => s.id === shortcut.id)
    : null;

  let brandInfo = routeBrand(haystack, venue, input.brandOverride);

  /* Some services only exist on one brand - sax and cold sparks are COS. The
   * word "sax" on its own is too short for the forceCos keyword list (which
   * has to be conservative because it runs against real post text), so honour
   * the service definition here instead. A manual override still wins. */
  if (svcDef && svcDef.forceBrand && !input.brandOverride) {
    brandInfo = {
      brand: svcDef.forceBrand,
      reason: 'That is a COS service, so this is the COS link.',
      rule: 'serviceForceBrand',
      matchText: shortcut.id,
    };
  }

  const brand = brandInfo.brand;
  const other = brand === 'cos' ? 'ae' : 'cos';

  /* If the service does not exist on the other brand at all, do not offer a
   * "use AE instead" button - it would just point at the AE homepage, which
   * is a worse link dressed up as a choice. */
  const otherBrandHasIt = !svcDef || !svcDef.forceBrand;

  function pathFor(b) {
    if (venue) return config.venuePathTemplate.replace('%SLUG%', slugForBrand(venue, b));
    // "cheap dj" should land on the pricing page, not generic services. Only
    // on AE, and only when a budget word actually triggered the AE routing.
    if (b === config.cheapPage.brand && brandInfo.rule === 'forceAe' && !city) return config.cheapPage.path;
    if (city) return config.cityPathTemplate.replace('%SLUG%', city.slug);
    if (shortcut && shortcut.kind === 'service') {
      const svc = config.services.find((s) => s.id === shortcut.id);
      if (svc && svc.path[b]) return svc.path[b];
    }
    return config.brands[b].home;
  }

  const primary = buildUrl(brand, pathFor(brand), groupSlug);
  const secondary = buildUrl(other, pathFor(other), groupSlug);
  if (primary.warning) warnings.push(primary.warning);

  let what = 'Homepage';
  if (venue) what = slugToWords(venue.slug);
  else if (city) what = slugToWords(city.slug);
  else if (shortcut) what = shortcut.id === 'dj' ? 'DJ services' : shortcut.id;

  if (!venue && !city && !shortcut) {
    warnings.push(`Nothing matched "${raw}", so this is just the homepage. Try a venue name, a city, or a category like photo / dj / planner.`);
  }

  return {
    ok: true,
    kind: venue ? 'venue' : city ? 'city' : shortcut ? 'service' : 'home',
    what,
    brand,
    brandLabel: config.brands[brand].label,
    note: brandInfo.reason,
    url: primary.url,
    /* The other brand's version of the same page, one tap away. Showing both
     * is fine HERE because this screen is internal and you copy one - the
     * never-link-both-brands rule is about what lands in a public comment. */
    alt: otherBrandHasIt
      ? { brand: other, brandLabel: config.brands[other].label, url: secondary.url }
      : null,
    matched: { venue: venue ? venue.slug : null, city: city ? city.slug : null, shortcut: shortcut ? shortcut.id : null },
    warnings,
  };
}

return {
  route,
  lookup,
  applyExtractedVenue,
  // exported for tests
  _internal: { clean, norm, matchNorm, has, isSeeking, slugifyGroup, detectIntent, routeBrand, fuzzyMatchVenue, detectGuestCount },
};
}));
