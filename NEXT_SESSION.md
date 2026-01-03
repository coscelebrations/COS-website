# COS Celebrations & AE Entertainment - Next Session Prompt

**Copy/paste this to start your next Claude Code session:**

---

Continue work on COS Celebrations and AE Entertainment websites.

**Context files:**
- `/Users/coreypeterson/cos-website/SEO.md` - SEO strategy and history
- `/Users/coreypeterson/ae-entertainment/COMPETITIVE-ANALYSIS-2025.md` - National DJ competitor research

**Quick status (Jan 3, 2026):**

- Live Musicians page LIVE at /services/live-musicians/
- Trust strip now shows: "The Knot & WeddingWire Award Winner 2022–2025"
- Logo optimized with responsive srcset (1x/2x)
- 61 pages submitted to Google Indexing API
- PageSpeed: FCP 2.6s, LCP 3.2s (hero image is CSS background - needs refactor)

**Priority tasks:**

1. **Fix LCP (3.2s)** — Hero uses CSS `background-image`, browser discovers it late. Refactor to `<img>` with srcset and fetchpriority="high"
2. **Add award badge images** — I'll find The Knot & WeddingWire badges in my email
3. **Enhance Live Musicians page** — needs photos, video, testimonials
4. **Check Google Search Console** — was 29 indexed, 36 pending

**Performance issue identified:**
- Hero image loaded via CSS background (line 466 in index.html)
- 33KB inline CSS blocks render before image is discovered
- Fix: Change hero section to use `<img>` tag instead

**Competitive insights (from Chicago DJ analysis):**
- Top rankers use exact-match keywords in title/H1
- Named team members with photos/bios
- The Knot badge displayed prominently
- Schema markup (Organization, BreadcrumbList)

**Useful commands:**
```bash
# Check indexing status
cd /Users/coreypeterson/cos-website && npm run seo:index:check

# Start local server
python3 -m http.server 3000
```

**Live sites:**
- COS: https://coscelebrations.com
- AE: https://ae-djs.com

---
