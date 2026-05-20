import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada Perdones Migratorios Georgia | I-601, I-212, I-929',
  description:
    'Perdones migratorios por presencia ilegal, deportación previa y perdones derivados. La abogada Bardi construye la solicitud de perdón más sólida posible para su caso.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/waivers',
    languages: {
      en: 'https://bardilaw.com/services/waivers',
      es: 'https://bardilaw.com/es/services/waivers',
    },
  },
  openGraph: {
    title: 'Abogada Perdones Migratorios Georgia | Bardi Immigration Law',
    description: 'Perdones I-601, I-212 e I-929. GA, AL, NC, SC.',
    url: 'https://bardilaw.com/es/services/waivers',
    locale: 'es_US',
  },
};

export default function WaiversPageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="Perdones"
      breadcrumbHref="/es/services/waivers"
      title="Perdones Migratorios (Waivers)"
      subhead="Un perdón migratorio le pide al gobierno que perdone un motivo de inadmisibilidad que de otro modo le impediría obtener una visa o tarjeta verde. Ya sea por presencia ilegal, deportación previa u otro motivo — una solicitud de perdón bien construida es su camino a seguir."
      qualifyHeading="Perdones Comunes que Manejamos"
      qualifyBullets={[
        'I-601 (Perdón por Presencia Ilegal) — para personas que acumularon presencia ilegal y buscan visa o tarjeta verde',
        'I-601A (Perdón Provisional por Presencia Ilegal) — permite a personas elegibles solicitar el perdón antes de salir de EE.UU.',
        'I-212 (Permiso para Reaplikar Después de Deportación) — para personas que fueron deportadas previamente',
        'I-929 (Perdón Derivado) — para familiares calificados de titulares de Visa U',
        'Otros perdones de inadmisibilidad basados en motivos específicos',
      ]}
      qualifyDisclaimer="La elegibilidad y estrategia de perdón dependen en gran medida del motivo específico de inadmisibilidad y los hechos de su caso. La abogada Bardi revisa su historial completo antes de asesorar sobre opciones de perdón."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Evaluación completa del caso', body: 'Revisamos su historial migratorio, motivos de inadmisibilidad y familiares calificados para determinar qué perdón(es) aplican y la fortaleza de su caso.' },
        { title: 'Recopilar evidencia de dificultad extrema', body: 'La mayoría de los perdones requieren demostrar "dificultad extrema" para un familiar ciudadano estadounidense o LPR calificado. Le ayudamos a construir el caso de dificultad más sólido posible.' },
        { title: 'Redactar el paquete de perdón', body: 'Un paquete completo incluye un escrito legal, declaraciones personales, declaraciones de apoyo y evidencia documental. Preparamos cada componente.' },
        { title: 'Presentar ante USCIS o en el consulado', body: 'Según el tipo de perdón, la presentación puede ocurrir ante USCIS en EE.UU., en un consulado o antes de una entrevista consular.' },
        { title: 'Decisión y próximos pasos', body: 'Si es aprobado, procede con el beneficio migratorio subyacente. Si es negado, evaluamos opciones de apelación y reconsideración.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="Los perdones dependen de la calidad de la evidencia de dificultad y el escrito legal. La abogada Bardi ha construido paquetes de perdón para casos complejos — incluyendo aquellos con múltiples motivos de inadmisibilidad y presencia ilegal prolongada. No dejamos nada al azar."
      helpsItems={[
        'Análisis completo de inadmisibilidad y estrategia',
        'Recopilación y presentación de evidencia de dificultad extrema',
        'Redacción de escrito legal y declaración personal',
        'Coordinación de declaraciones de apoyo',
        'Presentación y coordinación con USCIS/consulado',
        'Respuesta a solicitudes de evidencia o materiales adicionales',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿Qué es la "dificultad extrema" y cómo la demuestro?', a: '"Dificultad extrema" significa una dificultad más allá de lo que normalmente se espera de la deportación o salida de un familiar. Debe demostrarse a un familiar ciudadano estadounidense o LPR calificado. La evidencia puede incluir dependencia financiera, condiciones médicas, informes de condiciones del país, necesidades de los hijos y más.' },
        { q: '¿Cuánto tiempo toma un perdón?', a: 'Los perdones provisionales I-601A típicamente tardan 6 a 12 meses en ser adjudicados. Otros perdones varían. Proporcionamos estimados actuales en su consulta.' },
        { q: '¿Qué pasa si niegan mi perdón?', a: 'Las negaciones de perdón a menudo pueden apelarse o volver a presentarse con evidencia más sólida. Evaluamos el aviso de negación, identificamos el motivo y asesoramos sobre el mejor camino a seguir.' },
        { q: '¿Puedo quedarme en EE.UU. mientras el perdón está pendiente?', a: 'Depende del tipo de perdón. Los perdones provisionales I-601A están diseñados para permitir a los solicitantes permanecer en EE.UU. hasta que el perdón sea aprobado antes de salir para una entrevista consular. Estructuramos el proceso para minimizar su tiempo fuera del país.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/family-based-immigration', label: 'Inmigración Familiar', desc: 'Peticiones Familiares y Tarjetas Verdes', learnMore: 'Saber más' },
        { href: '/es/services/removal-defense', label: 'Defensa contra la Deportación', desc: 'Defensa en Procesos de Deportación', learnMore: 'Saber más' },
        { href: '/es/services/federal-litigation', label: 'Litigios Federales', desc: 'Casos de Inmigración en Tribunales Federales', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a entender sus opciones y a construir el caso más sólido posible."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
