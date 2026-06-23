import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Immigration Legal Services',
  description:
    'DACA, SIJS, VAWA, U-Visa, TPS, family-based immigration, removal defense, and federal litigation, handled directly by the attorney from day one.',
  alternates: {
    canonical: 'https://bardilaw.com/services',
    languages: {
      'x-default': 'https://bardilaw.com/services',
      en: 'https://bardilaw.com/services',
      es: 'https://bardilaw.com/es/services',
    },
  },
  openGraph: {
    title: 'Immigration Legal Services | Bardi Immigration Law',
    description:
      'Benefits-based immigration, removal defense, and federal litigation, handled directly by the attorney from day one.',
    url: 'https://bardilaw.com/services',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bardi Immigration Law',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immigration Legal Services | Bardi Immigration Law',
    description:
      'Benefits-based immigration, removal defense, and federal litigation, handled directly by the attorney from day one.',
    images: ['/og-image.png'],
  },
};

const BENEFITS_BASED = [
  { label: 'DACA', desc: 'Deferred Action for Childhood Arrivals, initial applications & renewals', href: '/services/daca' },
  { label: 'SIJS', desc: 'Special Immigrant Juvenile Status, protection for unaccompanied minors', href: '/services/sijs' },
  { label: 'VAWA', desc: 'Violence Against Women Act, confidential self-petitions for abuse survivors', href: '/services/vawa' },
  { label: 'U-Visa', desc: 'Protection and legal status for victims of violent crime', href: '/services/u-visa' },
  { label: 'TPS', desc: 'Temporary Protected Status, registration and renewals', href: '/services/tps' },
  { label: 'Family-Based Immigration', desc: 'I-130 petitions, adjustment of status, consular processing', href: '/services/family-based-immigration' },
  { label: 'Waivers', desc: 'I-601, I-212, I-929, extreme hardship waiver filings', href: '/services/waivers' },
];

const TOP_LEVEL = [
  {
    icon: '🛡️',
    title: 'Removal Defense',
    href: '/services/removal-defense',
    desc: 'Detained and non-detained defense, bond hearings, cancellation of removal (42B/42A), BIA appeals. If you\'re in proceedings, time matters.',
  },
  {
    icon: '🏛️',
    title: 'Federal Litigation',
    href: '/services/federal-litigation',
    desc: 'Habeas corpus and mandamus petitions when administrative remedies are exhausted. Federal court experience across the Southeast.',
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

        {/* Benefits-Based Immigration */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl" aria-hidden="true">⚖️</span>
              <h2 className="font-serif text-3xl font-bold text-navy">Benefits-Based Immigration</h2>
            </div>
            <p className="text-charcoal/80 mb-8 max-w-2xl">
              We help immigrants at every stage of the process, from those who have been here since
              childhood to those navigating new pathways through family connections or humanitarian
              protection.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {BENEFITS_BASED.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-white rounded-lg p-5 flex flex-col gap-2 hover:shadow-md transition-shadow group"
                >
                  <p className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors">
                    {item.label}
                  </p>
                  <p className="text-sm text-charcoal/70 flex-1">{item.desc}</p>
                  <span className="text-sm font-semibold text-gold font-sans">Learn more →</span>
                </Link>
              ))}
            </div>
            <Link href="/services/benefits-based-immigration" className="text-sm font-semibold text-navy hover:text-gold font-sans">
              View all benefits-based services →
            </Link>
          </div>
        </section>

        {/* Removal Defense + Federal Litigation */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-6">
            {TOP_LEVEL.map((area) => (
              <div key={area.href} className="bg-warmgray rounded-lg p-6 flex flex-col gap-3">
                <span className="text-3xl" aria-hidden="true">{area.icon}</span>
                <h2 className="font-serif text-2xl font-bold text-navy">{area.title}</h2>
                <p className="text-charcoal/80 text-sm flex-1">{area.desc}</p>
                <Link href={area.href} className="text-sm font-semibold text-gold hover:underline font-sans self-start">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Not sure CTA */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">
              Not Sure Which Service Applies to Your Case?
            </h2>
            <p className="text-charcoal/70 mb-8 max-w-xl mx-auto">
              That&apos;s exactly what the consultation is for. You&apos;ll speak directly with your attorney,
              get straightforward answers, and understand your legal options, before you commit to
              anything.
            </p>
            <Button href="/contact" size="lg">Book a Consultation</Button>
            <p className="text-sm text-charcoal/50 mt-4 font-sans">
              All consultations are conducted by a licensed immigration attorney.
            </p>
          </div>
        </section>
      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
