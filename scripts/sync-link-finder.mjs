#!/usr/bin/env node
/* ===========================================================================
 * sync-link-finder.mjs
 * ===========================================================================
 * Reads the LIVE sitemaps for both sites and adds any venue or city page the
 * Link Finder does not know about yet into group-reply/config.js.
 *
 *   npm run sync:group-reply          show what is missing, change nothing
 *   npm run sync:group-reply -- --fix add them to config.js
 *
 * WHY THIS EXISTS: the venue list is a plain list in config.js. When somebody
 * ships a new venue page it does NOT appear in the tool by itself. This closes
 * that gap without anyone having to remember.
 *
 * It is deliberately careful:
 *   - It only ADDS. It never removes or reorders anything you wrote by hand,
 *     so aliases and the casa-marina per-brand override survive untouched.
 *   - Every new page is fetched on BOTH sites first. A venue only gets an AE
 *     button if the AE page really returns 200 - the COS half of a pair often
 *     ships days before the AE half, and a button to a 404 is worse than no
 *     button.
 *   - Anything already in config is left alone, even if the sitemap disagrees.
 *   - After --fix it prints the exact commands to verify.
 *
 * Run it after adding venue pages, or on a schedule. It is free and read-only
 * apart from the one file it edits.
 * =========================================================================== */

import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const require = createRequire(import.meta.url);
const here = path.dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = path.join(here, '..', 'group-reply', 'config.js');
const config = require(CONFIG_PATH);

const FIX = process.argv.includes('--fix');

/* The suffix every venue and city page shares. If this ever changes, this
 * script and config.venuePathTemplate both need updating together. */
const SUFFIX = '-wedding-dj/';

async function slugsFromSitemap(domain) {
  const res = await fetch(domain + '/sitemap.xml');
  if (!res.ok) throw new Error(`${domain}/sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  const re = new RegExp(`>${domain.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}/([a-z0-9-]+)${SUFFIX}<`, 'g');
  const out = new Set();
  let m;
  while ((m = re.exec(xml)) !== null) out.add(m[1]);
  return out;
}

async function status(url) {
  try {
    let r = await fetch(url, { method: 'HEAD', redirect: 'manual' });
    if (r.status >= 400) r = await fetch(url, { method: 'GET', redirect: 'manual' });
    return r.status;
  } catch (_) {
    return 0;
  }
}

/* A slug is a city if config already calls it one. Cities change almost never
 * and there are only a handful, so anything new is assumed to be a venue - the
 * far more common case by two orders of magnitude. If a genuinely new CITY
 * page ships, move it from venues to cities by hand and add its aliases. */
function isKnownCity(slug) {
  return config.cities.some((c) => c.slug === slug);
}

function knownSlugs() {
  const s = new Set();
  for (const v of config.venues) {
    s.add(v.slug);
    if (v.slugByBrand) for (const alt of Object.values(v.slugByBrand)) s.add(alt);
  }
  for (const c of config.cities) s.add(c.slug);

  /* Not every URL ending in -wedding-dj/ is a venue. AE's pricing page is
   * /cheap-wedding-dj/, which matches the pattern perfectly and would be
   * proposed as a venue called "Cheap" on every run. Anything already listed
   * in extraPages is, by definition, not a venue. */
  for (const p of config.extraPages || []) {
    const m = p.path.match(new RegExp(`^/([a-z0-9-]+)${SUFFIX}$`));
    if (m) s.add(m[1]);
  }
  return s;
}

async function main() {
  const cos = config.brands.cos.domain;
  const ae = config.brands.ae.domain;

  console.log('Reading live sitemaps...');
  const [cosSlugs, aeSlugs] = await Promise.all([slugsFromSitemap(cos), slugsFromSitemap(ae)]);
  console.log(`  ${cos}: ${cosSlugs.size} venue/city pages`);
  console.log(`  ${ae}: ${aeSlugs.size} venue/city pages`);

  const known = knownSlugs();
  const missing = [...new Set([...cosSlugs, ...aeSlugs])]
    .filter((s) => !known.has(s) && !isKnownCity(s))
    .sort();

  if (!missing.length) {
    console.log('\nThe Link Finder is up to date. Nothing to add.\n');
    return;
  }

  console.log(`\n${missing.length} page(s) not in the Link Finder yet:\n`);

  const additions = [];
  for (const slug of missing) {
    const [cosStatus, aeStatus] = await Promise.all([
      status(`${cos}/${slug}${SUFFIX}`),
      status(`${ae}/${slug}${SUFFIX}`),
    ]);
    const onCos = cosStatus === 200;
    const onAe = aeStatus === 200;

    let note = '';
    if (onCos && onAe) note = 'both sites';
    else if (onCos) note = `COS only (AE returned ${aeStatus} - the AE half may not have shipped yet)`;
    else if (onAe) note = `AE only (COS returned ${cosStatus})`;
    else note = `NEITHER site serves it (COS ${cosStatus}, AE ${aeStatus}) - skipping`;

    console.log(`  ${slug.padEnd(38)} ${note}`);
    if (onCos || onAe) additions.push({ slug, onCos, onAe });
  }

  if (!additions.length) {
    console.log('\nNothing safe to add.\n');
    return;
  }

  if (!FIX) {
    console.log(`\nRun with --fix to add ${additions.length} of them:`);
    console.log('  npm run sync:group-reply -- --fix\n');
    return;
  }

  /* Insert each new venue in alphabetical position rather than appending, so
   * the list stays scannable by hand. Existing lines are never rewritten -
   * aliases, comments and the casa-marina per-brand override are untouched. */
  let src = fs.readFileSync(CONFIG_PATH, 'utf8');
  const lines = src.split('\n');

  const firstVenue = lines.findIndex((l) => /^\s*\{ slug: '/.test(l) && lines.slice(0, lines.indexOf(l)).some((x) => x.includes('venuePathTemplate')));
  const arrayEnd = lines.findIndex((l, i) => i > firstVenue && l === '  ],');
  if (firstVenue === -1 || arrayEnd === -1) {
    console.error('\nCould not find the venues array in config.js.');
    console.error('Add these by hand instead:');
    additions.forEach((a) => console.error(`  { slug: '${a.slug}' },`));
    process.exitCode = 1;
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const slugOf = (line) => (line.match(/\{ slug: '([a-z0-9-]+)'/) || [])[1];

  for (const a of additions) {
    const line = a.onCos && a.onAe
      ? `    { slug: '${a.slug}' },`
      : `    { slug: '${a.slug}', onlyOn: '${a.onCos ? 'cos' : 'ae'}' },   // added ${today} by sync; only live on ${(a.onCos ? 'cos' : 'ae').toUpperCase()}`;

    let at = -1;
    for (let i = firstVenue; i < lines.length; i++) {
      if (lines[i] === '  ],') { at = i; break; }
      const s = slugOf(lines[i]);
      if (s && s > a.slug) { at = i; break; }
    }
    lines.splice(at, 0, line);
  }

  src = lines.join('\n');
  fs.writeFileSync(CONFIG_PATH, src);

  console.log(`\nAdded ${additions.length} page(s) to config.js.`);
  console.log('\nNow verify, then commit:');
  console.log('  npm run test:group-reply');
  console.log('  npm run check:group-reply');
  console.log('  git add group-reply/config.js && git commit -m "Link Finder: add new venue pages"\n');
}

main().catch((err) => {
  console.error('\nSync failed:', err.message);
  console.error('Nothing was changed.\n');
  process.exitCode = 1;
});
