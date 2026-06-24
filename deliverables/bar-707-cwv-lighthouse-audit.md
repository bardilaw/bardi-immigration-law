# BAR-707 — Core Web Vitals & Lighthouse Audit

**Audited:** 2026-06-22  
**Tool:** Lighthouse CLI 13.3.0 (headless Chrome)  
**Target:** https://bardi-immigration-law.pages.dev (password-gated preview)  
**Throttling:** Mobile = simulated 4G + 4× CPU slowdown; Desktop = no throttling

---

## Scores Summary

### Mobile

| Page | Score | FCP | LCP | CLS | TBT | SI |
|------|------:|-----|-----|-----|-----|----|
| Homepage (/) | **90** | 0.94s ✓ | 3.42s ⚠️ | 0.000 ✓ | 1ms ✓ | 3.54s |
| Blog (/blog/daca-renewal-2025-georgia) | **94** | 1.09s ✓ | 3.02s ⚠️ | 0.000 ✓ | 0ms ✓ | 2.40s |
| Service (/services/removal-defense) | **95** | 0.97s ✓ | 2.91s ⚠️ | 0.000 ✓ | 0ms ✓ | 2.30s |
| Contact (/contact) | **97** | 1.18s ✓ | 2.52s ⚠️ | 0.000 ✓ | 16ms ✓ | 2.98s |

### Desktop

| Page | Score | FCP | LCP | CLS | TBT | SI |
|------|------:|-----|-----|-----|-----|----|
| Homepage (/) | **99** | 0.29s ✓ | 0.73s ✓ | 0.000 ✓ | 0ms ✓ | 1.00s |
| Blog (/blog/daca-renewal-2025-georgia) | **100** | 0.30s ✓ | 0.70s ✓ | 0.000 ✓ | 0ms ✓ | 0.30s |
| Service (/services/removal-defense) | **100** | 0.28s ✓ | 0.46s ✓ | 0.000 ✓ | 0ms ✓ | 0.51s |
| Contact (/contact) | **100** | 0.29s ✓ | 0.54s ✓ | 0.000 ✓ | 0ms ✓ | 0.80s |

**Targets:** FCP < 1.8s ✓ | LCP < 2.5s (⚠️ mobile) | CLS < 0.1 ✓ | Score ≥ 80 ✓

---

## Acceptance Criteria Status

- [x] Lighthouse scores captured for all 4 pages (mobile + desktop)
- [x] Any score below 70 flagged — **none found**; lowest is Homepage mobile at 90
- [x] CLS issues from Cal.com embed or hero image identified — **CLS = 0 on all pages**, no layout shift
- [x] Report comment posted to BAR-707 with scores table
- [x] Critical issues (< 50 score) escalated — **none found**

---

## Findings

### F1 — Mobile LCP Above 2.5s Target (All 4 Pages)
**Root cause:** Hero headshot (`/headshot-eszter-hero.jpg`) is the LCP element on homepage. It is discoverable in the initial HTML and not lazy-loaded, but missing `fetchpriority="high"`, so the browser doesn't prioritize its fetch. On blog/service pages the LCP element is a text heading, but TTFB (250ms) + render-blocking CSS (110ms) together push LCP over 2.5s under simulated 4G.

**Impact:** Google PageSpeed Insights on real user connections will likely show "Needs Improvement" (orange) for LCP on mobile until fixed.

**Fix estimate:** 30–60 min engineer time.
- Add `fetchpriority="high"` to the hero `<img>` tag on homepage — expected to bring homepage mobile LCP from 3.4s → ~2.5–2.8s
- Inline or preload the render-blocking CSS chunk (`217ee519501193ac.css`, 7.6KB) — expected 110ms savings on all pages

**Child issue:** BAR-708

---

### F2 — Oversized Logo PNG in Footer (`logo-bardi-mark-white.png`)
**Root cause:** File is 1177×1195px and 136KB. Displayed at 97×98px in the footer. Lighthouse estimates **135KB wasted** per page load. Also loaded in header as `logo-bardi-mark.png` (228×424px source, 59KB) rendered at 41×77px.

**Fix estimate:** 15–30 min (resize/convert to WebP or use SVG).

**Child issue:** BAR-709

---

### F3 — No Cache Headers on Public Assets
**Root cause:** All 4 public image files (`headshot-eszter-hero.jpg`, `headshot-eszter.jpg`, `logo-bardi-mark-white.png`, `logo-bardi-mark.png`) show `cacheLifetimeMs: 0`. Cloudflare Pages serves `/public/` assets without explicit `Cache-Control` headers. Lighthouse flags 386KB of cacheable bytes with zero cache lifetime.

**Impact:** Repeat visitors re-download all images on every visit. On mobile, this is a meaningful UX penalty.

**Fix estimate:** 30 min — add a `_headers` file at `/public/_headers` (or `next.config.ts` headers config) setting `Cache-Control: public, max-age=31536000, immutable` for image assets.

**Child issue:** BAR-710

---

### F4 — bfcache Failure (Not a Real Issue)
Lighthouse reports 1 bfcache failure: "Modal dialog... EmbedderModalDialog." This is the Basic Auth challenge dialog triggered by the preview gate. **This will automatically resolve when BAR-620 removes the gate before public launch.** No action needed.

---

### F5 — Legacy JavaScript Polyfills (Minor)
`Array.prototype.at`, `.flat`, `.flatMap` polyfills in `1255-83cb42014f6de1e2.js`. Estimated 11KB savings if browserslist target is updated to drop old browser coverage. Low priority.

---

## CLS Assessment

**CLS = 0 on all 4 pages, including Contact with Cal.com embed.**

The Cal.com iframe is rendered inside a fixed-height container (`h-[680px]`), which prevents layout shift. No action needed.

---

## No Critical Issues

No page scored below 50 (or even below 70). No escalation issues required per acceptance criteria.

---

## Recommended Priority Order for Engineer

1. **BAR-708** — `fetchpriority="high"` on hero + preload render-blocking CSS (30 min, biggest LCP impact)
2. **BAR-709** — Resize/convert logo PNGs (15 min, ~190KB per-page savings)
3. **BAR-710** — Add cache headers to `/public/` assets (30 min, repeat-visit UX)
