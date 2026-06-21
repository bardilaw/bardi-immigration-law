import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada SIJS | Estatus de Inmigrante Especial Juvenil',
  description:
    'SIJS proporciona un camino hacia la tarjeta verde para niños que han sido abusados, abandonados o descuidados. Representación especializada y sensible a nivel nacional.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/sijs',
    languages: {
      en: 'https://bardilaw.com/services/sijs',
      es: 'https://bardilaw.com/es/services/sijs',
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
    title: 'Abogada SIJS | Bardi Immigration Law',
    description: 'Representación SIJS especializada y sensible. Procesos estatales + federales.',
    url: 'https://bardilaw.com/es/services/sijs',
    locale: 'es_US',
  },
};

export default function SijsPageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="SIJS"
      breadcrumbHref="/es/services/sijs"
      title="Estatus de Inmigrante Especial Juvenil (SIJS)"
      subhead="Un camino hacia la tarjeta verde para niños que han sido abusados, descuidados o abandonados y no pueden ser reunificados con uno o ambos padres de manera segura."
      qualifyHeading="Quiénes Pueden Calificar"
      qualifyBullets={[
        'Tiene menos de 21 años y no está casado/a',
        'Actualmente está en los Estados Unidos',
        'Un tribunal estatal juvenil o de familia ha emitido hallazgos de abuso, negligencia o abandono',
        'La reunificación con uno o ambos padres no es viable debido al abuso, negligencia o abandono',
        'No es en su mejor interés ser devuelto a su país de origen o de último domicilio habitual',
      ]}
      qualifyDisclaimer="La elegibilidad para SIJS es específica a los hechos y requiere tanto un proceso en corte estatal como presentaciones de inmigración federales. La elegibilidad depende de los hechos específicos de su caso."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Procedimientos en la corte estatal', body: 'Obtener una Orden de Hallazgos Especiales de un tribunal estatal juvenil o de familia. Esta orden debe hacer hallazgos específicos sobre abuso, negligencia o abandono e interés superior.' },
        { title: 'Presentar la petición I-360', body: 'Enviar el Formulario I-360 a USCIS con los hallazgos de la corte estatal y documentación de apoyo.' },
        { title: 'Esperar disponibilidad de visa', body: 'SIJS es una categoría de preferencia. Dependiendo del país de nacimiento, un número de visa puede estar disponible de inmediato o requerir espera.' },
        { title: 'Ajuste de estatus', body: 'Una vez que haya un número de visa disponible, presentar ajuste de estatus (I-485) para convertirse en residente permanente legal.' },
        { title: 'Tarjeta verde emitida', body: 'Si es aprobado, recibe su tarjeta verde, estatus de residente permanente legal en los Estados Unidos.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="Los casos de SIJS requieren navegar simultáneamente los sistemas de corte estatal e inmigración federal. La abogada Bardi coordina el trabajo legal en ambas vías, asegurando que se obtengan los hallazgos judiciales requeridos y que la petición federal se prepare correctamente y se presente a tiempo. Este trabajo es sensible, y lo abordamos con el cuidado que merecen los niños y las familias que servimos."
      helpsItems={[
        'Coordinación con la corte estatal y preparación de hallazgos SIJS',
        'Preparación y presentación de la petición I-360',
        'Presentación de ajuste de estatus (I-485)',
        'Representación a través de todo el proceso estatal y federal',
        'Manejo sensible y confidencial en cada etapa',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿Puede usarse SIJS para niños ya en proceso de deportación?', a: 'Sí. SIJS puede ser una defensa contra la deportación para niños elegibles. Si un niño tiene un caso de deportación pendiente, podemos buscar SIJS simultáneamente y solicitar una continuación en la corte de inmigración.' },
        { q: '¿El niño necesita tener un tutor o patrocinador?', a: 'Un procedimiento en corte estatal requiere que el niño esté bajo la jurisdicción de un tribunal juvenil o de familia, lo que normalmente implica un tutor, colocación en familia de acogida o procedimiento de dependencia. Evaluamos la situación específica del niño en la consulta.' },
        { q: '¿Cuánto tiempo toma el proceso de SIJS?', a: 'El plazo varía. El proceso en la corte estatal depende de la jurisdicción y el calendario. El procesamiento federal de la I-360 tarda varios meses. Para algunos países de nacimiento, el ajuste de estatus puede seguir rápidamente; para otros, puede haber espera por un número de visa.' },
        { q: '¿Qué pasa si el niño cumple 21 años durante el proceso?', a: 'Las protecciones contra el vencimiento de edad pueden aplicar. Si se presentó una I-360 antes del 21° cumpleaños del niño, generalmente el niño está protegido de envejecer durante la adjudicación. Evaluamos esto cuidadosamente desde el principio.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/daca', label: 'DACA', desc: 'Acción Diferida para los Llegados en la Infancia', learnMore: 'Saber más' },
        { href: '/es/services/vawa', label: 'VAWA', desc: 'Ley contra la Violencia contra la Mujer', learnMore: 'Saber más' },
        { href: '/es/services/removal-defense', label: 'Defensa contra la Deportación', desc: 'Defensa en Procesos de Deportación', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a entender las opciones disponibles para el niño y a navegar el proceso con el cuidado que merece."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
