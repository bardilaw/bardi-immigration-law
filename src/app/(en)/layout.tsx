import type { Metadata } from 'next';
import { RootDocument } from '@/components/RootDocument';

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

// English root layout. The `/es` tree has its own root layout so each document
// can declare the correct language statically (BAR-747). Shared shell — fonts,
// firm JSON-LD, GA4, global styles — lives in <RootDocument>.
export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
