#!/usr/bin/env python3
"""
COS Celebrations Review Viewer
View all saved reviews with filtering options
"""

import json
import os
import sys

REVIEWS_FILE = os.path.join(os.path.dirname(__file__), '..', 'reviews', 'reviews.json')

def load_reviews():
    with open(REVIEWS_FILE, 'r') as f:
        return json.load(f)

def main():
    data = load_reviews()

    # Check for filter argument
    platform_filter = None
    if len(sys.argv) > 1:
        arg = sys.argv[1].lower()
        if arg in ['google', 'weddingwire', 'theknot', 'zola']:
            platform_filter = arg
        elif arg == '--stats':
            print_stats(data)
            return
        elif arg == '--help':
            print("\nUsage: python3 view-reviews.py [option]")
            print("\nOptions:")
            print("  (none)       Show all reviews")
            print("  google       Show only Google reviews")
            print("  weddingwire  Show only WeddingWire reviews")
            print("  theknot      Show only The Knot reviews")
            print("  zola         Show only Zola reviews")
            print("  --stats      Show statistics only")
            print("  --help       Show this help")
            return

    print("\n" + "="*60)
    print("  COS CELEBRATIONS REVIEWS")
    print("="*60)

    print_stats(data)

    reviews = data['reviews']
    if platform_filter:
        reviews = [r for r in reviews if r['platform'] == platform_filter]
        print(f"\nFiltered by: {platform_filter.title()}")

    if not reviews:
        print("\nNo reviews found.")
        return

    print("\n" + "-"*60)

    for r in sorted(reviews, key=lambda x: x['date'], reverse=True):
        print(f"\n[{r['id']}] {r['reviewerName']} - {r['platform'].title()}")
        print(f"    {'★' * r['rating']}{'☆' * (5 - r['rating'])}  |  {r['date']}")
        if r.get('venue'):
            print(f"    Venue: {r['venue']}")
        # Wrap text at 55 chars
        text = r['text']
        words = text.split()
        lines = []
        current_line = []
        current_len = 0
        for word in words:
            if current_len + len(word) + 1 > 55:
                lines.append(' '.join(current_line))
                current_line = [word]
                current_len = len(word)
            else:
                current_line.append(word)
                current_len += len(word) + 1
        if current_line:
            lines.append(' '.join(current_line))
        for line in lines[:4]:  # Show first 4 lines
            print(f"    {line}")
        if len(lines) > 4:
            print(f"    ... [{len(lines) - 4} more lines]")
        print()

def print_stats(data):
    m = data['metadata']
    print(f"\nTotal Reviews: {m['totalReviews']}")
    print(f"  Google:      {m['platforms']['google']}")
    print(f"  WeddingWire: {m['platforms']['weddingwire']}")
    print(f"  The Knot:    {m['platforms']['theknot']}")
    print(f"  Zola:        {m['platforms']['zola']}")
    print(f"\nLast Updated: {m['lastUpdated']}")

if __name__ == '__main__':
    main()
