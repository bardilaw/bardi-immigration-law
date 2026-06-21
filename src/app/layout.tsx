import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { JsonLd } from '@/components/JsonLd';
import './globals.css';

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

export const metadata: Metadata = {
  title: {
    default: 'Bardi Immigration Law | Immigration Attorney',
    template: '%s | Bardi Immigration Law',
  },
  description:
    'Boutique immigration law firm. Your attorney from day one, direct attorney access, not an intake form. Benefits-based immigration, removal defense, and federal litigation.',
  metadataBase: new URL('https://bardilaw.com'),
  openGraph: {
    siteName: 'Bardi Immigration Law',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bardi Immigration Law',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bardi Immigration Law | Immigration Attorney',
    description:
      'Boutique immigration law firm. Your attorney from day one, direct attorney access, not an intake form.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Firm-level schema: LocalBusiness + LegalService, injected on every page via RootLayout.
// Pending fields (address, phone, hours) must be updated when client provides them.
const FIRM_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LegalService', 'LocalBusiness'],
      '@id': 'https://bardilaw.com/#firm',
      name: 'Bardi Immigration Law',
      alternateName: 'Bardi Law',
      url: 'https://bardilaw.com',
      email: 'info@bardilaw.com',
      // telephone + addressLocality omitted until client provides real values (BAR board inputs).
      // Emitting literal "PENDING" produces invalid structured data, so we leave these fields out.
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'GA',
        addressCountry: 'US',
      },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
