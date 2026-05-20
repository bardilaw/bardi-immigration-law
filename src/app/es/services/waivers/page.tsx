import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Abogada Dispensas Migratorias Georgia | I-601, I-212, I-929',
  description:
    'Dispensas I-601 (presencia ilegal), I-212 (deportación previa) e I-929 (derivados de VAWA). La abogada Bardi construye el expediente legal y factual completo para casos de dificultad extrema.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/waivers',
    languages: {
      en: 'https://bardilaw.com/services/waivers',
      es: 'https://bardilaw.com/es/services/waivers',
    },
  },
  openGraph: {
    title: 'Abogada Dispensas Migratorias Georgia | Bardi Immigration Law',
    description:
      'Dispensas I-601, I-212 e I-929. Estándar de dificultad extrema. La abogada Bardi construye el expediente completo. Sirviendo GA, AL, NC y SC.',
    url: 'https://bardilaw.com/es/services/waivers',
    locale: 'es_US',
  },
};

const WAIVERS = [
  {
    code: 'I-601',
    label: 'Dispensa de Presencia Ilegal',
    desc: 'Para personas sujetas a la prohibición de 3 o 10 años por presencia ilegal previa en los EE.UU.',
  },
  {
    code: 'I-212',
    label: 'Dispensa de Deportación Previa',
    desc: 'Para personas que tienen una orden de deportación previa y buscan regresar a los EE.UU.',
  },
  {
    code: 'I-929',
    label: 'Dispensa Derivada de VAWA',
    desc: 'Para familiares calificados de auto-peticionantes aprobados por VAWA que buscan dispensas de inadmisibilidad.',
  },
];

export default function WaiversPageES() {
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
              <span className="text-charcoal">Dispensas</span>
            </nav>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Dispensas Migratorias (I-601, I-212, I-929)
            </h1>
            <p className="text-lg text-charcoal/80 mb-12">
              Ciertas prohibiciones migratorias pueden ser dispensadas — pero solo con una
              presentación sólida y bien documentada. Si le han dicho que es inadmisible, una
              dispensa puede ser el camino a seguir.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Cuándo Necesita una Dispensa</h2>
                <p className="text-charcoal/80 mb-6">
                  Algunas personas son inadmisibles a los Estados Unidos — lo que significa que no
                  pueden recibir una visa o tarjeta de residencia — debido a presencia ilegal previa,
                  una deportación anterior u otras causales. En muchos casos, estas prohibiciones
                  pueden ser dispensadas si el solicitante califica y presenta evidencia convincente
                  de dificultad para un familiar ciudadano americano o residente permanente.
                </p>
                <div className="space-y-3">
                  {WAIVERS.map((w) => (
                    <div key={w.code} className="bg-warmgray rounded-lg p-5 flex gap-4">
                      <span className="font-serif text-lg font-bold text-gold min-w-[60px]">{w.code}</span>
                      <div>
                        <p className="font-semibold text-navy font-sans text-sm mb-1">{w.label}</p>
                        <p className="text-charcoal/70 text-sm">{w.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Qué Requieren las Dispensas</h2>
                <p className="text-charcoal/80">
                  Los casos de dispensa dependen de si la negación causaría &ldquo;dificultad extrema&rdquo;
                  a un familiar ciudadano americano o residente permanente. Este es un estándar
                  alto — la dificultad ordinaria no lo cumple. La abogada Bardi construye el
                  expediente legal y factual completo: evidencia de dificultad financiera, médica,
                  educativa y emocional para su familiar calificado, combinada con un escrito legal
                  que enmarca la evidencia de la manera en que los adjudicadores de USCIS están
                  capacitados para evaluarla.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Lo que Hace la Abogada Bardi</h2>
                <p className="text-charcoal/80">
                  La abogada Bardi evalúa su elegibilidad, identifica a su familiar calificado y
                  construye el paquete de evidencia que da a su petición de dispensa la mejor
                  posibilidad posible. Tiene experiencia preparando estas presentaciones complejas
                  y entendiendo qué convence a los adjudicadores.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-warmgray-200">
              <Button href="/es/contact" size="lg">Programe una Consulta sobre Dispensas</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
