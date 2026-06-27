import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { I864pCalculator } from '@/components/I864pCalculator';
import { VisaBulletinTable } from '@/components/VisaBulletinTable';
import { CONTACT_PHONE, phoneEnabled, telHref } from '@/lib/contact';
import { OFFICIAL_TOOLS } from './resourcesData';

export const metadata: Metadata = {
  title: 'Immigration Resources | Bardi Immigration Law',
  description:
    'Quick links to official government immigration tools: pay an ICE bond, check your immigration court hearing date, and track your USCIS case status.',
  alternates: {
    canonical: 'https://bardilaw.com/resources',
    languages: {
      'x-default': 'https://bardilaw.com/resources',
      en: 'https://bardilaw.com/resources',
      es: 'https://bardilaw.com/es/resources',
    },
  },
  openGraph: {
    title: 'Immigration Resources | Bardi Immigration Law',
    description:
      'Official government tools to pay an ICE bond, check a hearing date, and track a USCIS case.',
    url: 'https://bardilaw.com/resources',
    locale: 'en_US',
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Header phone={CONTACT_PHONE} />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl font-bold text-navy mb-4">Resources</h1>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                Direct links to official U.S. government tools you can use to manage your case. These
                take you to government websites &mdash; not Bardi Immigration Law. If you are unsure
                what any result means, contact our office and we will walk you through it.
              </p>
            </div>
          </div>
        </section>

        {/* I-864P Sponsor Calculator (feedback #38) — moved to top featured section */}
        <section id="sponsor-calculator" className="bg-warmgray py-16 lg:py-20 scroll-mt-24">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="max-w-2xl mb-8">
              <h2 className="font-serif text-2xl font-bold text-navy mb-3">
                I-864P Sponsor Calculator
              </h2>
              <p className="text-charcoal/80 leading-relaxed">
                Thinking about being a financial sponsor on Form I-864, Affidavit of Support? Answer
                five quick questions to estimate whether your income meets the minimum requirement.
                This is an educational estimate &mdash; not legal advice.
              </p>
            </div>
            <div className="max-w-3xl">
              <I864pCalculator lang="en" phone={CONTACT_PHONE} />
            </div>
          </div>
        </section>

        {/* Official government tools */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-navy mb-8">Official Government Tools</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {OFFICIAL_TOOLS.map((tool) => (
                <a
                  key={tool.href}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-white rounded-lg border border-warmgray-200 p-6 shadow-sm hover:shadow-md hover:border-gold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                >
                  <h3 className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors flex items-start gap-1.5">
                    <span>{tool.title}</span>
                    <svg className="w-4 h-4 mt-1 shrink-0 text-charcoal/40 group-hover:text-gold" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M7 5h8v8M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </h3>
                  <p className="text-sm text-charcoal/75 leading-relaxed mt-2 flex-1">{tool.description}</p>
                  <span className="text-xs font-semibold text-charcoal/50 mt-4">{tool.domain}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Visa Bulletin (row 37) — auto-updated monthly from DOS */}
        <section id="visa-bulletin" className="bg-warmgray py-16 lg:py-20 scroll-mt-24">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="max-w-2xl mb-8">
              <h2 className="font-serif text-2xl font-bold text-navy mb-3">
                Visa Bulletin &ndash; Priority Dates
              </h2>
              <p className="text-charcoal/80 leading-relaxed">
                The monthly Visa Bulletin tells family- and employment-based green card applicants
                whether their priority date is &ldquo;current&rdquo; and they can move forward. These
                are the Final Action Dates, imported directly from the U.S. Department of State and
                refreshed each month.
              </p>
            </div>
            <VisaBulletinTable lang="en" />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Not sure what your case status means?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              We help clients understand where their case stands and what comes next. Reach out and
              we will review your situation.
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
              <a
                href="/contact"
                className="inline-flex items-center justify-center font-sans font-semibold rounded text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-navy transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                Send Us a Message
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
