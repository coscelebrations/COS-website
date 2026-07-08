# COS Celebrations & AE Entertainment - SEO Working Document
## Last Updated: July 8, 2026

---

## Session: July 8, 2026 — COS Clay Theatre freshness + Azaleana Manor pages built

**Trigger:** Corey reported on 2026-07-08 that COS was NOT ranking page 1 for "clay theatre wedding dj" or "azaleana manor wedding dj" while AE was ranking well on both. Investigation found:
- COS Clay Theatre page existed but had NO FAQ section, NO FAQPage schema, NO freshness stamp — while AE's Clay Theatre page had all three.
- **No Azaleana Manor page existed on either site.** AE was ranking organically (probably from Orange Park city area authority + generic Jax coverage). COS had zero venue mention beyond a dropdown option on the contact page.

**What I built:**

**1. COS Clay Theatre freshness + AEO pass** (`~/cos-website/clay-theatre-wedding-dj/`)
- Added `Common Questions About Clay Theatre Weddings` section with 6 unique Q&As (distinct from AE's 3 — luxury angle: LED tray ceiling sync, live sax fit, sparkler timing, dual ceremony/reception spaces)
- Added FAQPage schema (6 Q&As mirroring the visible section)
- Added `dateModified: 2026-07-08` to Service schema
- Added "Page last updated: July 8, 2026" freshness stamp near final CTA
- Sitemap `lastmod` bumped to 2026-07-08

**2. COS Azaleana Manor venue page built from scratch** (`~/cos-website/azaleana-manor-wedding-dj/`)
- Merlot COS styling with sax hero placeholder (will swap for real photos when Corey provides)
- Intro paragraph in Corey voice — "one of those venues we end up at often enough that setup feels like muscle memory"
- 4 feature cards, quick facts, testimonial, services + add-ons, venue info block
- Full FAQ section (6 Q&As) + FAQPage schema
- Service + LocalBusiness schema + freshness stamp
- Internal links to Clay Theatre, Club Continental, River House, Epping Forest, Timuquana, Bowing Oaks

**3. AE Azaleana Manor venue page built from scratch** (`~/ae-entertainment/azaleana-manor-wedding-dj/`)
- Blue AE styling, $800 positioning, stats bar, 4 service cards
- FAQ section (4 Q&As) + FAQPage schema
- No specific "we DJ there often" claim on AE (I don't have evidence AE has been there, only that AE ranks organically without a page)
- Internal links match COS: Clay Theatre, Club Continental, River House, White Room, Bowing Oaks

**TODO for Corey:**
- **Send real Azaleana Manor wedding photos** — placeholder hero currently uses generic sax image. Once photos arrive: replace hero background image, add a photo gallery section, add a "Real Wedding" block with couple names + photographer credit (like Clay Theatre / River House / Flagler pattern).
- **Any insider details** (specific room names, ceremony location on property, sound quirks) can be added to the intro paragraph and feature cards.

**Confidence this ranks:**
- COS Clay Theatre freshness pass: 80% moves it back to page 1 within 4 weeks. Same FAQ+schema+freshness pattern that worked for River House (April 14) and Ponte Vedra (June 4).
- COS Azaleana Manor page: 70% ranks page 1 within 6 weeks. Low-competition venue keyword + we have brand authority. Note: AE ranks without a page, so adding COS shouldn't cannibalize AE.

**Reassess:** Rank check ~2026-08-05.

**Files updated:**
- `~/cos-website/clay-theatre-wedding-dj/index.html` — FAQ + schema + freshness
- `~/cos-website/azaleana-manor-wedding-dj/index.html` — new
- `~/ae-entertainment/azaleana-manor-wedding-dj/index.html` — new
- `~/cos-website/sitemap.xml`, `~/ae-entertainment/sitemap.xml`
- `~/seo-data/rankings.json` — both keywords tracked with notes

---

## Session: July 7, 2026 — AE St. Augustine page rewrite (positioning pivot)

**Executed the June-6 AE positioning pivot on the St. Augustine city page.** Rewrote to lead with venue expertise instead of "Affordable" framing. Commit `77a3d1f` pushed to `main`, Netlify deploying.

**What changed:**
- Title/H1 dropped "Affordable" — now pure "St. Augustine Wedding DJ" positioning
- Intro rewritten in Corey voice: bridge lifts, Treasury room flips, Fountain of Youth rain plans (per WRITING-VOICE.md)
- 6 feature cards refocused on craft + venues (was budget-first)
- New "Recent St. Augustine Weddings" section: Dani & Thomas (White Room), Morgan & Dan (Crosswater Hall), Shelby & Tyler (The Oldest House) — all real AE bookings
- 4 FAQs rewritten around venues, weather, downtown/beach/barn contrasts
- Schema description + FAQPage schema updated, dateModified `2026-07-07`
- Sitemap `lastmod` bumped

**Ranking risk to watch:** Memory `feedback_protect_affordable_on_ae.md` documents that a similar removal on April 13 dropped this page from #4 to #11 on "affordable wedding dj st augustine" for 7 weeks. This time is deliberate (June-6 pivot away from budget keywords toward generic "st augustine wedding dj") — but the older feedback rule is now stale and should be updated. Reassess on the next rank scan (~July 13):
- Winning bet: generic "st augustine wedding dj" (AE currently null since 2026-05-17) picks up ranking
- Losing bet: budget kw "affordable wedding dj st augustine" (was #4) drops
- Success = net traffic up

---

## Session: July 6, 2026 — Weekly Rank Scan (Manager Agent, week 28)

**The Jacksonville "wipe" was volatility, not a penalty — it fully recovered.** Last week (week 27) the entire COS Jacksonville keyword cluster dropped off the map in a single scan. This week it's all back. This is a clean validation of the w9-retire "don't-poke" decision: had the auto-rewriter been on, it would have rewritten a dozen already-ranking pages to "fix" a drop that reversed itself.

**Rankings (89 keywords, 39 changes):**
- **Jacksonville cluster recovered:** jacksonville wedding dj NEW #3, wedding dj jacksonville NEW #3, jacksonville fl wedding dj #9→#3, luxury wedding dj jacksonville NEW #3, best wedding dj jacksonville NEW #2, wedding dj near me jacksonville NEW #3, how much does a wedding dj cost jacksonville #5→#1.
- **City surge:** st augustine #3→#1, amelia island #2→#1, gainesville #10→#5, garden club jacksonville #6→#1 (self-recovered the m1 Jul-1 #1→#6 drop), the orlo #6→#4, ribault club #9→#5, wedding dj under 1000 jacksonville #5→#3.
- **New venue rankings:** oyster bay yacht club #1, st johns golf #1, florida aquarium #8, fernandina beach #3.
- **Drops (single-scan, mostly known oscillators/minor):** treasury #1→#2, white room #7→#8, river house #3→#4, ponte vedra inn & club #3→#4, crystal ballroom daytona #2→#3, hard rock daytona #1→#2, daytona beach #2→#4, sawgrass marriott #6→#7, live saxophone #5→#8. LOST: alfond inn #10→out, marsh landing CC #7→out.

**ranking_watch:** 4 watching (the 4 new venue rankings, unconfirmed), 4 confirmed / 67 resolved / 0 persistent. The 4 "confirmed" are noise: 2 sax terms (#1→#8/#9, known weekly oscillators), `cos celebrations` #1→#10 (brand-term scan artifact), and AE `amelia island wedding dj` #2→#7 (only real one, single confirmation). **No rewrite tasks created** — recovery week, w9 retired. WATCH AE Amelia Island next scan (~Jul 13).

**AI visibility:** COS 75% (6/8, up from 62% on Jul 1 — tracks the recovery), AE 38% (3/8, flat). **Competitors:** no new threats; Classic Disc Jockeys still #2 for "best wedding dj orlando." No fresh competitor content since March.

---

## Session: June 29, 2026 — Weekly Rank Scan (Manager Agent, week 27)

First cycle of ISO week 27 (last scan June 24). Weekly w1/w4/w5 ran. **Jacksonville-area SERP instability hit BOTH brands — read as volatility, NOT a penalty. No rewrite tasks created. w9 stays paused.**

**The pattern that defines this week:** the entire COS Jacksonville keyword cluster wiped out in one scan — `jacksonville wedding dj` #8→out, `wedding dj jacksonville` #10→out, `jacksonville fl wedding dj` #9→out, `luxury wedding dj jacksonville` #3→out, `best wedding dj jacksonville` #8→out — **and the brand term `cos celebrations` dropped #1→#8.** A brand term moving 7 positions is almost certainly a Perplexity scan artifact; brands don't really lose their own name overnight. The clincher that this is churn, not decay: **St Augustine and Daytona surged in the very same scan.**

**Wins (same scan as the Jax drop — proof it's volatility):**
- `st augustine wedding dj` #3→**#1**, `wedding dj st augustine` #3→**#1**
- `daytona beach wedding dj` #4→**#2**; **`crystal ballroom daytona` #7→#2 — recovered on its own** (it was a w9-frozen CONFIRMED drop last week; validates the don't-poke decision)
- `hard rock daytona` #1, `shores resort` #1, `timuquana` #1, `how much does a wedding dj cost jacksonville` #9→#4, `river club jax` #4→#3

**AE mirrors COS:** AE Jacksonville terms (`wedding dj jacksonville`, `jacksonville wedding dj`) also #7→out — same Jax churn affecting both brands — while AE `st augustine` #8→#6 and `white room` #3→#2 held/improved. Both brands' Jax down + both brands' St Aug up = a **market-level Jacksonville SERP wobble**, not a brand problem.

**June-24 flag RESOLVED:** last week ~15 AE venue keywords read #1→gone in one scan; this week AE venues are stable (only 16 AE changes). That collapse did not persist — confirmed single-scan noise, no action needed.

**ranking_watch:** 8 watching, **6 CONFIRMED**, 53 resolved. Confirmed = `the orlo` #4→#5 (tiny), `jacksonville wedding dj` #2→#8 (the Jax cluster), `sawgrass marriott` #3→#7 (2nd week — already on seo-actions top5), `wedding dj with live saxophone` + `live saxophone wedding dj` #1→#7 (known weekly oscillators per scan history), `cheap wedding dj jacksonville` #4→#8. None warrant a new rewrite during a volatile week with w9 paused. **Re-check the Jax cluster next scan (~July 6, week 28) before acting.**

**w4 AI visibility:** COS **62%** (5/8, flat vs June 24), AE **50%** (4/8, flat — holding the doubled rate a 2nd week). AE durability strengthens the d32 homepage verdict.

**w5 competitors:** No new threats. Orlando contested (Classic Disc Jockeys #1 both Orlando terms; Soundwave #9/#7) — relevant since COS holds Orlando #3. No fresh competitor content since March.

**d32 (AE homepage rewrite) closed with GSC data:** pulled AE homepage GSC — post-14 (Jun 8–21) vs prior-14: **impressions +36% (467→636), clicks +69% (13→22), pos flat.** Clears the +20% target. Verdict upgraded CAUTIOUS WIN → **clear WIN.** Recommend green-lighting the AE Jacksonville city page rewrite. `ae-seo-plan-june6` milestone marked done.

---

## Session: June 24, 2026 — Weekly Rank Scan (Manager Agent, week 26)

First cycle of ISO week 26 (last run June 20). Weekly w1/w4/w5 ran. **Busy, broadly-down week — 35 changes, net negative, but reads as volatility/algo ripple, not page decay.**

**Big picture:** Softening hit BOTH brands AND AI visibility simultaneously this week — the signature of a late-June SERP shuffle / scan-day volatility, not page-specific decay. Same pattern as the late-March core update (city keywords dip, then recover). **w9 stays paused — do NOT auto-rewrite into this.** Held off creating any rewrite tasks; single-scan drops are WATCHING, not confirmed.

**Wins:**
- **Orlando wedding dj NEW → #2** — COS finally cracked Orlando after months off top 10. Genuine win. (Note: seo-actions still lists `refresh-cos-orlando` in top5 — stale, Orlando is now a win not a refresh target.)
- St Augustine #5→#3, Garden Club Jax #4→#2, River House #3, Ponte Vedra Inn & Club #8→#3, White Room #8→#7.

**Drops (mostly single-scan WATCHING — likely volatility):**
- **Live saxophone keywords swung back down**: "wedding dj with live saxophone" #1→#7, "live saxophone wedding dj" #1→#6. These were #5/#6→#1 on June 15 — i.e. they swing between #1 and #6-7 week to week. Volatile, not decaying. Watch next scan.
- Jacksonville wedding dj #5→#8, Gainesville #3→out, River Club Jax #1→#4, The Orlo #1→#4, Sawgrass CC #1→#2.
- **AE-wide venue softening**: ~15 AE venue keywords (Casa Monica, Lodge Club, Treasury, White Room, Sawgrass, TPC, Lightner, etc.) read #1→gone in one scan. Unusually broad — flagged to re-check next scan. Most are long-tail terms where AE was uncontested #1; single-scan Perplexity volatility is the likely cause, but the breadth warrants a confirm.

**ranking_watch:** 28 watching, **2 CONFIRMED** (sustained 2-wk): Crystal Ballroom Daytona #2→#7, Sawgrass Marriott #3→#6. Both already on the seo-actions top5 as invest-* items. w9 paused so no auto-fix.

**w4 AI visibility:** COS **88%→62%** (down — tracks the COS softening; lost "Top rated wedding DJ Jacksonville" + a couple others). AE **25%→50%** (doubled — AE homepage rewrite June 8 paying off; now cited on "Budget friendly wedding DJ Jacksonville" → ae-djs.com/jacksonville-wedding-dj/ and "Professional wedding DJ northeast Florida").

**w5 competitors:** No new threats. Orlando still contested (Classic Disc Jockeys #1 "best wedding dj orlando", Soundwave #3 "orlando wedding dj") — relevant now that COS entered Orlando at #2. Future Stereo St Aug #7/#5. No fresh competitor content since March.

---

## Session: June 16, 2026 — Flagler College venue pages (COS + AE) launched

Built and deployed both Flagler College / Hotel Ponce de Leon venue pages from Kailey & Reed Waldenmaier's June 14, 2026 wedding (Lunic Visuals photography). St. Augustine venue keyword push.

**Why now:** seo-actions.json had two stacked St. Aug pushes ("st augustine wedding dj" COS #5 → page-1 target; AE same kw dropped from #5 to unranked). Florida competitor research (June 2) confirmed top winners use one venue page per landmark; we lacked Flagler. New page targets `flagler college wedding dj` (primary) + supports city-level keywords.

**COS** (`/flagler-college-wedding-dj/`, luxury template, ~$1,500+):
- Hero: first dance under frescoed Dining Hall ceiling
- 4-image bento gallery (Rotunda kiss → Tiffany staircase → grand exit sparks → dance floor energy)
- Real Wedding callout — Corey lead DJ, swapped to live sax during the dance set while DJ Noah took the decks; 10 cold sparks staged in 3 moments (dance floor first dance, sax-set riser, grand exit stairs); full uplighting + moving heads
- 5 FAQs with FAQPage schema (can-you-marry-here, cost, dining-hall sound, cold sparks safety, near-me)
- Service + LocalBusiness schema

**AE** (`/flagler-college-wedding-dj/`, budget template, $800+):
- 4-image clickable grid + lightbox (added at user request — AE Clay Theatre precedent skipped this; missed SEO opportunity)
- OG image upgraded from logo to first-dance shot
- 4 FAQs including two-setup explainer for Rotunda + Dining Hall weddings
- "Affordable" preserved in title/H1/meta per protected-keyword rule

**Files touched:**
- `~/cos-website/flagler-college-wedding-dj/index.html` (new)
- `~/ae-entertainment/flagler-college-wedding-dj/index.html` (new)
- `~/cos-website/images/flagler-college-wedding/` (5 WebP, 27-69KB each + mobile poster 15KB)
- `~/ae-entertainment/images/flagler-college-wedding/` (mirrored)
- Both sitemaps (priority 0.8, lastmod 2026-06-16)

**Watch list:** Recheck `flagler college wedding dj` ranking ~July 14 (30 days post-publish for first signal).

---

## Session: June 15, 2026 — Weekly Rank Scan (Manager Agent, week 25)

First cycle of new ISO week 25 (weekend June 13-14 = weddings). Busy week — 20 changes, net positive:

- **w1 rankings** (89 keywords): **Two June-8 confirmed declines recovered on their own** — The Orlo #8→#1 and River Club Jacksonville #4→#1 (no intervention). More wins: Live Saxophone #5→#1, Wedding DJ w/ Live Sax #6→#1, Best Wedding DJ Jax #10→#6, Ponte Vedra Inn & Club #10→#8, Ribault Club #10→#9, Crystal Ballroom Daytona NEW #7. Drops (none a fresh 5+ on an established page): Jax #4→#5, St Aug #3→#5 (still top 5), Gainesville #2→#3, Garden Club #2→#4, Sawgrass #2→#5, Epping Forest #1→#2, "how much does a wedding dj cost jacksonville" COS #4→#8.
- **w4 AI visibility**: COS 88% (7/8), AE 25% (2/8). Both flat vs June 8. AE homepage rewrite (June 8) hasn't lifted AI citations yet — d32 reassessment June 22.
- **w5 competitors**: No new threats. Orlando (Our DJ Rocks #4, Soundwave #5) and St. Aug (Future Stereo #8/#5) unchanged; no fresh competitor content since March.
- **ranking_watch**: 12 watching, **1 confirmed** (down from 5 — the Orlo/River Club/Alfond/Deerwood recoveries resolved), 37 resolved. Lone confirmed: budget wedding dj jacksonville #4→#7 (June-1 origin, frozen by w9 pause). WATCHING set is dominated by **AE St. Augustine-area keywords wobbling after the June 5 rewrite** (AE St Aug #5→#10; AE Jax / wedding-dj-jax / Fountain of Youth / Tringali Barn / luxury-St-Aug all dropped out) — expected post-rewrite settling flux, **d31 reassessment due June 19**; do not touch before then.
- GSC data self-refreshed today (10:41). unify-actions: 55 actions (1 auto / 54 human), down from 67 as recoveries cleared the backlog. **The self-recoveries are early evidence the w9 rewrite pause is safe — reassess June 22.**

---

## Session: June 8, 2026 — Weekly Rank Scan (Manager Agent, week 24)

First cycle of new ISO week 24 (weekend June 6-7 = weddings). Weekly Perplexity scans ran clean:

- **w1 rankings** (89 keywords): Quiet week, 3 changes only. Glass Factory wedding DJ #3→#2 (up), Live Saxophone wedding DJ #4→#5 (down 1), Walkers Landing wedding DJ #10→off top 10 (continuation of June 1 confirmed alert). No 5+ movers.
- **w4 AI visibility**: COS 88% (7/8), AE 25% (2/8). Both flat vs June 3 monthly. COS's only miss remains the flickering "Top rated wedding DJ Jacksonville" query.
- **w5 competitors**: No new threats. Orlando (Our DJ Rocks #2/#3, Classic Disc Jockeys #3/#2) and St. Aug (Future Stereo #7/#5) unchanged.
- **ranking_watch**: 5 confirmed declines now (the Orlo #4→#8, Alfond Inn #3→#9, Deerwood gone, River Club Jax #1→#4, Budget Jax #4→#7). All matured from the June 1 "watching" set — not fresh. **w9 rewrite pipeline paused until June 22**, so these are frozen by design; reassess at pause end.
- GSC data refreshed today (11:58). unify-actions: 67 actions (1 auto / 66 human).

---

## Session: June 5, 2026 — Keyword Volume Enrichment (Phase 2 — Google KP Upload)

**Trigger:** Phase 1 left 58 kws (mostly venues) without volume. Corey did the Google Keyword Planner upload tonight: `~/Downloads/Saved Keywords Stats 2026-06-05 at 20_35_26.csv` (Florida location, May 2025 - Apr 2026 window).

**Result:**
- 2 kws got measured volumes: `atlanta wedding dj` = 20/mo (Medium comp), `wedding dj atlanta ga` = 20/mo (Medium comp). Both brands currently unranked.
- 56 kws came back blank — meaning <10/mo and below Google KP's reporting threshold. These are almost entirely venue-specific kws ("treasury on the plaza wedding dj", "LPGA international wedding dj", etc.).
- Applied to 113 keyword entries across both brands. Skipped 0 (no pre-existing conflicts).

**Final coverage:**
- COS: 94/94 (100%) — 39 measured + 55 estimated as <10
- AE: 94/94 (100%) — 39 measured + 55 estimated as <10

**Treatment of below-threshold kws:** marked with `_monthlySearches: 5` (midpoint of 1-9 range), `_volumeSource: "google-kp-fl-2026-06-05-below-threshold"`, and `_volumeNote: "<10/mo (below Google KP reporting threshold)"`. They're in the priority model but flagged so they're not over-weighted.

**Top priorities don't change from Phase 1** because head terms (cities) dominate the upside curve. The full prioritized push list (top 5):

| # | Brand | Rank | Vol/mo | +Clicks at #1 | Keyword |
|---|-------|------|--------|----------------|---------|
| 1 | COS | #9 | 260 | +79 | orlando wedding dj |
| 2 | COS | #17 | 170 | +54 | tampa wedding dj |
| 3 | AE | #9 | 170 | +52 | tampa wedding dj |
| 4 | AE | #52 | 70 | +22 | wedding dj jacksonville fl |
| 5 | COS | #8 | 70 | +21 | wedding dj jacksonville fl |

**Total modeled traffic upside (everything to #1):**
- COS: ~86 clicks/mo today → ~590 at #1 (upside +504)
- AE: ~41 clicks/mo today → ~594 at #1 (upside +553)
- Combined ~1,057/mo organic clicks of upside on the table

**Surprises / things to look at:**
- **Atlanta is unranked but has 20/mo for both brands.** Pages were launched April 16 with zero impressions in 24+ days (per task d15 notes). The volume IS there — this is an indexing problem, not a market problem. Action: confirm GSC URL Inspection, request indexing.
- **Tampa is the next biggest miss after Orlando.** No Tampa rewrite is currently queued. Both brands rank #9-#17 on a 170/mo kw. Worth adding to the rewrite roadmap (suggest after Orlando).
- **"wedding dj near me" (390/mo, both brands unranked)** — biggest single volume gap. Hard to win (localized) but worth a separate strategy session.

**Long-term followup:** configure DataForSEO MCP credentials so future enrichment runs without browser login. Not done.

---

## Session: June 5, 2026 — Keyword Volume Enrichment (Phase 1)

**Why:** Until today, only 2 of 95 tracked keywords had a `_monthlySearches` value in `rankings.json`. That meant prioritization was based on rank position alone, with no signal for which wins deliver the most actual traffic. Corey asked for the best volume data we can get.

**Sources used (in priority order):**
1. `keyword-tracker.json` — 37 kws with Jax-targeted volumes (data: 2026-01-11 via Google Keyword Planner)
2. `keyword-planner-merged.json` — regenerated today from existing CSVs (`~/Downloads/Saved Keywords Stats 2026-04-16 at 15_*.csv`); 29 general wedding-industry terms, Jax + US volumes
3. Cross-brand mirror — same kw, same volume → applied to both COS and AE tracking

**Result:**
- COS: 37 of 94 kws (39%) now have `_monthlySearches` + `_volumeSource`
- AE: 38 of 94 kws (40%) now have `_monthlySearches` + `_volumeSource`
- All known prior values preserved (validation passed for the 2 pre-existing entries)
- 58 unique kws still missing — mostly venue keywords (50) that aren't in any existing CSV

**Phase 2 — pending Corey action:**
- CSV ready at `~/Downloads/keywords-to-research-2026-06-05.csv` (58 missing kws, one per row)
- Instructions at `~/Downloads/HOW-TO-EXPORT-KW-VOLUMES.md` (~5-min manual KP export)
- Tracked as workspace task `d32-kw-volume-enrichment-kp-export`, due 2026-06-12
- After Corey uploads the result, auto-merge will get us to ~95% coverage

**Long-term fix:** configure DataForSEO MCP credentials (~$50/mo Labs tier) so volume enrichment can run server-side without browser login. Noted, not done.

**Top volumes after enrichment (sanity check):**
- `wedding dj near me` (longtail) — 390/mo
- `orlando wedding dj` (city) — 260/mo
- `tampa wedding dj` (city) — 170/mo
- `st augustine wedding dj` (city) — 50/mo
- `jacksonville wedding dj` (city) — 40/mo
- `affordable wedding dj jacksonville` (budget) — 30/mo
- `daytona beach wedding dj` (city) — 30/mo

Distribution looks healthy: most kws fall in the 1-50/mo range with the head terms appropriately concentrated.

---

## Session: June 5, 2026 — AE Gainesville Differentiation Rewrite

**Trigger:** Third page in the AE catch-up rewrite series. Gainesville city kw: COS #2, AE null. Page was the thinnest of the three — title missing "Affordable" + brand name; 1 generic intro paragraph; only 3 FAQs; no COS reference anywhere.

**Changes on /gainesville-wedding-dj/ (AE):**
- **Title** corrected to match Daytona pattern: `Gainesville Wedding DJ | Affordable Packages from $800 | AE Entertainment` (added "Affordable" anchor + brand name)
- Meta description, hero subtitle, freshness line bumped
- Intro expanded from 1 paragraph to 3. Para 1: Gainesville wedding scene + flat-rate offer. Para 2: **honest travel handling** (Gainesville is 80mi from St. Augustine, outside the no-fee zone — quoted transparently, not buried in fine print). Para 3: COS training-pipeline credibility credential.
- FAQs expanded from 3 to 6 (schema + visible HTML synced). New questions: "difference between AE and COS", "DJ quality at AE price point", "Gainesville venues served", "what's NOT included". Dropped the weak "cheap wedding DJ near me" Q.
- Service schema description rewritten; dateModified 2026-06-05.

**Travel-fee handling was the Gainesville-specific move.** Unlike St. Aug/Daytona/Ponte Vedra (all no-fee), Gainesville requires a travel quote. Old page mentioned it once as "a small travel fee may apply." New page flags it upfront in the intro and the FAQ as transparent line-item pricing — a trust win rather than a footnote.

**Protected:** H1 (`Gainesville Wedding DJ`), "Starting at $800" pill, stats bar, service cards, add-ons list, venue list, also-serving links, footer.

**Live ranking state on commit day:**
- "gainesville wedding dj" (city kw): AE null since March; COS #1-#2 — this is the target.

**Reassess:** June 19, 2026 (14 days). Watch AE for top-20 emergence.

---

## Session: June 5, 2026 — AE Daytona Beach Differentiation Rewrite

**Trigger:** Second page in the AE catch-up rewrite series. Daytona Beach city kw: COS #3, AE null (page exists but ranks invisibly). Daytona is high-volume and AE has 4 Daytona-area venue pages that would benefit from a stronger city hub above them.

**Changes on /daytona-beach-wedding-dj/ (AE):** Same playbook as St. Augustine — surgical wording fixes, structure untouched.
- Meta description, hero subtitle, freshness line ("Last updated June 2026")
- 3 intro paragraphs rewritten. Removed "budget-friendly sister brand of COS" + "AE strips out the premium extras" framing (both disparaged COS pricing). New angle: AE as a standalone Daytona DJ company; COS as the training-pipeline credential.
- "Why" section card 1 rewritten — was "Real Experience, Real Price" with 2,000-weddings overclaim; now "Trained with the Best" crediting the COS pipeline.
- FAQ #3 + #4 (schema + visible HTML): removed "Same experienced DJs" and "same talent pool" claims; new framing positions AE and COS as two distinct companies under shared ownership serving different scopes.
- Service schema description rewritten; dateModified bumped to 2026-06-05.

**Protected:** title (`Daytona Beach Wedding DJ | Affordable Packages from $800 | AE Entertainment`), H1, "Starting at $800" pill, stats bar, 4 service cards (already neutral), add-ons grid, venue list, area list, footer.

**Live ranking state on commit day:**
- "daytona beach wedding dj" (city kw): AE unranked / null; COS #3 — this is the target
- "wedding dj daytona beach" (variant): track for both

**Reassess:** June 19, 2026 (14 days). Watch AE Daytona for first appearance in top-20.

---

## Session: June 5, 2026 — AE St. Augustine Differentiation Rewrite

**Trigger:** Continuation of June 4 revert. After putting "Affordable" back in title/meta and bumping freshness, the page was protected but still read as a thinner version of COS's St. Augustine page — limiting AE's ability to compete on the generic "wedding dj st augustine" city kw (null in tracker since 2026-05-17). Goal of today: rewrite wording so AE reads as its own DJ company with its own angle, letting both brands rank simultaneously.

**Strategic shift agreed with Corey:** Stop using luxury-vs-budget as the differentiator. New differentiator: service scope (COS = DJ + live musicians, AE = DJ + MC). Both brands compete on every venue/city keyword they can legitimately claim. Plan: `~/.claude/plans/ae-vs-cos-celebrations-quirky-umbrella.md`. Project tracked in `~/projects.json` as `ae-catch-up-rewrites`.

**Changes on /st-augustine-wedding-dj/ (AE):**
- Meta description rewritten — leverages "trained alongside COS" trust signal without disparaging COS
- Hero subtitle — "Professional DJ + MC service starting at $800. Local to the Ancient City, every major venue covered."
- Intro paragraphs — completely rewritten. Opens with what AE IS (flat-rate DJ company), positions COS as a quiet credibility credential (training pipeline), not the punchline
- AI-quotable block — distinct facts from intro (per Rule #9)
- 6 feature cards rewritten — generic gear language only (no fabricated brands), added "Trained with the Best" card crediting COS training pipeline
- 7 FAQs rewritten — different questions than COS's St Aug page asks. No "Same DJ as COS" overclaim; downgraded to "trained alongside / developed with"
- Pricing intro paragraph tightened
- Service schema dateModified bumped to 2026-06-05, description rewritten
- CTA section copy updated

**Protected (untouched):**
- Title "Affordable St. Augustine Wedding DJ | From $800 | AE Entertainment"
- H1
- "Affordable" anchor everywhere (per `feedback_protect_affordable_on_ae`)
- Pricing cards, venue cards, form, footer

**First pass was rejected by Corey** for (1) calling COS pricing a "luxury markup", (2) fabricating shared specifics ("Same JBL gear", "shared calendars", "same DJ roster as COS"), (3) leading every paragraph with the sister-brand link. New memory `feedback_ae_positioning.md` written so this doesn't recur. Revised pass landed and was approved.

**Live ranking state on commit day:**
- "affordable wedding dj st augustine" (budget kw): AE #4 holding — protected by keeping "Affordable" anchor
- "wedding dj st augustine" (city kw): AE null since 2026-05-17; COS #3 — this is the target

**Reassess:** June 19, 2026 (14 days). Watch the AE city keyword for first signs of ranking emergence (top-20 = early win). Budget keyword should stay #4 or improve. If AE city kw appears in top-10 AND COS slips from #3, may indicate cannibalization → act per plan Phase 3 rules.

---

## Session: June 4, 2026 — AE St. Augustine Page Revert (Ranking Recovery)

**Problem:** AE was ranking #4 for "wedding dj st augustine" through early April. On April 13 the GSC auto-rewrite pipeline (commit cefbd6a, "zero-CTR fix") stripped "Affordable" from title/H1/meta and removed the "Last updated" freshness signal. Ranking dropped to #9-10 immediately, then fell off the top-10 check entirely starting May 17. Live SERP check today: AE is at #11 — not None, just outside the tracker's top-10 window.

**Action:** Reverted the cefbd6a changes (commit 016f3a7):
- Title back to "Affordable St. Augustine Wedding DJ | From $800 | AE Entertainment"
- H1 back to "Affordable St. Augustine Wedding DJ"
- Meta description back to budget/affordable angle
- Restored "Last updated: June 2026" line (was deleted by rewriter)
- Schema dateModified bumped to 2026-06-04
- Added Fountain of Youth to venue list with internal link to /fountain-of-youth-wedding-dj/

**Lesson for auto-rewriter:** "Affordable" is AE's positioning, not redundant filler. The rewriter saw "Affordable St. Augustine Wedding DJ" with the H1 matching "Affordable" and treated it as keyword stuffing. It's not — it's AE's brand differentiator from COS. Pipeline rules should protect "Affordable"/"Budget" on AE pages the same way they protect "Luxury" on COS pages.

**Reassess:** June 25, 2026. Target: recover toward #4-7.

**Ranking-alerts.json:** Resolved entry updated with correct slug (`/st-augustine-wedding-dj/` — the original "URL artifact" resolution was wrong).

---

## Session: June 3, 2026 — New Venue Page: The Clay Theatre

Built and deployed Clay Theatre (Green Cove Springs, FL) venue pages on BOTH sites. Real wedding photos from Laura & Dusko (DJ Noah, May 23 2026; photo credit: Haley DeSouza). 4-photo bento gallery on COS, FAQ schema on AE.

**Keyword added to rankings.json:** "clay theatre wedding dj" (both brands, awaiting first rank check).

**Why this venue:** Between Jacksonville and St. Augustine (35 min south of Jax, 45 min west of St. Aug). Distinct Art Deco aesthetic — only NE FL venue with custom marquee + LED tray ceiling. Should rank well because there's almost no DJ competitor content targeting it yet (Perplexity found zero existing DJ pages for this venue).

**URLs:**
- https://coscelebrations.com/clay-theatre-wedding-dj/
- https://ae-djs.com/clay-theatre-wedding-dj/

**Next:** Request indexing in GSC for both URLs. Watch rankings over the next 2-3 weeks.

---

## Session: June 3, 2026 — Monthly Full 140-Keyword Report (m1)

Manager Agent ran the monthly comprehensive scan (`run_all.py`, 2m47s clean). rankings.json refreshed.

**Rankings: stable.** No keyword moved 5+ positions since the June 1 weekly scan — the detailed week-23 deltas (24 changes, including gainesville #4→#1, treasury #2→#1, river club jax #2→#1, white room #4→#8, dr phillips lost) were already captured June 1 and still hold.

**AI Visibility:** COS 88% (7/8 — lost "Top rated wedding DJ Jacksonville," a query that flickers in/out; same dip seen May 27), AE 25% (2/8, flat vs June 1). AE has sat at 25-38% for weeks — the aeo-geo-push tasks (d27/d28) are the lever.

**Competitors:** rescanned, no new threats. Orlando trio (Our DJ Rocks, Classic DJ, Soundwave) and Future Stereo (St Aug) steady.

**Reminders firing:** review pipeline 37d stale (refresh due), no newsletter since Mar 2. w9 paused until 6/22.

---

## Session: June 2, 2026 — Full SEO Report Run

Ran Perplexity quick scan + GSC downtrend/ranktrend detection + venue-gap finder + action unifier.

**AI Visibility:** COS 67% (2/3), AE 33% (1/3). Neither brand surfaces for "luxury wedding entertainment St Augustine" — open opportunity for COS.

**Downtrends (GSC, window 2026-05-03 → 2026-05-30) — 6 city/venue pages flagged:**
- `/orlando-wedding-dj/` — clicks 7→4, imp **1747→550 (-68%)**, pos 17.4→23.0 — biggest bleed, most urgent
- `/treasury-on-the-plaza-wedding-dj/` — clicks 3→1, pos 9.8→**14.8** (fell off page 1)
- `/amelia-island-wedding-dj/` — clicks 3→1, imp -37%
- `/gainesville-wedding-dj/` — clicks 2→0 but position improved 16→9.8
- `/ponte-vedra-wedding-dj/`, `/st-augustine-wedding-dj/` — zero-CTR with strong impressions

**Rank alerts — 9 venue pages on page-1/2 border:** Walkers Landing (cur 10 / best 3), Glass Factory AE (8 / best 3), Ponte Vedra Inn & Club (8 / best 4), White Room (8 / best 5), Fernandina Beach AE (7 / best 5), Sydonie Mansion, Club Continental, Dr. Phillips House, Kanapaha.

**Venue gaps:** COS — Garden Club (Tampa), Lodge & Club 32082. AE — The Lakeside at Amelia Island. (Some gap entries are junk `-site:` query strings — ignored.)

**Top 5 page-1 push (seo-actions.json regenerated, auto=6 human=64):**
1. [AE] Fix AE GBP domain (still blocked — verification)
2. [COS] Refresh Gainesville
3. [COS] Refresh Amelia Island
4. [COS] Refresh Treasury on the Plaza
5. [COS] Refresh Ponte Vedra

---

## Freshness Pass: COS Jacksonville (May 17, 2026)

**Trigger:** GSC 28d window (Apr 17 → May 14) showed `/jacksonville-wedding-dj/` clicks 11 → 2 (-82%), impressions 1,808 → 1,087 (-40%), avg position 18.3 → 24.2 (-5.9). Already flagged in `gsc/downtrends.json` May 10. Highest-ROI on-page fix on the board.

**Approach:** River House playbook — freshness signals, not a rewrite. Content preserved and expanded, not shortened.

**Changes:**
- Schema `dateModified` 2026-04-02 → 2026-05-17; visible `Last updated: April → May 2026`; page-bottom freshness stamp "Page last updated: May 17, 2026"
- Meta description rewritten: booking window extended to "fall 2026 and 2027", added "2,000+ weddings performed"
- Track-record surfaced near top: 2,000+ weddings woven into intro + new trust-pill row (reviews / weddings / preferred vendor / founded by touring musician)
- New 2026 booking-season note in intro
- New "What Most Couples Don't Realize About Jacksonville Weddings" — 5 numbered insider items (FL-GA weekend, reversed peak season, 10 PM beach cutoff, hurricane season, DJ-photographer double-booking)
- New total-cost FAQ: "What does a complete Jacksonville wedding actually cost in 2026?" — also added to FAQPage JSON-LD
- Internal link added: "Live Sax" feature card → `/services/live-musicians/` (capitalizing on its GSC climb 16.6 → 10.1, 0 → 9 clicks)

**Length:** 5,638 → 6,878 words (+22%). Nothing removed.

**Technical:** 7 JSON-LD blocks validate, canonical self, no noindex, target links exist.

**Commits:** `e5a30b2` (page), `ffba5da` (sitemap lastmod 2026-05-17).

**Outcome to watch (~June 14, 28d window):**
- Clicks recover from 2 → 8+ (prior-period baseline)
- Position back under 20
- Watch `wedding dj jacksonville` (was #5 May 1) for return to page 1

---

## Freshness Pass: AE Jax + COS Orlando (May 10, 2026)

**Trigger:** GSC 28d vs 28d showed AE clicks -36% (pos 29→38) and COS Orlando surfacing for new Orlando queries with high impressions but few clicks. Tampa live music cluster also crashed (~900 lost impressions across 6 query variants on COS, pos #5→#13) — flagged for next session.

**AE Jacksonville (`/jacksonville-wedding-dj/`):**
- `Last updated` → May 2026; schema `dateModified` → 2026-05-10
- New section "What Does a Wedding DJ Actually Cost in Jacksonville Right Now?" with 2026 market data ($21K-$55K total budget, $1,100-$1,700 mid-tier DJ range). Positions AE's $800 start clearly under market.
- New AI-quotable block tying $800 to the 2026 cost benchmark
- AE homepage `Last updated` bumped to May 2026

**COS Orlando (`/orlando-wedding-dj/`):**
- `Last updated` → May 2026; schema `dateModified` → 2026-05-10
- New section "What's Different About Orlando Weddings in 2026" covering Brightline rail (20 daily Orlando-South FL departures shifting destination wedding logistics) and the venue-driven luxury palette shift (away from blush/ivory)
- New AI-quotable block

**Sitemaps:** `coscelebrations.com/orlando-wedding-dj/`, `ae-djs.com/`, `ae-djs.com/jacksonville-wedding-dj/` lastmod → 2026-05-10.

**Outcome to watch (~June 7, 28d window):**
- AE Jax non-brand clicks (was 4 → 0 last 28d)
- COS Orlando: convert rising impressions to clicks. Watch `wedding dj orlando` (pos 11.9 → 23.4 last cycle, want it back under 15) and `affordable wedding dj orlando` (pos 8 — close, push to top 5)

---


## Month-Start Manager Cycle (May 1-4, 2026)

**Auto-executed (May 1):** m1 full Perplexity scan (140 keywords, 37 changes), m10 keyword discovery (410 gaps across 6 markets, up from 358 in April), m11 freshness rotation (committed 2 page rewrites: casa-feliz + club-continental, then timed out on crystal-ballroom-daytona).

**w9 pipeline (Sun May 3 8 PM LaunchAgent):** 0 downtrends. ranking_watch 1 confirmed (`wedding dj under 1000 jacksonville` COS #2 → #8) — pipeline attempted rewrite but no commit landed. 5 watching.

**Outcome check (May 4):** Apr 14 batch — Gainesville KEPT (0c → 2c, impressions slipped 88 → 48). 6 other Apr 14/16 entries still skipped (no GSC data for outcome queries).

**Rankings highlights (May 1 vs Apr 27):**
- City: **Jax COS #8 → #5 (+3, biggest win)**, `wedding dj jacksonville` #7 → #5, `near me jacksonville` #9 → #6. Daytona NEW #7. White Room NEW #5. Dr Phillips House NEW #9.
- Venue **gains**: Ponte Vedra Inn & Club #9 → #4, Timuquana #2 → #1, Ritz Amelia #3 → #2, Amelia COS #2 → #1, Sawgrass #4 → #3.
- Venue **losses**: 1908 Grand #2 → out, Golf Club Amelia #2 → out, Glass Factory #1 → #2, Alfond Inn #3 → #5, Crystal Ballroom Daytona #5 → #7, Don CeSar #5 → #7, Estate on Halifax #3 → #5, Sydonie #6 → #8.
- AE: `affordable jax` #7 → #4, `cheap jax` #8 → #5, `ae djs` brand #10 → #7. AE Amelia #1 → #2, AE Leu Gardens #1 → #2, AE Fernandina #6 → #8.

**d18 reassess (Jacksonville page, May 4):** WIN. Apr 20 comparison-section restoration validated. Page held #6-8 through Apr 22-27 then jumped to #5. Outcome falls into the original "#3-5 = additive fix worked" bucket. Do NOT touch the page again.

**d19 reassess (Apr 13 SERP shuffle cluster, May 4):** Mixed.
- garden-club-jacksonville **RECOVERED** — held #1 for 14 days
- ponte-vedra-inn-club (variant) DEGRADING — slipped #4 → #7 → #8
- the-orlo OFF — was peaking #3-4 mid-Apr, now out
- walkers-landing slipping #3 → #6
- jacksonville (covered in d18) recovered

Action: investigate The Orlo + PV Inn competitors before next rank check. No auto-rewrites — Apr 14 batch still in 28-day cooldown until May 12.

---

## Week 18 Manager Cycle (Apr 27, 2026)

**Auto-executed:** w1 rank check (89 keywords, 33 changes), w4 AI visibility, w5 competitor scan. w9 pipeline already fired Sun Apr 26 8 PM via LaunchAgent (rewrote AE St Augustine).

**Rankings highlights:**
- City: Jax COS #6 → #8, St Aug COS #4 → #3 (recovering), St Aug AE #10 → #9, Daytona COS #10 → out, Orlando still out
- Venue **gains** (Apr 14/20 rewrites paying off): River House #3 → #2, Alfond Inn #5 → #3, Sydonie Mansion #8 → #6, Glass Factory #2 → #1, Tringali Barn #3 → #1, Omni Amelia #4 → #2
- Venue **losses**: The Orlo #3 → out, White Room #5 + #8 → out, Bella Collina #10 → out, Dr Phillips House #7 → out, Leu Gardens #9 → out, Ponte Vedra Inn #3 → #9
- New rankings: 1908 Grand #2, Estate on the Halifax #3, Club Continental #8
- Budget keywords drifting -1: Budget #2 → #3, Affordable Jax #6 → #7, Cheap Jax #5 → #8, Affordable St Aug #4 → #5

**AI visibility:** COS 100% (8/8, holding), AE 25% (2/8, down from 38%).
**Competitors:** Full Circle back #6 Jax. Orlando threat tier intact (Classic DJ #3, Soundwave #5, Our DJ Rocks #9). Future Stereo #7 St Aug.

**ranking_watch:** 1 confirmed (AE St Aug — already auto-rewritten Apr 26). 7 watching (Estate on Halifax, Club Continental, Preserve Amelia, PV Inn, AE under-1000, AE-djs brand, AE cheap-jax) — wait one more cycle.

**14d outcome checks overdue:** 6 entries from Apr 9 batch (St Aug x2, Ritz Carlton Amelia, PV, Daytona, Amelia Island). Apr 9 batch outcomes show: PV recovered to #2, St Aug COS recovering #3 (was #4), Amelia COS to #2 + AE #1, Daytona still out (need investigation).

---

## AE Jacksonville DJ Cost Guide - De-Orphaned + Strengthened (Apr 21, 2026)

**Context:** A-1 Majestic Sound outranks AE partly due to their pricing-guide blog post. Request was to create a new post, but a near-identical post at `/blog/wedding-dj-cost-jacksonville/` already existed (modified Apr 16), **orphaned** (zero internal links, only in sitemap). Rather than create a duplicate (Rule #7 violation + cannibalization), strengthened the existing post and added inbound links.

**Blog post expansion (`~/ae-entertainment/blog/wedding-dj-cost-jacksonville/index.html`):**
- Added H2 "Why Wedding DJs Under $600 Are Risky" - 4 sub-sections (insurance / equipment / experience / backup problems) targeting budget-shopper doubt
- Added H2 "What $800 Actually Buys You" - line-by-line deliverables checklist (gear, hours, insurance, backup, app, no travel fees)
- Added H2 "Questions to Ask Any Wedding DJ Before Booking" - 10-question checklist (longer-tail search catch)
- Expanded scenarios section from 3 to 5 (Scenario 4: Friday elopement; Scenario 5: vow renewal rush turnaround)
- Expanded FAQPage schema from 9 to 12 questions (negotiating, cheapest time of year, holiday pricing) plus matching visible FAQ items
- Added 1 new internal link from body to `/#pricing`
- Bumped `dateModified` to 2026-04-21 in Article schema + visible byline

**De-orphaning (2 new inbound links):**
- `~/ae-entertainment/jacksonville-wedding-dj/` - contextual link inside pricing section
- `~/ae-entertainment/index.html` - link in homepage pricing section below add-ons

**Tracking:**
- `sitemap.xml` - `<lastmod>` bumped from 2026-01-01 to 2026-04-21
- `_data/indexingStatus.json` - left untouched (field tracks index-verification, not content modification; bumping would delay re-verification)
- No `$550 industry average` figure added - not from credible source; kept The Knot's $1,500 national average

**Decisions rejected:**
- Second post at `/blog/jacksonville-wedding-dj-cost-guide/` - would cannibalize
- 301 redirect of old URL - unnecessary; existing URL slug is fine
- Footer sitewide link - contextual body links beat footer for SEO weight

**Watch:** Rankings over 2-4 weeks for "wedding DJ prices Jacksonville", "how much does a wedding DJ cost Jacksonville", "budget wedding DJ Jacksonville". Track in `~/seo-data/rankings.json`.

---

## Treasury Gallery Expansion + Jacksonville Content (Apr 20, 2026)

**Treasury on the Plaza venue pages (COS + AE):**
- Added 5 fresh photos from Kalie + Ethan wedding shot by Angelita Photography
- COS bento gallery: expanded from 7 to 12 slots (desktop + mobile breakpoints updated)
- AE photo grid: converted 2-col (4 photos) → 3-col (9 photos)
- New shots: first dance + monogram in vault, candlelit reception, cake cutting at vault, live saxophone, dip kiss on packed floor
- All photos geotagged (29.8924 N, 81.3126 W) + Angelita credited in EXIF + alt text
- Output: WebP + AVIF at 1200px main + 400w mobile
- Images in `/images/treasury-wedding-st-augustine/kalie-ethan/` (COS) and `/images/treasury-on-the-plaza/kalie-ethan/` (AE)
- Commits: COS `91363d1`, AE `46302c1`

**Jacksonville city page:**
- Added "How to Choose Among Wedding DJs in Jacksonville" section (dark numbered list, 5 tips)
- Positioned above FAQ block
- Targets comparison-intent searches ("wedding djs in jacksonville" plural variant)
- Tips: venue experience, review specificity, all-in pricing, planning process, backup plan

**Jacksonville ranking trend + recovery-watch:**
- Apr 6: #2 (peak after Apr 2 optimization)
- Apr 13: #7 — dropped with zero commits to page (SERP shuffle, not self-inflicted)
- Apr 15: #6
- Apr 16: rewrite ffdd706 "cut AI filler" — removed comparison section, trend block, 2/3 AI-quotable blocks
- Apr 19: #7 (rewrite neutral)
- Apr 19: secondary "wedding dj jacksonville fl" improved 8 → 6 (positive signal)
- Apr 20: restored comparison section (this commit) — one light additive fix, not a rewrite
- **Decision:** wait, don't rewrite again. Reassess May 4 (task d18). Competitors at #4-#8 are thinner than us (no schema, no venue pages, no reviews) — SERP isn't losing to better content.

**Instagram inventory:**
- 10 new post kits from Kalie + Ethan (COS 24-30, AE 17-19)
- Total inventory now: 30 COS / 15 AE
- Ready in `~/Desktop/instagram-posts/` with captions + hashtags + first comments

**Source archive:** All 399 Kalie + Ethan photos remain at `~/Desktop/Kalie_Ethan_Treasury_AngelitaPhotography/`

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

### Session: July 1, 2026 - Monthly Scan (Manager Agent, month-start)

**m1 full 140-keyword scan** (2m23s clean, rankings.json refreshed):
- AI visibility: COS 62% (5/8), AE 38% (3/8 — dipped from 50% on Jun 29; AE held "budget friendly jax" + "professional NE FL").
- ranking_watch: 7 watching, 7 confirmed drops, 57 resolved.
- **Confirmed drops read as continued week-27 volatility, NOT decay:** jacksonville wedding dj #2→#8, garden club jax #1→#6, the orlo #4→#6, amelia island AE #2→#6 (Jax-cluster churn); live saxophone #1→#5 + w/ live sax #1→#7 (known weekly oscillators); `cos celebrations` #1→#8 (brand-term artifact = Perplexity scan noise).
- No rewrite tasks created — w9 paused, re-check ~July 6 (week 28) before acting on the Jax cluster.

**m10 keyword discovery:** 387 gaps across 6 markets (down from 398 in June). Daytona 98, St. Aug 77, Jax 65, Gainesville 55, Tampa 48, Orlando 44.

**Action surface:** refreshed to 65 actions. Top5 push list: AE GBP fix, refresh COS Daytona, refresh COS Orlando, invest The Orlo, invest Garden Club Jacksonville (new).

---

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

### Session Notes (May 5, 2026) - Manager Agent Triage Cycle

**Weekly auto-scripts (week 19):**
- w1 rank_checker: 89 keywords, **7 changes**. IMPROVED: alfond inn #7→#5, preserve amelia river club #6→#5, **wedding dj st augustine #5→#3**. NEW: dr phillips house #7. DROPPED: ribault club #6→#7, jacksonville fl wedding dj #6→#7. **LOST**: walkers landing #4 → out of top 10 (d19 cluster regression continues).
- w4 ai_visibility: COS 100% (8/8 holding). **AE 25% (2/8, down from 38%)** — second drop in two weeks.
- w5 competitor_monitor: Orlando threats persist (Our DJ Rocks #2-#3, Classic Disc Jockeys #4-#5, Soundwave #5-#7). Future Stereo #6-#7 St Aug. No new Jax/St Aug threats.
- ranking_watch: **3 confirmed** drops queued for next Sun (May 10) auto-rewrite — COS the orlo #4→#9, AE wedding dj under 1000 jacksonville #3→#9, AE how much does a wedding dj cost jacksonville #5→#9. AE under-1000 page is eligible (COS version in cooldown until May 31).
- ranktrends (watch-only): 3 flagged — Dr Phillips House #7, Kanapaha #7, Ponte Vedra Inn #8 (sustained drop from peak #1).
- Outcome check: 6 Apr 14/16 entries still skipped — no GSC data for the targeted queries.

**d14 Homepage Hero Rewrite Reassessment (1-month check-in):** **WIN.** Homepage GSC: pre-rewrite (Mar 6–Apr 5, 31d) 108 clicks / 5.16% CTR / avg pos 14.57. Post-rewrite (Apr 7–May 1, 25d) 112 clicks / **7.71% CTR** / avg pos 13.83. **CTR up 49%, daily clicks up 29%.** City keywords: Jax #6→#5 (peaked #2 Apr 6), St Aug #1→#2 (held), Orlando still not ranking (separate issue). Recommend: keep hero, expand pill pattern to city pages, lock until June 6. Full draft: `~/manager-agent/drafts/d14/README.md`.

---

### Session Notes (Apr 27, 2026) - Treasury Page Sharpening (P1 push to #1)

**Trigger:** "treasury on the plaza wedding dj" dropped #1 → #2 on Apr 27. Page was already strong (714 lines, bento gallery, insider tips, real reviews). Surgical edits, not a rewrite.

**Changes:**
- Visible "Last updated: April 2026" freshness signal
- 3 statement H2s → question H2s (SGE/AI overview eligibility)
- FAQ heading skip fixed (h4 → h3)
- New FAQ: "How much does a wedding at Treasury on the Plaza cost in 2026?" — concrete venue + DJ pricing pulled from Perplexity research (tulletogether.com, herecomestheguide.com)
- New AI-quotable block above FAQs (preferred-vendor + acoustics angle, distinct from intro per WRITING-VOICE.md)
- New `WebPage` schema with `dateModified: 2026-04-27`
- New `FAQPage` schema covering all 7 FAQs (was missing despite FAQ content existing)

**Reassess:** Watch rankings.json over the next 7-14 days. Action `p1-cos-treasury-on-the-plaza-wedding-dj` in `seo-actions.json` will auto-close when keyword returns to #1 (unifier rebuilds nightly from rankings).

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
