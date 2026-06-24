/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (la distinci&oacute;n entre el sello de visa y el Formulario I-94; la acumulaci&oacute;n de presencia ilegal bajo INA §212(a)(9)(B); los detonantes de salida de 180 d&iacute;as/1 a&ntilde;o para las barras de 3 y 10 a&ntilde;os; la anulaci&oacute;n de la visa bajo INA §222(g); la terminaci&oacute;n de SEVIS y las consecuencias para el EAD/autorizaci&oacute;n de empleo; la deportabilidad por estancia vencida bajo INA §237(a)(1)(B); las barras al ajuste por estancia vencida/trabajo no autorizado de INA §245(c) y la excepci&oacute;n para familiares inmediatos bajo INA §245(a); el cambio/extensi&oacute;n de estatus oportuno; la salida voluntaria bajo INA §240B; el procesamiento consular; y los perdones del Formulario I-601A provisional y del Formulario I-601) que pueden cambiar con la pol&iacute;tica de USCIS/DOS/ICE y la administraci&oacute;n. Confirmar en USCIS antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/visa-overstay-consequences-fix-status-georgia.tsx (BAR-832). Español natural, no traducción literal.

export const esTitle = 'Consecuencias de una Estancia Vencida y C&oacute;mo Arreglar su Estatus en Georgia';
export const esDescription =
  'Una abogada de inmigraci&oacute;n en Georgia explica qu&eacute; hace realmente una estancia vencida de visa, la diferencia entre el sello de visa y el I-94, la presencia ilegal y las barras de 3 y 10 a&ntilde;os, y las opciones reales para recuperar el estatus &mdash; ajuste bajo INA §245(a), procesamiento consular y los perdones I-601A e I-601. Informaci&oacute;n general, no asesor&iacute;a legal.';

export function VisaOverstayConsequencesPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        La mayor&iacute;a de la gente imagina que la poblaci&oacute;n indocumentada lleg&oacute; cruzando una frontera.
        La realidad es distinta: una gran parte de las personas sin estatus en Estados Unidos &mdash; aproximadamente{' '}
        <strong>cuatro de cada diez</strong> seg&uacute;n la mayor&iacute;a de las estimaciones &mdash; ingres&oacute;{' '}
        <em>legalmente</em> con una visa y simplemente se qued&oacute; despu&eacute;s de la fecha en que se le
        permit&iacute;a permanecer. Si esa es su situaci&oacute;n, no est&aacute; solo, y una estancia vencida rara vez
        es el final del camino. Pero lo que haga <em>despu&eacute;s</em> &mdash; y el orden en que lo haga &mdash; puede
        ser la diferencia entre arreglar su estatus y activar una barra de diez a&ntilde;os.
      </p>
      <p>
        Esta gu&iacute;a explica, para las familias y los trabajadores de todo Georgia y Alabama, qu&eacute; hace
        realmente una estancia vencida de visa, qu&eacute; <em>no</em> hace, y las opciones reales para recuperar el
        estatus.
      </p>

      <h2>La confusi&oacute;n del I-94 &mdash; su sello de visa no es su fecha l&iacute;mite</h2>
      <p>
        El error m&aacute;s com&uacute;n y costoso es confundir el <strong>sello de visa</strong> de su pasaporte con su
        per&iacute;odo de estancia autorizada. Son dos cosas diferentes.
      </p>
      <ul>
        <li>
          El <strong>sello de visa</strong> (la calcoman&iacute;a de su pasaporte) es solo un documento de viaje &mdash;
          permiso para <em>pedir</em> entrar a Estados Unidos hasta su fecha de vencimiento. No dice nada sobre
          cu&aacute;nto tiempo puede permanecer.
        </li>
        <li>
          El <strong>Formulario I-94</strong> &mdash; el registro de entrada/salida que se emite cuando es admitido
          &mdash; es lo que controla cu&aacute;nto tiempo puede permanecer legalmente. Muestra una{' '}
          <strong>fecha espec&iacute;fica</strong> o la anotaci&oacute;n <strong>&ldquo;D/S&rdquo;</strong>{' '}
          (duraci&oacute;n de estatus).
        </li>
      </ul>
      <p>
        Su visa puede ser v&aacute;lida por a&ntilde;os y aun as&iacute; usted puede estar en presencia ilegal, porque su
        I-94 venci&oacute; hace meses. Lo contrario tambi&eacute;n es cierto. Revise siempre su I-94 en el{' '}
        <a href="https://i94.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer">sitio web del I-94 de CBP</a>{' '}
        &mdash; es gratis, y es la fecha que importa.
      </p>

      <h2>Lo que una estancia vencida s&iacute; le hace</h2>
      <p>
        Una vez que termina su estancia autorizada, comienzan a suceder varias cosas &mdash; algunas de inmediato, otras
        con el tiempo:
      </p>
      <ul>
        <li>
          <strong>Empieza a acumularse la presencia ilegal.</strong> Si fue admitido hasta una fecha fija del I-94,
          comienza a acumular{' '}
          <Link href="/es/blog/unlawful-presence-3-year-10-year-bar-georgia">presencia ilegal</Link> el d&iacute;a
          siguiente al vencimiento. Este es el reloj que alimenta las barras de 3 y 10 a&ntilde;os &mdash; m&aacute;s
          sobre esto abajo.
        </li>
        <li>
          <strong>Su visa queda autom&aacute;ticamente anulada.</strong> Bajo <strong>INA &sect; 222(g)</strong>,
          quedarse despu&eacute;s de una fecha fija del I-94 generalmente <em>anula</em> su visa existente, y cualquier
          visa futura por lo general debe obtenerse en su pa&iacute;s de origen &mdash; no en un tercer pa&iacute;s.
        </li>
        <li>
          <strong>Por lo general no puede extender ni cambiar de estatus.</strong> En la mayor&iacute;a de los casos,
          pierde la elegibilidad para solicitar una extensi&oacute;n o un <strong>cambio de estatus</strong> dentro de
          Estados Unidos una vez que ha ca&iacute;do fuera de estatus.
        </li>
        <li>
          <strong>Estudiantes: terminaci&oacute;n de SEVIS.</strong> Un{' '}
          <Link href="/es/blog/student-visa-f1-opt-stem-georgia">estudiante F-1 o M-1</Link> que viola su estatus puede
          ver su <strong>registro SEVIS terminado</strong>, lo que pone fin a la autorizaci&oacute;n de empleo y puede
          iniciar la presencia ilegal tras una determinaci&oacute;n formal.
        </li>
        <li>
          <strong>La autorizaci&oacute;n de empleo puede revocarse.</strong> Un{' '}
          <Link href="/es/blog/employment-authorization-ead-georgia">EAD</Link> ligado a su estatus puede revocarse o
          simplemente vencer, y seguir trabajando sin autorizaci&oacute;n crea una barra aparte para arreglar su estatus
          m&aacute;s adelante.
        </li>
      </ul>

      <h2>Lo que una estancia vencida <em>no</em> hace autom&aacute;ticamente</h2>
      <p>
        El miedo impulsa malas decisiones, as&iacute; que es igual de importante tener claro lo que <em>no</em> sucede en
        el momento en que vence su I-94:
      </p>
      <ul>
        <li>
          <strong>No es arrestado autom&aacute;ticamente</strong>, e ICE no aparece en su puerta porque pas&oacute; una
          fecha.
        </li>
        <li>
          <strong>No es deportado de inmediato.</strong> La remoci&oacute;n es un proceso legal que transcurre a
          trav&eacute;s de{' '}
          <Link href="/es/blog/notice-to-appear-georgia">una Notificaci&oacute;n de Comparecencia</Link> y la corte de
          inmigraci&oacute;n &mdash; no es autom&aacute;tica.
        </li>
        <li>
          <strong>No</strong> necesariamente pierde toda v&iacute;a hacia una green card &mdash; para muchas personas,
          una v&iacute;a espec&iacute;fica (abajo) sobrevive por completo a una estancia vencida.
        </li>
      </ul>
      <p>
        Lo que una estancia vencida <em>s&iacute;</em> hace es volverlo <strong>deportable</strong> bajo{' '}
        <strong>INA &sect; 237(a)(1)(B)</strong>. Usted est&aacute; fuera de estatus y es removible si se le coloca en
        procedimientos &mdash; que es precisamente la raz&oacute;n por la que la meta es volver <em>a</em> tener estatus
        antes de que eso ocurra.
      </p>

      <h2>Sus opciones &mdash; seg&uacute;n la situaci&oacute;n</h2>
      <p>
        No hay una sola respuesta; la jugada correcta depende de qui&eacute;n es usted y de cu&aacute;nto tiempo ha
        pasado. Las v&iacute;as m&aacute;s comunes:
      </p>

      <h2>1. Ajustar el estatus dentro de EE. UU. &mdash; el salvavidas del familiar inmediato</h2>
      <p>
        Esta es la excepci&oacute;n m&aacute;s importante y la que la gente pasa por alto. Si usted es{' '}
        <strong>familiar inmediato de un ciudadano estadounidense</strong> &mdash; c&oacute;nyuge, padre o madre de un
        ciudadano de 21 a&ntilde;os o m&aacute;s, o hijo soltero menor de 21 &mdash; por lo general a&uacute;n puede{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajustar el estatus</Link> a una green card{' '}
        <em>dentro de Estados Unidos bajo INA &sect; 245(a)</em>, <strong>incluso despu&eacute;s de una estancia
        vencida</strong>. Las barras por estancia vencida y trabajo no autorizado de <strong>INA &sect; 245(c)</strong>{' '}
        que bloquean a la mayor&iacute;a de los solicitantes quedan <strong>perdonadas</strong> para los familiares
        inmediatos, siempre y cuando haya sido <em>inspeccionado y admitido</em> cuando ingres&oacute; por primera vez
        (lo cual una estancia vencida de visa casi siempre cumple). Para un visitante que se qued&oacute; de m&aacute;s
        y luego se cas&oacute; con un ciudadano estadounidense, esto a menudo significa que todo el caso puede
        terminarse aqu&iacute; &mdash; sin salida del pa&iacute;s, sin barra.
      </p>

      <h2>2. Cambiar o extender el estatus &mdash; antes de que venza el I-94</h2>
      <p>
        Si su I-94 <strong>todav&iacute;a no</strong> ha vencido, es posible que pueda presentar de manera oportuna una{' '}
        <strong>extensi&oacute;n</strong> o un <strong>cambio de estatus</strong> (por ejemplo, de visitante B-2 a
        estudiante F-1, o a una categor&iacute;a de trabajo) en el Formulario I-539 o I-129. Una presentaci&oacute;n
        oportuna y no frivola tambi&eacute;n puede <em>pausar</em> la presencia ilegal mientras est&aacute; pendiente.
        Esta opci&oacute;n desaparece en gran medida una vez que usted ya est&aacute; fuera de estatus &mdash; por lo
        cual actuar <em>antes</em> de la fecha importa tanto.
      </p>

      <h2>3. Procesamiento consular &mdash; y la trampa de la salida</h2>
      <p>
        Si <em>no</em> es elegible para ajustar dentro de EE. UU. &mdash; por ejemplo, lo patrocina un familiar que es
        residente permanente legal en lugar de ciudadano, o ingres&oacute; sin inspecci&oacute;n &mdash; la green card
        se obtiene en el extranjero mediante{' '}
        <Link href="/es/blog/consular-processing-immigrant-visa-georgia">procesamiento consular</Link>. Aqu&iacute;
        est&aacute; la trampa: si ha acumulado m&aacute;s de <strong>180 d&iacute;as</strong> de presencia ilegal,{' '}
        <em>salir del pa&iacute;s</em> para esa entrevista es el acto que activa la barra &mdash; una{' '}
        <strong>barra de 3 a&ntilde;os</strong> por m&aacute;s de 180 d&iacute;as, y una{' '}
        <strong>barra de 10 a&ntilde;os</strong> por un a&ntilde;o o m&aacute;s.{' '}
        <strong>No salga para una entrevista consular sin un plan para la barra.</strong>
      </p>

      <h2>4. Los perdones I-601A e I-601 &mdash; perdonar la barra</h2>
      <p>
        Para las personas que activar&aacute;n una barra al salir, la herramienta decisiva es el{' '}
        <strong>Formulario I-601A, perd&oacute;n provisional por presencia ilegal</strong>. Permite que los solicitantes
        elegibles obtengan el perd&oacute;n de la barra por presencia ilegal{' '}
        <strong>mientras a&uacute;n est&aacute;n en Estados Unidos</strong>, antes de salir para la entrevista &mdash;
        convirtiendo una posible separaci&oacute;n de diez a&ntilde;os en un viaje de d&iacute;as o semanas. Requiere
        demostrar <strong>dificultad extrema</strong> a un c&oacute;nyuge o padre que sea ciudadano estadounidense o
        residente permanente. Consulte nuestra{' '}
        <Link href="/es/blog/i-601a-provisional-unlawful-presence-waiver-georgia">gu&iacute;a del perd&oacute;n
        provisional I-601A</Link>. Cuando hay otros motivos involucrados &mdash; fraude, ciertos delitos o una
        remoci&oacute;n previa &mdash; puede necesitarse un{' '}
        <Link href="/es/blog/i-601-inadmissibility-waiver-extreme-hardship-georgia">perd&oacute;n del Formulario
        I-601</Link> m&aacute;s amplio en lugar del I-601A, o adem&aacute;s de &eacute;l.
      </p>

      <h2>5. Salida voluntaria &mdash; irse antes de que la barra se endurezca</h2>
      <p>
        En algunos casos, sobre todo si usted ya est&aacute; en procedimientos de remoci&oacute;n, solicitar la{' '}
        <Link href="/es/blog/voluntary-departure-immigration-court-georgia">salida voluntaria</Link> bajo{' '}
        <strong>INA &sect; 240B</strong> le permite irse en sus propios t&eacute;rminos y evitar una orden formal de
        remoci&oacute;n. Esta es una decisi&oacute;n estrat&eacute;gica con verdaderas concesiones &mdash; salir
        a&uacute;n interact&uacute;a con las barras por presencia ilegal &mdash; y nunca debe hacerse sin antes evaluar
        si est&aacute; disponible una v&iacute;a como el ajuste por familiar inmediato.
      </p>

      <h2>La &uacute;nica regla que salva familias: que lo eval&uacute;en antes de salir</h2>
      <p>
        Los casos de estancia vencida m&aacute;s crueles que vemos en Georgia y Alabama no son los de las personas que
        se quedaron &mdash; son los de las personas que <em>se fueron</em> para &ldquo;hacerlo de la manera
        correcta&rdquo; sin asesor&iacute;a, y se activaron a s&iacute; mismas una barra de diez a&ntilde;os camino a una
        entrevista que de otro modo habr&iacute;an aprobado. La secuencia correcta es casi siempre la misma: confirmar
        si puede ajustar <em>dentro</em> del pa&iacute;s, evaluar cada motivo de inadmisibilidad, preparar cualquier
        perd&oacute;n <em>antes</em> de viajar, y solo entonces reservar un vuelo. El orden importa m&aacute;s que casi
        cualquier otra cosa en un caso de estancia vencida.
      </p>

      <h2>Hable con Eszter Bardi &mdash; consulta gratuita</h2>
      <p>
        Si su I-94 ha vencido &mdash; o no est&aacute; seguro de si ha vencido &mdash; <strong>no salga de Estados
        Unidos para &ldquo;arreglar&rdquo; su estatus sin asesor&iacute;a legal.</strong> En Bardi Immigration Law, la
        abogada <strong>Eszter Bardi</strong> ayuda a personas de todo Georgia y Alabama a leer correctamente su I-94, a
        calcular exactamente cu&aacute;nta presencia ilegal tienen, y a identificar si pueden arreglar su estatus desde
        dentro del pa&iacute;s o necesitan un perd&oacute;n primero.
      </p>
      <p>
        <strong>Agende su consulta gratuita hoy.</strong> Trabajar&aacute; directamente con la abogada Bardi &mdash; no
        con un especialista de admisi&oacute;n. <Link href="/es/contact">Solicite su consulta gratuita en
        l&iacute;nea.</Link> Hablamos espa&ntilde;ol. Conozca m&aacute;s sobre nuestros servicios de{' '}
        <Link href="/services/family-based-immigration">inmigraci&oacute;n basada en la familia</Link>.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este art&iacute;culo ofrece informaci&oacute;n legal general y no
          constituye asesor&iacute;a legal. La ley migratoria es compleja, espec&iacute;fica de cada caso y cambia con
          frecuencia. Las consecuencias de una estancia vencida de visa, las barras por presencia ilegal, la
          elegibilidad para ajustar el estatus, y los perdones I-601A e I-601 en particular involucran reglas detalladas
          y t&eacute;cnicas &mdash; confirme la ley vigente y su caso individual con un abogado de inmigraci&oacute;n con
          licencia antes de presentar tr&aacute;mites o viajar.
        </em>
      </p>
    </div>
  );
}
