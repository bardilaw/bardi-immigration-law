/* Verificar antes de publicar — hace referencia a reglas migratorias sobre el trabajo remoto por estatus: el principio general de que el "empleo" realizado mientras se está físicamente presente en EE. UU. requiere autorización sin importar dónde esté el empleador o de dónde provenga el pago; el marco del visitante de negocios B-1 bajo INA §101(a)(15)(B) y 9 FAM 402.2 y la zona gris de trabajar de forma remota para un empleador extranjero desde una dirección en EE. UU.; las reglas de empleo de OPT/CPT para estudiantes F-1 bajo 8 CFR 214.2(f)(10)-(11) (el trabajo debe relacionarse con el campo de estudio, reportarse en el SEVP Portal, y el CPT requiere un empleador estadounidense e integración curricular); las reglas de lugar de trabajo/LCA del H-1B, incluido Matter of Simeio Solutions, 26 I&N Dec. 542 (AAO 2015) (mudarse a un lugar de trabajo fuera del área de empleo previsto en la LCA certificada es un cambio material que requiere una nueva LCA y una petición enmendada) y el análisis del DOL sobre "distancia normal de traslado" / el hogar como lugar de trabajo; la autorización del patrocinador del programa J-1 y el requisito de residencia de dos años en el país de origen bajo INA §212(e); la especificidad de empleador/función del L-1; los dependientes/EAD; y el riesgo de abandono de la residencia para los LPR que trabajan en el extranjero a largo plazo. No se promete ningún resultado; se indica a los lectores que confirmen con su DSO, el patrocinador de su programa o un abogado, y que verifiquen la guía vigente de USCIS/DOL/SEVP, que ha cambiado tras la pandemia. Confirmar contra USCIS antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/remote-work-immigration-visa-rules-georgia.tsx (BAR-896). Español natural, no traducción literal.

export const esTitle = 'Trabajo Remoto y Reglas de Visa en Georgia: Qué Permite Cada Estatus Migratorio';
export const esDescription =
  'Una abogada de inmigración en Georgia explica cómo el trabajo remoto e híbrido interactúa con cada estatus: la zona gris del empleador extranjero en B-1/B-2, OPT/CPT para estudiantes F-1, la regla de lugar de trabajo y LCA del H-1B (Matter of Simeio), el patrocinador y el §212(e) del J-1, el L-1, los dependientes y el EAD, y el riesgo de abandono de la residencia para titulares de green card que trabajan desde el extranjero. Información general, no asesoría legal.';

export function RemoteWorkVisaPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        El trabajo remoto cambió las reglas que todos creían entender sobre los empleos &mdash; pero no cambió la
        ley migratoria de EE. UU., que sigue haciendo dos preguntas de siempre: <em>¿qué permite su visa?</em> y{' '}
        <em>¿dónde se está realizando realmente el trabajo?</em> Un extranjero en Georgia que recibe una oferta de
        empleo remoto, o cuyo empleador pasa a ser totalmente remoto, puede caer rápidamente en una violación de
        estatus sin siquiera salir de su sala. Esta guía explica cómo el trabajo remoto e híbrido interactúa con las
        categorías de visa más comunes. Es información general, no asesoría legal.
      </p>
      <p className="disclaimer">
        <strong>Las reglas del trabajo remoto dependen de los hechos y han cambiado desde 2020.</strong> USCIS, el
        Departamento de Trabajo y SEVP han actualizado su guía, y la respuesta a menudo depende de pequeños detalles
        &mdash; quién le paga, dónde está sentado y si su estatus permite el empleo siquiera. Confirme su situación
        con el DSO de su escuela, el patrocinador de su programa o un abogado de inmigración antes de aceptar o
        cambiar un puesto remoto.
      </p>

      <h2>El Único Principio que Lo Rige Todo</h2>
      <p>
        Casi toda la confusión sobre el trabajo remoto desaparece cuando se entiende la regla central: <strong>el
        trabajo realizado físicamente dentro de los Estados Unidos generalmente requiere autorización de empleo, sin
        importar dónde esté ubicado su empleador ni de dónde provenga su pago.</strong> &ldquo;Trabajo para una
        empresa en otro país&rdquo; no es, por sí solo, una defensa. Lo contrario también es cierto &mdash; algunas
        categorías le permiten hacer de forma remota ciertas cosas limitadas que parecen trabajo pero que no se
        tratan como empleo no autorizado. Dónde encaja usted depende enteramente de su estatus.
      </p>

      <h2>Visitantes B-1/B-2: La Zona Gris del Empleador Extranjero</h2>
      <p>
        La pregunta más difícil que recibimos viene de personas que están aquí como visitantes: <em>&ldquo;¿Puedo
        seguir haciendo mi trabajo de mi país desde una dirección en EE. UU.?&rdquo;</em> Un{' '}
        <Link href="/es/blog/b1-business-visitor-visa-georgia-allowed-activities">visitante de negocios B-1</Link>{' '}
        puede asistir a reuniones, negociar contratos y realizar gestiones de negocios para un empleador extranjero
        que lo mantiene en una nómina extranjera. Revisar incidentalmente el correo o atender una llamada para ese
        empleador extranjero durante una visita genuina suele tolerarse.
      </p>
      <p>
        Pero mudarse a EE. UU. y trabajar de tiempo completo de forma remota durante meses &mdash; incluso para una
        empresa extranjera, incluso pagado enteramente en el extranjero &mdash; es algo muy distinto. No existe una
        visa de &ldquo;nómada digital&rdquo; en los Estados Unidos, y una B-1/B-2 es para una <strong>visita
        temporal</strong>, no para vivir aquí mientras se trabaja. El trabajo remoto a largo plazo desde EE. UU. con
        una visa de visitante corre el riesgo de ser tratado como empleo no autorizado y como prueba de que usted no
        es realmente un visitante temporal &mdash; lo que puede llevar a que le nieguen la entrada, a una violación
        de estatus y a la exposición a las{' '}
        <Link href="/es/blog/unlawful-presence-3-year-10-year-bar-georgia">barras de 3 y 10 años</Link>. El análisis
        es genuinamente delicado; no confíe en la sabiduría popular de internet de que &ldquo;un pago extranjero lo
        hace legal&rdquo;.
      </p>

      <h2>Estudiantes F-1 con OPT y CPT</h2>
      <p>
        Para los <Link href="/es/blog/student-visa-f1-opt-stem-georgia">estudiantes F-1</Link>, la clave es que
        cualquier empleo debe estar debidamente autorizado y debe <strong>relacionarse con su campo de
        estudio</strong>.
      </p>
      <ul>
        <li>
          <strong>OPT (posterior a la finalización):</strong> El trabajo remoto para un empleador estadounidense
          generalmente está bien, siempre que el empleo se relacione con su título y reporte al empleador en el SEVP
          Portal. Los días de desempleo siguen contando contra su límite, así que los vacíos de &ldquo;remoto y sin
          pago&rdquo; pueden ser peligrosos. La{' '}
          <Link href="/es/blog/stem-opt-extension-24-month-work-authorization-georgia">extensión STEM OPT de 24
          meses</Link> añade reglas más estrictas &mdash; un plan formal de capacitación (Formulario I-983) y un
          empleador inscrito en E-Verify &mdash; que son difíciles de cumplir con un arreglo remoto informal.
        </li>
        <li>
          <strong>Trabajar de forma remota para un empleador extranjero con OPT:</strong> Esto plantea dudas reales.
          El trabajo se realiza en EE. UU., debe seguir relacionándose con su campo y debe reportarse &mdash; y una
          empresa extranjera sin presencia en EE. UU. puede hacer imposibles los requisitos de la extensión STEM.
          Aclárelo primero con su DSO.
        </li>
        <li>
          <strong>CPT:</strong> La Capacitación Práctica Curricular (CPT) debe ser parte integral de su plan de
          estudios y estar vinculada a un empleador estadounidense específico y a una autorización. No se estira para
          cubrir un trabajo remoto adicional por fuera.
        </li>
      </ul>

      <h2>Titulares de H-1B: Cuándo Pasar a Remoto Desencadena un Nuevo Trámite</h2>
      <p>
        El <Link href="/es/blog/h1b-visa-sponsorship-cap-georgia">H-1B</Link> es a la vez específico al empleador y
        <strong> específico a la ubicación</strong>, porque la Solicitud de Condición Laboral (LCA) certificada
        enumera el lugar de empleo y el salario prevaleciente para esa zona. Dos escenarios surgen constantemente:
      </p>
      <ul>
        <li>
          <strong>Trabajar desde casa cerca de la oficina:</strong> Si su domicilio está dentro de la distancia
          normal de traslado del lugar de trabajo que ya figura en la LCA &mdash; la misma &ldquo;área de empleo
          previsto&rdquo; &mdash; el Departamento de Trabajo generalmente lo trata como el mismo lugar de empleo. Una
          colocación de corto plazo bajo las reglas de 30/60 días también puede permitirse. Por lo general no se
          necesita una petición enmendada, aunque el empleador debe mantener en orden sus registros de la LCA (el
          archivo de acceso público).
        </li>
        <li>
          <strong>Mudarse a otra área metropolitana:</strong> Bajo <em>Matter of Simeio Solutions</em>, mudarse a un
          lugar de trabajo <strong>fuera del área de empleo previsto</strong> en la LCA certificada es un cambio
          material. El empleador debe presentar una <strong>nueva LCA</strong> para la nueva ubicación y una{' '}
          <strong>petición H-1B enmendada</strong> ante USCIS <em>antes</em> de que usted empiece a trabajar allí.
          Así que un empleado H-1B que se reubica de Atlanta a otro estado para trabajar de forma remota no puede
          simplemente mudarse &mdash; el empleador tiene que actuar primero.
        </li>
      </ul>
      <p>
        En resumen: tras la pandemia, el trabajo H-1B totalmente remoto es común y aceptado, pero el empleador carga
        con obligaciones reales de LCA y de enmienda cada vez que cambia su lugar físico de trabajo. No asuma que
        &ldquo;remoto significa que la ubicación no importa&rdquo;.
      </p>

      <h2>Visitantes de Intercambio J-1</h2>
      <p>
        El estatus J-1 está controlado por su <strong>patrocinador del programa</strong> y la categoría específica de
        su DS-2019 (intern, trainee, research scholar, professor, y demás). Sus actividades &mdash; incluido un
        cambio a trabajo remoto o híbrido &mdash; deben mantenerse consistentes con el programa aprobado y estar
        autorizadas por el patrocinador, no acordadas en privado con un empleador anfitrión. Dos advertencias: un
        arreglo remoto puede no encajar con los requisitos de supervisión y capacitación que exige su categoría, y
        muchos J-1 están sujetos al <strong>requisito de residencia de dos años en el país de origen bajo la INA
        §212(e)</strong>, que un esquema remoto no cambia en absoluto. Hable con su oficial responsable antes de
        alterar el formato de su trabajo.
      </p>

      <h2>L-1, TN y Otras Visas de Trabajo</h2>
      <p>
        Categorías como la{' '}
        <Link href="/es/blog/l1-intracompany-transferee-visa-georgia">transferencia intraempresa L-1</Link> están
        vinculadas a un empleador peticionario estadounidense específico y a una función aprobada. El trabajo remoto
        dentro de lo razonable suele estar bien, pero los cambios en sus funciones, su empleador o su ubicación pueden
        activar las mismas inquietudes de cambio material y de lugar de trabajo que afectan a los H-1B. La práctica
        segura en cada categoría de empleo es la misma: <strong>antes de cambiar dónde o para quién trabaja,
        confirme si se requiere una petición nueva o enmendada.</strong>
      </p>

      <h2>Beneficiarios de DACA</h2>
      <p>
        Los beneficiarios de <Link href="/es/blog/daca-deferred-action-childhood-arrivals-georgia">DACA</Link>{' '}
        trabajan bajo un Documento de Autorización de Empleo (EAD) que autoriza el empleo en los Estados Unidos de
        forma amplia &mdash; no está vinculado a un solo empleador ni a un solo lugar de trabajo como lo está un
        H-1B. Por eso el trabajo remoto, el trabajo híbrido e incluso trabajar de forma remota para una empresa
        extranjera son generalmente permisibles, siempre que el EAD esté vigente y sin vencer. El riesgo práctico
        para los titulares de DACA no es el <em>formato</em> del trabajo, sino el{' '}
        <strong>vencimiento del EAD</strong>: presente la renovación con anticipación (USCIS recomienda de 120 a 150
        días antes), porque un lapso significa que debe dejar de trabajar, remoto o no.
      </p>

      <h2>Dependientes y Personas Sin Autorización de Empleo</h2>
      <p>
        Una oferta remota de &ldquo;trabajar desde casa&rdquo; no crea una autorización de empleo que su estatus no
        le otorgue ya. Los dependientes en estatus <strong>F-2</strong> no pueden trabajar en absoluto. Un{' '}
        <strong>cónyuge H-4</strong> puede trabajar de forma remota solo si tiene un{' '}
        <Link href="/es/blog/h4-ead-work-authorization-h1b-spouses-georgia">EAD H-4</Link> válido. Cualquier persona
        cuya categoría no autorice el empleo &mdash; o que necesite primero un{' '}
        <Link href="/es/blog/employment-authorization-ead-georgia">Documento de Autorización de Empleo</Link> &mdash;
        no puede aceptar un empleo remoto en EE. UU. simplemente porque sea remoto.
      </p>

      <h2>Titulares de Green Card que Trabajan de Forma Remota</h2>
      <p>
        Los residentes permanentes legales y los ciudadanos estadounidenses pueden trabajar de forma remota sin
        restricciones migratorias dentro del país. Pero un LPR que decide trabajar de forma remota <em>desde el
        extranjero</em> a largo plazo enfrenta un riesgo distinto: el{' '}
        <Link href="/es/blog/green-card-abandonment-travel-rules-reentry-permit-georgia">abandono de la residencia
        permanente</Link>. El tiempo prolongado fuera de EE. UU. &mdash; incluso para un empleador estadounidense
        &mdash; puede interpretarse como una renuncia a su residencia. Un permiso de reingreso y una planificación
        cuidadosa importan si el trabajo remoto lo mantendrá en el extranjero.
      </p>

      <h2>Hable con una Abogada de Inmigración en Georgia</h2>
      <p>
        El trabajo remoto e híbrido ha rebasado las suposiciones que muchas personas hacen sobre lo que permite su
        visa. El paso equivocado &mdash; aceptar un empleo que su estatus no autoriza, o reubicarse sin una petición
        enmendada &mdash; puede crear silenciosamente un problema de estatus que aflore años después en la etapa de
        green card o de renovación. Bardi Immigration Law ayuda a trabajadores, estudiantes y empleadores en{' '}
        <strong>Georgia y Alabama</strong> a estructurar arreglos remotos que mantengan intacto el estatus. La
        abogada <strong>Eszter Bardi</strong> brinda acceso directo a la abogada y orientación práctica y específica
        a cada estatus. Si está sopesando una oferta remota o una reubicación, conozca{' '}
        <Link href="/es/blog/how-to-choose-immigration-attorney-georgia">cómo elegir un abogado de
        inmigración</Link>.
      </p>
      <p>
        <Link href="/es/contact">Programe una consulta hoy.</Link>
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación de blog es solo para fines informativos y no
          constituye asesoría legal. Las reglas sobre el trabajo remoto y el lugar de trabajo dependen de los hechos
          y han cambiado desde 2020; la guía de USCIS, DOL y SEVP sigue evolucionando. Que un arreglo remoto en
          particular esté permitido depende de su estatus y circunstancias individuales. Confirme su situación con su
          DSO, el patrocinador de su programa o un abogado de inmigración con licencia antes de aceptar o cambiar un
          puesto remoto.
        </em>
      </p>
    </div>
  );
}
