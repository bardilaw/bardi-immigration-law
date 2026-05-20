import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Abogada de Defensa contra la Deportación en Georgia',
  description:
    '¿Enfrenta la deportación? Bardi Immigration Law maneja la defensa en toda Georgia, NC, SC y AL. Representación directa de la abogada desde el primer día. El tiempo importa — contáctenos ahora.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/removal-defense',
    languages: {
      en: 'https://bardilaw.com/services/removal-defense',
      es: 'https://bardilaw.com/es/services/removal-defense',
    },
  },
  openGraph: {
    title: 'Defensa contra la Deportación | Bardi Immigration Law',
    description:
      '¿Enfrenta la deportación? Representación directa de la abogada. Sirviendo a Georgia, Carolina del Norte, Carolina del Sur y Alabama.',
    url: 'https://bardilaw.com/es/services/removal-defense',
    locale: 'es_US',
  },
};

const SERVICES_LIST = [
  { label: 'Defensa en Deportación con Detención', desc: 'Representación completa para clientes en detención migratoria' },
  { label: 'Defensa en Deportación sin Detención', desc: 'Representación para clientes en proceso de deportación que no están detenidos' },
  { label: 'Audiencias de Fianza', desc: 'Abogacía para la liberación de la detención mientras avanza su caso' },
  { label: 'Cancelación de la Deportación', desc: '42B (no-LPR) y 42A (LPR)' },
  { label: 'Audiencias de Calendario Maestro', desc: 'Presentación de alegatos y programación del caso' },
  { label: 'Audiencias Individuales (del Fondo)', desc: 'Defensa completa ante un juez de inmigración' },
  { label: 'Apelaciones ante la BIA', desc: 'Apelaciones ante la Junta de Apelaciones de Inmigración' },
];

export default function RemovalDefensePageES() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <nav aria-label="Ruta de navegación" className="text-sm text-charcoal/50 mb-6 font-sans">
              <Link href="/es" className="hover:text-navy">Inicio</Link>
              <span className="mx-2">/</span>
              <Link href="/es/services" className="hover:text-navy">Servicios</Link>
              <span className="mx-2">/</span>
              <span className="text-charcoal">Defensa contra la Deportación</span>
            </nav>

            <div className="bg-gold/10 border border-gold rounded-lg px-5 py-3 mb-8 flex items-center gap-3">
              <span className="text-gold font-bold text-lg" aria-hidden="true">!</span>
              <p className="text-navy font-sans text-sm font-semibold">
                Si usted o un familiar enfrenta un proceso de deportación o detención — contáctenos
                de inmediato. El tiempo importa.
              </p>
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-6">
              Cuando el Riesgo es Mayor, Estamos Presentes.
            </h1>
            <p className="text-lg text-charcoal/80 max-w-2xl mb-12">
              Una notificación de la corte de inmigración no es el fin de su historia — es el
              comienzo de una lucha. Representamos a clientes en procesos de deportación detenidos
              y no detenidos, y tratamos cada caso con la urgencia y atención que requiere. Si usted
              o un ser querido enfrenta la deportación, el tiempo es crucial. Contáctenos hoy.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy mb-6">Servicios en Defensa contra la Deportación:</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {SERVICES_LIST.map((s) => (
                <div key={s.label} className="flex gap-3 bg-warmgray rounded-lg p-4">
                  <span className="text-gold font-bold mt-0.5" aria-hidden="true">✓</span>
                  <div>
                    <p className="font-semibold text-navy font-sans text-sm">{s.label}</p>
                    <p className="text-charcoal/70 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-warmgray rounded-lg p-6 mb-8 border-l-4 border-gold">
              <h3 className="font-serif text-lg font-bold text-navy mb-2">Para quién es</h3>
              <p className="text-charcoal/80">
                Cualquier persona en proceso de deportación — detenida o no. Si ha recibido un Aviso
                de Comparecencia (NTA) o está en riesgo de deportación, no espere.
              </p>
            </div>

            <Button href="/es/contact" size="lg">Contáctenos Inmediatamente</Button>
            <p className="text-sm text-charcoal/60 mt-3 font-sans">
              Si usted o un familiar está detenido, llámenos directamente. Los casos de deportación avanzan rápidamente.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
