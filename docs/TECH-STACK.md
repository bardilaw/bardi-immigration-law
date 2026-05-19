# Tech Stack — Bardi Immigration Law

**Decision date:** 2026-05-19 (revised per board directive to mirror mccargo-consulting.com)  
**Context:** Solo immigration law firm launching first public web presence. Goals: findable on Google, professional credibility, fast launch, low ongoing maintenance burden. Tech stack mirrors McCargo Consulting (mccargo-consulting.com) per board directive.

---

## Chosen Stack

| Layer            | Technology                     | Version  | Notes                                                      |
|------------------|--------------------------------|----------|------------------------------------------------------------|
| Framework        | Next.js (App Router)           | 16.x     | SSG/SSR, SEO-first, mirrors McCargo Consulting             |
| Language         | TypeScript                     | 6.x      | Type safety; catches errors before deploy                  |
| Styling          | Tailwind CSS                   | 4.x      | Utility-first; fast to build, easy to maintain             |
| Hosting          | Cloudflare Pages               | —        | Edge-first CDN, zero-config SSL, mirrors McCargo           |
| Build            | @cloudflare/next-on-pages      | —        | Compiles Next.js for Cloudflare Workers runtime            |
| Deploy           | Wrangler CLI                   | —        | `wrangler pages deploy` for Cloudflare Pages               |
| Forms/Intake     | Resend + React Email           | —        | Transactional contact form emails                          |
| Business Email   | Microsoft 365                  | —        | Domain email (Outlook); board directive                    |
| Calendar         | Microsoft 365                  | —        | Scheduling/booking integration; board directive            |
| Analytics        | Google Analytics 4             | —        | Required for SEO visibility; free                          |
| Error Tracking   | Sentry (@sentry/nextjs)        | —        | Runtime error monitoring; mirrors McCargo                  |
| CI/CD            | GitHub Actions                 | —        | Lint + type-check + build + deploy via wrangler            |

---

## Rationale

### Next.js on Cloudflare Pages (mirroring McCargo Consulting)
Board directed this project to mirror the mccargo-consulting.com tech stack. McCargo Consulting runs Next.js App Router on Cloudflare Pages using `@cloudflare/next-on-pages` for the build and `wrangler pages deploy` for deployment. This gives us edge-first CDN delivery, zero-config SSL, and Workers-compatible API routes — all on Cloudflare's generous free tier.

Immigration law content is static (practice areas, attorney bio, FAQ). Next.js static generation produces fast, crawlable HTML — directly improving Google rankings. The App Router supports server components and API routes for the contact form without a separate backend.

### Microsoft 365 (Email + Calendar)
Board specified Microsoft for email and calendar integration. Domain email will run through Microsoft 365 / Outlook. If the attorney opts for direct online booking, Microsoft Bookings or a compatible scheduling tool (e.g., Calendly with Microsoft sync) will be integrated.

### Resend (Transactional Email)
Contact and intake form submissions trigger transactional email via Resend's API. This is separate from the Microsoft 365 business email — Resend handles automated form-to-inbox delivery. Generous free tier (3,000 emails/month), no vendor lock-in.

### Sentry
Runtime error tracking mirrors McCargo Consulting. Catches frontend and API errors in production. Free tier is sufficient for a solo firm.

---

## Trade-offs

| Rejected Option      | Why Rejected                                                             |
|----------------------|--------------------------------------------------------------------------|
| Vercel               | Board directed Cloudflare Pages to mirror McCargo Consulting             |
| WordPress            | Higher maintenance overhead, plugin sprawl, security surface area        |
| Webflow              | No-code is limiting when custom intake logic is needed; ongoing monthly cost |
| Contentful (CMS)     | Added complexity; attorney can request blog CMS post-launch if needed    |
| Google Workspace     | Board specified Microsoft 365 for email and calendar                     |
| Supabase / database  | Not needed at launch — no user accounts, no data persistence beyond emails. Add Supabase later if client portal is needed (mirrors McCargo pattern) |

---

## Key Dependencies

| Package                        | Purpose                          | License    |
|--------------------------------|----------------------------------|------------|
| `next`                         | Framework                        | MIT        |
| `react` / `react-dom`         | UI runtime                       | MIT        |
| `typescript`                   | Type safety                      | Apache 2.0 |
| `tailwindcss`                  | Utility CSS                      | MIT        |
| `@cloudflare/next-on-pages`   | Cloudflare Pages build adapter   | MIT        |
| `wrangler`                     | Cloudflare CLI (deploy)          | MIT        |
| `@sentry/nextjs`              | Error tracking                   | MIT        |
| `resend`                       | Transactional email              | MIT        |
| `react-email`                  | Email templates                  | MIT        |
| `eslint`                       | Linting                          | MIT        |

---

## Architecture Notes

- **No database at launch.** Content lives in code (Next.js pages/components); contact form submissions deliver to attorney email via Resend. Add Supabase/Postgres (mirroring McCargo pattern) only if a client intake portal or scheduling system is required post-launch.
- **No CMS at launch.** Content is authored by CMO/TW agents and committed to the repo. If the attorney needs self-service content updates (blog, FAQ), add a headless CMS in a post-launch phase.
- **Microsoft 365** handles business email and calendar. Domain MX records point to Microsoft. Transactional form emails use Resend separately.
- **Cloudflare Pages** deployment: `npx @cloudflare/next-on-pages` builds to `.vercel/output/static`, then `npx wrangler pages deploy .vercel/output/static --project-name bardi-immigration-law`.
- **Google Business Profile** is not a code dependency but is a critical launch step — handled by CMO/board.
- **SEO baseline**: `next-sitemap` generates sitemap.xml at build time. `robots.txt` configured to allow all crawlers. Open Graph tags on every page via Next.js Metadata API.
- **Domain**: bardilaw.com (per business card mockup in creative assets). Board to confirm and register. Cloudflare Pages supports custom domains with zero-config SSL.
- **Credentials**: Account Info spreadsheet in shared Google Drive folder tracks all service credentials. Do not commit credentials to the repo.

---

*Revised by CEO agent (BAR-23) · 2026-05-19 — mirrors mccargo-consulting.com per board directive*
