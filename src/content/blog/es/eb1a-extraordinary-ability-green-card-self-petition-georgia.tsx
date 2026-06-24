/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (la clasificaci&oacute;n inmigratoria EB-1A de habilidad extraordinaria bajo INA §203(b)(1)(A); la autopetici&oacute;n mediante el Formulario I-140 sin empleador y sin certificaci&oacute;n laboral PERM; el est&aacute;ndar de &ldquo;aclamaci&oacute;n nacional o internacional sostenida&rdquo;; la alternativa del premio mayor &uacute;nico y los diez criterios reglamentarios de 8 CFR 204.5(h)(3) de los cuales deben cumplirse al menos tres; el an&aacute;lisis de dos pasos de Kazarian v. USCIS (conteo de criterios seguido de una determinaci&oacute;n de m&eacute;ritos finales); las diferencias con el investigador destacado EB-1B y el gerente multinacional EB-1C; la comparaci&oacute;n con la Exenci&oacute;n por Inter&eacute;s Nacional EB-2; y las fechas de prioridad del Bolet&iacute;n de Visas seg&uacute;n el pa&iacute;s de nacimiento). La gu&iacute;a de pol&iacute;tica de USCIS, los tiempos de procesamiento, la disponibilidad del procesamiento premium, las tarifas y las fechas de acci&oacute;n final del Bolet&iacute;n de Visas cambian constantemente y var&iacute;an seg&uacute;n la categor&iacute;a y el pa&iacute;s de nacimiento — EB-1 no siempre est&aacute; al d&iacute;a para India y China. Confirmar los est&aacute;ndares, formularios, tarifas y fechas del Bolet&iacute;n de Visas vigentes ante USCIS y el Departamento de Estado antes del go-live y para cada caso individual. */
import Link from 'next/link';
// Adaptación al español de en/eb1a-extraordinary-ability-green-card-self-petition-georgia.tsx (BAR-832). Español natural, no traducción literal.

export const esTitle = 'Green Card EB-1A de Habilidad Extraordinaria en Georgia: La Autopetici&oacute;n M&aacute;s Poderosa';
export const esDescription =
  'Una abogada de inmigraci&oacute;n en Georgia explica la green card EB-1A de habilidad extraordinaria: la autopetici&oacute;n sin empleador ni PERM, los diez criterios de 8 CFR 204.5(h)(3), el an&aacute;lisis de dos pasos de Kazarian, c&oacute;mo se compara con la Exenci&oacute;n por Inter&eacute;s Nacional EB-2 y por qu&eacute; importa para los nacidos en India y China. Informaci&oacute;n general, no asesor&iacute;a legal.';

export function Eb1aExtraordinaryAbilityPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Casi todas las green cards basadas en el empleo pasan por un empleador. El trabajador necesita una empresa
        dispuesta a patrocinar el caso, a tramitar la{' '}
        <Link href="/es/blog/perm-labor-certification-employer-sponsored-green-card-georgia">certificaci&oacute;n
        laboral PERM</Link> y a atar el futuro del inmigrante a un solo empleo. La{' '}
        <strong>habilidad extraordinaria EB-1A</strong> es la categor&iacute;a que rompe esa regla con m&aacute;s
        fuerza: no hay <strong>empleador, ni oferta de trabajo, ni PERM</strong> &mdash; usted presenta su propia
        petici&oacute;n &mdash; y, a diferencia de la EB-2, la primera preferencia generalmente avanza{' '}
        <em>a&ntilde;os</em> m&aacute;s r&aacute;pido para los solicitantes nacidos en India y China. Para el
        candidato adecuado, la EB-1A es la autopetici&oacute;n m&aacute;s poderosa de toda la ley migratoria
        estadounidense.
      </p>
      <p>
        Tambi&eacute;n es la m&aacute;s dif&iacute;cil de ganar. La EB-1A est&aacute; reservada para personas en la
        c&uacute;spide misma de su campo. Esta gu&iacute;a explica en qu&eacute; se diferencia la EB-1A de las
        dem&aacute;s categor&iacute;as de primera preferencia y de la{' '}
        <Link href="/es/blog/eb2-national-interest-waiver-self-petition-georgia">Exenci&oacute;n por Inter&eacute;s
        Nacional EB-2</Link>, la prueba exacta que aplica USCIS, qui&eacute;nes suelen calificar en Georgia y
        c&oacute;mo presentar el caso.
      </p>

      <h2>EB-1A vs. EB-1B vs. EB-1C: Sepa por Cu&aacute;l Puerta de la Primera Preferencia Entra</h2>
      <p>
        La <strong>primera preferencia basada en el empleo (EB-1)</strong> tiene tres subcategor&iacute;as
        distintas. A menudo se mezclan, pero solo una de ellas le permite peticionar por usted mismo:
      </p>
      <ul>
        <li>
          <strong>EB-1A &mdash; Habilidad Extraordinaria.</strong> Para personas con habilidad extraordinaria en
          las ciencias, las artes, la educaci&oacute;n, los negocios o el atletismo.{' '}
          <strong>Se permite la autopetici&oacute;n</strong> &mdash; no se requiere empleador ni oferta de trabajo.
          Debe tener la intenci&oacute;n de seguir trabajando en su &aacute;rea de experiencia, pero nadie tiene
          que patrocinarlo. Este es el tema de este art&iacute;culo.
        </li>
        <li>
          <strong>EB-1B &mdash; Profesor o Investigador Destacado.</strong> Requiere reconocimiento internacional
          como destacado, al menos tres a&ntilde;os de experiencia en el campo y una oferta calificada de un puesto
          permanente o de titularidad (tenure-track) de investigaci&oacute;n o docencia. De manera crucial,
          la EB-1B es <strong>patrocinada por el empleador</strong> &mdash; no es una autopetici&oacute;n.
        </li>
        <li>
          <strong>EB-1C &mdash; Gerente o Ejecutivo Multinacional.</strong> Para gerentes y ejecutivos
          transferidos a una empresa estadounidense por un empleador multinacional calificado (la prima en green
          card de la{' '}
          <Link href="/es/blog/l1-intracompany-transferee-visa-georgia">visa L-1A</Link>). Tambi&eacute;n es{' '}
          <strong>patrocinada por el empleador</strong>, con al menos un a&ntilde;o de empleo calificado en el
          extranjero durante los tres a&ntilde;os previos.
        </li>
      </ul>
      <p>
        Las tres se saltan el PERM. Pero si usted no tiene &mdash; o no quiere depender de &mdash; un empleador
        patrocinador, la EB-1A es la &uacute;nica categor&iacute;a de primera preferencia abierta para usted.
      </p>

      <h2>La Ventaja Decisiva: Sin Retraso Donde M&aacute;s Importa</h2>
      <p>
        Para los profesionales nacidos en <strong>India y China</strong>, la restricci&oacute;n determinante para
        una green card casi nunca es el est&aacute;ndar legal &mdash; es el{' '}
        <Link href="/es/blog/visa-bulletin-priority-dates-family-green-card">retraso de la fecha de
        prioridad</Link>. La EB-2 (incluida la NIW) est&aacute; retrogradada para esos pa&iacute;ses por muchos
        a&ntilde;os; una brillante aprobaci&oacute;n de EB-2 NIW puede quedarse en la fila la mayor parte de una
        d&eacute;cada esperando un n&uacute;mero de visa.
      </p>
      <p>
        La EB-1 se sit&uacute;a al frente de la fila del empleo y avanza much&iacute;simo m&aacute;s r&aacute;pido.
        Para la mayor parte del mundo la EB-1 est&aacute; al d&iacute;a, e incluso para India y China la espera de
        la EB-1 es una fracci&oacute;n de la espera de la EB-2. Esa diferencia es la raz&oacute;n entera por la que
        un profesional indio o chino de alto rendimiento luchar&aacute; por calificar para la EB-1A en lugar de
        conformarse con el est&aacute;ndar m&aacute;s f&aacute;cil de la NIW &mdash; la petici&oacute;n m&aacute;s
        dif&iacute;cil puede significar una green card <em>a&ntilde;os</em> antes. (Las fechas de acci&oacute;n
        final cambian cada mes y la EB-1 <em>no</em> siempre est&aacute; al d&iacute;a para India y China; consulte
        siempre el{' '}
        <Link href="/es/blog/visa-bulletin-priority-dates-family-green-card">Bolet&iacute;n de Visas</Link> vigente.)
      </p>

      <h2>El Est&aacute;ndar: &ldquo;Aclamaci&oacute;n Nacional o Internacional Sostenida&rdquo;</h2>
      <p>
        La EB-1A exige pruebas de que usted ha alcanzado la c&uacute;spide misma de su campo y goza de{' '}
        <strong>aclamaci&oacute;n nacional o internacional sostenida</strong>. Hay dos maneras de llegar ah&iacute;:
      </p>
      <ul>
        <li>
          <strong>Un premio mayor &uacute;nico, reconocido internacionalmente.</strong> Un Premio Nobel, una medalla
          ol&iacute;mpica, un &Oacute;scar, un Pulitzer o un honor de m&aacute;ximo nivel comparable. Casi nadie
          califica por esta v&iacute;a, raz&oacute;n por la cual la mayor&iacute;a de los casos se construyen sobre los
          criterios siguientes.
        </li>
        <li>
          <strong>Al menos tres de diez criterios reglamentarios</strong> (8 CFR 204.5(h)(3)). Cumplir tres es el
          piso, no la meta final &mdash; vea el an&aacute;lisis de dos pasos m&aacute;s abajo.
        </li>
      </ul>
      <p>Los diez criterios son:</p>
      <ul>
        <li>Recibir premios o galardones menores reconocidos nacional o internacionalmente por excelencia;</li>
        <li>Membres&iacute;a en asociaciones que exigen logros sobresalientes, juzgados por expertos reconocidos;</li>
        <li>Material publicado <em>sobre usted</em> en publicaciones profesionales o medios de comunicaci&oacute;n importantes;</li>
        <li>Haber juzgado el trabajo de otros, individualmente o en un panel (revisi&oacute;n por pares, evaluaci&oacute;n de competencias);</li>
        <li>Contribuciones originales de gran trascendencia en lo cient&iacute;fico, acad&eacute;mico, art&iacute;stico, atl&eacute;tico o de negocios;</li>
        <li>Autor&iacute;a de art&iacute;culos acad&eacute;micos en revistas profesionales o medios importantes;</li>
        <li>Exhibici&oacute;n de su trabajo en muestras o exposiciones art&iacute;sticas;</li>
        <li>Un papel protag&oacute;nico o cr&iacute;tico en organizaciones de reputaci&oacute;n distinguida;</li>
        <li>Un salario alto u otra remuneraci&oacute;n significativamente elevada en relaci&oacute;n con otros en el campo;</li>
        <li>&Eacute;xito comercial en las artes esc&eacute;nicas.</li>
      </ul>

      <h2>El An&aacute;lisis de Dos Pasos: Por Qu&eacute; Contar Hasta Tres No Basta</h2>
      <p>
        Tras la decisi&oacute;n del Noveno Circuito en <em>Kazarian v. USCIS</em> (2010), USCIS adjudica la EB-1A en
        <strong> dos pasos diferenciados</strong>, y los solicitantes pierden de forma rutinaria en el segundo:
      </p>
      <ul>
        <li>
          <strong>Paso 1 &mdash; &iquest;Cumple el umbral?</strong> USCIS cuenta si usted tiene el premio mayor
          &uacute;nico o satisface al menos tres de los diez criterios. Esto es en gran medida un ejercicio de
          lista de verificaci&oacute;n.
        </li>
        <li>
          <strong>Paso 2 &mdash; Determinaci&oacute;n de m&eacute;ritos finales.</strong> Luego USCIS da un paso
          atr&aacute;s y sopesa <em>toda</em> la evidencia en conjunto para decidir si realmente demuestra
          aclamaci&oacute;n sostenida y que usted est&aacute;{' '}
          <strong>entre el peque&ntilde;o porcentaje en la c&uacute;spide misma</strong> de su campo. Puede marcar
          tres casillas y a&uacute;n as&iacute; ser negado aqu&iacute; si la totalidad de su trayectoria no muestra
          una posici&oacute;n genuina de primer nivel.
        </li>
      </ul>
      <p>
        Este es el coraz&oacute;n de una petici&oacute;n EB-1A s&oacute;lida: no solo reunir evidencia que encaje en
        tres categor&iacute;as, sino enmarcar toda la trayectoria &mdash; con cartas de expertos independientes y
        m&eacute;tricas objetivas &mdash; para probar que usted se sit&uacute;a en la cima de su campo, no
        meramente por encima del promedio.
      </p>

      <h2>Qui&eacute;nes Suelen Calificar en Georgia</h2>
      <p>
        La EB-1A atraviesa todas las industrias. En Georgia, los candidatos m&aacute;s fuertes que vemos tienden a
        provenir de un pu&ntilde;ado de sectores:
      </p>
      <ul>
        <li>
          <strong>Investigadores y cient&iacute;ficos universitarios.</strong> Profesores e investigadores senior
          en <strong>Georgia Tech, Emory, UGA y Georgia State</strong> con publicaciones altamente citadas,
          financiamiento de investigaci&oacute;n sostenido, servicio de revisi&oacute;n por pares y reconocimiento
          independiente. (Los investigadores con un puesto permanente respaldado por un empleador tambi&eacute;n
          deber&iacute;an sopesar la <strong>EB-1B</strong>, que tiene un est&aacute;ndar ligeramente distinto.)
        </li>
        <li>
          <strong>Profesionales del cine, la televisi&oacute;n y lo creativo.</strong> El auge de la
          producci&oacute;n en Georgia &mdash; <strong>Tyler Perry Studios</strong> y la econom&iacute;a
          cinematogr&aacute;fica m&aacute;s amplia de Atlanta &mdash; produce directores, productores,
          directores de fotograf&iacute;a, editores y dise&ntilde;adores cuyo trabajo, premios y cobertura de prensa pueden
          sustentar reclamos de habilidad extraordinaria en las artes.
        </li>
        <li>
          <strong>Atletas y entrenadores de &eacute;lite.</strong> Profesionales vinculados al{' '}
          <strong>PGA Tour</strong>, al <strong>Atlanta United</strong>, a los Atlanta Hawks y los Braves, y a
          programas de entrenamiento de nivel ol&iacute;mpico, cuyos historiales competitivos y reconocimiento
          cumplen el est&aacute;ndar atl&eacute;tico.
        </li>
        <li>
          <strong>Fundadores y l&iacute;deres empresariales.</strong> La comunidad de startups respaldadas por
          capital de riesgo de Atlanta produce fundadores con financiamiento significativo, prensa, ingresos y
          reconocimiento de la industria &mdash; un perfil que puede satisfacer varios de los criterios
          relacionados con los negocios.
        </li>
      </ul>

      <h2>EB-1A vs. EB-2 NIW: Elegir la Autopetici&oacute;n Correcta</h2>
      <p>
        Tanto la EB-1A como la{' '}
        <Link href="/es/blog/eb2-national-interest-waiver-self-petition-georgia">Exenci&oacute;n por Inter&eacute;s
        Nacional EB-2</Link> le permiten autopeticionar sin empleador y sin PERM, as&iacute; que los profesionales
        consumados sopesan constantemente las dos:
      </p>
      <ul>
        <li>
          <strong>El list&oacute;n.</strong> La EB-1A es m&aacute;s dif&iacute;cil &mdash; debe probar que
          est&aacute; en la <em>cima</em> de su campo. La NIW pregunta si su empresa propuesta tiene importancia
          nacional y si usted est&aacute; bien posicionado para impulsarla (la prueba de tres elementos de{' '}
          <em>Matter of Dhanasar</em>) &mdash; un est&aacute;ndar significativamente m&aacute;s bajo.
        </li>
        <li>
          <strong>La espera.</strong> Las fechas de prioridad de la EB-1 avanzan mucho m&aacute;s r&aacute;pido que
          las de la EB-2, que es el factor decisivo para los solicitantes nacidos en India y China. Una
          petici&oacute;n m&aacute;s dif&iacute;cil que le consigue una green card a&ntilde;os antes suele ser el
          mejor trato.
        </li>
        <li>
          <strong>La estrategia.</strong> Muchos candidatos fuertes presentan la NIW ahora para asegurar una fecha
          de prioridad EB-2 mientras construyen la trayectoria para una futura EB-1A &mdash; o, cuando la evidencia
          lo respalda, presentan ambas. Un abogado puede trazar qu&eacute; categor&iacute;a, o qu&eacute;
          combinaci&oacute;n, encaja con su evidencia y su pa&iacute;s de nacimiento.
        </li>
      </ul>
      <p>
        La EB-1A es tambi&eacute;n el destino natural de green card para muchos titulares de la{' '}
        <Link href="/es/blog/o1-visa-extraordinary-ability-georgia">visa O-1 de habilidad extraordinaria</Link>.
        Los est&aacute;ndares de la O-1 y la EB-1A se traslapan, pero no son iguales: la O-1 es una visa de trabajo
        temporal que requiere un empleador o agente estadounidense, mientras que la EB-1A es una green card
        autopeticionada sujeta al est&aacute;ndar m&aacute;s alto del &ldquo;peque&ntilde;o porcentaje en la
        c&uacute;spide misma&rdquo;. El tiempo en una O-1 es a menudo la forma en que un candidato construye la
        trayectoria que luego gana una EB-1A.
      </p>

      <h2>Presentaci&oacute;n, Procesamiento y Procesamiento Premium</h2>
      <p>
        La EB-1A se presenta en el <strong>Formulario I-140, Petici&oacute;n de Inmigrante para Trabajador
        Extranjero</strong>, que usted presenta por s&iacute; mismo. La petici&oacute;n se construye en torno a un
        argumento de presentaci&oacute;n detallado y anexos vinculados a los criterios y al est&aacute;ndar de
        m&eacute;ritos finales: cartas de expertos independientes, historiales de citas y publicaciones, premios,
        documentaci&oacute;n de membres&iacute;as, cobertura de medios, evidencia de roles de juez o de liderazgo,
        datos salariales y pruebas de impacto. USCIS ofrece <strong>procesamiento premium</strong> para las
        peticiones I-140 de habilidad extraordinaria, actualmente una adjudicaci&oacute;n de 15 d&iacute;as
        h&aacute;biles por una tarifa adicional &mdash; m&aacute;s r&aacute;pido que la ventana de 45 d&iacute;as
        h&aacute;biles que aplica a la EB-1C y a la EB-2 NIW. Los plazos y las tarifas del procesamiento premium
        cambian, y los tiempos de procesamiento regular var&iacute;an seg&uacute;n la carga de trabajo del centro
        de servicio, as&iacute; que confirme las cifras vigentes en el sitio web de USCIS.
      </p>
      <p>
        Un I-140 aprobado es la primera mitad del camino. La green card en s&iacute; todav&iacute;a requiere un
        n&uacute;mero de visa disponible bajo su <strong>fecha de prioridad</strong>. Si hay un n&uacute;mero
        disponible y usted est&aacute; en Estados Unidos, pasa al{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajuste de estatus</Link>; si est&aacute; en
        el extranjero, pasa por el{' '}
        <Link href="/es/blog/consular-processing-immigrant-visa-georgia">procesamiento consular</Link>. Para el
        men&uacute; completo de categor&iacute;as de empleo y c&oacute;mo encajan entre s&iacute;, consulte nuestra{' '}
        <Link href="/es/blog/employment-based-green-card-eb1-eb2-eb3-georgia">descripci&oacute;n general de EB-1,
        EB-2 y EB-3</Link>.
      </p>

      <h2>Hable con Eszter Bardi sobre su Petici&oacute;n EB-1A</h2>
      <p>
        La EB-1A se gana o se pierde por c&oacute;mo se construye y se enmarca la trayectoria &mdash; los expertos
        independientes adecuados, la evidencia vinculada con precisi&oacute;n a los criterios y un argumento de
        m&eacute;ritos finales que pruebe una posici&oacute;n de cima del campo en lugar de simplemente cumplir una
        lista de verificaci&oacute;n. Ya sea que usted sea investigador en Georgia Tech o Emory, un profesional del
        cine o creativo de Atlanta, un atleta de &eacute;lite o un fundador respaldado por capital de riesgo, la
        abogada <strong>Eszter Bardi</strong> puede evaluar con honestidad si la EB-1A es su camino m&aacute;s
        fuerte, c&oacute;mo se compara con la EB-2 NIW y c&oacute;mo afecta su pa&iacute;s de nacimiento a su
        cronograma. Bardi Immigration Law atiende a profesionales en todo Georgia con acceso directo a la abogada
        &mdash; no a un especialista de admisi&oacute;n.
      </p>
      <p>
        <strong>Agende una consulta hoy.</strong> Evaluaremos su elegibilidad, construiremos la petici&oacute;n al
        est&aacute;ndar de habilidad extraordinaria y posicionaremos su caso para la aprobaci&oacute;n.{' '}
        <Link href="/es/contact">Solicite una consulta en l&iacute;nea</Link>. Hablamos espa&ntilde;ol &mdash;
        atendemos a la comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este art&iacute;culo ofrece informaci&oacute;n legal general y no
          constituye asesor&iacute;a legal. La ley migratoria es compleja, espec&iacute;fica de cada caso y cambia
          con frecuencia &mdash; la gu&iacute;a de pol&iacute;tica de USCIS, los tiempos de procesamiento, la
          disponibilidad del procesamiento premium, las tarifas y las fechas de acci&oacute;n final del
          Bolet&iacute;n de Visas se mueven constantemente y var&iacute;an seg&uacute;n la categor&iacute;a y el
          pa&iacute;s de nacimiento (la EB-1 no siempre est&aacute; al d&iacute;a para India y China). Confirme los
          est&aacute;ndares, formularios, tarifas y la elegibilidad vigentes en los sitios web de USCIS y el
          Departamento de Estado, y consulte a un abogado de inmigraci&oacute;n con licencia para obtener
          orientaci&oacute;n espec&iacute;fica para su caso.
        </em>
      </p>
    </div>
  );
}
