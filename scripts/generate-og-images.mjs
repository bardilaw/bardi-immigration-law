// Generate per-post Open Graph / social-share images (BAR-639).
//
// Produces one branded 1200x630 PNG per blog post — English titles into
// public/og/<slug>.png and Spanish titles into public/og/es/<slug>.png — plus a
// generated manifest (src/content/blog/ogImages.ts) listing which slugs have an
// image so generateMetadata can reference them and fall back to /og-image.png.
//
// This is a LOCAL, run-on-demand generator, intentionally NOT wired into the
// build (`prebuild`) chain: it rasterizes text with the host's system fonts via
// sharp, so it must run on a developer machine, not in Cloudflare CI. The PNGs it
// emits are committed as plain static assets, which Cloudflare serves with zero
// runtime/font dependency. Re-run after adding or retitling posts:
//
//   node scripts/generate-og-images.mjs
//
// Brand: Navy #1B2A4A background with a Gold #C9A84C accent and the reversed
// (white) logo mark. Navy-on-background is reserved for isolated dark surfaces in
// BRAND-IDENTITY.md; social cards are exactly that context, and the ticket calls
// for the dark navy + gold treatment.

import sharp from 'sharp';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

const NAVY = '#1B2A4A';
const NAVY_DARK = '#141F38';
const GOLD = '#C9A84C';
const WHITE = '#FFFFFF';
const MUTED = '#B9C2D4';

const W = 1200;
const H = 630;
const MARGIN = 80;
const CONTENT_W = W - MARGIN * 2; // 1040
const FONT = 'Helvetica Neue, Helvetica, Arial, sans-serif';

// Approximate bold-sans average glyph advance as a fraction of font size. Tuned
// to slightly over-estimate so wrapped lines never overflow the content box.
const ADVANCE = 0.56;

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Greedy word-wrap using estimated pixel width for a given font size.
function wrap(text, fontSize, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  const widthOf = (str) => str.length * fontSize * ADVANCE;
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (widthOf(candidate) > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// Pick the largest font size that wraps the title into a tidy number of lines.
function layoutHeadline(title) {
  const tiers = [68, 60, 54, 48, 44];
  for (const size of tiers) {
    const lines = wrap(title, size, CONTENT_W);
    if (lines.length <= 4) return { size, lines };
  }
  const size = tiers[tiers.length - 1];
  return { size, lines: wrap(title, size, CONTENT_W).slice(0, 5) };
}

function buildSvg(title, tagline, subline) {
  const { size, lines } = layoutHeadline(title);
  const lineHeight = Math.round(size * 1.16);
  const blockHeight = lines.length * lineHeight;
  // Vertically center the headline block in the area below the logo/top rule.
  const blockTop = Math.round((H - blockHeight) / 2) + 10;
  const baseline = blockTop + size; // first line baseline

  const headline = lines
    .map(
      (ln, i) =>
        `<text x="${MARGIN}" y="${baseline + i * lineHeight}" font-family="${FONT}" font-size="${size}" font-weight="700" fill="${WHITE}">${escapeXml(
          ln,
        )}</text>`,
    )
    .join('\n    ');

  const underlineY = baseline + (lines.length - 1) * lineHeight + 34;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${NAVY}"/>
      <stop offset="100%" stop-color="${NAVY_DARK}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="${W}" height="10" fill="${GOLD}"/>
  <text x="${MARGIN}" y="120" font-family="${FONT}" font-size="26" font-weight="700" letter-spacing="4" fill="${GOLD}">${escapeXml(
    tagline,
  )}</text>
  ${headline}
  <rect x="${MARGIN}" y="${underlineY}" width="150" height="8" fill="${GOLD}"/>
  <text x="${MARGIN}" y="${H - 56}" font-family="${FONT}" font-size="30" font-weight="700" letter-spacing="3" fill="${WHITE}">BARDI IMMIGRATION LAW</text>
  <text x="${MARGIN}" y="${H - 26}" font-family="${FONT}" font-size="20" font-weight="400" letter-spacing="1" fill="${MUTED}">${escapeXml(
    subline,
  )}</text>
</svg>`;
}

async function render(title, tagline, subline, logo, outPath) {
  const svg = buildSvg(title, tagline, subline);
  const base = sharp(Buffer.from(svg));
  const composited = logo
    ? base.composite([{ input: logo.buffer, top: 60, left: W - MARGIN - logo.width }])
    : base;
  await composited.png().toFile(outPath);
}

async function main() {
  const meta = await import('../src/content/blog/meta.ts');
  const { BLOG_POSTS, ES_BLOG_META } = meta;

  // Reversed (white) logo mark, scaled to a fixed height for the top-right corner.
  const LOGO_H = 92;
  const rawLogo = await readFile(join(PUBLIC, 'logo-bardi-mark-white.png'));
  const resized = await sharp(rawLogo).resize({ height: LOGO_H }).png().toBuffer();
  const logoMeta = await sharp(resized).metadata();
  const logo = { buffer: resized, width: logoMeta.width, height: logoMeta.height };

  await mkdir(join(PUBLIC, 'og'), { recursive: true });
  await mkdir(join(PUBLIC, 'og', 'es'), { recursive: true });

  const enSlugs = [];
  for (const post of BLOG_POSTS) {
    await render(
      post.title,
      'IMMIGRATION LAW GUIDE',
      'Georgia & Alabama Immigration Attorney · bardilaw.com',
      logo,
      join(PUBLIC, 'og', `${post.slug}.png`),
    );
    enSlugs.push(post.slug);
  }

  const esSlugs = [];
  for (const [slug, esMeta] of Object.entries(ES_BLOG_META)) {
    await render(
      esMeta.title,
      'GUÍA DE INMIGRACIÓN',
      'Abogada de Inmigración en Georgia y Alabama · bardilaw.com',
      logo,
      join(PUBLIC, 'og', 'es', `${slug}.png`),
    );
    esSlugs.push(slug);
  }

  enSlugs.sort();
  esSlugs.sort();

  const manifest = `// AUTO-GENERATED by scripts/generate-og-images.mjs — do not edit by hand.
// Lists blog slugs that have a committed per-post OG image under public/og/.
// generateMetadata uses these sets to pick /og/<slug>.png (or /og/es/<slug>.png)
// and fall back to /og-image.png for any slug not yet generated.

export const OG_IMAGE_SLUGS_EN = new Set<string>([
${enSlugs.map((s) => `  '${s}',`).join('\n')}
]);

export const OG_IMAGE_SLUGS_ES = new Set<string>([
${esSlugs.map((s) => `  '${s}',`).join('\n')}
]);

export function ogImageFor(slug: string, locale: 'en' | 'es'): string {
  if (locale === 'es' && OG_IMAGE_SLUGS_ES.has(slug)) return \`/og/es/\${slug}.png\`;
  if (OG_IMAGE_SLUGS_EN.has(slug)) return \`/og/\${slug}.png\`;
  return '/og-image.png';
}
`;
  await writeFile(join(ROOT, 'src', 'content', 'blog', 'ogImages.ts'), manifest);

  console.log(`Generated ${enSlugs.length} EN + ${esSlugs.length} ES OG images and ogImages.ts manifest.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
