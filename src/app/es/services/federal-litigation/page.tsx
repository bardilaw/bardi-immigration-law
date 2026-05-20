import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Litigios Federales de Inmigración | Mandamus y Hábeas Corpus',
  description:
    '¿USCIS tarda demasiado? Bardi Immigration Law presenta peticiones de mandamus y hábeas corpus para avanzar casos de inmigración bloqueados. Sirviendo a clientes en todo el país.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/federal-litigation',
    languages: {
      en: 'https://bardilaw.com/services/federal-litigation',
      es: 'https://bardilaw.com/es/services/federal-litigation',
    },
  },
  openGraph: {
    title: 'Litigios Federales de Inmigración | Bardi Immigration Law',
    description:
      'Peticiones de mandamus para obligar a USCIS a actuar. Hábeas corpus para impugnar detención ilegal. Experiencia en cortes federales en todo el sureste.',
    url: 'https://bardilaw.com/es/services/federal-litigation',
    locale: 'es_US',
  },
};

const SERVICES_LIST = [
  {
    label: 'Peticiones de Hábeas Corpus',
    desc: 'Impugnación de detención ilegal en la corte federal',
  },
  {
    label: 'Peticiones de Mandamus',
    desc: 'Obligar a una agencia a actuar ante una demora irrazonable',
  },
];

const WHEN_APPLIES = [
  'Su solicitud de USCIS ha estado pendiente mucho más allá de los tiempos de procesamiento normales sin explicación',
  'Usted o un familiar está en detención migratoria y se le ha negado la fianza o ha sido retenido por un período extendido',
  'Ha agotado las apelaciones administrativas y un foro federal es la opción restante',
  'Su caso involucra una reclamación constitucional que las cortes de inmigración no pueden resolver',
];

export default function FederalLitigationPageES() {
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
              <span className="text-charcoal">Litigios Federales</span>
            </nav>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-6">
              Litigios Federales de Inmigración
            </h1>
            <p className="text-lg text-charcoal/80 mb-12">
              Cuando se agotan las opciones administrativas — o cuando las agencias federales actúan
              ilegalmente — la corte federal puede ser la respuesta. Presentamos peticiones de hábeas
              corpus y mandamus en el Tribunal Federal de Distrito.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Cuándo Aplica la Corte Federal</h2>
                <p className="text-charcoal/80 mb-4">
                  Los litigios federales de inmigración implican presentar una demanda en un Tribunal
                  Federal de Distrito para impugnar acciones gubernamentales o compeler la acción del
                  gobierno. A diferencia de la corte de inmigración, los tribunales federales de
                  distrito pueden revisar ciertas decisiones de agencias, abordar reclamaciones
                  constitucionales y ordenar alivio que el sistema de inmigración en sí mismo no
                  puede proporcionar.
                </p>
                <div className="flex flex-col gap-4">
                  {SERVICES_LIST.map((s) => (
                    <div key={s.label} className="flex gap-3 bg-warmgray rounded-lg p-5">
                      <span className="text-gold font-bold mt-0.5" aria-hidden="true">✓</span>
                      <div>
                        <p className="font-semibold text-navy font-sans">{s.label}</p>
                        <p className="text-charcoal/70 text-sm">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">¿Quién Debería Considerar los Litigios Federales?</h2>
                <p className="text-charcoal/80 mb-4">El litigio federal puede ser apropiado si:</p>
                <ul className="space-y-3">
                  {WHEN_APPLIES.map((item) => (
                    <li key={item} className="flex gap-3 text-charcoal/80">
                      <span className="text-gold mt-1" aria-hidden="true">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Lo que Hace la Abogada Bardi</h2>
                <p className="text-charcoal/80">
                  La abogada Bardi prepara y presenta la petición federal, la representa en los
                  procedimientos del tribunal de distrito y litiga el caso hasta su resolución. Los
                  casos federales de inmigración requieren un conjunto de habilidades diferente al
                  de la práctica administrativa de inmigración. No todos los abogados de inmigración
                  los manejan. Este es un trabajo que hacemos.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-warmgray-200">
              <div className="bg-warmgray rounded-lg p-6 mb-6 border-l-4 border-navy">
                <h3 className="font-serif text-lg font-bold text-navy mb-2">Para quién es</h3>
                <p className="text-charcoal/80">
                  Solicitantes cuyas peticiones han sido retrasadas o negadas de manera irrazonable,
                  o personas que han sido detenidas más allá de lo que permite la ley.
                </p>
              </div>
              <Button href="/es/contact" size="lg">Programe una Consulta sobre Litigios Federales</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
