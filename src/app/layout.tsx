import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bardi Immigration Law',
  description:
    'Experienced immigration law services in Georgia and the Southeast United States. Bardi Immigration Law provides dedicated legal counsel for visas, green cards, citizenship, and deportation defense.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
