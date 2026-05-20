import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Abogada TPS Georgia | Estatus de Protección Temporal',
  description:
    'Registro y renovaciones de Estatus de Protección Temporal. La abogada Bardi monitorea las designaciones TPS a través de su rol en AILA. Sirviendo Georgia, Alabama, NC y SC.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/tps',
    languages: {
      en: 'https://bardilaw.com/services/tps',
      es: 'https://bardilaw.com/es/services/tps',
    },
  },
  openGraph: {
    title: 'Abogada TPS Georgia | Estatus de Protección Temporal | Bardi Immigration Law',
    description:
      'Registro y renovaciones de TPS. Los plazos son estrictos — no pierda el suyo. La abogada Bardi monitorea los cambios de TPS a través de AILA.',
    url: 'https://bardilaw.com/es/services/tps',
    locale: 'es_US',
  },
};

export default function TpsPageES() {
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
              <span className="text-charcoal">TPS</span>
            </nav>

            <div className="bg-gold/10 border border-gold rounded-lg px-5 py-3 mb-8 flex items-center gap-3">
              <span className="text-gold font-bold text-lg" aria-hidden="true">!</span>
              <p className="text-navy font-sans text-sm font-semibold">
                Los plazos de registro de TPS son estrictos — no pierda el suyo.
              </p>
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Estatus de Protección Temporal (TPS)
            </h1>
            <p className="text-lg text-charcoal/80 mb-12">
              Si es de un país designado para el Estatus de Protección Temporal, es posible que
              sea elegible para protección contra la deportación y autorización de trabajo mientras
              esa designación esté vigente. Los plazos de registro de TPS son estrictos — no pierda el suyo.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Qué Proporciona el TPS</h2>
                <p className="text-charcoal/80 mb-3">
                  El Estatus de Protección Temporal es un programa que permite a los nacionales de
                  ciertos países vivir y trabajar legalmente en los Estados Unidos de forma temporal.
                  Los países son designados para TPS por el Secretario de Seguridad Nacional cuando
                  están experimentando conflictos armados continuos, desastres ambientales u otras
                  condiciones extraordinarias que hacen que el regreso sea inseguro.
                </p>
                <div className="bg-warmgray rounded-lg px-5 py-3">
                  <p className="text-charcoal/80 text-sm">
                    El TPS no crea un camino directo hacia una tarjeta de residencia, pero previene
                    la deportación y autoriza el trabajo durante el período de designación.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Elegibilidad</h2>
                <p className="text-charcoal/80">
                  La elegibilidad para TPS depende de su país de origen y las fechas específicas de
                  registro para la designación de su país. Debe haber estado presente continuamente
                  en los Estados Unidos desde una fecha específica y cumplir otros requisitos. Las
                  condenas penales previas pueden descalificarlo.
                </p>
                <p className="text-charcoal/80 mt-3">
                  Las designaciones de TPS cambian. La abogada Bardi monitorea estos cambios a
                  través de su rol en AILA y asesora a los clientes sobre elegibilidad y plazos actuales.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Lo que Hace la Abogada Bardi</h2>
                <p className="text-charcoal/80">
                  Los registros de TPS son urgentes. La abogada Bardi prepara su solicitud inicial
                  o de re-registro, identifica cualquier problema en su historial que necesite ser
                  atendido, y evalúa si el TPS se conecta con otras formas de alivio migratorio
                  disponibles en su situación.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-warmgray-200">
              <Button href="/es/contact" size="lg">Programe una Consulta sobre TPS</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
