import Link from 'next/link';
// Spanish adaptation of en/t-visa-trafficking-victims-georgia.tsx (BAR-753, source BAR-688).
// Natural Spanish, not a literal translation. GA+AL licensed-attorney framing preserved.
// Preserve the T-visa (I-914) vs U-visa (I-918) distinction. Verify before publish — references
// humanitarian relief (T nonimmigrant status, TVPA, INA § 101(a)(15)(T), 22 U.S.C. § 7102, Form I-914
// and Supplements A/B, the 5,000 T-1 cap, INA § 245(l) adjustment) that is fact-specific and whose
// forms/fees/processing times shift. Confirm against USCIS/EOIR/INA and have an attorney review before go-live.

export const esTitle = 'Visa T para Víctimas de Trata de Personas en Georgia: Protección Migratoria';
export const esDescription =
  'Una abogada de inmigración en Georgia explica la visa T (estatus T de no inmigrante) para sobrevivientes de trata de personas: en qué se diferencia de la visa U, quién califica, cómo funciona el Formulario I-914, las visas derivadas para la familia y el camino a la green card. Con licencia en Georgia y Alabama.';

export function TVisaTraffickingPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        La trata de personas casi nunca se parece a lo que la gente imagina. Rara vez es un desconocido en una
        camioneta. Mucho más a menudo es un reclutador que prometió un buen empleo, un &ldquo;novio&rdquo; que se
        volvió controlador, un contratista laboral que confiscó un pasaporte, o un empleador que amenazó con llamar a
        inmigración si el trabajador se quejaba. Las víctimas suelen ser indocumentadas, tienen pánico a la policía y
        están convencidas de que denunciar las llevará a la deportación. El Congreso creó una forma específica de alivio
        migratorio precisamente para estas personas: el <strong>estatus T de no inmigrante</strong>, conocido
        comúnmente como la <strong>visa T</strong>. Esta guía explica qué es la visa T, en qué se diferencia de la más
        conocida visa U, quién califica, cómo funciona el proceso del <strong>Formulario I-914</strong> y por qué
        Georgia &mdash; un importante corredor de trata de personas &mdash; es un lugar donde este alivio importa
        enormemente.
      </p>
      <p>
        Si usted es defensor, trabajador social, empleado de DFCS, personal de un albergue o un sobreviviente que lee
        esto directamente: la visa T puede convertir la mayor vulnerabilidad de una víctima de trata &mdash; su estatus
        migratorio &mdash; en un camino hacia el estatus legal, el permiso de trabajo y, con el tiempo, la green card.
        Es una de las herramientas más poderosas y más subutilizadas del derecho migratorio.
      </p>

      <h2>Qué es la Visa T</h2>
      <p>
        La visa T fue creada por la <strong>Ley de Protección de Víctimas de Trata de 2000</strong> (Trafficking
        Victims Protection Act, parte de la Victims of Trafficking and Violence Protection Act). Su propósito es doble:
        proteger a las víctimas de trata grave de personas y reforzar la capacidad de las fuerzas del orden para
        investigar y enjuiciar a los tratantes, dándoles a los sobrevivientes una razón para salir de las sombras. La
        base legal es <strong>INA &sect; 101(a)(15)(T)</strong>.
      </p>
      <p>
        La visa T otorga al sobreviviente hasta <strong>cuatro años</strong> de estatus legal de no inmigrante,
        autorización de empleo, elegibilidad para ciertos beneficios federales y estatales (a los sobrevivientes de
        trata se les trata de manera similar a los refugiados para algunos beneficios) y &mdash; lo más importante
        &mdash; un camino hacia la <strong>green card</strong> después de tres años, o antes si la investigación o el
        enjuiciamiento concluyen. Ciertos familiares pueden obtener <strong>visas T derivadas</strong> y venir o
        permanecer en los Estados Unidos. Existe un tope anual de <strong>5,000 visas principales (T-1)</strong>, pero
        en la práctica ese tope no ha sido una barrera real porque se otorgan muchas menos de 5,000 cada año &mdash; lo
        que de por sí muestra lo subutilizado que está este alivio.
      </p>

      <h2>Visa T vs. Visa U: Una Distinción Crucial</h2>
      <p>
        La gente confunde constantemente la visa T con la{' '}
        <Link href="/es/blog/u-visa-vawa-crime-victims-georgia">visa U</Link>, y la confusión puede costarle a un
        sobreviviente el alivio correcto. Son visas distintas, para víctimas distintas, en formularios distintos y
        procesadas en parte con una lógica distinta. Esta es la versión clara:
      </p>
      <ul>
        <li>
          <strong>El delito es distinto.</strong> La visa U cubre a las víctimas de una amplia lista de delitos
          calificantes (violencia doméstica, agresión sexual, agresión con agravantes, manipulación de testigos y
          muchos otros). La visa T es estrecha y específica: cubre a las víctimas de una <strong>forma grave de trata
          de personas</strong> &mdash; trata sexual o trata laboral inducida por fuerza, fraude o coacción.
        </li>
        <li>
          <strong>El formulario es distinto.</strong> La visa U se presenta con el <strong>Formulario I-918</strong>.
          La visa T se presenta con el <strong>Formulario I-914</strong>. Presentar el equivocado desperdicia meses.
        </li>
        <li>
          <strong>El requisito de las fuerzas del orden es distinto.</strong> La visa U <em>exige</em> una
          certificación firmada por las fuerzas del orden (Formulario I-918, Suplemento B) antes de poder aprobarse
          &mdash; sin certificación, no hay visa U. La visa T <strong>no</strong> exige una certificación firmada. Una
          declaración de las fuerzas del orden (Formulario I-914, Suplemento B) es evidencia fuerte y útil, pero una
          visa T puede aprobarse sin ella siempre que el sobreviviente demuestre que cumplió con las solicitudes
          razonables de asistencia (con excepciones importantes que se explican abajo). Esta sola diferencia hace que la
          visa T esté disponible para sobrevivientes a quienes la policía nunca certificó formalmente.
        </li>
        <li>
          <strong>La espera es distinta.</strong> Como la visa U está muy congestionada, con un tope de 10,000 al año y
          una lista de espera de años, un sobreviviente de trata que califica para <em>ambas</em> puede estar mucho
          mejor servido con la visa T. Esta es una de las decisiones estratégicas más importantes que toma un abogado en
          estos casos.
        </li>
      </ul>
      <p>
        Muchos sobrevivientes de trata son elegibles para la visa T, la visa U y, a veces, el{' '}
        <Link href="/es/blog/asylum-application-georgia">asilo</Link> o el alivio bajo VAWA al mismo tiempo. Elegir
        entre ellos &mdash; o presentar más de uno &mdash; es una decisión de estrategia legal, no un simple trámite de
        llenar formularios.
      </p>

      <h2>Quién Califica: Los Cuatro Requisitos Centrales</h2>
      <p>
        Para obtener una visa T, un sobreviviente generalmente debe establecer cuatro cosas:
      </p>
      <h3>1. Usted es o fue víctima de una forma grave de trata de personas</h3>
      <p>
        La ley federal (<strong>22 U.S.C. &sect; 7102</strong>) define una &ldquo;forma grave de trata&rdquo; de dos
        maneras. La <strong>trata sexual</strong> es el reclutamiento, alojamiento u obtención de una persona para un
        acto sexual comercial inducido por fuerza, fraude o coacción &mdash; o en el que la persona es menor de 18 años.
        La <strong>trata laboral</strong> es el reclutamiento, alojamiento u obtención de una persona para trabajo o
        servicios mediante fuerza, fraude o coacción, con el fin de servidumbre involuntaria, peonaje, servidumbre por
        deudas o esclavitud. Importante: no tiene que haber un secuestro ni cadenas físicas. La <strong>coacción</strong>{' '}
        incluye amenazas de daño grave, manipulación psicológica, confiscación de documentos y amenazas de denunciar a
        alguien ante las autoridades de inmigración.
      </p>
      <h3>2. Usted está físicamente presente en los EE. UU. a causa de la trata</h3>
      <p>
        El sobreviviente debe estar físicamente presente en los Estados Unidos (o en un puerto de entrada){' '}
        <em>a causa de</em> la trata. Esto incluye a personas que fueron traídas aquí por los tratantes y a personas que
        fueron víctimas de trata después de llegar. Los sobrevivientes que se fueron y regresaron generalmente deben
        demostrar que su presencia está vinculada a la trata. Este requisito hace tropezar a la gente, y la forma en que
        se relata la historia importa.
      </p>
      <h3>3. Usted cumplió con las solicitudes razonables de las fuerzas del orden</h3>
      <p>
        Los sobrevivientes de 18 años o más generalmente deben demostrar que <strong>cumplieron con cualquier solicitud
        razonable</strong> de una agencia de las fuerzas del orden para ayudar en la investigación o el enjuiciamiento
        de la trata &mdash; o que no pueden cooperar debido a un trauma físico o psicológico. Los sobrevivientes{' '}
        <strong>menores de 18 años</strong> están <strong>exentos</strong> por completo del requisito de cooperación.
        Es crucial entender que &ldquo;cooperación&rdquo; no requiere que alguien haya sido arrestado o condenado;
        requiere que el sobreviviente haya estado dispuesto a ayudar.
      </p>
      <h3>4. Usted sufriría dificultades extremas con daño inusual y grave si fuera deportado</h3>
      <p>
        El sobreviviente debe demostrar que la deportación de los Estados Unidos le causaría <strong>dificultades
        extremas con daño inusual y grave</strong>. Esto puede incluir el trauma del regreso, el riesgo de volver a ser
        víctima de trata o de ser blanco de represalias por parte de los tratantes, la falta de servicios de protección
        en el país de origen y las necesidades médicas o psicológicas del sobreviviente.
      </p>

      <h2>El Proceso del Formulario I-914</h2>
      <p>
        Una solicitud de visa T se construye en torno al <strong>Formulario I-914, Solicitud de Estatus T de No
        Inmigrante</strong>, presentado ante USCIS (el Centro de Servicio de Vermont maneja los casos humanitarios). Una
        solicitud sólida normalmente incluye:
      </p>
      <ul>
        <li>
          El <strong>Formulario I-914</strong> con una <strong>declaración personal</strong> detallada y bien
          organizada del sobreviviente &mdash; el corazón del caso &mdash; que describe la trata con sus propias
          palabras.
        </li>
        <li>
          El <strong>Formulario I-914, Suplemento B</strong> (la declaración de las fuerzas del orden){' '}
          <em>cuando esté disponible</em> &mdash; evidencia fuerte, pero no obligatoria.
        </li>
        <li>
          <strong>Evidencia corroborante</strong>: informes policiales, registros médicos y de salud mental,
          fotografías, mensajes de texto, registros de pago o la ausencia de ellos, declaraciones de testigos, registros
          de un proveedor de servicios y prueba de la cooperación del sobreviviente.
        </li>
        <li>
          Una solicitud de <strong>exención de inadmisibilidad (Formulario I-192)</strong> cuando el sobreviviente tiene
          problemas migratorios o penales menores derivados de la trata &mdash; la ley está diseñada para perdonar la
          conducta que el tratante forzó.
        </li>
        <li>
          El <strong>Formulario I-914, Suplemento A</strong> por cada familiar calificante que busque una visa T
          derivada.
        </li>
      </ul>
      <p>
        Actualmente <strong>no hay tarifa de presentación</strong> para la solicitud de visa T en sí, y hay exenciones
        de tarifas disponibles para formularios relacionados &mdash; el Congreso no quería que el costo dejara fuera a
        los sobrevivientes. Los solicitantes aprobados también reciben <strong>autorización de empleo</strong> como
        parte del estatus. Los tiempos de procesamiento son largos y varían; un abogado puede solicitar trato expedito
        en casos apropiados y responder a las Solicitudes de Evidencia, que son comunes.
      </p>

      <h2>Visas T Derivadas para la Familia</h2>
      <p>
        Una de las características más humanas de la visa T es que protege a la familia del sobreviviente. Un solicitante
        principal de <strong>21 años o más</strong> puede peticionar por un cónyuge y los hijos solteros menores de 21
        años. Un principal <strong>menor de 21 años</strong> también puede peticionar por sus padres y hermanos solteros
        menores de 18 años. En algunos casos, también pueden incluirse familiares que enfrentan un peligro presente de
        represalias por parte de los tratantes. Estos derivados (categorías T-2 a T-6) pueden reunirse con el
        sobreviviente en los Estados Unidos o, si ya están aquí, obtener estatus &mdash; y ellos también se vuelven
        elegibles para el permiso de trabajo y, con el tiempo, una green card.
      </p>

      <h2>El Camino a la Green Card</h2>
      <p>
        La visa T no es un callejón sin salida &mdash; es un puente hacia la residencia permanente. Bajo{' '}
        <strong>INA &sect; 245(l)</strong>, un titular de visa T puede solicitar <strong>ajustar su estatus a residente
        permanente legal</strong> (green card) una vez que haya: (a) estado físicamente presente en los EE. UU. durante
        un período continuo de al menos <strong>tres años</strong> desde que se otorgó la visa T, o (b) estado presente
        durante la investigación o el enjuiciamiento y el Fiscal General certifique que ha concluido &mdash; lo que
        ocurra primero. El solicitante también debe demostrar buen carácter moral y, o bien el cumplimiento continuo de
        las solicitudes razonables de las fuerzas del orden, o bien que sufriría dificultades extremas si fuera
        deportado. A partir de ahí, una green card eventualmente abre la puerta a la{' '}
        <Link href="/es/blog/naturalization-citizenship-georgia">ciudadanía estadounidense</Link>. Para un sobreviviente
        que llegó sin nada y sin estatus, ese recorrido &mdash; de víctima de trata a ciudadano &mdash; es exactamente
        lo que la ley fue creada para hacer posible.
      </p>

      <h2>El Contexto de Georgia</h2>
      <p>
        Georgia es uno de los corredores de trata de personas más significativos de los Estados Unidos, y eso no es un
        accidente de la geografía. El estado se asienta sobre la <strong>Interestatal 85</strong> y la red interestatal
        más amplia que mueve a personas y mano de obra por todo el sureste, y el{' '}
        <strong>Aeropuerto Internacional Hartsfield-Jackson de Atlanta</strong> &mdash; el más concurrido del mundo
        &mdash; es un importante centro de tránsito. Durante años, las autoridades federales han identificado a Atlanta
        como una zona de alta intensidad tanto para la trata sexual como para la trata laboral, esta última afectando
        fuertemente a trabajadores agrícolas, de hostelería, domésticos y de construcción en todo el estado.
      </p>
      <p>
        Para los sobrevivientes y las personas que los ayudan, varios recursos específicos de Georgia importan. La{' '}
        <strong>Oficina de Investigación de Georgia (GBI)</strong> y socios federales (FBI, Homeland Security
        Investigations) investigan la trata y pueden actuar como agencias certificadoras o declarantes. El{' '}
        <strong>grupo de trabajo contra la trata de personas del área de Atlanta</strong> coordina a las fuerzas del
        orden y los servicios para víctimas. La{' '}
        <strong>División de Servicios para Familias y Niños de Georgia (DFCS)</strong> es con frecuencia la primera
        agencia en encontrarse con menores víctimas de trata, quienes están exentos del requisito de cooperación y a
        menudo son candidatos fuertes para la visa T. Y las{' '}
        <strong>organizaciones de servicio a víctimas certificadas por DHS</strong> y los albergues sin fines de lucro
        en todo el área metropolitana de Atlanta brindan la gestión de casos, la consejería y la documentación que hacen
        creíble una solicitud de visa T. Los sobrevivientes identificados por estas agencias con frecuencia no se dan
        cuenta de que existe un remedio migratorio poderoso &mdash; que es exactamente por lo que los defensores y
        abogados deben conocerlo.
      </p>

      <h2>Por Qué Importa un Abogado de Inmigración Aquí</h2>
      <p>
        Los casos de visa T están entre los más delicados del derecho migratorio. Se le pide al sobreviviente que
        vuelva a relatar la peor experiencia de su vida en una declaración que USCIS examinará con lupa; los estándares
        de &ldquo;dificultades extremas&rdquo; y &ldquo;a causa de la trata&rdquo; requieren un encuadre legal
        cuidadoso; los problemas de inadmisibilidad creados <em>por la trata misma</em> deben ser perdonados mediante
        exención; y la elección estratégica entre una visa T, una{' '}
        <Link href="/es/blog/u-visa-vawa-crime-victims-georgia">visa U</Link>, el asilo, o más de uno de ellos, puede
        cambiar toda la trayectoria de un caso. Hecha bien, una solicitud de visa T protege a toda una familia y conduce
        a una green card. Hecha mal, puede exponer a un sobreviviente indocumentado sin asegurar el alivio. Este no es
        un trámite para hacer por cuenta propia.
      </p>

      <h2>Hable con Eszter Bardi &mdash; Consulta Gratuita y Confidencial</h2>
      <p>
        Si usted es un sobreviviente de trata &mdash; o un defensor, trabajador social o personal de albergue que ayuda
        a uno &mdash; la abogada <strong>Eszter Bardi</strong> de Bardi Immigration Law puede evaluar de manera
        confidencial si una visa T (y qué alivio relacionado) se ajusta a la situación, y construir la solicitud con el
        cuidado que estos casos exigen. Ella representa a sobrevivientes en todo <strong>Georgia y Alabama</strong>, y
        trabaja con regularidad con el tipo de trauma, documentación y temas de las fuerzas del orden que implican estos
        casos.
      </p>
      <p>
        <strong>Su consulta es gratuita y confidencial.</strong> El estatus migratorio no será una barrera para recibir
        ayuda, y usted trabajará directamente con la abogada Bardi &mdash; no con un especialista de admisión.{' '}
        <Link href="/es/contact">Solicite su consulta gratuita en línea.</Link> Hablamos español.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo ofrece información legal general y no constituye
          asesoría legal. El estatus T de no inmigrante depende de los hechos, y la elegibilidad y los resultados varían
          caso por caso; nada de lo aquí expuesto garantiza un resultado. Los formularios, las tarifas, los tiempos de
          procesamiento y los detalles del programa de USCIS cambian &mdash; confirme los requisitos actuales y consulte
          a un abogado de inmigración con licencia antes de presentar su solicitud. Si usted o alguien que conoce está en
          peligro inmediato, llame al 911. La Línea Nacional contra la Trata de Personas es 1-888-373-7888.
        </em>
      </p>
    </div>
  );
}
