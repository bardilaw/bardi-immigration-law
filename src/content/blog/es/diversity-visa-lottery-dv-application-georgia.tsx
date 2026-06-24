/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (el programa de Visa de Diversidad bajo INA §203(c); las hasta 55,000 visas de inmigrante por diversidad cada a&ntilde;o; la lista de pa&iacute;ses excluidos de alta admisi&oacute;n que cambia cada a&ntilde;o; la cargabilidad por pa&iacute;s de nacimiento y la cargabilidad alterna a trav&eacute;s de un c&oacute;nyuge o de los padres; el requisito de educaci&oacute;n de secundaria o de dos a&ntilde;os de trabajo calificado; la ventana de registro de la Visa de Diversidad Electr&oacute;nica (E-DV) en dvlottery.state.gov; el sistema Entrant Status Check de solo resultados; el Formulario DS-260 y el procesamiento del Kentucky Consular Center; la fecha l&iacute;mite estricta del cierre del a&ntilde;o fiscal (30 de septiembre) y los l&iacute;mites de corte por rango; el ajuste de estatus bajo INA §245 frente al procesamiento consular; y el examen m&eacute;dico y las causales de inadmisibilidad) que pueden cambiar con la pol&iacute;tica del DOS/USCIS y las instrucciones anuales de la DV. La lista de pa&iacute;ses elegibles vs. excluidos — incluyendo si Nigeria califica en un a&ntilde;o dado — y cada fecha del programa debe confirmarse contra las Instrucciones del Programa DV del a&ntilde;o vigente y el Bolet&iacute;n de Visas antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/diversity-visa-lottery-dv-application-georgia.tsx (BAR-832). Español natural, no traducción literal.

export const esTitle = 'Loter&iacute;a de Visas de Diversidad en Georgia: C&oacute;mo Aplicar y Qu&eacute; Pasa si Resulta Seleccionado';
export const esDescription =
  'Una abogada de inmigraci&oacute;n en Georgia explica la Loter&iacute;a de Visas de Diversidad bajo INA §203(c): qui&eacute;n califica, la cargabilidad alterna, c&oacute;mo registrarse gratis en E-DV, por qu&eacute; la selecci&oacute;n no es una visa, el DS-260 y el Kentucky Consular Center, y la fecha l&iacute;mite del a&ntilde;o fiscal del 30 de septiembre. Informaci&oacute;n general, no asesor&iacute;a legal.';

export function DiversityVisaLotteryPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Para muchos inmigrantes de las comunidades de la di&aacute;spora africana del &aacute;rea metropolitana de
        Atlanta &mdash; etíopes, congoleses, cameruneses y otras &mdash; la &ldquo;loter&iacute;a de la green
        card&rdquo; de la Visa de Diversidad es uno de los pocos caminos realistas hacia la residencia permanente sin
        un empleador o un familiar cercano ciudadano estadounidense. Cada a&ntilde;o, el Departamento de Estado de
        EE.&nbsp;UU. otorga hasta <strong>55,000</strong> visas de inmigrante a personas de pa&iacute;ses que
        env&iacute;an pocos inmigrantes a Estados Unidos. Registrarse es gratis, toma diez minutos, y millones de
        personas lo pierden, lo arruinan o son estafadas.
      </p>
      <p>
        Esta gu&iacute;a explica, para quienes se registran y para quienes resultan seleccionados en todo Georgia y
        Alabama, qui&eacute;n califica, c&oacute;mo registrarse sin descalificarse, y &mdash; la parte que la mayor&iacute;a
        de la gente hace mal &mdash; qu&eacute; tiene que pasar realmente <em>despu&eacute;s</em> de ser seleccionado.
      </p>

      <h2>Qu&eacute; es la Loter&iacute;a de Visas de Diversidad</h2>
      <p>
        El programa de Visa de Inmigrante por Diversidad, creado bajo <strong>INA &sect; 203(c)</strong>, reserva
        hasta 55,000 green cards cada a&ntilde;o para nativos de pa&iacute;ses con tasas hist&oacute;ricamente bajas de
        inmigraci&oacute;n a Estados Unidos. Lo administra el Departamento de Estado, no USCIS, y funciona con un ciclo
        anual fijo: una ventana breve de registro en el oto&ntilde;o, los resultados en la primavera siguiente, y las
        visas emitidas durante un solo a&ntilde;o fiscal federal. La selecci&oacute;n es aleatoria &mdash; una
        verdadera loter&iacute;a &mdash; pero la elegibilidad y el seguimiento no lo son. La mayor&iacute;a de las
        personas que resultan &ldquo;seleccionadas&rdquo; nunca llegan a recibir una green card, casi siempre por
        razones evitables.
      </p>

      <h2>Paso 1: &iquest;Es usted siquiera elegible?</h2>
      <p>Hay dos requisitos, y debe cumplir con ambos.</p>
      <p>
        <strong>1. Debe ser nativo de un pa&iacute;s que califique.</strong> Cada a&ntilde;o, el Departamento de
        Estado publica una lista de pa&iacute;ses <em>excluidos</em> &mdash; los que han enviado m&aacute;s de 50,000
        inmigrantes a EE.&nbsp;UU. en los cinco a&ntilde;os anteriores. La lista cambia cada a&ntilde;o. En a&ntilde;os
        recientes ha incluido pa&iacute;ses de alto volumen como M&eacute;xico, India, China, Filipinas, la
        Rep&uacute;blica Dominicana, El Salvador, Honduras, Brasil, Canad&aacute; y el Reino Unido &mdash;{' '}
        <strong>y, en varios a&ntilde;os recientes, Nigeria</strong>, que cruz&oacute; el umbral de los 50,000.
        Pa&iacute;ses como <strong>Etiop&iacute;a, la Rep&uacute;blica Democr&aacute;tica del Congo y
        Camer&uacute;n</strong> generalmente han seguido siendo elegibles y est&aacute;n entre las mayores fuentes de
        seleccionados del programa. Como la lista cambia cada a&ntilde;o, confirme siempre el estatus de su
        pa&iacute;s contra las instrucciones oficiales de la DV del a&ntilde;o vigente.
      </p>
      <p>
        De forma cr&iacute;tica, &ldquo;nativo&rdquo; generalmente significa su <strong>pa&iacute;s de
        nacimiento</strong> &mdash; no su ciudadan&iacute;a ni d&oacute;nde vive ahora. Pero existen dos reglas de{' '}
        <strong>cargabilidad alterna</strong> que rescatan a muchas personas cuyo pa&iacute;s de nacimiento
        est&aacute; excluido:
      </p>
      <ul>
        <li>
          Puede reclamar el pa&iacute;s de nacimiento de su <strong>c&oacute;nyuge</strong>, si su c&oacute;nyuge es
          de un pa&iacute;s elegible y ambos se registran e inmigran juntos.
        </li>
        <li>
          Puede reclamar el pa&iacute;s de nacimiento de uno de sus <strong>padres</strong>, si ninguno de sus padres
          naci&oacute; en <em>ni</em> fue residente legal de su pa&iacute;s de nacimiento al momento en que usted
          naci&oacute;.
        </li>
      </ul>
      <p>
        As&iacute; es exactamente como muchos solicitantes nacidos en Nigeria que viven en Georgia todav&iacute;a
        participan: un c&oacute;nyuge nacido en Nigeria a veces puede registrarse bajo un esposo o esposa nacido(a) en
        un pa&iacute;s elegible. Vale la pena revisarlo antes de asumir que est&aacute; descartado.
      </p>
      <p>
        <strong>2. Debe cumplir con el requisito de educaci&oacute;n o de trabajo.</strong> Cada participante
        necesita <em>o bien</em> una <strong>educaci&oacute;n de secundaria o su equivalente</strong> (un curso
        completo de doce a&ntilde;os de educaci&oacute;n primaria y secundaria) <em>o bien</em>{' '}
        <strong>dos a&ntilde;os de trabajo</strong> dentro de los &uacute;ltimos cinco a&ntilde;os en una
        ocupaci&oacute;n que de por s&iacute; requiera al menos dos a&ntilde;os de capacitaci&oacute;n o experiencia.
        No hay forma de sustituir uno por el otro despu&eacute;s del hecho &mdash; si no tiene ninguno de los dos, no
        es elegible, sin importar c&oacute;mo resulte la loter&iacute;a.
      </p>

      <h2>Paso 2: El registro &mdash; la ventana de octubre&ndash;noviembre</h2>
      <p>
        La &uacute;nica forma de registrarse es el sistema de <strong>Visa de Diversidad Electr&oacute;nica
        (E-DV)</strong> en{' '}
        <a href="https://dvlottery.state.gov/" target="_blank" rel="noopener noreferrer">dvlottery.state.gov</a>, y
        solo durante el per&iacute;odo de registro &mdash; t&iacute;picamente una ventana de aproximadamente un mes
        desde principios de <strong>octubre hasta principios de noviembre</strong>. El registro es{' '}
        <strong>completamente gratuito</strong>. Lo m&aacute;s importante que debe entender:{' '}
        <strong>no hay registro en papel, no hay tarifa y no hay ning&uacute;n &ldquo;agente&rdquo; que pueda mejorar
        sus probabilidades.</strong> Cualquiera que le cobre por <em>registrarse</em> en la loter&iacute;a est&aacute;
        cometiendo una estafa.
      </p>
      <p>Los errores que descalifican silenciosamente miles de registros cada a&ntilde;o:</p>
      <ul>
        <li>
          <strong>Enviar m&aacute;s de un registro.</strong> Los registros duplicados para la misma persona son{' '}
          <strong>descalificados autom&aacute;ticamente</strong> &mdash; ambos. (Un matrimonio puede presentar cada
          uno un registro separado que liste al otro como c&oacute;nyuge; eso est&aacute; permitido y de hecho duplica
          las probabilidades de la pareja.)
        </li>
        <li>
          <strong>Una foto que no cumple los requisitos.</strong> Las reglas de la foto son estrictas y
          t&eacute;cnicas &mdash; tama&ntilde;o, fondo, que sea reciente, sin lentes &mdash; y una mala foto anula el
          registro. Reutilizar la foto de un a&ntilde;o anterior es causal de descalificaci&oacute;n.
        </li>
        <li>
          <strong>Omitir a un c&oacute;nyuge o a un hijo.</strong> No listar a <em>todos</em> los dependientes
          actuales, incluido un reci&eacute;n nacido o un c&oacute;nyuge, es una de las razones m&aacute;s comunes por
          las que un registro ganador termina siendo descartado en la entrevista.
        </li>
        <li>
          <strong>Errores en el nombre, la fecha de nacimiento o el pa&iacute;s.</strong> Estos lo persiguen hasta la
          entrevista y pueden hundir un caso que de otro modo ser&iacute;a ganador.
        </li>
      </ul>
      <p>
        Conserve su <strong>n&uacute;mero de confirmaci&oacute;n</strong> desde el momento en que env&iacute;a el
        registro. Es la &uacute;nica forma de verificar sus resultados, y el Departamento de Estado no se lo
        reenviar&aacute;.
      </p>

      <h2>Paso 3: Ser seleccionado no es lo mismo que ser aprobado</h2>
      <p>
        Los resultados se publican en <strong>mayo</strong> del a&ntilde;o siguiente. Esta es la parte que atrapa a la
        gente: <strong>el gobierno de EE.&nbsp;UU. nunca le env&iacute;a un correo electr&oacute;nico ni una carta
        para decirle que gan&oacute;.</strong> Usted se entera de una sola manera &mdash; volviendo a iniciar
        sesi&oacute;n en el mismo sitio E-DV y usando <strong>Entrant Status Check</strong> con su n&uacute;mero de
        confirmaci&oacute;n. Cualquier correo, carta o mensaje de texto que afirme que gan&oacute; la loter&iacute;a
        de la green card y que le pida dinero es un fraude.
      </p>
      <p>
        Y ser seleccionado <strong>no</strong> significa que tenga una visa. Significa que ha ganado el derecho a{' '}
        <em>solicitar</em>. De ah&iacute; se derivan dos realidades contundentes:
      </p>
      <ul>
        <li>
          <strong>Se selecciona a m&aacute;s personas que las visas disponibles.</strong> El Departamento de Estado
          deliberadamente escoge a muchos m&aacute;s participantes que las ~55,000 visas disponibles, porque muchos
          nunca completan el proceso. Los seleccionados se procesan en <strong>orden de rango por regi&oacute;n</strong>,
          y si las visas se agotan antes de que llegue su n&uacute;mero, no recibe nada.
        </li>
        <li>
          <strong>Hay una fecha l&iacute;mite estricta que nunca se mueve.</strong> Cada visa de diversidad debe
          emitirse antes del <strong>cierre del a&ntilde;o fiscal federal &mdash; el 30 de septiembre</strong> &mdash;
          del a&ntilde;o del programa. Los n&uacute;meros no utilizados se pierden; no se trasladan al a&ntilde;o
          siguiente. Un seleccionado de la DV-2026, por ejemplo, debe completar todo el proceso y recibir una visa
          antes del <strong>30 de septiembre de 2026</strong>. Por eso los casos de DV avanzan con plazos
          brutalmente ajustados y por eso la demora es el enemigo.
        </li>
      </ul>
      <p>
        Una vez seleccionado, usted presenta el <strong>Formulario DS-260</strong> ante el{' '}
        <strong>Kentucky Consular Center (KCC)</strong>, re&uacute;ne los documentos civiles (acta de nacimiento,
        certificados de antecedentes penales, prueba de educaci&oacute;n o de trabajo), completa un{' '}
        <Link href="/es/blog/green-card-medical-exam-i-693-georgia">examen m&eacute;dico</Link> con un m&eacute;dico
        autorizado, y asiste a una entrevista. Si est&aacute; <em>en el extranjero</em>, esa entrevista es en una
        embajada o consulado de EE.&nbsp;UU. mediante el{' '}
        <Link href="/es/blog/consular-processing-immigrant-visa-georgia">procesamiento consular</Link>. Si ya
        est&aacute; legalmente en Estados Unidos &mdash; por ejemplo, con una visa de estudiante o de trabajo aqu&iacute;
        en Georgia &mdash; es posible que pueda{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajustar su estatus</Link> con USCIS mediante el
        Formulario I-485, pero aplica el mismo corte del 30 de septiembre.
      </p>

      <h2>Qu&eacute; puede descalificar a un seleccionado</h2>
      <p>
        Muchos solicitantes seleccionados pierden el premio en la etapa final. Las razones recurrentes:
      </p>
      <ul>
        <li>
          <strong>Incumplir los plazos.</strong> El corte del a&ntilde;o fiscal es implacable. Reunir documentos con
          lentitud, un DS-260 tard&iacute;o o un cupo de entrevista atrasado pueden agotar el tiempo.
        </li>
        <li>
          <strong>Causales de inadmisibilidad.</strong> Un{' '}
          <Link href="/es/blog/criminal-record-immigration-consequences-georgia">antecedente penal</Link>, un fraude
          o tergiversaci&oacute;n migratoria previa, o{' '}
          <Link href="/es/blog/unlawful-presence-3-year-10-year-bar-georgia">presencia ilegal</Link> acumulada pueden
          impedir una visa incluso a un seleccionado de la loter&iacute;a &mdash; a veces subsanable con un
          perd&oacute;n, a veces no.
        </li>
        <li>
          <strong>Causales de salud.</strong> Una enfermedad transmisible de importancia para la salud p&uacute;blica
          o la falta de vacunas requeridas pueden detener la autorizaci&oacute;n m&eacute;dica hasta que se resuelvan.
        </li>
        <li>
          <strong>Fallas de documentaci&oacute;n y de elegibilidad.</strong> La incapacidad de probar el requisito de
          secundaria o de trabajo calificado, nombres que no coinciden, o un registro que omiti&oacute; a un familiar.
        </li>
      </ul>
      <p>
        Muchas de estas son previsibles y subsanables &mdash; pero solo si se detectan <em>a tiempo</em>, mientras
        todav&iacute;a hay margen antes del 30 de septiembre para preparar un perd&oacute;n o corregir el expediente.
      </p>

      <h2>Los dos momentos para buscar ayuda</h2>
      <p>
        Hay dos puntos distintos en los que un abogado de inmigraci&oacute;n cambia el resultado de un caso de DV:
      </p>
      <ol>
        <li>
          <strong>Antes de registrarse</strong> &mdash; para confirmar su elegibilidad y su cargabilidad (incluido si
          el pa&iacute;s de un c&oacute;nyuge o de un padre abre una puerta que su propio pa&iacute;s de nacimiento
          cierra), y para asegurarse de que el registro en s&iacute; est&eacute; limpio, de modo que una futura
          selecci&oacute;n no quede anulada por un tecnicismo.
        </li>
        <li>
          <strong>Despu&eacute;s de ser seleccionado</strong> &mdash; para revisar cualquier causal de
          inadmisibilidad, preparar cualquier perd&oacute;n necesario, elegir entre el ajuste de estatus y el
          procesamiento consular, e impulsar el DS-260, los documentos, el examen m&eacute;dico y la entrevista hasta
          completarlos <em>antes de que termine el a&ntilde;o fiscal</em>.
        </li>
      </ol>

      <h2>Hable con Eszter Bardi &mdash; Consulta gratuita</h2>
      <p>
        Si ha ganado la loter&iacute;a de la Visa de Diversidad &mdash; o quiere registrarse en la pr&oacute;xima y
        hacerlo bien &mdash; el tiempo lo es todo. En Bardi Immigration Law, la abogada <strong>Eszter Bardi</strong>{' '}
        ayuda a miembros de las comunidades etíope, congolesa, camerunesa y de la comunidad africana y
        carible&ntilde;a en general de Georgia y Alabama a confirmar su elegibilidad, presentar registros limpios y
        mover los casos seleccionados a trav&eacute;s del KCC, el examen m&eacute;dico y la entrevista contra el reloj
        del 30 de septiembre.
      </p>
      <p>
        <strong>Agende su consulta gratuita hoy.</strong> Trabajar&aacute; directamente con la Abogada Bardi &mdash;
        no con un especialista de admisi&oacute;n. <Link href="/es/contact">Solicite su consulta gratuita en
        l&iacute;nea.</Link> Hablamos espa&ntilde;ol. Conozca m&aacute;s sobre nuestros servicios de{' '}
        <Link href="/services/family-based-immigration">inmigraci&oacute;n</Link>.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este art&iacute;culo ofrece informaci&oacute;n legal general y no
          constituye asesor&iacute;a legal. El programa de Visa de Diversidad cambia cada a&ntilde;o &mdash; la lista
          de pa&iacute;ses elegibles y excluidos, las fechas exactas de registro, las reglas de cargabilidad y de
          educaci&oacute;n, y los plazos del programa son fijados anualmente por el Departamento de Estado de
          EE.&nbsp;UU. Confirme las Instrucciones del Programa DV del a&ntilde;o vigente y el Bolet&iacute;n de
          Visas, as&iacute; como su elegibilidad y admisibilidad individuales, con un abogado de inmigraci&oacute;n con
          licencia antes de registrarse, presentar documentos o viajar.
        </em>
      </p>
    </div>
  );
}
