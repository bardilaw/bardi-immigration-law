/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (plazo de un año para solicitar asilo INA §208(a)(2)(B); excepciones por circunstancias cambiadas y extraordinarias INA §208(a)(2)(D); 8 CFR 208.4(a)(4)-(5); estándar de prueba clara y convincente para la presentación a tiempo; retención de remoción bajo INA §241(b)(3); protección bajo la Convención Contra la Tortura 8 CFR 1208.16-1208.18; práctica de la EOIR en Atlanta/Stewart) que pueden cambiar. Confirmar antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/asylum-one-year-bar-exceptions-georgia.tsx (BAR-807). Español natural, no traducción literal.

export const esTitle = 'La Regla del Año para Solicitar Asilo: Excepciones y Alternativas en Georgia';
export const esDescription =
  'Una abogada de inmigración en Georgia explica el plazo de un año para solicitar asilo (INA §208(a)(2)(B)), las dos excepciones de la ley —circunstancias cambiadas y extraordinarias—, la prueba necesaria y las protecciones alternativas como la retención de remoción y la Convención Contra la Tortura cuando el asilo ya no es posible.';

export function AsylumOneYearBarPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Si acaba de darse cuenta de que ha pasado m&aacute;s de un a&ntilde;o desde que lleg&oacute; a Estados Unidos y
        nunca solicit&oacute; asilo, probablemente teme haber perdido su oportunidad. Ese miedo es comprensible &mdash; el
        plazo de un a&ntilde;o para presentar la solicitud es la raz&oacute;n m&aacute;s com&uacute;n por la que se niegan
        los casos de asilo, incluso antes de que un juez eval&uacute;e si la persona realmente est&aacute; en peligro.
        Pero perder el plazo no siempre significa el final del camino.
      </p>
      <p>
        Esta gu&iacute;a explica la regla del a&ntilde;o para el asilo, las dos excepciones que la ley reconoce, la
        prueba que usted necesita para usarlas, y las protecciones alternativas que pueden seguir disponibles incluso
        cuando el asilo en s&iacute; ya no es una opci&oacute;n. Es informaci&oacute;n general, no asesor&iacute;a legal.
        Si una excepci&oacute;n aplica a <em>su</em> situaci&oacute;n es un juicio legal que depende de los hechos y que
        solo una abogada de inmigraci&oacute;n con experiencia puede determinar &mdash; as&iacute; que lea esto para
        entender sus opciones y luego obtenga una evaluaci&oacute;n de su caso cuanto antes.
      </p>

      <h2>La Regla del A&ntilde;o: INA §208(a)(2)(B)</h2>
      <p>
        Bajo la <strong>INA §208(a)(2)(B)</strong>, usted debe presentar su solicitud de asilo{' '}
        <strong>dentro del primer a&ntilde;o despu&eacute;s de su llegada a Estados Unidos.</strong> Si deja pasar esa
        ventana, por lo general queda excluido del asilo &mdash; sin importar qu&eacute; tan fuerte sea su temor a la
        persecuci&oacute;n. El reloj no perdona, y los abogados del Departamento de Seguridad Nacional y del Departamento
        de Justicia lo invocan de forma rutinaria.
      </p>
      <p>
        La solicitud se presenta con el <strong>Formulario I-589</strong>. Si usted no est&aacute; en proceso de
        remoci&oacute;n, la presenta de forma afirmativa ante USCIS; si est&aacute; en proceso, la presenta de forma
        defensiva ante la corte de inmigraci&oacute;n. En cualquier caso, lo que cuenta para el plazo es la fecha de
        presentaci&oacute;n.
      </p>

      <h2>&iquest;Cu&aacute;ndo empieza a correr el reloj?</h2>
      <p>
        El plazo corre desde su <strong>&uacute;ltima llegada</strong> a Estados Unidos &mdash; no desde su primera
        entrada, ni desde el d&iacute;a en que decidi&oacute; que necesitaba ayuda. Algunos puntos que suelen confundir a
        las personas:
      </p>
      <ul>
        <li>
          <strong>Manda la &uacute;ltima entrada.</strong> Si sali&oacute; y volvi&oacute;, el a&ntilde;o por lo general
          vuelve a empezar desde su llegada m&aacute;s reciente (aunque salir y regresar puede crear otros problemas,
          as&iacute; que no use el viaje como una estrategia para reiniciar el reloj).
        </li>
        <li>
          <strong>La forma de entrada no cambia la regla.</strong> Ya sea que haya entrado con una visa, haya sido
          admitido bajo &ldquo;parole&rdquo;, o haya cruzado sin inspecci&oacute;n, el plazo de un a&ntilde;o aplica de
          igual manera.
        </li>
        <li>
          <strong>Probar la fecha es su responsabilidad.</strong> Usted debe establecer su fecha de llegada con{' '}
          <strong>prueba clara y convincente</strong>. Los sellos del pasaporte, un registro I-94, los boletos de
          avi&oacute;n y documentos similares importan, porque si no puede probar cu&aacute;ndo lleg&oacute;, tampoco
          puede probar que present&oacute; a tiempo.
        </li>
      </ul>

      <h2>Excepci&oacute;n 1: Circunstancias Cambiadas</h2>
      <p>
        La ley &mdash; <strong>INA §208(a)(2)(D)</strong>, con el detalle en <strong>8 CFR 208.4(a)(4)</strong> &mdash;
        excusa una presentaci&oacute;n tard&iacute;a cuando hay <strong>circunstancias cambiadas</strong> que afectan de
        forma sustancial su elegibilidad para el asilo. Ejemplos comunes incluyen:
      </p>
      <ul>
        <li>
          <strong>El empeoramiento de las condiciones en su pa&iacute;s de origen</strong> &mdash; un golpe de estado,
          una nueva ola de violencia contra su religi&oacute;n o su grupo &eacute;tnico, una represi&oacute;n contra
          disidentes, o nuevas leyes dirigidas contra personas como usted.
        </li>
        <li>
          <strong>Cambios en su propia situaci&oacute;n</strong> &mdash; se convirti&oacute; a otra religi&oacute;n, se
          volvi&oacute; pol&iacute;ticamente activo, se declar&oacute; LGBTQ, o su papel en un grupo social determinado
          cambi&oacute; de una manera que ahora lo pone en riesgo.
        </li>
        <li>
          <strong>La p&eacute;rdida de un estatus que lo proteg&iacute;a</strong> &mdash; por ejemplo, usted era
          dependiente en la solicitud de otra persona y esa relaci&oacute;n termin&oacute;.
        </li>
        <li>
          <strong>Situaciones de abuso y violencia dom&eacute;stica</strong> &mdash; para las sobrevivientes, un nuevo
          da&ntilde;o o un peligro que se intensifica puede constituir una circunstancia cambiada, y las protecciones
          bajo la Ley de Violencia contra la Mujer (VAWA) pueden cruzarse con un caso de asilo. Estos casos son delicados
          y requieren un an&aacute;lisis legal cuidadoso e individual.
        </li>
      </ul>
      <p>
        Algo cr&iacute;tico: una vez que surge una circunstancia cambiada, usted todav&iacute;a debe presentar{' '}
        <strong>dentro de un plazo razonable</strong> a la luz de ese cambio. No puede enterarse de que las condiciones
        empeoraron y luego esperar otro a&ntilde;o.
      </p>

      <h2>Excepci&oacute;n 2: Circunstancias Extraordinarias</h2>
      <p>
        La segunda excepci&oacute;n, tambi&eacute;n de la <strong>INA §208(a)(2)(D)</strong> y definida en{' '}
        <strong>8 CFR 208.4(a)(5)</strong>, excusa la demora causada por <strong>circunstancias extraordinarias</strong>{' '}
        &mdash; eventos fuera de su control que explican por qu&eacute; no pudo presentar a tiempo. Ejemplos reconocidos
        incluyen:
      </p>
      <ul>
        <li>
          <strong>Enfermedad grave o discapacidad</strong> &mdash; una condici&oacute;n f&iacute;sica o de salud mental
          seria durante el per&iacute;odo de un a&ntilde;o.
        </li>
        <li>
          <strong>Incapacidad legal</strong> &mdash; ser un menor no acompa&ntilde;ado, o tener un impedimento mental que
          le impidi&oacute; presentar a tiempo.
        </li>
        <li>
          <strong>Asistencia ineficaz de un abogado</strong> &mdash; cuando un abogado anterior o un notario le
          fall&oacute;. Esto conlleva sus propios requisitos procesales estrictos que usted debe cumplir para poder
          invocarlo.
        </li>
        <li>
          <strong>Mantener un estatus legal</strong> &mdash; usted ten&iacute;a TPS, una visa v&aacute;lida u otro estatus
          legal hasta poco antes de presentar.
        </li>
        <li>
          <strong>Una presentaci&oacute;n a tiempo que fue rechazada</strong> &mdash; usted present&oacute; dentro del
          a&ntilde;o pero la solicitud fue devuelta como indebidamente presentada, y usted la volvi&oacute; a presentar.
        </li>
      </ul>
      <p>
        Al igual que con las circunstancias cambiadas, la demora debe ser <strong>razonable a la luz de la
        circunstancia.</strong> Una vez que desaparece el obst&aacute;culo, el reloj vuelve a correr en la pr&aacute;ctica.
      </p>

      <h2>El Est&aacute;ndar de Prueba &mdash; y Por Qu&eacute; Es Estricto</h2>
      <p>
        Aplican dos cargas distintas. Para demostrar que su solicitud fue presentada a tiempo en primer lugar, usted debe
        probar su fecha de llegada con <strong>prueba clara y convincente</strong>. Para usar una excepci&oacute;n, debe
        establecer las circunstancias cambiadas o extraordinarias a satisfacci&oacute;n de quien decide{' '}
        <em>y</em> demostrar que present&oacute; dentro de un plazo razonable despu&eacute;s. Nada de esto es
        autom&aacute;tico. Los jueces y los oficiales de asilo examinan de cerca las presentaciones tard&iacute;as, y una
        explicaci&oacute;n vaga no sobrevivir&aacute;.
      </p>

      <h2>C&oacute;mo y D&oacute;nde se Plantea la Excepci&oacute;n</h2>
      <p>
        C&oacute;mo plantea la excepci&oacute;n depende de en qu&eacute; punto se encuentra su caso:
      </p>
      <ul>
        <li>
          <strong>En la entrevista de asilo (casos afirmativos).</strong> Si presenta ante USCIS, usted le explica la
          presentaci&oacute;n tard&iacute;a y los hechos que la respaldan al oficial de asilo, con el apoyo de documentos
          y, a menudo, una declaraci&oacute;n personal detallada.
        </li>
        <li>
          <strong>En la corte de inmigraci&oacute;n (casos defensivos).</strong> Si est&aacute; en proceso de
          remoci&oacute;n &mdash; incluyendo en la <strong>Corte de Inmigraci&oacute;n de Atlanta</strong> o la corte del{' '}
          <strong>Centro de Detenci&oacute;n de Stewart</strong> en Lumpkin &mdash; el juez de inmigraci&oacute;n decide
          la cuesti&oacute;n del plazo, por lo general con testimonio y un escrito presentado. La evidencia sobre las
          condiciones del pa&iacute;s y la corroboraci&oacute;n tienen un peso real aqu&iacute;.
        </li>
      </ul>
      <p>
        Las cortes de inmigraci&oacute;n de Georgia hist&oacute;ricamente han estado entre las m&aacute;s duras del
        pa&iacute;s para los solicitantes de asilo, lo que hace que una excepci&oacute;n bien documentada y bien
        argumentada sea a&uacute;n m&aacute;s importante.
      </p>

      <h2>Si el Asilo Realmente Est&aacute; Excluido: Retenci&oacute;n y la CAT</h2>
      <p>
        Aqu&iacute; viene la parte que le da esperanza a muchas personas: <strong>el plazo de un a&ntilde;o aplica al
        asilo, pero no a dos formas de protecci&oacute;n relacionadas.</strong>
      </p>
      <ul>
        <li>
          <strong>Retenci&oacute;n de remoci&oacute;n (INA §241(b)(3)).</strong> No tiene un plazo de un a&ntilde;o para
          presentar. La contrapartida es un est&aacute;ndar de prueba <em>m&aacute;s alto</em> &mdash; usted debe
          demostrar que es m&aacute;s probable que no que ser&iacute;a perseguido &mdash; y el alivio es m&aacute;s
          limitado: detiene su remoci&oacute;n a ese pa&iacute;s, pero no conduce a una green card ni le permite
          presentar peticiones por familiares.
        </li>
        <li>
          <strong>Protecci&oacute;n bajo la Convenci&oacute;n Contra la Tortura (CAT).</strong> Regida por los 8 CFR
          1208.16&ndash;1208.18, la CAT tampoco tiene plazo para presentar. Usted debe demostrar que es m&aacute;s
          probable que no que ser&iacute;a torturado con el consentimiento o la aquiescencia de su gobierno. Al igual que
          la retenci&oacute;n, evita la remoci&oacute;n pero no otorga un estatus permanente.
        </li>
      </ul>
      <p>
        Estas protecciones son m&aacute;s dif&iacute;ciles de ganar y m&aacute;s limitadas que el asilo, pero para alguien
        que genuinamente teme regresar y perdi&oacute; el plazo del asilo, pueden salvarle la vida. Si hay una orden
        previa o un caso cerrado de por medio, una{' '}
        <Link href="/es/blog/motion-to-reopen-reconsider-immigration-georgia">moci&oacute;n para reabrir o reconsiderar</Link>{' '}
        puede ser parte de la estrategia para buscarlas.
      </p>

      <h2>La Verdad Honesta</h2>
      <p>
        No le daremos falsas esperanzas: las excepciones son estrechas, se litigan intensamente, y exigen pruebas, no
        solo una buena historia. Pero perder la marca del a&ntilde;o no significa autom&aacute;ticamente que no tenga
        opciones. Si una circunstancia cambiada o extraordinaria encaja en su caso &mdash; y si la retenci&oacute;n o la
        CAT es el mejor camino &mdash; solo lo puede determinar una abogada que revise sus hechos espec&iacute;ficos, su
        historial de entradas y su evidencia. No adivine, y no deje que pase m&aacute;s tiempo.
      </p>

      <h2>Hable con Eszter Bardi Antes de Que Pase M&aacute;s Tiempo</h2>
      <p>
        Si cree que perdi&oacute; el plazo del asilo, <strong>el tiempo juega en su contra cada d&iacute;a.</strong>{' '}
        Cuanto antes act&uacute;e, m&aacute;s opciones es probable que tenga. En Bardi Immigration Law, la abogada{' '}
        <strong>Eszter Bardi</strong> eval&uacute;a personalmente las situaciones de presentaci&oacute;n tard&iacute;a
        para clientes en todo Georgia y el sureste &mdash; evaluando con honestidad si aplica una excepci&oacute;n y
        qu&eacute; protecci&oacute;n se ajusta a sus hechos.
      </p>
      <p>
        <strong>Agende una consulta hoy.</strong> Conozca m&aacute;s sobre nuestra{' '}
        <Link href="/es/blog/asylum-application-georgia">gu&iacute;a del proceso de asilo</Link>, c&oacute;mo manejamos la{' '}
        <Link href="/es/blog/deportation-defense-removal-proceedings-georgia">defensa contra la deportaci&oacute;n y los procesos de remoci&oacute;n</Link>,
        o <Link href="/es/contact">solicite una consulta en l&iacute;nea</Link>. Hablamos espa&ntilde;ol.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este art&iacute;culo ofrece informaci&oacute;n legal general y no
          constituye asesor&iacute;a legal. La regla del a&ntilde;o para el asilo y sus excepciones dependen de los
          hechos de cada caso, se litigan, y las reglas cambian. Confirme los estatutos, las regulaciones, los
          formularios y los plazos vigentes en los sitios web de USCIS y de la EOIR, y consulte a una abogada de
          inmigraci&oacute;n con licencia para obtener orientaci&oacute;n espec&iacute;fica para su caso.
        </em>
      </p>
    </div>
  );
}
