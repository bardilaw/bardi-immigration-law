import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';
import { Button } from '@/components/Button';
import { FaqAccordion } from '@/components/FaqAccordion';
import { JsonLd } from '@/components/JsonLd';
import { FAQ_CATEGORIES, FAQ_SCHEMA, FAQ_DISCLAIMER_ES } from '@/app/(en)/faq/faqData';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Abogada de Inmigración',
  description:
    'Respuestas a preguntas comunes de inmigración sobre DACA, tarjetas verdes, asilo y defensa contra la deportación de Bardi Immigration Law. Como la ley de inmigración es federal, representamos a clientes en todo el país.',
  alternates: {
    canonical: 'https://bardilaw.com/es/faq',
    languages: {
      'x-default': 'https://bardilaw.com/faq',
      en: 'https://bardilaw.com/faq',
      es: 'https://bardilaw.com/es/faq',
    },
  },
  openGraph: {
    title: 'Preguntas Frecuentes de Inmigración | Bardi Immigration Law',
    description:
      'Respuestas claras a preguntas comunes de inmigración, DACA, tarjetas verdes, asilo y defensa contra la deportación.',
    url: 'https://bardilaw.com/es/faq',
    locale: 'es_US',
  },
};

export default function FaqPageES() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <Header phone={CONTACT_PHONE} />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 max-w-prose">
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl lg:text-[44px] font-bold text-navy leading-[1.15] mb-4">
                Preguntas Frecuentes
              </h1>
              <div className="w-10 h-[3px] bg-gold mb-6" aria-hidden="true" />
              <p className="font-sans text-[18px] text-charcoal leading-relaxed">
                Respuestas claras a las preguntas que más escuchamos sobre DACA,
                tarjetas verdes, asilo y defensa contra la deportación. ¿Tiene una
                pregunta que no está aquí? Usted trabaja con su abogada, no con un
                formulario, así que pregunte en su consulta. (Respuestas en inglés;
                ofrecemos consultas en español.)
              </p>
            </div>
          </div>
        </section>

        {/* FAQ categories, Spanish headers, English answers */}
        <section className="bg-white pb-8">
          <div className="max-w-site mx-auto px-5 lg:px-8 max-w-prose">
            <div className="max-w-2xl space-y-12">
              {FAQ_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <h2 className="font-serif text-2xl font-bold text-navy mb-2">
                    {cat.titleEs}
                  </h2>
                  <div className="w-8 h-[2px] bg-gold mb-2" aria-hidden="true" />
                  <FaqAccordion items={cat.items} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-white pb-16 lg:pb-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 max-w-prose">
            <div className="max-w-2xl">
              <p className="font-sans text-xs text-charcoal/60 leading-relaxed border-t border-warmgray-200 pt-6">
                {FAQ_DISCLAIMER_ES}
              </p>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-navy py-16 lg:py-20 text-center">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-[32px] font-bold text-white leading-[1.2] max-w-[600px] mx-auto">
              ¿Aún tiene preguntas sobre su caso?
            </h2>
            <p className="font-sans text-base text-white/80 mt-3">
              Una consulta. Su abogada. Respuestas claras.
            </p>
            <div className="mt-8">
              <Button href="/es/contact" variant="primary" size="lg">
                Solicite una Consulta
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
