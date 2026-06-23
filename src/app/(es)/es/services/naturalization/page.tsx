import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Abogada de Naturalización | Ciudadanía de EE. UU. (N-400)',
  description:
    'Conviértase en ciudadano de EE. UU. mediante la naturalización. Elegibilidad del Formulario N-400, el examen de inglés y cívica, la entrevista y el juramento, con una abogada de inmigración de principio a fin.',
  alternates: {
    canonical: 'https://bardilaw.com/es/services/naturalization',
    languages: {
      'x-default': 'https://bardilaw.com/services/naturalization',
      en: 'https://bardilaw.com/services/naturalization',
      es: 'https://bardilaw.com/es/services/naturalization',
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
    title: 'Abogada de Naturalización | Bardi Immigration Law',
    description: 'Ciudadanía de EE. UU. mediante naturalización: elegibilidad N-400, el examen, la entrevista y el juramento.',
    url: 'https://bardilaw.com/es/services/naturalization',
    locale: 'es_US',
  },
};

export default function NaturalizationPageES() {
  return (
    <PracticeAreaLayout
      homeHref="/es"
      homeLabel="Inicio"
      servicesHref="/es/services"
      servicesLabel="Servicios"
      contactHref="/es/contact"
      breadcrumbLabel="Naturalización"
      breadcrumbHref="/es/services/naturalization"
      title="Naturalización y Ciudadanía de EE. UU."
      subhead="La ciudadanía es el paso final, el derecho a votar, a un pasaporte de EE. UU. y a una seguridad que no se le puede quitar. Nos aseguramos de que su N-400 se presente de manera impecable y de que nada en su historial descarrile la solicitud."
      qualifyHeading="Quiénes Pueden Calificar"
      qualifyBullets={[
        'Ha sido residente permanente legal (titular de tarjeta verde) durante al menos 5 años, o 3 años si está casado y vive con un ciudadano de EE. UU.',
        'Ha mantenido residencia continua y presencia física en los Estados Unidos',
        'Puede demostrar buen carácter moral durante el período requerido',
        'Puede leer, escribir y hablar inglés básico y aprobar el examen de cívica (con excepciones limitadas por edad y discapacidad)',
        'Tiene al menos 18 años y está dispuesto a prestar el Juramento de Lealtad',
      ]}
      qualifyDisclaimer="Algunos historiales, viajes largos al extranjero, ciertos problemas penales o problemas con la forma en que obtuvo su tarjeta verde, pueden complicar o incluso poner en peligro un N-400. Revisamos su expediente completo antes de presentar, no después."
      processHeading="Cómo Funciona el Proceso"
      processSteps={[
        { title: 'Revisión de elegibilidad', body: 'Confirmamos el cálculo de su residencia y presencia física, examinamos los problemas de buen carácter moral y residencia continua, y nos aseguramos de que presentar sea seguro en su situación.' },
        { title: 'Presentar el Formulario N-400', body: 'Preparamos y enviamos su solicitud de naturalización con la evidencia de apoyo que USCIS espera.' },
        { title: 'Biometría', body: 'USCIS toma sus huellas digitales y realiza verificaciones de antecedentes. Le decimos qué esperar.' },
        { title: 'Entrevista y exámenes', body: 'En la entrevista, un oficial de USCIS revisa su solicitud y administra los exámenes de inglés y cívica. Le preparamos para que llegue listo.' },
        { title: 'Juramento de Lealtad', body: 'Una vez aprobado, presta el Juramento de Lealtad en una ceremonia y se convierte en ciudadano de EE. UU. Luego puede solicitar un pasaporte de EE. UU.' },
      ]}
      helpsHeading="Cómo Ayuda Bardi Immigration Law"
      helpsParagraph="La mayoría de los N-400 son sencillos, pero los que salen mal usualmente tenían una señal de advertencia que una revisión cuidadosa habría detectado. La abogada Bardi examina su historial primero, para que presente con confianza y evite sorpresas en la entrevista."
      helpsItems={[
        'Examen de elegibilidad y buen carácter moral antes de presentar',
        'Análisis de residencia continua y presencia física (incluidos los viajes largos al extranjero)',
        'Preparación y presentación del N-400',
        'Preparación para la entrevista y orientación para los exámenes de inglés y cívica',
        'Identificación y manejo de problemas penales o de estatus que podrían afectar la elegibilidad',
        'Comunicación directa con la abogada durante todo el proceso',
      ]}
      faqHeading="Preguntas Frecuentes"
      faqs={[
        { q: '¿Califico bajo la regla de 3 años o la de 5 años?', a: 'La mayoría de los residentes permanentes legales deben esperar 5 años. Si obtuvo su tarjeta verde mediante matrimonio con un ciudadano de EE. UU. y ha estado casado y viviendo con ese ciudadano durante todo el período, puede calificar después de 3 años. Confirmamos cuál regla le corresponde.' },
        { q: '¿Un antecedente penal puede impedir mi naturalización?', a: 'Puede hacerlo, y en algunas situaciones solicitar con ciertos antecedentes puede incluso poner en riesgo su tarjeta verde. Algunos problemas son barreras permanentes, otros afectan solo el período de buen carácter moral. Por eso revisamos su expediente antes de presentar.' },
        { q: '¿Qué sucede en la entrevista de ciudadanía?', a: 'Un oficial de USCIS revisa su N-400 con usted bajo juramento, luego administra el examen de inglés (lectura, escritura, habla) y el examen de cívica. Le preparamos tanto para las preguntas como para el formato.' },
        { q: '¿Importan los viajes largos fuera de EE. UU.?', a: 'Sí. Los viajes de seis meses o más pueden romper la residencia continua que requiere la naturalización, y un patrón de ausencias largas puede generar dudas incluso si ningún viaje individual fue tan largo. Trabajamos las fechas con usted antes de presentar.' },
      ]}
      relatedHeading="Áreas de Práctica Relacionadas"
      relatedAreas={[
        { href: '/es/services/family-based-immigration', label: 'Inmigración Familiar', desc: 'Peticiones I-130 y Tarjetas Verdes', learnMore: 'Saber más' },
        { href: '/es/services/removal-defense', label: 'Defensa contra la Deportación', desc: 'Defensa en Procesos de Deportación', learnMore: 'Saber más' },
        { href: '/es/services/waivers', label: 'Renuncias (Waivers)', desc: 'Exenciones de Inadmisibilidad I-601 / I-601A', learnMore: 'Saber más' },
      ]}
      ctaHeading="Comience con una Consulta"
      ctaSubtext="Le ayudaremos a entender sus opciones y a presentar un caso de ciudadanía sólido y seguro."
      ctaButtonLabel="Programe una Consulta"
    />
  );
}
