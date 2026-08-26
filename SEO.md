# COS Celebrations & AE Entertainment - SEO Working Document
## Last Updated: August 25, 2026

---

## Session: August 25, 2026 - Golden Creek Ranch, a new Palatka market, and two hub pages that don't earn anything

Four URLs live: `/golden-creek-ranch-wedding-dj/` and `/palatka-wedding-dj/` on both brands (COS `9bf7aa0`, AE `8208131`). Golden Creek Ranch is a 62-acre working Angus cattle ranch at 133 Ranch Road, East Palatka, Putnam County - 25 min from St. Augustine, 45 from Jacksonville, up to 150 guests, barn plus open-pasture ceremony sites.
<!-- CORRECTED 2026-08-26: both pages shipped saying "up to 200 guests"; Corey confirmed the real
     capacity is 150. Fixed on both brands (COS cf72846, AE 0e1b8f6) in 6 places on COS (intro, stat
     block, Quick Facts, barn-acoustics paragraph, and the sound FAQ in both visible copy and FAQPage
     schema) and 2 on AE (intro, Quick Facts). The 200 came from the venue's own published material
     during the Aug 25 build - do not "restore" it from that source. -->

**We have not DJd there.** Neither page claims otherwise. No "we know this venue," no invented load-in or acoustics. Barn observations (metal truss roof, concrete floor, open sides) came from the venue's own published photos, and every hard fact came from their structured data.

### The angle came out of the photos, not the copy

Their ceremonies use **no arch** - the pasture and the moss oaks are the backdrop. So there is nowhere to hide a speaker, and every stand you set down lands in the photo the photographer spent all day chasing. That is the spine of the COS page, and it is a real buying reason rather than a brag.

AE got a completely different argument so the pages don't compete: **the two-location cost trap.** Pasture ceremony plus barn reception is two sound systems, and plenty of DJs quote the reception, let you say yes, then add the ceremony fee. Ours is on the quote from the start. Zero identical sentences between the two brands.

### The city page's differentiator is a calendar, not a keyword

The Florida Azalea Festival takes downtown Palatka the **first weekend of March**; the Blue Crab Festival runs **Memorial Day weekend**. Both fill the county's limited lodging and put traffic on the roads guests need. It is genuinely useful date-planning advice and nobody else publishes it. AE's city page runs on travel fees instead - Palatka is far enough from Jacksonville and Orlando that DJs quoting from there add mileage, and we don't.

Expect little traffic. Putnam County is ~74k people. The city page's real job is being a credible parent for venue pages and catching "wedding dj near me" locally.

### The pages shipped orphaned, and Corey caught it

First deploy linked the new pages only to each other. Gainesville, a comparable city page, has 12 inbound links. Fixed in the same push: homepage areas list, `/areas-we-serve/` (new city card), `/vendors/venues/` (new market section), and the Also Serving block on all 8 COS city pages and the 5 AE ones that have it. Palatka now has 12 inbound links on COS, 8 on AE.

### The finding worth acting on: /vendors/venues/ earns literally nothing

Corey asked whether having both `/vendors/` and `/areas-we-serve/` in the footer, both leading to venue lists, was hurting us. GSC, page dimension, Jun 22 - Aug 20:

| Page | COS | AE |
|---|---|---|
| `/vendors/venues/` | **absent from GSC - 0 impressions** | **absent - 0 impressions** |
| `/vendors/` | absent - 0 | absent - 0 |
| `/areas-we-serve/` | 0 clicks, 6 impr, pos 66.5 | 0 clicks, 29 impr, pos 51.8 |
| *(scale)* `/tampa-wedding-dj/` | 19 clicks, 9,670 impr | - |

`/vendors/venues/` is a **97% subset** of `/areas-we-serve/` - all 71 of its venue links already appear there, with 333 body words against 684. It has 2 inbound links on COS, 1 on AE, and no breadcrumb role.

`/areas-we-serve/` is not earning in search either, but it is the **breadcrumb parent of ~145 venue pages** across both sites (73 COS / 74 AE BreadcrumbList schemas reference it). It carries site structure, not rankings. Keep it.

**Recommended, not yet done:** 301 `/vendors/venues/` to `/areas-we-serve/`, or noindex it and keep it browsable. We have a known crawl ceiling, so a zero-return duplicate is the part that actually costs.

### Open items

- **Photo permission unconfirmed.** All 7 images are Golden Creek Ranch's own, self-hosted and optimized. Corey chose to ship before confirming. If they object, swap the images - the pages don't depend on them.
- `/areas-we-serve/`: **Fernandina Beach and Atlanta have 0 venue links** (empty cards). Atlanta is missing from `/vendors/venues/` entirely.
- `/vendors/venues/` meta description still says "where COS Celebrations is a preferred vendor" - that is preferred-vendor status published where competitors read it.
- Palatka has 1 venue; Corey has more to add.
- Rank check ~September 22 (both new keywords added to `rankings.json`, no baseline yet).

---

## Session: August 22, 2026 - 9 Aviles shipped on both brands, and the venue handed us the differentiator

New venue page live on both sites: `/9-aviles-wedding-dj/` (COS commit `b3cf8f3`, AE commit `3723fba`). 9 Aviles is the boutique 50-guest venue at 9 Aviles Street downtown, and Corey says we're effectively the DJ company for them. He chose **"house DJ team"** as the public wording over "exclusive" or "preferred."

### The angle came from the venue's own copy

Their site says the venue has "an exclusive, top-tier DJ setup with interactive dance lighting, spotlights, and special features unique to 9 Aviles." That's the page's spine on the COS side: **a DJ who has never worked there burns the first hour of the night learning that system, and we don't.** It's a buying reason no competitor can copy or claim, and it isn't a brag about us — it's a fact about the room.

Second angle, also unclaimed by anyone: 9 Aviles is a **single event space**, so ceremony and dinner happen in the same room and it gets flipped while guests are on the patio. That flip is the most fragile twenty minutes of the day and music is what decides how it lands. Both brands have a section on it.

### AE got a genuinely different page, not a reskin

AE's argument is arithmetic, not prestige: a hard 50-guest cap plus the venue allowing outside-retailer alcohol instead of a bar package makes this one of the cheaper realistic ways to get married downtown. Per the AE positioning rule, the page never mentions COS, live musicians, or shared gear.

### Facts used, all sourced

9 Aviles St at Artillery Lane, 32084 · up to 50 guests · ~2,500 sq ft, one room · built 1911, formerly City Electric then St. Johns Motor Company · renovated 2018, opened as a venue 2023 · vaulted ceiling, iron chandeliers, balcony over the floor, bridal lounge, gated patio · outside caterers OK · owners Dave and Christy. Sources: the venue site (JS-rendered, needed a real browser — `curl` returns nav only), Cvent, WeddingWire, Visit St. Augustine.

Capacity numbers conflict across directories (50 seated / 64 / 80 standing). We used the venue's own "up to 50 guests" everywhere.

### Photos are the venue's, and that's an open loop

Pulled 15 images off their site, used 8. Converted to WebP, resized, geotagged to 29.8917, -81.3115. Corey approved grabbing them. **Nobody has asked Dave and Christy yet, and these were shot by wedding photographers** — the same permission gap currently blocking the Kaitlyn Brumfield vendor page. Low risk given the relationship, but it should be closed with a text, not left implicit.

### Infrastructure note

Found a stale `python3 -m http.server` from an earlier session **listening on port 8001 while serving the COS directory** — so an "AE preview" on 8001 could silently show COS files. Killed it. Preview servers are now threaded (the single-threaded default was stalling image loads and made a working bento gallery look broken). Worth checking `lsof -nP -iTCP:8000,8001 -sTCP:LISTEN` before trusting a localhost preview.

### The interview ran the same day, and it caught the pages being wrong

Voice interview done a few hours after launch (`~/cos-operations/interviews/venues/9-aviles.md`). It immediately invalidated a section written from inference:

**The "ceremony-to-reception flip" was largely fiction.** Both pages had a whole block about the room being reset while guests waited on the patio. Corey: *"most of the time, people are kind of sitting at their tables for the ceremony. And the ceremony just kinda takes place right there in the center of the room."* Usually there's no meaningful flip at all. Rewritten on both brands.

**And it missed a real service.** Plenty of couples marry offsite — the Oldest House, the gazebo in the plaza — and walk over for the reception. We run a satellite ceremony rig for that. It was completely absent from both pages. Now a feature card, an FAQ, and an add-on line on each.

**This is the argument for interviewing before publishing, not after.** The venue's own website was the best source available and it still produced a confidently wrong section. Inference reads exactly like knowledge until someone who has actually been in the room corrects it.

### What the interview bought

- **~40-50 weddings in that room** since it opened. Concrete, replaced a vague claim.
- **Dave built the venue's in-house DJ system modeled on the COS rig.** Confirmed with Corey before publishing. Lead differentiator on the COS page and genuinely uncopyable.
- **The booth goes on the balcony**, and Dave mounted a camera looking down at the floor so the DJ can read the room without leaning over the railing. Best detail of the round; it became the AI-quotable block.
- **Lively room, mics dialed in for it** — replaced generic "we manage volume" filler.
- **Real Wedding: Asya + Tugra.** Musician groom who got into DJing after his own wedding; they're now a husband-and-wife DJ duo. Named with permission. Corey asked that we *not* link their duo, to avoid brand confusion.
- **Two-hour vendor access**, parking at the Trinity lot.

**Deliberately left off:** a possible 10pm outdoor-music limit. Corey said he wasn't sure. An unverified curfew is worse than no curfew, so it's on neither page. Worth confirming with Dave.

### Directories are alphabetical now

Corey's call: no favoritism, keep it clean. Applied to every venue list on both `/areas-we-serve/` pages (8 lists each), both St. Augustine city-page directories, and the related-venue lists on the two new pages. Sort ignores a leading "The" (so The Glass Factory files under G); numerals sort first. St. Augustine venue counts were stale at 11 and are now 12 on both brands.

**Not done, needs a decision:** the *city cards* on `/areas-we-serve/` are still ordered by importance, St. Augustine and Jacksonville first. Alphabetizing those would bury the home market behind Amelia Island — that's the "one or two on top" exception Corey described, so it's left alone pending his word. The other ~68 venue pages also have unsorted related-venue lists; separate sweep.

### Watch

No baseline measured. First rank check on "9 aviles wedding dj" ~September 19 for both brands; keyword added to `rankings.json`. Expect low volume — this is a small venue and `venue_pages_low_ceiling` applies. The real value here is the relationship and the referral, not the search volume.

---

## Session: August 19, 2026 - The St. Augustine page finally sounds like Corey, and it exposed a sentence we had written four times

First run of the new voice-interview system (`~/INTERVIEW.md`, `/interview`
skill). Corey talked into the mic, 14 questions across two rounds, raw answers
captured verbatim at `~/cos-operations/interviews/cities/st-augustine.md`.

**Shipped to COS `/st-augustine-wedding-dj/` (commit 0d2d6ae). 3,589 -> 5,253 words.**

Four sections that did not exist, all local knowledge no competitor can copy:

- **Which venue is right for you** - deliberately does NOT rank venues. Corey is a
  preferred vendor at several and will not pick a favorite. The framing is
  outdoor-waterfront vs historic-indoor, "best is the wrong question." His refusal
  turned out to be better positioning than a favorites list would have been.
- **Put a tent in the budget** - the strongest block on the page. Heat disables the
  gear that runs the reception, not just rain. Go stand in Plan B before signing.
- **Getting married from out of state** - roughly 70% of his couples. Hotels,
  downtown parking and shuttles, and Nights of Lights opening/closing weekends at
  "Fourth of July" crowd levels.
- **What a wedding day actually looks like** - Villa Blanca through the walk
  downtown for nightcaps.

Plus five FAQs with matching FAQPage schema (6 -> 11 questions).

### Two things the rewrite exposed

**The same sentence was on the page four times.** "COS is the preferred wedding DJ
at Treasury on the Plaza, Lightner Museum, The White Room, and River House"
appeared four times inside one section, including in the `ai-quotable` block -
which is precisely what Rule #9 forbids. Now once. The ai-quotable was rewritten to
carry a different fact (the 70% destination stat). **Worth auditing other city
pages for the same pattern.**

**A false experience claim.** The page said "working St. Augustine venues for over
a decade." Corey's answer makes that wrong in both directions: it is since the
early 2000s, and it started on saxophone with bands, not behind a booth. Replaced
with the real arc. Same trap as the COS-founded-2022 rule - the experience is
Corey's personally, and the honest version is more impressive than the invented one.

Also cleared two pre-existing Rule #15 violations (em dash, en dash) that had been
sitting on the live page.

### What was deliberately NOT done

**The AE version.** There is a crawl re-measure due Aug 23, and
`affordable wedding dj st augustine` currently has an unresolved reading (59.0 in
early August vs 5.0 recorded in July) on the exact page that would be rewritten.
Rewriting now would make Monday's measurement uninterpretable. Material is captured
and waiting. Revisit Aug 23.

**One line Corey asked to withhold.** His answer about egotistical vendors is in the
capture file marked do-not-publish for this page. Note that a softer version was
already live on the page and was left alone.

### Watch

City rewrites cascade - the St. Augustine venue children (Treasury, Lightner, White
Room, Casa Monica, Fountain of Youth, Flagler, Embassy Suites) typically dip 2-4
weeks. Treasury was at GSC position 8.7 going in. Do not re-edit them; wait 30 days.

---

## Session: August 18, 2026 — Nine add-on service pages shipped, and Corey caught a photo that had been lying on a live page for seven weeks

**Deployed COS `b8b1415` + `5ea0485`, AE `a1c1543`.** Five COS pages (`/photo-booth/` hub, `/360-photo-booth/`, `/cold-sparklers/`, `/audio-guestbook/`, `/uplighting/`) and four AE pages (same minus audio guestbook, which AE genuinely does not sell). All nine had been built since **July 28** and sat in `~/manager-agent/drafts/` for three weeks; the oldest task was 3 weeks overdue. The pre-deploy verifier still passed 70/71 on the day of deploy, so the delay cost nothing but time.

### They could not have shipped piecemeal

COS `/cold-sparklers/` links to `/360-photo-booth/`, and `/audio-guestbook/` links to `/photo-booth/`. Shipping only the two tasks that were due on Aug 3 would have put **two live 404s** on coscelebrations.com. Smallest link-safe set was 4 URLs / 7 files. Uplighting went in the same push behind them.

### Both discovery paths, on purpose

Five inbound links added from `/services/weddings/` Add-On Services cards (verified 5 live), two from the AE homepage add-ons line, plus 9 sitemap entries (COS 97 → 102, AE 80 → 84). This was the step with no artifact behind it in the original deploy plan, and it is the step that decides whether Google ever sees these pages — **COS still has 53 pages that have never been crawled at all.** The prepared link package refused to run because both target files had drifted since Aug 3; it was redone by hand rather than forced.

**Expect COS traction before AE.** AE is 30/80 indexed and Google has not fetched its sitemap since January. The four AE pages may sit uncrawled for a while. Shipping starts the clock; it does not beat the ceiling.

### The photo problem Corey found, and how far it went

Reviewing `/cold-sparklers/` he spotted that a "grand exit" photo was actually a private last dance. It was worse than one bad caption:

- `joel-kristin-cold-sparks-exit-timuquana.webp` is Joel + Kristin **alone in an empty ballroom**. No sparks in the frame at all.
- That file had been the **hero of the live `/timuquana-country-club-wedding-dj/` page since 2026-06-26 — about 7.5 weeks** — with alt text describing a portico and cheering guests that are not in the shot.
- Gallery slots 4 and 5 held **each other's captions**.
- The Real Wedding callout claimed a cold-spark grand exit under the portico. That claim was **true** — the exit happened, we just had the wrong file wired to it. Corey found three real exit frames in the couple's folder.

Every image on that page was reopened and re-described from what is actually in it. **3 of 5 were already correct**; the two that were wrong are now right, a real exit photo (frame 374) is in slot 5, and frame 378 replaced the bad image on `/cold-sparklers/` — which restored that page's honest "four weddings, four rooms" framing. Added frame 326 (bride back to back with Corey on tenor sax) as a 6th gallery item; the bento grid was extended to 6 across all three breakpoints, with the 4th row made explicit so a portrait image cannot balloon the row on mobile.

**The lesson is the one already in memory: reopen the image, never caption from a filename.** The filename here was wrong, and the page prose, the alt text and the caption were all written downstream of it.

### Still open

- **Two filenames still lie** — `...cold-sparks-exit-timuquana.webp` (last dance, now hero-only) and `...first-dance-timuquana-ballroom.webp` (crowd shot). Deliberately not renamed mid-deploy to avoid churning a live preloaded hero URL. Next photo pass.
- **Still not one photo-booth photo on either site.** `/photo-booth/` and `/360-photo-booth/` ship on gradient heroes while the COS homepage carries a "Top 3 Photo Booth - Premier Bride" award badge. `mgr-2026-07-28-5` covers shooting them.
- Fixed as part of this: `/vendors/guest-experiences/` no longer implies we refer photo booths out.

---

## Session: August 17, 2026 — Gainesville quietly left page 1, and it's the one drop that survives the instrument test

**Manager Agent cycle 1, ISO week 34.** Ran the drop detector against Sunday's fresh DataForSEO sweep. Three alerts came back "confirmed"; **one of the three is real.**

**COS `gainesville wedding dj`: #8 → #11 → #12** across 2026-08-02, 08-09 and 08-16. All three are DataForSEO reads at **full depth**, all post-epoch — same instrument, same depth, no mixing. That is the standard `rankings-instrument-mixing-2026-08-13` demands, and this is the first drop in weeks to meet it. A city page crossing from page 1 to page 2 is the tier worth defending. Filed as `mgr-2026-08-17-1`; **not diagnosed and deliberately not rewritten** — check the SERP and GSC first.

**AE `wedding dj flagler college`: #2 → #4 → #41** (full-depth reads). A 37-position step is too big for oscillation, but one reading is one reading. Waiting on the Aug 23 sweep for a second confirmation before touching anything. Filed as `mgr-2026-08-17-2`.

**AE `budget wedding dj jacksonville` is noise.** The alert says "#2 → #8"; the honest same-depth comparison is **#5 → #8**, and this keyword has read 2, 6, 4, 3, 3, 6, 3, 5, 1, 8 since mid-July. Nothing to do.

### The headline numbers on all three alerts are wrong, and the record already contains the right ones

Every confirmed alert fails its own `best_recent + drop == current` arithmetic — `best_recent` is a stale baseline (Gainesville's "#2" is a **June 15 Perplexity** reading), while the `drop` field is correct. So the dashboard prints the wrong one of two numbers the alert already holds. Live reproduction of `mgr-2026-08-05-1`, now on post-epoch data rather than only historical.

### w1's Perplexity rank check was held this week — on purpose

Running it on a Monday takes the newest slot on **179 of 196** keyword series and stamps them `perplexity` with no depth mode, which blinds the drop detector until the next Sunday sweep. Measured before deciding: **82 of 196 series are alertable right now** because Sunday's sweep landed; a w1 run today takes that to **0** for the week. Ran the read-only half (`ranking_watch.py`) instead. Cost is one week of the weaker instrument's estimates.

### AI visibility, week 34

| | Named anywhere | Own site ranked |
|---|---|---|
| COS (6 premium queries) | 5/6 — 83% | 5/6 — 83% |
| AE (8 budget queries) | 7/8 — 88% | 7/8 — 88% |

COS slipped one query versus the Aug 13 rebuild (6/6 → 5/6); AE is flat. **Only comparable back to Aug 13** — the query list was rebuilt that day, so the older "COS 100% / AE 38%" figures are a different ruler.

### Competitors: the pressure is in Orlando

Soundwave Entertainment moved **#3 → #2** for "orlando wedding dj"; Classic Disc Jockeys holds **#2** for "best wedding dj orlando". Future Stereo is now #4 on both St Augustine terms and #5 on both Jacksonville terms. This agrees with `orl-2026-07-27-priority`. The scanner's "pages updated in March 2026" line is still frozen five months stale (`mgr-2026-08-10-1`) and contributed nothing.

---

## Session: August 13, 2026 — AE's "38% AI visibility" was a broken ruler, not a broken brand

**Corey asked why the dashboard showed COS 100% (8/8) and AE 38% (3/8). The gap was almost entirely measurement.** Both brands were scored against a single shared 8-query list — and **6 of those 8 were premium-intent** ("best", "luxury", "top rated", "wedding DJ with live saxophone"). AE is deliberately positioned as the budget brand and does not compete for any of them. Its ceiling on that list was ~25%. On the only two budget queries in it, AE went **2 for 2**.

**Re-scored with each brand measured against the queries it's actually built to win:**

| | Named anywhere | Own site ranked |
|---|---|---|
| COS (6 premium queries) | 6/6 — 100% | 5/6 — 83% |
| AE (8 budget queries) | 7/8 — **88%** | 7/8 — **88%** |

AE's real number is 88%, not 38%.

### Second bug: each brand was scoring off the other brand's website

AE's pages name-drop "COS Celebrations" as a credential (the standing positioning rule). The matcher only looked for the brand *name* in a result's title or snippet, with no check that the result was our page — so those hits counted as COS visibility. **On the Aug 10 run, COS scored MENTIONED for "Budget friendly wedding DJ Jacksonville area" with zero coscelebrations.com URLs in the results.** The only sources were AE's own page and a directory. Sibling-domain hits are now excluded and reported separately as `cross_credit`.

Also added `owned_rate` (our domain ranked) alongside `mention_rate` (name anywhere, including The Knot / Zola / WeddingWire). They move independently and both matter — the May 26 guidelines note unlinked brand mentions beat backlinks 3x for AI citation, so directory mentions are worth counting, just not worth conflating.

### The label was overselling it too

This is the Perplexity **Search** API — a web index. A "mention" means the brand name appeared in a top-10 result snippet. It is **not** a Google AI Overview or ChatGPT citation count, and the dashboard note said "queries cited", which claimed more than the data supports. Fixed to "N/M of its own queries · X% own site", with an info-dot on each card explaining that the two brands' percentages are scored against different lists and **cannot be compared head-to-head**.

### What's actually left to work on

- **AE's one genuine miss: "Cheap DJ for wedding reception Florida."** Statewide, no city anchor, and no AE page targets it. Every AE win is city-anchored (Jacksonville, St. Augustine). This is a content question, not a measurement one.
- **COS's one non-owned hit: "Professional wedding DJ northeast Florida"** — carried entirely by Zola. COS is named but no COS page ranks. Same shape of gap: a regional phrase with no page behind it.
- **"Top rated wedding DJ Jacksonville" is finally won** with COS's own `/jacksonville-wedding-dj/` page. That query flickered in and out for months and was called a genuine content gap on Aug 1.

### Housekeeping

- Resolves manager draft `mgr-2026-08-01-5`, which diagnosed the mention-vs-citation problem on Aug 1 and correctly declined to auto-apply it. Its four recommended fixes all shipped; see `RESOLVED.md` in that folder. Its `verify.py` is now *expected* to fail — the checks assert the buggy behaviour.
- Old `history` in `ai-mentions.json` is **frozen at Aug 10**, not migrated. Its denominators came from the shared list; merging them into the new series would repeat the two-instruments-mixed mistake already documented for the rank checker. New runs append to `history_v2`, which now also stores per-query detail (so "which query flipped?" is answerable), tags `--quick` runs, and replaces rather than duplicates same-day entries.
- **Do not compare any AI-visibility percentage from before Aug 13 with one after it.** Different instruments.
- `perplexity_client.check_ai_mention()` deprecated in place — no callers left, docstring explains why not to rewire it.

Files: `seo-data/perplexity/ai_visibility.py` (rewritten), `seo-data/scripts/config.json`, `cos-operations/dashboard.html`, `seo-data/ai-mentions.json`. Backups: `*.bak-pre-brand-split-2026-08-13`.

---

## Session: August 13, 2026 — Search Console flagged the Aug 10 breadcrumb rollout. Three days live.

**Google emailed a CRITICAL Breadcrumbs error: `Missing field "item" (in "itemListElement")`.** It was real, it was ours, and it came from the breadcrumb rollout three days earlier.

**The rule people get wrong:** Google requires `item` on every crumb **except the last one**, where it falls back to the containing page's own URL. So of the 105 omissions on COS, **94 were perfectly legal** (final crumb) and **11 were hard errors** (a middle crumb with no URL). AE had 2 more. Splitting those two buckets is the whole job — "fixing" all 105 would have been 94 pointless edits.

**Why the middle crumbs had no URL: the hub pages don't exist.** `/services/` and `/team/` return 404, `/blog/` returns 410 via a `_redirects` rule. Nothing links to them and they aren't in either sitemap. `add_breadcrumbs.py` was actually *right* to refuse to link them — `hub()` deliberately returns `url=None` when the hub file isn't on disk, because pointing schema at a 404 is worse. The bug was one layer down in `schema_block()`, which emitted the URL-less crumb into the JSON-LD anyway.

**Fixed by dropping the dead crumb and renumbering** — `/services/weddings/` is now `Home > Weddings`. The visible trail still reads `Home / Services / Weddings` with "Services" as plain text, which is fine: the schema is allowed to be shorter than the visible trail, it just can't contain an item-less middle entry.

**The generator is fixed too, which matters more than the 13 pages.** `add_breadcrumbs.py` has a `--force` mode; without patching `schema_block()`, the next run would have quietly put all 13 errors back. Verified in throwaway clones of both repos: a full `--force` regeneration now yields 172 BreadcrumbList blocks with zero missing-item errors.

**Commits:** COS `9b36fb1`, AE `834f55b`, generator `1d4bb2d`. Verified live on both domains. **Still to do: click "Validate Fix" in Search Console** — recrawl takes 1-2 weeks.

**Two things worth knowing that turned up on the way:**
1. Re-running `add_breadcrumbs.py` appends two blank lines per page where the old block was stripped. Cosmetic, pre-existing, not fixed — but it means a `--force` run always shows ~170 files "changed" even when nothing meaningful moved.
2. `add_breadcrumbs.py` was never committed. Neither were `add_areas_nav.py`, `fix_charset_position.py`, `move_areas_to_footer.py`, or `normalize_shells.py` — every script from the Aug 10 session. They're on disk only. `add_breadcrumbs.py` is now tracked; the other four are not.

---

## Session: August 10, 2026 — Breadcrumbs site-wide, a real Areas hub, and an encoding bug that had been live for months

**Started as a competitor teardown of robfutrell.com** (Rob Futrell, the St. Augustine photographer). He has 361 pages to our 85; the gap that mattered was structural, not volume: breadcrumb schema site-wide, nested URL hubs, and 53 internal links on a venue page where we had 22. What he does *not* have is FAQ schema anywhere, or Review/AggregateRating — so the trade goes both ways.

**Breadcrumbs: COS 5 of 101 pages -> 94. AE 1 -> 79.** `BreadcrumbList` schema plus a visible trail on every indexable page. Trail is `Home / Areas We Serve / <City> / <Venue>`. Our URLs are flat, so the hierarchy is logical rather than path-derived — each venue's parent city is **read from that page's own body copy**, which is ground truth rather than a guess. Script at `~/seo-data/add_breadcrumbs.py`, idempotent, `--force` to regenerate.

**Two bugs caught mid-run, both mine, both fixed before shipping:**
1. First pass took the first city link *anywhere* in the document. AE's nav menu lists Orlando and Jacksonville, so **13 AE venues were filed under the wrong city** — Flagler College, in St. Augustine, came out as Orlando. Fixed by reading only the body between `</nav>` and `<footer`. All 59 shared venues now agree across both brands.
2. `/cheap-wedding-dj/` is not a venue; its H1 reduced to the crumb "Cheap That Doesn't Feel Cheap".

**New `/areas-we-serve/` hub on both sites** — 10 cities, every venue linked, 77 internal links (COS) and 76 (AE). This is what Rob has and we did not: a real parent for the city pages. It also fixes badly under-linked cities — **Atlanta was reachable from 4 pages**, Daytona/Gainesville/Fernandina from 7.

**AE was running three different navs at once** — 12 pages linked cities directly, 19 linked a `/#areas` homepage anchor, 54 had neither. Now every page carries one stable "Areas We Serve" link. Contextual city links were deliberately kept: a couple on the TPC Sawgrass page benefits from a Ponte Vedra link there.

**The encoding bug is the find worth remembering.** AE put the Meta Pixel script above `<meta charset="UTF-8">`, pushing the declaration to byte 1433. **Browsers only scan the first 1024 bytes for an encoding hint**, so **81 of AE's 86 pages** were being decoded with a guessed encoding — "Le Meridien Tampa" rendered as "Le MÃ©ridien". The bytes on disk were always valid UTF-8; only the declaration was misplaced. COS was unaffected (charset at byte 48). Fixed by `~/seo-data/fix_charset_position.py`. **This was live for as long as the Meta Pixel has been on those pages** — worth assuming any non-ASCII character on AE has been rendering wrong for months.

**Caught a schema regression on the way out.** The uncommitted AE Jacksonville rewrite (sitting since ~Aug 3) had deleted the entire `Service` block — `Service` + `Offer` + `areaServed` City. Task `idx-2026-07-28-jax-schema-review` had flagged exactly this risk; it got committed as part of the breadcrumb batch without that check, then restored verbatim in `acd7824`. Every other page in both commits was audited for schema loss — none found. **Lesson: a batch commit that sweeps in someone else's pending work needs a schema diff before it ships, not after.**

**Sitemaps:** COS 89 -> 98 urls. Nine indexable pages were missing entirely (the blog post, 3 team pages, 5 vendor category pages). `lastmod` refreshed only for files that actually changed.

**DEPLOYED 2026-08-10.** `bbb7ffb` (COS), `acd7824` (AE). Netlify built in ~60s. Verified live: all 79 AE pages have charset inside the 1024-byte window, accented text renders correctly, and all 169 outbound links on the two new hub pages return 200.

**Follow-up same day: the hub link moved from nav to footer (Corey's call).** Same decision he made for `/vendors/` in July, and for the same reasons — the COS nav was at 9 items with "AREAS WE SERVE" wrapping to two lines, nav items should be booking steps, and the breadcrumbs already give every venue and city page a contextual link up to the hub. Rule #5 rules out having it in both. Live on **97 COS + 79 AE pages, zero left in nav**. AE needed four different footer handlers — 57 venue pages use a bare `<p>` of city links, 17 have a "Service Areas:" row (the label itself became the link), 5 have a `.footer-links` div, and 2 put bare `<a>` tags straight inside `<footer>`. One of those last two is `/club-continental-wedding-dj/`, still stuck on "Discovered - currently not indexed", so a sitewide hub link onto it is worth having.

**And a mistake of mine, caught by sweeping live URLs rather than local files.** Earlier today I added nine "indexable pages missing from the sitemap" to COS. One of them, `/team/corey-peterson/`, **301s to `/team/djs/corey/`** via a Netlify rule — my check read the local file for a `noindex` tag and never requested the live URL, so the redirect was invisible to it. Removed. **Sitemap additions need a live HTTP status check, not just a file-on-disk check.** All 176 sitemap URLs across both sites now return 200.

**Shell consistency audit, same day.** Corey asked whether the navs and footers are actually coherent across both sites. They were not: **22 distinct nav layouts and 51 distinct footer layouts** across COS and AE. Most of that is *not* drift — AE deliberately shows the nearest city in the nav and footer (Tampa venues link Tampa, Gainesville venues link Gainesville) on 59 pages, and COS footers carry per-page contextual venue links. Flattening those would destroy something real.

Fixed only what nobody chose: **16 COS and 1 AE footer had no Contact link at all**; `casa-marina-hotel` was the site's only COS page with a city link in its nav (and already linked Jacksonville from its footer); and "Areas We Serve" sat at **five different positions** — my own doing, because the morning rollout inserted it after Pricing where it found one and at the start of the row where it did not. Now one rule on all 176 live pages: immediately after Pricing, else immediately before Contact. Verified live — 0 missing Contact, 0 wrong position, 0 left in nav.

**Correction to something I asserted earlier today:** I told Corey that Rule #5 ruled out having the hub link in both nav and footer. That was overstated — both sites already carry `/contact/`, `/pricing/` and `/services/` in nav *and* footer on every page, which is ordinary practice for site chrome. Rule #5 is about body-copy links. The footer decision still stands on its other merits (nav crowding, the breadcrumbs already covering the need, and the proven crawl value of the July `/vendors/` footer link), but the rule was not the reason.

**Full shell unification deferred.** One nav and one footer partial per site would make future changes a single edit instead of four handlers — today's footer rollout needed four separate code paths for AE alone. That is a maintenance win, not a ranking one, so it sits below the COS `/services/` and `/team/` hubs and the venue-page internal-link work.

**Reassess ~2026-09-10** — breadcrumb rich results take a few weeks to appear in GSC. The measurable target is enhanced search appearances, which were flat zero on both properties across a 60-day window (`mgr-2026-08-04-3`).

---

## Session: August 9, 2026 — Indexing queue COMPLETE. Google is now crawling on its own.

**All 53 originally-never-crawled pages are handled.** Submitted 11 tonight; everything else is either already indexed or a deliberate skip (`/team/corey-peterson/` now 301s, `/pricing-guide/` is noindex). COS sits at **62 indexed / 35 not indexed**, from 30 / 69 on Jul 28.

**The most important result is not the count.** `/hard-rock-daytona-wedding-dj/` and `/sawgrass-country-club-wedding-dj/` came back **INDEXED without ever having been submitted.** Google found them on its own, by following links.

That is the difference between a workaround and a fix. Request Indexing is a manual, quota-capped, one-URL-at-a-time intervention — if that were the only thing working, every future page would need the same hand-holding forever. Organic discovery means the underlying crawl-demand problem is genuinely resolving, and it points at the `/vendors/venues/` hub plus the sitewide footer link as the thing that did the real work, with Request Indexing only accelerating it. Future venue pages should get picked up without manual submission. **Confidence: 80%** — worth verifying on the next new page we publish rather than assuming.

**Two holdouts, and they are now diagnostic.** `/club-continental-wedding-dj/` and `/marsh-landing-country-club-wedding-dj/` are still "Discovered - currently not indexed" eleven days after submission, while every peer went through. Crawl access no longer explains this. They are the clearest evidence yet for the content-quality hypothesis — 51 near-identical venue pages, the risk Rule #2 exists to prevent — and they connect directly to the Aug 6 finding that 40 venue pages shared one closing sentence (`1629a55`).

**Next step here is diagnostic, not another submission.** Work out what makes those two different from the 32 that indexed: uniqueness of body copy, thin sections, duplicate schema, whatever it turns out to be. **Do not resubmit** — Google states resubmitting does not change queue position, and two more requests would only obscure the signal.

Submitted tonight: `/lpga-international-`, `/shores-resort-`, `/kanapaha-botanical-gardens-`, `/1908-grand-`, `/oyster-bay-yacht-club-`, `/st-johns-golf-`, `/fernandina-beach-`, `/azaleana-manor-`, `/embassy-suites-st-augustine-beach-`, `/kelly-farm-events-`, `/tringali-barn-wedding-dj/`.

**Reassess ~2026-08-23** — check how many of tonight's batch took, and whether the two holdouts moved.

---

## Session: August 8, 2026 — COS indexed pages: 30 → 62

**The GSC aggregate has caught up and it confirms everything: 62 indexed / 36 not indexed, up from 30 / 69 on Jul 28.** That is **+32 indexed against 34 submitted** across days 1-3. Nearly every page took.

What that means in practice: the crawl-budget ceiling that has capped this site since December — everything published after Dec 17 2025 sitting invisible to search — is substantially broken. Those 32 pages are eligible to rank for the first time.

**Atlanta is indexed.** This settles the open park-the-Atlanta-expansion question. That recommendation rested on zero GSC impressions over three months, but `/atlanta-wedding-dj/` had never been crawled — it was structurally incapable of producing impressions. The evidence behind the decision was measuring the crawl bug, not the market. Atlanta can now be judged on real data; **give it a fair window before deciding anything.**

**Two stragglers now look like a real signal.** `/club-continental-wedding-dj/` and `/marsh-landing-country-club-wedding-dj/` are both still "Discovered - currently not indexed" ten days after submission, while 32 of 34 peers went through. Both have reasonable inbound links, so this is no longer explainable by crawl access. They are now the best available evidence for the content-quality hypothesis — 51 near-identical venue pages, the exact risk Rule #2 exists to prevent. **Worth investigating what makes these two different rather than resubmitting them.** Note this connects directly to the Aug 6 finding below about 40 venue pages sharing one closing sentence.

**Day 4: only 5 submitted, and I wasted about 5 slots.** A 6-URL batch script hit a Chrome protocol timeout partway through. The "Indexing requested" marker does not persist across page loads, so there was no way to determine which had already gone through. I re-submitted all 5 as the safe option; quota then ran out after 5 confirmed instead of the usual 12, implying the timed-out run had already spent ~7. Net cost: about 5 wasted slots and roughly a day of delay. **Fix, recorded in the queue file: batch 3 URLs per script call, never 6 — the protocol timeout is the binding constraint, not the quota.**

Submitted today: `/leu-gardens-`, `/paradise-cove-`, `/sydonie-mansion-`, `/sweetwater-branch-inn-`, `/estate-on-the-halifax-wedding-dj/`.

**13 real pages left**, roughly one more session. Queue: `~/seo-data/gsc-indexing-queue.md`.

**Not committed.** This entry is sitting uncommitted alongside another session's in-progress work (the Aug 6 venue-sentence pass, ~46 modified files plus new vendor pages, explicitly awaiting review). Committing SEO.md alone would have swept their notes in with it, so it is left in the working tree.

---

## Session: August 6, 2026 — 40 venue pages shared one closing sentence, not 18

**Built and previewed on localhost. NOT committed, NOT deployed — awaiting Corey's review.**

The Jul 27 note left this open as *"18 venue pages close with a templated 'This [adjective] venue books quickly' line."* The real count is **40**. Every COS venue page ended with a variant of the same sentence, which is two violations at once: an unverifiable scarcity claim (same family as the *"Fall 2026 dates are filling fast"* line Corey flagged that day) and a Rule #2 templating violation across 40 pages.

Each page now has its own closer, grounded **only in facts already stated on that page** — capacity, year built, acreage, named spaces, preferred-vendor status. No invented acoustics, load-in, or room specifics. Preferred-vendor wording was preserved only where the page already established it (Glass Factory, Club Continental, Ribault Club, Lightner, River House, St. Johns Golf, Treasury, Timuquana, Epping Forest).

**Widened the search past the known phrase**, the same lesson as the Aug 3 Crystal Ballroom cleanup — grep the concept, not the string. Checked *filling fast / fills fast / going fast / limited dates / dates remaining / spots left / act now / hurry / don't wait / book before* across **both** sites. Zero real hits remain. Two AE matches are false positives and were deliberately left alone: *"Don't wait for the email"* on the thank-you page, and a Loft dance floor that *"fills fast"* with dancers.

Verified before hand-off: all 40 pages return 200 on localhost, `<p>` tags balanced, and the diff is exactly one line per file (40 files, +40/-40 — no collateral edits).

### Two bugs found in `log_task.py`, both fixed

Found by *using* the script rather than trusting it, which is the post-migration rule working as intended. Both are the same silent-miss family as the `task_id: null` bug the file was written to prevent.

1. **`start` duplicated entries.** The existing guard only catches `completed`/`awaiting_review`, so re-running on an **in_progress** task appended a second row. Two rows for one `task_id` means `latest_entry()` returns whichever landed last — a `done` attaches to one and strands the other as `in_progress` forever, and a stranded row is invisible to the cooldown filter. Now updates in place.
2. **`--pages` collapsed into a single string.** zsh does **not** word-split an unquoted `$PAGES`, so all 40 paths arrived as one argv entry. argparse accepted it and wrote a `pages` list of length 1 containing one space-separated blob. `unify_actions.py` matches page paths exactly, so that blob matches nothing and the entire cooldown silently does nothing. Now split on whitespace regardless of calling shell. **Quote it anyway: `--pages "$PAGES"`.**

Verified after fixing: re-running `start` yields 1 entry with 40 separate paths.

### Open decision for Corey — do NOT approve blindly

Logging those 40 pages pushed **37 substantive actions into cooling-off**: cannibalization fixes, AI Overview opportunities, and ranking-drop investigations on the same pages. They are currently held only as *awaiting review*, but **the moment this is approved they go quiet for ~30 days.**

That is probably wrong. The cooldown exists because Google needs 4-8 weeks to reflect a *content* change; a one-sentence CTA swap will not move rankings and should not buy a month of silence on an AI Overview opportunity. The filter treats "touched this page" as "did substantive work on this page." A `cosmetic` flag that logs the task without claiming the pages would fix it, but that changes cooldown semantics — Corey's call, not an automatic fix.

Audit record of every old/new pair: `~/seo-data/scripts/detemplate_venue_closers_2026-08-05.py` (already applied; re-running reports 0/40 because the old strings are gone). Note the filename says 08-05 and the activity log says 08-06 — the work started late on the 5th and the log stamped after midnight. Same task.

#### CORRECTION (Manager cycle 8, same day, 16:52) — it was 40 of 63, not 40 of 40

The pass above is good work and every replacement I sampled is properly grounded. **Two of its claims are not:** *"the real count is 40"* and *"every COS venue page ended with a variant of the same sentence ... each page now has its own closer."*

**40 is the count of pages matching the string `books quickly`.** The count of pages closing on a templated *"...Reach out today..."* line was **63**. **23 are untouched**, in five families:

| Family | Pages | Note |
|---|---:|---|
| **A** "As a preferred vendor, we have established relationships with the **X** team." | 5 | **5 of 5 byte-identical** once the venue name is masked |
| **B** "Let's create something unforgettable together." | 8 | 6 of 8 identical; mostly **city pages** — Jacksonville, Orlando, Tampa, Daytona, Gainesville, Fernandina, Ponte Vedra |
| **C** "This **X** offers something truly **unique/special**." | 2 | Same tail as the 40 just fixed, different lead-in — estate-on-the-halifax, lpga-international |
| **D** "**X** dates fill quickly, and so do ours." | 2 | Also the **unverifiable scarcity claim** this pass existed to remove — azaleana-manor, clay-theatre |
| **E** other `Reach out today` closers | 6 | Individually written; several defensible, see the draft |

**Why it slipped:** the note states the right lesson — *"grep the concept, not the string"* — and then widens the search to **a longer list of strings** (`filling fast / fills fast / going fast / limited dates / dates remaining / spots left / act now / hurry / don't wait / book before`) and concludes *"Zero real hits remain."* `dates fill quickly`, `dates go fast`, `offers something truly` and `Let's create something unforgettable together` are none of those ten. A longer string list is still a string list. The concept-level test is structural: parse `<section class="final-cta">` on **every** page and cluster the closers — that is what found these.

**Family C needs no new writing** — `~/manager-agent/drafts/venue-2026-07-27-books-quickly/closers.json` already holds grounded replacements for both pages, fact-checked against the pages, and the Aug 8 website batch applies them. **Families A + B + D = 15 pages of real writing**, deliberately not auto-generated: closers are voice-sensitive and the 40 above were hand-grounded one at a time.

Evidence and the full list, read-only, 13/13: `~/manager-agent/drafts/venue-closers-remainder-2026-08-06/` — task `mgr-2026-08-06-2`.

---

## Session: August 4, 2026 — IT WORKED. 10 of the first 12 never-crawled pages are indexed.

**Six days after submission, 10 of the 12 pages from the Jul 29 batch have gone from "Discovered - currently not indexed / Last crawl: N/A" to "URL is on Google / Page is indexed."** These are pages Google had never once fetched in roughly seven months. "View crawled page" is now enabled on them, and River House reports 6 valid Review snippet items — the schema work on those pages is finally being read.

Indexed: `/jacksonville-wedding-venues/`, `/the-white-room-`, `/river-house-`, `/bowing-oaks-`, `/ribault-club-`, `/glass-factory-`, `/bella-collina-`, `/casa-monica-`, `/san-jose-country-club-`, `/ponte-vedra-inn-club-wedding-dj/`.

Still stuck on "Discovered": `/club-continental-wedding-dj/` and `/marsh-landing-country-club-wedding-dj/`. **Not resubmitting** — Google states resubmitting does not change queue position. If they are still stuck in ~2 weeks they become the first genuine evidence for the content-quality hypothesis (51 near-identical venue pages) rather than crawl access. Worth waiting for rather than guessing at.

**What we cannot claim.** Three things shipped together — the `/vendors/venues/` crawl hub, the sitewide footer link, and Request Indexing. This data cannot separate their contributions. The honest read is that the combination worked; asserting Request Indexing alone did it would be a guess. The one supporting detail is that Google reported "Referring page: None detected" on the hub *before* the fix and detected referring pages afterward.

**Measurement warning, and it nearly caused a false negative.** The GSC aggregate Pages report still read **69 not-indexed / 30 indexed** today, unchanged, while 10 of those pages were demonstrably indexed. That report lags several days. Trust per-URL inspection over the aggregate in the short term, and do not read a flat aggregate as failure. Same family as the rank-checker and indexing-monitor problems from late July.

**Day 3 submissions:** 11 more sent, all confirmed queued — `/don-cesar-`, `/florida-aquarium-`, `/golf-club-amelia-island-`, `/le-meridien-tampa-`, `/nova-535-`, `/omni-amelia-island-`, `/the-orlo-`, `/alfond-inn-`, `/casa-feliz-`, `/castle-hotel-orlando-`, `/dr-phillips-house-wedding-dj/`. Quota hit on Leu Gardens.

**Running total: 34 of 53.** 19 real ones left (two of the 53 are deliberate skips — `/team/corey-peterson/` now 301s, `/pricing-guide/` is noindex). Roughly two more sessions. Queue: `~/seo-data/gsc-indexing-queue.md`.

**Atlanta note:** `/atlanta-wedding-dj/` was submitted Jul 30. The standing recommendation to park the Atlanta expansion rests on zero impressions over three months, but the page had never been crawled — it could not have produced impressions. **Do not action the park decision until Atlanta has been indexed and given a fair window.**

---

## Session: August 3, 2026 — AE was still selling a venue that closed 32 days ago

**Shipped: AE commit `28a0d60`, pushed to main, 301 confirmed live on ae-djs.com.**

The Crystal Ballroom at Sunset Harbor closed and was confirmed 2026-07-02. COS was
cleaned that day. **AE never was** — `ae-djs.com/crystal-ballroom-daytona-wedding-dj/`
stayed live for 32 days, titled *"Crystal Ballroom at Sunset Harbor Wedding DJ |
Daytona | $800"*, still in the sitemap, still linked from the Daytona city page. A
couple searching Daytona could land on it and enquire about a venue that doesn't exist.

Applied: page deleted, 301 to `/daytona-beach-wedding-dj/` (mirrors COS), sitemap
`<url>` block removed, stale `_data/indexingStatus.json` entry dropped. Data side:
keyword removed from `kw_list.json` (101 → 100, it had been erroring on the Aug 2
sweep after up to 6 retried API calls), ranking alert resolved as `venue closed`,
`unify_actions.py` re-run — 0 Crystal Ballroom items left in the live queue,
including the impact-65 one that was proposing we **build** a page for it.

### The part the prepared script missed

`apply.py` removed the one inbound link it knew about. The venue name appeared in
**five** places on `/daytona-beach-wedding-dj/`: the link, the venue-list chip, the
**FAQPage schema**, the visible FAQ, and a body line reading *"Estate on the Halifax
has different acoustics than the Crystal Ballroom."* Stripping only the link would
have left AE asserting in structured data that it *regularly performs at* a closed
venue — the exact text AI search quotes back. **Rule going forward: grep the repo
for the venue name, not just the slug.**

### Bug found and fixed: `log_task.py` was silently cooling off the wrong brand

Logging this task suppressed `refresh-cos-daytona-beach-wedding-dj` for 45 days —
a **COS** action, from **AE-only** work. Cause: `log_task.py` defaults `brand` to
`"both"` whenever a task isn't in `seo-actions.json` (manager `mgr-*` ids never
are), and `unify_actions.py` correctly treats `"both"` as covering both brands.
The matcher was right; the log entry was wrong.

Wrong in the invisible direction — a suppressed action looks identical to one that
legitimately isn't due yet. Caught only by reading `cooling_off` immediately after
running it. Re-logged with `--brand AE`, COS action restored. Added a
`warn_default_brand()` guard to `log_task.py` with a dated comment, mirroring the
existing missing-`--pages` warning. **Any un-branded entry logged before 2026-08-03
may have silently cooled off the other brand's action on the same slug.**

### Still open

`ponce de leon hall wedding dj` is swept weekly, has no page on either site, and
also errored on the Aug 2 sweep. Either a venue page we meant to build or a keyword
to drop — left alone, it's a judgement call.

---

## Session: August 3, 2026 — Weekly Rank Scan (Manager Agent, week 32) + the tool-mixing bug is still live

**Three weekly tasks ran: w1 rank scan, w4 AI visibility, w5 competitor scan.**

### AI visibility — the one clean win

**COS 7/8 (88%), up from 75%.** That 75% was not drift: it was exactly 6/8 on Jul 13,
Jul 21 *and* Jul 27. First movement in five checks. The new hit is "Affordable wedding DJ
near Jacksonville FL." AE flat at 4/8 (50%) for a third check.

**"Top rated wedding DJ Jacksonville" is the only query where neither brand appears.**
Clean content target.

### Competitor scan — quiet, and the one alert is good news

No new entrants in Jacksonville, Orlando or St. Augustine. Classic Disc Jockeys moved
**#2 → #3** for "best wedding dj orlando" — the script flags any top-3 competitor as a
THREAT, but they *lost* a slot. Future Stereo #4 "st augustine wedding dj" and Soundwave
#5 "orlando wedding dj" both unchanged.

### The rank scan printed 54 changes. Every one is an instrument artifact.

Same defect the July 29 session below recorded, still unfixed and now measured on the same
day it happened. `rank_checker.py` compared today's **Perplexity** readings against
Sunday's **DataForSEO** sweep:

| Comparison against previous reading | n |
|---|---|
| **Cross-instrument** | **151** |
| Same-instrument | 27 |
| Source untagged | 0 |

103 of the 151 return a different number, which is exactly what the scan reports as
IMPROVED / DROPPED / LOST / NEW. The worst case **inverts**:

| Keyword | Reported | Actual (Perplexity → Perplexity) |
|---|---|---|
| casa monica wedding dj | **#1 → out of top 10** | 8 → 7 *(slightly up)* |
| glass factory wedding dj | #2 → #8 | 5 → 8 |
| deerwood country club wedding dj | #2 → #10 | unranked → 10 *(a gain)* |

**Do not treat any number from the Aug 3 scan as a ranking change.** Acting on the Casa
Monica line would mean rewriting a page that is fine — the same mistake that nearly reverted
the AE St. Augustine rewrite that worked.

`ranking_watch.py` was deliberately **not** run: consecutive Perplexity checks are what
confirm phantom alerts onto the dashboard, and confirmed alerts feed `unify_actions.py`'s
top-5. Verified afterward — `ranking-alerts.json` untouched (Aug 2 21:20, 7 confirmed /
11 watching, unchanged) and `rank_checker.py` wrote only `rankings.json`. The readings
themselves are legitimate and correctly tagged `perplexity` in `_sources`; nothing needs
backing out. **The data is fine, the comparison is broken.**

`_sources` is populated for 178 of 178 keywords with zero untagged — the fix data is already
in the file. Evidence + re-runnable script:
`~/manager-agent/drafts/w1-2026-08-03-source-mixing/`. Tracked on `mgr-2026-08-01-1` and
`mgr-2026-07-27-1`.

---

## Session: July 29, 2026 — Jacksonville "ranking drop" was a false alarm; rankings.json was mixing two measuring tools

**No page was changed. The drop did not happen.** The alert said
`jacksonville fl wedding dj` fell #3 → #9 on `/jacksonville-wedding-dj/`. It didn't.

**What was actually wrong:** `rankings.json` stores one number per keyword per day
with nothing recording where that number came from — and **two different tools write
into it**: the DataForSEO sweep (a real SERP read) and `perplexity/rank_checker.py`
(a language model's estimate). They silently overwrite each other.

- The **#9** was a Perplexity estimate written Jul 27 at 10:02.
- The DataForSEO sweep ran the same day at 13:37 and said **#6** — and was **never merged**.
  `rankings.json` was last written at 10:02, before that sweep existed.
- **62 of 112** values in the Jul 27 column disagreed with the real SERP.
- The **#3** baseline was worse: measured before the Jul 27 location-code fix, i.e.
  from **Los Gatos, California**.

Merged the Jul 27 sweep. Real numbers: **Jul 21 = #6, Jul 27 = #6.** Flat.
GSC agrees the alert was noise — the keyword drew **5 impressions and 0 clicks in six weeks**,
so those positions came off one or two impressions a week.

**Fixes shipped (tooling only, no site changes):**

| Fix | File |
|---|---|
| Rank values now carry a `_sources` map (`dataforseo` / `perplexity`) | `merge_sweep.py` |
| Perplexity will not overwrite a DataForSEO number for the same date | `perplexity/rank_checker.py` |
| Won't compare ranks across the `2026-07-27` `MEASUREMENT_EPOCH` | `gsc/ranking_watch.py` |
| Refuses any sweep without `location_codes_verified` | `merge_sweep.py` |
| Stamps `location_codes_verified: true` on new sweeps | `sweep.py` |

**Also found:** the Jul 21 sweep was logged as repaired on Jul 27 but **never was** —
`retry_errors.py` only re-fetches rows that *errored*, so every other row kept its
Los Gatos data. The file is byte-identical to its own `.bak-wrong-locations` backup.
Jul 21 and Jul 26 sweeps are now marked unverified and can't be merged. They can't be
repaired either — DataForSEO's live endpoint returns *today's* SERP.

**Expect a quiet watch list for ~2 weeks.** The epoch guard resolved all 21 open alerts,
because every one compared against a pre-fix baseline. That is not "everything is healthy" —
it's "we never had a trustworthy *before*." Detection resumes once 2+ post-epoch sweeps land.
Each resolved alert carries the reason in `ranking-alerts.json`.

---

## Session: July 29, 2026 — Venue directory crawl hub + two corrections to the Jul 28 notes

**Two things in the July 28 entry below were wrong. Both are corrected here.**

**Correction 1: the uncommitted Jacksonville rewrite did NOT delete the FAQPage schema.** It minified it onto a single line, which a line-based diff reads as a deletion. The schema was intact the whole time. What the diff actually did was better than what was live: HEAD had **12 questions in schema but only 8 visible on the page** — a real mismatch Google can treat as markup for invisible content. Shipped version is 11 and 11, exactly matched. The page sat blocked for a day on a misread.

Two judgment calls made before shipping: restored `COS Celebrations` to the title (the rewrite had swapped it for a second keyword on a page pulling 2,527 impressions/30d), and re-added **"Who is the best wedding DJ in Jacksonville, Florida?"** — the only direct answer to the AEO query COS keeps missing in AI visibility checks. Reworded from the old "no other Jacksonville company offers" to the sanctioned "Florida's original wedding DJ + live music hybrid" framing.

**Correction 2: "internal linking is not the cause" was measured wrong.** The Jul 28 note cited 7–18 inbound links per page. That count includes links from pages Google has *also* never fetched, which pass nothing. Splitting inbound links by whether the linking page has been crawled:

| Page | Total inbound | From a crawled page |
|---|---|---|
| /leu-gardens-wedding-dj/ | 8 | **1** |
| /sydonie-mansion-wedding-dj/ | 8 | **1** |
| /castle-hotel-orlando-wedding-dj/ | 8 | **1** |
| /jacksonville-wedding-venues/ | 11 | 3 |
| /the-white-room-wedding-dj/ | 18 | 11 |

**23 of the 53 had exactly one crawl-visible inbound link.** The venue pages mostly link to each other and that whole cluster is dark to Google. This does not overturn the crawl-demand diagnosis — it is a second, compounding problem, and unlike Request Indexing it is fixable in code. It also matches what `idx-2026-07-26-coverage` already said in April: *"resubmitting does NOT fix this — needs internal linking + content depth work."*

**Shipped (COS `66836aa`, verified live):**
- **`/vendors/venues/` was a "Directory Coming Soon" placeholder linking to zero venue pages.** Thin content on a crawled URL is exactly what earns "Crawled - currently not indexed," so it was likely one of the 13. Now a real directory of **all 60 venue pages** grouped into 8 markets, each market heading linking to its city hub. Added to `sitemap.xml` — it was never in it.
- **The homepage did not link to `/vendors/` at all**, so the directory was unreachable from the highest-authority page. Added a link under the venue proof strip and one in the footer.
- **`/team/corey-peterson/` was an orphan duplicate of `/team/djs/corey/`** — zero inbound links, in the sitemap, never crawled. Forced 301 (`301!`, because the file still exists on disk and Netlify serves real files before non-forced rules) and dropped from the sitemap.
- Git remote URL updated to `COS-website` — the push warning from the Jul 28 note is gone.

**Measured result:** venue pages with only one crawl-visible inbound link went **23 → 0**. Minimum for any venue page is now 2. `/fernandina-beach-wedding-dj/` is still at 1, but it is a city page and outside the venue directory's scope.

**A false alarm worth recording so nobody re-raises it:** grouping venues by schema `addressLocality` appeared to show Epping Forest and Timuquana (Jacksonville venues) labeled "St. Augustine," which looked like the same template artifact fixed on Azaleana Manor. It is not. Those are COS's own `LocalBusiness` address blocks, which correctly say St. Augustine — most venue pages carry no venue-address block at all. **No venue is mislabeled.** (Epping Forest does have its `LocalBusiness` block duplicated — cosmetic, low priority.)

**Still blocked: Request Indexing (`idx-2026-07-28-request-indexing`).** Chrome automation cannot reach GSC. The `chrome-devtools` MCP runs with no arguments, so it launches its *own* browser at `~/.cache/chrome-devtools-mcp/chrome-profile` signed into `corey@coscelebrations.com` — while both GSC properties live on `coscelebrations@gmail.com`. Fix is `--autoConnect` (Chrome 150 supports it): enable the debug server at `chrome://inspect/#remote-debugging`, add `--autoConnect` to the MCP args in `~/.claude.json`, restart. That also unblocks Google Ads, Analytics, and review responses. Caveat once working: Request Indexing is quota-limited to roughly 10-12 URLs/day per property, so it is still ~5 days for all 53 — automation saves the clicking, not the calendar.

**Still uncommitted, unreviewed:** `amelia-island`, `orlando`, `ponte-vedra` (dated-urgency copy removal pass, carried over from Jul 28). AE: `contact`, `first-call/quote`, `jacksonville-wedding-dj`, `welcome`, untracked `blog/questions-to-ask-a-budget-wedding-dj/`.

**Reassess:** check GSC Page Indexing ~2026-08-26 — if the 53 start moving out of "Discovered," the linking work is contributing. Confidence it helps on its own: **65%**. It does not create crawl demand; it makes each Request Indexing submission land on a page with real equity instead of a phantom count.

### Follow-up same day: Vendors link in the footer sitewide (COS `47e1806`)

Corey noticed the directory wasn't reachable from the front page nav and asked whether it should be hidden, since competitors watch the site. **It can't be hidden and shouldn't be:** `sitemap.xml` is public and already lists all 70 venue URLs — Google requires it — so the directory exposes nothing new, and hiding it from crawlers is the one thing that would break the crawl fix. Showing a page to Google but not to people is cloaking, a manual-penalty offense. The real moat is the insider detail on each venue page, not the venue list.

**Nav audit found the site runs two different navs.** Only 8 of 101 pages carry a Vendors tab — the 8 vendor pages themselves. The homepage and every venue and city page use a different nav without it, so the vendor section was an island linking only to itself. Pre-existing, not introduced here.

**Decision (Corey's):** footer link, not a nav tab, and point it at `/vendors/` rather than `/vendors/venues/` so the hub can grow to cover planners, photographers and the rest.

- **Vendors added to the footer on 86 more pages (95 total).** Every page Google fetches now has a path into the directory; before this only the homepage did.
- Deliberately skipped: `/go/` (landing page), `/pricing-guide/` (noindex), `/script-builder/`, `/tracker/`, `/tracker-legacy/` (internal tools).
- **The Venues card on `/vendors/` still read "Coming Soon"** after the directory went live. Fixed to "60+ venues."

**Open, needs Corey's input:** six of the seven vendor category pages are genuine placeholders — `planners`, `photographers`, `catering`, `bar-service`, `videographers`, `guest-experiences`, all ~97 words of "Coming Soon." Thin pages on crawled URLs are what earns "Crawled - currently not indexed," so they are probably already in that bucket of 13. Filling them needs the actual vendor names Corey recommends. Worth doing for a second reason: named vendors tend to link back, and per `guidelines-2026-05-26.md` unlinked brand mentions beat backlinks 3x for AI citation.

**Fixed after a closer look (COS `339bd8f`):** I first reported an unclosed `<div>` on `fernandina-beach-wedding-dj` and `st-johns-golf-wedding-dj`, and called it cosmetic. Both parts were wrong. The real cause was a **stray double-quote — `<h3">` instead of `<h3>`** — Fernandina line 217, St. Johns line 187. Same typo in both places, so a template copy-paste.

It was not cosmetic. The browser parsed `<h3"` as an unknown element, so those cards rendered with **no heading at all**: "No Travel Fees" and "DJ + Live Saxophone" lost their h3 styling and Google saw no heading there — on a page whose whole point is the DJ + live sax angle. Verified in-browser after the fix: both are real `h3` elements again at the same 20px as their siblings, page h3 count 6 → 7.

Swept the site for the same pattern — only these two. A full tag-balance rescan of all 101 pages now reports zero problems. **Lesson: a tag-balance checker reports where the parse breaks, not where the typo is. Read the actual line before calling it low-priority.**

**Still open:** the `/vendors/` hub uses emoji category icons, which Rule #15 prohibits.

### Follow-up same day: Request Indexing unblocked, 12 of 53 submitted

**The Chrome problem was an account mismatch, and Corey fixed it in about a minute.** The `chrome-devtools` MCP launches its own browser (`~/.cache/chrome-devtools-mcp/chrome-profile`), which was signed into `corey@coscelebrations.com` — an account with access to neither GSC property. Rather than the `--autoConnect` route (toggle at `chrome://inspect`, edit `~/.claude.json`, restart), Corey just signed *that* browser into `coscelebrations@gmail.com`. It stays signed in, so GSC, Google Ads and Analytics are all reachable in future sessions with no setup.

Worth recording why `--autoConnect` was needed at all: his own Chrome was already running, so command-line debug flags would not apply, and Chrome 136+ refuses `--remote-debugging-port` on the default profile anyway. Signing into the MCP browser sidesteps both.

**Submitted 12 URLs, all confirmed "added to a priority crawl queue":** `/jacksonville-wedding-venues/`, `/the-white-room-`, `/river-house-`, `/bowing-oaks-`, `/club-continental-`, `/ribault-club-`, `/glass-factory-`, `/bella-collina-`, `/casa-monica-`, `/san-jose-country-club-`, `/ponte-vedra-inn-club-`, `/marsh-landing-country-club-wedding-dj/`. Every one read "Discovered - currently not indexed / Last crawl: N/A" beforehand, matching the Jul 28 pull exactly.

**The daily quota is 12, not ~10.** I had estimated ~10-12 and hedged at 80% confidence; now measured. The 13th (`walkers-landing`) returned *"Quota Exceeded — you've exceeded your daily quota. Please try submitting this again tomorrow."* 41 left, so four more days. Full day-by-day queue: `~/seo-data/gsc-indexing-queue.md`.

**Google independently confirmed the linking diagnosis.** URL Inspection on `/jacksonville-wedding-venues/` reported **"Referring page: None detected"** — on the hub page, the highest-priority item on the list. That is Google's own read of the same gap found by splitting inbound links by crawl status, and it is the strongest evidence yet that the Jul 28 "internal linking is not the cause" conclusion was measuring the wrong thing. All 12 were submitted *after* the venue-directory deploy, so they enter the crawl queue with the new inbound links already live.

**One scripting note for next time:** the Request Indexing control is a `div[role="button"]`, not a `<button>` — matching on `aria-label*="Request indexing"` is what works.

**Reassess ~2026-08-26.** Request Indexing buys a priority crawl, not an index. If these pages get crawled and then land in "Crawled - currently not indexed," the bottleneck is content quality across 51 near-identical venue pages — the unproven ~40% hypothesis above — and that needs different work entirely.

**Left uncommitted, still awaiting Corey's review:** `amelia-island`, `orlando`, `ponte-vedra` — the dated-urgency copy removal pass carried over from Jul 28. They now also carry the footer link. Kept out of the footer commit deliberately rather than bundling unreviewed content changes.

---

## Session: July 28, 2026 — 53 COS pages have NEVER been crawled by Google

**Headline: everything COS published after Dec 17 2025 is invisible in search. Not ranking badly — not indexed at all, so not eligible to rank for anything.**

Triggered by a GSC email about "Page with redirect." That reason turned out to be **1 page** — `/crystal-ballroom-daytona-wedding-dj/`, the closed venue we deliberately redirected. Expected, not a bug. The real finding was underneath it.

**COS Page Indexing, GSC data through 7/23/26: 30 indexed / 69 not indexed.**

| Reason | Pages |
|---|---|
| Discovered - currently not indexed | **53** |
| Crawled - currently not indexed | 13 |
| Not found (404) | 2 |
| Page with redirect | 1 |

All 53 show **Last crawled: N/A** — Google knows the URLs and has never fetched them. First detected 1/3/26, so this has been true for ~7 months. ~51 of the 53 are venue pages.

**The cutoff is a date, not a quality problem.** Checked creation dates against index status: every indexed page was created 2025-12-04 to 2025-12-11; every never-crawled page was created 2025-12-17 or later. No overlap. Google indexed the site's first ~30 pages and stopped crawling new ones.

Ruled out: robots.txt clean, all 53 were in sitemap.xml, noindex-excluded count 0, no canonical mismatches, most have 7–18 inbound internal links. Internal linking is **not** the cause — `/river-house-wedding-dj/` (14 links) and `/the-white-room-wedding-dj/` (18 links + a homepage link) are equally uncrawled. This is crawl demand.

Corroborated independently against local GSC data: **zero of the 53 had a single impression in the last 30 days.** The 32 pages that do have impressions match the ~30 indexed count.

**Fixed and deployed (COS `1dc31c9`, `36ea887`; AE `52736ec`):**
- Azaleana Manor schema had `addressLocality: "St. Augustine"` while the page is about Orange Park — template copy-paste artifact. Corrected.
- Azaleana Manor and Embassy Suites St. Augustine Beach had **zero inbound internal links**. Linked from Clay Theatre nearby-venues and the St. Augustine hub respectively.
- Removed `/pricing-guide/` from sitemap.xml — it's `noindex, nofollow` by design, so listing it spent crawl budget on a page Google was told to ignore.
- **Tampa Garden Club pages on BOTH sites were 404ing live** — built 2026-07-26 (migration day), added to both sitemaps, linked from both Tampa hubs, never committed. Now deployed, verified 200.

**Next action, and it's manual:** Request Indexing in GSC URL Inspection, ~10/day. Priority order by internal-link equity: `/jacksonville-wedding-venues/` (hub first), `/the-white-room-wedding-dj/`, `/river-house-wedding-dj/`, `/bowing-oaks-wedding-dj/`, `/club-continental-wedding-dj/`, `/ribault-club-wedding-dj/`, `/glass-factory-wedding-dj/`, `/bella-collina-wedding-dj/`, `/casa-monica-wedding-dj/`, `/san-jose-country-club-wedding-dj/`. ~5-6 days for all 53.

**Two consequences for existing plans:**
1. **Rank checks aimed at never-crawled pages measure nothing.** Push out Embassy Suites (~Aug 18), Azaleana Manor (~Aug 5), Walker's Landing.
2. **The action queue is generating phantom tasks.** `invest-azaleana-manor-wedding-dj` ("Investigate ranking drop") was for a page that never ranked. Logged done with the real cause. Suspect others in the 186 human tasks for the same reason — same family as the rank-checker unreliability from Jul 27.

**Left uncommitted deliberately — needs review:** `jacksonville-wedding-dj/index.html` has an uncommitted rewrite that deletes 108 lines **including the entire FAQPage schema block**. That page pulls 2,527 impressions/30d. Do not ship until someone confirms the schema removal is intentional. Also uncommitted: `SEO.md` (pre-existing), `amelia-island`, `orlando`, `ponte-vedra` (dated-urgency copy removal pass). AE: `contact`, `first-call/quote`, `jacksonville-wedding-dj`, `welcome`, untracked `blog/questions-to-ask-a-budget-wedding-dj/`.

**Housekeeping:** COS git remote has moved — GitHub warns `cos-website` → `COS-website` on every push. Works via redirect for now; update the remote URL.

Secondary hypothesis, ~40%, unproven: 51 near-identical venue pages may trip Google's "this pattern isn't worth crawling" heuristic — the exact risk Rule #2 exists to prevent.

---

## Session: July 27, 2026 — Weekly Rank Scan + rank checker fails GSC validation (Manager Agent, week 31)

**Headline: the Perplexity rank checker does not agree with Google about which direction we're moving. Stop treating its drop alerts as findings.**

**w1 rank_checker + ranking_watch:** Produced 12 watching / **9 confirmed** / 79 resolved. Before logging those as drops I cross-checked them against GSC (real Google data, window Jun 15–Jul 9 vs Jul 10–23). Every spot-check reversed:

| Alert | rank_checker | GSC avg position |
|---|---|---|
| AE `st augustine wedding dj` | #5 → #9 | 15.8 → **9.6 (improved)** |
| AE `wedding dj st augustine` | #4 → #8 | 13.5 → **8.0 (improved)** |
| AE `lightner museum wedding dj` | #2 → gone | 15.0 → **11.7 (improved)** |
| COS `gainesville wedding dj` | #2 → #7 | 12.7 → **10.4 (improved)** |

Widened to all 53 keywords carrying data in both sources: **47% directional agreement; 36% on the subset rank_checker says moved.** Worse than chance. Absolute levels disagree too — rank_checker has COS `orlando wedding dj` at #4, GSC has avg 21.0 across 106 impressions.

Caveats stated honestly: GSC average position aggregates all locations/devices/variants while rank_checker takes one SERP snapshot; samples are thin (10–30 impressions on most keywords); GSC ends Jul 23 vs a Jul 27 scan. None of that explains direction flipping 6 of 6, or 36% on the moved subset.

**Consequences:** (1) No rewrite tasks created from the 9 confirmed alerts. (2) **`d21` should be rejected** — promoting this detector from watch-only to *active* would auto-rewrite healthy pages. (3) Proposed guard: in `ranking_watch.py`, require GSC corroboration before an alert reaches `confirmed` (only confirm when GSC avg position for the same query also worsened over the same window). That single change suppresses all 9 of today's alerts. Alerts were left flagged in `ranking-alerts.json`, not resolved or suppressed. Full 53-keyword table: `~/manager-agent/drafts/rankcheck-2026-07-27-validation/`.

This is the **third monitor in three days** to fail a reality check (see `idx-2026-07-26-coverage` Jul 26, and the stale hand-typed "CRITICAL deindexing" number). Feeds the `seo-monitoring-trustworthiness` project; new task `mgr-2026-07-27-1` (high, due Aug 6).

**w4 AI visibility:** COS **75%** (6/8), AE **50%** (4/8). Flat vs Jul 21 and Jul 13. COS has held 75% four consecutive checks; AE oscillating 38–50% since late June. No movement to act on.

**w5 competitor scan:** Clean, no new entrants. Two standing threats unchanged — Classic Disc Jockeys #2 `best wedding dj orlando`, Future Stereo #3 `st augustine wedding dj`. No fresh competitor content since March.

**Also verified:** `pipeline-log.txt` tails with "Pushing cos… Pushing ae… Done. 3 rewrites" at `00:54`, which reads as the retired w9 pipeline having run today. It did not — backup filenames in those lines date them to 2026-07-13 and the file's mtime is Jul 26 12:50. Nothing auto-committed; the uncommitted Tampa Garden Club working-tree edits are intact in both repos.

---

## Session: July 21, 2026 — GSC Review snippets fix (Timuquana)

**Alert:** GSC flagged 1 Review snippets structured data issue on coscelebrations.com — "Invalid object type for field itemReviewed." Traced to /timuquana-country-club-wedding-dj/, the Joel + Kristin featured Review microdata used `itemReviewed` typed as `Service`. Google's review snippet spec only accepts LocalBusiness, Organization, Product, Book, Movie, etc. — Service is not on the list.

**Fix:** Swapped `itemReviewed` type Service → LocalBusiness, filled name/telephone/priceRange/address to match site-wide COS LocalBusiness schema. Only page affected (grep confirmed). Commit e96b8d0 pushed. Click "Validate Fix" in GSC once Netlify deploys.

**Follow-up:** If we add featured reviews to more venue pages, use LocalBusiness (or Organization) for `itemReviewed`, never Service.

---

## Session: July 21, 2026 — Weekly Rank Scan (Manager Agent, week 30)

**w1 rank_checker:** 89 keywords, **~40 changes — broadly DOWN/mixed.** Reads as weekly SERP volatility, not decay: St. Augustine SURGED the same scan the city cluster softened (classic volatility signature). WINS: `wedding dj st augustine` #2→#1, `best wedding dj st augustine` #3→#1, `river club jacksonville` #5→#1, `wedding dj under 1000 jacksonville` #4→#1, `budget wedding dj jacksonville` #2→#1, `affordable wedding dj jacksonville` #4→#3, `how much cost jax` #4→#3, `river house` #4→#3, `florida aquarium` #3→#2, `castle hotel orlando` #4→#3; NEW `bella collina` #5 / `dr phillips house` #7 / `kelly farm events` #9. DROPS (mostly single-scan venue oscillators): `crystal ballroom daytona` #1→#10, `deerwood country club` #2→#9, `st johns golf` #1→out, `oyster bay yacht club` #1→#4, `the orlo` #1→#3, `shores resort` #1→#3, `walkers landing` #1→#2, `marsh landing CC` #2→#3, `the white room` #9→out, `luxury wedding dj st augustine` #2→#5, `live saxophone` #2→#3. CITY softening: `jacksonville` #3→#4, `orlando` #2→#4, `gainesville` #4→#6, `jacksonville fl` #3→#7, `wedding dj jacksonville` #8→#9, `tampa` #9→out, `wedding dj near me jacksonville` #7→out, `garden club jacksonville` lost.

**ranking_watch:** 9 watching, **1 CONFIRMED** (COS `cheap wedding dj jacksonville` #4→#8 → /jacksonville-wedding-dj/), 75 resolved, 0 persistent. **No rewrite task created** — same intent-mismatch flagged week 29: a "cheap" query against the luxury Jax page, which improved on its real terms this week. w9 retired, don't-poke discipline holds. WATCH `deerwood country club` + `crystal ballroom daytona` next scan (both large single-scan venue drops).

**w4 AI visibility:** COS **75%** (6/8, flat vs Jul 13), AE **50%** (4/8, flat vs Jul 13). AE holds citations on "Budget friendly wedding DJ Jacksonville" (ae-djs.com/jacksonville-wedding-dj/) + "Professional wedding DJ NE Florida." COS misses: "Top rated wedding DJ Jacksonville" (still flickering) + 1 other. Both brands stable — no AI-visibility movement despite the organic softening, which supports the volatility (not decay) read.

**w5 competitor scan:** No new threats. Orlando remains the only contested market — Classic Disc Jockeys #2 "best wedding dj orlando" / #5 "orlando wedding dj," Soundwave #9 (relevant now that COS Orlando slipped #2→#4). Future Stereo St Aug #8/#7 (no threat — COS holds St Aug #1). No fresh competitor content since March.

---

## Session: July 14, 2026 — COS Homepage Hero Rewrite (Original Hybrid Positioning)

**Change:** Rewrote hero on coscelebrations.com/ to lean into "Florida's Original Wedding DJ + Live Music Hybrid" positioning.

**Before → After:**
- Eyebrow: "Your Wedding Soundtrack, Performed Live" → "Serving North + Central Florida"
- H1: "North + Central Florida / Wedding DJ + Live Musicians" → "Florida's Original / Wedding DJ + Live Music Hybrid"
- Subtitle: Generic "unforgettable weddings" prose → Founder-first lead ("played sax at weddings for years before opening COS in 2022"), positions as original hybrid, links to /services/live-musicians/ and /pulse/

**SEO preservation:**
- "Wedding DJ" retained in H1
- "North + Central Florida" moved to eyebrow (still on page prominently)
- City keywords (St. Augustine, Jacksonville, Orlando, Tampa) retained in subtitle with `<strong>` tags — Tampa added as expansion signal since it's Central FL and already on our target list
- Added "Original" and "Hybrid" as new differentiators

**Rationale:** Outside-look review flagged homepage as "premium mid-market" not luxury. Corey's founder-first-musician-then-DJ path is genuinely differentiated in the FL market — no competitor has this origin story.

**Watch (reassess ~Aug 4, 2026):** Any dip on `jacksonville wedding dj`, `st augustine wedding dj`, `orlando wedding dj`, `ponte vedra wedding dj`, `north florida wedding dj`, or `central florida wedding dj`. If any drops meaningfully → revert commit and try adding positioning section BELOW hero without touching H1. If rankings hold, consider rewriting other high-value pages the same way.

**Confidence:** 75% this doesn't hurt rankings. Not 95% — SEO isn't fully predictable. Rollback is one git revert.

**Corey's guardrails documented (do not repeat in future drafts):**
1. Do NOT claim "since 2005" for DJ services — Corey was touring/playing sax at weddings in 2005, not DJing. COS DJ business opened 2022.
2. Do NOT claim "not sub-contracted" for live musicians — COS uses a rolodex of trusted pro musicians as needed.

---

## Session: July 13, 2026 — Weekly Rank Scan (Manager Agent, week 29)

**w1 rank_checker:** 89 keywords, **27 changes — broadly UP.** COS city cluster strengthened across the board: `jacksonville wedding dj` #4→#3, `st augustine wedding dj` #4→#2, `orlando wedding dj` #3→#2, `gainesville wedding dj` #5→#4, `jacksonville fl wedding dj` #4→#3, `wedding dj st augustine` #3→#2. Venue wins: `the white room` #7→#4, `deerwood country club` #10→#2, `don cesar` #3→#2, `florida aquarium` #7→#3, `lodge club ponte vedra` #3→#1, `lightner museum` #6→#5. NEW: `barn at deep creek` #7. DROPS (mostly known oscillators / minor): `wedding dj under 1000 jacksonville` #1→#4, `best wedding dj jacksonville` #5→#7, `garden club jacksonville` #8→#10, `river house` #3→#4, `luxury wedding dj st augustine` #1→#2, `wedding dj with live saxophone` #2→#3, plus budget-kw softening (`affordable wedding dj jacksonville` #3→#4, `affordable wedding dj st augustine` #5→#6, `how much cost jax` #3→#4).

**ranking_watch:** 2 watching (COS `barn at deep creek` #7→gone — a brand-new ranking, likely settling; AE `the orlo` #3→gone), **1 CONFIRMED** (COS `cheap wedding dj jacksonville` #4→#8 → /jacksonville-wedding-dj/), 77 resolved, 0 persistent. **No rewrite task created** — the confirmed drop is an intent-mismatch "cheap" keyword against the luxury Jax page (which itself IMPROVED to #3 this week); w9 retired, don't-poke discipline holds. Watch `barn at deep creek` next scan before acting.

**w4 AI visibility:** COS **75%** (6/8, flat vs Jul 6), AE **50%** (4/8, UP from 38% on Jul 6). AE now cited on both "Budget friendly wedding DJ Jacksonville" (ae-djs.com/jacksonville-wedding-dj/) and "Professional wedding DJ northeast Florida." COS misses: "Top rated wedding DJ Jacksonville" (still flickering) + 1 other.

**w5 competitor scan:** No new threats. Orlando remains the only contested market — Classic Disc Jockeys #2 "best wedding dj orlando" / #6 "orlando wedding dj" (relevant now that COS holds Orlando #2). Future Stereo St Aug #9. No fresh competitor content since March across all tracked rivals.

---

## Session: July 11, 2026 — Payton + Cody wedding assets deployed (FoY + Live Musicians)

**Additions (Fountain of Youth):**
- COS FoY: New 5-photo bento gallery "Payton + Cody's Wedding" featuring live ceremony trio (violin, sax, drums) + reception DJ+sax hybrid. Photo credit Brittany Morgan. Now 4 real weddings featured on this page.
- AE FoY: First real-wedding gallery on the page — previously text-only. 3 reception/dance-floor shots with lightbox. Placement between "Optional Add-Ons" and "About Fountain of Youth."

**Additions (COS Live Musicians page):**
- Sax, Violin, and Drums service cards now have real event photos (previously text-only). Cards edge-to-edge photo with hover zoom. Piano/Guitar/Trumpet still text-only until we have shots.

**Positioning note:** AE FoY gallery photos happen to show sax player but captions/framing don't call out live musicians. AE positioning stays "budget DJ" while COS retains "DJ + live musicians" differentiator. Rolodex offering used as a closing tool for AE, not front-page pitch.

**Files:** COS commit `882397f`, AE commit `3152312`. Netlify auto-deploy triggered.

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

### Session Notes (Jul 26, 2026) - Ribault Club Page Sharpening (P1 push to #1)

**Trigger:** `p1-cos-ribault-club-wedding-dj` — "ribault club wedding dj" holding at #2 (COS) with an **AI Overview present** on the SERP. Last content touch was June 26 (site-wide nav change only). Keep-working mode pick.

**Competitor finding:** AMPLIFY ranks above us (`amplifymyevent.com/ribault-club/`, ~1,200–1,500 words). They have **no FAQ section at all** and cover zero DJ-relevant logistics — no sound, power, load-in, or end-time detail. That was the gap this pass attacks. Confirms the June 2 finding that AMPLIFY is the one competitor running our venue-page playbook.

**Changes (commits `a0e3469`, `73a65ec`):**
- Visible **6-question FAQ section** added — page previously had 2 questions in schema only, nothing on-page
- `FAQPage` schema rebuilt to mirror the visible copy word-for-word (was 7 schema Qs vs 6 visible, drifting wording — Google can discount mismatched FAQ markup)
- 2 **AI-quotable blocks**, distinct angles: three-space sound setup, and Fatio/state-park history
- Statement H2s → **question H2s** (AEO, matches Epping Forest pattern)
- 2 generic feature cards replaced with venue-specific ones: terrazzo + 36 French doors acoustics; 9:30am vendor load-in during park public hours
- **Capacity error fixed** — page claimed "up to 400 guests"; actual is 350 seated / 400 cocktail full facility, 190 ballroom+north salon, 160 dining+south salon
- `dateModified: 2026-07-26` + visible "Last updated: July 2026"
- Meta + og descriptions sharpened
- Word count ~800 → ~1,270 (now parity with AMPLIFY)

**Accuracy correction (`73a65ec`):** First pass asserted the ceremony lawn has limited power and cited "twelve-foot ceilings." Neither was sourced — the power line was inference, the ceilings came only from AMPLIFY's page. Reframed the power answer as COS practice (self-powered ceremony rig) and swapped in details confirmed by theribaultclub.com / ameliaisland.com. See `memory/feedback_no_fabricated_venue_details.md`.

**Verified venue facts used** (theribaultclub.com, ameliaisland.com, floridastateparks.org): 1928 Maurice Fatio design, 16,000 sq ft, ~6,000 sq ft event space, National Register + Jacksonville Landmark, 100-acre Fort George Island Cultural State Park, park open to public 9am–5pm Wed–Sun, vendor access 9:30am, free on-site parking, no drop-off catering, 50% non-refundable deposit, venue rental from $6,800.

**Open items:**
- Hero still uses a **Treasury fallback photo** — no real Ribault images exist in `~/cos-website/images/`. Same gap Walker's Landing had pre-Jul 3. Biggest remaining upgrade to this page.
- Still no real insider note from Corey for Ribault on the Jax venue hub (`d22`/`d34` backlog).

**Reassess:** ~Aug 23 (4 weeks). Watch `ribault club wedding dj` for #2 → #1 and check whether the AI Overview starts citing COS.

**Tooling issues found this session:**
- `~/seo-data/perplexity/*.py` all dead — **no Perplexity API key** loaded (`.env` or `PERPLEXITY_API_KEY`). Used WebSearch/WebFetch instead. Blocks every `rewrite-research` / `venue_research` action in the queue.
- `~/seo-data/evaluator/venue-gaps.json` **does not exist**, so `unify_actions.py` emits empty-query venue tasks. 3 of the current top5 are junk: "garden club" (page already live on both sites), "hotel crystal ballroom" (venue closed), "live saxophone reception resort" (not a venue).

---

### Session Notes (Jul 27, 2026) - Market Research: What People Actually Search, and Why We Get No Clicks

**Trigger:** with correct-location data finally available, Corey asked what people actually search for DJs in Jax / St. Aug / Orlando, and where we rank on those terms.

**1. Real search volume (Google Ads via DataForSEO, verified location codes)**

| Market | Head-term volume | COS rank | CPC |
|---|---|---|---|
| **Orlando** | 140/mo x 5 variants, plus 170/mo `dj orlando` | #24-35 | **$13.01** |
| Jacksonville | 110/mo `dj jacksonville`, 20-30/mo wedding terms | #10-13 | $3.31-7.79 |
| St. Augustine | **~90/mo total**, most terms 10/mo | **#3-5** | $2.54 |

**We have won the smallest market.** St. Augustine is where COS ranks best and where there is almost no volume. Orlando is 4-5x the volume at 4x the CPC and we sit on page 3.

**2. `dj [city]` outvolumes `wedding dj [city]` everywhere - and Google treats it as a wedding query**

SERP intent check on the generic term: **8 of 10 top results are wedding-intent** in both Jacksonville and Orlando (The Knot, WeddingWire, Zola, "Mobile Wedding DJs"). Couples type "dj jacksonville" and Google supplies the wedding intent. Volume comparison: `dj jacksonville` 110/mo vs `wedding dj jacksonville` 20/mo; `dj orlando` 170 vs 140; `dj st augustine` 50 vs 10.

**Trap:** do NOT chase `dj st augustine` (50/mo). Positions #3, #4 and #7 on that SERP are **DJ's Clam Shack**, a restaurant. Only 5/10 results are wedding-related. The volume is real, the intent is not ours.

**3. Jacksonville vs Orlando are not equally winnable**
- `wedding dj jacksonville`: **4 of the top 12 are directories** (Knot x2, WeddingWire, Zola) plus Reddit at #3 and Facebook at #9. Only 3 slots belong to actual DJ operators. Seven of the nine results above COS are not competitors.
- `dj orlando`: only ONE directory in the top 10. Elegant Entertainment, Orlando DJ Group, Our DJ Rocks, Soundwave - all operators, all beatable in a way The Knot is not.
- **Orlando has the most volume, the highest CPC, wedding intent, AND the softest competition.** It is the best target on every axis and the one we have barely touched.

**4. The "zero click" alarm was mostly a position artifact - and then a measurement artifact**

The rebuilt action queue flagged `zero_ctr` on Treasury and Epping Forest. First read was wrong: those pages average **position 18-33**, so low clicks are expected. AE Jacksonville at #33.3 is actually running slightly ABOVE expected CTR. Page-level averages hide everything - one page serves many queries at wildly different positions.

Query-level filter (top-10 position, 40+ impressions, zero clicks) found the real cases: **1,698 impressions in top-10 positions producing zero clicks**, including `timuquana wedding dj` at **position 1.8 with 101 impressions and 0 clicks** for COS, and #2.9 for AE on the same term.

**5. THE ANSWER: Local Pack, and it changes Jacksonville strategy** *(not previously documented anywhere)*

**57% of COS's top-10 keywords have a Local Pack above the organic results** (27 of 47). 29% have an AI Overview.

Checked who occupies those packs:

```
st augustine wedding dj            COS organic #1
  Local Pack: 1. COS Celebrations  2. Beachside  3. Someone Said Yes
affordable wedding dj st augustine COS organic #1
  Local Pack: 1. COS Celebrations  2. DJ Voodoo  3. Beachside
jacksonville wedding dj            COS organic #10
  Local Pack: Legacy Events 119, Generation Y, Mark Aria   <- COS ABSENT
budget wedding dj jacksonville     COS organic #4
  Local Pack: Generation Y, White Tie Events, DJ Voodoo    <- COS ABSENT
```

In St. Augustine we hold **#1 organic AND #1 in the pack**. Local Pack clicks do not appear in Search Console - they land in GBP Insights as calls / directions / website taps. So GSC logs the organic impression with no click and it looks like a CTR failure. **~80% confidence; verify against GBP Insights (business.google.com > Performance).** That is the third time in two days a number turned out to be measuring the wrong thing.

**Jacksonville maps reality (DataForSEO maps, 2026-07-27):** every one of the top 10 has a **Jacksonville street address**. Legacy Events sits at #2 with **13 reviews**; COS has **186** and does not appear at all. **COS is no longer in the Jacksonville maps top 20** (own baseline had it at #19 on 2026-06-26).

**Why that is fine:** the Jax listing was removed deliberately because the address was not genuinely ours. That was the right call - a fake-address listing risks suspension of the entire profile, which would cost the St. Augustine **#1 with 186 reviews** to defend a #19 that earns nothing. Do not re-create it. **Proximity decides the Local Pack, and no amount of content or reviews overcomes a 40-mile gap.** Service-area settings do NOT fix this - they govern where you travel, not where you rank.

**Strategic consequence:** Jacksonville cannot be won on the city name. Pushing `/jacksonville-wedding-dj/` from #10 to #4 still loses most traffic to three map listings we cannot enter. Jacksonville is winnable on **venues and modifiers**, not on the city term.

**6. Jacksonville venue coverage is COMPLETE - the real gap is live music**

All major Jax venues have pages on both sites (Timuquana, Epping Forest, TPC Sawgrass, Sawgrass Marriott, River Club, Deerwood, Garden Club, Bowing Oaks, Clay Theatre). The automated gap-finder agrees - its only 3 candidates were junk (Tampa Garden Club, now built; a closed Daytona venue; a non-venue string).

**The undeveloped gap, ~400 impressions / 90d:**

| Query | Impressions | Position |
|---|---|---|
| `wedding entertainment jacksonville fl` | 152 | #20 |
| `pulse jax` | 177 | **#6.1** |
| `wedding musicians in jacksonville` | 79 | #28.5 |

There is no Jacksonville-targeted live-music page; `/services/live-musicians/` and `/pulse/` mention Jacksonville only in passing. That SERP is softer than the DJ one - **2 directories instead of 4, no Reddit**, and the operators ranking are string quartets, not DJ+live-sax hybrids. `pulse jax` already draws 177 impressions at #6 with no page built for it.

**RECOMMENDED NEXT: build a Jacksonville live music / wedding entertainment page for COS.** Real gap, plays to the one thing that cannot be copied, least-defended SERP in the cluster. AE does not get this one - live musicians are not AE's product.

**Page work done this session:**
- COS + AE Jacksonville city pages retargeted for `dj [city]` alongside `wedding dj [city]`; new non-wedding section on both (honest about NOT doing club/nightlife work). *Note: the COS title retarget was later superseded by the `de-cannibalize venue keywords` pass (commit 0d1924e); AE's survives.*
- COS Jacksonville FAQ schema was **almost entirely fictional** - 12 questions of which **11 appeared nowhere on the page**, while 8 visible questions were absent from the schema. Rebuilt word-for-word. Rule #6's required "wedding DJ near me" FAQ existed only in schema; now visible.
- AE Jacksonville: 16 em dashes, 17 checkmarks, 3 bullets converted to entities, **6 emoji icons removed** (Rule #15). Watch out: em dashes inside JSON-LD are stored as `—` escapes, so a plain find-replace misses them and silently re-breaks schema/visible parity - regenerate schema with `ensure_ascii=False` after any such cleanup.
- Removed unverifiable availability claims sitewide ("Booking now: Fall 2026 dates are filling fast", "Now booking 2026 and 2027", "dates are filling fast") from COS Jacksonville, Ponte Vedra, Orlando and Amelia Island. **Still outstanding: 18 venue pages end with a templated "This [adjective] venue books quickly" closer** - same unverifiable claim plus a Rule #2 templating violation.

---

### Session Notes (Jul 26, 2026 PM) - Monitoring Was Lying; Tampa Garden Club Built

**Theme:** three separate scripts were reporting confidently wrong numbers, all with the same root cause: **absence of measurement treated as measured data.** Fixed all three.

**1. Indexing monitor false alarm - FIXED**
- `monitor_indexing.py` in `--auto` mode returned `history["checks"][-1]["indexed"]`. That traced back to a hand-typed **10** (COS) and **2** (AE) from 2025, copied forward every Sunday. Hence the standing "CRITICAL - 11.8% indexed" and a weekly pointless auto-resubmit.
- Rewired to the **GSC URL Inspection API** via new `cos-tools/seo-tracking/gsc_index_client.py` - asks Google per URL. Now refuses to write history or raise an alert when it cannot measure.
- **Real numbers: COS 30/85 (35.3%), AE 16/78 (20.5%).** The alert was fake; **the gap underneath it is real.** Most misses are `Discovered - currently not indexed` - a crawl-budget/quality signal that resubmitting does not fix.
- Added a cross-check against `gsc-data.json`: 4 AE pages with real impressions (`/services/` 163, `/contact/` 55, `/leu-gardens-wedding-dj/`, `/the-orlo-wedding-dj/`) come back "URL is unknown to Google", so AE's true count is **at least 20/78**. Monitor now labels its own number a floor rather than overstating confidence.
- Corrections to prior notes: the "54 COS / 23 AE pages" figures were **all-time**, not 60-day. Last 60 days is 32 COS / 22 AE.

**2. Sixteen "confirmed" ranking drops - 10 were false**
- `ranking_watch.analyze_keyword()` fired `lost_ranking` whenever the 5-check window had **no non-null baseline**, hardcoding `current: None` while the most recent real check showed a healthy rank.
- Actually ranking on Jul 21: **club continental #1**, casa monica #3, the wooly #3, bella collina #5, kelly farm #7, flagler college #7 (COS) and #10 (AE). Bella Collina and Kelly Farm never "fell off."
- Second, deeper bug found while testing the fix: `current` was computed as *last non-null position anywhere in the window*, not *position at the latest check*. A keyword that ranked #3 then vanished still reported `current = 3` and never reached the loss branch. **Every alert the detector emitted came from the buggy condition, and every genuine loss was invisible.**
- Both fixed. Regression test: `seo-data/gsc/tests/test_ranking_watch.py`, 7 cases covering both directions. 10 false alerts resolved with written reasons; `ranking-alerts.json.bak-2026-07-26` kept.
- **Treat pre-2026-07-26 `lost_ranking` history as unreliable in both directions.**

**6 real drops (all from the Jul 21 sweep):**

| Brand | Keyword | Move |
|---|---|---|
| COS | jacksonville wedding dj | #2 -> #6 |
| COS | jacksonville fl wedding dj | #3 -> #6 |
| COS | gainesville wedding dj | #2 -> #7 |
| COS | wedding dj with live saxophone | #1 -> #7 |
| AE | budget wedding dj jacksonville | #2 -> #6 |
| AE | lightner museum wedding dj | #2 -> #8 |

All six landed on the same sweep. The Jul 14 homepage hero rewrite is a candidate cause (Jacksonville + Gainesville both dipped), **but AE dipped identically and AE's homepage was never touched**, which points to an external SERP event. Confidence hero-caused: **~35%**. Do not revert on this evidence alone.

**3. Perplexity keyword discovery - FIXED**
- `search()` used `data.get("results", [])`. The default only fires when the key is **absent**; Perplexity returns `{"results": null}` for some queries, handing callers a `None` to iterate. That was the intermittent `'NoneType' object is not iterable` silently skipping keywords. Same pattern hardened in `chat()`.
- Separate silent bug: `load_tracked_keywords()` looked for brands `"cos"`/`"ae"` but `rankings.json` uses `cos_celebrations`/`ae_entertainment`, so it **always returned 0** and every keyword looked like a fresh gap. Now returns 99.
- `run_weekly.sh` now runs `python3 -u`. Without it a stalled sweep and a healthy one produce an identical empty log - which caused a misdiagnosis this session.

**4. Tampa Garden Club venue pages - BUILT, NOT DEPLOYED**
- GSC gap: `dj tampa garden club` - 59 impressions, 0 clicks, no page. **Distinct from the existing Jacksonville Garden Club page.**
- Perplexity research found **zero competitor DJ pages** for this venue - clean opening.
- Hook: 2629 Bayshore Blvd is residential, and **Tampa ordinance Sec. 14-154 caps sound at 55 dBA from 10 p.m.** Both pages are built around planning the reception backward from that cutoff. Phrased as a city ordinance with "confirm your contract," since the venue's own curfew could not be sourced.
- Verified facts: founded 1927 (Genevieve Stringer, over tea, originally Platt Street), 3 acres, 6,000 sq ft, up to 325 guests / ~240 indoors with a dance floor / ~250 outdoor ceremony, large free private lot, rental ~$4,500-7,500.
- Validated: Service + WebPage + FAQPage + LocalBusiness schema parse; FAQ schema matches visible copy **word-for-word**; no Rule 15 unicode; no broken internal links. Sitemaps updated (COS 86, AE 79).
- **No claim of past events at this venue** - we have not worked it.
- **Open:** both pages use a generic dance-floor fallback hero. No Tampa Garden Club images exist in either repo. Same gap as Ribault Club.

**5. EVERY DataForSEO location code was wrong - FIXED (the big one)**

Ran the Sunday sweep to confirm the 6 drops. It failed 38% of keywords, which led here:

| sweep.py label | code | actually resolved to |
|---|---|---|
| jacksonville | 1013964 | **Los Gatos, California** |
| st augustine | 1014229 | **San Leandro, California** |
| orlando | 1015214 | Tampa, Florida |
| tampa | 1015754 | **Dubuque, Iowa** |
| ponte vedra | 1015354 | Forsyth, Georgia |
| palm coast | 1015300 | Cobb, Georgia |
| **DEFAULT (Florida statewide)** | **21149** | **Kansas** |
| fernandina / daytona / gainesville | - | invalid codes, hard API errors |

Only Atlanta was correct. The statewide default is what nearly every venue keyword falls back to, so **most venue rankings were measured from Kansas**, and the invalid codes are why those keywords kept returning null - which is what generated the null runs that fed the false `lost_ranking` alerts. Corrected against `/v3/serp/google/locations/US`; `Invalid Field` errors went to zero.

**This invalidates the "6 real drops" above.** Only ONE prior sweep exists (2026-07-21), so the Jul 21 column is the only DataForSEO-derived data in `rankings.json`; everything before it came from Perplexity `rank_checker`. Those 6 keywords therefore compare Perplexity measurements (Jul 13 and earlier) against a Kansas/California DataForSEO reading (Jul 21). That is a **measurement-source change, not ranking movement** - which is why all six moved on the same sweep and why COS and AE dipped together.

**Net: zero of the 16 alerts are established ranking losses.** 10 were the detector bug, 6 are a source artifact. Do not act on any of them. Do not revert the homepage hero on this evidence.

**6. `retry_errors.py` had a hardcoded filename - FIXED**
Hardcoded to `sweep-2026-07-21.json`, so running it after a newer sweep silently repaired and rewrote the OLD file while printing "Saved". Worse, it re-fetches with the *current* location codes, so it mixed correctly-located rows into a file whose other rows were measured from Kansas. Now takes a path argument and defaults to the newest sweep.

**Manager agent:** fired 14:25 and failed - `~/.local/bin/claude: No such file or directory` (Homebrew install on the iMac). `run-manager.sh` now resolves the binary via `command -v`. **Confirmed working: ran successfully at 16:25.** It also ran at 14:25 and 16:25, so **the plist's every-2-hours is what is actually live** and CLAUDE.md's "daily 7:03am" is stale documentation. Open question is whether every 2h is wanted - that is 12 full Claude Code invocations a day. Also fixed the `Write(...)` vs `Edit(...)` permission rules it warned about in both settings files.

**5. DataForSEO location codes were all wrong - FIXED (biggest finding of the day)**
- **Every** code in `sweep.py` except Atlanta pointed elsewhere: jacksonville -> **Los Gatos CA**, st augustine -> **San Leandro CA**, orlando -> Tampa FL, tampa -> **Dubuque IA**, ponte vedra -> Forsyth GA, palm coast -> Cobb GA, and the statewide default (used by most venue keywords) -> **Kansas**. Fernandina/Daytona/Gainesville were invalid codes that hard-errored.
- The stored JSON *labelled* rows `"Florida,United States"` while sending code 21149 (Kansas), so bad data looked correct on inspection.
- Corrected against `/v3/serp/google/locations/US` and re-swept. Invalid-code errors went **2+ -> 0**.
- `retry_errors.py` had the sweep filename **hardcoded** to `sweep-2026-07-21.json`, so it silently repaired the wrong file while reporting success, and re-fetched with current codes - mixing correctly-located rows into a wrong-located file. Now takes a path argument, defaults to newest.

**This invalidates the "6 real drops" above.** Jul 21 was the **only** DataForSEO column in `rankings.json`; everything earlier came from Perplexity `rank_checker`. Those 6 compared Perplexity numbers against a Kansas measurement - a source + location change, not ranking movement. **None of the 16 alerts were established losses.**

**First trustworthy sweep (2026-07-26, correct Florida locations), 72/101 keywords usable:**

| | measured | top 3 | top 10 | pos 11-20 | not ranking |
|---|---|---|---|---|---|
| COS | 71 | 21 | 39 | 7 | 22 |
| AE | 69 | 8 | 18 | 5 | 34 |

The 6 formerly-"dropped" keywords at correct location: jacksonville wedding dj **#7**, jacksonville fl wedding dj **#11**, gainesville **#7**, wedding dj with live saxophone **#1**, AE budget wedding dj jacksonville **#4**, AE lightner museum **#8**.

**Do not read these as a trend.** New baseline on a new instrument; DataForSEO and Perplexity disagree systematically (consistent with the known ~36% agreement rate). **Trend requires the next correct-location sweep (Sun Aug 2).** Actionable now: `jacksonville fl wedding dj` at **#11 is genuinely off page 1**; `wedding dj with live saxophone` at **#1** is a win, not the loss it was reported as.

29 keywords still fail with transient `Internal SE Server Error` (mostly statewide-default venue keywords). `merge_sweep.py` correctly **skips** errored rows rather than writing null, so no false "not ranking" entries were created. Backup: `rankings.json.bak-pre-merge-2026-07-26`.

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

### Session Notes (Aug 3, 2026) - Re-baseline read on the corrected instrument

First honest week-over-week ranking read since the DataForSEO location codes were fixed on
Jul 27. Two location-verified sweeps now exist: **Jul 27 and Aug 2**. Everything earlier is
either wrong-location (Jul 21, Jul 26 - both stamped `location_codes_verified: false`) or a
Perplexity estimate, and must not be compared across.

**Only 34 of 101 keywords produced a valid reading.** The other 67 split into 25 that crossed
the truncated/full SERP boundary (not comparable), 26 that got their first correct-location
reading on Aug 2 (baseline only), and 16 with no valid rank at all.

Within the 34 comparable keywords: **COS 11 up, 2 down, 1 entered, 2 dropped out. AE 5 up,
7 down, 2 entered, 2 dropped out.** Best COS gains: glass factory 23 -> 2, ponte vedra inn and
club 13 -> 3, lodge club 9 -> 4, paradise cove 23 -> 14, `jacksonville wedding dj` 8 -> 6.

**Watch item:** COS fell out of the top 100 for `jacksonville fl wedding dj` (was #6 on
Jul 27). Same instrument, same mode, same location - not one of the three known measurement
bugs. But `/jacksonville-wedding-dj/` is present and moving *up* on all three sibling
variants in the same sweep, so this reads as one-variant volatility. **No page edits. Recheck
on the Aug 9 sweep** - absent twice on full-mode reads is a real loss.

**No verified rank data exists for Epping Forest or Treasury on the Plaza.** Both are listed
in CLAUDE.md as needing insider content "after dropping off rankings." Epping Forest has
errored on every verified sweep; Treasury worked Jul 27 and errored Aug 2. Any claim about
where those two rank is currently unfounded.

Two instrument problems still block trend analysis and will shrink the comparable set every
week until fixed: a ~16% per-sweep error rate (`sweep.py` claims its retry logic holds this
near 1%; Aug 2 missed 15.8%) and the fact that nothing records which SERP mode a rank came
from. Full analysis and reproducible script:
`~/manager-agent/drafts/dfs-rebaseline-2026-08-03/`.

---

### Session Notes (Aug 19, 2026) - First two vendor partner pages, and a partner-name cleanup

Built individual pages for two vendors who send COS referrals, under `/vendors/`.
Committed as `e568460`, **not deployed** - Kaitlyn's page still needs Corey's own
words in two sections.

**The point of these pages is not rankings.** Nobody searches "COS preferred
photographers." The value is the backlink and the unlinked brand mention when the
featured vendor shares their own page, plus referral reciprocity. Per
`venue_pages_low_ceiling`, expecting traffic from them would be a mistake. The page
does nothing at all until the vendor is told it exists - the launch *is* the email.

| Page | State |
|---|---|
| `/vendors/planners/a-lavish-event/` (Kaitlyn Brumfield) | Two sections contain **invented** characterization. Blocked on Corey. Photo permission also unconfirmed. |
| `/vendors/photographers/rob-jill-futrell/` | Fully sourced. Nothing invented. |

The photographer page came out much stronger for one reason: **there was real shared
history on file.** Craig and Ashley's wedding at Sawgrass Country Club - COS on DJ and
live sax, Rob shooting - with five of his photos already on the site. That gallery is
evidence of an actual working relationship rather than a traded favor. The lesson for
the next vendor page is to search our own records for a shared job *before* writing
anything.

Also converted `/vendors/planners/` and `/vendors/photographers/` from "Coming Soon"
stubs to real category pages, both of which were missing LocalBusiness schema.

**Partner-name cleanup, 8 credits across 7 pages.** Rob was credited three different
ways - "Rob Futrell Photography", "Rob & Jill Futrell", and a bare unlinked "Photo by
Rob Futrell" - and none of them was his business name. All now read **"Photos by Rob +
Jill Futrell"**, the rebrand he confirmed via Corey on Aug 19. Since that name already
begins with "Photos by", the redundant lead-in was folded into the link text instead of
being left doubled. The homepage credit had no link at all and now has one, which is a
free gift of the strongest link on the site to a partner.

**Sitemap.** Added the `/vendors/` hub, which had never been listed despite being the
crawl path to every vendor page. Removed the four still-empty category stubs
(bar-service, catering, guest-experiences, videographers) that something had added on
Aug 10 - with 53 pages still uncrawled, empty pages should not be competing for crawl
budget. Note this stops *submitting* them, not indexing them: the hub still links to
all four, so a `noindex` would be needed to actually hold them back.

**Gotcha for next time:** `.gitignore` had `*.bak`, which does not match this
workspace's dated backup convention (`index.html.bak-futrell-20260819`). Eight backups
were sitting untracked and would have been committed. Now covered by `*.bak-*`.
