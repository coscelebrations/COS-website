#!/usr/bin/env python3
"""
Site Audit Script for COS Celebrations
Runs various checks and outputs audit results.

Usage:
    python3 audit.py              # Run all audits
    python3 audit.py indexing     # Run only indexing audit
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


def load_status():
    """Load the indexing status tracking file."""
    if STATUS_PATH.exists():
        with open(STATUS_PATH, 'r') as f:
            return json.load(f)
    return {"_comment": "", "pages": {}}


def parse_sitemap():
    """Parse sitemap.xml and return list of URLs."""
    if not SITEMAP_PATH.exists():
        return []

    tree = ET.parse(SITEMAP_PATH)
    root = tree.getroot()
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
    path = url.replace('https://coscelebrations.com', '').strip('/')

    if path == '':
        file_path = PROJECT_DIR / 'index.html'
    else:
        file_path = PROJECT_DIR / path / 'index.html'

    if not file_path.exists():
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

    if not page_status:
        return True

    last_indexed = page_status.get('lastIndexed')
    if not last_indexed:
        return True

    if url_data.get('lastmod'):
        try:
            sitemap_date = datetime.fromisoformat(url_data['lastmod'].replace('Z', '+00:00'))
            indexed_date = datetime.fromisoformat(last_indexed.replace('Z', '+00:00'))
            if sitemap_date.date() > indexed_date.date():
                return True
        except ValueError:
            pass

    git_time = get_git_modified_time(url)
    if git_time:
        try:
            git_date = datetime.fromisoformat(git_time)
            indexed_date = datetime.fromisoformat(last_indexed.replace('Z', '+00:00'))
            if git_date > indexed_date:
                return True
        except ValueError:
            pass

    return False


def audit_indexing():
    """
    Check indexing status.
    Returns (passed, count, message)
    """
    urls = parse_sitemap()
    status = load_status()

    needs_count = 0
    for url_data in urls:
        if needs_indexing(url_data, status):
            needs_count += 1

    if needs_count == 0:
        return True, 0, "All pages indexed"
    else:
        return False, needs_count, f"{needs_count} pages need indexing"


def audit_sitemap():
    """
    Check if sitemap exists and is valid.
    Returns (passed, count, message)
    """
    if not SITEMAP_PATH.exists():
        return False, 1, "sitemap.xml not found"

    try:
        urls = parse_sitemap()
        if len(urls) == 0:
            return False, 1, "sitemap.xml is empty"
        return True, len(urls), f"{len(urls)} URLs in sitemap"
    except Exception as e:
        return False, 1, f"Invalid sitemap: {str(e)}"


def audit_robots():
    """
    Check if robots.txt exists.
    Returns (passed, count, message)
    """
    robots_path = PROJECT_DIR / 'robots.txt'
    if robots_path.exists():
        return True, 0, "robots.txt found"
    return False, 1, "robots.txt not found"


def print_result(name, passed, count, message):
    """Print formatted audit result."""
    if passed:
        print(f"[PASS] {name}")
    else:
        print(f"[FAIL] {name} ({count})")

    if message:
        print(f"       {message}")


def run_all_audits():
    """Run all audit checks."""
    print("\n" + "=" * 60)
    print("COS Celebrations Site Audit")
    print("=" * 60 + "\n")

    audits = [
        ("Sitemap", audit_sitemap()),
        ("Robots.txt", audit_robots()),
        ("Indexing Status", audit_indexing()),
    ]

    passed = 0
    failed = 0

    for name, (success, count, message) in audits:
        print_result(name, success, count, message)
        if success:
            passed += 1
        else:
            failed += 1
        print()

    print("=" * 60)
    print(f"Results: {passed} passed, {failed} failed")
    print("=" * 60 + "\n")

    return failed == 0


def main():
    if len(sys.argv) > 1:
        command = sys.argv[1]
        if command == 'indexing':
            passed, count, message = audit_indexing()
            print_result("Indexing Status", passed, count, message)
            sys.exit(0 if passed else 1)
        else:
            print(f"Unknown audit: {command}")
            print("Available: indexing")
            sys.exit(1)
    else:
        success = run_all_audits()
        sys.exit(0 if success else 1)


if __name__ == '__main__':
    main()
