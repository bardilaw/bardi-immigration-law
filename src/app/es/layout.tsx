import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Bardi Immigration Law | Abogada de Inmigración en Georgia',
    template: '%s | Bardi Immigration Law',
  },
  description:
    'Bufete boutique de inmigración para familias e individuos. Con licencia en Georgia y Alabama. Como la ley de inmigración es federal, representamos a clientes en todo el país. Acceso directo a su abogada.',
  openGraph: {
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bardi Immigration Law — Abogada de Inmigración en Georgia',
      },
    ],
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <div lang="es">{children}</div>;
}
