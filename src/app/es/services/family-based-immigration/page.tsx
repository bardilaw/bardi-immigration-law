import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Abogada Inmigración Familiar Georgia | Tarjetas de Residencia, Peticiones I-130',
  description:
    'Ciudadanos americanos y residentes permanentes pueden patrocinar familiares para tarjetas de residencia. La abogada Bardi maneja peticiones I-130, ajuste de estatus y solicitudes de dispensa.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/family-based-immigration',
    languages: {
      en: 'https://bardilaw.com/services/family-based-immigration',
      es: 'https://bardilaw.com/es/services/family-based-immigration',
    },
  },
  openGraph: {
    title: 'Abogada Inmigración Familiar Georgia | Bardi Immigration Law',
    description:
      'Peticiones I-130, ajuste de estatus, procesamiento consular y dispensas para inmigración familiar. Sirviendo GA, AL, NC y SC.',
    url: 'https://bardilaw.com/es/services/family-based-immigration',
    locale: 'es_US',
  },
};

const CITIZEN_CAN_PETITION = [
  'Su cónyuge',
  'Sus hijos/as solteros/as menores de 21 años',
  'Sus padres',
  'Sus hijos/as adultos casados/as o solteros/as',
  'Sus hermanos/as',
];

const LPR_CAN_PETITION = [
  'Su cónyuge',
  'Sus hijos/as solteros/as',
];

export default function FamilyBasedPageES() {
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
              <span className="text-charcoal">Inmigración Familiar</span>
            </nav>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Inmigración Basada en Familia
            </h1>
            <p className="text-lg text-charcoal/80 mb-12">
              Los ciudadanos americanos y los residentes permanentes pueden peticionar para traer
              a ciertos familiares a los Estados Unidos. El proceso es complejo — los tiempos de
              procesamiento, las categorías de visa y las reglas de elegibilidad varían significativamente.
              Le ayudamos a navegarlo correctamente desde el principio.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Relaciones Familiares Elegibles</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-warmgray rounded-lg p-5">
                    <h3 className="font-semibold text-navy font-sans text-sm mb-3 uppercase tracking-wide">
                      Si es ciudadano americano, puede peticionar por:
                    </h3>
                    <ul className="space-y-2">
                      {CITIZEN_CAN_PETITION.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
                          <span className="text-gold mt-0.5" aria-hidden="true">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-warmgray rounded-lg p-5">
                    <h3 className="font-semibold text-navy font-sans text-sm mb-3 uppercase tracking-wide">
                      Si es Residente Permanente Legal, puede peticionar por:
                    </h3>
                    <ul className="space-y-2">
                      {LPR_CAN_PETITION.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
                          <span className="text-gold mt-0.5" aria-hidden="true">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-charcoal/60 mt-3 font-sans">
                  Los tiempos de procesamiento varían significativamente según la categoría y el país de origen de su familiar.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Cuando Se Complica</h2>
                <p className="text-charcoal/80">
                  La inmigración familiar no siempre es sencilla. Es posible que su familiar tenga
                  períodos previos de presencia ilegal, violaciones migratorias anteriores u una
                  orden de deportación previa. Estos problemas no siempre impiden el alivio migratorio
                  — pero requieren una estrategia legal cuidadosa y, a menudo, una solicitud de
                  dispensa junto con la petición principal.
                </p>
                <p className="text-charcoal/80 mt-3">
                  La abogada Bardi identifica estos problemas temprano y construye un plan que los tenga en cuenta.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Lo que Hace la Abogada Bardi</h2>
                <p className="text-charcoal/80">
                  La abogada Bardi maneja el proceso familiar completo: la petición I-130, el ajuste
                  de estatus o el procesamiento consular, el análisis de causales de inadmisibilidad
                  y las solicitudes de dispensa cuando sean necesarias. Gestiona el proceso de
                  principio a fin para que las complicaciones no arruinen su caso.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-warmgray-200">
              <Button href="/es/contact" size="lg">Programe una Consulta de Inmigración Familiar</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
