import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada Visa U Georgia | Protección para Víctimas de Crimen',
  description:
    'La Visa U proporciona estatus migratorio temporal y autorización de empleo a víctimas de crímenes calificados que cooperan con las autoridades.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/u-visa',
    languages: {
      en: 'https://bardilaw.com/services/u-visa',
      es: 'https://bardilaw.com/es/services/u-visa',
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
    title: 'Abogada Visa U Georgia | Bardi Immigration Law',
    description: 'Peticiones de Visa U para víctimas de crimen. GA, AL, NC, SC.',
    url: 'https://bardilaw.com/es/services/u-visa',
    locale: 'es_US',
  },
};

export default function UVisaPageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="Visa U"
      breadcrumbHref="/es/services/u-visa"
      title="Visa U — Protección para Víctimas de Crimen"
      subhead="La Visa U proporciona estatus migratorio temporal y autorización de empleo a víctimas de crímenes calificados que ayudan a las autoridades. Después de tres años, los titulares de Visa U pueden solicitar una tarjeta verde."
      qualifyHeading="Quiénes Pueden Calificar"
      qualifyBullets={[
        'Ha sido víctima de una actividad criminal calificada (incluyendo violencia doméstica, agresión sexual, trata de personas y otros delitos graves)',
        'Ha sufrido abuso físico o mental sustancial como resultado del crimen',
        'Tiene información sobre el crimen',
        'Ha sido, está siendo o es probable que sea útil para las autoridades en la investigación o enjuiciamiento',
        'El crimen violó la ley de EE.UU. o ocurrió en los Estados Unidos',
      ]}
      qualifyDisclaimer="Esta información es solo para fines informativos. La elegibilidad para la Visa U depende de los hechos específicos de su caso. Todos los asuntos se manejan con total confidencialidad."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Obtener certificación policial', body: 'La Visa U requiere una certificación de una agencia de orden público (Suplemento B del Formulario I-918) que confirme su cooperación. Le ayudamos a navegar este proceso.' },
        { title: 'Presentar el Formulario I-918', body: 'Enviar la petición de Visa U (I-918) y documentación de apoyo a USCIS. El límite anual de Visas U significa que los casos pueden ser puestos en lista de espera.' },
        { title: 'Colocación en lista de espera', body: 'Si se alcanza el límite anual (10,000 por año), los peticionarios elegibles son colocados en lista de espera y pueden recibir acción diferida mientras esperan.' },
        { title: 'Visa U aprobada y EAD emitida', body: 'Una vez aprobada, recibe una Visa U de 4 años y autorización de empleo. Sus familiares calificados también pueden ser elegibles para estatus derivado.' },
        { title: 'Elegibilidad para tarjeta verde después de 3 años', body: 'Después de 3 años de presencia continua como titular de Visa U, puede ser elegible para solicitar una tarjeta verde.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="Los casos de Visa U requieren coordinar con las autoridades y construir un registro de evidencia completo. La abogada Bardi maneja cada aspecto del proceso con sensibilidad y discreción — desde obtener la certificación policial hasta presentar y gestionar la petición hasta su aprobación."
      helpsItems={[
        'Evaluación de elegibilidad y estrategia del caso',
        'Coordinación de la certificación policial (I-918B)',
        'Preparación y presentación de la petición I-918',
        'Preparación de petición derivada para familiares calificados',
        'Gestión de lista de espera y solicitudes de acción diferida',
        'Ajuste de estatus después de 3 años',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿Qué crímenes califican para la Visa U?', a: 'Los crímenes calificados incluyen (entre otros) violencia doméstica, agresión sexual, trata de personas, asesinato, homicidio, violación, tortura, incesto, encarcelamiento ilegal, secuestro, extorsión y otros delitos graves. Contáctenos si no está seguro de si su situación califica.' },
        { q: '¿Tengo que testificar en el tribunal?', a: 'Debe ser "útil" para las autoridades, lo que puede incluir cooperar con una investigación, proporcionar una declaración o ayudar en el enjuiciamiento. No se le exige testificar en el juicio.' },
        { q: '¿Qué pasa si la policía no arrestó ni acusó a nadie?', a: 'No es necesario que se hayan presentado cargos para calificar. Lo que importa es que reportó el crimen y cooperó con la investigación.' },
        { q: '¿Cuánto tiempo toma la Visa U?', a: 'Debido a los límites anuales, el procesamiento de la Visa U puede tomar varios años. Sin embargo, los peticionarios en la lista de espera pueden recibir acción diferida (protección contra deportación) y autorización de empleo mientras esperan.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/vawa', label: 'VAWA', desc: 'Ley contra la Violencia contra la Mujer', learnMore: 'Saber más' },
        { href: '/es/services/removal-defense', label: 'Defensa contra la Deportación', desc: 'Defensa en Procesos de Deportación', learnMore: 'Saber más' },
        { href: '/es/services/family-based-immigration', label: 'Inmigración Familiar', desc: 'Peticiones Familiares y Tarjetas Verdes', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a entender sus opciones y a construir el caso más sólido posible."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
