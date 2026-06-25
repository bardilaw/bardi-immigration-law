/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (INA §235(b)(1), la expansión nacional de la deportación expedita en 2025, la regla de presencia continua de 2 años, el proceso de miedo creíble, los límites de revisión judicial bajo INA §242(e), DHS v. Thuraissigiam, barras de reingreso, I-212) que pueden cambiar. Confirmar contra el estatuto, la notificación vigente en el Registro Federal del DHS y la práctica actual del CBP/ICE antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/expedited-removal-georgia-what-it-is-rights-challenge.tsx (BAR-854). Español natural, no traducción literal.

export const esTitle = 'Deportación Expedita en Georgia: Qué Es, Sus Derechos y Cómo Impugnarla';
export const esDescription =
  'Una abogada de inmigración en Georgia explica la deportación expedita bajo INA §235(b)(1): qué es, la expansión a todo el país en enero de 2025, la regla crucial de dos años de presencia continua, quién está exento, la válvula de seguridad del miedo creíble que puede detenerla, los derechos limitados que conserva, cómo impugnar una orden con argumentos limitados de hábeas corpus, cómo difiere de los procedimientos regulares de remoción y las barras de reingreso que deja una orden expedita. Información general, no asesoría legal.';

export function ExpeditedRemovalPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        La mayoría de las personas imagina la deportación como una sala de tribunal: un juez, una audiencia, la
        oportunidad de contar su historia y pedir protección.{' '}
        <strong>La deportación expedita es lo opuesto.</strong> Es la forma en que el gobierno federal puede deportar a
        alguien <em>sin</em> una audiencia ante un juez de inmigración, a menudo a los pocos días de ser detenido —
        a veces en cuestión de horas. Un oficial, no un juez, firma la orden. Y en 2025 el gobierno amplió drásticamente
        a quiénes puede aplicarla, llegando mucho más allá de la frontera al interior del país, incluyendo aquí en
        Georgia.
      </p>
      <p>
        Si entró a los Estados Unidos sin inspección y lleva menos de dos años aquí, puede estar en riesgo. Esta guía
        explica qué es la deportación expedita, a quién afecta ahora, la única válvula de seguridad que puede
        detenerla — una <strong>entrevista de miedo creíble</strong> — las formas muy limitadas de impugnar una orden
        en la corte federal, y por qué involucrar a un{' '}
        <strong>abogado de inmigración en Georgia</strong> antes de firmar cualquier cosa puede cambiar todo.
      </p>

      <h2>¿Qué Es la Deportación Expedita?</h2>
      <p>
        La deportación expedita surge de la <strong>INA §235(b)(1)</strong> (8 U.S.C. §1225(b)(1)). Permite que un
        oficial de Aduanas y Protección Fronteriza (CBP) o del Servicio de Inmigración y Control de Aduanas (ICE)
        ordene la remoción de ciertos extranjeros sin derivar el caso a un juez de inmigración. El oficial
        generalmente toma una declaración bajo juramento (Formularios I-867A/B) y emite la orden de remoción en el{' '}
        <strong>Formulario I-860</strong>. No hay audiencia de calendario general, no hay oportunidad de solicitar la
        mayoría de las formas de alivio y no hay apelación ante la Junta de Apelaciones de Inmigración.
      </p>
      <p>
        El estatuto se aplica a personas que el gobierno trata como &ldquo;en proceso de llegada&rdquo; o como
        recién entradas que son <strong>inadmisibles</strong> por dos razones específicas: carecer de documentos de
        entrada válidos (INA §212(a)(7)) o haber cometido fraude o declaración falsa material (INA §212(a)(6)(C)). En
        términos simples, está dirigida a personas que entraron sin ser inspeccionadas y admitidas, o que intentaron
        entrar con documentos falsos o sin documentos.
      </p>

      <h2>La Expansión de 2025: Por Qué Ahora Llega al Interior</h2>
      <p>
        Durante la mayor parte de su historia, la deportación expedita se usó principalmente en la frontera y cerca de
        ella — para personas detenidas dentro de aproximadamente 160 kilómetros de la frontera que llevaban menos de
        14 días en el país. Eso cambió. En <strong>enero de 2025</strong>, el Departamento de Seguridad Nacional
        publicó un aviso en el Registro Federal expandiendo la deportación expedita <strong>en toda la medida
        permitida por el estatuto</strong>: a todo el país, y a cualquier persona que no pueda demostrar que ha estado{' '}
        <strong>presente continuamente en los Estados Unidos durante dos años o más</strong>.
      </p>
      <p>
        Ese es un cambio importante. Significa que la deportación expedita ya no es solo una herramienta fronteriza.
        Una persona detenida en Atlanta, Gwinnett, el condado de Hall o en cualquier otro lugar de Georgia puede ser
        sometida a deportación expedita si un oficial considera que entró sin inspección y no puede documentar dos
        años de presencia continua. (Al momento de escribir esto, la expansión ha sido impugnada en los tribunales; el
        panorama legal está cambiando, así que confirme la norma vigente con un abogado.)
      </p>

      <h2>La Regla de Dos Años: Quién Está Exento</h2>
      <p>
        El hecho práctico más importante sobre la deportación expedita es este:{' '}
        <strong>la carga de la prueba recae sobre usted</strong> para demostrar que ha estado aquí el tiempo
        suficiente para quedar fuera de ella. Si puede demostrar <strong>dos años o más de presencia física
        continua</strong>, no debería estar sujeto(a) a la deportación expedita — en cambio, sería colocado(a) en
        procedimientos ordinarios de remoción ante un juez de inmigración, donde conserva el derecho a una audiencia
        y a solicitar alivio.
      </p>
      <p>
        Como la carga recae sobre usted, la documentación importa enormemente. Cosas como un contrato de
        arrendamiento o recibos de renta, talones de pago, declaraciones de impuestos, facturas de servicios,
        registros médicos y escolares, correo con fechas y registros de transferencias de dinero pueden ayudar a
        establecer cuánto tiempo ha vivido aquí. Por eso las familias deben{' '}
        <strong>mantener organizadas y accesibles las pruebas de presencia continua ahora</strong>, antes de que ocurra
        cualquier encuentro.
      </p>
      <p>
        Varios grupos generalmente no están sujetos a la deportación expedita independientemente de la regla de dos
        años, incluyendo <strong>residentes permanentes legales</strong>, personas con visas válidas u otro estatus
        legal, quienes fueron admitidos como <strong>refugiados o a quienes se les concedió asilo</strong>, y{' '}
        <strong>menores no acompañados</strong> de países no contiguos (quienes tienen protecciones separadas). Los
        ciudadanos estadounidenses por supuesto no son deportables — pero sí ocurren acciones erróneas de deportación
        expedita contra ciudadanos y residentes legales, lo que es una razón más para declarar claramente su estatus y
        obtener ayuda legal rápido.
      </p>

      <h2>La Válvula de Seguridad: Miedo Creíble y Asilo</h2>
      <p>
        La deportación expedita cierra la mayoría de las puertas, pero legalmente no puede enviarlo de regreso a un
        país donde teme persecución o tortura sin una evaluación previa. Si le dice al oficial que tiene{' '}
        <strong>miedo de regresar</strong> a su país de origen, o que{' '}
        <strong>tiene intención de solicitar asilo</strong>, la ley exige que sea derivado(a) a un{' '}
        <strong>oficial de asilo para una entrevista de &ldquo;miedo creíble&rdquo;</strong>. Este es el punto de
        control crítico — y los oficiales no están obligados a extraerlo de usted, así que debe hablar.
      </p>
      <p>
        El estándar de miedo creíble está pensado como una evaluación, no como el caso completo: debe demostrar una{' '}
        <strong>&ldquo;posibilidad significativa&rdquo;</strong> de que podría establecer elegibilidad para asilo u
        otra protección relacionada. Si el oficial de asilo encuentra que tiene miedo creíble, lo sacan de la
        deportación expedita y lo colocan en <strong>procedimientos completos de remoción ante un juez de
        inmigración</strong>, donde puede buscar asilo. Si el oficial encuentra que <strong>no</strong> hay miedo
        creíble, puede solicitar una revisión rápida por un juez de inmigración — pero la ventana es corta y la
        revisión es limitada.
      </p>
      <p>
        Una precaución: el asilo tiene sus propias reglas estrictas, incluyendo el{' '}
        <Link href="/es/blog/asylum-one-year-bar-exceptions-georgia">plazo de presentación de un año</Link> y barras
        que un abogado necesita evaluar. Incluso cuando el asilo mismo está prohibido, protecciones relacionadas como
        la <Link href="/es/blog/withholding-of-removal-immigration-court-georgia">retención de remoción</Link> y la
        Convención contra la Tortura pueden seguir disponibles. Expresar miedo es lo que evita que esa puerta se
        cierre de golpe.
      </p>

      <h2>Qué Derechos Tiene — y Cuáles No</h2>
      <p>
        La deportación expedita elimina gran parte de lo que tendría en una corte de inmigración regular. Entender la
        diferencia es fundamental:
      </p>
      <ul>
        <li>
          <strong>Sin audiencia ante un juez de inmigración</strong> sobre la remoción en sí — un oficial la decide
          administrativamente, a menos que una determinación de miedo creíble lo lleve a la corte.
        </li>
        <li>
          <strong>Sin</strong>{' '}
          <Link href="/es/blog/notice-to-appear-georgia">Aviso de Comparecencia</Link> y sin audiencia de calendario
          general en el caso ordinario.
        </li>
        <li>
          <strong>Sin apelación ante la Junta de Apelaciones de Inmigración</strong> de la orden de deportación expedita.
        </li>
        <li>
          <strong>Sin derecho a un abogado pagado por el gobierno</strong> — pero absolutamente tiene derecho a
          contratar el suyo propio, y a guardar silencio en lugar de responder preguntas que podrían usarse en su contra.
        </li>
        <li>
          <strong>El derecho a solicitar una entrevista de miedo creíble</strong> si teme el regreso, y una revisión
          limitada por un juez ante una determinación negativa.
        </li>
      </ul>

      <h2>¿Puede Impugnar una Orden de Deportación Expedita?</h2>
      <p>
        Sí, pero las vías son limitadas y el Congreso deliberadamente las restringió. La revisión judicial de la
        deportación expedita está fuertemente limitada por la <strong>INA §242(e)</strong> (8 U.S.C. §1252(e)). Una
        petición federal de <strong>hábeas corpus</strong> generalmente se limita a tres preguntas: si la persona es
        en efecto un extranjero, si realmente fue ordenada de remoción bajo el estatuto de deportación expedita, y si
        es residente permanente, asilado o refugiado admitido (quienes no deberían haber estado en deportación
        expedita en absoluto). El Tribunal Supremo reforzó estos límites en <em>DHS v. Thuraissigiam</em> (2020),
        confirmando las estrictas restricciones a la revisión de hábeas corpus de las denegaciones de miedo creíble.
      </p>
      <p>
        Dentro de esos límites, un abogado con experiencia examina minuciosamente si el gobierno siguió sus propias
        reglas:
      </p>
      <ul>
        <li>
          <strong>Estatus o identidad erróneos</strong> — un ciudadano, residente permanente, asilado o refugiado
          colocado en deportación expedita por error.
        </li>
        <li>
          <strong>Prueba de dos o más años de presencia</strong> que el oficial ignoró o nunca preguntó, lo que debería
          haber significado una audiencia completa en su lugar.
        </li>
        <li>
          <strong>Un miedo de regreso que fue expresado pero nunca derivado</strong> para una entrevista de miedo
          creíble — una falla procesal grave.
        </li>
        <li>
          <strong>Coerción o defectos en la declaración bajo juramento</strong> usada para construir la orden.
        </li>
      </ul>
      <p>
        Estos desafíos se mueven rápido y son específicos a los hechos. Funcionan solo si hay un abogado involucrado
        antes de que se ejecute la deportación — lo que puede ser cuestión de días.
      </p>

      <h2>Cómo Difiere de la Remoción Regular</h2>
      <p>
        En los procedimientos ordinarios de remoción bajo la <strong>INA §240</strong>, su caso comienza con un Aviso
        de Comparecencia, va ante un juez de inmigración, puede contestar los cargos y puede solicitar alivio como la
        cancelación de remoción, el ajuste de estatus o el asilo — con derecho a apelar ante la Junta de Apelaciones
        de Inmigración. La deportación expedita comprime todo eso en una sola decisión administrativa de un oficial.
        También es distinta de la reinstauración de la remoción, que revive una orden <em>previa</em> contra alguien
        que salió y volvió a entrar. La deportación expedita, por el contrario, crea una <em>nueva</em> orden contra
        alguien a quien el gobierno trata como un recién entrado.
      </p>

      <h2>Después de una Deportación Expedita: Las Barras de Reingreso</h2>
      <p>
        Una deportación expedita es una orden formal de remoción y tiene consecuencias duraderas. Bajo la{' '}
        <strong>INA §212(a)(9)(A)</strong>, una primera remoción generalmente activa una{' '}
        <strong>barra de cinco años</strong> para regresar legalmente (más larga para remociones posteriores o ciertos
        casos agravados). Regresar sin permiso después de una remoción — especialmente después de presencia ilegal
        previa — puede activar la severa <strong>barra permanente bajo INA §212(a)(9)(C)</strong> e incluso exposición
        penal federal por reingreso ilegal. En algunas situaciones, una exención llamada{' '}
        <strong>Formulario I-212</strong> (permiso para volver a solicitar la admisión) puede ayudar, a veces junto
        con otras exenciones.
      </p>

      <h2>Qué Hacer Ahora Mismo</h2>
      <ul>
        <li>
          <strong>No firme nada</strong> del CBP o ICE antes de hablar con un abogado — especialmente un documento que
          admite una entrada reciente o que renuncia a sus derechos.
        </li>
        <li>
          <strong>Diga claramente que tiene miedo de regresar</strong> a su país si eso es verdad. Esas palabras pueden
          activar el proceso de miedo creíble.
        </li>
        <li>
          <strong>Declare su estatus legal si lo tiene</strong> — ciudadano, residente, asilado o refugiado — y pida
          mostrar prueba.
        </li>
        <li>
          <strong>Reúna y guarde prueba de dos o más años en EE. UU.</strong> ahora: contratos de arrendamiento,
          talones de pago, registros de impuestos, facturas y documentos con fecha, con copias en poder de alguien de
          confianza.
        </li>
        <li>
          <strong>Conozca sus derechos durante un encuentro.</strong> Nuestra guía sobre un{' '}
          <Link href="/es/blog/ice-enforcement-rights-georgia">encuentro con ICE en Georgia</Link> cubre los primeros
          pasos críticos.
        </li>
        <li>
          <strong>Llame a un abogado de inmigración de inmediato.</strong> Los plazos de deportación expedita se miden
          en días.
        </li>
      </ul>

      <h2>Por Qué Necesita un Abogado de Inmigración en Georgia Rápidamente</h2>
      <p>
        La deportación expedita está diseñada para la velocidad y está orientada a la deportación. Pero las
        protecciones son reales: la regla de dos años, la válvula de seguridad del miedo creíble, los límites sobre
        quién puede estar en el proceso en absoluto, y los reducidos desafíos federales a una orden defectuosa.
        Ninguna funciona si espera o si enfrenta el sistema solo.
      </p>
      <p>
        Si usted o un ser querido está en riesgo de deportación expedita en Georgia o Alabama, contacte a{' '}
        <strong>Bardi Immigration Law</strong> hoy. La abogada <strong>Eszter Bardi</strong> maneja la{' '}
        <Link href="/es/services/removal-defense">defensa contra la deportación</Link>, tiene licencia en{' '}
        <strong>Georgia y Alabama</strong>, y brinda acceso directo con la abogada desde su primera llamada.{' '}
        <Link href="/es/contact">Programe su consulta ahora</Link>.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación es solo para fines informativos y no constituye
          asesoría legal. El derecho migratorio es complejo y específico a los hechos, y cambia frecuentemente.
          Consulte a un abogado de inmigración con licencia sobre su situación individual.
        </em>
      </p>
    </div>
  );
}
