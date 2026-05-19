# Bardi Immigration Law — Information Architecture & Sitemap

> **Owner:** UI Designer · **Issue:** BAR-34 · **Last updated:** 2026-05-19

---

## 1. Full Sitemap

### Tier 1 — Core Pages

| Page | EN URL | ES URL | Purpose |
|------|--------|--------|---------|
| Home | `/` | `/es/` | Entry point; establishes trust, introduces practice |
| About | `/about` | `/es/about` | Attorney bio, credentials, philosophy |
| Practice Areas Hub | `/practice-areas` | `/es/practice-areas` | Navigation hub for all service pages |
| Resources | `/resources` | `/es/resources` | Blog / educational content index |
| Contact | `/contact` | `/es/contact` | Primary conversion page; form + phone |

### Tier 2 — Practice Area Sub-Pages

#### Benefits-Based Immigration

| Page | EN URL | ES URL |
|------|--------|--------|
| DACA | `/practice-areas/daca` | `/es/practice-areas/daca` |
| SIJS | `/practice-areas/sijs` | `/es/practice-areas/sijs` |
| VAWA | `/practice-areas/vawa` | `/es/practice-areas/vawa` |
| U-Visa | `/practice-areas/u-visa` | `/es/practice-areas/u-visa` |
| TPS | `/practice-areas/tps` | `/es/practice-areas/tps` |
| Family-Based / Green Cards | `/practice-areas/family-based` | `/es/practice-areas/family-based` |
| Naturalization | `/practice-areas/naturalization` | `/es/practice-areas/naturalization` |
| Waivers | `/practice-areas/waivers` | `/es/practice-areas/waivers` |

#### Removal Defense

| Page | EN URL | ES URL |
|------|--------|--------|
| Removal Defense | `/practice-areas/removal-defense` | `/es/practice-areas/removal-defense` |

#### Federal Litigation

| Page | EN URL | ES URL |
|------|--------|--------|
| Federal Litigation | `/practice-areas/federal-litigation` | `/es/practice-areas/federal-litigation` |

### Tier 3 — Utility Pages

| Page | EN URL | ES URL |
|------|--------|--------|
| Privacy Policy | `/privacy` | `/es/privacy` |
| Terms of Use | `/terms` | `/es/terms` |
| 404 | `/404` | — |

### Blog (Resources)

| Page | EN URL | ES URL |
|------|--------|--------|
| Blog Index | `/resources` | `/es/resources` |
| Blog Post | `/resources/[slug]` | `/es/resources/[slug]` |

### Page Count Summary

| Category | EN | ES | Total |
|----------|----|----|-------|
| Core pages | 5 | 5 | 10 |
| Benefits sub-pages (8) | 8 | 8 | 16 |
| Removal Defense | 1 | 1 | 2 |
| Federal Litigation | 1 | 1 | 2 |
| Utility (Privacy, Terms, 404) | 3 | 2 | 5 |
| **Total (excl. blog posts)** | **18** | **17** | **35** |

---

## 2. Navigation Structure

### Primary Navigation

```
[Logo: Horizontal full-color]   Home   Practice Areas ▾   About   Resources   [Schedule a Consultation →]   EN | ES
```

#### Practice Areas Mega-Dropdown

```
Practice Areas
├── Benefits-Based Immigration
│   ├── DACA
│   ├── SIJS
│   ├── VAWA
│   ├── U-Visa
│   ├── TPS
│   ├── Family-Based / Green Cards
│   ├── Naturalization
│   └── Waivers
├── Removal Defense
└── Federal Litigation
```

**Primary CTA button:** "Schedule a Consultation" — Gold (#C9A84C) background, Navy (#1B2A4A) text. Links to `/contact`. Pinned right in desktop nav; sticky at bottom of mobile hamburger menu.

**Language toggle:** Top-right of nav bar, "EN | ES". Switches between `/[path]` and `/es/[path]`. Locale persisted via cookie.

**Mobile:** Hamburger collapse. Practice Areas uses accordion expand. CTA button visible below accordion in open state.

### Footer Navigation

```
┌──────────────────────────────────────────────────────────────────┐
│  [Logo reversed — white wordmark on Navy]                        │
├────────────────┬────────────────┬──────────────┬─────────────────┤
│ Practice Areas │ Firm           │ Legal        │ Contact         │
│ ─────────────  │ ─────────────  │ ──────────── │ ──────────────  │
│ DACA           │ About          │ Privacy      │ [Phone TBD]     │
│ SIJS           │ Resources      │ Terms        │ [Email TBD]     │
│ VAWA           │ Contact        │              │                 │
│ U-Visa         │                │              │ AILA Chapter    │
│ TPS            │                │              │ Chair 2025-26   │
│ Family-Based   │                │              │ (GA-AL)         │
│ Naturalization │                │              │                 │
│ Waivers        │                │              │                 │
│ Removal Defense│                │              │                 │
│ Fed. Litigation│                │              │                 │
├────────────────┴────────────────┴──────────────┴─────────────────┤
│  © 2026 Bardi Immigration Law. All rights reserved.   EN | ES    │
└──────────────────────────────────────────────────────────────────┘
```

> Footer background: Navy (#1B2A4A). All footer text: White (#FFFFFF). Gold (#C9A84C) used for column headings and hover states only.

---

## 3. Content Hierarchy Per Page

### 3.1 Home (`/`)

| # | Section | Content | CTA |
|---|---------|---------|-----|
| 1 | **Hero** | Headline + subhead. Regional SE framing. Light background + attorney image or abstract visual. | "Schedule a Consultation" (Gold, primary) |
| 2 | **Trust Bar** | AILA Chapter Chair · SE regional reach (GA, AL, NC, SC) · Direct attorney access | — |
| 3 | **Practice Areas Overview** | 3 category cards: Benefits-Based, Removal Defense, Federal Litigation. 1-sentence description each. | "Explore [Area] →" per card |
| 4 | **Why Bardi Law** | 4 differentiators: creative/complex counsel · clients treated as family · AILA leadership · direct attorney communication | — |
| 5 | **Attorney Intro Teaser** | Attorney photo + 2–3 lines bio + credential callout | "Meet the Attorney →" → `/about` |
| 6 | **Testimonials** | 2–3 client quotes (placeholders until real testimonials sourced) | — |
| 7 | **CTA Strip** | "Ready to take the next step?" | "Schedule a Consultation" (Gold) |
| 8 | **Footer** | Full footer (§2 above) | — |

---

### 3.2 About (`/about`)

| # | Section | Content |
|---|---------|---------|
| 1 | **Hero** | Attorney headshot (pending from client). Headline: "Expert Counsel, Personal Attention." |
| 2 | **Biography** | 2–3 paragraphs. Background, years of practice, regional focus, personal motivation. |
| 3 | **Credentials** | Bar admissions. AILA 2025-26 Chapter Chair (GA-AL). Education. |
| 4 | **Philosophy** | "Boutique by design, not by limitation." What direct attorney communication means in practice. |
| 5 | **CTA** | "Schedule a Consultation" |

---

### 3.3 Practice Areas Hub (`/practice-areas`)

| # | Section | Content |
|---|---------|---------|
| 1 | **Hero** | "We handle complex immigration cases across the Southeast." |
| 2 | **Benefits Grid** | 8 cards. Icon (Lucide) + name + 1-line description. Links to each benefits sub-page. |
| 3 | **Removal Defense** | Full-width card. Urgency-forward copy. |
| 4 | **Federal Litigation** | Full-width card. |
| 5 | **CTA Strip** | "Not sure which area applies to you? Start with a consultation." |

---

### 3.4 Benefits Practice Area Pages (Template)

_Applies to: DACA, SIJS, VAWA, U-Visa, TPS, Family-Based, Naturalization, Waivers_

| # | Section | Content |
|---|---------|---------|
| 1 | **Hero** | Practice area name. 1-sentence description. Who this serves. |
| 2 | **Who Qualifies** | Eligibility criteria in plain language. |
| 3 | **How the Process Works** | 3–5 step numbered flow. Timeline expectations included. |
| 4 | **What We Do For You** | Bardi Law's specific role. Direct attorney communication emphasized. |
| 5 | **FAQ** | 3–4 questions in expandable accordion. |
| 6 | **Related Practice Areas** | 2–3 cross-links (see §4 cross-link table). |
| 7 | **CTA** | "Start with a Consultation" → `/contact` |

---

### 3.5 Removal Defense (`/practice-areas/removal-defense`)

| # | Section | Content |
|---|---------|---------|
| 1 | **Hero** | "Facing Removal Proceedings? Don't Wait." Urgent but measured tone. |
| 2 | **What We Cover** | Detained vs. non-detained removal defense · Bond hearings · Cancellation of Removal (42A LPR / 42B non-LPR). |
| 3 | **The Stakes** | Plain-language explanation of what deportation means for your life and family. |
| 4 | **Our Approach** | Attorney-direct representation from day one. No intake specialist. |
| 5 | **FAQ** | Accordion. Covers common questions about NTAs, timelines, bond eligibility. |
| 6 | **CTA** | Prominent placement. "Time matters. Contact us now." → `/contact` |

---

### 3.6 Federal Litigation (`/practice-areas/federal-litigation`)

| # | Section | Content |
|---|---------|---------|
| 1 | **Hero** | "When Administrative Remedies Run Out." |
| 2 | **When Federal Court Is the Path** | Habeas corpus explained · Mandamus petitions explained · When each applies. |
| 3 | **Our Litigation Experience** | Attorney credentials in federal court context. |
| 4 | **FAQ** | Accordion. |
| 5 | **CTA** | "Schedule a Consultation" |

---

### 3.7 Contact (`/contact`)

| # | Section | Content |
|---|---------|---------|
| 1 | **Headline** | "Schedule Your Consultation" |
| 2 | **Contact Form** | Fields: Name, Phone, Email, Practice Area (dropdown — all 10 areas), Message, Language preference (EN/ES). |
| 3 | **Direct Contact Info** | Phone (TBD) · Email (TBD) · "You'll speak directly with the attorney." |
| 4 | **Booking Embed Placeholder** | Space reserved for Microsoft Bookings or Calendly embed — pending client decision (open item §5). |
| 5 | **Office Info** | Address if applicable (pending from client). |

---

### 3.8 Resources / Blog (`/resources`)

| # | Section | Content |
|---|---------|---------|
| 1 | **Header** | "Immigration Resources" |
| 2 | **Filter Bar** | Filter by practice area tag. |
| 3 | **Post Grid** | Card: thumbnail + title + date + practice area tag + 1-sentence excerpt. |
| 4 | **Individual Post Template** | Title · Attorney byline · Date · Practice area tag · Body · Related posts (2) · CTA strip. |

---

## 4. Internal Linking Plan

### Page-Level Links

| Source Page | Links To | Purpose |
|------------|----------|---------|
| Home hero | `/contact` | Primary conversion |
| Home practice cards (×3) | `/practice-areas/[category]` | Deep-link exploration |
| Home attorney teaser | `/about` | Trust building |
| Home testimonials section | `/contact` | Secondary conversion |
| About | `/contact` | Conversion |
| Practice Areas Hub | Each sub-page (×10) | Navigation |
| Each practice area page | `/contact` | Conversion CTA |
| Each practice area page | 2–3 related practice area pages | Cross-sell / reduce bounce |
| Removal Defense | `/contact` | Urgent conversion (repeated CTA) |
| Resources post body | Relevant practice area pages | SEO + engagement |
| Resources post | `/contact` | Post-article conversion |
| 404 | Home, Contact | Recovery path |
| Footer | All core pages + all 10 practice areas | Global utility nav |

### Cross-Links Between Practice Areas

| Practice Area | Related Practice Areas |
|--------------|----------------------|
| DACA | Family-Based, TPS, Naturalization |
| SIJS | Family-Based, Removal Defense |
| VAWA | U-Visa, Removal Defense |
| U-Visa | VAWA, Family-Based |
| TPS | DACA, Family-Based |
| Family-Based / Green Cards | Naturalization, Waivers |
| Naturalization | Family-Based |
| Waivers | Family-Based, Removal Defense |
| Removal Defense | Waivers, Federal Litigation |
| Federal Litigation | Removal Defense |

---

## 5. Bilingual Architecture

- Every EN page has an exact ES counterpart at `/es/[same-path]`.
- Language toggle in primary nav (top-right) and footer persists locale via cookie.
- `hreflang` tags on all pages:
  ```html
  <link rel="alternate" hreflang="en" href="https://bardilaw.com/[path]">
  <link rel="alternate" hreflang="es" href="https://bardilaw.com/es/[path]">
  <link rel="alternate" hreflang="x-default" href="https://bardilaw.com/[path]">
  ```
- EN is canonical. ES pages are full translations, not alternate content strategies.
- URL structure: `/es/` prefix on all Spanish pages; same slug in both languages (e.g., `/practice-areas/daca` and `/es/practice-areas/daca`).
- Blog posts: translated 1:1 with EN originals at launch. No ES-exclusive posts in scope.
- Contact form includes language preference field so attorney knows to respond in Spanish.

---

## 6. Open Items

| # | Item | Owner | Status |
|---|------|-------|--------|
| 1 | Booking flow: Microsoft Bookings embed vs. contact form only | Board / client | Open (see CLIENT-BRIEF §11) |
| 2 | Phone number and email for Contact page + Footer | Board / client | Pending |
| 3 | Attorney headshot for About hero | Client | Pending |
| 4 | Office address (if applicable) | Client | Pending |
| 5 | First 3 blog posts to seed Resources at launch | CMO / TW | Unscheduled |

---

*This document is the source of truth for site structure. Engineering should create routes and page scaffolding from §1 (Sitemap) and §2 (Navigation). Copy/content work should follow §3 (Content Hierarchy). SEO/linking work follows §4 and §5.*
