import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for the Bardi Immigration Law website.',
  alternates: { canonical: 'https://bardilaw.com/terms' },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl font-bold text-navy mb-8">Terms of Use</h1>
              <p className="text-sm text-charcoal/50 mb-8">Last updated: May 2026</p>

              <div className="text-charcoal/80 space-y-6 text-base leading-relaxed">
                <section>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-3">Use of This Website</h2>
                  <p>
                    This website is provided for informational purposes only. The information contained
                    on this site does not constitute legal advice and does not create an attorney-client
                    relationship.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-3">No Attorney-Client Relationship</h2>
                  <p>
                    Submitting a contact form or otherwise communicating with Bardi Immigration Law
                    through this website does not create an attorney-client relationship. Such a
                    relationship is formed only through a signed engagement agreement.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-3">Accuracy of Information</h2>
                  <p>
                    Immigration law changes frequently. While we make every effort to keep the
                    information on this site current, it may not reflect the most recent legal
                    developments. Do not rely on this website as a substitute for qualified legal
                    counsel.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-3">Contact</h2>
                  <p>
                    Questions about these terms? Contact us at{' '}
                    <a href="mailto:info@bardilaw.com" className="text-gold hover:underline">
                      info@bardilaw.com
                    </a>.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
