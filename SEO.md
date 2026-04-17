# COS Celebrations & AE Entertainment - SEO Working Document
## Last Updated: April 16, 2026

---

## Atlanta City Page Launch (Apr 16, 2026)

**Full Atlanta expansion** — new city pages on both brands as a real service market, not a destination/travel page.

**Created:**
- `/Users/coreypeterson/cos-website/atlanta-wedding-dj/index.html` (COS, luxury positioning, $1,500+)
- `/Users/coreypeterson/ae-entertainment/atlanta-wedding-dj/index.html` (AE, budget, $800 + $650 transparent travel = $1,450 all-in)

**Strategy:** Long-term plan is to build an on-the-ground Atlanta team. Until then, travel is an explicit line on every Atlanta quote. Page copy is worded so travel messaging can switch to "no travel fee — we're local" once the team lands without restructuring sections.

**Research source:** Perplexity pull saved to `~/seo-data/research/atlanta-expansion-2026-04-16.md` — 10 verified venues, pricing bands ($1,500–$4,000+ typical Atlanta DJ range), noise ordinance specifics per neighborhood (Buckhead 10pm residential, Midtown 11pm mixed-use, Piedmont Park restricted, Decatur 11pm).

**Venues on both pages:** Atlanta History Center (Buckhead), Summerour Studio + The West Venue + Dogwood at Westside Paper (West Midtown), The Georgian Terrace + Park Tavern + The Wimbish House (Midtown), The Roof at Ponce City Market (Old Fourth Ward), The Tabernacle (Downtown), Buckhead Club.

**Structural notes:**
- COS page: neighborhood-led intro, 4 feature cards (not 6), 2 testimonials (not 3), founder section at bottom (inverted from St. Aug). NO gallery — no real Atlanta photos yet (Rule #9: don't fake). Gradient hero until real event photos exist.
- AE page: pricing moved to position 2 (budget buyers need the number up front). Transparent $650 travel fee shown inside each tier. 4 feature cards (not 6). 6-7 FAQs (not 9). No testimonials section. "How to Pick an Atlanta Wedding DJ" decision guide preserved.

**Cross-links:** Atlanta added to Also Serving on 7 existing pages:
- COS: jacksonville, st-augustine, orlando, daytona-beach
- AE: jacksonville, st-augustine, orlando (Daytona Beach has no Also Serving block)

**Sitemaps:** Both updated. COS priority 0.8, AE priority 0.9, lastmod 2026-04-16.

**Image TODO:** Hero is a gradient-only placeholder. Swap in real Atlanta event photos as soon as a wedding is booked (no AI generation, no stock skyline unless CC0-verified).

**Watch:**
- GSC impressions for "atlanta wedding dj", "buckhead wedding dj", "atlanta wedding dj near me", "affordable atlanta wedding dj" over next 4–8 weeks.
- First indexing usually takes 1–2 weeks. Submit URLs manually in GSC to accelerate.
- Monitor travel-fee language reception via form submissions — if AE is getting "is the travel fee real?" questions, we over-disclosed and need to rephrase.

**Open decisions for review:**
- AE travel fee default set to $650. Confirm or adjust.
- COS founder section kept and placed at page bottom. Confirm.
- Primary keywords: broad `atlanta wedding dj` on both; COS secondary `buckhead wedding dj`; AE secondary `affordable atlanta wedding dj`. Confirm.

---

## Orlando City Page Rewrite (Apr 16, 2026)

Full voice rewrite of `/orlando-wedding-dj/` following WRITING-VOICE.md guide. Same treatment as Jacksonville.

**What changed:**
- Intro rewritten with Perplexity stats (WalletHub #1, 18k weddings/yr, 300+ venues)
- Feature cards replaced with venue-area expertise (Montverde/Bella Collina, Winter Park/Casa Feliz/Alfond Inn, Downtown/Leu Gardens, Destination couples)
- Specific venue facts: Bella Collina 2,000 acres, Casa Feliz 1933 farmhouse saved by $1.2M community effort, Leu Gardens 50 acres with 7 ceremony locations
- Services streamlined from 6 cards to 4 elegant list items
- FAQ trimmed from 8 to 6, added summer storms FAQ with real weather data
- 2 redundant ai-quotable paragraphs removed (kept 1)
- Team members named in intro (Marc, Khalil, Paul)

**Watch:** Monitor GSC impressions/clicks for "orlando wedding dj" over next 2-4 weeks alongside Jacksonville data.

---

## Jacksonville City Page Rewrite (Apr 16, 2026)

Full voice rewrite of `/jacksonville-wedding-dj/` following new WRITING-VOICE.md guide. Page was the most AI-sounding on either site (credential-stacking, filler sections, identical template structure).

**What changed:**
- Intro rewritten with Perplexity-sourced stats (12k weddings/yr, $38k avg cost) and conversational voice
- "Wedding Trends" and "5 Things to Compare" filler sections cut entirely (-88 lines)
- Feature cards replaced with neighborhood expertise (Ortega/Springfield/Beaches with specific venue details)
- Services streamlined from 6 generic cards to 4 elegant list items
- FAQ trimmed from 9 to 7, answers shortened with personality + local facts (football season conflicts, 10pm noise curfew)
- 3 redundant ai-quotable paragraphs removed (kept 2 with unique angles)
- Preferred vendor status updated to reflect most major Jax venues + TPC Sawgrass
- Live sax positioning corrected: "pioneered the trend" not "every event includes it"

**What stayed:** All schema markup, title/meta, H2 keywords, venue circles, testimonials, pricing table, internal links.

**Watch:** Monitor GSC impressions/clicks for "jacksonville wedding dj" over next 2-4 weeks. Compare bounce rate before/after. This is the first page rewritten under the new voice guide — results inform Orlando and Daytona rewrites.

---

## River House Freshness Pass (Apr 14, 2026)

Targeted content refresh on both COS + AE `/river-house-wedding-dj/` pages to combat ranking decay (COS was #5 for "river house wedding dj" in March, dropped out of top 10).

**Why not full rewrite:** Page already had strong insider content (32ft round dance floor 360° coverage, Council on Aging nonprofit angle, indoor-outdoor flow, Matanzas River/Lighthouse). Perplexity research confirmed bones were solid — just needed fresh angles + signals.

**Added to both pages:**
- "What Most Couples Don't Realize" insider section: one-event-per-day policy, venue pricing context ($9k-$11.5k packages), porte-cochère send-off photos, free on-site parking
- New FAQ: "How much does a wedding at River House cost in total?" (COS: $45k-$75k range, AE: $35k-$55k range) — added to both visible FAQ and FAQPage schema
- "Page last updated: April 14, 2026" freshness signal in footer

**Watch:** Check rankings recovery over next 2-4 weeks. If still flat, consider full rewrite via auto-rewrite pipeline.

> **SEO Rules are in `~/CLAUDE.md`** — they auto-load every session.
> **Historical sessions are in `SEO-ARCHIVE.md`** — reference when needed.

---

## GSC Traffic Dashboard Built (Apr 1, 2026)

Full Google Search Console API integration with SEO dashboard:
- **3 tabs:** Rankings | Traffic | Queries
- **GSC OAuth2** set up on wedding-dj-indexing Google Cloud project
- **Both sites connected:** COS (owner) + AE (auto-verified via GA4)
- **28-day rolling windows** — current vs prior period, health score, KPIs
- **Market region filters** on both Traffic + Queries: NE FL, Central FL, Tampa Bay, Venues, Services, Brand, Generic DJ
- **Opportunity cards** — auto-surface high-impression/low-click queries with one-click Perplexity research prompts
- **Change log system** — prompts auto-log to changes.json, dashboard shows 28-day cooldown timers
- **Keyword gap analysis** — 48 gaps found via Perplexity, saved to `~/seo-data/keyword-gap-analysis-2026-04-01.md`

**Key GSC findings (28-day, both sites combined):**
- 194 total clicks (+16.9%), 17.8k impressions, avg position 19.1
- COS: 151 clicks, 50 pages tracked | AE: 43 clicks (+153%), 13 pages
- Tampa live music queries: 160+ impressions, 0 clicks, pos 3-7 (CTR problem)
- NE FL: 102 queries, only 1 click — mostly ranking page 2+
- Biggest opportunity: St. Pete/Clearwater — 133+ impressions, no dedicated page

---

## Perplexity Rankings Check (Apr 1, 2026)

**City Keywords (Perplexity AI Search):**
| Keyword | Mar 31 | Apr 1 | Change |
|---------|--------|-------|--------|
| st augustine wedding dj | #1 | #1 | HOLDING |
| ponte vedra wedding dj | #1 | #1 | HOLDING |
| jacksonville wedding dj | #9 | #8 | UP 1 |
| amelia island wedding dj (AE) | #1 | #1 | HOLDING |
| daytona beach wedding dj | #1 | OUT | LOST - was #1! |
| gainesville wedding dj | #8 | OUT | LOST |
| orlando wedding dj | OUT | OUT | Still out |
| tampa wedding dj | OUT | OUT | Still out |

**Venue Keywords (Perplexity AI Search) - ALL STABLE:**
| Keyword | Position | Brand |
|---------|----------|-------|
| treasury on the plaza wedding dj | #1 | COS |
| timuquana country club wedding dj | #1 | COS |
| epping forest yacht club wedding dj | #1 / #3 | COS / AE |
| tringali barn wedding dj | #1 | COS |
| tpc sawgrass wedding dj | #1 | COS |
| casa marina wedding dj | #1 | COS |
| lightner museum wedding dj | #5 | COS |
| ponte vedra inn and club wedding dj | #3 | COS |
| omni amelia island wedding dj | #1 | AE |

**Analysis:** Venue keywords locked solid (6x #1). City keywords volatile — Daytona fell from #1 to out, Gainesville lost. Pattern: AI search rewards specific venue content with strong E-E-A-T but city-level pages face more competition from directories. GEO fixes applied Mar 31 may take time to reflect.

---

## Sitemap Audit Fixed (Mar 31, 2026)

Both sitemaps audited and updated:
- **COS:** Added 15 missing pages (11 venues + 4 team/info). Updated lastmod on 6 city pages + homepage. Now 79 URLs total.
- **AE:** Added 10 missing venue pages. Added `<lastmod>` to all entries (previously zero). Now 71 URLs total.
- Skipped 7 "Coming Soon" vendor stubs to avoid thin content signals
- Conservative approach: only updated lastmod on pages that actually changed

---

## GEO Fixes Applied (Mar 31, 2026)

Applied GEO optimization to all 6 COS city pages (Jacksonville, St. Augustine, Orlando, Ponte Vedra, Amelia Island, Daytona Beach):
- Added "Last updated: March 2026" freshness dates to all pages
- Converted 20 H2 headings to question format for AI citation
- Added 18 AI-quotable passages (3 per page) with brand name + city + stats
- Note: Palm Coast page doesn't exist — only 6 city pages found

---

## Perplexity AI Search Check (Mar 26, 2026)

Ran `rank_checker.py` — checks where COS/AE appear in Perplexity AI search results.

**Key findings vs Google rankings:**
- Treasury on the Plaza: **#1 in Perplexity** (still out of Google top 10 — AI search likes our content)
- Lightner Museum: **#5 in Perplexity** (not ranking in Google)
- Timuquana: **#2 in Perplexity** (improved from #3)
- Ponte Vedra Inn & Club: **#4 in Perplexity**
- Jacksonville wedding dj: **#5 in Perplexity** (vs out of top 10 in Google)
- St Augustine wedding dj: **#8 in Perplexity** (improved from #9)
- Gainesville: **#7 in Perplexity**
- Amelia Island: **#10 in Perplexity** (was #1 in Google — different algorithms)

**AE in Perplexity:**
- Budget wedding dj jax: #2 (AE) / #3 (COS)
- Wedding dj under 1000 jax: #6 (AE, dropped from #5) / #8 (COS)

**Not ranking in Perplexity either:** Orlando, Tampa, Daytona, Epping Forest, Bella Collina, White Room, River House, TPC Sawgrass, Casa Marina, Omni/Ritz Amelia

**Takeaway:** AI search results are MORE favorable than Google for our venue/city pages. Treasury #1 and Lightner #5 in Perplexity shows our AI-quotable content strategy is working even where Google hasn't caught up. Continue GEO optimization.

### Competitor Threats (Perplexity)
- **Future Stereo** — #2 for "st augustine wedding dj" (COS is #9), #9 for "jacksonville wedding dj"
- **Our DJ Rocks** — #2 for "orlando wedding dj" (COS not in top 10)
- **Classic Disc Jockeys** — #3 for "best wedding dj orlando"
- **Soundwave Entertainment** — #5 for "orlando wedding dj"
- Orlando market is wide open for competitors; COS has no presence there in AI search

### AI Visibility (Perplexity Citations)
- **COS cited in 6/8 AI queries (75%)** — strong for Jax, live sax, top-rated, budget-friendly
- **AE cited in 1/8 queries (12%)** — CRITICAL gap, only found for "budget friendly"
- COS NOT cited for luxury-specific or regional NE Florida queries
- AE needs quotable first sentences on key pages ASAP

### Strategic Shift: Drop "Luxury" as a Search Target (Mar 26)
**Decision:** Stop optimizing for "luxury wedding DJ" keywords. Focus both COS and AE on generic "[city] wedding dj" searches instead.
- "Luxury" keywords have very low search volume — people search for "wedding dj" not "luxury wedding dj"
- COS luxury positioning still works on-page once visitors land, but it's not how couples search
- Both brands should target the same high-volume keywords: "[city] wedding dj", "best wedding dj [city]", "wedding dj near me"
- COS differentiates through content/experience after the click, not through keyword targeting

---

## Rankings Check (Mar 26, 2026) - Post Core Update Stabilization

March Core Update wrapping up (~Mar 27). Most gains HELD but Jacksonville remains a problem.

**COS Rankings:**
| Keyword | Mar 15 | Mar 26 | Change |
|---------|--------|--------|--------|
| ponte vedra wedding dj | #1 | #1 | HOLDING |
| amelia island wedding dj | #1 | #1 | HOLDING |
| daytona beach wedding dj | #1 | #1 | HOLDING |
| timuquana country club wedding dj | #1 | #1 | HOLDING |
| luxury wedding dj st augustine | #1 | #1 | HOLDING |
| wedding dj with live saxophone florida | - | #1 | NEW CHECK - #1! |
| st augustine wedding dj | #2 | #2 | HOLDING |
| jacksonville wedding dj | #8 | N/A | DOWN - still out of top 10 |
| orlando wedding dj | N/A | N/A | Still out |
| treasury on the plaza wedding dj | N/A | N/A | Still out (AMPLIFY #3) |
| epping forest yacht club wedding dj | N/A | N/A | Still out (AMPLIFY #4) |
| lightner museum wedding dj | N/A | N/A | Still out (venue dominates) |

**AE Rankings:**
| Keyword | Mar 15 | Mar 26 | Change |
|---------|--------|--------|--------|
| budget wedding dj jacksonville | #2 | #2 | HOLDING |
| st augustine wedding dj (AE) | #4 | #4 | HOLDING |
| affordable wedding dj jacksonville | #3 | #6 | DOWN 3 - directories pushing above |

### Analysis
- **6 keywords at #1** - strongest position ever. Core update gains held.
- **Jacksonville COS still out of top 10** - was briefly #8 on Mar 15, back out. 8 competitors + directories ahead. Needs significant content refresh or backlink push.
- **AE "affordable" slipping** - directories (WeddingWire, Knot, Eventective, A-1 Majestic, DJs To Go) all pushing above. Was #2 in Feb, now #6.
- **Venue keywords appear permanently stuck** - Treasury, Epping, Lightner all dominated by venue sites + AMPLIFY for 3+ months. Venue interviews remain critical.

### Action Items
1. **Jacksonville COS** - Priority #1. Page needs fresh 2026 content, possibly a blog post or case study to build topical authority
2. **AE affordable keyword** - Consider adding more long-tail content, cost guide blog post
3. **Venue interviews** - Epping Forest and Treasury (April priority, unchanged)
4. **April 1 full re-check** - Run complete 140-keyword check after core update fully settles

---

## GEO FAQ Rewrite (Mar 25, 2026)
Rewrote FAQs on all 7 COS city pages for AI-quotable natural language:
- Jacksonville (8 FAQs), Orlando (8), St. Augustine (6), Tampa (7), Ponte Vedra (6), Amelia Island (7), Daytona Beach (6 - expanded from 4)
- Question-based H2s, 40-60 word standalone answers, entity signals in every answer
- Updated FAQPage schema JSON-LD to match
- **Still TODO from GEO audit:** Rewrite remaining non-FAQ content for quotability, add freshness dates to remaining pages

---

## Rankings Check (Mar 15, 2026) - MAJOR RECOVERY! March Core Update Helping

**COS Rankings:**
| Keyword | Mar 9 | Mar 15 | Change |
|---------|-------|--------|--------|
| timuquana country club wedding dj | #1 | #1 | HOLDING |
| ponte vedra wedding dj | #3 | #1 | UP 2 - RECLAIMED #1! |
| st augustine wedding dj | #8 | #2 | UP 6 - Massive recovery |
| jacksonville wedding dj | N/A | #8 | BACK IN TOP 10! |
| amelia island wedding dj | #1 | #1 | HOLDING |
| daytona beach wedding dj | - | #1 | NEW CHECK - #1! |
| luxury wedding dj st augustine | ~#6 | #1 | JUMPED TO #1! |
| orlando wedding dj | N/A | N/A | Still out |
| treasury on the plaza wedding dj | N/A | N/A | Still out (AMPLIFY #3) |
| lightner museum wedding dj | N/A | N/A | Still out (venue dominates) |
| epping forest yacht club wedding dj | N/A | N/A | Still out (AMPLIFY #5) |

**AE Rankings:**
| Keyword | Mar 9 | Mar 15 | Change |
|---------|-------|--------|--------|
| budget wedding dj jacksonville | #5 | #2 | UP 3 |
| affordable wedding dj jacksonville | #10 | #3 | UP 7! |
| st augustine wedding dj (AE) | N/A | #4 | BACK IN TOP 5! |

### Analysis: March 2026 Core Update Recovery

The March 2026 Core Update (started ~March 13) is actively helping both brands:
- **9 of 14 tracked keywords now in top 10** (up from 5 of 14 on March 9)
- E-E-A-T signals (real reviews, visible pricing, local content) being rewarded
- Directories still present but no longer flooding every position
- Competitors losing ground: Y Entertainment, Future Stereo, Full Circle all dropped

**Strategy validated:** The "don't panic-revert" approach from March 9 was correct. Continue waiting until ~April 1.

### Competitor Changes (Mar 15)
- Y Entertainment: Lost Ponte Vedra #1 (now #3), Jax at #3
- Future Stereo: Dropped out of Jax top 10, St. Aug at #8
- Full Circle: Dropped from #4 to #6 for Jacksonville
- AMPLIFY: Stable on venue keywords (Treasury #3, Epping #5)

### Next Steps
- **~April 1:** Full re-check after March core update finishes
- **Prepare venue interviews** for Epping Forest and Treasury (April priority)
- **Continue GEO optimization** across city pages
- **AE GBP fix** - still blocked on verification

---

## Rankings Check (Mar 9, 2026) - CONCERNING DROPS + ALGORITHM UPDATE CONTEXT

**COS Rankings:**
| Keyword | Feb 25 | Mar 9 | Change |
|---------|--------|-------|--------|
| timuquana country club wedding dj | #1 | #1 | HOLDING |
| ponte vedra wedding dj | #1 | #3 | DOWN 2 - Y Entertainment took #1 |
| st augustine wedding dj | #1 | #8 | DOWN 7 - directories flooding top spots |
| jacksonville wedding dj | #7 | N/A | DROPPED OUT - cannibalization fix may have backfired |
| orlando wedding dj | N/A | N/A | Still out |
| treasury on the plaza wedding dj | N/A | N/A | Still out - AMPLIFY at #2 |
| epping forest yacht club wedding dj | N/A | N/A | Still out - AMPLIFY at #4 |
| lightner museum wedding dj | N/A | N/A | Still out |

**AE Rankings:**
| Keyword | Feb 25 | Mar 9 | Change |
|---------|--------|-------|--------|
| budget wedding dj jacksonville | #1 | #5 | DOWN 4 - directories pushing above |
| affordable wedding dj jacksonville | #2 | #10 | DOWN 8 - directories dominating |
| st augustine wedding dj (AE) | #7 | N/A | DROPPED OUT |

### Algorithm Update Analysis (KEY FINDING)

**Three overlapping Google algorithm updates during our ranking drop period:**

1. **Feb 2026 Discover Core Update** (Feb 5-27) - Completed 2 days after our Feb 25 cannibalization fix
2. **Unconfirmed search volatility waves** throughout Feb and into March
3. **March 2026 Core Update** (started ~March 13, expected through ~March 27) - Pre-rollout turbulence likely hitting by March 9

**Evidence this is algorithmic, not just our changes:**
- Directories (WeddingWire, Knot, Eventective) rose across ALL our keywords simultaneously
- This pattern of high-authority aggregators rising is consistent with core update behavior
- Not just COS/AE affected - this is an industry-wide shift

**Revised understanding of ranking drops:**

| Old Assumption | New Understanding |
|---|---|
| Cannibalization fix caused Jax drop | Likely 70% algorithm update + 30% our changes - do NOT revert yet |
| St. Aug drop is page-specific | Directories flooding top spots = algorithmic shift favoring aggregators |
| AE budget keyword drops | Same directory pattern - algorithmic, not page-specific |
| Can beat directories on city keywords | Directories have 70-90 DA - pivot to venue keywords (less directory competition) |

### CRITICAL STRATEGY: Do NOT Panic-Revert

The March 2026 Core Update is still rolling out (~through March 27). Making reactive changes during an active core update sends mixed signals to Google and will likely make things worse. **Wait for dust to settle (~April 1).**

### Revised Action Plan (Phased)

**Phase 1 - Safe Now (won't conflict with update):**
- Fix AE title tag (add "affordable") - simple metadata, low risk
- Rewrite FAQs to natural language - improves content quality
- Add AI-quotable summary blocks - adds content, doesn't change existing
- Directory audit & expand citations - off-page, doesn't touch site
- Create AE cost guide blog post - new content, doesn't compete

**Phase 2 - After Update Settles (~April):**
- Create real wedding blog posts per venue (AMPLIFY's two-page strategy)
- Create venue hub pages (/jacksonville-wedding-venues/)
- Multi-schema enhancement on key pages

**Phase 3 - Recovery Only (if rankings don't recover by April 1):**
- Investigate Jacksonville cannibalization - may need partial revert
- St. Augustine content refresh
- Ponte Vedra content deepening

**Next check: ~April 1, 2026** - after March core update finishes

---

## Rankings Check (Feb 25, 2026)

**COS Rankings:**
| Keyword | Feb 10 | Feb 25 | Change |
|---------|--------|--------|--------|
| ponte vedra wedding dj | #1 | #1 | HOLDING |
| st augustine wedding dj | #4 | #1 | UP 3 - Massive recovery! |
| jacksonville wedding dj | #7 | #7 | HOLDING - homepage ranking, not city page |
| timuquana country club | #1 | #1 | HOLDING |
| treasury on the plaza | N/A | N/A | Still out - AMPLIFY at #2 |
| lightner museum | N/A | N/A | Still out |
| epping forest yacht club | N/A | N/A | Still out - AMPLIFY at #3 |
| orlando wedding dj | N/A | N/A | Still out |

**AE Rankings:**
| Keyword | Feb 10 | Feb 25 | Change |
|---------|--------|--------|--------|
| budget wedding dj jax | #2 | #1 | UP 1 - First time at #1! |
| affordable wedding dj jax | #4 | #2 | UP 2 |
| st augustine wedding dj | #6 | #7 | DOWN 1 |

**Analysis:**
- COS core city keywords are strong - #1 for Ponte Vedra, St. Augustine, and Timuquana
- AE budget keywords hitting all-time highs
- Venue keywords (Treasury, Lightner, Epping) still completely absent - AMPLIFY owns this space
- Jacksonville stuck at #7 with homepage ranking instead of city page

**Also completed:** AE copyright year sweep - updated 46 pages from 2025 to 2026 (freshness signal)

---

## ✅ COMPLETED (Feb 26, 2026) - Homepage Mobile PageSpeed Optimization

**Problem:** Mobile PageSpeed dropped to 63. Audited homepage and found multiple performance issues.

**What worked (kept):**
- Added `loading="lazy"` to video poster image (was downloading 51KB immediately)
- Removed duplicate `fetchpriority="high"` preload for logo (was diluting priority signal)
- Moved JSON-LD schema blocks (~10KB) from `<head>` to bottom of `<body>`
- Recompressed lightner gallery image from 108KB to 95KB (under 100KB rule)

**What backfired (reverted):**
- Extracting inline CSS to async external stylesheet — caused layout shifts, dropped desktop from 98 to 78
- setTimeout wrappers on Meta Pixel and GA — GA `async` was already browser-optimized, wrapper was counterproductive
- CTA background lazy-load via IntersectionObserver — caused CLS when background popped in on desktop

**Results:** Mobile 63 → 81 (+18 points), Desktop stayed at 98.

**Lesson learned:** Simple fixes (lazy loading, removing redundant preloads, moving non-render content to body) give the best ROI. Aggressive optimizations (async CSS extraction, JS-based lazy backgrounds, setTimeout wrappers) introduce CLS and timing issues that hurt more than they help on a single-page static site.

---

## ✅ COMPLETED (Feb 25, 2026) - Jacksonville Keyword Cannibalization Fix

**Problem:** COS stuck at #7 for "jacksonville wedding dj" — Google ranking homepage instead of dedicated `/jacksonville-wedding-dj/` page. Homepage FAQ schema had Jacksonville-specific questions competing with the city page's FAQ schema, splitting authority.

**Changes made to `index.html`:**
1. **Meta description** — Removed "Jacksonville, St. Augustine, Orlando, and Tampa", replaced with "North and Central Florida"
2. **OG description** — Same change
3. **FAQ schema Q1** — "How much does a wedding DJ cost in Jacksonville and St. Augustine?" → "...in Florida?"
4. **FAQ schema Q7** — "Who is the best wedding DJ in Jacksonville Florida?" → "...in Florida?" (answer broadened too)
5. **FAQ schema Q9** — "...best wedding entertainment company in St. Augustine?" → "...in North Florida?" (answer broadened too)
6. **On-page FAQ** — Updated visible pricing question to match schema ("...in Florida?")

**NOT changed (intentional):**
- Homepage `areaServed` in LocalBusiness schema (best practice to keep)
- "What areas do you serve?" FAQ (service area question, not keyword-targeting)
- Jacksonville city page content (already solid — 5,000+ words)
- Internal linking (already 41 links to Jacksonville page)

**Validation:** Rich Results Test passed - 8 valid items, 0 errors (FAQ, LocalBusiness, Articles, Organization, Review snippets all green).

**Next steps:** Monitor Jacksonville ranking over next 2-3 weeks. Expect Google to reindex homepage within ~1 week and start favoring the city page.

---

## ✅ COMPLETED (Feb 22, 2026) - Homepage Featured Moment Image

**What:** Added Craig & Ashley wedding photo (group hug with DJ Corey) to COS homepage as standalone featured moment section right after the hero.

**Details:**
- Photo by Rob Futrell at Sawgrass Country Club
- Optimized: 53KB full (800px), 21KB mobile (400px), WebP format
- Geotagged with Sawgrass Country Club coordinates (Ponte Vedra Beach)
- Clean presentation: just image + photo credit, no headline/tagline
- Location: `/images/craig-ashley-wedding/couple-hugging-dj-corey.webp`

**Why it matters:** Emotional image showing the personal connection between DJ and couple - sells the experience, not just the service. High visibility placement immediately after hero.

---

## ✅ COMPLETED (Feb 19-20, 2026) - Photo + Video Service Pages

**What:** Created new Photo + Video service pages for both COS and AE, featuring white-label partnership with Rob + Jill Futrell (photographers/videographers).

**Pages Created:**
- [x] `/Users/coreypeterson/cos-website/photo-video/index.html` - Luxury positioning
- [x] `/Users/coreypeterson/ae-entertainment/photo-video/index.html` - Budget positioning

**Key Features:**
- Top-level nav item (not under Services dropdown)
- White-label service - positioned as COS/AE offering with Rob + Jill named but NOT linked
- No pricing shown - "Contact for custom quote"
- Dynamic portfolio from Rob's JSON feed (`https://robfutrell.com/feed/recent-work.json`)
- Auto-updates when Rob publishes new wedding sneak peeks
- Proper aspect ratios for vertical (2:3) and horizontal (3:2) images
- Service, FAQPage, and LocalBusiness schema markup

**Navigation Updates:**
- [x] Updated 84 COS pages - added "Photo + Video" nav link before Pulse!
- [x] Updated 69 AE pages - added "Photo + Video" nav link after Services
- [x] Updated both sitemaps

**SEO Targets:**
- COS: "wedding photo video st augustine", "jacksonville wedding photographer"
- AE: "affordable wedding photo video jacksonville"

**Note:** Pulse page was also pushed (needs work but user wanted it live to start indexing).

---

## ✅ COMPLETED (Feb 9, 2026) - Treasury Page SEO Improvements

**Issue:** Treasury on the Plaza dropped from #1 (Dec 2025) to out of top 10 (Feb 2026). AMPLIFY at #2, venue sites and directories dominating.

**Fixes Applied:**
- [x] Added Review schema for Liz testimonial (structured data boost)
- [x] Added "Quick Facts" box for AI-quotable content (matches Lightner format)
- [x] Added 2026 mention in intro paragraph (freshness signal)
- [x] Submitted to Google Indexing API
- [x] Deployed to Netlify

**Note:** Treasury page already had solid insider tips, timeline, and FAQs from Jan 10 update. The page content is strong - issue is likely competitor activity (AMPLIFY, Y Entertainment) and freshness signals.

**Monitor:** Check rankings again Feb 16-20 to see if these changes help.

---

## 🚨 ALERT (Feb 8, 2026) - COS City Keywords Dropping

**COS Rankings (Feb 8) - CONCERNING DROPS:**
| Keyword | Feb 1 | Feb 8 | Change |
|---------|-------|-------|--------|
| ponte vedra wedding dj | #1 | #2 | DOWN 1 - Y Entertainment took #1 |
| st augustine wedding dj | #2 | #6 | DOWN 4 - Future Stereo, directories gaining |
| jacksonville wedding dj | #4 | #7 | DOWN 3 - Full Circle, Y Entertainment passed |
| timuquana country club | #1 | #1 | HOLDING |
| treasury on the plaza | #9 | N/A | Still out - AMPLIFY at #2 |
| lightner museum | N/A | N/A | Still out |
| epping forest yacht club | N/A | N/A | Still out - AMPLIFY at #6 |
| orlando wedding dj | N/A | N/A | Still out |

**AE Rankings (Feb 8) - STRONG:**
| Keyword | Feb 1 | Feb 8 | Change |
|---------|-------|-------|--------|
| budget wedding dj jax | #2 | #2 | HOLDING |
| affordable wedding dj jax | #4 | #3 | UP 1 |
| st augustine wedding dj | N/A | #4 | BACK - now outranking COS! |

**Competitors Gaining Ground:**
- **Y Entertainment** (Ponte Vedra): 151 WeddingWire reviews, took Ponte Vedra #1
- **Future Stereo** (St. Augustine): Local DJ on Anastasia Island, climbing fast
- **Full Circle Wedding DJs** (Jacksonville): Gaining visibility

**Root Cause Analysis:**
1. **Content freshness** - St. Augustine footer still shows "© 2025" (stale signal)
2. **Competitor activity** - Y Entertainment and Future Stereo actively building presence
3. **Directory dominance** - WeddingWire, The Knot, Zola always in top spots
4. **Review recency** - Competitors may have fresher reviews
5. **No hero image on Jacksonville page** - just CSS gradient, could hurt engagement

**Recommended Fixes:**
- [ ] Update copyright year to 2026 across all pages
- [ ] Add hero image to Jacksonville page (like St. Augustine has)
- [ ] Add Review schema for testimonials (structured data boost)
- [ ] Refresh intro paragraphs with current year mentions
- [ ] Push for fresh Google reviews (ask recent couples)
- [ ] Consider blog posts or content updates to signal freshness

---

## ✅ COMPLETED (Feb 1, 2026) - Weekly SEO Audit

**Indexing Status:**
| Site | Jan 22 | Feb 1 | Target |
|------|--------|-------|--------|
| COS | 10 pages | ~10+ pages | 62 |
| AE | 2 pages | 3 pages | 59 |

AE still severely underindexed but improving (2 → 3 pages).

**COS Rankings (Feb 1):**
| Keyword | Jan 22 | Feb 1 | Change |
|---------|--------|-------|--------|
| ponte vedra wedding dj | #1 | #1 | HOLDING |
| st augustine wedding dj | #2 | #2 | HOLDING |
| jacksonville wedding dj | #4 | #4 | HOLDING |
| timuquana country club | #1 | #1 | HOLDING |
| treasury on the plaza | #8 | #9 | Down 1 |
| lightner museum | N/A | N/A | Still out |
| epping forest yacht club | N/A | N/A | Still out |
| orlando wedding dj | N/A | N/A | Still out |

**AE Rankings - RECOVERING:**
| Keyword | Jan 22 | Feb 1 | Change |
|---------|--------|-------|--------|
| budget wedding dj jax | #6 | #2 | UP 4! |
| affordable wedding dj jax | N/A | #4 | BACK! |

**Analysis:**
- Jan 27 fixes (404 redirects + reindexing) ARE WORKING
- AE budget keywords bouncing back strong
- COS core keywords stable
- Venue keywords (Epping, Lightner, Treasury) still weak - need insider content
- AMPLIFY ranking for Epping Forest (#6) and Treasury - targeting venue keywords

**Next Steps:**
- [ ] Interview Epping Forest contact for insider content
- [ ] Interview Lightner Museum contact for insider content
- [ ] Continue monitoring AE reindexing (should improve more by Feb 10)
- [ ] AE GBP still blocked (verification issue)

---

## ✅ COMPLETED (Jan 27, 2026) - GSC Deep Dive & 404 Cleanup

**Root Cause Analysis from Google Search Console:**

Exported GSC Coverage report and found the real issues:

| Issue | Pages | Status |
|-------|-------|--------|
| Discovered - not indexed | 40 | All venue pages — Google never crawled them |
| Not found (404) | 30 | Old WordPress URLs still being crawled |
| Page with redirect | 9 | Expected |
| Crawled - not indexed | 3 | Low priority |

**The Problem:**
1. 90+ venue pages created Dec 23-Jan 1 triggered Google to deprioritize crawling
2. 30 old WordPress URLs (blog, team, categories) returning 404s made site look "unhealthy"
3. Google discovered venue pages via sitemap but never actually visited them (Last crawled: 1969-12-31 = never)

**What Was Fixed:**
- Added `_redirects` rules for all old WordPress URLs:
  - `/blog/*` → 410 Gone
  - `/our-team/*` → 410 Gone
  - `/category/*`, `/tag/*`, `/author/*` → 410 Gone
  - `/wp-*`, `/portfolio/*` → 410 Gone
  - `/live-musicians/` → 301 to `/services/live-musicians/`
- Deployed to Netlify
- Resubmitted all 62 COS pages to Google Indexing API
- Resubmitted all 59 AE pages to Google Indexing API

**Expected Recovery:** 1-2 weeks for Google to:
1. Stop crawling 404 URLs (sees 410 Gone)
2. Start crawling the 40 venue pages
3. Restore AE budget keyword rankings

**Monitor:** Check `site:` searches and GSC Coverage report Feb 3-5

---

## 🚨 CRITICAL ALERT (Jan 22, 2026)

**MASSIVE DEINDEXING ISSUE DISCOVERED**

Both COS and AE sites have been partially deindexed by Google:
- **AE:** Only 2 pages showing in `site:ae-djs.com` (should be 59)
- **COS:** Only 10 pages showing in `site:coscelebrations.com` (should be 62)

**This explains AE's ranking collapse:**
- "budget wedding dj jacksonville": #1 → #6
- "affordable wedding dj jacksonville": #3 → out of top 10
- "st augustine wedding dj": #6 → out of top 10

**Action Taken:**
- ✅ Resubmitted all 59 AE pages to Google Indexing API (Jan 22, 1:40pm)
- ✅ Resubmitted all 62 COS pages to Google Indexing API (Jan 22, 1:42pm)

**Expected Recovery:** 1-2 weeks for Google to recrawl and reindex

**Monitor:** Check `site:` searches weekly and GSC for reindexing progress

---

## 📌 NEXT SESSION TODO
- [ ] **Check reindexing progress (Feb 3-5)** — Run `site:coscelebrations.com` and `site:ae-djs.com`, should see more than 10/2 pages
- [ ] **Check GSC Coverage report (Feb 3-5)** — 404 count should be dropping, "Discovered not indexed" should be shrinking
- [ ] **Monitor AE budget keywords (Feb 10)** — "budget wedding dj jacksonville" should recover from #6 back toward #1
- [ ] **Update AE Google Business Profile** — website still points to affordable-entertainment.com (BLOCKED - verification issue)
- [ ] **Enhance Live Musicians Page** — add photos, video clips, testimonials, pricing hints (photos now in ~/cos-media/live-musicians/)
- [ ] **Add award badge images** — user will find The Knot & WeddingWire badge images from email
- [ ] **Monitor Google Indexing** — check Search Console for homepage LCP improvement
- [ ] **Venue Partnerships Section** — add preferred vendor logos to COS homepage
- [ ] **Create new venue pages** — 40+ opportunities identified (see seo-data/new-venue-opportunities.md)
- [ ] **Apply hero LCP fix to venue pages** — 45 venue pages still use CSS background (lower priority)
- [ ] **Implement responsive images** — Treasury responsive images ready in `/responsive/` subfolder. Use srcset for mobile optimization. Smart photo tool at `scripts/smart-photo.py`
- [ ] **Interview Epping Forest + Bella Collina** — dropped out of rankings, need insider content
- [ ] **Create Kelly Farms venue page** — added placeholder link on St. Augustine pages, need photos from user
- [ ] **Monitor Tringali Barn indexing** — new pages created Jan 20, check GSC in ~1 week

**Automated (no action needed):**
- ✅ Weekly SEO audits run every Sunday 8am (rankings + competitors + technical audits + report + alerts)

## 📊 CURRENT RANKINGS (Jan 22, 2026)

**COS Celebrations:**
| Keyword | Jan 10 | Jan 22 | Change |
|---------|--------|--------|--------|
| jacksonville wedding dj | **#5** | **#4** | ⬆️ +1 |
| ponte vedra wedding dj | **#1** | **#1** | — HOLDING |
| st augustine wedding dj | N/A | **#2** | ⬆️ RECOVERED |
| treasury on the plaza wedding dj | N/A | #8 | 🔄 back but weak |
| lightner museum wedding dj | N/A | N/A | still dropped |
| timuquana country club wedding dj | #1 | ? | not checked |
| orlando wedding dj | N/A | N/A | still not ranking |

**AE Entertainment:**
| Keyword | Jan 10 | Jan 22 | Change |
|---------|--------|--------|--------|
| budget wedding dj jacksonville | **#1** | **#6** | ⬇️ -5 DEINDEXED |
| affordable wedding dj jacksonville | **#3** | N/A | ⬇️ DISAPPEARED |
| st augustine wedding dj | **#6** | N/A | ⬇️ dropped |

**Analysis:**
- **🎉 COS St. Augustine RECOVERED:** Fixed to #2 after Jan 14 bug fix (page was showing AE content)
- **✅ COS holding strong:** Jacksonville #4, Ponte Vedra #1
- **🚨 AE CRISIS:** Massive deindexing caused ranking collapse on all budget keywords
- **⚠️ Orlando:** Still not ranking 16 days after reindex - likely too competitive
- **Action:** Both sites resubmitted to Google Indexing API Jan 22

---

## ✅ COMPLETED (Jan 22, 2026) - CRITICAL: Fixed Deindexing Crisis

**Discovered massive deindexing issue affecting both sites:**
- AE: Only 2 of 59 pages showing in Google (99% deindexed)
- COS: Only 10 of 62 pages showing in Google (84% deindexed)

**Root cause:** Unknown - possibly Google crawl issue or penalty

**Actions taken:**
- [x] Resubmitted all 59 AE pages to Google Indexing API
- [x] Resubmitted all 62 COS pages to Google Indexing API
- [x] Updated rankings.json with Jan 22 data
- [x] Documented in SEO.md

**Expected recovery:** 1-2 weeks for reindexing

**This explains:**
- AE budget keyword collapse (#1 → #6, #3 → out of top 10)
- AE St. Augustine drop (#6 → dropped)
- Various COS venue keyword drops

---

## ✅ COMPLETED (Jan 20, 2026) - Tringali Barn Venue Pages + St. Augustine Fixes

**Fixed Critical Issues from Weekly SEO Report:**
- Fixed 2 broken images on St. Augustine page:
  - `/images/venues/the-white-room-venue-320.webp` → actual White Room photo
  - `/images/venues/river-house-venue-320.webp` → actual River House photo
- Removed Villa Blanca from venue list (not a separate venue, just a space at White Room)

**New Venue Pages Created:**
- **COS Tringali Barn** (`/tringali-barn-wedding-dj/`)
  - 8 photos from Riley + Robert wedding (photographer: Rob Futrell)
  - Photos geotagged with Tringali Barn coordinates (29.8083, -81.2906)
  - Bento gallery with lightbox
  - Sample wedding timeline (4pm-10pm)
  - FAQ schema + LocalBusiness schema
- **AE Tringali Barn** (`/tringali-barn-wedding-dj/`)
  - Budget-focused version ($800 starting)
  - Simpler layout without gallery

**St. Augustine Page Updates:**
- Added Tringali Barn venue card with link (both COS and AE)
- Added Kelly Farms placeholder (pending photos from user)

**Sitemaps Updated:**
- COS: Added `/tringali-barn-wedding-dj/` with lastmod 2026-01-18
- AE: Added `/tringali-barn-wedding-dj/`

**Indexing Requested:**
- Both Tringali Barn pages submitted to Google Indexing API

**Pending:** Kelly Farms venue page (waiting for photos)

---

## ✅ COMPLETED (Jan 14, 2026) - CRITICAL: COS St. Augustine Page Had AE Content

**Root Cause Found for St. Augustine Ranking Drop:**
The COS St. Augustine page (`/st-augustine-wedding-dj/`) was showing **AE Entertainment content** instead of COS content. This explains why COS dropped completely from "st augustine wedding dj" rankings while AE suddenly appeared at #6.

**What was wrong:**
- Title said "AE Entertainment" not "COS Celebrations"
- Pricing showed $800 (AE's price) instead of $1,500
- Schema markup had AE phone number and brand
- AE logo was displaying
- All content was budget-focused, not luxury/live musicians

**Fix applied:**
- Complete page rewrite with proper COS branding
- New title: "St. Augustine Wedding DJ + Live Musicians | COS Celebrations"
- $1,500 starting price throughout
- COS schema markup (LocalBusiness, Service, FAQPage)
- Live musicians angle emphasized
- St. Augustine venue spotlights (Treasury, Lightner, White Room, River House, Fountain of Youth, Villa Blanca)
- Proper COS merlot styling and contact info

**Deployed & Reindexed:** Page pushed to production and submitted to Google Indexing API.

**Expected outcome:** COS should return to St. Augustine rankings within 1-2 weeks as Google recrawls the corrected page.

---

## ✅ COMPLETED (Jan 14, 2026) - SEO Automation + Technical Fixes

**Added Technical Audits to Weekly Automation:**
- Created `audit_runner.py` in `~/cos-tools/seo-tracking/`
- Updated `run-weekly.sh` to include audit step (now 5 steps: rankings → competitors → audits → report → alerts)
- Weekly report now includes SITE HEALTH section showing audit pass/fail status
- Alerts now fire for audit regressions (was passing, now failing)

**Fixed COS Issues:**
- Fixed 2 broken links on pricing page:
  - `/white-room-wedding-dj/` → `/the-white-room-wedding-dj/`
  - `/epping-forest-wedding-dj/` → `/epping-forest-yacht-club-wedding-dj/`

**Fixed AE Issues:**
- Fixed `/#services` links (8 pages) → changed to `/services/` (homepage has no #services anchor)
- Added standalone LocalBusiness schema to 67 AE pages (audit was expecting top-level schema, not nested in Service)

**Deployed & Indexed:**
- Both sites deployed to Netlify
- COS: 59 pages submitted to Google Indexing API
- AE: 61 pages submitted to Google Indexing API

**New Commands:**
```bash
# Run technical audits manually
cd ~/cos-tools/seo-tracking && python3 audit_runner.py

# View latest audit results
python3 audit_runner.py --report
```

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

### Session: March 26, 2026 - Rankings Check + Google Ads 7-Day Review

**Rankings Check (9 keywords):**

| Keyword | COS | AE |
|---------|-----|----|
| jacksonville wedding dj | #3 | N/A |
| st augustine wedding dj | #1 | N/A |
| orlando wedding dj | #3 | N/A |
| ponte vedra wedding dj | #3 | N/A |
| amelia island wedding dj | #2 | N/A |
| affordable wedding dj jacksonville | #3 | #4 |
| budget wedding dj jacksonville | #3 | #4 |
| best wedding dj jacksonville | #3 | N/A |
| daytona beach wedding dj | #1 | N/A |

**Summary:** COS top 3 on all 9 keywords. #1 on St. Augustine and Daytona Beach. March core update continues helping. AE only visible on affordable/budget keywords (#4 on both).

**Google Ads 7-Day Check (Mar 19-25):**
- Total spend: $289.56 | 76 clicks | $3.81 avg CPC
- Real conversions (sign-ups/calls): 0
- Negative keywords added Mar 24 - giving 2 more weeks to assess impact
- Page view and Get directions conversions still set as Primary (Google Ads UI bug prevented change - try Google Ads Editor)

**TODO:**
- ~April 1: Full re-check all rankings after March core update finishes
- ~April 9: Reassess Google Ads ROI after negative keywords take effect
- Respond to unresponded reviews on The Knot + WeddingWire
- Change Page view / Get directions to Secondary in Google Ads Editor

---

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
- Added Live Musicians link to ALL venue pages with dropdown nav (33 pages updated)
- Added "Where We Celebrate" section to Pricing page (8 cities + 8 venues)
- Fixed venue cross-links for St. Augustine region (6 venues now properly interlinked)

**Completed (Evening Session):**
- ✅ Venue cross-links for ALL 7 remaining regions:
  - Jacksonville: 10 venues
  - Ponte Vedra: 6 venues
  - Amelia Island: 5 venues
  - Orlando: 8 venues
  - Tampa: 6 venues
  - Daytona: 5 venues
  - Gainesville: 3 venues
- ✅ Created media library at `~/cos-media/` for musician photos/videos
- ✅ Organized 19 existing musician photos (15 sax, 2 percussion, 2 duo)

**Remaining:**
- Hero LCP fix (61 pages still using CSS background-image)
- Epping Forest + Bella Collina interviews (dropped out of rankings)

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
