import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Immigration Legal Services',
  description:
    'DACA, family-based immigration, removal defense, and federal litigation — handled directly by the attorney from day one. Serving Georgia, Alabama, NC, and SC.',
  alternates: {
    canonical: 'https://bardilaw.com/services',
    languages: {
      en: 'https://bardilaw.com/services',
      es: 'https://bardilaw.com/es/services',
    },
  },
  openGraph: {
    title: 'Immigration Legal Services | Bardi Immigration Law',
    description:
      'DACA, family-based immigration, removal defense, and federal litigation — handled directly by the attorney from day one.',
    url: 'https://bardilaw.com/services',
  },
};

const PRACTICE_AREAS = [
  {
    icon: '⚖️',
    title: 'Benefits-Based Immigration',
    href: '/services/benefits-based-immigration',
    desc: 'Naturalization, green cards, family petitions, TPS, DACA, U-visa, VAWA, SIJS, waivers, and more. We help you build a clear path forward.',
    cta: 'Explore Benefits-Based Immigration',
  },
  {
    icon: '🛡️',
    title: 'Removal Defense',
    href: '/services/removal-defense',
    desc: 'Detained and non-detained defense, bond hearings, cancellation of removal. If you\'re in proceedings — time matters.',
    cta: 'Explore Removal Defense',
  },
  {
    icon: '🏛️',
    title: 'Federal Litigation',
    href: '/services/federal-litigation',
    desc: 'Habeas corpus and mandamus petitions when administrative remedies are exhausted.',
    cta: 'Explore Federal Litigation',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Page hero */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-charcoal/50 mb-6 font-sans">
              <Link href="/" className="hover:text-navy">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-charcoal">Services</span>
            </nav>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Immigration Services for Every Stage of Your Journey
            </h1>
            <p className="text-lg text-charcoal/80 max-w-2xl">
              Immigration cases are complex. Whether you&apos;re working toward a green card, defending
              against removal, or navigating a federal court battle, you need an attorney who
              understands both the law and what&apos;s at stake for your family. Here&apos;s what we handle.
            </p>
          </div>
        </section>

        {/* Practice area cards — stacked horizontal */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 flex flex-col gap-6">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.href}
                className="bg-white rounded-lg p-6 lg:p-8 flex flex-col md:flex-row md:items-start gap-4"
              >
                <span className="text-3xl flex-shrink-0" aria-hidden="true">{area.icon}</span>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-bold text-navy mb-2">{area.title}</h2>
                  <p className="text-charcoal/80 mb-4">{area.desc}</p>
                  <Link
                    href={area.href}
                    className="text-sm font-semibold text-gold hover:underline font-sans"
                  >
                    {area.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ICP guidance CTA */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <p className="text-charcoal/70 text-lg mb-6">
              Not sure which practice area applies to your situation?
            </p>
            <Button href="/contact" size="lg">Schedule a Free Consultation</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
