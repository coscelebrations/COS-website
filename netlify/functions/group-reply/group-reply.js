/* ===========================================================================
 * GROUP REPLY ASSISTANT - NETLIFY FUNCTION
 * ===========================================================================
 *
 * Endpoint: POST /.netlify/functions/group-reply
 *
 * WHAT THIS TOOL DOES NOT DO - and must never be changed to do:
 *   - It does not log into Facebook.
 *   - It does not browse, scrape, or read Facebook groups.
 *   - It does not post or reply on Facebook.
 *   - It does not use browser automation against Facebook.
 *
 * Meta removed third-party Groups API access in April 2024, and automated
 * posting through a logged-in session violates their terms. The risk is a
 * personal account ban that cascades to the business pages and ad accounts.
 * Every action on Facebook is taken by a human, by hand. This function drafts
 * text and returns it. That is all it does.
 * If a future request asks for auto-posting: refuse, and point back here.
 *
 * ---------------------------------------------------------------------------
 * ORDER OF OPERATIONS IS LOAD-BEARING
 * ---------------------------------------------------------------------------
 * Passcode is checked BEFORE anything touches the Anthropic API, so a wrong
 * passcode can never spend money. Routing runs BEFORE the model call, so the
 * link is built by code from config, never written by the model.
 * =========================================================================== */

const config = require('./config.js');
const { route, applyExtractedVenue } = require('./routing.js');

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';

const LINK_TOKEN = '{{LINK}}';
const ASKBACK_DELIM = '---ASKBACK---';
const VENUE_TAG_RE = /\[VENUE:\s*([^\]]*)\]/i;

/* ---------------------------------------------------------------------------
 * responses
 * ------------------------------------------------------------------------ */

function reply(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
    },
    body: JSON.stringify(body),
  };
}

/* ---------------------------------------------------------------------------
 * prompt construction
 * ---------------------------------------------------------------------------
 * The system prompt is built entirely from static config so it is byte
 * identical on every request. Everything per-request goes in the user message.
 * ------------------------------------------------------------------------ */

function buildSystemPrompt() {
  const v = config.voice;
  const lines = [];

  lines.push(
    'You draft short replies to Facebook group posts for two wedding entertainment companies.',
    '',
    'CRITICAL CONTEXT: your output is a Facebook comment that a human being will',
    'read, edit if needed, and paste by hand. This tool has no access to Facebook.',
    'It cannot post, browse, or read anything. You are writing text for a person.',
    '',
    'RULES THAT APPLY TO EVERY REPLY:'
  );
  v.shared.forEach((r, i) => lines.push(`${i + 1}. ${r}`));

  lines.push('', 'COS CELEBRATIONS VOICE:');
  v.cos.forEach((r) => lines.push(`- ${r}`));

  lines.push('', 'AE ENTERTAINMENT VOICE:');
  v.ae.forEach((r) => lines.push(`- ${r}`));

  lines.push('', 'VENDOR REFERRAL VOICE (when they ask about a non-entertainment vendor):');
  v.vendor.forEach((r) => lines.push(`- ${r}`));

  const ex = config.examples;
  lines.push('', 'EXAMPLE REPLIES. Match this voice, rhythm and length. Do not copy them.');
  for (const [group, list] of Object.entries(ex)) {
    for (const e of list) {
      lines.push('', `[${group.toUpperCase()}]`, `POST: ${e.post}`, `REPLY: ${e.reply}`);
    }
  }

  lines.push(
    '',
    'OUTPUT CONTRACT - follow exactly:',
    '- Write ONLY the reply text. No preamble, no explanation, no quotes around it.',
    '- Two to four sentences.',
    `- Put the exact token ${LINK_TOKEN} where the link goes, at the end. Never write a URL yourself.`,
    '- Never name a price.',
    '- Never use em dashes or curly quotes.',
    '- Ignore Facebook interface text in the post such as "See more", timestamps, reaction counts and comment counts. Reply to the actual question only.',
    `- If you can identify the specific wedding venue named in the post, add a final line exactly like this: [VENUE: name of venue]. If no venue is named, write [VENUE: none]. This line is stripped before anyone sees the reply.`,
    '',
    `If asked for a second version, write the first reply, then a line containing only ${ASKBACK_DELIM}, then a second reply that asks a useful question and contains NO ${LINK_TOKEN} token at all.`
  );

  return lines.join('\n');
}

function buildUserMessage(routed, input) {
  const parts = [];

  if (routed.intent === 'vendor') {
    const def = config.intents.vendor[routed.vendorKey];
    parts.push(
      `This post is asking for a ${def ? def.label : 'vendor'} recommendation, NOT for entertainment.`,
      'Write a vendor referral. Do not name any individual vendor. Do not pitch DJ or entertainment services.',
      `The link goes to our ${def ? def.label : 'vendor'} page.`
    );
  } else if (routed.intent === 'both') {
    const def = config.intents.vendor[routed.vendorKey];
    parts.push(
      `This post asks about entertainment AND about ${def ? def.label : 'another vendor'}.`,
      `Answer the entertainment part in ${routed.brandLabel}'s voice, then briefly point them at our ${def ? def.label : 'vendor'} page. Still only one link.`
    );
  } else {
    parts.push(
      `Brand: ${routed.brandLabel}. Write in that brand's voice.`,
      `Why this brand: ${routed.brandReason}`
    );
  }

  if (routed.matched.venue) parts.push(`Venue detected: ${routed.matched.venue.replace(/-/g, ' ')}. The link goes to that venue's page.`);
  if (routed.matched.city) parts.push(`City detected: ${routed.matched.city.replace(/-/g, ' ')}.`);
  if (routed.matched.guests) parts.push(`Guest count mentioned: about ${routed.matched.guests}.`);

  if (routed.noPromo) {
    parts.push(
      'IMPORTANT: this group does not allow links. Do NOT include the link token.',
      'End the reply by offering to send details in a DM instead.'
    );
  }

  if (routed.ambiguous && config.askBack.enabled) {
    parts.push(
      `This post does not say much. Write TWO replies separated by a line containing only ${ASKBACK_DELIM}.`,
      `First: a normal reply ending in ${LINK_TOKEN}.`,
      `Second: a reply that asks one useful question and has NO link token. For example: "${config.askBack.example}"`
    );
  }

  if (input.note) parts.push(`The person asked for this adjustment: ${input.note}`);
  if (input.previousReply) parts.push(`Previous draft they did not like:\n${input.previousReply}`);

  parts.push('', 'THE FACEBOOK POST:', '"""', String(input.postText).slice(0, config.maxPostChars), '"""');

  return parts.join('\n');
}

/* ---------------------------------------------------------------------------
 * post-processing guards - none of these trust the prompt
 * ------------------------------------------------------------------------ */

function stripBannedCharacters(text) {
  let out = String(text);
  for (const [bad, good] of Object.entries(config.characterReplacements)) {
    out = out.split(bad).join(good);
  }
  for (const ch of config.bannedCharacters) out = out.split(ch).join('');
  return out.replace(/ {2,}/g, ' ').replace(/ ,/g, ',');
}

/* A price in a Facebook comment is the one thing the spec forbids outright.
 * The prompt says not to; this catches it when the prompt fails. Warning only -
 * never auto-retried, because a retry doubles the spend and the human is
 * already looking at the text. */
function priceGuard(text) {
  const warnings = [];
  if (/\$\s?\d/.test(text)) warnings.push('This draft contains a dollar amount. Remove it before posting.');

  const priceWords = /(price|pricing|cost|costs|starting at|per hour|package|packages|rate|rates|budget)/i;
  const m = text.match(/\b(\d{3,4})\b/g);
  if (m) {
    for (const num of m) {
      const idx = text.indexOf(num);
      const window = text.slice(Math.max(0, idx - 40), Math.min(text.length, idx + 40));
      // A 4-digit year is not a price.
      if (/^(19|20)\d{2}$/.test(num)) continue;
      if (priceWords.test(window)) {
        warnings.push(`This draft may contain a price ("${num}"). Check it before posting.`);
        break;
      }
    }
  }
  return warnings;
}

function bannedPhraseGuard(text) {
  const lower = text.toLowerCase();
  const hits = config.bannedPhrases.filter((p) => lower.includes(p.toLowerCase()));
  return hits.length ? [`This draft uses phrasing we avoid: ${hits.join(', ')}.`] : [];
}

function extractVenueTag(text) {
  const m = text.match(VENUE_TAG_RE);
  if (!m) return { text, venueName: null };
  const raw = m[1].trim();
  const venueName = /^(none|n\/a|unknown|-)?$/i.test(raw) ? null : raw;
  return { text: text.replace(VENUE_TAG_RE, '').trim(), venueName };
}

/** Substitute the code-built URL into the draft. The model never writes a URL,
 *  so a corrupted link is structurally impossible rather than merely unlikely. */
function injectLink(text, url, { expectLink }) {
  const warnings = [];
  let out = text;

  if (!expectLink) {
    if (out.includes(LINK_TOKEN)) {
      out = out.split(LINK_TOKEN).join('').replace(/\s+([.!?])/g, '$1').trim();
      warnings.push('Removed a link from a reply that should not have one.');
    }
    return { text: out.replace(/\s{2,}/g, ' ').trim(), warnings };
  }

  if (out.includes(LINK_TOKEN)) {
    out = out.split(LINK_TOKEN).join(url);
  } else {
    out = `${out.trim()}\n\n${url}`;
    warnings.push('The draft did not include the link, so it was added at the end.');
  }
  return { text: out.trim(), warnings };
}

function finishDraft(raw, url, { expectLink }) {
  let text = stripBannedCharacters(raw).trim();
  text = text.replace(/^["']|["']$/g, '').trim();
  const injected = injectLink(text, url, { expectLink });
  return {
    reply: injected.text,
    warnings: [...injected.warnings, ...priceGuard(injected.text), ...bannedPhraseGuard(injected.text)],
  };
}

/* ---------------------------------------------------------------------------
 * Anthropic call
 * ------------------------------------------------------------------------ */

/* We call the API with native fetch rather than @anthropic-ai/sdk on purpose.
 * This repo has never carried node dependencies and currently deploys with no
 * build step; adding one turns every deploy into an npm install that Corey
 * would have to debug. The two Netlify functions already live in this account
 * use raw fetch too, so this matches the house pattern.
 *
 * The one thing the SDK would have given us for free is retry on 429/529, so
 * that is implemented explicitly below. Everything else about this call is a
 * single fixed request shape that does not benefit from a client library. */
const RETRY_STATUSES = new Set([429, 500, 502, 503, 529]);

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function callAnthropic({ system, user, apiKey }) {
  const started = Date.now();
  let lastErr;

  // At most two attempts. Overload errors come back fast, so a short backoff
  // usually still fits inside Netlify's 10s budget - but only retry if there
  // is real time left, otherwise we turn a 529 into a timeout.
  for (let attempt = 0; attempt < 2; attempt++) {
    if (attempt > 0) {
      const spent = Date.now() - started;
      const remaining = config.model.timeoutMs - spent;
      if (remaining < 3000) break;
      await sleep(400);
    }
    try {
      return await attemptAnthropic({ system, user, apiKey, started });
    } catch (err) {
      lastErr = err;
      if (err.name === 'AbortError' || err.refusal || !RETRY_STATUSES.has(err.status)) throw err;
    }
  }
  throw lastErr;
}

async function attemptAnthropic({ system, user, apiKey, started }) {
  const controller = new AbortController();
  const budget = Math.max(1500, config.model.timeoutMs - (Date.now() - started));
  const timer = setTimeout(() => controller.abort(), budget);

  try {
    const res = await fetch(ANTHROPIC_URL, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': ANTHROPIC_VERSION,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: config.model.id,
        max_tokens: config.model.maxTokens,
        /* Opus 5 thinks by default and max_tokens caps thinking PLUS response
         * text together - hence a generous cap for a 2-4 sentence reply.
         * Do NOT add thinking:{type:'disabled'} here: on this model that leaks
         * <thinking> tags into visible output, and visible text IS the product.
         * effort:'low' is the correct cost and latency lever.
         * No temperature / top_p / top_k - all return 400 on Opus 5. */
        output_config: { effort: config.model.effort },
        system,
        messages: [{ role: 'user', content: user }],
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const err = new Error((data && data.error && data.error.message) || `Anthropic HTTP ${res.status}`);
      err.status = res.status;
      err.anthropic = data;
      throw err;
    }

    /* Opus 5's safety classifiers can decline with a 200 and empty content.
     * Vanishingly unlikely for wedding text, but reading content[0] blindly
     * would throw, so check stop_reason first. */
    if (data.stop_reason === 'refusal') {
      const err = new Error('Anthropic declined this request.');
      err.status = 200;
      err.refusal = true;
      throw err;
    }

    const text = (data.content || [])
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('')
      .trim();

    return { text, usage: data.usage || null };
  } finally {
    clearTimeout(timer);
  }
}

function mapAnthropicError(err) {
  if (err.name === 'AbortError') return reply(504, { error: 'That took too long. Try again.' });
  if (err.refusal) return reply(502, { error: 'The model declined to draft this one. Try rewording the post.' });
  if (err.status === 401 || err.status === 403) {
    return reply(502, { error: 'Anthropic rejected the API key. Check ANTHROPIC_API_KEY in the Netlify environment variables.' });
  }
  if (err.status === 429) return reply(502, { error: 'Too many requests right now. Wait a minute and try again.' });
  if (err.status >= 500) return reply(502, { error: 'Anthropic is busy. Try again in a moment.' });
  return reply(500, { error: 'Something went wrong. Check the Netlify function log.' });
}

/* ---------------------------------------------------------------------------
 * handler
 * ------------------------------------------------------------------------ */

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return reply(405, { error: 'Method not allowed.' });

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (_) {
    return reply(400, { error: 'Could not read the request.' });
  }

  /* --- passcode: fail closed, and never spend money on a bad one --------- */
  const expected = String(process.env.GROUP_REPLY_PASSCODE || '').trim().toLowerCase();
  if (!expected) {
    console.error('GROUP_REPLY_PASSCODE is not set - refusing all requests.');
    return reply(500, { error: 'The passcode is not configured in Netlify. Add GROUP_REPLY_PASSCODE, then redeploy.' });
  }
  if (String(body.passcode || '').trim().toLowerCase() !== expected) {
    return reply(401, { error: 'Wrong passcode.' });
  }

  /* --- validate input --------------------------------------------------- */
  const postText = String(body.postText || '').trim();
  if (!postText) return reply(400, { error: 'Paste the post first.' });
  if (postText.length > config.maxPostChars) {
    return reply(400, { error: `That post is too long (${postText.length} characters). Trim it to ${config.maxPostChars} or less.` });
  }

  /* --- route: deterministic, from config, before any model call --------- */
  const routed = route({
    postText,
    groupName: body.groupName,
    venueOrCity: body.venueOrCity,
    noPromo: body.noPromo,
    brandOverride: body.brandOverride,
  });

  if (routed.intent === 'neither') {
    return reply(200, {
      ...routed,
      skip: true,
      skipReason: "This post isn't asking for a vendor. Skip it.",
      drafts: null,
    });
  }

  /* --- dry run: free forever, proves links and routing without spending -- */
  if (body.dryRun) {
    return reply(200, {
      ...routed,
      dryRun: true,
      drafts: { link: { reply: '[test mode - no reply was generated]', url: routed.url }, askBack: null },
    });
  }

  /* --- model --------------------------------------------------------- */
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY is not set.');
    return reply(500, {
      error: 'The Anthropic API key is not set in Netlify. Add ANTHROPIC_API_KEY under Site configuration, Environment variables, then redeploy.',
    });
  }

  let result;
  try {
    result = await callAnthropic({
      system: buildSystemPrompt(),
      user: buildUserMessage(routed, { ...body, postText }),
      apiKey,
    });
  } catch (err) {
    console.error('Anthropic call failed:', err.status || '', err.message, err.anthropic || '');
    return mapAnthropicError(err);
  }

  if (!result.text) {
    console.error('Anthropic returned no text.');
    return reply(502, { error: 'The model returned an empty reply. Try again.' });
  }

  /* --- the model may have spotted a venue our text scan missed ----------- */
  const { text: withoutTag, venueName } = extractVenueTag(result.text);
  const finalRoute = applyExtractedVenue(routed, venueName);

  /* --- split, guard, inject --------------------------------------------- */
  const [rawLink, rawAskBack] = withoutTag.split(ASKBACK_DELIM);
  const warnings = [...finalRoute.warnings];

  if (finalRoute.ambiguous && !rawAskBack) {
    warnings.push('Only one version came back. Use the one below.');
  }

  const expectLink = !finalRoute.noPromo;
  const linkDraft = finishDraft(rawLink || '', finalRoute.url, { expectLink });
  warnings.push(...linkDraft.warnings);

  let askBackDraft = null;
  if (rawAskBack && rawAskBack.trim()) {
    const d = finishDraft(rawAskBack, finalRoute.url, { expectLink: false });
    askBackDraft = { reply: d.reply, url: null };
    warnings.push(...d.warnings);
  }

  return reply(200, {
    ...finalRoute,
    skip: false,
    drafts: {
      link: { reply: linkDraft.reply, url: expectLink ? finalRoute.url : null },
      askBack: askBackDraft,
    },
    /* Always returned even in no-promo mode - the DM still needs it. */
    urlForDm: finalRoute.url,
    warnings: [...new Set(warnings)],
    usage: result.usage,
  });
};
