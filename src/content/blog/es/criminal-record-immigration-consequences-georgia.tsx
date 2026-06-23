import Link from 'next/link';
// Spanish adaptation of en/criminal-record-immigration-consequences-georgia.tsx (BAR-752, source BAR-646).
// Natural Spanish, not a literal translation. GA+AL licensed-attorney framing preserved.
// Verify before publish — references immigration law/procedure (INA removability grounds, aggravated felony /
// CIMT definitions, EOIR Atlanta court) that can change and are highly fact-specific. Confirm against
// USCIS/EOIR/INA and have an attorney review before go-live.

export const esTitle = 'Antecedentes Penales y Consecuencias Migratorias en Georgia';
export const esDescription =
  'Una abogada de inmigración en Georgia explica cómo las condenas penales afectan el estatus migratorio: delitos agravados, delitos de vileza moral, delitos de drogas y DUIs, el efecto sobre la green card, la ciudadanía y las visas, y qué hacer si lo acusan de un delito. Corte de inmigración de Atlanta.';

export function CriminalRecordPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Para un ciudadano estadounidense, un cargo penal es un problema que se resuelve en la corte criminal. Para una
        persona que no es ciudadana &mdash; un residente permanente, un titular de visa, un beneficiario de DACA o
        alguien indocumentado &mdash; el mismo cargo puede acarrear una segunda sanción oculta que el caso penal nunca
        menciona: la deportación. Una declaración de culpabilidad (plea) que a un abogado penalista le parece un buen
        acuerdo puede, de forma silenciosa, desencadenar la remoción, impedir una green card o destruir el camino hacia
        la ciudadanía.
      </p>
      <p>
        Si usted no es ciudadano estadounidense y ha sido arrestado, acusado o condenado por un delito en Georgia, las
        consecuencias migratorias pueden ser mucho más graves que la propia pena penal. Esta guía explica cómo las
        condenas penales afectan el estatus migratorio, qué delitos cargan las consecuencias migratorias más severas y
        qué hacer si enfrenta cargos. Es información general, no asesoría legal &mdash; y, como las reglas dependen tanto
        de los hechos de cada caso, el paso más importante es hablar con un abogado de inmigración{' '}
        <em>antes</em> de tomar cualquier decisión en su caso penal.
      </p>

      <h2>Por Qué un Caso Penal También Es un Caso de Inmigración</h2>
      <p>
        La ley federal de inmigración &mdash; la Ley de Inmigración y Nacionalidad (INA) &mdash; trata ciertos delitos
        como motivos para deportar a una persona no ciudadana de los Estados Unidos o para negarle un beneficio
        migratorio. Estas consecuencias aplican a casi todas las personas que no son ciudadanas, incluidos los
        residentes permanentes legales (titulares de green card). Un residente de muchos años puede ser puesto en un
        proceso de remoción por una sola condena que califique.
      </p>
      <p>
        Algo fundamental: la ley de inmigración no siempre define los delitos de la misma manera que el código penal de
        Georgia. Las consecuencias migratorias de un cargo dependen de cómo se clasifica el delito bajo la ley{' '}
        <em>federal</em> de inmigración, del estatuto exacto bajo el que se le condena, del lenguaje específico de su
        declaración de culpabilidad y, a veces, de la duración de la sentencia impuesta &mdash; no simplemente del
        nombre del cargo. Dos personas condenadas por lo que suena como el mismo delito pueden enfrentar resultados
        migratorios completamente distintos. Por eso, nunca se debe aceptar una declaración de culpabilidad sin entender
        su efecto migratorio.
      </p>

      <h2>Las Categorías de Delitos que Desencadenan la Remoción</h2>
      <p>
        La ley de inmigración agrupa los delitos que hacen a una persona deportable o inadmisible en varias categorías
        amplias. Las más importantes de entender son los delitos agravados, los delitos de vileza moral y los delitos
        relacionados con sustancias controladas.
      </p>

      <h3>Delitos Agravados (Aggravated Felonies)</h3>
      <p>
        &ldquo;Delito agravado&rdquo; (<em>aggravated felony</em>) es un término exclusivo de la ley de inmigración, y
        resulta engañoso: un delito no tiene que ser &ldquo;agravado&rdquo; ni siquiera un delito grave (felony) bajo la
        ley estatal para contar como tal. La INA enumera una amplia gama de delitos en esta categoría, y una condena
        clasificada como delito agravado acarrea las consecuencias migratorias más severas de toda la ley. Puede hacer a
        una persona casi automáticamente deportable, impedir la mayoría de las formas de alivio contra la remoción y
        crear una barra permanente para volver a entrar a los Estados Unidos. Para la mayoría de las personas, una
        condena por delito agravado es el peor resultado migratorio posible de un caso penal.
      </p>

      <h3>Delitos de Vileza Moral (CIMT)</h3>
      <p>
        Un &ldquo;delito de vileza moral&rdquo; (<em>crime involving moral turpitude</em> o CIMT) es una categoría más
        difusa que, por lo general, se refiere a una conducta considerada inherentemente deshonesta o depravada &mdash;
        los delitos que implican fraude, robo o intención de causar daño son ejemplos comunes. Determinar si un delito
        en particular califica es una cuestión muy litigada que depende de los hechos. Según el momento, el número de
        delitos y la pena posible, un CIMT puede hacer a una persona deportable o inadmisible. Un solo CIMT puede ser
        perdonado bajo excepciones estrechas; varios CIMT por lo general no lo son.
      </p>

      <h3>Delitos de Sustancias Controladas (Drogas)</h3>
      <p>
        Las condenas relacionadas con drogas están entre las más peligrosas para los no ciudadanos. Con una excepción
        muy limitada que algunos tribunales reconocen para un único delito menor de posesión, la mayoría de las condenas
        por sustancias controladas &mdash; incluidas la posesión, la distribución y el tráfico &mdash; hacen a una
        persona tanto deportable como inadmisible. Algunos delitos de drogas también se clasifican como delitos
        agravados, lo que agrava aún más las consecuencias. Incluso una conducta que no resulta en ningún día de cárcel
        bajo la ley de Georgia puede acarrear severas penas migratorias.
      </p>

      <h3>Otros Delitos de Alto Riesgo</h3>
      <p>
        Varias otras categorías acarrean consecuencias migratorias específicas, incluidos ciertos delitos con armas de
        fuego, los delitos de violencia doméstica y las violaciones de órdenes de protección, y los delitos de fraude.
        La lista es larga y técnica, y las nuevas condenas se evalúan frente a definiciones federales que cambian a
        través de las decisiones de los tribunales. La conclusión no es memorizar las categorías &mdash; es asumir que{' '}
        <em>cualquier</em> cargo penal podría acarrear consecuencias migratorias y conseguir que lo revisen.
      </p>

      <h2>¿Y un DUI en Georgia?</h2>
      <p>
        Una de las preguntas más comunes que escuchan los abogados de inmigración es si un DUI afecta el estatus
        migratorio. Un DUI simple y único, por sí solo, generalmente no se trata como un delito deportable de vileza
        moral ni como un delito agravado. Pero esa tranquilidad viene con advertencias serias. Un DUI combinado con
        otros factores &mdash; conducir con la licencia suspendida, un menor en el vehículo, drogas de por medio,
        lesiones o reincidencia &mdash; puede cambiar el análisis. Los DUIs también pueden afectar decisiones
        discrecionales: pueden dañar la demostración de &ldquo;buen carácter moral&rdquo; que exige la naturalización y
        otros beneficios, y pueden pesar en su contra cuando un oficial o un juez decide si otorga un alivio. Un DUI
        nunca es algo que una persona no ciudadana deba tratar como un simple asunto de tránsito.
      </p>

      <h2>Cómo Afectan las Condenas su Estatus Específico</h2>
      <ul>
        <li>
          <strong>Titulares de green card (residentes permanentes legales):</strong> una condena que califique puede
          colocarlo en un proceso de remoción a pesar de años de residencia legal, y puede hacerlo inadmisible la
          próxima vez que viaje al extranjero e intente reingresar.
        </li>
        <li>
          <strong>Solicitantes de una green card o visa:</strong> muchos delitos hacen a una persona
          &ldquo;inadmisible&rdquo;, lo que significa que una solicitud de green card, visa o ajuste de estatus puede
          ser negada. Algunas barras pueden perdonarse mediante una{' '}
          <Link href="/es/services/waivers">exención de inadmisibilidad (waiver)</Link>; muchas no.
        </li>
        <li>
          <strong>Solicitantes de naturalización:</strong> la ciudadanía estadounidense exige demostrar &ldquo;buen
          carácter moral&rdquo;. Ciertas condenas son barras permanentes a la ciudadanía; otras, dentro del período
          legal de revisión, pueden llevar a una negación. Solicitar la ciudadanía con un historial penal no revelado
          puede incluso desencadenar un proceso de remoción.
        </li>
        <li>
          <strong>Beneficiarios de DACA e inmigrantes indocumentados:</strong> una condena penal puede poner fin a la
          elegibilidad de DACA y exponer a la persona a la detención y la remoción. El riesgo es inmediato.
        </li>
      </ul>

      <h2>Dónde se Deciden Estos Casos: la Corte de Inmigración de Atlanta</h2>
      <p>
        Si una condena penal conduce a un proceso de remoción, su caso de inmigración no se verá en una corte estatal de
        Georgia, sino ante un juez de inmigración dentro del sistema federal administrado por <strong>EOIR</strong>
        {' '}&mdash; la Oficina Ejecutiva de Revisión de Casos de Inmigración. Para la mayoría de las personas que viven
        en Georgia, eso significa la <strong>Corte de Inmigración de Atlanta</strong>. Las personas detenidas por ICE
        pueden tener su caso ante la corte dentro del <strong>Centro de Detención de Stewart</strong> en Lumpkin,
        Georgia, donde los casos avanzan con un calendario mucho más rápido. Incluso cuando una condena hace a alguien
        removible, todavía pueden existir defensas y formas de alivio. Nuestra guía sobre la{' '}
        <Link href="/es/blog/deportation-defense-removal-proceedings-georgia">
          defensa contra la deportación en Georgia
        </Link>{' '}
        explica cómo funcionan los procesos de remoción y qué defensas pueden estar disponibles.
      </p>

      <h2>Qué Hacer si lo Acusan de un Delito Siendo No Ciudadano</h2>
      <p>
        Las decisiones que tome en los primeros días de un caso penal pueden determinar su futuro migratorio. Los
        siguientes pasos protegen sus opciones:
      </p>
      <ul>
        <li>
          <strong>Dígale a su abogado penalista que no es ciudadano estadounidense &mdash; de inmediato.</strong> Muchos
          excelentes abogados penalistas no se especializan en derecho migratorio. Necesitan conocer su estatus para no
          negociar una declaración de culpabilidad que resuelva el caso penal pero desencadene la deportación.
        </li>
        <li>
          <strong>Involucre a un abogado de inmigración antes de aceptar cualquier declaración de culpabilidad.</strong>{' '}
          La diferencia entre dos ofertas de plea &mdash; o incluso la redacción precisa de una sola declaración
          &mdash; puede ser la diferencia entre conservar su estatus y perderlo. Este es el punto más importante de toda
          esta guía.
        </li>
        <li>
          <strong>No suponga que &ldquo;sin cárcel&rdquo; significa &ldquo;sin problema migratorio&rdquo;.</strong> La
          libertad condicional, una multa, un programa de desvío (diversion) o un resultado diferido pueden contar como
          una condena para fines migratorios.
        </li>
        <li>
          <strong>Tenga cuidado con los viajes.</strong> Si tiene cualquier historial penal, salir y reingresar a los
          Estados Unidos puede exponerlo a una determinación de inadmisibilidad. Hable con un abogado de inmigración
          antes de cualquier viaje internacional.
        </li>
        <li>
          <strong>No ignore condenas antiguas.</strong> Una condena de hace años puede aparecer durante la renovación de
          una green card, una solicitud de naturalización o el reingreso. Haga revisar su récord antes de presentar
          cualquier trámite.
        </li>
      </ul>

      <h2>Este No Es el Momento de Adivinar</h2>
      <p>
        La intersección entre el derecho penal y el derecho migratorio &mdash; lo que los abogados llaman
        &ldquo;crimmigration&rdquo; &mdash; es una de las áreas más complejas y de cambio más rápido de toda la ley. Las
        categorías anteriores son generalizaciones, y el resultado de cualquier caso real depende del estatuto exacto,
        del lenguaje de la declaración de culpabilidad, de la sentencia, de su historial migratorio y de las decisiones
        vigentes de los tribunales federales. Nada de lo aquí expuesto sustituye la asesoría sobre su situación
        específica. El costo de equivocarse &mdash; la separación permanente de su familia, la pérdida de una green card
        que ha tenido por décadas, una barra que nunca podrá subsanarse &mdash; es sencillamente demasiado alto.
      </p>

      <h2>Hable con una Abogada de Inmigración en Georgia Antes de Actuar</h2>
      <p>
        Si usted es una persona no ciudadana que ha sido arrestada, acusada o condenada &mdash; o si tiene una condena
        antigua y le preocupa renovar su green card, solicitar la ciudadanía o viajar &mdash; no espere. Comuníquese de
        inmediato con <strong>Bardi Immigration Law</strong>. La abogada <strong>Eszter Bardi</strong> maneja la{' '}
        <Link href="/es/services/removal-defense">defensa contra la deportación</Link> y las consecuencias migratorias
        de los casos penales ante las cortes de inmigración de Atlanta y Stewart. Tiene licencia en{' '}
        <strong>Georgia y Alabama</strong> y ofrece acceso directo con la abogada desde su primera consulta. Cuando es
        apropiado, trabaja junto a su abogado penalista para proteger tanto su caso como su estatus.
      </p>
      <p>
        El tiempo es crítico, especialmente si se acerca una audiencia de declaración de culpabilidad o si ya está en un
        proceso. <Link href="/es/contact">Programe una consulta urgente ahora</Link>.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación de blog tiene únicamente fines informativos y no
          constituye asesoría legal. No analiza ningún estatuto penal específico ni su caso individual. Las
          consecuencias migratorias de las condenas penales dependen mucho de los hechos de cada caso y la ley cambia
          con frecuencia. Consulte a un abogado de inmigración con licencia sobre su situación antes de tomar cualquier
          decisión en un caso penal.
        </em>
      </p>
    </div>
  );
}
