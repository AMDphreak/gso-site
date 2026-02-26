#!/usr/bin/env python3
"""
Generate multiple favicon sizes from high-res PNG
"""
import sys
from PIL import Image
import os

input_file = "gso-final-logo-2023-transparent.png"

sizes = [
    (16, "favicon-16x16.png"),
    (32, "favicon-32x32.png"),
    (48, "favicon-48x48.png"),
    (64, "favicon-64x64.png"),
    (96, "favicon-96x96.png"),
    (128, "favicon-128x128.png"),
    (180, "apple-touch-icon.png"),  # Apple Touch Icon for iOS
    (192, "favicon-192x192.png"),    # Android/PWA
    (512, "favicon-512x512.png"),    # PWA
    (1024, "apple-icon-1024x1024.png")  # Apple App Store icon
]

if not os.path.exists(input_file):
    print(f"ERROR: {input_file} not found!")
    sys.exit(1)

try:
    img = Image.open(input_file)
    print(f"Generating favicon sizes from {input_file}...")
    print()
    
    for size, name in sizes:
        # Use BICUBIC for sharper results when downsampling
        # LANCZOS is smoother but can be too soft for small favicons
        # BICUBIC provides better sharpness for downsampled images
        resized = img.resize((size, size), Image.Resampling.BICUBIC)
        
        # Optional: Apply slight sharpening for extra crispness on small sizes
        if size <= 64:
            from PIL import ImageFilter
            resized = resized.filter(ImageFilter.UnsharpMask(radius=1, percent=150, threshold=3))
        
        resized.save(name, "PNG", optimize=False)  # optimize=False preserves quality
        file_size = os.path.getsize(name) / 1024
        print(f"  ✓ Created {name} ({file_size:.2f} KB)")
    
    print()
    print("All favicons generated successfully!")
    
except ImportError:
    print("ERROR: PIL/Pillow not installed.")
    print("Install with: pip install Pillow")
    sys.exit(1)
except Exception as e:
    print(f"ERROR: {e}")
    sys.exit(1)

