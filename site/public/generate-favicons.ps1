# Generate multiple favicon sizes from high-res PNG
$inputFile = "gso-final-logo-2023-transparent.png"
$sizes = @(
    @{size=16; name="favicon-16x16.png"},
    @{size=32; name="favicon-32x32.png"},
    @{size=48; name="favicon-48x48.png"},
    @{size=64; name="favicon-64x64.png"},
    @{size=96; name="favicon-96x96.png"},
    @{size=128; name="favicon-128x128.png"},
    @{size=180; name="apple-touch-icon.png"},
    @{size=192; name="favicon-192x192.png"},
    @{size=512; name="favicon-512x512.png"},
    @{size=1024; name="apple-icon-1024x1024.png"}
)

Write-Host "Generating favicon sizes..." -ForegroundColor Cyan

# Try ImageMagick first
$useMagick = $false
try {
    $null = Get-Command magick -ErrorAction Stop
    $useMagick = $true
    Write-Host "Using ImageMagick" -ForegroundColor Green
} catch {
    Write-Host "ImageMagick not found, trying Python PIL..." -ForegroundColor Yellow
}

if ($useMagick) {
    foreach ($item in $sizes) {
        $size = $item.size
        $name = $item.name
        Write-Host "Creating $name ($size x $size)..." -ForegroundColor Yellow
        & magick convert "$inputFile" -resize "${size}x${size}" "$name" 2>&1 | Out-Null
        if (Test-Path $name) {
            $fileSize = [math]::Round((Get-Item $name).Length / 1KB, 2)
            Write-Host "  ✓ Created $name ($fileSize KB)" -ForegroundColor Green
        }
    }
} else {
    # Try Python with PIL/Pillow
    $pythonScript = @"
import sys
from PIL import Image
import os

input_file = "$inputFile"
sizes = [
    (16, "favicon-16x16.png"),
    (32, "favicon-32x32.png"),
    (48, "favicon-48x48.png"),
    (64, "favicon-64x64.png"),
    (96, "favicon-96x96.png"),
    (128, "favicon-128x128.png"),
    (180, "apple-touch-icon.png"),
    (192, "favicon-192x192.png"),
    (512, "favicon-512x512.png"),
    (1024, "apple-icon-1024x1024.png")
]

try:
    img = Image.open(input_file)
    for size, name in sizes:
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        resized.save(name, "PNG", optimize=True)
        file_size = os.path.getsize(name) / 1024
        print(f"  ✓ Created {name} ({file_size:.2f} KB)")
    print("\\nAll favicons generated successfully!")
except ImportError:
    print("ERROR: PIL/Pillow not installed. Install with: pip install Pillow")
    sys.exit(1)
except Exception as e:
    print(f"ERROR: {e}")
    sys.exit(1)
"@
    
    $pythonScript | Out-File -FilePath "temp_generate.py" -Encoding utf8
    python temp_generate.py
    Remove-Item temp_generate.py -ErrorAction SilentlyContinue
}

Write-Host "`nDone! Generated favicon files:" -ForegroundColor Cyan
Get-ChildItem favicon-*.png, apple-*.png -ErrorAction SilentlyContinue | 
    Select-Object Name, @{Name='Size(KB)';Expression={[math]::Round($_.Length/1KB,2)}} | 
    Format-Table -AutoSize

