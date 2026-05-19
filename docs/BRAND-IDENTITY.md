# Bardi Immigration Law — Brand Identity

> Living brand book. Update when visual decisions change.

---

## Brand Vision

Bardi Immigration Law exists to make one of life's most consequential processes feel navigable — not intimidating. We serve individuals and families navigating U.S. immigration with expert, personalized counsel.

**Brand promise:** Clarity and confidence at every step.

**Three words that define the brand (client-chosen):** Boutique · Minimalist · Trustworthy

**Emotional response the brand should evoke:**
- Trustworthy and authoritative — clients feel safe putting their future in our hands.
- Warm and human — not bureaucratic, not cold, not factory-like.
- Competent without being intimidating — sophisticated counsel that speaks plainly.
- Refined and personal — boutique in feel, accessible in tone.

---

## Color Palette

| Role      | Name           | Hex       | RGB                | Usage                                              |
|-----------|----------------|-----------|--------------------|----------------------------------------------------|
| Primary   | Navy           | `#1B2A4A` | 27, 42, 74         | Headlines, nav, primary buttons, logo — **not page backgrounds** |
| Secondary | Gold           | `#C9A84C` | 201, 168, 76       | CTAs, accents, underlines, border highlights       |
| Neutral   | Warm Gray      | `#F5F4F0` | 245, 244, 240      | **Primary page background**, section fills, card backgrounds |
| Surface   | White          | `#FFFFFF` | 255, 255, 255      | Content cards, modal surfaces, logo backgrounds    |
| Text      | Charcoal       | `#2E2E2E` | 46, 46, 46         | Body copy, form labels                             |
| Error     | Crimson        | `#C0392B` | 192, 57, 43        | Form validation errors, alerts                     |
| Success   | Forest Green   | `#27AE60` | 39, 174, 96        | Confirmation messages, progress indicators         |

> **Sky Blue (`#4A90D9`) removed.** The client's minimalist direction calls for a restrained palette. Two accent colors (Navy + Gold) are sufficient and keep the aesthetic clean. If a link/info-state color is needed in implementation, use Navy at reduced opacity or a desaturated tint — confirm with UI Designer before adding a third brand color.

**Color use rules:**
- **Page backgrounds are always light** — Warm Gray (`#F5F4F0`) is the default page background; white (`#FFFFFF`) for card surfaces and logo usage areas.
- Navy is restricted to text, headers, nav, buttons, and borders — never as a section fill or page background.
- Gold is an accent — use sparingly (borders, underlines, icon fills, CTA buttons) to avoid looking dated.
- Never use Gold as body text; minimum 4.5:1 contrast ratio on all text colors.
- Dark-background sections (e.g., footer) may use Navy, but should be rare — client preference is light, easy-to-read layouts throughout.

---

## Typography

| Role      | Typeface          | Weight       | Size (desktop) | Usage                                          |
|-----------|-------------------|--------------|----------------|------------------------------------------------|
| Heading   | Playfair Display  | 700 Bold     | 32–56px        | Page titles, section headers, hero text        |
| Subhead   | Playfair Display  | 400 Regular  | 20–28px        | Sub-sections, pull quotes                      |
| Body      | Inter             | 400 Regular  | 16–18px        | Paragraphs, form copy, descriptions            |
| UI Label  | Inter             | 600 SemiBold | 12–14px        | Buttons, nav items, badges, form labels        |
| Mono      | JetBrains Mono    | 400 Regular  | 13px           | File names, case numbers, code references only |

**Typography rules:**
- Playfair Display conveys prestige and legal authority. Use it for anything the client reads first.
- Inter is the workhorse — legible at small sizes, neutral, widely available via Google Fonts.
- Line height: 1.6× for body, 1.2× for headings.
- Max line length: 65–75 characters for body text to preserve readability.
- Do not use decorative or script fonts — they undermine legal authority.

---

## Logo Usage

> **Asset status — CONFIRMED.** 4 logo variants received from client in shared Google Drive folder ("Creative Assets" subfolder). Reviewed 2026-05-19.

### Primary Mark

The logo combines a **flowing flame/feather icon** with the firm name. The icon features three flowing curves in Navy, Sky Blue, and Gold — representing movement, progress, and trust. "BARDI" is set in bold sans-serif caps; "IMMIGRATION LAW" appears below in lighter spaced small caps with a gold underline accent.

### Variants (from Creative Assets folder)

| Variant                          | Drive File                    | Use case                                                      |
|----------------------------------|-------------------------------|---------------------------------------------------------------|
| Horizontal full-color            | `0B5E292A-...PNG`             | Website header, letterhead, presentations                     |
| Round dark (Navy circle bg)      | `43B97CC0-...PNG`             | Social avatar on light platform backgrounds                   |
| Round white (White circle bg)    | `5D918FE1-...PNG`             | Social avatar — **client preferred** (white bg)               |
| Business card mockup             | `A73292E2-...PNG`             | Print reference (placeholder contact: bardilaw.com)           |

**Client preference (from questionnaire):** Round logo with white background for social media, unless there is reason to use the dark version.

### Preferred Background Colors

The client prefers **white as the primary logo background**. Warm Gray is acceptable for in-page use. Navy reversed usage is reserved for footer or isolated dark sections.

| Background     | Acceptable? | Notes                                      |
|----------------|-------------|---------------------------------------------|
| White          | ✅ Preferred | Default for all primary logo placements     |
| Warm Gray      | ✅ OK        | In-page sections, header strips             |
| Navy           | ⚠️ Restricted | Footer only; use white reversed wordmark    |
| Photography    | ❌ No        | Without a solid color overlay               |

### Clear Space

Minimum clear space = height of the letter "B" in the wordmark on all sides. Do not crowd with other elements.

### Minimum Size

- Print: 1.5 inches wide minimum.
- Digital: 120px wide minimum.

### Do's

- Default to white or Warm Gray backgrounds — client finds dark backgrounds harder to read.
- Maintain original proportions — never stretch or skew.
- Use the horizontal full-color variant for website header.
- Use the white-circle round variant for social media avatars.
- Use the reversed (white on Navy) version only when a Navy background is unavoidable.

### Don'ts

- Do not recolor the wordmark or flame/feather icon in unapproved colors.
- Do not add drop shadows, gradients, or effects.
- Do not place on busy photographic backgrounds without a solid overlay.
- Do not use a competitor's logo style or mimic another law firm's identity.
- Do not separate the flame/feather icon from the wordmark in primary contexts.
- Do not use the round avatar mark in place of the horizontal logo on the website header.

---

## Iconography

**Style:** Line icons (outline style), 2px stroke weight, rounded line caps.

**Grid:** 24×24px base grid. Scale to 16px, 32px, 48px only — no odd sizes.

**Source library:** [Lucide Icons](https://lucide.dev) — MIT licensed, consistent style.

**Alignment rules:**
- Optical center alignment, not mathematical — adjust visually for icons with uneven visual weight.
- Icons used in buttons must have 4px spacing from adjacent label text.
- Never mix outline and filled icon styles in the same UI context.

**Common icons in use:**

| Concept             | Icon name (Lucide)  |
|---------------------|---------------------|
| Documents / filing  | `file-text`         |
| Consultation        | `message-circle`    |
| Status / timeline   | `clock`             |
| Family / household  | `users`             |
| Immigration / travel| `map-pin`           |
| Contact             | `phone`             |
| Alert / deadline    | `alert-triangle`    |
| Success / done      | `check-circle`      |

---

## Tone of Voice

### Brand Adjectives (Client-Chosen)

These three words are the filter for every design and copy decision:

| Adjective      | What it means for us                                                                 |
|----------------|--------------------------------------------------------------------------------------|
| **Boutique**   | Exclusive but accessible. Personal attention, not volume processing. Clients reach an attorney — not an intake specialist. The practice is small by design, not by limitation. |
| **Minimalist** | Less is more. Clean layouts, short sentences, no visual clutter. Say one thing clearly rather than three things vaguely. Resist adding decoration, extra CTAs, or copy that doesn't earn its space. |
| **Trustworthy**| Authority without arrogance. Accuracy over impressiveness. We set real expectations, we don't overpromise, and we communicate directly. |

### Brand Personality

- **Expert** — we know immigration law inside and out; we don't hedge unnecessarily.
- **Plain-spoken** — legal concepts explained in accessible language, not jargon.
- **Empathetic** — we acknowledge this process is stressful; we meet clients where they are.
- **Precise** — we don't overpromise outcomes; we set accurate expectations.
- **Warm but professional** — conversational enough to feel human, formal enough to inspire confidence.

### Voice Attributes

| Attribute     | We are...                        | We are not...                          |
|---------------|----------------------------------|----------------------------------------|
| Authority     | Confident, clear                 | Arrogant, dismissive, corporate        |
| Clarity       | Plain, direct, minimalist        | Oversimplified or padded with filler   |
| Empathy       | Human, reassuring                | Sentimental, casual, or factory-like   |
| Precision     | Accurate, measured               | Vague, overpromising                   |
| Tone          | Boutique — personal and refined  | Volume-practice — transactional, fast  |

### On-Brand Language Examples

| Off-brand ✗                                    | On-brand ✓                                              |
|------------------------------------------------|----------------------------------------------------------|
| "We'll get you your green card — guaranteed!"  | "We'll build the strongest possible case for your petition." |
| "USCIS is super confusing, we totally get it!" | "We understand how complex these processes can feel, and we're here to walk you through every step." |
| "Click here to learn more!!!"                  | "Learn how the process works →"                         |
| "Filing fees are, like, variable."             | "Filing fees vary by case type. We'll confirm your total costs at consultation." |
| "Our clients love us!"                         | "Our clients trust us with their most important decisions." |

### Writing Guidelines

- Lead with client benefit, not firm credentials.
- Avoid passive voice where possible: "We file your petition" not "Your petition will be filed."
- Use "you" and "your" generously — client-centric language.
- Capitalize proper legal terms (Green Card, Adjustment of Status, Form I-485) but don't overload copy with acronyms.
- CTA copy: action verbs + clear outcome. ("Schedule a Consultation", "Start Your Application", "Get Case Updates".)

---

*Last updated: 2026-05-19 (BAR-26) | Owner: UI Designer / CMO*

---

## Open Items

| # | Item | Owner | Status |
|---|------|-------|--------|
| 1 | Confirm round "Bardi Law" logo files received from client | Board / client | 🔴 Unresolved — blocks social avatar specs |
| 2 | Decide whether to add a third color (link/info state) or use Navy tint | UI Designer + CMO | 🟡 Pending implementation phase |
