import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Abogada Visa U Georgia | Protección para Víctimas de Crímenes',
  description:
    'La visa U proporciona estatus legal y autorización de trabajo para víctimas de crímenes que cooperan con las autoridades. Camino a tarjeta de residencia permanente después de 3 años. Consultas confidenciales.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/u-visa',
    languages: {
      en: 'https://bardilaw.com/services/u-visa',
      es: 'https://bardilaw.com/es/services/u-visa',
    },
  },
  openGraph: {
    title: 'Abogada Visa U Georgia | Bardi Immigration Law',
    description: 'Visa U para víctimas de crímenes. Estatus legal + autorización de trabajo. Camino a tarjeta de residencia después de 3 años.',
    url: 'https://bardilaw.com/es/services/u-visa',
    locale: 'es_US',
  },
};

const QUALIFYING_CRIMES = [
  'Violencia doméstica',
  'Agresión sexual',
  'Secuestro',
  'Tráfico de personas',
  'Robo',
  'Asalto agravado',
  'Extorsión y chantaje',
  'Obstrucción de la justicia',
  'Y muchos otros',
];

export default function UVisaPageES() {
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
              <span className="text-charcoal">Visa U</span>
            </nav>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Visa U — Protección para Víctimas de Crímenes
            </h1>
            <p className="text-lg text-charcoal/80 mb-12">
              Si fue víctima de un crimen violento en los Estados Unidos y cooperó — o está
              dispuesto a cooperar — con las autoridades, es posible que califique para una visa U.
              La visa U proporciona estatus legal y autorización de trabajo, con un camino hacia la
              tarjeta de residencia permanente después de tres años.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Qué Proporciona la Visa U</h2>
                <p className="text-charcoal/80 mb-3">
                  La visa U es un estatus no inmigrante creado específicamente para víctimas de
                  crímenes que asisten a las autoridades. Proporciona hasta cuatro años de estatus
                  legal y autorización de trabajo. Después de tres años de estatus continuo de visa
                  U, los titulares elegibles pueden solicitar una tarjeta de residencia permanente.
                </p>
                <div className="bg-warmgray rounded-lg px-5 py-3">
                  <p className="text-navy font-semibold font-sans text-sm">
                    La visa U está disponible independientemente del estatus migratorio actual.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Elegibilidad</h2>
                <p className="text-charcoal/80 mb-4">
                  Para calificar, debe haber sido víctima de un crimen calificado, haber sufrido
                  abuso físico o mental sustancial, tener información sobre el crimen y estar
                  dispuesto a cooperar con las autoridades. Se requiere una certificación de las
                  autoridades — firmada por un funcionario calificado — como parte de la solicitud.
                </p>
                <p className="text-sm font-semibold text-navy font-sans mb-2">Los crímenes calificados incluyen:</p>
                <ul className="grid sm:grid-cols-2 gap-1">
                  {QUALIFYING_CRIMES.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-charcoal/80">
                      <span className="text-gold" aria-hidden="true">✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Lo que Hace la Abogada Bardi</h2>
                <p className="text-charcoal/80">
                  La abogada Bardi le guía a través del proceso de certificación, trabajando con las
                  autoridades en su nombre para obtener la documentación requerida. Luego prepara y
                  presenta la petición completa de visa U.
                </p>
                <p className="text-charcoal/80 mt-3">
                  Todas las consultas sobre asuntos de visa U son completamente confidenciales.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-warmgray-200">
              <Button href="/es/contact" size="lg">Programe una Consulta Confidencial</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
