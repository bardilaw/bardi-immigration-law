import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Bardi Immigration Law | Schedule a Consultation',
  description:
    'Schedule your consultation directly with the attorney. Serving Georgia, North Carolina, South Carolina, and Alabama. No intake specialist — speak with the attorney directly.',
  alternates: {
    canonical: 'https://bardilaw.com/contact',
    languages: {
      en: 'https://bardilaw.com/contact',
      es: 'https://bardilaw.com/es/contact',
    },
  },
  openGraph: {
    title: 'Contact Bardi Immigration Law | Schedule a Consultation',
    description:
      'Schedule your consultation directly with the attorney. Serving GA, NC, SC, and AL.',
    url: 'https://bardilaw.com/contact',
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
    title: 'Contact Bardi Immigration Law | Schedule a Consultation',
    description:
      'Schedule your consultation directly with the attorney. Serving GA, NC, SC, and AL.',
    images: ['/og-image.png'],
  },
};

const STEPS = [
  {
    n: '1',
    heading: 'Form received',
    desc: 'We confirm receipt within minutes.',
  },
  {
    n: '2',
    heading: 'Attorney reviews',
    desc: "Not an intake specialist — the attorney reviews your situation.",
  },
  {
    n: '3',
    heading: 'Personal callback',
    desc: "You'll hear from us within 24 hours.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Schedule a Consultation
            </h1>
            <p className="text-lg text-charcoal/80 max-w-xl mx-auto">
              Fill in the form below and an attorney will be in touch within 24 hours.
            </p>
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="bg-warmgray py-12">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-lg p-6 lg:p-8">
              <ContactForm />
            </div>

            {/* Sidebar — What happens next */}
            <aside className="flex flex-col gap-6">
              <div className="bg-white rounded-lg p-6">
                <h2 className="font-serif text-xl font-bold text-navy mb-4">
                  What happens after you submit
                </h2>
                <ol className="flex flex-col gap-5">
                  {STEPS.map((s) => (
                    <li key={s.n} className="flex gap-4">
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white text-sm font-bold font-sans flex items-center justify-center"
                        aria-hidden="true"
                      >
                        {s.n}
                      </span>
                      <div>
                        <p className="font-semibold text-navy font-sans text-sm">{s.heading}</p>
                        <p className="text-charcoal/70 text-sm">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Direct contact */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-serif text-lg font-bold text-navy mb-3">Prefer to reach us directly?</h3>
                <ul className="flex flex-col gap-3 text-sm">
                  <li>
                    <a
                      href="tel:+1"
                      className="flex items-center gap-2 text-navy hover:text-gold transition-colors font-sans"
                    >
                      <span aria-hidden="true">📞</span>
                      <span>[Phone — TBD]</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@bardilaw.com"
                      className="flex items-center gap-2 text-navy hover:text-gold transition-colors font-sans"
                    >
                      <span aria-hidden="true">✉️</span>
                      <span>info@bardilaw.com</span>
                    </a>
                  </li>
                </ul>
                <p className="text-xs text-charcoal/50 mt-3">Office hours: TBD</p>
                <p className="text-xs text-charcoal/50 mt-3 font-sans">
                  Consultations available in English, Spanish, and Hungarian.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
