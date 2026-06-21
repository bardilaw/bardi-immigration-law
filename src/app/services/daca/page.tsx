import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { FaqAccordion } from '@/components/FaqAccordion';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'DACA Attorney Georgia | Deferred Action for Childhood Arrivals',
  description:
    'DACA applications and renewals. Licensed in Georgia and Alabama. Attorney Bardi reviews your full record before filing — eligibility is technical and the stakes are real.',
  alternates: {
    canonical: 'https://bardilaw.com/services/daca',
    languages: {
      en: 'https://bardilaw.com/services/daca',
      es: 'https://bardilaw.com/es/services/daca',
    },
  },
  openGraph: {
    title: 'DACA Attorney Georgia | Bardi Immigration Law',
    description:
      'DACA initial applications and renewals. Direct attorney review. Licensed in Georgia and Alabama.',
    url: 'https://bardilaw.com/services/daca',
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
    title: 'DACA Attorney Georgia | Bardi Immigration Law',
    description: 'DACA initial applications and renewals. Direct attorney review. Licensed in Georgia and Alabama.',
    images: ['/og-image.png'],
  },
};

const QUALIFY_BULLETS = [
  'You were under 31 as of June 15, 2012',
  'You came to the United States before your 16th birthday',
  'You have continuously resided in the United States since June 15, 2007',
  'You were present in the United States on June 15, 2012',
  'You are currently in school, have a high school diploma or GED, or are an honorably discharged veteran',
  'You have not been convicted of a felony or significant misdemeanor',
];

const PROCESS_STEPS = [
  {
    title: 'File Form I-821D',
    body: 'Submit the DACA request form and Form I-765 (Employment Authorization) together with all required supporting documentation.',
  },
  {
    title: 'Biometrics appointment',
    body: 'USCIS will schedule your biometrics appointment to collect fingerprints and photos. Typically 2–4 weeks after filing.',
  },
  {
    title: 'USCIS review',
    body: 'Processing times vary. Current estimates provided at consultation. We monitor your case and respond to any RFEs.',
  },
  {
    title: 'Decision and EAD card',
    body: 'If approved, you receive a 2-year Employment Authorization Document (work permit) and DACA status.',
  },
  {
    title: 'Renewal',
    body: 'DACA must be renewed every 2 years. We track your renewal window and file proactively.',
  },
];

const HELPS_ITEMS = [
  'Initial case evaluation and eligibility review',
  'Preparation and filing of Form I-821D and I-765',
  'Response to Requests for Evidence (RFEs)',
  'Proactive renewal tracking and filing',
  'Direct attorney communication throughout',
];

const FAQS = [
  {
    q: 'How long does the DACA renewal process take?',
    a: 'Processing times currently range from several months to over a year. We file your renewal early — typically 5–6 months before your EAD expiration — to reduce gaps in work authorization.',
  },
  {
    q: "I've had DACA before but let it expire. Can I reapply?",
    a: 'In most cases, yes. Prior DACA recipients whose status lapsed may be eligible to request initial DACA again. The requirements are the same as a first-time request.',
  },
  {
    q: 'Does DACA give me a path to a green card?',
    a: 'DACA does not provide a direct path to permanent residency on its own. However, some DACA recipients may be eligible for green cards through marriage, family sponsorship, or other routes. We assess each case individually.',
  },
  {
    q: 'What happens if USCIS sends an RFE?',
    a: 'A Request for Evidence is not a denial. We respond to all RFEs directly — drafting the response, compiling supporting documentation, and submitting on your behalf.',
  },
];

// FAQPage structured data built from the same FAQS the page renders, so schema
// and visible Q&A stay in sync (a Google structured-data requirement).
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const RELATED = [
  { href: '/services/tps', label: 'TPS', desc: 'Temporary Protected Status' },
  { href: '/services/vawa', label: 'VAWA', desc: 'Violence Against Women Act' },
  { href: '/services/family-based-immigration', label: 'Family-Based', desc: 'Family Petitions & Green Cards' },
];

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

export default function DacaPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <Header />
      <main id="main-content">

        {/* 5.1 Hero */}
        <section className="bg-warmgray pt-20 pb-14 lg:pt-28 lg:pb-16">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <nav aria-label="Breadcrumb" className="text-[13px] text-charcoal/60 mb-6 font-sans">
              <Link href="/" className="hover:text-navy transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">&rsaquo;</span>
              <Link href="/services" className="hover:text-navy transition-colors">Services</Link>
              <span className="mx-2" aria-hidden="true">&rsaquo;</span>
              <span className="text-navy">DACA</span>
            </nav>
            <h1 className="font-serif text-4xl lg:text-[52px] font-bold text-navy leading-[1.15] mb-4">
              DACA
            </h1>
            <p className="font-sans text-[18px] text-charcoal leading-relaxed max-w-[640px]">
              DACA renewals for existing recipients. Initial consultations available for individuals who have previously held DACA or who want to understand their options.
            </p>
          </div>
        </section>

        {/* Status callout */}
        <section className="bg-white pt-10 pb-0">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto border-l-4 border-gold bg-warmgray px-5 py-4 rounded-r-[4px]">
              <p className="font-sans text-[15px] text-charcoal leading-[1.65]">
                <strong className="text-navy">Current DACA Status (as of 2025):</strong>{' '}Due to ongoing federal court litigation, USCIS is not currently approving new initial DACA applications for individuals who have never held DACA. Renewals for existing DACA recipients continue. We will advise you on your current options at consultation.
              </p>
            </div>
          </div>
        </section>

        {/* 5.2 Who May Qualify */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">Who May Qualify</h2>
              <GoldRule />
              <ul className="list-none p-0 m-0">
                {QUALIFY_BULLETS.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 mb-3.5">
                    <span className="text-gold text-xl leading-none mt-0.5 select-none" aria-hidden="true">•</span>
                    <span className="font-sans text-base text-charcoal leading-[1.65]">{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm italic text-charcoal/60 mt-6 pt-4 border-t border-warmgray-200 leading-relaxed">
                This overview is for informational purposes only. Eligibility depends on the specific facts of your case.
              </p>
            </div>
          </div>
        </section>

        {/* 5.3 How the Process Works */}
        <section className="bg-warmgray py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[680px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">How the Process Works</h2>
              <GoldRule />
              <div className="relative">
                {/* Dashed vertical connector — hidden on mobile */}
                <div
                  className="hidden lg:block absolute left-[15px] top-8 bottom-9 w-[2px]"
                  style={{ borderLeft: '2px dashed #C9A84C' }}
                  aria-hidden="true"
                />
                {PROCESS_STEPS.map((step, i) => (
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

        {/* 5.4 How Bardi Immigration Law Helps */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">How Bardi Immigration Law Helps</h2>
              <GoldRule />
              <p className="font-sans text-[17px] text-charcoal leading-[1.7] mb-7">
                DACA applications require precision. Every supporting document matters. Attorney Bardi reviews your full case history, prepares a comprehensive package, and handles all USCIS correspondence directly — so you&apos;re never left guessing.
              </p>
              <ul className="list-none p-0 m-0">
                {HELPS_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 mb-3.5">
                    <CheckIcon />
                    <span className="font-sans text-[15px] text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5.5 FAQ */}
        <section className="bg-warmgray py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">Frequently Asked Questions</h2>
              <GoldRule />
              <FaqAccordion items={FAQS} />
            </div>
          </div>
        </section>

        {/* 5.6 Related Practice Areas */}
        <section className="bg-white py-14 lg:py-16">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <h2 className="font-serif text-2xl font-bold text-navy mb-7">Related Practice Areas</h2>
            <div className="flex flex-col sm:flex-row gap-6">
              {RELATED.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="flex-1 bg-warmgray border border-warmgray-200 rounded-[4px] px-5 py-4 hover:border-navy transition-colors group"
                >
                  <p className="font-sans font-semibold text-[15px] text-navy mt-2 group-hover:text-navy">{area.label}</p>
                  <p className="font-sans text-sm text-charcoal/70 mt-1">{area.desc}</p>
                  <p className="font-sans font-semibold text-[13px] text-gold mt-1.5">Learn more &rarr;</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5.7 CTA Strip */}
        <section className="bg-navy py-16 lg:py-20 text-center">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-[36px] font-bold text-white leading-[1.2] max-w-[600px] mx-auto">
              Start with a Consultation
            </h2>
            <p className="font-sans text-base text-white/80 mt-3">
              We&apos;ll help you understand your options and build the strongest possible case.
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
