# Bardi Immigration Law — Information Architecture & Sitemap

> **Status:** Delivered (BAR-11) · 2026-05-19  
> **Owner:** UI Designer  
> **Consumers:** Engineer (build contract), CMO (content plan), TW (copy scope)

---

## Overview

This document defines the page structure, navigation hierarchy, URL schema, and content groupings for bardilaw.com. All pages exist in both English (primary) and Spanish (mirrored under `/es/`). This is the build contract Engineering implements.

**Constraints driving these decisions:**
- 3-week launch window (June 10, 2026)
- Solo attorney — minimalist, not a factory
- 3 ICPs: Benefits-Based, Humanitarian/Juvenile, Removal Defense
- Primary CTA: Book a consultation (booking method TBD)
- Spanish translation required on all public-facing pages

---

## 1. Navigation Architecture

### Primary Navigation (header)

```
Home | Services ▾ | About | Resources | Contact
```

**Services dropdown:**
```
Benefits-Based Immigration
Removal Defense
Federal Litigation
```

### Footer Navigation

```
Column 1 — Services
  Benefits-Based Immigration
  Removal Defense
  Federal Litigation

Column 2 — Firm
  About
  Resources
  Contact

Column 3 — Legal
  Privacy Policy
  Terms of Use

Column 4 — Contact
  Phone number
  Email
  Schedule a Consultation [CTA button]
```

### Language Toggle

Persistent in header (top-right or inline with nav): `EN | ES`

Maps current English URL to its `/es/` equivalent and vice versa.

---

## 2. Full Page Inventory

### 2.1 English Routes (Primary)

| # | Page | Route | Template | Priority |
|---|------|--------|----------|----------|
| 1 | Home | `/` | Homepage | P0 — launch required |
| 2 | Services Hub | `/services` | Service hub | P0 — launch required |
| 3 | Benefits-Based Immigration | `/services/benefits-based-immigration` | Service category | P0 — launch required |
| 4 | Removal Defense | `/services/removal-defense` | Service category | P0 — launch required |
| 5 | Federal Litigation | `/services/federal-litigation` | Service category | P0 — launch required |
| 6 | About | `/about` | Attorney bio | P0 — launch required |
| 7 | Resources (Blog stub) | `/resources` | Blog index | P0 — launch required |
| 8 | Contact | `/contact` | Contact/booking | P0 — launch required |
| 9 | Privacy Policy | `/privacy-policy` | Legal | P0 — launch required |
| 10 | Terms of Use | `/terms` | Legal | P0 — launch required |
| 11 | Naturalization | `/services/naturalization` | Service detail | P1 — post-launch |
| 12 | Green Cards / LPR Status | `/services/green-cards` | Service detail | P1 — post-launch |
| 13 | Family-Based Petitions | `/services/family-based-petitions` | Service detail | P1 — post-launch |
| 14 | DACA | `/services/daca` | Service detail | P1 — post-launch |
| 15 | U-Visa | `/services/u-visa` | Service detail | P1 — post-launch |
| 16 | VAWA Petitions | `/services/vawa` | Service detail | P1 — post-launch |
| 17 | TPS | `/services/temporary-protected-status` | Service detail | P1 — post-launch |
| 18 | Waivers (I-601, I-212, I-929) | `/services/waivers` | Service detail | P1 — post-launch |
| 19 | SIJS | `/services/sijs` | Service detail | P1 — post-launch |
| 20 | Bond Hearings | `/services/bond-hearings` | Service detail | P1 — post-launch |
| 21 | Cancellation of Removal | `/services/cancellation-of-removal` | Service detail | P1 — post-launch |
| 22 | Habeas Corpus | `/services/habeas-corpus` | Service detail | P1 — post-launch |
| 23 | Mandamus Petitions | `/services/mandamus` | Service detail | P1 — post-launch |
| 24 | Blog post | `/resources/[slug]` | Blog post | P1 — post-launch |
| 25 | 404 Not Found | `/404` | Error | P0 — launch required |

### 2.2 Spanish Mirror Routes

All P0 English routes mirror under `/es/`:

| English Route | Spanish Route |
|---------------|---------------|
| `/` | `/es` |
| `/services` | `/es/servicios` |
| `/services/benefits-based-immigration` | `/es/servicios/beneficios-migratorios` |
| `/services/removal-defense` | `/es/servicios/defensa-de-deportacion` |
| `/services/federal-litigation` | `/es/servicios/litigacion-federal` |
| `/about` | `/es/sobre-nosotros` |
| `/resources` | `/es/recursos` |
| `/contact` | `/es/contacto` |
| `/privacy-policy` | `/es/politica-de-privacidad` |
| `/terms` | `/es/terminos-de-uso` |

> **Engineering note:** Implement Next.js App Router i18n routing or a manual `/es/` folder structure — TBD based on scope. Verify with CTO. Spanish slugs above are proposed; translator should confirm.

---

## 3. Page Content Map

### `/` — Home

**Purpose:** Convert first-time visitors into consultation bookings. Serves all 3 ICPs.

**Sections (in order):**
1. Hero — Headline, sub-headline, primary CTA ("Schedule a Consultation"), trust signal (AILA chapter chair, years in practice)
2. Services overview — 3 cards linking to practice area pages
3. Attorney differentiator — "Why Bardi Law" (boutique, direct attorney access, AILA credential)
4. ICP callouts — Callout blocks for 3 audience types (seeking status, facing removal, juvenile cases)
5. Trust signals — client testimonials (if available at launch) or credentials/affiliations
6. Contact strip — simplified contact form or CTA to `/contact`

**Primary CTA:** "Schedule a Consultation" (links to `/contact` or booking widget)

---

### `/services` — Services Hub

**Purpose:** Navigation hub and SEO landing page for "immigration lawyer [state]" queries.

**Sections:**
1. Page hero — "Practice Areas" headline, brief positioning statement
2. 3 practice area cards — icon, title, 2-sentence description, link to category page
3. ICP guidance — "Not sure which applies to you?" → link to Contact

**Primary CTA:** "Not sure where to start? Schedule a free consultation."

---

### `/services/benefits-based-immigration` — Benefits-Based Immigration

**Purpose:** Convert ICP 1 (Millennial/Gen-Z seeking status) and ICP 2 (Humanitarian/Juvenile).

**Sections:**
1. Hero — headline, who this is for (plain English)
2. Services list — Naturalization, LPR/Green Card, Family Petitions, TPS, Waivers, DACA, SIJS, VAWA, U-Visa — each as a named anchor with 2–3 sentence description
3. Process overview — "What to expect" steps (3–4 steps max)
4. CTA — "Start your petition" → contact

**Named anchors (launch):**
- `#naturalization`
- `#green-cards`
- `#family-petitions`
- `#tps`
- `#waivers`
- `#daca`
- `#sijs`
- `#vawa`
- `#u-visa`

> Individual service detail pages (P1) will link off each anchor. At launch, all services live on this single page via anchors.

---

### `/services/removal-defense` — Removal Defense

**Purpose:** Convert ICP 3 (facing deportation) — high urgency, high emotional stakes.

**Sections:**
1. Hero — urgency-forward headline ("Facing Removal? Don't Wait."), immediate CTA
2. Services covered — Detained defense, Non-detained defense, Bond hearings, Cancellation of Removal (42B / 42A)
3. Process — what happens in removal proceedings (brief, plain-English explainer)
4. Attorney credibility — why direct attorney representation matters here
5. CTA — "Call now or schedule an emergency consultation"

**Named anchors:**
- `#detained-defense`
- `#bond-hearings`
- `#cancellation-of-removal`

---

### `/services/federal-litigation` — Federal Litigation

**Purpose:** Establish authority for appellate/federal work; narrower audience.

**Sections:**
1. Hero — headline, 2-sentence positioning (when administrative remedies are exhausted)
2. Services — Habeas corpus, Mandamus petitions — with plain-English explanation of when each applies
3. Who this is for
4. CTA — "Discuss your federal case"

**Named anchors:**
- `#habeas-corpus`
- `#mandamus`

---

### `/about` — About

**Purpose:** Convert trust. This is where credentials, AILA role, and boutique positioning live.

**Sections:**
1. Attorney photo + name headline
2. Attorney bio — origin story, credentials, AILA Chapter Chair (GA-AL) 2025-26
3. Practice philosophy — direct communication, treats clients as family, competent and creative representation
4. By-the-numbers bar — years of practice, cases handled (if available), AILA membership
5. Professional affiliations
6. CTA — "Let's talk about your case"

---

### `/resources` — Resources

**Purpose:** Blog/content hub — stub at launch. SEO play post-launch.

**Launch state:**
- Hero + "Immigration guidance, plain and simple" positioning
- 2–3 placeholder content cards (if copy is ready) or single "Coming soon" message with email capture or CTA
- Do not launch an empty grid. Either have 2+ real posts or a single clean "We're building something useful" section.

**Post-launch:** Blog posts at `/resources/[slug]`

---

### `/contact` — Contact

**Purpose:** Final conversion step. Primary CTA destination from every page.

**Sections:**
1. Headline — "Schedule a Consultation"
2. Intake form — name, email, phone, case type (dropdown: Benefits-Based, Removal Defense, Federal Litigation, Unsure), brief description of situation, preferred contact method
3. What happens next — 3-step process (form received, attorney reviews, personal callback within 24 hrs)
4. Direct contact info — phone number, email (for those who won't fill a form)

> **Open decision (CLIENT-BRIEF §11.1):** Online booking widget (Microsoft Bookings / Calendly) vs. form-only. If booking is added, embed below the form section. Form stays regardless — not everyone will use self-serve booking.

---

### `/privacy-policy` and `/terms`

**Purpose:** Legal compliance. Required pre-launch.

**Content:** Standard US law firm privacy policy and terms. TW agent to draft; attorney must review before publishing.

---

## 4. URL Schema Rules

1. **All lowercase, hyphenated slugs.** No underscores, no camelCase.
2. **Descriptive, not clever.** Prefer `/services/removal-defense` over `/removal` or `/defense`.
3. **No trailing slashes** (Cloudflare Pages default; verify in `next.config.ts`).
4. **Spanish routes use Spanish nouns** in slugs — not `/es/services/removal-defense` (mixed languages). Use `/es/servicios/defensa-de-deportacion`.
5. **Service detail pages (P1)** extend the category URL: `/services/[practice-area]/[service-slug]`.
6. **Blog posts:** `/resources/[year]-[topic-slug]` — e.g., `/resources/2026-what-is-a-u-visa`.

---

## 5. SEO & Metadata Structure

Each page needs:

| Tag | Notes |
|-----|-------|
| `<title>` | "Service Name — Bardi Immigration Law" format |
| `<meta description>` | 140–160 chars, ICP-targeted, includes state names where relevant |
| Open Graph title + description | Same as title/meta but can be slightly more conversational |
| Open Graph image | 1200×630px; brand-compliant; Warm Gray bg + logo + page headline |
| `hreflang` | `en` for primary, `es` for `/es/` mirror |
| Canonical | Self-referencing; no duplicate content between EN and ES |

**Priority pages for geo-targeted meta descriptions:** Home, Benefits-Based, Removal Defense — include "Georgia," "Atlanta," "Southeast" in descriptions.

---

## 6. Navigation Priority / Crawl Priority

| Page | `sitemap.xml` priority | Changefreq |
|------|------------------------|------------|
| `/` | 1.0 | weekly |
| `/services` | 0.9 | monthly |
| `/services/benefits-based-immigration` | 0.9 | monthly |
| `/services/removal-defense` | 0.9 | monthly |
| `/services/federal-litigation` | 0.8 | monthly |
| `/about` | 0.8 | monthly |
| `/contact` | 0.8 | monthly |
| `/resources` | 0.7 | weekly |
| `/resources/[slug]` | 0.6 | never |
| `/privacy-policy`, `/terms` | 0.1 | yearly |

> `next-sitemap` generates `sitemap.xml` at build time. Configure per-page priorities in `next-sitemap.config.js`.

---

## 7. Redirect Map

| From | To | Reason |
|------|-----|--------|
| `/home` | `/` | Common mistype |
| `/services/green-card` | `/services/benefits-based-immigration#green-cards` | Launch interim (P1 page not built yet) |
| `/services/daca` | `/services/benefits-based-immigration#daca` | Launch interim |
| `/services/u-visa` | `/services/benefits-based-immigration#u-visa` | Launch interim |
| `/attorney` | `/about` | Alternate entry |
| `/consultation` | `/contact` | Direct campaign URL |
| `/book` | `/contact` | Short campaign URL |

> Implement as Next.js `redirects()` in `next.config.ts`.

---

## 8. Launch vs. Post-Launch Scope

### Launch Required (P0) — 10 pages

- Home, Services Hub, Benefits-Based, Removal Defense, Federal Litigation, About, Resources (stub), Contact, Privacy Policy, Terms + all Spanish mirrors

### Post-Launch Expansion (P1)

- 13 individual service detail pages (one per named service)
- Blog post template + first 2–3 SEO posts
- Possible booking widget integration (resolves CLIENT-BRIEF open decision §11.1)
- Google Business Profile integration (CMO task)

---

## 9. Open Items

| # | Item | Owner | Blocks |
|---|------|-------|--------|
| 1 | Confirm booking flow decision (form only vs. Microsoft Bookings / Calendly) | Client / Board | `/contact` page spec |
| 2 | Confirm domain registration: bardilaw.com | Board | All routes |
| 3 | Confirm Spanish URL slugs with translator | TW / Translator | Spanish routes |
| 4 | Attorney bio photo available for `/about`? | Client | About page |
| 5 | Testimonials available at launch? | Client | Home page trust section |

---

*Delivered by UI Designer · BAR-11 · 2026-05-19*  
*Engineering: use this as the route/build contract. CMO/TW: use P0 page list as content scope.*
