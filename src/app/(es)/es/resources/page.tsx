import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { I864pCalculator } from '@/components/I864pCalculator';
import { VisaBulletinTable } from '@/components/VisaBulletinTable';
import { CONTACT_PHONE, phoneEnabled, telHref } from '@/lib/contact';
import { OFFICIAL_TOOLS } from '@/app/(en)/resources/resourcesData';

export const metadata: Metadata = {
  title: 'Recursos de Inmigración | Bardi Immigration Law',
  description:
    'Enlaces directos a herramientas oficiales del gobierno: pagar una fianza de ICE, consultar la fecha de su audiencia y verificar el estado de su caso de USCIS.',
  alternates: {
    canonical: 'https://bardilaw.com/es/resources',
    languages: {
      'x-default': 'https://bardilaw.com/resources',
      en: 'https://bardilaw.com/resources',
      es: 'https://bardilaw.com/es/resources',
    },
  },
  openGraph: {
    title: 'Recursos de Inmigración | Bardi Immigration Law',
    description:
      'Herramientas oficiales del gobierno para pagar una fianza de ICE, consultar una audiencia y verificar un caso de USCIS.',
    url: 'https://bardilaw.com/es/resources',
    locale: 'es_US',
  },
};

export default function ResourcesPageES() {
  return (
    <>
      <Header phone={CONTACT_PHONE} />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl font-bold text-navy mb-4">Recursos</h1>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                Enlaces directos a herramientas oficiales del gobierno de los EE.&nbsp;UU. para
                administrar su caso. Estos enlaces lo llevan a sitios web del gobierno &mdash; no a
                Bardi Immigration Law. Si no entiende algún resultado, comuníquese con nuestra oficina
                y le ayudaremos.
              </p>
            </div>
          </div>
        </section>

        {/* Calculadora de Patrocinador I-864P (feedback #38) — sección principal al inicio */}
        <section id="sponsor-calculator" className="bg-warmgray py-16 lg:py-20 scroll-mt-24">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="max-w-2xl mb-8">
              <h2 className="font-serif text-2xl font-bold text-navy mb-3">
                Calculadora de Patrocinador I-864P
              </h2>
              <p className="text-charcoal/80 leading-relaxed">
                ¿Está pensando en ser patrocinador económico en el Formulario I-864, Declaración
                Jurada de Patrocinio? Responda cinco preguntas rápidas para estimar si su ingreso
                cumple con el requisito mínimo. Esto es una estimación educativa &mdash; no es
                asesoría legal.
              </p>
            </div>
            <div className="max-w-3xl">
              <I864pCalculator lang="es" phone={CONTACT_PHONE} />
            </div>
          </div>
        </section>

        {/* Herramientas oficiales del gobierno */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-navy mb-8">Herramientas Oficiales del Gobierno</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {OFFICIAL_TOOLS.map((tool) => (
                <a
                  key={tool.href}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-white rounded-lg border border-warmgray-200 p-6 shadow-sm hover:shadow-md hover:border-gold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                >
                  <h3 className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors flex items-start gap-1.5">
                    <span>{tool.titleEs}</span>
                    <svg className="w-4 h-4 mt-1 shrink-0 text-charcoal/40 group-hover:text-gold" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M7 5h8v8M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </h3>
                  <p className="text-sm text-charcoal/75 leading-relaxed mt-2 flex-1">{tool.descriptionEs}</p>
                  <span className="text-xs font-semibold text-charcoal/50 mt-4">{tool.domain}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Boletín de Visas (fila 37) — actualizado mensualmente desde el DOS */}
        <section id="visa-bulletin" className="bg-warmgray py-16 lg:py-20 scroll-mt-24">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="max-w-2xl mb-8">
              <h2 className="font-serif text-2xl font-bold text-navy mb-3">
                Boletín de Visas &ndash; Fechas de Prioridad
              </h2>
              <p className="text-charcoal/80 leading-relaxed">
                El Boletín de Visas mensual indica a los solicitantes de la tarjeta de residencia
                (familiar y por empleo) si su fecha de prioridad está &ldquo;vigente&rdquo; y pueden
                avanzar. Estas son las Fechas de Acción Final, importadas directamente del
                Departamento de Estado de los EE.&nbsp;UU. y actualizadas cada mes.
              </p>
            </div>
            <VisaBulletinTable lang="es" />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              ¿No sabe qué significa el estado de su caso?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Ayudamos a nuestros clientes a entender en qué etapa está su caso y qué sigue.
              Comuníquese con nosotros y revisaremos su situación.
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
              <a
                href="/es/contact"
                className="inline-flex items-center justify-center font-sans font-semibold rounded text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-navy transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                Envíenos un Mensaje
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
