import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Bardi Immigration Law | Abogada de Inmigración en Georgia',
    template: '%s | Bardi Immigration Law',
  },
  description:
    'Bufete boutique de inmigración que sirve a familias e individuos en Georgia, Alabama, Carolina del Norte y Carolina del Sur. Presidenta del Capítulo AILA Georgia-Alabama 2025–26. Acceso directo a su abogada.',
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <div lang="es">{children}</div>;
}
