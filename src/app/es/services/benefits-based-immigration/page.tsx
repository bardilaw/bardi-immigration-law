import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Abogada de Inmigración por Beneficios | Tarjetas de Residencia, DACA, Visa U y Más',
  description:
    'Tarjetas de residencia permanente, DACA, naturalización, visa U, VAWA, peticiones familiares, TPS y renuncias, representación personalizada de inmigración. Como la ley de inmigración es federal, representamos a clientes en todo el país.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/benefits-based-immigration',
    languages: {
      en: 'https://bardilaw.com/services/benefits-based-immigration',
      es: 'https://bardilaw.com/es/services/benefits-based-immigration',
    },
  },
  openGraph: {
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bardi Immigration Law',
      },
    ],
    title: 'Inmigración por Beneficios | Bardi Immigration Law',
    description:
      'Tarjetas de residencia permanente, DACA, naturalización, visa U, VAWA, peticiones familiares, TPS y renuncias.',
    url: 'https://bardilaw.com/es/services/benefits-based-immigration',
    locale: 'es_US',
  },
};

const SERVICES_LIST = [
  { label: 'Naturalización', desc: 'Solicitud de ciudadanía americana', href: '/es/contact' },
  { label: 'Estatus de Residente Permanente (LPR)', desc: 'Peticiones y trámites de tarjeta de residencia permanente', href: '/es/services/family-based-immigration' },
  { label: 'Peticiones Familiares (I-130)', desc: 'Patrocinio de cónyuge, padre/madre o hijo/a', href: '/es/services/family-based-immigration' },
  { label: 'Estatus de Protección Temporal (TPS)', desc: 'Protección de estatus para nacionales de países designados', href: '/es/services/tps' },
  { label: 'Renuncias (Waivers)', desc: 'I-601 (presencia ilegal), I-212 (deportación previa), I-929 (derivado)', href: '/es/services/waivers' },
  { label: 'DACA', desc: 'Solicitudes iniciales y renovaciones', href: '/es/services/daca' },
  { label: 'Estatus de Inmigrante Juvenil Especial (SIJS)', desc: 'Protección para menores no acompañados', href: '/es/services/sijs' },
  { label: 'Peticiones VAWA', desc: 'Caminos de auto-petición para sobrevivientes de abuso', href: '/es/services/vawa' },
  { label: 'Visa U', desc: 'Protección y estatus para víctimas de crímenes violentos', href: '/es/services/u-visa' },
];

export default function BenefitsBasedPageES() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-warmgray pt-20 pb-14 lg:pt-28 lg:pb-16">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <nav aria-label="Ruta de navegación" className="text-[13px] text-charcoal/60 mb-6 font-sans">
              <Link href="/es" className="hover:text-navy transition-colors">Inicio</Link>
              <span className="mx-2" aria-hidden="true">&rsaquo;</span>
              <Link href="/es/services" className="hover:text-navy transition-colors">Servicios</Link>
              <span className="mx-2" aria-hidden="true">&rsaquo;</span>
              <span className="text-navy">Inmigración por Beneficios</span>
            </nav>
            <h1 className="font-serif text-4xl lg:text-[52px] font-bold text-navy leading-[1.15] mb-4">
              Inmigración por Beneficios
            </h1>
            <p className="font-sans text-[18px] text-charcoal leading-relaxed max-w-[640px]">
              Ayudamos a inmigrantes en cada etapa, desde quienes han vivido aquí desde la infancia hasta quienes navegan nuevos caminos a través de conexiones familiares o protección humanitaria.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">Servicios Incluyen</h2>
              <div className="w-10 h-[3px] bg-gold mt-3 mb-7" aria-hidden="true" />
              <div className="grid sm:grid-cols-2 gap-4">
                {SERVICES_LIST.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="flex gap-3 bg-warmgray border border-warmgray-200 rounded-lg p-4 hover:border-navy transition-colors group"
                  >
                    <span className="text-gold font-bold mt-0.5 select-none" aria-hidden="true">✓</span>
                    <div>
                      <p className="font-sans font-semibold text-navy text-sm group-hover:text-navy">{s.label}</p>
                      <p className="font-sans text-charcoal/70 text-sm mt-0.5">{s.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 lg:py-20 text-center">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-[36px] font-bold text-white leading-[1.2] max-w-[600px] mx-auto">
              Comience con una Consulta
            </h2>
            <p className="font-sans text-base text-white/80 mt-3">
              ¿No está seguro cuál camino aplica a usted? Evaluamos su situación completa e identificamos sus opciones.
            </p>
            <div className="mt-8">
              <Button href="/es/contact" variant="primary" size="lg">
                Programe una Consulta
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
