import Link from 'next/link';
import { Header } from './Header';
import { Footer } from './Footer';
import { CONTACT_PHONE } from '@/lib/contact';
import { Button } from './Button';
import { FaqAccordion } from './FaqAccordion';
import { JsonLd } from './JsonLd';
import { breadcrumbSchema } from '@/content/blog/meta';

// Build a schema.org FAQPage block from the same `faqs` the page renders, so the
// structured data can never drift from the visible Q&A (a Google requirement).
function buildFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

export interface ProcessStep {
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedArea {
  href: string;
  label: string;
  desc: string;
  learnMore?: string;
}

export interface RelatedArticle {
  href: string;
  label: string;
}

export interface PracticeAreaProps {
  title: string;
  subhead: string;
  statusCalloutTitle?: string;
  statusCalloutBody?: string;
  qualifyHeading?: string;
  qualifyBullets: string[];
  qualifyDisclaimer?: string;
  processSteps: ProcessStep[];
  processHeading?: string;
  helpsHeading?: string;
  helpsParagraph: string;
  helpsItems: string[];
  faqHeading?: string;
  faqs: FaqItem[];
  relatedHeading?: string;
  relatedAreas: RelatedArea[];
  relatedArticlesHeading?: string;
  relatedArticles?: RelatedArticle[];
  ctaHeading?: string;
  ctaSubtext?: string;
  ctaButtonLabel?: string;
  breadcrumbLabel: string;
  breadcrumbHref: string;
  homeHref?: string;
  homeLabel?: string;
  servicesHref?: string;
  servicesLabel?: string;
  contactHref?: string;
}

function GoldRule() {
  return <div className="w-10 h-[3px] bg-gold mt-3 mb-7" aria-hidden="true" />;
}

function CheckIcon() {
  return (
    <svg
      className="w-[18px] h-[18px] text-gold flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function PracticeAreaLayout({
  title,
  subhead,
  statusCalloutTitle,
  statusCalloutBody,
  qualifyHeading = 'Who May Qualify',
  qualifyBullets,
  qualifyDisclaimer,
  processSteps,
  processHeading = 'How the Process Works',
  helpsHeading = 'How Bardi Immigration Law Helps',
  helpsParagraph,
  helpsItems,
  faqHeading = 'Frequently Asked Questions',
  faqs,
  relatedHeading = 'Related Practice Areas',
  relatedAreas,
  relatedArticlesHeading = 'Related Articles',
  relatedArticles = [],
  ctaHeading = 'Start with a Consultation',
  ctaSubtext = "We'll help you understand your options and build the strongest possible case.",
  ctaButtonLabel = 'Schedule a Consultation',
  breadcrumbLabel,
  breadcrumbHref,
  homeHref = '/',
  homeLabel = 'Home',
  servicesHref = '/services',
  servicesLabel = 'Services',
  contactHref = '/contact',
}: PracticeAreaProps) {
  // BreadcrumbList JSON-LD mirroring the visible nav: Home › Services › This page (BAR-701).
  const breadcrumb = breadcrumbSchema([
    { name: homeLabel, path: homeHref },
    { name: servicesLabel, path: servicesHref },
    { name: breadcrumbLabel, path: breadcrumbHref },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      {faqs.length > 0 && <JsonLd data={buildFaqSchema(faqs)} />}
      <Header phone={CONTACT_PHONE} />
      <main id="main-content">

        {/* Hero */}
        <section className="bg-warmgray pt-20 pb-14 lg:pt-28 lg:pb-16">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <nav aria-label="Breadcrumb" className="text-[13px] text-charcoal/60 mb-6 font-sans">
              <Link href={homeHref} className="hover:text-navy transition-colors">{homeLabel}</Link>
              <span className="mx-2" aria-hidden="true">&rsaquo;</span>
              <Link href={servicesHref} className="hover:text-navy transition-colors">{servicesLabel}</Link>
              <span className="mx-2" aria-hidden="true">&rsaquo;</span>
              <span className="text-navy">{breadcrumbLabel}</span>
            </nav>
            <h1 className="font-serif text-4xl lg:text-[52px] font-bold text-navy leading-[1.15] mb-4">
              {title}
            </h1>
            <p className="font-sans text-[18px] text-charcoal leading-relaxed max-w-[640px]">
              {subhead}
            </p>
          </div>
        </section>

        {/* Status Callout (conditional) */}
        {statusCalloutTitle && statusCalloutBody && (
          <section className="bg-white pt-10 pb-0">
            <div className="max-w-site mx-auto px-5 lg:px-16">
              <div className="max-w-[760px] mx-auto border-l-4 border-gold bg-warmgray px-5 py-4 rounded-r-[4px]">
                <p className="font-sans text-[15px] text-charcoal leading-[1.65]">
                  <strong className="text-navy">{statusCalloutTitle}</strong>{' '}{statusCalloutBody}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Who May Qualify */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">{qualifyHeading}</h2>
              <GoldRule />
              <ul className="list-none p-0 m-0">
                {qualifyBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 mb-3.5">
                    <span className="text-gold text-xl leading-none mt-0.5 select-none" aria-hidden="true">•</span>
                    <span className="font-sans text-base text-charcoal leading-[1.65]">{bullet}</span>
                  </li>
                ))}
              </ul>
              {qualifyDisclaimer && (
                <p className="font-sans text-sm italic text-charcoal/60 mt-6 pt-4 border-t border-warmgray-200 leading-relaxed">
                  {qualifyDisclaimer}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* How the Process Works */}
        <section className="bg-warmgray py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[680px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">{processHeading}</h2>
              <GoldRule />
              <div className="relative">
                <div
                  className="hidden lg:block absolute left-[15px] top-8 bottom-9 w-[2px]"
                  style={{ borderLeft: '2px dashed #C9A84C' }}
                  aria-hidden="true"
                />
                {processSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-5 mb-9 last:mb-0">
                    <div
                      className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0 z-10"
                      aria-hidden="true"
                    >
                      <span className="font-sans font-semibold text-sm text-navy">{i + 1}</span>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-sm text-navy">{step.title}</p>
                      <p className="font-sans text-[15px] text-charcoal leading-[1.6] mt-1">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How Bardi Helps */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">{helpsHeading}</h2>
              <GoldRule />
              <p className="font-sans text-[17px] text-charcoal leading-[1.7] mb-7">{helpsParagraph}</p>
              <ul className="list-none p-0 m-0">
                {helpsItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 mb-3.5">
                    <CheckIcon />
                    <span className="font-sans text-[15px] text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-warmgray py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">{faqHeading}</h2>
              <GoldRule />
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* Related Practice Areas */}
        {relatedAreas.length > 0 && (
          <section className="bg-white py-14 lg:py-16">
            <div className="max-w-site mx-auto px-5 lg:px-16">
              <h2 className="font-serif text-2xl font-bold text-navy mb-7">{relatedHeading}</h2>
              <div className="flex flex-col sm:flex-row gap-6">
                {relatedAreas.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="flex-1 bg-warmgray border border-warmgray-200 rounded-[4px] px-5 py-4 hover:border-navy transition-colors group"
                  >
                    <p className="font-sans font-semibold text-[15px] text-navy mt-2">{area.label}</p>
                    <p className="font-sans text-sm text-charcoal/70 mt-1">{area.desc}</p>
                    <p className="font-sans font-semibold text-[13px] text-gold mt-1.5">{area.learnMore ?? 'Learn more'} &rarr;</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="bg-warmgray py-12 lg:py-14">
            <div className="max-w-site mx-auto px-5 lg:px-16">
              <h2 className="font-serif text-2xl font-bold text-navy mb-5">{relatedArticlesHeading}</h2>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {relatedArticles.map((article) => (
                  <li key={article.href} className="flex items-start gap-2.5">
                    <span className="text-gold text-lg leading-none mt-1 select-none" aria-hidden="true">&rsaquo;</span>
                    <Link
                      href={article.href}
                      className="font-sans text-[15px] text-navy underline decoration-gold/50 underline-offset-4 hover:decoration-navy transition-colors"
                    >
                      {article.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA Strip */}
        <section className="bg-navy py-16 lg:py-20 text-center">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-[36px] font-bold text-white leading-[1.2] max-w-[600px] mx-auto">
              {ctaHeading}
            </h2>
            {ctaSubtext && (
              <p className="font-sans text-base text-white/80 mt-3">{ctaSubtext}</p>
            )}
            <div className="mt-8">
              <Button href={contactHref} variant="primary" size="lg">
                {ctaButtonLabel}
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
