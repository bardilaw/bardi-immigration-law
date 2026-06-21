import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { FaqAccordion } from '@/components/FaqAccordion';
import { JsonLd } from '@/components/JsonLd';
import { FAQ_CATEGORIES, FAQ_SCHEMA, FAQ_DISCLAIMER } from './faqData';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Immigration Law',
  description:
    'Answers to common immigration questions about DACA, green cards, asylum, and removal defense from Bardi Immigration Law. Licensed; because immigration is federal law, we represent clients nationwide.',
  alternates: {
    canonical: 'https://bardilaw.com/faq',
    languages: {
      en: 'https://bardilaw.com/faq',
      es: 'https://bardilaw.com/es/faq',
    },
  },
  openGraph: {
    title: 'Immigration FAQ | Bardi Immigration Law',
    description:
      'Plain-English answers to common immigration questions, DACA, green cards, asylum, and removal defense.',
    url: 'https://bardilaw.com/faq',
    locale: 'en_US',
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 max-w-prose">
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl lg:text-[44px] font-bold text-navy leading-[1.15] mb-4">
                Frequently Asked Questions
              </h1>
              <div className="w-10 h-[3px] bg-gold mb-6" aria-hidden="true" />
              <p className="font-sans text-[18px] text-charcoal leading-relaxed">
                Straightforward answers to questions we hear most often about DACA,
                green cards, asylum, and removal defense. Have a question that is not
                here? You work with your attorney, not an intake form, so just ask
                at your consultation.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ categories */}
        <section className="bg-white pb-8">
          <div className="max-w-site mx-auto px-5 lg:px-8 max-w-prose">
            <div className="max-w-2xl space-y-12">
              {FAQ_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-2">
                    {cat.title}
                  </h2>
                  <div className="w-8 h-[2px] bg-gold mb-2" aria-hidden="true" />
                  <FaqAccordion items={cat.items} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-white pb-16 lg:pb-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 max-w-prose">
            <div className="max-w-2xl">
              <p className="font-sans text-xs text-charcoal/60 leading-relaxed border-t border-warmgray-200 pt-6">
                {FAQ_DISCLAIMER}
              </p>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-navy py-16 lg:py-20 text-center">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-[32px] font-bold text-white leading-[1.2] max-w-[600px] mx-auto">
              Still have questions about your case?
            </h2>
            <p className="font-sans text-base text-white/80 mt-3">
              One consultation. Your attorney. Straight answers.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Book a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
