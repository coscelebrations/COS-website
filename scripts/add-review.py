#!/usr/bin/env python3
"""
COS Celebrations Review Manager
Add reviews from Google, WeddingWire, The Knot, and Zola
"""

import json
import os
from datetime import datetime
from difflib import SequenceMatcher

REVIEWS_FILE = os.path.join(os.path.dirname(__file__), '..', 'reviews', 'reviews.json')
PLATFORMS = ['google', 'weddingwire', 'theknot', 'zola']

def load_reviews():
    """Load existing reviews from JSON file."""
    with open(REVIEWS_FILE, 'r') as f:
        return json.load(f)

def save_reviews(data):
    """Save reviews to JSON file."""
    with open(REVIEWS_FILE, 'w') as f:
        json.dump(data, f, indent=2)

def text_similarity(text1, text2):
    """Calculate similarity ratio between two texts."""
    return SequenceMatcher(None, text1.lower(), text2.lower()).ratio()

def find_duplicates(data, reviewer_name, review_text):
    """Check for potential duplicate reviews."""
    duplicates = []
    reviewer_name_lower = reviewer_name.lower()

    for review in data['reviews']:
        name_match = reviewer_name_lower in review['reviewerName'].lower() or \
                     review['reviewerName'].lower() in reviewer_name_lower

        text_sim = text_similarity(review_text, review['text'])

        # Flag if same name OR very similar text (>70%)
        if name_match or text_sim > 0.7:
            duplicates.append({
                'review': review,
                'nameMatch': name_match,
                'textSimilarity': f"{text_sim:.0%}"
            })

    return duplicates

def get_multiline_input(prompt):
    """Get multiline input from user. Empty line to finish."""
    print(prompt)
    print("(Paste the review, then press Enter twice to finish)")
    lines = []
    empty_count = 0
    while True:
        line = input()
        if line == '':
            empty_count += 1
            if empty_count >= 1:
                break
        else:
            empty_count = 0
            lines.append(line)
    return '\n'.join(lines).strip()

def main():
    print("\n" + "="*50)
    print("  COS Celebrations Review Manager")
    print("="*50 + "\n")

    # Load existing data
    data = load_reviews()

    # Platform selection
    print("Platform:")
    for i, p in enumerate(PLATFORMS, 1):
        print(f"  {i}. {p.title()}")

    while True:
        choice = input("\nSelect platform (1-4): ").strip()
        if choice in ['1', '2', '3', '4']:
            platform = PLATFORMS[int(choice) - 1]
            break
        print("Invalid choice. Enter 1-4.")

    # Reviewer name
    reviewer_name = input("\nReviewer name: ").strip()
    if not reviewer_name:
        print("Name is required. Exiting.")
        return

    # Rating
    while True:
        rating_input = input("\nRating (1-5): ").strip()
        try:
            rating = int(rating_input)
            if 1 <= rating <= 5:
                break
        except ValueError:
            pass
        print("Invalid rating. Enter 1-5.")

    # Date
    date_input = input(f"\nDate (YYYY-MM-DD, or Enter for today): ").strip()
    if date_input:
        try:
            datetime.strptime(date_input, '%Y-%m-%d')
            review_date = date_input
        except ValueError:
            print("Invalid date format. Using today.")
            review_date = datetime.now().strftime('%Y-%m-%d')
    else:
        review_date = datetime.now().strftime('%Y-%m-%d')

    # Venue (optional)
    venue = input("\nVenue name (optional, press Enter to skip): ").strip()

    # Review text
    review_text = get_multiline_input("\nReview text:")
    if not review_text:
        print("Review text is required. Exiting.")
        return

    # Check for duplicates
    duplicates = find_duplicates(data, reviewer_name, review_text)

    if duplicates:
        print("\n" + "!"*50)
        print("  POTENTIAL DUPLICATES FOUND")
        print("!"*50)
        for d in duplicates:
            r = d['review']
            print(f"\n  Platform: {r['platform'].title()}")
            print(f"  Name: {r['reviewerName']}")
            print(f"  Date: {r['date']}")
            match_reason = 'Same reviewer name' if d['nameMatch'] else f"Text {d['textSimilarity']} similar"
            print(f"  Match reason: {match_reason}")
            print(f"  Preview: {r['text'][:100]}...")

        confirm = input("\nSave anyway? (y/n): ").strip().lower()
        if confirm != 'y':
            print("Review not saved.")
            return

    # Create review object
    review = {
        'id': len(data['reviews']) + 1,
        'platform': platform,
        'reviewerName': reviewer_name,
        'rating': rating,
        'date': review_date,
        'text': review_text,
        'venue': venue if venue else None,
        'addedAt': datetime.now().isoformat()
    }

    # Add to data
    data['reviews'].append(review)
    data['metadata']['totalReviews'] = len(data['reviews'])
    data['metadata']['platforms'][platform] += 1
    data['metadata']['lastUpdated'] = datetime.now().strftime('%Y-%m-%d')

    # Save
    save_reviews(data)

    print("\n" + "="*50)
    print("  REVIEW SAVED!")
    print("="*50)
    print(f"\n  ID: {review['id']}")
    print(f"  Platform: {platform.title()}")
    print(f"  Reviewer: {reviewer_name}")
    print(f"  Rating: {'★' * rating}{'☆' * (5-rating)}")
    print(f"  Date: {review_date}")
    if venue:
        print(f"  Venue: {venue}")
    print(f"\n  Total reviews: {data['metadata']['totalReviews']}")
    print(f"  Google: {data['metadata']['platforms']['google']}")
    print(f"  WeddingWire: {data['metadata']['platforms']['weddingwire']}")
    print(f"  The Knot: {data['metadata']['platforms']['theknot']}")
    print(f"  Zola: {data['metadata']['platforms']['zola']}")
    print()

if __name__ == '__main__':
    main()
