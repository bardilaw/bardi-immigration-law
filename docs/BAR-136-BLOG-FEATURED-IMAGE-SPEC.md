# BAR-136 — Blog Post Featured Image Template Spec

> **Canvas:** 1200 × 630 px (optimal for social sharing and blog header)
> **Issue:** BAR-136
> **Owner:** UI Designer
> **Status:** Canva-ready spec — build manually (API quota exhausted at time of creation)

---

## Layout Overview

Two-panel split layout with a vertical Gold accent bar at the seam.

```
┌─────────────────┬────┬────────────────────────────────────────┐
│                 │    │                                        │
│   LEFT PANEL    │ AU │           RIGHT PANEL                  │
│   ~35% width    │ TO │           ~65% width                   │
│   (420px)       │    │           (780px, minus bar)           │
│                 │    │                                        │
│   Navy bg       │ G  │   Warm Gray bg                        │
│   #1B2A4A       │ O  │   #F5F4F0                             │
│                 │ L  │                                        │
│                 │ D  │                                        │
└─────────────────┴────┴────────────────────────────────────────┘
```

---

## Dimensions

| Zone | Width | X Start |
|------|-------|---------|
| Left panel (Navy) | 420px | 0 |
| Gold accent bar | 6px | 420px |
| Right panel (Warm Gray) | 774px | 426px |
| Total | 1200px | — |
| Height | 630px | — |
| Padding (all panels) | 40px inset | — |

---

## Left Panel — Navy `#1B2A4A`

| Element | Spec |
|---------|------|
| Background | `#1B2A4A` fill, full panel height |
| Logo / Wordmark | "Bardi Immigration Law" — Playfair Display 700, Gold `#C9A84C`, ~28px, centered or left-aligned with 40px left padding |
| Domain | "bardilaw.com" — Inter 600, White `#FFFFFF`, 14px, 8px below wordmark |
| Vertical alignment | Wordmark + domain centered in panel (Y: ~285–315px area) |

---

## Gold Accent Bar

| Element | Spec |
|---------|------|
| Rectangle | 6px wide × 630px tall |
| Fill | Gold `#C9A84C` |
| Position | X: 420px, Y: 0 |

---

## Right Panel — Warm Gray `#F5F4F0`

| Element | Spec |
|---------|------|
| Background | `#F5F4F0` fill, full panel height |
| Left padding | 48px from panel left edge (468px from canvas left) |
| Right padding | 48px |

### Blog Title Placeholder

| Property | Value |
|----------|-------|
| Text | "Your Blog Post Title Goes Here" (editable placeholder) |
| Font | Playfair Display 700 |
| Color | Navy `#1B2A4A` |
| Size | 44px (scales for 1-line titles); drop to 36px for 2 lines; 30px for 3 lines |
| Line height | 1.2× |
| Max width | 680px |
| Position | Y: vertically centered in panel (~220px from top) |
| Alignment | Left-aligned |

### Author Line

| Property | Value |
|----------|-------|
| Text | "Eszter Bardi, Esq." |
| Font | Inter 600 |
| Size | 16px |
| Color | Charcoal `#2E2E2E` |
| Position | 16px below bottom of title block |
| Alignment | Left-aligned |

### Tag Badge (optional — can be toggled visible/hidden)

| Property | Value |
|----------|-------|
| Background | Navy `#1B2A4A` pill/rounded rectangle (4px radius) |
| Text | "Immigration Law  |  DACA  |  Removal Defense" |
| Font | Inter 600 |
| Size | 12px |
| Color | Gold `#C9A84C` |
| Padding | 6px 12px |
| Position | 20px below author line |

---

## Text Sizing Guide for Titles

| Title Length | Font Size | Max Lines |
|-------------|-----------|-----------|
| 1 line (~40 chars) | 48px | 1 |
| 2 lines (~60 chars) | 40px | 2 |
| 3 lines (~80 chars) | 34px | 3 |

Keep title + author + badge within 630px height with 40px top/bottom padding.

---

## Canva Build Steps

1. Create new design → Custom size → **1200 × 630 px**
2. Add rectangle element → full canvas → fill `#1B2A4A` (background base for left panel)
3. Add second rectangle → 774px × 630px, X:426 → fill `#F5F4F0` (right panel)
4. Add third rectangle → 6px × 630px, X:420 → fill `#C9A84C` (accent bar)
5. Add text element on left panel → "Bardi Immigration Law" → Playfair Display, Bold, `#C9A84C`, 28px
6. Add text element → "bardilaw.com" → Inter, SemiBold, `#FFFFFF`, 14px
7. Add large text element on right panel → title placeholder → Playfair Display, Bold, `#1B2A4A`, 44px
8. Add text element → "Eszter Bardi, Esq." → Inter, SemiBold, `#2E2E2E`, 16px
9. Add badge rectangle → Navy `#1B2A4A`, 4px corners → with text "Immigration Law | DACA | Removal Defense" in Gold
10. Group elements, save as **Template** in Canva (File → Save as template)

---

## Brand Consistency Check

- [x] Navy `#1B2A4A` — primary panel
- [x] Gold `#C9A84C` — wordmark, accent bar, badge text
- [x] Warm Gray `#F5F4F0` — content panel background
- [x] Playfair Display 700 — headline/title
- [x] Inter 600 — author, badges, subtext
- [x] No gradients, drop shadows, or decorative flourishes
- [x] Consistent with boutique/minimalist brand direction

---

*Spec created: 2026-05-20 | Owner: UI Designer | Issue: BAR-136*
