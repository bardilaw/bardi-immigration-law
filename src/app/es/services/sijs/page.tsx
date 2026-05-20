import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Abogada SIJS Georgia | Estatus de Inmigrante Juvenil Especial',
  description:
    'El SIJS proporciona un camino hacia la tarjeta de residencia permanente para menores abusados, negligidos o abandonados. Bardi Immigration Law coordina cortes estatales e inmigración federal.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/sijs',
    languages: {
      en: 'https://bardilaw.com/services/sijs',
      es: 'https://bardilaw.com/es/services/sijs',
    },
  },
  openGraph: {
    title: 'SIJS | Bardi Immigration Law',
    description: 'Representación SIJS especializada y sensible. Cortes estatales + presentaciones de inmigración federal.',
    url: 'https://bardilaw.com/es/services/sijs',
    locale: 'es_US',
  },
};

export default function SijsPageES() {
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
              <span className="text-charcoal">SIJS</span>
            </nav>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Estatus de Inmigrante Juvenil Especial (SIJS)
            </h1>
            <p className="text-lg text-charcoal/80 mb-12">
              El SIJS proporciona un camino hacia la tarjeta de residencia permanente para niños en
              los Estados Unidos que han sido abusados, negligidos o abandonados y no pueden
              reunirse de manera segura con uno o ambos padres. Este es un trabajo legal
              especializado y sensible — y lo manejamos con el cuidado que requiere.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Qué Proporciona el SIJS</h2>
                <p className="text-charcoal/80">
                  El Estatus de Inmigrante Juvenil Especial es una clasificación de inmigración
                  federal para menores elegibles. Un caso exitoso de SIJS involucra dos pasos:
                  primero, obtener hallazgos de un tribunal de menores o familia estatal; segundo,
                  usar esos hallazgos para solicitar una visa de inmigrante y, finalmente, una
                  tarjeta de residencia permanente. Cuando ambos pasos tienen éxito, el niño puede
                  obtener el estatus de residente permanente legal en los Estados Unidos.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Elegibilidad</h2>
                <p className="text-charcoal/80">
                  El SIJS está disponible para personas solteras menores de 21 años que se
                  encuentren en los Estados Unidos y cumplan requisitos específicos relacionados
                  con abuso, negligencia o abandono — y para quienes regresar a su país de origen
                  no sea en su mejor interés. La elegibilidad es específica a los hechos y requiere
                  tanto un proceso en la corte estatal como presentaciones de inmigración federal.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Lo que Hace la Abogada Bardi</h2>
                <p className="text-charcoal/80">
                  Los casos de SIJS requieren navegar simultáneamente los sistemas de cortes
                  estatales y el sistema de inmigración federal. La abogada Bardi coordina el
                  trabajo legal en ambos, asegurando que se obtengan los hallazgos judiciales
                  requeridos y que la petición federal se prepare correctamente y se presente
                  a tiempo.
                </p>
                <p className="text-charcoal/80 mt-3">
                  Este trabajo es sensible. Lo abordamos con el cuidado que merecen los niños y
                  familias a quienes servimos.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-warmgray-200">
              <Button href="/es/contact" size="lg">Programe una Consulta</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
