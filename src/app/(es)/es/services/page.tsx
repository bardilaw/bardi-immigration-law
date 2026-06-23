import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Servicios de Inmigración para Cada Etapa de Su Proceso',
  description:
    'Defensa contra la deportación, inmigración familiar, renuncias (waivers), procesamiento consular, apelaciones, litigios federales y más, atendidos directamente por la abogada desde el primer día.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services',
    languages: {
      'x-default': 'https://bardilaw.com/services',
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
      'Defensa contra la deportación, inmigración familiar, renuncias, procesamiento consular, apelaciones y litigios federales, atendidos directamente por la abogada desde el primer día.',
    url: 'https://bardilaw.com/es/services',
    locale: 'es_US',
  },
};

// Áreas de práctica principales (BAR-697 fila 23). La defensa contra la deportación
// encabeza (mayor volumen). Los temas sin página de servicio dedicada todavía enlazan
// a la guía del bufete sobre ese tema como destino provisional, en espera de las
// descripciones detalladas que proporcionará Eszter (fila 21).
const TOP_LEVEL = [
  {
    title: 'Defensa contra la Deportación',
    href: '/es/services/removal-defense',
    desc: 'Defensa con y sin detención, audiencias de fianza, cancelación de la deportación (42A/42B) y representación completa en la corte de inmigración. Si está en proceso, el tiempo es crucial.',
  },
  {
    title: 'Inmigración Familiar',
    href: '/es/services/family-based-immigration',
    desc: 'Peticiones I-130, ajuste de estatus y reunificación familiar mediante el patrocinio de ciudadanos y residentes permanentes.',
  },
  {
    title: 'Renuncias (Waivers)',
    href: '/es/services/waivers',
    desc: 'Renuncias I-601 e I-601A por presencia ilegal e inadmisibilidad, I-212 y solicitudes por dificultad extrema.',
  },
  {
    // Sin guía en español todavía; enlace provisional a inmigración familiar (la vía
    // consular es la rama en el extranjero del proceso familiar). Página dedicada
    // pendiente de la descripción de Eszter (BAR-697 fila 21).
    title: 'Procesamiento Consular',
    href: '/es/services/family-based-immigration',
    desc: 'Trámite de la visa de inmigrante a través de un consulado de EE. UU. en el extranjero, desde la petición aprobada hasta la entrevista en el Centro Nacional de Visas.',
  },
  {
    title: 'Apelaciones',
    href: '/es/blog/bia-appeal-immigration-court-georgia',
    desc: 'Apelaciones ante la Junta de Apelaciones de Inmigración (BIA) de las decisiones del juez de inmigración, además de mociones para reabrir y reconsiderar.',
  },
  {
    title: 'Litigios Federales',
    href: '/es/services/federal-litigation',
    desc: 'Peticiones de hábeas corpus y mandamus cuando se han agotado los recursos administrativos. Experiencia en cortes federales en todo el sureste.',
  },
  {
    title: 'Otras Opciones de Inmigración',
    href: '#other-options',
    desc: 'SIJS, alivio humanitario, naturalización, DACA, TPS y programas de permiso (parole). Vea la lista completa a continuación.',
  },
];

// Subgrupo "Otras Opciones de Inmigración" (BAR-697 fila 24).
const OTHER_OPTIONS = [
  {
    label: 'SIJS',
    desc: 'Estatus de Inmigrante Juvenil Especial, protección para menores abusados, abandonados o descuidados.',
    href: '/es/services/sijs',
  },
  {
    label: 'Alivio Humanitario (Visa U y VAWA)',
    desc: 'Visas U para víctimas de ciertos delitos y auto-peticiones confidenciales bajo VAWA para sobrevivientes de abuso.',
    href: '/es/services/u-visa',
    secondary: { label: 'VAWA', href: '/es/services/vawa' },
  },
  {
    label: 'Naturalización',
    desc: 'Elegibilidad para la ciudadanía estadounidense, la solicitud N-400, los exámenes de cívica e inglés y el juramento.',
    href: '/es/blog/naturalization-citizenship-georgia',
  },
  {
    label: 'DACA',
    desc: 'Acción Diferida para los Llegados en la Infancia, solicitudes iniciales y renovaciones.',
    href: '/es/services/daca',
  },
  {
    label: 'TPS',
    desc: 'Estatus de Protección Temporal, registro y nuevo registro para países designados.',
    href: '/es/services/tps',
  },
  {
    label: 'Permiso en el Lugar y Advance Parole',
    desc: 'Permiso en el lugar (parole-in-place) para familias militares y documentos de viaje advance parole para solicitantes con casos pendientes.',
    href: '/es/blog/parole-in-place-military-families-georgia',
    secondary: { label: 'Advance Parole', href: '/es/blog/advance-parole-travel-documents-georgia' },
  },
];

export default function ServicesPageES() {
  return (
    <>
      <Header phone={CONTACT_PHONE} />
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

        {/* Áreas de práctica principales */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-navy mb-8">Áreas de Práctica</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TOP_LEVEL.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="bg-white rounded-lg p-6 flex flex-col gap-2 hover:shadow-md transition-shadow group"
                >
                  <p className="font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors">
                    {area.title}
                  </p>
                  <p className="text-sm text-charcoal/70 flex-1">{area.desc}</p>
                  <span className="text-sm font-semibold text-gold font-sans">Más información →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Otras Opciones de Inmigración */}
        <section id="other-options" className="bg-white py-16 scroll-mt-24">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-navy mb-2">Otras Opciones de Inmigración</h2>
            <p className="text-charcoal/80 mb-8 max-w-2xl">
              Otras vías y protecciones que manejamos. ¿No está seguro de cuál corresponde a su
              situación? Para eso es exactamente la consulta.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {OTHER_OPTIONS.map((item) => (
                <div
                  key={item.href}
                  className="bg-warmgray rounded-lg p-5 flex flex-col gap-2"
                >
                  <Link href={item.href} className="group">
                    <p className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors">
                      {item.label}
                    </p>
                  </Link>
                  <p className="text-sm text-charcoal/70 flex-1">{item.desc}</p>
                  <div className="flex items-center gap-4">
                    <Link href={item.href} className="text-sm font-semibold text-gold hover:underline font-sans">
                      Más información →
                    </Link>
                    {item.secondary && (
                      <Link href={item.secondary.href} className="text-sm font-semibold text-navy hover:underline font-sans">
                        {item.secondary.label} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
