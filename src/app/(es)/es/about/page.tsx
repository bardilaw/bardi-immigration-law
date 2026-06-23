import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Abogada de Inmigración en Atlanta',
  description:
    'Eszter Bardi es una abogada de inmigración con sede en Atlanta y más de una década de experiencia en defensa contra la deportación, litigios federales, inmigración familiar, perdones, alivio humanitario y SIJS. Presidenta del Capítulo de Georgia-Alabama de AILA.',
  alternates: {
    canonical: 'https://bardilaw.com/es/about',
    languages: {
      'x-default': 'https://bardilaw.com/about',
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
        alt: 'Bardi Immigration Law',
      },
    ],
    title: 'Sobre Bardi Immigration Law | Abogada de Inmigración en Atlanta',
    description:
      'Orientación experimentada y defensa dedicada en asuntos complejos de inmigración. Comprometidos con su camino migratorio, enfocados en su futuro.',
    url: 'https://bardilaw.com/es/about',
    locale: 'es_US',
  },
};

const CREDENTIALS = [
  {
    category: 'Admisiones al Colegio de Abogados',
    items: ['Colegio de Abogados de Georgia', 'Colegio de Abogados de Alabama'],
  },
  {
    category: 'Liderazgo',
    items: [
      'Miembro, Asociación Americana de Abogados de Inmigración (AILA)',
    ],
  },
  {
    category: 'Práctica',
    items: ['Práctica federal de inmigración', 'Como la ley de inmigración es federal, representamos a clientes en todo el país'],
  },
  {
    category: 'Idiomas',
    items: ['Inglés', 'Español', 'Húngaro'],
  },
];

function GoldRule() {
  return <div className="w-10 h-[3px] bg-gold mt-3 mb-10" aria-hidden="true" />;
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
                Orientación Experta, Defensa de Confianza.
              </h1>
              <p className="font-sans text-[18px] text-charcoal leading-relaxed max-w-[480px] mb-8">
                Representación experimentada en asuntos complejos de inmigración. Como la ley de inmigración es federal, representamos a clientes en todo el país, con orientación experimentada y defensa dedicada desde su primera consulta hasta el resultado final.
              </p>
              <Button href="/es/contact" size="lg">Programe una Consulta</Button>
            </div>
            <div className="order-first lg:order-last flex items-center justify-center">
              <img
                src="/headshot-eszter-hero.jpg"
                alt="Abogada Eszter Bardi, Bardi Immigration Law"
                width={400}
                height={500}
                className="rounded-lg w-full max-w-[320px] lg:max-w-[400px] h-auto"
              />
            </div>
          </div>
        </section>

        {/* 4.2 Nuestro Equipo — biografía de la abogada */}
        <section className="bg-white py-16 lg:py-20 border-t border-warmgray-200">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <div className="max-w-[720px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">Nuestro Equipo</h2>
              <GoldRule />
              <div className="pl-5 border-l-[3px] border-gold mb-8">
                <p className="font-serif text-[28px] font-bold text-navy leading-snug">
                  Eszter Bardi
                </p>
                <p className="font-sans text-base italic text-charcoal mt-1">
                  Fundadora y Abogada de Inmigración, Bardi Immigration Law
                </p>
              </div>
              <div className="space-y-7">
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Eszter Bardi es la fundadora de Bardi Immigration Law y abogada de inmigración con
                  sede en Atlanta, con más de una década de experiencia legal. Su práctica se centra
                  en asuntos complejos de inmigración, incluyendo defensa contra la deportación,
                  litigios federales de inmigración, inmigración familiar, perdones (waivers), alivio
                  humanitario y casos de Estatus Especial de Inmigrante Juvenil (SIJS).
                </p>
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Reconocida por su enfoque estratégico y centrado en el cliente, Eszter representa a
                  personas y familias que enfrentan algunas de las áreas más difíciles de la ley de
                  inmigración de los EE.UU. Comparece regularmente ante las Cortes de Inmigración de
                  todo el país, la Junta de Apelaciones de Inmigración (BIA), el Servicio de
                  Ciudadanía e Inmigración de los Estados Unidos (USCIS), el Departamento de Estado
                  (DOS), el Servicio de Inmigración y Control de Aduanas (ICE) y ante las Cortes
                  Federales.
                </p>
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Eszter obtuvo su Doctorado en Jurisprudencia (Juris Doctor) de la Facultad de
                  Derecho de la Universidad de Emory y habla español y húngaro con fluidez, además de
                  tener competencia en alemán. Cree que una defensa migratoria eficaz requiere tanto
                  experiencia jurídica técnica como una conexión humana genuina.
                </p>
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Además de su práctica legal, Eszter es conferencista y educadora frecuente en
                  derecho de inmigración. Actualmente se desempeña como Presidenta del Capítulo de
                  Georgia-Alabama de la Asociación Americana de Abogados de Inmigración (AILA), donde
                  trabaja para apoyar a los abogados de inmigración a través de la mentoría, la
                  educación jurídica continua y programas de desarrollo profesional.
                </p>
                <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                  Ya sea defendiendo a un cliente en la corte de inmigración, litigando en una corte
                  federal o ayudando a una familia a navegar el proceso migratorio, Eszter está
                  comprometida a brindar orientación reflexiva, defensa sólida y representación
                  personalizada que reconoce tanto las dimensiones legales como humanas de cada caso.
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

        {/* 4.4 Nuestra Misión */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <div className="max-w-[720px] mx-auto">
              <h2 className="font-serif text-[28px] font-bold text-navy">Nuestra Misión</h2>
              <GoldRule />
              <p className="font-serif text-2xl text-navy leading-[1.4] mb-8">
                Comprometidos con Su Camino Migratorio. Enfocados en Su Futuro.
              </p>
              <p className="font-sans text-[17px] text-charcoal leading-[1.75]">
                En Bardi Immigration Law, estamos comprometidas a acompañar a nuestros clientes en
                cada etapa del proceso de inmigración. Ya sea que busque reunirse con su familia,
                defenderse contra la deportación u obtener protección humanitaria, le brindamos la
                orientación con conocimiento y la defensa dedicada necesarias para navegar
                necesidades complejas. Nos enorgullece nuestro trabajo porque entendemos lo que está
                en juego para las personas y familias que representamos. Su futuro importa.
              </p>
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
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
