# COS Celebrations & AE Entertainment - Next Session Prompt

**Copy/paste this to start your next Claude Code session:**

---

Continue work on COS Celebrations and AE Entertainment websites.

**Context file:** `/Users/coreypeterson/cos-website/SEO.md` - Read this first for full context.

**Quick status (Dec 30, 2025):**

- River House venue pages LIVE on both COS and AE
- 1,454 photos from Jake & Mallory wedding organized in ~/Photos/weddings/river-house/
- Photo sources: BowTie Photo + Films, Rob Futrell Photography
- Security headers added to both sites (netlify.toml)
- Background video implementation guide added to SEO.md
- PageSpeed scores: 90/90/100/100 on both sites

**Photo library ready for future pages:**
- ~/Photos/weddings/river-house/jake-mallory-2025-03-01/ (1,454 full-res)
- Web-optimized versions in /images/river-house-wedding-st-augustine/jake-mallory/

**Priority tasks:**

1. **Orlando Venue Cluster** - Cypress Grove, Alfond Inn, Lake Nona Wave Hotel
2. **AE Google Business Profile** - Website still points to affordable-entertainment.com (needs manual update)
3. **City Page Differentiation** - Amelia Island, Tampa, Ponte Vedra need unique content
4. **Team Page** - Need headshots/bios before going live

**Venue pages completed:**
- Treasury on the Plaza (St. Augustine)
- Lightner Museum (St. Augustine)
- The White Room (St. Augustine)
- River House (St. Augustine) - NEW
- Casa Marina (Jacksonville)
- TPC Sawgrass (Ponte Vedra)
- Timuquana Country Club (Jacksonville)
- Epping Forest Yacht Club (Jacksonville)
- Bella Collina (Orlando)
- Paradise Cove (Orlando)

**Useful commands:**
```bash
# Start local server
cd /Users/coreypeterson/cos-website && python3 -m http.server 3000

# Deploy (auto-deploys on git push)
cd /Users/coreypeterson/cos-website && git add . && git commit -m "message" && git push

# Prep photo for web (resize + webp)
sips -Z 1600 input.jpg --out /tmp/resized.jpg && cwebp -q 85 /tmp/resized.jpg -o output.webp
```

**Live sites:**
- COS: https://coscelebrations.com
- AE: https://ae-djs.com

---
