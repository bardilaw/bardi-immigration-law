import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada de Procesamiento Consular | Entrevistas de Visa de Inmigrante',
  description:
    'Procesamiento consular para inmigrantes basados en familia o empleo que solicitan una visa de inmigrante en el extranjero. NVC, DS-260, Declaración Jurada de Patrocinio y preparación para la entrevista.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/consular-processing',
    languages: {
      'x-default': 'https://bardilaw.com/services/consular-processing',
      en: 'https://bardilaw.com/services/consular-processing',
      es: 'https://bardilaw.com/es/services/consular-processing',
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
    title: 'Abogada de Procesamiento Consular | Bardi Immigration Law',
    description: 'Procesamiento de visa de inmigrante a través de un consulado de EE. UU. en el extranjero: NVC, DS-260, Declaración Jurada de Patrocinio y preparación para la entrevista.',
    url: 'https://bardilaw.com/es/services/consular-processing',
    locale: 'es_US',
  },
};

export default function ConsularProcessingPageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      homeLabel="Inicio"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="Procesamiento Consular"
      breadcrumbHref="/es/services/consular-processing"
      title="Procesamiento Consular"
      subhead="Cuando la persona que usted patrocina vive fuera de los Estados Unidos, la tarjeta verde se emite a través de un consulado de EE. UU. en el extranjero. El procesamiento consular requiere mucha documentación y la entrevista es decisiva, la preparación cuidadosa es clave."
      qualifyHeading="Quiénes Pueden Calificar"
      qualifyBullets={[
        'Es beneficiario de una petición aprobada o pendiente basada en familia (I-130) o en empleo (I-140)',
        'Se encuentra actualmente fuera de los Estados Unidos, o está dentro pero elige tramitar en el extranjero',
        'Tiene una visa de inmigrante disponible (su fecha de prioridad está vigente en el Boletín de Visas, si aplica)',
        'Es admisible a los Estados Unidos, o es elegible para una exención de cualquier causa de inadmisibilidad',
      ]}
      qualifyDisclaimer="Si debe seguir el procesamiento consular o el ajuste de estatus depende de su situación específica. Le ayudamos a elegir el camino correcto antes de presentar."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Aprobación de la petición', body: 'La petición subyacente (I-130 o I-140) es aprobada por USCIS y enviada al Centro Nacional de Visas (NVC) del Departamento de Estado.' },
        { title: 'Apertura de caso y tarifas del NVC', body: 'El NVC abre su caso, asigna un número de caso y cobra las tarifas de la visa de inmigrante y de la Declaración Jurada de Patrocinio.' },
        { title: 'DS-260 y documentos civiles', body: 'Preparamos la solicitud de visa de inmigrante DS-260 y reunimos los documentos civiles (nacimiento, matrimonio, certificados policiales) y el Formulario I-864 con la evidencia financiera.' },
        { title: 'Documentación completa', body: 'El NVC revisa su envío. Una vez completo, su caso se coloca en lista para una entrevista en el consulado designado.' },
        { title: 'Examen médico y entrevista', body: 'Completa el examen médico con un médico autorizado y asiste a la entrevista de visa de inmigrante. Le preparamos a fondo para lo que el oficial preguntará.' },
        { title: 'Visa emitida e ingreso', body: 'Si es aprobada, la visa de inmigrante se coloca en su pasaporte. Viaja a EE. UU., es admitido como residente permanente y su tarjeta verde llega por correo.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="Un caso consular puede estancarse durante meses por un solo documento faltante o ser denegado por una causa de inadmisibilidad no resuelta. La abogada Bardi gestiona su caso de principio a fin, anticipa los problemas de inadmisibilidad antes de la entrevista y le prepara para que nada en el consulado le tome por sorpresa."
      helpsItems={[
        'Elección entre procesamiento consular y ajuste de estatus',
        'Gestión del caso en el NVC, tarifas y revisión de documentos',
        'Preparación del DS-260 y reunión de documentos civiles',
        'Formulario I-864 (Declaración Jurada de Patrocinio) y estrategia de copatrocinador',
        'Análisis de inadmisibilidad y solicitudes de exención (I-601 / I-601A) cuando se necesiten',
        'Preparación para la entrevista y comunicación directa con la abogada durante todo el proceso',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿Cuál es la diferencia entre el procesamiento consular y el ajuste de estatus?', a: 'El ajuste de estatus permite que los solicitantes elegibles que ya están en EE. UU. obtengan la tarjeta verde sin salir. El procesamiento consular es para quienes están en el extranjero (o eligen tramitar allí) y termina con una entrevista en un consulado de EE. UU. en su país. Cuál corresponde depende de cómo ingresó, dónde está y su perfil de inadmisibilidad; lo analizamos con usted.' },
        { q: '¿Qué es el Centro Nacional de Visas (NVC)?', a: 'El NVC es la oficina del Departamento de Estado que maneja su caso después de que USCIS aprueba la petición y antes de que el consulado programe la entrevista. Cobra tarifas, recibe el DS-260 y sus documentos, y envía el caso al consulado una vez que está completo.' },
        { q: '¿Cuánto tarda el procesamiento consular?', a: 'Los tiempos varían según la categoría de visa, su fecha de prioridad y la carga de trabajo de su consulado. Los casos de familiares inmediatos suelen avanzar más rápido que las categorías de preferencia que esperan un número de visa. Le damos una estimación realista para su situación.' },
        { q: '¿Qué pasa si me declaran inadmisible en la entrevista?', a: 'Ciertas causas, como la presencia ilegal, pueden superarse con una exención. En muchos casos, una exención provisional (I-601A) puede aprobarse antes de salir de EE. UU., reduciendo el tiempo que pasa en el extranjero. Evaluamos el riesgo de inadmisibilidad antes de que viaje, no después.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/family-based-immigration', label: 'Inmigración Familiar', desc: 'Peticiones I-130 y Tarjetas Verdes', learnMore: 'Saber más' },
        { href: '/es/services/waivers', label: 'Renuncias (Waivers)', desc: 'Exenciones de Inadmisibilidad I-601 / I-601A', learnMore: 'Saber más' },
        { href: '/es/services/removal-defense', label: 'Defensa contra la Deportación', desc: 'Defensa en Procesos de Deportación', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a entender sus opciones y a preparar su caso consular de la manera más sólida posible."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
