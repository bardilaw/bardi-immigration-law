/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (el requisito de presencia física de dos años en el país de origen para visitantes de intercambio J-1 bajo INA §212(e), y las cinco bases estatutarias de exención en INA §212(e), 22 CFR 41.63 y 8 CFR 212.7: la Carta de No Objeción del gobierno de origen (no disponible para médicos que vinieron por educación médica de posgrado), la solicitud de una Agencia Gubernamental Interesada (IGA), la exención por persecución, la exención por dificultad excepcional para un cónyuge o hijo ciudadano o residente permanente (Formulario I-612), y el programa Conrad State 30 bajo INA §214(l) para médicos; las categorías que activan §212(e) — educación o capacitación médica de posgrado, programas financiados por el gobierno de EE. UU. o de origen, y campos en la Lista de Habilidades del Visitante de Intercambio (Skills List); la barra a visas H, L y K, visas de inmigrante y ajuste de estatus hasta cumplir dos años de presencia física en el país de origen; la solicitud DS-3035 ante la División de Revisión de Exenciones del Departamento de Estado, la recomendación del DOS y la adjudicación final de USCIS; los requisitos de Conrad 30 — empleo H-1B a tiempo completo durante tres años en una instalación que sirve a un HPSA, MUA o MUP, los cupos FLEX, y que Georgia administra el programa a través del Departamento de Salud Comunitaria de Georgia (DCH); ECFMG como patrocinador J-1 de graduados médicos extranjeros; y el vínculo con las vías H-1B y green card basada en empleo). NOTA: El número anual de cupos Conrad 30, las reglas FLEX, las áreas de escasez designadas y qué condados de Georgia tienen cupos abiertos, la Lista de Habilidades, los formularios, las tarifas y los tiempos de procesamiento cambian y son específicos a los hechos. Confirmar los requisitos vigentes y la disponibilidad de cupos con el Departamento de Salud Comunitaria de Georgia, USCIS y el Departamento de Estado de EE. UU. antes del go-live y para cualquier caso individual. */
import Link from 'next/link';
// Adaptación al español de en/j1-visa-two-year-home-residency-requirement-waiver-georgia.tsx (BAR-855). Español natural, no traducción literal.

export const esTitle =
  'Exención de la Visa J-1 en Georgia: Cómo Superar el Requisito de Dos Años en el País de Origen';
export const esDescription =
  'Una abogada de inmigración en Georgia explica el requisito de presencia física de dos años en el país de origen de la visa J-1 bajo INA §212(e): quién está realmente sujeto, qué bloquea de verdad (visas H, L, K y la green card), las cinco bases de exención, y por qué el programa Conrad 30 suele ser la mejor vía para los médicos que se forman en Georgia, además de cómo funcionan el DS-3035 y el proceso ante el Departamento de Estado y USCIS. Información general, no asesoría legal.';

export function J1VisaWaiverPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Si llegó a los Estados Unidos con una <strong>visa de visitante de intercambio J-1</strong> &mdash; con
        mayor frecuencia para completar una residencia o subespecialidad médica &mdash; puede haber descubierto una
        cláusula que amenaza sus planes de quedarse: el <strong>requisito de presencia física de dos años en el
        país de origen</strong> bajo <strong>INA &sect;212(e)</strong>. Establece que, antes de poder pasar a una
        visa de trabajo H-1B, una visa L, una visa K de prometido(a) o una green card, primero debe regresar a su
        país de origen y vivir allí durante dos años. Para un médico internacional que termina una residencia en
        Georgia con una oferta de trabajo en mano, esa regla puede sentirse como un muro.
      </p>
      <p>
        No es un muro. El Congreso incorporó <strong>cinco vías de exención independientes</strong> en la ley, y
        para los médicos formados en Georgia, el <strong>programa Conrad 30</strong> suele ser la salida más
        limpia. Esta gu&iacute;a explica qui&eacute;n est&aacute; realmente sujeto al requisito, qu&eacute;
        significa de verdad y c&oacute;mo funciona cada exenci&oacute;n &mdash; con &eacute;nfasis en la
        exenci&oacute;n para m&eacute;dicos que mantiene a los doctores ejerciendo en las comunidades desatendidas
        de Georgia.
      </p>

      <h2>Qui&eacute;n Est&aacute; Sujeto al Requisito de Dos A&ntilde;os</h2>
      <p>
        No todo visitante J-1 est&aacute; sujeto a la &sect;212(e). Queda atrapado(a) por ella si alguna de estas
        situaciones aplica a su programa:
      </p>
      <ul>
        <li>
          <strong>Educaci&oacute;n o capacitaci&oacute;n m&eacute;dica de posgrado.</strong> Los m&eacute;dicos
          extranjeros que vienen a EE. UU. para una residencia o subespecialidad a trav&eacute;s de{' '}
          <strong>ECFMG</strong> (la Comisi&oacute;n Educativa para Graduados M&eacute;dicos Extranjeros, el
          &uacute;nico patrocinador J-1 de la capacitaci&oacute;n m&eacute;dica cl&iacute;nica) est&aacute;n{' '}
          <strong>sujetos autom&aacute;ticamente</strong> &mdash; no hay forma de evitar el disparador en
          s&iacute; mismo, solo la exenci&oacute;n.
        </li>
        <li>
          <strong>Programas financiados por el gobierno.</strong> Si su intercambio fue financiado por el gobierno
          de EE. UU. o por el gobierno de su pa&iacute;s de origen, aunque sea en parte, est&aacute; sujeto(a).
        </li>
        <li>
          <strong>La Lista de Habilidades del Visitante de Intercambio (Skills List).</strong> Si su campo de
          conocimiento o habilidad especializada aparece en la entrada de su pa&iacute;s de origen en la Lista de
          Habilidades del Departamento de Estado, est&aacute; sujeto(a).
        </li>
      </ul>
      <p>
        Su sello de visa J-1 y su DS-2019 suelen indicar si aplica la &sect;212(e), pero esa anotaci&oacute;n es
        solo una determinaci&oacute;n preliminar y a veces es incorrecta. Una determinaci&oacute;n definitiva
        &mdash; una <strong>opini&oacute;n consultiva (advisory opinion)</strong> del Departamento de Estado
        &mdash; suele ser el primer paso en el caso de un m&eacute;dico, porque todo lo que sigue depende de si el
        requisito realmente se le aplica. Los <strong>dependientes J-2</strong> (un c&oacute;nyuge e hijos)
        est&aacute;n sujetos al mismo requisito que el titular principal J-1.
      </p>

      <h2>Qu&eacute; Significa Realmente el Requisito</h2>
      <p>
        La regla <em>no</em> lo deporta, y no le proh&iacute;be por completo el ingreso a los Estados Unidos. Lo
        que hace es bloquear cuatro cosas espec&iacute;ficas hasta que haya estado{' '}
        <strong>f&iacute;sicamente presente en su pa&iacute;s de origen (o pa&iacute;s de &uacute;ltima
        residencia) por un total de dos a&ntilde;os</strong>:
      </p>
      <ul>
        <li>Una visa <strong>H</strong> (incluida la H-1B que la mayor&iacute;a de los m&eacute;dicos necesita para seguir trabajando aqu&iacute;);</li>
        <li>Una visa <strong>L</strong> de transferencia dentro de la misma empresa;</li>
        <li>Una visa <strong>K</strong> de prometido(a); y</li>
        <li>
          La <strong>residencia permanente</strong> &mdash; tanto una visa de inmigrante en el extranjero como el{' '}
          <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajuste de estatus</Link> dentro de EE. UU.
        </li>
      </ul>
      <p>
        Los dos a&ntilde;os deben transcurrir en su pa&iacute;s de origen &mdash; el tiempo en un tercer
        pa&iacute;s no cuenta, y el reloj puede cumplirse por partes en lugar de todo de una vez. Hasta que
        complete esos dos a&ntilde;os u obtenga una exenci&oacute;n, la puerta a una H-1B y a una green card
        permanece cerrada. Por eso, para un m&eacute;dico con una oferta de un hospital de Georgia, la
        exenci&oacute;n no es opcional &mdash; lo es todo.
      </p>

      <h2>El Programa Conrad 30: La Mejor V&iacute;a del M&eacute;dico en Georgia</h2>
      <p>
        El <strong>programa Conrad State 30</strong> (llamado as&iacute; por su impulsor y codificado en{' '}
        <strong>INA &sect;214(l)</strong>) es la exenci&oacute;n m&aacute;s importante para los doctores formados
        en el extranjero. Cada estado recibe hasta <strong>30 cupos de exenci&oacute;n por a&ntilde;o fiscal
        federal</strong>, y en Georgia el programa lo administra el <strong>Departamento de Salud Comunitaria de
        Georgia (Georgia Department of Community Health, DCH)</strong>.
      </p>
      <p>
        A cambio de la exenci&oacute;n, el m&eacute;dico se compromete a:
      </p>
      <ul>
        <li>
          Trabajar <strong>a tiempo completo (al menos 40 horas por semana)</strong> en{' '}
          <strong>estatus H-1B</strong> durante <strong>tres a&ntilde;os</strong>;
        </li>
        <li>
          Ejercer en una instalaci&oacute;n que sirve a un &aacute;rea de escasez designada a nivel federal &mdash;
          un <strong>&Aacute;rea de Escasez de Profesionales de la Salud (Health Professional Shortage Area,
          HPSA)</strong>, un <strong>&Aacute;rea M&eacute;dicamente Desatendida (Medically Underserved Area,
          MUA)</strong> o una <strong>Poblaci&oacute;n M&eacute;dicamente Desatendida (Medically Underserved
          Population, MUP)</strong>; y
        </li>
        <li>
          Comenzar ese empleo dentro de un plazo determinado tras la aprobaci&oacute;n de la exenci&oacute;n.
        </li>
      </ul>
      <p>
        Un n&uacute;mero limitado de los 30 cupos son <strong>cupos &ldquo;FLEX&rdquo;</strong> para
        m&eacute;dicos que no ejercen dentro de un &aacute;rea de escasez designada en s&iacute;, pero que atienden
        a pacientes que viven en una. Sin embargo, la mayor&iacute;a de los cupos van a doctores que sirven
        directamente en comunidades desatendidas &mdash; que es exactamente donde la necesidad de Georgia es
        mayor. Amplias zonas del <strong>Georgia rural y del sur</strong> son &aacute;reas de escasez designadas, y
        condados como <strong>Clinch, Echols y Quitman</strong> son el tipo de comunidades rurales desatendidas
        que el programa fue dise&ntilde;ado para dotar de personal. La disponibilidad de cupos cambia de un
        a&ntilde;o a otro y las especialidades m&aacute;s competidas se llenan temprano, as&iacute; que el momento
        de presentar la solicitud importa.
      </p>
      <p>
        La trampa cr&iacute;tica: si acepta una exenci&oacute;n Conrad 30 y luego <strong>no completa los tres
        a&ntilde;os completos</strong> de servicio, vuelve a quedar sujeto(a) al requisito de dos a&ntilde;os
        &mdash; y su capacidad de permanecer se derrumba. Completar el compromiso, en cambio, deja atr&aacute;s la
        &sect;212(e) para siempre y abre la v&iacute;a a una{' '}
        <Link href="/es/blog/employment-based-green-card-eb1-eb2-eb3-georgia">green card basada en empleo</Link>, a
        menudo a trav&eacute;s de una{' '}
        <Link href="/es/blog/eb2-national-interest-waiver-self-petition-georgia">Exenci&oacute;n por Inter&eacute;s
        Nacional</Link>{' '}
        para m&eacute;dicos que siguen sirviendo en &aacute;reas desatendidas.
      </p>

      <h2>Las Otras Cuatro V&iacute;as de Exenci&oacute;n</h2>
      <p>
        Conrad 30 es el caballo de batalla del m&eacute;dico, pero es solo una de cinco bases estatutarias. Las
        dem&aacute;s importan para quienes no son m&eacute;dicos y para doctores que no encajan en el modelo
        Conrad:
      </p>
      <ul>
        <li>
          <strong>Carta de No Objeci&oacute;n (No Objection Statement).</strong> Su gobierno de origen emite una
          declaraci&oacute;n de que no tiene objeci&oacute;n a que usted permanezca en EE. UU. Esta es la
          exenci&oacute;n m&aacute;s com&uacute;n en general &mdash; pero <strong>no est&aacute; disponible para
          los m&eacute;dicos</strong> que quedaron sujetos a trav&eacute;s de la educaci&oacute;n m&eacute;dica de
          posgrado. Para ellos, la ley excluye espec&iacute;ficamente esta v&iacute;a.
        </li>
        <li>
          <strong>Solicitud de una Agencia Gubernamental Interesada (Interested Government Agency, IGA).</strong>{' '}
          Una agencia federal de EE. UU. solicita la exenci&oacute;n con el argumento de que su partida
          da&ntilde;ar&iacute;a un programa de inter&eacute;s p&uacute;blico. Para los m&eacute;dicos, organismos
          regionales como la <strong>Comisi&oacute;n Regional de los Apalaches (Appalachian Regional
          Commission)</strong> y la <strong>Autoridad Regional del Delta (Delta Regional Authority)</strong>, y
          agencias como el <strong>Departamento de Asuntos de los Veteranos (Department of Veterans
          Affairs)</strong>, pueden patrocinar a doctores que trabajan en o cerca de &aacute;reas desatendidas
          &mdash; una alternativa cuando los 30 cupos estatales se agotan.
        </li>
        <li>
          <strong>Dificultad excepcional.</strong> Si su partida durante dos a&ntilde;os causara{' '}
          <strong>dificultad excepcional a su c&oacute;nyuge o hijo ciudadano estadounidense o residente
          permanente</strong>, puede presentar el <strong>Formulario I-612</strong>. La separaci&oacute;n familiar
          ordinaria no basta; la dificultad debe ir mucho m&aacute;s all&aacute; de las consecuencias normales de
          dos a&ntilde;os de separaci&oacute;n, ya sea que la familia se quede aqu&iacute; o se vaya con usted.
          Esto se parece en esp&iacute;ritu al{' '}
          <Link href="/es/blog/i-601-inadmissibility-waiver-extreme-hardship-georgia">an&aacute;lisis de
          dificultad extrema usado para otras exenciones</Link>, aunque es un est&aacute;ndar legal distinto.
        </li>
        <li>
          <strong>Persecuci&oacute;n.</strong> Si fuera perseguido(a) por motivos de <strong>raza, religi&oacute;n
          u opini&oacute;n pol&iacute;tica</strong> al regresar a su pa&iacute;s, puede solicitar una
          exenci&oacute;n por persecuci&oacute;n (tambi&eacute;n con el Formulario I-612).
        </li>
      </ul>

      <h2>C&oacute;mo Funciona el Proceso de Exenci&oacute;n</h2>
      <p>
        La mayor&iacute;a de los casos de exenci&oacute;n se tramitan a trav&eacute;s de la{' '}
        <strong>Divisi&oacute;n de Revisi&oacute;n de Exenciones (Waiver Review Division) del Departamento de
        Estado</strong>. Comienza presentando en l&iacute;nea el <strong>Formulario DS-3035</strong> para obtener
        un n&uacute;mero de caso, luego env&iacute;a los documentos de apoyo y, cuando corresponde, la
        recomendaci&oacute;n de la agencia interesada (para Conrad 30, esa recomendaci&oacute;n proviene del DCH de
        Georgia; para una exenci&oacute;n IGA, de la agencia federal patrocinadora). El Departamento de Estado
        revisa el expediente y emite una <strong>recomendaci&oacute;n</strong> a{' '}
        <strong>USCIS</strong>, que toma la <strong>decisi&oacute;n final</strong>. Las exenciones por dificultad y
        por persecuci&oacute;n a&ntilde;aden una adjudicaci&oacute;n del I-612 por parte de USCIS antes de que el
        Departamento de Estado se pronuncie.
      </p>
      <p>
        Una vez concedida la exenci&oacute;n, el empleador patrocinador del m&eacute;dico suele presentar una{' '}
        <Link href="/es/blog/h1b-visa-sponsorship-cap-georgia">petici&oacute;n H-1B</Link> &mdash; y como muchos
        empleadores Conrad 30 son hospitales sin fines de lucro o afiliados al gobierno, esa H-1B suele estar{' '}
        <strong>exenta del tope (cap-exempt)</strong>, evitando la loter&iacute;a anual. El m&eacute;dico cumple
        entonces el compromiso de tres a&ntilde;os y, habiendo superado la &sect;212(e), puede buscar la
        residencia permanente.
      </p>

      <h2>D&oacute;nde se Forman y Trabajan los M&eacute;dicos de Georgia</h2>
      <p>
        Georgia es un importante campo de formaci&oacute;n para graduados m&eacute;dicos internacionales, y las
        mismas instituciones que patrocinan a residentes J-1 suelen ser los empleadores y socios del lado de la
        exenci&oacute;n. Entre ellas est&aacute;n la <strong>Facultad de Medicina de la Universidad de
        Emory</strong>, el <strong>Medical College of Georgia</strong>{' '}
        en Augusta University, la <strong>Morehouse School of Medicine</strong> en Atlanta,{' '}
        <strong>Piedmont Healthcare</strong> y <strong>Atrium Health Navicent</strong> en Macon, y el{' '}
        <strong>Grady Memorial Hospital</strong>. Para un doctor que termina su formaci&oacute;n en uno de estos
        programas, el intervalo entre el fin del J-1 y el inicio de una H-1B es exactamente donde una
        exenci&oacute;n debe sincronizarse correctamente &mdash; un lapso puede interrumpir tanto el estatus
        migratorio como la carrera m&eacute;dica.
      </p>

      <h2>Por Qu&eacute; Estos Casos Necesitan un Abogado</h2>
      <p>
        Los casos de exenci&oacute;n J-1 son de alto riesgo e implacables. La determinaci&oacute;n del requisito de
        dos a&ntilde;os, la elecci&oacute;n entre cinco bases de exenci&oacute;n, la competencia por un
        n&uacute;mero limitado de cupos Conrad 30, el contrato de servicio de tres a&ntilde;os que puede deshacerlo
        todo si se incumple, y la sincronizaci&oacute;n precisa entre el J-1, la exenci&oacute;n y la H-1B deben
        alinearse. Una mala lectura de si la &sect;212(e) siquiera aplica, o un cupo Conrad perdido por una
        presentaci&oacute;n tard&iacute;a, puede costarle a un m&eacute;dico la carrera en EE. UU. que se
        prepar&oacute; durante a&ntilde;os para construir. El trabajo de un abogado es confirmar el requisito,
        elegir la exenci&oacute;n correcta, asegurar la recomendaci&oacute;n y secuenciar las presentaciones para
        que no haya ning&uacute;n vac&iacute;o.
      </p>

      <h2>Hable con Eszter Bardi Sobre su Exenci&oacute;n J-1</h2>
      <p>
        Ya sea que usted sea un m&eacute;dico que termina una residencia en Georgia y eval&uacute;a una
        colocaci&oacute;n Conrad 30 en un condado desatendido, un investigador atrapado por la Lista de
        Habilidades, o un visitante J-1 cuyo c&oacute;nyuge o hijo ciudadano estadounidense enfrentar&iacute;a
        dificultad excepcional, la abogada <strong>Eszter Bardi</strong> puede determinar si el requisito de dos
        a&ntilde;os realmente le aplica, identificar la v&iacute;a de exenci&oacute;n m&aacute;s s&oacute;lida y
        coordinar el DS-3035, la recomendaci&oacute;n de la agencia interesada y la H-1B para que su estatus nunca
        caduque. Bardi Immigration Law sirve a visitantes de intercambio y a sus familias en todo Georgia &mdash;
        con acceso directo a la abogada, no a un especialista de admisi&oacute;n.
      </p>
      <p>
        <strong>Programe una consulta hoy.</strong> Revisaremos su DS-2019, confirmaremos su estatus bajo la{' '}
        &sect;212(e) y trazaremos una ruta realista desde su J-1 hacia una H-1B y una green card.{' '}
        <Link href="/es/contact">Solicite una consulta en l&iacute;nea</Link>. Hablamos espa&ntilde;ol &mdash;
        atendemos a la comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este art&iacute;culo brinda informaci&oacute;n legal general y no
          constituye asesor&iacute;a legal. El derecho migratorio es complejo, espec&iacute;fico a los hechos y
          cambia con frecuencia &mdash; el n&uacute;mero de cupos Conrad 30 y las reglas FLEX, las &aacute;reas de
          escasez designadas y qu&eacute; condados de Georgia tienen cupos abiertos, la Lista de Habilidades, la
          elegibilidad para la exenci&oacute;n, los formularios, las tarifas y los tiempos de procesamiento cambian
          con el tiempo. Confirme los requisitos vigentes con el Departamento de Salud Comunitaria de Georgia,
          USCIS y el Departamento de Estado de EE. UU., y consulte a un abogado de inmigraci&oacute;n con licencia
          para orientaci&oacute;n espec&iacute;fica a su caso.
        </em>
      </p>
    </div>
  );
}
