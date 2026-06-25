/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (INA §212(a)(9)(A)/(B)/(C), las barras de 3/5/10/20 años y la barra permanente, el Formulario I-212 de permiso para volver a solicitar la admisión, las exenciones I-601 e I-601A, el proceso consular) que pueden cambiar. Confirmar contra el estatuto y la práctica vigente de USCIS/DOS antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/after-deportation-reentry-bars-waivers-georgia.tsx (BAR-855). Español natural, no traducción literal.

export const esTitle = 'Después de una Deportación: Barras de Reingreso, Exenciones I-212 y Cómo Regresar Legalmente (Georgia)';
export const esDescription =
  'Una abogada de inmigración en Georgia explica cómo regresar legalmente después de una deportación: las barras de reingreso bajo INA §212(a)(9)(A) (5, 10 y 20 años, y la barra permanente por delito agravado), la temida barra permanente bajo §212(a)(9)(C) cuando alguien vuelve a entrar ilegalmente, el Formulario I-212 de permiso para volver a solicitar la admisión, cómo se combina con las exenciones I-601 e I-601A, el proceso consular y los plazos realistas. Información general, no asesoría legal.';

export function AfterDeportationReentryBarsPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Es una de las preguntas más comunes y más dolorosas que escucha una abogada de inmigración en Georgia:
        <strong> &ldquo;Me deportaron. ¿Podré algún día regresar legalmente?&rdquo;</strong> Muchas veces quien
        pregunta es una esposa ciudadana estadounidense cuyo esposo fue deportado, una madre cuyo hijo ahora está
        atrapado en otro país, o alguien que fue deportado hace años, regresó para estar con su familia y hoy vive con
        miedo cada día. La respuesta honesta es que regresar legalmente después de una deportación es <em>difícil</em>{' '}
        &mdash; pero para muchas familias no es imposible. Depende de tres cosas: <strong>cómo fue deportado(a)</strong>,{' '}
        <strong>si volvió a entrar ilegalmente después</strong> y{' '}
        <strong>si puede ganar las exenciones que la ley exige</strong>.
      </p>
      <p>
        Esta guía explica las barras de reingreso (reentry bars) que activa una deportación bajo la{' '}
        <strong>INA &sect; 212(a)(9)</strong>, la barra permanente que atrapa a tantas familias, el{' '}
        <strong>Formulario I-212, Solicitud de Permiso para Volver a Solicitar la Admisión</strong>, cómo el I-212 se
        combina con las exenciones I-601 e I-601A, y el plazo realista de la vía consular de regreso. Está escrita para
        familias de Georgia y Alabama, pero la ley es federal y aplica en todas partes.
      </p>

      <h2>Primero: ¿Cómo Fue Deportado(a)? Eso Lo Cambia Todo</h2>
      <p>
        No todas las deportaciones son iguales. La duración de su barra de reingreso bajo la INA &sect; 212(a)(9)(A)
        depende del <em>tipo</em> de remoción que recibió.
      </p>
      <ul>
        <li>
          <strong>Deportación expedita en la frontera (la barra de 5 años).</strong> Si lo regresaron en un puerto de
          entrada o lo detuvieron cerca de la frontera y lo deportaron mediante{' '}
          <strong>deportación expedita</strong> (INA &sect; 235(b)(1)), o lo deportaron como persona inadmisible en
          proceso de llegada, la ley impone una <strong>barra de 5 años</strong> para la readmisión bajo la{' '}
          &sect; 212(a)(9)(A)(i).
        </li>
        <li>
          <strong>Una orden de remoción regular de la corte de inmigración (la barra de 10 años).</strong> Si fue
          colocado(a) en procedimientos de remoción, compareció (o no compareció) ante un juez de inmigración y se
          ordenó su remoción &mdash; o salió mientras tenía una orden pendiente &mdash; la barra es de{' '}
          <strong>10 años</strong> bajo la &sect; 212(a)(9)(A)(ii). Esta es la situación más común de quienes vivieron en
          Georgia durante años antes de ser deportados.
        </li>
        <li>
          <strong>Una segunda deportación o más (la barra de 20 años).</strong> Si ha sido deportado(a){' '}
          <strong>más de una vez</strong>, la barra sube a <strong>20 años</strong>.
        </li>
        <li>
          <strong>Un delito agravado (la barra permanente).</strong> Si fue condenado(a) por un{' '}
          <strong>delito agravado</strong> según lo define la ley de inmigración, la barra bajo la &sect; 212(a)(9)(A) es{' '}
          <strong>permanente</strong> &mdash; sin fecha de término fija.
        </li>
      </ul>
      <p>
        La distinción entre la <strong>barra por deportación expedita</strong> y la{' '}
        <strong>barra por remoción regular</strong> importa porque muchas personas no saben cuál recibieron. Un
        &ldquo;retorno voluntario&rdquo; firmado en la frontera es distinto de una orden formal de remoción, y una orden
        de remoción de un juez es distinta del papeleo de deportación expedita. Obtener su expediente real (su archivo-A
        y todo su{' '}
        <Link href="/es/services/removal-defense">historial de deportación</Link>) suele ser lo primero que hace un
        abogado, porque una suposición equivocada aquí puede costar años.
      </p>

      <h2>La Trampa Que Atrapa a las Familias: La Barra Permanente Bajo la &sect; 212(a)(9)(C)</h2>
      <p>
        Aquí es donde ocurre la mayor parte del sufrimiento. Las barras anteriores ya son bastante malas, pero existe una
        disposición separada y mucho más severa: la{' '}
        <strong>barra permanente bajo la INA &sect; 212(a)(9)(C)</strong>. Se activa cuando una persona:
      </p>
      <ul>
        <li>
          estuvo en presencia ilegal en EE. UU. por un <strong>total acumulado de más de un año</strong>, <em>o</em> fue
          ordenada removida, <strong>y luego</strong>
        </li>
        <li>
          <strong>vuelve a entrar o intenta volver a entrar a los Estados Unidos sin ser admitida</strong> &mdash; es
          decir, cruza de nuevo ilegalmente.
        </li>
      </ul>
      <p>
        Esto es exactamente lo que le pasa a tantas personas: fueron deportadas, no soportaron estar separadas de sus
        hijos y cruzaron de regreso sin inspección. Ese único acto de regresar ilegalmente después de una deportación
        previa puede convertir una espera fija de 5 o 10 años en la <strong>barra permanente</strong>. Bajo la{' '}
        &sect; 212(a)(9)(C), la persona <strong>ni siquiera puede solicitar</strong> permiso para regresar legalmente
        hasta haber pasado <strong>al menos 10 años físicamente fuera de los Estados Unidos</strong> &mdash; y solo
        entonces puede pedirle al gobierno consentimiento para volver a solicitar. Algo crucial: las exenciones de
        presencia ilegal que se describen abajo <em>no</em> borran esta barra. Por eso lo peor que muchas personas hacen
        sin saberlo es volver a entrar ilegalmente después de una deportación, y por eso cualquiera en esa situación
        necesita asesoría legal honesta antes de hacer cualquier movimiento.
      </p>

      <h2>Formulario I-212: Permiso para Volver a Solicitar la Admisión</h2>
      <p>
        La herramienta que aborda las barras por remoción es el{' '}
        <strong>Formulario I-212, Solicitud de Permiso para Volver a Solicitar la Admisión a los Estados Unidos Después
        de una Deportación o Remoción</strong> &mdash; a menudo llamado solicitud de{' '}
        &ldquo;consentimiento para volver a solicitar&rdquo; o simplemente &ldquo;permiso para volver a
        solicitar.&rdquo; Un I-212 aprobado perdona la barra por remoción de la &sect; 212(a)(9)(A) (y, tras los 10 años
        de espera en el extranjero, la barra permanente de la &sect; 212(a)(9)(C)) para que la puerta vuelva a abrirse.
      </p>
      <p>
        El I-212 es <strong>discrecional</strong>. El gobierno sopesa los factores favorables contra los negativos,
        incluyendo:
      </p>
      <ul>
        <li>qué tan reciente y grave fue la remoción y cualquier violación migratoria o penal;</li>
        <li>cuánto tiempo vivió en los Estados Unidos y sus vínculos aquí;</li>
        <li>sus responsabilidades familiares &mdash; un cónyuge e hijos ciudadanos o residentes permanentes;</li>
        <li>pruebas de reformación, buen carácter moral y respeto por la ley desde entonces;</li>
        <li>el sufrimiento para usted y para sus familiares estadounidenses si se niega el permiso.</li>
      </ul>
      <p>
        Un I-212 sólido es esencialmente un caso de persuasión construido sobre documentos: no basta con calificar en el
        papel, hay que convencer a un oficial de que diga que sí. Ahí es donde una preparación con experiencia marca la
        diferencia.
      </p>

      <h2>Combinar el I-212 Con las Exenciones I-601 e I-601A</h2>
      <p>
        Esta es la parte que confunde a casi todos: una deportación previa por lo general <strong>no es lo único</strong>{' '}
        que lo mantiene fuera. La mayoría de las personas deportadas también acumularon{' '}
        <strong>presencia ilegal</strong>, que activa su propia <strong>barra de 3 o de 10 años</strong> bajo la{' '}
        &sect; 212(a)(9)(B). Así que un solo caso a menudo necesita{' '}
        <strong>dos exenciones distintas apiladas juntas</strong>:
      </p>
      <ul>
        <li>
          <strong>Formulario I-212</strong> &mdash; para perdonar la barra por <em>remoción</em> de la{' '}
          &sect; 212(a)(9)(A); y
        </li>
        <li>
          una <strong>
            <Link href="/es/blog/i-601-inadmissibility-waiver-extreme-hardship-georgia">exención del Formulario I-601</Link>
          </strong>{' '}
          &mdash; para perdonar la barra por <em>presencia ilegal</em> (y cualquier otra causal como fraude o ciertos
          delitos), que requiere probar <strong>sufrimiento extremo</strong> a un cónyuge o padre/madre ciudadano o
          residente permanente.
        </li>
      </ul>
      <p>
        Para las personas cuyo <em>único</em> problema es la presencia ilegal (sin remoción previa, sin barra
        permanente), la{' '}
        <strong>
          <Link href="/es/blog/i-601a-provisional-unlawful-presence-waiver-georgia">exención provisional I-601A</Link>
        </strong>{' '}
        les permite obtener la aprobación de la exención por presencia ilegal <em>antes</em> de salir de EE. UU. para su
        entrevista consular, acortando dramáticamente el tiempo de separación. Pero tenga cuidado: el I-601A perdona{' '}
        <strong>solo</strong> la causal de presencia ilegal. <strong>No</strong> perdona por sí solo una orden de
        remoción previa, y <strong>no</strong> ayuda con la barra permanente de la &sect; 212(a)(9)(C). Alguien con una
        deportación en su pasado generalmente necesita también la pieza del I-212, y alguien atrapado por la barra
        permanente por lo general no puede usar la vía del I-601A en absoluto. Determinar exactamente qué exenciones
        necesita su caso &mdash; y en qué orden &mdash; es el juicio legal más importante en estos casos.
      </p>

      <h2>La Vía de Regreso: El Proceso Consular</h2>
      <p>
        Para la mayoría de las personas deportadas, el camino a casa pasa por un consulado de EE. UU. en el extranjero,
        no por una oficina de USCIS dentro del país. La secuencia típica se ve así:
      </p>
      <ul>
        <li>
          <strong>Un familiar calificado presenta una petición.</strong> Por lo general, un cónyuge, padre/madre o hijo
          adulto ciudadano estadounidense presenta el Formulario I-130 para establecer la relación familiar.
        </li>
        <li>
          <strong>El caso pasa al Centro Nacional de Visas,</strong> y luego al{' '}
          <Link href="/es/services/consular-processing">proceso consular</Link> en la embajada o consulado de EE. UU. en
          el país de origen (por ejemplo, Ciudad Ju&aacute;rez para los nacionales mexicanos).
        </li>
        <li>
          <strong>Las exenciones se presentan y se deciden</strong> &mdash; el I-212 para la barra por remoción y el
          I-601 para las causales de presencia ilegal (y cualquier otra).
        </li>
        <li>
          <strong>La entrevista de visa de inmigrante</strong> ocurre en el extranjero, y si todo se aprueba, la persona
          regresa legalmente como residente permanente.
        </li>
      </ul>

      <h2>Plazo Realista y Expectativas</h2>
      <p>
        Desconfíe de cualquiera que prometa que esto es rápido. Un caso combinado de I-212 más I-601 tramitado a través
        de un consulado suele ser cuestión de <strong>años, no de meses</strong>, y a menudo requiere que la persona
        deportada esté <strong>fuera de los Estados Unidos</strong> durante gran parte del proceso. Para las familias
        atrapadas por la barra permanente de la &sect; 212(a)(9)(C), la espera puede ser de{' '}
        <strong>una década completa en el extranjero</strong> antes de siquiera poder solicitar. Son verdades duras,
        pero conocerlas de antemano permite que las familias planifiquen en lugar de ser tomadas por sorpresa. En
        algunos casos, antes de que alguien salga del país, el mejor primer paso es revisar la orden antigua en sí
        &mdash; por ejemplo, una{' '}
        <Link href="/es/blog/motion-to-reopen-reconsider-immigration-georgia">moción para reabrir o reconsiderar</Link>{' '}
        puede ser posible cuando la remoción original tuvo defectos legales o se basó en una audiencia perdida por causa
        justificada.
      </p>

      <h2>Contexto de Georgia: Situaciones Comunes Que Vemos</h2>
      <p>
        En toda el área metropolitana de Atlanta y el norte de Georgia, el patrón recurrente es una familia de estatus
        mixto: un cónyuge ciudadano estadounidense e hijos ciudadanos estadounidenses, y un padre o madre que fue
        deportado(a) hace años. A veces el padre o la madre aún está en el extranjero y la familia quiere traerlo(a) a
        casa de la manera correcta. A veces ya regresó ilegalmente y la familia necesita entender el peligro de la barra
        permanente antes de que ICE se involucre. En cualquier caso, el análisis legal es el mismo:{' '}
        <strong>identificar cada barra que aplica, trazar qué exenciones pueden eliminarlas y ser honestos sobre el
        plazo.</strong> Adivinar &mdash; o peor, no hacer nada y esperar &mdash; es como las personas pierden años y
        activan barras que eran evitables.
      </p>

      <h2>Hable con una Abogada de I-212 y Exenciones en Georgia</h2>
      <p>
        Regresar legalmente después de una deportación es una de las áreas técnicamente más exigentes del derecho
        migratorio. La diferencia entre una barra de 5 años y una permanente puede depender de un solo hecho sobre cómo
        salió y si regresó. La diferencia entre una aprobación y una negación puede depender de cómo se construyen los
        paquetes del I-212 y la{' '}
        <Link href="/es/blog/i-601-inadmissibility-waiver-extreme-hardship-georgia">exención I-601</Link>. Este no es un
        proyecto para hacer por cuenta propia.
      </p>
      <p>
        Si usted o un ser querido fue deportado(a) y quiere saber si hay una forma legal de regresar &mdash; o si alguien
        regresó ilegalmente y le preocupan las consecuencias &mdash; contacte a{' '}
        <strong>Bardi Immigration Law</strong>. La abogada <strong>Eszter Bardi</strong> maneja casos de{' '}
        <Link href="/es/services/removal-defense">defensa contra la deportación</Link> y de exenciones de reingreso,
        tiene licencia en <strong>Georgia y Alabama</strong>, y brinda acceso directo con la abogada desde su primera
        llamada.{' '}
        <Link href="/es/contact">Programe su consulta hoy</Link>.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación es solo para fines informativos y no constituye
          asesoría legal. El derecho migratorio es complejo y específico a los hechos, y cambia frecuentemente. Consulte
          a un abogado de inmigración con licencia sobre su situación individual.
        </em>
      </p>
    </div>
  );
}
