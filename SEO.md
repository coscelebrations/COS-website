# COS Celebrations & AE Entertainment - Master SEO & Strategy Document
## Last Updated: December 13, 2025

---

## 🚨 RULE #1: SEO & AI OPTIMIZATION COMES FIRST

**Every change to this website must be SEO and AI optimized by default.**

When adding ANY new content, ALWAYS include:
1. **Schema markup** (JSON-LD) - Add to page head for structured data
2. **Full-sentence descriptions** - Hidden or visible, for AI to quote
3. **Title/alt attributes** - On all links and images
4. **Question-based headings** where appropriate - FAQs, sections
5. **No unoptimized images** - WebP only, max 800px content / 1200px hero, under 100KB

Design can be adjusted afterward. SEO/AI cannot be an afterthought.

**Checklist before committing any new feature:**
- [ ] Does it have schema markup if applicable?
- [ ] Are there full sentences AI can quote?
- [ ] Are images optimized (WebP, correct size, under 100KB)?
- [ ] Do links have descriptive title attributes?
- [ ] Is there hidden AI-readable content for stats/lists?

---

## ⚠️ IMPORTANT: This is the ONLY SEO document you need. Delete all others.

---

## 🚀 CURRENT STATE & NEXT STEPS

### Session Startup
**When starting a new session, immediately:**
1. Start local preview server: `cd /Users/coreypeterson/cos-website && python3 -m http.server 8000 --bind 0.0.0.0 &`
2. Confirm running at http://127.0.0.1:8000
3. Review this document for current state and priorities

### Where We Left Off (Dec 13, 2025 - Evening Session)
- Working on **COS static site** (Netlify) - NOT the WordPress site
- All work happens in `/Users/coreypeterson/cos-website/`
- Preview at: https://cool-jelly-73d5c0.netlify.app/
- Local dev server: `python3 -m http.server 8000` then visit http://127.0.0.1:8000

### Session Notes (Dec 13, 2025 - Late Night) - Fountain of Youth & Pricing Cleanup

**New Venue Page Created:**
- `/fountain-of-youth-wedding-dj/` - Full venue page for Fountain of Youth Archaeological Park
- Hero: Cold sparks + live sax photo (Yasmine + Sergio wedding)
- Gallery: 5 photos including ceremony oak trees and pavilion reception
- Testimonial from couple
- Photo credit: Tyler Gets Weird
- Schema markup for venue-specific SEO
- Added featured card on St. Augustine page (with photo)
- Updated Treasury page link to point to new Fountain of Youth page

**New Photos Optimized & Added:**
- `fountain-of-youth-ceremony-oak-trees-st-augustine.webp` (124KB) - outdoor ceremony setup
- `fountain-of-youth-pavilion-reception-st-augustine.webp` (95KB) - pavilion interior

**Pricing Cleanup - Removed Addon Prices:**
- Removed all addon pricing from city pages (Jacksonville, Amelia Island, Ponte Vedra)
- Live Saxophone, Uplighting, Cold Sparks, Photo Booth, Live Piano - no longer show prices
- Only base pricing remains: $1,500-$3,000 weddings, $600 private events
- Keeps pricing flexibility and encourages contact for custom quotes

**Favicon Updated (earlier today):**
- Changed from "COS" text to white saxophone outline on merlot background
- favicon.png (32x32), favicon-64.png (64x64), apple-touch-icon.png (180x180)

**Team Pages Status:**
- `/team/djs/` and `/team/musicians/` exist but NOT in nav yet
- Need: Photo of Corey + Kyle together for leadership section
- Need: Individual headshots and bios for all DJs
- Current photos found: kyle.jpg (Desktop), CoreyWithMic.JPG (Desktop/Corey)

### Session Notes (Dec 13, 2025 - Evening) - Competitor Analysis & New Pages

**AI Search Optimization:**
- Added 3 new FAQ schema questions targeting AI search queries:
  - "Who is the best wedding DJ in Jacksonville Florida?"
  - "Can I have live saxophone with my wedding DJ?"
  - "What is the best wedding entertainment company in St. Augustine?"
- These match how people phrase questions to ChatGPT/Perplexity

**⚠️ CRITICAL: City Pages Need Differentiation (SEO DEBT)**
Currently, Jacksonville and Orlando pages (and likely others) have ~70% duplicate content - same structure, same feature cards, same selling points with just city names swapped. This is hurting SEO.

**Why this happened:** Launched quickly to get pages live - understood and acceptable.

**What needs to happen (when time allows):**
- [ ] Add city-specific wedding photos to each page
- [ ] Add city-specific testimonials from couples married in that city
- [ ] Rewrite feature cards with different angles per city (don't just swap city names)
- [ ] Add unique city-specific content (Jacksonville = river city vibe, Orlando = destination weddings)
- [ ] Each page needs at least 30-40% unique content to avoid duplicate content penalties

**Priority:** Medium-High. Not urgent, but should be addressed within next few weeks to avoid Google filtering pages.

**Competitor Analysis Completed:**
- Reviewed: Curate Entertainment, SCE Event Group, Elegant Music Group
- Key insights applied to COS site

**Homepage Enhancements:**
- **Diagonal section dividers added:** 6 dividers between major sections
  - Mix of rose (soft transitions) and merlot (key sections) accent lines
  - CSS-only, zero performance impact, GPU-accelerated
  - Angles alternate direction for visual rhythm
- **Scroll-triggered fade-in animations:** Added to section headers and card grids
  - Uses IntersectionObserver (native, efficient)
  - Respects `prefers-reduced-motion` for accessibility
  - Staggered delays on card grids (0.1s between items)

**New Team Pages Created (NOT YET IN NAV - waiting for bios/photos):**
- `/team/djs/index.html` — Team page with leadership + DJs
  - Leadership section: Corey (Founder & Lead DJ) + Kyle (Client Services Director)
  - Corey's photo added (sax photo from homepage)
  - DJ grid: Marc, CJ, Noah, Greg (2x2 layout)
  - Placeholder initials for photos not yet added
  - "Bio coming soon" placeholder text
- `/team/musicians/index.html` — Live musicians capabilities (no names to protect vendor network)
  - Solo instruments: Saxophone, Violin, Piano, Guitar, Drums, Trumpet
  - Ensembles: String Duo/Trio, Jazz Trio, Acoustic Duo, Fusion Band
  - Tags showing which part of wedding each suits (Ceremony, Cocktail, Reception)

**Nav Updates:**
- "Our Team" dropdown removed from homepage nav (pages not ready for public)
- Team pages still accessible directly at `/team/djs/` and `/team/musicians/` for preview
- Will add dropdown back when bios/photos complete

**Team Roster (Current):**
- Corey Peterson — Founder & Lead DJ (photo added)
- Kyle — Client Services Director (engaged to Corey, runs company together)
- Marc — DJ
- CJ — DJ
- Noah — DJ
- Greg — DJ & Multi-Instrumentalist (sax, piano)
- *Removed from list:* Ian, Khalil (not current DJs)

**Strategy Decision:**
- AE Entertainment link NOT added to COS site (protects luxury positioning)
- AE links UP to COS (upgrade path), COS doesn't link DOWN to AE
- Couples who need budget option will find AE via search anyway

**TODO When Ready:**
- [ ] Get team headshots (replace initials placeholders)
- [ ] Write real bios for each team member
- [ ] Add "Our Team" dropdown back to nav on all pages
- [ ] Apply diagonal dividers to other pages if desired (homepage only for now)

### Recent Changes (Dec 13, 2025 - Earlier)
- **Accessibility fixes:** Star ratings have `aria-label="5 out of 5 stars"`, carousel arrows labeled
- **New venue page:** Timuquana Country Club (`/timuquana-country-club-wedding-dj/`)
- **11 optimized photos:** From Sara Purdy Photography (Winslow wedding)
  - Location: `/images/timuquana-country-club-wedding/`
  - All WebP, 1200px max, GPS tagged (30.1975, -81.6839), copyright: COS Celebrations
- **Jacksonville page updated:** Timuquana now has featured card with sax photo
- **Contact page:** City names now link to city pages (invisible links)
- **Added .gitignore:** Raw photo folders excluded from git

### Raw Photo Storage (NOT in git)
When photographers send galleries, download to `/images/[venue-name]-wedding/` folder.
Process best shots into `/images/[venue-name]-country-club-wedding/` or similar for site use.
Raw folders are gitignored to keep repo size manageable.

### ✅ SITE IS LIVE! (Dec 10, 2025)
**Domain:** https://coscelebrations.com
**Netlify site:** cool-jelly-73d5c0.netlify.app
**DNS:** Nameservers pointed to Netlify DNS

**Completed:**
- Domain connected via Netlify nameservers in GoDaddy
- SSL certificate auto-provisioned
- Sitemap submitted to Google Search Console
- 301 redirects verified working
- MX records added for Google Workspace email (Dec 12, 2025)

---

## ⚠️ CRITICAL: Email MX Records for Netlify Domains

**When you point nameservers to Netlify, email STOPS WORKING unless you add MX records manually.**

Netlify only handles your website — it doesn't know about your email. You MUST add these records in Netlify DNS settings for any domain using Google Workspace email.

**How to add (Netlify DNS → Add new record → MX):**

| Name | Priority | Value |
|------|----------|-------|
| @ | 1 | ASPMX.L.GOOGLE.COM |
| @ | 5 | ALT1.ASPMX.L.GOOGLE.COM |
| @ | 5 | ALT2.ASPMX.L.GOOGLE.COM |
| @ | 10 | ALT3.ASPMX.L.GOOGLE.COM |
| @ | 10 | ALT4.ASPMX.L.GOOGLE.COM |

**To verify MX records are working:** Go to mxtoolbox.com and enter your domain. You should see the Google servers listed.

---

### SPF Record (prevents spoofing)
Add a TXT record:
| Name | Value |
|------|-------|
| @ | v=spf1 include:_spf.google.com ~all |

---

### DMARC Record (monitors/blocks fake emails)
Add a TXT record:
| Name | Value |
|------|-------|
| _dmarc | v=DMARC1; p=none; rua=mailto:corey@coscelebrations.com |

**Note:** `p=none` is monitoring mode. After a few weeks, change to `p=quarantine` for full protection.

---

**Remember this for:** AE Entertainment (affordable-entertainment.com) when you move it to Netlify!

**Google Search Console:** https://search.google.com/search-console
- Sitemap submitted: `sitemap.xml`
- Expect indexing within 24-48 hours for main pages
- Full SEO impact: 2-4 weeks

### COS Static Site Status
| Page | Status | Cross-Links | Social Links |
|------|--------|-------------|--------------|
| Homepage | ✅ Done | N/A | ✅ |
| Jacksonville | ✅ Done | ✅ | ✅ |
| St. Augustine | ✅ Done | ✅ | ✅ |
| Ponte Vedra | ✅ Done | ✅ | ✅ |
| Amelia Island | ✅ Done | ✅ | ✅ |
| Orlando | ✅ Done | ✅ | ✅ |
| Tampa | ✅ Done | ✅ | ✅ |
| Contact | ✅ Done | N/A | ✅ |
| Pricing | ✅ Done | N/A | ✅ |
| VIP Login | ✅ Done | N/A | ✅ |
| Services/Weddings | ✅ Done | N/A | ✅ |
| Services/Corporate | ✅ Done | N/A | ✅ |
| Services/Private Parties | ✅ Done | N/A | ✅ |
| Treasury on the Plaza | ✅ Done | ✅ | ✅ |
| Lightner Museum | ✅ Done | ✅ | ✅ |
| Epping Forest Yacht Club | ✅ Done | ✅ | ✅ |

### Recent Wins
- Awards section added to homepage (8 awards with elegant badge styling)
- Standalone /pricing/ page created (routes to service categories)
- Services dropdown nav working on all pages
- Corporate & Private Party service pages complete
- Floating CTA button added (appears after scrolling past hero)
- New logo (webp, 14KB) on all pages
- Mobile hamburger menu on all pages
- PageSpeed: 91 mobile, 99 desktop after optimizations
- DJEP form REMOVED from all pages except /contact/ (breaks dropdown nav)
- Dance floor background image added to Homepage CTA, Contact hero

### Dec 12, 2025 Session (Evening) - Header Tagline & Competitor Audit
- **Header Tagline Added:**
  - "Luxury Event Entertainment" centered in nav header
  - Subtle styling (0.75rem, uppercase, soft gray)
  - Hidden on mobile (<900px) to keep header clean
  - Fills empty space between logo and nav links on desktop
- **Christmas Lights Removed:**
  - Tried static placement below hero - didn't render properly
  - Removed CSS and HTML completely for cleaner codebase
- **DataForSEO Competitor Audit (Rob Futrell):**
  - Ran audit on robfutrell.com for comparison
  - Rob's score: 97.9/100 vs COS: 99.01/100
  - Rob's issues: 15 pages no favicon, 15 render-blocking resources, 9 duplicate content, 5 low content rate
  - Key takeaway: COS is ahead on technical SEO
- **Fresh COS Audit:**
  - Re-ran audit after all changes
  - **Score held at 99.01/100** ✅
  - 0 render-blocking resources (async fonts working)
- **PageSpeed Final Scores:**
  - Mobile: 88/88/100/100
  - Desktop: 98/89
  - Acceptable tradeoff for SEO content value

### Dec 12, 2025 Session (Afternoon) - DataForSEO & Performance
- **DataForSEO Setup:**
  - Account created, API credentials obtained
  - Ran first site audit (50 pages crawled, 17 found)
  - **Site Score: 99.01/100**
  - Issues found: 5 titles too long, 10 render-blocking resources, 16 missing image titles
- **Render-Blocking Fonts Fixed:**
  - Added async font loading (`media="print" onload`) to 15 pages
  - Homepage already had this, other pages were blocking
- **Google Index Check via DataForSEO:**
  - 34 pages currently indexed by Google
  - Need to submit: Amelia Island, Epping Forest, Treasury venue pages
  - Old WordPress pages still indexed (may need cleanup later)
- **Performance vs SEO Tradeoff:**
  - Christmas lights removed (25 DOM elements, animations hurt performance)
  - Training card background removed (extra image load)
  - Kept all SEO content (schema, FAQ, awards, press sections)
  - **Final scores: 87/88/100/100** - acceptable tradeoff for SEO value
- **Content Updates:**
  - Southern Bride link updated to actual feature article URL
  - Second Voyage Jacksonville interview added (#2 indicator)
  - "200 events" → "500 events" in FAQ
  - "guest count" → "timeline" in pricing CTA

### Dec 12, 2025 Session (Morning) - AI Search Optimization
- **FAQ Sections Added:**
  - Homepage: 6 comprehensive FAQs covering pricing, differentiation, live musicians, service areas, booking timeline, and preferred venues
  - Weddings page: 5 FAQs covering live instruments, timeline changes, no-cheese approach, music customization, and package inclusions
  - Jacksonville page: Already had inline FAQ section, added FAQPage schema
- **Schema Markup Implemented (JSON-LD):**
  - Homepage: LocalBusiness schema with full company info (address, phone, geo coordinates, social links, service catalog, awards, founder bio, aggregate rating) + FAQPage schema + press articles (subjectOf)
  - Weddings page: Service schema + FAQPage schema
  - Jacksonville page: Service schema for local page + FAQPage schema
- **AI-Readable Stats Added:**
  - Trust bar stats now have title attributes with full sentences
  - Hidden (but crawlable) paragraph section with full-sentence versions of all stats for AI discoverability
- **Meta Description Updated:**
  - Homepage: Changed "$1,400" to "$1,500" to match current pricing
- **CSS Added:**
  - FAQ section styling for Homepage (white background, clean borders)
  - FAQ section styling for Weddings page (soft-pink background, card-style questions)
- **Image Optimization:**
  - Converted all Epping Forest JPGs to WebP (848KB → 113KB, etc.)
  - Converted all Lightner Museum JPGs to WebP
  - Updated all HTML references from .jpg to .webp
  - Deleted original JPG/PNG files to keep repo clean
- **Awards Section Updated:**
  - Added 2 new awards: Best DJ Service (Quality Business Awards), Best Entertainment Company (BusinessRate)
  - Replaced star icons with trophy/medal SVG icons for visual variety
  - Updated schema markup with new awards
- **"As Seen In" / Press Section Added:**
  - Southern Bride, Bold Journey, Voyage Jacksonville (x2), Old City PR
  - Each link has descriptive title attribute
  - Hidden AI-readable paragraphs describing each feature
  - Added press articles to schema markup (subjectOf property)
- **Title Attributes Added to ALL Links:**
  - Audited homepage - found 28 links missing titles
  - Added descriptive titles to nav, CTAs, city links, footer, social icons
- **Weddings Page Nav Fixed:**
  - Added missing VIP Login and Contact links to match homepage nav
- **RULE #1 Added to SEO.md:**
  - "SEO & AI Optimization Comes First" - every change must include schema, full sentences, optimized images, title attributes by default

**Upcoming / TODOs:**
- [ ] Build venue page generator workflow (fast + unique pages)
- [x] Set up DataForSEO for cross-referencing audits ✅
- [ ] Add FAQ schema + sections to remaining city pages
- [ ] Add FAQ schema + sections to venue pages
- [ ] Submit to Google Search Console: Amelia Island, Epping Forest, Treasury pages
- [ ] Clean up old WordPress URLs from Google index (redirects or removal requests)
- [ ] **Create Pinterest Business Account** - High priority for wedding market
  - Create business account (not personal)
  - Claim website for analytics
  - Boards to create: "Jacksonville Weddings", "St Augustine Weddings", "Live Wedding Musicians", "Wedding Reception Ideas", "Wedding Lighting Design"
  - Pin best reception/dance floor photos with keyword-rich descriptions
  - Target 5-10 pins per week initially

**Why These Changes Matter for AI Search:**
- FAQ sections provide direct answers to questions AI models pull from
- Schema markup helps AI understand entity relationships and structured data
- Full sentences (vs. just numbers) give AI quotable, context-rich content
- These same optimizations also improve Google rich results and traditional SEO

**Remaining AI Optimization TODOs:**
- [ ] Add FAQ schema + sections to remaining city pages (St. Augustine, Ponte Vedra, Amelia Island, Orlando, Tampa)
- [ ] Add FAQ schema + sections to venue pages (Treasury, Lightner, Epping Forest)
- [ ] Create About page with clear factual company info when team photos ready
- [ ] Off-site: Ensure consistent NAP across directories, optimize Google Business Profile

---

### Dec 11, 2025 Session (Evening)
- **Epping Forest Yacht Club venue page created:** `/epping-forest-yacht-club-wedding-dj/`
  - 7 photos from Liz & Joel wedding (She Exposure)
  - Featured venue card with photo added to Jacksonville page
  - EXIF credits + visible credit on page
- **Weddings page add-on cards redesigned:**
  - Removed bullet lists, now compact title + one-liner format
  - 3x3 grid layout
  - Split musicians into Ceremony/Cocktail (piano, violin, harp) and Reception (sax, drums, trumpet, full fusion)
  - Removed Photography (will feature elsewhere later)
- **Removed duplicate "View venue page" links** from all venue cards (cleaner, better SEO - no duplicate anchor text)

### Dec 11, 2025 Session (Continued - Afternoon)
- **"Enhance Your Celebration" cards fixed:** Merged "Special Effects" + "Custom Touches" into one card. Now 6 cards (3+3 even layout)
- **Internal links made invisible:** All city cross-links and internal page links now styled as regular text (no merlot color, no underlines, no hover effects). SEO value preserved, but competitors can't see linking strategy at a glance.
  - Updated: Homepage, all 6 city pages, Lightner, Treasury, Epping Forest
- **Lightner photo credits added:**
  - Photographer: The Locke Agency (Lizzy & Hunter wedding)
  - EXIF data updated on all 12 photos
  - Visible credit added to St. Augustine page venue card + Lightner page gallery
- **Treasury URL fixed:** Moved from `/venues/treasury-on-the-plaza/` to `/treasury-on-the-plaza-wedding-dj/` to match old WordPress URL for SEO continuity
  - Updated all internal links pointing to Treasury

### Dec 11, 2025 Session (Morning)
- **Treasury on the Plaza venue page created:** `/treasury-on-the-plaza-wedding-dj/index.html`
  - Links from St. Augustine page (venue card only - single link for SEO best practice)
  - Links from Jacksonville page
- **Lightner Museum venue page created:** `/lightner-museum-wedding-dj/index.html`
  - URL matches old WordPress URL for SEO continuity
  - 12 photos optimized (Lizzy & Hunter wedding)
  - Photographer: The Locke Agency ✅
  - Added photo + link from St. Augustine page venue card
- **Homepage updates:**
  - Trust bar moved above "What Sets Us Apart" section
  - "$1,500 Starting Price" changed to "2,000+ Events Performed"
  - Christmas lights added (brand colors: merlot, rose, gold, blush)
  - "Grammy parties" changed to "The Grammys and Grammy after-parties"
  - "COS Celebrations" added to hero paragraph for SEO
  - **About link removed from nav** (will add back when team content is ready)
- **Favicon added:** SVG with "COS" on merlot background (all pages)
- **Nav updates (all pages):**
  - Removed About link from navigation on all 14 pages
  - Nav now: Services (dropdown) | Pricing | VIP Login | Contact

### TODO for later:
- Create About section with team photos and bios
- Consider better favicon with saxophone graphic
- **SEO improvements (page quality at 90%):**
  - Add schema markup (LocalBusiness, Service, Reviews JSON-LD)
  - Review heading structure (H2/H3 hierarchy)
  - Check alt text on all images

---

## 🤖 AI SEARCH OPTIMIZATION (Priority)

As AI search (ChatGPT, Perplexity, Claude, Google AI Overviews) becomes a major traffic source, we need to optimize for BOTH traditional SEO and AI discoverability. These sometimes require different approaches.

### How AI Search Differs from Traditional SEO
| Traditional SEO | AI Search |
|----------------|-----------|
| Keywords & density | Clear, factual statements |
| Backlinks | Entity recognition (consistent mentions across web) |
| Technical optimization | Direct answers to questions |
| Meta descriptions | Schema markup & structured data |
| Click-through optimization | Reputation signals (reviews, awards, credentials) |

### What AI Models Pull From
1. **Structured, factual content** - Clear statements: "COS Celebrations is a Jacksonville wedding DJ company that has performed at over 2,000 events"
2. **Entity recognition** - Consistent mentions across reviews, directories, social, press
3. **Direct answers** - Content that reads like it's answering a question
4. **Schema markup** - Helps AI understand what you are and what you offer
5. **Reputation signals** - Reviews, awards, credentials stated plainly on site

### Action Items for AI Optimization

**On-site (HIGH PRIORITY):**
- [x] Add FAQ sections to key pages (naturally answers questions AI might be asked) ✅ Dec 12 - Homepage, Weddings, Jacksonville
- [x] Implement comprehensive schema markup (LocalBusiness, Organization, Service, Review JSON-LD) ✅ Dec 12 - Homepage, Weddings, Jacksonville
- [x] Rewrite key stats as full sentences: "COS Celebrations has performed at over 2,000 events" not just "2,000+ Events" ✅ Dec 12 - Hidden AI-readable section + title attributes
- [ ] Add About page with clear, factual company info (founding story, credentials, service area, touring history) - waiting for team photos
- [x] Use question-based headings where natural ("Why choose a DJ with live musicians?") ✅ Dec 12 - FAQ headings are question-based
- [x] Provide direct, quotable answers in first sentence after each heading ✅ Dec 12 - FAQ answers start with direct, quotable statements

**Off-site:**
- [ ] Ensure consistent NAP (Name, Address, Phone) across all directories
- [ ] Fully optimize Google Business Profile
- [ ] Get mentioned/reviewed on wedding blogs, The Knot, WeddingWire
- [ ] Any press or features help AI "trust" COS as an entity

### When SEO and AI Optimization Conflict
Sometimes we'll need to make trade-off decisions:
- **Keyword density vs. natural language** → Lean toward natural (helps both, but AI prefers it)
- **Short punchy copy vs. complete sentences** → Use both: punchy headlines, complete sentences in body
- **Internal link anchor text** → Keep invisible styling but ensure descriptive text (helps both)
- **Schema markup** → Always add it (helps both significantly)

**General rule:** If it reads like a clear, authoritative answer a human would give, it works for both.

---

### Dec 10, 2025 Session
- **Orlando city page created:** `/orlando-wedding-dj/index.html`
  - Venues: Bella Collina, Country Club of Orlando, Paradise Cove, Cypress Grove Estate House, Bella Cosa, Lake Nona Wave Hotel
- **Tampa city page created:** `/tampa-wedding-dj/index.html`
  - Venues: The Orlo House, Armature Works, The Estate, Don CeSar, The Ringling Ca' d'Zan
- **Social links added to ALL pages** (footer: IG/FB/TikTok/YouTube)
- **SEO files created:**
  - `sitemap.xml` - all 13 pages with priority levels
  - `robots.txt` - allows all, points to sitemap
  - `_redirects` - 301 redirects from old WordPress URLs
- **301 Redirects configured:**
  - /contacts/ → /contact/
  - /wedding-dj-pricing/ → /pricing/
  - /services/luxury-weddings/ → /services/weddings/
  - /services/corporate-events-private-party/ → /services/corporate/
  - /services/additional-add-ons/ → /services/weddings/
  - /our-team/ → /
  - /category/blog/ → /
- **Performance optimizations:**
  - Google Fonts load async (media="print" trick)
  - System font fallbacks for instant text display
  - Hero background compressed 191KB → 43KB (77% reduction)
  - CTA background compressed 74KB → 54KB
  - `fetchpriority="high"` on critical image preloads
  - Mobile PageSpeed improved to 91 (green)
- **Homepage improvements:**
  - Bold "scan points" added to hero paragraph for skimmers
  - `.hero-subtitle strong` styled with font-weight: 600 + charcoal color
- **Weddings page:**
  - New Fountain of Youth cold sparks photo added
  - Pricing section rewritten (cleaner, less salesy)
- **New images added:** 14 Fountain of Youth wedding photos (Yasmine + Sergio)
  - Photographer: Tyler Gets Weird
  - All geotagged to Fountain of Youth, St. Augustine
  - Optimized: ~53MB → ~835KB total

### Dec 9, 2025 Session (Continued)
- **VIP Login page created:** `/vip-login/index.html`
  - Styled DJEP login form (merlot header, soft-pink body)
  - Added VIP Login to nav on ALL pages
- **Contact form restyled:**
  - Replaced JavaScript embed with inline HTML for custom styling
  - Full venue dropdown (~250 venues) - shows market presence
  - Deferred DJEP validation script to bottom of page for better mobile performance
  - Added fallback validation in case external script fails
- **Reviews carousel redesigned:**
  - Slimmed down from bulky hover-expand cards to compact quote format
  - Stars + short quote + author/DJ inline
  - Arrow navigation added alongside dots
  - 9 best quotes selected from original 13
- **Hero section updated:**
  - Changed from standalone sax image below text to background image underlay
  - Using `packed-wedding-dance-floor-st-augustine-dj.webp` from Treasury wedding
  - Soft pink/cream gradient overlay (85-88% opacity) for text readability
  - More modern look, less "boxy"
- **Social media links added:**
  - Footer: Instagram, Facebook, TikTok, YouTube (SVG icons)
  - Hero: Instagram icon + @coscelebrations below CTA buttons
  - All links: `target="_blank" rel="noopener"` for security
- **Social URLs:**
  - Instagram: https://instagram.com/coscelebrations
  - Facebook: https://facebook.com/coscelebrations
  - TikTok: https://tiktok.com/@coscelebrations
  - YouTube: https://youtube.com/@coscelebrations
- **Key learnings:**
  - DJEP JavaScript embeds can't be styled (Bootstrap CSS override)
  - Solution: Use inline HTML form code instead of JS embed
  - Always defer external scripts when possible
  - Social links help E-E-A-T (shows established business)
  - CSS background images don't need alt text but lose SEO value - fine for decorative use

### Dec 9, 2025 Session (Earlier)
- **Treasury wedding photos added:** 12 photos from Jeanette+Dean wedding (Walls of Jericho Photography)
  - Geo-tagged originals with exiftool (Treasury on the Plaza coordinates)
  - Optimized WebP versions in `/images/treasury-wedding-st-augustine/`
- **St. Augustine page:** Added Treasury venue photo (grand entrance from vault with monogram), hero background (Bridge of Lions)
- **Homepage:** Added Corey MC photo as underlay on "MCs Who Lead" card, Corey sax photo on "Musician's Ear" card
- **Pricing consistency:** Removed specific dollar amounts from add-ons, updated to "Couples typically invest $1,500-$3,000+"
- **Mobile fix:** Fixed "Start the Conversation" button overlap on homepage
- **New images:**
  - `corey-peterson-wedding-dj-mc-river-house-st-augustine.webp` (43KB, Bow Tie Photography)
  - `corey-peterson-saxophone-ceremony-hammock-beach.webp` (70KB, Natalie Jeans Photography)
  - `bridge-of-lions-wedding-portrait-st-augustine.webp` (68KB, hero background)

### Priority Next Steps
1. ✅ ~~LAUNCH: Connect coscelebrations.com domain~~ **DONE**
2. ✅ ~~Submit sitemap to Google Search Console~~ **DONE**
3. **Monitor Google Search Console** for indexing progress
4. **Build page generator script** (questionnaire → auto-generates HTML)
5. **Create venue pages:** River House, Timuquana, Epping Forest, etc.
6. **Favicons** for both COS and AE sites
7. **Final performance pass** (self-host fonts, critical CSS) if needed

### Key Rules to Remember
- DJEP forms ONLY on /contact/ page (kills PageSpeed elsewhere)
- Every city page needs "Also Serving" section with links to OTHER cities
- One internal link per page (first mention only)

### Image Optimization Rules (ALWAYS FOLLOW)
When adding ANY image to the site, automatically optimize before use:
| Use Case | Max Width | Max File Size | Format |
|----------|-----------|---------------|--------|
| Content/card images | 800px | 100KB | WebP |
| Hero/background images | 1200px | 150KB | WebP |
| Thumbnails | 400px | 50KB | WebP |

**Checklist for every image:**
1. Convert to WebP format
2. Resize to appropriate max width (see table)
3. Compress to target file size (quality 80-85)
4. Use SEO-friendly filename with keywords (e.g., `treasury-wedding-dj-st-augustine.webp`)
5. Add descriptive alt text with location + service keywords
6. Add `loading="lazy"` attribute (except hero images)
7. Credit photographer if known

**Python snippet for quick optimization:**
```python
from PIL import Image
img = Image.open('input.jpg')
max_width = 800  # adjust per use case
if img.width > max_width:
    ratio = max_width / img.width
    img = img.resize((max_width, int(img.height * ratio)), Image.LANCZOS)
img.save('output.webp', 'WEBP', quality=82)
```

### Images Currently in Use
| Image | Size | Location |
|-------|------|----------|
| cos-celebrations-logo.webp | 14KB | All pages (nav) |
| corey-peterson-jacksonville-wedding-dj-saxophone.webp | 50KB | Homepage hero |
| lightner-museum-wedding-dance-floor-st-augustine.webp | 74KB | Homepage CTA, Contact hero |
| corey-peterson-wedding-dj-mc-river-house-st-augustine.webp | 43KB | Homepage MC card (underlay) |
| corey-peterson-saxophone-ceremony-hammock-beach.webp | 70KB | Homepage Sax card (underlay) |
| wedding-grand-entrance-uplighting-treasury.webp | 56KB | St. Augustine page (Treasury venue) |
| bridge-of-lions-wedding-portrait-st-augustine.webp | 68KB | St. Augustine page (hero background) |

### Treasury Wedding Photo Library (Staged)
Location: `/images/treasury-wedding-st-augustine/`
Photographer: Walls of Jericho Photography
All optimized to 800px width, WebP format.

| File | Size | Best Use |
|------|------|----------|
| treasury-on-the-plaza-wedding-venue-st-augustine.webp | 228K→optimized | St. Aug page - venue exterior |
| st-augustine-plaza-wedding-party-spanish-moss.webp | 691K→optimized | St. Aug page - iconic location |
| bridge-of-lions-wedding-portrait-st-augustine.webp | 182K→optimized | St. Aug page - landmark |
| wedding-dj-monogram-lighting-treasury-st-augustine.webp | 117KB | DJ services - shows lighting |
| wedding-grand-entrance-uplighting-treasury.webp | 56KB | **IN USE** - St. Aug page |
| wedding-reception-dance-floor-uplighting-st-augustine.webp | optimized | DJ services - party vibe |
| packed-wedding-dance-floor-st-augustine-dj.webp | optimized | DJ services - energy |
| bride-dancing-monogram-projection-treasury.webp | optimized | DJ services - monogram |
| sparkler-exit-wedding-st-augustine.webp | optimized | Homepage/hero option |
| couple-portrait-treasury-on-the-plaza-window.webp | optimized | Homepage/gallery |
| wedding-couple-silhouette-treasury-st-augustine.webp | optimized | Hero/artistic |
| bride-groom-treasury-lobby-st-augustine.webp | optimized | Venue showcase |

---

## BUSINESS OVERVIEW - TWO BRANDS

### COS Celebrations (Luxury Brand)
**Owner:** Corey Peterson
**Location:** St. Augustine, FL (home base)
**Phone:** 904-615-7132
**Website:** coscelebrations.com (WordPress - LIVE, don't touch until migration)
**New Static Site:** /Users/coreypeterson/cos-website/ (active development)
**Netlify Preview:** https://cool-jelly-73d5c0.netlify.app/ (static site deployed, not yet connected to domain)

⚠️ **IMPORTANT: Two separate sites exist for COS:**
1. **WordPress (coscelebrations.com)** - Live, working great, SEO already optimized. Leave it alone.
2. **Static site (Netlify)** - Where we're building the new site. All current work happens here.

When ready to switch: Connect coscelebrations.com domain to Netlify + set up 301 redirects.

**Positioning:** Luxury wedding entertainment with world-class musicianship
**Tagline:** "It's Not About Us - It's YOUR Event"
**Colors:** Merlot/pink/cream (elegant, upscale)
**Target Audience:** Couples seeking premium experience, luxury venues
**Starting Price:** $1,500 (Essential package)
**Key Differentiator:** DJ + live musicians (sax, piano), touring experience with major artists

---

## COS STATIC SITE LAUNCH CHECKLIST (Before Switching from WordPress)

⚠️ IMPORTANT: When switching coscelebrations.com from WordPress to the new static site, we need to preserve SEO rankings by setting up 301 redirects.

### Pre-Launch Steps:
1. List all current WordPress URLs that rank or get traffic (check Google Search Console)
2. Map each old URL to its new static site URL
3. Add 301 redirects to Netlify's _redirects file for any URLs that changed
4. Test redirects on Netlify preview before going live

### Example redirect format (for _redirects file):
```
/jacksonville-wedding-dj-services/ /jacksonville-wedding-dj/ 301
/old-page-url/ /new-page-url/ 301
```

### Post-Launch Steps:
1. Submit new sitemap to Google Search Console
2. Monitor Search Console for 404 errors
3. Fix any broken redirects immediately

### Why This Matters:
Launching with 50+ pages is GOOD (signals substantial site). But broken URLs = lost rankings. Redirects transfer the SEO "credit" from old pages to new pages.

---

### AE Entertainment (Budget-Friendly Sister Brand)
**Owner:** Corey Peterson (same owner as COS)
**Location:** St. Augustine, FL (same base)
**Phone:** 904-377-8627 (DIFFERENT from COS)
**Websites:**
- ae-djs.com (PRIMARY - shorter, brandable)
- affordable-entertainment.com (redirects to ae-djs.com)
**Static Site:** /Users/coreypeterson/ae-entertainment/ (local dev)

**Positioning:** Quality wedding DJ without premium pricing
**Tagline:** "Great DJ. Beautiful Wedding. No Cheese."
**Colors:** Blue/white (clean, professional, approachable)
**Target Audience:** Budget-conscious couples, value seekers
**Starting Price:** $800 (Reception package)
**Key Differentiator:** Honest pricing, no upselling, straightforward service

**Service Areas (Both Brands - No Travel Fee):**
- St. Augustine (home turf)
- Jacksonville
- Ponte Vedra Beach
- Amelia Island

**Service Areas (Both Brands - Travel Fee May Apply):**
- Orlando
- Tampa

---

## BRAND DIFFERENTIATION STRATEGY (CRITICAL!)

### ⚠️ How to Avoid Cannibalization

**The Challenge:** Both brands serve same areas, similar services → risk competing against ourselves in search results

**The Solution:** Clear positioning + keyword differentiation + cross-referencing

### Keyword Strategy by Brand

**COS Celebrations targets:**
- "luxury wedding dj [city]"
- "wedding dj + live musicians [city]"
- "premium wedding entertainment [city]"
- "live saxophone wedding [city]"
- Venue-specific: "wedding dj [premium venue name]"
- Price qualifiers: "wedding dj $1500+" or avoid price in content

**AE Entertainment targets:**
- "affordable wedding dj [city]"
- "budget wedding dj [city]"
- "wedding dj under $1000 [city]"
- "cheap wedding dj [city]" (reclaim this keyword positively)
- Price qualifiers: prominently display "$800" in titles/descriptions

### Content Differentiation

**COS Celebrations content focuses on:**
- Touring experience with major artists
- World-class musicianship
- Luxury venues and preferred vendor status
- Live performance capabilities
- "Concert-level experience"
- Elegance, sophistication, premium service

**AE Entertainment content focuses on:**
- Value and affordability
- Straightforward, honest service
- "No cheese, no upselling, no surprises"
- Quality without premium price tag
- Budget-conscious couples
- Simple, reliable entertainment

### Cross-Referencing Strategy

**On COS site:**
- NO mention of AE Entertainment (don't dilute luxury positioning)
- Focus entirely on premium experience

**On AE site:**
- Small footer mention: "Looking for luxury entertainment with live musicians? Visit our sister company COS Celebrations"
- Provides upgrade path for couples whose budget increases
- Captures both markets without brand confusion

### Meta Title/Description Patterns

**COS Celebrations:**
- "Luxury Wedding DJ + Live Musicians | [City]"
- "[City] Wedding DJ with Live Saxophone | Premium Entertainment"

**AE Entertainment:**
- "Affordable Wedding DJ [City] | Starting at $800"
- "Budget-Friendly Wedding DJ [City] | Quality Service, Fair Pricing"

### Why This Works

1. **Different search intent** - luxury seekers vs. budget seekers rarely overlap
2. **Clear price separation** - $1500+ vs $800 serves different markets
3. **Content doesn't compete** - different keywords, different angles
4. **Upgrade path exists** - AE can refer to COS if needed
5. **Same owner benefits** - you win either way, capture both market segments

---

## COMPETITOR NAME SEO STRATEGY

### The Approach:
Corey has performed live saxophone alongside DJs from other Jacksonville wedding DJ companies (RJM, JHP) at real events. This genuine experience can be mentioned naturally on the site to potentially capture some of their search traffic.

### Why It's Safe:
- It's 100% true — Corey actually performed with these companies
- Not implying affiliation or endorsement
- Natural context (his experience/credentials)
- Adds credibility to COS brand
- SEO experts confirm mentioning competitors in content for context is allowed if honest and transparent

### How to Use It:
- One or two natural mentions only (not a whole page about them)
- Example sentence for About page or bio:
  "Corey has performed live saxophone alongside DJs from top Jacksonville companies like RJM Entertainment and JHP, bringing that same world-class energy to every COS Celebrations event."
- Keep it subtle — this is about credentials, not comparison

### What NOT to Do:
- Don't create comparison pages ("COS vs RJM")
- Don't imply they endorse or are affiliated with COS
- Don't overdo it — one mention is enough

---

## UNIQUE VALUE PROPOSITIONS

- Professional touring saxophonist (performed with Usher, Alicia Keys, T-Pain, Red Hot Chili Peppers, Big Gigantic, Slightly Stoopid across 35+ countries)
- Pioneered DJ + Live Saxophone combo in Southeast
- "It's not about us, it's YOUR event" philosophy (no-ego approach)
- NACE board member
- Southern Bride Magazine "Trendsetters" recognition
- Jacksonville Magazine "Best Wedding DJ Company"
- COS Music + Timeline App (exclusive planning platform)
- 500+ five-star reviews across Wedding Wire, The Knot, Google

---

## CURRENT BRANDING

**Site Name:** COS Celebrations - Wedding DJ Jacksonville, Saint Augustine, Ponte Vedra
**Tagline:** Luxury Event Entertainment
**Colors:** Soft pink with merlot/magenta accents
**Philosophy:** "It's Not About Us - It's YOUR Event"

---

## PRICING STRUCTURE

**Package 1 - Deluxe:** $1,500
- 4 hours
- DJ/MC
- No lighting included

**Package 2 - Complete Wedding:** $1,900
- 5 hours
- Includes ceremony

**Package 3 - Premium Value:** $2,400
- 5 hours
- Ceremony included
- Choose 2 add-ons

**Add-Ons:**
- Live Saxophone: $500
- Additional Musicians: $400-600+
- Intelligent Uplighting: $500
- Moving Head Lights: $400
- Dance Floor Tube Lights: $350
- Cold Sparks (2): $500 / (4): $750
- Photo Booth: $500
- 360 Video Booth: $750
- Audio Guest Book: $350
- Video Guest Book: $450
- Professional Live Streaming: $600
- Custom Monogram: $250
- Extra hours: $250/hour after 5th hour
- Off-site ceremony: Additional $100

---

## ROB'S SEO FRAMEWORK (What We're Following)

This strategy is based on Rob Futrell's proven SEO approach for his photography business. Here are the key principles we're applying:

### Core Strategy Elements:

1. **Revenue Priority Order**
   - Focus on highest revenue services first
   - For COS: Wedding DJ + Sax → Wedding DJ → Corporate → Private Parties

2. **Keyword Cannibalization Fixes**
   - ONE page per keyword target
   - If multiple pages compete for same keyword, redirect the weaker ones to the main page
   - Example: Rob redirected 5 competing blog posts to his main elopement page

3. **Content Depth Strategy**
   - 200+ word keyword-rich opening paragraph on EVERY service page
   - Multiple H2 sections targeting long-tail keywords
   - One H1 per page (main title)
   - Multiple H2s for sections

4. **Singular vs Plural Keywords**
   - Match what people actually search
   - "Wedding DJ" not "Wedding DJs"
   - Check Google Search Console for actual search terms

5. **Schema Markup**
   - LocalBusiness schema for rich results
   - Review schema for star ratings in search
   - Event schema for weddings (future)

6. **Internal Linking**
   - Link TO a page only once per page (first mention)
   - Cross-link all city pages to each other
   - Link venue mentions to venue pages
   - This is NOT cannibalization - it makes pages stronger

7. **301 Redirects for Old/Competing Content**
   - When you have old blog posts competing with main pages, redirect them
   - Consolidates authority to one strong page

---

## TECHNICAL SEO SPECS (Pixel Limits)

These are the technical limits for meta data. Google displays based on pixel width, not character count.

### Title Tags
- **Max width:** 580 pixels
- **Ideal length:** 50-60 characters (depends on letter width)
- **Format:** Primary Keyword + Location | Price or Brand
- **Example:** "Affordable Wedding DJ Jacksonville | $800"

### Meta Descriptions
- **Max width:** 1000 pixels
- **Ideal length:** 120-155 characters
- **Must include:** Primary keyword, location, price ($800), call to action
- **Example:** "Budget-friendly wedding DJ in Jacksonville & St. Augustine. Starting at $800. No hidden fees, no cheese."

### Canonical Tags
- **Required on every page** - points to your primary domain
- **Format:** `<link rel="canonical" href="https://ae-djs.com/page-url/">`
- **Why:** Prevents duplicate content issues between www/non-www and Netlify subdomains

### WWW Redirects
- Use `_redirects` file in Netlify to 301 redirect www → non-www (or vice versa)
- Pick one and stick with it - we use non-www (`ae-djs.com`)
- Also redirect `affordable-entertainment.com/*` → `ae-djs.com/:splat` (preserves URL paths)

### What to Ignore in SEObility
- Social sharing plugins - not needed for service businesses
- Duplicate anchor text - normal for nav/footer/CTA buttons
- Backlinks count - builds over time, can't fix in code
- Response time 0.4 vs 0.42 seconds - negligible difference

### DJEP Form Limitations (CRITICAL)
⚠️ **DO NOT add DJEP forms to any page except /contact/**

**Why:**
- DJEP scripts use `document.write()` which is render-blocking
- Adding DJEP form to homepage dropped PageSpeed from 90s → 70s
- Also dropped Accessibility from 99 → 84
- Cannot be lazy loaded (document.write only works during initial page parse)

**Solution:**
- Keep DJEP form ONLY on /contact/ page
- Use floating CTA button + styled buttons linking to /contact/ on other pages
- This maintains 90s+ performance and 99 accessibility

### ⚠️ DJEP Scripts Break Nav Dropdowns (CRITICAL - NO FIX POSSIBLE)

**Problem Discovered (Dec 8, 2025):**
- DJEP scripts break the Services dropdown menu on any page they're on
- Dropdown would flash briefly then disappear
- Issue: DJEP JavaScript uses `document.write()` which manipulates DOM and interferes with dropdown functionality

**Symptoms:**
- Dropdown CSS shows element briefly on page load, then disappears
- Hover doesn't work on pages with DJEP forms
- Works fine on pages without DJEP forms

**Attempted Fix (FAILED):**
- Tried lazy loading DJEP scripts using `window.addEventListener('load', ...)`
- This fixed the dropdown BUT broke the form completely
- Reason: `document.write()` only works during initial page parse, not after page load

**FINAL SOLUTION:**
⚠️ **DJEP forms can ONLY exist on /contact/ page**
- All other pages must use CTA buttons linking to /contact/
- There is no way to have DJEP forms and working dropdown nav on the same page
- This is a fundamental limitation of DJEP's use of `document.write()`

**Implementation:**
```html
<!-- On corporate/private party pages, use this instead of DJEP form: -->
<a href="/contact/" class="cta-btn">Request a Quote</a>
```

**Pages with CTA buttons (no DJEP):**
- /services/corporate/index.html ✅
- /services/private-parties/index.html ✅
- Any future service pages

**Page with DJEP form (only one):**
- /contact/index.html ✅ (dropdown nav works here because no conflict)

### Future Technical Tasks
- [ ] Add favicon (32x32 .ico or .png)
- [ ] Add Apple touch icon (180x180 .png)

---

## CITY PAGE RULES (Avoid Duplicate Content)

⚠️ **Why This Matters:** Google penalizes sites with near-identical pages that just swap city names. Each city page must have genuinely unique content.

### What MUST Be Unique on Each City Page:

1. **Opening paragraph (200+ words)** - Write fresh for each city. Don't copy/paste and swap "[CITY]"
2. **Venue section** - Only list venues YOU'VE ACTUALLY WORKED in that city
3. **City-specific angle** - What makes this city different?
   - St. Augustine → "We're based here, no travel fees, local expertise"
   - Ponte Vedra → "Elegance, exclusivity, TPC preferred status"
   - Jacksonville → "Biggest market, variety of venues"
   - Amelia Island → "Island destination, Ritz-Carlton, Omni"
   - Orlando → "Travel fee applies, theme park area, destination weddings"
   - Tampa → "Travel fee applies, waterfront venues"
4. **FAQs** - Include at least 1-2 city-specific questions

### What CAN Be Similar (But Vary the Wording):

- Pricing info (same prices, but phrase differently)
- Services descriptions (rewrite, don't copy)
- Bio/credentials (use different highlights each time)
- CTAs and contact info

### Template Phrases to AVOID Repeating Exactly:

Instead of copying these across every page, rewrite them fresh each time:
- ❌ "Our founder has toured 35+ countries and shared the stage with..."
- ❌ "the energy of a live concert combined with the precision of a professional DJ"
- ❌ "We pioneered the DJ + live musician model in North Florida"

Use the same IDEAS but different WORDS on each page.

---

## INTERNAL LINKING RULES (For Claude Code)

⚠️ **Internal linking makes pages STRONGER, not weaker.** It's NOT cannibalization. But there are rules.

### The Golden Rules:

1. **Link to each page only ONCE per page** (first mention only)
2. **Every city page links to all other city pages** in the "Also Serving" section
3. **Link venue mentions to venue pages** (if the venue page exists)
4. **All pages should link to homepage and contact page**

### Internal Linking Checklist for City Pages:

```
Each city page should have:
✅ Link to homepage (via logo)
✅ Link to /contact/ (nav + CTA buttons)
✅ Link to /#pricing (nav or in content)
✅ Links to ALL other city pages (in "Also Serving" section)
✅ Links to venue pages for venues mentioned (if venue page exists)
```

### Example - Jacksonville Page Links:

```html
<!-- In content (first mention only): -->
<a href="/st-augustine-wedding-dj/">St. Augustine</a>

<!-- In "Also Serving" section: -->
<a href="/st-augustine-wedding-dj/">St. Augustine</a>
<a href="/ponte-vedra-wedding-dj/">Ponte Vedra</a>
<a href="/amelia-island-wedding-dj/">Amelia Island</a>
<a href="/orlando-wedding-dj/">Orlando</a>
<a href="/tampa-wedding-dj/">Tampa</a>

<!-- Venue links (if page exists): -->
<a href="/treasury-on-the-plaza-wedding-dj/">Treasury on the Plaza</a>
```

### What IS Cannibalization (Avoid This):

- ❌ Two pages targeting the exact same keyword (e.g., two "Jacksonville wedding DJ" pages)
- ❌ Blog posts competing with main city pages for the same search term

### What is NOT Cannibalization (This is Fine):

- ✅ Linking between city pages
- ✅ Mentioning other cities on a city page
- ✅ Footer links to all city pages
- ✅ "Also Serving" sections

---

### What Rob's Success Looked Like:
- Elopement page went from position 48 → climbing after fixes
- Wedding page expected to go from position 23 → position 10-12 within 8-12 weeks
- Courthouse page at position 11 (best performing)

### Timeline Expectations:
- **Weeks 1-2:** Google crawls and discovers changes
- **Weeks 3-4:** Small position movement
- **Months 2-3:** Substantial gains
- **Months 4-6:** Top positions possible

---

## SEO KEYWORDS (Monthly Search Volume)

### High Intent / High Volume:
| Keyword | Volume | Competition |
|---------|--------|-------------|
| wedding dj near me | 8,100 | High |
| wedding dj | 14,800 | High |
| dj for wedding | 14,800 | High |
| wedding dj cost | 4,400 | Medium |
| wedding dj services | 3,600 | High |
| wedding dj prices | 1,000 | Medium |

### Local Keywords:
| Keyword | Volume | Competition |
|---------|--------|-------------|
| jacksonville wedding dj | 110 | Medium |
| st augustine wedding dj | 90 | Low |
| orlando wedding dj | — | Medium |
| ponte vedra wedding dj | 20 | Low |
| amelia island wedding dj | 10 | Low |

**Important:** Always use "St. Augustine" (with period) - gets 4x more searches than without

### Search Intent Breakdown:
- **"Near me" searches (8,100/mo):** Optimize Google Business Profile, location pages
- **Price searches (5,400/mo):** Transparent pricing page captures these
- **Venue-specific searches:** Create venue pages - very high conversion rate

---

## VENUE RELATIONSHIPS

**Top Preferred Vendor:**
- TPC Sawgrass (Ponte Vedra) - TOP preferred for entertainment/DJs

**Preferred Vendor Status:**
- Treasury on the Plaza (St. Augustine)
- Lightner Museum (St. Augustine)
- The White Room (St. Augustine)
- River House (St. Augustine)
- Timuquana Country Club (Jacksonville)
- Epping Forest Yacht Club (Jacksonville)
- Ponte Vedra Inn & Club
- Ponte Vedra Lodge
- Ritz-Carlton Amelia Island
- 9 Aviles (partnership venue)
- Marsh Creek Country Club
- 20+ total venues

---

## TEAM MEMBERS

**Current Active Team (Dec 2025):**
- Corey Peterson (Founder/Lead DJ/Saxophonist)
- Kyle (Client Services Director - engaged to Corey, runs company together)
- Marc (DJ)
- CJ (DJ)
- Noah (DJ)
- Greg (DJ/Saxophonist/Pianist)

**No longer with COS:**
- Ian (removed Dec 2025)
- Khalil (removed Dec 2025)

---

## SEO PAGES - COMPLETED ✅

### City Pages (All Live & Published)

| Page | URL | Status |
|------|-----|--------|
| Jacksonville | /jacksonville-wedding-dj/ | ✅ Live, Submitted to Google |
| Orlando | /orlando-wedding-dj/ | ✅ Live, Submitted to Google |
| St. Augustine | /st-augustine-wedding-dj/ | ✅ Live, Submitted to Google |
| Tampa | /tampa-wedding-dj/ | ✅ Live, Submitted to Google |
| Ponte Vedra | /ponte-vedra-wedding-dj/ | ✅ Live, Submitted to Google |
| Amelia Island | /amelia-island-wedding-dj/ | ✅ Live, Submitted to Google |

### Venue Pages (Live & Published)

| Page | URL | Status |
|------|-----|--------|
| Treasury on the Plaza | /treasury-on-the-plaza-wedding-dj/ | ✅ Live, Submitted to Google |
| TPC Sawgrass | /tpc-sawgrass-wedding-dj/ | ✅ Live, Submitted to Google |
| Lightner Museum | (URL TBD) | ✅ Live, needs Google submission |
| The White Room | /the-white-room-wedding-dj/ | ✅ Ready to publish |
| Ritz-Carlton Amelia Island | /ritz-carlton-amelia-island-wedding-dj/ | ✅ Ready to publish |

### Other Key Pages

| Page | URL | Status |
|------|-----|--------|
| Homepage | / | ✅ Live, Submitted to Google |
| Pricing | /wedding-dj-pricing/ | ✅ Live, Submitted to Google |
| Weddings | /services/luxury-weddings/ | ✅ Live |

---

## GOOGLE SEARCH CONSOLE

**Status:** ✅ Verified & Active (as of Nov 27, 2025)
**Verification Method:** HTML tag via WPCode plugin

**Pages Submitted for Indexing:**
- Homepage ✅
- Jacksonville ✅
- Orlando ✅
- St. Augustine ✅
- Tampa ✅
- Ponte Vedra ✅
- Amelia Island ✅
- Pricing ✅
- TPC Sawgrass ✅
- Treasury on the Plaza ✅

**Still Need to Submit (hit daily quota Nov 27):**
- Lightner Museum page
- Blog posts
- Any other new pages

---

## TECHNICAL SETUP

**Platform:** WordPress
**Page Builder:** Elementor
**SEO Plugin:** Yoast SEO (free version)
**Speed/Cache:** SG Cache
**Header Code Plugin:** WPCode (Insert Headers and Footers)
**Design Tool:** Figma AI

**Footer Location:** Theme Builder (Templates → Theme Builder → Footer)

**City Page Format:** HTML blocks with consistent styling

---

## FUTURE: PAGE GENERATOR SCRIPT

**Status:** Planned (not built yet)

**What it does:**
- Run a script in terminal
- Answer questions about the venue/city
- Automatically generates SEO-optimized HTML page

**Venue Page Questions:**
1. Venue name?
2. City?
3. Are you a preferred vendor? (y/n)
4. Top preferred vendor? (special badge)
5. Ceremony locations? (lawn, ballroom, terrace, etc.)
6. Cocktail hour location?
7. Reception space details?
8. Any special moments? (vault entrance, reveal, room flip, etc.)
9. How many weddings have you done there?
10. Starting price for this venue?

**City Page Questions:**
1. City name?
2. Which brand? (COS or AE)
3. Key venues in this city?
4. Travel fee? (y/n)
5. Any special notes about the area?

**Output:**
- Complete HTML file with:
  - SEO title and meta description
  - 200+ word keyword-rich intro (generated from answers)
  - Proper H1/H2 structure
  - Internal links to other city pages
  - Canonical tag
  - Mobile hamburger menu
  - Matching brand styles (merlot/pink for COS, blue/white for AE)

**Why this matters:**
- Consistency across all pages
- No forgetting SEO elements
- Faster page creation
- Less copy/paste errors

---

## CONTENT GUIDELINES

### Always Include:
- "Wedding DJ" (not just "DJ" or "entertainment")
- "DJ + Live Musicians" or "DJ + Saxophone"
- Pioneer status when relevant
- Venue name drops for local relevance
- "No-ego approach" as differentiator
- Price starting point ($1,400)

### Page Structure (Following Rob's Framework):
- **One H1 per page** (main title with primary keyword)
- **200+ word opening paragraph** (keyword-rich, answers search intent)
- **Multiple H2 sections** (target long-tail keywords)
- **Internal links** (link to related pages, venues, pricing)
- **Real venue details** (don't make stuff up)

### Internal Linking Rules:
- Link to each page only ONCE per page (first mention)
- Cross-link all city pages ("Also serving...")
- Link venue mentions to venue pages
- All pages should link to pricing page
- This strengthens pages - NOT cannibalization

### City Page Cross-Linking Pattern (REQUIRED)

Every city page MUST have an "Also Serving" section near the bottom with links to ALL OTHER city pages (not itself).

**Example for Jacksonville page:**
```html
<p><strong>Also Serving:</strong></p>
<div class="city-links">
  <a href="/st-augustine-wedding-dj/">St. Augustine</a>
  <a href="/ponte-vedra-wedding-dj/">Ponte Vedra</a>
  <a href="/amelia-island-wedding-dj/">Amelia Island</a>
  <a href="/orlando-wedding-dj/">Orlando</a>
  <a href="/tampa-wedding-dj/">Tampa</a>
</div>
```

**Example for St. Augustine page:**
```html
<p><strong>Also Serving:</strong></p>
<div class="city-links">
  <a href="/jacksonville-wedding-dj/">Jacksonville</a>
  <a href="/ponte-vedra-wedding-dj/">Ponte Vedra</a>
  <a href="/amelia-island-wedding-dj/">Amelia Island</a>
  <a href="/orlando-wedding-dj/">Orlando</a>
  <a href="/tampa-wedding-dj/">Tampa</a>
</div>
```

**Why this works (NOT cannibalization):**
- Each page targets its OWN city keyword (H1, title, content)
- Links help Google understand site structure
- Passes authority between pages (makes all pages stronger)
- Good for users who might be flexible on location

**Current status (COS static site):**
- Jacksonville ✅ has cross-links
- St. Augustine ✅ has cross-links
- Ponte Vedra ✅ has cross-links
- Amelia Island ⏳ page not created yet
- Orlando ⏳ page not created yet
- Tampa ⏳ page not created yet

---

## VENUE PAGE DETAILS (Real Details Only)

### Treasury on the Plaza
- Ceremony in main ballroom
- Room flip during cocktail hour (staff transforms space)
- Cocktail hour in Exchange Room with bar
- Music during flip for staff
- Special "reveal moment" song when couple sees transformed room
- Grand entrance FROM the vault (iconic moment)
- 1927 bank building history
- Massive columns for uplighting
- Plaza location right outside

### TPC Sawgrass
- Top preferred entertainment vendor
- Mediterranean Revival-style clubhouse
- 77,000 square feet
- Multiple indoor/outdoor ceremony options
- Views of golf course
- Also serve Ponte Vedra Inn & Club and Lodge

---

## PARKING LOT - FUTURE TASKS

### Venue Pages to Create
- [ ] River House
- [ ] Timuquana Country Club
- [ ] Epping Forest Yacht Club
- [ ] Marsh Creek Country Club
- [ ] 9 Aviles

### Content to Create
- [ ] Blog: "How Much Does a Wedding DJ Cost in Jacksonville?"
- [ ] Blog: "Top 10 Wedding Venues in St. Augustine"
- [ ] Main "Venues We Serve" hub page
- [ ] Wedding Music Planning Guide

### Technical Tasks
- [ ] Submit remaining pages to Google Search Console (after quota resets)
- [ ] Internal linking audit
- [ ] PageSpeed Insights check
- [ ] FAQ Schema implementation
- [ ] Review schema for testimonials
- [ ] Add images to city pages (3-4 per page with keyword alt text)

---

## COMPETITIVE NOTES

**Main Competitor:** RJM Entertainment (copying DJ+Sax model)

**Our Advantage:**
- Original DJ+Sax pioneers in Southeast
- Actual touring experience with major artists
- Southern Bride Magazine recognition
- Preferred vendor at premium venues

**Positioning:** "Often imitated, never duplicated"

---

## WHAT NOT TO DO (Critical Mistakes)

❌ Don't keyword stuff - Google penalizes this
❌ Don't hide pricing - You'll lose 5,400+ monthly searches
❌ Don't use generic stock photos - Use real event photos
❌ Don't copy competitor content - Google penalizes duplicates
❌ Don't neglect mobile - Most searches are mobile
❌ Don't ignore reviews - Respond to every review
❌ Don't make up venues you haven't worked - Venues will check
❌ Don't create multiple pages targeting the same keyword - Cannibalization
❌ Orange Yoast scores are FINE - Don't chase green at expense of good content

---

## HOW TO USE THIS DOCUMENT

**Starting a new session:** Upload this file and say:
"Here's my master SEO doc. Ready to work on [specific task]."

**After completing work:** Ask Claude to update this document with what was done.

**Keep it current:** Delete old/outdated SEO documents. This is the only one you need.

---

## SESSION LOG

**December 8, 2025 (Afternoon Session):**

### COS CELEBRATIONS - PRICING PAGE, AWARDS, NAV FIXES

- **STANDALONE PRICING PAGE CREATED:**
  - URL: /pricing/
  - Hub page routing users to appropriate service category
  - Three pricing cards: Weddings ($1,500 – $3,000+), Corporate (Starting at $600), Private Parties (Starting at $600)
  - Weddings card marked as "Most Popular" with featured styling
  - Added "Couples typically invest" label above wedding price range
  - Price font reduced to 2rem with white-space: nowrap for single line display

- **DJEP FORM CONFLICT - FINAL RESOLUTION:**
  - Previous lazy-load fix broke the form (document.write only works during initial page parse)
  - **Final solution:** Removed DJEP forms from corporate/private party pages entirely
  - Replaced with simple CTA button linking to /contact/ where the main DJEP form lives
  - This allows dropdown nav to work AND preserves form functionality on contact page
  - **Rule going forward:** DJEP form ONLY on /contact/ page, all other pages use CTA buttons

- **NAV UPDATES - ALL PAGES:**
  - Changed all pages to link to /pricing/ instead of /#pricing
  - Changed Services dropdown toggle from `<a href="...">` to `<span>` on all pages
  - Prevents clicking Services from navigating anywhere (hover still shows dropdown)
  - No more "javascript:void(0)" showing in browser status bar
  - Pages updated: index, corporate, private-parties, pricing, weddings, jacksonville, st-augustine, ponte-vedra, amelia-island, contact

- **AWARDS SECTION ADDED TO HOMEPAGE:**
  - Positioned after trust bar (500+ reviews, 35+ countries, etc.)
  - "Award-Winning Entertainment" header in small caps
  - White pill-shaped badges with gold star icons
  - Subtle gold hover effect on badges
  - Awards included:
    - Couple's Choice DJ — WeddingWire
    - Couple's Choice Musicians — WeddingWire
    - Best of DJs — The Knot
    - Best of Musicians — The Knot
    - Best Overall Design — Southern Bride
    - Trendsetter Award — Southern Bride
    - Top Entertainment in the 904 — Premier Bride
    - Best Wedding Entertainment — Jacksonville Magazine
  - **SEO benefit:** E-E-A-T signals (authority/trust), local SEO reinforcement

- **HOMEPAGE TITLE SHORTENED (SEO FIX):**
  - Old: "COS Celebrations | Wedding DJ + Live Saxophone | Jacksonville, St. Augustine, Orlando" (796px - too long)
  - New: "Wedding DJ + Live Saxophone | Jacksonville + St. Augustine | COS Celebrations" (~550px)
  - Keywords first (better for SEO), brand name at end
  - Orlando still covered in meta description and city pages

- **FILES CHANGED:**
  - /pricing/index.html (NEW)
  - /index.html (awards section, title fix)
  - /services/corporate/index.html (DJEP removed, CTA button, form-container centered)
  - /services/private-parties/index.html (DJEP removed, CTA button, form-container centered)
  - All nav pages (Services dropdown now uses span, links to /pricing/)

---

**December 8, 2025 (Morning Session):**

### COS CELEBRATIONS - NEW SERVICE PAGES & NAV UPDATES
- **CORPORATE EVENTS PAGE CREATED:**
  - URL: /services/corporate/
  - Title: "Corporate Event Entertainment North & Central Florida | COS Celebrations"
  - 200+ word intro targeting corporate event DJ + live musicians in Jacksonville, St. Augustine, Orlando, Tampa
  - Event type cards: Holiday Parties, Company Celebrations, Awards Ceremonies, Product Launches, Team Building, Conferences & Galas
  - Pricing: Starting at $600
  - DJEP form integrated (with lazy load fix)
- **PRIVATE PARTIES PAGE CREATED:**
  - URL: /services/private-parties/
  - Title: "Private Party Entertainment North & Central Florida | COS Celebrations"
  - 200+ word intro targeting private party DJ + live entertainment
  - Event type cards: Birthday Parties, Anniversary Parties, Graduation Parties, Retirement Parties, Holiday Gatherings, Any Celebration
  - Pricing: Starting at $600
  - DJEP form integrated (with lazy load fix)
- **HOMEPAGE PRICING OVERHAUL:**
  - Changed from package-based pricing ($1,500/$1,900/$2,400 cards) to boutique "build your experience" approach
  - New header: "Your Experience, Your Investment"
  - Price range: $1,500 – $3,000
  - "What's Always Included" section with checkmarks
  - Enhancement cards: Live Musicians (featured), Ceremony & Cocktail Hour, Lighting Design, Special Effects (cold sparks, dancing on clouds, CO2), Photo & Video Experiences, Live Streaming, Custom Touches
  - Removed redundant "Why Couples Choose Us" and "Philosophy Banner" sections
- **SERVICES DROPDOWN NAV ADDED TO ALL PAGES:**
  - Services dropdown with: Weddings, Corporate Events, Private Parties
  - Updated on: Homepage, Jacksonville, St. Augustine, Ponte Vedra, Amelia Island, Contact, Corporate, Private Parties
  - Desktop: Hover to show dropdown
  - Mobile: Tap to toggle dropdown
- **AMELIA ISLAND CITY PAGE CREATED:**
  - URL: /amelia-island-wedding-dj/
  - Nearly 100 weddings experience highlighted
  - Venues: Ritz-Carlton, Omni, Walker's Landing, Golf Club, The Pavilion, Ribault Club
- **CRITICAL BUG FIX - DJEP SCRIPTS BREAKING DROPDOWN:**
  - DJEP scripts were interfering with nav dropdown (dropdown would flash then disappear)
  - **Solution:** Lazy load DJEP scripts using `window.addEventListener('load', ...)`
  - Scripts now load after page is ready, preventing interference with nav
  - Documented fix in SEO.md for future reference
- **FILES CHANGED:**
  - /index.html (pricing overhaul, nav dropdown, removed redundant sections)
  - /services/corporate/index.html (NEW)
  - /services/private-parties/index.html (NEW)
  - /amelia-island-wedding-dj/index.html (NEW + nav dropdown)
  - /jacksonville-wedding-dj/index.html (nav dropdown)
  - /st-augustine-wedding-dj/index.html (nav dropdown)
  - /ponte-vedra-wedding-dj/index.html (nav dropdown)
  - /contact/index.html (nav dropdown)

---

**December 7, 2025 (Late Night Session):**

### COS CELEBRATIONS - PERFORMANCE & UX IMPROVEMENTS
- **NEW LOGO ADDED:**
  - New COS logo with saxophone integrated into the S
  - Converted from PNG to WebP format (26KB → 14KB)
  - Updated on all 6 pages: Homepage, Jacksonville, St. Augustine, Ponte Vedra, Contact, Services/Weddings
  - Height: 60px in nav
- **CONTACT FORM TESTING (CRITICAL LESSON):**
  - Added DJEP form to homepage CTA section
  - **RESULT: PageSpeed dropped from 90s → 70s, Accessibility dropped from 99 → 84**
  - Attempted lazy loading fix - **FAILED** because DJEP scripts use `document.write()` which only works during initial page parse
  - **SOLUTION: Removed DJEP form from homepage entirely**
  - **LESSON LEARNED: DJEP forms are render-blocking and hurt both performance AND accessibility. Only use on dedicated contact page.**
- **FLOATING CTA BUTTON ADDED:**
  - "Check Availability" button fixed to bottom-right corner
  - Appears after scrolling past hero section
  - Links to /contact/ page
  - Merlot color with shadow, hover effect
  - Provides always-visible call-to-action without performance penalty
- **FINAL CTA SECTION UPDATED:**
  - Removed DJEP form
  - Replaced with two buttons: "Request a Quote" + "Call (904) 615-7132"
  - Clean, fast, no third-party scripts
- **PAGESPEED RESULTS (After Fixes):**
  - Mobile Performance: 90s ✅
  - Desktop Performance: 99 ✅
  - Accessibility: 99 ✅
- **KEY TAKEAWAY FOR FUTURE:**
  - Never add DJEP forms to any page except /contact/
  - Use floating CTA + button links instead
  - DJEP scripts cannot be lazy loaded (document.write limitation)

---

**December 7, 2025 (Evening):**

### COS CELEBRATIONS - MAJOR HOMEPAGE & SEO UPDATES
- **NEW HERO SECTION:**
  - New H1: "North + Central Florida Wedding DJ + Live Musicians"
  - New subheadline: "Your Wedding Soundtrack, Performed Live"
  - New hero paragraph emphasizing musician background (piano at age 4, reads the room, live sax/piano)
  - Added Corey's photo (saxophone + DJ booth from Southern Bride award shoot)
  - Photo centered below paragraph for optimal page speed
- **NEW "WHAT SETS US APART" SECTION:**
  - Added directly below hero with 3 cards:
    1. Musician's Ear - "We read the room like musicians — because we are"
    2. MCs Who Lead, Not Cheese - "No '1-2-3 everybody say hey!'"
    3. Daily Training - "We study daily with top wedding DJs in the country"
- **BIO WORDING FIX (ALL PAGES):**
  - Changed from "toured with Usher, Alicia Keys, and T-Pain across 35+ countries"
  - To: "toured 35+ countries and shared the stage with artists like Usher, Alicia Keys, and Big Gigantic"
  - More accurate: toured 35+ countries overall, shared stage with those artists at various shows/tours
  - Updated on: Homepage, Jacksonville, St. Augustine, Ponte Vedra pages
- **PONTE VEDRA CITY PAGE CREATED:**
  - URL: /ponte-vedra-wedding-dj/
  - 200+ word intro targeting "ponte vedra wedding dj" (20 monthly searches, low competition)
  - TPC Sawgrass featured as "Top Preferred Vendor" with special badge styling
  - Venues: TPC Sawgrass, Ponte Vedra Inn & Club, Lodge & Club, Marsh Creek Country Club
  - Internal links to all other city pages
  - Canonical tag pointing to coscelebrations.com
- **TRUST BAR UPDATE:**
  - Changed "20+ Preferred Venues" to "50+ Preferred Venues"
- **IMAGE OPTIMIZATION:**
  - Hero image was 360KB (2667x4000px) — too large for mobile
  - Resized to 49KB (700x1049px) using Python/Pillow
  - Mobile PageSpeed was 83 due to image size, should improve now
  - Installed Pillow (`pip3 install Pillow`) for future image resizing
- **PAGES UPDATED:**
  - /cos-website/index.html
  - /cos-website/jacksonville-wedding-dj/index.html
  - /cos-website/st-augustine-wedding-dj/index.html
  - /cos-website/ponte-vedra-wedding-dj/index.html (NEW)
  - /cos-website/images/corey-peterson-jacksonville-wedding-dj-saxophone.webp (resized)
- **MOBILE HAMBURGER MENU ADDED:**
  - Added to all 6 COS pages: Homepage, Jacksonville, St. Augustine, Ponte Vedra, Contact, Services/Weddings
  - Merlot-colored icon matching brand
  - Animates to X when open
  - Auto-closes when clicking a link
- **STILL NEED FOR COS:**
  - Remaining city pages: Amelia Island, Orlando, Tampa (Jax, St. Aug, Ponte Vedra ✅ DONE)
  - More venue pages (River House, Timuquana, Epping Forest, etc.)
  - Favicon and Apple touch icon
  - ~~Logo update~~ ✅ DONE (webp format, all pages updated)
  - Corporate and Private Parties service pages
  - Connect domain to Netlify (currently at jazzy-vacherin-8488d2.netlify.app)
  - ~~Add floating CTA button~~ ✅ DONE
- **COS CITY PAGES COMPLETED:**
  - /jacksonville-wedding-dj/ ✅
  - /st-augustine-wedding-dj/ ✅
  - /ponte-vedra-wedding-dj/ ✅

---

**December 7, 2025 (Earlier):**

### AE ENTERTAINMENT UPDATES
- **EMAIL DISPLAY CHANGE:**
  - Removed visible Gmail address (ae.entertain.co@gmail.com) from website
  - Contact page: Changed email link to styled "Send Email" button
  - Homepage CTA: Changed to "Or send us an email" link
  - Email still works via mailto, just not displayed publicly (more professional until branded email setup)
- **NETLIFY FORM NOTIFICATION:**
  - Updated form submission email in Netlify dashboard (user completed manually)
- **HOMEPAGE HERO UPDATES:**
  - Added event types line below subheadline: "Weddings • Corporate Events • Private Parties"
  - Styled in gold (#D4AF37) to match trust bar accent color
  - Smaller font (1rem) than subheadline, centered

---

**December 4, 2025:**

### COS CELEBRATIONS - STATIC SITE UPDATES
- Renamed "Essential" package to "Deluxe" ($1,500)
- Made "Ceremony Coverage" bold with merlot color in Complete Wedding and Premium packages
- Site live at: https://cool-jelly-73d5c0.netlify.app/

### AE ENTERTAINMENT - DOMAIN SETUP & GO LIVE
- **DOMAIN CHANGES:**
  - Changed primary domain from affordable-entertainment.com to **ae-djs.com**
  - Reasoning: Shorter, more brandable, easier to remember (7 chars vs 27)
  - ae-djs.com is now LIVE and working ✅
  - affordable-entertainment.com set to 301 redirect to ae-djs.com (via GoDaddy forwarding)
- **DNS SETUP:**
  - ae-djs.com nameservers: Netlify (dns1.p01.nsone.net, etc.)
  - affordable-entertainment.com: GoDaddy forwarding to ae-djs.com
  - Removed affordable-entertainment.com from Netlify domain management
- **TECHNICAL UPDATES:**
  - Updated canonical tags on all 7 pages to point to ae-djs.com
  - Updated _redirects file for ae-djs.com www → non-www
  - Updated SEO master doc with new domain info
- **MOBILE HAMBURGER MENU ADDED:**
  - Added hamburger menu icon (3 horizontal lines) on all 7 pages
  - Shows on mobile screens under 768px
  - Animates to X when open
  - Dropdown reveals nav links: Services, Pricing, Service Areas, Get Quote
  - Auto-closes when clicking a link
  - Matches blue/white color scheme
- **HOMEPAGE UPDATES:**
  - Changed tagline from "No Cheese. Just Great Vibes." to "5-Star Service. Budget-Friendly Price."
  - Updated stats bar:
    - "$800 Starting Price" → "$800 Reception Price"
    - "No Cheese Factor" → "0% Cheese"
    - "6 Service Areas" → "5-Star Rated"
  - Stats now: $800 Reception Price | 500+ Weddings | 5-Star Rated | 0% Cheese
  - Made "Ceremony Coverage Included" bold in Party Plus pricing card
  - **Updated trust bar with styled box:**
    - Split into two lines
    - Line 1: "Unmatched at this price point."
    - Line 2: "🏆 Sister company of award-winning COS Celebrations"
    - Cream/gold styled box with rounded corners and subtle shadow
    - Trophy emoji adds visual impact
- **FILES UPDATED:**
  - /ae-entertainment/index.html
  - /ae-entertainment/jacksonville-wedding-dj/index.html
  - /ae-entertainment/st-augustine-wedding-dj/index.html
  - /ae-entertainment/ponte-vedra-wedding-dj/index.html
  - /ae-entertainment/the-white-room-wedding-dj/index.html
  - /ae-entertainment/contact/index.html
  - /ae-entertainment/services/index.html
  - /ae-entertainment/_redirects
- **NEXT STEPS:**
  - Submit ae-djs.com to Google Search Console
  - Update any external links pointing to affordable-entertainment.com
  - Monitor redirect is working once GoDaddy SSL provisions

---

**December 3, 2025:**

### AE ENTERTAINMENT - LIVE LAUNCH + SEO FIXES
- **SITE IS NOW LIVE:**
  - Deployed to Netlify: https://jazzy-vacherin-8488d2.netlify.app/
  - Primary Domain: ae-djs.com
  - Secondary Domain: affordable-entertainment.com (301 redirects to ae-djs.com)
  - Contact form submissions forwarding to Kyle@COSCelebrations.com
- PAGES LIVE ON AE SITE:
  - Homepage (/) ✅
  - Jacksonville (/jacksonville-wedding-dj/) ✅
  - St. Augustine (/st-augustine-wedding-dj/) ✅
  - Ponte Vedra (/ponte-vedra-wedding-dj/) ✅ NEW
  - The White Room (/the-white-room-wedding-dj/) ✅
  - Contact (/contact/) ✅
  - Services (/services/) ✅
- NEW CITY PAGE CREATED:
  - Ponte Vedra page with TPC Sawgrass, Ponte Vedra Inn & Club, Lodge & Club venues
  - 200+ word intro, internal links to Jacksonville and St. Augustine
  - Targeting "affordable wedding dj ponte vedra" (20 monthly searches, low competition)
- INTERNAL LINKING UPDATES:
  - Added link from St. Augustine page to The White Room venue page
  - Added link from St. Augustine page to Ponte Vedra page
  - Added link from Jacksonville page to Ponte Vedra page
  - Added Ponte Vedra to homepage service areas grid with link
  - Following Rob's framework: link once per page, first mention only
- TECHNICAL SEO FIXES (via SEObility audit):
  - Added canonical tags to all 7 pages (updated to ae-djs.com on Dec 4)
  - Shortened title tags to under 580 pixels (removed "Starting at" where needed)
  - Shortened meta descriptions to under 1000 pixels
  - Added _redirects file for www → non-www 301 redirect
  - Changed pricing card CTAs from "Get Quote" to "Let's Chat"
  - Updated trust bar: "Unmatched at this price point. Sister company of award-winning COS Celebrations."
- ADDITIONAL UPDATES (Late Session):
  - Added Instagram icon to footer on all 7 pages (links to instagram.com/ae.entertain)
  - Added reviews section to homepage with 5-star testimonial from Paige (DJ Cole wedding)
  - Clean card design, easy to add more reviews later
  - Contact page cleanup: removed "What to Include" section, centered Service Areas card
- IMAGE WORKFLOW TESTED:
  - Renamed 4 Treasury on the Plaza wedding photos with SEO-friendly names
  - Converted to webp via Squoosh
  - Images stored in /images/treasury-on-the-plaza/ but NOT on pages yet (too large, need resizing)
  - **Image optimization process for future (CRITICAL FOR MOBILE PERFORMANCE):**
    1. Resize to 700px width (for images displayed at ~350px, 2x for retina)
    2. WebP format, quality 70-75
    3. Target under 100KB per image (50KB ideal for hero images)
    4. Use Python/Pillow for resizing: `pip3 install Pillow` (installed on machine)
    5. SEO-friendly filename before upload
  - **Why this matters:** A 360KB image dropped mobile PageSpeed from 99 to 83. After resizing to 49KB, score improved significantly.
  - SEO naming convention: `venue-name-wedding-description.webp`
    - Example: `treasury-on-the-plaza-wedding-bride-dancing-guests.webp`
- STILL NEED:
  - Favicon and Apple touch icon
  - Mobile hamburger menu (nav links hidden on mobile currently)
  - Remaining city pages (Amelia Island, Orlando, Tampa)
  - Resize Treasury images and add to pages
  - Submit pages to Google Search Console once DNS fully propagates

---

**December 2, 2025 (Evening - New Static Sites Build):**

### COS CELEBRATIONS (Luxury Brand)
- **IMPORTANT: Built NEW static HTML site separate from WordPress site**
  - Location: /Users/coreypeterson/cos-website/ (local development)
  - Purpose: Replace slow WordPress/Elementor site with fast, clean HTML
  - Current WordPress site: Still live at coscelebrations.com (will migrate later)
  - New static site: Local preview only, will deploy to Netlify → coscelebrations.com
  - GitHub repo: cos-website (for version control and auto-deploy to Netlify)
- PAGES CREATED IN NEW STATIC SITE:
  - Homepage with SEO-optimized intro paragraph, pricing packages, reviews carousel
  - Created Jacksonville wedding DJ page (/jacksonville-wedding-dj/)
    - 200+ word opening paragraph targeting "jacksonville wedding dj" (110 monthly searches)
    - H1: "Jacksonville Wedding DJ + Live Musicians"
    - Venue mentions: Timuquana Country Club, Epping Forest Yacht Club, Casa Marina
    - Internal links to other city pages
  - Created St. Augustine wedding DJ page (/st-augustine-wedding-dj/)
    - 200+ word opening paragraph targeting "st augustine wedding dj" (90 monthly searches)
    - Emphasized local/home base positioning (no travel fees)
    - Venue mentions: Treasury on the Plaza, Lightner Museum, The White Room, River House
    - Used "St. Augustine" with period throughout (4x more searches)
  - Created contact page (/contact/) with DJEP form integration
- PRICING UPDATES:
  - Changed Essential package from $1,400 to $1,500
  - Made Premium ($2,400) the "Most Popular" package (was Complete Wedding)
  - Added "Elegant DJ Setup" to all three packages
  - Added "COS Music + Timeline App" to all packages (was "Online Planning Portal")
- BRANDING UPDATES:
  - Changed all "Online Planning Portal" references to "COS Music + Timeline App"
  - Updated phone number throughout site to 904-615-7132
  - Changed page titles from "DJ + Live Saxophone" to "DJ + Live Musicians" (broader appeal)
- NAVIGATION & CTA UPDATES:
  - Added "Contact" button to navigation on all pages
  - Updated all CTA sections to link to /contact/ page (with phone number option)
  - Added internal linking following Rob's framework (link once per page, first mention)
- SITE STRUCTURE:
  - All pages use same elegant merlot/pink/cream color scheme
  - Mobile responsive design
  - SEO-optimized meta descriptions and titles
  - Clean, fast-loading HTML (no WordPress/Elementor bloat)
- NEXT STEPS FOR COS:
  - Create remaining city pages (Ponte Vedra, Amelia Island, Orlando, Tampa)
  - Add photos to pages
  - Create additional venue pages
  - Test form styling improvements (DJEP quirks to resolve later)

### AE ENTERTAINMENT (Budget Brand - NEW LAUNCH)
- **BUILT BRAND NEW SITE FOR SISTER COMPANY:**
  - Location: /Users/coreypeterson/ae-entertainment/ (local development)
  - Domain: affordable-entertainment.com (will deploy to this)
  - Purpose: Capture budget-conscious wedding market ($800-$995 vs COS's $1500+)
  - Separate brand to avoid cannibalization with COS luxury positioning
- PAGES CREATED:
  - Homepage (/ae-entertainment/index.html)
    - Blue/white color scheme (professional, approachable)
    - Starting at $800 messaging
    - "Great DJ. Beautiful Wedding. No Cheese." positioning
    - Reception package ($800) and Party Plus ($995 with ceremony)
    - Services: DJ, Photo Booths, Uplighting
    - Same service areas as COS
    - Phone: 904-377-8627 (different from COS)
- BRAND DIFFERENTIATION STRATEGY DOCUMENTED:
  - Added comprehensive section to strategy guide
  - Keyword separation: COS targets "luxury/premium", AE targets "affordable/budget"
  - Content differentiation: COS = world-class experience, AE = value + quality
  - No cross-mention on COS site (preserve luxury positioning)
  - Small footer link on AE site to COS (upgrade path)
  - Clear price separation prevents cannibalization
- NEXT STEPS FOR AE (QUICK LAUNCH):
  - Create contact page (simple contact info or basic form, NOT DJEP to avoid confusion)
  - Create Jacksonville page (biggest market)
  - Create St. Augustine page (home base)
  - Deploy to Netlify → affordable-entertainment.com
  - GOAL: Get live ASAP to test market response

**December 2, 2025 (Morning):**
- Published The White Room venue page (was ready, now live)
- Published Ritz-Carlton Amelia Island venue page (was ready, now live)
- Ran PageSpeed Insights: 43 performance, 87 accessibility, 73 best practices, 100 SEO
  - Main issues: JavaScript execution, unused CSS/JS, render blocking (Elementor bloat)
- Created Instagram Reels content:
  - Big Gigantic/Disco Cowboy opening set (touring credentials content)
  - Treasury on the Plaza wedding with Jeanette + Dean (wedding sax content)
- SET UP NEW DEVELOPMENT WORKFLOW:
  - Created Netlify account (free hosting)
  - Created GitHub account + cos-website repository
  - Connected GitHub to Netlify (auto-deploys)
  - Built test landing page (HTML) - live and working
  - Installing Claude Code for direct code editing
- FUTURE PROJECT: Migrate full site from WordPress/Elementor to static site on Netlify
  - Will solve PageSpeed issues (43 → 90+ expected)
  - Full control (no more asking buddy for server changes)
  - Same workflow Rob Futrell uses for his photography site

**Still pending from Nov 27 (Google quota reset tonight):**
- Submit to Google Search Console: Lightner Museum, The White Room, Ritz-Carlton Amelia Island

**November 27, 2025 (Evening):**
- Created The White Room venue page (HTML + Word doc)
  - Villa Blanca, Grand Ballroom, Rooftop, Loft sections
  - 100+ weddings, preferred vendor status
  - URL: /the-white-room-wedding-dj/
- Created Ritz-Carlton Amelia Island venue page (HTML)
  - Lawn ceremonies, ballroom receptions, tented options
  - ~10 weddings, NOT preferred (yet)
  - Starting price $1,500 (no travel fee)
  - URL: /ritz-carlton-amelia-island-wedding-dj/

**November 27, 2025:**
- Created master SEO document (combining all previous docs + Rob's framework)
- Set up Google Search Console (verified via WPCode plugin)
- Submitted 10 pages for indexing
- Confirmed all city pages live: Jacksonville, Orlando, St. Augustine, Tampa, Ponte Vedra, Amelia Island
- Confirmed venue pages live: Treasury on the Plaza, TPC Sawgrass, Lightner Museum
- Hit Google indexing quota - remaining pages pending
- Created Ponte Vedra page with HTML matching other city pages

**Previous Work Completed:**
- Homepage rewrite with SEO optimization
- Pricing page created ($1,400/$1,900/$2,400 packages)
- All city pages created with HTML blocks
- Cross-linking between all city pages
- Footer updated with city links
- Jacksonville URL changed from old format to /jacksonville-wedding-dj/
- Blog posts optimized (Liz + Joel, Micah + Joseph)

---

*End of Document - DELETE ALL OTHER SEO DOCUMENTS*
