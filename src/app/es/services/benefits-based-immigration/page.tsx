import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Abogada de Inmigración por Beneficios | Tarjetas de Residencia, DACA, Visa U y Más',
  description:
    'Tarjetas de residencia permanente, DACA, naturalización, visa U, VAWA, peticiones familiares, TPS y renuncias — representación personalizada de inmigración en Georgia y el sureste.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/benefits-based-immigration',
    languages: {
      en: 'https://bardilaw.com/services/benefits-based-immigration',
      es: 'https://bardilaw.com/es/services/benefits-based-immigration',
    },
  },
  openGraph: {
    title: 'Inmigración por Beneficios | Bardi Immigration Law',
    description:
      'Tarjetas de residencia permanente, DACA, naturalización, visa U, VAWA, peticiones familiares, TPS y renuncias. Sirviendo a Georgia, Alabama, NC y SC.',
    url: 'https://bardilaw.com/es/services/benefits-based-immigration',
    locale: 'es_US',
  },
};

const SERVICES_LIST = [
  { label: 'Naturalización', desc: 'Solicitud de ciudadanía americana' },
  { label: 'Estatus de Residente Permanente (LPR)', desc: 'Peticiones y trámites de tarjeta de residencia permanente' },
  { label: 'Peticiones Familiares (I-130)', desc: 'Patrocinio de cónyuge, padre/madre o hijo/a' },
  { label: 'Estatus de Protección Temporal (TPS)', desc: 'Protección de estatus para nacionales de países designados' },
  { label: 'Renuncias (Waivers)', desc: 'I-601 (presencia ilegal), I-212 (deportación previa), I-929 (derivado)' },
  { label: 'Acción Diferida (DACA)', desc: 'Solicitudes iniciales y renovaciones' },
  { label: 'Estatus de Inmigrante Juvenil Especial (SIJS)', desc: 'Protección para menores no acompañados' },
  { label: 'Peticiones VAWA', desc: 'Caminos de auto-petición para sobrevivientes de abuso' },
  { label: 'Visa U', desc: 'Protección y estatus para víctimas de crímenes violentos' },
];

export default function BenefitsBasedPageES() {
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
              <span className="text-charcoal">Inmigración por Beneficios</span>
            </nav>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-6">
              Construya Su Futuro en los Estados Unidos.
            </h1>
            <p className="text-lg text-charcoal/80 max-w-2xl mb-12">
              Ayudamos a inmigrantes en cada etapa del proceso — desde quienes han vivido aquí
              desde la infancia hasta quienes navegan nuevos caminos a través de conexiones
              familiares o protección humanitaria. Sin importar en qué punto de su proceso se
              encuentre, buscamos el camino hacia adelante.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy mb-6">Servicios Incluyen:</h2>
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

            <div className="bg-warmgray rounded-lg p-6 mb-8 border-l-4 border-navy">
              <h3 className="font-serif text-lg font-bold text-navy mb-2">Para quién es</h3>
              <p className="text-charcoal/80">
                Personas que han construido su vida en los EE. UU. y están listas para asegurar su
                estatus legal — a través del matrimonio, la familia o la protección humanitaria.
              </p>
            </div>

            <Button href="/es/contact" size="lg">Programe una Consulta</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
