# Bardi Immigration Law — Hi-Fidelity Design Specification

> **Owner:** UI Designer · **Issue:** BAR-63 · **Status:** Engineering-ready
> **Builds on:** WIREFRAMES.md (BAR-35) layouts — this doc adds the visual layer only
> **Last updated:** 2026-05-19

---

## Purpose

This document translates the approved wireframe layouts (BAR-35) into precise visual specifications for the Engineer implementing BAR-38. Every value here is final and implements directly. No layout decisions are made here — only visual execution.

---

## 1. Design Token Quick Reference

| Token | Hex | Use |
|-------|-----|-----|
| `--color-navy` | `#1B2A4A` | Headlines, nav, primary buttons, borders |
| `--color-gold` | `#C9A84C` | CTAs, accents, icons, underlines, bullet dots |
| `--color-warm-gray` | `#F5F4F0` | Page background, section fills |
| `--color-white` | `#FFFFFF` | Card surfaces, nav background |
| `--color-charcoal` | `#2E2E2E` | Body copy, form labels |
| `--color-border` | `#E5E4E0` | Card borders, dividers |
| `--color-charcoal-60` | `rgba(46,46,46,0.6)` | Placeholder text, breadcrumb inactive |
| `--color-white-80` | `rgba(255,255,255,0.8)` | Body text on Navy sections |
| `--color-crimson` | `#C0392B` | Form validation errors |
| `--color-forest` | `#27AE60` | Form success states |

| Token | Value |
|-------|-------|
| `--font-heading` | `'Playfair Display', Georgia, serif` |
| `--font-body` | `'Inter', system-ui, sans-serif` |
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--shadow-card` | `0 2px 12px rgba(0,0,0,0.08)` |
| `--shadow-nav` | `0 1px 0 #E5E4E0` |
| `--shadow-nav-scroll` | `0 2px 8px rgba(0,0,0,0.10)` |

---

## 2. Global Components

### 2.1 Navigation Bar

**Container:**
- Background: `#FFFFFF`
- Border-bottom: `1px solid #E5E4E0` (resting), transitions to box-shadow on scroll
- Position: `fixed`, top 0, width 100%, z-index: 100
- Height: 64px desktop / 56px mobile
- Padding: `0 48px` desktop / `0 20px` mobile

**Logo:** Left-aligned, vertical center, `min-width: 120px`, `max-height: 40px`

**Nav links (desktop):**
- Font: `Inter 600, 14px`, color: `#1B2A4A`
- Gap: 32px between links
- Hover: color `#C9A84C`, transition 150ms ease
- Active page: gold underline `2px solid #C9A84C`, offset 4px below

**CTA button "Schedule a Consultation":**
- Background: `#C9A84C`
- Color: `#1B2A4A`
- Font: `Inter 600, 13px`
- Padding: `8px 16px`
- Border-radius: `4px`
- Hover: background `#B8963F` (10% darker), transform `scale(1.02)`, transition 150ms

**EN | ES toggle:**
- Font: `Inter 600, 13px`, color: `#1B2A4A`
- Separator: `|` with `8px` horizontal padding
- Active locale: color `#C9A84C`
- Margin-left: `24px` from CTA

**Mobile nav:**
- Hamburger: Lucide `menu` icon, 24px, `#1B2A4A`
- Open state: full-width overlay, background `#FFFFFF`, z-index: 200
- Mobile links: `Inter 600, 16px`, `#1B2A4A`, `20px 24px` padding each
- Practice Areas: accordion, Lucide `chevron-down` right-aligned, rotates 180° on open, transition 200ms
- CTA pinned at bottom of overlay: full-width, gold bg, navy text

---

### 2.2 Footer

**Container:**
- Background: `#1B2A4A`
- Padding: `64px 80px` desktop / `40px 24px` mobile

**Logo:** White reversed wordmark variant, `max-height: 36px`, margin-bottom: `12px`

**Tagline:** `"Boutique immigration law for families in the Southeast."` — Inter 400, 14px, `rgba(255,255,255,0.7)`, margin-bottom: `40px`

**Column grid:** 4-column, 40px gap desktop / 2-col tablet / 1-col stacked mobile

**Column headings:** Inter 600, 12px, `#C9A84C`, uppercase, `letter-spacing: 0.08em`, margin-bottom: `16px`

**Footer links:** Inter 400, 14px, `rgba(255,255,255,0.8)`, `line-height: 2`, no underline
- Hover: color `#C9A84C`, transition 150ms

**Divider before copyright:** `1px solid rgba(255,255,255,0.2)`, `margin: 40px 0 20px`

**Copyright row:**
- Left: `© 2026 Bardi Immigration Law. All rights reserved.` — Inter 400, 13px, `rgba(255,255,255,0.6)`
- Right: `EN | ES` toggle in same style as nav

---

## 3. Home Page (`/`)

### 3.1 Hero Section

**Container:**
- Background: `#F5F4F0`
- Padding: `120px 80px 100px` desktop (accounts for 64px fixed nav) / `96px 24px 60px` mobile
- Min-height: `600px` desktop / `auto` mobile

**Layout:** CSS Grid, `60fr 40fr`, gap: `80px` desktop / single column mobile

**Left column:**

| Element | Spec |
|---------|------|
| H1 | `Playfair Display 700, 52px` (desktop) / `32px` (mobile), color `#1B2A4A`, line-height 1.15, max-width: `580px` |
| Subhead | `Inter 400, 18px` (desktop) / `16px` (mobile), color `#2E2E2E`, line-height 1.6, margin-top: `20px`, max-width: `520px` |
| Button row | margin-top: `36px`, gap: `16px`, flex-wrap: wrap |
| Primary CTA "Book a Consultation" | Background `#C9A84C`, color `#1B2A4A`, Inter 600, 15px, padding `14px 28px`, border-radius `4px` |
| Secondary CTA "Our Practice Areas" | Background transparent, border `2px solid #1B2A4A`, color `#1B2A4A`, Inter 600, 15px, padding `12px 24px`, border-radius `4px` |

**Right column (image block):**
- Placeholder: `#D9D7D2` rectangle (warm gray tint)
- Dimensions: `max-width: 440px`, height `460px` desktop
- Border-radius: `8px`
- Caption: `"Attorney photo pending from client"` — Inter 400, 12px, `rgba(46,46,46,0.5)`, centered below, margin-top: `8px`
- Mobile: hidden (`display: none`) if decorative, shown below text at `100% width, max-height: 280px` if client provides photo

---

### 3.2 Trust Bar

**Container:**
- Background: `#FFFFFF`
- Padding: `40px 80px` desktop / `32px 24px` mobile
- Border-top: `1px solid #E5E4E0`
- Border-bottom: `1px solid #E5E4E0`

**Grid:** 3-column equal width, `48px` gap desktop / single column `24px` gap mobile

**Each item:**
| Element | Spec |
|---------|------|
| Icon | Lucide outline, 32px, color `#C9A84C` |
| Label | `Inter 600, 12px`, `#1B2A4A`, uppercase, `letter-spacing: 0.06em`, margin-top: `12px` |
| Description | `Inter 400, 14px`, `#2E2E2E`, line-height 1.5, margin-top: `4px` |

Items: AILA Chapter Chair 2025–26 Georgia-Alabama / Serving GA, AL, NC & SC / Direct Attorney Communication

---

### 3.3 Practice Areas Overview ("How We Can Help")

**Container:**
- Background: `#F5F4F0`
- Padding: `80px 80px` desktop / `48px 24px` mobile

**Section heading:** `Playfair Display 700, 36px`, `#1B2A4A`, centered, margin-bottom: `48px`

**Card grid:** 3-column, `24px` gap desktop / 1-column mobile

**Each card:**
| Element | Spec |
|---------|------|
| Container | Background `#FFFFFF`, border `1px solid #E5E4E0`, border-radius `8px`, padding `28px 24px` |
| Hover state | border-color `#1B2A4A`, box-shadow `0 2px 12px rgba(0,0,0,0.08)`, transition 200ms |
| Icon | Lucide outline, 32px, `#C9A84C` |
| Card title | `Playfair Display 700, 20px`, `#1B2A4A`, margin-top: `16px` |
| Card body | `Inter 400, 15px`, `#2E2E2E`, line-height 1.6, margin-top: `10px`, 3 lines max |
| "Explore →" | `Inter 600, 13px`, `#C9A84C`, no underline, hover: underline, margin-top: `auto` (flex column, bottom-pinned) |
| Card flex | `display: flex; flex-direction: column` — equal height |

Cards: Benefits-Based Immigration (icon: `file-text`) / Removal Defense (icon: `alert-triangle`) / Federal Litigation (icon: `landmark`)

---

### 3.4 Why Clients Choose Us ("What Sets Us Apart")

**Container:**
- Background: `#FFFFFF`
- Padding: `80px 80px` desktop / `48px 24px` mobile

**Section heading:** `Playfair Display 700, 36px`, `#1B2A4A`, margin-bottom: `48px`

**Grid:** 2×2, `40px` horizontal gap, `32px` vertical gap desktop / 1-column mobile

**Each item (no card border — open layout):**
| Element | Spec |
|---------|------|
| Icon | Lucide outline, 24px, `#1B2A4A`, float left / grid area left, margin-right `12px` |
| Title | `Inter 600, 16px`, `#1B2A4A` |
| Body | `Inter 400, 15px`, `#2E2E2E`, line-height 1.6, margin-top `4px` |

Items: Direct Attorney Access / Nationally Connected (AILA) / Creative Complex Representation / You're Family Here

---

### 3.5 Attorney Intro Teaser ("Meet the Attorney")

**Container:**
- Background: `#F5F4F0`
- Padding: `80px 80px` desktop / `48px 24px` mobile

**Layout:** `40/60` grid, gap `64px` desktop / stacked (image centered top, text below) mobile

**Left (image):**
- `width: 200px, height: 200px`, `border-radius: 50%` (circle crop for round headshot)
- Fallback if square photo: `width: 240px, height: 280px`, `border-radius: 8px`
- Placeholder: `#D9D7D2` circle, caption "Photo pending"
- Mobile: `width: 120px, height: 120px`, `margin: 0 auto 24px`

**Right (text):**

| Element | Spec |
|---------|------|
| Pre-heading "Meet the Attorney" | `Playfair Display 700, 32px`, `#1B2A4A` |
| Gold rule underline | `display: block; width: 40px; height: 2px; background: #C9A84C; margin: 12px 0 20px` |
| Attorney name | `Playfair Display 400, 22px`, `#2E2E2E` |
| Bio | `Inter 400, 16px`, `#2E2E2E`, line-height 1.65, margin-top: `12px` |
| "Meet the Attorney →" link | `Inter 600, 14px`, `#1B2A4A`, Lucide `arrow-right` 16px inline, no underline, hover: color `#C9A84C` |

---

### 3.6 Testimonials ("Client Stories")

**Container:**
- Background: `#FFFFFF`
- Padding: `80px 80px` desktop / `48px 24px` mobile

**Section heading:** `Playfair Display 700, 36px`, `#1B2A4A`, centered, margin-bottom: `48px`

**Carousel slide:**
- Background: `#F5F4F0`
- Border-radius: `8px`
- Padding: `48px 56px` desktop / `32px 24px` mobile
- Max-width: `760px`, `margin: 0 auto`

| Element | Spec |
|---------|------|
| Opening quote mark (decorative) | `"` as text, `Playfair Display 400, 80px`, `#C9A84C`, line-height 0.8, margin-bottom `-16px` (overlaps quote) |
| Quote text | `Playfair Display 400 italic, 20px`, `#1B2A4A`, line-height 1.65 |
| Attribution | `Inter 400, 14px`, `#2E2E2E`, margin-top: `20px`, `— [First Name], [City, State]` |

**Dots (carousel indicator):**
- `width: 8px, height: 8px`, `border-radius: 50%`
- Active: `background: #C9A84C`
- Inactive: `background: #E5E4E0`
- Gap: `8px`, `margin-top: 32px`, centered

**Placeholder rule:** Until real testimonials received, render 2–3 placeholder slots: `"[Client testimonial pending — real quotes to be provided by client.]"` in italic. Do not fabricate names.

---

### 3.7 CTA Strip

**Container:**
- Background: `#1B2A4A`
- Padding: `64px 80px` desktop / `48px 24px` mobile
- Text-align: center

| Element | Spec |
|---------|------|
| Heading | `Playfair Display 700, 36px`, `#FFFFFF`, max-width: `600px`, `margin: 0 auto` |
| Body | `Inter 400, 16px`, `rgba(255,255,255,0.8)`, margin-top: `12px` |
| CTA button | Background `#C9A84C`, color `#1B2A4A`, `Inter 600, 15px`, `padding: 14px 36px`, `border-radius: 4px`, margin-top: `32px` |

---

### 3.8 Home — Mobile Diffs Summary

| Section | Mobile Change |
|---------|--------------|
| Hero | H1 32px, stacked, image shown below text at 100% width / hidden if no photo |
| Trust Bar | 1-column vertical, icon 24px, 24px gap between items |
| Practice Areas | 1-column cards, card padding 16px |
| Why Bardi | 1-column, icon 20px |
| Attorney Teaser | Image 120px circle, centered above text |
| Testimonials | Padding 32px 24px, quote 18px |
| CTA Strip | 48px padding, heading 28px |

---

## 4. About Page (`/about`)

### 4.1 About Hero

Same container spec as Home hero. No right-column image on mobile — stacked.

| Element | Spec |
|---------|------|
| H1 "Expert Counsel, Personal Attention." | `Playfair Display 700, 52px` (desktop) / `32px` (mobile), `#1B2A4A` |
| Subhead | `Inter 400, 18px`, `#2E2E2E`, max-width `480px` |
| CTA | Same gold button "Schedule a Consultation" |
| Attorney portrait (right column) | `width: 320px`, `border-radius: 8px`, `object-fit: cover`, aspect ratio 3:4 |
| Mobile | Portrait 100% width, max-height 320px, shown below text |

---

### 4.2 Biography

**Container:**
- Background: `#FFFFFF`
- Padding: `80px 80px` desktop / `48px 24px` mobile

**Content wrapper:** `max-width: 720px`, `margin: 0 auto`

**Name block:**
- `padding-left: 20px`
- `border-left: 3px solid #C9A84C`

| Element | Spec |
|---------|------|
| Attorney name | `Playfair Display 700, 28px`, `#1B2A4A` |
| Title line | `Inter 400 italic, 16px`, `#2E2E2E` |
| Bio paragraphs | `Inter 400, 17px`, `#2E2E2E`, `line-height: 1.75`, `28px` gap between paragraphs |

---

### 4.3 Credentials

**Container:**
- Background: `#F5F4F0`
- Padding: `80px 80px` desktop / `48px 24px` mobile

**Section heading:** `Playfair Display 700, 28px`, `#1B2A4A`, margin-bottom: `8px`

**Gold underline rule:** `width: 40px`, `height: 3px`, `background: #C9A84C`, `margin-bottom: 40px`

**Grid:** 2-column, `32px` gap desktop / 1-column mobile

**Each credential card:**
- Background: `#FFFFFF`
- Border: `1px solid #E5E4E0`
- Border-radius: `8px`
- Padding: `24px`
- Group heading: `Inter 600, 12px`, `#C9A84C`, uppercase, `letter-spacing: 0.06em`, margin-bottom `12px`
- Items: `Inter 400, 15px`, `#2E2E2E`, `line-height 1.8`
- Bullet: `::before { content: "·"; color: #C9A84C; margin-right: 8px; }`

---

### 4.4 Philosophy

**Container:**
- Background: `#FFFFFF`
- Padding: `80px 80px` desktop / `48px 24px` mobile

**Pull quote:**
- Max-width: `640px`, `margin: 0 auto`, text-align: center
- Opening gold quote mark: same as testimonial treatment (decorative `"`, 80px, `#C9A84C`)
- Quote: `Playfair Display 400 italic, 24px`, `#1B2A4A`, `line-height: 1.5`

**Icon list (below quote):**
- `margin-top: 48px`, max-width `560px`, `margin-left: auto; margin-right: auto`
- Each item: flex row, `align-items: flex-start`, `gap: 12px`, `margin-bottom: 20px`
- Icon: Lucide `check-circle`, 20px, `#C9A84C`
- Text: `Inter 400, 16px`, `#2E2E2E`

Items: "You speak with the attorney from day one." / "No intake specialists. No handoffs." / "You'll know the status of your case — always."

---

### 4.5 About CTA Strip

Identical to Home CTA Strip. Heading: `"Ready to discuss your case?"`. CTA: `"Schedule a Consultation"`.

---

### 4.6 About — Mobile Diffs Summary

| Section | Mobile Change |
|---------|--------------|
| Hero | H1 32px, portrait below text 100% width |
| Bio | max-width 100%, padding 20px 24px |
| Credentials | 1-column stacked |
| Philosophy | Quote 20px, icon list full width |

---

## 5. DACA Practice Area Page (`/practice-areas/daca`)

> **Template:** This layout is shared by all 9 practice area pages. Content is data-driven. This spec uses DACA as the implementation reference.

### 5.1 Page Hero

**Container:**
- Background: `#F5F4F0`
- Padding: `120px 80px 60px` desktop / `96px 24px 40px` mobile
- No image — text-only

| Element | Spec |
|---------|------|
| Breadcrumb | `Inter 400, 13px`, `rgba(46,46,46,0.6)`, `" > "` separator (8px padding each side), current page `#1B2A4A` |
| H1 "DACA" | `Playfair Display 700, 52px` (desktop) / `36px` (mobile), `#1B2A4A` |
| Subhead | `Inter 400, 18px`, `#2E2E2E`, `line-height: 1.6`, `margin-top: 16px`, `max-width: 640px` |
| Subhead text | "Renewal and first-time DACA applications for individuals brought to the United States as children." |

---

### 5.2 Who May Qualify

**Container:**
- Background: `#FFFFFF`
- Padding: `80px 80px` desktop / `48px 24px` mobile

**Content wrapper:** `max-width: 760px`, `margin: 0 auto`

**Section heading:** `Playfair Display 700, 28px`, `#1B2A4A`

**Gold underline rule:** `width: 40px`, `height: 3px`, `background: #C9A84C`, `margin: 12px 0 28px`

**Bullet list:**
- `list-style: none; padding: 0`
- Each item: `Inter 400, 16px`, `#2E2E2E`, `line-height: 1.65`, `margin-bottom: 14px`
- Bullet dot: CSS `::before { content: "•"; color: #C9A84C; font-size: 20px; margin-right: 12px; vertical-align: middle; }`

**DACA qualification bullets:**
- You were under 31 as of June 15, 2012
- You came to the United States before your 16th birthday
- You have continuously resided in the United States since June 15, 2007
- You were present in the United States on June 15, 2012
- You are currently in school, have a high school diploma or GED, or are an honorably discharged veteran
- You have not been convicted of a felony or significant misdemeanor

**Disclaimer note:**
- `Inter 400 italic, 14px`, `rgba(46,46,46,0.6)`, `margin-top: 24px`, `padding-top: 16px`, `border-top: 1px solid #E5E4E0`
- Text: "This overview is for informational purposes only. Eligibility depends on the specific facts of your case."

---

### 5.3 How the Process Works

**Container:**
- Background: `#F5F4F0`
- Padding: `80px 80px` desktop / `48px 24px` mobile

**Section heading + gold rule:** Same as 5.2

**Step list:**
- Max-width: `680px`, `margin: 0 auto`
- `position: relative`
- Vertical connector line between steps: `position: absolute; left: 15px; top: 32px; bottom: 0; width: 2px; border-left: 2px dashed #C9A84C;`

**Each step:**
- Flex row, `align-items: flex-start`, `gap: 20px`, `margin-bottom: 36px`
- Step number circle: `width: 32px; height: 32px; border-radius: 50%; background: #C9A84C; display: flex; align-items: center; justify-content: center; flex-shrink: 0;`
- Number text: `Inter 600, 14px`, `#1B2A4A`
- Step title: `Inter 600, 16px`, `#1B2A4A`
- Step body: `Inter 400, 15px`, `#2E2E2E`, `line-height: 1.6`, `margin-top: 4px`

**DACA process steps:**
1. **File Form I-821D** — Submit the DACA request form and Form I-765 (Employment Authorization) together with all required supporting documentation.
2. **Biometrics appointment** — USCIS will schedule your biometrics appointment to collect fingerprints and photos. Typically 2–4 weeks after filing.
3. **USCIS review** — Processing times vary. Current estimates provided at consultation. We monitor your case and respond to any RFEs.
4. **Decision and EAD card** — If approved, you receive a 2-year Employment Authorization Document (work permit) and DACA status.
5. **Renewal** — DACA must be renewed every 2 years. We track your renewal window and file proactively.

---

### 5.4 How Bardi Immigration Law Helps

**Container:**
- Background: `#FFFFFF`
- Padding: `80px 80px` desktop / `48px 24px` mobile

**Content wrapper:** `max-width: 760px`, `margin: 0 auto`

**Section heading + gold rule:** Same pattern as 5.2

**Framing paragraph:** `Inter 400, 17px`, `#2E2E2E`, `line-height: 1.7`, `margin-bottom: 28px`

Text: "DACA applications require precision. Every supporting document matters. Attorney Bardi reviews your full case history, prepares a comprehensive package, and handles all USCIS correspondence directly — so you're never left guessing."

**Check-list items:**
- Icon: Lucide `check-circle`, 18px, `#C9A84C`, `flex-shrink: 0`
- Gap: `10px`, `margin-bottom: 14px`
- Text: `Inter 400, 15px`, `#2E2E2E`

Items:
- Initial case evaluation and eligibility review
- Preparation and filing of Form I-821D and I-765
- Response to Requests for Evidence (RFEs)
- Proactive renewal tracking and filing
- Direct attorney communication throughout

---

### 5.5 FAQ Accordion

**Container:**
- Background: `#F5F4F0`
- Padding: `80px 80px` desktop / `48px 24px` mobile

**Section heading + gold rule:** Same pattern

**Max-width:** `760px`, `margin: 0 auto`

**Each accordion row:**
| State | Spec |
|-------|------|
| Container | `border-bottom: 1px solid #E5E4E0`, `padding: 20px 0` |
| Question (trigger) | `Inter 600, 15px`, `#1B2A4A`, flex between question and icon |
| Chevron icon | Lucide `chevron-down`, 20px, `#1B2A4A`, `transition: transform 200ms ease`, expanded: `rotate(180deg)` |
| Answer | `Inter 400, 15px`, `#2E2E2E`, `line-height: 1.65`, `padding-top: 14px`, `max-height: 0` collapsed → `auto` expanded, `overflow: hidden`, `transition: max-height 200ms ease` |

**DACA FAQs:**
1. Q: "How long does the DACA renewal process take?" A: Processing times currently range from several months to over a year. We file your renewal early — typically 5–6 months before your EAD expiration — to reduce gaps in work authorization.
2. Q: "I've had DACA before but let it expire. Can I reapply?" A: In most cases, yes. Prior DACA recipients whose status lapsed may be eligible to request initial DACA again. The requirements are the same as a first-time request.
3. Q: "Does DACA give me a path to a green card?" A: DACA does not provide a direct path to permanent residency on its own. However, some DACA recipients may be eligible for green cards through marriage, family sponsorship, or other routes. We assess each case individually.
4. Q: "What happens if USCIS sends an RFE?" A: A Request for Evidence is not a denial. We respond to all RFEs directly — drafting the response, compiling supporting documentation, and submitting on your behalf.

---

### 5.6 Related Practice Areas

**Container:**
- Background: `#FFFFFF`
- Padding: `64px 80px` desktop / `40px 24px` mobile

**Section heading:** `Playfair Display 700, 24px`, `#1B2A4A`, margin-bottom: `28px`

**Card grid:** 3 compact cards, `24px` gap, flex row desktop / 1-column or horizontal scroll mobile

**Each card:**
- Background: `#F5F4F0`
- Border: `1px solid #E5E4E0`
- Border-radius: `4px`
- Padding: `16px 20px`
- Icon: Lucide outline, 24px, `#C9A84C`
- Area name: `Inter 600, 15px`, `#1B2A4A`, margin-top `8px`
- "Learn more →": `Inter 600, 13px`, `#C9A84C`, margin-top `6px`

**DACA related areas:** TPS (`clock` icon) / VAWA (`shield-check` icon) / Family-Based (`users` icon)

---

### 5.7 Practice Area CTA Strip

Identical to Home CTA Strip. Heading: `"Start with a Consultation"`. Subtext: `"We'll help you understand your options and build the strongest possible case."`. CTA: `"Schedule a Consultation"`.

---

### 5.8 DACA — Mobile Diffs Summary

| Section | Mobile Change |
|---------|--------------|
| Hero | H1 36px, breadcrumb wraps |
| Process Steps | Step number 28px circle, connector line hidden on mobile |
| FAQ | Full-width rows, touch-friendly 44px+ tap targets |
| Related Areas | Horizontal scroll or 1-column stack |

---

## 6. Interaction States

| Element | Default | Hover | Focus | Active/Pressed |
|---------|---------|-------|-------|----------------|
| Gold CTA button | bg `#C9A84C`, text `#1B2A4A` | bg `#B8963F`, scale 1.02 | outline `2px solid #C9A84C`, offset 2px | bg `#A67F35`, scale 0.99 |
| Navy outline button | border `#1B2A4A`, text `#1B2A4A` | bg `#1B2A4A`, text `#FFFFFF` | outline `2px solid #C9A84C`, offset 2px | bg `#0E1A2E` |
| Nav links | `#1B2A4A` | `#C9A84C` | underline | `#C9A84C` |
| Cards | border `#E5E4E0` | border `#1B2A4A`, shadow | N/A | N/A |
| "Explore →" gold links | `#C9A84C`, no underline | underline | underline | opacity 0.8 |
| Accordion row | closed | chevron 180°, answer expands | focus ring | N/A |
| Form inputs | border `#D5D4D0` | border `#1B2A4A` | `2px solid #1B2A4A` | same as focus |

All transitions: `150ms–200ms ease` unless specified otherwise.

---

## 7. Typography Scale

| Style | Font | Weight | Desktop | Mobile | Color | Line-height |
|-------|------|--------|---------|--------|-------|-------------|
| Page H1 | Playfair Display | 700 | 52px | 32–36px | `#1B2A4A` | 1.15 |
| Section H2 | Playfair Display | 700 | 36px | 28px | `#1B2A4A` | 1.2 |
| Section H3 | Playfair Display | 700 | 28px | 24px | `#1B2A4A` | 1.25 |
| Card title | Playfair Display | 700 | 20px | 18px | `#1B2A4A` | 1.3 |
| Pull quote | Playfair Display | 400i | 24px | 20px | `#1B2A4A` | 1.5 |
| Subhead | Inter | 400 | 18px | 16px | `#2E2E2E` | 1.6 |
| Body | Inter | 400 | 16–17px | 15–16px | `#2E2E2E` | 1.65–1.75 |
| UI label | Inter | 600 | 14px | 14px | `#1B2A4A` | 1.4 |
| Category label | Inter | 600 | 12px | 12px | `#C9A84C` (on light) / `#FFFFFF` (on navy) | 1.4 |
| Small/caption | Inter | 400 | 13–14px | 13px | `rgba(46,46,46,0.6)` | 1.5 |

**Google Fonts import (both faces needed):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
```

---

## 8. Spacing Rhythm

Base unit: `8px`. All spacing values should be multiples of 8.

| Token | Value | Use |
|-------|-------|-----|
| `--space-1` | `8px` | Tight spacing, icon gaps |
| `--space-2` | `16px` | Button padding, small gaps |
| `--space-3` | `24px` | Card padding (mobile), list gaps |
| `--space-4` | `32px` | Section heading margins |
| `--space-5` | `40px` | Trust bar padding, credential gaps |
| `--space-6` | `48px` | Section padding (mobile) |
| `--space-8` | `64px` | CTA strip padding, footer divider |
| `--space-10` | `80px` | Section padding (desktop) |
| `--space-12` | `96px` | Hero padding (mobile top) |
| `--space-15` | `120px` | Hero padding (desktop top, accounts for nav) |

**Max content width:** `1280px` (page container), `1120px` (content area with side gutters), `760px` (single-column reading content), `640px` (centered pull quotes/subheads)

**Side gutters:** `80px` desktop / `24px` mobile

---

## 9. Contact Form (Referenced from Wireframes)

**Inputs:**
- Border: `1px solid #D5D4D0`
- Border-radius: `4px`
- Padding: `10px 14px`
- Font: `Inter 400, 16px`, `#2E2E2E`
- Focus: `border: 2px solid #1B2A4A; outline: none`
- Placeholder: `rgba(46,46,46,0.4)`

**Labels:** `Inter 600, 13px`, `#1B2A4A`, displayed above each field, `margin-bottom: 6px`

**Submit button:** Same as primary gold CTA, full-width on mobile

**Error state:** `border: 1px solid #C0392B`, error message `Inter 400, 13px`, `#C0392B` below field

**Success state:** Form fades out (opacity 0, 300ms), success message fades in: `Inter 400, 16px`, `#27AE60`, Lucide `check-circle` 24px `#27AE60` left of message

---

*Source of truth for visual implementation. Refers to WIREFRAMES.md for layout structure. Refers to BRAND-IDENTITY.md for brand rationale. Contact UI Designer before adding any color, font, or spacing value not listed here.*

*Last updated: 2026-05-19 (BAR-63) | Owner: UI Designer*
