#!/usr/bin/env python3
"""
Smart Photo Tool for COS Celebrations
======================================
Processes photos with face detection, smart cropping, and responsive sizing.

Features:
- Face detection to avoid cutting off faces
- Smart cropping to various aspect ratios
- Generates responsive sizes (400px, 800px, 1200px)
- Outputs optimized WebP format
- SEO-friendly filename generation

Usage:
    python3 smart-photo.py <input_image> [options]
    python3 smart-photo.py <input_folder> --batch [options]

Examples:
    python3 smart-photo.py photo.jpg --output ./processed/
    python3 smart-photo.py photo.jpg --aspect 1:1 --output ./instagram/
    python3 smart-photo.py ./raw-photos/ --batch --output ./processed/
"""

import os
import sys
import argparse
from pathlib import Path
from typing import Tuple, List, Optional
import cv2
import numpy as np
from PIL import Image

# Responsive sizes to generate
RESPONSIVE_SIZES = [400, 800, 1200]

# Aspect ratio presets
ASPECT_PRESETS = {
    'square': (1, 1),       # Instagram posts
    '4:5': (4, 5),          # Instagram portrait
    '16:9': (16, 9),        # Hero images, YouTube
    '3:2': (3, 2),          # Standard photo
    '2:3': (2, 3),          # Portrait
    'original': None,       # Keep original aspect ratio
}

# WebP quality (0-100)
WEBP_QUALITY = 85


class FaceDetector:
    """Handles face detection using OpenCV's Haar cascades."""

    def __init__(self):
        # Load the pre-trained face detection model
        cascade_path = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
        self.face_cascade = cv2.CascadeClassifier(cascade_path)

        # Also load profile face detector for side views
        profile_path = cv2.data.haarcascades + 'haarcascade_profileface.xml'
        self.profile_cascade = cv2.CascadeClassifier(profile_path)

    def detect_faces(self, image: np.ndarray) -> List[Tuple[int, int, int, int]]:
        """
        Detect faces in an image.
        Returns list of (x, y, width, height) tuples for each face.
        """
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        # Detect frontal faces
        faces = self.face_cascade.detectMultiScale(
            gray,
            scaleFactor=1.1,
            minNeighbors=5,
            minSize=(30, 30)
        )

        # Also detect profile faces
        profiles = self.profile_cascade.detectMultiScale(
            gray,
            scaleFactor=1.1,
            minNeighbors=5,
            minSize=(30, 30)
        )

        # Combine results
        all_faces = list(faces) if len(faces) > 0 else []
        if len(profiles) > 0:
            all_faces.extend(list(profiles))

        return all_faces

    def get_faces_region(self, faces: List[Tuple[int, int, int, int]],
                         img_width: int, img_height: int,
                         padding: float = 0.2) -> Optional[Tuple[int, int, int, int]]:
        """
        Get bounding box that contains all faces with padding.
        Returns (x, y, width, height) or None if no faces.
        """
        if not faces:
            return None

        # Find bounding box of all faces
        min_x = min(f[0] for f in faces)
        min_y = min(f[1] for f in faces)
        max_x = max(f[0] + f[2] for f in faces)
        max_y = max(f[1] + f[3] for f in faces)

        # Add padding (especially above faces for headroom)
        width = max_x - min_x
        height = max_y - min_y

        pad_x = int(width * padding)
        pad_y_top = int(height * padding * 1.5)  # More padding above for hair
        pad_y_bottom = int(height * padding * 0.5)

        min_x = max(0, min_x - pad_x)
        min_y = max(0, min_y - pad_y_top)
        max_x = min(img_width, max_x + pad_x)
        max_y = min(img_height, max_y + pad_y_bottom)

        return (min_x, min_y, max_x - min_x, max_y - min_y)


class SmartCropper:
    """Handles intelligent cropping based on face positions and image content."""

    def __init__(self):
        self.face_detector = FaceDetector()

    def find_focus_point(self, image: np.ndarray,
                         faces: List[Tuple[int, int, int, int]]) -> Tuple[float, float]:
        """
        Find the focal point of the image (0-1 range for x and y).
        Prioritizes faces, falls back to center-weighted.
        """
        height, width = image.shape[:2]

        if faces:
            # Use center of all faces as focus point
            face_centers = [(f[0] + f[2]/2, f[1] + f[3]/2) for f in faces]
            focus_x = sum(c[0] for c in face_centers) / len(face_centers)
            focus_y = sum(c[1] for c in face_centers) / len(face_centers)
            return (focus_x / width, focus_y / height)

        # Fall back to rule of thirds (slight upper center)
        return (0.5, 0.4)

    def smart_crop(self, image: np.ndarray,
                   target_aspect: Tuple[int, int],
                   faces: List[Tuple[int, int, int, int]] = None) -> np.ndarray:
        """
        Crop image to target aspect ratio while preserving faces.
        """
        height, width = image.shape[:2]
        target_ratio = target_aspect[0] / target_aspect[1]
        current_ratio = width / height

        if faces is None:
            faces = self.face_detector.detect_faces(image)

        focus_x, focus_y = self.find_focus_point(image, faces)

        if abs(current_ratio - target_ratio) < 0.01:
            # Already correct aspect ratio
            return image

        if current_ratio > target_ratio:
            # Image is wider than target - crop sides
            new_width = int(height * target_ratio)
            new_height = height
        else:
            # Image is taller than target - crop top/bottom
            new_width = width
            new_height = int(width / target_ratio)

        # Calculate crop position based on focus point
        if new_width < width:
            # Horizontal crop
            ideal_left = int(focus_x * width - new_width / 2)
            left = max(0, min(width - new_width, ideal_left))
            top = 0
        else:
            # Vertical crop
            ideal_top = int(focus_y * height - new_height / 2)
            top = max(0, min(height - new_height, ideal_top))
            left = 0

        # Ensure faces aren't cut off
        if faces:
            faces_region = self.face_detector.get_faces_region(faces, width, height)
            if faces_region:
                fx, fy, fw, fh = faces_region

                # Adjust crop to include all faces
                if new_width < width:
                    # Ensure faces are within horizontal crop
                    if left > fx:
                        left = max(0, fx)
                    if left + new_width < fx + fw:
                        left = min(width - new_width, fx + fw - new_width + int(fw * 0.1))
                else:
                    # Ensure faces are within vertical crop
                    if top > fy:
                        top = max(0, fy)
                    if top + new_height < fy + fh:
                        top = min(height - new_height, fy + fh - new_height + int(fh * 0.1))

        # Perform the crop
        cropped = image[top:top+new_height, left:left+new_width]
        return cropped


class PhotoProcessor:
    """Main class for processing photos."""

    def __init__(self, output_dir: str = None):
        self.cropper = SmartCropper()
        self.output_dir = Path(output_dir) if output_dir else Path.cwd()
        self.output_dir.mkdir(parents=True, exist_ok=True)

    def generate_filename(self, original_name: str, size: int = None,
                          aspect: str = None) -> str:
        """Generate SEO-friendly filename."""
        # Clean up the original name
        stem = Path(original_name).stem.lower()
        stem = stem.replace(' ', '-').replace('_', '-')

        # Remove common camera prefixes
        for prefix in ['img-', 'dsc-', 'photo-', 'image-']:
            if stem.startswith(prefix):
                stem = stem[len(prefix):]

        # Build new filename
        parts = [stem]
        if aspect and aspect != 'original':
            parts.append(aspect.replace(':', 'x'))
        if size:
            parts.append(f'{size}w')

        return '-'.join(parts) + '.webp'

    def process_image(self, input_path: str,
                      aspect: str = 'original',
                      sizes: List[int] = None,
                      prefix: str = None) -> List[str]:
        """
        Process a single image.
        Returns list of output file paths.
        """
        if sizes is None:
            sizes = RESPONSIVE_SIZES

        input_path = Path(input_path)
        if not input_path.exists():
            raise FileNotFoundError(f"Image not found: {input_path}")

        # Load image with OpenCV for face detection
        cv_image = cv2.imread(str(input_path))
        if cv_image is None:
            raise ValueError(f"Could not read image: {input_path}")

        # Detect faces once
        faces = self.cropper.face_detector.detect_faces(cv_image)
        num_faces = len(faces)

        # Get target aspect ratio
        target_aspect = ASPECT_PRESETS.get(aspect)
        if target_aspect is None and aspect != 'original':
            # Parse custom aspect ratio (e.g., "4:3")
            try:
                w, h = aspect.split(':')
                target_aspect = (int(w), int(h))
            except:
                print(f"Invalid aspect ratio: {aspect}, using original")
                target_aspect = None

        # Apply smart crop if aspect ratio specified
        if target_aspect:
            cv_image = self.cropper.smart_crop(cv_image, target_aspect, faces)

        # Convert to PIL for resizing and saving
        rgb_image = cv2.cvtColor(cv_image, cv2.COLOR_BGR2RGB)
        pil_image = Image.fromarray(rgb_image)

        output_files = []
        base_name = prefix if prefix else input_path.stem

        # Generate responsive sizes
        orig_width, orig_height = pil_image.size

        for size in sizes:
            if size >= orig_width:
                # Don't upscale - use original size for this breakpoint
                if size == max(sizes):
                    resized = pil_image
                else:
                    continue
            else:
                # Calculate new dimensions maintaining aspect ratio
                ratio = size / orig_width
                new_height = int(orig_height * ratio)
                resized = pil_image.resize((size, new_height), Image.Resampling.LANCZOS)

            # Generate filename
            filename = self.generate_filename(base_name, size, aspect)
            output_path = self.output_dir / filename

            # Save as WebP
            resized.save(output_path, 'WEBP', quality=WEBP_QUALITY)
            output_files.append(str(output_path))

        return output_files, num_faces

    def process_batch(self, input_dir: str, **kwargs) -> dict:
        """Process all images in a directory."""
        input_dir = Path(input_dir)
        if not input_dir.is_dir():
            raise NotADirectoryError(f"Not a directory: {input_dir}")

        results = {
            'processed': [],
            'failed': [],
            'total_faces': 0
        }

        # Supported image formats
        extensions = {'.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff'}

        for img_path in input_dir.iterdir():
            if img_path.suffix.lower() in extensions:
                try:
                    files, faces = self.process_image(str(img_path), **kwargs)
                    results['processed'].append({
                        'input': str(img_path),
                        'outputs': files,
                        'faces_detected': faces
                    })
                    results['total_faces'] += faces
                    print(f"✓ {img_path.name} ({faces} faces) → {len(files)} files")
                except Exception as e:
                    results['failed'].append({
                        'input': str(img_path),
                        'error': str(e)
                    })
                    print(f"✗ {img_path.name}: {e}")

        return results


def generate_srcset_html(files: List[str], alt: str = "") -> str:
    """Generate HTML srcset markup for responsive images."""
    if not files:
        return ""

    # Sort by size (extract width from filename)
    def get_width(f):
        name = Path(f).stem
        for part in name.split('-'):
            if part.endswith('w'):
                try:
                    return int(part[:-1])
                except:
                    pass
        return 0

    files = sorted(files, key=get_width)

    # Build srcset
    srcset_parts = []
    for f in files:
        w = get_width(f)
        if w:
            srcset_parts.append(f"{Path(f).name} {w}w")

    if not srcset_parts:
        return f'<img src="{Path(files[0]).name}" alt="{alt}" loading="lazy">'

    # Use middle size as default src
    default_src = files[len(files)//2] if files else files[0]

    html = f'''<img src="{Path(default_src).name}"
     srcset="{', '.join(srcset_parts)}"
     sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
     alt="{alt}"
     loading="lazy">'''

    return html


def main():
    parser = argparse.ArgumentParser(
        description='Smart Photo Tool - Face-aware cropping and responsive sizing',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s photo.jpg                     # Process with defaults
  %(prog)s photo.jpg --aspect square     # Crop to square for Instagram
  %(prog)s photo.jpg --aspect 16:9       # Crop to 16:9 for hero image
  %(prog)s ./photos/ --batch             # Process entire folder
  %(prog)s photo.jpg --sizes 600 1200    # Custom responsive sizes

Aspect Presets:
  square   1:1   Instagram posts
  4:5      4:5   Instagram portrait
  16:9    16:9   Hero images, YouTube thumbnails
  3:2      3:2   Standard photo ratio
  2:3      2:3   Portrait orientation
  original       Keep original aspect ratio
        """
    )

    parser.add_argument('input', help='Input image or directory')
    parser.add_argument('--output', '-o', default='./processed',
                        help='Output directory (default: ./processed)')
    parser.add_argument('--aspect', '-a', default='original',
                        help='Target aspect ratio (e.g., square, 16:9, 4:3)')
    parser.add_argument('--sizes', '-s', nargs='+', type=int,
                        default=RESPONSIVE_SIZES,
                        help=f'Responsive sizes to generate (default: {RESPONSIVE_SIZES})')
    parser.add_argument('--batch', '-b', action='store_true',
                        help='Process all images in directory')
    parser.add_argument('--prefix', '-p',
                        help='Output filename prefix (overrides auto-naming)')
    parser.add_argument('--html', action='store_true',
                        help='Output HTML srcset markup')

    args = parser.parse_args()

    processor = PhotoProcessor(output_dir=args.output)

    print(f"\n{'='*60}")
    print("SMART PHOTO TOOL - COS Celebrations")
    print(f"{'='*60}")
    print(f"Output: {args.output}")
    print(f"Aspect: {args.aspect}")
    print(f"Sizes:  {args.sizes}")
    print(f"{'='*60}\n")

    try:
        if args.batch:
            results = processor.process_batch(
                args.input,
                aspect=args.aspect,
                sizes=args.sizes,
                prefix=args.prefix
            )

            print(f"\n{'='*60}")
            print(f"BATCH COMPLETE")
            print(f"{'='*60}")
            print(f"Processed: {len(results['processed'])} images")
            print(f"Failed:    {len(results['failed'])} images")
            print(f"Faces:     {results['total_faces']} detected")

            if results['failed']:
                print(f"\nFailed files:")
                for fail in results['failed']:
                    print(f"  - {fail['input']}: {fail['error']}")
        else:
            files, faces = processor.process_image(
                args.input,
                aspect=args.aspect,
                sizes=args.sizes,
                prefix=args.prefix
            )

            print(f"\n{'='*60}")
            print(f"PROCESSING COMPLETE")
            print(f"{'='*60}")
            print(f"Faces detected: {faces}")
            print(f"Files created:")
            for f in files:
                size = os.path.getsize(f)
                print(f"  - {Path(f).name} ({size/1024:.1f} KB)")

            if args.html:
                print(f"\nHTML srcset markup:")
                print("-" * 40)
                print(generate_srcset_html(files, alt="Wedding photo"))

    except Exception as e:
        print(f"\nError: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
