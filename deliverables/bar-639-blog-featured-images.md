# BAR-639 — Blog Featured / OG Images

**Owner:** CMO · **Status:** Delivered, pending brand sign-off
**Spec followed:** `docs/BAR-136-BLOG-FEATURED-IMAGE-SPEC.md`

## What shipped

Six branded 1200×630 PNG featured/social-share (OG) images, one per existing in-scope blog post. Built from the BAR-136 two-panel template (navy left panel + 6px gold accent bar + warm-gray content panel), rendered with the brand fonts (Playfair Display 700 headlines, Inter 600 supporting text) at the exact brand palette:

- Navy `#1B2A4A` · Gold `#C9A84C` · Warm Gray `#F5F4F0` · Charcoal `#2E2E2E`

Each image carries: the post topic as a readable Playfair headline, an "Immigration Insights" gold kicker, the firm wordmark "Bardi Immigration Law" + `bardilaw.com` on the navy panel (subtle, left), author line "Eszter Bardi, Esq.", and a practice-area badge. No headshot, no flags/country imagery, no stock photos — per acceptance criteria.

## Location

Committed to the repo at `public/og/blog/` (web-accessible, ready to wire into post `<meta>` tags).

## Mapping — filename → blog post slug

| File | Blog post slug | Title |
|------|----------------|-------|
| `og-notice-to-appear.png` | `notice-to-appear-georgia` | Notice to Appear in Immigration Court |
| `og-daca-renewal-2025.png` | `daca-renewal-2025-georgia` | DACA Renewal in 2025 |
| `og-asylum-application.png` | `asylum-application-georgia` | The Asylum Application Process |
| `og-family-green-card.png` | `family-green-card-attorney-georgia` | Family Green Card Attorney |
| `og-tps-2026.png` | `tps-2026` | Temporary Protected Status in 2026 |
| `og-mandamus-lawsuit.png` | `mandamus-lawsuit-uscis-delay-georgia` | Mandamus Lawsuits: Forcing a Decision on a Delayed Case |

> Note: two slugs in the original ticket scope were stale. Live slugs are `asylum-application-georgia` (not `-process-`) and `mandamus-lawsuit-uscis-delay-georgia` (not `mandamus-lawsuit`). Mapping above reflects the live `src/content/blog/meta.ts` slugs.

Machine-readable copy: `public/og/blog/MAPPING.json`.

## Reproducible generator

`scripts/og-images/gen.cjs` renders all six from the template (fetches the two brand TTFs on first run, embeds them, screenshots via headless Chrome at 1200×630; outputs to a gitignored `.scratch/`). To add an image for a new post, append an entry to the `POSTS` array, run `node scripts/og-images/gen.cjs`, and copy the new PNG from `.scratch/out/` into `public/og/blog/`. This keeps the blog's growing post list coverable without re-doing layout by hand.

## Follow-up (out of scope for BAR-639 — needs separate ticket)

The `BlogPost` interface in `src/content/blog/meta.ts` has **no** `ogImage` field today, so these images are not yet referenced by any post's metadata. Wiring requires: (1) add an optional `ogImage` field to `BlogPost`, (2) populate it for these six slugs, (3) emit `og:image` / `twitter:image` `<meta>` tags in the blog post head. Recommend a follow-up engineering ticket; the asset filenames above are stable.
