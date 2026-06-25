/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (cancelación de remoción para residentes permanentes legales bajo INA §240A(a); los tres elementos estatutarios — 5 años como residente permanente legal, 7 años de residencia continua tras la admisión en cualquier estatus, y ninguna condena por aggravated felony; la definición de aggravated felony bajo INA §101(a)(43) y los enfoques categórico/categórico modificado; la regla stop-time bajo INA §240A(d)(1) y Pereira v. Sessions, 585 U.S. 198 (2018) y Niz-Chavez v. Garland, 593 U.S. 155 (2021); el límite de una vez en la vida y la barra por concesión previa bajo §240A(c); el balance discrecional bajo Matter of C-V-T-, 22 I&N Dec. 7 (BIA 1998) y Matter of Marin, 16 I&N Dec. 581 (BIA 1978); la relación con la exención bajo INA §212(h) y la barra de aggravated-felony/7-años para LPR con su división de circuitos; la distinción de la cancelación para no residentes bajo §240A(b); el proceso de EOIR, el Formulario EOIR-42A, y las cortes de inmigración de Atlanta y Stewart). Estas reglas, jurisprudencia y procedimientos se litigan y cambian. Confirmar el estatuto vigente, los reglamentos, la jurisprudencia de la BIA/circuitos y la práctica de EOIR antes del go-live. Esta publicación deliberadamente NO promete ningún resultado — cada patrón de hechos requiere evaluación individual de un abogado. */
import Link from 'next/link';
// Adaptación al español de en/cancellation-of-removal-lpr-green-card-holder-georgia.tsx (BAR-873). Español natural, no traducción literal.

export const esTitle = 'Cancelación de Remoción para Residentes Permanentes en Georgia: La Regla de los 7 Años';
export const esDescription =
  'Una abogada de inmigración en Georgia explica la cancelación de remoción para residentes permanentes legales bajo INA §240A(a): los tres requisitos estatutarios — 5 años como residente, 7 años de residencia continua y ninguna condena por aggravated felony —, por qué la definición de aggravated felony decide la mayoría de los casos, la regla stop-time (Pereira/Niz-Chavez), la exención §212(h) y sus límites para LPR, el balance discrecional, el límite de una sola vez, y en qué se diferencia de la cancelación para no residentes bajo §240A(b). Información general, no asesoría legal.';

export function CancellationOfRemovalLprPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Tener una green card no lo hace inmune a la deportación. Cada año, residentes permanentes legales que
        han vivido en Georgia por décadas &mdash; personas con hijos ciudadanos estadounidenses, carreras
        consolidadas y raíces profundas en Atlanta, Gwinnett y Cobb &mdash; son colocados en procedimientos de
        remoción, casi siempre a causa de una condena penal. Para muchos de ellos, la defensa más importante de
        todas es la <strong>cancelación de remoción para residentes permanentes legales</strong> bajo la{' '}
        <strong>INA §240A(a)</strong>. Es el alivio que puede permitir que un titular de green card conserve su
        estatus y permanezca en el país.
      </p>
      <p>
        Esta guía explica los tres requisitos estatutarios de la cancelación para residentes, cómo se distingue
        de la versión para no residentes, por qué la definición de aggravated felony es el punto decisivo en la
        mayoría de los casos, cómo la regla stop-time puede descalificar silenciosamente a una persona antes de
        que lo note, y por qué el momento y una evaluación temprana por parte de un abogado importan tanto. Es
        información general, no asesoría legal. Si usted califica con sus hechos es una pregunta que solo un
        abogado de inmigración con experiencia puede responder tras una revisión completa.
      </p>

      <h2>¿Qué Es la Cancelación de Remoción para Residentes?</h2>
      <p>
        La cancelación de remoción para residentes es una forma de alivio disponible bajo la{' '}
        <strong>INA §240A(a)</strong> para personas que ya tienen una green card y que han sido colocadas en
        procedimientos de remoción. A diferencia de un beneficio que se solicita ante USCIS, es una defensa que
        usted plantea <em>dentro</em> de la corte de inmigración, ante un juez de inmigración, después de que el
        gobierno lo haya acusado de ser removible &mdash; por lo general bajo los motivos penales de
        deportabilidad. No puede solicitarla de forma preventiva. El caso comienza cuando el gobierno notifica
        un{' '}
        <Link href="/es/blog/notice-to-appear-georgia">Aviso de Comparecencia (NTA)</Link> y lo presenta ante la
        corte.
      </p>
      <p>
        Si un juez de inmigración concede la cancelación para residentes, el resultado es que los procedimientos
        de remoción se dan por terminados y la persona <strong>conserva su estatus de residente permanente
        legal</strong>. La green card no se retira. Esto es fundamentalmente distinto de la versión para no
        residentes, que otorga una green card a alguien que nunca la tuvo. Aquí, el objetivo es{' '}
        <em>preservar</em> un estatus que ya existe pero que está bajo amenaza.
      </p>

      <h2>Los Tres Requisitos Bajo la INA §240A(a)</h2>
      <p>
        Para calificar, un residente permanente debe probar <strong>los tres</strong> elementos siguientes.
        Fallar en cualquiera de ellos termina la elegibilidad.
      </p>

      <h3>1. Cinco Años como Residente Permanente Legal</h3>
      <p>
        Usted debe haber sido <strong>admitido legalmente para la residencia permanente durante al menos cinco
        años</strong>. Esto se mide desde la fecha en que se convirtió en titular de una green card &mdash; ya
        sea mediante el ajuste de estatus dentro de EE. UU. o la admisión con una visa de inmigrante desde el
        extranjero. La residencia permanente condicional (por ejemplo, una green card de dos años a través del
        matrimonio) generalmente cuenta para este período, siempre que el estatus se haya obtenido legalmente.
      </p>

      <h3>2. Siete Años de Residencia Continua Tras Cualquier Admisión Legal</h3>
      <p>
        Usted debe haber <strong>residido continuamente en los Estados Unidos durante siete años</strong>
        después de haber sido admitido en <em>cualquier</em> estatus &mdash; no solo como residente permanente.
        El reloj de los siete años puede empezar a correr desde una admisión legal anterior, como la entrada con
        una visa de estudiante o de trabajo, y continuar hasta la fecha en que se convirtió en residente
        permanente. Este es un punto clave: el requisito de cinco años como LPR y el requisito de siete años de
        residencia se miden de forma diferente y desde puntos de partida distintos, y a menudo se superponen.
        Una persona que entró con una visa F-1, luego ajustó a la residencia permanente, y ha vivido aquí de
        forma continua puede cumplir los siete años mucho antes de haber tenido la green card por cinco.
      </p>

      <h3>3. Ninguna Condena por Aggravated Felony</h3>
      <p>
        El solicitante <strong>nunca debe haber sido condenado por un aggravated felony</strong>. Esta es una
        barra absoluta. A diferencia de la mayoría de los demás motivos penales, no hay exención ni balance
        &mdash; una sola condena por aggravated felony, en cualquier momento, descalifica permanentemente a una
        persona de la cancelación para residentes. Debido a esto, todo el caso suele girar en torno a si una
        condena determinada es o no un aggravated felony bajo la ley de inmigración.
      </p>

      <h2>El Problema del Aggravated Felony</h2>
      <p>
        El término &ldquo;aggravated felony&rdquo; se define en la <strong>INA §101(a)(43)</strong> mediante una
        larga lista de categorías &mdash; homicidio, narcotráfico, tráfico de armas, lavado de dinero por encima
        de cierto umbral, fraude o pérdida fiscal superior a $10,000, un delito de violencia o un delito de robo
        con una sentencia de al menos un año, y muchas otras. La frase es profundamente engañosa: un delito no
        tiene que ser &ldquo;agravado&rdquo; y ni siquiera tiene que ser un &ldquo;felony&rdquo; bajo la ley de
        Georgia para calificar. Algunos delitos menores (misdemeanors) estatales son aggravated felonies para
        efectos migratorios, y algunos delitos que suenan graves no lo son.
      </p>
      <p>
        Si una condena en particular es un aggravated felony se decide mediante el{' '}
        <strong>enfoque categórico</strong> y, cuando el estatuto es divisible, el{' '}
        <strong>enfoque categórico modificado</strong> &mdash; el juez compara los elementos del delito estatal
        con la definición genérica federal, no lo que la persona realmente hizo. La duración de la sentencia{' '}
        <em>impuesta</em> (incluido el tiempo suspendido) con frecuencia determina si un delito de robo o
        violencia cruza el umbral de un año. Este es un análisis técnico y contraintuitivo, y es exactamente
        donde un abogado con experiencia se gana el caso. Una condena que el cliente daba por descalificadora a
        veces no lo es &mdash; y una declaración de culpabilidad que parecía inofensiva hace años a veces resulta
        fatal. Por eso, todo titular de green card con antecedentes penales debería leer sobre las{' '}
        <Link href="/es/blog/criminal-record-immigration-consequences-georgia">consecuencias migratorias de un
        antecedente penal en Georgia</Link> antes de asumir lo peor o lo mejor.
      </p>

      <h2>La Regla Stop-Time: Cuándo Se Detiene el Reloj de los Siete Años</h2>
      <p>
        Los siete años de residencia continua no corren para siempre. Bajo la <strong>INA §240A(d)(1)</strong>,
        el período de residencia se corta &mdash; el reloj se detiene &mdash; cuando ocurre cualquiera de dos
        cosas: (1) se le <strong>notifica un Aviso de Comparecencia legalmente suficiente</strong>, o (2) usted
        comete un delito calificador que lo hace removible o inadmisible, lo que detiene el reloj a partir de la
        fecha del delito.
      </p>
      <p>
        El detonante penal es lo que toma por sorpresa a la mayoría de los residentes permanentes. Si cometió el
        delito que dio lugar a sus procedimientos de remoción <em>antes</em> de haber acumulado siete años de
        residencia, el reloj se detuvo entonces &mdash; aun cuando hayan pasado muchos años más desde aquel
        momento. Un residente que entró, ajustó y luego fue condenado en el año seis no puede fabricar el séptimo
        año después de los hechos. Por eso, un conteo temprano y preciso de los siete años &mdash; medido hasta
        la fecha del delito, no hasta la fecha de la audiencia &mdash; es una de las primeras cosas que un
        abogado evalúa.
      </p>
      <p>
        El detonante del NTA tiene su propio cuerpo de jurisprudencia de la Corte Suprema. En{' '}
        <em>Pereira v. Sessions</em>, 585 U.S. 198 (2018), y{' '}
        <em>Niz-Chavez v. Garland</em>, 593 U.S. 155 (2021), la Corte sostuvo que un Aviso de Comparecencia que
        omite la fecha y el lugar de la audiencia no activa la regla stop-time, y que el gobierno no puede
        subsanar el defecto enviando la información faltante en un aviso posterior y separado. Donde el detonante
        del delito penal no haya detenido ya el reloj, un NTA deficiente a veces puede significar que se acumuló
        residencia adicional &mdash; un argumento que depende enteramente del NTA específico y de la cronología,
        y que requiere análisis legal.
      </p>

      <h2>Lo Que la Cancelación para Residentes No Requiere: La Distinción del Daño</h2>
      <p>
        Uno de los puntos de confusión más comunes es el daño. El exigente estándar de{' '}
        <strong>&ldquo;daño excepcional y extremadamente inusual&rdquo; (&ldquo;exceptional and extremely unusual
        hardship&rdquo;)</strong> &mdash; el elemento que decide la mayoría de los casos para no residentes
        &mdash; <strong>no aplica a la cancelación para residentes</strong>. La sección 240A(a) no tiene ningún
        requisito de daño. Un residente permanente no tiene que probar daño a un familiar calificado ciudadano
        estadounidense o LPR para ser elegible estatutariamente.
      </p>
      <p>
        Eso no significa que la familia y las equidades sean irrelevantes. Importan enormemente &mdash; pero en
        la etapa <em>discrecional</em>, no como elemento estatutario (que se aborda más adelante). El punto
        estructural es simple: la cancelación para no residentes se trata de probar un daño extraordinario; la
        cancelación para residentes se trata de los años de residencia y la naturaleza de cualquier antecedente
        penal. Lea nuestra guía complementaria sobre la{' '}
        <Link href="/es/blog/cancellation-of-removal-georgia">cancelación de remoción en Georgia</Link> para el
        panorama completo de cómo se relacionan ambas formas, y el análisis a fondo de la regla de los diez años
        para no residentes para conocer la vía impulsada por el daño.
      </p>

      <h2>Cancelación para Residentes vs. No Residentes de un Vistazo</h2>
      <ul>
        <li>
          <strong>Para quién es:</strong> Cancelación para residentes &mdash; titulares de green card. Cancelación
          para no residentes &mdash; personas indocumentadas o fuera de estatus.
        </li>
        <li>
          <strong>Requisito de tiempo:</strong> Residentes &mdash; 5 años como LPR <em>más</em> 7 años de
          residencia continua tras cualquier admisión. No residentes &mdash; 10 años de presencia física
          continua.
        </li>
        <li>
          <strong>Daño:</strong> Residentes &mdash; ninguno requerido. No residentes &mdash; daño excepcional y
          extremadamente inusual a un familiar calificado.
        </li>
        <li>
          <strong>Barra penal:</strong> Residentes &mdash; ningún aggravated felony, jamás. No residentes &mdash;
          buen carácter moral más las barras de §240A(b)(1)(C).
        </li>
        <li>
          <strong>Resultado:</strong> Residentes &mdash; conservar la green card que ya tiene. No residentes
          &mdash; recibir una green card que nunca tuvo.
        </li>
      </ul>

      <h2>La Exención §212(h) y Sus Límites para los LPR</h2>
      <p>
        La cancelación no es la única herramienta para un residente permanente con un problema penal. La exención
        de la <strong>INA §212(h)</strong> puede perdonar ciertos delitos &mdash; muchos delitos de vileza moral
        (moral turpitude), una sola infracción menor de marihuana, y otros &mdash; y a menudo se combina con un
        ajuste de estatus renovado. Pero la §212(h) acarrea sus propias trampas específicas para los LPR: por
        estatuto, una persona que fue <em>admitida</em> como residente permanente legal queda excluida de la
        §212(h) si fue condenada por un aggravated felony desde esa admisión, o si carece de siete años de
        residencia continua legal. Los tribunales están divididos sobre si esa barra aplica a alguien que se
        convirtió en LPR mediante el <em>ajuste de estatus</em> en lugar de la admisión en la frontera &mdash; la
        mayoría de los circuitos, incluido el Undécimo Circuito que rige en Georgia, han lidiado con esta
        cuestión, y la respuesta puede cambiar por completo la estrategia de un caso. Si conviene buscar la
        cancelación, una exención §212(h), o ambas, es una decisión estratégica que depende de la condena
        específica y del historial migratorio.
      </p>

      <h2>Discreción: La Elegibilidad No Es lo Mismo que una Concesión</h2>
      <p>
        Aun cuando un residente permanente cumple los tres requisitos estatutarios, la cancelación para
        residentes es <strong>discrecional</strong>. El juez de inmigración sopesa los factores favorables contra
        los adversos, como la BIA describió en <em>Matter of C-V-T-</em>, 22 I&amp;N Dec. 7 (BIA 1998), y{' '}
        <em>Matter of Marin</em>, 16 I&amp;N Dec. 581 (BIA 1978). Los factores favorables incluyen la residencia
        prolongada, los vínculos familiares con ciudadanos estadounidenses y residentes permanentes, el daño a la
        familia, el empleo estable, los vínculos de propiedad y de negocios, el servicio militar, la evidencia de
        rehabilitación, y el arraigo en la comunidad. Los factores adversos incluyen la naturaleza y gravedad del
        delito, antecedentes penales adicionales, y otra conducta negativa. Mientras más grave sea la condena
        subyacente, más sólida debe ser la evidencia de rehabilitación y de equidades para ganar el balance
        discrecional. Aquí es donde la historia de la familia y del daño &mdash; no requerida para la
        elegibilidad &mdash; se vuelve central para realmente prevalecer.
      </p>

      <h2>El Límite de una Sola Vez en la Vida</h2>
      <p>
        La cancelación de remoción solo puede concederse <strong>una vez</strong>. Bajo la INA §240A(c), una
        persona que previamente recibió la cancelación (o su predecesor, el alivio bajo la §212(c)) queda excluida
        de recibirla de nuevo. Una concesión es un único reinicio, no una defensa renovable &mdash; otra razón
        por la cual el caso debe prepararse correctamente la primera vez.
      </p>

      <h2>El Momento Estratégico y la Corte de Inmigración de Atlanta</h2>
      <p>
        La cancelación para residentes se presenta en el <strong>Formulario EOIR-42A</strong> y la decide la
        Oficina Ejecutiva de Revisión de Inmigración (EOIR), no USCIS. En Georgia, los demandados no detenidos
        generalmente comparecen ante la{' '}
        <Link href="/es/blog/georgia-immigration-courts-atlanta-gwinnett-dekalb-stewart-guide">Corte de
        Inmigración de Atlanta</Link>, mientras que los demandados detenidos suelen ser atendidos en la Corte de
        Inmigración de Stewart en Lumpkin &mdash; y muchos residentes permanentes que enfrentan motivos penales
        están detenidos, lo que comprime el calendario de manera dramática.
      </p>
      <p>
        El momento es crítico por dos razones. Primero, el análisis stop-time debe hacerse temprano: la cuestión
        de si los siete años se habían acumulado antes del delito descalificador o del NTA a menudo decide la
        elegibilidad de plano, y debería responderse antes de hacer cualquier concesión en la corte. Segundo, el
        expediente probatorio &mdash; prueba de residencia, vínculos familiares, rehabilitación, empleo y
        equidades &mdash; toma tiempo para reunirse, y en los casos de personas detenidas la corte no esperará.
        Plantear la cancelación temprano, preservar los argumentos correctos, y evitar admisiones que reconozcan
        un aggravated felony son decisiones que se toman mejor en la primera audiencia de calendario general
        (master calendar), con un abogado ya involucrado. Estos casos están en el núcleo de la{' '}
        <Link href="/es/blog/deportation-defense-removal-proceedings-georgia">defensa contra la deportación en
        procedimientos de remoción</Link>.
      </p>

      <h2>Por Qué Estos Casos Requieren un Abogado</h2>
      <p>
        La cancelación para residentes vive en la intersección más difícil del derecho penal y el migratorio. La
        cuestión del aggravated felony requiere aplicar el enfoque categórico a una condena específica de Georgia.
        El conteo stop-time debe medirse hasta la fecha correcta. La interacción con la §212(h) involucra una
        cuestión de circuitos sin resolver. Y el balance discrecional debe construirse con evidencia de
        rehabilitación y de equidades, frente a un abogado del gobierno que argumenta a favor de la remoción en
        cada paso. Un paso en falso en la primera audiencia &mdash; reconocer la removibilidad por el motivo
        equivocado, o admitir hechos que establezcan un aggravated felony &mdash; puede cerrar la única defensa
        disponible.
      </p>
      <p>
        Si está sopesando este tipo de defensa y quiere entender qué debe buscar un abogado calificado, lea
        nuestra guía sobre{' '}
        <Link href="/es/blog/how-to-choose-immigration-attorney-georgia">cómo elegir un abogado de inmigración en
        Georgia</Link>.
      </p>

      <h2>Hable con Bardi Immigration Law</h2>
      <p>
        Si usted es titular de una green card y enfrenta procedimientos de remoción en Georgia o Alabama &mdash;
        especialmente a causa de una condena penal &mdash; la cancelación de remoción para residentes puede ser
        la defensa que le permita conservar su estatus, pero la ventana para contar los años correctamente y
        preservar sus argumentos es estrecha. La abogada <strong>Eszter Bardi</strong> representa a clientes ante
        las cortes de inmigración de Atlanta y Stewart, tiene licencia en <strong>Georgia y Alabama</strong>, y
        brinda acceso directo a la abogada. Usted habla con su abogada, no con un asistente legal ni un
        coordinador de admisiones.
      </p>
      <p>
        <Link href="/es/contact">Programe una consulta hoy.</Link>
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación de blog es solo para fines informativos y no
          constituye asesoría legal. La cancelación de remoción para residentes permanentes legales bajo la INA
          §240A(a) es una defensa compleja y específica a los hechos, regida por estatuto, reglamentos y
          precedentes en evolución de la BIA y de los tribunales de circuito &mdash; en particular la definición
          de aggravated felony y la interacción con la §212(h). La elegibilidad y el resultado discrecional
          dependen enteramente de las circunstancias individuales, incluidos los antecedentes penales y los años
          de residencia. Consulte a un abogado de inmigración con licencia sobre su situación específica.
        </em>
      </p>
    </div>
  );
}
