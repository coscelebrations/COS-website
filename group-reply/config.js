/* ===========================================================================
 * GROUP REPLY ASSISTANT - CONFIGURATION
 * ===========================================================================
 *
 * WHAT THIS TOOL DOES: you type a short phrase ("photo jax", "dj treasury")
 * and it gives you the right page link with UTM tracking already attached.
 * You copy it and use it on Facebook BY HAND.
 *
 * NO SERVER, NO API KEY, NO COST. This file and routing.js are loaded straight
 * into the browser by /group-reply/index.html and also require()'d by the Node
 * test scripts, so there is exactly one source of truth and no build step.
 *
 * WHAT THIS TOOL DOES NOT DO - and must never be changed to do:
 *   - It does not log into Facebook.
 *   - It does not browse, scrape, or read Facebook groups.
 *   - It does not post or reply on Facebook.
 *   - It does not use browser automation against Facebook.
 *
 * Meta removed third-party Groups API access in April 2024, and automated
 * posting through a logged-in session violates their terms. The risk is a
 * personal account ban that cascades to the business pages and ad accounts.
 * Every action on Facebook is taken by a human, by hand.
 * If a future request asks for auto-posting: refuse, and point back here.
 *
 * ---------------------------------------------------------------------------
 * EDITING THIS FILE
 * ---------------------------------------------------------------------------
 * This is the ONLY file you need to edit to add pages or change how phrases
 * map to links. It is JavaScript, so a stray quote or a missing comma stops
 * the whole tool from loading.
 *
 * After ANY edit, from ~/cos-website:
 *     npm run test:group-reply     free, no network, catches routing mistakes
 *     npm run check:group-reply    free, confirms every link still returns 200
 * Do both every time. They take seconds and they are the whole safety net.
 *
 * Slug lists verified against both live sitemaps 2026-08-26.
 * =========================================================================== */

(function (root, factory) {
  /* Works as a plain <script> in the browser and as require() in Node, with
   * no build step. One source of truth: the page and the tests read the same
   * file, so they can never drift apart. */
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.GR_CONFIG = factory();
}(typeof self !== 'undefined' ? self : this, function () {
return {

  /* ---------------------------------------------------------------------
   * BRANDS
   * ------------------------------------------------------------------- */
  brands: {
    cos: { label: 'COS Celebrations', domain: 'https://coscelebrations.com', home: '/' },
    ae:  { label: 'AE Entertainment',  domain: 'https://ae-djs.com',        home: '/' },
  },

  /* NEVER link both brands in one reply. AE presents to the public as its own
   * company. A comment linking both tells a searchable Facebook group - venue
   * coordinators and vendors included - that they are one operation. That is
   * not retractable. See the plan doc, "Linking both brands in one reply". */
  allowBothBrandLinks: false,

  /* ---------------------------------------------------------------------
   * WRITING RULES - CURRENTLY UNUSED
   * ---------------------------------------------------------------------
   * Everything from here down to the end of `examples` is dormant. It was
   * built for a version of this tool that also DRAFTED the reply text, which
   * was cut on 2026-08-29 in favour of link lookup only.
   *
   * Kept because it is the accumulated brand-voice work (the COS/AE split, the
   * em-dash rule, the sax-is-not-a-ceremony-instrument rule) and it is the
   * starting point if drafting ever comes back. Nothing reads it today.
   * The drafting code itself is in git history at commit 4e9f091.
   * ------------------------------------------------------------------- */

  /* WRITING-VOICE.md says COS uses em dashes for asides. That rule is still
   * correct FOR WEB PAGES. It does not apply here: these are Facebook comments
   * typed on a phone, and an em dash reads as machine-generated. CLAUDE.md
   * Rule #15 bans them independently. Do not "fix" this back. */
  bannedCharacters: ['—', '–', '‘', '’', '“', '”'],

  /* Replacements applied before the strip, so meaning survives. */
  characterReplacements: {
    '—': ', ',   // em dash
    '–': '-',    // en dash
    '‘': "'",
    '’': "'",
    '“': '"',
    '”': '"',
  },

  /* Warning only - never auto-rewritten. The human decides. */
  bannedPhrases: [
    'elevate', 'unforgettable', 'we pride ourselves', 'seamless', 'magical',
    'perfect day', 'dream wedding', 'look no further', 'top-notch',
  ],

  /* ---------------------------------------------------------------------
   * VOICE
   * ------------------------------------------------------------------- */
  voice: {
    shared: [
      'Sound like a human typing on a phone, not marketing copy.',
      'Two to four sentences. Short.',
      'Open with a congratulations or similar, then get straight to something specific about THEIR post: their venue, their date, their actual question. Never open with the company name.',
      'No em dashes used as pauses.',
      'No superlatives. Never use "elevate", "unforgettable", "we pride ourselves".',
      'One link, at the end. Never write the URL yourself - write the token {{LINK}} and it gets substituted.',
      'Never post a price, ours or anyone else\'s.',
      'Have an actual opinion. A reply that hedges everything is not worth posting.',
      'Specifics beat adjectives. "Fifty people in a backyard needs less gear than a ballroom" beats "we tailor to your needs".',
      'Do not invent details about a venue you were not told about. If you do not know the room, do not describe it.',
    ],
    cos: [
      'COS Celebrations is the luxury brand, $1,500+.',
      'First person. "I" and "we". Never "COS Celebrations provides".',
      'Confident, not salesy. Like a friend who happens to be really good at this giving straight advice.',
      'Signal quality through specificity, not adjectives.',
      'DJ plus live saxophone is the signature. Sax rides OVER the reception dance set - it is not a ceremony or cocktail-hour instrument. Piano and violin are the ceremony/cocktail instruments.',
      'Just-a-DJ is a respected default. Never imply every event includes live musicians.',
    ],
    ae: [
      'AE Entertainment is the budget-friendly brand, $800+.',
      '"We" voice. No Corey backstory - AE is the team, not the founder story.',
      'Direct, casual, zero pretension. Even shorter sentences than COS.',
      'Say "price", "cost", "package". Never "investment", "fee structure", "experience".',
      'Signal value without apologizing for it. Never punch down at more expensive companies.',
      'AE is its own company to the public. Never mention COS Celebrations in an AE reply.',
    ],
    vendor: [
      'This is a referral, not a lead. Someone asked about a photographer, planner, videographer, venue, bar or caterer.',
      'Company "we" voice - these get posted by whoever is on their phone, so no personal-relationship claims only Corey could honestly make.',
      'Never name an individual vendor. Point at the category page and let it do the work.',
      'Do NOT pitch DJ services. They did not ask. A pitch inside someone else\'s question is what gets an account muted.',
      'Earn the link with a real observation first. "Here is a list" on its own is a link drop and reads like one.',
    ],
  },

  /* ---------------------------------------------------------------------
   * EXAMPLE REPLIES - the single biggest quality lever in this file
   * ---------------------------------------------------------------------
   * The model copies the rhythm, length and structure of these closely.
   * Keep them VARIED so it learns the voice, not one template.
   *
   * STATUS 2026-08-26: these are Claude's drafts, reviewed and steered by
   * Corey but not rewritten in his own words. The tool will sound like a good
   * imitation of him until these are replaced with real replies he has posted.
   * Paste real ones in here as they happen - no need to write a batch.
   * ------------------------------------------------------------------- */
  examples: {
    ae: [
      {
        post: 'Hi everyone! Getting married next October in St. Augustine and starting to look for a DJ. Any recommendations? TIA',
        reply: 'Congrats! Do you have the venue locked in yet? That changes what you actually need more than people expect, especially if the reception is outside. We are local and do a lot of these: {{LINK}}',
      },
      {
        post: 'Looking for an affordable DJ for a small backyard wedding in Jacksonville, about 50 people. Budget is tight!',
        reply: 'Congrats! Fifty people in a backyard is a totally different setup than a ballroom, you need a lot less gear than most companies will try to sell you. We do a bunch of these. Pricing is all listed here: {{LINK}}',
      },
    ],
    cos: [
      {
        post: 'Has anyone done a live saxophone player with their DJ? Getting married at Ponte Vedra Inn & Club next spring.',
        reply: 'Congrats! DJ plus live sax is most of what we do, and it is usually the reception people want it for, over the dance set. Here is what that looks like at Ponte Vedra: {{LINK}}',
      },
    ],
    vendor: [
      {
        post: 'Does anyone have a photographer they loved? Ours just cancelled on us 6 weeks out and I am panicking',
        /* TODO before this ships: Corey has NOT confirmed that six weeks out is
         * realistic for an October St. Augustine photographer. A confident wrong
         * claim about another vendor's availability costs credibility with both
         * the couple and the photographers. Fix or cut the second sentence. */
        reply: 'Congrats, and that is a rough one. Six weeks out is stressful but it is doable, most photographers still have fall dates open. Here is the list of the ones we work with most: {{LINK}}',
      },
      {
        post: 'Do I really need a day-of coordinator? Trying to decide if it is worth it.',
        reply: 'Congrats! Honestly yes, and mostly for you, not for the vendors. Somebody has to be the person answering questions all day, and you do not want that to be you or your mom. Here is who we work with: {{LINK}}',
      },
    ],
  },

  /* ---------------------------------------------------------------------
   * ASK-BACK MODE
   * ---------------------------------------------------------------------
   * When a post gives us nothing to route on, the strongest reply is often a
   * question with no link at all. It gets engagement in the thread and defers
   * the COS-vs-AE call to a DM where linking either site is safe.
   * The server drafts both; the screen shows the link version by default with
   * this one folded behind "not right?".
   * ------------------------------------------------------------------- */
  askBack: {
    enabled: true,
    example: 'Congrats! Do you have the venue locked in yet, and is the reception indoors or outside? That changes what you actually need more than most people expect.',
  },

  /* ---------------------------------------------------------------------
   * INTENT - what is this post even asking for?
   * ---------------------------------------------------------------------
   * Checked BEFORE brand. Order matters inside entertainment: "photo booth"
   * must be tested before the vendor "photo" keywords, or every photo-booth
   * post misroutes to the photographer referral.
   * ------------------------------------------------------------------- */
  intents: {
    entertainment: [
      'dj', 'djs', 'disc jockey', 'music', 'band', 'live music', 'sax', 'saxophone',
      'mc', 'emcee', 'dancing', 'dance floor', 'entertainment', 'photo booth',
      'photobooth', 'uplighting', 'uplight', 'lighting', 'cold spark',
      'dancing on a cloud', 'sound system', 'ceremony music',
    ],
    vendor: {
      photographer: {
        keywords: ['photographer', 'photog', 'photography', 'photos'],
        page: '/vendors/photographers/',
        label: 'photographers',
      },
      videographer: {
        keywords: ['videographer', 'videography', 'video team', 'wedding video'],
        page: '/vendors/videographers/',
        label: 'videographers',
      },
      planner: {
        keywords: ['planner', 'coordinator', 'day-of coordinator', 'day of coordinator', 'month-of', 'month of coordinator'],
        page: '/vendors/planners/',
        label: 'planners',
      },
      venue: {
        keywords: ['venue', 'venues', 'reception site', 'ceremony site', 'where to get married', 'place to get married'],
        /* NOT /vendors/venues/. That page was consolidated into
         * /areas-we-serve/ on 2026-08-26 (it was a 97% duplicate) and now 301s.
         * The link checker caught this. /areas-we-serve/ is the breadcrumb
         * parent of ~145 venue pages, so it is a strictly better answer. */
        page: '/areas-we-serve/',
        label: 'venues',
        /* If a city was detected in the post, the city page is a better answer
         * than the national areas page - it is about their actual market and
         * lists the venues there. Falls back to `page` when no city is found. */
        preferCityPage: true,
      },
      bar: {
        keywords: ['bartender', 'bartenders', 'bar service', 'mobile bar', 'bar company'],
        page: '/vendors/bar-service/',
        label: 'bar service',
      },
      catering: {
        keywords: ['caterer', 'catering', 'food truck', 'cater'],
        page: '/vendors/catering/',
        label: 'caterers',
      },
      /* NOT YET - /vendors/makeup/ does not exist and would 404 in a public
       * Facebook comment. Uncomment the day the page ships, then run:
       *   npm run check:group-reply
       * makeup: {
       *   keywords: ['makeup', 'hair and makeup', 'mua', 'hairstylist', 'hair stylist'],
       *   page: '/vendors/makeup/',
       *   label: 'hair and makeup',
       * },
       */
      /* guest-experiences page exists but says "Directory Coming Soon".
       * Treat as empty - no keywords, no link, until it has real vendors. */
    },
  },

  /* Vendor referrals always link COS - AE has no vendor pages at all. */
  vendorBrand: 'cos',

  /* 'our-page' = name nobody, link the category page. Decided 2026-08-26.
   * Deliberately NO vendor name list in this config: names go stale silently
   * while the directories are being filled out, and naming one of six reads
   * as a slight to the other five. */
  vendorLinkPolicy: 'our-page',

  /* ---------------------------------------------------------------------
   * BRAND ROUTING - deterministic, first match wins
   * ---------------------------------------------------------------------
   * Precedence: manual override > forceCos > cosOnlyVenue > forceAe /
   * guest count > softCos > default AE.
   *
   * COS force-rules sit ABOVE AE budget words on purpose. "Affordable
   * saxophonist for our Ponte Vedra wedding" is a COS lead with a price
   * objection, not an AE lead. Sax and special effects are COS-only
   * capabilities; budget language is a negotiating position.
   * ------------------------------------------------------------------- */
  routing: {
    forceCos: [
      { match: ['saxophone', 'sax player', 'live sax', 'live musician', 'live musicians', 'horn player', 'live band with dj'],
        reason: 'They asked about live music, which is a COS service.' },
      { match: ['cold spark', 'cold sparks', 'sparkular', 'dancing on a cloud', 'dry ice', 'special effects'],
        reason: 'They asked about special effects, which is a COS service.' },
      { match: ['lighting design', 'full production', 'uplighting package', 'monogram'],
        reason: 'They asked about production and lighting design, which points to COS.' },
      { match: ['wedding planner', 'our planner', 'my planner', 'coordinator is', 'working with a planner'],
        reason: 'There is a planner involved, which usually means a bigger production. Routing to COS.' },
      { match: ['black tie', 'black-tie', 'no expense', 'high end', 'high-end', 'luxury'],
        reason: 'The post uses higher-budget language, so this goes to COS.' },
    ],
    forceAe: [
      { match: ['on a budget', 'affordable', 'cheap', 'inexpensive', 'tight budget', 'budget is tight',
                'not spending much', 'low budget', 'budget friendly', 'budget-friendly', 'save money',
                'as cheap as', 'keep it simple', 'nothing fancy'],
        reason: 'They said "%MATCH%", so this goes to AE.' },
      { match: ['backyard', 'back yard', 'community center', 'vfw', 'church hall', 'fellowship hall',
                'american legion', 'rec center', 'moose lodge', 'at our house', 'at my house'],
        reason: 'A %MATCH% wedding is usually a simpler setup, so this goes to AE.' },
      { match: ['just need a dj', 'only need a dj', 'just a dj', 'basic dj', 'simple dj'],
        reason: 'They only want a DJ, no extras, so this goes to AE.' },
    ],
    softCos: [
      { match: ['resort', 'country club', 'yacht club', 'ballroom', 'estate', 'plantation'],
        reason: 'A %MATCH% venue usually means a bigger production, so this leans COS.' },
    ],

    /* Below this guest count, route AE. */
    guestCountAeBelow: 75,
    guestCountReason: 'About %COUNT% guests is a smaller wedding, so this goes to AE.',

    /* When unclear, default to AE and SAY SO. Easier to move a lead up to COS
     * than to scare one off with a luxury quote. */
    defaultBrand: 'ae',
    defaultReason: 'Nothing in the post points clearly either way, so this defaults to AE. Easier to move a lead up to COS than to scare one off with a luxury quote.',

    /* These venues force COS regardless of budget language. Kept short and
     * keyword-matched in the pre-call routing step, because brand has to be
     * decided BEFORE the model writes (it sets the voice). */
    cosOnlyVenues: [
      'ritz-carlton-amelia-island',
      'ponte-vedra-inn-club',
      'lodge-club-ponte-vedra',
      'omni-amelia-island',
      'don-cesar',
      'tpc-sawgrass',
      'bella-collina',
      'epping-forest-yacht-club',
      'sawgrass-marriott',
      'alfond-inn',
    ],
    cosOnlyVenueReason: 'That venue is one we cover under COS, so this routes to COS.',
  },

  /* ---------------------------------------------------------------------
   * VENUES - 62, verified against both sitemaps 2026-08-26
   * ---------------------------------------------------------------------
   * URL pattern is FLAT on both sites: /{slug}-wedding-dj/ at the root.
   * Venue and city pages are indistinguishable by path - that is why they are
   * two separate lists here rather than one.
   *
   * ALIASES ARE OPTIONAL. The model extracts the venue name from the post and
   * code fuzzy-matches it against these slugs, so you do NOT need to write
   * nicknames up front. Add an alias only when a specific venue misfires.
   * Matching rule when aliases exist: longest alias wins.
   *
   * NOT IN THIS LIST ON PURPOSE: crystal-ballroom-daytona. That venue closed
   * 2026-07-02 and the URL now 301s. Do not add it back.
   * ------------------------------------------------------------------- */
  venuePathTemplate: '/%SLUG%-wedding-dj/',
  venues: [
    { slug: '1908-grand' },
    { slug: '9-aviles' },
    { slug: 'alfond-inn' },
    { slug: 'azaleana-manor' },
    { slug: 'barn-at-deep-creek' },
    { slug: 'bella-collina' },
    { slug: 'bowing-oaks' },
    { slug: 'casa-feliz' },
    /* THE ONE PER-BRAND DIFFERENCE. COS uses casa-marina-hotel, AE uses
     * casa-marina. Verified 2026-08-26. Do not assume 1:1 slugs elsewhere. */
    { slug: 'casa-marina-hotel', slugByBrand: { ae: 'casa-marina' },
      aliases: ['casa marina', 'casa marina hotel'] },
    { slug: 'casa-monica' },
    { slug: 'castle-hotel-orlando' },
    { slug: 'clay-theatre' },
    { slug: 'club-continental' },
    { slug: 'cross-creek-ranch' },
    { slug: 'deerwood-country-club' },
    { slug: 'don-cesar', aliases: ['don cesar', 'the don cesar', 'don ce sar'] },
    { slug: 'dr-phillips-house' },
    { slug: 'embassy-suites-st-augustine-beach' },
    { slug: 'epping-forest-yacht-club', aliases: ['epping forest'] },
    { slug: 'estate-on-the-halifax' },
    { slug: 'flagler-college' },
    { slug: 'florida-aquarium' },
    { slug: 'fountain-of-youth' },
    { slug: 'garden-club-jacksonville' },
    { slug: 'glass-factory' },
    { slug: 'golden-creek-ranch' },
    { slug: 'golf-club-amelia-island' },
    { slug: 'hard-rock-daytona' },
    { slug: 'kanapaha-botanical-gardens' },
    { slug: 'kelly-farm-events' },
    { slug: 'le-meridien-tampa' },
    { slug: 'leu-gardens' },
    { slug: 'lightner-museum' },
    /* Lodge & Club and Ponte Vedra Inn & Club are DIFFERENT venues with
     * separate pages. Never blend them in a reply. */
    { slug: 'lodge-club-ponte-vedra', aliases: ['lodge and club', 'the lodge and club', 'lodge & club'] },
    { slug: 'lpga-international' },
    { slug: 'marsh-landing-country-club' },
    { slug: 'nova-535' },
    { slug: 'omni-amelia-island', aliases: ['omni', 'the omni', 'omni amelia'] },
    { slug: 'oyster-bay-yacht-club' },
    { slug: 'paradise-cove' },
    { slug: 'ponte-vedra-inn-club', aliases: ['ponte vedra inn', 'ponte vedra inn and club', 'ponte vedra inn & club'] },
    { slug: 'preserve-amelia-river-club' },
    { slug: 'ribault-club' },
    { slug: 'ritz-carlton-amelia-island', aliases: ['the ritz', 'ritz carlton', 'ritz-carlton', 'ritz'] },
    { slug: 'river-club-jacksonville' },
    { slug: 'river-house' },
    { slug: 'san-jose-country-club' },
    { slug: 'sawgrass-country-club' },
    { slug: 'sawgrass-marriott' },
    { slug: 'shores-resort' },
    { slug: 'st-johns-golf' },
    { slug: 'sweetwater-branch-inn' },
    { slug: 'sydonie-mansion' },
    { slug: 'tampa-garden-club' },
    { slug: 'the-orlo' },
    { slug: 'the-white-room', aliases: ['white room', 'the white room'] },
    { slug: 'the-wooly' },
    { slug: 'timuquana-country-club', aliases: ['timuquana', 'timuquana cc'] },
    { slug: 'tpc-sawgrass', aliases: ['tpc', 'tpc sawgrass', 'sawgrass players club'] },
    { slug: 'treasury-on-the-plaza', aliases: ['the treasury', 'treasury'] },
    { slug: 'tringali-barn' },
    { slug: 'walkers-landing', aliases: ['walkers landing', "walker's landing"] },
  ],

  /* ---------------------------------------------------------------------
   * CITIES - 11, same flat /{slug}-wedding-dj/ pattern
   * ------------------------------------------------------------------- */
  cityPathTemplate: '/%SLUG%-wedding-dj/',
  cities: [
    { slug: 'amelia-island', aliases: ['amelia island', 'amelia', 'fernandina'] },
    { slug: 'atlanta', aliases: ['atlanta', 'atl'] },
    { slug: 'daytona-beach', aliases: ['daytona beach', 'daytona'] },
    { slug: 'fernandina-beach', aliases: ['fernandina beach'] },
    { slug: 'gainesville', aliases: ['gainesville'] },
    { slug: 'jacksonville', aliases: ['jacksonville', 'jax', 'jacksonville beach', 'jax beach'] },
    { slug: 'orlando', aliases: ['orlando'] },
    { slug: 'palatka', aliases: ['palatka'] },
    { slug: 'ponte-vedra', aliases: ['ponte vedra', 'ponte vedra beach'] },
    { slug: 'st-augustine', aliases: ['st augustine', 'st. augustine', 'saint augustine', 'staug', 'st aug'] },
    { slug: 'tampa', aliases: ['tampa'] },
  ],

  /* ---------------------------------------------------------------------
   * SERVICE PAGES - last resort before the homepage
   * ---------------------------------------------------------------------
   * NOTE: COS has no /services/ index page. AE has ONE /services/ page with
   * no subpages. That asymmetry is why paths are per-brand here.
   * ------------------------------------------------------------------- */
  services: [
    {
      id: 'sax',
      keywords: ['saxophone', 'sax', 'live music', 'live musician', 'horn player'],
      forceBrand: 'cos',
      path: { cos: '/services/wedding-saxophonist/' },
    },
    {
      id: 'dj',
      keywords: ['dj', 'djs', 'disc jockey', 'music', 'dancing', 'dance floor', 'mc', 'emcee', 'sound'],
      path: { cos: '/services/weddings/', ae: '/services/' },
    },
    {
      id: 'photobooth',
      keywords: ['photo booth', 'photobooth', '360 booth', 'selfie booth'],
      path: { cos: '/services/weddings/', ae: '/services/' },
      /* VERIFIED 2026-08-26: no dedicated photo booth page exists on either
       * site. It is an H3 inside /services/weddings/ with NO anchor id, so the
       * visitor lands at the top of a long page and has to hunt. That is a real
       * conversion cost. Known debt, not an oversight.
       * Do NOT point this at /photo-video/ - that page is photography and
       * videography, not a photo booth, and the lead will bounce.
       * Repoint the day a real page ships. One line. */
    },
    {
      id: 'lighting',
      keywords: ['uplighting', 'uplight', 'lighting', 'monogram'],
      path: { cos: '/services/weddings/', ae: '/services/' },
      /* Same note as photobooth: no dedicated page exists yet. */
    },
    {
      id: 'effects',
      keywords: ['cold spark', 'cold sparks', 'sparkular', 'dancing on a cloud', 'dry ice'],
      /* COS only - AE does not offer special effects. Without forceBrand, a
       * bare "spark" lookup routed to AE and then fell through to the AE
       * homepage, because there is no AE path here. */
      forceBrand: 'cos',
      path: { cos: '/services/weddings/' },
      /* Same note as photobooth: no dedicated page exists yet. */
    },
  ],

  /* AE's budget page. The reply text still never types a price - the page does
   * the talking. Only used when a forceAe budget rule actually matched. */
  cheapPage: { brand: 'ae', path: '/cheap-wedding-dj/', preferOverCity: true },

  /* ---------------------------------------------------------------------
   * NO-PROMO GROUPS
   * ---------------------------------------------------------------------
   * Lowercased fragments matched against the group name. A match forces the
   * DM-offer reply with no public link, regardless of the checkbox.
   *
   * This list STARTS EMPTY and grows. The workflow is: the first time you
   * notice a group bans links, add one line here.
   *
   * The checkbox on the screen can force no-promo ON, but cannot force it OFF
   * when this list matched. Removing a group is a config edit, not a per-draft
   * decision.
   * ------------------------------------------------------------------- */
  noPromoGroups: [
    // 'jacksonville wedding vendors',
    // 'first coast brides',
  ],

  /* ---------------------------------------------------------------------
   * TRACKING - the only tracking in this whole tool
   * ------------------------------------------------------------------- */
  utm: {
    source: 'facebook',
    medium: 'group',
    fallbackCampaign: 'unknown-group',
  },

  /* ---------------------------------------------------------------------
   * MODEL
   * ---------------------------------------------------------------------
   * Opus 5 thinks by default, and max_tokens caps thinking PLUS response text
   * together - which is why 2000 for a 2-4 sentence reply. Do not set
   * thinking:disabled: on this model that leaks <thinking> tags into visible
   * output, which for a tool whose entire product IS visible text is exactly
   * the wrong failure. effort:'low' is the correct cost/latency lever.
   * ------------------------------------------------------------------- */
  model: {
    id: 'claude-opus-5',
    maxTokens: 2000,
    effort: 'low',
    /* Netlify's synchronous function timeout is 10s by default. Abort before
     * that so the user gets a friendly message instead of a raw 502. */
    timeoutMs: 8500,
  },

  /* Longest post we will accept. Pasted Facebook text sometimes includes a
   * whole comment thread. */
  maxPostChars: 4000,
};
}));
