# Bardi Immigration Law — Launch Announcement Asset Pack

> **Issue:** [BAR-131](/BAR/issues/BAR-131) | **Owner:** CMO | **Created:** 2026-05-20
> **Launch Date:** June 10, 2026
> **Status:** Spec complete — ready for manual Canva execution
> **Related specs:** [LAUNCH-WEEK-GRAPHICS-SPEC.md](./LAUNCH-WEEK-GRAPHICS-SPEC.md) (5 square graphics) · [SOCIAL-MEDIA-ASSETS-SPEC.md](./SOCIAL-MEDIA-ASSETS-SPEC.md) (platform templates)

Three-asset launch announcement pack for June 10. These are the primary deployment assets for CMO launch week social posts. All three use the same brand tokens and typographic system — build the banner first to lock the layout language, then adapt to square and story.

---

## Brand Quick Reference

| Token | Hex | Role |
|-------|-----|------|
| Navy | `#1B2A4A` | Dark backgrounds, headlines on light |
| Gold | `#C9A84C` | Accents, underlines, CTA highlights |
| Warm Gray | `#F5F4F0` | Light page backgrounds |
| White | `#FFFFFF` | Card surfaces, reversed text |
| Charcoal | `#2E2E2E` | Body text on light backgrounds |

**Fonts (both free on Google Fonts — available natively in Canva):**
- `Playfair Display` Bold 700 — all headlines
- `Inter` Regular 400 / SemiBold 600 — body, labels, URLs

**Logo:** Use **horizontal full-color variant** (`0B5E292A-...PNG` from Google Drive "Creative Assets" folder) for all 3 assets.

---

## Asset 1 — Launch Announcement Card (1080 × 1080)

> **Platforms:** Instagram feed, Facebook post
> **Existing reference:** [LAUNCH-WEEK-GRAPHICS-SPEC.md](./LAUNCH-WEEK-GRAPHICS-SPEC.md) Graphic 1 — use that spec directly.

**File name:** `bardi-launch-announcement-square-1080x1080.png`

**Summary of key design decisions:**
- Navy (`#1B2A4A`) full-bleed background
- Gold 6px bars top and bottom (visual bookending)
- Horizontal logo centered at y≈160
- Gold 2px rule as separator below logo
- Headline: **"Now Accepting Consultations"** — Playfair Display Bold 700, 62px, White
- Subline: **"Boutique immigration law for Georgia, Alabama, North Carolina, and South Carolina."** — Inter Regular 400, 22px, White 80% opacity
- URL: **bardilaw.com** — Inter SemiBold 600, 22px, Gold, centered near bottom

> See [LAUNCH-WEEK-GRAPHICS-SPEC.md](./LAUNCH-WEEK-GRAPHICS-SPEC.md) for the full layer-by-layer build guide (Graphic 1). A Spanish-language variant (Graphic 5) is also specced there.

---

## Asset 2 — Launch Announcement Banner (1200 × 628)

> **Platforms:** LinkedIn shared post, Facebook link preview (Open Graph format), Facebook cover (desktop-safe zone aligns to this aspect ratio)
> **Note:** This is the standard OG image / link-share card size. Not the same as a Facebook cover photo (820×312) or LinkedIn company banner (1128×191) — those are specced in [SOCIAL-MEDIA-ASSETS-SPEC.md](./SOCIAL-MEDIA-ASSETS-SPEC.md).

**File name:** `bardi-launch-announcement-banner-1200x628.png`

### Canvas

| Field | Value |
|-------|-------|
| Size | 1200 × 628 px |
| Background | Navy `#1B2A4A` |
| Text safe area | 1060 × 488 px centered (70px margin each side) |

### Layout Strategy

Two-zone horizontal split:
- **Left zone** (0–600px): dark Navy, logo + headline text
- **Right zone** (600–1200px): slightly lighter Navy or decorative graphic element (optional) with tagline + URL

Or single-zone full-width if the two-zone feel is too complex. The single-zone version is recommended for speed.

### Layer Stack — Single-Zone Version (Recommended)

| # | Layer | Spec |
|---|-------|------|
| 1 | Background | Navy `#1B2A4A` full canvas |
| 2 | Gold top bar | Rectangle: 1200px × 5px, y=0. Color: Gold `#C9A84C` |
| 3 | Gold bottom bar | Rectangle: 1200px × 5px, y=623. Color: Gold `#C9A84C` |
| 4 | Logo | Horizontal full-color variant. Width: 260px (maintain ratio). Position: x=72, vertically centered at approx y=160 |
| 5 | Gold vertical divider | Rectangle: 2px × 200px. Color: Gold `#C9A84C`. Position: x=370, vertically centered at y=214–414 |
| 6 | Firm tagline | Text: **"Boutique Immigration Law"**. Font: `Inter` SemiBold 600, 18px, letter-spacing 0.06em. Color: Gold `#C9A84C`. Position: x=400, y=214 |
| 7 | Headline | Text: **"Now Open — June 10, 2026"**. Font: `Playfair Display` Bold 700, 52px. Color: White `#FFFFFF`. Position: x=400, 16px below tagline |
| 8 | Subline | Text: **"Expert immigration counsel. Bilingual. Boutique."**. Font: `Inter` Regular 400, 20px. Color: White `#FFFFFF` at 80% opacity. Position: x=400, 20px below headline |
| 9 | Gold underline rule | Rectangle: 120px × 2px. Color: Gold `#C9A84C`. Position: x=400, 20px below subline |
| 10 | URL | Text: **bardilaw.com**. Font: `Inter` SemiBold 600, 20px. Color: Gold `#C9A84C`. Position: x=400, 16px below underline rule |

### Layer Stack — Two-Zone Version (Optional)

| # | Layer | Spec |
|---|-------|------|
| 1 | Left panel background | Navy `#1B2A4A`, 600 × 628px, x=0 |
| 2 | Right panel background | White `#FFFFFF`, 600 × 628px, x=600 |
| 3 | Gold vertical seam | Rectangle: 4px × 628px, x=598. Color: Gold `#C9A84C` |
| 4 | Gold top bar | 1200px × 5px, y=0, Gold |
| 5 | Gold bottom bar | 1200px × 5px, y=623, Gold |
| 6 | Left — Logo | Horizontal logo. Width: 260px. Centered in left panel (x_center=300), y=180 |
| 7 | Left — Label | **"LAUNCHING JUNE 10, 2026"**. `Inter` SemiBold 600, 14px, letter-spacing 0.1em. Color: Gold `#C9A84C`. Centered in left panel, 24px below logo |
| 8 | Left — URL | **bardilaw.com**. `Inter` SemiBold 600, 18px. Color: White `#FFFFFF`. Centered in left panel, near bottom (y=560) |
| 9 | Right — Category label | **"NOW OPEN"**. `Inter` SemiBold 600, 14px, letter-spacing 0.12em. Color: Navy `#1B2A4A`. x=648, y=180 |
| 10 | Right — Gold underline | 60px × 3px, Gold, x=648, 8px below label |
| 11 | Right — Headline | **"Boutique Immigration Counsel"**. `Playfair Display` Bold 700, 42px. Color: Navy `#1B2A4A`. x=648, 24px below underline |
| 12 | Right — Subline | **"Bilingual · GA · AL · NC · SC"**. `Inter` Regular 400, 20px. Color: Charcoal `#2E2E2E`. x=648, 16px below headline |
| 13 | Right — CTA rule | 1px horizontal line, full right panel width, Warm Gray `#E0DDD8`, 40px above bottom |
| 14 | Right — CTA text | **"Schedule a Consultation →"**. `Inter` SemiBold 600, 18px. Color: Navy `#1B2A4A`. x=648, 12px below rule |

### Thumbnail check
At 600px preview width (LinkedIn feed): firm name and launch date must be legible without zooming.

---

## Asset 3 — Story Template (1080 × 1920)

> **Platforms:** Instagram Stories, Facebook Stories
> **Existing reference:** [SOCIAL-MEDIA-ASSETS-SPEC.md](./SOCIAL-MEDIA-ASSETS-SPEC.md) Deliverable 4 — use that spec as the base template structure.

**File name:** `bardi-launch-announcement-story-1080x1920.png`

**Launch-specific content for this story** (swap into the base template):

| Zone | Content |
|------|---------|
| Top strip | Horizontal logo, 200px wide, left-aligned in Navy strip |
| Headline | **"We're Open."** — Playfair Display Bold 700, 80px, Navy `#1B2A4A` |
| Sub-headline | **"June 10, 2026"** — Inter SemiBold 600, 36px, Gold `#C9A84C` |
| Body | **"Expert immigration counsel. Bilingual service in English, Spanish, and Magyar. Serving GA · AL · NC · SC."** — Inter Regular 400, 28px, Charcoal `#2E2E2E`, line-height 1.6 |
| Bottom CTA strip | **"Book your consultation → bardilaw.com"** — Inter SemiBold 600, 22px, White on Navy strip |

**Key layout notes:**
- Keep all critical content inside the **safe zone**: y=250 to y=1670 (250px top/bottom safety for phone UI chrome)
- Gold horizontal accent line (4px × full width, Gold `#C9A84C`) separates top strip from content area
- Same Gold accent line at top edge of bottom CTA strip
- Optional: low-opacity (8%) decorative Bardi "B" monogram or flame/feather icon in lower-right of content area, Navy color

> See [SOCIAL-MEDIA-ASSETS-SPEC.md](./SOCIAL-MEDIA-ASSETS-SPEC.md) Deliverable 4 for the full base layer stack. Apply the content table above to that structure.

---

## Delivery Checklist

| # | Asset | Dimensions | File name | Status |
|---|-------|-----------|-----------|--------|
| 1 | Launch Announcement Card | 1080 × 1080 px | `bardi-launch-announcement-square-1080x1080.png` | ☐ |
| 2 | Launch Announcement Banner | 1200 × 628 px | `bardi-launch-announcement-banner-1200x628.png` | ☐ |
| 3 | Story Template | 1080 × 1920 px | `bardi-launch-announcement-story-1080x1920.png` | ☐ |

### Export settings (Canva)
- All exports: **Share → Download → PNG**
- Quality: Maximum / 100%
- No background transparency needed on any asset
- Banner (Asset 2) may also be exported as JPG at 90%+ quality if PNG is over 2MB

### Canva source files
- Save each as a **named Canva design** (not just a download) so the source is editable for future launches
- Suggested design names: `Bardi Law — Launch Square 1080`, `Bardi Law — Launch Banner 1200x628`, `Bardi Law — Launch Story`

### Upload and share
Store all 3 exported PNGs in the Google Drive "Creative Assets" subfolder alongside logo variants (same folder referenced in BRAND-IDENTITY.md).

---

## Acceptance Criteria

| Criterion | Verification |
|-----------|-------------|
| 3 assets delivered (square, banner, story) | Delivery checklist all checked |
| Brand-consistent: colors, fonts, logo | Cross-check hex values + font names against Brand Quick Reference above |
| All text legible at thumbnail scale | Zoom out to 25% in Canva; headline and URL must still be readable |
| Banner visible on LinkedIn (1200×628) | Preview via LinkedIn post composer before publishing |
| Story safe zone respected (1080×1920) | No critical text in top/bottom 250px on mobile |
| Canva source files saved and accessible | Share design link in BAR-131 comment |

---

## Execution Notes

**Canva AI generation quota is exhausted** as of 2026-05-20. Build all 3 assets manually using the Canva editor with the layer specs above.

Assets 1 and 3 have existing base specs in prior issues:
- Asset 1 (square): [LAUNCH-WEEK-GRAPHICS-SPEC.md](./LAUNCH-WEEK-GRAPHICS-SPEC.md) Graphic 1 — copy that Canva design and update copy to match BAR-131 launch messaging
- Asset 3 (story): [SOCIAL-MEDIA-ASSETS-SPEC.md](./SOCIAL-MEDIA-ASSETS-SPEC.md) Deliverable 4 — add launch-specific content from the table above

Asset 2 (1200×628 banner) is new. Use the single-zone spec above — it's the faster build.

---

*Spec for [BAR-131](/BAR/issues/BAR-131) | Owner: CMO | 2026-05-20*
*Brand source: [BRAND-IDENTITY.md](./BRAND-IDENTITY.md)*
*Related: [LAUNCH-WEEK-GRAPHICS-SPEC.md](./LAUNCH-WEEK-GRAPHICS-SPEC.md) · [SOCIAL-MEDIA-ASSETS-SPEC.md](./SOCIAL-MEDIA-ASSETS-SPEC.md) · [LAUNCH-SOCIAL-CONTENT.md](./LAUNCH-SOCIAL-CONTENT.md)*
