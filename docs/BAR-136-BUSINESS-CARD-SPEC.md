# BAR-136 — Attorney Business Card Design Spec

> **Canvas:** 1050 × 600 px (3.5" × 2" at 300 DPI — standard business card, print-ready)
> **Issue:** BAR-136
> **Owner:** UI Designer
> **Status:** Canva-ready spec — build manually (API quota exhausted at time of creation)

---

## Print Specs

| Property | Value |
|----------|-------|
| Print size | 3.5" × 2" |
| Canva canvas | 1050 × 600 px |
| DPI | 300 |
| Bleed | Add 3mm (≈35px) bleed on all sides in Canva print settings |
| Safe zone | Keep all text 4mm (≈47px) from trim edge |
| Color mode | CMYK-equivalent — use Canva's "Print" output when exporting |
| Export | PNG (300 DPI) + PDF (Print) |

---

## FRONT FACE — Navy Background

### Background
| Property | Value |
|----------|-------|
| Fill | Navy `#1B2A4A` |
| Size | 1050 × 600 px |

### Logo / Wordmark
| Property | Value |
|----------|-------|
| Text | "Bardi Immigration Law" |
| Font | Playfair Display 700 |
| Color | Gold `#C9A84C` |
| Size | 38px |
| Position | Top-left, X: 60px, Y: 60px |
| Alignment | Left |

### Gold Accent Underline (below wordmark)
| Property | Value |
|----------|-------|
| Rectangle | Full width of wordmark text × 3px tall |
| Fill | Gold `#C9A84C` |
| Position | 6px below wordmark baseline |

### Attorney Name
| Property | Value |
|----------|-------|
| Text | "Eszter Bardi, Esq." |
| Font | Inter 600 |
| Color | White `#FFFFFF` |
| Size | 52px |
| Position | Vertically centered in card, X: 60px, Y: ~260px |
| Alignment | Left |

### Credentials Row
| Property | Value |
|----------|-------|
| Text | "Licensed in Georgia  ·  Alabama" |
| Font | Inter 400 |
| Color | White `#FFFFFF`, opacity 80% |
| Size | 18px |
| Position | 14px below attorney name |

### Bilingual Badge
| Property | Value |
|----------|-------|
| Container | Gold `#C9A84C` pill, 4px radius, 8px 16px padding |
| Text | "EN / ES" |
| Font | Inter 600 |
| Color | Navy `#1B2A4A` |
| Size | 14px |
| Position | Bottom-right corner, X: 870px, Y: 480px (adjusted to bleed-safe zone) |

### Bottom Rule
| Property | Value |
|----------|-------|
| Rectangle | Full width × 3px |
| Fill | Gold `#C9A84C`, opacity 50% |
| Position | Y: 540px (≈ bottom safe zone) |

---

## BACK FACE — Warm Gray Background

> Build as Page 2 in same Canva design.

### Background
| Property | Value |
|----------|-------|
| Fill | Warm Gray `#F5F4F0` |
| Size | 1050 × 600 px |

### Practice Areas Header
| Property | Value |
|----------|-------|
| Text | "Practice Areas" |
| Font | Playfair Display 700 |
| Color | Navy `#1B2A4A` |
| Size | 22px |
| Position | X: 60px, Y: 80px |

### Gold Divider
| Property | Value |
|----------|-------|
| Rectangle | 120px wide × 3px tall |
| Fill | Gold `#C9A84C` |
| Position | 8px below "Practice Areas" header |

### Practice Area List
| Property | Value |
|----------|-------|
| Text | "Immigration Benefits  •  Removal Defense  •  Federal Litigation" |
| Font | Inter 600 |
| Color | Navy `#1B2A4A` |
| Size | 18px |
| Line height | 1.6 |
| Position | 20px below gold divider |
| Max width | 820px |

> **Alternative: 3-line stacked format** (if one line wraps):
> ```
> Immigration Benefits
> Removal Defense
> Federal Litigation
> ```

### Contact Block (bottom section)
| Property | Value |
|----------|-------|
| Divider rule | 860px wide × 2px, Gold `#C9A84C`, Y: ~390px |

| Item | Text | Font | Size | Color |
|------|------|------|------|-------|
| Website | "bardilaw.com" | Inter 600 | 18px | Gold `#C9A84C` |
| Email | "[email@bardilaw.com]" | Inter 400 | 16px | Charcoal `#2E2E2E` |
| Phone | "[Phone TBD]" | Inter 400 | 16px | Charcoal `#2E2E2E` |

Position contact block: Y: 420px, left-aligned at X: 60px, line spacing 28px.

---

## Canva Build Steps

### Front
1. Create new design → Custom size → **1050 × 600 px**
2. Add full-canvas rectangle → fill `#1B2A4A`
3. Add text: "Bardi Immigration Law" → Playfair Display, Bold, `#C9A84C`, 38px, X:60 Y:60
4. Add thin rectangle (gold underline) → width of wordmark, 3px tall, `#C9A84C`, 6px below
5. Add text: "Eszter Bardi, Esq." → Inter, SemiBold, `#FFFFFF`, 52px, X:60 Y:260
6. Add text: "Licensed in Georgia  ·  Alabama" → Inter, Regular, `#FFFFFF` 80% opacity, 18px, 14px below name
7. Add gold pill badge → rounded rect `#C9A84C`, text "EN / ES" Navy Inter 600 14px → bottom right
8. Add bottom accent line → 1050px × 3px, `#C9A84C` 50% opacity, Y:540

### Back
9. Add new page (Page 2) → same dimensions
10. Add full-canvas rectangle → fill `#F5F4F0`
11. Add text: "Practice Areas" → Playfair Display, Bold, `#1B2A4A`, 22px, X:60 Y:80
12. Add gold divider → 120px × 3px, `#C9A84C`, 8px below header
13. Add practice area text → Inter 600, `#1B2A4A`, 18px
14. Add mid-divider rule → 860px × 2px, `#C9A84C`, Y:390
15. Add contact lines → Inter 600/400, website in Gold, email/phone in Charcoal

### Export
- File → Download → **PNG** (check "300 DPI" under print options)
- File → Download → **PDF Print** (with bleed marks)

---

## Board / Client Inputs Needed Before Final Production

| Item | Placeholder | Owner |
|------|-------------|-------|
| Attorney email | [email@bardilaw.com] | Board / Client |
| Phone number | [TBD] | Board / Client |

---

## Brand Consistency Check

- [x] Navy `#1B2A4A` — front background
- [x] Gold `#C9A84C` — wordmark, accents, website, badge
- [x] Warm Gray `#F5F4F0` — back background
- [x] White `#FFFFFF` — front text on dark background
- [x] Charcoal `#2E2E2E` — back contact text
- [x] Playfair Display 700 — firm name (front), section header (back)
- [x] Inter 600/400 — all other text
- [x] No gradients, drop shadows, or decorative flourishes
- [x] Bilingual: EN/ES noted on front
- [x] Licensed in GA | AL noted on front

---

*Spec created: 2026-05-20 | Owner: UI Designer | Issue: BAR-136*
