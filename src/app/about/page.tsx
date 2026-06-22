import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';
import { Button } from '@/components/Button';
import { JsonLd } from '@/components/JsonLd';

// Attorney name pending from client, update PENDING field when provided.
const ATTORNEY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: 'Eszter Bardi',
  worksFor: { '@id': 'https://bardilaw.com/#firm' },
  memberOf: {
    '@type': 'Organization',
    name: 'American Immigration Lawyers Association (AILA)',
  },
  areaServed: 'United States',
  knowsLanguage: ['English', 'Spanish', 'Hungarian'],
  url: 'https://bardilaw.com/about',
} as const;

export const metadata: Metadata = {
  title: 'About Bardi Immigration Law | Your Attorney from Day One',
  description:
    "Bardi Immigration Law is a boutique solo practice, creative, capable representation on complex cases, and personally committed to every client's outcome.",
  alternates: {
    canonical: 'https://bardilaw.com/about',
    languages: {
      en: 'https://bardilaw.com/about',
      es: 'https://bardilaw.com/es/about',
    },
  },
  openGraph: {
    title: 'About Bardi Immigration Law | Your Attorney from Day One',
    description:
      'Boutique immigration practice. Direct attorney access on complex cases.',
    url: 'https://bardilaw.com/about',
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
    title: 'About Bardi Immigration Law | Your Attorney from Day One',
    description:
      'Boutique immigration practice. Direct attorney access on complex cases.',
    images: ['/og-image.png'],
  },
};

const CREDENTIALS = [
  {
    category: 'Bar Admissions',
    items: ['State Bar of Georgia', 'State Bar of Alabama'],
  },
  {
    category: 'Professional Memberships',
    items: [
      'American Immigration Lawyers Association (AILA)',
    ],
  },
  {
    category: 'Practice',
    items: ['Federal immigration practice', 'Clients nationwide'],
  },
  {
    category: 'Languages',
    items: ['English', 'Spanish', 'Hungarian'],
  },
];

const PHILOSOPHY_ITEMS = [
  'You speak with the attorney from day one.',
  'No intake specialists. No handoffs.',
  "You'll know the status of your case, always.",
];

function GoldRule() {
  return <div className="w-10 h-[3px] bg-gold mt-3 mb-10" aria-hidden="true" />;
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
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

export default function AboutPage() {
  return (
    <>
      <JsonLd data={ATTORNEY_SCHEMA as unknown as Record<string, unknown>} />
      <Header />
      <main id="main-content">

        {/* 4.1 Hero */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-serif text-4xl lg:text-[52px] font-bold text-navy leading-[1.15] mb-4">
                Expert Counsel, Personal Attention.
              </h1>
              <p className="font-sans text-[18px] text-charcoal leading-relaxed max-w-[480px] mb-8">
                Boutique immigration representation. Because immigration is federal law, we represent clients nationwide. You work with your attorney, from the first consultation to the final outcome.
              </p>
              <Button href="/contact" size="lg">Schedule a Consultation</Button>
            </div>
            {/* Attorney portrait */}
            <div className="order-first lg:order-last flex items-center justify-center">
              <img
                src="/headshot-eszter-hero.jpg"
                alt="Attorney Eszter Bardi, Bardi Immigration Law"
                width={400}
                height={500}
                className="rounded-lg w-full max-w-[320px] lg:max-w-[400px] h-auto"
              />
            </div>
          </div>
        </section>

        {/* 4.2 Biography */}
        <section className="bg-white py-16 lg:py-20 border-t border-warmgray-200">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <div className="max-w-[720px] mx-auto">
              {/* Name block with gold left border */}
              <div className="pl-5 border-l-[3px] border-gold mb-8">
                <p className="font-serif text-[28px] font-bold text-navy leading-snug">
                  Eszter Bardi
                </p>
                <p className="font-sans text-base italic text-charcoal mt-1">
                  Immigration Attorney, Bardi Immigration Law
                </p>
              </div>
              <div className="space-y-7">
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Bardi Immigration Law is a boutique immigration practice built on a simple promise:
                  when you need help navigating the U.S. immigration system, you deserve to work
                  directly with your attorney, not a case manager, not an intake specialist, not
                  someone who will forward your questions.
                </p>
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  We handle benefits-based immigration, removal defense, and federal litigation when
                  administrative options have been exhausted. Because immigration is federal
                  law, we represent clients nationwide.
                </p>
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  We stay current on every policy change, agency update, and legal shift that could
                  affect your case, and we take on difficult cases, the ones other firms decline. If
                  there is a legal path forward, we will find it. Attorney Bardi is also an active
                  member of the American Immigration Lawyers Association (AILA).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4.3 Credentials */}
        <section className="bg-warmgray py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-[28px] font-bold text-navy">Credentials &amp; Affiliations</h2>
            <GoldRule />
            <div className="grid sm:grid-cols-2 gap-8 max-w-[720px]">
              {CREDENTIALS.map((cred) => (
                <div
                  key={cred.category}
                  className="bg-white border border-warmgray-200 rounded-lg p-6"
                >
                  <p className="font-sans font-semibold text-xs text-gold uppercase tracking-[0.06em] mb-3">
                    {cred.category}
                  </p>
                  <ul className="list-none p-0 m-0">
                    {cred.items.map((item) => (
                      <li key={item} className="font-sans text-[15px] text-charcoal leading-[1.8] flex items-start gap-2">
                        <span className="text-gold mt-0.5 select-none" aria-hidden="true">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.4 Philosophy */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <div className="max-w-[640px] mx-auto text-center">
              <span
                className="block font-serif text-[80px] text-gold leading-none mb-[-16px]"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="font-serif text-2xl italic text-navy leading-[1.5]">
                Creative, competent, and complex representation, with the personal investment of a boutique practice.
              </blockquote>
            </div>
            <div className="mt-12 max-w-[560px] mx-auto">
              {PHILOSOPHY_ITEMS.map((item) => (
                <div key={item} className="flex items-start gap-3 mb-5">
                  <CheckIcon />
                  <p className="font-sans text-base text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.5 CTA Strip */}
        <section className="bg-navy py-16 lg:py-20 text-center">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-[36px] font-bold text-white leading-[1.2] max-w-[600px] mx-auto">
              Ready to discuss your case?
            </h2>
            <p className="font-sans text-base text-white/80 mt-3">
              One consultation. Your attorney. No runaround.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
