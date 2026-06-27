import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { I864pCalculator } from '@/components/I864pCalculator';
import { CONTACT_PHONE, phoneEnabled, telHref } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'I-864P Sponsor Income Calculator | Bardi Immigration Law',
  description:
    'Free I-864P sponsor calculator: answer five quick questions to estimate whether your household income meets the 125% federal poverty requirement to sponsor a relative on Form I-864.',
  alternates: {
    canonical: 'https://bardilaw.com/resources/i-864p-sponsor-calculator',
    languages: {
      'x-default': 'https://bardilaw.com/resources/i-864p-sponsor-calculator',
      en: 'https://bardilaw.com/resources/i-864p-sponsor-calculator',
      es: 'https://bardilaw.com/es/resources/i-864p-sponsor-calculator',
    },
  },
  openGraph: {
    title: 'I-864P Sponsor Income Calculator | Bardi Immigration Law',
    description:
      'Estimate whether your income meets the 125% federal poverty requirement to sponsor a relative on Form I-864.',
    url: 'https://bardilaw.com/resources/i-864p-sponsor-calculator',
    locale: 'en_US',
  },
};

export default function SponsorCalculatorPage() {
  return (
    <>
      <Header phone={CONTACT_PHONE} />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3">
                <Link
                  href="/resources"
                  className="font-sans text-sm font-semibold text-gold hover:text-navy transition-colors"
                >
                  &larr; Resources
                </Link>
              </p>
              <h1 className="font-serif text-4xl font-bold text-navy mb-4">
                I-864P Sponsor Income Calculator
              </h1>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                Thinking about being a financial sponsor on Form I-864, Affidavit of Support? Answer
                five quick questions to estimate whether your income meets the minimum 125% federal
                poverty requirement for your household size. This is an educational estimate &mdash;
                not legal advice.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="bg-warmgray py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="max-w-3xl">
              <I864pCalculator lang="en" phone={CONTACT_PHONE} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Not sure if your sponsor qualifies?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              We will help you work through the I-864 calculation, joint-sponsor options, and the
              financial documents you need. Reach out and we will review your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {phoneEnabled(CONTACT_PHONE) ? (
                <Button href={telHref(CONTACT_PHONE)} size="lg">
                  Call Us Today &ndash; {CONTACT_PHONE}
                </Button>
              ) : (
                <Button href="/contact" size="lg">
                  Request A Consultation
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
