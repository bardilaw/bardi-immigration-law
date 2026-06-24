/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (la diferencia entre presencia ilegal y estatus ilegal, las barras de 3 y 10 a&ntilde;os bajo INA §212(a)(9)(B) y los umbrales de 180 d&iacute;as/1 a&ntilde;o, el detonante de la salida del pa&iacute;s, los per&iacute;odos que no acumulan presencia ilegal bajo §212(a)(9)(B)(iii) (menores de 18 a&ntilde;os, solicitud de asilo de buena fe pendiente, Programa de Unidad Familiar, c&oacute;nyuges/hijos maltratados/VAWA), la exenci&oacute;n por dificultad extrema de §212(a)(9)(B)(v), la barra permanente de §212(a)(9)(C), la suspensi&oacute;n del reloj por un ajuste de estatus de buena fe pendiente, y los Formularios I-601A provisional e I-601). Estas reglas pueden cambiar con la pol&iacute;tica de USCIS/DOS y la administraci&oacute;n. Confirmar contra USCIS antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/unlawful-presence-3-year-10-year-bar-georgia.tsx (BAR-832). Español natural, no traducción literal.

export const esTitle = 'Las Barras de 3 y 10 A&ntilde;os por Presencia Ilegal en Georgia';
export const esDescription =
  'Una abogada de inmigraci&oacute;n en Georgia explica c&oacute;mo funciona la presencia ilegal bajo INA §212(a)(9)(B): la diferencia entre presencia ilegal y estatus ilegal, cu&aacute;ndo empieza y se detiene el reloj, por qu&eacute; salir del pa&iacute;s es lo que activa la barra de 3 o 10 a&ntilde;os, qui&eacute;n est&aacute; protegido y las exenciones I-601A e I-601. Informaci&oacute;n general, no asesor&iacute;a legal.';

export function UnlawfulPresenceBarPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Es una de las reglas m&aacute;s malentendidas &mdash; y m&aacute;s peligrosas &mdash; de toda la ley
        migratoria. Una persona puede vivir en Estados Unidos durante a&ntilde;os, casarse con un ciudadano
        estadounidense, criar hijos estadounidenses y tener, en el papel, un camino claro hacia la residencia, solo
        para destruir ese camino en el instante en que sube a un avi&oacute;n para asistir a su entrevista de visa en
        el extranjero. La raz&oacute;n es una penalidad llamada <strong>la barra de tres y diez a&ntilde;os</strong>,
        activada por algo que la ley denomina <strong>&ldquo;presencia ilegal&rdquo;</strong>.
      </p>
      <p>
        Esta gu&iacute;a explica c&oacute;mo funciona la presencia ilegal bajo{' '}
        <strong>INA &sect; 212(a)(9)(B)</strong> para las familias de Georgia y Alabama: la diferencia cr&iacute;tica
        entre presencia ilegal y <em>estatus</em> ilegal, cu&aacute;ndo empieza y se detiene el reloj, por qu&eacute;{' '}
        <em>salir del pa&iacute;s</em> es lo que en realidad activa la barra, qui&eacute;n est&aacute; protegido y las
        exenciones que pueden perdonarla.
      </p>

      <h2>Presencia ilegal vs. estatus ilegal &mdash; la distinci&oacute;n que lo controla todo</h2>
      <p>
        Estos dos t&eacute;rminos suenan igual, pero no lo son, y la diferencia decide casos. El{' '}
        <strong>estatus ilegal</strong> significa que usted no cumple con la ley migratoria &mdash; por ejemplo,
        viol&oacute; los t&eacute;rminos de su visa o nunca tuvo estatus desde el principio. La{' '}
        <strong>presencia ilegal</strong> es un reloj espec&iacute;fico y distinto que cuenta los d&iacute;as que
        usted permanece en EE. UU. <em>despu&eacute;s</em> de que vence su estancia autorizada o sin haber sido
        admitido nunca. Solo la <em>presencia ilegal</em> &mdash; no el estatus ilegal por s&iacute; solo &mdash;
        activa las barras de 3 y 10 a&ntilde;os.
      </p>
      <p>
        &iquest;Por qu&eacute; importa esto? Porque alguien puede estar fuera de estatus sin acumular todav&iacute;a
        presencia ilegal. Un estudiante en estatus F-1, por ejemplo, generalmente es admitido por{' '}
        &ldquo;duraci&oacute;n de estatus&rdquo; (D/S) y no hasta una fecha fija. Incluso si ese estudiante cae fuera
        de estatus, la presencia ilegal normalmente no empieza a acumularse hasta que USCIS o un juez de inmigraci&oacute;n
        determina formalmente la violaci&oacute;n. Un visitante admitido hasta una fecha espec&iacute;fica en el{' '}
        <strong>Formulario I-94</strong>, en cambio, empieza a acumular presencia ilegal el d&iacute;a siguiente al
        vencimiento de esa fecha.
      </p>

      <h2>Cu&aacute;ndo empieza el reloj &mdash; y cu&aacute;ndo se detiene</h2>
      <p>La presencia ilegal generalmente empieza a acumularse en la primera de estas fechas:</p>
      <ul>
        <li>
          El d&iacute;a siguiente a la <strong>fecha de vencimiento de su I-94</strong> si fue admitido hasta una
          fecha fija y se qued&oacute; m&aacute;s tiempo;
        </li>
        <li>
          El d&iacute;a siguiente a que un <strong>juez de inmigraci&oacute;n</strong> o <strong>USCIS</strong>{' '}
          determine una violaci&oacute;n de estatus (com&uacute;n en el contexto de la duraci&oacute;n de estatus); o
        </li>
        <li>
          El d&iacute;a en que <strong>entr&oacute; sin inspecci&oacute;n</strong> (&ldquo;EWI&rdquo;) &mdash; para
          quien cruz&oacute; la frontera sin ser admitido ni recibir parole, el reloj corre desde la fecha de entrada.
        </li>
      </ul>
      <p>
        El reloj tambi&eacute;n puede <strong>detenerse o pausarse</strong>. Presentar una{' '}
        <strong>solicitud de ajuste de estatus de buena fe</strong> generalmente detiene la acumulaci&oacute;n de
        presencia ilegal mientras est&aacute; pendiente, y una solicitud de{' '}
        <strong>extensi&oacute;n o cambio de estatus</strong> presentada a tiempo y no fr&iacute;vola puede suspender
        la acumulaci&oacute;n mientras est&aacute; en revisi&oacute;n. Estas reglas de suspensi&oacute;n son
        t&eacute;cnicas y dependen de los hechos &mdash; aplicarlas mal puede costarle a una familia una d&eacute;cada.
      </p>

      <h2>El detonante de la salida &mdash; la barra solo se activa cuando usted se va</h2>
      <p>
        Aqu&iacute; est&aacute; la parte que atrapa a familias de buena fe. Bajo{' '}
        <strong>INA &sect; 212(a)(9)(B)</strong>:
      </p>
      <ul>
        <li>
          M&aacute;s de <strong>180 d&iacute;as</strong> (pero menos de un a&ntilde;o) de presencia ilegal, seguidos
          de una salida del pa&iacute;s, activan una <strong>barra de tres a&ntilde;os</strong> para regresar; y
        </li>
        <li>
          <strong>Un a&ntilde;o o m&aacute;s</strong> de presencia ilegal, seguido de una salida, activa una{' '}
          <strong>barra de diez a&ntilde;os</strong>.
        </li>
      </ul>
      <p>
        La barra <em>no</em> se activa al acumular el tiempo &mdash; se activa al <strong>salir de Estados
        Unidos</strong> despu&eacute;s de haberlo acumulado. Por eso, quien entr&oacute; sin inspecci&oacute;n y debe
        viajar al extranjero para el{' '}
        <Link href="/es/blog/consular-processing-immigrant-visa-georgia">proceso consular</Link> enfrenta una trampa
        cruel: el mismo viaje requerido para obtener la visa de inmigrante es el acto que dispara la barra de diez
        a&ntilde;os. Cualquier persona con presencia ilegal significativa deber&iacute;a obtener una evaluaci&oacute;n
        legal <em>antes</em> de comprar un solo boleto de avi&oacute;n.
      </p>

      <h2>Qui&eacute;n est&aacute; protegido &mdash; per&iacute;odos que no cuentan</h2>
      <p>
        El Congreso incorpor&oacute; excepciones. Bajo <strong>INA &sect; 212(a)(9)(B)(iii)</strong>, ciertos
        per&iacute;odos <strong>no</strong> cuentan en absoluto para la presencia ilegal:
      </p>
      <ul>
        <li>
          <strong>Menores de edad.</strong> No se acumula presencia ilegal mientras una persona es{' '}
          <strong>menor de 18 a&ntilde;os</strong>.
        </li>
        <li>
          <strong>Solicitantes de asilo pendientes.</strong> El tiempo con una{' '}
          <strong>solicitud de asilo de buena fe pendiente</strong> generalmente no se acumula (siempre que el
          solicitante no trabaje sin autorizaci&oacute;n). Vea nuestra gu&iacute;a sobre el{' '}
          <Link href="/es/blog/asylum-one-year-bar-exceptions-georgia">plazo de un a&ntilde;o para solicitar
          asilo</Link>.
        </li>
        <li>
          <strong>Beneficiarios de Unidad Familiar.</strong> El tiempo protegido bajo el Programa de Unidad Familiar
          no cuenta.
        </li>
        <li>
          <strong>C&oacute;nyuges e hijos maltratados (VAWA).</strong> Existe una protecci&oacute;n para los{' '}
          <Link href="/es/blog/vawa-self-petition-domestic-violence-immigration-georgia">auto-peticionarios de
          VAWA</Link> y ciertos c&oacute;nyuges e hijos maltratados que puedan demostrar una conexi&oacute;n entre el
          abuso y su presencia ilegal.
        </li>
      </ul>
      <p>
        Una nota sobre el estatuto: estas protecciones de <em>no acumulaci&oacute;n</em> est&aacute;n en la
        subsecci&oacute;n (B)(iii). La disposici&oacute;n distinta de{' '}
        <strong>&sect; 212(a)(9)(B)(v)</strong> es la <strong>exenci&oacute;n</strong> &mdash; el camino de perd&oacute;n
        para las personas que <em>s&iacute;</em> activaron una barra, que se explica a continuaci&oacute;n.
      </p>

      <h2>&iquest;Ya activ&oacute; una barra? Las exenciones I-601A e I-601</h2>
      <p>
        Activar una barra no siempre es el final del camino. Las barras por presencia ilegal pueden{' '}
        <strong>perdonarse</strong> bajo <strong>INA &sect; 212(a)(9)(B)(v)</strong> si usted puede demostrar que
        negarle la admisi&oacute;n causar&iacute;a una <strong>&ldquo;dificultad extrema&rdquo;</strong> a un{' '}
        <strong>c&oacute;nyuge o padre/madre ciudadano estadounidense o residente permanente legal</strong>. (La
        dificultad para sus hijos, por s&iacute; sola, no califica &mdash; solo su efecto sobre un c&oacute;nyuge o
        padre/madre calificado). Dos formularios brindan este alivio:
      </p>
      <ul>
        <li>
          <strong>Formulario I-601A, la exenci&oacute;n provisional por presencia ilegal.</strong> Esta es la
          herramienta revolucionaria para c&oacute;nyuges indocumentados. Permite que los solicitantes elegibles
          obtengan la exenci&oacute;n de la barra por presencia ilegal{' '}
          <em>mientras a&uacute;n est&aacute;n en Estados Unidos</em>, antes de salir para la entrevista consular
          &mdash; convirtiendo una posible separaci&oacute;n de diez a&ntilde;os en un viaje de d&iacute;as o semanas.
          Vea nuestra gu&iacute;a detallada de la{' '}
          <Link href="/es/blog/i-601a-provisional-unlawful-presence-waiver-georgia">exenci&oacute;n provisional
          I-601A</Link>.
        </li>
        <li>
          <strong>Formulario I-601, la exenci&oacute;n m&aacute;s amplia de inadmisibilidad.</strong> Cuando hay otros
          motivos de por medio &mdash; fraude, ciertos delitos o una deportaci&oacute;n previa &mdash; puede requerirse
          una{' '}
          <Link href="/es/blog/i-601-inadmissibility-waiver-extreme-hardship-georgia">exenci&oacute;n completa con el
          Formulario I-601</Link> adem&aacute;s del I-601A, o en lugar de este.
        </li>
      </ul>

      <h2>La barra permanente &mdash; una trampa distinta y m&aacute;s severa</h2>
      <p>
        No confunda las barras de 3 y 10 a&ntilde;os con la <strong>&ldquo;barra permanente&rdquo;</strong> bajo{' '}
        <strong>INA &sect; 212(a)(9)(C)</strong>. Esa penalidad mucho m&aacute;s severa se aplica a quien acumul&oacute;
        m&aacute;s de un a&ntilde;o de presencia ilegal (en conjunto), <em>sali&oacute;</em> del pa&iacute;s y luego{' '}
        <strong>volvi&oacute; a entrar o intent&oacute; volver a entrar a EE. UU. sin ser admitido</strong>. La barra
        permanente generalmente ni siquiera puede perdonarse hasta que la persona haya pasado{' '}
        <strong>diez a&ntilde;os fuera</strong> del pa&iacute;s y luego obtenga el consentimiento para volver a
        solicitar la admisi&oacute;n. Por eso un solo reingreso no autorizado puede ser catastr&oacute;fico &mdash; y
        por eso cualquier persona con una salida y un reingreso previos debe ser evaluada con cuidado. Vea nuestra
        gu&iacute;a sobre las{' '}
        <Link href="/es/blog/after-deportation-reentry-bars-waivers-georgia">barras de reingreso y exenciones tras una
        salida</Link>.
      </p>

      <h2>Qu&eacute; significa esto para las familias de Georgia y Alabama</h2>
      <p>
        En Georgia y Alabama, el escenario m&aacute;s com&uacute;n que vemos es el de un c&oacute;nyuge indocumentado
        que entr&oacute; sin inspecci&oacute;n, se cas&oacute; con un ciudadano estadounidense y quiere regularizar su
        estatus. Como no puede{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajustar su estatus</Link> dentro del pa&iacute;s,
        enfrenta el proceso consular en el extranjero &mdash; y la barra por presencia ilegal que viene con la salida.
        La secuencia correcta casi siempre es: confirmar que no existan <em>otros</em> motivos de inadmisibilidad,
        construir el expediente de dificultad extrema, obtener la aprobaci&oacute;n del I-601A y solo entonces viajar.
        Hecho en el orden equivocado, la misma familia que calificaba para la residencia puede quedar separada durante
        diez a&ntilde;os.
      </p>

      <h2>Por qu&eacute; importa un abogado de inmigraci&oacute;n</h2>
      <p>
        La presencia ilegal se rige por relojes superpuestos, reglas de suspensi&oacute;n y excepciones que son
        f&aacute;ciles de contar mal e implacables cuando se hace. La diferencia entre 179 d&iacute;as y 181 d&iacute;as,
        o entre una salida que activa una barra y otra que no, puede decidir si una familia permanece unida. Un abogado
        con experiencia traza su acumulaci&oacute;n exacta, examina la barra permanente y otros motivos de
        inadmisibilidad, y ordena cualquier exenci&oacute;n <em>antes</em> de que usted salga del pa&iacute;s. Conozca
        m&aacute;s sobre nuestros servicios de{' '}
        <Link href="/es/services/family-based-immigration">inmigraci&oacute;n familiar</Link>.
      </p>

      <h2>Hable con Eszter Bardi &mdash; Consulta gratuita</h2>
      <p>
        Si usted o su c&oacute;nyuge se{' '}
        <Link href="/es/blog/visa-overstay-consequences-fix-status-georgia">qued&oacute; m&aacute;s tiempo del
        permitido con una visa</Link> o entr&oacute; sin inspecci&oacute;n,{' '}
        <strong>no salga de Estados Unidos para &ldquo;arreglar&rdquo; su estatus sin asesor&iacute;a legal.</strong>{' '}
        En Bardi Immigration Law, la abogada <strong>Eszter Bardi</strong> ayuda a las familias de Georgia y Alabama a
        entender exactamente cu&aacute;nta presencia ilegal han acumulado, si se aplica una barra, y c&oacute;mo las
        exenciones I-601A e I-601 pueden reducir al m&iacute;nimo su tiempo de separaci&oacute;n.
      </p>
      <p>
        <strong>Agende su consulta gratuita hoy.</strong> Calcularemos su presencia ilegal, examinaremos la barra
        permanente y otros asuntos, y trazaremos el camino m&aacute;s seguro a seguir. Trabajar&aacute; directamente
        con la abogada Bardi &mdash; no con un especialista de admisi&oacute;n.{' '}
        <Link href="/es/contact">Solicite su consulta gratuita en l&iacute;nea.</Link> Hablamos espa&ntilde;ol.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este art&iacute;culo ofrece informaci&oacute;n legal general y no
          constituye asesor&iacute;a legal. La ley migratoria es compleja, espec&iacute;fica de cada caso y cambia con
          frecuencia. La acumulaci&oacute;n de presencia ilegal, las reglas de suspensi&oacute;n y las barras de 3
          a&ntilde;os, 10 a&ntilde;os y permanente en particular implican reglas de elegibilidad detalladas y
          t&eacute;cnicas &mdash; confirme la ley vigente y su caso individual con un abogado de inmigraci&oacute;n con
          licencia antes de presentar una solicitud o viajar.
        </em>
      </p>
    </div>
  );
}
