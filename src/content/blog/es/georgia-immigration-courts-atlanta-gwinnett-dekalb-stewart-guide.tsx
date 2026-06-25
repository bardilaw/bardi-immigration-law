import Link from 'next/link';
// Adaptación al español de en/georgia-immigration-courts-atlanta-gwinnett-dekalb-stewart-guide.tsx (BAR-854). Español natural, no traducción literal.

export const esTitle = 'Cortes de Inmigración en Georgia: Atlanta, Stewart y Cómo Funciona el Sistema';
export const esDescription =
  'Una abogada de inmigración en Georgia explica cómo están organizadas las cortes de inmigración del estado: la Corte de Atlanta (no detenidos en el centro de Atlanta) y la Corte de Stewart (detenidos en Lumpkin), por qué no hay corte en Gwinnett ni DeKalb, la línea directa de EOIR 1-800-898-7180 y el portal acis.eoir.justice.gov para consultar fechas de audiencia, cómo solicitar un aplazamiento o cambio de jurisdicción, la diferencia entre EOIR y la Oficina de Deportación de ICE, y qué hacer al recibir una Notificación para Comparecer. Información general, no asesoría legal.';

export function GeorgiaImmigrationCourtsPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Si tiene una audiencia en la corte de inmigración y vive en Georgia, una de las primeras cosas que necesita
        saber es <strong>dónde se lleva su caso realmente</strong> — y quién está al otro lado de él. Georgia cuenta
        con dos cortes de inmigración: la <strong>Corte de Inmigración de Atlanta</strong> en el centro de la ciudad
        para personas que no están detenidas, y la <strong>Corte de Inmigración de Stewart</strong> en la rural
        Lumpkin para personas que están recluidas. No hay ningún juzgado independiente en Gwinnett, DeKalb, Cobb ni
        ningún otro condado, aunque son algunos de los lugares con más población inmigrante del sureste. Esta guía
        explica cómo está organizado el sistema, cómo buscar su propia audiencia y las mociones que mueven o pausan
        un caso — para que nunca tenga que adivinar sobre la fecha más importante de su calendario.
      </p>

      <h2>La Corte de Inmigración de Atlanta (en el Centro, sobre Peachtree)</h2>
      <p>
        La <strong>Corte de Inmigración de Atlanta</strong> se encuentra en el centro de Atlanta sobre Peachtree
        Street y es el lugar principal para los respondentes <strong>no detenidos</strong> de todo el norte y centro
        de Georgia. Si recibió un{' '}
        <Link href="/es/blog/notice-to-appear-georgia">Aviso de Comparecencia</Link> y vive en la comunidad — no bajo
        custodia — aquí es casi con certeza donde se programarán sus audiencias de calendario general e individuales.
        Es una de las cortes de inmigración más ocupadas del país, con una acumulación de cientos de miles de casos,
        que es exactamente por qué entender el proceso importa tanto.
      </p>
      <p>
        Este es el punto que confunde a miles de residentes de Georgia cada año:{' '}
        <strong>no hay corte de inmigración en Gwinnett ni en DeKalb.</strong> Las personas buscan esos términos
        porque los condados de Gwinnett y DeKalb tienen poblaciones inmigrantes enormes, pero ninguno de los dos
        condados tiene su propio juzgado del EOIR. Si vive en Gwinnett, DeKalb, Cobb, Hall, Whitfield o en cualquier
        otro lugar del norte o centro de Georgia y no está detenido(a), su audiencia es en la Corte de Inmigración
        de Atlanta. Siempre lea la dirección impresa en su propio aviso de audiencia — pero para la gran mayoría de
        los residentes del área metropolitana de Atlanta, la respuesta es la corte del centro de Atlanta.
      </p>

      <h2>La Corte de Inmigración de Stewart (Lumpkin, para Casos de Detenidos)</h2>
      <p>
        La segunda corte de Georgia es la <strong>Corte de Inmigración de Stewart</strong>, ubicada dentro del Centro
        de Detención de Stewart en Lumpkin, aproximadamente a dos horas y media al suroeste de Atlanta. Stewart
        atiende los casos de personas que están <strong>detenidas</strong>. Los calendarios allí se mueven mucho más
        rápido que en Atlanta, la instalación es remota y el acceso a asistencia legal es más difícil — todo lo cual
        hace que los casos de detenidos sean más urgentes y más difíciles de defender. Si un ser querido ha sido
        trasladado a Stewart, el caso está en un camino diferente y más rápido que un caso de Atlanta no detenido, y
        involucrar a un abogado desde el principio es crítico.
      </p>

      <h2>Dónde Encaja Georgia en la Estructura del EOIR — y Por Qué Importa el Circuito</h2>
      <p>
        Ambas cortes de Georgia son parte de la{' '}
        <strong>Oficina Ejecutiva para la Revisión de Inmigración (EOIR)</strong>, una agencia dentro del{' '}
        <em>Departamento de Justicia</em> de EE. UU. Los jueces ante los que usted comparece son jueces de
        inmigración, no jueces federales de distrito, y la corte es administrativa — no parte del sistema judicial
        federal regular. Cuando un respondente pierde, la primera apelación va a la{' '}
        <strong>Junta de Apelaciones de Inmigración (BIA)</strong>, también parte del EOIR.
      </p>
      <p>
        A partir de ahí, la siguiente apelación — una petición de revisión — va a la corte federal de apelaciones de
        la región. <strong>Georgia está en el Undécimo Circuito</strong>, la Corte de Apelaciones de EE. UU. que
        cubre Georgia, Florida y Alabama. Esto confunde constantemente a abogados de otros estados: los casos de
        Georgia <strong>no</strong> están regidos por la ley de inmigración del Noveno Circuito, que a menudo es más
        favorable para los respondentes. El precedente controlante para un caso de Atlanta o Stewart proviene del
        Undécimo Circuito y la BIA, y esa ley es frecuentemente más estricta. Cualquier abogado que maneje un caso
        de remoción en Georgia debe estar construyendo el expediente para la revisión del Undécimo Circuito desde el
        primer día.
      </p>

      <h2>Cómo Consultar su Fecha de Audiencia</h2>
      <p>
        Nunca tiene que adivinar sobre su fecha en la corte, y nunca debe perdérsela — si no se presenta, puede
        dictarse una orden de remoción <em>in absentia</em> sin que usted esté en la sala. El EOIR le ofrece dos
        formas gratuitas de consultar su propio caso:
      </p>
      <ul>
        <li>
          <strong>La línea telefónica automatizada:</strong> llame a la línea de información de casos del EOIR al{' '}
          <strong>1-800-898-7180</strong> (disponible en inglés y español, 24 horas). Ingrese su{' '}
          <strong>número A</strong> — el &ldquo;Número de Registro de Extranjero&rdquo; de nueve dígitos que
          comienza con la letra A, impreso en su NTA y otros documentos del gobierno — y el sistema le indicará su
          próxima fecha y hora de audiencia y la ubicación de la corte, además del estado de cualquier decisión.
        </li>
        <li>
          <strong>El portal en línea:</strong> el sistema de información automatizada de casos del EOIR en{' '}
          <strong>acis.eoir.justice.gov</strong> le permite ingresar el mismo número A en la web para ver su próxima
          audiencia y el estado del caso. Es la forma más rápida de confirmar una fecha antes de hacer planes de
          viaje o trabajo.
        </li>
      </ul>
      <p>
        Verifique regularmente. Las cortes reprograman audiencias, a veces con poco aviso, y la responsabilidad de
        conocer su fecha es suya. Confirme el día y la ubicación antes de cada comparecencia.
      </p>

      <h2>Solicitar un Aplazamiento</h2>
      <p>
        Un <strong>aplazamiento</strong> es una solicitud para posponer una audiencia programada a una fecha
        posterior. Lo solicita mediante una moción escrita (u oralmente en la corte), y debe demostrar{' '}
        <strong>causa justificada</strong> — por ejemplo, que necesita tiempo para encontrar un abogado, reunir
        documentos o esperar una solicitud relacionada como una petición familiar pendiente. El juez decide si lo
        concede, y hoy en día los aplazamientos se otorgan con más restricciones que antes. Una solicitud vaga o de
        último momento a menudo se deniega, así que la razón debe ser concreta y bien documentada.
      </p>

      <h2>Cambiar la Jurisdicción si se Muda</h2>
      <p>
        Los casos de inmigración siguen a las personas, y las personas se mudan. Si su caso está programado en
        Atlanta pero usted se muda a otro estado — o si le sirvieron el NTA mientras pasaba por una parte del país y
        realmente vive en Georgia — puede presentar una{' '}
        <strong>moción para cambiar la jurisdicción</strong> y mover el caso a la corte más cercana a su hogar. Para
        ganar esa moción generalmente debe hacer tres cosas: responder a (admitir o negar) las alegaciones en el
        NTA, indicar qué alivio tiene la intención de solicitar y dar a la corte su dirección actual con una buena
        razón por la que el nuevo lugar es más conveniente. Las mociones de jurisdicción son discrecionales, y una
        descuidada puede ser denegada — pero una moción limpia puede ahorrarle cientos de kilómetros de viaje por
        cada audiencia.
      </p>
      <p>
        Una advertencia: un cambio de dirección no es opcional. Está legalmente obligado a notificar a la corte
        cualquier mudanza en el Formulario EOIR-33 dentro de cinco días. Si se muda y la corte sigue enviando avisos
        a su dirección anterior, una audiencia puede avanzar sin usted y terminar en una orden in absentia.
      </p>

      <h2>Quién Adjudica vs. Quién Hace Cumplir: La Oficina de Deportación de ICE en Atlanta</h2>
      <p>
        Es fácil confundir &ldquo;la corte&rdquo; con &ldquo;ICE&rdquo;, pero son dos partes diferentes del gobierno
        con dos trabajos diferentes — y conocer la diferencia le ayuda a entender quién controla qué.
      </p>
      <ul>
        <li>
          <strong>EOIR (Departamento de Justicia)</strong> administra las cortes. El juez de inmigración{' '}
          <em>adjudica</em> — decide si usted es removible y si califica para alivio.
        </li>
        <li>
          <strong>ICE Operaciones de Ejecución y Deportación (Departamento de Seguridad Nacional)</strong> es el lado
          de ejecución. Sus abogados de juicio procesan el caso en su contra en la corte, y ICE ERO es la agencia que
          detiene a las personas y <em>ejecuta</em> una orden de remoción definitiva una vez que termina el proceso
          judicial.
        </li>
      </ul>
      <p>
        Para Georgia, el centro de ejecución relevante es la <strong>Oficina de Campo de ICE ERO en Atlanta</strong>,
        cuya área de responsabilidad cubre <strong>Georgia, Carolina del Norte y Carolina del Sur</strong>. (Tennessee
        y Alabama son manejados por la Oficina de Campo de ICE en Nueva Orleans, no Atlanta — una confusión común.)
        La conclusión práctica: el juez decide su caso, pero ICE ERO es quien aparece para ejecutar una orden de
        deportación y quien supervisa a las personas en libertad condicional a través de controles de presentación y
        monitores de tobillo. Ganar en la corte es lo que mantiene a ERO fuera del panorama.
      </p>

      <h2>Qué Hacer Después de Recibir un NTA</h2>
      <p>
        El Aviso de Comparecencia es el documento de cargos que abre un caso de remoción, y el reloj comienza en el
        momento en que lo tiene. Sus próximos pasos son directos pero urgentes en el tiempo: léalo detenidamente,
        anote su número A, confirme su audiencia a través de la línea directa o el portal en línea, asegúrese de que
        la corte tenga su dirección correcta y — lo más importante — hable con un abogado de inmigración antes de su
        primera audiencia. Muchas personas en procedimientos de remoción tienen defensas reales, desde la{' '}
        <Link href="/es/blog/cancellation-of-removal-georgia">cancelación de remoción</Link> hasta el asilo y la{' '}
        <Link href="/es/blog/withholding-of-removal-immigration-court-georgia">retención de remoción</Link>, y en el
        caso correcto un juez puede{' '}
        <Link href="/es/blog/administrative-closure-immigration-court-georgia">cerrar administrativamente</Link> el
        asunto mientras se desarrolla otro camino. Nuestra guía completa sobre{' '}
        <Link href="/es/blog/notice-to-appear-georgia">qué significa un NTA y cómo responder</Link> recorre el
        documento línea por línea, y nuestro resumen de la{' '}
        <Link href="/es/blog/deportation-defense-removal-proceedings-georgia">defensa contra la deportación en
        Georgia</Link> explica cómo se desarrollan los procedimientos de principio a fin.
      </p>

      <h2>Hable con un Abogado de Inmigración en Georgia</h2>
      <p>
        Las cortes de inmigración de Atlanta y Stewart tienen cada una su propio ritmo, su propio paso y sus propios
        desafíos, y la ley del Undécimo Circuito hace de Georgia un lugar más difícil para defender un caso de lo que
        muchos esperan. Si usted o un familiar tiene una audiencia próxima — o acaba de recibir un Aviso de
        Comparecencia — contacte a <strong>Bardi Immigration Law</strong>. La abogada <strong>Eszter Bardi</strong>{' '}
        representa a clientes ante las cortes de inmigración de Atlanta y Stewart, tiene licencia en{' '}
        <strong>Georgia y Alabama</strong>, y brinda acceso directo con la abogada — usted habla con su abogada, no
        con un especialista de admisiones.
      </p>
      <p>
        No entre a la corte de inmigración sin conocer sus opciones.{' '}
        <Link href="/es/contact">Programe una consulta hoy</Link> y construya un plan antes de su próxima audiencia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación es solo para fines informativos y no constituye
          asesoría legal. Las ubicaciones de las cortes, los procedimientos, los números de teléfono y las políticas
          de ejecución pueden cambiar, y cada caso es específico a los hechos. Siempre confirme los detalles de su
          propia audiencia en su aviso de la corte y a través del EOIR, y consulte a un abogado de inmigración con
          licencia sobre su situación específica.
        </em>
      </p>
    </div>
  );
}
