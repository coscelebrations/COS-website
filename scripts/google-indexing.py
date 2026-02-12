#!/usr/bin/env python3
"""
Google Indexing API Integration for COS Celebrations
Submits URLs to Google's Indexing API for faster indexing.

Usage:
    python3 google-indexing.py index                              # Submit all sitemap URLs
    python3 google-indexing.py index --url=URL1 --url=URL2        # Submit specific URLs only
    python3 google-indexing.py index-changes                      # Only submit pages modified since last indexed
    python3 google-indexing.py check                              # Show pages needing (re)indexing
    python3 google-indexing.py dry                                # Preview URLs without submitting
    python3 google-indexing.py status                             # Check submission status via API

Examples:
    npm run seo:index                                             # All pages
    npm run seo:index -- --url=https://coscelebrations.com/       # Just homepage
    npm run seo:index -- --url=https://coscelebrations.com/treasury-on-the-plaza-wedding-dj/

Setup:
    1. Place google-indexing-credentials.json in scripts/ folder
    2. Add service account email to Search Console as Owner
    3. pip install google-auth google-auth-httplib2 google-api-python-client
"""

import sys
import os
import json
import xml.etree.ElementTree as ET
from datetime import datetime
from pathlib import Path
import subprocess

# Fix Windows encoding issues
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Paths
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent
SITEMAP_PATH = PROJECT_DIR / 'sitemap.xml'
STATUS_PATH = PROJECT_DIR / '_data' / 'indexingStatus.json'
CREDENTIALS_PATH = SCRIPT_DIR / 'google-indexing-credentials.json'

# API Settings
DAILY_QUOTA = 200
SCOPES = ['https://www.googleapis.com/auth/indexing']
API_ENDPOINT = 'https://indexing.googleapis.com/v3/urlNotifications:publish'


def load_status():
    """Load the indexing status tracking file."""
    if STATUS_PATH.exists():
        with open(STATUS_PATH, 'r') as f:
            return json.load(f)
    return {
        "_comment": "Tracks when pages were last submitted to Google Indexing API",
        "pages": {}
    }


def save_status(status):
    """Save the indexing status tracking file."""
    STATUS_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(STATUS_PATH, 'w') as f:
        json.dump(status, f, indent=2)


def parse_sitemap():
    """Parse sitemap.xml and return list of URLs with their lastmod dates."""
    if not SITEMAP_PATH.exists():
        print(f"[ERROR] Sitemap not found: {SITEMAP_PATH}")
        sys.exit(1)

    tree = ET.parse(SITEMAP_PATH)
    root = tree.getroot()

    # Handle XML namespace
    ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}

    urls = []
    for url_elem in root.findall('sm:url', ns):
        loc = url_elem.find('sm:loc', ns)
        lastmod = url_elem.find('sm:lastmod', ns)

        if loc is not None:
            urls.append({
                'url': loc.text,
                'lastmod': lastmod.text if lastmod is not None else None
            })

    return urls


def get_git_modified_time(url):
    """Get the last git commit time for a page's HTML file."""
    # Convert URL to file path
    # https://coscelebrations.com/about/ -> about/index.html
    path = url.replace('https://coscelebrations.com', '').strip('/')

    if path == '':
        file_path = PROJECT_DIR / 'index.html'
    else:
        file_path = PROJECT_DIR / path / 'index.html'

    if not file_path.exists():
        # Try without index.html
        file_path = PROJECT_DIR / f"{path}.html"
        if not file_path.exists():
            return None

    try:
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%cI', str(file_path)],
            capture_output=True,
            text=True,
            cwd=PROJECT_DIR
        )
        if result.returncode == 0 and result.stdout.strip():
            return result.stdout.strip()
    except Exception:
        pass

    return None


def needs_indexing(url_data, status):
    """Check if a URL needs to be (re)indexed."""
    url = url_data['url']
    path = url.replace('https://coscelebrations.com', '')
    if not path:
        path = '/'

    page_status = status.get('pages', {}).get(path)

    # Never indexed
    if not page_status:
        return True, "Never indexed"

    last_indexed = page_status.get('lastIndexed')
    if not last_indexed:
        return True, "No index date"

    # Check sitemap lastmod
    if url_data.get('lastmod'):
        sitemap_date = datetime.fromisoformat(url_data['lastmod'].replace('Z', '+00:00'))
        indexed_date = datetime.fromisoformat(last_indexed.replace('Z', '+00:00'))

        # Normalize both to date-only for comparison
        if sitemap_date.date() > indexed_date.date():
            return True, f"Modified {url_data['lastmod']}"

    # Check git history
    git_time = get_git_modified_time(url)
    if git_time:
        git_date = datetime.fromisoformat(git_time)
        indexed_date = datetime.fromisoformat(last_indexed.replace('Z', '+00:00'))

        if git_date > indexed_date:
            return True, f"Git modified {git_time[:10]}"

    return False, "Up to date"


def get_credentials():
    """Load Google API credentials."""
    if not CREDENTIALS_PATH.exists():
        print(f"[ERROR] Credentials file not found: {CREDENTIALS_PATH}")
        print("\nTo set up credentials:")
        print("1. Go to https://console.cloud.google.com/")
        print("2. Enable the Web Search Indexing API")
        print("3. Create a service account and download JSON key")
        print("4. Save as: scripts/google-indexing-credentials.json")
        print("5. Add the service account email to Search Console as Owner")
        sys.exit(1)

    try:
        from google.oauth2 import service_account
        credentials = service_account.Credentials.from_service_account_file(
            CREDENTIALS_PATH,
            scopes=SCOPES
        )
        return credentials
    except ImportError:
        print("[ERROR] Google API libraries not installed")
        print("Run: pip install google-auth google-auth-httplib2 google-api-python-client")
        sys.exit(1)


def submit_url(url, credentials, dry_run=False):
    """Submit a URL to the Indexing API."""
    if dry_run:
        return {'status': 'dry_run'}

    try:
        from google.auth.transport.requests import AuthorizedSession

        authed_session = AuthorizedSession(credentials)

        content = {
            'url': url,
            'type': 'URL_UPDATED'
        }

        response = authed_session.post(API_ENDPOINT, json=content)

        if response.status_code == 200:
            return {'status': 'success', 'response': response.json()}
        else:
            return {'status': 'error', 'code': response.status_code, 'message': response.text}

    except Exception as e:
        return {'status': 'error', 'message': str(e)}


def get_url_status(url, credentials):
    """Get the indexing status of a URL from Google."""
    try:
        from google.auth.transport.requests import AuthorizedSession

        authed_session = AuthorizedSession(credentials)
        endpoint = f"https://indexing.googleapis.com/v3/urlNotifications/metadata?url={url}"

        response = authed_session.get(endpoint)

        if response.status_code == 200:
            return response.json()
        else:
            return {'error': response.status_code, 'message': response.text}

    except Exception as e:
        return {'error': str(e)}


def cmd_index(changes_only=False, specific_urls=None):
    """Submit URLs to the Indexing API.

    Args:
        changes_only: Only submit pages modified since last indexed
        specific_urls: List of specific URLs to submit (if None, uses sitemap)
    """
    status = load_status()
    credentials = get_credentials()

    # Use specific URLs if provided, otherwise parse sitemap
    if specific_urls:
        urls = [{'url': url, 'lastmod': None} for url in specific_urls]
        mode = f"Specific URLs ({len(urls)})"
    else:
        urls = parse_sitemap()
        mode = 'Changed Pages' if changes_only else 'All Pages'

    submitted = 0
    skipped = 0
    errors = 0

    print(f"\n{'='*60}")
    print(f"Google Indexing API - {mode}")
    print(f"{'='*60}\n")

    for url_data in urls:
        url = url_data['url']
        path = url.replace('https://coscelebrations.com', '') or '/'

        if changes_only:
            needs_it, reason = needs_indexing(url_data, status)
            if not needs_it:
                skipped += 1
                continue
            print(f"[SUBMIT] {path} ({reason})")
        else:
            print(f"[SUBMIT] {path}")

        if submitted >= DAILY_QUOTA:
            print(f"\n[WARN] Daily quota ({DAILY_QUOTA}) reached. Stopping.")
            break

        result = submit_url(url, credentials)

        if result['status'] == 'success':
            submitted += 1
            # Update tracking
            status['pages'][path] = {
                'lastIndexed': datetime.utcnow().isoformat() + 'Z',
                'url': url
            }
        else:
            errors += 1
            print(f"  [ERROR] {result.get('message', 'Unknown error')}")

    # Save updated status
    save_status(status)

    print(f"\n{'='*60}")
    print(f"Results: {submitted} submitted, {skipped} skipped, {errors} errors")
    print(f"{'='*60}\n")


def cmd_check():
    """Show pages needing indexing."""
    urls = parse_sitemap()
    status = load_status()

    needs_index = []
    up_to_date = []

    for url_data in urls:
        url = url_data['url']
        path = url.replace('https://coscelebrations.com', '') or '/'
        needs_it, reason = needs_indexing(url_data, status)

        if needs_it:
            needs_index.append((path, reason))
        else:
            up_to_date.append(path)

    print(f"\n{'='*60}")
    print("Indexing Status Check")
    print(f"{'='*60}\n")

    if needs_index:
        print(f"[NEEDS INDEXING] {len(needs_index)} pages:\n")
        for path, reason in needs_index:
            print(f"  {path}")
            print(f"    Reason: {reason}")
    else:
        print("[ALL INDEXED] All pages are up to date\n")

    print(f"\n{'='*60}")
    print(f"Summary: {len(needs_index)} need indexing, {len(up_to_date)} up to date")
    print(f"{'='*60}\n")

    # Return count for audit integration
    return len(needs_index)


def cmd_dry():
    """Preview URLs without submitting."""
    urls = parse_sitemap()
    status = load_status()

    print(f"\n{'='*60}")
    print("Dry Run - URLs that would be submitted")
    print(f"{'='*60}\n")

    for url_data in urls:
        url = url_data['url']
        path = url.replace('https://coscelebrations.com', '') or '/'
        needs_it, reason = needs_indexing(url_data, status)

        status_icon = "[NEW]" if "Never" in reason else "[UPDATE]" if needs_it else "[SKIP]"
        print(f"{status_icon} {path}")
        if needs_it:
            print(f"       Reason: {reason}")

    print(f"\nTotal URLs in sitemap: {len(urls)}")


def cmd_status():
    """Check submission status via Google API."""
    urls = parse_sitemap()
    credentials = get_credentials()

    print(f"\n{'='*60}")
    print("Google Indexing API Status")
    print(f"{'='*60}\n")

    for url_data in urls[:10]:  # Limit to 10 to avoid quota issues
        url = url_data['url']
        path = url.replace('https://coscelebrations.com', '') or '/'

        result = get_url_status(url, credentials)

        if 'error' in result:
            print(f"[?] {path}")
            print(f"    Error: {result.get('message', result.get('error'))}")
        else:
            latest = result.get('latestUpdate', {})
            notify_time = latest.get('notifyTime', 'Unknown')
            print(f"[OK] {path}")
            print(f"     Last notified: {notify_time}")

    if len(urls) > 10:
        print(f"\n... and {len(urls) - 10} more URLs (limited to avoid quota)")


def cmd_audit():
    """Output audit-format status for integration with audit.py."""
    count = cmd_check()

    # Return structured data for audit
    if count > 0:
        print(f"\n[FAIL] Indexing Status ({count})")
    else:
        print(f"\n[PASS] Indexing Status")

    return count


def parse_url_args():
    """Parse --url arguments from command line."""
    urls = []
    for arg in sys.argv[2:]:
        if arg.startswith('--url='):
            urls.append(arg.split('=', 1)[1])
    return urls if urls else None


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    command = sys.argv[1]

    if command == 'index':
        specific_urls = parse_url_args()
        cmd_index(changes_only=False, specific_urls=specific_urls)
    elif command == 'index-changes':
        cmd_index(changes_only=True)
    elif command == 'check':
        cmd_check()
    elif command == 'dry':
        cmd_dry()
    elif command == 'status':
        cmd_status()
    elif command == 'audit':
        cmd_audit()
    else:
        print(f"Unknown command: {command}")
        print(__doc__)
        sys.exit(1)


if __name__ == '__main__':
    main()
