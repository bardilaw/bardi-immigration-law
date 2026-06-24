/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (proceso consular de visas de inmigrante vs. ajuste de estatus; Centro Nacional de Visas; Formulario DS-260; Declaración Jurada de Manutención I-864; examen médico; entrevista consular; barras de 3/10 años INA §212(a)(9)(B); condiciones I-751) que pueden cambiar. Confirmar antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/consular-processing-immigrant-visa-georgia.tsx (BAR-807). Español natural, no traducción literal.

export const esTitle = 'Proceso Consular: Cómo Obtener la Visa de Inmigrante desde el Extranjero (Guía para Georgia)';
export const esDescription =
  'Una abogada de inmigración en Georgia explica el proceso consular paso a paso: del Centro Nacional de Visas y el DS-260 al examen médico, la entrevista consular y la admisión como residente permanente. Con licencia en Georgia y Alabama.';

export function ConsularProcessingPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Muchas personas que califican para una green card estadounidense no viven en Estados Unidos &mdash; est&aacute;n en
        el extranjero, esperando una petici&oacute;n que un familiar o un empleador en Georgia ya present&oacute; por
        ellas. Para esos solicitantes, el camino hacia la green card no pasa por una oficina de USCIS en Atlanta. Pasa por
        una embajada o consulado de EE. UU. en su pa&iacute;s de origen, en un tr&aacute;mite llamado{' '}
        <strong>proceso consular.</strong>
      </p>
      <p>
        Si usted es residente de Georgia y present&oacute; una petici&oacute;n por un c&oacute;nyuge, padre, hijo o hermano
        que est&aacute; en el extranjero &mdash; o es un empleador de Georgia que peticion&oacute; por un trabajador en el
        exterior &mdash; el proceso consular es la manera en que su beneficiario realmente obtiene la visa de inmigrante y
        entra al pa&iacute;s como residente permanente. Esta gu&iacute;a explica qu&eacute; es el proceso consular,
        c&oacute;mo se diferencia del ajuste de estatus, y qu&eacute; esperar en cada paso, desde el Centro Nacional de
        Visas hasta la entrevista consular y la admisi&oacute;n.
      </p>

      <h2>Proceso consular frente a ajuste de estatus</h2>
      <p>
        Hay dos maneras de pasar de una petici&oacute;n aprobada a una green card de verdad, y cu&aacute;l aplica depende
        sobre todo de <strong>d&oacute;nde se encuentra el inmigrante</strong> y de si es elegible para ajustar su estatus.
      </p>
      <ul>
        <li>
          <strong>El ajuste de estatus</strong> es para las personas que ya est&aacute;n <em>dentro</em> de Estados Unidos
          con un estatus v&aacute;lido. Presentan el Formulario I-485 y completan todo el proceso aqu&iacute;, sin salir
          del pa&iacute;s. Cubrimos esa v&iacute;a en nuestra gu&iacute;a sobre la{' '}
          <Link href="/es/blog/family-green-card-attorney-georgia">green card basada en la familia en Georgia</Link>.
        </li>
        <li>
          <strong>El proceso consular</strong> es para las personas que est&aacute;n <em>fuera</em> de Estados Unidos
          &mdash; o que est&aacute;n dentro pero no son elegibles para ajustar. Completan los pasos finales en una embajada
          o consulado de EE. UU. en el extranjero y entran a EE. UU. con una visa de inmigrante.
        </li>
      </ul>
      <p>
        La elecci&oacute;n no siempre es libre. Alguien que entr&oacute; a EE. UU. sin inspecci&oacute;n, o que tiene
        ciertos problemas de estatus, puede estar obligado a hacer proceso consular aunque est&eacute; f&iacute;sicamente
        aqu&iacute; &mdash; y salir del pa&iacute;s para asistir a la entrevista en el extranjero puede, por s&iacute;
        mismo, activar una barra de reingreso. Bajo la <strong>INA &sect;212(a)(9)(B),</strong>{' '}
        una persona que acumul&oacute; m&aacute;s de 180 d&iacute;as de <strong>presencia ilegal</strong> en EE. UU. y
        luego sale activa una <strong>barra de 3 a&ntilde;os,</strong> y m&aacute;s de un a&ntilde;o de presencia ilegal
        activa una <strong>barra de 10 a&ntilde;os</strong>{' '}
        &mdash; as&iacute; que el solo hecho de viajar a casa para la entrevista consular puede ser lo que deje a la
        familia afuera. En muchos de estos casos la respuesta es el{' '}
        <Link href="/es/blog/i-601a-provisional-unlawful-presence-waiver-georgia">perd&oacute;n provisional I-601A,</Link>{' '}
        aprobado <em>antes</em> de la salida. Este es justo el tipo de trampa que conviene revisar con una abogada{' '}
        <em>antes</em> de que alguien salga del pa&iacute;s, porque el movimiento equivocado puede separar a una familia
        durante a&ntilde;os.
      </p>

      <h2>Paso uno: la petici&oacute;n aprobada y su fecha de prioridad</h2>
      <p>
        El proceso consular comienza solo despu&eacute;s de que se aprueba la petici&oacute;n de base &mdash; por lo general
        un Formulario I-130 en los casos familiares o un Formulario I-140 en los casos de empleo. La aprobaci&oacute;n
        establece su <strong>fecha de prioridad,</strong> que es su lugar en la fila.
      </p>
      <p>
        Para los familiares inmediatos de ciudadanos estadounidenses (c&oacute;nyuges, padres e hijos solteros menores de
        21 a&ntilde;os), hay una visa disponible de inmediato. Para la mayor&iacute;a de las dem&aacute;s categor&iacute;as
        &mdash; incluidos hermanos, hijos adultos y la mayor&iacute;a de los solicitantes{' '}
        <Link href="/es/blog/employment-based-immigration-georgia">basados en el empleo</Link> &mdash; hay l&iacute;mites
        num&eacute;ricos anuales, y la espera depende de su fecha de prioridad y de su pa&iacute;s de nacimiento. El{' '}
        <Link href="/es/blog/visa-bulletin-priority-dates-family-green-card">bolet&iacute;n de visas</Link> mensual del
        Departamento de Estado muestra cu&aacute;ndo una categor&iacute;a est&aacute; &ldquo;al d&iacute;a&rdquo; (current)
        y lista para avanzar &mdash; la fecha de prioridad es lo que rige cu&aacute;ndo el Centro Nacional de Visas puede
        efectivamente pasar su caso al siguiente paso. Hasta entonces, el caso simplemente espera.
      </p>

      <h2>Paso dos: tr&aacute;mite en el Centro Nacional de Visas (NVC)</h2>
      <p>
        Una vez que se aprueba la petici&oacute;n y hay un n&uacute;mero de visa disponible, USCIS transfiere el caso al{' '}
        <strong>Centro Nacional de Visas (NVC),</strong> la oficina del Departamento de Estado que prepara los casos de visa
        de inmigrante antes de que pasen al consulado. La etapa del NVC es en gran parte una fase de papeleo y pagos, y es
        donde muchos casos se atascan cuando faltan documentos o est&aacute;n incompletos. Espere tener que:
      </p>
      <ul>
        <li><strong>Pagar las tarifas requeridas</strong> &mdash; por lo general la tarifa de solicitud de visa de inmigrante y la tarifa de la Declaraci&oacute;n Jurada de Manutenci&oacute;n;</li>
        <li>
          <strong>Presentar la{' '}
          <Link href="/es/blog/affidavit-of-support-i-864-income-requirements">Declaraci&oacute;n Jurada de Manutenci&oacute;n (Formulario I-864)</Link>,</strong>{' '}
          en la cual el peticionario (y a veces un copatrocinador) acepta una obligaci&oacute;n legalmente exigible de
          mantener econ&oacute;micamente al inmigrante, respaldada con declaraciones de impuestos y prueba de ingresos;
        </li>
        <li><strong>Presentar el DS-260,</strong> la solicitud de visa de inmigrante (m&aacute;s sobre esto abajo);</li>
        <li>
          <strong>Cargar documentos civiles</strong> &mdash; actas de nacimiento, actas de matrimonio, certificados de
          antecedentes penales (police certificates) y, cuando corresponda, sentencias de divorcio, registros militares o
          documentos judiciales, a menudo con traducciones certificadas.
        </li>
      </ul>
      <p>
        Cuando el NVC tiene todo y el caso est&aacute; documentalmente completo, programa la entrevista y env&iacute;a el
        expediente a la embajada o consulado de EE. UU. correspondiente.
      </p>

      <h2>Paso tres: la solicitud de visa de inmigrante DS-260</h2>
      <p>
        El <strong>DS-260</strong> es la solicitud de visa de inmigrante en l&iacute;nea que cada futuro inmigrante debe
        completar. Pide un historial detallado &mdash; direcciones, empleos, familia, viajes y visas previas a EE. UU., y
        una larga lista de preguntas de elegibilidad y seguridad. La exactitud importa enormemente aqu&iacute;: las
        respuestas se hacen bajo juramento, deben coincidir con la petici&oacute;n y los documentos civiles, y las
        inconsistencias son una raz&oacute;n com&uacute;n por la que un caso termina sometido a escrutinio adicional.
        Despu&eacute;s de enviar el DS-260, usted imprime la p&aacute;gina de confirmaci&oacute;n para llevarla a la
        entrevista.
      </p>

      <h2>Paso cuatro: el examen m&eacute;dico de inmigraci&oacute;n</h2>
      <p>
        Antes de la entrevista, todo solicitante de visa de inmigrante debe completar un <strong>examen m&eacute;dico</strong>{' '}
        con un <strong>m&eacute;dico autorizado (panel physician)</strong> &mdash; un doctor espec&iacute;ficamente
        autorizado por la embajada o el consulado. (No puede usar su propio m&eacute;dico de cabecera.) El examen revisa su
        historial m&eacute;dico, verifica las <strong>vacunas</strong> requeridas y detecta ciertas condiciones que
        podr&iacute;an afectar la admisibilidad. El m&eacute;dico env&iacute;a los resultados al consulado, a veces en un
        sobre sellado. Programar el examen con tiempo &mdash; y asegurarse de que sus registros de vacunaci&oacute;n
        est&eacute;n en orden &mdash; evita que se convierta en un cuello de botella de &uacute;ltimo minuto.
      </p>

      <h2>Paso cinco: la entrevista consular</h2>
      <p>
        La entrevista en la embajada o consulado de EE. UU. es el centro del proceso consular. Un oficial consular revisa
        el expediente, verifica la relaci&oacute;n familiar o la oferta de trabajo, confirma los documentos y decide si el
        solicitante es admisible. Por lo general usted debe llevar:
      </p>
      <ul>
        <li>La carta de cita para la entrevista y la p&aacute;gina de confirmaci&oacute;n del DS-260;</li>
        <li>Un pasaporte vigente y las fotograf&iacute;as requeridas;</li>
        <li>Los documentos civiles originales (y las traducciones certificadas) que se enviaron al NVC;</li>
        <li>La Declaraci&oacute;n Jurada de Manutenci&oacute;n original o actualizada con evidencia financiera vigente;</li>
        <li>Los resultados del examen m&eacute;dico, si se los entregaron para llevarlos consigo.</li>
      </ul>
      <p>
        En los casos familiares &mdash; sobre todo los basados en el matrimonio &mdash; el oficial tambi&eacute;n
        eval&uacute;a si la relaci&oacute;n es genuina, as&iacute; que las respuestas consistentes y bien documentadas
        importan. Si todo est&aacute; en orden, el oficial aprueba la visa en la entrevista o poco despu&eacute;s.
      </p>

      <h2>Paso seis: emisi&oacute;n de la visa, viaje y conversi&oacute;n en residente permanente</h2>
      <p>
        Cuando se aprueba la visa, el consulado coloca una visa de inmigrante en el pasaporte y entrega un{' '}
        <strong>paquete de visa</strong> sellado. Dos cosas que debe saber:
      </p>
      <ul>
        <li>
          <strong>No abra el paquete sellado.</strong> Es para el oficial de la Oficina de Aduanas y Protecci&oacute;n
          Fronteriza (CBP) en el puerto de entrada de EE. UU.
        </li>
        <li>
          <strong>Pague la Tarifa de Inmigrante de USCIS (USCIS Immigrant Fee).</strong> Esta tarifa cubre la
          producci&oacute;n de la green card f&iacute;sica y por lo general se paga en l&iacute;nea antes o poco
          despu&eacute;s de viajar. La green card en s&iacute; se env&iacute;a por correo a la direcci&oacute;n en EE. UU.
          despu&eacute;s de la admisi&oacute;n.
        </li>
      </ul>
      <p>
        A su llegada, un oficial de CBP inspecciona al solicitante y, una vez admitido, esa admisi&oacute;n lo convierte en{' '}
        <strong>residente permanente legal.</strong> El sello en el pasaporte sirve como prueba temporal hasta que la
        tarjeta f&iacute;sica llegue por correo.
      </p>

      <h2>Green card condicional (2 a&ntilde;os) frente a permanente (10 a&ntilde;os)</h2>
      <p>
        No toda visa de inmigrante lleva a la misma green card. Cu&aacute;l recibe su familiar en el puerto de entrada
        depende de la categor&iacute;a y, para los c&oacute;nyuges, de cu&aacute;nto tiempo lleva casada la pareja:
      </p>
      <ul>
        <li>
          <strong>Green card de 10 a&ntilde;os (permanente).</strong> La mayor&iacute;a de los inmigrantes por proceso
          consular &mdash; padres, hermanos, hijos adultos, inmigrantes basados en el empleo, y c&oacute;nyuges casados por{' '}
          <strong>m&aacute;s de dos a&ntilde;os</strong> al momento de la admisi&oacute;n &mdash; reciben una green card
          est&aacute;ndar v&aacute;lida por diez a&ntilde;os y renovable.
        </li>
        <li>
          <strong>Green card de 2 a&ntilde;os (condicional).</strong> Un c&oacute;nyuge que lleva casado{' '}
          <strong>menos de dos a&ntilde;os</strong> al ser admitido entra como residente permanente <em>condicional.</em> El
          estatus es real y pleno, pero vence a los dos a&ntilde;os. La pareja debe presentar el <strong>Formulario I-751</strong>{' '}
          en la ventana de 90 d&iacute;as antes de que venza para eliminar las condiciones y obtener la tarjeta de 10
          a&ntilde;os &mdash; demostrando que el matrimonio fue genuino y no un arreglo para obtener la green card.
        </li>
      </ul>
      <p>
        Perder el plazo del I-751 puede poner al inmigrante en proceso de remoci&oacute;n, as&iacute; que la fecha de
        vencimiento de la tarjeta condicional debe ir en el calendario el mismo d&iacute;a en que llega. Cubrimos ese paso
        en nuestra gu&iacute;a sobre{' '}
        <Link href="/es/blog/remove-conditions-green-card-i-751-georgia">c&oacute;mo eliminar las condiciones de la green card con el Formulario I-751.</Link>
      </p>

      <h2>Plazos: qu&eacute; esperar</h2>
      <p>
        El proceso consular rara vez es r&aacute;pido, y el tiempo total depende en gran medida de la categor&iacute;a de
        visa y del pa&iacute;s de nacimiento del solicitante. A grandes rasgos, hay tres relojes corriendo:
      </p>
      <ol>
        <li><strong>El tr&aacute;mite de la petici&oacute;n</strong> en USCIS &mdash; meses, que var&iacute;an seg&uacute;n el tipo de formulario y la carga de trabajo;</li>
        <li>
          <strong>La espera por la disponibilidad de visa</strong> &mdash; casi inmediata para los familiares inmediatos,
          pero potencialmente a&ntilde;os para las categor&iacute;as con l&iacute;mite y una fecha de prioridad atrasada;
        </li>
        <li><strong>La programaci&oacute;n del NVC y del consulado</strong> &mdash; meses adicionales para la revisi&oacute;n de documentos, los pagos y la disponibilidad de entrevistas.</li>
      </ol>
      <p>
        Como estos plazos cambian y var&iacute;an seg&uacute;n el consulado, tome con cautela cualquier n&uacute;mero
        &uacute;nico que lea en l&iacute;nea. La estimaci&oacute;n m&aacute;s confiable surge de cruzar <em>su</em>{' '}
        categor&iacute;a y pa&iacute;s con el bolet&iacute;n de visas vigente y la programaci&oacute;n del consulado
        espec&iacute;fico &mdash; algo que una abogada puede hacer con los hechos de su caso.
      </p>

      <h2>Demoras comunes: RFE, 221(g) y procesamiento administrativo</h2>
      <p>
        La mayor&iacute;a de las demoras del proceso consular se deben a unos pocos problemas recurrentes:
      </p>
      <ul>
        <li>
          <strong>Documentos faltantes o inconsistentes.</strong> El atasco m&aacute;s com&uacute;n ocurre en el NVC,
          cuando los documentos civiles, las traducciones o la Declaraci&oacute;n Jurada de Manutenci&oacute;n est&aacute;n
          incompletos. El caso simplemente espera hasta que usted subsane la falta.
        </li>
        <li>
          <strong>Manutenci&oacute;n financiera insuficiente.</strong> Si los ingresos del peticionario no alcanzan el
          umbral requerido, el caso puede estancarse hasta que se agregue un copatrocinador que califique.
        </li>
        <li>
          <strong>Rechazos bajo 221(g).</strong> En la entrevista, un oficial puede emitir una notificaci&oacute;n bajo la
          Secci&oacute;n 221(g), lo que significa que el caso no est&aacute; ni aprobado ni negado &mdash; necesita
          documentos adicionales o m&aacute;s revisi&oacute;n antes de una decisi&oacute;n.
        </li>
        <li>
          <strong>Procesamiento administrativo.</strong> Algunos casos se retienen para verificaciones adicionales de
          antecedentes o seguridad despu&eacute;s de la entrevista, lo que puede sumar semanas o meses con poca visibilidad
          sobre el plazo.
        </li>
        <li>
          <strong>Problemas de inadmisibilidad.</strong> Violaciones migratorias previas, ciertos antecedentes penales o
          la presencia ilegal pueden activar un hallazgo de inadmisibilidad que tal vez requiera un{' '}
          <strong>perd&oacute;n (waiver)</strong> antes de que se pueda emitir la visa &mdash; uno de los asuntos m&aacute;s
          decisivos que conviene identificar <em>antes</em> de la entrevista, no en ella.
        </li>
      </ul>
      <p>
        Casi todos estos problemas son prevenibles o manejables con preparaci&oacute;n. Los solicitantes que avanzan
        m&aacute;s r&aacute;pido son los que presentan un expediente completo y consistente desde la primera vez y los que
        se&ntilde;alan cualquier preocupaci&oacute;n de admisibilidad con suficiente anticipaci&oacute;n para planificar en
        torno a ella.
      </p>

      <h2>Para los peticionarios en Georgia: su papel no termina con la petici&oacute;n</h2>
      <p>
        Si usted es el ciudadano o residente permanente en Georgia que inici&oacute; el caso, su participaci&oacute;n
        contin&uacute;a mucho m&aacute;s all&aacute; de presentar el I-130. Por lo general usted es el patrocinador
        financiero en la Declaraci&oacute;n Jurada de Manutenci&oacute;n, sus registros de impuestos e ingresos determinan
        si el caso supera el requisito de manutenci&oacute;n, y su rapidez para responder a las solicitudes del NVC afecta
        directamente la prontitud con que su familiar consigue una entrevista. La abogada <strong>Eszter Bardi</strong>{' '}
        tiene licencia en <strong>Georgia y Alabama</strong> y representa a los peticionarios aqu&iacute; mientras
        gu&iacute;a a sus familiares en cada paso en el extranjero &mdash; para que ambos extremos del caso permanezcan
        coordinados.
      </p>

      <h2>Por qu&eacute; trabajar con una abogada de proceso consular</h2>
      <p>
        El proceso consular parece una lista de tareas, pero los detalles deciden el resultado: los documentos correctos en
        el formato correcto, una Declaraci&oacute;n Jurada de Manutenci&oacute;n que realmente cumpla el umbral, un DS-260
        que coincida con la petici&oacute;n, un examen m&eacute;dico programado a tiempo y &mdash; por encima de todo
        &mdash; cualquier problema de admisibilidad detectado y resuelto antes de la entrevista en lugar de descubierto en
        ella. Una abogada con experiencia arma el expediente para que resista el escrutinio, prepara al solicitante para la
        entrevista y responde con rapidez cuando el NVC o el consulado piden m&aacute;s. Para las familias separadas por un
        oc&eacute;ano, esa preparaci&oacute;n es la diferencia entre meses y a&ntilde;os.
      </p>

      <h2>Hable con Eszter Bardi sobre el proceso consular</h2>
      <p>
        Ya sea que usted sea residente de Georgia patrocinando a un familiar en el extranjero o un empleador trayendo a un
        trabajador a EE. UU., la abogada <strong>Eszter Bardi</strong> puede guiar su caso a trav&eacute;s del tr&aacute;mite
        en el NVC, el DS-260, el examen m&eacute;dico y la entrevista consular &mdash; con acceso directo a la abogada, no a
        un especialista de admisi&oacute;n. Bardi Immigration Law atiende a clientes en todo{' '}
        <strong>Georgia y Alabama</strong> y trabaja con sus familiares dondequiera que est&eacute;n en el mundo.
      </p>
      <p>
        <strong>Agende una consulta hoy.</strong> Revisaremos la petici&oacute;n, cruzaremos su plazo con el bolet&iacute;n
        de visas y trazaremos un plan claro hasta la entrevista. Conozca m&aacute;s sobre nuestro trabajo en{' '}
        <Link href="/es/services/benefits-based-immigration">inmigraci&oacute;n basada en beneficios</Link> o{' '}
        <Link href="/es/contact">solicite una consulta en l&iacute;nea</Link>. Hablamos espa&ntilde;ol &mdash; atendemos a
        la comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este art&iacute;culo ofrece informaci&oacute;n legal general y no
          constituye asesor&iacute;a legal. La ley de inmigraci&oacute;n es compleja, depende de los hechos de cada caso y
          cambia con frecuencia. Los formularios, las tarifas, los requisitos de documentos y los tiempos de procesamiento
          cambian peri&oacute;dicamente y var&iacute;an seg&uacute;n la categor&iacute;a de visa, el pa&iacute;s y el
          consulado. Confirme los requisitos vigentes con USCIS, el Departamento de Estado de EE. UU. / el Centro Nacional
          de Visas, y la embajada o consulado de EE. UU. correspondiente, y consulte a una abogada de inmigraci&oacute;n con
          licencia para obtener orientaci&oacute;n espec&iacute;fica para su situaci&oacute;n.
        </em>
      </p>
    </div>
  );
}
