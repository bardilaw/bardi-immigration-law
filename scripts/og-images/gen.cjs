#!/usr/bin/env node
/**
 * BAR-639 — Generate branded featured/OG images for bardilaw.com blog posts.
 * Builds one HTML file per post (per BAR-136 spec) with embedded fonts, then
 * renders to 1200x630 PNG via headless Chrome. Brand: navy/gold/warm-gray.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const DIR = __dirname;
const SCRATCH = path.join(DIR, '.scratch');
const FONTS = path.join(SCRATCH, 'fonts');
const OUT = path.join(SCRATCH, 'out');
const HTML = path.join(SCRATCH, 'html');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(HTML, { recursive: true });

// Brand tokens (BAR-136 spec)
const NAVY = '#1B2A4A';
const GOLD = '#C9A84C';
const WARM = '#F5F4F0';
const CHARCOAL = '#2E2E2E';

// Fetch brand fonts on first run so this generator is self-contained.
const FONT_URLS = {
  'PlayfairDisplay.ttf': 'https://github.com/google/fonts/raw/main/ofl/playfairdisplay/PlayfairDisplay%5Bwght%5D.ttf',
  'Inter.ttf': 'https://github.com/google/fonts/raw/main/ofl/inter/Inter%5Bopsz,wght%5D.ttf',
};
fs.mkdirSync(FONTS, { recursive: true });
for (const [name, url] of Object.entries(FONT_URLS)) {
  const p = path.join(FONTS, name);
  if (!fs.existsSync(p)) {
    console.log('fetching font', name);
    execFileSync('curl', ['-sL', url, '-o', p]);
  }
}

const playfair = fs.readFileSync(path.join(FONTS, 'PlayfairDisplay.ttf')).toString('base64');
const inter = fs.readFileSync(path.join(FONTS, 'Inter.ttf')).toString('base64');

// One entry per existing blog post in scope. badge = practice-area tag line.
const POSTS = [
  { file: 'og-notice-to-appear.png', slug: 'notice-to-appear-georgia',
    title: 'Notice to Appear in Immigration Court', badge: 'Removal Defense' },
  { file: 'og-daca-renewal-2025.png', slug: 'daca-renewal-2025-georgia',
    title: 'DACA Renewal in 2025', badge: 'DACA  |  Deferred Action' },
  { file: 'og-asylum-application.png', slug: 'asylum-application-georgia',
    title: 'The Asylum Application Process', badge: 'Asylum  |  Humanitarian Relief' },
  { file: 'og-family-green-card.png', slug: 'family-green-card-attorney-georgia',
    title: 'Family Green Card Attorney', badge: 'Family Immigration  |  Green Cards' },
  { file: 'og-tps-2026.png', slug: 'tps-2026',
    title: 'Temporary Protected Status in 2026', badge: 'TPS  |  Humanitarian Relief' },
  { file: 'og-mandamus-lawsuit.png', slug: 'mandamus-lawsuit-uscis-delay-georgia',
    title: 'Mandamus Lawsuits: Forcing a Decision on a Delayed Case', badge: 'Federal Litigation  |  Delays' },
];

// Title sizing per spec: scale font down as length grows.
function titleSize(t) {
  const n = t.length;
  if (n <= 40) return 50;
  if (n <= 60) return 42;
  if (n <= 80) return 34;
  return 30;
}

function html(post) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'Playfair';src:url(data:font/ttf;base64,${playfair}) format('truetype');font-weight:400 900;}
@font-face{font-family:'Inter';src:url(data:font/ttf;base64,${inter}) format('truetype');font-weight:100 900;}
*{margin:0;padding:0;box-sizing:border-box;}
html,body{width:1200px;height:630px;}
.card{position:relative;width:1200px;height:630px;background:${WARM};overflow:hidden;font-family:'Inter',sans-serif;}
.left{position:absolute;left:0;top:0;width:420px;height:630px;background:${NAVY};
  display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;}
.bar{position:absolute;left:420px;top:0;width:6px;height:630px;background:${GOLD};}
.wordmark{font-family:'Playfair';font-weight:700;color:${GOLD};font-size:30px;line-height:1.25;text-align:center;}
.domain{font-family:'Inter';font-weight:600;color:#FFFFFF;font-size:15px;margin-top:12px;letter-spacing:.04em;}
.rule{width:54px;height:2px;background:${GOLD};opacity:.55;margin-top:22px;}
.right{position:absolute;left:426px;top:0;width:774px;height:630px;
  display:flex;flex-direction:column;justify-content:center;padding:56px 52px;}
.kicker{font-family:'Inter';font-weight:700;color:${GOLD};font-size:14px;letter-spacing:.14em;
  text-transform:uppercase;margin-bottom:18px;}
.title{font-family:'Playfair';font-weight:700;color:${NAVY};font-size:${titleSize(post.title)}px;
  line-height:1.18;max-width:680px;}
.author{font-family:'Inter';font-weight:600;color:${CHARCOAL};font-size:17px;margin-top:26px;}
.badge{display:inline-block;align-self:flex-start;background:${NAVY};color:${GOLD};
  font-family:'Inter';font-weight:600;font-size:12.5px;letter-spacing:.03em;
  padding:7px 14px;border-radius:4px;margin-top:18px;}
</style></head><body>
<div class="card">
  <div class="left">
    <div class="wordmark">Bardi<br>Immigration<br>Law</div>
    <div class="domain">bardilaw.com</div>
    <div class="rule"></div>
  </div>
  <div class="bar"></div>
  <div class="right">
    <div class="kicker">Immigration Insights</div>
    <div class="title">${post.title.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</div>
    <div class="author">Eszter Bardi, Esq.</div>
    <span class="badge">${post.badge}</span>
  </div>
</div>
</body></html>`;
}

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const mapping = [];
for (const post of POSTS) {
  const hp = path.join(HTML, post.file.replace(/\.png$/, '.html'));
  const op = path.join(OUT, post.file);
  fs.writeFileSync(hp, html(post));
  execFileSync(CHROME, [
    '--headless', '--disable-gpu', '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--screenshot=' + op,
    '--window-size=1200,630',
    '--virtual-time-budget=3000',
    'file://' + hp,
  ], { stdio: 'ignore' });
  mapping.push({ file: post.file, slug: post.slug, title: post.title });
  console.log('rendered', post.file);
}
fs.writeFileSync(path.join(OUT, 'MAPPING.json'), JSON.stringify(mapping, null, 2));
console.log('done. mapping written.');
