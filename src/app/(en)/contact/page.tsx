import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { BookingEmbed } from '@/components/BookingEmbed';
import { CAL_LINK_EN, bookingEnabled } from '@/lib/booking';
import { CONTACT_PHONE, phoneEnabled, telHref } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Contact Bardi Immigration Law | Schedule a Consultation',
  description:
    'Schedule your consultation directly with the attorney. Licensed; because immigration is federal law, we represent clients nationwide. No intake specialist, speak with the attorney directly.',
  alternates: {
    canonical: 'https://bardilaw.com/contact',
    languages: {
      'x-default': 'https://bardilaw.com/contact',
      en: 'https://bardilaw.com/contact',
      es: 'https://bardilaw.com/es/contact',
    },
  },
  openGraph: {
    title: 'Contact Bardi Immigration Law | Schedule a Consultation',
    description:
      'Schedule your consultation directly with the attorney.',
    url: 'https://bardilaw.com/contact',
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
    title: 'Contact Bardi Immigration Law | Schedule a Consultation',
    description:
      'Schedule your consultation directly with the attorney.',
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
    desc: "Not an intake specialist, the attorney reviews your situation.",
  },
  {
    n: '3',
    heading: 'Personal callback',
    desc: "You'll hear from us within 72 hours.",
  },
];

export default function ContactPage() {
  const showBooking = bookingEnabled(CAL_LINK_EN);

  return (
    <>
      <Header phone={CONTACT_PHONE} />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Schedule a Consultation
            </h1>
            <p className="text-lg text-charcoal/80 max-w-xl mx-auto">
              {showBooking
                ? 'Pick a time below to book your 30-minute consultation directly, or use the form to request a callback.'
                : 'Fill in the form below and an attorney will be in touch within 72 hours.'}
            </p>
          </div>
        </section>

        {/* Booking widget, only rendered once a Cal.com link is configured (BAR-580). */}
        {showBooking && (
          <section className="bg-white pb-4">
            <div className="max-w-site mx-auto px-5 lg:px-8">
              <div className="bg-white rounded-lg border border-warmgray/60 p-2 sm:p-4 h-[680px] sm:h-[720px] lg:h-[800px]">
                <BookingEmbed calLink={CAL_LINK_EN} namespace="consult-en" locale="en" />
              </div>
            </div>
          </section>
        )}

        {/* Form + sidebar */}
        <section className="bg-warmgray py-12">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-lg p-6 lg:p-8">
              {showBooking && (
                <div className="mb-6">
                  <h2 className="font-serif text-xl font-bold text-navy mb-2">
                    Prefer a callback instead?
                  </h2>
                  <p className="text-sm text-charcoal/70">
                    Can&apos;t find a time that works, or rather not self-schedule? Send your
                    details and the attorney will reach out within 72 hours.
                  </p>
                </div>
              )}
              <ContactForm />
            </div>

            {/* Sidebar, What happens next */}
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
                  {phoneEnabled(CONTACT_PHONE) && (
                    <li>
                      <a
                        href={telHref(CONTACT_PHONE)}
                        className="flex items-center gap-2 text-navy hover:text-gold transition-colors font-sans font-semibold"
                      >
                        <span aria-hidden="true">📞</span>
                        <span>{CONTACT_PHONE}</span>
                      </a>
                    </li>
                  )}
                  <li>
                    <a
                      href="mailto:info@bardilaw.com"
                      className="flex items-center gap-2 text-navy hover:text-gold transition-colors font-sans"
                    >
                      <span aria-hidden="true">✉️</span>
                      <span>info@bardilaw.com</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-charcoal/70 font-sans">
                    <span aria-hidden="true">📍</span>
                    <span>Licensed attorney, clients nationwide</span>
                  </li>
                </ul>
                <p className="text-xs text-charcoal/50 mt-3">By appointment, Monday through Friday</p>
                <p className="text-xs text-charcoal/50 mt-3 font-sans">
                  Consultations available in English, Spanish, and Hungarian.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
