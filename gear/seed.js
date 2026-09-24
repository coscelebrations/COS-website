/* Gear Room - starter data.
   2026-08-11. This is a TEMPLATE, not COS/AE's real inventory. Corey edits it
   in the app (More > Inventory) or here before first sync. Nothing in this file
   is a claim about what gear actually exists - it is a realistic starting shape
   so the app is usable the second it opens instead of showing an empty list. */

export const CATEGORIES = [
  'Speakers', 'Subs', 'DJ Gear', 'Microphones', 'Lighting',
  'Photo Booth', 'Stands', 'Cables', 'Power', 'Facade',
  'Live Music', 'Kit Bags'
];

/* home = where it lives when it is not out. Change these to your real spots. */
export const HOMES = ['Van 1', 'Van 2', 'Garage', 'Storage Unit', "Corey's Car"];

/* pool = "how many of this thing do we own".
   Main Speaker 1 and Main Speaker 2 are two units of one pool. This is what
   makes the clash warning useful: two weddings on one Saturday both need the
   base kit, and that is FINE as long as you own two of everything in it. The
   warning should only fire when demand actually exceeds what exists.
   Derived automatically by stripping a trailing unit marker; override with
   { pool: '...' } when the guess is wrong. */
export function derivePool(name) {
  return String(name == null ? '' : name)
    .replace(/\s*\((?:\d+|backup|[A-Z])\)\s*$/i, '')  // "Uplight Case A (8)" -> handled below
    .replace(/\s+[A-Z]$/, '')                          // trailing " A" / " B"
    .replace(/\s+\d+$/, '')                            // trailing " 1" / " 2"
    .trim();
}

let n = 0;
const it = (name, category, opts = {}) => ({
  id: 'i' + (++n).toString().padStart(3, '0'),
  name,
  category,
  pool: opts.pool || derivePool(name),
  brand: opts.brand || '',
  model: opts.model || '',
  serial: opts.serial || '',
  home: opts.home || 'Garage',
  status: 'in',          // in | out | repair | retired
  holder: '',
  holderUid: '',
  eventId: '',
  since: '',
  notes: opts.notes || '',
  template: true
});

export const ITEMS = [
  // Speakers
  it('Main Speaker 1', 'Speakers', { home: 'Van 1' }),
  it('Main Speaker 2', 'Speakers', { home: 'Van 1' }),
  it('Ceremony Speaker 1', 'Speakers', { home: 'Van 1' }),
  it('Ceremony Speaker 2', 'Speakers', { home: 'Garage' }),
  it('Cocktail Speaker 1', 'Speakers', { home: 'Van 1' }),
  it('Backup Speaker', 'Speakers', { home: 'Garage', notes: 'Spare. Do not take unless a main is down.' }),
  // Subs
  it('Subwoofer 1', 'Subs', { home: 'Van 1' }),
  it('Subwoofer 2', 'Subs', { home: 'Garage' }),
  // DJ Gear
  it('DJ Controller 1', 'DJ Gear', { home: 'Van 1', notes: 'Primary' }),
  it('DJ Controller 2', 'DJ Gear', { home: 'Garage', notes: 'Backup. Always goes with you.' }),
  it('Laptop 1', 'DJ Gear', { home: 'Van 1', notes: 'Primary. Music synced offline.' }),
  it('Laptop 2', 'DJ Gear', { home: 'Garage', notes: 'Backup. Check the library is current.' }),
  it('Audio Interface', 'DJ Gear', { home: 'Garage' }),
  it('Headphones 1', 'DJ Gear', { home: 'Van 1' }),
  it('Headphones 2', 'DJ Gear', { home: 'Garage' }),
  // Microphones
  it('Handheld Wireless 1', 'Microphones', { home: 'Van 1', notes: 'Toasts. Fresh batteries every event.' }),
  it('Handheld Wireless 2', 'Microphones', { home: 'Van 1', notes: 'Ceremony / officiant' }),
  it('Lav Wireless 1', 'Microphones', { home: 'Garage', notes: 'Officiant clip-on' }),
  it('Wired Handheld (backup)', 'Microphones', { home: 'Van 1' }),
  it('Mic Receiver Rack', 'Microphones', { home: 'Van 1' }),
  // Lighting
  it('Uplight Case A (8)', 'Lighting', { home: 'Van 1' }),
  it('Uplight Case B (8)', 'Lighting', { home: 'Garage' }),
  it('Dance Floor Bar 1', 'Lighting', { home: 'Van 1' }),
  it('Dance Floor Bar 2', 'Lighting', { home: 'Garage' }),
  it('Moving Head Pair', 'Lighting', { home: 'Garage' }),
  it('Lighting Controller', 'Lighting', { home: 'Van 1' }),
  // Photo Booth
  it('Photo Booth Unit', 'Photo Booth', { home: 'Storage Unit', notes: 'Digital selfie booth. No props, no prints.' }),
  it('Photo Booth iPad', 'Photo Booth', { home: 'Garage', notes: 'Charge to 100 percent the night before.' }),
  it('Photo Booth Stand + Ring Light', 'Photo Booth', { home: 'Storage Unit' }),
  it('Backdrop + Stand', 'Photo Booth', { home: 'Storage Unit' }),
  // Stands
  it('Speaker Stand 1', 'Stands', { home: 'Van 1' }),
  it('Speaker Stand 2', 'Stands', { home: 'Van 1' }),
  it('Speaker Stand 3', 'Stands', { home: 'Van 1' }),
  it('Speaker Stand 4', 'Stands', { home: 'Garage' }),
  it('Mic Stand 1', 'Stands', { home: 'Van 1' }),
  it('Mic Stand 2', 'Stands', { home: 'Garage' }),
  // Cables
  it('XLR Bag A', 'Cables', { home: 'Van 1' }),
  it('XLR Bag B', 'Cables', { home: 'Garage' }),
  it('Extension Cord 50ft', 'Cables', { home: 'Van 1' }),
  it('Extension Cord 100ft', 'Cables', { home: 'Van 1' }),
  it('Extension Cord 100ft (2)', 'Cables', { home: 'Garage' }),
  // Power
  it('Power Bag (strips + surge)', 'Power', { home: 'Van 1' }),
  it('Battery Pack', 'Power', { home: 'Garage' }),
  // Facade
  it('DJ Facade (white)', 'Facade', { home: 'Van 1' }),
  it('Facade Table + Linen', 'Facade', { home: 'Van 1' }),
  // Live Music
  it('Sax Rig (mic + pack)', 'Live Music', { home: "Corey's Car" }),
  it('In-Ear Pack', 'Live Music', { home: "Corey's Car" }),
  it('Percussion Kit', 'Live Music', { home: 'Storage Unit' }),
  it('Music Stand', 'Live Music', { home: 'Garage' }),
  // Kit Bags
  it('Gaff Tape + Tools', 'Kit Bags', { home: 'Van 1' }),
  it('First Aid Kit', 'Kit Bags', { home: 'Van 1' }),
  it('Tent Weights', 'Kit Bags', { home: 'Garage', notes: 'Outdoor setups only.' })
];

const byName = {};
ITEMS.forEach(i => { byName[i.name] = i.id; });

/* Any kit name below that does not match an ITEM above lands here. It used to
   just vanish into .filter(Boolean): 'Power Bag' never matched the real item
   'Power Bag (strips + surge)', so the Reception DJ Kit shipped one item short
   for six days and nothing said a word. The test suite asserts this is empty.
   Found 2026-08-25. */
export const KIT_MISSES = [];
const ids = (...names) => names.map(nm => {
  if (!byName[nm]) KIT_MISSES.push(nm);
  return byName[nm];
}).filter(Boolean);

/* A kit is what a DJ actually grabs. Nobody checks out 23 things one at a time. */
export const KITS = [
  {
    id: 'k_base', name: 'Reception DJ Kit', always: true,
    note: 'The core setup. Goes to every event.',
    items: ids('Main Speaker 1', 'Main Speaker 2', 'Subwoofer 1', 'DJ Controller 1',
      'Laptop 1', 'Headphones 1', 'Handheld Wireless 1', 'Mic Receiver Rack',
      'Speaker Stand 1', 'Speaker Stand 2', 'XLR Bag A', 'Power Bag (strips + surge)',
      'DJ Facade (white)', 'Facade Table + Linen', 'Dance Floor Bar 1',
      'Extension Cord 50ft', 'Extension Cord 100ft')
  },
  {
    id: 'k_backup', name: 'Backup Kit', always: true,
    note: 'Redundancy. The night you leave this home is the night you need it.',
    items: ids('DJ Controller 2', 'Laptop 2', 'Wired Handheld (backup)',
      'Headphones 2', 'Gaff Tape + Tools', 'First Aid Kit')
  },
  {
    id: 'k_ceremony', name: 'Ceremony Sound',
    items: ids('Ceremony Speaker 1', 'Speaker Stand 3', 'Handheld Wireless 2',
      'Lav Wireless 1', 'Extension Cord 100ft (2)')
  },
  {
    id: 'k_cocktail', name: 'Cocktail Hour',
    items: ids('Cocktail Speaker 1', 'Speaker Stand 4')
  },
  {
    id: 'k_uplighting', name: 'Uplighting',
    items: ids('Uplight Case A (8)', 'Lighting Controller')
  },
  {
    id: 'k_photobooth', name: 'Photo Booth',
    items: ids('Photo Booth Unit', 'Photo Booth iPad', 'Photo Booth Stand + Ring Light', 'Backdrop + Stand')
  },
  {
    id: 'k_sax', name: 'Live Sax',
    items: ids('Sax Rig (mic + pack)', 'In-Ear Pack')
  },
  {
    id: 'k_pulse', name: 'Pulse! Hybrid',
    items: ids('Sax Rig (mic + pack)', 'In-Ear Pack', 'Percussion Kit', 'Moving Head Pair')
  },
  {
    id: 'k_outdoor', name: 'Outdoor Add-on',
    items: ids('Tent Weights', 'Battery Pack')
  }
];

/* Words that appear in a CRM services/package column, mapped to a kit.
   Matching is case-insensitive substring, so keep these short. */
export const SERVICE_MAP = [
  { match: ['ceremony', 'ceremony sound'], kit: 'k_ceremony' },
  { match: ['cocktail'], kit: 'k_cocktail' },
  { match: ['uplight', 'up light', 'lighting package'], kit: 'k_uplighting' },
  { match: ['photo booth', 'photobooth', 'selfie booth', 'booth'], kit: 'k_photobooth' },
  { match: ['sax', 'saxophone', 'saxophonist'], kit: 'k_sax' },
  { match: ['pulse', 'hybrid', 'live band'], kit: 'k_pulse' },
  { match: ['outdoor', 'tent', 'beach'], kit: 'k_outdoor' }
];

export const CHECKLISTS = [
  {
    id: 'cl_leaving',
    name: 'Before you leave the house',
    when: 'Event day, before you pull out of the driveway',
    items: [
      'Every item on your pull list is physically in the vehicle',
      'Backup laptop packed and charged to 100 percent',
      'Music library synced offline - do not count on venue wifi',
      'Fresh batteries in every wireless mic, spares in the bag',
      'Extension cords in: 50ft and 100ft',
      'Power strips and surge protector packed',
      'Vibo timeline reviewed and saved so it opens offline',
      'Couple, planner, and venue phone numbers in your phone',
      'Address checked, drive time plus 30 minutes of buffer',
      'Event attire packed or on',
      'Water and food for the night',
      'Phone charger and power bank',
      'Gas in the tank',
      'If setup is outdoors: tent confirmed, hard level surface confirmed'
    ]
  },
  {
    id: 'cl_venue',
    name: 'When you get to the venue',
    when: 'Load-in',
    items: [
      'Parked where the venue actually allows, not where it was easy',
      'Found the load-in door before carrying anything',
      'Introduced yourself to the coordinator and the photographer',
      'Power source located, cords run and taped down',
      'Sound check: mains, sub, and every mic you brought',
      'Wireless mic tested standing in the actual ceremony spot',
      'Timeline confirmed out loud with the coordinator',
      'Curfew and volume limit confirmed and noted',
      'Backup gear staged where you can reach it in 30 seconds'
    ]
  },
  {
    id: 'cl_loadout',
    name: 'Load out',
    when: 'End of night, before you drive off',
    items: [
      'Sweep the DJ area with a flashlight. Then sweep it again.',
      'Every mic accounted for, including the one the officiant had',
      'Walk the ceremony site and cocktail area',
      'All cables coiled and back in the correct bag',
      'Nothing charging in a wall you are about to walk away from',
      'Gear checked back in on this app',
      'Anything broken or missing flagged here before you leave',
      'Thanked the venue contact on the way out'
    ]
  }
];
