/* ===========================================================================
 * LINK FINDER - CONFIGURATION
 * ===========================================================================
 *
 * WHAT THIS TOOL DOES: shows a searchable list of our pages with a copy button
 * on each one, so nobody types a URL by hand again.
 *
 * NO SERVER, NO API KEY, NO COST, NO TRACKING. This file and pages.js are
 * loaded straight into the browser by /group-reply/index.html and are also
 * require()'d by the Node test scripts, so there is exactly one source of
 * truth and no build step.
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
 * Trimmed 2026-08-30: 262 lines of brand-voice rules, example replies and
 * post-interpreting config were removed when the tool became a link list.
 * They are in git history at commit a46f7b8 if ever wanted back.
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

  /* ---------------------------------------------------------------------
   * VENDOR DIRECTORIES
   * ---------------------------------------------------------------------
   * The keywords are what the search box matches on, so add the words a
   * person would actually type, not just the formal name.
   * ------------------------------------------------------------------- */
  intents: {
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
    { slug: 'fern-oak-estate' },
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

  /* ---------------------------------------------------------------------
   * TRACKING - OFF
   * ---------------------------------------------------------------------
   * Turned off 2026-08-30 at Corey's call: "honestly not worried about trying
   * to track them. I just want a fast way to throw the link."
   *
   * With this false, links are clean:
   *     https://coscelebrations.com/vendors/photographers/
   * With it true, they get ?utm_source=facebook&utm_medium=group&utm_campaign=
   * appended, which is what lets Google Analytics tell you which groups send
   * traffic. The tag never changes the page it points at - it is a label, not
   * part of the page.
   *
   * Flip `enabled` to true if you ever want that back. Nothing else to change.
   * ------------------------------------------------------------------- */
  utm: {
    enabled: false,
    source: 'facebook',
    medium: 'group',
    fallbackCampaign: 'unknown-group',
  },

  /* ---------------------------------------------------------------------
   * EXTRA PAGES - the ones that are not a venue, city, service or vendor
   * ---------------------------------------------------------------------
   * All verified live on both domains 2026-08-30. `on` lists which brands
   * have the page; a page missing from a brand simply does not show a button
   * for it.
   * ------------------------------------------------------------------- */
  extraPages: [
    { label: 'Homepage',            path: '/',                                    on: ['cos', 'ae'], keywords: 'home main front' },
    { label: 'Contact',             path: '/contact/',                            on: ['cos', 'ae'], keywords: 'contact form quote enquiry inquiry' },
    { label: 'Pricing',             path: '/pricing/',                            on: ['cos'],       keywords: 'price prices cost packages' },
    { label: 'Cheap Wedding DJ',    path: '/cheap-wedding-dj/',                   on: ['ae'],        keywords: 'price prices cost cheap budget affordable' },
    { label: 'Areas We Serve',      path: '/areas-we-serve/',                     on: ['cos', 'ae'], keywords: 'areas cities venues locations where map' },
    { label: 'Photo + Video',       path: '/photo-video/',                        on: ['cos', 'ae'], keywords: 'photo video photography videography' },
    { label: 'Jacksonville Venues', path: '/jacksonville-wedding-venues/',        on: ['cos'],       keywords: 'jax jacksonville venues list' },
    { label: 'Pulse! by COS',       path: '/pulse/',                              on: ['cos'],       keywords: 'pulse band live hybrid' },
    { label: 'Our DJs',             path: '/team/djs/',                           on: ['cos'],       keywords: 'team djs staff who people' },
    { label: 'Our Musicians',       path: '/team/musicians/',                     on: ['cos'],       keywords: 'team musicians sax players people' },
    { label: 'Our Team',            path: '/team/',                               on: ['ae'],        keywords: 'team staff who people' },
    { label: 'Preferred Vendors',   path: '/vendors/',                            on: ['cos'],       keywords: 'vendors preferred partners list' },
    { label: 'Questions to Ask a DJ',        path: '/blog/questions-to-ask-a-wedding-dj/',        on: ['cos'], keywords: 'blog questions ask advice' },
    { label: 'What a Jax DJ Costs',          path: '/blog/wedding-dj-cost-jacksonville/',         on: ['ae'],  keywords: 'blog cost price jacksonville jax' },
    { label: 'Questions to Ask a Budget DJ', path: '/blog/questions-to-ask-a-budget-wedding-dj/', on: ['ae'],  keywords: 'blog questions ask advice budget' },
  ],

};
}));
