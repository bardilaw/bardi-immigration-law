/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (la visa de no inmigrante O-1 para personas de habilidad extraordinaria: la categoría O-1A para ciencias, educación, negocios y atletismo frente a la O-1B para las artes y para logros extraordinarios en cine/televisión, el estándar de "aclamación nacional o internacional sostenida", los ocho criterios probatorios de la O-1A y el estándar de "distinción" de la O-1B, la opinión consultiva escrita requerida, el requisito de un empleador o agente peticionario en EE. UU., las clasificaciones O-2 de personal de apoyo y O-3 de dependientes, el período inicial de hasta tres años y las extensiones de un año, y la vía hacia la green card EB-1A) que pueden cambiar. Confirmar formularios, tarifas, criterios y procedimientos vigentes con USCIS antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/o1-visa-extraordinary-ability-georgia.tsx (BAR-807). Español natural, no traducción literal.

export const esTitle = 'Visa O-1 de Habilidad Extraordinaria: Guía para Georgia';
export const esDescription =
  'Una abogada de inmigración en Georgia explica la visa O-1: las categorías O-1A y O-1B, los ocho criterios, la opinión consultiva, el peticionario o agente en EE. UU. y la vía hacia la green card EB-1A.';

export function O1VisaExtraordinaryAbilityPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Georgia se ha convertido silenciosamente en un im&aacute;n para el tipo de talento para el que se cre&oacute; la{' '}
        <strong>visa O-1</strong>. La industria de cine y televisi&oacute;n del estado &mdash; una de las m&aacute;s
        grandes del pa&iacute;s &mdash; atrae a directores, directores de fotograf&iacute;a, actores y t&eacute;cnicos
        extranjeros. El corredor tecnol&oacute;gico de Atlanta recluta a ingenieros y fundadores de clase mundial.
        Universidades como Georgia Tech, Emory y UGA acogen a investigadores destacados, y la regi&oacute;n atrae a
        atletas, m&uacute;sicos y ejecutivos de &eacute;lite. Para el peque&ntilde;o grupo de personas que est&aacute;n
        en la cima de estos campos, la visa O-1 &mdash; para personas de{' '}
        <strong>habilidad o logro extraordinario</strong> &mdash; suele ser la mejor, y a veces la &uacute;nica, forma
        de trabajar legalmente en Estados Unidos.
      </p>
      <p>
        &ldquo;Extraordinario&rdquo; aqu&iacute; es un <strong>t&eacute;rmino legal, no una autoevaluaci&oacute;n.</strong>{' '}
        No significa que usted tenga talento o &eacute;xito; significa que puede demostrar, con categor&iacute;as
        espec&iacute;ficas de evidencia, que se encuentra entre el peque&ntilde;o porcentaje en la cima de su campo. Esa
        carga probatoria es exactamente la raz&oacute;n por la que la O-1 es una de las visas que m&aacute;s dependen de
        una abogada en el derecho migratorio estadounidense. Esta gu&iacute;a explica las dos categor&iacute;as de la
        O-1, los est&aacute;ndares que debe cumplir, la evidencia que USCIS realmente toma en cuenta, las
        clasificaciones de apoyo y de familia, y c&oacute;mo la O-1 se conecta con una green card permanente.
      </p>

      <h2>O-1A frente a O-1B: dos categor&iacute;as, dos est&aacute;ndares</h2>
      <p>
        La visa O-1 se divide en dos subclasificaciones, y la que aplique a su caso determina el est&aacute;ndar legal y
        la evidencia que debe reunir:
      </p>
      <ul>
        <li>
          <strong>O-1A &mdash; ciencias, educaci&oacute;n, negocios o atletismo.</strong> Cubre a cient&iacute;ficos,
          investigadores, profesores, empresarios, ejecutivos, ingenieros de software y atletas. El est&aacute;ndar es{' '}
          <strong>habilidad extraordinaria</strong> demostrada mediante una &ldquo;aclamaci&oacute;n nacional o
          internacional sostenida.&rdquo;
        </li>
        <li>
          <strong>O-1B &mdash; las artes, o el cine y la televisi&oacute;n.</strong> Cubre a actores, directores,
          m&uacute;sicos, dise&ntilde;adores, artistas pl&aacute;sticos y personal de cine/TV. Para las{' '}
          <strong>artes</strong>, el est&aacute;ndar es la <strong>distinci&oacute;n</strong>; para la{' '}
          <strong>industria del cine y la televisi&oacute;n</strong>, es el
          <strong> logro extraordinario</strong> &mdash; un list&oacute;n notablemente m&aacute;s alto que la
          &ldquo;distinci&oacute;n.&rdquo;
        </li>
      </ul>
      <p>
        Elegir la categor&iacute;a equivocada, o aplicar el est&aacute;ndar incorrecto a su evidencia, es una de las
        razones m&aacute;s comunes por las que se niega a solicitantes s&oacute;lidos. Un compositor de cine, por
        ejemplo, puede encajar en la v&iacute;a de las artes o en la del cine seg&uacute;n el trabajo &mdash; y los
        est&aacute;ndares no son los mismos.
      </p>

      <h2>El est&aacute;ndar de habilidad extraordinaria (O-1A)</h2>
      <p>
        Para la O-1A, debe demostrar una <strong>aclamaci&oacute;n nacional o internacional sostenida</strong> y
        reconocimiento por sus logros en su campo. Puede cumplir esto de dos maneras. La primera es un solo{' '}
        <strong>premio mayor reconocido internacionalmente</strong> &mdash; un Premio Nobel, una medalla
        ol&iacute;mpica o algo de prestigio comparable. Casi nadie califica por esta v&iacute;a.
      </p>
      <p>
        El camino realista es el segundo: cumplir al menos <strong>tres de ocho criterios reglamentarios</strong>. Son
        los siguientes:
      </p>
      <ul>
        <li>Recibir premios o galardones reconocidos nacional o internacionalmente por la excelencia;</li>
        <li>Pertenecer a asociaciones que exigen logros sobresalientes, seg&uacute;n el juicio de expertos reconocidos;</li>
        <li>Material publicado sobre usted en publicaciones profesionales o comerciales importantes o en medios de gran difusi&oacute;n;</li>
        <li>Participar como juez del trabajo de otros en su campo (revisi&oacute;n por pares, jurado de competencias, etc.);</li>
        <li>Contribuciones originales cient&iacute;ficas, acad&eacute;micas o empresariales de gran trascendencia;</li>
        <li>Autor&iacute;a de art&iacute;culos acad&eacute;micos en revistas profesionales o medios importantes;</li>
        <li>Desempe&ntilde;arse en una funci&oacute;n cr&iacute;tica o esencial para organizaciones de reputaci&oacute;n distinguida; y</li>
        <li>Percibir un salario alto u otra remuneraci&oacute;n, demostrado mediante contratos u otra evidencia confiable.</li>
      </ul>
      <p>
        Cumplir tres casillas en el papel no basta. Tras un cambio de pol&iacute;tica en 2020, USCIS aplica un{' '}
        <strong>an&aacute;lisis de dos pasos</strong>: primero cuenta si usted cumple al menos tres criterios, y luego
        da un paso atr&aacute;s y sopesa la evidencia <strong>en su conjunto</strong> para decidir si realmente
        demuestra que usted est&aacute; entre los mejores de su campo. La evidencia escasa o gen&eacute;rica que
        t&eacute;cnicamente marca tres casillas suele fallar en este segundo paso. Construir un expediente que supere
        ambos pasos &mdash; con cartas de expertos, documentaci&oacute;n y el enfoque adecuado &mdash; es el coraz&oacute;n
        del trabajo legal.
      </p>

      <h2>El est&aacute;ndar O-1B: la &ldquo;distinci&oacute;n&rdquo; en las artes</h2>
      <p>
        Para los artistas, el est&aacute;ndar es la <strong>distinci&oacute;n</strong> &mdash; definida como un alto
        nivel de logro evidenciado por un grado de destreza y reconocimiento{' '}
        <strong>sustancialmente superior al que se encuentra normalmente</strong>, de modo que usted sea reconocido,
        l&iacute;der o muy conocido en su campo. Es un list&oacute;n significativo, pero m&aacute;s bajo que el
        est&aacute;ndar de &ldquo;habilidad extraordinaria&rdquo; de la O-1A, lo que refleja c&oacute;mo la
        aclamaci&oacute;n funciona de manera distinta en los campos creativos.
      </p>
      <p>
        Puede calificar demostrando una nominaci&oacute;n a un <strong>premio mayor</strong> o la obtenci&oacute;n de
        este (un Premio de la Academia, un Emmy, un Grammy o un premio del Sindicato de Directores), o cumpliendo al
        menos <strong>tres de seis criterios</strong> &mdash; por ejemplo, papeles principales o protag&oacute;nicos en
        producciones distinguidas, reconocimiento nacional o internacional a trav&eacute;s de rese&ntilde;as
        cr&iacute;ticas, un historial de &eacute;xito comercial mayor o aclamado por la cr&iacute;tica, reconocimiento de
        organizaciones y cr&iacute;ticos, y un salario alto. Las producciones de cine y TV de Georgia hacen de la O-1B
        una opci&oacute;n natural para muchos <strong>artistas y t&eacute;cnicos extranjeros</strong> que trabajan en
        proyectos rodados en el &aacute;rea metropolitana de Atlanta y en todo el estado.
      </p>

      <h2>Encontrar un peticionario o agente en EE. UU.</h2>
      <p>
        Aqu&iacute; hay una diferencia cr&iacute;tica respecto a la green card EB-1A:{' '}
        <strong>usted no puede autopeticionarse para una O-1.</strong> La petici&oacute;n debe presentarla un{' '}
        <strong>empleador</strong> en EE. UU. o un <strong>agente</strong> en EE. UU. La opci&oacute;n del agente es lo
        que hace que la O-1 sea viable para trabajadores independientes y artistas que trabajan por proyectos: un solo
        agente puede presentar una petici&oacute;n que cubra el trabajo para{' '}
        <strong>varios empleadores o compromisos</strong>, algo com&uacute;n en el cine, la m&uacute;sica y el atletismo,
        donde una persona trabaja de proyecto en proyecto en lugar de para una sola empresa.
      </p>
      <p>
        Casi toda O-1 requiere adem&aacute;s una <strong>opini&oacute;n consultiva (consulta)</strong> escrita de un
        grupo de pares, una organizaci&oacute;n laboral o una organizaci&oacute;n de gesti&oacute;n de su campo. En los
        casos de artes y entretenimiento, esta suele provenir de un gremio o sindicato pertinente; la opini&oacute;n se
        pronuncia sobre sus calificaciones y la naturaleza del trabajo. Conseguir la entidad consultora adecuada, y el
        itinerario correcto de eventos o compromisos, es parte de por qu&eacute; estas peticiones se construyen, no
        simplemente se presentan.
      </p>

      <h2>Personal de apoyo O-2 y familia O-3</h2>
      <p>
        Dos clasificaciones relacionadas completan la O-1:
      </p>
      <ul>
        <li>
          <strong>O-2 &mdash; personal de apoyo esencial.</strong> Para personas que acompa&ntilde;an a un atleta o
          artista O-1 para asistir en un evento o presentaci&oacute;n espec&iacute;ficos, cuando poseen habilidades y
          experiencia cr&iacute;ticas que son parte integral del trabajo del O-1 y que no est&aacute;n
          f&aacute;cilmente disponibles en EE. UU. (piense en un entrenador de muchos a&ntilde;os, un t&eacute;cnico
          especializado o un m&uacute;sico de acompa&ntilde;amiento). La O-2 <strong>no</strong> est&aacute; disponible
          para las categor&iacute;as O-1A de ciencias, educaci&oacute;n o negocios.
        </li>
        <li>
          <strong>O-3 &mdash; c&oacute;nyuge e hijos.</strong> El c&oacute;nyuge y los hijos solteros menores de 21
          a&ntilde;os del titular de la O-1 (u O-2) pueden venir como dependientes O-3. <strong>Pueden estudiar</strong>{' '}
          en EE. UU., pero <strong>no pueden trabajar</strong> con el estatus O-3.
        </li>
      </ul>

      <h2>Duraci&oacute;n, extensiones e intenci&oacute;n dual</h2>
      <p>
        Una O-1 se otorga por el tiempo necesario para completar el evento o la actividad, hasta un m&aacute;ximo de{' '}
        <strong>tres a&ntilde;os</strong> inicialmente. Despu&eacute;s de eso, puede extenderse en incrementos de hasta{' '}
        <strong>un a&ntilde;o</strong> a la vez para continuar o completar el mismo evento o actividad &mdash; y a
        diferencia de algunas visas, <strong>no hay un l&iacute;mite fijo</strong> en el n&uacute;mero de extensiones,
        de modo que muchas personas mantienen el estatus O-1 durante a&ntilde;os. Cada extensi&oacute;n sigue exigiendo
        demostrar que el trabajo en curso la justifica.
      </p>
      <p>
        La O-1 tambi&eacute;n trata de forma favorable la <strong>intenci&oacute;n de inmigrar</strong>: buscar una
        green card no lo hace, por s&iacute; solo, inelegible ni socava una petici&oacute;n o extensi&oacute;n de O-1.
        Eso convierte a la O-1 en un puente c&oacute;modo mientras un caso de residencia permanente est&aacute;
        pendiente.
      </p>

      <h2>La v&iacute;a hacia la green card: EB-1A</h2>
      <p>
        Para muchos titulares de la O-1A, el objetivo natural a largo plazo es la <strong>green card EB-1A</strong> para
        personas de habilidad extraordinaria. Ambas comparten gran parte del mismo vocabulario y un marco probatorio
        similar &mdash; y, de manera crucial, <strong>la EB-1A permite la autopetici&oacute;n</strong> sin necesidad de
        un empleador. Un expediente O-1, construido con cuidado, a menudo se convierte en la base de una petici&oacute;n
        EB-1A. (Para el panorama completo de las categor&iacute;as de green card por empleo, incluyendo la EB-1A, la
        Exenci&oacute;n por Inter&eacute;s Nacional EB-2 y la EB-3, consulte nuestra{' '}
        <Link href="/es/blog/employment-based-green-card-eb1-eb2-eb3-georgia">
          gu&iacute;a sobre las green cards basadas en el empleo en Georgia
        </Link>
        .) Los est&aacute;ndares no son id&eacute;nticos &mdash; la EB-1A es un beneficio permanente y se examina en
        consecuencia &mdash; de modo que una O-1 s&oacute;lida no garantiza una EB-1A. Pero las dos encajan entre
        s&iacute;, y planificar la green card desde el inicio de la O-1 es mucho m&aacute;s eficaz que empezar de cero
        m&aacute;s tarde.
      </p>

      <h2>Por qu&eacute; la O-1 necesita una abogada</h2>
      <p>
        La O-1 premia la documentaci&oacute;n y castiga la improvisaci&oacute;n. La visa se sostiene o se cae
        seg&uacute;n si su evidencia, vista en conjunto, convence a un oficial esc&eacute;ptico de USCIS de que usted
        ocupa la cima de su campo &mdash; y ese juicio depende de elegir la categor&iacute;a correcta, reunir y enmarcar
        los criterios adecuados, conseguir cartas cre&iacute;bles de expertos y de consulta, estructurar la
        relaci&oacute;n con el peticionario o agente, y armar un itinerario coherente. Las peticiones d&eacute;biles o
        gen&eacute;ricas provocan extensas Solicitudes de Evidencia y negaciones incluso cuando la persona realmente
        califica. El trabajo de una abogada es convertir un logro real en un expediente que cumpla con el
        est&aacute;ndar legal.
      </p>

      <h2>Hable con Eszter Bardi sobre su visa O-1</h2>
      <p>
        Ya sea que usted sea director o t&eacute;cnico en una producci&oacute;n de cine en Georgia, fundador de una
        startup o ingeniero en el ecosistema tecnol&oacute;gico de Atlanta, investigador en una universidad de Georgia,
        o un atleta o artista construyendo una carrera en EE. UU., la abogada <strong>Eszter Bardi</strong> puede
        evaluar si la O-1A o la O-1B encaja, identificar la evidencia que realmente sostendr&aacute; su caso, y trazar
        el camino hacia una green card EB-1A. Bardi Immigration Law atiende a clientes en todo Georgia &mdash; con acceso
        directo a la abogada, no a un especialista de admisi&oacute;n.
      </p>
      <p>
        <strong>Agende una consulta hoy.</strong> Evaluaremos su campo y sus logros frente al est&aacute;ndar de la O-1,
        identificaremos la evidencia m&aacute;s s&oacute;lida y construiremos la petici&oacute;n bien desde la primera
        vez.{' '}
        <Link href="/es/contact">Solicite una consulta en l&iacute;nea</Link>. Hablamos espa&ntilde;ol &mdash; atendemos
        a la comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este art&iacute;culo ofrece informaci&oacute;n legal general y no
          constituye asesor&iacute;a legal. La ley de inmigraci&oacute;n es compleja, depende de los hechos de cada caso
          y cambia con frecuencia &mdash; los est&aacute;ndares probatorios, los formularios, las tarifas y los tiempos
          de procesamiento cambian con el tiempo. Confirme los formularios, las tarifas, los plazos y los requisitos de
          elegibilidad vigentes en el sitio web de USCIS y consulte a una abogada de inmigraci&oacute;n con licencia
          para obtener orientaci&oacute;n espec&iacute;fica para su caso.
        </em>
      </p>
    </div>
  );
}
