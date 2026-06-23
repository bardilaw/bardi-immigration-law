import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada TPS | Estatus de Protección Temporal',
  description:
    'Registro y re-registro de TPS para nacionales de países designados. Los plazos son estrictos, no los pierda. La abogada Bardi presenta de manera proactiva.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/tps',
    languages: {
      'x-default': 'https://bardilaw.com/services/tps',
      en: 'https://bardilaw.com/services/tps',
      es: 'https://bardilaw.com/es/services/tps',
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
    title: 'Abogada TPS | Bardi Immigration Law',
    description: 'Registro, re-registro de TPS y autorización de empleo para países designados.',
    url: 'https://bardilaw.com/es/services/tps',
    locale: 'es_US',
  },
};

export default function TpsPageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      homeLabel="Inicio"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="TPS"
      breadcrumbHref="/es/services/tps"
      title="Estatus de Protección Temporal (TPS)"
      subhead="Si usted es nacional de un país designado para el Estatus de Protección Temporal, puede ser elegible para protección contra la deportación y autorización de empleo. Los plazos de registro de TPS son estrictos, no los pierda."
      qualifyHeading="Quiénes Pueden Calificar"
      qualifyBullets={[
        'Es nacional de un país actualmente designado para TPS por el Secretario de Seguridad Nacional',
        'Ha estado físicamente presente en los Estados Unidos de manera continua desde la fecha de designación',
        'Ha residido continuamente en los Estados Unidos desde la fecha requerida',
        'No tiene condenas penales que descalifiquen',
        'Presenta durante un período de registro o re-registro abierto',
      ]}
      qualifyDisclaimer="Las designaciones de TPS y los períodos de registro cambian. Contáctenos para confirmar el estado actual de su país y los plazos."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Confirmar elegibilidad y período abierto', body: 'Verificamos la designación actual de TPS de su país y si hay una ventana de registro o re-registro abierta.' },
        { title: 'Recopilar documentación', body: 'Compilar prueba de nacionalidad, presencia continua y residencia. Le guiamos en lo que se requiere para la designación específica de su país.' },
        { title: 'Presentar Formulario I-821 e I-765', body: 'Enviar la solicitud de TPS (I-821) y la solicitud de Autorización de Empleo (I-765) juntos, con todos los documentos de apoyo.' },
        { title: 'Cita de biometría', body: 'USCIS programa una cita de biometría. Le preparamos para lo que puede esperar.' },
        { title: 'TPS y EAD otorgados', body: 'Si es aprobado, recibe estatus TPS y un permiso de trabajo (EAD) válido durante el período de designación actual. Rastreamos su ventana de re-registro.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="Las solicitudes de TPS son sensibles al tiempo y requieren documentación intensiva. La abogada Bardi revisa su situación completa, prepara su paquete de solicitud completamente y rastrea sus ventanas de re-registro, para que nunca pierda un plazo."
      helpsItems={[
        'Evaluación de elegibilidad y confirmación de plazos',
        'Recopilación y revisión de documentación',
        'Preparación y presentación de I-821 e I-765',
        'Seguimiento de re-registro y presentaciones proactivas de renovación',
        'Respuesta a cualquier solicitud de evidencia de USCIS',
        'Comunicación directa con la abogada durante todo el proceso',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿Qué países están actualmente designados para TPS?', a: 'Las designaciones de TPS cambian según las condiciones del país. Los países designados actualmente incluyen (entre otros) El Salvador, Haití, Honduras, Nepal, Nicaragua, Somalia, Sudán, Sudán del Sur, Siria, Ucrania y Venezuela. Confirmamos el estado actual en su consulta.' },
        { q: '¿TPS me da un camino hacia una tarjeta verde?', a: 'El TPS en sí mismo no proporciona un camino directo a la residencia permanente. Sin embargo, algunos titulares de TPS pueden ser elegibles para tarjetas verdes a través de relaciones familiares, empleo u otras vías. Evaluamos sus opciones individualmente.' },
        { q: '¿Qué pasa si perdí un plazo de re-registro?', a: 'El re-registro tardío puede ser posible durante ciertos períodos. Si perdió un plazo, contáctenos de inmediato, todavía puede haber opciones disponibles según su situación.' },
        { q: '¿Puedo viajar fuera de los Estados Unidos con TPS?', a: 'Los titulares de TPS pueden ser elegibles para la libertad de viajar anticipada. Sin embargo, el viaje conlleva riesgo. Le asesoramos sobre si el viaje es aconsejable según su situación específica antes de reservar algo.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/daca', label: 'DACA', desc: 'Acción Diferida para los Llegados en la Infancia', learnMore: 'Saber más' },
        { href: '/es/services/family-based-immigration', label: 'Inmigración Familiar', desc: 'Peticiones Familiares y Tarjetas Verdes', learnMore: 'Saber más' },
        { href: '/es/services/removal-defense', label: 'Defensa contra la Deportación', desc: 'Defensa en Procesos de Deportación', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a entender sus opciones y a no perder ningún plazo importante."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
