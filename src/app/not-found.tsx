import Link from 'next/link';
import { RootDocument } from '@/components/RootDocument';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';

// Top-level not-found. With two root layouts (the (en)/(es) route groups), the
// app has no single root layout to wrap this page, so it renders its own
// document shell via <RootDocument>. Kept fully static so @cloudflare/next-on-pages
// can serve it without an edge function (BAR-747).
export default function NotFound() {
  return (
    <RootDocument lang="en">
      <Header />
      <main id="main-content">
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <p className="font-serif text-6xl font-bold text-gold mb-4">404</p>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-4">
              Page not found
            </h1>
            <p className="text-charcoal/70 max-w-prose mx-auto mb-8 text-base leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or may have moved.
              Let&apos;s get you back on track.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="inline-block bg-navy text-white px-6 py-3 rounded font-medium hover:bg-navy/90 transition-colors"
              >
                Return home
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-navy text-navy px-6 py-3 rounded font-medium hover:bg-navy/5 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer phone={CONTACT_PHONE} />
    </RootDocument>
  );
}
