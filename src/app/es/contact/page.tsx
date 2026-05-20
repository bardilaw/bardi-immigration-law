import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactFormES } from '@/components/ContactFormES';

export const metadata: Metadata = {
  title: 'Contacto | Programe una Consulta',
  description:
    'Programe su consulta directamente con la abogada. Sirviendo a Georgia, Carolina del Norte, Carolina del Sur y Alabama. Sin intermediarios — hable directamente con la abogada.',
  alternates: {
    canonical: 'https://bardilaw.com/es/contact',
    languages: {
      en: 'https://bardilaw.com/contact',
      es: 'https://bardilaw.com/es/contact',
    },
  },
  openGraph: {
    title: 'Contacto | Bardi Immigration Law',
    description:
      'Programe su consulta directamente con la abogada. Sirviendo a GA, NC, SC y AL.',
    url: 'https://bardilaw.com/es/contact',
    locale: 'es_US',
  },
};

const STEPS = [
  {
    n: '1',
    heading: 'Formulario recibido',
    desc: 'Confirmamos la recepción en minutos.',
  },
  {
    n: '2',
    heading: 'La abogada revisa',
    desc: 'No un especialista de admisión — la abogada revisa su situación.',
  },
  {
    n: '3',
    heading: 'Llamada personal',
    desc: 'Nos comunicaremos con usted dentro de 24 horas.',
  },
];

export default function ContactPageES() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-white py-16">
          <div className="max-w-site mx-auto px-5 lg:px-8 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Programe su Consulta
            </h1>
            <p className="text-lg text-charcoal/80 max-w-xl mx-auto">
              Las decisiones de inmigración tienen consecuencias reales. Complete el formulario y
              una abogada se comunicará con usted dentro de 24 horas.
            </p>
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="bg-warmgray py-12">
          <div className="max-w-site mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-lg p-6 lg:p-8">
              <h2 className="font-serif text-xl font-bold text-navy mb-6">Programe Su Consulta</h2>
              <p className="text-sm text-charcoal/70 mb-6">
                Complete el formulario a continuación y nos comunicaremos dentro de un día hábil
                para programar su consulta.
              </p>
              <ContactFormES />
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              <div className="bg-white rounded-lg p-6">
                <h2 className="font-serif text-xl font-bold text-navy mb-4">
                  ¿Qué Ocurre en una Consulta?
                </h2>
                <p className="text-sm text-charcoal/70 mb-4">
                  Su consulta es una conversación directa con Eszter Bardi — no un formulario de
                  selección ni un centro de llamadas.
                </p>
                <ul className="text-sm text-charcoal/80 space-y-2">
                  <li className="flex gap-2"><span className="text-gold" aria-hidden="true">✓</span> Compartirá los hechos clave de su situación</li>
                  <li className="flex gap-2"><span className="text-gold" aria-hidden="true">✓</span> Sabrá si su caso está dentro de nuestras áreas de práctica</li>
                  <li className="flex gap-2"><span className="text-gold" aria-hidden="true">✓</span> Recibirá la evaluación honesta de la abogada</li>
                  <li className="flex gap-2"><span className="text-gold" aria-hidden="true">✓</span> Entenderá cómo es el proceso y qué sigue después</li>
                </ul>
                <p className="text-xs text-charcoal/50 mt-3 font-sans">
                  Consultas disponibles en inglés, español y húngaro.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-serif text-lg font-bold text-navy mb-4">
                  Lo que Ocurre Después de Enviar
                </h3>
                <ol className="flex flex-col gap-5">
                  {STEPS.map((s) => (
                    <li key={s.n} className="flex gap-4">
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white text-sm font-bold font-sans flex items-center justify-center"
                        aria-hidden="true"
                      >
                        {s.n}
                      </span>
                      <div>
                        <p className="font-semibold text-navy font-sans text-sm">{s.heading}</p>
                        <p className="text-charcoal/70 text-sm">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Direct contact */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-serif text-lg font-bold text-navy mb-3">¿Prefiere contactarnos directamente?</h3>
                <ul className="flex flex-col gap-3 text-sm">
                  <li>
                    <a
                      href="tel:+1"
                      className="flex items-center gap-2 text-navy hover:text-gold transition-colors font-sans"
                    >
                      <span aria-hidden="true">📞</span>
                      <span>[Teléfono — por confirmar]</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@bardilaw.com"
                      className="flex items-center gap-2 text-navy hover:text-gold transition-colors font-sans"
                    >
                      <span aria-hidden="true">✉️</span>
                      <span>info@bardilaw.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
