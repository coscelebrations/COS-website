#!/usr/bin/env python3
"""
Comprehensive Site Audit Script for COS Celebrations
Runs extensive SEO and quality checks on the website.

Usage:
    python3 audit.py              # Run all audits
    python3 audit.py images       # Run only image audits
    python3 audit.py schema       # Run only schema audits
    python3 audit.py meta         # Run only meta audits
    python3 audit.py links        # Run only link audits
    python3 audit.py indexing     # Run only indexing audit
    python3 audit.py quick        # Run quick checks only (no file scanning)
"""

import sys
import os
import json
import re
import xml.etree.ElementTree as ET
from datetime import datetime
from pathlib import Path
import subprocess
from html.parser import HTMLParser
from collections import defaultdict
from urllib.parse import urljoin, urlparse

# Fix Windows encoding issues
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# ============================================================================
# CONFIGURATION
# ============================================================================

SITE_DOMAIN = 'https://coscelebrations.com'
SITE_NAME = 'COS Celebrations'

# Paths
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent
SITEMAP_PATH = PROJECT_DIR / 'sitemap.xml'
STATUS_PATH = PROJECT_DIR / '_data' / 'indexingStatus.json'
IMAGES_DIR = PROJECT_DIR / 'images'

# Thresholds
MAX_TITLE_LENGTH = 60
MAX_DESCRIPTION_LENGTH = 160
MIN_DESCRIPTION_LENGTH = 120
MAX_IMAGE_SIZE_KB = 150
RECOMMENDED_IMAGE_WIDTH = 800
MAX_HERO_WIDTH = 1200
MIN_ALT_TEXT_LENGTH = 10
MAX_ALT_TEXT_LENGTH = 125

# Colors for terminal output
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    END = '\033[0m'

def colorize(text, color):
    """Add color to terminal output."""
    return f"{color}{text}{Colors.END}"

# ============================================================================
# HTML PARSER
# ============================================================================

class PageParser(HTMLParser):
    """Parse HTML and extract SEO-relevant elements."""

    def __init__(self):
        super().__init__()
        self.title = None
        self.description = None
        self.canonical = None
        self.h1s = []
        self.h2s = []
        self.images = []
        self.internal_links = []
        self.external_links = []
        self.schemas = []
        self.og_tags = {}
        self.in_title = False
        self.in_h1 = False
        self.in_h2 = False
        self.in_script = False
        self.script_type = None
        self.script_content = ""
        self.current_text = ""

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)

        if tag == 'title':
            self.in_title = True
            self.current_text = ""
        elif tag == 'h1':
            self.in_h1 = True
            self.current_text = ""
        elif tag == 'h2':
            self.in_h2 = True
            self.current_text = ""
        elif tag == 'meta':
            name = attrs_dict.get('name', '').lower()
            prop = attrs_dict.get('property', '').lower()
            content = attrs_dict.get('content', '')

            if name == 'description':
                self.description = content
            elif prop.startswith('og:'):
                self.og_tags[prop] = content
        elif tag == 'link':
            rel = attrs_dict.get('rel', '')
            if rel == 'canonical':
                self.canonical = attrs_dict.get('href')
        elif tag == 'img':
            self.images.append({
                'src': attrs_dict.get('src', ''),
                'alt': attrs_dict.get('alt', ''),
                'width': attrs_dict.get('width'),
                'height': attrs_dict.get('height'),
                'loading': attrs_dict.get('loading'),
            })
        elif tag == 'a':
            href = attrs_dict.get('href', '')
            if href and not href.startswith('#') and not href.startswith('mailto:') and not href.startswith('tel:'):
                if href.startswith('/') or href.startswith(SITE_DOMAIN):
                    self.internal_links.append(href)
                elif href.startswith('http'):
                    self.external_links.append(href)
        elif tag == 'script':
            script_type = attrs_dict.get('type', '')
            if script_type == 'application/ld+json':
                self.in_script = True
                self.script_type = 'json-ld'
                self.script_content = ""

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
            self.title = self.current_text.strip()
        elif tag == 'h1':
            self.in_h1 = False
            self.h1s.append(self.current_text.strip())
        elif tag == 'h2':
            self.in_h2 = False
            self.h2s.append(self.current_text.strip())
        elif tag == 'script' and self.in_script:
            self.in_script = False
            if self.script_type == 'json-ld':
                try:
                    schema = json.loads(self.script_content)
                    self.schemas.append(schema)
                except json.JSONDecodeError:
                    pass
            self.script_content = ""

    def handle_data(self, data):
        if self.in_title or self.in_h1 or self.in_h2:
            self.current_text += data
        if self.in_script:
            self.script_content += data


def parse_html_file(file_path):
    """Parse an HTML file and return extracted data."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        parser = PageParser()
        parser.feed(content)
        return parser
    except Exception as e:
        return None


# ============================================================================
# UTILITY FUNCTIONS
# ============================================================================

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


def get_all_html_files():
    """Get all HTML files in the project."""
    html_files = []
    for path in PROJECT_DIR.rglob('*.html'):
        # Skip node_modules, scripts, etc.
        rel_path = path.relative_to(PROJECT_DIR)
        skip_dirs = ['node_modules', 'scripts', '.git', '_site']
        if not any(part in skip_dirs for part in rel_path.parts):
            html_files.append(path)
    return html_files


def get_all_images():
    """Get all image files in the project."""
    image_files = []
    extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    for ext in extensions:
        image_files.extend(PROJECT_DIR.rglob(f'*{ext}'))
    return [f for f in image_files if '.git' not in str(f)]


def url_to_file_path(url):
    """Convert a URL to its corresponding file path."""
    path = url.replace(SITE_DOMAIN, '').strip('/')

    if path == '':
        return PROJECT_DIR / 'index.html'

    # Try directory with index.html
    dir_path = PROJECT_DIR / path / 'index.html'
    if dir_path.exists():
        return dir_path

    # Try direct .html file
    file_path = PROJECT_DIR / f"{path}.html"
    if file_path.exists():
        return file_path

    return None


def get_git_modified_time(url):
    """Get the last git commit time for a page's HTML file."""
    file_path = url_to_file_path(url)
    if not file_path:
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


def get_file_size_kb(file_path):
    """Get file size in KB."""
    return file_path.stat().st_size / 1024


# ============================================================================
# AUDIT FUNCTIONS
# ============================================================================

def audit_sitemap():
    """Check if sitemap exists and is valid."""
    issues = []

    if not SITEMAP_PATH.exists():
        return False, ["sitemap.xml not found"]

    try:
        urls = parse_sitemap()
        if len(urls) == 0:
            issues.append("sitemap.xml is empty")

        # Check for duplicate URLs
        url_list = [u['url'] for u in urls]
        duplicates = [u for u in url_list if url_list.count(u) > 1]
        if duplicates:
            issues.append(f"Duplicate URLs in sitemap: {set(duplicates)}")

        # Check all URLs are accessible
        for url_data in urls:
            file_path = url_to_file_path(url_data['url'])
            if not file_path or not file_path.exists():
                issues.append(f"Missing file for sitemap URL: {url_data['url']}")

    except Exception as e:
        issues.append(f"Invalid sitemap: {str(e)}")

    if not issues:
        return True, [f"{len(urls)} URLs in sitemap - all valid"]
    return False, issues


def audit_robots():
    """Check robots.txt configuration."""
    issues = []
    robots_path = PROJECT_DIR / 'robots.txt'

    if not robots_path.exists():
        return False, ["robots.txt not found"]

    with open(robots_path, 'r') as f:
        content = f.read()

    # Check for sitemap reference
    if 'Sitemap:' not in content:
        issues.append("robots.txt doesn't reference sitemap")

    # Check sitemap URL is correct
    if SITE_DOMAIN not in content:
        issues.append(f"robots.txt sitemap URL may be incorrect (should use {SITE_DOMAIN})")

    if not issues:
        return True, ["robots.txt configured correctly"]
    return False, issues


def audit_indexing():
    """Check indexing status."""
    urls = parse_sitemap()
    status = load_status()
    issues = []

    for url_data in urls:
        url = url_data['url']
        path = url.replace(SITE_DOMAIN, '')
        if not path:
            path = '/'

        page_status = status.get('pages', {}).get(path)

        if not page_status:
            issues.append(f"Never indexed: {path}")
            continue

        last_indexed = page_status.get('lastIndexed')
        if not last_indexed:
            issues.append(f"No index date: {path}")
            continue

        # Check if modified since indexing
        git_time = get_git_modified_time(url)
        if git_time:
            try:
                git_date = datetime.fromisoformat(git_time)
                indexed_date = datetime.fromisoformat(last_indexed.replace('Z', '+00:00'))
                if git_date > indexed_date:
                    issues.append(f"Modified since indexing: {path}")
            except ValueError:
                pass

    if not issues:
        return True, [f"All {len(urls)} pages indexed and up-to-date"]
    return False, issues


def audit_images():
    """Comprehensive image audit."""
    issues = []
    warnings = []

    html_files = get_all_html_files()
    all_referenced_images = set()

    # Collect all images referenced in HTML
    for html_file in html_files:
        parser = parse_html_file(html_file)
        if not parser:
            continue

        page_path = html_file.relative_to(PROJECT_DIR)

        for img in parser.images:
            src = img['src']
            alt = img['alt']

            # Skip lightbox placeholder images (empty src, populated via JS)
            if not src:
                continue

            # Track referenced images
            if src.startswith('/'):
                all_referenced_images.add(src)

            # Check alt text
            if not alt:
                issues.append(f"Missing alt text: {src} on {page_path}")
            elif len(alt) < MIN_ALT_TEXT_LENGTH:
                warnings.append(f"Alt text too short ({len(alt)} chars): {src} on {page_path}")
            elif len(alt) > MAX_ALT_TEXT_LENGTH:
                warnings.append(f"Alt text too long ({len(alt)} chars): {src} on {page_path}")

            # Check for lazy loading on below-fold images
            # (We can't know for sure, but non-hero images should have loading="lazy")

            # Check image exists
            if src.startswith('/'):
                img_path = PROJECT_DIR / src.lstrip('/')
                if not img_path.exists():
                    issues.append(f"Broken image: {src} on {page_path}")

    # Check image file sizes and formats
    image_files = get_all_images()
    for img_path in image_files:
        rel_path = img_path.relative_to(PROJECT_DIR)
        size_kb = get_file_size_kb(img_path)

        # Check file size
        if size_kb > MAX_IMAGE_SIZE_KB:
            issues.append(f"Image too large ({size_kb:.0f}KB): {rel_path}")

        # Check format (prefer WebP)
        if img_path.suffix.lower() in ['.jpg', '.jpeg', '.png']:
            # Only warn if it's a content image, not a special file
            if 'favicon' not in str(img_path).lower():
                warnings.append(f"Consider WebP format: {rel_path}")

    # Check for orphaned images (in images/ but not used)
    if IMAGES_DIR.exists():
        for img_path in IMAGES_DIR.rglob('*'):
            if img_path.is_file() and img_path.suffix.lower() in ['.jpg', '.jpeg', '.png', '.webp', '.gif']:
                rel_path = '/' + str(img_path.relative_to(PROJECT_DIR))
                if rel_path not in all_referenced_images:
                    # Not necessarily an issue, might be used in CSS
                    pass

    all_issues = issues + warnings
    if not all_issues:
        return True, [f"All images pass audit ({len(image_files)} files checked)"]
    return len(issues) == 0, all_issues


def audit_meta():
    """Audit meta tags and SEO elements."""
    issues = []
    warnings = []

    html_files = get_all_html_files()

    for html_file in html_files:
        parser = parse_html_file(html_file)
        if not parser:
            continue

        page_path = html_file.relative_to(PROJECT_DIR)

        # Title checks
        if not parser.title:
            issues.append(f"Missing title: {page_path}")
        elif len(parser.title) > MAX_TITLE_LENGTH:
            warnings.append(f"Title too long ({len(parser.title)} chars): {page_path}")

        # Description checks
        if not parser.description:
            issues.append(f"Missing meta description: {page_path}")
        elif len(parser.description) < MIN_DESCRIPTION_LENGTH:
            warnings.append(f"Description too short ({len(parser.description)} chars): {page_path}")
        elif len(parser.description) > MAX_DESCRIPTION_LENGTH:
            warnings.append(f"Description too long ({len(parser.description)} chars): {page_path}")

        # H1 checks
        if len(parser.h1s) == 0:
            issues.append(f"Missing H1: {page_path}")
        elif len(parser.h1s) > 1:
            warnings.append(f"Multiple H1s ({len(parser.h1s)}): {page_path}")

        # Canonical check
        if not parser.canonical:
            warnings.append(f"Missing canonical: {page_path}")

        # Open Graph checks
        required_og = ['og:title', 'og:description', 'og:image']
        for og in required_og:
            if og not in parser.og_tags:
                warnings.append(f"Missing {og}: {page_path}")

    all_issues = issues + warnings
    if not all_issues:
        return True, [f"All meta tags pass audit ({len(html_files)} pages checked)"]
    return len(issues) == 0, all_issues


def audit_schema():
    """Audit JSON-LD schema markup."""
    issues = []
    warnings = []

    html_files = get_all_html_files()

    for html_file in html_files:
        parser = parse_html_file(html_file)
        if not parser:
            continue

        page_path = html_file.relative_to(PROJECT_DIR)

        if not parser.schemas:
            issues.append(f"Missing schema markup: {page_path}")
            continue

        has_local_business = False
        has_faq = False

        for schema in parser.schemas:
            schema_type = schema.get('@type', '')

            # Flatten array types
            if isinstance(schema_type, list):
                schema_types = schema_type
            else:
                schema_types = [schema_type]

            for st in schema_types:
                if st in ['LocalBusiness', 'EntertainmentBusiness', 'DJService']:
                    has_local_business = True

                    # Validate required fields
                    required_fields = ['name', 'telephone', 'address']
                    for field in required_fields:
                        if field not in schema:
                            warnings.append(f"Schema missing {field}: {page_path}")

                    # Check for aggregateRating
                    if 'aggregateRating' not in schema:
                        warnings.append(f"Schema missing aggregateRating: {page_path}")

                if st == 'FAQPage':
                    has_faq = True

                    # Check FAQ has questions
                    main_entity = schema.get('mainEntity', [])
                    if not main_entity:
                        warnings.append(f"FAQPage has no questions: {page_path}")

        # Check venue pages have LocalBusiness schema
        if 'wedding-dj' in str(page_path) and not has_local_business:
            issues.append(f"Venue page missing LocalBusiness schema: {page_path}")

    all_issues = issues + warnings
    if not all_issues:
        return True, [f"All schema markup passes audit ({len(html_files)} pages checked)"]
    return len(issues) == 0, all_issues


def audit_links():
    """Audit internal and external links."""
    issues = []
    warnings = []

    html_files = get_all_html_files()
    all_pages = set()
    incoming_links = defaultdict(list)

    # Build list of all pages
    for html_file in html_files:
        rel_path = '/' + str(html_file.relative_to(PROJECT_DIR)).replace('/index.html', '/').replace('.html', '/')
        if rel_path.endswith('//'):
            rel_path = '/'
        all_pages.add(rel_path)

    # Check all links
    for html_file in html_files:
        parser = parse_html_file(html_file)
        if not parser:
            continue

        page_path = html_file.relative_to(PROJECT_DIR)
        source_path = '/' + str(page_path).replace('/index.html', '/').replace('.html', '/')

        for link in parser.internal_links:
            # Normalize link
            if link.startswith(SITE_DOMAIN):
                link = link.replace(SITE_DOMAIN, '')

            if not link:
                link = '/'

            # Skip anchor links (including homepage anchors like /#pricing/)
            if '#' in link:
                continue

            # Ensure trailing slash for directories
            if not link.endswith('/') and '.' not in link.split('/')[-1]:
                link = link + '/'

            # Track incoming links
            incoming_links[link].append(source_path)

            # Check if link target exists
            target_path = url_to_file_path(SITE_DOMAIN + link)
            if not target_path or not target_path.exists():
                issues.append(f"Broken internal link: {link} on {page_path}")

    # Find orphaned pages (no internal links pointing to them)
    sitemap_urls = parse_sitemap()
    sitemap_paths = set()
    for url_data in sitemap_urls:
        path = url_data['url'].replace(SITE_DOMAIN, '')
        if not path:
            path = '/'
        if not path.endswith('/'):
            path += '/'
        sitemap_paths.add(path)

    for path in sitemap_paths:
        if path not in incoming_links and path != '/':
            warnings.append(f"No internal links to: {path}")

    all_issues = issues + warnings
    if not all_issues:
        return True, [f"All links pass audit ({len(html_files)} pages checked)"]
    return len(issues) == 0, all_issues


def audit_content_quality():
    """Check content quality indicators."""
    issues = []
    warnings = []

    html_files = get_all_html_files()

    for html_file in html_files:
        # Get file content
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()

        page_path = html_file.relative_to(PROJECT_DIR)

        # Check for placeholder text (in text content only, not HTML attributes)
        text_only = re.sub(r'<[^>]+>', ' ', content)  # Strip HTML tags
        placeholder_patterns = [
            r'lorem ipsum',
            r'\[your.*?\]',
            r'\[insert.*?\]',
        ]
        # These patterns should only match in HTML comments or visible text
        comment_patterns = [
            r'<!--.*?(TODO|FIXME).*?-->',
        ]

        for pattern in placeholder_patterns:
            if re.search(pattern, text_only, re.IGNORECASE):
                issues.append(f"Possible placeholder content: {page_path}")
                break

        for pattern in comment_patterns:
            if re.search(pattern, content, re.IGNORECASE | re.DOTALL):
                issues.append(f"TODO/FIXME in comments: {page_path}")
                break

        # Check minimum content length (excluding HTML)
        text_content = re.sub(r'<[^>]+>', '', content)
        text_content = re.sub(r'\s+', ' ', text_content).strip()

        word_count = len(text_content.split())
        if word_count < 300 and 'index.html' not in str(page_path) or 'wedding-dj' in str(page_path):
            # Service pages should have substantial content
            if word_count < 500:
                warnings.append(f"Low word count ({word_count}): {page_path}")

    all_issues = issues + warnings
    if not all_issues:
        return True, [f"Content quality passes ({len(html_files)} pages checked)"]
    return len(issues) == 0, all_issues


# ============================================================================
# MAIN AUDIT RUNNER
# ============================================================================

def print_section(title):
    """Print a section header."""
    print(f"\n{colorize(title, Colors.BOLD + Colors.CYAN)}")
    print("-" * 50)


def print_result(passed, messages):
    """Print audit results with color coding."""
    for msg in messages:
        if passed:
            print(f"  {colorize('[PASS]', Colors.GREEN)} {msg}")
        elif 'warning' in msg.lower() or any(x in msg for x in ['too short', 'too long', 'Consider', 'Missing og:', 'Missing canonical']):
            print(f"  {colorize('[WARN]', Colors.YELLOW)} {msg}")
        else:
            print(f"  {colorize('[FAIL]', Colors.RED)} {msg}")


def run_audit_group(name, audit_func):
    """Run an audit and print results."""
    print_section(name)
    passed, messages = audit_func()
    print_result(passed, messages)
    return passed, len([m for m in messages if not any(x in m for x in ['pass', 'PASS', 'valid', 'checked'])])


def run_all_audits():
    """Run all audit checks."""
    print(f"\n{'=' * 60}")
    print(colorize(f"  {SITE_NAME} Comprehensive Site Audit", Colors.BOLD + Colors.HEADER))
    print(f"  {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"{'=' * 60}")

    audits = [
        ("Sitemap & Robots", lambda: (audit_sitemap()[0] and audit_robots()[0],
                                       audit_sitemap()[1] + audit_robots()[1])),
        ("Indexing Status", audit_indexing),
        ("Meta Tags & SEO", audit_meta),
        ("Schema Markup", audit_schema),
        ("Images", audit_images),
        ("Internal Links", audit_links),
        ("Content Quality", audit_content_quality),
    ]

    total_passed = 0
    total_issues = 0

    for name, audit_func in audits:
        passed, issue_count = run_audit_group(name, audit_func)
        if passed:
            total_passed += 1
        total_issues += issue_count

    # Summary
    print(f"\n{'=' * 60}")
    print(colorize("  SUMMARY", Colors.BOLD))
    print(f"{'=' * 60}")

    if total_issues == 0:
        print(f"\n  {colorize('All audits passed!', Colors.GREEN + Colors.BOLD)}")
    else:
        passed_color = Colors.GREEN if total_passed == len(audits) else Colors.YELLOW
        print(f"\n  Audit groups passed: {colorize(f'{total_passed}/{len(audits)}', passed_color)}")
        print(f"  Total issues found: {colorize(str(total_issues), Colors.YELLOW if total_issues < 10 else Colors.RED)}")

    print(f"\n  Run individual audits with:")
    print(f"    python3 audit.py images")
    print(f"    python3 audit.py schema")
    print(f"    python3 audit.py meta")
    print(f"    python3 audit.py links")
    print()

    return total_issues == 0


def run_quick_audits():
    """Run only quick checks (no file scanning)."""
    print(f"\n{'=' * 60}")
    print(colorize(f"  {SITE_NAME} Quick Audit", Colors.BOLD + Colors.HEADER))
    print(f"{'=' * 60}")

    audits = [
        ("Sitemap", audit_sitemap),
        ("Robots.txt", audit_robots),
        ("Indexing Status", audit_indexing),
    ]

    all_passed = True
    for name, audit_func in audits:
        passed, messages = audit_func()
        print_section(name)
        print_result(passed, messages)
        if not passed:
            all_passed = False

    print()
    return all_passed


def main():
    audit_map = {
        'images': ('Images', audit_images),
        'schema': ('Schema Markup', audit_schema),
        'meta': ('Meta Tags & SEO', audit_meta),
        'links': ('Internal Links', audit_links),
        'indexing': ('Indexing Status', audit_indexing),
        'content': ('Content Quality', audit_content_quality),
        'sitemap': ('Sitemap', audit_sitemap),
        'robots': ('Robots.txt', audit_robots),
    }

    if len(sys.argv) > 1:
        command = sys.argv[1].lower()

        if command == 'quick':
            success = run_quick_audits()
            sys.exit(0 if success else 1)
        elif command in audit_map:
            name, func = audit_map[command]
            print_section(name)
            passed, messages = func()
            print_result(passed, messages)
            print()
            sys.exit(0 if passed else 1)
        else:
            print(f"Unknown audit: {command}")
            print(f"Available: {', '.join(audit_map.keys())}, quick")
            sys.exit(1)
    else:
        success = run_all_audits()
        sys.exit(0 if success else 1)


if __name__ == '__main__':
    main()
