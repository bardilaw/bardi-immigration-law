import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Abogada VAWA Georgia | Peticiones bajo la Ley de Violencia contra la Mujer',
  description:
    'Auto-peticiones VAWA confidenciales para sobrevivientes de abuso. No se requiere informe policial. La abogada Bardi maneja las peticiones con total confidencialidad en GA, AL, NC y SC.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/vawa',
    languages: {
      en: 'https://bardilaw.com/services/vawa',
      es: 'https://bardilaw.com/es/services/vawa',
    },
  },
  openGraph: {
    title: 'VAWA Auto-Petición | Bardi Immigration Law',
    description: 'Peticiones VAWA confidenciales. Puede auto-peticionarse sin el conocimiento del abusador.',
    url: 'https://bardilaw.com/es/services/vawa',
    locale: 'es_US',
  },
};

export default function VawaPageES() {
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
              <span className="text-charcoal">VAWA</span>
            </nav>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              VAWA — Peticiones bajo la Ley de Violencia contra la Mujer
            </h1>
            <p className="text-lg text-charcoal/80 mb-12">
              Si ha sufrido abuso de un cónyuge, padre/madre o hijo/a adulto que es ciudadano
              americano o residente permanente, es posible que pueda solicitar alivio migratorio
              por su propia cuenta — sin el conocimiento del abusador. Este proceso es confidencial.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Su Derecho a la Auto-Petición</h2>
                <p className="text-charcoal/80 mb-3">
                  La Ley de Violencia contra la Mujer permite que ciertas personas sobrevivientes de
                  abuso soliciten el estatus migratorio por su propia cuenta sin depender de — ni
                  alertar al — abusador. USCIS no contacta al familiar abusivo cuando se presenta
                  una petición VAWA.
                </p>
                <div className="bg-warmgray rounded-lg px-5 py-4 space-y-1">
                  <p className="text-navy font-semibold font-sans text-sm">No necesita un informe policial.</p>
                  <p className="text-navy font-semibold font-sans text-sm">No necesita una orden de protección vigente.</p>
                  <p className="text-navy font-semibold font-sans text-sm">No necesita haber presentado cargos.</p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Elegibilidad</h2>
                <p className="text-charcoal/80">
                  Es posible que califique para presentar una auto-petición VAWA si ha experimentado
                  maltrato o crueldad extrema de un ciudadano americano o residente permanente legal
                  que sea su cónyuge actual o anterior, padre/madre o hijo/a adulto. Debe haber
                  vivido con el abusador en algún momento y ser una persona de buena moral.
                </p>
                <p className="text-charcoal/80 mt-3">
                  La protección VAWA se extiende a cónyuges, hijos/as y padres/madres —
                  independientemente del género.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Lo que Hace la Abogada Bardi</h2>
                <p className="text-charcoal/80">
                  La abogada Bardi maneja las peticiones VAWA con total confidencialidad y
                  sensibilidad. Le ayuda a reunir la documentación requerida sin ponerle en riesgo,
                  y prepara una declaración personal que presenta su situación con precisión y
                  completitud ante USCIS.
                </p>
                <p className="text-charcoal/80 mt-3">
                  Si se encuentra en una situación peligrosa en este momento, su seguridad es
                  primero. Podemos discutir sus opciones legales de una manera que no cree riesgo
                  para usted.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-warmgray-200">
              <Button href="/es/contact" size="lg">Programe una Consulta Confidencial</Button>
              <div className="mt-4 bg-warmgray rounded-lg px-5 py-3">
                <p className="text-xs text-charcoal/70 font-sans">
                  Todas las comunicaciones con nuestra oficina son confidenciales. Visitar nuestro
                  sitio web o contactarnos no crea un registro visible para ninguna otra persona.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
