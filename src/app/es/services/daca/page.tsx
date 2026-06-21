import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada DACA Georgia | Acción Diferida para los Llegados en la Infancia',
  description:
    'Solicitudes iniciales y renovaciones de DACA. Con licencia en Georgia y Alabama. Como la ley de inmigración es federal, representamos a clientes en todo el país. La abogada Bardi revisa su historial completo antes de presentar.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/daca',
    languages: {
      en: 'https://bardilaw.com/services/daca',
      es: 'https://bardilaw.com/es/services/daca',
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
    title: 'Abogada DACA Georgia | Bardi Immigration Law',
    description: 'Solicitudes y renovaciones DACA. Revisión directa de la abogada. Con licencia en Georgia y Alabama.',
    url: 'https://bardilaw.com/es/services/daca',
    locale: 'es_US',
  },
};

export default function DacaPageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="DACA"
      breadcrumbHref="/es/services/daca"
      title="DACA"
      subhead="Renovaciones de DACA para beneficiarios existentes. Consultas iniciales disponibles para personas que han tenido DACA anteriormente o que desean entender sus opciones."
      statusCalloutTitle="Estado actual de DACA (desde 2025):"
      statusCalloutBody="Debido a litigios federales en curso, USCIS no está aprobando actualmente nuevas solicitudes iniciales de DACA para personas que nunca han tenido DACA. Las renovaciones para los beneficiarios existentes continúan. Le asesoraremos sobre sus opciones actuales en la consulta."
      qualifyHeading="Quiénes Pueden Calificar"
      qualifyBullets={[
        'Tenía menos de 31 años el 15 de junio de 2012',
        'Llegó a los Estados Unidos antes de cumplir 16 años',
        'Ha residido continuamente en los Estados Unidos desde el 15 de junio de 2007',
        'Estaba presente en los Estados Unidos el 15 de junio de 2012',
        'Actualmente está en la escuela, tiene diploma de escuela secundaria o GED, o es veterano con baja honorable',
        'No ha sido condenado por un delito grave o falta significativa',
      ]}
      qualifyDisclaimer="Esta información es solo para fines informativos. La elegibilidad depende de los hechos específicos de su caso."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Presentar el Formulario I-821D', body: 'Enviar la solicitud de DACA y el Formulario I-765 (Autorización de Empleo) junto con toda la documentación requerida.' },
        { title: 'Cita de biometría', body: 'USCIS programará su cita de biometría para recopilar huellas digitales y fotos. Normalmente 2 a 4 semanas después de presentar.' },
        { title: 'Revisión de USCIS', body: 'Los tiempos de procesamiento varían. Estimados actuales disponibles en la consulta. Monitoreamos su caso y respondemos a cualquier RFE.' },
        { title: 'Decisión y tarjeta EAD', body: 'Si es aprobado, recibe un Documento de Autorización de Empleo (permiso de trabajo) de 2 años y estatus DACA.' },
        { title: 'Renovación', body: 'DACA debe renovarse cada 2 años. Rastreamos su ventana de renovación y presentamos de manera proactiva.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="Las solicitudes de DACA requieren precisión. Cada documento de apoyo importa. La abogada Bardi revisa su historial completo del caso, prepara un paquete completo y maneja toda la correspondencia con USCIS directamente — para que nunca quede sin respuesta."
      helpsItems={[
        'Evaluación inicial del caso y revisión de elegibilidad',
        'Preparación y presentación del Formulario I-821D e I-765',
        'Respuesta a Solicitudes de Evidencia (RFE)',
        'Seguimiento y presentación proactiva de renovaciones',
        'Comunicación directa con la abogada durante todo el proceso',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿Cuánto tiempo toma el proceso de renovación de DACA?', a: 'Los tiempos de procesamiento actualmente van de varios meses a más de un año. Presentamos su renovación anticipadamente — normalmente 5 a 6 meses antes del vencimiento de su EAD — para reducir brechas en la autorización de empleo.' },
        { q: 'Tuve DACA antes pero lo dejé vencer. ¿Puedo volver a solicitarlo?', a: 'En la mayoría de los casos, sí. Los beneficiarios anteriores cuyo estatus venció pueden ser elegibles para solicitar DACA inicial nuevamente. Los requisitos son los mismos que para una solicitud por primera vez.' },
        { q: '¿DACA me da un camino hacia una tarjeta verde?', a: 'DACA no proporciona un camino directo a la residencia permanente por sí solo. Sin embargo, algunos beneficiarios de DACA pueden ser elegibles para tarjetas verdes a través del matrimonio, patrocinio familiar u otras vías. Evaluamos cada caso individualmente.' },
        { q: '¿Qué sucede si USCIS envía un RFE?', a: 'Una Solicitud de Evidencia no es una negación. Respondemos a todos los RFE directamente — redactando la respuesta, compilando documentación de apoyo y presentándola en su nombre.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/tps', label: 'TPS', desc: 'Estatus de Protección Temporal', learnMore: 'Saber más' },
        { href: '/es/services/vawa', label: 'VAWA', desc: 'Ley contra la Violencia contra la Mujer', learnMore: 'Saber más' },
        { href: '/es/services/family-based-immigration', label: 'Inmigración Familiar', desc: 'Peticiones Familiares y Tarjetas Verdes', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a entender sus opciones y a construir el caso más sólido posible."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
