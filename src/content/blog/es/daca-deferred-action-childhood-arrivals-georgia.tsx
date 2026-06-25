/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (DACA / Deferred Action for Childhood Arrivals, el memorando del DHS del 15 de junio de 2012, las fechas límite de elegibilidad, el Formulario I-821D, el Formulario I-765 para el EAD, el advance parole / Formulario I-131, el ajuste de estatus bajo INA §245, Matter of Arrabally and Yerrabelly, y el litigio de Texas v. United States / Fifth Circuit / Supreme Court) que cambia con frecuencia. El estatus de las solicitudes iniciales de DACA, las medidas cautelares sobre renovaciones y la postura del litigio son volátiles — confirmar contra la página de DACA de USCIS y las órdenes judiciales vigentes antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/daca-deferred-action-childhood-arrivals-georgia.tsx (BAR-873). Español natural, no traducción literal.

export const esTitle = 'DACA en Georgia: Guía Completa de Elegibilidad, Renovación y Caminos a la Green Card';
export const esDescription =
  'Una abogada de inmigración en Georgia explica DACA de principio a fin: qué es y de dónde viene, quién califica, cómo presentar los Formularios I-821D e I-765, la ventana de renovación que no puede perder, los riesgos serios de viajar al extranjero, dónde se encuentra el litigio en los tribunales, y &mdash; igual de importante &mdash; qué NO le otorga DACA y el camino estrecho que algunos Dreamers tienen hacia una green card. Información general, no asesoría legal.';

export function DacaDeferredActionChildhoodArrivalsPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Para aproximadamente medio millón de jóvenes en todo el país &mdash; incluyendo unos 19,000 en Georgia &mdash;{' '}
        <strong>DACA</strong> ha marcado la diferencia entre vivir en las sombras y construir una vida a plena luz: un
        empleo, una licencia de conducir, un título, una carrera. La <strong>Acción Diferida para los Llegados en la
        Infancia (Deferred Action for Childhood Arrivals)</strong> protege a personas que fueron traídas a los Estados
        Unidos siendo niños y que crecieron aquí como estadounidenses en todo sentido, menos en el papel. También es uno
        de los programas más inciertos jurídicamente en todo el derecho de inmigración, mantenido con vida por órdenes
        judiciales mientras el litigio sigue su curso.
      </p>
      <p>
        Esta guía explica DACA desde la base: qué es y de dónde proviene, quién califica, cómo presentar los Formularios
        I-821D e I-765, la ventana de renovación que no se puede dar el lujo de perder, los riesgos serios de viajar al
        extranjero, dónde se encuentra la batalla en los tribunales y &mdash; igual de importante &mdash; lo que DACA{' '}
        <em>no</em> le da y el camino estrecho que algunos Dreamers tienen hacia una green card.
      </p>

      <h2>Qué Es DACA &mdash; y De Dónde Viene</h2>
      <p>
        DACA fue creado el <strong>15 de junio de 2012</strong>, mediante un memorando del Departamento de Seguridad
        Nacional (DHS) bajo la administración de Obama. No fue aprobado por el Congreso y no es una ley; es un ejercicio
        de <strong>discreción procesal</strong> &mdash; la decisión del gobierno de no perseguir la remoción de un grupo
        específico de personas de baja prioridad. Esa distinción es la clave para entender todo lo relacionado con DACA,
        incluyendo por qué es tan vulnerable en los tribunales.
      </p>
      <p>
        Una concesión de DACA hace tres cosas. Difiere (pausa) la acción de remoción por un período renovable,
        actualmente de dos años. Hace que el beneficiario sea elegible para solicitar un permiso de trabajo. Y, en la
        práctica, permite que los beneficiarios califiquen para un <strong>número de Seguro Social</strong> y, en la
        mayoría de los estados incluyendo Georgia, una <strong>licencia de conducir</strong>. Lo que DACA <em>no</em> es:
        no es una visa, no es estatus migratorio legal, no es una green card, y no es por sí solo un camino a la
        ciudadanía.
      </p>

      <h2>Quién Es Elegible para DACA</h2>
      <p>
        Los lineamientos originales de 2012 establecieron requisitos estrictos y atados a fechas específicas. Para haber
        calificado, una persona generalmente tenía que demostrar todo lo siguiente:
      </p>
      <ul>
        <li>
          <strong>Edad al ingresar.</strong> Llegó a los Estados Unidos <strong>antes de cumplir 16 años</strong>.
        </li>
        <li>
          <strong>Límite de edad.</strong> Tenía <strong>menos de 31 años al 15 de junio de 2012</strong> (y al menos 15
          al momento de solicitar, salvo que ya estuviera en procedimientos de remoción).
        </li>
        <li>
          <strong>Residencia continua.</strong> Ha <strong>residido continuamente en EE. UU. desde el 15 de junio de
          2007</strong>.
        </li>
        <li>
          <strong>Presencia física.</strong> Estaba físicamente presente en EE. UU. el 15 de junio de 2012, y al momento
          de presentar la solicitud.
        </li>
        <li>
          <strong>Estatus.</strong> No tenía estatus legal el 15 de junio de 2012 (ingresó sin inspección, o un estatus
          legal había vencido).
        </li>
        <li>
          <strong>Educación o servicio militar.</strong> Está estudiando, tiene un diploma de preparatoria o GED, o fue
          dado de baja honorablemente de las Fuerzas Armadas o la Guardia Costera de EE. UU.
        </li>
        <li>
          <strong>Antecedentes limpios.</strong> No tiene <strong>condena por delito grave (felony), ningún &ldquo;delito
          menor significativo&rdquo; (significant misdemeanor), ni más de dos otros delitos menores</strong>, y no
          representa una amenaza a la seguridad nacional ni a la seguridad pública.
        </li>
      </ul>
      <p>
        Un &ldquo;delito menor significativo&rdquo; incluye cosas como un DUI, violencia doméstica, posesión ilegal de
        arma de fuego, distribución de drogas, o cualquier delito por el cual la persona cumplió más de 90 días bajo
        custodia &mdash; incluso uno solo puede descalificar una solicitud. Como un único problema penal puede hundir un
        caso por lo demás sólido, cualquier persona con antecedentes de arresto debería tener a un abogado que los
        revise antes de presentar. Vea nuestra guía sobre{' '}
        <Link href="/es/blog/criminal-record-immigration-consequences-georgia">cómo un antecedente penal afecta la
        inmigración</Link>.
      </p>
      <p>
        Una salvedad crítica en 2026: debido al litigio que se aborda más adelante, USCIS <strong>no está aprobando
        solicitudes nuevas (iniciales) de DACA</strong>. Continúa procesando <strong>renovaciones</strong> para personas
        que ya tienen DACA. Quienes solicitan por primera vez pueden presentar, pero sus casos quedan en espera; no
        asuma que puede obtener DACA ahora si nunca lo tuvo.
      </p>

      <h2>Cómo Se Solicita: Formularios I-821D e I-765</h2>
      <p>
        DACA se solicita usando el <strong>Formulario I-821D, Consideración de Acción Diferida para los Llegados en la
        Infancia</strong>, presentado ante USCIS. Casi todos lo presentan junto con el <strong>Formulario I-765,
        Solicitud de Autorización de Empleo</strong> (más la Hoja de Trabajo del I-765 que demuestra la necesidad
        económica), porque el permiso de trabajo &mdash; el{' '}
        <Link href="/es/blog/employment-authorization-ead-georgia">Documento de Autorización de Empleo, o EAD</Link>{' '}
        &mdash; es el beneficio práctico del que dependen la mayoría de los beneficiarios.
      </p>
      <p>
        Junto con los formularios usted presenta evidencia que prueba cada requisito: identidad y edad (pasaporte, acta
        de nacimiento), la fecha en que llegó, y la residencia continua desde 2007 (registros escolares, registros
        médicos, contratos de arrendamiento, talones de pago, facturas de servicios, estados de cuenta bancarios
        fechados a lo largo de los años). USCIS luego programa una <strong>cita de datos biométricos</strong> para tomar
        huellas y hacer una verificación de antecedentes. Si se aprueba, usted recibe acción diferida por dos años y un
        EAD válido por el mismo período.
      </p>

      <h2>Renovaciones: Presente 120 a 150 Días Antes de Que Venza</h2>
      <p>
        DACA no es permanente &mdash; debe renovarse cada dos años, y una interrupción significa perder su autorización
        de trabajo y su protección contra la remoción. USCIS recomienda presentar su renovación{' '}
        <strong>120 a 150 días antes de que venzan su DACA y su EAD actuales</strong>. Los tiempos de procesamiento
        fluctúan, así que presentar con anticipación es la mejor manera de evitar una brecha peligrosa. La renovación
        usa los mismos Formularios I-821D e I-765.
      </p>
      <p>
        Mantenga su dirección actualizada con USCIS presentando el <strong>Formulario AR-11</strong> dentro de los 10
        días de cualquier mudanza &mdash; un aviso enviado a una dirección antigua puede hacer que pierda una fecha
        límite o una Solicitud de Evidencia. Para ver paso a paso el proceso de renovación actual, consulte nuestra{' '}
        <Link href="/es/blog/daca-renewal-2026">guía de renovación de DACA para 2026</Link>.
      </p>

      <h2>Advance Parole: Por Qué Viajar Es de Alto Riesgo</h2>
      <p>
        Salir de los Estados Unidos es una de las cosas más peligrosas que puede hacer un beneficiario de DACA. Si parte{' '}
        <strong>sin un advance parole aprobado por USCIS, abandona su DACA</strong> y puede activar las barras de
        presencia ilegal que bloquean el reingreso por 3 o 10 años. Nunca aborde un vuelo internacional con DACA sin
        hablar primero con un abogado.
      </p>
      <p>
        Los beneficiarios de DACA pueden, en circunstancias limitadas, solicitar el <strong>advance parole</strong>{' '}
        (Formulario I-131) para viajar al extranjero por razones humanitarias, educativas o laborales. Un regreso legal,
        autorizado mediante parole, es significativo por una razón que va más allá del viaje en sí: una persona que
        ingresó sin inspección pero que luego reingresa con advance parole puede ser considerada &ldquo;parolada&rdquo;
        (paroled) para efectos del{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajuste de estatus</Link> &mdash; una estrategia
        arraigada en <em>Matter of Arrabally and Yerrabelly</em>. Esto es poderoso pero técnico y arriesgado, y nunca
        debería intentarse sin asesoría legal. Nuestra{' '}
        <Link href="/es/blog/advance-parole-travel-documents-georgia">guía sobre advance parole</Link> lo explica a
        fondo.
      </p>

      <h2>El Litigio: Por Qué el Futuro de DACA Es Incierto</h2>
      <p>
        DACA ha estado bajo ataque legal desde que Texas y otros estados demandaron al gobierno federal, argumentando
        que el programa fue creado de manera ilegal. Trate cualquier titular con cautela y confirme dónde están
        realmente las cosas antes de basarse en él.
      </p>
      <p>
        Una corte federal de distrito en Texas declaró DACA ilegal en 2021. La{' '}
        <strong>Corte de Apelaciones del Quinto Circuito (Fifth Circuit)</strong> coincidió en que la política original
        de 2012 violaba la Ley de Procedimiento Administrativo (Administrative Procedure Act), a la vez que devolvió el
        caso a la corte de distrito para evaluar un reglamento revisado de DACA de 2022. Ese litigio sigue activo y ha
        continuado avanzando por los tribunales &mdash; con una fuerte probabilidad de que eventualmente regrese a la{' '}
        <strong>Corte Suprema de EE. UU.</strong> A lo largo del proceso, órdenes judiciales separadas han permitido que
        las <strong>renovaciones continúen para los beneficiarios existentes</strong> mientras se bloquean las{' '}
        <strong>aprobaciones de nuevas solicitudes iniciales</strong>.
      </p>
      <p>
        La conclusión práctica para los Dreamers de Georgia: si usted ya tiene DACA, su concesión actual es válida y
        ejecutable, y debería renovar a tiempo. Pero la supervivencia a largo plazo del programa no está resuelta, y un
        fallo judicial podría cambiar lo que USCIS puede hacer en cualquier momento. Esa incertidumbre es precisamente
        la razón por la que vale la pena explorar si una opción más permanente está disponible para usted ahora.
      </p>

      <h2>DACA No Lleva a una Green Card &mdash; Con Una Excepción Importante</h2>
      <p>
        Este es el punto más malentendido sobre DACA: <strong>por sí solo, DACA no es un camino hacia la residencia
        permanente ni la ciudadanía.</strong> En teoría puede renovarse indefinidamente, pero nunca
        &ldquo;se convierte&rdquo; en una green card. Para volverse residente permanente, un beneficiario de DACA
        necesita una base <em>independiente</em> &mdash; casi siempre una relación familiar calificadora o, menos
        frecuentemente, un patrocinio por empleo.
      </p>
      <p>
        La excepción que más importa: un Dreamer que se casa con un ciudadano estadounidense (o que tiene otro
        peticionario calificado) puede llegar a{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajustar su estatus a una green card</Link> bajo la
        INA &sect;245. La pregunta decisiva suele ser <em>cómo ingresó</em> al país. Alguien admitido con una visa, o
        que luego reingresó con advance parole, puede llegar a ajustar dentro de EE. UU.; alguien que ingresó sin
        inspección y nunca ha tenido un reingreso legal generalmente no puede, y en cambio puede enfrentar las barras de
        presencia ilegal. Como el análisis es tan específico a los hechos, cubrimos cada ruta &mdash; familiar, por
        empleo, advance parole, y la rara excepción de grandfathering bajo la INA &sect;245(i) &mdash; en nuestra guía
        dedicada,{' '}
        <Link href="/es/blog/daca-to-green-card-pathways-georgia">de DACA a green card: todos los caminos para los
        Dreamers</Link>.
      </p>
      <p>
        Si DACA no es una opción para usted y es de un país que enfrenta conflicto o desastre, también vale la pena
        revisar si califica para el{' '}
        <Link href="/es/blog/temporary-protected-status-tps-georgia">Estatus de Protección Temporal (TPS)</Link>, una
        protección separada con sus propias reglas de elegibilidad.
      </p>

      <h2>Por Qué Importa un Abogado de Inmigración en Georgia</h2>
      <p>
        Una renovación de DACA puede parecer un simple trámite de papeleo, pero lo que está en juego es alto: una
        ventana de renovación perdida, una brecha en su evidencia de residencia, un cargo penal antiguo que no creyó que
        importara, o una oportunidad perdida de buscar una green card mientras un familiar podía peticionar por usted.
        Con el futuro del programa decidiéndose en los tribunales, tener a alguien que monitoree tanto sus fechas límite
        como su estrategia a largo plazo vale mucho más que la tarifa de presentación. Si está decidiendo quién debe
        manejar su caso, lea nuestra guía sobre{' '}
        <Link href="/es/blog/how-to-choose-immigration-attorney-georgia">cómo elegir un abogado de inmigración en
        Georgia</Link>.
      </p>

      <h2>Hable con Eszter Bardi &mdash; Consulta Gratuita</h2>
      <p>
        Si usted es un Dreamer en Georgia, no debería tener que adivinar sobre sus derechos, sus fechas límite o sus
        opciones. En Bardi Immigration Law, la abogada <strong>Eszter Bardi</strong> ayuda a beneficiarios de DACA en
        todo Georgia y Alabama a renovar a tiempo, mantener su autorización de trabajo vigente y &mdash; igual de
        importante &mdash; determinar si un camino permanente finalmente está a su alcance. Usted trabaja directamente
        con la Abogada Bardi, no con un especialista de admisiones.
      </p>
      <p>
        <strong>Programe su consulta gratuita hoy.</strong> Confirmaremos su cronograma de DACA, señalaremos cualquier
        riesgo en su caso, y trazaremos un plan para proteger su futuro.{' '}
        <Link href="/es/contact">Solicite su consulta gratuita en línea.</Link> Hablamos espa&ntilde;ol.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo brinda información legal general y no constituye asesoría
          legal. El derecho de inmigración es complejo, específico a los hechos y cambia con frecuencia &mdash; el
          estatus de las solicitudes iniciales de DACA, los procedimientos de renovación y el litigio en torno al
          programa son especialmente cambiantes. Confirme los formularios, tarifas, elegibilidad y órdenes judiciales
          vigentes en el sitio web de USCIS, y consulte a un abogado de inmigración con licencia para obtener
          orientación específica a su caso.
        </em>
      </p>
    </div>
  );
}
