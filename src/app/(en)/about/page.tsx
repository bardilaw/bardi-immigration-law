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
  title: 'About Bardi Immigration Law | Atlanta Immigration Attorney',
  description:
    'Eszter Bardi is an Atlanta-based immigration attorney with more than a decade of experience in removal defense, federal litigation, family-based immigration, waivers, humanitarian relief, and SIJS. Chair of the Georgia-Alabama AILA Chapter.',
  alternates: {
    canonical: 'https://bardilaw.com/about',
    languages: {
      'x-default': 'https://bardilaw.com/about',
      en: 'https://bardilaw.com/about',
      es: 'https://bardilaw.com/es/about',
    },
  },
  openGraph: {
    title: 'About Bardi Immigration Law | Atlanta Immigration Attorney',
    description:
      'Experienced guidance and dedicated advocacy in complex immigration matters. Committed to your immigration journey, focused on your future.',
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
    title: 'About Bardi Immigration Law | Atlanta Immigration Attorney',
    description:
      'Experienced guidance and dedicated advocacy in complex immigration matters. Committed to your immigration journey, focused on your future.',
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

function GoldRule() {
  return <div className="w-10 h-[3px] bg-gold mt-3 mb-10" aria-hidden="true" />;
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
                Expert Guidance, Trusted Advocacy.
              </h1>
              <p className="font-sans text-[18px] text-charcoal leading-relaxed max-w-[480px] mb-8">
                Experienced representation in complex immigration matters. Because immigration is federal law, we represent clients nationwide, with experienced guidance and dedicated advocacy from your first consultation to your final outcome.
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

        {/* 4.2 Our People — attorney biography */}
        <section className="bg-white py-16 lg:py-20 border-t border-warmgray-200">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <div className="max-w-[720px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">Our People</h2>
              <GoldRule />
              {/* Name block with gold left border */}
              <div className="pl-5 border-l-[3px] border-gold mb-8">
                <p className="font-serif text-[28px] font-bold text-navy leading-snug">
                  Eszter Bardi
                </p>
                <p className="font-sans text-base italic text-charcoal mt-1">
                  Founder &amp; Immigration Attorney, Bardi Immigration Law
                </p>
              </div>
              <div className="space-y-7">
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Eszter Bardi is the founder of Bardi Immigration Law and an Atlanta-based
                  immigration attorney with more than a decade of legal experience. Her practice
                  focuses on complex immigration matters, including removal defense, federal
                  immigration litigation, family-based immigration, waivers, humanitarian relief, and
                  Special Immigrant Juvenile Status (SIJS) cases.
                </p>
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Known for her strategic, client-centered approach, Eszter represents individuals
                  and families navigating some of the most challenging areas of U.S. immigration law.
                  She regularly appears before Immigration Courts across the nation, the Board of
                  Immigration Appeals (BIA), the United States Citizenship and Immigration Service
                  (&ldquo;USCIS&rdquo;), the Department of State (DOS), Immigration and Customs
                  Enforcement, and before Federal Courts.
                </p>
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Eszter earned her Juris Doctor from Emory University School of Law and is fluent in
                  Spanish and Hungarian, with proficiency in German. She believes that effective
                  immigration advocacy requires both technical legal expertise and genuine human
                  connection.
                </p>
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  In addition to her legal practice, Eszter is a frequent speaker and educator on
                  immigration law. She currently serves as Chair of the Georgia-Alabama Chapter of
                  the American Immigration Lawyers Association (AILA), where she works to support
                  immigration attorneys through mentorship, continuing legal education, and
                  professional development programs.
                </p>
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Whether she is defending a client in immigration court, litigating in federal
                  court, or helping a family navigate the immigration process, Eszter is committed to
                  providing thoughtful guidance, strong advocacy, and personalized representation
                  that recognizes both the legal and human dimensions of every case.
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

        {/* 4.4 Our Mission */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <div className="max-w-[720px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">Our Mission</h2>
              <GoldRule />
              <p className="font-serif text-2xl text-navy leading-[1.4] mb-8">
                Committed to Your Immigration Journey. Focused on Your Future.
              </p>
              <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                At Bardi Immigration Law, we are committed to standing with our clients through every
                stage of the immigration process. Whether you are seeking to reunite with family,
                defend against removal, or obtain humanitarian protection, we provide the
                knowledgeable guidance and dedicated advocacy needed to navigate complex needs. We
                take pride in our work because we understand what is at stake for the individuals and
                families we represent. Your future matters.
              </p>
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
