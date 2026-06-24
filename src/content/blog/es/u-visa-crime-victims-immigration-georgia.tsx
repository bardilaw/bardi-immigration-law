import Link from 'next/link';
// Spanish adaptation of en/u-visa-crime-victims-immigration-georgia.tsx (BAR-783, source BAR-782).
// Natural Spanish, not a literal translation. GA+AL licensed-attorney framing preserved.
// Preserve U nonimmigrant status (INA § 101(a)(15)(U)), Form I-918 + Supplement B certification, the
// qualifying-crimes list, the 10,000 cap + waitlist deferred action, derivatives, and INA § 245(m)
// adjustment after 3 years. Keep the U-visa (I-918) vs T-visa (I-914) vs VAWA distinction. Verify before
// publish — USCIS forms/fees/processing/waitlist and GA certifying-agency details shift. Confirm against
// USCIS/INA and have an attorney review before go-live. Eligibility is case-specific.

export function UVisaCrimeVictimsPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Si fue víctima de un delito grave y ayudó &mdash; o está dispuesto a ayudar &mdash; a la policía o a
        los fiscales, puede calificar para protección migratoria sin importar su estatus actual. La{' '}
        <strong>visa U</strong> se creó precisamente para esta situación. Existe porque el Congreso reconoció
        una realidad dolorosa: cuando las víctimas inmigrantes de delitos temen la deportación, guardan
        silencio. El silencio protege a los abusadores, no a las víctimas. La visa U rompe ese ciclo al ofrecer
        estatus legal, autorización de trabajo y, con el tiempo, una green card a las víctimas que cooperan con
        las fuerzas del orden. Esta guía explica quién califica, cómo funciona el proceso y por qué trabajar con
        un abogado de inmigración marca la diferencia entre un caso aprobado y una oportunidad perdida.
      </p>

      <h2>¿Qué es la visa U?</h2>
      <p>
        La visa U (formalmente, <strong>estatus de no inmigrante U</strong>) fue creada por la Ley de
        Protección de Mujeres Inmigrantes Maltratadas (BIWPA) de 2000. Su base legal es la{' '}
        <strong>INA &sect; 101(a)(15)(U)</strong>. La visa otorga hasta <strong>cuatro años de estatus legal de
        no inmigrante</strong> y autorización plena de trabajo. También coloca a su titular en el camino hacia
        una <strong>green card</strong> después de tres años &mdash; residencia permanente, no solo protección
        temporal.
      </p>
      <p>
        El Congreso limitó las visas U a <strong>10,000 por año</strong> para los peticionarios principales. La
        demanda supera con creces ese límite, por lo que USCIS mantiene una lista de espera. Mientras están en
        la lista de espera, los solicitantes generalmente reciben <strong>acción diferida</strong> (protección
        contra la deportación) y son elegibles para un <strong>Documento de Autorización de Empleo
        (EAD)</strong>. Los tiempos de procesamiento y las condiciones de la lista de espera cambian; consulte
        una fuente actualizada antes de planificar su cronograma.
      </p>
      <p>
        La visa U es diferente de la{' '}
        <Link href="/es/blog/t-visa-trafficking-victims-georgia">visa T</Link>{' '}
        (que cubre a las víctimas de trata de personas en el Formulario I-914) y de una{' '}
        <Link href="/es/blog/u-visa-vawa-crime-victims-georgia">autopetición de VAWA</Link> (que cubre a las
        víctimas de violencia doméstica que son cónyuges, hijos o padres de ciudadanos estadounidenses o
        residentes permanentes). Los tres alivios se superponen, pero no son intercambiables &mdash; la opción
        correcta depende de los hechos específicos de su caso.
      </p>

      <h2>Quién califica: los cuatro requisitos</h2>
      <p>
        Para calificar para una visa U, un peticionario debe cumplir cuatro condiciones:
      </p>
      <ul>
        <li>
          <strong>Sufrió abuso físico o mental sustancial</strong> como resultado de haber sido víctima de una
          actividad criminal que califica. &ldquo;Sustancial&rdquo; no significa catastrófico; se evalúa caso
          por caso y puede incluir daño emocional y psicológico.
        </li>
        <li>
          <strong>Tiene información sobre esa actividad criminal.</strong> Debe poseer información creíble y
          confiable sobre el delito que califica. En la mayoría de los casos, esto significa que lo
          experimentó directamente.
        </li>
        <li>
          <strong>Ha sido útil, está siendo útil o es probable que sea útil</strong> a las fuerzas del orden
          (policía, fiscales, jueces, el FBI, DHS u otras agencias que califican) en la detección,
          investigación, enjuiciamiento, condena o sentencia relacionada con el delito que califica. La
          cooperación es voluntaria, y la ley es protectora: la disposición de una víctima a ayudar no puede
          usarse en su contra.
        </li>
        <li>
          <strong>La actividad criminal ocurrió en EE. UU.</strong> (o en aguas o espacio aéreo territorial de
          EE. UU.) o violó una ley federal estadounidense. Los delitos internacionales cometidos en el
          extranjero generalmente no califican.
        </li>
      </ul>
      <p>
        El estatus indocumentado no es un factor descalificante. Las víctimas que entraron sin inspección,
        excedieron el tiempo de una visa o tienen otros problemas migratorios aún pueden solicitar. Muchos
        peticionarios de visa U tienen motivos de inadmisibilidad preexistentes; USCIS tiene amplia autoridad
        discrecional para perdonar la mayoría de los motivos de inadmisibilidad para los solicitantes de visa U
        por razones humanitarias.
      </p>

      <h2>Delitos que califican bajo la INA &sect; 101(a)(15)(U)(iii)</h2>
      <p>
        La ley enumera directamente las actividades criminales que califican. La lista incluye:
      </p>
      <ul>
        <li>Violación; agresión sexual; explotación sexual</li>
        <li>Violencia doméstica; agresión con agravantes; acecho</li>
        <li>Contacto sexual abusivo; trata sexual de menores</li>
        <li>Incesto; mutilación genital femenina</li>
        <li>Secuestro; detención ilegal</li>
        <li>Chantaje; extorsión; homicidio involuntario; asesinato</li>
        <li>Obstrucción de la justicia; perjurio; manipulación de testigos</li>
        <li>Trata de personas (que se superpone con la visa T)</li>
        <li>Servidumbre involuntaria; comercio de esclavos; trabajo forzado</li>
        <li>Prostitución; toma de rehenes; tortura</li>
        <li>Fraude en la contratación de mano de obra extranjera; restricción criminal ilegal</li>
      </ul>
      <p>
        La ley también cubre la <strong>tentativa, conspiración o solicitud</strong> de cometer cualquiera de
        los delitos enumerados. La &ldquo;actividad similar&rdquo; a los delitos enumerados también puede
        calificar. En la práctica, si un delito violento o coercitivo grave ocurrió en su contra, un abogado
        puede evaluar si encaja &mdash; la etiqueta usada en el reporte policial no siempre es determinante.
      </p>

      <h2>La certificación de las fuerzas del orden: Formulario I-918, Suplemento B</h2>
      <p>
        El corazón del proceso de la visa U es la <strong>certificación de las fuerzas del orden</strong>, que
        se completa en el <strong>Formulario I-918, Suplemento B</strong> (comúnmente llamado el
        &ldquo;I-918B&rdquo; o la &ldquo;certificación&rdquo;). Sin ella, USCIS no puede aprobar una visa U. La
        certificación la firma un funcionario designado de una <strong>agencia certificadora</strong> &mdash;
        una agencia responsable de la detección, investigación, enjuiciamiento, condena o sentencia del delito
        que califica.
      </p>
      <p>
        En Georgia, las agencias certificadoras incluyen:
      </p>
      <ul>
        <li>Departamentos de policía locales (Atlanta PD, Gwinnett County PD, Cobb County PD y otros)</li>
        <li>Oficinas del sheriff del condado</li>
        <li>La <strong>Oficina de Investigación de Georgia (GBI)</strong></li>
        <li>Oficinas de fiscales de distrito en los circuitos judiciales de Georgia</li>
        <li>Agencias federales con autoridad investigadora (FBI, DHS/HSI, DEA y otras cuando se trata de delitos federales)</li>
        <li>Agencias de protección infantil en algunas circunstancias</li>
      </ul>
      <p>
        El funcionario certificador debe confirmar que la víctima ha sido, es o es probable que sea útil en la
        investigación o el enjuiciamiento. La certificación no es una garantía de que se presentaron cargos, de
        que alguien fue arrestado o de que hubo una condena. Es una declaración sobre la cooperación de la
        víctima y sobre la naturaleza calificante del delito. Las agencias tienen discreción sobre si certifican
        o no; algunas son más receptivas que otras. Un abogado que sabe qué oficinas en Georgia trabajan con
        casos de visa U &mdash; y cómo abordarlas &mdash; es un recurso significativo en esta etapa.
      </p>

      <h2>El proceso de la petición Formulario I-918</h2>
      <p>
        Una vez que tiene en mano un I-918B firmado, el peticionario presenta el{' '}
        <strong>Formulario I-918, Petición para Estatus de No Inmigrante U</strong>, ante USCIS (actualmente el
        Centro de Servicio de Vermont). Un paquete de petición sólido incluye:
      </p>
      <ul>
        <li>
          <strong>El Formulario I-918</strong> con una declaración personal completa y precisa que describa el
          delito, el abuso sufrido y la cooperación con las fuerzas del orden.
        </li>
        <li>
          <strong>El Formulario I-918, Suplemento B</strong> &mdash; la certificación firmada de las fuerzas
          del orden.
        </li>
        <li>
          Documentación de respaldo: reportes policiales, registros médicos, documentos judiciales,
          fotografías, órdenes de protección y cualquier otra evidencia que corrobore el delito y el daño a la
          víctima.
        </li>
        <li>
          <strong>El Formulario I-192</strong> (Solicitud de Permiso Anticipado para Ingresar como No
          Inmigrante) si el peticionario tiene motivos de inadmisibilidad que requieren una exención &mdash;
          algo común en los casos de visa U.
        </li>
        <li>
          <strong>El Formulario I-918, Suplemento A</strong> para los familiares que califican y buscan estatus
          derivado de visa U (vea más abajo).
        </li>
      </ul>
      <p>
        Actualmente <strong>no hay cuota de presentación</strong> para el Formulario I-918. Hay exenciones de
        cuota disponibles para formularios relacionados. Cuando se alcanza el límite anual de 10,000, USCIS
        coloca a los peticionarios en una lista de espera y emite estatus de acción diferida con autorización de
        trabajo mientras los solicitantes esperan que un número de visa esté disponible.
      </p>

      <h2>Visas U derivadas para familiares</h2>
      <p>
        La visa U protege a más que a la víctima directa. Los familiares que califican pueden solicitar{' '}
        <strong>estatus derivado de visa U</strong> como no inmigrantes U-2, U-3, U-4 o U-5:
      </p>
      <ul>
        <li>
          Si el peticionario principal tiene <strong>21 años o más</strong>: un cónyuge e hijos solteros menores
          de 21 años pueden calificar.
        </li>
        <li>
          Si el peticionario principal es <strong>menor de 21 años</strong>: un cónyuge, hijos, padres y
          hermanos solteros menores de 18 años pueden calificar.
        </li>
      </ul>
      <p>
        Los derivados reciben el mismo estatus de cuatro años y autorización de trabajo, y también son
        eventualmente elegibles para una green card. Los familiares <em>no</em> necesitan estar físicamente
        presentes en Estados Unidos cuando se presenta la petición; pueden ser peticionados desde el extranjero.
        Esta es una de las protecciones más significativas de la visa U para familias con estatus migratorio
        mixto.
      </p>

      <h2>El estatus de 4 años y el camino hacia una green card</h2>
      <p>
        Una visa U aprobada otorga hasta <strong>cuatro años de estatus legal de no inmigrante</strong>. Las
        extensiones más allá de los cuatro años están disponibles solo en circunstancias específicas (un
        funcionario certificador solicita una extensión, o existen circunstancias excepcionales). Cuatro años es
        la base; el objetivo es usar ese tiempo para alcanzar el umbral de la green card.
      </p>
      <p>
        Bajo la <strong>INA &sect; 245(m)</strong>, un titular de visa U puede solicitar el{' '}
        <strong>ajuste de estatus a residencia permanente legal</strong> (green card) si:
      </p>
      <ul>
        <li>Ha estado físicamente presente en Estados Unidos por un período continuo de al menos <strong>tres años</strong> desde que se otorgó la visa U;</li>
        <li>No ha abandonado su residencia en EE. UU.;</li>
        <li>No se ha negado de manera irrazonable a brindar asistencia a las fuerzas del orden desde que obtuvo el estatus U-1; y</li>
        <li>Demuestra que su presencia en EE. UU. se justifica por motivos humanitarios, de unidad familiar o de interés público.</li>
      </ul>
      <p>
        Desde la green card, el camino continúa. Tras el período requerido de residencia permanente, un
        beneficiario de visa U &mdash; como cualquier residente permanente &mdash; puede solicitar la{' '}
        <Link href="/es/blog/naturalization-citizenship-georgia">ciudadanía estadounidense</Link>. Para una
        víctima que llegó sin estatus y con una enorme vulnerabilidad, ese recorrido es exactamente lo que el
        Congreso pretendía.
      </p>

      <h2>Por qué un abogado de inmigración es esencial</h2>
      <p>
        La visa U implica estrategia legal en cada paso &mdash; y las consecuencias de los errores son graves.
        Determinar si su delito califica, si su historial de cooperación es suficiente, cómo enmarcar la
        declaración personal, qué motivos de inadmisibilidad requieren una exención y cómo abordar a la agencia
        certificadora de su condado no son ejercicios de llenar formularios. Hecha de forma deficiente, una
        petición puede ser negada o exponer a un peticionario indocumentado sin asegurar el alivio. Hecha bien,
        conduce a estatus legal, autorización de trabajo y, eventualmente, la ciudadanía para toda una familia.
      </p>
      <p>
        Más allá del trabajo legal, muchos peticionarios de visa U han experimentado trauma, barreras
        lingüísticas o contacto negativo previo con las fuerzas del orden y las autoridades de inmigración. Un
        abogado que maneja estos casos con regularidad comprende la sensibilidad que implican y puede trabajar
        con usted de una manera que no agrave el daño.
      </p>

      <h2>Hable con Eszter Bardi &mdash; consulta gratuita y confidencial</h2>
      <p>
        Si fue víctima de un delito que califica en Georgia o Alabama y cooperó (o está dispuesto a cooperar)
        con las fuerzas del orden, la abogada <strong>Eszter Bardi</strong>, de Bardi Immigration Law, puede
        evaluar su elegibilidad, acercarse a la agencia certificadora correcta y construir la petición más sólida
        posible en su nombre. Ella trabaja directamente con víctimas de delitos en todo{' '}
        <strong>Georgia y Alabama</strong> y maneja cada caso personalmente.
      </p>
      <p>
        <strong>Las consultas son gratuitas y confidenciales.</strong> Su estatus migratorio no será una
        barrera para obtener ayuda, y nunca lo pasarán a un especialista de admisión.{' '}
        <Link href="/es/contact">Solicite su consulta gratuita en línea.</Link> Hablamos español.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo ofrece información legal general y no constituye
          asesoría legal. El estatus de no inmigrante U es específico de los hechos y la elegibilidad varía caso
          por caso; nada de lo aquí expuesto garantiza un resultado. Los formularios, cuotas, tiempos de
          procesamiento, condiciones de la lista de espera y detalles del programa de USCIS cambian &mdash;
          confirme los requisitos actuales y consulte a un abogado de inmigración con licencia antes de
          presentar. Si está en peligro inmediato, llame al 911.
        </em>
      </p>
    </div>
  );
}
