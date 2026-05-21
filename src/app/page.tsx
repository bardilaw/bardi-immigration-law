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
    title: 'Bardi Immigration Law | Georgia Immigration Attorney',
    description:
      'Boutique immigration law firm serving Georgia, Alabama, North Carolina, and South Carolina. Your first call is with the attorney — not an intake specialist.',
    images: ['/og-image.png'],
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
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/headshot-placeholder-400x500.svg"
                alt="Attorney Eszter Bardi — Bardi Immigration Law"
                width={400}
                height={500}
                className="rounded-lg h-96 w-auto object-cover"
              />
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
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/headshot-placeholder-300x300.svg"
                alt="Attorney Eszter Bardi"
                width={300}
                height={300}
                className="rounded-lg h-80 w-auto object-cover"
              />
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

        {/* Testimonials */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy text-center mb-12">
              Client Stories
            </h2>
            <div className="flex flex-col gap-6 max-w-[760px] mx-auto">
              {[1, 2].map((n) => (
                <div key={n} className="bg-warmgray rounded-lg px-10 py-12 lg:px-14">
                  <span className="block font-serif text-[48px] text-gold leading-none mb-4" aria-hidden="true">&ldquo;</span>
                  <p className="font-serif text-[22px] italic text-navy leading-[1.6]">
                    [Client testimonial pending — real quotes to be provided by client.]
                  </p>
                  <p className="font-sans font-semibold text-sm text-navy mt-6">— [Client Name], [State]</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-charcoal/40 mt-6 font-sans">
              Testimonials pending — content to be provided by attorney.
            </p>
          </div>
        </section>

        {/* Attorney intro teaser */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid lg:grid-cols-[40%_60%] gap-16 items-center">
            <div className="flex items-center justify-center lg:justify-start">
              <div
                className="w-48 h-48 lg:w-52 lg:h-52 rounded-full bg-warmgray-300 flex items-center justify-center text-navy/20 text-xs font-sans text-center"
                aria-hidden="true"
              >
                Photo pending
              </div>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-navy">Meet the Attorney</p>
              <span className="block w-10 h-0.5 bg-gold mt-3 mb-5" aria-hidden="true" />
              <p className="font-serif text-[22px] text-charcoal">
                Eszter Bardi
              </p>
              <p className="font-sans text-base text-charcoal leading-[1.65] mt-3">
                At Bardi Immigration Law, you work directly with your attorney — from consultation to outcome. No intake specialists. No case handoffs. Just real, boutique representation.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-1 mt-5 font-sans font-semibold text-sm text-navy hover:text-gold transition-colors"
              >
                Meet the Attorney
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA strip */}
        <section className="bg-navy py-16 lg:py-20 text-center">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-3xl lg:text-[36px] font-bold text-white leading-[1.2] max-w-[600px] mx-auto">
              Start With a Real Conversation.
            </h2>
            <p className="font-sans text-base text-white/80 mt-3">One consultation. Your attorney. No runaround.</p>
            <div className="mt-8">
              <Button href="/contact" size="lg">Book Your Consultation</Button>
            </div>
            <p className="font-sans text-sm text-white/50 mt-4">
              Serving clients across Georgia, Alabama, North Carolina, and South Carolina.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
