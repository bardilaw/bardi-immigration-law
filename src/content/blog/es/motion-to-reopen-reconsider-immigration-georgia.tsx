import Link from 'next/link';
// Spanish adaptation of en/motion-to-reopen-reconsider-immigration-georgia.tsx (BAR-754, source BAR-689). Natural Spanish, not a literal translation. GA+AL licensed-attorney framing preserved.
// Deadlines preserved exactly: USCIS = 30 días (33 si se envió por correo); corte reabrir = 90 días; corte reconsiderar = 30 días; in absentia = 180 días.

export const esTitle = 'Moción para Reabrir o Reconsiderar un Caso de Inmigración en Georgia';
export const esDescription =
  'Una abogada de inmigración en Georgia explica las mociones para reabrir y reconsiderar: la diferencia entre ambas, los plazos estrictos (USCIS 30 días, corte 90/30 días), por qué una moción no detiene la deportación y cómo se comparan con una apelación ante la BIA.';

export function MotionToReopenReconsiderPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Una negación no siempre es el final. Si el Servicio de Ciudadanía e Inmigración de Estados Unidos (USCIS)
        rechazó su solicitud, o si un juez de inmigración le negó un alivio u ordenó su deportación, es posible que
        pueda pedirle a la misma oficina que falló en su contra que vuelva a examinar el caso. Las herramientas para
        ello son la <strong>moción para reabrir</strong> y la <strong>moción para reconsiderar</strong> &mdash; dos de
        los recursos más importantes y peor entendidos del derecho migratorio. Suelen ser más rápidos y económicos que
        una apelación completa, pero vienen con plazos que es fácil dejar pasar.
      </p>
      <p>
        Si está lidiando con un caso negado en Georgia &mdash; ya sea ante USCIS o ante la Corte de Inmigración de
        Atlanta &mdash; esta guía explica qué es cada moción, los plazos estrictos, el dato crítico de que una moción
        por lo general <em>no</em> detiene por sí sola una deportación, y en qué se diferencian estas mociones de una{' '}
        <Link href="/es/blog/bia-appeal-immigration-court-georgia">apelación ante la BIA</Link>. Como el reloj empieza
        el mismo día en que lo niegan, hablar pronto con un{' '}
        <strong>abogado de apelaciones de inmigración en Georgia</strong> es decisivo.
      </p>

      <h2>Moción para Reabrir vs. Moción para Reconsiderar: La Diferencia Esencial</h2>
      <p>
        Estas dos mociones suenan parecidas, pero atacan una negación desde direcciones opuestas. Elegir la correcta
        &mdash; o presentar ambas &mdash; es la primera decisión estratégica en cualquier caso posterior a una
        negación.
      </p>
      <ul>
        <li>
          <strong>Una moción para reabrir (MTR)</strong> dice: <em>&ldquo;Hay hechos nuevos o pruebas nuevas que la
          autoridad que decidió nunca vio.&rdquo;</em> Se trata de hechos cambiados o recién disponibles &mdash; no de
          argumentar que la decisión anterior estuvo legalmente equivocada según el expediente que ya existía. La nueva
          prueba debe ser material y no debe haber estado disponible ni haber sido descubrible al momento de la
          decisión original.
        </li>
        <li>
          <strong>Una moción para reconsiderar (MTC)</strong> dice: <em>&ldquo;Usted aplicó la ley incorrectamente a
          los hechos que ya tenía ante sí.&rdquo;</em> Señala un error legal o de política específico en la decisión
          previa y cita la ley, el reglamento o el precedente que la oficina aplicó mal. No agrega pruebas nuevas.
        </li>
      </ul>
      <p>
        Los fundamentos comunes de una <strong>moción para reabrir</strong> incluyen pruebas recién obtenidas (un
        documento que faltaba, una nueva declaración jurada, un informe forense), <strong>cambios en las condiciones
        del país</strong> en un caso de asilo, una forma de alivio recién disponible, o un{' '}
        <strong>defecto procesal</strong> como no haber recibido nunca la notificación de la audiencia. Una{' '}
        <strong>moción para reconsiderar</strong>, en cambio, es puramente legal: el juez o el oficial pasó por alto un
        precedente vinculante, interpretó mal los requisitos de elegibilidad, o ignoró pruebas que ya estaban en el
        expediente.
      </p>

      <h2>Negaciones de USCIS: El Formulario I-290B y el Plazo de 30 Días</h2>
      <p>
        Si USCIS negó una petición o solicitud &mdash; por ejemplo, una petición familiar I-130, un ajuste de estatus
        I-485 o una exención (waiver) &mdash; por lo general usted presenta una moción (o una apelación) en el{' '}
        <strong>Formulario I-290B, Aviso de Apelación o Moción</strong>. El plazo es de <strong>30 días</strong> a
        partir de la fecha de la decisión (<strong>33 días</strong> si USCIS se la envió por correo). Es mucho más
        corto de lo que muchos suponen, y no hay prórrogas de rutina.
      </p>
      <p>
        Una <strong>moción para reabrir</strong> ante USCIS debe estar respaldada por hechos nuevos y prueba documental
        &mdash; declaraciones juradas, registros o pruebas que no existían o no podían obtenerse antes. Una{' '}
        <strong>moción para reconsiderar</strong> ante USCIS debe demostrar que la decisión se basó en una aplicación
        incorrecta de la ley o la política, y debe sustentarse en autoridad legal. Presentar la moción equivocada, o
        presentarla sin el expediente de respaldo adecuado, es una razón frecuente por la que estas mociones fracasan.
      </p>

      <h2>Negaciones de la Corte de Inmigración: 90 Días para Reabrir, 30 para Reconsiderar</h2>
      <p>
        Si un juez de inmigración de la <strong>Corte de Inmigración de Atlanta</strong> &mdash; o la corte dentro del{' '}
        <strong>Centro de Detención de Stewart</strong> en Lumpkin &mdash; negó su caso u ordenó su deportación, los
        plazos los fija la Ley de Inmigración y Nacionalidad (INA) y son distintos de las reglas de USCIS:
      </p>
      <ul>
        <li>
          <strong>Moción para reabrir:</strong> dentro de los <strong>90 días</strong> siguientes a la orden
          administrativa definitiva. Por lo general usted tiene derecho a <strong>una</strong> moción para reabrir, y
          debe presentar prueba material que no estaba disponible en la audiencia anterior.
        </li>
        <li>
          <strong>Moción para reconsiderar:</strong> dentro de los <strong>30 días</strong> siguientes a la orden
          administrativa definitiva, también limitada por lo general a <strong>una</strong>, identificando los errores
          de derecho o de hecho en la decisión.
        </li>
      </ul>
      <p>
        Estos plazos son implacables, y los casos de personas detenidas en Stewart avanzan con un calendario comprimido
        que deja aún menos tiempo práctico para actuar. Presentar la moción ante la corte correcta &mdash; el juez de
        inmigración si el caso nunca subió en apelación, o la Junta de Apelaciones de Inmigración si sí lo hizo &mdash;
        es en sí mismo un punto común de fracaso.
      </p>

      <h2>La Advertencia Crítica: Una Moción Por Lo General No Detiene Su Deportación</h2>
      <p>
        Esto es lo más importante que hay que entender, y es donde las mociones se diferencian marcadamente de las
        apelaciones. Una <strong>apelación oportuna ante la BIA suspende automáticamente la deportación</strong>{' '}
        &mdash; el gobierno no puede deportarlo mientras está pendiente. Una <strong>moción para reabrir o
        reconsiderar no lo hace</strong>. Presentar la moción no detiene por sí sola una orden de deportación. Usted
        debe <strong>solicitar por separado una suspensión de la deportación (stay of removal)</strong>, y el juez de
        inmigración, la Junta o ICE debe concederla. Si presenta una moción pero no se concede una suspensión, ICE
        puede ejecutar la deportación mientras la moción sigue sin resolverse.
      </p>
      <p>
        Hay una excepción importante. Si lo deportaron <strong>en ausencia (in absentia)</strong> &mdash; porque faltó
        a una audiencia &mdash; una moción oportuna para reabrir esa orden <em>sí</em> suspende automáticamente la
        deportación mientras está pendiente. Esa es una razón por la que los casos en ausencia se tratan como
        emergencias urgentes.
      </p>

      <h2>Presentaciones Tardías: Excepciones y &ldquo;Circunstancias Excepcionales&rdquo;</h2>
      <p>
        Los plazos tienen unas pocas salidas de emergencia muy limitadas, y dependen de los hechos:
      </p>
      <ul>
        <li>
          <strong>Cambios en las condiciones del país.</strong> Una moción para reabrir un caso de asilo o de
          suspensión de la deportación (withholding) basada en condiciones materialmente cambiadas en su país de origen{' '}
          <strong>no tiene plazo ni límite numérico</strong> &mdash; siempre que la prueba sea nueva y no haya estado
          disponible antes.
        </li>
        <li>
          <strong>Órdenes en ausencia.</strong> Si faltó a su audiencia por{' '}
          <strong>circunstancias excepcionales</strong> &mdash; una enfermedad grave, la muerte de un familiar
          inmediato, o una emergencia comparable fuera de su control &mdash; puede pedir la reapertura dentro de{' '}
          <strong>180 días</strong>. Si en realidad nunca recibió la notificación de la audiencia, por lo general no
          hay ningún límite de tiempo.
        </li>
        <li>
          <strong>Suspensión equitativa del plazo (equitable tolling).</strong> En situaciones limitadas &mdash; con
          mayor frecuencia la <strong>asistencia ineficaz del abogado anterior</strong> o un fraude que impidió una
          presentación oportuna &mdash; los tribunales, incluido el Onceavo Circuito (Eleventh Circuit) que rige en
          Georgia, han reconocido que el plazo puede pausarse. Estos reclamos tienen requisitos procesales estrictos
          propios y son difíciles de ganar.
        </li>
      </ul>

      <h2>En Qué Se Diferencia de una Apelación ante la BIA &mdash; y Cuándo Usar Cada Una</h2>
      <p>
        Es común confundir las mociones con las apelaciones, pero cumplen funciones distintas:
      </p>
      <ul>
        <li>
          <strong>Una apelación</strong> sube <em>hacia arriba</em>, a un organismo superior (la BIA), y argumenta que
          el juez se equivocó en el derecho o en los hechos <em>según el expediente que ya existe</em>. Debe
          presentarse dentro de 30 días y suspende su deportación automáticamente.
        </li>
        <li>
          <strong>Una moción para reabrir o reconsiderar</strong> regresa <em>hacia atrás</em>, a la misma oficina que
          decidió el caso. Reabrir agrega pruebas nuevas; reconsiderar argumenta un error legal. Ninguna de las dos
          detiene automáticamente una deportación.
        </li>
      </ul>
      <p>
        La estrategia depende de los hechos. Si el juez cometió un error legal claro sobre el expediente existente y la
        ventana de 30 días sigue abierta, una{' '}
        <Link href="/es/blog/bia-appeal-immigration-court-georgia">apelación ante la BIA</Link> suele ser la vía más
        sólida y segura por la suspensión automática. Si el problema es prueba nueva &mdash; un matrimonio, un familiar
        que califica, un país que se ha vuelto peligroso, un documento que por fin obtuvo &mdash; una moción para
        reabrir puede ser el único camino. A veces la respuesta correcta es buscar más de un recurso a la vez. Estas no
        son decisiones intercambiables, y la elección equivocada puede hacerle perder el caso.
      </p>

      <h2>Contexto de Georgia: Atlanta y Stewart</h2>
      <p>
        Los inmigrantes de Georgia enfrentan dos foros muy distintos. La <strong>Corte de Inmigración de Atlanta</strong>{' '}
        atiende los casos de personas no detenidas en el área metropolitana y gran parte del estado. La corte dentro
        del <strong>Centro de Detención de Stewart</strong> atiende casos de personas detenidas con un calendario
        acelerado, donde la ventana práctica para presentar una moción &mdash; y para solicitar una suspensión antes de
        que se ejecute una deportación &mdash; puede ser de apenas unos días. Si un ser querido está detenido,
        conseguir su liberación suele ser la primera prioridad; consulte nuestra guía sobre las{' '}
        <Link href="/es/blog/immigration-bond-hearing-georgia">audiencias de fianza de inmigración y la detención por ICE en Georgia</Link>.
        Para el panorama completo de cómo se desarrolla un caso de deportación, lea{' '}
        <Link href="/es/blog/deportation-defense-removal-proceedings-georgia">cómo funcionan la defensa de deportación y los procesos de remoción en Georgia</Link>.
      </p>

      <h2>Por Qué Importa Tener un Abogado en una Moción</h2>
      <p>
        Las mociones se ganan con plazos, la teoría legal correcta y un expediente construido para persuadir. Un
        abogado con experiencia puede confirmar la fecha exacta en que vence su plazo, decidir si una moción para
        reabrir, una moción para reconsiderar, una apelación o una combinación le da la mejor oportunidad, reunir las
        pruebas nuevas en forma admisible, presentar una solicitud de suspensión por separado para que ICE no pueda
        deportarlo mientras la moción está pendiente, y fundamentar el argumento en la autoridad vinculante de USCIS,
        EOIR y el Onceavo Circuito. Un abogado también puede decirle con franqueza cuándo una moción no puede tener
        éxito, para que no gaste su única presentación permitida en una teoría perdedora.
      </p>

      <h2>Hable con una Abogada de Apelaciones de Inmigración en Georgia</h2>
      <p>
        Si USCIS o un juez de inmigración ha negado su caso, es posible que solo le queden días para actuar.
        Comuníquese con <strong>Bardi Immigration Law</strong>. La abogada <strong>Eszter Bardi</strong> representa a
        clientes ante USCIS, las cortes de inmigración de Atlanta y Stewart y la Junta de Apelaciones de Inmigración,
        tiene licencia en <strong>Georgia y Alabama</strong>, y ofrece acceso directo con la abogada &mdash; usted
        habla con su abogada, no con un especialista de admisión.
      </p>
      <p>
        El plazo no espera.{' '}
        <Link href="/es/contact">Programe una consulta hoy</Link> para averiguar si una moción para reabrir o
        reconsiderar puede salvar su caso.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación de blog tiene únicamente fines informativos y no
          constituye asesoría legal. El derecho migratorio es complejo, depende de los hechos de cada caso y cambia con
          frecuencia. Los plazos de mociones y apelaciones son estrictos, y el curso de acción correcto depende de los
          hechos particulares de cada caso. Consulte a un abogado de inmigración con licencia sobre su situación
          específica.
        </em>
      </p>
    </div>
  );
}
