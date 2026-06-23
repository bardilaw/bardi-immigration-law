import Link from 'next/link';
// Spanish adaptation of en/immigration-bond-hearing-georgia.tsx (BAR-705). Natural Spanish, not a literal translation. GA+AL licensed-attorney framing preserved.

export const esTitle = 'Audiencia de Fianza de Inmigración en Georgia: Cómo Salir de la Detención de ICE';
export const esDescription =
  '¿Un ser querido está detenido por ICE en Georgia? Una abogada de inmigración explica cómo funcionan las audiencias de fianza, quién califica, qué considera el juez y cómo prepararse. Con licencia en Georgia y Alabama.';

export function ImmigrationBondHearingPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Si un familiar acaba de ser detenido por ICE en Georgia, probablemente está buscando dos
        cosas a la vez: dónde lo tienen retenido y cómo sacarlo. La respuesta a la segunda pregunta
        casi siempre pasa por una <strong>audiencia de fianza de inmigración</strong> &mdash; el
        proceso que puede liberar de la custodia a una persona detenida mientras su caso de inmigración avanza.
      </p>
      <p>
        Esta guía explica qué es la detención de inmigración, dónde retiene ICE a las personas dentro y cerca de Georgia,
        qué es una audiencia de fianza de inmigración, los factores que un juez pondera al fijar una fianza, y los
        pasos concretos que usted puede tomar ahora mismo para ayudar. Los casos de detención avanzan rápido, y el monto de la
        fianza &mdash; o si se concede alguna &mdash; a menudo depende de qué tan bien se prepare el caso.
        Una abogada con experiencia puede ser la diferencia entre que un ser querido regrese a casa o permanezca detenido
        durante meses.
      </p>

      <h2>Qué Es Realmente la Detención de Inmigración</h2>
      <p>
        La detención de inmigración es civil, no penal. Cuando el Servicio de Inmigración y Control de Aduanas (ICE)
        toma a alguien bajo custodia, lo está reteniendo mientras se decide su caso de remoción (deportación)
        &mdash; no lo está castigando por un delito. Esa distinción importa, porque las reglas que rigen
        la fianza penal son distintas de las reglas que rigen la fianza de inmigración.
      </p>
      <p>
        Una persona puede ser detenida tras un arresto por ICE, tras ser transferida desde una cárcel local bajo una
        retención migratoria (detainer), o tras un chequeo (check-in) con las autoridades de inmigración. Una vez detenida, se le emite un{' '}
        <Link href="/es/blog/notice-to-appear-georgia">Aviso de Comparecencia (NTA)</Link>, el documento de cargos
        que inicia el proceso de remoción ante la corte de inmigración. A partir de ese momento, la pregunta central para la
        familia es si la persona puede ser liberada bajo fianza mientras el caso está pendiente.
      </p>

      <h2>Dónde Detiene ICE a las Personas Dentro y Cerca de Georgia</h2>
      <p>
        Georgia es uno de los estados con mayor actividad de control migratorio del país, y los detenidos
        a menudo son retenidos a horas de distancia de donde fueron arrestados. Las instalaciones con las que las familias tratan con más frecuencia
        incluyen:
      </p>
      <ul>
        <li>
          <strong>Centro de Detención de Stewart (Lumpkin, GA)</strong> &mdash; una de las instalaciones de detención
          de inmigración más grandes de Estados Unidos, operada por CoreCivic a unas 140 millas al sur de Atlanta.
          Stewart tiene una corte de inmigración en el lugar, así que los casos de detenidos allí avanzan en semanas, no en años. Si su
          ser querido está en Stewart, lea nuestra guía dedicada:{' '}
          <Link href="/es/blog/stewart-detention-attorney">¿Detenido en Stewart? Qué Sucede en las Primeras 72 Horas</Link>.
        </li>
        <li>
          <strong>Centro de Procesamiento de ICE de Folkston (Folkston, GA)</strong> &mdash; una instalación grande en el
          sureste de Georgia cerca de la línea con Florida, también utilizada para retener a detenidos con casos ante las
          cortes de inmigración.
        </li>
        <li>
          <strong>Condado de Irwin (Ocilla, GA)</strong> &mdash; una instalación en el centro-sur de Georgia que
          históricamente se ha usado para la detención de inmigración; las familias a veces todavía buscan a sus seres queridos
          en esta zona.
        </li>
        <li>
          <strong>Cárceles locales de condado</strong> &mdash; en las primeras horas tras un arresto, una persona puede ser
          retenida en una cárcel de condado bajo una retención migratoria de ICE antes de ser transferida a una instalación dedicada.
        </li>
      </ul>
      <p>
        Usted puede localizar a una persona detenida usando el Sistema en Línea de Localización de Detenidos de ICE con su
        número A (número de registro de extranjero) o con su nombre, fecha de nacimiento y país de nacimiento. Saber
        cuál instalación &mdash; y por lo tanto cuál corte de inmigración &mdash; controla el caso es el primer
        paso hacia una audiencia de fianza.
      </p>

      <h2>¿Qué Es una Audiencia de Fianza de Inmigración?</h2>
      <p>
        Una audiencia de fianza de inmigración es una audiencia ante un juez de inmigración para decidir si una persona detenida
        puede ser liberada de la custodia y, de ser así, cuánto dinero debe pagar la familia como garantía
        de que la persona asistirá a todas las futuras citas en la corte. Si la persona asiste a cada audiencia y cumple
        con el caso, el dinero de la fianza se devuelve al final del caso.
      </p>
      <p>
        Hay dos maneras de fijar una fianza. ICE hace una determinación inicial de custodia poco después de
        la detención y puede fijar una fianza por su cuenta. Si ICE no fija ninguna fianza, fija una fianza que la familia no puede pagar,
        o niega la liberación por completo, la persona detenida puede solicitar una <strong>audiencia de fianza ante un
        juez de inmigración</strong> y pedirle al juez que conceda una fianza o reduzca el monto. A esto a menudo se le
        llama audiencia <em>Joseph</em> o audiencia de redeterminación de custodia.
      </p>
      <p>
        No todos son elegibles para una fianza. Bajo la ley federal, ciertas personas están sujetas a{' '}
        <strong>detención obligatoria</strong> &mdash; típicamente aquellas con condenas penales específicas o
        cierto historial migratorio previo &mdash; y un juez no tiene la facultad de liberarlas bajo fianza. Si
        la detención obligatoria aplica es una cuestión legal compleja, y es una de las cosas más importantes
        que una abogada evalúa de inmediato, porque argumentar la elegibilidad en sí misma a veces es la batalla.
      </p>

      <h2>¿Qué Factores Considera un Juez en una Decisión de Fianza?</h2>
      <p>
        En una audiencia de fianza, la persona detenida generalmente debe demostrar dos cosas: que{' '}
        <strong>no es un peligro para la comunidad</strong> y que <strong>no es un riesgo de fuga</strong>
        {' '}(que se presentará a cada audiencia futura). Para evaluar esas cuestiones, los jueces de inmigración
        consideran factores como:
      </p>
      <ul>
        <li><strong>Lazos familiares en Estados Unidos</strong> &mdash; un cónyuge, hijos o padres que sean ciudadanos o residentes legales</li>
        <li><strong>Tiempo de residencia</strong> en EE. UU. y vínculos con la comunidad local</li>
        <li><strong>Historial laboral</strong> y trabajo estable</li>
        <li><strong>Antecedentes penales</strong>, o la ausencia de ellos</li>
        <li><strong>Historial migratorio</strong>, incluido el cumplimiento previo de citas en la corte o chequeos</li>
        <li><strong>Propiedad de bienes</strong> u otras raíces en la comunidad</li>
        <li><strong>La solidez del caso de inmigración de fondo</strong> &mdash; si la persona tiene un camino realista hacia un alivio, como asilo, cancelación de remoción o <Link href="/es/services/family-based-immigration">ajuste de estatus</Link></li>
      </ul>
      <p>
        La persona detenida lleva la carga de probar que merece la liberación. Por eso la evidencia que una
        familia reúne &mdash; cartas de apoyo, comprobante de empleo, declaraciones de impuestos, prueba de relaciones
        familiares y documentación de vínculos comunitarios &mdash; importa enormemente. Un paquete de fianza bien preparado
        puede significar la diferencia entre la liberación y la detención continuada, y entre una fianza de unos pocos
        miles de dólares y una fijada mucho más alta.
      </p>

      <h2>¿De Cuánto Son las Fianzas de Inmigración y Cómo Se Pagan?</h2>
      <p>
        La fianza mínima de inmigración establecida por ley es de $1,500, pero en la práctica las fianzas se fijan con frecuencia mucho
        más altas &mdash; a menudo en el rango de varios miles a decenas de miles de dólares, dependiendo de
        la evaluación que haga el juez del peligro y el riesgo de fuga. No hay una tabla fija; el monto es
        discrecional, que es precisamente por lo que la defensa en la audiencia importa.
      </p>
      <p>
        Una vez fijado el monto de la fianza, se puede pagar a ICE para que la persona detenida sea liberada. El monto total
        es retenido por el gobierno y devuelto (sin intereses) al final del caso, siempre que la persona
        haya asistido a cada audiencia y cumplido con todas las condiciones. Como el monto es tan a menudo negociable en
        la práctica mediante argumentos legales, el objetivo de una audiencia de fianza no es solo lograr la liberación, sino lograrla
        a un monto que la familia realmente pueda pagar.
      </p>

      <h2>Cómo Ayudar a un Familiar Detenido Ahora Mismo</h2>
      <p>
        Las primeras horas y días tras la detención son los más importantes. Esto es lo que usted puede hacer:
      </p>
      <ul>
        <li><strong>Localícelo.</strong> Use el Sistema en Línea de Localización de Detenidos de ICE con el número A o con los datos biográficos para confirmar cuál instalación lo tiene retenido.</li>
        <li><strong>Anote el número A.</strong> Este número de registro de extranjero de nueve dígitos es la clave de todo &mdash; localizar a la persona, pagar la fianza y dar seguimiento al caso en la corte.</li>
        <li><strong>No deje que firme nada sin asesoría legal.</strong> A una persona detenida pueden presionarla para que firme una salida voluntaria o una orden de remoción estipulada. Firmar puede renunciar al derecho a una audiencia &mdash; y a una fianza.</li>
        <li><strong>Reúna documentos ahora.</strong> Comience a recopilar prueba de relaciones familiares, tiempo de residencia, empleo, declaraciones de impuestos y cartas de apoyo. Esto se convierte en el paquete de fianza.</li>
        <li><strong>Llame a una abogada de inmigración de inmediato.</strong> Los casos de detención avanzan rápido, especialmente en Stewart, donde una audiencia puede programarse en cuestión de días. Mientras antes participe una abogada, antes podrá solicitarse y prepararse adecuadamente una audiencia de fianza.</li>
      </ul>

      <h2>Por Qué Importa una Abogada para la Fianza &mdash; y para Todo el Caso</h2>
      <p>
        Las audiencias de fianza de inmigración son adversariales. Un abogado del gobierno argumenta para mantener a la persona detenida
        o para fijar una fianza alta, y la persona detenida debe probar afirmativamente que merece la liberación. Las personas
        que se presentan sin abogada habitualmente enfrentan fianzas más altas, o se les dice erróneamente que están sujetas a
        detención obligatoria cuando existe un argumento legal.
      </p>
      <p>
        Una abogada puede actuar con rapidez para solicitar la audiencia de fianza, evaluar si la detención obligatoria realmente
        aplica, armar un paquete de evidencia persuasivo y argumentar los factores de peligro y riesgo de fuga directamente
        ante el juez. Igual de importante, la audiencia de fianza es solo el comienzo. La liberación bajo fianza no pone fin
        al caso de remoción &mdash; simplemente significa que su ser querido puede pelear ese caso desde casa en lugar de
        desde una celda de detención. Conozca más sobre nuestra representación de{' '}
        <Link href="/es/services/removal-defense">defensa contra la remoción</Link>, o vea nuestra guía sobre{' '}
        <Link href="/es/blog/deportation-defense-removal-proceedings-georgia">defensa contra la deportación y procesos de remoción en Georgia</Link>.
      </p>

      <h2>Actúe Rápido &mdash; Cada Hora Cuenta</h2>
      <p>
        Si alguien a quien usted ama ha sido detenido por ICE en Georgia, no espere. Los casos de detención &mdash;
        especialmente los de Stewart y Folkston &mdash; avanzan en un cronograma comprimido, y la ventana para
        solicitar y prepararse para una audiencia de fianza es corta. Contacte a <strong>Bardi Immigration Law</strong>{' '}
        hoy. La abogada <strong>Eszter Bardi</strong> representa a clientes detenidos ante las cortes de inmigración de Atlanta y
        Stewart, tiene licencia en <strong>Georgia y Alabama</strong>, y ofrece acceso directo
        a la abogada &mdash; usted habla con su abogada, no con un especialista de admisión.
      </p>
      <p>
        Cada hora que su ser querido pasa detenido es una hora de más.{' '}
        <Link href="/es/contact">Programe una consulta urgente ahora</Link>.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación de blog es solo para fines informativos y no
          constituye asesoría legal. La ley de inmigración es compleja y específica a cada caso, y cambia
          con frecuencia. La elegibilidad y los montos de la fianza dependen de los hechos individuales de cada caso. Consulte a
          una abogada de inmigración con licencia sobre su situación específica.
        </em>
      </p>
    </div>
  );
}
