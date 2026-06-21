import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada Inmigración Familiar Georgia | Tarjetas Verdes y Peticiones Familiares',
  description:
    'Tarjetas verdes familiares, peticiones I-130, naturalización y ajuste de estatus. Con licencia en Georgia y Alabama. Como la ley de inmigración es federal, representamos a clientes en todo el país. Representación directa de la abogada desde la petición hasta la aprobación.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/family-based-immigration',
    languages: {
      en: 'https://bardilaw.com/services/family-based-immigration',
      es: 'https://bardilaw.com/es/services/family-based-immigration',
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
    title: 'Inmigración Familiar Georgia | Bardi Immigration Law',
    description: 'Peticiones I-130, tarjetas verdes, ajuste de estatus y naturalización. Con licencia en Georgia y Alabama.',
    url: 'https://bardilaw.com/es/services/family-based-immigration',
    locale: 'es_US',
  },
};

export default function FamilyBasedPageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="Inmigración Familiar"
      breadcrumbHref="/es/services/family-based-immigration"
      title="Inmigración Familiar"
      subhead="Si tiene un familiar ciudadano estadounidense o residente permanente legal, puede tener un camino hacia una tarjeta verde. Guiamos a las familias a través de todo el proceso — desde la petición inicial hasta la residencia permanente y más allá."
      qualifyHeading="Quiénes Pueden Ser Patrocinados"
      qualifyBullets={[
        'Cónyuges de ciudadanos estadounidenses (pariente inmediato — sin espera de visa)',
        'Hijos solteros menores de 21 años de ciudadanos estadounidenses (pariente inmediato)',
        'Padres de ciudadanos estadounidenses (pariente inmediato)',
        'Hijos adultos de ciudadanos estadounidenses (categoría de preferencia)',
        'Hermanos de ciudadanos estadounidenses (categoría de preferencia — espera más larga)',
        'Cónyuges e hijos de residentes permanentes legales (categoría de preferencia)',
      ]}
      qualifyDisclaimer="Esta información es solo para fines informativos. Las fechas de prioridad y los tiempos de procesamiento varían según la categoría y el país de nacimiento. Evaluamos los tiempos de espera actuales en su consulta."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Presentar el Formulario I-130', body: 'El familiar patrocinador presenta una petición que establece la relación calificadora. USCIS revisa y aprueba la petición.' },
        { title: 'Esperar disponibilidad de visa (si aplica)', body: 'Los parientes inmediatos de ciudadanos estadounidenses no esperan un número de visa. Otras categorías de preferencia familiar deben esperar hasta que haya un número de visa disponible según la fecha de prioridad y el país de nacimiento.' },
        { title: 'Ajuste de estatus o procesamiento consular', body: 'Si el beneficiario está en EE.UU., puede solicitar ajuste de estatus (I-485). Si está en el extranjero, el caso procede a través de un consulado de EE.UU. vía el Centro Nacional de Visas.' },
        { title: 'Examen médico y biometría', body: 'USCIS o el consulado requiere un examen médico por un médico civil aprobado, más biometría para verificación de identidad.' },
        { title: 'Entrevista y tarjeta verde emitida', body: 'La mayoría de los casos de tarjeta verde requieren una entrevista en USCIS o el consulado. Si es aprobada, se emite la tarjeta verde — normalmente una tarjeta condicional de 2 años para matrimonios recientes, luego una tarjeta de 10 años.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="Los casos de inmigración familiar requieren documentación precisa y un cronograma cuidadoso. La abogada Bardi gestiona cada paso — preparando paquetes de petición completos y precisos, rastreando fechas de prioridad, preparándole para su entrevista y asegurando que nada se pierda."
      helpsItems={[
        'Preparación y presentación de la petición I-130',
        'Paquetes de ajuste de estatus (I-485)',
        'Procesamiento consular y coordinación con el NVC',
        'Preparación para la entrevista y acompañamiento donde se permita',
        'Eliminación de condiciones en tarjeta verde condicional (I-751)',
        'Naturalización (N-400) cuando sea elegible',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿Cuánto tiempo toma el proceso de tarjeta verde familiar?', a: 'Los parientes inmediatos de ciudadanos estadounidenses (cónyuges, hijos menores de 21, padres) no esperan un número de visa — los casos normalmente tardan 12 a 24 meses desde la presentación. Otras categorías familiares pueden esperar años según la categoría y el país de nacimiento. Proporcionamos estimados actuales en la consulta.' },
        { q: 'Mi cónyuge está en EE.UU. sin estatus. ¿Puede obtener una tarjeta verde?', a: 'En muchos casos, sí — los cónyuges de ciudadanos estadounidenses pueden ser elegibles para ajuste de estatus independientemente de cómo ingresaron. Sin embargo, hay excepciones y posibles barreras. Revisamos su situación específica cuidadosamente antes de asesorar.' },
        { q: '¿Qué es una tarjeta verde condicional?', a: 'Si una pareja lleva casada menos de 2 años cuando se aprueba la tarjeta verde, el beneficiario recibe una tarjeta verde condicional de 2 años. Antes de que venza, la pareja debe presentar una petición conjunta (I-751) para eliminar las condiciones y recibir una tarjeta completa de 10 años.' },
        { q: '¿Cuándo puedo solicitar la ciudadanía?', a: 'La mayoría de los titulares de tarjeta verde pueden solicitar la naturalización después de 5 años de residencia permanente. Los cónyuges de ciudadanos estadounidenses pueden calificar después de 3 años. Le asesoramos sobre elegibilidad en su consulta.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/waivers', label: 'Perdones', desc: 'Perdones I-601, I-212 y Otros', learnMore: 'Saber más' },
        { href: '/es/services/vawa', label: 'VAWA', desc: 'Ley contra la Violencia contra la Mujer', learnMore: 'Saber más' },
        { href: '/es/services/removal-defense', label: 'Defensa contra la Deportación', desc: 'Defensa en Procesos de Deportación', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a unir a su familia y a navegar el proceso de inmigración familiar."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
