/* Verificar antes de publicar — hace referencia a la extensión STEM OPT de 24 meses bajo 8 CFR 214.2(f)(10)(ii)(C). Puntos clave de exactitud: (1) la elegibilidad requiere un título en un campo STEM designado por el DHS (código CIP en la STEM Designated Degree Program List) de una escuela acreditada y certificada por SEVP, estatus OPT post-graduación vigente, una recomendación del DSO en SEVIS y un empleador inscrito en E-Verify; (2) el estudiante presenta el Formulario I-765 hasta 90 días antes de que venza el EAD de OPT actual — y debe presentarlo antes de que venza; el I-765 debe presentarse dentro de los 60 días de la recomendación del DSO en SEVIS; (3) presentar a tiempo el I-765 de STEM OPT antes de que venza el EAD actual activa una extensión automática de la autorización de empleo de hasta 180 días mientras la solicitud está pendiente; (4) el Formulario I-983 "Training Plan for STEM OPT Students" debe ser completado por el estudiante y el empleador y entregado al DSO antes de la recomendación y antes de empezar con cualquier empleador nuevo; (5) reportes: validación con el DSO cada 6 meses, reporte de cambios materiales (empleador, dirección, nombre, pérdida de empleo) dentro de 10 días, y autoevaluaciones en el I-983 a los 12 y a los 24 meses; (6) E-Verify: si el empleador no está inscrito, se retira o pierde E-Verify, el estudiante no puede usar STEM OPT con ese empleador; (7) cambiar de empleo requiere un nuevo empleador con E-Verify y un nuevo I-983; (8) STEM OPT otorga 60 días adicionales de desempleo permitido (150 días en total entre OPT + STEM OPT, frente a 90 en el OPT inicial); (9) cap-gap puede servir de puente del STEM OPT hasta el inicio de H-1B el 1 de octubre. Las reglas, tarifas y versiones de formularios cambian — confirmar los requisitos vigentes con USCIS y el DSO del estudiante. Información legal general, no asesoría legal. */
import Link from 'next/link';
// Adaptación al español de en/stem-opt-extension-24-month-work-authorization-georgia.tsx (BAR-855). Español natural, no traducción literal.

export const esTitle = 'Extensión STEM OPT en Georgia: 24 Meses de Autorización de Trabajo Tras la Graduación';
export const esDescription =
  'Una abogada de inmigración en Georgia explica la extensión STEM OPT de 24 meses bajo 8 CFR 214.2(f)(10)(ii)(C): qué es, los requisitos de elegibilidad (título STEM, recomendación del DSO y empleador con E-Verify), cómo presentar el Formulario I-765 dentro de la ventana de 90 días, el puente de extensión automática de 180 días, el plan de capacitación I-983, las obligaciones de reporte cada 6 meses y la regla de 10 días, el límite de desempleo, qué hacer si el empleador pierde E-Verify o usted cambia de trabajo, y el cap-gap hacia la H-1B. Información general, no asesoría legal.';

export function StemOptExtensionPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Si se gradu&oacute; de <strong>Georgia Tech, Emory, Kennesaw State, Georgia State o la Universidad de
        Georgia</strong> con un t&iacute;tulo en ingenier&iacute;a, ciencias de la computaci&oacute;n,
        an&aacute;lisis de datos u otro campo STEM, los doce meses est&aacute;ndar de{' '}
        <Link href="/es/blog/student-visa-f1-opt-stem-georgia">Capacitaci&oacute;n Pr&aacute;ctica Opcional (OPT)</Link>{' '}
        pueden quedarse peligrosamente cortos para construir una carrera en el corredor tecnol&oacute;gico de Atlanta.
        La <strong>extensi&oacute;n STEM OPT de 24 meses</strong> le da a los graduados F-1 elegibles un total de tres
        a&ntilde;os de autorizaci&oacute;n de trabajo &mdash; pero viene con obligaciones del empleador,
        documentaci&oacute;n de plan de capacitaci&oacute;n y plazos de reporte que toman a los estudiantes por
        sorpresa. Esta gu&iacute;a explica c&oacute;mo funciona la extensi&oacute;n STEM OPT para los estudiantes y
        empleadores de Georgia, y las trampas que pueden terminar silenciosamente con su autorizaci&oacute;n de trabajo.
      </p>

      <h2>Qu&eacute; Es la Extensi&oacute;n STEM OPT</h2>
      <p>
        El OPT post-graduaci&oacute;n regular le da a un graduado F-1 doce meses de autorizaci&oacute;n de trabajo en
        un empleo relacionado con su especialidad. La extensi&oacute;n STEM OPT a&ntilde;ade{' '}
        <strong>otros 24 meses</strong> sobre eso &mdash; un total de <strong>36 meses</strong> de capacitaci&oacute;n
        pr&aacute;ctica &mdash; para estudiantes cuyo t&iacute;tulo elegible est&aacute; en un campo incluido en la{' '}
        <strong>STEM Designated Degree Program List</strong> (Lista de Programas de T&iacute;tulos STEM Designados) del
        Departamento de Seguridad Nacional. Si su programa califica depende de su <strong>c&oacute;digo CIP</strong>, el
        n&uacute;mero de clasificaci&oacute;n en su Formulario I-20. Para los graduados del &aacute;rea de Atlanta que
        ingresan a puestos de software, ingenier&iacute;a, biotecnolog&iacute;a y tecnolog&iacute;a de la salud, esos
        dos a&ntilde;os adicionales muchas veces marcan la diferencia entre una carrera estancada y un camino viable
        hacia una <Link href="/es/blog/h1b-visa-sponsorship-cap-georgia">H-1B</Link> o una green card.
      </p>

      <h2>Elegibilidad: T&iacute;tulo, DSO y un Empleador con E-Verify</h2>
      <p>
        Para calificar para la extensi&oacute;n de 24 meses, todo lo siguiente debe ser cierto:
      </p>
      <ul>
        <li>
          <strong>Un t&iacute;tulo STEM designado.</strong> Su t&iacute;tulo debe estar en un campo de la lista STEM
          del DHS, otorgado por una escuela acreditada y certificada por SEVP. En algunos casos puede basar la
          extensi&oacute;n en un t&iacute;tulo STEM <strong>obtenido previamente</strong> de una instituci&oacute;n
          estadounidense, aunque su t&iacute;tulo m&aacute;s reciente no haya sido en un campo STEM.
        </li>
        <li>
          <strong>OPT post-graduaci&oacute;n vigente.</strong> Debe estar en un per&iacute;odo v&aacute;lido de OPT
          post-graduaci&oacute;n est&aacute;ndar al momento de presentar la solicitud &mdash; la extensi&oacute;n se
          construye sobre ese per&iacute;odo; no es un beneficio nuevo e independiente.
        </li>
        <li>
          <strong>Una recomendaci&oacute;n del DSO.</strong> El <strong>Funcionario Escolar Designado (DSO)</strong> de
          su escuela debe recomendar la extensi&oacute;n en SEVIS y emitir un I-20 actualizado antes de que usted
          presente la solicitud.
        </li>
        <li>
          <strong>Un empleador con E-Verify.</strong> Su empleador debe estar inscrito y en regla en{' '}
          <strong>E-Verify</strong>, el sistema federal de verificaci&oacute;n de elegibilidad de empleo. Una startup o
          una empresa peque&ntilde;a que no est&eacute; inscrita no puede albergar su STEM OPT &mdash; sin excepciones.
        </li>
      </ul>

      <h2>Presentaci&oacute;n: Formulario I-765, la Ventana de 90 D&iacute;as y el Puente de 180 D&iacute;as</h2>
      <p>
        Usted solicita la extensi&oacute;n presentando el <strong>Formulario I-765</strong> (Solicitud de
        Autorizaci&oacute;n de Empleo) ante USCIS. El momento lo es todo:
      </p>
      <ul>
        <li>
          <strong>Presente hasta 90 d&iacute;as antes de que venza su EAD de OPT actual</strong> &mdash; y debe
          presentarlo <strong>antes de que venza</strong>. Una vez que su tarjeta actual caduca, pierde la ventana.
        </li>
        <li>
          <strong>Presente dentro de los 60 d&iacute;as de la recomendaci&oacute;n de su DSO en SEVIS.</strong> La
          recomendaci&oacute;n del DSO y la presentaci&oacute;n del I-765 tienen que coincidir; si espera demasiado
          despu&eacute;s de la recomendaci&oacute;n, USCIS puede negar la solicitud.
        </li>
        <li>
          <strong>La extensi&oacute;n autom&aacute;tica de 180 d&iacute;as.</strong> Si presenta <em>a tiempo</em> el
          I-765 de STEM OPT antes de que venza su EAD de OPT actual, su autorizaci&oacute;n de empleo se{' '}
          <strong>extiende autom&aacute;ticamente por hasta 180 d&iacute;as</strong> mientras la solicitud
          est&aacute; pendiente. Ese puente es lo que le permite seguir trabajando durante los meses que USCIS tarda en
          adjudicar &mdash; siempre que haya presentado a tiempo. Si presenta tarde, no hay puente.
        </li>
      </ul>

      <h2>El Plan de Capacitaci&oacute;n del Formulario I-983</h2>
      <p>
        El STEM OPT no es un empleo de forma libre &mdash; es un programa de capacitaci&oacute;n estructurado, y el
        documento que lo prueba es el <strong>Formulario I-983, &ldquo;Training Plan for STEM OPT
        Students.&rdquo;</strong> Usted y su empleador lo completan juntos, identificando sus objetivos de aprendizaje,
        c&oacute;mo el trabajo se relaciona con su t&iacute;tulo STEM, su compensaci&oacute;n y c&oacute;mo el empleador
        lo supervisar&aacute; y evaluar&aacute;. El I-983 completado debe ser{' '}
        <strong>entregado a su DSO antes de que el DSO recomiende la extensi&oacute;n</strong> &mdash; es parte de la
        solicitud, no algo de &uacute;ltimo momento. Si despu&eacute;s cambia de empleador, debe completar un{' '}
        <strong>nuevo I-983</strong> con el nuevo empleador y entreg&aacute;rselo a su DSO <strong>antes</strong> de
        empezar el nuevo trabajo. El plan tambi&eacute;n compromete al empleador a certificar que cuenta con los
        recursos para brindar capacitaci&oacute;n real y que no desplazar&aacute; a trabajadores estadounidenses.
      </p>

      <h2>Reportes: La Validaci&oacute;n de 6 Meses y la Regla de 10 D&iacute;as</h2>
      <p>
        El STEM OPT conlleva deberes de reporte continuos que el OPT inicial no tiene, y omitirlos puede dar por
        terminado su registro en SEVIS:
      </p>
      <ul>
        <li>
          <strong>Cada 6 meses, valide su informaci&oacute;n con su DSO.</strong> En las marcas de 6, 12, 18 y 24
          meses debe confirmar su nombre legal, direcci&oacute;n, nombre del empleador y direcci&oacute;n del empleador
          &mdash; aunque nada haya cambiado. Un reporte de validaci&oacute;n omitido puede llevar a que su registro sea
          terminado.
        </li>
        <li>
          <strong>Reporte los cambios materiales dentro de 10 d&iacute;as.</strong> Un cambio de empleador, un cambio
          de su direcci&oacute;n o de la de su empleador, un cambio de nombre, o una p&eacute;rdida de empleo deben
          reportarse a su DSO dentro de <strong>10 d&iacute;as</strong>.
        </li>
        <li>
          <strong>Presente autoevaluaciones en el I-983.</strong> Debe completar una autoevaluaci&oacute;n de su
          progreso de capacitaci&oacute;n en la marca de los <strong>12 meses</strong> y una evaluaci&oacute;n final al
          terminar los <strong>24 meses</strong>, cada una firmada por su empleador y entregada a su DSO.
        </li>
        <li>
          <strong>Cuide el l&iacute;mite de desempleo.</strong> Los estudiantes de STEM OPT reciben 60 d&iacute;as
          adicionales de desempleo permitido, para un total de <strong>150 d&iacute;as</strong> a lo largo de todo el
          per&iacute;odo de OPT m&aacute;s STEM OPT (en comparaci&oacute;n con los 90 d&iacute;as durante el OPT
          inicial). Si lo excede, queda fuera de estatus.
        </li>
      </ul>

      <h2>Si Su Empleador Pierde E-Verify &mdash; o Usted Cambia de Trabajo</h2>
      <p>
        Como la extensi&oacute;n est&aacute; atada a un empleador con E-Verify y a un plan de capacitaci&oacute;n
        espec&iacute;fico, dos situaciones comunes exigen actuar r&aacute;pido. <strong>Si su empleador se retira de
        E-Verify o lo pierde</strong>, ya no puede usar STEM OPT con ese empleador; tendr&iacute;a que mudarse a un
        empleador distinto con E-Verify (con un nuevo I-983) para conservar su autorizaci&oacute;n. <strong>Si cambia
        de trabajo voluntariamente</strong>, el nuevo empleador tambi&eacute;n debe estar inscrito en E-Verify, debe
        completar un nuevo I-983, y debe reportar el cambio a su DSO dentro de 10 d&iacute;as. Por lo general puede
        comenzar a trabajar para el nuevo empleador una vez que el nuevo I-983 est&aacute; en su lugar, pero no lo
        d&eacute; por sentado &mdash; confirme el momento con su DSO antes de su primer d&iacute;a. Los lapsos y los
        errores aqu&iacute; son una causa principal de problemas de estatus evitables para los graduados STEM de Georgia.
      </p>

      <h2>Cap-Gap: El Puente del STEM OPT a una H-1B del 1 de Octubre</h2>
      <p>
        Muchos estudiantes de STEM OPT est&aacute;n al mismo tiempo tratando de ganar la loter&iacute;a de la H-1B. Si
        es seleccionado y su empleador presenta a tiempo una H-1B sujeta al tope, solicitando un cambio de estatus con
        fecha de inicio del 1 de octubre, la regla del <strong>cap-gap</strong> puede extender su estatus &mdash; y a
        menudo su autorizaci&oacute;n de trabajo &mdash; incluso si su STEM OPT venciera antes de octubre. La
        interacci&oacute;n entre el STEM OPT y el cap-gap es donde los errores de tiempo salen caros, por lo que la
        cubrimos en detalle en nuestra{' '}
        <Link href="/es/blog/h1b-cap-gap-opt-work-authorization-georgia">gu&iacute;a del cap-gap de la H-1B</Link>. La
        versi&oacute;n corta: presente la H-1B antes de que venza su EAD de STEM OPT, y no viaje internacionalmente
        durante el per&iacute;odo de cap-gap.
      </p>

      <h2>C&oacute;mo Puede Ayudar Bardi Immigration Law</h2>
      <p>
        La extensi&oacute;n STEM OPT es generosa, pero las obligaciones son reales: un empleador con E-Verify, un plan
        de capacitaci&oacute;n I-983 defendible, ventanas de presentaci&oacute;n estrictas y plazos de reporte que nunca
        se detienen. Un solo I-765 presentado tarde, una inscripci&oacute;n de E-Verify caducada, o una
        validaci&oacute;n de 6 meses omitida pueden deshacer tres a&ntilde;os de autorizaci&oacute;n de trabajo. Si
        usted es un graduado STEM de Georgia planificando su extensi&oacute;n &mdash; o un empleador de Atlanta que
        intenta mantener autorizada a una contrataci&oacute;n clave &mdash; la abogada <strong>Eszter Bardi</strong>{' '}
        puede revisar su cronograma, su I-983 y su camino del OPT a la H-1B o a una green card.
      </p>
      <p>
        <strong>Programe una consulta hoy.</strong>{' '}
        <Link href="/es/contact">Solicite una consulta en l&iacute;nea</Link>. Hablamos espa&ntilde;ol &mdash;
        atendemos a la comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicaci&oacute;n es solo para fines informativos y no constituye
          asesor&iacute;a legal. El derecho migratorio es complejo y espec&iacute;fico a los hechos, y cambia
          frecuentemente. Consulte a un abogado de inmigraci&oacute;n con licencia sobre su situaci&oacute;n individual.
        </em>
      </p>
    </div>
  );
}
