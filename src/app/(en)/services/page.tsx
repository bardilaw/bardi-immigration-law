import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Immigration Legal Services',
  description:
    'Removal defense, family-based immigration, waivers, consular processing, appeals, federal litigation, and more, handled directly by the attorney from day one.',
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
      'Removal defense, family-based immigration, waivers, consular processing, appeals, and federal litigation, handled directly by the attorney from day one.',
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
      'Removal defense, family-based immigration, waivers, consular processing, appeals, and federal litigation, handled directly by the attorney from day one.',
    images: ['/og-image.png'],
  },
};

// Top-level practice areas (BAR-697 row 23). Removal Defense leads (highest volume).
// Items without a dedicated service page yet link to the firm's in-depth guide on
// that topic as an interim destination, pending the detailed descriptions Eszter
// will supply (row 21).
const TOP_LEVEL = [
  {
    title: 'Deportation (Removal) Defense',
    href: '/services/removal-defense',
    desc: 'Detained and non-detained defense, bond hearings, cancellation of removal (42A/42B), and full representation in immigration court. If you are in proceedings, time matters.',
  },
  {
    title: 'Family-Based Immigration',
    href: '/services/family-based-immigration',
    desc: 'I-130 petitions, adjustment of status, and reuniting families through citizen and permanent-resident sponsorship.',
  },
  {
    title: 'Waivers',
    href: '/services/waivers',
    desc: 'I-601 and I-601A unlawful-presence and inadmissibility waivers, I-212, and extreme-hardship filings.',
  },
  {
    title: 'Consular Processing',
    href: '/blog/consular-processing-immigrant-visa-georgia',
    desc: 'Immigrant-visa processing through a U.S. consulate abroad, from approved petition through the interview at the National Visa Center and post.',
  },
  {
    title: 'Appeals',
    href: '/blog/bia-appeal-immigration-court-georgia',
    desc: 'Board of Immigration Appeals (BIA) appeals of immigration-judge decisions, plus motions to reopen and reconsider.',
  },
  {
    title: 'Federal Litigation',
    href: '/services/federal-litigation',
    desc: 'Habeas corpus and mandamus petitions when administrative remedies are exhausted. Federal court experience across the Southeast.',
  },
  {
    title: 'Other Immigration Options',
    href: '#other-options',
    desc: 'SIJS, humanitarian relief, naturalization, DACA, TPS, and parole programs. See the full list below.',
  },
];

// "Other Immigration Options" sub-group (BAR-697 row 24).
const OTHER_OPTIONS = [
  {
    label: 'SIJS',
    desc: 'Special Immigrant Juvenile Status, protection for abused, abandoned, or neglected minors.',
    href: '/services/sijs',
  },
  {
    label: 'Humanitarian Relief (U-Visa & VAWA)',
    desc: 'U-Visas for victims of qualifying crimes and confidential VAWA self-petitions for abuse survivors.',
    href: '/services/u-visa',
    secondary: { label: 'VAWA', href: '/services/vawa' },
  },
  {
    label: 'Naturalization',
    desc: 'U.S. citizenship eligibility, the N-400 application, the civics and English tests, and the oath.',
    href: '/blog/naturalization-citizenship-georgia',
  },
  {
    label: 'DACA',
    desc: 'Deferred Action for Childhood Arrivals, initial applications and renewals.',
    href: '/services/daca',
  },
  {
    label: 'TPS',
    desc: 'Temporary Protected Status, registration and re-registration for designated countries.',
    href: '/services/tps',
  },
  {
    label: 'Parole-in-Place & Advance Parole',
    desc: 'Parole-in-place for military families and advance-parole travel documents for pending applicants.',
    href: '/blog/parole-in-place-military-families-georgia',
    secondary: { label: 'Advance Parole', href: '/blog/advance-parole-travel-documents-georgia' },
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header phone={CONTACT_PHONE} />
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

        {/* Top-level practice areas */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-navy mb-8">Practice Areas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TOP_LEVEL.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="bg-white rounded-lg p-6 flex flex-col gap-2 hover:shadow-md transition-shadow group"
                >
                  <p className="font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors">
                    {area.title}
                  </p>
                  <p className="text-sm text-charcoal/70 flex-1">{area.desc}</p>
                  <span className="text-sm font-semibold text-gold font-sans">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Immigration Options */}
        <section id="other-options" className="bg-white py-16 scroll-mt-24">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-navy mb-2">Other Immigration Options</h2>
            <p className="text-charcoal/80 mb-8 max-w-2xl">
              Additional pathways and protections we handle. Not sure which one fits your situation?
              That&apos;s exactly what the consultation is for.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {OTHER_OPTIONS.map((item) => (
                <div
                  key={item.href}
                  className="bg-warmgray rounded-lg p-5 flex flex-col gap-2"
                >
                  <Link href={item.href} className="group">
                    <p className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors">
                      {item.label}
                    </p>
                  </Link>
                  <p className="text-sm text-charcoal/70 flex-1">{item.desc}</p>
                  <div className="flex items-center gap-4">
                    <Link href={item.href} className="text-sm font-semibold text-gold hover:underline font-sans">
                      Learn more →
                    </Link>
                    {item.secondary && (
                      <Link href={item.secondary.href} className="text-sm font-semibold text-navy hover:underline font-sans">
                        {item.secondary.label} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
