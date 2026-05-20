import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada VAWA Georgia | Peticiones bajo la Ley contra la Violencia contra la Mujer',
  description:
    'VAWA permite a sobrevivientes de abuso presentar una autopetición de inmigración sin notificar al abusador. Representación confidencial y sensible.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/vawa',
    languages: {
      en: 'https://bardilaw.com/services/vawa',
      es: 'https://bardilaw.com/es/services/vawa',
    },
  },
  openGraph: {
    title: 'Abogada VAWA Georgia | Bardi Immigration Law',
    description: 'Autopeticiones VAWA para sobrevivientes de abuso. USCIS no notifica al abusador. GA, AL, NC, SC.',
    url: 'https://bardilaw.com/es/services/vawa',
    locale: 'es_US',
  },
};

export default function VawaPageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="VAWA"
      breadcrumbHref="/es/services/vawa"
      title="VAWA — Ley contra la Violencia contra la Mujer"
      subhead="VAWA permite a ciertos sobrevivientes de abuso autopeticionarse para obtener estatus migratorio — sin involucrar ni alertar al abusador. USCIS no contacta al familiar abusivo cuando se presenta una petición VAWA."
      qualifyHeading="Quiénes Pueden Calificar"
      qualifyBullets={[
        'Ha sufrido violencia o crueldad extrema por parte de un ciudadano estadounidense o residente permanente legal',
        'El abusador es su cónyuge actual o anterior, padre/madre, o hijo/hija adulto/a',
        'En algún momento vivió con el abusador',
        'Es una persona de buen carácter moral',
        'La protección de VAWA se extiende a todos los sobrevivientes sin distinción de género',
      ]}
      qualifyDisclaimer="Esta información es solo para fines informativos. Todos los asuntos de VAWA se manejan con total confidencialidad."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Evaluación confidencial', body: 'Evaluamos su situación y elegibilidad en un entorno seguro. Ninguna información se comparte sin su consentimiento.' },
        { title: 'Recopilación de evidencia de forma segura', body: 'Le ayudamos a compilar evidencia de la relación, el abuso y el buen carácter moral — sin alertar al abusador.' },
        { title: 'Preparación de declaración personal', body: 'La abogada Bardi redacta su declaración para presentar su situación con precisión ante USCIS.' },
        { title: 'Presentar el Formulario I-360', body: 'Enviar la autopetición VAWA al Centro de Servicios de Vermont de USCIS, la única oficina que procesa peticiones VAWA, con protecciones adicionales de privacidad.' },
        { title: 'Aprobación y próximos pasos', body: 'Si es aprobada, recibe una aprobación del I-360 y puede buscar ajuste de estatus u otros beneficios según su situación.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="Las peticiones VAWA requieren una preparación cuidadosa y sensible. La abogada Bardi maneja cada aspecto de su caso con total confidencialidad — ayudándole a recopilar documentación de forma segura, redactando su declaración personal y gestionando todas las comunicaciones con USCIS directamente."
      helpsItems={[
        'Evaluación confidencial de elegibilidad',
        'Estrategia segura de recopilación de evidencia',
        'Redacción y revisión de declaración personal',
        'Preparación y presentación de la petición I-360',
        'Coordinación de beneficios migratorios posteriores',
        'Comunicación directa con la abogada durante todo el proceso',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿El abusador será notificado de que presenté una petición?', a: 'No. USCIS mantiene estricta confidencialidad en los casos VAWA y no contactará al abusador ni revelará que usted presentó.' },
        { q: '¿Pueden los hombres presentar peticiones VAWA?', a: 'Sí. Las protecciones de VAWA están disponibles para todos los sobrevivientes de violencia doméstica, abuso o crueldad, sin distinción de género.' },
        { q: '¿Qué pasa si ya no estoy casado/a con el abusador?', a: 'Los ex cónyuges aún pueden calificar si la petición se presenta dentro de los dos años de un divorcio relacionado con el abuso.' },
        { q: '¿VAWA lleva a una tarjeta verde?', a: 'Una petición I-360 aprobada puede ser un camino hacia una tarjeta verde mediante ajuste de estatus, siempre que haya un número de visa disponible. Evaluamos su situación completa en la consulta.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/u-visa', label: 'Visa U', desc: 'Protección para Víctimas de Crimen', learnMore: 'Saber más' },
        { href: '/es/services/family-based-immigration', label: 'Inmigración Familiar', desc: 'Peticiones Familiares y Tarjetas Verdes', learnMore: 'Saber más' },
        { href: '/es/services/removal-defense', label: 'Defensa contra la Deportación', desc: 'Defensa en Procesos de Deportación', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a entender sus opciones de forma confidencial y segura."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
