import Link from 'next/link';
// Spanish adaptation of en/vawa-self-petition-domestic-violence-immigration-georgia.tsx (BAR-784, source BAR-781).
// Natural Spanish, not a literal translation. GA+AL licensed-attorney framing preserved.
// Preserve VAWA self-petition (Form I-360) framing, INA § 384 confidentiality, the I-360 vs U-visa
// vs I-751 battery/cruelty waiver distinctions, and the immediate-relative vs F2A green card paths.
// Verify before publish — references INA § 204(a), § 384, § 201(b); statutory framework is stable, but
// USCIS processing times, GCADV/ACP/hotline details change. Confirm against USCIS and have an attorney
// review before go-live. Eligibility and outcomes are case-specific.

export function VawaSelfPetitionPostContentEs() {
  return (
    <div className="prose-blog">
      <div className="border-l-4 border-gold bg-warmgray px-5 py-4 mb-8 rounded-r-[4px]">
        <p className="font-semibold text-navy mb-1">La seguridad es lo primero</p>
        <p>
          Si está en peligro inmediato, llame al <strong>911</strong>. La{' '}
          <strong>Línea Nacional contra la Violencia Doméstica</strong> está disponible las 24 horas, los 7
          días, al <strong>1-800-799-7233</strong> (TTY: 1-800-787-3224) y por mensaje de texto enviando la
          palabra START al 88788. Para recursos específicos de Georgia, la{' '}
          <strong>Coalición de Georgia contra la Violencia Doméstica</strong> conecta a las sobrevivientes con
          refugios locales, defensores legales y apoyo para la planificación de seguridad en todo el estado.
        </p>
      </div>

      <p>
        La violencia doméstica es uno de los cruces más difíciles de la ley de inmigración. Un cónyuge abusivo
        a menudo usa el estatus migratorio como un arma &mdash; amenazando con retirar una petición, llamar a
        las autoridades de inmigración o negarse a firmar documentos si la sobreviviente intenta irse. El
        Congreso anticipó exactamente esta dinámica cuando aprobó la{' '}
        <strong>Ley contra la Violencia hacia la Mujer (VAWA, por sus siglas en inglés)</strong>. Una de las
        disposiciones más poderosas y menos comprendidas de VAWA le da a las sobrevivientes inmigrantes el
        derecho de solicitar su propio estatus migratorio &mdash; de forma completamente independiente, sin el
        conocimiento ni la cooperación del abusador, y con estrictas protecciones federales de
        confidencialidad que impiden que USCIS le divulgue la petición al abusador.
      </p>
      <p>
        Esta guía explica la <strong>autopetición de VAWA</strong>: quién puede presentarla, qué se considera
        abuso, cómo funciona el proceso, en qué se diferencia de la visa U y otras protecciones, y cómo es el
        camino hacia la green card. Si usted es una sobreviviente de violencia doméstica en Georgia casada con
        un ciudadano estadounidense o residente permanente, o que ha sido abusada por uno, VAWA puede ser la
        ruta más directa hacia la seguridad y el estatus legal disponible para usted.
      </p>

      <h2>Qué es la autopetición de VAWA</h2>
      <p>
        La autopetición de VAWA se presenta con el <strong>Formulario I-360, Petición de Amerasiático,
        Viudo(a) o Inmigrante Especial</strong>. A pesar del título amplio del formulario, quienes presentan
        bajo VAWA lo usan para establecer que califican como cónyuge, hijo(a) o padre/madre abusado(a) de un
        ciudadano estadounidense (USC) o residente permanente legal (LPR). &ldquo;Autopetición&rdquo; significa
        que la sobreviviente presenta la petición por sí misma &mdash; no necesita que el abusador coopere,
        patrocine ni firme nada. Al abusador no se le notifica que se presentó la petición.
      </p>
      <p>
        Una característica clave: la Unidad de VAWA de USCIS en el <strong>Centro de Servicio de
        Vermont</strong> maneja todas las peticiones I-360 de VAWA bajo estrictas reglas de confidencialidad.
        Bajo la <strong>INA &sect; 384</strong>, a USCIS se le <strong>prohíbe legalmente divulgar</strong> la
        existencia de la petición, la dirección de la sobreviviente o cualquier información sobre el caso al
        abusador, al abogado del abusador o a cualquier otra persona no autorizada por la sobreviviente. Esto no
        es una preferencia de política &mdash; es una prohibición federal, con sanciones civiles por
        violaciones.
      </p>

      <h2>Quién puede presentar una autopetición de VAWA</h2>
      <p>
        La elegibilidad para la autopetición de VAWA bajo la INA &sect; 204(a) cubre tres categorías:
      </p>
      <ul>
        <li>
          <strong>Cónyuges abusados de ciudadanos estadounidenses o LPR.</strong> La sobreviviente debe haber
          estado legalmente casada con el abusador USC o LPR, o el matrimonio debe haber terminado dentro de
          los últimos dos años debido al abuso (o por la muerte del abusador). Un matrimonio bígamo celebrado de
          buena fe puede calificar en algunas circunstancias. El divorcio no descalifica automáticamente
          &mdash; la ley protege a las sobrevivientes cuyos matrimonios terminaron a causa de la violencia.
        </li>
        <li>
          <strong>Hijos(as) abusados de ciudadanos estadounidenses o LPR.</strong> Los hijos menores de 21 años
          (o hasta los 25 en algunas circunstancias) que han sido abusados por el padre/madre USC o LPR pueden
          presentar la petición por su cuenta, o un padre/madre puede presentarla en nombre de un hijo(a)
          abusado(a).
        </li>
        <li>
          <strong>Padres abusados de ciudadanos estadounidenses.</strong> Los padres abusados por un hijo(a)
          adulto ciudadano estadounidense también pueden autopeticionar. Nota: el hijo(a) ciudadano debe tener
          al menos 21 años.
        </li>
      </ul>
      <p>
        Una sobreviviente que presenta como cónyuge abusado también debe demostrar que <strong>convivió</strong>{' '}
        con el abusador en algún momento (aunque sea brevemente), que entró al matrimonio de{' '}
        <strong>buena fe</strong> (no únicamente para obtener beneficios migratorios) y que es una persona de{' '}
        <strong>buen carácter moral</strong>.
      </p>

      <h2>Qué se considera abuso bajo VAWA</h2>
      <p>
        VAWA usa la frase <strong>&ldquo;maltrato físico o crueldad extrema&rdquo;</strong>. Esto es más amplio
        de lo que podría parecer. El maltrato físico incluye cualquier agresión física &mdash; golpear,
        estrangular, empujar, quemar. Pero la crueldad extrema cubre una gama mucho más amplia de abuso:
      </p>
      <ul>
        <li>Abuso psicológico y emocional, incluido el aislamiento, las amenazas, la humillación y la intimidación</li>
        <li>Conducta controladora: controlar las finanzas, el movimiento, la comunicación o los documentos migratorios</li>
        <li>Amenazar con reportar a la sobreviviente a las autoridades de inmigración o con deportarla</li>
        <li>Abuso o coerción sexual</li>
        <li>Usar a los hijos como medio de presión o amenazas</li>
        <li>Destrucción de propiedad o de mascotas para infundir miedo</li>
      </ul>
      <p>
        El abuso no tiene que ser físico, y no tiene que haber sido reportado a la policía. Las sobrevivientes
        cuyos abusadores nunca dejaron una marca visible &mdash; pero que vivieron en constante temor, fueron
        controladas económicamente o fueron amenazadas con la deportación &mdash; pueden calificar con la misma
        plenitud. El estándar de prueba exige que el abuso haya ocurrido; no hay un umbral mínimo de gravedad
        más allá de las definiciones de la ley.
      </p>

      <h2>Autopetición de VAWA frente a la visa U: una distinción importante</h2>
      <p>
        Muchas sobrevivientes han oído hablar tanto de VAWA como de la visa U, y la confusión entre ambas puede
        llevar a presentar lo incorrecto. Son formas de alivio separadas, en formularios distintos, procesadas
        bajo estándares diferentes:
      </p>
      <ul>
        <li>
          <strong>La autopetición de VAWA (Formulario I-360)</strong> es para sobrevivientes que fueron
          abusadas por un familiar USC o LPR. No requiere la participación de las fuerzas del orden. La
          sobreviviente no necesita un reporte policial, cargos penales ni una certificación de ninguna agencia
          gubernamental.
        </li>
        <li>
          <strong>La visa U (Formulario I-918)</strong> es para sobrevivientes de una lista más amplia de
          delitos que califican (incluida la violencia doméstica, pero también la agresión sexual, el acecho,
          la agresión con agravantes y otros) que cooperaron con las fuerzas del orden. La visa U{' '}
          <em>requiere</em> una certificación firmada por las fuerzas del orden (Formulario I-918B) &mdash; sin
          ella, no hay visa U. También tiene un límite de 10,000 por año y una lista de espera de varios años.
        </li>
        <li>
          <strong>La exención por maltrato/crueldad del I-751 de VAWA</strong> es diferente de ambas. Es para
          sobrevivientes que ya tienen una green card condicional (una tarjeta de 2 años emitida por
          matrimonio) y están tratando de eliminar las condiciones sin una petición conjunta del cónyuge
          abusivo. Esto no es una autopetición; es una exención presentada durante el{' '}
          <Link href="/es/blog/remove-conditions-green-card-i-751-georgia">proceso del Formulario I-751</Link>.
        </li>
      </ul>
      <p>
        Una sobreviviente que fue abusada por un USC o LPR y que también fue víctima de un delito que califica
        puede ser elegible para <em>ambos</em>, VAWA y una visa U. Un abogado puede evaluar cuál ofrece un
        camino más rápido y limpio, o si presentar ambos tiene sentido estratégico.
      </p>

      <h2>El proceso de la petición I-360 de VAWA</h2>
      <p>
        La autopetición de VAWA se presenta ante la <strong>Unidad de VAWA del Centro de Servicio de
        Vermont</strong>, que maneja únicamente casos de VAWA y opera bajo estrictos protocolos de
        confidencialidad separados del procesamiento general de casos de USCIS. Actualmente <strong>no hay
        cuota de presentación</strong> para la autopetición I-360 de VAWA &mdash; el Congreso la eliminó para
        que el costo no fuera una barrera para las sobrevivientes. Un paquete I-360 sólido normalmente incluye:
      </p>
      <ul>
        <li>
          <strong>El Formulario I-360</strong> con una declaración personal detallada de la sobreviviente que
          describa la relación, el abuso y los hechos que establecen la elegibilidad &mdash; este es el núcleo
          del caso.
        </li>
        <li>
          <strong>Evidencia de la relación que califica</strong>: certificado de matrimonio, prueba del estatus
          USC o LPR del abusador (certificado de ciudadanía, pasaporte, green card).
        </li>
        <li>
          <strong>Evidencia de matrimonio de buena fe</strong>: contrato de arrendamiento conjunto, cuentas
          conjuntas, registros de seguros, fotos, comunicaciones, certificados de nacimiento de los hijos en
          común.
        </li>
        <li>
          <strong>Evidencia de maltrato físico o crueldad extrema</strong>: reportes policiales (si están
          disponibles), órdenes de protección, registros médicos u hospitalarios, registros de tratamiento de
          salud mental, fotos de lesiones, declaraciones de testigos (consejeros, clérigos, vecinos) y
          registros de refugios u organizaciones de defensa contra la violencia doméstica.
        </li>
        <li>
          <strong>Evidencia de convivencia</strong>: contrato de arrendamiento, facturas de servicios u otros
          registros que muestren que la sobreviviente vivió con el abusador en algún momento.
        </li>
        <li>
          <strong>Evidencia de buen carácter moral</strong>: normalmente una declaración personal más cualquier
          registro gubernamental o comunitario.
        </li>
        <li>
          Una <strong>dirección segura</strong> para que USCIS envíe la correspondencia &mdash; que no necesita
          ser la dirección real de la sobreviviente y que no puede ser la del abusador.
        </li>
      </ul>
      <p>
        No hay entrevista de USCIS para la mayoría de las peticiones I-360 de VAWA. Las Solicitudes de Evidencia
        (RFE) son posibles, y los tiempos de procesamiento varían. Una vez aprobada, la sobreviviente recibe un{' '}
        <strong>Aviso de Aprobación</strong> y queda colocada en una categoría protegida.
      </p>

      <h2>Camino hacia la green card después de la aprobación de VAWA</h2>
      <p>
        Una autopetición de VAWA aprobada no otorga por sí misma una green card &mdash; establece la
        elegibilidad. El camino hacia la residencia permanente legal depende de quién es el abusador:
      </p>
      <ul>
        <li>
          <strong>Los cónyuges e hijos abusados de ciudadanos estadounidenses</strong> son tratados como{' '}
          <strong>familiares inmediatos</strong> bajo la INA &sect; 201(b). No hay límite anual ni lista de
          espera para los familiares inmediatos &mdash; un número de visa está disponible de inmediato una vez
          aprobado el I-360. La sobreviviente puede presentar el{' '}
          <Link href="/es/blog/adjustment-of-status-green-card-georgia">Formulario I-485 para el ajuste de
          estatus</Link> (green card dentro de EE. UU.) tan pronto como se apruebe el I-360, o de forma
          concurrente en algunas circunstancias.
        </li>
        <li>
          <strong>Los cónyuges e hijos abusados de LPR</strong> caen en la <strong>categoría de preferencia
          F2A</strong>, que tiene un límite anual por país. En la mayoría de los casos la espera es moderada
          &mdash; F2A es una de las categorías de preferencia más rápidas &mdash; pero puede haber una espera
          antes de que un número de visa esté disponible. Durante esa espera, un I-360 aprobado le otorga a la
          sobreviviente el estatus de <strong>acción diferida</strong> y la <strong>autorización de
          trabajo</strong>.
        </li>
        <li>
          <strong>Los padres abusados de ciudadanos estadounidenses</strong> también son familiares inmediatos
          sin período de espera.
        </li>
      </ul>
      <p>
        El proceso de ajuste de estatus para los solicitantes de VAWA sigue el mismo marco general que otras
        green cards basadas en la familia, con una protección importante: a los solicitantes basados en VAWA no
        se les puede negar únicamente por el historial penal o la mala conducta del abusador.
      </p>

      <h2>Contexto de Georgia: recursos y planificación de seguridad</h2>
      <p>
        Georgia cuenta con una red de organizaciones de violencia doméstica que trabajan junto con abogados de
        inmigración para apoyar a las sobrevivientes. La <strong>Coalición de Georgia contra la Violencia
        Doméstica (GCADV)</strong> conecta a las sobrevivientes de todo el estado con programas certificados de
        violencia doméstica que ofrecen refugio, defensa legal y planificación de seguridad. Muchas de estas
        organizaciones tienen experiencia con detenciones migratorias y peticiones de VAWA, y pueden
        proporcionar las cartas de declaración y los registros que fortalecen un caso I-360.
      </p>
      <p>
        Georgia también ofrece un <strong>Programa de Confidencialidad de Dirección (ACP)</strong> a través de
        la oficina del Secretario de Estado, a veces llamado Safe at Home. Las sobrevivientes inscritas reciben
        una dirección sustituta que las agencias gubernamentales (incluido USCIS cuando está permitido) usan en
        lugar de la dirección real de la sobreviviente, ayudando a asegurar que un abusador no pueda localizarla
        a través de registros públicos.
      </p>
      <p>
        Para las sobrevivientes que hablan español, muchos de los programas miembros de GCADV ofrecen servicios
        bilingües, y las peticiones de VAWA ante USCIS pueden presentarse con evidencia en español. Los avisos
        legales de USCIS se emiten en inglés, y un abogado o representante acreditado puede ayudar a manejar las
        comunicaciones de manera segura.
      </p>

      <h2>Por qué importa un abogado de inmigración en los casos de VAWA</h2>
      <p>
        Los casos de autopetición de VAWA están entre los más trascendentales &mdash; y más personales &mdash;
        de la ley de inmigración. La declaración personal debe lograr un equilibrio cuidadoso: lo
        suficientemente detallada para satisfacer el estándar de abuso, lo suficientemente organizada para ser
        persuasiva y escrita de una manera que no vuelva a traumatizar a la clienta a través del proceso de
        redacción. La evidencia debe reunirse sin alertar al abusador ni provocar una respuesta. Las direcciones
        seguras de correspondencia y las medidas de confidencialidad deben coordinarse desde la primera
        presentación.
      </p>
      <p>
        Un abogado con experiencia también evalúa el panorama completo: si VAWA, la visa U o ambas son
        apropiadas; cómo afecta al caso un historial penal previo (incluido cualquiera que el abusador haya
        podido fabricar o haya coaccionado a la sobreviviente a cometer); si se necesita una exención de
        inadmisibilidad; y la ruta más rápida hacia la autorización de trabajo y un estatus estable. Una
        petición de VAWA presentada de forma incorrecta o incompleta puede resultar en una negación que
        dificulte presentaciones posteriores, y puede dejar a una sobreviviente en un estatus incierto por más
        tiempo del necesario. Esta no es una presentación para hacer por cuenta propia.
      </p>

      <h2>Hable con Eszter Bardi &mdash; consulta confidencial</h2>
      <p>
        La abogada <strong>Eszter Bardi</strong>, de Bardi Immigration Law, representa a sobrevivientes
        inmigrantes en todo <strong>Georgia y Alabama</strong> en casos de autopetición de VAWA y asuntos
        migratorios relacionados. Ella entiende que la planificación de seguridad, la confidencialidad y el
        cuidado emocional deben ir primero en estos casos, y trabaja con el cuidado que estas situaciones
        requieren.
      </p>
      <p>
        <strong>Su consulta es gratuita y confidencial.</strong> Nunca contactaremos a su abusador ni
        divulgaremos su información. Usted trabaja directamente con la Abogada Bardi &mdash; no con un
        formulario de admisión.{' '}
        <Link href="/es/contact">Solicite su consulta gratuita en línea.</Link> Hablamos español.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo ofrece información legal general y no constituye
          asesoría legal. La elegibilidad y los resultados de la autopetición de VAWA son específicos de cada
          caso; nada de lo aquí expuesto garantiza un resultado. Los formularios, cuotas, tiempos de
          procesamiento y detalles del programa de USCIS cambian &mdash; confirme los requisitos actuales con un
          abogado de inmigración con licencia antes de presentar. Si usted o alguien que conoce está en peligro
          inmediato, llame al 911. La Línea Nacional contra la Violencia Doméstica es 1-800-799-7233.
        </em>
      </p>
    </div>
  );
}
