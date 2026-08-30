#!/bin/bash
# =============================================================================
# sync-link-finder-weekly.sh
# =============================================================================
# Runs the Link Finder sync once a week so new venue pages show up in the tool
# without anyone remembering to do it.
#
# Driven by ~/Library/LaunchAgents/com.cos.link-finder-sync.plist (Monday 8:40).
# Log: /tmp/link-finder-sync.log
#
# It is deliberately cautious, in this order:
#   1. Resolve node explicitly. LaunchAgents do NOT get Corey's interactive
#      PATH, and node lives in /opt/homebrew/bin. This is the exact failure
#      that silently broke the gear tests for six days - see CLAUDE.md.
#   2. Refuse to run if the repo has uncommitted changes to the files it
#      touches. Another assistant works in this repo; clobbering their
#      in-progress edit is not worth automating.
#   3. Sync, then run BOTH test suites. Commit only if they pass.
#   4. Push only what it committed, and say in the log if other commits rode
#      along.
#
# Anything unexpected: log it and stop. A stale tool is a small problem; a
# broken one that nobody is watching is a bigger one.
# =============================================================================

set -uo pipefail

# Overridable so this can be exercised against a throwaway clone before being
# trusted to commit and push unattended. Defaults to the real repo.
REPO="${LINK_FINDER_REPO:-$HOME/cos-website}"
LOG_TAG="[link-finder-sync]"

say() { echo "$LOG_TAG $(date '+%Y-%m-%d %H:%M:%S') $*"; }

say "starting"

# --- 1. find node ------------------------------------------------------------
NODE_BIN=""
for candidate in /opt/homebrew/bin/node /usr/local/bin/node "$(command -v node 2>/dev/null || true)"; do
  if [ -n "$candidate" ] && [ -x "$candidate" ]; then NODE_BIN="$candidate"; break; fi
done
if [ -z "$NODE_BIN" ]; then
  say "FAILED: could not find node. Looked in /opt/homebrew/bin, /usr/local/bin and PATH."
  exit 1
fi
say "using node at $NODE_BIN ($("$NODE_BIN" --version))"

cd "$REPO" || { say "FAILED: cannot cd to $REPO"; exit 1; }

# --- 2. refuse to touch a dirty tree ----------------------------------------
if ! git diff --quiet -- group-reply/config.js 2>/dev/null; then
  say "SKIPPED: group-reply/config.js has uncommitted changes. Someone is editing it."
  exit 0
fi
if ! git diff --cached --quiet 2>/dev/null; then
  say "SKIPPED: there are staged changes in the repo. Not committing on top of someone else's work."
  exit 0
fi

BEFORE_HEAD=$(git rev-parse HEAD)

# --- 3. sync -----------------------------------------------------------------
say "running sync"
if ! "$NODE_BIN" scripts/sync-link-finder.mjs --fix 2>&1 | sed "s/^/$LOG_TAG   /"; then
  say "FAILED: sync script errored. Nothing committed."
  git checkout -- group-reply/config.js 2>/dev/null
  exit 1
fi

if git diff --quiet -- group-reply/config.js; then
  say "nothing new. Link Finder is up to date."
  exit 0
fi

ADDED=$(git diff --numstat -- group-reply/config.js | awk '{print $1}')
say "config.js gained $ADDED line(s). Verifying before committing."

# --- 4. verify ---------------------------------------------------------------
if ! "$NODE_BIN" scripts/test-link-finder.mjs 2>&1 | sed "s/^/$LOG_TAG   /"; then
  say "FAILED: offline tests did not pass. Reverting, nothing committed."
  git checkout -- group-reply/config.js
  exit 1
fi

if ! "$NODE_BIN" scripts/check-group-reply-links.mjs 2>&1 | tail -12 | sed "s/^/$LOG_TAG   /"; then
  say "FAILED: a link does not return 200. Reverting, nothing committed."
  git checkout -- group-reply/config.js
  exit 1
fi

# --- 5. commit and push ------------------------------------------------------
NEW_VENUES=$(git diff -- group-reply/config.js | grep '^+.*slug:' | sed "s/.*slug: '\([a-z0-9-]*\)'.*/\1/" | tr '\n' ' ')
say "adding: $NEW_VENUES"

git add group-reply/config.js
git commit -q -m "Link Finder: add new venue pages ($NEW_VENUES)

Added automatically by scripts/sync-link-finder-weekly.sh after confirming
each page returns 200 on the live sites. Offline tests and the full link
check both passed before this was committed." || {
  say "FAILED: commit failed. Nothing pushed."
  exit 1
}

# Anything else sitting on main goes live with this push. Say so plainly.
OTHERS=$(git log --oneline "origin/main..HEAD" 2>/dev/null | grep -cv 'Link Finder: add new venue pages' || true)
if [ "${OTHERS:-0}" -gt 0 ]; then
  say "NOTE: $OTHERS other unpushed commit(s) on main will go live with this push:"
  git log --oneline origin/main..HEAD | grep -v 'Link Finder: add new venue pages' | sed "s/^/$LOG_TAG     /"
fi

if git push -q origin main 2>&1 | sed "s/^/$LOG_TAG   /"; then
  say "pushed. Netlify will deploy in about a minute."
else
  say "FAILED: push failed. The commit is local at $(git rev-parse --short HEAD); push it by hand."
  exit 1
fi

say "done. $BEFORE_HEAD -> $(git rev-parse --short HEAD)"
