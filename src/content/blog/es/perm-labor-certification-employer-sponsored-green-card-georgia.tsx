/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (proceso PERM de certificación laboral del DOL bajo 20 CFR Parte 656, determinación de salario prevaleciente vía FLAG y ETA Form 9141, reclutamiento obligatorio, ETA Form 9089, auditorías, revisión de BALCA, I-140 y fechas de prioridad) que pueden cambiar. Confirmar antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/perm-labor-certification-employer-sponsored-green-card-georgia.tsx (BAR-807). Español natural, no traducción literal.

export const esTitle =
  'Certificación Laboral PERM en Georgia: Green Card Patrocinada por el Empleador (EB-2 y EB-3)';
export const esDescription =
  'Una abogada de inmigración en Georgia explica la certificación laboral PERM: el salario prevaleciente, el reclutamiento obligatorio, el Formulario ETA 9089, los tiempos de procesamiento, las auditorías del DOL y el paso al I-140 y la green card.';

export function PermLaborCertificationPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Si un empleador de Georgia quiere patrocinar a un trabajador extranjero para una green card permanente en
        la categor&iacute;a <strong>EB-2</strong> o <strong>EB-3</strong>, el primer &mdash; y m&aacute;s exigente
        &mdash; paso casi siempre es la <strong>certificaci&oacute;n laboral PERM</strong>. PERM corresponde a las
        siglas en ingl&eacute;s de <em>Program Electronic Review Management</em>, el proceso del Departamento de
        Trabajo de Estados Unidos (DOL) que el empleador debe completar antes incluso de poder presentar la
        petici&oacute;n de green card. Es t&eacute;cnico, est&aacute; lleno de plazos y no perdona los errores. Un
        solo error de tipeo o un paso de reclutamiento omitido puede hundir un caso que tom&oacute; m&aacute;s de
        un a&ntilde;o construir.
      </p>
      <p>
        Cada a&ntilde;o, empleadores de Georgia en tecnolog&iacute;a, salud, manufactura y hospitalidad patrocinan
        a trabajadores a trav&eacute;s de PERM &mdash; ingenieros de software en el corredor tecnol&oacute;gico de
        Atlanta, enfermeras y m&eacute;dicos en los sistemas hospitalarios, ingenieros en las plantas proveedoras
        de Kia y Hyundai, y personal calificado de hospitalidad. Esta gu&iacute;a explica qu&eacute; es PERM, por
        qu&eacute; existe, c&oacute;mo funcionan los requisitos del salario prevaleciente y del reclutamiento,
        qu&eacute; implica la solicitud del Formulario ETA 9089, cu&aacute;nto tarda, por qu&eacute; las
        auditor&iacute;as son tan comunes, los errores que llevan a la negaci&oacute;n de un caso, y qu&eacute;
        pasa despu&eacute;s de la certificaci&oacute;n. (Para ver c&oacute;mo encaja PERM dentro del sistema
        m&aacute;s amplio de green cards por empleo &mdash; incluyendo las v&iacute;as EB-1 y la Exenci&oacute;n
        por Inter&eacute;s Nacional (NIW) del EB-2 que <strong>se saltan PERM por completo</strong> &mdash; vea
        nuestra{' '}
        <Link href="/es/blog/employment-based-green-card-eb1-eb2-eb3-georgia">
          gu&iacute;a sobre las green cards por empleo EB-1, EB-2 y EB-3 en Georgia
        </Link>
        .)
      </p>

      <h2>Qu&eacute; es PERM &mdash; y por qu&eacute; existe</h2>
      <p>
        PERM es la prueba del mercado laboral que el gobierno exige antes de que un empleador estadounidense pueda
        contratar permanentemente a un trabajador extranjero a trav&eacute;s de la mayor&iacute;a de las green
        cards por empleo. Su prop&oacute;sito est&aacute; escrito en la ley: <strong>proteger a los trabajadores
        estadounidenses</strong>. Antes de que el DOL permita a un empleador patrocinar a un extranjero, el
        empleador debe demostrar dos cosas:
      </p>
      <ul>
        <li>
          Que <strong>no existe ning&uacute;n trabajador estadounidense capaz, dispuesto, calificado y
          disponible</strong> para el puesto en el lugar donde se pretende emplear, lo cual se comprueba mediante
          un proceso estructurado de reclutamiento; y
        </li>
        <li>
          Que contratar al trabajador extranjero <strong>no afectar&aacute; negativamente los salarios ni las
          condiciones de trabajo</strong> de los trabajadores estadounidenses empleados de forma similar &mdash;
          lo cual se garantiza mediante el requisito del salario prevaleciente.
        </li>
      </ul>
      <p>
        La mayor&iacute;a de las green cards <strong>EB-2</strong> (grado avanzado o habilidad excepcional) y{' '}
        <strong>EB-3</strong> (trabajadores calificados, profesionales y otros trabajadores) requieren un PERM
        certificado. Las excepciones principales son la <strong>EB-1</strong> (trabajadores prioritarios) y la{' '}
        <strong>Exenci&oacute;n por Inter&eacute;s Nacional del EB-2 (NIW)</strong>, ambas de las cuales evitan la
        certificaci&oacute;n laboral &mdash; una raz&oacute;n por la que la estrategia de categor&iacute;a importa
        tanto antes de presentar nada.
      </p>

      <h2>Paso uno: la determinaci&oacute;n del salario prevaleciente</h2>
      <p>
        PERM comienza con el <strong>salario prevaleciente</strong> (prevailing wage). El empleador presenta el{' '}
        <strong>Formulario ETA 9141</strong> a trav&eacute;s del sistema en l&iacute;nea FLAG del DOL, y el Centro
        Nacional de Salario Prevaleciente del DOL emite una determinaci&oacute;n de cu&aacute;nto ganan los
        trabajadores comparables para esa ocupaci&oacute;n en esa &aacute;rea geogr&aacute;fica. El empleador debe
        comprometerse a pagar <strong>al menos</strong> el salario prevaleciente una vez que el trabajador se
        convierta en residente permanente.
      </p>
      <p>
        Este paso importa m&aacute;s de lo que los empleadores esperan. Si se fijan los requisitos y las funciones
        del puesto demasiado altos, el salario prevaleciente sube &mdash; a veces por encima de lo que el empleador
        planeaba pagar. Si se define el cargo de forma descuidada, el nivel salarial puede socavar todo el caso. La
        determinaci&oacute;n del salario prevaleciente tambi&eacute;n tarda meses en emitirse por s&iacute; sola,
        as&iacute; que es el primer punto donde entra la demora en el proceso.
      </p>

      <h2>Paso dos: el reclutamiento &mdash; probar el mercado laboral estadounidense</h2>
      <p>
        Con un salario prevaleciente en mano, el empleador debe <strong>reclutar de verdad</strong> para el puesto
        a fin de probar que no hay un trabajador estadounidense calificado disponible. Para las{' '}
        <strong>ocupaciones profesionales</strong> (las que normalmente requieren un t&iacute;tulo), el DOL exige
        un conjunto espec&iacute;fico de pasos:
      </p>
      <ul>
        <li>
          Una <strong>orden de empleo de 30 d&iacute;as</strong> colocada con la agencia estatal de fuerza laboral
          de Georgia;
        </li>
        <li>
          <strong>Dos anuncios dominicales</strong> en un peri&oacute;dico de circulaci&oacute;n general en el
          &aacute;rea donde se pretende emplear;
        </li>
        <li>
          Un <strong>Aviso de Presentaci&oacute;n</strong> (Notice of Filing) interno publicado en el lugar de
          trabajo durante 10 d&iacute;as h&aacute;biles consecutivos (y a trav&eacute;s de cualquier medio
          electr&oacute;nico interno que el empleador use normalmente); y
        </li>
        <li>
          <strong>Tres pasos de reclutamiento adicionales</strong> elegidos de una lista del DOL &mdash; el sitio
          web del empleador, sitios web de b&uacute;squeda de empleo, reclutamiento en campus universitarios,
          organizaciones gremiales o profesionales, agencias privadas de empleo, un programa de referidos de
          empleados, una oficina de colocaci&oacute;n universitaria, peri&oacute;dicos locales o &eacute;tnicos,
          anuncios de radio o televisi&oacute;n, o ferias de empleo.
        </li>
      </ul>
      <p>
        Los puestos no profesionales tienen una lista exigida m&aacute;s reducida, pero a&uacute;n requieren un
        reclutamiento real. Las reglas de tiempo son estrictas: el reclutamiento generalmente debe ocurrir dentro
        de los <strong>180 d&iacute;as</strong> previos a la presentaci&oacute;n, y la solicitud no se puede
        presentar hasta al menos <strong>30 d&iacute;as</strong> despu&eacute;s de que se realice el reclutamiento.
        Cada anuncio, publicaci&oacute;n y fecha tiene que coincidir exactamente con lo que exige el reglamento.
      </p>

      <h2>Paso tres: el informe de reclutamiento y la documentaci&oacute;n</h2>
      <p>
        El reclutamiento no es una formalidad &mdash; el empleador debe <strong>revisar a cada solicitante
        estadounidense</strong> y documentar, en un informe de reclutamiento por escrito, las razones legales y
        relacionadas con el puesto por las que se rechaz&oacute; a cada solicitante. Si un trabajador
        estadounidense calificado y disponible se postula, el empleador por lo general no puede continuar con PERM
        para el trabajador extranjero. El empleador tambi&eacute;n debe conservar todo el expediente de
        reclutamiento &mdash; recortes de los anuncios, publicaciones, curr&iacute;culos y el informe &mdash;
        durante al menos cinco a&ntilde;os, porque el DOL puede exigirlo mucho despu&eacute;s de la
        certificaci&oacute;n.
      </p>

      <h2>Paso cuatro: presentar el Formulario ETA 9089</h2>
      <p>
        Solo despu&eacute;s del reclutamiento y del per&iacute;odo de espera, el empleador presenta la solicitud de
        certificaci&oacute;n laboral propiamente dicha, el <strong>Formulario ETA 9089</strong>, de forma
        electr&oacute;nica a trav&eacute;s del sistema FLAG del DOL. El formulario certifica los requisitos del
        puesto, el reclutamiento realizado, el salario prevaleciente y la capacidad de pago del empleador. De forma
        crucial, el empleador <strong>no</strong> presenta la evidencia de respaldo junto con el formulario &mdash;
        certifica bajo pena de perjurio que la documentaci&oacute;n existe y se producir&aacute; si el DOL la pide.
        Eso es exactamente lo que ocurre en una auditor&iacute;a.
      </p>

      <h2>Tiempos de procesamiento y riesgo de auditor&iacute;a</h2>
      <p>
        PERM es lento, y se ha vuelto a&uacute;n m&aacute;s lento. Entre la determinaci&oacute;n del salario
        prevaleciente, la ventana obligatoria de reclutamiento, el per&iacute;odo de espera y la revisi&oacute;n
        del analista del DOL, un caso limpio f&aacute;cilmente toma <strong>m&aacute;s de un a&ntilde;o</strong>{' '}
        desde el inicio hasta la certificaci&oacute;n &mdash; y los tiempos de procesamiento publicados por el DOL
        cambian, as&iacute; que el plazo siempre debe verificarse contra los datos vigentes de la agencia antes de
        que alguien cuente con una fecha.
      </p>
      <p>
        Luego est&aacute;n las <strong>auditor&iacute;as</strong>. El DOL audita una parte considerable de los
        casos PERM &mdash; algunos al azar, otros activados por algo en la solicitud (un requisito restrictivo, un
        requisito de idioma extranjero, una relaci&oacute;n familiar entre el trabajador y el empleador, un despido
        en la ocupaci&oacute;n). Una auditor&iacute;a no es una negaci&oacute;n, pero <strong>suma muchos
        meses</strong> al caso y obliga al empleador a producir el expediente de reclutamiento completo y una
        respuesta detallada. Los casos auditados que no se resuelven pueden ser negados o enviados a{' '}
        <strong>reclutamiento supervisado</strong>, donde el DOL controla todo el proceso de reclutamiento &mdash;
        a&ntilde;adiendo a&uacute;n m&aacute;s tiempo. Construir el expediente como si una auditor&iacute;a fuera a
        llegar es la &uacute;nica manera segura de manejar un caso PERM.
      </p>

      <h2>Razones comunes por las que se niegan los casos PERM</h2>
      <p>
        El DOL aplica las reglas de PERM de forma estricta e hist&oacute;ricamente ha tenido un enfoque de casi
        cero tolerancia al error. Entre las razones comunes de negaci&oacute;n est&aacute;n:
      </p>
      <ul>
        <li>
          <strong>Defectos en el reclutamiento</strong> &mdash; un anuncio que omite contenido obligatorio, que
          corre en los d&iacute;as equivocados, o que cae fuera de las ventanas de tiempo;
        </li>
        <li>
          <strong>Rechazar indebidamente a un solicitante estadounidense calificado</strong>, o no documentar una
          raz&oacute;n legal y relacionada con el puesto para el rechazo;
        </li>
        <li>
          <strong>Requisitos del puesto excesivamente restrictivos</strong> que superan los requisitos normales de
          la ocupaci&oacute;n sin una necesidad de negocio documentada;
        </li>
        <li>
          <strong>Problemas con el salario prevaleciente</strong> &mdash; una determinaci&oacute;n vencida o un
          salario ofrecido por debajo del nivel requerido; y
        </li>
        <li>
          <strong>Errores en el propio Formulario ETA 9089</strong> &mdash; inconsistencias, omisiones o errores de
          tipeo. El DOL ha negado casos por peque&ntilde;os errores administrativos, y no hay un simple segundo
          intento: los remedios son una solicitud limitada de reconsideraci&oacute;n o una apelaci&oacute;n ante la
          Junta de Apelaciones de Certificaci&oacute;n Laboral de Extranjeros (BALCA), ambos lentos.
        </li>
      </ul>

      <h2>Despu&eacute;s de que PERM se certifica: la petici&oacute;n I-140</h2>
      <p>
        Un PERM certificado no es la green card &mdash; es la llave que abre la siguiente etapa. La
        certificaci&oacute;n es v&aacute;lida por <strong>180 d&iacute;as</strong>, dentro de los cuales el
        empleador debe presentar el <strong>Formulario I-140</strong>, la Petici&oacute;n de Inmigrante para
        Trabajador Extranjero, ante USCIS. El I-140 prueba que el trabajador cumple con los requisitos del puesto y
        que el empleador tiene la capacidad de pagar el salario ofrecido.
      </p>
      <p>
        La fecha en que se present&oacute; el PERM se convierte en la <strong>fecha de prioridad</strong> del
        trabajador &mdash; el lugar en la fila que determina cu&aacute;ndo queda disponible una green card. Para
        los trabajadores nacidos en pa&iacute;ses con grandes retrasos como <strong>India y China</strong>, esa
        espera en EB-2 y EB-3 puede prolongarse durante a&ntilde;os, regida por el Bolet&iacute;n de Visas mensual.
        Una vez que la fecha de prioridad est&aacute; vigente, el trabajador completa el proceso mediante el{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajuste de estatus</Link> (si est&aacute; en
        EE. UU.) o el{' '}
        <Link href="/es/blog/consular-processing-immigrant-visa-georgia">proceso consular</Link> (si est&aacute; en
        el extranjero).
      </p>

      <h2>Por qu&eacute; un abogado es esencial &mdash; para ambas partes</h2>
      <p>
        PERM es uno de los pocos procesos migratorios en los que el <strong>empleador</strong>, y no el trabajador,
        es el solicitante y asume las obligaciones legales &mdash; pero ambas partes tienen todo en juego. Para el{' '}
        <strong>empleador</strong>, un abogado redacta requisitos del puesto que se puedan defender, dirige el
        reclutamiento para que sobreviva a una auditor&iacute;a, construye el expediente de documentaci&oacute;n
        que el DOL exigir&aacute;, y defiende el caso si es auditado o enviado a reclutamiento supervisado. Un PERM
        mal hecho no es solo una demora &mdash; es un costo de reclutamiento desperdiciado y un trabajador que la
        empresa puede perder.
      </p>
      <p>
        Para el <strong>trabajador</strong>, un abogado protege la fecha de prioridad, confirma que se eligi&oacute;
        la categor&iacute;a correcta desde el inicio (una autopetici&oacute;n EB-1 o NIW puede superar a un EB-2 o
        EB-3 atado a PERM), y mantiene el caso avanzando desde el PERM al I-140 y a la green card final. Como el
        empleador t&eacute;cnicamente dirige el proceso, la atenci&oacute;n independiente a los intereses del
        trabajador importa &mdash; sobre todo si el trabajador cambia de empleo, donde las reglas de portabilidad
        pueden preservar una fecha de prioridad ganada con mucho esfuerzo.
      </p>

      <h2>Hable con Eszter Bardi sobre las green cards patrocinadas por el empleador</h2>
      <p>
        Ya sea que usted sea un empleador de Georgia listo para patrocinar a un empleado clave a trav&eacute;s de
        PERM, o un trabajador cuya green card depende de hacer bien la certificaci&oacute;n laboral, la abogada{' '}
        <strong>Eszter Bardi</strong> puede trazar el proceso, fijar plazos realistas y construir el caso para que
        resista una auditor&iacute;a del DOL. Bardi Immigration Law atiende a trabajadores y empleadores en todo
        Georgia &mdash; con acceso directo a la abogada, no a un especialista de admisi&oacute;n.
      </p>
      <p>
        <strong>Agende una consulta hoy.</strong> Evaluaremos si PERM es el camino correcto o si encaja mejor una
        categor&iacute;a que lo evita, y construiremos la solicitud correctamente desde la primera vez.{' '}
        <Link href="/es/contact">Solicite una consulta en l&iacute;nea</Link>. Hablamos espa&ntilde;ol &mdash;
        atendemos a la comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este art&iacute;culo ofrece informaci&oacute;n legal general y no
          constituye asesor&iacute;a legal. Las reglas de PERM, los tiempos de procesamiento, las pr&aacute;cticas
          de auditor&iacute;a, los datos salariales y los formularios del DOL cambian con frecuencia y se aplican de
          forma estricta. Confirme los requisitos, formularios, plazos y tiempos de procesamiento vigentes en los
          sitios web del Departamento de Trabajo de EE. UU. (flag.dol.gov) y de USCIS, y consulte a un abogado de
          inmigraci&oacute;n con licencia para obtener orientaci&oacute;n espec&iacute;fica para su caso.
        </em>
      </p>
    </div>
  );
}
