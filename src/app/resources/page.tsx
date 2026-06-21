import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Immigration Resources',
  description:
    'Immigration guides, articles, and resources covering DACA, removal defense, green cards, and more, from Bardi Immigration Law, serving clients nationwide.',
  alternates: {
    canonical: 'https://bardilaw.com/resources',
    languages: {
      en: 'https://bardilaw.com/resources',
      es: 'https://bardilaw.com/es/resources',
    },
  },
  openGraph: {
    title: 'Immigration Resources | Bardi Immigration Law',
    description:
      'Immigration guides and articles on DACA, removal defense, green cards, U-visa, VAWA, and more.',
    url: 'https://bardilaw.com/resources',
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-6">Resources</h1>
            <p className="text-lg text-charcoal/80 max-w-xl mx-auto mb-10">
              We&apos;re building a library of plain-language immigration guides and articles. Check back
              soon, or contact us directly with your questions.
            </p>
            <Button href="/contact">Contact Us</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
