/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (la regla de tres años del INA §319(a) para cónyuges de ciudadanos, los requisitos de unión matrimonial y presencia física, los tiempos de la residencia condicional y su interacción con el Formulario I-751, la excepción VAWA/cónyuge maltratado del §319(a), la vía acelerada del §319(b) para cónyuges de ciudadanos destacados en el extranjero, la base de cinco años del §316, el proceso N-400 y el buen carácter moral) que pueden cambiar. Confirmar con USCIS antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/citizenship-by-marriage-3-year-rule-georgia.tsx (BAR-807). Español natural, no traducción literal.

export const esTitle = 'Ciudadanía por Matrimonio: La Regla de los 3 Años en Georgia';
export const esDescription =
  'Una abogada de inmigración en Georgia explica la regla de tres años del INA §319(a) para cónyuges de ciudadanos: requisitos de unión matrimonial y presencia física, green card condicional e I-751, el proceso N-400 y las excepciones para sobrevivientes de abuso y cónyuges destacados en el extranjero.';

export function CitizenshipByMarriage3YearRulePostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        La mayor&iacute;a de los titulares de la green card deben esperar <strong>cinco a&ntilde;os</strong> antes de
        poder solicitar la ciudadan&iacute;a estadounidense. Pero si usted obtuvo su green card a trav&eacute;s del
        matrimonio con un ciudadano estadounidense &mdash; y sigue casado y conviviendo con ese mismo ciudadano &mdash;
        la ley le permite solicitarla <strong>dos a&ntilde;os antes</strong>. Esta es la <strong>regla de los tres
        a&ntilde;os</strong> bajo la secci&oacute;n 319(a) de la Ley de Inmigraci&oacute;n y Nacionalidad, y para
        muchas parejas en Georgia acorta considerablemente el camino hacia la ciudadan&iacute;a.
      </p>
      <p>
        La regla suena sencilla, pero tiene varias piezas en movimiento que confunden a la gente: su matrimonio debe
        durar hasta que usted preste el Juramento de Lealtad, una green card condicional (de dos a&ntilde;os) afecta los
        tiempos, y un viaje largo al extranjero puede romper su elegibilidad sin que usted se d&eacute; cuenta. Esta
        gu&iacute;a explica con exactitud qui&eacute;n califica, en qu&eacute; se diferencia la v&iacute;a de tres
        a&ntilde;os de la v&iacute;a est&aacute;ndar de cinco a&ntilde;os, qu&eacute; sucede con una green card
        condicional, y las excepciones que protegen a los sobrevivientes de abuso y a los c&oacute;nyuges de ciudadanos
        que trabajan en el extranjero.
      </p>

      <h2>La regla de los tres a&ntilde;os: requisitos del INA &sect;319(a)</h2>
      <p>
        Bajo el <strong>INA &sect;319(a)</strong>, un residente permanente legal casado con un ciudadano estadounidense
        puede naturalizarse despu&eacute;s de apenas tres a&ntilde;os &mdash; en lugar de los cinco habituales &mdash;
        pero solo si se cumple cada una de estas condiciones:
      </p>
      <ul>
        <li>
          Usted ha sido <strong>residente permanente legal (titular de la green card) durante al menos tres
          a&ntilde;os</strong>{' '}
          al momento de presentar el Formulario N-400;
        </li>
        <li>
          Usted ha estado <strong>viviendo en uni&oacute;n matrimonial con su c&oacute;nyuge ciudadano durante esos
          tres a&ntilde;os completos</strong> &mdash; es decir, residiendo efectivamente juntos como pareja casada;
        </li>
        <li>
          Su c&oacute;nyuge ha sido <strong>ciudadano estadounidense durante todo el per&iacute;odo de tres
          a&ntilde;os</strong> (si su c&oacute;nyuge se naturaliz&oacute; despu&eacute;s de que usted obtuvo su green
          card, el reloj corre a partir de la m&aacute;s reciente de las dos fechas);
        </li>
        <li>
          Usted ha mantenido <strong>residencia continua</strong> en Estados Unidos durante los tres a&ntilde;os
          inmediatamente anteriores a la presentaci&oacute;n, y de forma continua desde la presentaci&oacute;n hasta el
          d&iacute;a en que presta juramento;
        </li>
        <li>
          Usted ha tenido <strong>presencia f&iacute;sica</strong> en Estados Unidos durante al menos{' '}
          <strong>18 meses</strong> (la mitad) de esos tres a&ntilde;os;
        </li>
        <li>
          Usted ha vivido durante al menos <strong>tres meses</strong> en el estado o distrito de USCIS donde presenta
          la solicitud &mdash; Georgia, para la mayor&iacute;a de nuestros clientes;
        </li>
        <li>
          Usted es una persona de <strong>buen car&aacute;cter moral</strong>, puede leer, escribir y hablar{' '}
          <strong>ingl&eacute;s</strong> b&aacute;sico, y puede aprobar el <strong>examen de civismo</strong>.
        </li>
      </ul>
      <p>
        Un requisito merece &eacute;nfasis especial: la uni&oacute;n matrimonial debe seguir existiendo <em>el d&iacute;a
        en que usted presta el juramento.</em> Si se divorcia, se separa legalmente, o su c&oacute;nyuge ciudadano
        fallece antes de ese paso final, usted pierde el beneficio de los tres a&ntilde;os &mdash; incluso si su
        entrevista ya sali&oacute; bien.
      </p>

      <h2>En qu&eacute; se diferencia la v&iacute;a de tres a&ntilde;os de la v&iacute;a est&aacute;ndar de cinco a&ntilde;os</h2>
      <p>
        La regla ordinaria de naturalizaci&oacute;n vive en el <strong>INA &sect;316</strong>. Exige cinco a&ntilde;os
        como residente permanente, presencia f&iacute;sica de al menos 30 meses dentro de esos cinco a&ntilde;os, y buen
        car&aacute;cter moral durante el per&iacute;odo de cinco a&ntilde;os. La v&iacute;a basada en el matrimonio bajo
        el &sect;319(a) conserva los mismos requisitos de ingl&eacute;s, civismo y buen car&aacute;cter moral, pero
        comprime el reloj de residencia de cinco a&ntilde;os a tres, y el requisito de presencia f&iacute;sica de 30
        meses a 18.
      </p>
      <p>
        El precio a pagar es la condici&oacute;n del matrimonio. Un solicitante de cinco a&ntilde;os no le rinde cuentas
        a nadie sobre su vida personal; un solicitante de tres a&ntilde;os tiene que probar un matrimonio genuino y
        vigente con el mismo c&oacute;nyuge ciudadano, desde el d&iacute;a en que se emiti&oacute; la green card y hasta
        el juramento. Si el matrimonio termina en el camino, usted no pierde la oportunidad de naturalizarse &mdash;
        simplemente regresa a la regla de cinco a&ntilde;os del &sect;316 y espera el tiempo restante.
      </p>

      <h2>&iquest;Cu&aacute;ndo empieza a correr el reloj de los tres a&ntilde;os?</h2>
      <p>
        Los tres a&ntilde;os corren desde la fecha en que usted se convirti&oacute; en residente permanente &mdash; la{' '}
        <strong>fecha de otorgamiento de la green card</strong>, a veces llamada la fecha de &ldquo;Residente
        Desde&rdquo; (&ldquo;Resident Since&rdquo;) en su tarjeta. <em>No</em> es la fecha en que se cas&oacute; ni la
        fecha en que present&oacute; alguna solicitud. USCIS le permite presentar el N-400 hasta <strong>90 d&iacute;as
        antes</strong> de completar los tres a&ntilde;os, as&iacute; que lo m&aacute;s temprano que puede presentar es
        el d&iacute;a en que cumple dos a&ntilde;os y nueve meses como residente permanente.
      </p>

      <h2>Green card condicional frente a permanente: &iquest;importa?</h2>
      <p>
        Si se cas&oacute; con su c&oacute;nyuge ciudadano menos de dos a&ntilde;os antes de que se aprobara su green
        card, usted recibi&oacute; una <strong>green card condicional (de dos a&ntilde;os)</strong>. La buena noticia:
        el tiempo como residente <em>condicional</em> s&iacute; cuenta para los tres a&ntilde;os, porque usted fue
        residente permanente todo ese tiempo. La tarjeta condicional no reinicia su reloj de naturalizaci&oacute;n.
      </p>
      <p>
        La complicaci&oacute;n es el <strong>Formulario I-751</strong>. Antes de llegar a la marca de los dos
        a&ntilde;os debe presentar el{' '}
        <Link href="/es/blog/remove-conditions-green-card-i-751-georgia">I-751 para eliminar las condiciones</Link> de
        su green card. Se le permite presentar el N-400 mientras el I-751 sigue pendiente, pero USCIS por lo general
        quiere resolver primero las condiciones, y a menudo procesa ambos juntos o lo entrevista sobre los dos a la vez.
        Solicitar la ciudadan&iacute;a no lo exime del plazo del I-751 &mdash; todav&iacute;a debe eliminar las
        condiciones, o su estatus puede ser terminado. Planifique ambas presentaciones como una sola estrategia
        coordinada.
      </p>

      <h2>El proceso de la solicitud N-400</h2>
      <p>
        Ya sea que califique bajo la regla de tres o de cinco a&ntilde;os, el proceso se tramita con el mismo formulario:
      </p>
      <ol>
        <li>
          <strong>Presente el Formulario N-400</strong> ante USCIS, con la tarifa de presentaci&oacute;n y prueba de su
          matrimonio y de la ciudadan&iacute;a de su c&oacute;nyuge (acta de matrimonio, el certificado de
          naturalizaci&oacute;n, pasaporte o acta de nacimiento del c&oacute;nyuge, m&aacute;s evidencia financiera y de
          hogar conjunta).
        </li>
        <li>
          <strong>Datos biom&eacute;tricos</strong> &mdash; huellas dactilares para las verificaciones de antecedentes
          (a menudo se reutilizan si se tomaron recientemente).
        </li>
        <li>
          <strong>La entrevista</strong> &mdash; un oficial de USCIS revisa su solicitud bajo juramento, pregunta sobre
          su matrimonio y sus antecedentes, y administra los ex&aacute;menes de ingl&eacute;s y civismo. Lleve a su
          c&oacute;nyuge y la evidencia del matrimonio; el oficial est&aacute; confirmando que el matrimonio es real y
          vigente.
        </li>
        <li>
          <strong>La decisi&oacute;n</strong> &mdash; aprobada, continuada para m&aacute;s evidencia, o negada.
        </li>
        <li>
          <strong>El Juramento de Lealtad</strong> &mdash; usted se convierte en ciudadano en una ceremonia de
          naturalizaci&oacute;n.
        </li>
      </ol>
      <p>
        Como el matrimonio es la base de la presentaci&oacute;n anticipada, un caso de tres a&ntilde;os se gana o se
        pierde seg&uacute;n se logre probar un matrimonio <em>de buena fe</em> (&ldquo;bona fide&rdquo;) y vigente
        &mdash; el mismo tipo de evidencia conjunta (impuestos, contratos de arrendamiento, cuentas bancarias, hijos,
        fotos) que respald&oacute; su{' '}
        <Link href="/es/blog/marriage-based-green-card-k1-fiance-visa-georgia">green card por matrimonio</Link> y su{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajuste de estatus</Link>.
      </p>

      <h2>Causas comunes de descalificaci&oacute;n</h2>
      <ul>
        <li>
          <strong>Separaci&oacute;n o divorcio antes del juramento</strong> &mdash; pone fin a la uni&oacute;n
          matrimonial y a la elegibilidad de tres a&ntilde;os (todav&iacute;a puede naturalizarse m&aacute;s adelante
          bajo la regla de cinco a&ntilde;os).
        </li>
        <li>
          <strong>No vivir realmente juntos</strong> &mdash; vivir separados, aun estando legalmente casados, puede
          romper el requisito de &ldquo;uni&oacute;n matrimonial&rdquo; a menos que aplique una excepci&oacute;n.
        </li>
        <li>
          <strong>Un c&oacute;nyuge que no fue ciudadano durante los tres a&ntilde;os completos</strong> &mdash; el
          reloj no puede empezar antes de que su c&oacute;nyuge se convirtiera en ciudadano.
        </li>
        <li>
          <strong>Viajes largos al extranjero</strong> &mdash; un viaje de seis meses o m&aacute;s puede generar la
          presunci&oacute;n de que usted rompi&oacute; la residencia continua; un a&ntilde;o o m&aacute;s generalmente la
          rompe por completo.
        </li>
        <li>
          <strong>Problemas de buen car&aacute;cter moral</strong> &mdash; ciertos asuntos penales, impuestos sin
          presentar, o declaraciones falsas durante el per&iacute;odo de tres a&ntilde;os.
        </li>
      </ul>

      <h2>Sobrevivientes de abuso: la excepci&oacute;n del &sect;319(a)</h2>
      <p>
        La ley no obliga a un sobreviviente de violencia dom&eacute;stica a permanecer en un matrimonio para ganarse la
        ciudadan&iacute;a. El <strong>INA &sect;319(a)</strong> contiene una protecci&oacute;n especial: un residente
        permanente que obtuvo su estatus como c&oacute;nyuge de un ciudadano estadounidense y que fue{' '}
        <strong>maltratado o sometido a crueldad extrema</strong> por ese c&oacute;nyuge ciudadano puede, a&uacute;n
        as&iacute;, naturalizarse despu&eacute;s de tres a&ntilde;os <em>aunque la pareja ya no viva en uni&oacute;n
        matrimonial</em> &mdash; incluso tras una separaci&oacute;n o un divorcio. La misma protecci&oacute;n alcanza a
        quienes obtuvieron la residencia permanente mediante una <strong>autopetici&oacute;n VAWA</strong>. Si esta es
        su situaci&oacute;n, el beneficio de los tres a&ntilde;os a&uacute;n podr&iacute;a estar disponible; hable con
        una abogada sobre c&oacute;mo documentarlo.
      </p>

      <h2>C&oacute;nyuges de ciudadanos que trabajan en el extranjero: INA &sect;319(b)</h2>
      <p>
        Una disposici&oacute;n distinta y m&aacute;s r&aacute;pida &mdash; el <strong>INA &sect;319(b)</strong> &mdash;
        cubre al c&oacute;nyuge de un ciudadano estadounidense que est&aacute; <strong>destacado regularmente en el
        extranjero</strong> en un empleo que califica (para el gobierno de EE. UU., una empresa estadounidense dedicada
        al comercio exterior, una instituci&oacute;n de investigaci&oacute;n estadounidense reconocida, una
        organizaci&oacute;n internacional p&uacute;blica que califique, o como misionero). Estos solicitantes pueden
        naturalizarse de <strong>forma acelerada, sin los per&iacute;odos habituales de residencia previa y presencia
        f&iacute;sica</strong>, siempre que tengan la intenci&oacute;n de vivir en el extranjero con el c&oacute;nyuge y
        de residir en EE. UU. despu&eacute;s. Es una v&iacute;a estrecha, pero valiosa para las familias militares y del
        servicio exterior que tienen su base en Georgia.
      </p>

      <h2>La ceremonia de naturalizaci&oacute;n en Georgia</h2>
      <p>
        Para la mayor&iacute;a de los inmigrantes en el &aacute;rea metropolitana de Atlanta y en todo Georgia, la
        entrevista de ciudadan&iacute;a se realiza en la{' '}
        <strong>oficina de campo de USCIS en Atlanta</strong>, y el Juramento de Lealtad se administra en una ceremonia
        de naturalizaci&oacute;n en la zona &mdash; a veces el mismo d&iacute;a de la entrevista, a menudo en una
        ceremonia programada para m&aacute;s adelante. Cuando levanta la mano y presta el juramento, recibe su{' '}
        <strong>Certificado de Naturalizaci&oacute;n</strong> y se convierte en ciudadano estadounidense: libre para
        votar, tener un pasaporte de EE. UU. y presentar peticiones por familiares &mdash; y ya no en riesgo de
        deportaci&oacute;n.
      </p>

      <h2>Por qu&eacute; trabajar con una abogada de naturalizaci&oacute;n</h2>
      <p>
        La regla de los tres a&ntilde;os premia a las parejas que planifican con anticipaci&oacute;n. Una abogada
        confirma la fecha de su green card y los c&aacute;lculos de presencia f&iacute;sica antes de que usted gaste la
        tarifa de presentaci&oacute;n, se asegura de que un{' '}
        <Link href="/es/blog/remove-conditions-green-card-i-751-georgia">I-751</Link> pendiente se maneje en sinton&iacute;a
        con su N-400, revisa su historial de viajes y penal en busca de problemas ocultos, y los prepara a usted y a su
        c&oacute;nyuge para una entrevista que pondr&aacute; a prueba si su matrimonio es genuino y vigente. Si su
        situaci&oacute;n involucra una tarjeta condicional, tiempo en el extranjero, un arresto pasado, o un matrimonio
        en problemas, conviene mucho m&aacute;s que un abogado lo revise primero que descubrir el problema en la
        entrevista.
      </p>

      <h2>Hable con Eszter Bardi sobre la ciudadan&iacute;a por matrimonio</h2>
      <p>
        Si obtuvo su green card a trav&eacute;s del matrimonio con un ciudadano estadounidense y se acerca a su tercer
        aniversario como residente permanente, la abogada <strong>Eszter Bardi</strong> puede decirle si la regla de los
        tres a&ntilde;os encaja en su caso y ayudarle a presentarla bien desde la primera vez. Bardi Immigration Law
        representa a solicitantes de{' '}
        <Link href="/es/services/naturalization">naturalizaci&oacute;n</Link> en todo Georgia &mdash; con acceso directo
        a la abogada, no a un especialista de admisi&oacute;n.
      </p>
      <p>
        <strong>Agende una consulta hoy.</strong> Revisaremos su elegibilidad, coordinaremos cualquier paso pendiente de
        su green card y le guiaremos hasta su ceremonia de juramento.{' '}
        <Link href="/es/contact">Solicite una consulta en l&iacute;nea</Link>. Hablamos espa&ntilde;ol &mdash; atendemos
        a la comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este art&iacute;culo ofrece informaci&oacute;n legal general y no
          constituye asesor&iacute;a legal. La ley de inmigraci&oacute;n es compleja, depende de los hechos de cada caso
          y cambia con frecuencia. Confirme los formularios, las tarifas, los plazos y los requisitos de elegibilidad
          vigentes en el sitio web de USCIS y consulte a una abogada de inmigraci&oacute;n con licencia para obtener
          orientaci&oacute;n espec&iacute;fica para su caso.
        </em>
      </p>
    </div>
  );
}
