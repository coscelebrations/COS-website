# COS Celebrations & AE Entertainment - SEO Working Document
## Last Updated: January 6, 2026

> **SEO Rules are in `~/CLAUDE.md`** — they auto-load every session.
> **Historical sessions are in `SEO-ARCHIVE.md`** — reference when needed.

---

## 📌 NEXT SESSION TODO
- [ ] **Add Live Musicians link to ~59 venue pages** — only 4 pages currently link to /services/live-musicians/ in nav. Bella Collina done as example. Pattern: add `<a href="/services/live-musicians/">Live Musicians</a>` after Private Parties in Services dropdown
- [ ] **Check Orlando rankings (Jan 13)** — manually reindexed in GSC on Jan 6. Look for "orlando wedding dj" ranking to return
- [ ] **Update AE Google Business Profile** — website still points to affordable-entertainment.com
- [ ] **Enhance Live Musicians Page** — add photos, video clips, testimonials, pricing hints
- [ ] **Add award badge images** — user will find The Knot & WeddingWire badge images from email
- [ ] **Monitor Google Indexing** — check Search Console for homepage LCP improvement
- [ ] **Venue Partnerships Section** — add preferred vendor logos to COS homepage
- [ ] **Create new venue pages** — 40+ opportunities identified (see seo-data/new-venue-opportunities.md)
- [ ] **Apply hero LCP fix to venue pages** — 45 venue pages still use CSS background (lower priority)
- [ ] **Add venue cross-links** — venue pages should link to other nearby venues (e.g., Treasury → White Room, Casa Monica)
- [ ] **Add venue/city links to Pricing page** — high-traffic page has no venue links
- [ ] **Implement responsive images** — Treasury responsive images ready in `/responsive/` subfolder. Use srcset for mobile optimization. Smart photo tool at `scripts/smart-photo.py`

## 📊 CURRENT RANKINGS (Jan 10, 2026)

**COS Celebrations:**
| Keyword | Dec 30 | Jan 10 | Change |
|---------|--------|--------|--------|
| jacksonville wedding dj | #12 | **#5** | ⬆️ +7 |
| ponte vedra wedding dj | #4 | **#1** | ⬆️ +3 |
| timuquana country club wedding dj | #1 | #1 | — |
| st augustine wedding dj | #6 | N/A | ⬇️ dropped |
| treasury on the plaza wedding dj | #1 | N/A | ⬇️ dropped |
| lightner museum wedding dj | #1 | N/A | ⬇️ dropped |
| epping forest yacht club wedding dj | #2 | N/A | ⬇️ dropped |
| bella collina wedding dj | #4 | N/A | ⬇️ dropped |
| amelia island wedding dj | #5 | N/A | ⬇️ dropped |
| tampa wedding dj | #17 | N/A | ⬇️ dropped |
| orlando wedding dj | N/A | N/A | still not ranking |

**AE Entertainment:**
| Keyword | Dec 30 | Jan 10 | Change |
|---------|--------|--------|--------|
| budget wedding dj jacksonville | #21 | **#1** | ⬆️ +20 |
| affordable wedding dj jacksonville | #18 | **#3** | ⬆️ +15 |
| wedding dj under 1000 jacksonville | #9 | **#6** | ⬆️ +3 |
| st augustine wedding dj | N/A | **#6** | 🆕 NEW |

**Analysis:**
- **COS wins:** Jacksonville jumped to page 1 (#5), Ponte Vedra hit #1
- **COS drops:** Several venue keywords fell out of top 10 — venue sites and directories now dominating. May be Google algo shift.
- **AE wins:** Dominating budget keywords — #1 for "budget wedding dj", #3 for "affordable", and now ranking for main St. Augustine keyword!
- **Orlando:** Still not ranking after Jan 6 GSC reindex. Give it more time.

---

## ✅ COMPLETED (Jan 10, 2026) - Venue Interview Content
Responding to venue keyword drops (Treasury, Lightner fell from #1 to out of top 10). Competitor AMPLIFY has "Insider Tips" style content we lacked.

**Created venue interview process** (`~/VENUE-INTERVIEW.md`) to generate authentic insider content.

**Treasury on the Plaza:**
- [x] 6 Insider Tips (vault timing, room flip magic, acoustics, satellite speaker trick, etc.)
- [x] Full sample timeline (1:30 PM setup → 9:45 PM send-off)
- [x] Pro tip about 5.5-hour sweet spot

**Lightner Museum:**
- [x] 6 Insider Tips (30-min soundcheck window, staircase entrances, pool acoustics, mezzanine transition, draping tip)
- [x] Full sample timeline (3:30 PM setup → 11:30 PM exit)
- [x] Updated add-ons (live musicians, fusion, lighting, photo booth — no sparks/clouds allowed)
- [x] New hero image: couple on bridge at dusk (photo by Rob)

**Strategy:** This "venue guide" style content matches what Google appears to reward for venue-specific queries. Check rankings again in 1-2 weeks.

---

## ✅ COMPLETED (Jan 6, 2026)
- [x] **AE Landing page /go/** — conversion-focused page for paid ads, $800/$995 packages, Paige testimonial, "Sister Company of COS Celebrations" trust signal

## ✅ COMPLETED (Jan 5, 2026 - Evening)
- [x] **Bento galleries on all venue pages** — Apple-style asymmetric grid with hover captions, lightbox (Treasury, Lightner, Timuquana, River House, Fountain of Youth)
- [x] **Epping Forest Yacht Club gallery** — processed Liz & Joel wedding photos, new hero, 7-image bento gallery
- [x] **COS Landing page /go/** — conversion-focused page for paid ads (noindex), trust strip, pricing, testimonial
- [x] **Rule #11 in CLAUDE.md** — documented bento gallery pattern (CSS, HTML, JS) for future venue pages

## ✅ COMPLETED (Jan 5, 2026 - Late Night)
- [x] **Full internal link audit** — scanned 75 pages, 2,172 links total
- [x] **Identified Live Musicians underlinked** — only 4 of 63 venue pages link to /services/live-musicians/
- [x] **Added Live Musicians link to Bella Collina** — example for remaining 59 pages
- [x] **Created Instagram reel content** — "DJ Tip of the Day" with Lightner dance floor photo
- [x] **Built smart photo tool** — `scripts/smart-photo.py` with face detection, smart cropping, responsive sizing
- [x] **Processed Treasury photos** — 12 images → 24 responsive versions in `/responsive/` (22 faces detected)

## ✅ COMPLETED (Jan 5, 2026 - Morning Session)
- [x] **"Check My Date" CTA test** — deployed on homepage (hero, final section, floating button)
- [x] **Competitive research** — analyzed 40+ DJs across 12 markets, documented in `seo-data/competitive-research-jan-2026.md`
- [x] **Wedding page "Choose Your Vibe" section** — 4 entertainment option cards with slanted images
- [x] **Wedding page CTA fix** — added "Check My Date" button, fixed broken links

## ✅ COMPLETED (Jan 5, 2026 - Overnight Audit)
- [x] **Full site audit** — ran comprehensive checks on COS & AE sites
- [x] **Contact form validation** — confirmed "How Did You Hear" required field working
- [x] **Fountain of Youth page** — verified Nicole + Adam photos, schema, links all good
- [x] **All internal links passing** — 75 pages checked, no broken links
- [x] **All images have alt text** — no accessibility issues found
- [x] **Schema markup verified** — all main pages have proper LocalBusiness + FAQ schemas
- [x] **Re-submitted 61 pages to Google** — contact page and all others refreshed
- [x] **AE site audit** — homepage, contact, pricing all working correctly

### Audit Findings (Minor - Low Priority)
- **Page titles over 60 chars:** ~35 venue pages have titles 61-87 chars — not critical, Google truncates gracefully
- **Meta descriptions over 160 chars:** 8 pages slightly over — minor truncation in SERPs
- **Missing OG tags:** Service pages (/services/corporate/, /services/private-parties/, /services/weddings/) lack Open Graph tags
- **VIP Login page:** Could use canonical, OG tags, better meta description
- **Pricing Guide page:** Appears unused, missing meta tags (consider removing or redirecting)

## ✅ COMPLETED (Jan 4, 2026 - Evening Session)
- [x] **Homepage hero LCP fix** — converted CSS background to `<img>` tag with preload, fetchpriority="high"
- [x] **Orlando page repositioned** — removed all "travel from St. Augustine" language, added Orlando team (Marc, Khalil, Paul)
- [x] **Re-submitted 61 pages to Google** — including updated Orlando page

## ✅ COMPLETED (Jan 4, 2026 - Earlier)
- [x] **Image optimization audit** — resized 37 oversized images to 800px max (AE logo was 6831px!)
- [x] **Meta description fixes** — shortened 8 COS (too long), expanded 3 AE (too short)
- [x] **Schema markup additions** — added to AE /contact/, COS /services/corporate/, COS /services/private-parties/
- [x] **AE priceRange correction** — fixed from wrong $1,500 to correct $800-$995 across 63 pages
- [x] **CLS fix** — added width/height to logo images on all 138 pages (COS: 71, AE: 67)
- [x] **Font fallback** — added system font stack to AE to prevent font-swap layout shift
- [x] **Competitor research** — analyzed 8 Florida markets (see seo-data/competitor-analysis.md)
- [x] **Broken link audit** — no issues found on either site
- [x] **New venue discovery** — identified 40+ venue page opportunities
- [x] **SEO.md restructure** — rules moved to CLAUDE.md, old sessions archived to SEO-ARCHIVE.md

## ✅ COMPLETED (Jan 3, 2026)
- [x] Created /services/live-musicians/ page with Service + FAQ schema
- [x] Added hero trust strips to COS and AE homepages
- [x] Internal linking to live musicians page (5 pages, 1 link each)
- [x] Submitted 61 pages to Google Indexing API
- [x] National competitive analysis (50+ companies, 12 markets) → ae-entertainment/COMPETITIVE-ANALYSIS-2025.md
- [x] Added "The Knot & WeddingWire Award Winner 2022–2025" to trust strip
- [x] Optimized logo with responsive srcset (1x: 165×105, 2x: 330×210)
- [x] Analyzed top-ranking Chicago DJs for SEO tactics (title tags, schema, team bios)

---

## 🔧 GOOGLE INDEXING API

Submit URLs directly to Google for faster indexing. Run from each site's directory.

```bash
npm run seo:index           # Submit all sitemap URLs to Google
npm run seo:index:changes   # Only submit pages modified since last indexed
npm run seo:index:check     # Show pages needing (re)indexing
npm run seo:index:dry       # Preview URLs without submitting
npm run seo:index:status    # Check submission status via API
npm run audit               # Full site audit (includes indexing check)
```

**Notes:**
- Daily limit: ~200 URLs per day (plenty for both sites)
- Submission ≠ Indexing: Google decides whether to index based on content quality
- Credentials stored in `scripts/google-indexing-credentials.json` (gitignored)

---

## 🎯 "WEDDING DJ NEAR ME" STRATEGY

**The Opportunity:** "wedding dj near me" has 390 monthly searches in Florida — more than all other Jacksonville/St. Augustine keywords combined.

**How to Target It:**
1. **City Pages:** Include FAQ: "Looking for a wedding DJ near me in [City]?"
2. **Google Business Profile:** Service areas should include all cities we serve
3. **On-Page:** Emphasize being "local" and "based in [City]"
4. **Schema:** LocalBusiness with areaServed and GeoCoordinates

**Implementation Status:**
- [x] All COS city pages - FAQ added (Jacksonville, St. Augustine, Orlando, Tampa, Ponte Vedra, Amelia Island)
- [x] AE Jacksonville & St. Augustine pages - FAQ added
- [ ] Google Business Profile optimization (both companies)

---

## 📊 HISTORICAL RANKINGS (Dec 30, 2025)

> **See Jan 10, 2026 rankings above for current data**

**COS Celebrations (Dec 30):**
| Rank | Keyword |
|------|---------|
| #1 | treasury on the plaza wedding dj |
| #1 | lightner museum wedding dj |
| #1 | timuquana country club wedding dj |
| #2 | epping forest yacht club wedding dj |
| #4 | ponte vedra wedding dj, bella collina wedding dj |
| #5 | amelia island wedding dj |
| #6 | st augustine wedding dj |
| #12 | jacksonville wedding dj |
| #17 | tampa wedding dj |
| **N/A** | **orlando wedding dj** ⚠️ |

**AE Entertainment (Dec 30):**
| Rank | Keyword |
|------|---------|
| #1 | ae entertainment jacksonville, ae djs |
| #9 | wedding dj under 1000 jacksonville |
| #13 | affordable wedding dj st augustine |
| #18 | affordable wedding dj jacksonville |

---

## 📁 KEY FILES

```
~/CLAUDE.md                           # SEO rules (auto-loads)
~/seo-data/rankings.json              # Historical rankings data
~/seo-data/competitor-analysis.md     # Competitor research
~/seo-data/new-venue-opportunities.md # 40+ venue targets
~/cos-website/SEO-ARCHIVE.md          # Old session notes
```

---

## 📝 RECENT SESSION NOTES

### Session Notes (Jan 4, 2026) - Image & Schema Fixes
See COMPLETED sections above for full details.

---

### Session Notes (Jan 2, 2026) - COS Site Audit & Technical SEO Fixes

**Major Audit Cleanup: 2,968 → 155 Issues (95% Reduction)**

| Issue Category | Before | After |
|----------------|--------|-------|
| OG Tags | ~50 pages missing | ✅ All pages |
| Raw Photos | 2,000+ warnings | ✅ Moved out |
| Image Size | 34 oversized | ✅ All under 100KB |
| Schema | 73 pages missing | ✅ All have LocalBusiness |
| Broken Links | 10 /#pricing links | ✅ Fixed to /pricing/ |

**Remaining 155 Issues (Low Priority):** Meta warnings, some missing OG tags on hidden pages.

---

### Session Notes (Jan 1, 2026 - Evening) - Google Indexing API & Orlando Investigation

**Google Indexing API Integration Complete**
- COS: 62 pages submitted
- AE: 60 pages submitted
- New npm commands available (see above)

**Orlando Ranking Drop Investigation**

| Finding | Details |
|---------|---------|
| Indexing Issue | Google `site:` search doesn't return Orlando page |
| On-Page SEO | Good: 78 keyword mentions, 8 FAQs, proper schema |
| Internal Links | 30 pages link to Orlando |
| Competition | SEVERE: Disney-preferred DJs with 2,000-7,000+ weddings |

**Root Cause:** Likely indexing issue after rapid page changes Dec 17-24, compounded by severe Orlando market competition.

**Actions Taken:**
- ✅ Submitted Orlando page via Indexing API
- ⏳ Need manual GSC re-index request (URL Inspection tool)

---

### Session Notes (Jan 11, 2026) - Site Maintenance & Internal Linking

**Quick Fixes Completed:**
- Updated copyright year 2025 → 2026 across all 63 HTML pages
- Added OG tags to 4 service pages (corporate, live-musicians, private-parties, weddings)
- Also added missing canonical URL to weddings service page

**Medium Effort Tasks:**
- Added Live Musicians link to 29 venue pages with dropdown nav
- Added "Where We Celebrate" section to Pricing page (8 cities + 8 venues)
- Fixed venue cross-links for St. Augustine region (6 venues now properly interlinked)

**Remaining:**
- Venue cross-links for Jacksonville, Ponte Vedra, Amelia Island, Orlando, Tampa, Daytona, Gainesville
- Hero LCP fix (61 pages still using CSS background-image)

---

### Session Notes (Jan 1, 2026) - Massive Venue Page Expansion

**90+ Venue Pages Created across 8 Florida markets for BOTH COS and AE:**

| Market | Venues |
|--------|--------|
| Jacksonville | 9 (Timuquana, Epping Forest, River Club, Deerwood, etc.) |
| St. Augustine | 6 (Treasury, White Room, Lightner, River House, etc.) |
| Ponte Vedra | 7 (TPC Sawgrass, Ponte Vedra Inn, Lodge & Club, etc.) |
| Amelia Island | 6 (Ritz-Carlton, Omni, Walker's Landing, etc.) |
| Orlando | 8 (Bella Collina, Paradise Cove, Leu Gardens, etc.) |
| Tampa | 7 (The Orlo, Don CeSar, Florida Aquarium, etc.) |
| Gainesville | 3 |
| Daytona Beach | 5 |

**Internal Linking:** Added "Explore Our Venue Pages" section to ALL 16 city pages.

---

### Session Notes (Dec 30, 2025) - Rankings Check & Site Audits

**Site Audit Scores:**
- COS: 98.65/100
- AE: 99.54/100

**Key Movement:**
- AE "wedding dj under 1000" jumped from #59 to #9
- Orlando still not ranking — needs investigation
- AE GBP still pointing to old domain

---

### Session Notes (Dec 24, 2025) - AE SEO Improvements

**AE Domain Transition Complete!** All 7 keywords in top 20, 3 in top 10.

**Key Updates:**
- Changed AE titles to "Jacksonville Wedding DJ | Affordable Packages from $800"
- Added "wedding DJ near me" FAQ to all city pages
- Added COS→AE cross-links (subtle, in FAQ sections)

**ACTION STILL REQUIRED:** Update AE's Google Business Profile website field to ae-djs.com

---

*For older session notes, see `SEO-ARCHIVE.md`*
