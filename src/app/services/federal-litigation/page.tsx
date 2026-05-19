import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Federal Litigation',
  description:
    'Habeas corpus and mandamus petitions when administrative immigration remedies are exhausted. Bardi Immigration Law — Georgia, Alabama, NC, SC.',
};

const SERVICES_LIST = [
  {
    label: 'Habeas Corpus Petitions',
    desc: 'Challenging unlawful detention in federal court',
  },
  {
    label: 'Mandamus Petitions',
    desc: 'Compelling unreasonably delayed agency action',
  },
];

export default function FederalLitigationPage() {
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
              <span className="text-charcoal">Federal Litigation</span>
            </nav>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-6">
              When the Court System Is the Answer.
            </h1>
            <p className="text-lg text-charcoal/80 max-w-2xl mb-12">
              Not every immigration case can be resolved within the immigration court system. When
              administrative options have been exhausted — or when a federal agency has unreasonably
              delayed or denied your petition — federal litigation may be your best option. We take
              cases to federal court and advocate for your rights at every level.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy mb-6">Services Include:</h2>
            <div className="flex flex-col gap-4 mb-12">
              {SERVICES_LIST.map((s) => (
                <div key={s.label} className="flex gap-3 bg-warmgray rounded-lg p-5">
                  <span className="text-gold font-bold mt-0.5" aria-hidden="true">✓</span>
                  <div>
                    <p className="font-semibold text-navy font-sans">{s.label}</p>
                    <p className="text-charcoal/70 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-warmgray rounded-lg p-6 mb-8 border-l-4 border-navy">
              <h3 className="font-serif text-lg font-bold text-navy mb-2">Who This Is For</h3>
              <p className="text-charcoal/80">
                Applicants whose petitions have been unreasonably delayed or denied, or individuals
                who have been detained beyond what the law allows.
              </p>
            </div>

            <Button href="/contact" size="lg">Schedule a Consultation</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
