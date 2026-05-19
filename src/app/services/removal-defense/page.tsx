import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Removal Defense Attorney Georgia | Deportation Lawyer',
  description:
    'Facing deportation? Bardi Immigration Law handles removal defense across GA, NC, SC, and AL. Direct attorney representation from day one. Time matters — contact us now.',
  alternates: {
    canonical: 'https://bardilaw.com/services/removal-defense',
    languages: {
      en: 'https://bardilaw.com/services/removal-defense',
      es: 'https://bardilaw.com/es/services/removal-defense',
    },
  },
  openGraph: {
    title: 'Removal Defense Attorney Georgia | Deportation Lawyer | Bardi Immigration Law',
    description:
      'Facing deportation? Direct attorney representation for removal defense across Georgia, North Carolina, South Carolina, and Alabama.',
    url: 'https://bardilaw.com/services/removal-defense',
  },
};

const SERVICES_LIST = [
  { label: 'Detained Removal Defense', desc: 'Full representation for clients in immigration detention' },
  { label: 'Non-Detained Removal Defense', desc: 'Representation for clients in removal proceedings who are not detained' },
  { label: 'Bond Hearings', desc: 'Advocating for release from detention pending your case' },
  { label: 'Cancellation of Removal', desc: '42B (non-LPR) and 42A (LPR) cancellation petitions' },
];

export default function RemovalDefensePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-charcoal/50 mb-6 font-sans">
              <Link href="/" className="hover:text-navy">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-navy">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-charcoal">Removal Defense</span>
            </nav>

            {/* Urgency banner */}
            <div className="bg-gold/10 border border-gold rounded-lg px-5 py-3 mb-8 flex items-center gap-3">
              <span className="text-gold font-bold text-lg" aria-hidden="true">!</span>
              <p className="text-navy font-sans text-sm font-semibold">
                If you or a family member are facing removal proceedings or detention — contact us immediately. Time matters.
              </p>
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-6">
              When the Stakes Are Highest, We Show Up.
            </h1>
            <p className="text-lg text-charcoal/80 max-w-2xl mb-12">
              A notice from immigration court isn&apos;t the end of your story — it&apos;s the beginning of a
              fight. We represent clients in both detained and non-detained removal proceedings, and
              we treat every case with the urgency and attention it demands. If you or someone you
              love is facing removal, time matters. Contact us today.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy mb-6">Services Include:</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {SERVICES_LIST.map((s) => (
                <div key={s.label} className="flex gap-3 bg-warmgray rounded-lg p-4">
                  <span className="text-gold font-bold mt-0.5" aria-hidden="true">✓</span>
                  <div>
                    <p className="font-semibold text-navy font-sans text-sm">{s.label}</p>
                    <p className="text-charcoal/70 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-warmgray rounded-lg p-6 mb-8 border-l-4 border-gold">
              <h3 className="font-serif text-lg font-bold text-navy mb-2">Who This Is For</h3>
              <p className="text-charcoal/80">
                Anyone in removal proceedings — whether detained or not. If you&apos;ve received a
                Notice to Appear (NTA) or are at risk of deportation, don&apos;t wait.
              </p>
            </div>

            <Button href="/contact" size="lg">Contact Us Immediately</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
