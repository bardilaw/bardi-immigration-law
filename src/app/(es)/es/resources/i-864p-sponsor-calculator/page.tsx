import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { I864pCalculator } from '@/components/I864pCalculator';
import { CONTACT_PHONE, phoneEnabled, telHref } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Calculadora de Patrocinador I-864P | Bardi Immigration Law',
  description:
    'Calculadora gratuita del I-864P: responda cinco preguntas rápidas para estimar si el ingreso de su hogar cumple con el requisito del 125% de las pautas federales de pobreza para patrocinar a un familiar en el Formulario I-864.',
  alternates: {
    canonical: 'https://bardilaw.com/es/resources/i-864p-sponsor-calculator',
    languages: {
      'x-default': 'https://bardilaw.com/resources/i-864p-sponsor-calculator',
      en: 'https://bardilaw.com/resources/i-864p-sponsor-calculator',
      es: 'https://bardilaw.com/es/resources/i-864p-sponsor-calculator',
    },
  },
  openGraph: {
    title: 'Calculadora de Patrocinador I-864P | Bardi Immigration Law',
    description:
      'Estime si su ingreso cumple con el requisito del 125% de las pautas federales de pobreza para patrocinar a un familiar en el Formulario I-864.',
    url: 'https://bardilaw.com/es/resources/i-864p-sponsor-calculator',
    locale: 'es_US',
  },
};

export default function SponsorCalculatorPageES() {
  return (
    <>
      <Header phone={CONTACT_PHONE} />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3">
                <Link
                  href="/es/resources"
                  className="font-sans text-sm font-semibold text-gold hover:text-navy transition-colors"
                >
                  &larr; Recursos
                </Link>
              </p>
              <h1 className="font-serif text-4xl font-bold text-navy mb-4">
                Calculadora de Patrocinador I-864P
              </h1>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                ¿Está pensando en ser patrocinador económico en el Formulario I-864, Declaración
                Jurada de Patrocinio? Responda cinco preguntas rápidas para estimar si su ingreso
                cumple con el requisito mínimo del 125% de las pautas federales de pobreza para el
                tamaño de su hogar. Esto es una estimación educativa &mdash; no es asesoría legal.
              </p>
            </div>
          </div>
        </section>

        {/* Calculadora */}
        <section className="bg-warmgray py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="max-w-3xl">
              <I864pCalculator lang="es" phone={CONTACT_PHONE} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              ¿No está seguro de si su patrocinador califica?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Le ayudamos a revisar el cálculo del I-864, las opciones de copatrocinador y los
              documentos financieros que necesita. Comuníquese con nosotros y revisaremos su
              situación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {phoneEnabled(CONTACT_PHONE) ? (
                <Button href={telHref(CONTACT_PHONE)} size="lg">
                  Llámenos Hoy &ndash; {CONTACT_PHONE}
                </Button>
              ) : (
                <Button href="/es/contact" size="lg">
                  Solicite una Consulta
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
