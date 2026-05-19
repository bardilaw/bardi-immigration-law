import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { CredentialBadge } from '@/components/CredentialBadge';

export const metadata: Metadata = {
  title: 'Bardi Immigration Law | Georgia Immigration Attorney',
  description:
    'Boutique immigration law firm serving Georgia, Alabama, North Carolina, and South Carolina. Your first call is with the attorney — not an intake specialist.',
  alternates: {
    canonical: 'https://bardilaw.com/',
    languages: {
      en: 'https://bardilaw.com/',
      es: 'https://bardilaw.com/es/',
    },
  },
  openGraph: {
    title: 'Bardi Immigration Law | Georgia Immigration Attorney',
    description:
      'Boutique immigration law firm serving Georgia, Alabama, North Carolina, and South Carolina. Your first call is with the attorney — not an intake specialist.',
    url: 'https://bardilaw.com/',
  },
};

const SERVICES = [
  {
    icon: '⚖️',
    title: 'Benefits-Based Immigration',
    desc: 'Green cards, citizenship, DACA, family petitions, U-visas, VAWA, and more. We help you build a clear path forward.',
    href: '/services/benefits-based-immigration',
  },
  {
    icon: '🛡️',
    title: 'Removal Defense',
    desc: 'Facing deportation? We fight for you — in and out of detention. Bond hearings, cancellation of removal, and full removal defense.',
    href: '/services/removal-defense',
  },
  {
    icon: '🏛️',
    title: 'Federal Litigation',
    desc: 'When administrative options run out, we take your case to federal court. Habeas corpus and mandamus petitions.',
    href: '/services/federal-litigation',
  },
];

const DIFFERENTIATORS = [
  {
    label: 'Direct Attorney Access',
    desc: 'You work with your attorney — not support staff — from your first consultation to your final outcome.',
  },
  {
    label: 'Nationally Connected',
    desc: 'As 2025–2026 AILA Georgia-Alabama Chapter Chair, we stay current on every policy shift, agency update, and legal change.',
  },
  {
    label: 'Creative, Complex Representation',
    desc: 'We take on difficult cases — the ones other firms decline. If there is a legal path forward, we will find it.',
  },
  {
    label: "You're Family Here",
    desc: 'We are personally invested in your outcome. Your success is ours.',
  },
];

const ICP_BARS = [
  {
    q: 'Seeking legal status?',
    cta: 'Green cards, petitions, DACA, U-visa & more. →',
    href: '/services/benefits-based-immigration',
    urgent: false,
  },
  {
    q: 'Facing deportation or removal proceedings?',
    cta: 'Immediate help available. →',
    href: '/services/removal-defense',
    urgent: true,
  },
  {
    q: 'A young person without family support?',
    cta: 'SIJS and humanitarian pathways available. →',
    href: '/services/benefits-based-immigration',
    urgent: false,
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-navy leading-tight mb-6">
                Your Immigration Case Deserves an Attorney, Not an Intake Form.
              </h1>
              <p className="text-lg text-charcoal/80 mb-8 max-w-prose">
                Bardi Immigration Law provides boutique immigration representation to families and
                individuals across Georgia, Alabama, North Carolina, and South Carolina. Complex
                problems. Direct answers. Real attorney involvement from day one.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button href="/contact" size="lg">Book a Consultation</Button>
                <Button href="/services" variant="ghost" size="lg">See Our Services</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <CredentialBadge />
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold font-sans text-navy border border-warmgray-300 rounded-full px-3 py-1">
                  Direct Attorney Access
                </span>
              </div>
            </div>
            <div
              className="hidden lg:flex items-center justify-center bg-warmgray rounded-lg h-96 text-navy/30 text-sm font-sans"
              aria-hidden="true"
            >
              <span className="text-center px-8">[Attorney photo — client to provide]</span>
            </div>
          </div>
        </section>

        {/* Trust intro */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-6">
              We Handle What Other Firms Turn Away.
            </h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              Immigration law isn&apos;t one-size-fits-all. Every family is different. Every case has
              history. At Bardi Immigration Law, you speak with your attorney — not a case manager,
              not an intake specialist, not a paralegal who forwards your questions. Your case gets
              the personal attention it deserves, from the first call to the final decision.
            </p>
          </div>
        </section>

        {/* Services overview */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy">Practice Areas</h2>
              <p className="text-charcoal/70 mt-2">What we do, and who we do it for.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <div
                  key={s.href}
                  className="bg-warmgray rounded-lg p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                  <h3 className="font-serif text-xl font-bold text-navy">{s.title}</h3>
                  <p className="text-charcoal/80 text-sm flex-1">{s.desc}</p>
                  <Link href={s.href} className="text-sm font-semibold text-gold hover:underline">
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attorney differentiator */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="hidden lg:flex items-center justify-center bg-white rounded-lg h-80 text-navy/20 text-sm font-sans"
              aria-hidden="true"
            >
              <span className="text-center px-8">[Attorney photo — 320px square]</span>
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-2">Why Bardi Law?</h2>
              <p className="font-serif text-xl text-charcoal/70 mb-6">Boutique. Personal. Attorney-first.</p>
              <p className="text-charcoal/80 mb-6">
                When you call, you talk to an attorney — not an intake specialist. We treat every
                client as family.
              </p>
              <CredentialBadge className="mb-6" />
              <Button href="/about" variant="ghost">Read About the Firm</Button>
            </div>
          </div>
        </section>

        {/* ICP callout bars */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-navy mb-8 text-center">Who We Help</h2>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              {ICP_BARS.map((bar) => (
                <Link
                  key={bar.q}
                  href={bar.href}
                  className={`block px-6 py-5 rounded-lg border-l-4 transition-shadow hover:shadow-md ${
                    bar.urgent
                      ? 'border-gold bg-gold/5'
                      : 'border-navy/20 bg-warmgray'
                  }`}
                >
                  <span className="font-serif text-lg font-semibold text-navy block mb-1">{bar.q}</span>
                  <span className="text-sm text-gold font-semibold font-sans">{bar.cta}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-navy text-center mb-10">
              Credentials &amp; Affiliations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-2">
                <span className="text-3xl font-serif font-bold text-gold">AILA</span>
                <p className="text-sm font-semibold text-navy font-sans">Georgia-Alabama Chapter Chair<br />2025–2026</p>
              </div>
              <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-2">
                <span className="text-3xl font-serif font-bold text-gold">GA</span>
                <p className="text-sm font-semibold text-navy font-sans">State Bar of Georgia<br />Member in good standing</p>
              </div>
              <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-2">
                <span className="text-3xl font-serif font-bold text-gold">SE</span>
                <p className="text-sm font-semibold text-navy font-sans">Georgia · Alabama<br />NC · SC</p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-10">What Sets Us Apart</h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
              {DIFFERENTIATORS.map((d) => (
                <div key={d.label} className="flex gap-4">
                  <span className="mt-2 w-2 h-2 min-w-[8px] rounded-full bg-gold" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold font-sans text-navy mb-1">{d.label}</h3>
                    <p className="text-sm text-charcoal/80">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA strip */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-3">
              Start With a Real Conversation.
            </h2>
            <p className="text-charcoal/70 mb-8">One consultation. Your attorney. No runaround.</p>
            <Button href="/contact" size="lg">Book Your Consultation</Button>
            <p className="text-sm text-charcoal/50 mt-4 font-sans">
              Serving clients across Georgia, Alabama, North Carolina, and South Carolina.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
