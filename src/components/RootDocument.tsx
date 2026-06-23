import { Inter, Playfair_Display } from 'next/font/google';
import { JsonLd } from '@/components/JsonLd';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

// Firm-level schema: LegalService + Attorney (both schema.org subtypes of LocalBusiness),
// injected on every page under a single stable @id so Google treats it as one entity
// site-wide rather than as duplicate LocalBusiness records (BAR-648).
// Pending fields (address, phone, hours) must be updated when client provides them.
// telephone auto-populates from the CONTACT_PHONE env var (same var the contact form uses);
// set it in the CI/Cloudflare environment once the board confirms the firm phone (BAR-81).
// addressLocality omitted until confirmed: emitting a literal placeholder would produce
// invalid structured data, so we leave unknown fields out rather than guessing.
const firmPhone = process.env.CONTACT_PHONE;
const FIRM_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LegalService', 'Attorney'],
      '@id': 'https://bardilaw.com/#firm',
      name: 'Bardi Immigration Law',
      alternateName: 'Bardi Law',
      url: 'https://bardilaw.com',
      email: 'info@bardilaw.com',
      ...(firmPhone ? { telephone: firmPhone } : {}),
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'GA',
        addressCountry: 'US',
      },
      // areaServed stays nationwide per board directive BAR-617: do NOT add GA/AL geo-restriction
      // to schema/copy. Immigration is federal → firm serves nationwide; GA/AL licensure signal
      // lives in `address` + GBP/citations, not areaServed.
      areaServed: { '@type': 'Country', name: 'United States' },
      serviceType: 'Immigration Law',
      priceRange: '$$',
      description:
        'Boutique immigration law firm providing direct attorney representation. Licensed; because immigration is federal law, we represent clients nationwide. Specializing in benefits-based immigration, removal defense, and federal litigation.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Immigration Legal Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DACA / Deferred Action' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Family-Based Immigration' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Removal Defense' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Naturalization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'U Visa' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VAWA' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Federal Litigation, Mandamus & Habeas Corpus' } },
        ],
      },
    },
  ],
} as const;

/**
 * Shared HTML document shell used by both the English and Spanish root layouts.
 *
 * The site serves two language trees (`/` and `/es`) as separate route groups,
 * each with its own root layout, so the document language can be set statically
 * per tree (<html lang="en"> vs <html lang="es">) without opting the app into
 * dynamic rendering. This component centralizes everything common to both —
 * fonts, global styles, firm JSON-LD, GA4, and the skip-nav link — so the two
 * root layouts only differ by their `lang` and metadata (BAR-747).
 */
export function RootDocument({
  lang,
  children,
}: {
  lang: 'en' | 'es';
  children: React.ReactNode;
}) {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang={lang} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <JsonLd data={FIRM_SCHEMA as unknown as Record<string, unknown>} />
        {ga4Id && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4Id}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans bg-warmgray text-charcoal antialiased">
        <a href="#main-content" className="skip-nav">
          {lang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
        </a>
        {children}
      </body>
    </html>
  );
}
