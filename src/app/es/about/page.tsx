import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bardi Immigration Law — Abogada de Inmigración en Georgia',
      },
    ],
    title: 'Sobre Bardi Immigration Law | AILA Presidenta del Capítulo Georgia-Alabama',
    description:
      'Práctica boutique. Acceso directo a su abogada. AILA Georgia-Alabama Chapter Chair 2025–26. Sirviendo a GA, AL, NC y SC.',
    url: 'https://bardilaw.com/es/about',
    locale: 'es_US',
  },
};

const CREDENTIALS = [
  {
    category: 'Admisiones al Colegio de Abogados',
    items: ['Colegio de Abogados de Georgia — Miembro en buena reputación', 'Colegio de Abogados de Alabama — Miembro en buena reputación'],
  },
  {
    category: 'Liderazgo',
    items: [
      'Asociación Americana de Abogados de Inmigración (AILA)',
      'Presidenta del Capítulo Georgia-Alabama, 2025–2026',
    ],
  },
  {
    category: 'Áreas de Servicio',
    items: ['Georgia', 'Alabama', 'Carolina del Norte', 'Carolina del Sur'],
  },
  {
    category: 'Idiomas',
    items: ['Inglés', 'Español', 'Húngaro'],
  },
];

const PHILOSOPHY_ITEMS = [
  'Usted habla directamente con su abogada desde el primer día.',
  'Sin especialistas de admisión. Sin transferencias de caso.',
  'Siempre sabrá el estado de su caso.',
];

function GoldRule() {
  return <div className="w-10 h-[3px] bg-gold mt-3 mb-10" aria-hidden="true" />;
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function AboutPageES() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* 4.1 Hero */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-serif text-4xl lg:text-[52px] font-bold text-navy leading-[1.15] mb-4">
                Asesoría Experta, Atención Personal.
              </h1>
              <p className="font-sans text-[18px] text-charcoal leading-relaxed max-w-[480px] mb-8">
                Representación boutique de inmigración en Georgia, Alabama, Carolina del Norte y Carolina del Sur. Usted trabaja con su abogada — desde la primera consulta hasta el resultado final.
              </p>
              <Button href="/es/contact" size="lg">Programe una Consulta</Button>
            </div>
            <div className="order-first lg:order-last flex items-center justify-center">
              <img
                src="/headshot-placeholder-400x500.svg"
                alt="Abogada Eszter Bardi — Bardi Immigration Law"
                width={400}
                height={500}
                className="rounded-lg w-full max-w-[320px] lg:max-w-[400px] h-auto"
              />
            </div>
          </div>
        </section>

        {/* 4.2 Biografía */}
        <section className="bg-white py-16 lg:py-20 border-t border-warmgray-200">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <div className="max-w-[720px] mx-auto">
              <div className="pl-5 border-l-[3px] border-gold mb-8">
                <p className="font-serif text-[28px] font-bold text-navy leading-snug">
                  Eszter Bardi
                </p>
                <p className="font-sans text-base italic text-charcoal mt-1">
                  Abogada de Inmigración, Bardi Immigration Law
                </p>
              </div>
              <div className="space-y-7">
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Bardi Immigration Law es una práctica boutique de inmigración construida sobre una promesa simple:
                  cuando necesita ayuda para navegar el sistema de inmigración de los EE.UU., merece trabajar
                  directamente con su abogada — no con un coordinador de casos, no con un especialista de
                  admisión, no con alguien que transmitirá sus preguntas.
                </p>
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Nuestra práctica sirve a familias e individuos en todo el sureste — principalmente en
                  Georgia, Alabama, Carolina del Norte y Carolina del Sur. Manejamos inmigración por beneficios,
                  defensa contra la deportación y litigios federales cuando se han agotado las opciones administrativas.
                </p>
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Como Presidenta del Capítulo 2025–2026 del Capítulo Georgia-Alabama de la Asociación Americana
                  de Abogados de Inmigración (AILA), nos mantenemos al día con cada cambio de política,
                  actualización de agencia y cambio legal que podría afectar su caso. Aceptamos casos difíciles —
                  los que otros bufetes rechazan. Si existe un camino legal, lo encontraremos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4.3 Credenciales */}
        <section className="bg-warmgray py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-[28px] font-bold text-navy">Credenciales y Afiliaciones</h2>
            <GoldRule />
            <div className="grid sm:grid-cols-2 gap-8 max-w-[720px]">
              {CREDENTIALS.map((cred) => (
                <div
                  key={cred.category}
                  className="bg-white border border-warmgray-200 rounded-lg p-6"
                >
                  <p className="font-sans font-semibold text-xs text-gold uppercase tracking-[0.06em] mb-3">
                    {cred.category}
                  </p>
                  <ul className="list-none p-0 m-0">
                    {cred.items.map((item) => (
                      <li key={item} className="font-sans text-[15px] text-charcoal leading-[1.8] flex items-start gap-2">
                        <span className="text-gold mt-0.5 select-none" aria-hidden="true">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.4 Filosofía */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <div className="max-w-[640px] mx-auto text-center">
              <span
                className="block font-serif text-[80px] text-gold leading-none mb-[-16px]"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="font-serif text-2xl italic text-navy leading-[1.5]">
                Representación creativa, competente y compleja — con la inversión personal de una práctica boutique.
              </blockquote>
            </div>
            <div className="mt-12 max-w-[560px] mx-auto">
              {PHILOSOPHY_ITEMS.map((item) => (
                <div key={item} className="flex items-start gap-3 mb-5">
                  <CheckIcon />
                  <p className="font-sans text-base text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.5 CTA Strip */}
        <section className="bg-navy py-16 lg:py-20 text-center">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-[36px] font-bold text-white leading-[1.2] max-w-[600px] mx-auto">
              ¿Lista/o para hablar sobre su caso?
            </h2>
            <p className="font-sans text-base text-white/80 mt-3">
              Una consulta. Su abogada. Sin complicaciones.
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
