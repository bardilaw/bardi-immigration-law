import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Benefits-Based Immigration Attorney | Green Cards, DACA, U-Visa & More',
  description:
    'Green cards, DACA, naturalization, U-visa, VAWA, family petitions, TPS, and waivers — personalized immigration representation across Georgia and the Southeast.',
  alternates: {
    canonical: 'https://bardilaw.com/services/benefits-based-immigration',
    languages: {
      en: 'https://bardilaw.com/services/benefits-based-immigration',
      es: 'https://bardilaw.com/es/services/benefits-based-immigration',
    },
  },
  openGraph: {
    title: 'Benefits-Based Immigration Attorney | Bardi Immigration Law',
    description:
      'Green cards, DACA, naturalization, U-visa, VAWA, family petitions, TPS, and waivers. Serving Georgia, Alabama, NC, and SC.',
    url: 'https://bardilaw.com/services/benefits-based-immigration',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bardi Immigration Law — Georgia Immigration Attorney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benefits-Based Immigration Attorney | Bardi Immigration Law',
    description: 'Green cards, DACA, naturalization, U-visa, VAWA, family petitions, TPS, and waivers. Serving Georgia, Alabama, NC, and SC.',
    images: ['/og-image.png'],
  },
};

const SERVICES_LIST = [
  { label: 'Naturalization', desc: 'Applying for U.S. citizenship', href: '/contact' },
  { label: 'Lawful Permanent Resident (LPR) Status', desc: 'Green card petitions and processing', href: '/services/family-based-immigration' },
  { label: 'Family-Based Petitions (I-130)', desc: 'Sponsoring a spouse, parent, or child', href: '/services/family-based-immigration' },
  { label: 'Temporary Protected Status (TPS)', desc: 'Status protection for nationals of designated countries', href: '/services/tps' },
  { label: 'Waivers', desc: 'I-601 (unlawful presence), I-212 (prior removal), I-929 (derivative)', href: '/services/waivers' },
  { label: 'DACA', desc: 'Initial applications and renewals', href: '/services/daca' },
  { label: 'Special Immigrant Juvenile Status (SIJS)', desc: 'Protection for unaccompanied minors', href: '/services/sijs' },
  { label: 'VAWA Petitions', desc: 'Self-petition pathways for survivors of abuse', href: '/services/vawa' },
  { label: 'U-Visa', desc: 'Protection and status for victims of violent crime', href: '/services/u-visa' },
];

export default function BenefitsBasedPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-warmgray pt-20 pb-14 lg:pt-28 lg:pb-16">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <nav aria-label="Breadcrumb" className="text-[13px] text-charcoal/60 mb-6 font-sans">
              <Link href="/" className="hover:text-navy transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">&rsaquo;</span>
              <Link href="/services" className="hover:text-navy transition-colors">Services</Link>
              <span className="mx-2" aria-hidden="true">&rsaquo;</span>
              <span className="text-navy">Benefits-Based Immigration</span>
            </nav>
            <h1 className="font-serif text-4xl lg:text-[52px] font-bold text-navy leading-[1.15] mb-4">
              Benefits-Based Immigration
            </h1>
            <p className="font-sans text-[18px] text-charcoal leading-relaxed max-w-[640px]">
              We help immigrants at every stage — from those who have been here since childhood to those navigating new pathways through family connections or humanitarian protection.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">Services Include</h2>
              <div className="w-10 h-[3px] bg-gold mt-3 mb-7" aria-hidden="true" />
              <div className="grid sm:grid-cols-2 gap-4">
                {SERVICES_LIST.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="flex gap-3 bg-warmgray border border-warmgray-200 rounded-lg p-4 hover:border-navy transition-colors group"
                  >
                    <span className="text-gold font-bold mt-0.5 select-none" aria-hidden="true">✓</span>
                    <div>
                      <p className="font-sans font-semibold text-navy text-sm group-hover:text-navy">{s.label}</p>
                      <p className="font-sans text-charcoal/70 text-sm mt-0.5">{s.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 lg:py-20 text-center">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-[36px] font-bold text-white leading-[1.2] max-w-[600px] mx-auto">
              Start with a Consultation
            </h2>
            <p className="font-sans text-base text-white/80 mt-3">
              Not sure which pathway applies to you? We assess your full situation and identify your options.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
