import Link from 'next/link';

// Spanish adaptation of en/asylum-application-georgia.tsx (BAR-670). Natural Spanish,
// not a literal translation. GA+AL licensed-attorney framing preserved.
export const esTitle = 'Cómo Solicitar Asilo en Georgia: Guía de una Abogada de Inmigración';
export const esDescription =
  'Una abogada de inmigración en Georgia explica cómo solicitar asilo: los cinco motivos protegidos, el plazo de un año, el asilo afirmativo frente al defensivo, el Formulario I-589 y los errores que arruinan los casos.';

export function AsylumApplicationPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Si huyó de su país porque sufrió daño &mdash; o porque teme sufrirlo si regresa &mdash; es posible que pueda pedir
        protección a Estados Unidos a través del asilo. Es uno de los derechos más importantes de nuestro sistema de
        inmigración, y uno de los más fáciles de perder por esperar demasiado o presentar la solicitud de la manera
        equivocada.
      </p>
      <p>
        Esta guía explica quién califica para el asilo, el estricto plazo de un año, la diferencia entre las dos formas de
        solicitarlo y cómo funciona el proceso para las personas que viven en Georgia. Los casos de asilo están entre los
        más difíciles del derecho migratorio, y lo que está en juego no podría ser más alto &mdash; así que entender lo
        básico es el primer paso para protegerse a usted y a su familia.
      </p>

      <h2>Qué Es el Asilo &mdash; y a Quién Protege</h2>
      <p>
        El asilo es protección para personas que ya están en Estados Unidos y no pueden regresar a casa porque temen ser
        perseguidas. Para calificar, por lo general debe demostrar que sufrió daño en el pasado, o que tiene un temor
        genuino de daño futuro, <strong>a causa de uno de los cinco motivos protegidos:</strong>
      </p>
      <ul>
        <li><strong>Raza</strong></li>
        <li><strong>Religión</strong></li>
        <li><strong>Nacionalidad</strong></li>
        <li><strong>Opinión política</strong></li>
        <li><strong>Pertenencia a un grupo social particular</strong></li>
      </ul>
      <p>
        Esa última categoría &mdash; &ldquo;grupo social particular&rdquo; &mdash; es la más compleja y la más litigada.
        Puede abarcar a ciertas familias, a sobrevivientes de violencia doméstica o de pandillas, a personas atacadas por
        su orientación sexual o identidad de género, y a otras, pero la ley en esta área es técnica y cambia con las
        decisiones de los tribunales. Si su experiencia encaja en uno de los cinco motivos suele ser la pregunta más
        importante de su caso, y es donde un abogado con experiencia marca la mayor diferencia.
      </p>
      <p>
        El asilo también protege a su familia. Si se aprueba su solicitud, su cónyuge y sus hijos solteros menores de 21
        años normalmente pueden ser incluidos o reunirse con usted después. Y si se le concede el asilo, puede solicitar
        una green card un año más tarde, poniéndolo en el camino hacia la residencia permanente.
      </p>

      <h2>El Plazo de Un Año: El Error Que Termina los Casos Antes de Empezar</h2>
      <p>
        Esta es la regla que atrapa a más personas: en general, debe presentar su solicitud de asilo{' '}
        <strong>dentro de un año de su última llegada a Estados Unidos.</strong> Si pierde ese plazo, puede perder por
        completo el derecho al asilo &mdash; incluso si su temor de regresar es completamente real.
      </p>
      <p>
        Existen excepciones. El plazo puede excusarse si puede demostrar <strong>circunstancias cambiantes</strong> que
        afectan su elegibilidad (por ejemplo, las condiciones en su país empeoraron, o su propia situación cambió) o{' '}
        <strong>circunstancias extraordinarias</strong> que expliquen la demora (como una enfermedad grave o un estatus
        legal anterior). Pero estas excepciones son limitadas, dependen de los hechos y tienen que probarse. Nunca debe
        suponer que califica para una de ellas sin hablar con un abogado.
      </p>
      <p>
        La conclusión práctica es simple: <strong>no espere.</strong> Si cree que podría necesitar asilo, busque asesoría
        temprano, mientras todavía tiene opciones.
      </p>

      <h2>Las Dos Vías: Asilo Afirmativo frente a Defensivo</h2>
      <p>
        Hay dos maneras en que un caso de asilo avanza por el sistema. Cuál le corresponde a usted depende de si el
        gobierno ya lo ha colocado en un proceso de remoción (deportación).
      </p>

      <h3>Asilo afirmativo (usted solicita por su cuenta ante USCIS)</h3>
      <p>
        Si <em>no</em> está en un proceso de deportación, solicita de manera <strong>afirmativa</strong> presentando su
        solicitud ante el Servicio de Ciudadanía e Inmigración de Estados Unidos (USCIS). Entrega sus formularios y
        pruebas, da sus huellas digitales en una cita de datos biométricos, y asiste a una entrevista no adversarial con
        un oficial de asilo de USCIS. Si el oficial le concede su caso, recibe el asilo. Si el oficial no se lo concede y
        usted no tiene otro estatus legal, su caso normalmente se remite a un juez de inmigración &mdash; donde continúa
        como un caso defensivo.
      </p>

      <h3>Asilo defensivo (usted lo presenta como defensa en la corte de inmigración)</h3>
      <p>
        Si ya está en un proceso de deportación &mdash; por ejemplo, después de ser detenido, o después de que un caso
        afirmativo fue remitido &mdash; solicita de manera <strong>defensiva</strong>, presentando el asilo como defensa
        ante un juez de inmigración en la Oficina Ejecutiva de Revisión de Inmigración (EOIR). Para las personas en
        Georgia, eso normalmente significa la <strong>Corte de Inmigración de Atlanta</strong>, o, para quienes están
        detenidos, la corte en el <strong>Centro de Detención Stewart</strong> en Lumpkin. Estas audiencias son
        adversariales: un abogado del gobierno argumenta el otro lado, y el juez decide. Una preparación sólida y las
        pruebas importan enormemente.
      </p>
      <p>
        Si tiene un ser querido que ha sido detenido, el tiempo es crítico. Vea nuestra guía sobre{' '}
        <Link href="/es/blog/stewart-detention-attorney">qué sucede en las primeras 72 horas en Stewart</Link>.
      </p>

      <h2>Cómo Funciona la Solicitud de Asilo: El Formulario I-589</h2>
      <p>
        Ambas vías usan el mismo formulario principal: el <strong>I-589, Solicitud de Asilo y de Suspensión de Remoción.</strong>{' '}
        No hay tarifa gubernamental para solicitar asilo. En el formulario y en sus documentos de apoyo, usted cuenta su
        historia &mdash; qué le pasó, por qué tiene miedo, y por qué se conecta con uno de los cinco motivos protegidos.
      </p>
      <p>Un caso de asilo bien preparado normalmente incluye mucho más que el formulario en sí:</p>
      <ul>
        <li><strong>Una declaración personal detallada</strong> que explique su experiencia con sus propias palabras</li>
        <li><strong>Pruebas del daño o de las amenazas</strong> &mdash; expedientes médicos, informes policiales, fotos, amenazas, noticias de lo que les ocurrió a otras personas como usted</li>
        <li><strong>Pruebas de las condiciones del país</strong> &mdash; informes que muestren los peligros que enfrentan las personas en su situación en su país de origen</li>
        <li><strong>Declaraciones de testigos</strong> de familiares, amigos o expertos que puedan respaldar su relato</li>
        <li><strong>Documentos de identidad y de parentesco</strong> para usted y para cualquier familiar incluido en su caso</li>
      </ul>
      <p>
        La coherencia lo es todo. Pequeñas contradicciones entre su formulario, su declaración y su testimonio pueden
        usarse para cuestionar su credibilidad &mdash; y en el asilo, la credibilidad muchas veces decide el caso.
      </p>

      <h2>¿Puede Trabajar Mientras Su Caso de Asilo Está Pendiente?</h2>
      <p>
        Muchos solicitantes de asilo pueden eventualmente pedir un permiso de trabajo (un Documento de Autorización de
        Empleo, o EAD), pero no de inmediato. Las reglas vinculan la elegibilidad con el tiempo que su solicitud ha estado
        pendiente, y el período de espera y los detalles han cambiado varias veces en los últimos años a través de
        litigios y nuevas regulaciones. Como este plazo es un blanco móvil, confirme la regla actual antes de contar con
        ella &mdash; un abogado puede decirle exactamente cuándo y cómo solicitarlo según las reglas vigentes para su caso.
      </p>

      <h2>Protecciones Relacionadas: Suspensión de Remoción y la CAT</h2>
      <p>
        El asilo no es la única forma de protección. Cuando presenta el Formulario I-589, también puede ser considerado
        para la <strong>suspensión de remoción</strong> (withholding of removal) y la protección bajo la{' '}
        <strong>Convención Contra la Tortura (CAT).</strong> Estas tienen un estándar de prueba más alto que el asilo y
        ofrecen menos beneficios, pero pueden evitar que lo envíen de regreso al peligro incluso cuando el plazo de un año
        u otras barreras bloquean el asilo en sí. Un buen abogado evalúa todas estas opciones en conjunto para que no se
        pierda ninguna vía.
      </p>

      <h2>Errores Comunes Que Hunden los Casos de Asilo</h2>
      <ul>
        <li><strong>Perder el plazo de un año</strong> &mdash; y no plantear una excepción que pudiera haber aplicado.</li>
        <li><strong>Una declaración débil o inconsistente</strong> &mdash; historias vagas y fechas contradictorias invitan a una negación por credibilidad.</li>
        <li><strong>Poca o ninguna prueba de apoyo</strong> &mdash; &ldquo;solo mi palabra&rdquo; rara vez es suficiente por sí sola.</li>
        <li><strong>Forzar los hechos en el motivo protegido equivocado</strong> &mdash; especialmente el &ldquo;grupo social particular&rdquo;, que debe definirse con cuidado.</li>
        <li><strong>Ir sin preparación a una audiencia adversarial en la corte</strong> &mdash; sin abogado, frente a un abogado del gobierno capacitado.</li>
        <li><strong>Ignorar antecedentes migratorios o penales</strong> &mdash; algunos problemas impiden el asilo y deben enfrentarse de frente.</li>
      </ul>

      <h2>Por Qué Importa un Abogado de Asilo</h2>
      <p>
        Los estudios de las cortes de inmigración han mostrado lo mismo durante mucho tiempo: las personas con abogados
        tienen muchas más probabilidades de ganar sus casos que las personas sin ellos. El asilo es detallado, está regido
        por plazos y no perdona los errores &mdash; y una negación puede significar ser enviado de regreso al mismo peligro
        del que huyó. Este no es un lugar para adivinar.
      </p>
      <p>
        Un abogado de inmigración con experiencia le ayuda a cumplir el plazo de un año, construye un expediente claro y
        creíble, reúne las pruebas de condiciones del país y la evidencia de corroboración que los jueces esperan, lo
        prepara para su entrevista o audiencia, y lo protege de los errores que silenciosamente terminan los casos.
      </p>

      <h2>Hable con Eszter Bardi Sobre Su Caso de Asilo</h2>
      <p>
        Si teme regresar a su país de origen, no espere a que pase el plazo ni a que llegue una fecha en la corte. En Bardi
        Immigration Law, la abogada <strong>Eszter Bardi</strong> representa a solicitantes de asilo en todo Georgia y el
        sureste &mdash; con acceso directo a la abogada, no a un especialista de admisión.
      </p>
      <p>
        <strong>Programe una consulta hoy.</strong> Escucharemos su historia, le explicaremos si el asilo o una protección
        relacionada encaja con su situación, y construiremos el caso más sólido que los hechos permitan. Conozca más sobre
        nuestro trabajo de <Link href="/es/services/removal-defense">defensa contra la deportación</Link> o{' '}
        <Link href="/es/contact">solicite una consulta en línea</Link>. Hablamos español.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo brinda información legal general y no constituye asesoría
          legal. La ley de inmigración es compleja, depende de los hechos y cambia con frecuencia. Confirme los
          formularios, las tarifas, los plazos y la elegibilidad actuales en los sitios web de USCIS y EOIR, y consulte con
          un abogado de inmigración con licencia para recibir orientación específica para su caso.
        </em>
      </p>
    </div>
  );
}
