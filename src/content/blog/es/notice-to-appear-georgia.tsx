import Link from 'next/link';
// Spanish adaptation of en/notice-to-appear-georgia.tsx (BAR-762, source EN /blog/notice-to-appear-georgia). Natural Spanish, not a literal translation. GA framing preserved.
// Legal details preserved exactly: NTA = Formulario I-862; audiencia de calendario maestro (master calendar) vs. audiencia individual/de méritos; EOIR-33 cambio de domicilio en 5 días; plazo de un año para asilo; cancelación de remoción = 10 años de presencia continua; orden de deportación in absentia. EOIR hotline 1-800-898-7180.

export const esTitle = '¿Recibió una Notificación de Comparecencia (NTA)? Qué Hacer en Georgia';
export const esDescription =
  '¿Recibió una Notificación de Comparecencia (NTA) en Georgia? Una abogada de inmigración explica qué significa, sus plazos en la corte y sus opciones — y por qué los primeros 30 días son los más importantes. Llame hoy.';

export function NoticeToAppearPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Si acaba de recibir una Notificación de Comparecencia, respire. Es algo que asusta &mdash; pero no es el final de
        su caso. De hecho, para la mayoría de las personas, es apenas el comienzo.
      </p>
      <p>
        Una Notificación de Comparecencia significa que el gobierno quiere que se presente ante un juez de inmigración.
        <strong> No</strong> significa que lo van a deportar mañana. <strong>No</strong> significa que ya perdió. Sin
        embargo, lo que haga en las próximas semanas puede marcar todo lo que venga después. Esta guía explica qué es una
        Notificación de Comparecencia, qué ocurre a continuación, sus derechos, sus plazos y las opciones que podría
        tener. Luego explica los pasos que debe dar ahora mismo.
      </p>

      <h2>¿Qué es una Notificación de Comparecencia?</h2>
      <p>
        Una Notificación de Comparecencia &mdash; a menudo llamada &ldquo;NTA&rdquo; por sus siglas en inglés (Notice to
        Appear) &mdash; es el documento que el gobierno usa para iniciar un proceso de remoción (deportación). Su nombre
        oficial es Formulario I-862. Puede recibirla de ICE, de Aduanas y Protección Fronteriza (CBP) o de USCIS.
      </p>
      <p>La NTA cumple varias funciones importantes:</p>
      <ul>
        <li>Le informa que el gobierno cree que usted puede ser removido de los Estados Unidos.</li>
        <li>Enumera los <strong>cargos</strong> &mdash; las razones legales por las que el gobierno dice que puede ser removido.</li>
        <li>Le indica que debe presentarse en la <strong>corte de inmigración</strong> ante un juez.</li>
      </ul>
      <p>
        Lea su NTA con cuidado. En algún lugar del formulario debería indicar la <strong>hora, fecha y lugar</strong> de
        su primera audiencia. En algunos casos, la NTA dice que la fecha y la hora están &ldquo;por determinar&rdquo;
        (to be determined). Si ese es su caso, no suponga que no tiene audiencia. Es posible que se lo notifiquen más
        adelante por correo. También puede consultar usted mismo la fecha de su audiencia (más sobre esto a
        continuación).
      </p>
      <p>
        Recibir una NTA es algo serio. Pero también es su oportunidad de presentar su caso, pedir un alivio y &mdash;
        para muchas personas &mdash; permanecer legalmente en el país.
      </p>

      <h2>Qué Ocurre Después de Recibir una NTA</h2>
      <p>
        Una vez que tiene una NTA, su caso pasa a la corte de inmigración, administrada por una agencia llamada EOIR (la
        Oficina Ejecutiva de Revisión de Casos de Inmigración). Este es el camino general que sigue la mayoría de los
        casos:
      </p>
      <ol>
        <li>
          <strong>Su caso se presenta ante la corte.</strong> Esto puede tomar tiempo. Puede haber un período entre el
          momento en que recibe su NTA y su primera audiencia.
        </li>
        <li>
          <strong>Su primera audiencia &mdash; la Audiencia de Calendario Maestro (Master Calendar Hearing).</strong> Es
          una audiencia corta, de tipo organizativo. El juez confirma quién es usted, revisa los cargos y le pregunta
          cómo piensa responder. Por lo general, <strong>no</strong> presenta su caso completo en esta audiencia.
        </li>
        <li>
          <strong>Audiencia individual (de méritos).</strong> Es la audiencia más larga en la que usted realmente
          presenta su caso, sus pruebas y su solicitud de alivio. A menudo se programa meses &mdash; a veces años
          &mdash; después de la primera audiencia.
        </li>
      </ol>
      <p>
        Georgia tiene cortes de inmigración en <strong>Atlanta</strong> y en el <strong>Centro de Detención Stewart</strong>{' '}
        en Lumpkin. Los casos de personas detenidas avanzan mucho más rápido que los de personas que no lo están. Si
        usted o un ser querido está detenido, el tiempo es aún más corto &mdash; vea nuestra guía sobre{' '}
        <Link href="/blog/stewart-detention-attorney">qué ocurre en las primeras 72 horas en Stewart</Link>.
      </p>
      <p>
        Puede confirmar la fecha y la hora de su próxima audiencia llamando a la línea automatizada de EOIR al{' '}
        <strong>1-800-898-7180</strong> o consultando el portal en línea de EOIR. Necesitará su &ldquo;número A&rdquo;
        (A-number) &mdash; el número de nueve dígitos que aparece en su NTA y comienza con la letra A.
      </p>

      <h2>Sus Derechos: Tiene Derecho a un Abogado</h2>
      <p>
        En la corte de inmigración, usted tiene derecho a estar representado por un abogado &mdash; <strong>pero por su
        propia cuenta.</strong> Esto es una de las cosas más importantes que debe entender.
      </p>
      <p>
        La corte de inmigración <strong>no</strong> es como la corte penal. El gobierno no le dará un defensor público
        gratuito. Si no puede pagar un abogado privado, podría calificar para recibir ayuda de una organización legal
        sin fines de lucro, pero esos grupos tienen cupo limitado y no pueden tomar todos los casos.
      </p>
      <p>También tiene derecho a:</p>
      <ul>
        <li><strong>Revisar los cargos</strong> en su contra y responder a ellos.</li>
        <li><strong>Presentar pruebas y testigos</strong> en su defensa.</li>
        <li><strong>Solicitar cualquier alivio</strong> para el que pueda calificar.</li>
        <li><strong>Pedir un intérprete</strong> si se siente más cómodo en otro idioma.</li>
      </ul>
      <p>
        Ir a la corte de inmigración sin abogado es arriesgado. Los estudios han encontrado de manera constante que las
        personas con representación legal tienen muchas más probabilidades de ganar sus casos que quienes van solas. Un
        abogado puede identificar defensas que usted quizá no sabía que tenía.
      </p>

      <h2>Plazos Clave que Debe Conocer</h2>
      <p>Dejar pasar un plazo en la corte de inmigración puede costarle el caso. Estos son los que más importan:</p>
      <ul>
        <li>
          <strong>La fecha de su primera audiencia.</strong> Si falta a su audiencia, el juez puede ordenar su
          deportación &ldquo;in absentia&rdquo; &mdash; es decir, removerlo sin que usted esté presente para defenderse.
          Este es uno de los errores más comunes y más dañinos que comete la gente.
        </li>
        <li>
          <strong>Cambio de domicilio (dentro de los 5 días de mudarse).</strong> Si se muda, debe avisar a la corte
          usando el <strong>Formulario EOIR-33</strong> dentro de cinco días. La corte envía avisos importantes &mdash;
          incluida la fecha de su audiencia &mdash; al domicilio que tiene en sus registros. Si pierde un aviso porque
          se mudó, eso se considera su responsabilidad.
        </li>
        <li>
          <strong>El plazo de un año para el asilo.</strong> Si planea solicitar asilo, por lo general debe hacerlo{' '}
          <strong>dentro de un año desde su última llegada</strong> a los Estados Unidos. Hay algunas excepciones, pero
          este plazo es estricto. No espere.
        </li>
        <li>
          <strong>Los plazos de presentación que fije el juez.</strong> El juez puede darle fechas específicas para
          presentar solicitudes y pruebas. No cumplirlas puede significar perder la oportunidad de solicitarlas.
        </li>
      </ul>
      <p>Anote estas fechas. Conserve todos los documentos que la corte le envíe.</p>

      <h2>Opciones Disponibles Después de Recibir una NTA</h2>
      <p>
        Recibir una NTA no significa que no tenga un camino por delante. Según su situación, podría calificar para una o
        más formas de alivio. Un abogado puede decirle cuáles aplican de manera realista a su caso. Estas son las más
        comunes:
      </p>

      <h3>Cancelación de Remoción (la Regla de los &ldquo;10 Años&rdquo;)</h3>
      <p>
        Para las personas que no son residentes permanentes, la <strong>cancelación de remoción</strong> puede estar
        disponible si, en términos generales, puede demostrar que:
      </p>
      <ul>
        <li>Ha estado presente físicamente en los EE. UU. <strong>de forma continua durante al menos 10 años</strong>,</li>
        <li>Ha tenido <strong>buen carácter moral</strong> durante ese tiempo,</li>
        <li><strong>No</strong> ha sido condenado por ciertos delitos descalificantes, y</li>
        <li>
          Puede probar que su remoción causaría una <strong>&ldquo;dificultad excepcional y extremadamente
          inusual&rdquo;</strong> a un familiar calificado que sea ciudadano estadounidense o residente permanente legal
          (su cónyuge, padre/madre o hijo).
        </li>
      </ul>
      <p>
        Ese estándar de dificultad es alto y las reglas son detalladas. (Los residentes permanentes legales pueden
        calificar bajo una versión diferente de la cancelación, con requisitos distintos.) Un abogado puede evaluar si
        los hechos de su caso cumplen con la prueba.
      </p>

      <h3>Asilo</h3>
      <p>
        Si teme sufrir daño o persecución en su país de origen a causa de su raza, religión, nacionalidad, opinión
        política o pertenencia a un grupo social en particular, es posible que pueda solicitar <strong>asilo</strong>.
        Recuerde el plazo de un año para presentar la solicitud descrito anteriormente.
      </p>

      <h3>Ajuste de Estatus</h3>
      <p>
        Si tiene un camino hacia la Green Card &mdash; por ejemplo, a través de un cónyuge ciudadano estadounidense u
        otro familiar o empleador calificado &mdash; es posible que pueda solicitar el <strong>ajuste de estatus</strong>,
        incluso estando en proceso de remoción. La elegibilidad depende de su historial específico. Conozca más sobre la{' '}
        <Link href="/es/services/family-based-immigration">inmigración basada en la familia</Link>.
      </p>

      <h3>Salida Voluntaria</h3>
      <p>
        En algunos casos, una persona puede pedir salir del país por su propia cuenta para una fecha determinada en
        lugar de recibir una orden formal de remoción. Esto se llama <strong>salida voluntaria</strong>. Puede preservar
        algunas opciones futuras, pero también tiene consecuencias serias y no es adecuada para todos. <strong>Nunca
        acepte la salida voluntaria &mdash; ni firme nada que acepte salir del país &mdash; sin hablar primero con un
        abogado.</strong>
      </p>
      <p>
        <em>
          Esto es un resumen, no asesoría legal. Si usted califica para alguna opción depende de los hechos específicos
          de su caso. Por favor, consulte a un abogado de inmigración con licencia.
        </em>
      </p>

      <h2>Por Qué los Primeros 30 Días son los Más Importantes</h2>
      <p>
        Los primeros días después de una NTA son cuando las buenas decisiones tienen el mayor impacto. En los primeros
        30 días, debería:
      </p>
      <ul>
        <li>
          <strong>Buscar y contratar a un abogado de inmigración</strong> &mdash; o al menos obtener una consulta.
          Cuanto antes un abogado revise su NTA, antes sabrá cuáles son sus opciones reales.
        </li>
        <li><strong>Confirmar la fecha de su audiencia</strong> usando la línea de EOIR para que nunca la pierda.</li>
        <li>
          <strong>Comenzar a reunir documentos</strong> &mdash; pruebas de cuánto tiempo ha vivido aquí, declaraciones
          de impuestos, registros familiares, registros médicos y cualquier cosa que respalde su caso.
        </li>
        <li><strong>Presentar el Formulario EOIR-33 si se ha mudado</strong> para que la corte pueda contactarlo.</li>
      </ul>
      <p>
        Reunir pruebas toma tiempo. Algunas solicitudes de alivio requieren registros de hace años. Empezar temprano le
        da a su abogado margen para construir el caso más sólido posible antes de que lleguen los plazos.
      </p>

      <h2>Qué NO Hacer Después de Recibir una NTA</h2>
      <p>Algunos errores pueden perjudicar gravemente su caso. Evite estos:</p>
      <ul>
        <li><strong>No ignore la NTA.</strong> Esperar a que desaparezca lleva a una orden de deportación in absentia.</li>
        <li>
          <strong>No falte a su audiencia</strong> &mdash; por ningún motivo. Si tiene una emergencia, hable de
          inmediato con su abogado sobre sus opciones.
        </li>
        <li>
          <strong>No se mude sin presentar el Formulario EOIR-33.</strong> Si la corte no puede contactarlo, puede
          perder su caso sin siquiera enterarse de la fecha.
        </li>
        <li>
          <strong>No firme nada de ICE ni de la corte sin asesoría legal</strong> &mdash; especialmente papeles que
          acepten salir del país.
        </li>
        <li>
          <strong>No confíe en rumores ni en personas que no son abogados</strong> (&ldquo;notarios&rdquo;). La ley de
          inmigración es compleja y cambia con frecuencia. Un mal consejo puede costarle el caso.
        </li>
        <li>
          <strong>No suponga que no tiene opciones.</strong> Muchas personas que reciben una NTA califican para un
          alivio que no sabían que existía.
        </li>
      </ul>

      <h2>Hable con Bardi Immigration Law &mdash; de Inmediato</h2>
      <p>
        Una Notificación de Comparecencia es urgente, pero no es un caso perdido. Cuanto antes actúe, más opciones suele
        tener.
      </p>
      <p>
        Si usted o un ser querido recibió una Notificación de Comparecencia en Georgia, comuníquese con{' '}
        <strong>Bardi Immigration Law</strong> para una consulta. La abogada <strong>Eszter Bardi</strong> representa a
        clientes en procesos de remoción ante las cortes de inmigración de Atlanta y Stewart. Revisaremos su NTA, le
        explicaremos sus opciones reales en lenguaje claro y le ayudaremos a dar los pasos correctos &mdash; con calma y
        claridad. <Link href="/es/contact">Programe una consulta</Link> o conozca más sobre nuestros servicios de{' '}
        <Link href="/es/services/removal-defense">defensa contra la deportación</Link>.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación es solo para fines informativos y no constituye
          asesoría legal. La ley de inmigración es compleja, depende de los hechos de cada caso y cambia con frecuencia.
          Consulte a un abogado de inmigración con licencia sobre su situación particular.
        </em>
      </p>
    </div>
  );
}
