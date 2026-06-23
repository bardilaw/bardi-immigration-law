import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada de Parole | Parole-in-Place y Advance Parole',
  description:
    'Parole-in-Place para familias de militares y Advance Parole (permiso adelantado de viaje) para solicitantes con casos pendientes (ajuste de estatus, DACA, TPS). Formulario I-131, con una abogada de inmigración.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/parole',
    languages: {
      'x-default': 'https://bardilaw.com/services/parole',
      en: 'https://bardilaw.com/services/parole',
      es: 'https://bardilaw.com/es/services/parole',
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
    title: 'Abogada de Parole | Bardi Immigration Law',
    description: 'Parole-in-Place para familias de militares y Advance Parole para viajar con casos pendientes. Formulario I-131.',
    url: 'https://bardilaw.com/es/services/parole',
    locale: 'es_US',
  },
};

export default function ParolePageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      homeLabel="Inicio"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="Parole-in-Place y Advance Parole"
      breadcrumbHref="/es/services/parole"
      title="Parole-in-Place y Advance Parole"
      subhead="El parole es una herramienta poderosa pero técnica. El Parole-in-Place puede dar a las familias de militares una base legal para una tarjeta verde; el Advance Parole permite a personas con casos pendientes viajar y regresar. Usados incorrectamente, cualquiera puede salir mal, por eso los detalles importan."
      qualifyHeading="Dos Herramientas Distintas"
      qualifyBullets={[
        'Parole-in-Place (PIP): es cónyuge, padre/madre, hijo o hija de un miembro del servicio militar de EE. UU., veterano o ciertos reclutas, e ingresó a EE. UU. sin inspección',
        'El Parole-in-Place puede crear la "entrada" legal que podría permitir el ajuste de estatus sin salir del país',
        'Advance Parole: tiene un ajuste de estatus pendiente (I-485), DACA o TPS y necesita viajar al extranjero y regresar',
        'El Advance Parole debe aprobarse antes de salir, partir sin él puede abandonar su caso pendiente',
      ]}
      qualifyDisclaimer="Los programas y políticas de parole cambian, y el viaje siempre conlleva cierto riesgo. Hable con nosotros antes de presentar, y nunca viaje con un caso pendiente sin confirmar que es seguro."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Determinar qué parole aplica', body: 'Confirmamos si su situación requiere Parole-in-Place (familia militar) o Advance Parole (viaje con un caso pendiente), y si el parole es la decisión correcta.' },
        { title: 'Construir la solicitud', body: 'Para el PIP, reunimos prueba de la relación militar calificada y sus equidades. Para el Advance Parole, documentamos el caso pendiente y el motivo del viaje.' },
        { title: 'Presentar el Formulario I-131', body: 'Presentamos la Solicitud de Documento de Viaje (Formulario I-131) con la evidencia correcta para su categoría.' },
        { title: 'Biometría y adjudicación', body: 'USCIS puede programar biometría y luego revisa la solicitud. Damos seguimiento al caso y respondemos a cualquier solicitud de evidencia.' },
        { title: 'Aprobación y próximos pasos', body: 'Para el PIP, una aprobación puede abrir la puerta al ajuste de estatus. Para el Advance Parole, el documento le permite viajar y solicitar el reingreso, le informamos los riesgos antes de que reserve algo.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="El parole se encuentra en la intersección de la política y el riesgo, una presentación equivocada, o un viaje equivocado, puede dañar un caso que de otro modo se ganaría. La abogada Bardi evalúa si el parole le ayuda, lo presenta correctamente y le da consejos francos sobre el viaje antes de que se comprometa."
      helpsItems={[
        'Determinar si corresponde Parole-in-Place o Advance Parole para su caso',
        'Solicitudes de Parole-in-Place para familias de militares calificadas',
        'Documentos de viaje Advance Parole para ajuste, DACA y TPS pendientes',
        'Preparación del Formulario I-131 y reunión de evidencia',
        'Asesoría sobre el riesgo del viaje antes de cualquier salida',
        'Coordinación del parole con su estrategia de ajuste de estatus',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿Cuál es la diferencia entre Parole-in-Place y Advance Parole?', a: 'El Parole-in-Place concede parole a ciertas personas que ya están en EE. UU. (más comúnmente familiares de militares que ingresaron sin inspección), lo que puede crear una entrada legal para el ajuste de estatus. El Advance Parole es un documento de viaje que permite a alguien con un caso pendiente (ajuste, DACA o TPS) salir de EE. UU. y solicitar el reingreso. Sirven para propósitos diferentes.' },
        { q: '¿El Parole-in-Place puede ayudarme a obtener una tarjeta verde?', a: 'Para muchos familiares de militares que ingresaron sin inspección, una concesión de Parole-in-Place proporciona la "entrada" legal que puede hacer posible el ajuste de estatus sin salir del país. Si funciona en su caso depende de su historial completo, que revisamos con cuidado.' },
        { q: '¿Es seguro viajar con Advance Parole?', a: 'El Advance Parole le permite solicitar el reingreso, pero no es una garantía absoluta de admisión, y el viaje puede conllevar riesgos reales según su historial migratorio. Evaluamos su situación específica y le aconsejamos antes de que haga cualquier plan de viaje.' },
        { q: 'Escuché sobre un programa para cónyuges de ciudadanos de EE. UU., ¿puedo usarlo?', a: 'Los programas de parole van y vienen y se litigan con frecuencia; algunos programas anunciados han sido bloqueados o anulados por los tribunales. Le diremos exactamente qué está disponible y es legal para su situación en este momento, en lugar de depender de un programa que quizás ya no esté en vigor.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/family-based-immigration', label: 'Inmigración Familiar', desc: 'Peticiones I-130 y Tarjetas Verdes', learnMore: 'Saber más' },
        { href: '/es/services/daca', label: 'DACA', desc: 'Acción Diferida para los Llegados en la Infancia', learnMore: 'Saber más' },
        { href: '/es/services/tps', label: 'TPS', desc: 'Estatus de Protección Temporal', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a entender si el parole le conviene y a presentarlo correctamente."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
