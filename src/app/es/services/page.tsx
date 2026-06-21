import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Servicios de Inmigración para Cada Etapa de Su Proceso',
  description:
    'DACA, SIJS, VAWA, Visa U, TPS, inmigración familiar, defensa contra la deportación y litigios federales, atendidos directamente por la abogada desde el primer día.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services',
    languages: {
      en: 'https://bardilaw.com/services',
      es: 'https://bardilaw.com/es/services',
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
    title: 'Servicios de Inmigración | Bardi Immigration Law',
    description:
      'Inmigración por beneficios, defensa contra la deportación y litigios federales, atendidos directamente por la abogada desde el primer día.',
    url: 'https://bardilaw.com/es/services',
    locale: 'es_US',
  },
};

const BENEFITS_BASED = [
  { label: 'DACA', desc: 'Acción Diferida para los Llegados en la Infancia, solicitudes iniciales y renovaciones', href: '/es/services/daca' },
  { label: 'SIJS', desc: 'Estatus de Inmigrante Juvenil Especial, protección para menores no acompañados', href: '/es/services/sijs' },
  { label: 'VAWA', desc: 'Ley de Violencia contra la Mujer, auto-peticiones confidenciales para sobrevivientes de abuso', href: '/es/services/vawa' },
  { label: 'Visa U', desc: 'Protección y estatus legal para víctimas de crímenes violentos', href: '/es/services/u-visa' },
  { label: 'TPS', desc: 'Estatus de Protección Temporal, registro y renovaciones', href: '/es/services/tps' },
  { label: 'Inmigración Familiar', desc: 'Peticiones I-130, ajuste de estatus, procesamiento consular', href: '/es/services/family-based-immigration' },
  { label: 'Renuncias (Waivers)', desc: 'I-601, I-212, I-929, solicitudes de renuncia por dificultad extrema', href: '/es/services/waivers' },
];

const TOP_LEVEL = [
  {
    icon: '🛡️',
    title: 'Defensa contra la Deportación',
    href: '/es/services/removal-defense',
    desc: 'Defensa con y sin detención, audiencias de fianza, cancelación de la deportación (42B/42A), apelaciones ante la BIA. Si está en proceso, el tiempo es crucial.',
  },
  {
    icon: '🏛️',
    title: 'Litigios Federales',
    href: '/es/services/federal-litigation',
    desc: 'Peticiones de hábeas corpus y mandamus cuando se han agotado los recursos administrativos. Experiencia en cortes federales en todo el sureste.',
  },
];

export default function ServicesPageES() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Page hero */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <nav aria-label="Ruta de navegación" className="text-sm text-charcoal/50 mb-6 font-sans">
              <Link href="/es" className="hover:text-navy">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-charcoal">Servicios</span>
            </nav>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Servicios de Inmigración para Cada Etapa de Su Proceso
            </h1>
            <p className="text-lg text-charcoal/80 max-w-2xl">
              Los casos de inmigración son complejos. Ya sea que esté trabajando para obtener una
              tarjeta de residencia permanente, defendiéndose de la deportación o navegando una
              batalla en la corte federal, necesita una abogada que entienda tanto la ley como lo
              que está en juego para su familia. Esto es lo que manejamos.
            </p>
          </div>
        </section>

        {/* Benefits-Based */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl" aria-hidden="true">⚖️</span>
              <h2 className="font-serif text-3xl font-bold text-navy">Inmigración por Beneficios</h2>
            </div>
            <p className="text-charcoal/80 mb-8 max-w-2xl">
              Ayudamos a inmigrantes en cada etapa del proceso, desde quienes han vivido aquí
              desde la infancia hasta quienes navegan nuevos caminos a través de conexiones
              familiares o protección humanitaria.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {BENEFITS_BASED.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-white rounded-lg p-5 flex flex-col gap-2 hover:shadow-md transition-shadow group"
                >
                  <p className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors">
                    {item.label}
                  </p>
                  <p className="text-sm text-charcoal/70 flex-1">{item.desc}</p>
                  <span className="text-sm font-semibold text-gold font-sans">Más información →</span>
                </Link>
              ))}
            </div>
            <Link href="/es/services/benefits-based-immigration" className="text-sm font-semibold text-navy hover:text-gold font-sans">
              Ver todos los servicios por beneficios →
            </Link>
          </div>
        </section>

        {/* Removal Defense + Federal Litigation */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-6">
            {TOP_LEVEL.map((area) => (
              <div key={area.href} className="bg-warmgray rounded-lg p-6 flex flex-col gap-3">
                <span className="text-3xl" aria-hidden="true">{area.icon}</span>
                <h2 className="font-serif text-2xl font-bold text-navy">{area.title}</h2>
                <p className="text-charcoal/80 text-sm flex-1">{area.desc}</p>
                <Link href={area.href} className="text-sm font-semibold text-gold hover:underline font-sans self-start">
                  Más información →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">
              ¿No Está Seguro Qué Servicio Aplica a Su Caso?
            </h2>
            <p className="text-charcoal/70 mb-8 max-w-xl mx-auto">
              Para eso es exactamente la consulta. Hablará directamente con su abogada, recibirá
              respuestas directas y comprenderá sus opciones legales, antes de comprometerse con
              cualquier cosa.
            </p>
            <Button href="/es/contact" size="lg">Reserve una Consulta</Button>
            <p className="text-sm text-charcoal/50 mt-4 font-sans">
              Todas las consultas son realizadas por una abogada de inmigración con licencia.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
