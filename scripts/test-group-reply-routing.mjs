#!/usr/bin/env node
/* ===========================================================================
 * test-group-reply-routing.mjs
 * ===========================================================================
 * Routing never calls the Anthropic API, so this whole suite is free and needs
 * no key. It is the cheapest place to catch the bugs that actually matter:
 * wrong brand, wrong link, wrong intent.
 *
 * Run:  npm run test:group-reply
 * =========================================================================== */

import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const here = path.dirname(fileURLToPath(import.meta.url));
const { route, lookup, applyExtractedVenue } = require(
  path.join(here, '..', 'group-reply', 'routing.js')
);

let pass = 0;
const failures = [];

function t(name, input, expected) {
  let r = route(input);
  if (input._extracted) r = applyExtractedVenue(r, input._extracted);

  const problems = [];
  for (const [key, want] of Object.entries(expected)) {
    let got;
    if (key === 'venue' || key === 'city' || key === 'vendorCategory') got = r.matched[key];
    else if (key === 'urlContains') got = r.url;
    else got = r[key];

    const ok = key === 'urlContains'
      ? typeof got === 'string' && got.includes(want)
      : got === want;

    if (!ok) problems.push(`  ${key}: expected ${JSON.stringify(want)}, got ${JSON.stringify(got)}`);
  }

  if (problems.length) failures.push({ name, problems, url: r.url, reason: r.brandReason });
  else pass++;
}

/* ---------------------------------------------------------------------------
 * BRAND ROUTING
 * ------------------------------------------------------------------------ */

t('bare DJ ask defaults to AE and says so',
  { postText: 'Getting married next October in St. Augustine and starting to look for a DJ. Any recommendations?' },
  { brand: 'ae', intent: 'entertainment', city: 'st-augustine', pageKind: 'city' });

t('explicit budget language forces AE + cheap page',
  { postText: 'Looking for an affordable DJ for a small backyard wedding, about 50 people. Budget is tight!' },
  { brand: 'ae', brandRule: 'forceAe', pageKind: 'cheap', urlContains: '/cheap-wedding-dj/' });

t('saxophone forces COS',
  { postText: 'Has anyone done a live saxophone player with their DJ?' },
  { brand: 'cos', brandRule: 'forceCos' });

t('cold sparks force COS',
  { postText: 'Looking for someone who does cold sparks for the first dance' },
  { brand: 'cos', brandRule: 'forceCos' });

t('THE PRECEDENCE CASE: affordable + luxury venue goes COS, not AE',
  { postText: 'Looking for something affordable for our Ritz-Carlton Amelia Island reception' },
  { brand: 'cos', venue: 'ritz-carlton-amelia-island', pageKind: 'venue' });

t('small guest count routes AE',
  { postText: 'Need a DJ for our wedding, about 40 guests' },
  { brand: 'ae', brandRule: 'guestCount' });

t('large guest count does not force AE',
  { postText: 'Need a DJ for our wedding, about 200 guests at a country club' },
  { brand: 'cos' });

t('backyard routes AE',
  { postText: 'Need a DJ for a backyard wedding' },
  { brand: 'ae', brandRule: 'forceAe' });

t('manual override wins over everything',
  { postText: 'Looking for an affordable DJ, budget is tight', brandOverride: 'cos' },
  { brand: 'cos', brandRule: 'override' });

/* ---------------------------------------------------------------------------
 * VENUE + CITY DETECTION
 * ------------------------------------------------------------------------ */

t('venue beats city when both present',
  { postText: 'Getting married at Treasury on the Plaza in St. Augustine, need a DJ' },
  { venue: 'treasury-on-the-plaza', city: 'st-augustine', pageKind: 'venue' });

t('venue beats service even when they ask about sax',
  { postText: 'Anyone done live saxophone at Ponte Vedra Inn & Club?' },
  { brand: 'cos', venue: 'ponte-vedra-inn-club', pageKind: 'venue' });

t('casa marina resolves to the COS slug on COS',
  { postText: 'Wedding at Casa Marina Hotel, need live sax', _extracted: null },
  { brand: 'cos', venue: 'casa-marina-hotel', urlContains: 'coscelebrations.com/casa-marina-hotel-wedding-dj/' });

t('casa marina resolves to the AE slug on AE',
  { postText: 'Wedding at Casa Marina Hotel on a tight budget, need a DJ' },
  { brand: 'ae', venue: 'casa-marina-hotel', urlContains: 'ae-djs.com/casa-marina-wedding-dj/' });

t('nickname "TPC" finds tpc-sawgrass',
  { postText: 'Getting married at TPC next year, looking for a DJ' },
  { venue: 'tpc-sawgrass' });

t('city nickname "Jax" works',
  { postText: 'Need a DJ in Jax' },
  { city: 'jacksonville' });

t('"St. Aug" works',
  { postText: 'Looking for a DJ, wedding is in St. Aug' },
  { city: 'st-augustine' });

t('model-extracted venue fills in when direct scan misses',
  { postText: 'Getting married at the Ritz in Amelia next spring, need a DJ', _extracted: 'Ritz Carlton Amelia Island' },
  { venue: 'ritz-carlton-amelia-island', pageKind: 'venue' });

t('nonsense extraction does not force a bad venue link',
  { postText: 'Need a DJ in Orlando', _extracted: 'Some Place That Does Not Exist' },
  { venue: null, city: 'orlando', pageKind: 'city' });

t('Lodge & Club does not collapse into Ponte Vedra Inn & Club',
  { postText: 'Wedding at the Lodge and Club, need a DJ' },
  { venue: 'lodge-club-ponte-vedra' });

/* ---------------------------------------------------------------------------
 * INTENT
 * ------------------------------------------------------------------------ */

t('photographer ask is a vendor referral, links COS',
  { postText: 'Does anyone have a photographer they loved? Ours just cancelled.' },
  { intent: 'vendor', vendorCategory: 'photographer', brand: 'cos', urlContains: '/vendors/photographers/' });

t('PHOTO BOOTH is entertainment, NOT a photographer referral',
  { postText: 'Anyone know who does a good photo booth?' },
  { intent: 'entertainment' });

t('day-of coordinator ask routes to planners',
  { postText: 'Do I really need a day-of coordinator? Trying to decide if it is worth it.' },
  { intent: 'vendor', vendorCategory: 'planner', urlContains: '/vendors/planners/' });

t('venue ask with no city uses areas-we-serve',
  { postText: 'Any venue recommendations for a fall wedding?' },
  { intent: 'vendor', vendorCategory: 'venue', urlContains: '/areas-we-serve/' });

t('venue ask WITH a city prefers that city page',
  { postText: 'Any venue recommendations in Jacksonville?' },
  { intent: 'vendor', pageKind: 'city', urlContains: '/jacksonville-wedding-dj/' });

t('bartender ask routes to bar-service',
  { postText: 'Looking for a mobile bar for our reception' },
  { intent: 'vendor', vendorCategory: 'bar', urlContains: '/vendors/bar-service/' });

t('DJ + photographer is "both"',
  { postText: 'Still need a DJ and a photographer, any recs?' },
  { intent: 'both' });

t('a post asking for nothing returns intent neither',
  { postText: 'Just booked our venue!! So excited' },
  { intent: 'neither' });

/* ---------------------------------------------------------------------------
 * UTM + GROUP SLUG
 * ------------------------------------------------------------------------ */

t('blank group name becomes unknown-group',
  { postText: 'Need a DJ in Tampa', groupName: '' },
  { groupSlug: 'unknown-group', urlContains: 'utm_campaign=unknown-group' });

t('ampersand becomes "and"',
  { postText: 'Need a DJ in Tampa', groupName: 'Jax Brides & Grooms!!' },
  { groupSlug: 'jax-brides-and-grooms' });

t('emoji-only group name falls back',
  { postText: 'Need a DJ in Tampa', groupName: '💍💍💍' },
  { groupSlug: 'unknown-group' });

t('accents degrade to ascii',
  { postText: 'Need a DJ in Tampa', groupName: 'Bodas Jacksonvílle' },
  { groupSlug: 'bodas-jacksonville' });

t('utm params are present and in spec order',
  { postText: 'Need a DJ in Tampa', groupName: 'Tampa Weddings' },
  { urlContains: '?utm_source=facebook&utm_medium=group&utm_campaign=tampa-weddings' });

/* ---------------------------------------------------------------------------
 * NO-PROMO + AMBIGUITY
 * ------------------------------------------------------------------------ */

t('checkbox sets noPromo manually',
  { postText: 'Need a DJ in Tampa', noPromo: true },
  { noPromo: true, noPromoSource: 'manual' });

t('vague post is flagged ambiguous',
  { postText: 'Any DJ recommendations?' },
  { ambiguous: true });

t('post with a city is NOT ambiguous',
  { postText: 'Any DJ recommendations in Orlando?' },
  { ambiguous: false });

t('post with budget signal is NOT ambiguous',
  { postText: 'Any affordable DJ recommendations?' },
  { ambiguous: false });

/* ---------------------------------------------------------------------------
 * JUNK INPUT
 * ------------------------------------------------------------------------ */

t('zero-width characters do not break matching',
  { postText: 'Need a​DJ in​Orlando' },
  { city: 'orlando' });

t('a wall of pasted thread junk still finds the signal',
  { postText: 'See more · 3d  Like Reply\n\nLooking for a DJ at The White Room in St Augustine\n\n12 comments' },
  { venue: 'the-white-room' });

/* ---------------------------------------------------------------------------
 * LOOKUP MODE - the short-phrase path, which is how the tool is actually used
 * ------------------------------------------------------------------------ */

function L(name, query, expected, groupName) {
  const r = lookup({ query, groupName: groupName || '' });
  const problems = [];
  for (const [key, want] of Object.entries(expected)) {
    const got = key === 'urlContains' ? r.url : r[key];
    const ok = key === 'urlContains' ? (typeof got === 'string' && got.includes(want)) : got === want;
    if (!ok) problems.push(`  ${key}: expected ${JSON.stringify(want)}, got ${JSON.stringify(got)}`);
  }
  if (problems.length) failures.push({ name: 'lookup: ' + name, problems, url: r.url, reason: r.note });
  else pass++;
}

L('"photo jax" finds photographers', 'photo jax',
  { kind: 'vendor', urlContains: '/vendors/photographers/' });

L('"photo" alone works with no city', 'photo',
  { kind: 'vendor', urlContains: '/vendors/photographers/' });

L('"vid" shorthand finds videographers', 'vid',
  { kind: 'vendor', urlContains: '/vendors/videographers/' });

L('"coord" shorthand finds planners', 'coord',
  { kind: 'vendor', urlContains: '/vendors/planners/' });

L('"photo booth" is entertainment, NOT photographers', 'photo booth',
  { kind: 'service' });

L('"dj treasury" finds the venue page', 'dj treasury',
  { kind: 'venue', urlContains: '/treasury-on-the-plaza-wedding-dj/' });

L('"dj ritz" routes COS because it is a COS-only venue', 'dj ritz',
  { kind: 'venue', brand: 'cos', urlContains: 'coscelebrations.com/ritz-carlton-amelia-island-wedding-dj/' });

L('"staug dj" finds the city page', 'staug dj',
  { kind: 'city', urlContains: '/st-augustine-wedding-dj/' });

L('"cheap dj" lands on the pricing page', 'cheap dj',
  { kind: 'service', brand: 'ae', urlContains: '/cheap-wedding-dj/' });

L('"venues in orlando" prefers the Orlando page', 'venues in orlando',
  { kind: 'vendor', urlContains: '/orlando-wedding-dj/' });

L('"venues" with no city uses areas-we-serve', 'venues',
  { kind: 'vendor', urlContains: '/areas-we-serve/' });

L('"sax" routes COS', 'sax',
  { brand: 'cos' });

L('gibberish falls back to a homepage and warns', 'xyzzy',
  { kind: 'home' });

L('group name becomes the campaign tag', 'photo', { urlContains: 'utm_campaign=jax-brides' }, 'Jax Brides');

L('no group name records unknown-group', 'photo', { urlContains: 'utm_campaign=unknown-group' });

L('every lookup carries the full utm set', 'dj jax',
  { urlContains: 'utm_source=facebook&utm_medium=group&utm_campaign=' });

/* The alternate-brand link must be the SAME page on the other domain, and it
   must exist - this is what the "use AE instead" button copies. */
{
  const r = lookup({ query: 'dj treasury' });
  const altOk = r.alt && r.alt.url.includes('treasury-on-the-plaza') && r.alt.url !== r.url;
  if (altOk) pass++;
  else failures.push({ name: 'lookup: alt brand link is the same page on the other domain',
                       problems: ['  alt: ' + JSON.stringify(r.alt)], url: r.url, reason: r.note });
}

/* ---------------------------------------------------------------------------
 * report
 * ------------------------------------------------------------------------ */

const total = pass + failures.length;
if (failures.length) {
  console.log(`\n${failures.length} of ${total} routing tests FAILED:\n`);
  for (const f of failures) {
    console.log(`  ${f.name}`);
    for (const p of f.problems) console.log(p);
    console.log(`    url: ${f.url}`);
    console.log(`    reason: ${f.reason}\n`);
  }
  process.exitCode = 1;
} else {
  console.log(`\nAll ${total} routing tests passed.\n`);
}
