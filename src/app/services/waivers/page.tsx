import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Immigration Waivers Attorney Georgia | I-601, I-212, I-929',
  description:
    'I-601 (unlawful presence), I-212 (prior removal), and I-929 (VAWA derivative) waivers. Attorney Bardi builds the full legal and factual record for extreme hardship cases.',
  alternates: {
    canonical: 'https://bardilaw.com/services/waivers',
    languages: {
      en: 'https://bardilaw.com/services/waivers',
      es: 'https://bardilaw.com/es/services/waivers',
    },
  },
  openGraph: {
    title: 'Immigration Waivers Attorney Georgia | Bardi Immigration Law',
    description:
      'I-601, I-212, and I-929 waivers. Extreme hardship standard. Attorney Bardi builds the full legal and factual record. Serving GA, AL, NC, and SC.',
    url: 'https://bardilaw.com/services/waivers',
  },
};

const WAIVERS = [
  {
    code: 'I-601',
    label: 'Unlawful Presence Waiver',
    desc: 'For individuals subject to the 3-year or 10-year bar due to prior unlawful presence in the U.S.',
  },
  {
    code: 'I-212',
    label: 'Prior Removal Waiver',
    desc: 'For individuals who have a prior removal or deportation order and are seeking to return.',
  },
  {
    code: 'I-929',
    label: 'VAWA-Derivative Waiver',
    desc: 'For qualifying relatives of approved VAWA self-petitioners seeking waivers of inadmissibility.',
  },
];

export default function WaiversPage() {
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
              <span className="text-charcoal">Waivers</span>
            </nav>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Immigration Waivers (I-601, I-212, I-929)
            </h1>
            <p className="text-lg text-charcoal/80 mb-12">
              Certain immigration bars can be waived — but only with a strong, well-documented
              showing. If you&apos;ve been told you are inadmissible, a waiver may be the path forward.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">When You Need a Waiver</h2>
                <p className="text-charcoal/80 mb-6">
                  Some individuals are inadmissible to the United States — meaning they cannot receive
                  a visa or green card — due to prior unlawful presence, a prior removal, or other
                  grounds. In many cases, these bars can be waived if the applicant qualifies and
                  presents compelling evidence of hardship to a qualifying U.S. citizen or permanent
                  resident family member.
                </p>
                <div className="space-y-3">
                  {WAIVERS.map((w) => (
                    <div key={w.code} className="bg-warmgray rounded-lg p-5 flex gap-4">
                      <span className="font-serif text-lg font-bold text-gold min-w-[60px]">{w.code}</span>
                      <div>
                        <p className="font-semibold text-navy font-sans text-sm mb-1">{w.label}</p>
                        <p className="text-charcoal/70 text-sm">{w.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">What Waivers Require</h2>
                <p className="text-charcoal/80">
                  Waiver cases turn on whether the denial of the waiver would cause &quot;extreme hardship&quot;
                  to a qualifying U.S. citizen or permanent resident family member. This is a high
                  bar — ordinary hardship doesn&apos;t meet it. Attorney Bardi builds the full legal and
                  factual record: evidence of financial, medical, educational, and emotional hardship
                  to your qualifying relative, combined with a legal brief that frames the evidence
                  in the way USCIS adjudicators are trained to evaluate.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">What Attorney Bardi Does</h2>
                <p className="text-charcoal/80">
                  Attorney Bardi evaluates your eligibility, identifies your qualifying relative, and
                  builds the evidence package that gives your waiver petition the best possible
                  chance. She has experience preparing these complex filings and understanding what
                  moves adjudicators.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-warmgray-200">
              <Button href="/contact" size="lg">Schedule a Waiver Consultation</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
