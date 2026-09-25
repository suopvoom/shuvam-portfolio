import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const publicDir = path.resolve('public');

// Master Premium "S" Monogram SVG
const masterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Dark Charcoal Navy Gradient Base matching portfolio theme #0c0f17 -->
    <linearGradient id="bgBase" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="45%" stop-color="#0a0f1d" />
      <stop offset="100%" stop-color="#05070d" />
    </linearGradient>

    <!-- Refined Architectural Border Gradient -->
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b4f77" />
      <stop offset="35%" stop-color="#223250" />
      <stop offset="70%" stop-color="#151e30" />
      <stop offset="100%" stop-color="#0e1524" />
    </linearGradient>

    <!-- Warm Amber / Champagne Gold Metallic Gradient -->
    <linearGradient id="goldMetallic" x1="15%" y1="5%" x2="85%" y2="95%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="14%" stop-color="#fef08a" />
      <stop offset="38%" stop-color="#fbbf24" />
      <stop offset="72%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#c25e00" />
    </linearGradient>

    <!-- Subtle Premium Glow Behind S -->
    <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.28" />
      <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Squircle Base (fills canvas cleanly with 12px margin for outer curvature) -->
  <rect x="12" y="12" width="488" height="488" rx="112" fill="url(#bgBase)" stroke="url(#borderGrad)" stroke-width="14" />
  
  <!-- Ambient Gold Atmosphere -->
  <circle cx="256" cy="256" r="195" fill="url(#ambientGlow)" />

  <!-- The "S" Monogram - Perfectly Centered, Sculpted Modern Contours -->
  <path d="M 367 110 C 327 80 281 78 243 81 C 173 88 131 128 131 180 C 131 228 167 252 221 264 L 283 278 C 327 288 343 306 343 332 C 343 364 313 386 261 386 C 207 386 165 364 141 340 L 105 384 C 143 420 199 438 261 438 C 355 438 407 388 407 320 C 407 262 359 232 295 218 L 237 204 C 199 196 187 182 187 162 C 187 136 213 118 257 118 C 297 118 333 132 355 150 Z"
        fill="url(#goldMetallic)" />
</svg>`;

// Save master SVG to public/favicon.svg
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), masterSvg.trim());
console.log('Saved public/favicon.svg');

// Generate raster sizes
const sizes = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'favicon-48x48.png', size: 48 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'android-chrome-192x192.png', size: 192 },
  { file: 'android-chrome-512x512.png', size: 512 }
];

sizes.forEach(({ file, size }) => {
  const resvg = new Resvg(masterSvg, { fitTo: { mode: 'width', value: size } });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(path.join(publicDir, file), pngBuffer);
  console.log(`Saved public/${file} (${size}x${size})`);
});

// Generate site.webmanifest
const manifest = {
  name: "Shuvam Chowdhury · Portfolio",
  short_name: "Shuvam",
  description: "Personal portfolio of Shuvam Chowdhury — aspiring Software Developer and photographer.",
  icons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ],
  theme_color: "#0c0f17",
  background_color: "#0c0f17",
  display: "standalone"
};

fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
console.log('Saved public/site.webmanifest');

// Python script to create multi-resolution favicon.ico
const pythonScript = `
from PIL import Image
import os

public_dir = r"${publicDir.replace(/\\/g, '\\\\')}"
img_16 = Image.open(os.path.join(public_dir, "favicon-16x16.png"))
img_32 = Image.open(os.path.join(public_dir, "favicon-32x32.png"))
img_48 = Image.open(os.path.join(public_dir, "favicon-48x48.png"))

# Save ICO with multi-size icon directory
ico_path = os.path.join(public_dir, "favicon.ico")
img_48.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
print(f"Generated multi-size {ico_path} successfully!")
`;

fs.writeFileSync('scripts/generate-ico.py', pythonScript.trim());
execSync('python scripts/generate-ico.py', { stdio: 'inherit' });
fs.unlinkSync('scripts/generate-ico.py');

console.log('All favicon assets generated successfully!');
