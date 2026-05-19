import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { CredentialBadge } from '@/components/CredentialBadge';

export const metadata: Metadata = {
  title: 'About the Firm',
  description:
    'Bardi Immigration Law is a boutique immigration practice serving the Southeast. AILA Chapter Chair 2025–26. Direct attorney access. Creative, complex, compassionate representation.',
};

const VALUES = [
  { label: 'Direct Attorney Communication', icon: '📞' },
  { label: 'Treats Clients as Family', icon: '🤝' },
  { label: 'Boutique, Not a Factory', icon: '⚖️' },
  { label: 'Creative Representation', icon: '💡' },
];

const STATS = [
  { value: 'AILA', label: 'Chapter Chair, Georgia-Alabama 2025–26' },
  { value: 'SE', label: 'Georgia · Alabama · NC · SC' },
  { value: '3', label: 'Practice Area Specializations' },
  { value: '24h', label: 'Response guarantee' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Attorney intro */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
            <div
              className="flex items-center justify-center bg-warmgray rounded-lg h-80 lg:h-96 text-navy/20 text-sm font-sans"
              aria-hidden="true"
            >
              <span className="text-center px-8">[Attorney photo — 400px square]</span>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-2">
                [Attorney Full Name]
              </h1>
              <p className="font-sans text-lg text-charcoal/70 mb-4">
                Immigration Attorney · Bardi Immigration Law
              </p>
              <CredentialBadge className="mb-6 self-start" />
              <p className="text-charcoal/80 text-lg">
                At Bardi Immigration Law, we believe that boutique representation isn&apos;t a luxury —
                it&apos;s a necessity when your future is at stake.
              </p>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 max-w-prose">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">About the Firm</h2>
              <div className="prose text-charcoal/80 space-y-4 text-base leading-relaxed">
                <p>
                  Bardi Immigration Law is a boutique immigration practice built on a simple promise:
                  when you need help navigating the U.S. immigration system, you deserve to work
                  directly with your attorney — not a case manager, not an intake specialist, not
                  someone who will forward your questions.
                </p>
                <p>
                  Our practice serves families and individuals across the Southeast — primarily in
                  Georgia, Alabama, North Carolina, and South Carolina. We handle benefits-based
                  immigration (green cards, naturalization, family petitions, humanitarian visas),
                  removal defense, and federal litigation when administrative options have been
                  exhausted.
                </p>
                <p>
                  As the 2025–2026 Chapter Chair of the Georgia-Alabama Chapter of the American
                  Immigration Lawyers Association (AILA), we are deeply connected to the national
                  immigration law community. That connection means we stay current on every policy
                  change, agency update, and legal shift that could affect your case.
                </p>
                <p>
                  We take on difficult cases — the ones other firms decline. If there is a legal path
                  forward, we will find it. And we&apos;ll walk that path with you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice philosophy */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <blockquote className="font-serif text-2xl lg:text-3xl italic text-navy max-w-2xl mx-auto mb-10 relative">
              <span className="text-gold text-6xl leading-none absolute -top-4 -left-4 opacity-30" aria-hidden="true">&ldquo;</span>
              Creative, competent, and complex representation — with the personal investment of a
              boutique practice.
            </blockquote>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {VALUES.map((v) => (
                <div key={v.label} className="flex flex-col items-center gap-2">
                  <span className="text-3xl" aria-hidden="true">{v.icon}</span>
                  <p className="text-sm font-semibold text-navy font-sans text-center">{v.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-warmgray py-12">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-serif text-3xl font-bold text-gold">{s.value}</span>
                  <span className="text-xs text-charcoal/70 font-sans">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-navy mb-8">Professional Affiliations</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {['AILA — American Immigration Lawyers Association', 'State Bar of Georgia'].map((a) => (
                <div key={a} className="bg-warmgray rounded-lg px-6 py-4 text-sm font-semibold text-navy font-sans">
                  {a}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Let&apos;s talk about your case.
            </h2>
            <Button href="/contact" size="lg">Schedule a Consultation</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
