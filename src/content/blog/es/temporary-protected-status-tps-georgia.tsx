/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (TPS, INA §244 / 8 U.S.C. §1254a, Formulario I-821, Formulario I-765 EAD, fechas de residencia continua y presencia física continua, ventanas de re-registro, designaciones de países para Venezuela/Honduras/El Salvador/Haití/Ucrania, ajuste INA §245, Matter of Z-R-Z-C- / Sanchez v. Mayorkas, y la litigación de Ramos y Noem v. National TPS Alliance) que cambia con frecuencia. Las designaciones de países y el estado de la litigación son volátiles — confirmar contra las páginas de TPS de USCIS antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/temporary-protected-status-tps-georgia.tsx (BAR-854). Español natural, no traducción literal.

export const esTitle = 'Estatus de Protección Temporal (TPS) en Georgia: Requisitos, Registro y Renovación';
export const esDescription =
  'Una abogada de inmigración en Georgia explica el TPS bajo INA §244: qué países tienen designación activa y cuáles son los más importantes para Georgia (Venezuela, Honduras, El Salvador, Haití, Ucrania), quién califica, cómo registrarse con el Formulario I-821 y obtener el permiso de trabajo I-765, los plazos de re-registro que no puede perderse, qué no hace el TPS (no es green card), la situación excepcional donde el TPS puede abrir la puerta al ajuste de estatus, y la litigación 2023–2025 que ha sacudido el programa. Información general, no asesoría legal.';

export function TemporaryProtectedStatusGeorgiaPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        En todo el área metropolitana de Atlanta y Georgia, decenas de miles de personas de Venezuela, Honduras, El
        Salvador, Haití y Ucrania viven y trabajan bajo una única protección que frecuentemente se malentiende:{' '}
        <strong>el Estatus de Protección Temporal</strong>, o <strong>TPS</strong>. Permite que personas que ya están
        en los Estados Unidos permanezcan y trabajen legalmente cuando es demasiado peligroso regresar a su país —
        debido a un conflicto armado, un desastre natural u otras condiciones extraordinarias. El TPS también es una
        de las áreas más volátiles del derecho migratorio en este momento, con designaciones otorgadas, extendidas y
        terminadas con poco aviso y disputadas en los tribunales.
      </p>
      <p>
        Esta guía explica qué es el TPS, qué países designados importan más para las comunidades de Georgia, quién
        califica, exactamente cómo registrarse con el Formulario I-821 y solicitar un permiso de trabajo, los plazos
        de re-registro que no puede permitirse perderse, qué <em>no</em> le da el TPS, la situación limitada donde el
        TPS puede abrir una puerta a una green card, y cómo la litigación de 2023–2025 ha reformado el programa.
      </p>

      <h2>¿Qué Es el Estatus de Protección Temporal?</h2>
      <p>
        El Congreso creó el TPS en la Ley de Inmigración de 1990. Bajo la{' '}
        <strong>INA §244 (8 U.S.C. §1254a)</strong>, el Secretario de Seguridad Nacional puede designar un país
        extranjero para TPS cuando las condiciones allí — un conflicto armado en curso, un desastre ambiental como
        un terremoto o huracán, una epidemia u otras circunstancias extraordinarias y temporales — hacen que sea
        inseguro para los nacionales de ese país regresar. Una vez que se designa un país, sus nacionales que ya
        están en los Estados Unidos pueden solicitar.
      </p>
      <p>
        El TPS es exactamente lo que su nombre dice: <strong>temporal</strong>. Una designación dura un período
        establecido (generalmente 6, 12 o 18 meses) y el gobierno debe decidir periódicamente si extenderla o
        terminarla. Mientras su estatus está vigente, el TPS proporciona tres cosas: protección contra la
        deportación, elegibilidad para un permiso de trabajo, y la capacidad de solicitar autorización de viaje. No
        es una visa, y no es una green card.
      </p>

      <h2>Países Designados Que Más Importan en Georgia</h2>
      <p>
        Las comunidades inmigrantes de Georgia se ven fuertemente afectadas por el TPS de varios países. Las
        nacionalidades con mayor impacto local incluyen:
      </p>
      <ul>
        <li>
          <strong>Venezuela</strong> — una de las designaciones más grandes y más vigiladas, y el centro de la
          litigación de 2025 que se describe a continuación.
        </li>
        <li>
          <strong>Honduras</strong> y <strong>El Salvador</strong> — designaciones centroamericanas de larga data
          vinculadas a desastres naturales pasados, con raíces profundas en las comunidades latinas de Georgia.
        </li>
        <li>
          <strong>Haití</strong> — designado debido a condiciones de inestabilidad y desastre, con una presencia
          considerable en el área metropolitana de Atlanta.
        </li>
        <li>
          <strong>Ucrania</strong> — designado después de la invasión de 2022, protegiendo a ucranianos que estaban
          en los Estados Unidos cuando comenzó la guerra.
        </li>
      </ul>
      <p>
        Una advertencia que aplica a todos los países en esta lista: <strong>las designaciones cambian</strong>. Un
        país puede ser extendido, re-designado recientemente o terminado, y cada decisión trae sus propias fechas y
        plazos publicados en el Registro Federal. Nunca asuma el estatus de su país a partir de lo que le dijo un
        amigo, una publicación en redes sociales o las noticias del año pasado. Confirme la designación actual y los
        plazos en la página oficial de TPS de USCIS para su país antes de actuar.
      </p>

      <h2>Quién Es Elegible para el TPS</h2>
      <p>
        Para calificar para el TPS, generalmente debe cumplir todos los siguientes requisitos:
      </p>
      <ul>
        <li>
          <strong>Ser nacional de un país designado</strong> (o una persona sin nacionalidad que haya residido
          habitualmente allí).
        </li>
        <li>
          <strong>Haber estado físicamente presente de manera continua</strong> en los Estados Unidos desde la{' '}
          <em>fecha efectiva</em> de la designación más reciente de su país, y{' '}
          <strong>residir continuamente</strong> aquí desde la fecha que especifique el gobierno. Estas dos fechas son
          específicas para cada país y estrictas — breves salidas casuales pueden estar permitidas, pero cualquier
          cosa más puede romper la elegibilidad.
        </li>
        <li>
          <strong>Presentar la solicitud durante la ventana de registro o re-registro abierta de su país</strong> (o
          calificar para un registro inicial tardío).
        </li>
        <li>
          <strong>No estar excluido por motivos criminales o de seguridad.</strong> No es elegible si ha sido
          condenado por cualquier delito grave o dos o más delitos menores en los Estados Unidos, o si se aplican
          ciertas barras de inadmisibilidad o seguridad. Un solo problema penal puede hundir un caso que de otro
          modo sería sólido, así que revise su historial con un abogado antes de presentar la solicitud.
        </li>
      </ul>

      <h2>Cómo Registrarse: Formulario I-821 y el Permiso de Trabajo I-765</h2>
      <p>
        Solicita el TPS presentando el <strong>Formulario I-821, Solicitud de Estatus de Protección Temporal</strong>,
        ante USCIS. Junto con el formulario presenta evidencia de identidad y nacionalidad (pasaporte, identificación
        nacional o acta de nacimiento), prueba de la fecha en que entró a los Estados Unidos, y documentos que
        demuestren residencia continua y presencia física continua — contratos de arrendamiento, talones de pago,
        facturas de servicios, registros escolares o médicos con fecha a lo largo del período requerido.
      </p>
      <p>
        Al mismo tiempo, la mayoría de los solicitantes presenta el <strong>Formulario I-765, Solicitud de
        Autorización de Empleo</strong>, para obtener un permiso de trabajo (EAD). Puede presentar el I-765 junto
        con el I-821 o por separado. Si se aprueba el TPS, USCIS emite un Documento de Autorización de Empleo que
        le permite trabajar legalmente y sirve como una forma de identificación ampliamente aceptada. Los
        solicitantes que no pueden pagar las tarifas pueden solicitar una exención de tarifas con el Formulario
        I-912. Después de presentar la solicitud, USCIS generalmente programa una cita de biometría para huellas
        dactilares y una verificación de antecedentes.
      </p>

      <h2>Re-registro: No Se Pierda su Ventana</h2>
      <p>
        El TPS no es &ldquo;preséntelo y olvídese.&rdquo; Cada vez que el gobierno extiende la designación de un
        país, cada beneficiario actual debe <strong>re-registrarse</strong> durante la ventana anunciada para
        mantener el estatus y renovar el permiso de trabajo. El re-registro se presenta en el mismo Formulario I-821,
        y renueva el EAD con un nuevo Formulario I-765.
      </p>
      <p>
        Pierda la ventana de re-registro sin buena causa y puede perder el TPS por completo. Vigile dos cosas de
        cerca: el <strong>período de re-registro</strong> (a menudo una ventana de 60 días) y la{' '}
        <strong>fecha de vencimiento del EAD</strong>. Cuando el gobierno extiende una designación pero no puede
        imprimir nuevas tarjetas a tiempo, a menudo emite una{' '}
        <strong>extensión automática</strong> de los permisos de trabajo existentes a través de un aviso en el
        Registro Federal — su antiguo EAD más ese aviso demuestra autorización de trabajo continua a los
        empleadores. Marque sus plazos en el calendario el día en que se publique un aviso; no espere.
      </p>

      <h2>Lo Que el TPS No Hace</h2>
      <p>
        Este es el punto más importante y más malentendido:{' '}
        <strong>el TPS por sí solo no es un camino a una green card.</strong> No le da residencia permanente, y no
        lleva automáticamente a la ciudadanía. Cuando termina la designación de un país, la protección termina con
        ella — los beneficiarios vuelven al estatus migratorio (o falta de estatus) que tenían antes, a menos que
        hayan obtenido otra forma de alivio en ese tiempo.
      </p>
      <p>
        Dado que el TPS es temporal, los titulares deben tratarlo como una ventana de seguridad para explorar opciones{' '}
        <em>permanentes</em>, no como un destino final. Dependiendo de sus hechos, eso podría significar una green
        card familiar o de empleo, asilo u otra protección como la{' '}
        <Link href="/es/blog/withholding-of-removal-immigration-court-georgia">retención de remoción</Link>. Las
        personas que llegaron a EE. UU. de niños también deben ver si{' '}
        <Link href="/es/blog/daca-renewal-2025-georgia">DACA y sus caminos a largo plazo</Link> encajan en su
        situación. Para un análisis enfocado en cómo los cambios de política recientes afectan a los titulares
        actuales de TPS, vea nuestra guía complementaria,{' '}
        <Link href="/es/blog/tps-2026">TPS en 2026: Lo Que Significa para los Inmigrantes de Georgia</Link>.
      </p>

      <h2>El Caso Excepcional de TPS a Green Card: Ajuste de Estatus</h2>
      <p>
        Hay una excepción importante que vale la pena entender. Un titular de TPS que tiene un camino independiente a
        una green card — más comúnmente a través de un cónyuge, padre o hijo ciudadano estadounidense que puede
        presentar una petición en su nombre — puede usar esa petición para convertirse en residente permanente. El
        obstáculo generalmente es si la persona fue &ldquo;inspeccionada y admitida o liberada bajo palabra&rdquo;,
        un requisito para el{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajuste de estatus</Link> bajo INA §245.
      </p>
      <p>
        El Tribunal Supremo abordó parte de esto en <em>Sanchez v. Mayorkas</em> (2021), sosteniendo que una
        concesión de TPS no cuenta, por sí sola, como una &ldquo;admisión&rdquo; para alguien que entró al país
        sin inspección. Pero el análisis depende en gran medida de <em>cómo</em> entró la persona, si ha viajado
        con autorización de viaje de TPS y qué circuito federal rige su caso — y la ley continúa desarrollándose.
        La conclusión práctica: si tiene TPS y un familiar calificante ciudadano, no asuma que está atrapado. Pida
        a un abogado que analice si el ajuste u otro camino está abierto para usted, porque la diferencia entre un
        estatus temporal y una green card permanente puede reducirse a estos detalles técnicos.
      </p>

      <h2>La Litigación 2023–2025: Un Programa Disputado en los Tribunales</h2>
      <p>
        El TPS ha sido objeto de intensa litigación, y las reglas pueden cambiar mientras los casos están pendientes.
        Trate cualquier titular de noticias con cautela y confirme dónde están las cosas realmente antes de confiar
        en ello.
      </p>
      <p>
        Durante la primera administración Trump, el gobierno se propuso terminar el TPS para El Salvador, Haití,
        Nicaragua y Sudán. Los titulares de TPS impugnaron esas terminaciones en <em>Ramos v. Nielsen</em> (más
        tarde <em>Ramos v. Mayorkas</em>), y un tribunal federal en California bloqueó las terminaciones mientras el
        caso continuaba. Después de años de apelaciones, la disputa fue finalmente resuelta en 2023 cuando la
        administración Biden rescindió las terminaciones y emitió nuevas designaciones, y el caso fue desestimado.
      </p>
      <p>
        La lucha se reanudó en 2025. Después de que la administración tomara medidas para anular y terminar la
        designación de Venezuela, los beneficiarios demandaron en <em>National TPS Alliance v. Noem</em>. Un
        tribunal de distrito federal encontró que la terminación era ilegal, pero el Tribunal Supremo intervino —
        suspendiendo la orden del tribunal inferior en mayo de 2025 y nuevamente pausando el alivio más tarde ese
        año — permitiendo que la terminación de Venezuela avanzara mientras continúa la litigación. El resultado es
        una incertidumbre real para los nacionales afectados.{' '}
        <strong>Lo más importante que puede hacer es verificar el estado actual de la designación y los plazos de su
        propio país en el sitio web de USCIS, y hablar con un abogado antes de que venza cualquier plazo.</strong>
      </p>

      <h2>Por Qué Importa un Abogado de Inmigración en Georgia para el TPS</h2>
      <p>
        El TPS parece una solicitud simple, pero las consecuencias de un pequeño error son graves: una ventana de
        re-registro perdida, una brecha inexplicada en su evidencia de residencia, un cargo penal viejo que pensó
        que no importaba, o una oportunidad perdida de buscar una green card mientras la petición de su familiar
        estaba disponible. Con designaciones y fallos judiciales cambiando con poco aviso, tener a alguien que
        rastree los plazos y la estrategia para su país específico vale mucho más que la tarifa de presentación.
        Si aún está decidiendo quién debe manejar su caso, lea nuestra guía sobre{' '}
        <Link href="/es/blog/how-to-choose-immigration-attorney-georgia">cómo elegir un abogado de inmigración en
        Georgia</Link>.
      </p>

      <h2>Hable con Eszter Bardi — Consulta Gratuita</h2>
      <p>
        Si usted o un familiar depende del TPS, no debería tener que adivinar sobre sus derechos o sus plazos. En
        Bardi Immigration Law, la abogada <strong>Eszter Bardi</strong> ayuda a los titulares de TPS en Georgia y
        Alabama a registrarse y re-registrarse a tiempo, mantener la autorización de trabajo vigente, y — igual de
        importante — determinar si hay un camino más permanente disponible. Trabaja directamente con la Abogada
        Bardi, no con un especialista de admisiones.
      </p>
      <p>
        <strong>Programe su consulta gratuita hoy.</strong> Confirmaremos el estado actual de su país, mapearemos sus
        plazos y construiremos un plan para proteger a su familia.{' '}
        <Link href="/es/contact">Solicite su consulta gratuita en línea.</Link> Hablamos español.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo proporciona información legal general y no constituye
          asesoría legal. El derecho migratorio es complejo, específico a los hechos y cambia frecuentemente — las
          designaciones de países del TPS, los plazos y la litigación relacionada son especialmente cambiantes.
          Confirme las designaciones actuales, formularios, tarifas y plazos en el sitio web de USCIS, y consulte
          a un abogado de inmigración con licencia para orientación específica a su caso.
        </em>
      </p>
    </div>
  );
}
