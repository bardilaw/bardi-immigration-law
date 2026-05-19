import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Immigration law resources, guides, and articles from Bardi Immigration Law. Serving Georgia, Alabama, NC, and SC.',
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
              soon — or contact us directly with your questions.
            </p>
            <Button href="/contact">Contact Us</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
