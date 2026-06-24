/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (retención de remoción bajo INA §241(b)(3) / 8 U.S.C. §1231(b)(3); el estándar de "más probable que no" frente al "temor fundado" del asilo bajo INA §208; la barra de un año para el asilo bajo INA §208(a)(2)(B); las barras por delito particularmente grave / delito agravado y la regla de cinco años de condena agregada; la protección bajo la Convención contra la Tortura y sus dos formas; la naturaleza específica por país de este alivio; la autorización de empleo; la práctica ante EOIR en Atlanta/Stewart) que pueden cambiar. Confirmar antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/withholding-of-removal-immigration-court-georgia.tsx (BAR-807). Español natural, no traducción literal.

export const esTitle = 'Retención de Remoción en Georgia: Protección Cuando el Asilo No Es Posible';
export const esDescription =
  'Un abogado de inmigración en Georgia explica qué es la retención de remoción bajo INA §241(b)(3), en qué se diferencia del asilo, dónde encaja la Convención contra la Tortura (CAT) y cómo es la vida con esta protección. Información general, no asesoría legal.';

export function WithholdingOfRemovalPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Muchas personas entran a la oficina de un abogado de inmigraci&oacute;n convencidas de que tienen una sola
        oportunidad para quedarse en Estados Unidos: el asilo. Cuando se enteran de que perdieron el plazo de un
        a&ntilde;o para pedir asilo, o de que una condena previa les bloquea el asilo, suponen que el caso
        termin&oacute;. A menudo no es as&iacute;. La <strong>retenci&oacute;n de remoci&oacute;n</strong> &mdash; y una
        protecci&oacute;n relacionada bajo la Convenci&oacute;n contra la Tortura &mdash; pueden mantener a una persona en
        el pa&iacute;s incluso cuando el asilo queda fuera de su alcance.
      </p>
      <p>
        Esta gu&iacute;a explica qu&eacute; es la retenci&oacute;n de remoci&oacute;n, en qu&eacute; se diferencia del
        asilo, d&oacute;nde encaja la Convenci&oacute;n contra la Tortura y c&oacute;mo es la vida para alguien a quien se
        le concede esta protecci&oacute;n. Es informaci&oacute;n general, no asesor&iacute;a legal. Si alguna de estas
        opciones se ajusta a <em>sus</em> hechos es un juicio que solo un abogado de inmigraci&oacute;n con experiencia
        puede hacer despu&eacute;s de revisar su caso.
      </p>

      <h2>Qu&eacute; es la retenci&oacute;n de remoci&oacute;n</h2>
      <p>
        La retenci&oacute;n de remoci&oacute;n proviene de la <strong>INA §241(b)(3)</strong> (8 U.S.C. §1231(b)(3)).
        Proh&iacute;be al gobierno enviarlo a un pa&iacute;s donde su <strong>vida o libertad estar&iacute;an
        amenazadas</strong> por uno de cinco motivos protegidos &mdash; raza, religi&oacute;n, nacionalidad, opini&oacute;n
        pol&iacute;tica o pertenencia a un grupo social en particular. Esos son los mismos motivos protegidos que sustentan
        el asilo.
      </p>
      <p>
        La diferencia crucial est&aacute; en lo que hace la protecci&oacute;n. El asilo es un estatus que puede convertirse
        en una green card y, con el tiempo, en la ciudadan&iacute;a. La retenci&oacute;n es m&aacute;s estrecha: es una{' '}
        <strong>restricci&oacute;n contra la remoci&oacute;n</strong>. Si un juez de inmigraci&oacute;n la concede, Estados
        Unidos no puede deportarlo al pa&iacute;s que usted teme &mdash; pero no se le otorga un camino a la residencia
        permanente, y no puede traer a familiares con base en esa concesi&oacute;n. Detiene la deportaci&oacute;n; no lo
        recompensa con un estatus.
      </p>

      <h2>Retenci&oacute;n frente al asilo: las diferencias clave</h2>
      <p>
        El asilo y la retenci&oacute;n protegen contra el mismo tipo de da&ntilde;o, pero se rigen por reglas distintas.
        Esas diferencias deciden cu&aacute;l se ajusta a un caso determinado.
      </p>
      <ul>
        <li>
          <strong>Est&aacute;ndar de prueba.</strong> El asilo exige un <em>temor fundado</em> de persecuci&oacute;n
          &mdash; los tribunales lo han descrito como aproximadamente una probabilidad de una en diez, es decir, un riesgo
          real pero no necesariamente probable. La retenci&oacute;n exige m&aacute;s: usted debe demostrar que es{' '}
          <strong>m&aacute;s probable que no</strong> &mdash; una probabilidad clara, mayor que un 50/50 &mdash; que
          ser&iacute;a perseguido. Ese list&oacute;n m&aacute;s alto es la contrapartida central.
        </li>
        <li>
          <strong>Sin green card.</strong> Una concesi&oacute;n de asilo le permite solicitar la green card despu&eacute;s
          de un a&ntilde;o. La retenci&oacute;n no conduce a <strong>ning&uacute;n ajuste de estatus ni a un camino a la
          residencia permanente</strong>. Usted permanece en una posici&oacute;n protegida pero limitada.
        </li>
        <li>
          <strong>Sin familiares derivados.</strong> Una concesi&oacute;n de asilo le permite presentar peticiones por su
          c&oacute;nyuge y sus hijos. La retenci&oacute;n cubre <strong>&uacute;nicamente a la persona</strong> que prueba
          el caso. Los familiares deben tener sus propios reclamos.
        </li>
        <li>
          <strong>Sin plazo de un a&ntilde;o para presentar.</strong> El asilo, por lo general, debe presentarse dentro de
          un a&ntilde;o de la llegada, conforme a la <strong>INA §208(a)(2)(B)</strong>. La retenci&oacute;n{' '}
          <strong>no tiene tal plazo</strong>, razón por la cual tan a menudo se convierte en la v&iacute;a para quienes
          perdieron la ventana del asilo.
        </li>
        <li>
          <strong>Sin l&iacute;mite por pa&iacute;s y no discrecional.</strong> El asilo puede negarse por discreci&oacute;n
          incluso cuando se cumplen los elementos legales. La retenci&oacute;n es <strong>obligatoria</strong> &mdash; si
          usted cumple el est&aacute;ndar y no aplica ninguna barra, el juez debe concederla. Tambi&eacute;n es
          espec&iacute;fica por pa&iacute;s: bloquea la remoci&oacute;n al pa&iacute;s que usted teme, no necesariamente a
          un tercer pa&iacute;s seguro.
        </li>
      </ul>

      <p>
        Un malentendido com&uacute;n es que la retenci&oacute;n es simplemente &ldquo;el asilo para quienes esperaron
        demasiado,&rdquo; una versi&oacute;n m&aacute;s d&eacute;bil de lo mismo. No lo es. Es una protecci&oacute;n
        distinta, con su propio requisito de prueba m&aacute;s alto y sus propios l&iacute;mites permanentes. Ganar la
        retenci&oacute;n es, en algunos aspectos, <em>m&aacute;s dif&iacute;cil</em> que ganar el asilo, aunque le da
        menos &mdash; que es exactamente por lo que vale la pena entenderla antes de suponer que su &uacute;nica esperanza
        se acab&oacute;.
      </p>

      <h2>Convenci&oacute;n contra la Tortura (CAT): la tercera protecci&oacute;n</h2>
      <p>
        Existe una tercera forma de protecci&oacute;n, separada: el alivio bajo la{' '}
        <strong>Convenci&oacute;n contra la Tortura (CAT)</strong>, regida por <strong>8 CFR 1208.16&ndash;1208.18</strong>.
        Para ganar la protecci&oacute;n CAT, usted debe demostrar que es <strong>m&aacute;s probable que no que ser&iacute;a
        torturado</strong> si lo devuelven, con el consentimiento o la aquiescencia de un funcionario del gobierno. La CAT
        se diferencia del asilo y de la retenci&oacute;n en dos aspectos importantes:
      </p>
      <ul>
        <li>
          <strong>No se requiere un motivo protegido.</strong> Tanto el asilo como la retenci&oacute;n exigen que el
          da&ntilde;o sea <em>por causa de</em> raza, religi&oacute;n, nacionalidad, opini&oacute;n pol&iacute;tica o
          pertenencia a un grupo social en particular. La CAT no. Si usted ser&iacute;a torturado por razones que no encajan
          en un motivo protegido &mdash; por ejemplo, por un gobierno que tortura de forma generalizada &mdash; la CAT
          a&uacute;n podr&iacute;a protegerlo.
        </li>
        <li>
          <strong>Dos formas, una de ellas casi sin barras.</strong> El alivio CAT llega como{' '}
          <em>retenci&oacute;n de remoci&oacute;n bajo la CAT</em> o como <em>aplazamiento de remoci&oacute;n bajo la
          CAT</em>. El aplazamiento est&aacute; disponible incluso para personas a quienes un historial penal grave les
          impide otros alivios, porque Estados Unidos no devolver&aacute; a sabiendas a alguien a la tortura.
        </li>
      </ul>
      <p>
        Al igual que la retenci&oacute;n, la CAT <strong>no tiene plazo de un a&ntilde;o</strong> y no ofrece green card ni
        beneficios derivados. Restringe la remoci&oacute;n al pa&iacute;s donde la tortura es probable.
      </p>

      <h2>Qui&eacute;n deber&iacute;a considerar la retenci&oacute;n en lugar &mdash; o adem&aacute;s &mdash; del asilo</h2>
      <p>
        En la pr&aacute;ctica, el asilo, la retenci&oacute;n y la CAT suelen solicitarse <strong>en conjunto</strong> en el
        mismo caso ante un juez de inmigraci&oacute;n. Por lo general, usted presenta el mismo <strong>Formulario
        I-589</strong> y le pide a la corte que considere las tres. Pero la retenci&oacute;n o la CAT se convierten en la
        esperanza <em>principal</em> en situaciones espec&iacute;ficas:
      </p>
      <ul>
        <li>
          <strong>Perdi&oacute; el plazo de un a&ntilde;o para el asilo.</strong> Si no aplica ninguna excepci&oacute;n al
          plazo, el asilo puede quedar bloqueado mientras la retenci&oacute;n y la CAT siguen disponibles. (Vea nuestra
          gu&iacute;a sobre la{' '}
          <Link href="/es/blog/asylum-one-year-bar-exceptions-georgia">barra de un a&ntilde;o para el asilo y sus
          excepciones</Link>.)
        </li>
        <li>
          <strong>Una condena penal bloquea el asilo.</strong> Un delito agravado bloquea el asilo de inmediato. Para la
          retenci&oacute;n, una condena bloquea el alivio solo si es un <strong>&ldquo;delito particularmente
          grave,&rdquo;</strong> y un delito agravado cuenta como autom&aacute;ticamente particularmente grave a efectos de
          la retenci&oacute;n &uacute;nicamente cuando la condena agregada impuesta es de <strong>cinco a&ntilde;os o
          m&aacute;s</strong>. Esa brecha significa que algunas personas a quienes se les bloquea el asilo a&uacute;n pueden
          calificar para la retenci&oacute;n &mdash; e incluso quienes tienen bloqueada la retenci&oacute;n pueden a&uacute;n
          buscar el aplazamiento CAT.
        </li>
        <li>
          <strong>Su temor no encaja limpiamente en un motivo protegido.</strong> Si el peligro es la tortura, en lugar de
          una persecuci&oacute;n vinculada a la raza, la religi&oacute;n, la nacionalidad, la pol&iacute;tica o un grupo
          social, la CAT puede ser el reclamo m&aacute;s s&oacute;lido.
        </li>
      </ul>
      <p>
        Determinar cu&aacute;l protecci&oacute;n se ajusta es exactamente el tipo de an&aacute;lisis que no se debe
        adivinar. Las barras, los est&aacute;ndares y las definiciones interact&uacute;an de maneras que cambian la
        estrategia de todo un caso.
      </p>

      <h2>C&oacute;mo y d&oacute;nde se solicita</h2>
      <p>
        A diferencia del asilo afirmativo, que puede presentarse ante USCIS, la retenci&oacute;n y la CAT casi siempre se
        deciden <strong>de forma defensiva, ante un juez de inmigraci&oacute;n</strong> en un proceso de remoci&oacute;n.
        Usted solicita las tres protecciones en el mismo <strong>Formulario I-589</strong>, y el juez las pondera en orden
        &mdash; primero el asilo, luego la retenci&oacute;n, luego la CAT &mdash; porque cada una conlleva un est&aacute;ndar
        distinto y un conjunto distinto de beneficios. Para la mayor&iacute;a de los clientes en Georgia, eso significa una
        audiencia de fondo en la <strong>Corte de Inmigraci&oacute;n de Atlanta</strong> o en la corte dentro del{' '}
        <strong>Centro de Detenci&oacute;n de Stewart</strong>.
      </p>
      <p>
        Hay una variaci&oacute;n importante. A las personas que fueron deportadas anteriormente y luego regresaron se les
        puede reactivar su orden antigua mediante la{' '}
        <Link href="/es/blog/reinstatement-of-removal-prior-deportation-georgia">reinstalaci&oacute;n de la
        remoci&oacute;n</Link>, lo que cierra el asilo por completo. Si expresan temor de regresar, se les coloca en un{' '}
        <strong>proceso &ldquo;solo de retenci&oacute;n&rdquo; (withholding-only)</strong> &mdash; una audiencia limitada a
        la retenci&oacute;n y la CAT, sin posibilidad de asilo ni de green card. En esos casos, la retenci&oacute;n no es un
        plan B; es todo el caso, lo que hace que armar bien el expediente y el testimonio sea absolutamente decisivo.
      </p>

      <h2>La vida con el estatus de retenci&oacute;n</h2>
      <p>
        Una concesi&oacute;n de retenci&oacute;n o CAT lo mantiene a salvo de la remoci&oacute;n al pa&iacute;s que usted
        teme, pero es una existencia distinta y m&aacute;s limitada que el asilo. Los clientes merecen un panorama claro:
      </p>
      <ul>
        <li>
          <strong>Autorizaci&oacute;n de trabajo, s&iacute;.</strong> Las personas a quienes se les concede la
          retenci&oacute;n de remoci&oacute;n son elegibles para la <strong>autorizaci&oacute;n de empleo</strong>, de modo
          que usted puede trabajar legalmente y renovar ese permiso.
        </li>
        <li>
          <strong>Sin green card, sin camino a la ciudadan&iacute;a.</strong> La retenci&oacute;n no se ajusta a la
          residencia permanente. A menos que la ley cambie o que m&aacute;s adelante surja otra forma de alivio, el estatus
          no se &ldquo;mejora.&rdquo;
        </li>
        <li>
          <strong>Sin documento de viaje &mdash; no salga del pa&iacute;s.</strong> Debajo de una concesi&oacute;n de
          retenci&oacute;n existe una orden de remoci&oacute;n pendiente. Si usted sale de Estados Unidos, en la
          pr&aacute;ctica ejecuta esa orden y pierde su protecci&oacute;n. No existe un permiso adelantado (advance parole)
          que le permita a un beneficiario de retenci&oacute;n viajar al extranjero y regresar de forma segura.
        </li>
        <li>
          <strong>Puede revisarse.</strong> Como la retenci&oacute;n se basa en las condiciones de su pa&iacute;s de origen,
          el gobierno puede pedir terminarla si esas circunstancias cambian de manera fundamental. Es protecci&oacute;n, no
          permanencia.
        </li>
      </ul>

      <h2>Por qu&eacute; aqu&iacute; es esencial un abogado</h2>
      <p>
        Estas tres protecciones &mdash; asilo, retenci&oacute;n y CAT &mdash; se deciden en conjunto, bajo est&aacute;ndares
        distintos, a menudo en una sola audiencia, con frecuencia en la <strong>Corte de Inmigraci&oacute;n de
        Atlanta</strong> o en la corte del <strong>Centro de Detenci&oacute;n de Stewart</strong> en Lumpkin, donde lo que
        est&aacute; en juego y el nivel de escrutinio son altos. Un abogado hace varias cosas que una persona no puede hacer
        f&aacute;cilmente por su cuenta: construye el expediente sobre las condiciones del pa&iacute;s, formula
        correctamente la teor&iacute;a del grupo social en particular o de la tortura, lo prepara para testificar de manera
        coherente, y decide c&oacute;mo ordenar los reclamos para que una barra a uno no hunda a los dem&aacute;s. La
        diferencia entre un caso de retenci&oacute;n bien documentado y uno endeble suele ser la diferencia entre quedarse y
        ser deportado.
      </p>

      <h2>Hable con Eszter Bardi sobre sus opciones</h2>
      <p>
        Si usted teme regresar a su pa&iacute;s de origen &mdash; haya solicitado o no asilo alguna vez, e incluso si tiene
        antecedentes penales &mdash; no suponga que se qued&oacute; sin opciones. En Bardi Immigration Law, la abogada{' '}
        <strong>Eszter Bardi</strong> eval&uacute;a personalmente reclamos de asilo, retenci&oacute;n de remoci&oacute;n y
        CAT para clientes en todo Georgia y el sureste, y explica con honestidad cu&aacute;l protecci&oacute;n se ajusta a
        sus hechos.
      </p>
      <p>
        <strong>Agende una consulta hoy.</strong> Conozca m&aacute;s sobre el{' '}
        <Link href="/es/blog/asylum-application-georgia">proceso de asilo en Georgia</Link>, qu&eacute; sucede si usted{' '}
        <Link href="/es/blog/asylum-one-year-bar-exceptions-georgia">perdi&oacute; el plazo de un a&ntilde;o para el
        asilo</Link>, y c&oacute;mo manejamos la{' '}
        <Link href="/es/blog/deportation-defense-removal-proceedings-georgia">defensa contra la deportaci&oacute;n y los
        procesos de remoci&oacute;n</Link> &mdash; o{' '}
        <Link href="/es/contact">solicite una consulta en l&iacute;nea</Link>. Hablamos espa&ntilde;ol.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este art&iacute;culo ofrece informaci&oacute;n legal general y no
          constituye asesor&iacute;a legal. La retenci&oacute;n de remoci&oacute;n, el asilo y el alivio bajo la
          Convenci&oacute;n contra la Tortura se rigen por est&aacute;ndares y barras que se litigan y que cambian.
          Confirme los estatutos, reglamentos, jurisprudencia y procedimientos vigentes en los sitios web de USCIS y EOIR,
          y consulte a un abogado de inmigraci&oacute;n con licencia para obtener orientaci&oacute;n espec&iacute;fica para
          su caso.
        </em>
      </p>
    </div>
  );
}
