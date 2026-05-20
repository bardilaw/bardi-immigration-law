import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Family-Based Immigration Attorney Georgia | Green Cards, I-130 Petitions',
  description:
    'U.S. citizens and permanent residents can sponsor family members for green cards. Attorney Bardi handles I-130 petitions, adjustment of status, and waiver filings.',
  alternates: {
    canonical: 'https://bardilaw.com/services/family-based-immigration',
    languages: {
      en: 'https://bardilaw.com/services/family-based-immigration',
      es: 'https://bardilaw.com/es/services/family-based-immigration',
    },
  },
  openGraph: {
    title: 'Family-Based Immigration Attorney Georgia | Bardi Immigration Law',
    description:
      'I-130 petitions, adjustment of status, consular processing, and waivers for family immigration. Serving GA, AL, NC, and SC.',
    url: 'https://bardilaw.com/services/family-based-immigration',
  },
};

const CITIZEN_CAN_PETITION = [
  'Your spouse',
  'Your unmarried children under 21',
  'Your parents',
  'Your adult married or unmarried children',
  'Your siblings',
];

const LPR_CAN_PETITION = [
  'Your spouse',
  'Your unmarried children',
];

export default function FamilyBasedPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-sm text-charcoal/50 mb-6 font-sans">
              <Link href="/" className="hover:text-navy">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-navy">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-charcoal">Family-Based Immigration</span>
            </nav>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Family-Based Immigration
            </h1>
            <p className="text-lg text-charcoal/80 mb-12">
              U.S. citizens and permanent residents can petition to bring certain family members to
              the United States. The process is complex — processing times, visa categories, and
              eligibility rules vary significantly. We help you navigate it correctly from the start.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Eligible Family Relationships</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-warmgray rounded-lg p-5">
                    <h3 className="font-semibold text-navy font-sans text-sm mb-3 uppercase tracking-wide">
                      If you are a U.S. citizen, you can petition for:
                    </h3>
                    <ul className="space-y-2">
                      {CITIZEN_CAN_PETITION.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
                          <span className="text-gold mt-0.5" aria-hidden="true">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-warmgray rounded-lg p-5">
                    <h3 className="font-semibold text-navy font-sans text-sm mb-3 uppercase tracking-wide">
                      If you are a Lawful Permanent Resident, you can petition for:
                    </h3>
                    <ul className="space-y-2">
                      {LPR_CAN_PETITION.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
                          <span className="text-gold mt-0.5" aria-hidden="true">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-charcoal/60 mt-3 font-sans">
                  Processing times vary significantly by category and your family member&apos;s country of origin.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">When It Gets Complicated</h2>
                <p className="text-charcoal/80">
                  Family-based immigration isn&apos;t always straightforward. Your family member may have
                  prior periods of unlawful presence, prior immigration violations, or a prior order
                  of removal. These issues do not always bar immigration relief — but they require
                  careful legal strategy and, often, a waiver filing alongside the primary petition.
                </p>
                <p className="text-charcoal/80 mt-3">
                  Attorney Bardi identifies these issues early and builds a plan that accounts for them.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">What Attorney Bardi Does</h2>
                <p className="text-charcoal/80">
                  Attorney Bardi handles the complete family-based process: the I-130 petition,
                  adjustment of status or consular processing, grounds of inadmissibility analysis,
                  and waiver filings where needed. She manages the process from start to finish so
                  that complications don&apos;t derail your case.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-warmgray-200">
              <Button href="/contact" size="lg">Schedule a Family Immigration Consultation</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
