import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Bardi Immigration Law | Immigration Attorney',
  description:
    'Committed to your immigration journey, focused on your future. Bardi Immigration Law provides experienced guidance and dedicated advocacy in removal defense, family-based immigration, waivers, humanitarian relief, and federal litigation.',
  alternates: {
    canonical: 'https://bardilaw.com/',
    languages: {
      'x-default': 'https://bardilaw.com/',
      en: 'https://bardilaw.com/',
      es: 'https://bardilaw.com/es/',
    },
  },
  openGraph: {
    title: 'Bardi Immigration Law | Committed to Your Immigration Journey',
    description:
      'Committed to your immigration journey, focused on your future. Experienced guidance and dedicated advocacy from start to finish.',
    url: 'https://bardilaw.com/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bardi Immigration Law — Committed to Your Immigration Journey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bardi Immigration Law | Committed to Your Immigration Journey',
    description:
      'Committed to your immigration journey, focused on your future. Experienced guidance and dedicated advocacy from start to finish.',
    images: ['/og-image.png'],
  },
};

const SERVICES = [
  {
    title: 'Removal Defense',
    desc: 'Facing deportation? We fight for you, in and out of detention. Bond hearings, cancellation of removal, and full removal defense.',
    href: '/services/removal-defense',
  },
  {
    title: 'Benefits-Based Immigration',
    desc: 'Green cards, citizenship, DACA, family petitions, U-visas, VAWA, and more. We help you build a clear path forward.',
    href: '/services/benefits-based-immigration',
  },
  {
    title: 'Federal Litigation',
    desc: 'When administrative options run out, we take your case to federal court. Habeas corpus and mandamus petitions.',
    href: '/services/federal-litigation',
  },
];

const DIFFERENTIATORS = [
  {
    label: 'Expert Guidance, Trusted Advocacy',
    desc: 'Experienced representation in removal defense, family-based immigration, waivers, humanitarian relief, and federal litigation.',
  },
  {
    label: 'Flexible Payment Plans',
    desc: "We work with your specific needs and offer payment arrangements, so cost isn't a barrier to strong representation.",
  },
  {
    label: 'Serving the Atlanta Metro-Area and Beyond',
    desc: 'Based in the Atlanta metro and representing clients across Georgia and Alabama, and in federal matters nationwide.',
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero: full-bleed portrait on the right, fading to white over the left copy (BAR-619) */}
        <section className="relative bg-white overflow-hidden">
          {/* Desktop background portrait + white gradient fade */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-[66%] xl:w-[62%]">
            <img
              src="/headshot-eszter-hero.jpg"
              alt="Attorney Eszter Bardi, Bardi Immigration Law"
              className="h-full w-full object-cover object-[center_22%]"
            />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(to right, #ffffff 0%, #ffffff 10%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.68) 29%, rgba(255,255,255,0.42) 37%, rgba(255,255,255,0.18) 44%, rgba(255,255,255,0) 51%)',
              }}
            />
          </div>

          <div className="relative max-w-site mx-auto px-5 lg:px-8 py-20 lg:py-32">
            <div className="text-center lg:text-left lg:max-w-[50%]">
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-navy leading-tight mb-6 text-balance">
                Committed to Your Immigration Journey. Focused on Your Future.
              </h1>
              {/* Mobile-only headshot: stacks directly under the headline, centered (BAR-619) */}
              <div className="flex justify-center mb-8 lg:hidden">
                <img
                  src="/headshot-eszter-hero.jpg"
                  alt="Attorney Eszter Bardi, Bardi Immigration Law"
                  width={400}
                  height={500}
                  className="rounded-lg h-72 w-auto object-cover object-[center_15%] shadow-md"
                />
              </div>
              <p className="text-lg text-charcoal/80 mb-8 max-w-prose mx-auto lg:mx-0">
                Whether you are seeking to reunite your family, defend against removal, or pursue
                humanitarian relief, Bardi Immigration Law provides experienced guidance and
                dedicated advocacy from start to finish. We care about your future and are committed
                to standing by your side throughout every stage of your immigration journey.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button href="/contact" size="lg">Book a Consultation</Button>
                <Button href="/services" variant="ghost" size="lg">See Our Services</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Client testimonials (placeholder — content to be provided) */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-6">
              Client Testimonials
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Testimonials from the clients and families we&apos;ve stood beside are coming soon.
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
                src="/headshot-eszter.jpg"
                alt="Attorney Eszter Bardi"
                width={300}
                height={300}
                className="rounded-lg h-80 w-auto object-cover shadow-sm"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-2">Why Bardi Law?</h2>
              <p className="font-serif text-xl text-charcoal/70 mb-6">Expert guidance. Trusted advocacy. By your side.</p>
              <p className="text-charcoal/80 mb-6">
                From your first conversation to your final outcome, we provide knowledgeable guidance
                and dedicated advocacy, and you always know exactly where your case stands.
              </p>
              <Button href="/about" variant="ghost">Read About the Firm</Button>
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
                <p className="text-sm font-semibold text-navy font-sans">AILA Chapter Chair<br />2025–2026</p>
              </div>
              <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-2">
                <span className="text-3xl font-serif font-bold text-gold">Esq.</span>
                <p className="text-sm font-semibold text-navy font-sans">Licensed Attorney<br />Member in good standing</p>
              </div>
              <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-2">
                <span className="text-3xl font-serif font-bold text-gold">US</span>
                <p className="text-sm font-semibold text-navy font-sans">Federal Practice<br />Clients nationwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-10">Why Choose Bardi Law?</h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
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

        {/* Attorney intro teaser */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid lg:grid-cols-[40%_60%] gap-16 items-center">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src="/headshot-eszter.jpg"
                alt="Attorney Eszter Bardi"
                width={300}
                height={300}
                className="w-48 h-48 lg:w-52 lg:h-52 rounded-full object-cover shadow-sm"
              />
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-navy">Meet the Attorney</p>
              <span className="block w-10 h-0.5 bg-gold mt-3 mb-5" aria-hidden="true" />
              <p className="font-serif text-[22px] text-charcoal">
                Eszter Bardi
              </p>
              <p className="font-sans text-base text-charcoal leading-[1.65] mt-3">
                Eszter Bardi represents individuals and families in some of the most challenging areas of U.S. immigration law, with experienced guidance and dedicated advocacy at every stage of your case.
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
              Immigration is federal law, we represent clients nationwide.
            </p>
          </div>
        </section>
      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
