import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada Litigios Federales de Inmigración Georgia | Habeas Corpus y Mandamus',
  description:
    'Cuando se agotan las opciones administrativas, Bardi Immigration Law lleva su caso a la corte federal. Peticiones de habeas corpus, acciones de mandamus y desafíos APA.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/federal-litigation',
    languages: {
      en: 'https://bardilaw.com/services/federal-litigation',
      es: 'https://bardilaw.com/es/services/federal-litigation',
    },
  },
  openGraph: {
    title: 'Litigios Federales de Inmigración Georgia | Bardi Immigration Law',
    description: 'Casos federales de inmigración: habeas corpus, mandamus, APA. Cuando el proceso administrativo falla, vamos a la corte.',
    url: 'https://bardilaw.com/es/services/federal-litigation',
    locale: 'es_US',
  },
};

export default function FederalLitigationPageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="Litigios Federales"
      breadcrumbHref="/es/services/federal-litigation"
      title="Litigios Federales"
      subhead="Cuando el proceso administrativo de inmigración le ha fallado — órdenes finales de remoción, solicitudes irrazonablemente demoradas, detención ilegal — la corte federal es a menudo el último recurso disponible. Llevamos casos allí."
      qualifyHeading="Cuándo Pueden Aplicar los Litigios Federales"
      qualifyBullets={[
        'Tiene una orden final de remoción y ha agotado las apelaciones administrativas',
        'USCIS ha demorado irrazonablemente la adjudicación de su solicitud (mandamus)',
        'Está en detención migratoria prolongada sin audiencia de fianza (habeas corpus)',
        'Una decisión del gobierno violó la ley o sus derechos constitucionales',
        'Necesita impugnar una decisión de la BIA en el tribunal de apelaciones federal',
      ]}
      qualifyDisclaimer="Los litigios federales implican reglas procesales complejas y plazos estrictos. Contáctenos de inmediato si cree que puede ser necesaria una acción en la corte federal."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Evaluación del caso', body: 'Revisamos el expediente administrativo completo, identificamos la teoría legal y evaluamos las perspectivas realistas y costos del litigio federal.' },
        { title: 'Identificar la corte y el reclamo correctos', body: 'Dependiendo del asunto, la corte apropiada puede ser una corte de distrito (habeas, mandamus), un tribunal de apelaciones del circuito (revisión de orden de remoción) u otro foro.' },
        { title: 'Presentar la petición o demanda', body: 'Redactamos y presentamos la petición, moción o demanda ante la corte federal apropiada, junto con cualquier solicitud de alivio de emergencia o suspensión de deportación.' },
        { title: 'Escritos y argumentos', body: 'Los litigios federales implican escritos, a menudo argumentos orales, y pueden durar meses o años. Le representamos en cada etapa.' },
        { title: 'Decisión y seguimiento', body: 'Le asesoramos sobre las implicaciones de la decisión y, si es exitosa, coordinamos cualquier procedimiento administrativo posterior.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="Los litigios federales de inmigración requieren un conjunto de habilidades diferente al de la práctica administrativa — conocimiento de las reglas procesales federales, derecho constitucional y precedentes específicos del circuito. La abogada Bardi aporta esa experiencia a los casos donde el proceso administrativo ha fallado."
      helpsItems={[
        'Peticiones de habeas corpus por detención ilegal o prolongada',
        'Acciones de mandamus por adjudicaciones irrazonablemente demoradas de USCIS',
        'Petición de revisión ante las cortes de apelaciones federales',
        'Desafíos APA contra acción ilegal de la agencia',
        'Suspensiones de emergencia de deportación',
        'Escritos completos y argumentos hasta la decisión final',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿Qué es una acción de mandamus?', a: 'Un auto de mandamus es una orden de la corte federal que obliga a una agencia a realizar un deber no discrecional. En inmigración, el mandamus se usa cuando USCIS u otra agencia ha demorado irrazonablemente la adjudicación de una solicitud que ha estado pendiente por un tiempo inusualmente largo.' },
        { q: '¿Qué es el habeas corpus en un contexto migratorio?', a: 'El habeas corpus es un desafío legal a la detención ilegal. Los detenidos migratorios pueden presentar una petición de habeas ante la corte federal de distrito cuando están detenidos por tiempo prolongado sin audiencia de fianza, o cuando su detención es de otro modo ilegal.' },
        { q: '¿Puede una corte federal anular una orden de deportación?', a: 'Un tribunal federal de apelaciones puede revisar una orden final de remoción por errores legales. Si la BIA cometió un error de derecho, la corte puede anular la orden de remoción y remitir para procedimientos adicionales.' },
        { q: '¿Cuánto tiempo toman los litigios federales?', a: 'Varía según la corte y el tipo de caso. Una acción de mandamus puede resolverse en unos meses si impulsa a USCIS a actuar. Una petición de revisión en el tribunal de apelaciones puede tardar 1 a 3 años o más. Asesoramos sobre plazos realistas al inicio.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/removal-defense', label: 'Defensa contra la Deportación', desc: 'Defensa en Procesos de Deportación', learnMore: 'Saber más' },
        { href: '/es/services/waivers', label: 'Perdones', desc: 'Perdones I-601, I-212 y Otros', learnMore: 'Saber más' },
        { href: '/es/services/family-based-immigration', label: 'Inmigración Familiar', desc: 'Peticiones Familiares y Tarjetas Verdes', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a evaluar sus opciones en la corte federal y a construir el caso más sólido posible."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
