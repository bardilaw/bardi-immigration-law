# Bardi Immigration Law — Wireframe Specifications

> **Owner:** UI Designer · **Issue:** BAR-35 · **Status:** Ready for engineering review
> **Blocking:** BAR-38 (Build and deploy website)
> **Last updated:** 2026-05-19

---

## Design System Reference

Before implementing, all components must use these values from `BRAND-IDENTITY.md`:

| Token | Value |
|-------|-------|
| Primary | Navy `#1B2A4A` |
| Accent | Gold `#C9A84C` |
| Background | Warm Gray `#F5F4F0` |
| Surface | White `#FFFFFF` |
| Text | Charcoal `#2E2E2E` |
| Heading font | Playfair Display 700 |
| Body font | Inter 400 |
| UI label font | Inter 600 |
| Icon style | Lucide outline, 24px base, 2px stroke |

---

## Global Components

### NAV — Primary Navigation

```
┌────────────────────────────────────────────────────────────────────┐
│ [Bardi Law logo — horizontal full-color, min 120px wide]           │
│                                                                    │
│  Home    Practice Areas ▾    About    Resources    [Schedule a     │
│                                                     Consultation]  │
│                                                     [EN | ES]      │
└────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White `#FFFFFF`, 1px bottom border Warm Gray
- Logo: Left-aligned, 8px vertical padding, min 120px wide
- Nav links: Inter 600, 14px, Navy `#1B2A4A`, 24px horizontal spacing
- "Practice Areas" triggers mega-dropdown on hover/click
- CTA button: Gold background `#C9A84C`, Navy text, 8px 16px padding, 4px radius
- Language toggle: Navy text, pipe separator, right-most element
- Sticky on scroll (position: fixed, z-index: 100)

**Practice Areas Mega-Dropdown:**

```
┌─────────────────────────────────────────────────┐
│ Benefits-Based Immigration                       │
│   DACA          U-Visa      Family-Based         │
│   SIJS          TPS         Naturalization       │
│   VAWA          Waivers                          │
├─────────────────────────────────────────────────┤
│ Removal Defense                                  │
│ Federal Litigation                               │
└─────────────────────────────────────────────────┘
```

- White surface, 1px border `#E5E4E0`, 8px radius
- Category labels: Inter 600, 12px, Gold `#C9A84C`, uppercase
- Links: Inter 400, 14px, Charcoal. Hover: Navy

**Mobile Nav:**

```
┌─────────────────────────────────┐
│ [Logo]                    [☰]   │
└─────────────────────────────────┘

[open state]
┌─────────────────────────────────┐
│ Home                            │
│ Practice Areas              [+] │
│   [accordion expands]           │
│ About                           │
│ Resources                       │
│ EN | ES                         │
│ [Schedule a Consultation]       │
└─────────────────────────────────┘
```

- Hamburger icon: Lucide `menu`, 24px, Navy
- Full-width overlay on open
- CTA button pinned at bottom of open menu
- Practice Areas: accordion expand/collapse with chevron

---

### FOOTER — Global Footer

```
┌──────────────────────────────────────────────────────────────────────┐
│ [Logo — white reversed wordmark on Navy bg]                          │
│ Boutique immigration law for families in the Southeast.              │
├──────────────────┬──────────────────┬──────────────┬─────────────────┤
│ Practice Areas   │ Firm             │ Legal        │ Contact         │
│ ───────────────  │ ───────────────  │ ──────────── │ ──────────────  │
│ DACA             │ About            │ Privacy      │ [Phone TBD]     │
│ SIJS             │ Resources        │ Terms        │ [Email TBD]     │
│ VAWA             │ Contact          │              │                 │
│ U-Visa           │                  │              │ AILA Chapter    │
│ TPS              │                  │              │ Chair 2025-26   │
│ Family-Based     │                  │              │ GA-AL           │
│ Naturalization   │                  │              │                 │
│ Waivers          │                  │              │                 │
│ Removal Defense  │                  │              │                 │
│ Fed. Litigation  │                  │              │                 │
├──────────────────┴──────────────────┴──────────────┴─────────────────┤
│ © 2026 Bardi Immigration Law. All rights reserved.       EN | ES     │
└──────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Navy `#1B2A4A`
- All text: White `#FFFFFF`
- Column headings: Gold `#C9A84C`, Inter 600, 12px, uppercase, 4px letter-spacing
- Links: Inter 400, 14px, White 80% opacity. Hover: Gold
- Logo: White reversed wordmark variant (not round avatar)
- Tagline: Inter 400, 14px, White 70% opacity
- Divider line before copyright: 1px White 20% opacity
- 4-column grid desktop, 2-col tablet, 1-col mobile (stacked)
- Mobile: logo + tagline → columns accordion-collapsed → copyright

---

## Page Wireframes

---

### PAGE 1: Home (`/`)

**Purpose:** Entry point. Establish trust, introduce practice, convert to consultation.

---

#### Section 1.1 — Hero

```
┌──────────────────────────────────────────────────────────────────┐
│ [NAV]                                                            │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Expert Immigration Counsel                 [Attorney photo or   │
│  for Families in the                         abstract: right     │
│  Southeast.                                  column, max 40%     │
│                                              width, rounded      │
│  Clear guidance. Direct attorney access.     corners]            │
│  Boutique representation for DACA,                               │
│  VAWA, removal defense, and more.                                │
│                                                                  │
│  [Schedule a Consultation →]    [Our Practice Areas]            │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Warm Gray `#F5F4F0`
- Headline: Playfair Display 700, 48–56px desktop / 32px mobile, Navy
- Subhead: Inter 400, 18px, Charcoal
- Primary CTA: Gold button, Navy text, "Schedule a Consultation"
- Secondary CTA: Navy outline button or text link, "Our Practice Areas"
- Layout: 60/40 text/image split desktop. Stacked (text top) mobile.
- Image: Attorney headshot (pending from client) OR warm abstract visual. Avoid stock immigration clichés.
- Padding: 80px vertical desktop, 48px mobile

---

#### Section 1.2 — Trust Bar

```
┌──────────────────────────────────────────────────────────────────┐
│  [award icon]          [map-pin icon]        [users icon]        │
│  AILA Chapter Chair    Serving GA, AL,       Direct Attorney     │
│  2025–2026             NC & SC               Communication       │
│  Georgia–Alabama                                                 │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White `#FFFFFF`
- 3 columns, centered content
- Icons: Lucide outline, 32px, Gold `#C9A84C`
- Label: Inter 600, 13px, Navy, uppercase
- Description: Inter 400, 14px, Charcoal
- Padding: 40px vertical
- Subtle top/bottom border: 1px `#E5E4E0`
- Mobile: stacked vertically with 24px gap

---

#### Section 1.3 — Practice Areas Overview

```
┌──────────────────────────────────────────────────────────────────┐
│                   How We Can Help                                │
│         (Playfair Display, centered, 32px)                       │
│                                                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  [file-text     │  │  [alert-tri     │  │  [gavel icon]   │  │
│  │   icon, 32px]   │  │   icon, 32px]   │  │   32px]         │  │
│  │                 │  │                 │  │                 │  │
│  │ Benefits-Based  │  │ Removal         │  │ Federal         │  │
│  │ Immigration     │  │ Defense         │  │ Litigation      │  │
│  │                 │  │                 │  │                 │  │
│  │ DACA, VAWA,     │  │ Facing removal  │  │ Habeas corpus,  │  │
│  │ U-Visa, family  │  │ proceedings?    │  │ mandamus        │  │
│  │ petitions and   │  │ We handle       │  │ petitions when  │  │
│  │ more.           │  │ detained and    │  │ administrative  │  │
│  │                 │  │ non-detained.   │  │ options end.    │  │
│  │ Explore →       │  │ Explore →       │  │ Explore →       │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Warm Gray `#F5F4F0`
- Section heading: Playfair Display 700, 32px, Navy, centered
- Cards: White `#FFFFFF` surface, 1px border `#E5E4E0`, 8px radius, 24px padding
- Icon: Gold `#C9A84C`, Lucide outline 32px
- Card title: Playfair Display 700, 20px, Navy
- Card body: Inter 400, 15px, Charcoal, max 3 lines
- "Explore →": Inter 600, 14px, Gold, no underline
- 3-column grid, 24px gap desktop; 1-column stacked mobile
- Cards equal height with flex

---

#### Section 1.4 — Why Bardi Law

```
┌──────────────────────────────────────────────────────────────────┐
│                    Why Clients Choose Us                         │
│                                                                  │
│  ┌──────────────────────────────┐  ┌──────────────────────────┐  │
│  │ [check-circle] Creative,     │  │ [users] Treated as       │  │
│  │ competent legal strategy.    │  │ Family                   │  │
│  │ We handle complex cases —    │  │ Personal investment in   │  │
│  │ not just routine filings.    │  │ every outcome.           │  │
│  └──────────────────────────────┘  └──────────────────────────┘  │
│  ┌──────────────────────────────┐  ┌──────────────────────────┐  │
│  │ [award] AILA Leadership      │  │ [message-circle] Direct  │  │
│  │ Chapter Chair 2025-26,       │  │ Attorney Access          │  │
│  │ GA-AL. Nationally connected, │  │ You speak with the       │  │
│  │ locally committed.           │  │ attorney — not an intake │  │
│  │                              │  │ specialist.              │  │
│  └──────────────────────────────┘  └──────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White `#FFFFFF`
- 2x2 grid desktop, 1-column mobile
- Each item: icon left (Navy, 24px) + text right
- Item title: Inter 600, 16px, Navy
- Item body: Inter 400, 15px, Charcoal
- No card borders — open layout, 32px vertical padding per row
- Gap: 32px horizontal, 24px vertical

---

#### Section 1.5 — Attorney Intro Teaser

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  [Attorney photo,         Meet the Attorney                      │
│   left, 180px round       ─────────────────                      │
│   or square crop]                                                │
│                           [Attorney name, Playfair 24px, Navy]   │
│                                                                  │
│                           2–3 sentence bio. Focus on regional    │
│                           connection, years of practice, AILA    │
│                           leadership. Human, not credential-     │
│                           stuffing.                              │
│                                                                  │
│                           [Meet the Attorney →]                  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Warm Gray `#F5F4F0`
- 40/60 image/text split desktop; stacked (image top, centered) mobile
- Photo: 180–200px circle crop if round photo, or 240px square with 8px radius
- Heading "Meet the Attorney": Playfair Display 700, 32px, Navy
- Gold rule underline: 2px, 40px wide, below heading
- Name: Playfair Display 400, 22px, Charcoal
- Bio: Inter 400, 16px, Charcoal
- CTA link: Inter 600, 14px, Navy, arrow icon

---

#### Section 1.6 — Testimonials

```
┌──────────────────────────────────────────────────────────────────┐
│                   Client Stories                                 │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │ "[Quote text — 2–3 sentences max. First-person, outcome  │    │
│  │  focused. Placeholder until real testimonials sourced.]" │    │
│  │                                                          │    │
│  │ — Client initials or first name only, Location           │    │
│  └──────────────────────────────────────────────────────────┘    │
│                                                                  │
│  [← prev]  ●  ○  ○  [next →]                                    │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White `#FFFFFF`
- Single quote visible, carousel with 2–3 quotes
- Quote: Playfair Display 400 italic, 20px, Navy
- Quotation marks: Gold `#C9A84C`, decorative, 48px
- Attribution: Inter 400, 14px, Charcoal
- Dots: Gold filled (active), Gray (inactive), 8px
- **Placeholder copy rule:** Use bracketed placeholders, not fabricated names
- Mobile: same layout, smaller text

---

#### Section 1.7 — CTA Strip

```
┌──────────────────────────────────────────────────────────────────┐
│  Ready to take the next step?                                    │
│  We'll walk you through every part of the process.              │
│                                                                  │
│  [Schedule a Consultation]                                       │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Navy `#1B2A4A`
- Heading: Playfair Display 700, 32px, White
- Subtext: Inter 400, 16px, White 80% opacity
- CTA button: Gold background, Navy text
- Centered content, 64px vertical padding
- Full-width stripe

---

#### Home — Mobile Layout Summary

| Section | Mobile Treatment |
|---------|-----------------|
| Hero | Stacked; text top, image below (or hidden if decorative) |
| Trust Bar | 3 items stacked vertically |
| Practice Areas | 1-column cards |
| Why Bardi Law | 1-column items |
| Attorney Teaser | Image centered top, text below |
| Testimonials | Single quote, carousel dots |
| CTA Strip | Full width, centered |

---

### PAGE 2: About (`/about`)

**Purpose:** Build trust and attorney credibility. Human before credential.

---

#### Section 2.1 — About Hero

```
┌──────────────────────────────────────────────────────────────────┐
│ [NAV]                                                            │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Expert Counsel,                   [Attorney headshot —          │
│  Personal Attention.                full portrait, 320px wide,   │
│                                     8px radius]                  │
│  Practicing immigration law                                      │
│  with the care of a boutique                                     │
│  firm and the credibility of                                     │
│  a seasoned litigator.                                           │
│                                                                  │
│  [Schedule a Consultation →]                                     │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Warm Gray `#F5F4F0`
- Layout: 55/45 text/image, image right-aligned
- Heading: Playfair Display 700, 48px desktop / 32px mobile, Navy
- Subtext: Inter 400, 18px, Charcoal
- Image: Client-provided headshot (pending). Placeholder: warm gray rectangle with caption "Attorney photo pending"

---

#### Section 2.2 — Biography

```
┌──────────────────────────────────────────────────────────────────┐
│  [Gold accent bar — 3px left border, 32px tall]                  │
│  [Attorney Name]                                                 │
│  Founding Attorney, Bardi Immigration Law                        │
│                                                                  │
│  [Bio paragraph 1 — personal background, entry into             │
│   immigration law, regional connection]                          │
│                                                                  │
│  [Bio paragraph 2 — philosophy: boutique practice, clients       │
│   treated as family, direct communication]                       │
│                                                                  │
│  [Bio paragraph 3 — current focus: SE US clients, complex        │
│   cases, AILA involvement]                                       │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White `#FFFFFF`
- Max content width: 720px, centered
- Name: Playfair Display 700, 28px, Navy
- Title: Inter 400, 16px, Charcoal, italic
- Gold left border: 3px solid `#C9A84C`, 8px left margin on name+title block
- Bio paragraphs: Inter 400, 17px, line-height 1.7, Charcoal
- 48px section padding

---

#### Section 2.3 — Credentials

```
┌──────────────────────────────────────────────────────────────────┐
│  Credentials & Recognition                                       │
│                                                                  │
│  ┌──────────────────────┐  ┌──────────────────────┐             │
│  │ Bar Admissions        │  │ Professional          │            │
│  │ ────────────          │  │ ─────────────         │            │
│  │ · Georgia State Bar   │  │ · AILA 2025-26        │            │
│  │ · [Additional bars    │  │   Chapter Chair,      │            │
│  │   pending from client]│  │   Georgia-Alabama     │            │
│  │                       │  │ · [Other memberships  │            │
│  │                       │  │   pending from client]│            │
│  └──────────────────────┘  └──────────────────────┘             │
│                                                                  │
│  ┌──────────────────────┐                                        │
│  │ Education             │                                       │
│  │ ──────────            │                                       │
│  │ · [Law school pending │                                       │
│  │   from client]        │                                       │
│  └──────────────────────┘                                        │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Warm Gray `#F5F4F0`
- Section heading: Playfair Display 700, 28px, Navy
- Credential group headings: Inter 600, 13px, Gold, uppercase
- Credential items: Inter 400, 15px, Charcoal, bullet list
- 2-column grid (Bar + Professional), 3rd block full-width or 3-col
- 48px section padding

---

#### Section 2.4 — Philosophy

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  "Boutique by design, not by limitation."                        │
│   (Pull quote — Playfair italic, 24px, centered)                 │
│                                                                  │
│  What direct attorney communication means in practice:           │
│                                                                  │
│  [icon] You speak with the attorney from day one.                │
│  [icon] No intake specialists. No handoffs.                      │
│  [icon] You'll know the status of your case — always.            │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White `#FFFFFF`
- Pull quote: Playfair Display 400 italic, 24px, Navy, centered, max-width 640px
- Gold quotation marks: decorative, 48px
- Icon list: Lucide `check-circle`, 20px, Gold; text Inter 400, 16px, Charcoal
- Max content width: 720px, centered

---

#### Section 2.5 — About Page CTA

```
┌──────────────────────────────────────────────────────────────────┐
│  Ready to discuss your case?                                     │
│  [Schedule a Consultation]                                       │
└──────────────────────────────────────────────────────────────────┘
```

Same as Home CTA Strip (Navy background, Gold button).

---

### PAGE 3: Practice Areas Hub (`/practice-areas`)

**Purpose:** Navigation hub. Help visitors find their specific situation quickly.

---

#### Section 3.1 — Hub Hero

```
┌──────────────────────────────────────────────────────────────────┐
│ [NAV]                                                            │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Practice Areas                                                  │
│                                                                  │
│  We handle complex immigration cases for individuals             │
│  and families across Georgia, Alabama, North Carolina,           │
│  and South Carolina.                                             │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Warm Gray `#F5F4F0`
- Heading: Playfair Display 700, 48px, Navy
- Subhead: Inter 400, 18px, Charcoal, max-width 600px
- No image — text-only hero for hub page
- 64px vertical padding

---

#### Section 3.2 — Benefits-Based Grid

```
┌──────────────────────────────────────────────────────────────────┐
│  Benefits-Based Immigration                                      │
│  (Gold underline accent, 40px wide, 3px)                         │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ [icon]   │  │ [icon]   │  │ [icon]   │  │ [icon]   │        │
│  │ DACA     │  │ SIJS     │  │ VAWA     │  │ U-Visa   │        │
│  │ 1-line   │  │ 1-line   │  │ 1-line   │  │ 1-line   │        │
│  │ desc     │  │ desc     │  │ desc     │  │ desc     │        │
│  │ Learn →  │  │ Learn →  │  │ Learn →  │  │ Learn →  │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ [icon]   │  │ [icon]   │  │ [icon]   │  │ [icon]   │        │
│  │ TPS      │  │ Family-  │  │ Natural- │  │ Waivers  │        │
│  │ 1-line   │  │ Based    │  │ ization  │  │ 1-line   │        │
│  │ desc     │  │ 1-line   │  │ 1-line   │  │ desc     │        │
│  │ Learn →  │  │ Learn →  │  │ Learn →  │  │ Learn →  │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White `#FFFFFF`
- Category heading: Playfair Display 700, 28px, Navy + Gold underline rule
- 4-column grid desktop, 2-column tablet, 1-column mobile
- Cards: Warm Gray `#F5F4F0` fill, 1px border `#E5E4E0`, 8px radius, 20px padding
- Icon: Lucide outline, 28px, Gold `#C9A84C`
- Card title: Inter 600, 16px, Navy
- Card desc: Inter 400, 14px, Charcoal
- "Learn →": Inter 600, 13px, Gold, no underline. Hover: underline
- Cards: equal height, flex column, "Learn →" pinned to bottom

**Icon Map (Practice Areas):**

| Area | Lucide Icon |
|------|-------------|
| DACA | `shield` |
| SIJS | `baby` or `heart` |
| VAWA | `shield-check` |
| U-Visa | `file-text` |
| TPS | `clock` |
| Family-Based | `users` |
| Naturalization | `star` |
| Waivers | `scroll` or `file-text` |
| Removal Defense | `alert-triangle` |
| Federal Litigation | `landmark` |

---

#### Section 3.3 — Removal Defense

```
┌──────────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────────┐    │
│  │  [alert-triangle icon, 32px, Gold]                       │    │
│  │  Removal Defense                                         │    │
│  │                                                          │    │
│  │  Facing removal proceedings? Whether detained or not,    │    │
│  │  we represent clients at every stage — bond hearings,    │    │
│  │  cancellation of removal, and more.                      │    │
│  │                                                          │    │
│  │  [Learn About Removal Defense →]                         │    │
│  └──────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Warm Gray `#F5F4F0`
- Full-width card with 3px left border in Gold
- White `#FFFFFF` card background
- Heading: Playfair Display 700, 24px, Navy
- Body: Inter 400, 16px, Charcoal
- CTA: Gold text link with arrow

---

#### Section 3.4 — Federal Litigation

Same layout as Removal Defense card, below it.

---

#### Section 3.5 — Hub CTA Strip

```
┌──────────────────────────────────────────────────────────────────┐
│  Not sure which area applies to your situation?                  │
│  Start with a consultation — we'll help you understand           │
│  your options.                                                   │
│                                                                  │
│  [Schedule a Consultation]                                       │
└──────────────────────────────────────────────────────────────────┘
```

Standard Navy CTA Strip.

---

### PAGE 4: Practice Area Template (Shared)

**Applies to all 9 practice area pages.** Engineer implements one template; content is data-driven per area.

---

#### Section 4.1 — Practice Area Hero

```
┌──────────────────────────────────────────────────────────────────┐
│ [NAV]                                                            │
├──────────────────────────────────────────────────────────────────┤
│  [Practice Area Name]                                            │
│  (Playfair Display 700, 48px, Navy)                              │
│                                                                  │
│  [1-sentence description. Who this serves.]                      │
│  (Inter 400, 18px, Charcoal)                                     │
│                                                                  │
│  [Breadcrumb: Home > Practice Areas > {Area Name}]               │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Warm Gray `#F5F4F0`
- Breadcrumb: Inter 400, 13px, Charcoal 60%, `>` separator, current page Navy
- No hero image on practice area pages — text-only to keep load fast and focus on content

---

#### Section 4.2 — Who Qualifies

```
┌──────────────────────────────────────────────────────────────────┐
│  Who May Qualify                                                 │
│                                                                  │
│  [Eligibility bullet 1]                                          │
│  [Eligibility bullet 2]                                          │
│  [Eligibility bullet 3]                                          │
│  [Eligibility bullet 4]                                          │
│                                                                  │
│  [Note: This overview is for informational purposes only.        │
│   Eligibility depends on your specific case.]                    │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White `#FFFFFF`
- Section heading: Playfair Display 700, 28px, Navy
- Gold underline rule: 3px, 40px
- Bullet items: Inter 400, 16px, Charcoal. Bullet: Gold `#C9A84C` dot
- Disclaimer note: Inter 400 italic, 14px, Charcoal 60%
- Max content width: 760px, centered
- 48px section padding

---

#### Section 4.3 — How the Process Works

```
┌──────────────────────────────────────────────────────────────────┐
│  How the Process Works                                           │
│                                                                  │
│  ① [Step name]                                                   │
│    [1–2 sentence description. Timeline note.]                    │
│                                                                  │
│  ② [Step name]                                                   │
│    [1–2 sentence description.]                                   │
│                                                                  │
│  ③ [Step name]                                                   │
│    [1–2 sentence description.]                                   │
│                                                                  │
│  ④ [Step name — if applicable]                                   │
│                                                                  │
│  ⑤ [Step name — if applicable]                                   │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Warm Gray `#F5F4F0`
- Numbered steps: Gold circle with Navy number, 32px diameter
- Vertical connector line: 2px dashed Gold, between steps
- Step name: Inter 600, 16px, Navy
- Step body: Inter 400, 15px, Charcoal
- 3–5 steps per area (content-driven)

---

#### Section 4.4 — What We Do For You

```
┌──────────────────────────────────────────────────────────────────┐
│  How Bardi Immigration Law Helps                                 │
│                                                                  │
│  [3–4 lines describing the attorney's specific role,             │
│   direct communication emphasis, creative strategy note]         │
│                                                                  │
│  [check-circle] [Item 1 — specific service offered]              │
│  [check-circle] [Item 2]                                         │
│  [check-circle] [Item 3]                                         │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White `#FFFFFF`
- Icon: Lucide `check-circle`, 18px, Gold
- Check-list items: Inter 400, 15px, Charcoal, 8px icon gap
- Framing paragraph: Inter 400, 17px, Charcoal

---

#### Section 4.5 — FAQ Accordion

```
┌──────────────────────────────────────────────────────────────────┐
│  Frequently Asked Questions                                      │
│                                                                  │
│  [Q: Question text?]                                    [+]      │
│  ──────────────────────────────────────────────────────────      │
│  [Q: Question text?]                                    [+]      │
│  ──────────────────────────────────────────────────────────      │
│  [Q: Question text?]                                    [−]      │
│  [A: Answer text, expanded. 2–4 sentences.]                      │
│  ──────────────────────────────────────────────────────────      │
│  [Q: Question text?]                                    [+]      │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Warm Gray `#F5F4F0`
- Q row: Inter 600, 15px, Navy. Right-aligned chevron icon (Lucide `chevron-down`)
- Divider: 1px `#E5E4E0`
- Answer: Inter 400, 15px, Charcoal, 16px top padding when expanded
- 3–4 questions per area
- Only one question open at a time (accordion behavior)

---

#### Section 4.6 — Related Practice Areas

```
┌──────────────────────────────────────────────────────────────────┐
│  Related Practice Areas                                          │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │ [icon]       │  │ [icon]       │  │ [icon]       │           │
│  │ [Area Name]  │  │ [Area Name]  │  │ [Area Name]  │           │
│  │ Learn more → │  │ Learn more → │  │ Learn more → │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: White `#FFFFFF`
- 3 cards, 1-line area name, icon, link
- Per cross-link table in BAR-34 sitemap document
- Compact cards: 16px padding, 1px border, 4px radius
- Mobile: horizontal scroll or 1-column stack

---

#### Section 4.7 — Practice Area CTA

Standard Navy CTA Strip: "Start with a Consultation" → `/contact`

---

#### Practice Area Unique Content Callouts

Engineer note: The shared template above is the layout. Content varies per area as follows:

| Area | Hero Desc | Who Qualifies emphasis | Process steps | FAQ topics |
|------|-----------|----------------------|--------------|------------|
| **DACA** | Renewal and first-time DACA applications. For individuals brought to the US as children. | Age, continuous residence, education/military, no felony convictions | File → Biometrics → Decision → EAD card | Renewal timeline, work permit coverage, TPS vs DACA |
| **SIJS** | Protection for unaccompanied minors through the courts. | Under 21, present in US, abuse/neglect/abandonment finding needed | State court finding → USCIS petition → Adjustment of status | Who qualifies, court role, timeline |
| **VAWA** | Self-petition for survivors of domestic violence. Confidential. | Abuse by US citizen or LPR spouse/parent/child | VAWA petition → Approval → Adjustment of status | Confidentiality, evidence needed, safety |
| **U-Visa** | For victims of qualifying crimes who cooperated with law enforcement. | Crime victim, substantial harm, certifying agency cooperation | Law enforcement cert → USCIS petition → Conditional status → LPR path | Which crimes qualify, employer certification |
| **TPS** | Temporary protected status for nationals of designated countries. | Country designation, continuous presence, registration window | Register → Renew → EAD card | Country list, renewal, path to LPR |
| **Family-Based** | Green cards through immediate relatives or preference categories. | Petitioner relationship: spouse, parent, child, sibling | I-130 → Priority date → NVC → Consular/adjustment | Immediate relative vs preference, timeline |
| **Naturalization** | Citizenship for eligible lawful permanent residents. | 5 years LPR (3 if spouse of USC), English, civics | Form N-400 → Interview → Oath ceremony | Eligibility, test prep, dual citizenship |
| **Waivers** | I-601, I-212, I-929 waivers for inadmissibility grounds. | Qualifying relative needed, extreme hardship standard | Application → Evidence package → USCIS/consular decision | Which grounds covered, hardship standard |
| **Removal Defense** | See PAGE 5 below | | | |
| **Federal Litigation** | See PAGE 6 below | | | |

---

### PAGE 5: Removal Defense (`/practice-areas/removal-defense`)

Uses the same template structure but with urgency-forward copy emphasis.

**Hero variance:**
- Headline: "Facing Removal Proceedings? Don't Wait."
- Tone: Urgent but measured — not fear-mongering, not minimizing stakes

**Section variance — The Stakes (replaces "Who Qualifies"):**

```
┌──────────────────────────────────────────────────────────────────┐
│  What's at Stake                                                 │
│                                                                  │
│  Removal proceedings can end in forced return to a country       │
│  you may barely know — separating you from your family,          │
│  your job, your life in the US.                                  │
│                                                                  │
│  Acting quickly matters. The sooner you have representation,     │
│  the more options are available.                                 │
│                                                                  │
│  [alert-triangle, Gold] If you have received an NTA (Notice      │
│  to Appear), contact us immediately.                             │
└──────────────────────────────────────────────────────────────────┘
```

**What We Cover (replaces standard bullet list):**
- Detained removal defense
- Non-detained removal defense
- Bond hearings
- Cancellation of Removal (42B non-LPR)
- Cancellation of Removal (42A LPR)

**Dual CTA — repeated at top and bottom of page:**
```
[Time matters. Contact us now.] → /contact
```

---

### PAGE 6: Federal Litigation (`/practice-areas/federal-litigation`)

Uses the same template structure.

**Hero variance:**
- Headline: "When Administrative Remedies Run Out."
- Subhead: "Federal court is sometimes the only path forward. We know the way."

**Section variance — When Federal Court Applies (replaces "Who Qualifies"):**
```
│  Habeas Corpus Petitions                                         │
│  When an agency wrongfully detains someone, federal court        │
│  can compel release. We file habeas corpus petitions when        │
│  detention is illegal or procedurally defective.                 │
│                                                                  │
│  Mandamus Petitions                                              │
│  When USCIS or another agency unreasonably delays action on      │
│  your case, a writ of mandamus compels a decision.               │
```

---

### PAGE 7: Contact (`/contact`)

**Purpose:** Primary conversion page. All roads lead here.

---

#### Section 7.1 — Contact Hero

```
┌──────────────────────────────────────────────────────────────────┐
│ [NAV]                                                            │
├──────────────────────────────────────────────────────────────────┤
│  Schedule Your Consultation                                      │
│                                                                  │
│  Every consultation is with the attorney — not an intake         │
│  specialist. Tell us about your situation and we'll              │
│  follow up within one business day.                              │
└──────────────────────────────────────────────────────────────────┘
```

---

#### Section 7.2 — Contact Layout (Two-Column)

```
┌─────────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────┐  ┌────────────────────────┐   │
│  │ CONTACT FORM                 │  │ DIRECT CONTACT         │   │
│  │                              │  │                        │   │
│  │ Name *                       │  │ [phone icon]           │   │
│  │ [_________________________]  │  │ [Phone number TBD]     │   │
│  │                              │  │                        │   │
│  │ Phone *                      │  │ [mail icon]            │   │
│  │ [_________________________]  │  │ [Email TBD]            │   │
│  │                              │  │                        │   │
│  │ Email *                      │  │ [clock icon]           │   │
│  │ [_________________________]  │  │ Mon–Fri, 9am–5pm ET    │   │
│  │                              │  │                        │   │
│  │ Practice Area                │  │ [map-pin icon]         │   │
│  │ [Select ▾ ______________]    │  │ [Address TBD]          │   │
│  │                              │  │                        │   │
│  │ Language Preference          │  │ ─────────────────────  │   │
│  │ ○ English  ○ Spanish         │  │                        │   │
│  │                              │  │ BOOKING EMBED          │   │
│  │ How can we help you?         │  │ ┌──────────────────┐   │   │
│  │ [_________________________]  │  │ │ [Placeholder for │   │   │
│  │ [_________________________]  │  │ │  Microsoft       │   │   │
│  │ [_________________________]  │  │ │  Bookings embed  │   │   │
│  │                              │  │ │  or Calendly —   │   │   │
│  │ [ Submit → ]                 │  │ │  pending client  │   │   │
│  │                              │  │ │  decision]       │   │   │
│  │ [We respond within 1         │  │ └──────────────────┘   │   │
│  │  business day.]              │  │                        │   │
│  └──────────────────────────────┘  └────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

#### Contact Form — Full Field Specification

| Field | Type | Required | Validation | Notes |
|-------|------|----------|------------|-------|
| Name | Text input | Yes | Non-empty | Label: "Full Name" |
| Phone | Tel input | Yes | US phone format preferred, not enforced | Label: "Phone Number" |
| Email | Email input | Yes | Valid email format | Label: "Email Address" |
| Practice Area | Select dropdown | No | — | Options: DACA, SIJS, VAWA, U-Visa, TPS, Family-Based / Green Cards, Naturalization, Waivers, Removal Defense, Federal Litigation, Not Sure |
| Language Preference | Radio group | No | — | Options: English, Spanish. Default: none selected |
| Message | Textarea | No | — | Label: "How can we help you?", rows: 4 |
| Submit | Button | — | — | "Submit" or "Send Message". Gold bg, Navy text |

**Error states:**
- Required field empty on submit: 1px border Crimson `#C0392B`, error message below in Crimson, 13px Inter 400
- Success state: Replace form with confirmation message in Forest Green `#27AE60`

**Form specs:**
- Labels: Inter 600, 13px, Navy, above each field
- Inputs: 1px border `#D5D4D0`, 8px padding, 4px radius, 16px Inter 400
- Focus: 2px border Navy, no outline
- Mobile: Single column, form takes full width

---

#### Section 7.3 — Direct Contact Info (Right Column)

```
[phone icon] [Phone TBD — placeholder: "(555) 000-0000"]
[mail icon]  [Email TBD — placeholder: "info@bardilaw.com"]
[clock icon] Mon–Fri, 9am–5pm ET
[map-pin]    [Office address TBD]
```

**Specs:**
- Icon: Lucide outline, 20px, Gold
- Label: Inter 400, 15px, Charcoal
- "You'll speak directly with the attorney." — Inter 400 italic, 14px, Charcoal

---

#### Section 7.4 — Booking Embed Placeholder

```
┌─────────────────────────────────────────┐
│  [Prefer to book a time directly?]      │
│  Microsoft Bookings or Calendly embed   │
│  will appear here once client           │
│  configures the tool.                   │
│                                         │
│  This section is optional at launch —  │
│  remove or show based on client         │
│  decision (see CLIENT-BRIEF §11).       │
└─────────────────────────────────────────┘
```

Engineer note: Reserve the right column space. Use a `min-height: 200px` placeholder div with a comment in code. Remove or replace at client confirmation.

---

## Bilingual (ES) Implementation Notes

- Every page has a `/es/` counterpart with identical layout
- No layout changes between EN and ES — copy only
- Language toggle in nav updates locale cookie and redirects to ES equivalent URL
- Contact form Language Preference field defaults to "Spanish" on all `/es/` pages
- `hreflang` tags on every page (see BAR-34 sitemap §5)
- All placeholder text in ES pages should be in Spanish
- Attorney's name is unchanged in both languages

---

## Mobile Layout Rules (Global)

| Pattern | Desktop | Mobile |
|---------|---------|--------|
| Hero sections | 55–60% text / 40–45% image | Stacked, text top |
| Section headings | 32–48px | 24–32px |
| Body text | 16–18px | 15–16px |
| 3-column grids | 3 columns | 1 column |
| 4-column grids | 4 columns | 2 columns (scroll to 1 on small) |
| Nav | Horizontal links | Hamburger |
| Footer | 4 columns | 2 columns → 1 column |
| Card padding | 24px | 16px |
| Section padding | 64–80px | 40–48px |

---

## Interaction Notes

| Interaction | Behavior |
|-------------|----------|
| Nav CTA hover | Gold bg → 10% darker, slight scale (1.02) |
| Card hover | 2px border Navy, subtle shadow (0 2px 12px rgba(0,0,0,0.08)) |
| Accordion open/close | Chevron rotates 180°, height transition 200ms ease |
| Form submit (success) | Fade form out, fade success message in |
| Language toggle | Full page reload to EN/ES equivalent URL |
| Testimonial carousel | Slide transition, 400ms ease |
| Sticky nav | Appears on scroll past hero, 1px bottom shadow added |

---

## Open Items for Engineering

| # | Item | Owner | Impact |
|---|------|-------|--------|
| 1 | Booking flow: Microsoft Bookings embed vs. form only | Board/client | Contact page right column |
| 2 | Phone number + email for Contact page and footer | Client | Placeholder until received |
| 3 | Attorney headshot for About hero + Home teaser | Client | Use placeholder rectangle |
| 4 | Office address | Client | Placeholder on Contact |
| 5 | Which bars admitted to (beyond Georgia) | Client | Credentials section |
| 6 | Law school / education details | Client | Credentials section |
| 7 | Real testimonials | Client / CMO | Use 2–3 placeholder slots |

---

*Source of truth for engineering layout. Refer to BRAND-IDENTITY.md for all color/typography tokens. Refer to BAR-34 sitemap document for URL structure, navigation, and linking plan.*
