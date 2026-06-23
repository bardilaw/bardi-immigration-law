import type { Metadata } from 'next';
import { RootDocument } from '@/components/RootDocument';

export const metadata: Metadata = {
  title: {
    default: 'Bardi Immigration Law | Abogada de Inmigración',
    template: '%s | Bardi Immigration Law',
  },
  description:
    'Bufete boutique de inmigración para familias e individuos. Como la ley de inmigración es federal, representamos a clientes en todo el país. Acceso directo a su abogada.',
  metadataBase: new URL('https://bardilaw.com'),
  openGraph: {
    siteName: 'Bardi Immigration Law',
    locale: 'es_US',
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
    title: 'Bardi Immigration Law | Abogada de Inmigración',
    description:
      'Bufete boutique de inmigración. Acceso directo a su abogada, no un formulario de admisión.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Spanish root layout — serves <html lang="es"> statically for the /es tree so
// the document language is correct for WCAG 3.1.1 and bilingual SEO (BAR-747).
// Replaces the former <div lang="es"> subtree wrapper, which left the document
// language wrong. Shared shell lives in <RootDocument>.
export default function EsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootDocument lang="es">{children}</RootDocument>;
}
