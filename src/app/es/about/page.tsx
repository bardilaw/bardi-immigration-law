import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { CredentialBadge } from '@/components/CredentialBadge';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | AILA Presidenta del Capítulo Georgia-Alabama',
  description:
    'Bardi Immigration Law es una práctica boutique unipersonal. Presidenta del Capítulo AILA Georgia-Alabama 2025–26. Representación creativa, compleja y personal para cada cliente.',
  alternates: {
    canonical: 'https://bardilaw.com/es/about',
    languages: {
      en: 'https://bardilaw.com/about',
      es: 'https://bardilaw.com/es/about',
    },
  },
  openGraph: {
    title: 'Sobre Bardi Immigration Law | AILA Presidenta del Capítulo Georgia-Alabama',
    description:
      'Práctica boutique. Acceso directo a su abogada. AILA Georgia-Alabama Chapter Chair 2025–26. Sirviendo a GA, AL, NC y SC.',
    url: 'https://bardilaw.com/es/about',
    locale: 'es_US',
  },
};

const VALUES = [
  { label: 'Comunicación Directa', icon: '📞' },
  { label: 'Trata a los Clientes como Familia', icon: '🤝' },
  { label: 'Boutique, No una Fábrica', icon: '⚖️' },
  { label: 'Representación Creativa', icon: '💡' },
];

const STATS = [
  { value: 'AILA', label: 'Presidenta del Capítulo Georgia-Alabama 2025–26' },
  { value: 'SE', label: 'Georgia · Alabama · NC · SC' },
  { value: '3', label: 'Áreas de Práctica Especializadas' },
  { value: '24h', label: 'Garantía de respuesta' },
];

export default function AboutPageES() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Attorney intro */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
            <div
              className="flex items-center justify-center bg-warmgray rounded-lg h-80 lg:h-96 text-navy/20 text-sm font-sans"
              aria-hidden="true"
            >
              <span className="text-center px-8">[Foto de la abogada — 400px cuadrado]</span>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-2">
                [Nombre Completo de la Abogada]
              </h1>
              <p className="font-sans text-lg text-charcoal/70 mb-4">
                Abogada de Inmigración · Bardi Immigration Law
              </p>
              <CredentialBadge className="mb-6 self-start" />
              <p className="text-charcoal/80 text-lg">
                En Bardi Immigration Law, creemos que la representación boutique no es un lujo —
                es una necesidad cuando su futuro está en juego.
              </p>
            </div>
          </div>
        </section>

        {/* About section header */}
        <section className="bg-warmgray py-4">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-navy">
              Derecho de Inmigración Boutique. Construido sobre Representación Directa.
            </h2>
          </div>
        </section>

        {/* Bio */}
        <section className="bg-warmgray pb-16">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="max-w-2xl">
              <div className="prose text-charcoal/80 space-y-4 text-base leading-relaxed">
                <p>
                  <strong>Una Abogada. Atención Completa. Resultados Reales.</strong>
                </p>
                <p>
                  En Bardi Immigration Law, usted trabaja con su abogada — en cada paso, desde la
                  primera conversación hasta la decisión final. Sin porteros de admisión. Sin
                  transferencias a personal de apoyo antes de haber hablado con la persona que
                  realmente manejará su caso.
                </p>
                <p>
                  Esto no es solo un modelo de servicio. Es un compromiso.
                </p>
                <p>
                  <strong>Sobre Bardi Immigration Law</strong>
                </p>
                <p>
                  Bardi Immigration Law es una práctica de inmigración boutique unipersonal que sirve
                  a clientes en Georgia, Alabama, Carolina del Norte y Carolina del Sur. Nos enfocamos
                  exclusivamente en derecho de inmigración — casos por beneficios, defensa contra la
                  deportación y litigios federales — con la profundidad de especialización que los
                  asuntos complejos de inmigración exigen.
                </p>
                <p>
                  <strong>Conectada Nacionalmente. Comprometida Localmente.</strong>
                </p>
                <p>
                  Nuestra abogada se desempeña como Presidenta del Capítulo 2025–2026 del Capítulo
                  Georgia-Alabama de la Asociación Americana de Abogados de Inmigración (AILA) — una
                  de las principales asociaciones profesionales de abogados de inmigración del país.
                  Ese rol significa mantenerse al frente de cada cambio de política, actualización de
                  agencia y desarrollo legal que podría afectar su caso. Y significa que traemos ese
                  conocimiento directamente a usted, en lenguaje claro.
                </p>
                <p>
                  <strong>Por Qué Importa el Enfoque Boutique</strong>
                </p>
                <p>
                  Los grandes bufetes de inmigración manejan volumen. Nosotros manejamos casos. Esa
                  distinción importa.
                </p>
                <p>
                  Cuando llama a Bardi Immigration Law, llega a su abogada. Cuando tiene preguntas,
                  obtiene respuestas de la persona que conoce su expediente. Cuando algo cambia en su
                  caso — una actualización de política, una fecha de audiencia, un nuevo desarrollo —
                  usted es el primero en saberlo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy quote */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <blockquote className="font-serif text-2xl lg:text-3xl italic text-navy max-w-2xl mx-auto mb-10 relative">
              <span className="text-gold text-6xl leading-none absolute -top-4 -left-4 opacity-30" aria-hidden="true">&ldquo;</span>
              Representación creativa, competente y compleja — con la inversión personal de una
              práctica boutique.
            </blockquote>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {VALUES.map((v) => (
                <div key={v.label} className="flex flex-col items-center gap-2">
                  <span className="text-3xl" aria-hidden="true">{v.icon}</span>
                  <p className="text-sm font-semibold text-navy font-sans text-center">{v.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-warmgray py-12">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-serif text-3xl font-bold text-gold">{s.value}</span>
                  <span className="text-xs text-charcoal/70 font-sans">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-navy mb-6 text-center">En lo que Creemos</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                { label: 'Cada cliente es familia.', desc: 'Estamos personalmente comprometidas con su resultado, no solo con su expediente.' },
                { label: 'Cada caso importa.', desc: 'Complejo o sencillo, aplicamos el mismo nivel de cuidado.' },
                { label: 'La comunicación directa no es negociable.', desc: 'Usted siempre sabrá dónde está su caso y qué viene después.' },
                { label: 'Creatividad en el derecho.', desc: 'Buscamos caminos donde otros ven callejones sin salida. Si existe una opción legal, la encontraremos.' },
              ].map((v) => (
                <div key={v.label} className="flex gap-4">
                  <span className="mt-2 w-2 h-2 min-w-[8px] rounded-full bg-gold" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-navy font-sans text-sm">{v.label}</span>{' '}
                    <span className="text-charcoal/80 text-sm">{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              ¿Lista/o Para Hablar?
            </h2>
            <p className="text-charcoal/70 mb-8">
              Comience con una consulta. Una conversación con su abogada — sin porteros, sin presión.
            </p>
            <Button href="/es/contact" size="lg">Reserve una Consulta</Button>
            <p className="text-sm text-charcoal/50 mt-4 font-sans">
              Bardi Immigration Law sirve a clientes en Georgia, Alabama, Carolina del Norte y Carolina del Sur.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
