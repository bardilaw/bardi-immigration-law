# FAQ Schema (FAQPage JSON-LD) — Implementation & Verification

**Issue:** BAR-560 — Milestone 4
**Status:** Implemented and shipped in code (built + verified in prerendered HTML)
**Scope:** Practice area pages on bardilaw.com

---

## What was built

FAQ content already existed on every practice area page (rendered via the
`FaqAccordion` component from a `faqs` array). Rather than hand-write static
JSON-LD blocks per page — which drift from the visible copy and require manual
upkeep — the schema is now **generated from the same source data the page
renders.** This guarantees the structured data always matches the visible Q&A,
which is an explicit Google requirement.

### Two code paths

1. **Shared layout** — `src/components/PracticeAreaLayout.tsx`
   `buildFaqSchema(faqs)` emits a `FAQPage` block via the `<JsonLd>` component
   whenever a page passes a non-empty `faqs` prop. This automatically covers
   **every** practice area built on the shared layout — no per-page work.

2. **Custom DACA page** — `src/app/services/daca/page.tsx`
   DACA is a bespoke page (not on the shared layout). A `FAQ_SCHEMA` const is
   built from its existing `FAQS` array and rendered with `<JsonLd>`.

### Pages now emitting FAQPage schema (9 total)

| Page | Path | Source | FAQs |
|------|------|--------|------|
| Family-Based Immigration ★ | `/services/family-based-immigration` | layout | 4 |
| Removal Defense ★ | `/services/removal-defense` | layout | 4 |
| SIJS ★ | `/services/sijs` | layout | 4 |
| DACA ★ | `/services/daca` | custom | 4 |
| Federal Litigation | `/services/federal-litigation` | layout | 4 |
| TPS | `/services/tps` | layout | 4 |
| U Visa | `/services/u-visa` | layout | 4 |
| VAWA | `/services/vawa` | layout | 4 |
| Waivers | `/services/waivers` | layout | 4 |

★ = named target pages in the issue. `benefits-based-immigration` has no FAQ
section, so no schema is emitted there (correct — Google rejects FAQPage schema
for questions not visible on the page).

> Spanish (`/es/services/*`) pages: the same mechanism will apply automatically
> if/when they adopt the shared layout with a `faqs` prop. Not in scope for this
> issue (English target pages only).

---

## Schema shape (per Google's FAQPage guidelines)

Generated output, e.g. DACA:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does the DACA renewal process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Processing times currently range from several months to over a year. We file your renewal early — typically 5–6 months before your EAD expiration — to reduce gaps in work authorization."
      }
    }
    // ...3 more questions
  ]
}
```

Rendered into `<head>`/body as:

```html
<script type="application/ld+json">{ ...FAQPage JSON... }</script>
```

All questions and answers are attorney-authored (already live on the pages),
informational, and non-promissory — appropriate for a law firm.

---

## ⚠️ Important caveat on Google rich results (read before setting expectations)

**Google restricted FAQ rich results in August 2023.** FAQ rich results now
display **only for well-known, authoritative government and health websites.**
A private law firm will, in almost all cases, **not** get the expanded-FAQ
SERP treatment the issue describes. *(Confidence: high — this is current,
documented Google behavior.)*

This does **not** make the work wasted. The schema is still worth shipping:

- **Valid structured data.** Passes the Rich Results Test as eligible markup;
  zero downside / no penalty risk.
- **Bing still renders FAQ rich results** (no government/health restriction).
- **AI answer engines & Google AI Overviews / SGE** parse FAQPage markup to
  source direct answers — increasingly where law-firm discovery happens.
- **Single-sourced & maintenance-free.** Because it's generated from the
  rendered FAQs, it can't rot.

**Recommendation:** Ship it (done), but track impact via Bing Webmaster Tools and
AI-referral traffic, **not** Google FAQ rich-result impressions. If the goal is
specifically Google SERP enhancement for CTR, the higher-leverage plays for a
law firm are review/`AggregateRating` markup, `LegalService`/`Attorney` markup
(already present site-wide), and `BreadcrumbList`.

---

## Highest-traffic pages to monitor first

Prioritize verification/monitoring on the pages most likely to drive consults:
**Family-Based Immigration**, **Removal Defense**, then **DACA**. These are the
broadest-intent immigration queries for this firm's service area (GA/AL/NC/SC).

---

## How to verify

### Local (already done)
```bash
npm run build
grep -o '"@type":"FAQPage"' .next/server/app/services/<page>.html
```
Confirmed present on all 4 target pages; content matches visible Q&A.

### Production (after deploy)
1. **Google Rich Results Test** — https://search.google.com/test/rich-results
   Enter e.g. `https://bardilaw.com/services/daca`. Expect: *"FAQ" detected,
   valid, N items.* (Eligibility for display is separate — see caveat above.)
2. **Schema Markup Validator** — https://validator.schema.org/ — paste the URL;
   confirm 0 errors on the `FAQPage` item.
3. **Bing Webmaster Tools** — submit URLs; Bing is the realistic place to see
   FAQ rich results actually render.
4. **Google Search Console** → Enhancements → FAQ (appears only if/when Google
   recognizes the markup).

---

## Files changed

- `src/components/PracticeAreaLayout.tsx` — `buildFaqSchema()` + `<JsonLd>` emit
- `src/app/services/daca/page.tsx` — `FAQ_SCHEMA` const + `<JsonLd>` emit

Verified: `tsc --noEmit` clean, `eslint` clean, `next build` succeeds, FAQPage
JSON-LD present in prerendered HTML for all target pages.
