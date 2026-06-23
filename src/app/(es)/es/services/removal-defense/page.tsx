import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada Defensa contra la Deportación | Defensa en Procesos de Remoción',
  description:
    'Enfrentando deportación o procesos de remoción? Bardi Immigration Law proporciona defensa completa, detenidos y no detenidos. Como la ley de inmigración es federal, representamos a clientes en todo el país.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/removal-defense',
    languages: {
      'x-default': 'https://bardilaw.com/services/removal-defense',
      en: 'https://bardilaw.com/services/removal-defense',
      es: 'https://bardilaw.com/es/services/removal-defense',
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
    title: 'Defensa contra la Deportación | Bardi Immigration Law',
    description: 'Defensa completa contra la deportación, detenidos y no detenidos. Audiencias de fianza y representación completa.',
    url: 'https://bardilaw.com/es/services/removal-defense',
    locale: 'es_US',
  },
};

export default function RemovalDefensePageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      homeLabel="Inicio"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="Defensa contra la Deportación"
      breadcrumbHref="/es/services/removal-defense"
      title="Defensa contra la Deportación"
      subhead="Si ha recibido un Aviso de Comparecencia (NTA) o está en detención migratoria, necesita un abogado de inmediato. Brindamos representación completa en procesos de deportación, para clientes detenidos y no detenidos."
      qualifyHeading="Cuándo Necesita Defensa contra la Deportación"
      qualifyBullets={[
        'Ha recibido un Aviso de Comparecencia (NTA) para la corte de inmigración',
        'Actualmente está en detención migratoria',
        'Ha sido ordenado deportado en ausencia (sin comparecer en la corte)',
        'Enfrenta remoción reinstaurada basada en una orden previa',
        'ICE ha emitido una detención o está intentando arrestarle o deportarle',
        'Tiene una orden final de remoción y necesita explorar opciones',
      ]}
      qualifyDisclaimer="Los procesos de deportación avanzan rápidamente. Si ha recibido algún aviso de corte de inmigración o fue detenido, contáctenos de inmediato."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Consulta de emergencia', body: 'Evaluamos su situación de inmediato, incluyendo si está detenido, su fecha de corte y los motivos de deportación. El tiempo es crítico.' },
        { title: 'Audiencia de fianza (si está detenido)', body: 'Si está en detención, solicitamos una audiencia de fianza para pedir su liberación. Argumentamos por la fianza más baja posible basada en sus vínculos con la comunidad.' },
        { title: 'Audiencia maestra de calendario', body: 'Esta es una comparecencia inicial ante el juez de inmigración. Le representamos, entramos alegatos y programamos el caso para una audiencia completa.' },
        { title: 'Construir el caso de defensa', body: 'Identificamos cada defensa disponible, cancelación de remoción, asilo, retención, protección CAT, salida voluntaria, ajuste de estatus, y construimos el caso más sólido para alivio.' },
        { title: 'Audiencia de méritos individuales', body: 'Presentamos su caso ante el juez de inmigración. Examinamos testigos, introducimos evidencia y hacemos argumentos legales para alivio de remoción.' },
        { title: 'Apelaciones si es necesario', body: 'Si el juez de inmigración niega el alivio, evaluamos opciones de apelación ante la BIA. Si se agotan los recursos administrativos, evaluamos opciones en corte federal.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="Los procesos de deportación son adversariales, el gobierno busca deportarle, y las reglas son estrictas e implacables. La abogada Bardi trae una defensa completa y experimentada a su caso, desde la primera audiencia de fianza hasta la decisión final. Luchamos por usted."
      helpsItems={[
        'Consultas de emergencia y representación de clientes detenidos',
        'Audiencias de fianza y defensa en detención migratoria',
        'Preparación y representación completa en audiencia de méritos',
        'Solicitudes de cancelación de remoción',
        'Reclamaciones de asilo, retención y protección CAT',
        'Apelaciones ante la BIA y opciones en corte federal',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿Cuál es la diferencia entre defensa detenida y no detenida?', a: 'Los casos detenidos involucran a clientes en detención migratoria mientras su caso avanza. Los casos no detenidos involucran a clientes que están libres pero tienen un caso de deportación pendiente en corte de inmigración. Ambos requieren representación experimentada, los casos detenidos avanzan más rápido y también requieren defensa en audiencias de fianza.' },
        { q: 'Perdí mi fecha de corte y recibí una orden de deportación en ausencia. ¿Qué puedo hacer?', a: 'Las órdenes en ausencia a veces pueden reabrirse si puede demostrar que no recibió notificación adecuada o que circunstancias excepcionales le impidieron comparecer. Contáctenos de inmediato, hay plazos estrictos.' },
        { q: '¿También pueden protegerse mis familiares de la deportación?', a: 'Ciertas formas de alivio, como la cancelación de remoción, consideran el impacto en familiares ciudadanos estadounidenses o LPR calificados. Evaluamos la situación familiar completa.' },
        { q: '¿Cuánto tiempo dura un caso de deportación?', a: 'El atraso en los tribunales de inmigración significa que los casos no detenidos a menudo tardan años. Los casos detenidos avanzan mucho más rápido, a veces en semanas. Le asesoramos sobre el plazo en su consulta.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/federal-litigation', label: 'Litigios Federales', desc: 'Casos de Inmigración en Tribunales Federales', learnMore: 'Saber más' },
        { href: '/es/services/vawa', label: 'VAWA', desc: 'Ley contra la Violencia contra la Mujer', learnMore: 'Saber más' },
        { href: '/es/services/waivers', label: 'Perdones', desc: 'Perdones I-601, I-212 y Otros', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a entender sus opciones y a defenderse en su caso de deportación."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
