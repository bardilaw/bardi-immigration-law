import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Bardi Immigration Law | Abogada de Inmigración',
  description:
    'Bufete boutique de inmigración para familias e individuos. Como la ley de inmigración es federal, representamos a clientes en todo el país. Problemas complejos. Respuestas directas. Atención personal desde el primer contacto.',
  alternates: {
    canonical: 'https://bardilaw.com/es/',
    languages: {
      en: 'https://bardilaw.com/',
      es: 'https://bardilaw.com/es/',
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
    title: 'Bardi Immigration Law | Abogada de Inmigración',
    description:
      'Bufete boutique de inmigración. Como la ley de inmigración es federal, representamos a clientes en todo el país. Acceso directo a su abogada.',
    url: 'https://bardilaw.com/es/',
    locale: 'es_US',
  },
};

const SERVICES = [
  {
    icon: '⚖️',
    title: 'Inmigración por Beneficios',
    desc: 'Tarjetas de residencia permanente, ciudadanía, DACA, peticiones familiares, visa U, VAWA y más. Le ayudamos a construir un camino claro hacia adelante.',
    href: '/es/services/benefits-based-immigration',
  },
  {
    icon: '🛡️',
    title: 'Defensa contra la Deportación',
    desc: '¿Enfrenta la deportación? Luchamos por usted, dentro y fuera de la detención. Audiencias de fianza, cancelación de la deportación y defensa completa.',
    href: '/es/services/removal-defense',
  },
  {
    icon: '🏛️',
    title: 'Litigios Federales',
    desc: 'Cuando se agotan las opciones administrativas, llevamos su caso a la corte federal. Peticiones de hábeas corpus y mandamus.',
    href: '/es/services/federal-litigation',
  },
];

const DIFFERENTIATORS = [
  {
    label: 'Acceso Directo a Su Abogada',
    desc: 'Usted trabaja directamente con su abogada, no con personal de apoyo, desde su primera consulta hasta el resultado final.',
  },
  {
    label: 'Siempre al Día',
    desc: 'Nos mantenemos al día con cada cambio de política y actualización legal, para que su estrategia refleje la ley como está hoy, no como estaba el año pasado.',
  },
  {
    label: 'Representación Creativa y Compleja',
    desc: 'Aceptamos casos difíciles, los que otros bufetes rechazan. Si existe un camino legal, lo encontraremos.',
  },
  {
    label: 'Usted Es Familia Aquí',
    desc: 'Estamos personalmente comprometidas con su resultado. Su éxito es el nuestro.',
  },
];

const ICP_BARS = [
  {
    q: '¿Busca estatus legal?',
    cta: 'Tarjetas de residencia, peticiones, DACA, visa U y más. →',
    href: '/es/services/benefits-based-immigration',
    urgent: false,
  },
  {
    q: '¿Enfrenta deportación o proceso de expulsión?',
    cta: 'Ayuda inmediata disponible. →',
    href: '/es/services/removal-defense',
    urgent: true,
  },
  {
    q: '¿Un joven sin apoyo familiar?',
    cta: 'SIJS y caminos humanitarios disponibles. →',
    href: '/es/services/sijs',
    urgent: false,
  },
];

export default function HomePageES() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-navy leading-tight mb-6">
                Su Abogada desde el Primer Día.
              </h1>
              {/* Mobile-only headshot: stacks directly under the headline (BAR-617) */}
              <div className="flex justify-center mb-8 lg:hidden">
                <img
                  src="/headshot-eszter-hero.jpg"
                  alt="Abogada Eszter Bardi, Bardi Immigration Law"
                  width={400}
                  height={500}
                  className="rounded-lg h-72 w-auto object-cover shadow-md"
                />
              </div>
              <p className="text-lg text-charcoal/80 mb-8 max-w-prose">
                Cuando su futuro está en juego, merece una abogada de verdad de su lado desde la
                primera llamada, no un formulario de admisión, no un coordinador de casos. En Bardi
                Immigration Law, usted trabaja directamente con su abogada, desde la primera
                conversación hasta la decisión final.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button href="/es/contact" size="lg">Reserve una Consulta</Button>
                <Button href="/es/services" variant="ghost" size="lg">Ver Nuestros Servicios</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold font-sans text-navy border border-warmgray-300 rounded-full px-3 py-1">
                  Acceso Directo a la Abogada
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold font-sans text-navy border border-warmgray-300 rounded-full px-3 py-1">
                  Práctica Boutique
                </span>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/headshot-eszter-hero.jpg"
                alt="Abogada Eszter Bardi, Bardi Immigration Law"
                width={400}
                height={500}
                className="rounded-lg h-96 w-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Trust intro */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-6">
              Manejamos lo que Otros Bufetes Rechazan.
            </h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              El derecho de inmigración no es igual para todos. Cada familia es diferente. Cada caso
              tiene su historia. En Bardi Immigration Law, usted habla directamente con su abogada,
              no con un coordinador de casos, no con un especialista de admisión, no con un asistente
              que transmite sus preguntas. Su caso recibe la atención personal que merece, desde la
              primera llamada hasta la decisión final.
            </p>
          </div>
        </section>

        {/* Services overview */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy">Áreas de Práctica</h2>
              <p className="text-charcoal/70 mt-2">Lo que hacemos y para quién lo hacemos.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <div
                  key={s.href}
                  className="bg-warmgray rounded-lg p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                  <h3 className="font-serif text-xl font-bold text-navy">{s.title}</h3>
                  <p className="text-charcoal/80 text-sm flex-1">{s.desc}</p>
                  <Link href={s.href} className="text-sm font-semibold text-gold hover:underline">
                    Más información →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attorney differentiator */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/headshot-eszter.jpg"
                alt="Abogada Eszter Bardi"
                width={300}
                height={300}
                className="rounded-lg h-80 w-auto object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-2">¿Por Qué Bardi Law?</h2>
              <p className="font-serif text-xl text-charcoal/70 mb-6">Boutique. Personal. Su abogada primero.</p>
              <p className="text-charcoal/80 mb-6">
                Cuando llama, habla con una abogada, no con un especialista de admisión. Tratamos a
                cada cliente como familia.
              </p>
              <Button href="/es/about" variant="ghost">Conocer el Bufete</Button>
            </div>
          </div>
        </section>

        {/* ICP callout bars */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-navy mb-8 text-center">A Quién Servimos</h2>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              {ICP_BARS.map((bar) => (
                <Link
                  key={bar.q}
                  href={bar.href}
                  className={`block px-6 py-5 rounded-lg border-l-4 transition-shadow hover:shadow-md ${
                    bar.urgent
                      ? 'border-gold bg-gold/5'
                      : 'border-navy/20 bg-warmgray'
                  }`}
                >
                  <span className="font-serif text-lg font-semibold text-navy block mb-1">{bar.q}</span>
                  <span className="text-sm text-gold font-semibold font-sans">{bar.cta}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-navy text-center mb-10">
              Credenciales y Afiliaciones
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-2">
                <span className="text-3xl font-serif font-bold text-gold">AILA</span>
                <p className="text-sm font-semibold text-navy font-sans">Presidenta de Capítulo de AILA<br />2025–2026</p>
              </div>
              <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-2">
                <span className="text-3xl font-serif font-bold text-gold">Esq.</span>
                <p className="text-sm font-semibold text-navy font-sans">Abogada Licenciada<br />Miembro en buena reputación</p>
              </div>
              <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-2">
                <span className="text-3xl font-serif font-bold text-gold">EE.UU.</span>
                <p className="text-sm font-semibold text-navy font-sans">Práctica Federal<br />Clientes en todo el país</p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-10">Lo que Nos Distingue</h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
              {DIFFERENTIATORS.map((d) => (
                <div key={d.label} className="flex gap-4">
                  <span className="mt-2 w-2 h-2 min-w-[8px] rounded-full bg-gold" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold font-sans text-navy mb-1">{d.label}</h3>
                    <p className="text-sm text-charcoal/80">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attorney intro teaser */}
        <section className="bg-warmgray py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid lg:grid-cols-[40%_60%] gap-16 items-center">
            <div className="flex items-center justify-center lg:justify-start">
              <div
                className="w-48 h-48 lg:w-52 lg:h-52 rounded-full bg-white flex items-center justify-center text-navy/20 text-xs font-sans text-center"
                aria-hidden="true"
              >
                Foto pendiente
              </div>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-navy">Conozca a la Abogada</p>
              <span className="block w-10 h-0.5 bg-gold mt-3 mb-5" aria-hidden="true" />
              <p className="font-serif text-[22px] text-charcoal">
                Eszter Bardi
              </p>
              <p className="font-sans text-base text-charcoal leading-[1.65] mt-3">
                En Bardi Immigration Law, usted trabaja directamente con su abogada, desde la consulta hasta el resultado. Sin especialistas de admisión. Sin transferencias de caso. Solo representación boutique real.
              </p>
              <a
                href="/es/about"
                className="inline-flex items-center gap-1 mt-5 font-sans font-semibold text-sm text-navy hover:text-gold transition-colors"
              >
                Conocer a la Abogada
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA strip */}
        <section className="bg-navy py-16 lg:py-20 text-center">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-3xl lg:text-[36px] font-bold text-white leading-[1.2] max-w-[600px] mx-auto">
              Comience con una Conversación Real.
            </h2>
            <p className="font-sans text-base text-white/80 mt-3">Una consulta. Su abogada. Sin complicaciones.</p>
            <div className="mt-8">
              <Button href="/es/contact" size="lg">Reserve una Consulta</Button>
            </div>
            <p className="font-sans text-sm text-white/50 mt-4">
              Como la ley de inmigración es federal, representamos a clientes en todo el país.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
