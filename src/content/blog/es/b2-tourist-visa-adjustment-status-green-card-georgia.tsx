/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (ajuste de estatus bajo la INA §245(a), el requisito de inspección y admisión legal, la excepción de familiar inmediato a las barras de §245(c), el problema de la "doble intención" y el análisis de intención preconcebida para titulares de visa B-1/B-2, la inadmisibilidad por declaración falsa bajo la INA §212(a)(6)(C)(i) y por falta de intención no inmigrante bajo §214(b)/§212(a)(7)(B), el proceso de presentación simultánea del I-130/I-130A e I-485, el procesamiento consular como alternativa y la cláusula de abuelo §245(i)) que puede cambiar con las políticas de USCIS/DOS y según la administración. Confirmar contra USCIS antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/b2-tourist-visa-adjustment-status-green-card-georgia.tsx (BAR-854). Español natural, no traducción literal.

export const esTitle = 'Visa de Turista B-2 y Green Card en Georgia: ¿Puede Quedarse sin Salir del País?';
export const esDescription =
  'Una abogada de inmigración en Georgia explica cuándo un visitante con visa B-1 o B-2 puede ajustar su estatus a residente permanente sin salir del país: la regla de la admisión legal, el problema de la doble intención y la intención preconcebida, el proceso de ajuste por matrimonio con ciudadano estadounidense, cómo afecta el vencimiento del I-94, cuándo aplica el procesamiento consular y la cláusula de abuelo §245(i). Información general, no asesoría legal.';

export function B2TouristVisaPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Es la primera pregunta que escuchamos en casi cada consulta de inmigración familiar en Georgia:{' '}
        <strong>&ldquo;Vine con visa de turista — ¿puedo obtener mi green card sin salir del país?&rdquo;</strong>{' '}
        La respuesta corta sorprende a la mayoría: <strong>sí, en muchos casos sí se puede</strong>. Un visitante con
        visa B-1 o B-2 que se casa con un ciudadano estadounidense, o que tiene otra petición calificante, puede en
        muchos casos ajustar su estatus a residente permanente <em>dentro</em> de los Estados Unidos — sin viaje al
        extranjero, sin entrevista consular en una embajada, sin largas separaciones de la familia.
      </p>
      <p>
        Pero el camino tiene trampas reales, y el orden en que ocurren las cosas importa enormemente. Esta guía
        explica, para familias en Georgia y Alabama, exactamente cuándo una visa de turista puede convertirse en green
        card, cuándo no puede, y el único error — llegar con un plan secreto de quedarse — que puede hundir un caso
        que de otro modo sería ganador.
      </p>

      <h2>La Regla Fundamental: No Es la Visa, Es la Entrada</h2>
      <p>
        Este es el principio que controla casi todos los casos de turista a green card. Bajo la{' '}
        <strong>INA §245(a)</strong>, una persona que fue <strong>inspeccionada y admitida (o liberada bajo
        palabra)</strong> en los Estados Unidos, y que tiene una green card <em>disponible de inmediato</em>, puede
        generalmente{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajustar su estatus</Link> desde dentro del país.
        Note lo que le importa al estatuto: que usted entró <em>legalmente</em>. <strong>No</strong> requiere que haya
        entrado con el tipo &ldquo;correcto&rdquo; de visa. Un turista B-2 al que sellaron el pasaporte en el aeropuerto
        fue inspeccionado y admitido — esa es la casilla que importa.
      </p>
      <p>
        Por eso una visa de visitante no es un callejón sin salida. La visa le dio una entrada legal; si ahora puede
        obtener una green card depende de si tiene una <strong>petición calificante</strong> de respaldo.
      </p>

      <h2>Necesita una Petición Calificante — la Green Card Tiene que Venir de Algún Lugar</h2>
      <p>
        Ajustar el estatus no es algo que se hace solo con la fuerza de una visa de turista. Usted necesita una base
        subyacente que haga que una visa de inmigrante esté <em>disponible de inmediato</em> para usted. Las más
        comunes son:
      </p>
      <ul>
        <li>
          <strong>Matrimonio con un ciudadano estadounidense.</strong> El cónyuge de un ciudadano es un{' '}
          <em>familiar inmediato</em> — no hay lista de espera, así que la green card está disponible en el momento en
          que el I-130 puede ser aprobado. Este es el caso clásico de turista a green card.
        </li>
        <li>
          <strong>Otros familiares inmediatos de un ciudadano estadounidense.</strong> Los padres de un ciudadano mayor
          de 21 años, y los hijos solteros menores de 21 de un ciudadano, también son familiares inmediatos sin espera.
        </li>
        <li>
          <strong>Un I-130 aprobado de un cónyuge residente permanente (LPR),</strong> pero solo cuando la{' '}
          <Link href="/es/blog/visa-bulletin-priority-dates-family-green-card">fecha de prioridad está vigente</Link>{' '}
          según el Boletín de Visas. Las peticiones de LPR hacen fila, así que el tiempo importa.
        </li>
        <li>
          <strong>Una petición I-140 de empleo aprobada con fecha de prioridad vigente,</strong> para alguien que entró
          en B-1 por negocios y tiene una petición de empleador o autopetición de respaldo.
        </li>
      </ul>
      <p>
        Sin una de estas, no hay nada <em>a lo que</em> ajustarse — la visa de turista por sí sola nunca se convierte
        en green card.
      </p>

      <h2>El Problema de la &ldquo;Doble Intención&rdquo; — la Trampa Que Hunde los Casos</h2>
      <p>
        Aquí es donde los ajustes con visa de turista salen mal. La B-1/B-2 es una visa de{' '}
        <strong>no inmigrante</strong>, y a diferencia de la H-1B o la L-1,{' '}
        <strong>no es una visa de &ldquo;doble intención&rdquo;</strong>. Cuando la usó para entrar, declaró que venía{' '}
        <em>temporalmente</em> — a visitar, a hacer turismo, a realizar negocios a corto plazo — y que tenía la
        intención de salir. Si el gobierno después determina que usted en realidad cruzó el aeropuerto ya planeando
        quedarse y obtener una green card, aparecen dos problemas graves:
      </p>
      <ul>
        <li>
          <strong>Declaración falsa bajo INA §212(a)(6)(C)(i).</strong> Mentirle a un oficial consular o al CBP sobre
          el propósito de su viaje — decir &ldquo;turismo&rdquo; mientras oculta un plan de inmigrar — es fraude, y
          puede hacerlo <em>inadmisible</em>. Eso es un hoyo mucho más difícil de salir que un simple vencimiento de visa.
        </li>
        <li>
          <strong>Una determinación de intención inmigrante preconcebida.</strong> Incluso sin fraude demostrable, un
          oficial que cree que usted tenía intención de inmigrar en la entrada puede negar el ajuste como cuestión de
          discreción, citando las reglas de intención no inmigrante de{' '}
          <strong>INA §214(b)</strong> y <strong>§212(a)(7)(B)</strong>.
        </li>
      </ul>
      <p>
        Por eso la <strong>cronología de su relación y su decisión de quedarse</strong> es el hecho más importante de
        todo el caso. Históricamente, USCIS trató una solicitud de green card dentro de aproximadamente{' '}
        <strong>90 días</strong> de la entrada como una señal de alerta que sugería que había declarado falsamente su
        intención en la frontera. Los casos más seguros son aquellos donde la relación genuinamente{' '}
        <em>se desarrolló</em> después de una visita de buena fe — usted vino a ver a familia o a una pareja, la
        relación se profundizó, y solo más tarde el matrimonio y la green card se convirtieron en el plan. Los casos
        peligrosos son aquellos donde alguien compró un boleto de sola ida, se casó una semana después de llegar y
        presentó la solicitud de inmediato. Los hechos son el mismo papeleo; la <em>historia</em> lo es todo.
      </p>
      <p>
        <strong>La conclusión:</strong> si entró con visa de turista con una intención genuina de visitar y sus planes
        cambiaron honestamente, por lo general estará bien. Si vino con la intención de quedarse, no lo oculte — busque
        asesoría antes de presentar la solicitud, porque cómo se presenta el caso puede ser la diferencia entre la
        aprobación y una determinación de fraude.
      </p>

      <h2>Cómo Se Ve en la Práctica el Ajuste por Matrimonio</h2>
      <p>
        Para el escenario más común — un visitante B-2 que se casa con un ciudadano estadounidense — el proceso es
        sencillo una vez que es elegible. Usted y su cónyuge generalmente presentan todo a la vez
        (&ldquo;presentación simultánea&rdquo;):
      </p>
      <ul>
        <li>
          <strong>Formulario I-130</strong> (Petición de Familiar Extranjero) y <strong>Formulario I-130A</strong>{' '}
          presentados por el cónyuge ciudadano, demostrando un matrimonio real y <em>de buena fe</em> — no uno
          celebrado con fines migratorios.
        </li>
        <li>
          <strong>Formulario I-485</strong> (Solicitud de Ajuste de Estatus) presentado por el cónyuge inmigrante,
          generalmente junto con las solicitudes de{' '}
          <Link href="/es/blog/employment-authorization-ead-georgia">permiso de trabajo (EAD)</Link> y de libertad de
          viaje anticipada (advance parole).
        </li>
        <li>
          <strong>Biometría</strong> (huellas dactilares y foto) en un Centro de Apoyo de Solicitudes de USCIS.
        </li>
        <li>
          Una <strong>entrevista de green card</strong> en la oficina de campo local de USCIS — para parejas del área
          metropolitana de Atlanta, eso suele ser la oficina de campo de Atlanta — donde un oficial confirma que el
          matrimonio es genuino.
        </li>
        <li>
          <strong>Aprobación</strong> y la green card por correo. Si se casaron dentro de los dos años anteriores a la
          aprobación, la primera tarjeta es condicional, y luego deberá{' '}
          <Link href="/es/blog/remove-conditions-green-card-i-751-georgia">eliminar las condiciones en el
          Formulario I-751</Link>.
        </li>
      </ul>
      <p>
        Dado que todo esto ocurre dentro de los Estados Unidos, <strong>no se requiere salir del país</strong> — usted
        no tiene que irse para una entrevista consular en el extranjero. Para un recorrido mucho más completo del
        camino por matrimonio y cómo se compara con la ruta K-1, vea nuestra guía de{' '}
        <Link href="/es/blog/marriage-based-green-card-k1-fiance-visa-georgia">green card por matrimonio y visa de
        prometido(a) K-1</Link>.
      </p>

      <h2>¿Qué Pasa Si Mi Estatus Ya Venció?</h2>
      <p>
        Muchos turistas se preocupan de haber arruinado todo por quedarse más tiempo del autorizado en su{' '}
        <strong>I-94</strong>. Aquí el alivio: para el{' '}
        <strong>familiar inmediato de un ciudadano estadounidense</strong>, una estadía excedida generalmente{' '}
        <em>no</em> bloquea el ajuste. Las barras de la <strong>INA §245(c)</strong> que penalizan la estadía
        excedida y el trabajo no autorizado son <strong>perdonadas</strong> para los familiares inmediatos, siempre que
        haya sido inspeccionado y admitido en la entrada. Así, un visitante B-2 que se quedó más tiempo del autorizado
        y se casó con un ciudadano generalmente aún puede ajustar aquí — la estadía excedida no activa la barra de 3 o
        10 años <em>porque nunca sale del país</em> para activarla.
      </p>
      <p>
        Ese perdón es más limitado para personas patrocinadas por un LPR en lugar de un ciudadano, o en casos de
        empleo, donde una estadía excedida puede ser descalificante. Si ya salió de estatus, lea nuestra guía sobre{' '}
        <Link href="/es/blog/visa-overstay-consequences-fix-status-georgia">consecuencias de la estadía excedida y
        cómo regularizar su estatus</Link> antes de hacer algo — y especialmente antes de viajar.
      </p>

      <h2>Cuándo No Puede Ajustar: Procesamiento Consular y la Trampa de la Salida</h2>
      <p>
        Si el ajuste de estatus no está disponible para usted — por ejemplo, entró sin inspección, o su patrocinador es
        un LPR y la línea no está vigente — la green card se obtiene en el extranjero a través del{' '}
        <Link href="/es/blog/consular-processing-immigrant-visa-georgia">procesamiento consular</Link>. El peligro es
        que <em>salir del país</em> después de acumular más de 180 días de presencia ilegal es precisamente el acto que
        activa una{' '}
        <Link href="/es/blog/unlawful-presence-3-year-10-year-bar-georgia">barra de 3 o 10 años</Link>. Para quienes
        enfrentan eso, la{' '}
        <Link href="/es/blog/i-601-inadmissibility-waiver-extreme-hardship-georgia">exención I-601 / I-601A</Link>{' '}
        puede perdonar la barra basándose en dificultad extrema para un familiar ciudadano o LPR. La regla que salva a
        las familias es simple:{' '}
        <strong>nunca salga a &ldquo;hacerlo bien&rdquo; sin antes confirmar si puede terminar el caso dentro del
        país.</strong>
      </p>

      <h2>La Cláusula de Abuelo §245(i)</h2>
      <p>
        Existe otro salvavidas para un grupo específico. Bajo la <strong>INA §245(i)</strong>, ciertas personas que de
        otro modo estarían impedidas de ajustar — incluyendo algunas que entraron sin inspección — pueden aún ajustar
        dentro de EE. UU. pagando una multa, <em>si</em> una petición calificante (un I-130 o certificación laboral)
        fue presentada en su nombre <strong>antes del 30 de abril de 2001</strong>. Esta cláusula de &ldquo;abuelo&rdquo;
        es antigua y raramente disponible hoy, pero para las familias que califican, significa la diferencia entre
        ajustar aquí y arriesgarse a la barra de salida en el extranjero. Siempre vale la pena verificar si una
        petición vieja y olvidada de un padre o ex empleador hace a alguien elegible bajo §245(i).
      </p>

      <h2>Hable con Eszter Bardi — Consulta Gratuita</h2>
      <p>
        Si una visa de turista puede convertirse en green card se reduce a dos preguntas: <em>¿entró legalmente?</em> y{' '}
        <em>¿tiene una petición calificante?</em> — y luego a un cuidadoso juicio sobre su intención en la entrada.
        Acierte en esas y muchas familias terminan todo el caso en Georgia sin salir nunca. Falle — especialmente en la
        pregunta de intención — y una solicitud simple puede convertirse en una determinación de fraude.
      </p>
      <p>
        En Bardi Immigration Law, la abogada <strong>Eszter Bardi</strong> ayuda a visitantes en Georgia y Alabama a
        determinar si pueden ajustar desde una visa B-1 o B-2, cómo se verán su entrada y cronología, y cómo presentar
        el caso correctamente. <strong>Programe su consulta gratuita hoy.</strong> Trabajará directamente con la Abogada
        Bardi — sin especialista de admisiones.{' '}
        <Link href="/es/contact">Solicite su consulta gratuita en línea.</Link>{' '}
        Hablamos español.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo proporciona información legal general y no constituye
          asesoría legal. El derecho migratorio es complejo, específico a los hechos y cambia frecuentemente. El ajuste
          de estatus desde una visa de turista, las reglas de doble intención e intención preconcebida, las
          determinaciones de declaración falsa y la disposición de abuelo §245(i) en particular implican reglas
          detalladas y técnicas — confirme la ley vigente y su caso individual con un abogado de inmigración con
          licencia antes de presentar solicitudes o viajar.
        </em>
      </p>
    </div>
  );
}
