import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Benefits-Based Immigration',
  description:
    'Naturalization, green cards, family petitions, DACA, U-visa, VAWA, SIJS, TPS, waivers and more. Bardi Immigration Law serves Georgia, Alabama, NC, and SC.',
};

const SERVICES_LIST = [
  { label: 'Naturalization', desc: 'Applying for U.S. citizenship' },
  { label: 'Lawful Permanent Resident (LPR) Status', desc: 'Green card petitions and processing' },
  { label: 'Family-Based Petitions (I-130)', desc: 'Sponsoring a spouse, parent, or child' },
  { label: 'Temporary Protected Status (TPS)', desc: 'Status protection for nationals of designated countries' },
  { label: 'Waivers', desc: 'I-601 (unlawful presence), I-212 (prior removal), I-929 (derivative)' },
  { label: 'Deferred Action for Childhood Arrivals (DACA)', desc: 'Initial applications and renewals' },
  { label: 'Special Immigrant Juvenile Status (SIJS)', desc: 'Protection for unaccompanied minors' },
  { label: 'Violence Against Women Act (VAWA) Petitions', desc: 'Self-petition pathways for survivors of abuse' },
  { label: 'U-Visa', desc: 'Protection and status for victims of violent crime' },
];

export default function BenefitsBasedPage() {
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
              <span className="text-charcoal">Benefits-Based Immigration</span>
            </nav>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-6">
              Build Your Future in the United States.
            </h1>
            <p className="text-lg text-charcoal/80 max-w-2xl mb-12">
              We help immigrants at every stage of the process — from those who have been here since
              childhood to those navigating new pathways through family connections or humanitarian
              protection. No matter where you are in your journey, we look for the path forward.
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

            <div className="bg-warmgray rounded-lg p-6 mb-8 border-l-4 border-navy">
              <h3 className="font-serif text-lg font-bold text-navy mb-2">Who This Is For</h3>
              <p className="text-charcoal/80">
                Individuals who have built their lives in the U.S. and are ready to secure their
                legal status — through marriage, family, or humanitarian protection.
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
