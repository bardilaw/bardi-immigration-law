import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Bardi Immigration Law.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 max-w-prose">
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl font-bold text-navy mb-8">Privacy Policy</h1>
              <p className="text-sm text-charcoal/50 mb-8">Last updated: May 2026</p>

              <div className="prose text-charcoal/80 space-y-6 text-base leading-relaxed">
                <section>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-3">Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us, such as your name, email address,
                    phone number, and the nature of your legal inquiry when you fill out our contact form.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-3">How We Use Your Information</h2>
                  <p>
                    We use the information you provide to respond to your inquiry and schedule a
                    consultation. We do not sell, share, or distribute your personal information to
                    third parties except as required by law or as necessary to provide legal services.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-3">Attorney-Client Privilege</h2>
                  <p>
                    Submitting a contact form or inquiry does not create an attorney-client relationship.
                    An attorney-client relationship is established only after a formal engagement letter
                    has been signed by both parties.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-3">Cookies and Analytics</h2>
                  <p>
                    We use Google Analytics to understand how visitors use our website. This may involve
                    the use of cookies. You can opt out of Google Analytics by using the Google Analytics
                    opt-out browser add-on.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-3">Contact</h2>
                  <p>
                    If you have questions about this privacy policy, please contact us at{' '}
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
