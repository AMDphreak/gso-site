# Favicon Generation

To generate all favicon sizes, run:

```bash
cd site/public
python generate_favicons.py
```

Or install Pillow first if needed:

```bash
pip install Pillow
```

This will create:

- favicon-16x16.png through favicon-512x512.png
- apple-touch-icon.png (180x180)
- apple-icon-1024x1024.png

The HTML layout already references all these sizes.
