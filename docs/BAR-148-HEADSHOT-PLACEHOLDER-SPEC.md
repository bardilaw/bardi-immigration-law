# BAR-148 — Attorney Headshot Placeholder Design Spec

> **Canvas sizes:** 400×500px (About hero) + 300×300px (Home sidebar)
> **Design choice:** Option C — Styled Typographic Name Card (no face/silhouette)
> **Issue:** BAR-148
> **Owner:** UI Designer
> **Status:** Spec-ready — build in Canva (manual) when connection restores, or use Higgs-generated PNG reference

---

## Rationale for Option C

Option C (typographic name card) is the recommended choice because:
- No risk of avatar/silhouette mismatch with the real attorney's appearance
- Can function as a permanent brand asset even after the real headshot arrives (e.g., used in email signatures, quote cards)
- Elegant and intentional — never looks like a "broken placeholder"
- Fastest to build and most brand-consistent

---

## Design Spec — Primary (400×500px, Portrait)

### Background
| Property | Value |
|----------|-------|
| Fill | Navy `#1B2A4A` |
| Size | 400 × 500 px |

### Gold Border Frame
| Property | Value |
|----------|-------|
| Type | Rectangle stroke / 4 border rectangles |
| Color | Gold `#C9A84C` |
| Thickness | 3px |
| Inset from edge | 12px on all sides |
| Result | Inner visible area: 376 × 476px |

### Firm Name / Wordmark (top)
| Property | Value |
|----------|-------|
| Text | "Bardi Immigration Law" |
| Font | Playfair Display 700 |
| Color | Gold `#C9A84C` |
| Size | 18px |
| Position | X: centered, Y: 40px from top |
| Alignment | Center |

### Gold Accent Rule (below wordmark)
| Property | Value |
|----------|-------|
| Width | 80px |
| Height | 2px |
| Color | Gold `#C9A84C` |
| Position | Y: 68px, X: centered |

### Attorney Name (center)
| Property | Value |
|----------|-------|
| Text | "Eszter Bardi, Esq." |
| Font | Playfair Display 700 |
| Color | White `#FFFFFF` |
| Size | 36px |
| Position | Vertically centered in card (Y: ~215px) |
| Alignment | Center |
| Line height | 1.2 |

### Attorney Title
| Property | Value |
|----------|-------|
| Text | "Immigration Attorney" |
| Font | Inter 400 Italic |
| Color | White `rgba(255,255,255,0.75)` |
| Size | 16px |
| Position | 12px below attorney name |
| Alignment | Center |

### Gold Divider (below title)
| Property | Value |
|----------|-------|
| Width | 48px |
| Height | 2px |
| Color | Gold `#C9A84C` |
| Position | 20px below title |
| Alignment | Center |

### Credentials
| Property | Value |
|----------|-------|
| Text | "Licensed: Georgia  ·  Alabama" |
| Font | Inter 600 |
| Color | White `rgba(255,255,255,0.65)` |
| Size | 13px |
| Position | 16px below gold divider |
| Alignment | Center |

### Website (bottom)
| Property | Value |
|----------|-------|
| Text | "bardilaw.com" |
| Font | Inter 600 |
| Color | Gold `#C9A84C` |
| Size | 14px |
| Position | Y: 448px (48px from bottom) |
| Alignment | Center |

---

## Design Spec — Secondary (300×300px, Square)

Same design, scaled proportionally. Key adjustments:

| Element | Primary (400×500) | Secondary (300×300) |
|---------|-------------------|---------------------|
| Canvas | 400 × 500 px | 300 × 300 px |
| Attorney name | 36px | 28px |
| Title | 16px | 13px |
| Wordmark | 18px | 14px |
| Border inset | 12px | 10px |
| Border thickness | 3px | 2px |

---

## Canva Build Steps

### Primary (400×500px)
1. Create new design → Custom size → **400 × 500 px**
2. Full-canvas rectangle → fill `#1B2A4A`
3. Border: 4 thin rectangles, 3px thick, `#C9A84C`, 12px inset from each edge
4. Text: "Bardi Immigration Law" → Playfair Display Bold, `#C9A84C`, 18px, centered, Y:40
5. Rectangle: 80×2px, `#C9A84C`, centered, Y:68
6. Text: "Eszter Bardi, Esq." → Playfair Display Bold, `#FFFFFF`, 36px, centered, Y:215
7. Text: "Immigration Attorney" → Inter Regular Italic, `rgba(255,255,255,0.75)`, 16px, centered, Y:265
8. Rectangle: 48×2px, `#C9A84C`, centered, Y:295
9. Text: "Licensed: Georgia  ·  Alabama" → Inter SemiBold, `rgba(255,255,255,0.65)`, 13px, centered, Y:315
10. Text: "bardilaw.com" → Inter SemiBold, `#C9A84C`, 14px, centered, Y:448
11. Export → PNG at 400×500px
12. Optional: Export → SVG for crisp rendering at any size

### Secondary (300×300px)
- Repeat steps 1–11 with 300×300 canvas and scaled measurements from table above

---

## Export Settings

| Format | Settings |
|--------|----------|
| PNG | 1× (pixel-perfect, no upscaling needed) |
| SVG | Vector, embed fonts |
| File names | `eszter-bardi-headshot-placeholder-400x500.png` / `eszter-bardi-headshot-placeholder-300x300.png` |

---

## Engineer Integration Notes (for BAR-72 follow-up)

- Drop the 400×500 PNG into the `About` page hero `<img>` slot where the headshot is expected
- Drop the 300×300 PNG into the `Home` page sidebar `<img>` slot
- Use `alt="Eszter Bardi, Esq. — Immigration Attorney"` on both
- When the real headshot arrives: swap the `src` only — no layout changes needed (placeholder preserves aspect ratios)

---

## Brand Consistency Check

- [x] Navy `#1B2A4A` — background
- [x] Gold `#C9A84C` — wordmark, border frame, accents, website
- [x] White `#FFFFFF` — attorney name (primary text on dark)
- [x] Playfair Display 700 — firm name + attorney name
- [x] Inter 400/600 — title, credentials, website
- [x] No gradients, drop shadows, or decorative elements outside brand system
- [x] Consistent with BAR-113 social graphics and BAR-136 business card

---

*Spec created: 2026-05-21 | Owner: UI Designer | Issue: BAR-148*
