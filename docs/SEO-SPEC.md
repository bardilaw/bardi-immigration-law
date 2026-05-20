# Bardi Immigration Law — On-Page SEO Specification

> **Owner:** CMO (BAR-16) | **Last updated:** 2026-05-19
> **Roadmap item:** 2.7 — Basic on-page SEO
> **Prerequisite:** Website built (BAR-14 — done ✅)
> **Deliverable:** Engineer implements these specs in the Next.js codebase

---

## Meta Tags — Per Page

### Home Page (`/`)

```html
<title>Bardi Immigration Law | Immigration Attorney in Georgia & Alabama</title>
<meta name="description" content="Boutique immigration law firm serving Georgia, Alabama, North Carolina, and South Carolina. DACA, removal defense, green cards, VAWA, U-visa. Direct attorney access. Book a consultation." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://bardilaw.com/" />
```

**Open Graph:**
```html
<meta property="og:title" content="Bardi Immigration Law | Immigration Attorney" />
<meta property="og:description" content="Boutique immigration law firm serving GA, AL, NC & SC. DACA, removal defense, green cards, VAWA, U-visa. Direct attorney access." />
<meta property="og:url" content="https://bardilaw.com/" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://bardilaw.com/og-image.jpg" />
```

---

### About Page (`/about`)

```html
<title>About Eszter Bardi | Immigration Attorney | Bardi Immigration Law</title>
<meta name="description" content="Eszter Bardi is an immigration attorney admitted in Georgia and Alabama, serving clients across the Southeast. 2025–2026 AILA Georgia-Alabama Chapter Chair. Fluent in English, Spanish, and Hungarian." />
<link rel="canonical" href="https://bardilaw.com/about" />
```

---

### Services / Practice Areas Overview (`/practice-areas`)

```html
<title>Immigration Law Services | Bardi Immigration Law</title>
<meta name="description" content="Full-spectrum immigration law services: DACA, SIJS, VAWA, U-visa, TPS, family petitions, green cards, naturalization, removal defense, and federal litigation. Serving GA, AL, NC & SC." />
<link rel="canonical" href="https://bardilaw.com/practice-areas" />
```

---

### DACA (`/practice-areas/daca`)

```html
<title>DACA Attorney | Deferred Action for Childhood Arrivals | Bardi Immigration Law</title>
<meta name="description" content="DACA renewal and initial application help in Georgia, Alabama, North Carolina, and South Carolina. Speak directly with an immigration attorney. Schedule a consultation." />
<link rel="canonical" href="https://bardilaw.com/practice-areas/daca" />
```

---

### SIJS (`/practice-areas/sijs`)

```html
<title>Special Immigrant Juvenile Status (SIJS) | Bardi Immigration Law</title>
<meta name="description" content="SIJS representation for unaccompanied minors in Georgia, Alabama, NC & SC. Coordinating state court findings and federal immigration petitions. Direct attorney representation." />
<link rel="canonical" href="https://bardilaw.com/practice-areas/sijs" />
```

---

### VAWA (`/practice-areas/vawa`)

```html
<title>VAWA Immigration Petition | Abuse Survivor Attorney | Bardi Immigration Law</title>
<meta name="description" content="Confidential VAWA self-petition representation in Georgia and Alabama. You don't need a police report or prior protective order. Speak directly with an attorney." />
<link rel="canonical" href="https://bardilaw.com/practice-areas/vawa" />
```

---

### U-Visa (`/practice-areas/u-visa`)

```html
<title>U-Visa Attorney | Crime Victim Immigration Relief | Bardi Immigration Law</title>
<meta name="description" content="U-visa representation for crime victims in Georgia, Alabama, NC & SC. Direct attorney guidance through certification and petition process. Confidential consultations." />
<link rel="canonical" href="https://bardilaw.com/practice-areas/u-visa" />
```

---

### TPS (`/practice-areas/tps`)

```html
<title>Temporary Protected Status (TPS) Attorney | Bardi Immigration Law</title>
<meta name="description" content="TPS registration and re-registration in Georgia, Alabama, North Carolina, and South Carolina. Stay informed on designation changes with an AILA attorney. Schedule a consultation." />
<link rel="canonical" href="https://bardilaw.com/practice-areas/tps" />
```

---

### Family-Based Immigration (`/practice-areas/family-based`)

```html
<title>Family-Based Immigration Attorney | Green Cards & I-130 | Bardi Immigration Law</title>
<meta name="description" content="Family petition and green card attorney in Georgia and Alabama. I-130 petitions, adjustment of status, consular processing, and waiver filings. Serving GA, AL, NC & SC." />
<link rel="canonical" href="https://bardilaw.com/practice-areas/family-based" />
```

---

### Waivers (`/practice-areas/waivers`)

```html
<title>Immigration Waivers | I-601, I-212, I-929 | Bardi Immigration Law</title>
<meta name="description" content="Immigration waiver attorney in Georgia and Alabama. I-601 unlawful presence, I-212 prior removal, and I-929 VAWA waivers. Building the extreme hardship record your case requires." />
<link rel="canonical" href="https://bardilaw.com/practice-areas/waivers" />
```

---

### Removal Defense (`/practice-areas/removal-defense`)

```html
<title>Removal Defense Attorney | Deportation Defense | Bardi Immigration Law</title>
<meta name="description" content="Removal defense attorney in Georgia and Alabama. Detained and non-detained removal proceedings, bond hearings, cancellation of removal. If you've received an NTA, contact us today." />
<link rel="canonical" href="https://bardilaw.com/practice-areas/removal-defense" />
```

---

### Federal Litigation (`/practice-areas/federal-litigation`)

```html
<title>Federal Immigration Litigation | Habeas Corpus & Mandamus | Bardi Immigration Law</title>
<meta name="description" content="Federal immigration litigation in U.S. District Court. Habeas corpus petitions for unlawful detention. Mandamus for unreasonably delayed USCIS applications. Serving clients nationwide." />
<link rel="canonical" href="https://bardilaw.com/practice-areas/federal-litigation" />
```

---

### Contact (`/contact`)

```html
<title>Schedule a Consultation | Bardi Immigration Law</title>
<meta name="description" content="Schedule an immigration law consultation with Eszter Bardi. Serving Georgia, Alabama, North Carolina, and South Carolina. Consultations in English, Spanish, and Hungarian." />
<link rel="canonical" href="https://bardilaw.com/contact" />
```

---

## JSON-LD Structured Data

### LocalBusiness + LegalService Schema (place in `<head>` on all pages)

```json
{
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  "name": "Bardi Immigration Law",
  "alternateName": "Bardi Law",
  "description": "Boutique immigration law firm serving Georgia, Alabama, North Carolina, and South Carolina. Benefits-based immigration, removal defense, and federal litigation.",
  "url": "https://bardilaw.com",
  "telephone": "[PHONE — ATTORNEY TO SUPPLY]",
  "email": "info@bardilaw.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[ADDRESS — ATTORNEY TO SUPPLY or omit if virtual]",
    "addressLocality": "[CITY — ATTORNEY TO SUPPLY]",
    "addressRegion": "GA",
    "postalCode": "[ZIP — ATTORNEY TO SUPPLY]",
    "addressCountry": "US"
  },
  "areaServed": [
    {"@type": "State", "name": "Georgia"},
    {"@type": "State", "name": "Alabama"},
    {"@type": "State", "name": "North Carolina"},
    {"@type": "State", "name": "South Carolina"}
  ],
  "knowsLanguage": ["en", "es", "hu"],
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "[ATTORNEY TO SUPPLY — e.g., 09:00]",
      "closes": "[ATTORNEY TO SUPPLY — e.g., 17:00]"
    }
  ],
  "hasMap": "[GOOGLE MAPS URL — add after GBP verified]",
  "sameAs": [
    "https://www.instagram.com/bardiimmigrationlaw",
    "https://www.facebook.com/bardiimmigrationlaw",
    "https://www.tiktok.com/@bardiimmigrationlaw",
    "https://www.youtube.com/@BardiImmigrationLaw",
    "https://www.avvo.com/attorneys/eszter-bardi.html",
    "https://www.martindale.com/attorney/eszter-bardi"
  ],
  "employee": {
    "@type": "Person",
    "name": "Eszter Bardi",
    "jobTitle": "Immigration Attorney",
    "knowsLanguage": ["en", "es", "hu"],
    "memberOf": {
      "@type": "Organization",
      "name": "American Immigration Lawyers Association (AILA)"
    }
  }
}
```

### Attorney / Person Schema (About page only)

```json
{
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Eszter Bardi",
  "givenName": "Eszter",
  "familyName": "Bardi",
  "url": "https://bardilaw.com/about",
  "worksFor": {
    "@type": "LegalService",
    "name": "Bardi Immigration Law",
    "url": "https://bardilaw.com"
  },
  "knowsLanguage": ["en", "es", "hu"],
  "memberOf": {
    "@type": "Organization",
    "name": "American Immigration Lawyers Association (AILA)",
    "description": "Chapter Chair, Georgia-Alabama Chapter, 2025-2026"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Licensed Attorney — State of Georgia"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Licensed Attorney — State of Alabama"
    }
  ]
}
```

---

## sitemap.xml

Place at `https://bardilaw.com/sitemap.xml`. In Next.js, use `next-sitemap` or create a custom `/app/sitemap.ts`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <url>
    <loc>https://bardilaw.com/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://bardilaw.com/"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://bardilaw.com/es/"/>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://bardilaw.com/about</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://bardilaw.com/about"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://bardilaw.com/es/about"/>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://bardilaw.com/practice-areas</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Practice area pages -->
  <url><loc>https://bardilaw.com/practice-areas/daca</loc><priority>0.8</priority></url>
  <url><loc>https://bardilaw.com/practice-areas/sijs</loc><priority>0.8</priority></url>
  <url><loc>https://bardilaw.com/practice-areas/vawa</loc><priority>0.8</priority></url>
  <url><loc>https://bardilaw.com/practice-areas/u-visa</loc><priority>0.8</priority></url>
  <url><loc>https://bardilaw.com/practice-areas/tps</loc><priority>0.8</priority></url>
  <url><loc>https://bardilaw.com/practice-areas/family-based</loc><priority>0.8</priority></url>
  <url><loc>https://bardilaw.com/practice-areas/waivers</loc><priority>0.8</priority></url>
  <url><loc>https://bardilaw.com/practice-areas/removal-defense</loc><priority>0.8</priority></url>
  <url><loc>https://bardilaw.com/practice-areas/federal-litigation</loc><priority>0.8</priority></url>

  <url>
    <loc>https://bardilaw.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

</urlset>
```

**hreflang notes:**
- English pages: no `hreflang` prefix (root `/`)
- Spanish pages: prefix with `/es/` (e.g., `https://bardilaw.com/es/`)
- Add `<xhtml:link>` pairs for every bilingual page

---

## robots.txt

Place at `https://bardilaw.com/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://bardilaw.com/sitemap.xml
```

---

## Canonical Tags — Rules for Engineer

1. Every page must have a `<link rel="canonical">` tag pointing to its own URL
2. Spanish pages (`/es/*`) should canonical to themselves, NOT to the English version
3. No page should canonical to a different page unless it's a true duplicate
4. Set `X-Robots-Tag: noindex` on any staging/preview URLs

---

## Implementation Notes for Engineer

- **Next.js Metadata API:** Use `export const metadata = { title, description, openGraph, alternates }` per page in the App Router
- **JSON-LD:** Use a `<Script type="application/ld+json">` component — place in layout for LegalService schema, in the about page component for Attorney schema
- **Sitemap:** Use `next-sitemap` npm package (`npm i next-sitemap`) or the native `sitemap.ts` route in Next.js 14+
- **robots.txt:** Can be a static file at `/public/robots.txt` or a Next.js route handler
- **OG image:** Create a simple `/og-image.jpg` (1200×630px) — Navy background, Bardi Law logo + tagline in white. Place in `/public/`
- **Address fields in schema:** Leave placeholder comments in code; attorney to supply before launch. Do not hardcode empty strings

---

*Deliverable for [BAR-16](/BAR/issues/BAR-16) — Roadmap item 2.7. All meta tags, schema markup, sitemap.xml, and robots.txt specifications ready for engineering implementation.*
