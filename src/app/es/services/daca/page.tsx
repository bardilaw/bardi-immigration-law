import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Abogada DACA Georgia | Acción Diferida para los Llegados en la Infancia',
  description:
    'Solicitudes iniciales y renovaciones de DACA en Georgia, Alabama, NC y SC. La abogada Bardi revisa su historial completo antes de presentar — la elegibilidad es técnica y las apuestas son reales.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/daca',
    languages: {
      en: 'https://bardilaw.com/services/daca',
      es: 'https://bardilaw.com/es/services/daca',
    },
  },
  openGraph: {
    title: 'Abogada DACA Georgia | Bardi Immigration Law',
    description: 'Solicitudes y renovaciones DACA. Revisión directa de la abogada. Sirviendo a Georgia, Alabama, NC y SC.',
    url: 'https://bardilaw.com/es/services/daca',
    locale: 'es_US',
  },
};

export default function DacaPageES() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 max-w-3xl">
            <nav aria-label="Ruta de navegación" className="text-sm text-charcoal/50 mb-6 font-sans">
              <Link href="/es" className="hover:text-navy">Inicio</Link>
              <span className="mx-2">/</span>
              <Link href="/es/services" className="hover:text-navy">Servicios</Link>
              <span className="mx-2">/</span>
              <span className="text-charcoal">DACA</span>
            </nav>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              DACA — Acción Diferida para los Llegados en la Infancia
            </h1>
            <p className="text-lg text-charcoal/80 mb-12">
              DACA brinda protección temporal contra la deportación y autorización de trabajo para
              personas que llegaron a los Estados Unidos cuando eran niños. Si su estatus está
              próximo a vencerse — o si nunca ha solicitado — podemos ayudarle a entender sus
              opciones.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Qué Hace DACA</h2>
                <p className="text-charcoal/80">
                  DACA otorga un período renovable de acción diferida — una pausa temporal en los
                  procesos de deportación — junto con autorización de trabajo. No proporciona una
                  tarjeta de residencia permanente ni un camino a la ciudadanía por sí solo, pero
                  protege a los beneficiarios de la deportación y les permite trabajar legalmente
                  mientras la política federal continúa evolucionando.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Requisitos de Elegibilidad</h2>
                <p className="text-charcoal/80 mb-3">
                  Para calificar para DACA, debe cumplir criterios específicos de residencia
                  continua, edad, educación y antecedentes penales. Los requisitos han cambiado con
                  el tiempo debido a litigios federales en curso. La abogada Bardi revisa su
                  historial completo y le asesora sobre si actualmente es elegible para solicitar
                  o renovar.
                </p>
                <div className="bg-gold/10 border border-gold rounded-lg px-5 py-3">
                  <p className="text-navy font-sans text-sm font-semibold">
                    No adivine sobre su elegibilidad. Las reglas son técnicas y las apuestas son reales.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Lo que Hace la Abogada Bardi</h2>
                <p className="text-charcoal/80">
                  La abogada Bardi revisa su historial individual antes de presentar cualquier
                  solicitud — identificando historial de viajes, encuentros previos con las
                  autoridades, o brechas en la presencia continua que podrían afectar su caso.
                  Prepara su solicitud de manera completa y precisa, y la prepara para cualquier
                  paso adicional que USCIS pueda requerir.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-warmgray-200">
              <Button href="/es/contact" size="lg">Programe una Consulta sobre DACA</Button>
              <p className="text-sm text-charcoal/60 mt-3 font-sans">
                Consultas disponibles en inglés, español y húngaro.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
