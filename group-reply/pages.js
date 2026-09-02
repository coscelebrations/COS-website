/* ===========================================================================
 * LINK FINDER - THE PAGE LIST
 * ===========================================================================
 *
 * Turns config.js into one flat, searchable list of every page worth linking,
 * with a ready-to-copy URL per brand.
 *
 * WHAT THIS TOOL DOES: shows you a list of your pages with a search box and a
 * copy button on each one, so you never type a URL by hand again.
 *
 * WHAT IT DOES NOT DO - and must never be changed to do:
 *   - It does not log into Facebook.
 *   - It does not browse, scrape, or read Facebook groups.
 *   - It does not post or reply on Facebook.
 *   - It does not use browser automation against Facebook.
 * Every action on Facebook is taken by a human, by hand.
 *
 * NO SERVER, NO API KEY, NO COST. This file and config.js are loaded straight
 * into the browser and also require()'d by the Node tests, so there is exactly
 * one source of truth and no build step.
 *
 * This replaced a much larger routing.js on 2026-08-30. That file tried to
 * interpret a pasted Facebook post - intent detection, seeking signals, brand
 * routing, fuzzy venue matching. None of that is needed to show a list you can
 * search, so it was deleted rather than left lying around. It is in git history
 * at commit a46f7b8 if the interpreting behaviour is ever wanted back.
 * =========================================================================== */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./config.js'));
  else root.LF_PAGES = factory(root.GR_CONFIG);
}(typeof self !== 'undefined' ? self : this, function (config) {

/* ---------------------------------------------------------------------------
 * text helpers
 * ------------------------------------------------------------------------ */

const COMBINING_MARKS = /[̀-ͯ]/g;

function norm(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(COMBINING_MARKS, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function titleize(slug) {
  const SMALL = new Set(['on', 'the', 'at', 'of', 'and', 'in']);
  return slug.split('-').map(function (w, i) {
    if (/^\d/.test(w)) return w;                       // 1908, 9, 535
    if (i > 0 && SMALL.has(w)) return w;
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}

/* ---------------------------------------------------------------------------
 * URL building
 * ------------------------------------------------------------------------ */

function buildUrl(brandKey, path) {
  const brand = config.brands[brandKey];
  let url = brand.domain + path;

  if (config.utm && config.utm.enabled) {
    const q = 'utm_source=' + config.utm.source + '&utm_medium=' + config.utm.medium +
              '&utm_campaign=' + config.utm.fallbackCampaign;
    url += (path.indexOf('?') === -1 ? '?' : '&') + q;
  }

  /* Shape check with no global dependencies. An earlier version leaned on the
   * URL constructor inside a broad try/catch, which meant any unexpected error
   * silently turned every link into a homepage - a very quiet way to ship a
   * broken tool. */
  return /^https:\/\/[a-z0-9.-]+\/[^\s]*$/i.test(url) ? url : null;
}

/* ---------------------------------------------------------------------------
 * the list
 * ------------------------------------------------------------------------ */

function entry(group, label, urls, keywords) {
  return {
    group: group,
    label: label,
    cos: urls.cos || null,
    ae: urls.ae || null,
    /* Everything searchable, flattened once at build time so filtering is a
     * plain substring test rather than work repeated on every keystroke.
     *
     * The GROUP NAME is deliberately NOT in here. It used to be, and it meant
     * every one of the 63 venue rows contained the word "venues" - so searching
     * "venues" returned all of them and buried the three pages that actually
     * answer the question. Anything a group name would have matched is given
     * explicit keywords instead. */
    haystack: norm([label, keywords || ''].join(' ')),
  };
}

function build() {
  const list = [];

  // --- the odds and ends: homepages, pricing, contact, team, blog ----------
  (config.extraPages || []).forEach(function (p) {
    const urls = {};
    p.on.forEach(function (b) { urls[b] = buildUrl(b, p.path); });
    list.push(entry('Main pages', p.label, urls, p.keywords));
  });

  // --- services -----------------------------------------------------------
  const SERVICE_LABELS = {
    dj: 'DJ + MC', sax: 'Live Saxophone', photobooth: 'Photo Booth',
    lighting: 'Uplighting + Lighting', effects: 'Cold Sparks + Cloud',
  };
  config.services.forEach(function (svc) {
    const urls = {};
    Object.keys(svc.path).forEach(function (b) { urls[b] = buildUrl(b, svc.path[b]); });
    list.push(entry('Services', SERVICE_LABELS[svc.id] || titleize(svc.id), urls,
                    // "service" restored explicitly - the group name is no longer
                    // part of the searchable text (see the haystack note above).
                    ['service services', (svc.keywords || []).join(' ')].join(' ')));
  });

  // --- vendor directories (COS only - AE has no vendor pages) -------------
  Object.keys(config.intents.vendor).forEach(function (key) {
    const def = config.intents.vendor[key];
    list.push(entry('Vendor directories', titleize(def.label.replace(/ /g, '-')),
                    { cos: buildUrl(config.vendorBrand, def.page) },
                    // "vendor" / "directory" restored explicitly, since the group
                    // name is no longer part of the searchable text.
                    ['vendor vendors directory preferred', (def.keywords || []).join(' ')].join(' ')));
  });

  // --- cities -------------------------------------------------------------
  config.cities.forEach(function (c) {
    list.push(entry('Cities', titleize(c.slug), {
      cos: buildUrl('cos', config.cityPathTemplate.replace('%SLUG%', c.slug)),
      ae:  buildUrl('ae',  config.cityPathTemplate.replace('%SLUG%', c.slug)),
    }, [(c.aliases || []).join(' '), config.cityExtraKeywords || ''].join(' ')));
  });

  // --- venues -------------------------------------------------------------
  config.venues.forEach(function (v) {
    const cosSlug = (v.slugByBrand && v.slugByBrand.cos) || v.slug;
    const aeSlug  = (v.slugByBrand && v.slugByBrand.ae)  || v.slug;
    const urls = {};
    /* `onlyOn` is set by scripts/sync-link-finder.mjs when a venue page exists
     * on one site but not the other - which happens routinely, because the COS
     * half of a pair often ships days before the AE half. Showing a button to
     * a page that 404s is worse than showing no button. */
    if (v.onlyOn !== 'ae') urls.cos = buildUrl('cos', config.venuePathTemplate.replace('%SLUG%', cosSlug));
    if (v.onlyOn !== 'cos') urls.ae = buildUrl('ae', config.venuePathTemplate.replace('%SLUG%', aeSlug));
    list.push(entry('Venues', titleize(v.slug), urls, (v.aliases || []).join(' ')));
  });

  return list;
}

const ALL = build();

/* ---------------------------------------------------------------------------
 * search
 * ---------------------------------------------------------------------------
 * Every word you type must match somewhere, so "dj sax" narrows rather than
 * widens. Blank query returns everything - the list IS the product, the search
 * box just gets you to a row faster.
 * ------------------------------------------------------------------------ */

/* Rank so the thing you actually named comes first. Without this, searching
 * "fern" put Amelia Island above Fern Oak Estate, because Amelia carries
 * "fernandina" as an alias - a correct match, but not the one you meant.
 *   0  the label starts with what you typed
 *   1  the label contains it somewhere
 *   2  only an alias or the group name matched
 * Ties keep their original order, which keeps each group's list alphabetical. */
function rank(row, query) {
  const label = norm(row.label);
  if (label.indexOf(query) === 0) return 0;
  if (label.indexOf(query) !== -1) return 1;
  return 2;
}

function order(rows, query) {
  return rows
    .map(function (row, i) { return { row: row, r: rank(row, query), i: i }; })
    .sort(function (a, b) { return a.r - b.r || a.i - b.i; })
    .map(function (x) { return x.row; });
}

function search(query) {
  const q = norm(query);
  const terms = q.split(' ').filter(Boolean);
  if (!terms.length) return { rows: ALL, loose: false };

  const strict = ALL.filter(function (row) {
    return terms.every(function (t) { return row.haystack.indexOf(t) !== -1; });
  });
  if (strict.length) return { rows: order(strict, q), loose: false };

  /* Nothing matched all the words. Rather than show an empty screen, fall back
   * to matching ANY of them and say so. "dj sax" is a real thing someone types
   * meaning "dj or sax", and no page contains both words - an empty list there
   * reads as broken. */
  const loose = ALL.filter(function (row) {
    return terms.some(function (t) { return row.haystack.indexOf(t) !== -1; });
  });
  return { rows: order(loose, terms[0]), loose: loose.length > 0 };
}

return { all: ALL, search: search, _internal: { norm: norm, titleize: titleize, buildUrl: buildUrl } };
}));
