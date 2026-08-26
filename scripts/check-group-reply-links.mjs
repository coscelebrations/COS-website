#!/usr/bin/env node
/* ===========================================================================
 * check-group-reply-links.mjs
 * ===========================================================================
 * Expands every link target in the Group Reply Assistant config into a real
 * URL and checks that it actually returns 200. Costs nothing, uses no API
 * credits, and is the single highest-value test in this build.
 *
 * Run it:
 *   npm run check:group-reply
 *
 * Run it AFTER:
 *   - editing config.js (adding a venue, a city, a vendor category)
 *   - anyone updates the /vendors/ pages
 *   - any site-wide URL change
 *
 * What it catches:
 *   - a typo in any of the 73 slugs
 *   - the casa-marina / casa-marina-hotel per-brand split being wrong
 *   - a vendor category page that does not exist yet (the makeup 404 case)
 *   - a venue that got renamed or 301'd out from under us
 *
 * A 301 is reported as a FAILURE, not a pass. A redirect means the config is
 * pointing at a stale URL, and a stale URL in a public Facebook comment is
 * exactly what this script exists to prevent.
 * =========================================================================== */

import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const here = path.dirname(fileURLToPath(import.meta.url));
const config = require(path.join(here, '..', 'netlify', 'functions', 'group-reply', 'config.js'));

const CONCURRENCY = 8;
const TIMEOUT_MS = 15000;

/* ---------- build the full list of URLs the tool could ever emit ---------- */

function slugForBrand(entry, brand) {
  return (entry.slugByBrand && entry.slugByBrand[brand]) || entry.slug;
}

const targets = [];

for (const brandKey of Object.keys(config.brands)) {
  const brand = config.brands[brandKey];

  for (const v of config.venues) {
    targets.push({
      kind: 'venue',
      brand: brandKey,
      label: slugForBrand(v, brandKey),
      url: brand.domain + config.venuePathTemplate.replace('%SLUG%', slugForBrand(v, brandKey)),
    });
  }

  for (const c of config.cities) {
    targets.push({
      kind: 'city',
      brand: brandKey,
      label: c.slug,
      url: brand.domain + config.cityPathTemplate.replace('%SLUG%', c.slug),
    });
  }

  for (const s of config.services) {
    const p = s.path[brandKey];
    if (!p) continue; // service not offered on this brand - correct, not an error
    targets.push({ kind: 'service', brand: brandKey, label: s.id, url: brand.domain + p });
  }

  targets.push({ kind: 'home', brand: brandKey, label: 'homepage', url: brand.domain + brand.home });
}

/* Vendor category pages - COS only, AE has no vendor pages */
const vendorBrand = config.brands[config.vendorBrand];
for (const [key, v] of Object.entries(config.intents.vendor)) {
  targets.push({ kind: 'vendor', brand: config.vendorBrand, label: key, url: vendorBrand.domain + v.page });
}

/* AE's budget page */
if (config.cheapPage) {
  targets.push({
    kind: 'cheap',
    brand: config.cheapPage.brand,
    label: 'cheap-wedding-dj',
    url: config.brands[config.cheapPage.brand].domain + config.cheapPage.path,
  });
}

/* ---------- check them ---------- */

async function check(t) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    // redirect:'manual' so a 301 surfaces as a failure instead of silently
    // following through to a 200 and hiding a stale config entry.
    let res = await fetch(t.url, { method: 'HEAD', redirect: 'manual', signal: ctrl.signal });
    // Some hosts reject HEAD; retry once with GET before believing a 4xx/5xx.
    if (res.status >= 400) {
      res = await fetch(t.url, { method: 'GET', redirect: 'manual', signal: ctrl.signal });
    }
    return { ...t, status: res.status, location: res.headers.get('location') || '' };
  } catch (err) {
    return { ...t, status: 0, error: err.name === 'AbortError' ? 'timeout' : err.message };
  } finally {
    clearTimeout(timer);
  }
}

async function run() {
  console.log(`Checking ${targets.length} URLs from config.js ...\n`);

  const results = [];
  const queue = [...targets];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const t = queue.shift();
      results.push(await check(t));
    }
  });
  await Promise.all(workers);

  const failures = results.filter((r) => r.status !== 200);
  const byKind = {};
  for (const r of results) {
    byKind[r.kind] = byKind[r.kind] || { ok: 0, bad: 0 };
    r.status === 200 ? byKind[r.kind].ok++ : byKind[r.kind].bad++;
  }

  for (const [kind, n] of Object.entries(byKind)) {
    const flag = n.bad ? 'FAIL' : ' ok ';
    console.log(`[${flag}] ${kind.padEnd(8)} ${String(n.ok).padStart(4)} ok, ${n.bad} bad`);
  }

  if (failures.length) {
    console.log(`\n${failures.length} BROKEN LINK TARGET(S):\n`);
    for (const f of failures.sort((a, b) => a.url.localeCompare(b.url))) {
      const detail = f.error ? f.error : `HTTP ${f.status}${f.location ? ` -> ${f.location}` : ''}`;
      console.log(`  ${f.kind}/${f.brand}  ${f.label}`);
      console.log(`    ${f.url}`);
      console.log(`    ${detail}\n`);
    }
    console.log('Fix config.js before deploying. A dead link in a public');
    console.log('Facebook comment is worse than not replying at all.\n');
    process.exitCode = 1;
    return;
  }

  console.log(`\nAll ${results.length} link targets return 200.\n`);
}

run().catch((err) => {
  console.error('Checker itself failed:', err);
  process.exitCode = 1;
});
