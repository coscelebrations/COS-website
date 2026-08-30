#!/usr/bin/env node
/* ===========================================================================
 * test-link-finder.mjs
 * ===========================================================================
 * Free, offline, no API key. Checks that the page list builds correctly and
 * that searching finds what a person would expect to find.
 *
 * Run:  npm run test:group-reply
 *
 * Pair it with `npm run check:group-reply`, which confirms every one of those
 * URLs actually returns 200 on the live sites. This file checks the list is
 * RIGHT; that one checks the links are ALIVE.
 * =========================================================================== */

import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
import fs from 'node:fs';

const require = createRequire(import.meta.url);
const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, '..', 'group-reply');

const config = require(path.join(dir, 'config.js'));
const PAGES = require(path.join(dir, 'pages.js'));

let pass = 0;
const failures = [];

function ok(name, cond, detail) {
  if (cond) pass++;
  else failures.push({ name, detail: detail || '' });
}

/* ---------------------------------------------------------------------------
 * the list itself
 * ------------------------------------------------------------------------ */

ok('every venue is listed', PAGES.all.filter((r) => r.group === 'Venues').length === config.venues.length,
   `${PAGES.all.filter((r) => r.group === 'Venues').length} rows vs ${config.venues.length} venues`);

ok('every city is listed', PAGES.all.filter((r) => r.group === 'Cities').length === config.cities.length);

ok('every vendor directory is listed',
   PAGES.all.filter((r) => r.group === 'Vendor directories').length === Object.keys(config.intents.vendor).length);

ok('no row is missing both links', PAGES.all.every((r) => r.cos || r.ae),
   JSON.stringify(PAGES.all.filter((r) => !r.cos && !r.ae).map((r) => r.label)));

ok('no duplicate labels within a group', (() => {
  const seen = new Set();
  for (const r of PAGES.all) {
    const k = r.group + '|' + r.label;
    if (seen.has(k)) return false;
    seen.add(k);
  }
  return true;
})());

/* ---------------------------------------------------------------------------
 * links are clean and well formed
 * ------------------------------------------------------------------------ */

const allUrls = PAGES.all.flatMap((r) => [r.cos, r.ae]).filter(Boolean);

ok('tracking is off, so no link carries utm params',
   config.utm.enabled === false && allUrls.every((u) => !u.includes('utm_')),
   allUrls.filter((u) => u.includes('utm_')).slice(0, 3).join(' '));

/* The trailing-slash group is optional so the bare homepage
 * ("https://coscelebrations.com/") passes - it has no path segment. */
const WELL_FORMED = /^https:\/\/[a-z0-9.-]+\/([^\s]*\/)?$/;
ok('every link is https and ends with a slash',
   allUrls.every((u) => WELL_FORMED.test(u)),
   allUrls.filter((u) => !WELL_FORMED.test(u)).slice(0, 3).join(' '));

ok('COS links point at coscelebrations.com',
   PAGES.all.every((r) => !r.cos || r.cos.startsWith('https://coscelebrations.com/')));

ok('AE links point at ae-djs.com',
   PAGES.all.every((r) => !r.ae || r.ae.startsWith('https://ae-djs.com/')));

ok('the dead Crystal Ballroom venue is not listed',
   !PAGES.all.some((r) => /crystal/i.test(r.label)));

/* The one venue whose slug differs per brand. Getting this wrong sends people
 * to a 404 on one of the two sites. */
{
  const row = PAGES.all.find((r) => /casa marina/i.test(r.label));
  ok('casa marina uses the right slug on each brand',
     row && row.cos.includes('casa-marina-hotel-wedding-dj') && row.ae.includes('casa-marina-wedding-dj')
       && !row.ae.includes('casa-marina-hotel'),
     row ? `cos=${row.cos} ae=${row.ae}` : 'row not found');
}

/* AE has no vendor pages at all - a vendor row must never offer an AE button. */
ok('vendor directories have no AE link',
   PAGES.all.filter((r) => r.group === 'Vendor directories').every((r) => r.ae === null));

/* ---------------------------------------------------------------------------
 * search - the things a person would actually type
 * ------------------------------------------------------------------------ */

function finds(query, expectedLabel) {
  const res = PAGES.search(query);
  const hit = res.rows.some((r) => r.label.toLowerCase() === expectedLabel.toLowerCase());
  ok(`search "${query}" finds ${expectedLabel}`, hit,
     `got: ${res.rows.slice(0, 4).map((r) => r.label).join(', ')}`);
}

finds('sax', 'Live Saxophone');
finds('photo', 'Photographers');
finds('photo booth', 'Photo Booth');
finds('treasury', 'Treasury on the Plaza');
finds('ritz', 'Ritz Carlton Amelia Island');
finds('tpc', 'Tpc Sawgrass');
finds('jax', 'Jacksonville');
finds('staug', 'St Augustine');
finds('st. augustine', 'St Augustine');
finds('price', 'Pricing');
finds('cheap', 'Cheap Wedding DJ');
finds('planner', 'Planners');
finds('contact', 'Contact');
finds('white room', 'The White Room');
finds('lodge', 'Lodge Club Ponte Vedra');
finds('epping', 'Epping Forest Yacht Club');

/* Ranking: the page you named must come before one that only matches via an
 * alias. "fern" used to put Amelia Island (alias "fernandina") above Fern Oak
 * Estate. Within a group, a label match beats an alias match. */
{
  const rows = PAGES.search('fern').rows.filter((r) => r.group === 'Venues');
  ok('search ranks a label match above an alias-only match',
     rows.length > 0 && rows[0].label === 'Fern Oak Estate',
     `first venue hit was ${rows[0] ? rows[0].label : 'none'}`);
}

{
  const rows = PAGES.search('casa').rows;
  ok('ranked results keep alphabetical order among equal matches',
     rows[0].label === 'Casa Feliz',
     `first hit was ${rows[0].label}`);
}

ok('blank search returns everything', PAGES.search('').rows.length === PAGES.all.length);

ok('gibberish returns nothing rather than everything', PAGES.search('zzzqqq').rows.length === 0);

/* "dj sax" is exactly what Corey said he would type. No single page contains
 * both words, so a strict AND search shows an empty screen, which reads as
 * broken. It must fall back to matching either word and say so. */
{
  const res = PAGES.search('dj sax');
  ok('"dj sax" falls back to loose matching instead of showing nothing',
     res.rows.length > 0 && res.loose === true,
     `rows=${res.rows.length} loose=${res.loose}`);
}

/* A multi-word query that DOES match one page must stay strict, not silently
 * widen to every page containing "ponte" or "vedra". */
{
  const res = PAGES.search('ponte vedra');
  ok('"ponte vedra" stays strict when it matches', res.loose === false && res.rows.length > 0,
     `rows=${res.rows.length} loose=${res.loose}`);
}

/* ---------------------------------------------------------------------------
 * the browser path - no module, no require, no URL global
 * ---------------------------------------------------------------------------
 * The page loads these as plain <script> tags. An earlier version depended on
 * the URL constructor inside a broad try/catch and silently degraded every
 * link to a homepage when it was missing. This runs the exact browser branch.
 * ------------------------------------------------------------------------ */
{
  const sandbox = { self: null, console };
  sandbox.self = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(dir, 'config.js'), 'utf8'), sandbox);
  vm.runInContext(fs.readFileSync(path.join(dir, 'pages.js'), 'utf8'), sandbox);

  ok('config.js loads as a plain script', !!sandbox.GR_CONFIG);
  ok('pages.js loads as a plain script', !!sandbox.LF_PAGES);
  ok('the browser build has the same number of rows',
     sandbox.LF_PAGES && sandbox.LF_PAGES.all.length === PAGES.all.length);
  ok('the browser build produces real links, not homepage fallbacks',
     sandbox.LF_PAGES &&
     sandbox.LF_PAGES.all.filter((r) => r.group === 'Venues').every((r) => /-wedding-dj\/$/.test(r.cos)));
}

/* ---------------------------------------------------------------------------
 * report
 * ------------------------------------------------------------------------ */

const total = pass + failures.length;
if (failures.length) {
  console.log(`\n${failures.length} of ${total} link finder tests FAILED:\n`);
  for (const f of failures) {
    console.log(`  ${f.name}`);
    if (f.detail) console.log(`    ${f.detail}`);
  }
  console.log('');
  process.exitCode = 1;
} else {
  console.log(`\nAll ${total} link finder tests passed. ${PAGES.all.length} pages listed.\n`);
}
