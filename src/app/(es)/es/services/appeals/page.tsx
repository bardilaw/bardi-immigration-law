import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada de Apelaciones de Inmigración | BIA y AAO',
  description:
    'Apelaciones de decisiones de inmigración: apelaciones ante la BIA desde la corte de inmigración (Formulario EOIR-26), apelaciones ante la AAO de denegaciones de USCIS (Formulario I-290B), y mociones para reabrir o reconsiderar. Los plazos son estrictos.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/appeals',
    languages: {
      'x-default': 'https://bardilaw.com/services/appeals',
      en: 'https://bardilaw.com/services/appeals',
      es: 'https://bardilaw.com/es/services/appeals',
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
    title: 'Abogada de Apelaciones de Inmigración | Bardi Immigration Law',
    description: 'Apelaciones ante la BIA y la AAO, mociones para reabrir y reconsiderar. Una denegación no siempre es el final del camino.',
    url: 'https://bardilaw.com/es/services/appeals',
    locale: 'es_US',
  },
};

export default function AppealsPageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      homeLabel="Inicio"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="Apelaciones"
      breadcrumbHref="/es/services/appeals"
      title="Apelaciones de Inmigración"
      subhead="Una denegación no siempre es el final del camino. Si un juez de inmigración o USCIS decidió en su contra, es posible que pueda apelar, pero los plazos son cortos e inflexibles. Actúe con rapidez."
      statusCalloutTitle="Los plazos son estrictos y rara vez se extienden"
      statusCalloutBody="Una apelación ante la BIA de la decisión de un juez de inmigración debe recibirse dentro de 30 días calendario. Una apelación ante la AAO de una denegación de USCIS generalmente vence dentro de 30 días (33 si la decisión se envió por correo). Perder el plazo normalmente termina sus opciones. Si recibió una decisión adversa, contáctenos de inmediato."
      qualifyHeading="Cuándo Puede Ser Posible una Apelación"
      qualifyBullets={[
        'Un juez de inmigración denegó su caso u ordenó su deportación (apelación ante la Junta de Apelaciones de Inmigración)',
        'USCIS denegó una petición o solicitud que conlleva derecho de apelación (apelación ante la Oficina de Apelaciones Administrativas)',
        'Hay un error legal o de hecho en la decisión, o evidencia importante no se consideró debidamente',
        'Han surgido nuevos hechos o evidencia desde la decisión (moción para reabrir) o la decisión aplicó mal la ley (moción para reconsiderar)',
      ]}
      qualifyDisclaimer="No toda decisión es apelable, y la herramienta correcta, apelación, moción para reabrir o moción para reconsiderar, depende de qué salió mal. Evaluamos su decisión y le aconsejamos sobre la vía más sólida."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Revisar la decisión y el plazo', body: 'Leemos la decisión completa, identificamos los errores que vale la pena plantear y confirmamos el plazo exacto de presentación. Es urgente, así que actuamos rápido.' },
        { title: 'Presentar el aviso de apelación', body: 'Presentamos el formulario correcto, Formulario EOIR-26 para la BIA o Formulario I-290B para la AAO, dentro del plazo, preservando su derecho a ser escuchado.' },
        { title: 'Preparar el escrito legal', body: 'Redactamos un escrito que expone los errores legales, cita el precedente vinculante y explica por qué la decisión debe revertirse o reenviarse.' },
        { title: 'Revisión del expediente y decisión', body: 'La Junta u oficina revisa el expediente y los escritos. Puede confirmar, revertir o devolver el caso (reenvío) para más procedimientos.' },
        { title: 'Revisión adicional si es necesario', body: 'Si la BIA falla en su contra, el siguiente paso puede ser una petición de revisión ante la Corte Federal de Apelaciones. Le aconsejamos si ese paso tiene sentido para su caso.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="El trabajo de apelación se trata de precisión: los temas correctos, la ley vinculante y un expediente que respalde su argumento, todo presentado a tiempo. La abogada Bardi maneja apelaciones y mociones con el rigor que exigen, y es franca con usted sobre las probabilidades realistas antes de que se comprometa."
      helpsItems={[
        'Análisis de la decisión e identificación de errores apelables',
        'Presentación oportuna de la apelación ante la BIA (EOIR-26) o la AAO (I-290B)',
        'Escritos legales persuasivos fundamentados en precedente vinculante',
        'Mociones para reabrir (nuevos hechos o evidencia) y mociones para reconsiderar (error legal)',
        'Coordinación con litigios federales cuando una petición de revisión es el siguiente paso',
        'Comunicación directa con la abogada durante todo el proceso',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿Cuánto tiempo tengo para apelar?', a: 'Una apelación ante la BIA de la decisión de un juez de inmigración debe recibirse dentro de 30 días calendario de la decisión, es un plazo de recepción, no de matasellos. Una apelación ante la AAO de una denegación de USCIS generalmente vence dentro de 30 días (33 si se envió por correo). Como estas ventanas son cortas y rara vez se extienden, contáctenos en cuanto reciba una denegación.' },
        { q: '¿Cuál es la diferencia entre una apelación y una moción para reabrir?', a: 'Una apelación argumenta que la decisión fue incorrecta según el expediente existente. Una moción para reabrir pide a la misma autoridad que vuelva a revisar por nuevos hechos o evidencia, y una moción para reconsiderar argumenta que la decisión aplicó mal la ley. La herramienta correcta depende de qué salió mal; a veces corresponde más de una.' },
        { q: '¿Presentar una apelación ante la BIA detiene mi deportación?', a: 'Una apelación oportuna ante la Junta de Apelaciones de Inmigración generalmente suspende (pausa) la orden de deportación mientras la apelación está pendiente. Esa es una razón por la que presentar a tiempo es tan importante, nos aseguramos de que la apelación se presente correctamente y dentro del plazo.' },
        { q: '¿Qué pasa si la BIA deniega mi apelación?', a: 'Una denegación de la BIA a menudo no es la última palabra. Puede presentar una petición de revisión ante la Corte Federal de Apelaciones de su circuito. Evaluamos si la revisión federal vale la pena y, cuando lo es, podemos llevar el caso adelante.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/removal-defense', label: 'Defensa contra la Deportación', desc: 'Defensa en Procesos de Deportación', learnMore: 'Saber más' },
        { href: '/es/services/federal-litigation', label: 'Litigios Federales', desc: 'Hábeas Corpus y Mandamus en Corte Federal', learnMore: 'Saber más' },
        { href: '/es/services/waivers', label: 'Renuncias (Waivers)', desc: 'Exenciones de Inadmisibilidad I-601 / I-601A', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a entender sus opciones y a presentar la apelación más sólida posible, a tiempo."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
