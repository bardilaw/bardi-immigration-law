/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (el procesamiento por el Centro Nacional de Visas (NVC) de peticiones de visa de inmigrante aprobadas; el portal en línea del Consular Electronic Application Center (CEAC); la tarifa de solicitud de visa de inmigrante (IVA) y la tarifa de la Declaración Jurada de Patrocinio Económico (AOS); el Formulario DS-260; la Declaración Jurada de Patrocinio Económico Formulario I-864 y la evidencia financiera de respaldo; la lista de documentos civiles; el estatus de "calificado documentalmente" y la programación de la entrevista; el examen médico de inmigración por un médico autorizado del panel; la entrevista consular en una embajada o consulado de EE. UU.; y las negativas bajo la Sección 221(g) / procesamiento administrativo). Los formularios, tarifas, listas de documentos, tiempos de procesamiento y procedimientos cambian periódicamente y varían según la categoría de visa, el país y el consulado. Confirmar los formularios, tarifas y pasos vigentes con USCIS, el Departamento de Estado de EE. UU. / NVC y la embajada o consulado específico antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/nvc-consular-interview-immigrant-visa-process-georgia.tsx (BAR-855). Español natural, no traducción literal.

export const esTitle = 'El NVC y la Entrevista Consular: El Proceso de Visa de Inmigrante Paso a Paso (Georgia)';
export const esDescription =
  'Una abogada de inmigración en Georgia explica la etapa del Centro Nacional de Visas (NVC) y la entrevista consular paso a paso: cuándo llega su caso al NVC, las dos tarifas, la Declaración Jurada de Patrocinio Económico (Formulario I-864), el DS-260, los documentos civiles, el estatus de calificado documentalmente, el examen médico, la entrevista en el consulado, la decisión y la trampa de la Sección 221(g). Información general, no asesoría legal.';

export function NvcConsularInterviewPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Lograr la aprobación de una petición I-130 o I-140 se siente como la meta final. Para las familias y los
        trabajadores cuyo familiar o empleado inmigrante está en el extranjero, en realidad es el disparo de salida de
        la parte del proceso de la que la mayoría nunca ha oído hablar: la etapa del{' '}
        <strong>Centro Nacional de Visas (NVC)</strong>. Aquí es donde se pagan las tarifas, se reúnen los documentos,
        se presenta el <strong>DS-260</strong> y se arma el caso en algo que un oficial consular aprobará &mdash; o
        devolverá. Bien hecho, el caso avanza a entrevista en cuestión de meses. Mal hecho, es donde los casos se
        quedan estancados un año sin que nadie le explique por qué.
      </p>
      <p>
        Esta es una guía paso a paso de la etapa del NVC y de la entrevista consular que la sigue. Retoma donde termina
        nuestra{' '}
        <Link href="/es/blog/consular-processing-immigrant-visa-georgia">visión general del procesamiento consular</Link>{' '}
        y se enfoca en los mecanismos que realmente determinan su cronograma. Si usted es un peticionario en Georgia que
        patrocina a un cónyuge, padre, hijo o hermano en el extranjero, esta es la parte del caso que usted puede
        controlar.
      </p>

      <h2>Cuándo Llega su Caso al NVC</h2>
      <p>
        Después de que USCIS aprueba la petición, reenvía el expediente al NVC &mdash; pero el NVC solo puede actuar
        sobre un caso cuando hay un número de visa de inmigrante disponible. Para los{' '}
        <strong>familiares inmediatos</strong> de ciudadanos estadounidenses (cónyuges, padres e hijos solteros menores
        de 21 años), siempre hay un número disponible, así que el caso avanza de inmediato. Para las categorías de{' '}
        <strong>preferencia familiar</strong> y de <strong>empleo</strong> que tienen cupos, el NVC retiene el caso
        hasta que su <strong>fecha de prioridad</strong> esté vigente en el{' '}
        <Link href="/es/blog/visa-bulletin-priority-dates-family-green-card">boletín de visas del Departamento de Estado</Link>.
        Hasta entonces, no hay nada que hacer salvo esperar &mdash; sin tarifas, sin formularios.
      </p>
      <p>
        Cuando el caso está listo, el NVC emite un <strong>número de caso</strong> y un{' '}
        <strong>número de identificación de factura (invoice ID)</strong>. Esos dos números son su acceso al{' '}
        <strong>Consular Electronic Application Center (CEAC)</strong>, el portal en línea donde ahora ocurre toda la
        etapa del NVC. No se envía papel de ida y vuelta por correo; todo se carga en línea.
      </p>

      <h2>Paso Uno: Pagar las Dos Tarifas del NVC</h2>
      <p>
        En el NVC vencen dos tarifas separadas, y el caso no avanzará hasta que ambas estén pagadas y aparezcan como{' '}
        &ldquo;PAID&rdquo; (pagada) en CEAC:
      </p>
      <ul>
        <li>
          <strong>La tarifa de procesamiento de la Solicitud de Visa de Inmigrante (IVA)</strong> &mdash; se cobra por
          cada inmigrante incluido en el caso.
        </li>
        <li>
          <strong>La tarifa de la Declaración Jurada de Patrocinio Económico (AOS)</strong> &mdash; se cobra una sola
          vez por peticionario, para cubrir la revisión de los documentos del patrocinio económico.
        </li>
      </ul>
      <p>
        Ambas se pagan desde una cuenta bancaria de EE. UU. a través de CEAC. Son distintas de la tarifa de
        presentación de la petición que ya pagó a USCIS, y distintas también de la{' '}
        <strong>Tarifa de Inmigrante de USCIS (USCIS Immigrant Fee)</strong> que pagará más adelante para producir la
        tarjeta verde física. Como los pasos del AOS y del DS-260 se desbloquean solo después de que se acredita la
        tarifa correspondiente (a menudo tras una breve demora de procesamiento), pagar con prontitud es lo primero que
        mantiene un caso en movimiento.
      </p>

      <h2>Paso Dos: Presentar la Declaración Jurada de Patrocinio Económico (Formulario I-864)</h2>
      <p>
        La{' '}
        <Link href="/es/blog/affidavit-of-support-i-864-income-requirements">Declaración Jurada de Patrocinio Económico (Formulario I-864)</Link>{' '}
        es el documento que descarrila más casos en el NVC que cualquier otro. El peticionario la firma para aceptar una
        obligación <em>legalmente exigible</em> de mantener al inmigrante a un nivel no menor al 125% de las Pautas
        Federales de Pobreza para el tamaño del hogar. Para demostrar que cumple con ese umbral, el patrocinador carga:
      </p>
      <ul>
        <li>La declaración de impuestos federales más reciente (o la transcripción tributaria del IRS), y a menudo los W-2 o 1099;</li>
        <li>Prueba de empleo e ingresos actuales, como talones de pago recientes o una carta del empleador;</li>
        <li>Evidencia de ciudadanía estadounidense o residencia permanente legal.</li>
      </ul>
      <p>
        Si los ingresos del peticionario se quedan cortos &mdash; algo común en jubilados, estudiantes, recién
        contratados o patrocinadores por cuenta propia con muchas deducciones &mdash; un{' '}
        <strong>copatrocinador (joint sponsor)</strong> que califique por su cuenta debe presentar un segundo I-864.
        Acertar el tamaño del hogar, la cifra de ingresos y el año fiscal correcto desde la primera vez es la palanca
        individual más grande sobre la rapidez con que el NVC despacha su caso.
      </p>

      <h2>Paso Tres: Completar el DS-260</h2>
      <p>
        El <strong>DS-260</strong> es la solicitud de visa de inmigrante en línea que cada inmigrante debe presentar en
        CEAC. Es largo y detallado: domicilios y empleos de años atrás, cada visa y viaje previo a EE. UU., información
        familiar, y una extensa lista de preguntas de elegibilidad y seguridad. Hay varias razones por las que vale la
        pena tomarse su tiempo con el DS-260:
      </p>
      <ul>
        <li>
          <strong>Es bajo juramento.</strong> Las respuestas se dan bajo juramento y deben coincidir con la petición y
          los documentos civiles. Las inconsistencias &mdash; un historial de empleo distinto, un nombre escrito de otra
          forma, una visa previa omitida &mdash; son una de las principales razones por las que los casos quedan sujetos
          a escrutinio adicional.
        </li>
        <li>
          <strong>Las preguntas de elegibilidad importan.</strong> Las preguntas sobre remociones previas, presencia
          ilegal, antecedentes penales o tergiversación pueden sacar a la luz una causal de{' '}
          <strong>inadmisibilidad</strong> que requiera una exención (waiver). Es mucho mejor identificarla aquí que
          llevarse una sorpresa en la entrevista.
        </li>
        <li>
          <strong>Imprima la página de confirmación.</strong> Después de presentarlo, guarde la página de confirmación
          del DS-260 para llevarla a la entrevista.
        </li>
      </ul>

      <h2>Paso Cuatro: Cargar los Documentos Civiles</h2>
      <p>
        Junto con el DS-260, cada solicitante carga en CEAC un conjunto de <strong>documentos civiles</strong>. La
        lista exacta varía según el país y el consulado, pero generalmente incluye:
      </p>
      <ul>
        <li>La página biográfica de un <strong>pasaporte</strong> válido (vigente al menos 60 días después de la emisión de la visa);</li>
        <li><strong>Acta de nacimiento</strong> de cada solicitante;</li>
        <li><strong>Acta de matrimonio</strong>, más prueba de la terminación de cualquier matrimonio anterior (sentencias de divorcio, actas de defunción);</li>
        <li><strong>Certificados de antecedentes penales (police certificates)</strong> de los países donde el solicitante haya vivido, según las reglas del consulado;</li>
        <li>Cuando corresponda, <strong>registros militares</strong> y <strong>registros judiciales o penitenciarios</strong> por cualquier arresto o condena.</li>
      </ul>
      <p>
        Cualquier documento que no esté en inglés necesita una <strong>traducción certificada</strong>. Los revisores
        rechazan escaneos borrosos, páginas incompletas y documentos de la autoridad emisora equivocada, así que el
        control de calidad aquí evita directamente una ronda de idas y vueltas.
      </p>

      <h2>Paso Cinco: Calificado Documentalmente y Programación de la Entrevista</h2>
      <p>
        Cuando el NVC tiene ambas tarifas, el DS-260, el I-864 y todos los documentos civiles, y los encuentra
        completos, marca el caso como{' '}
        <strong>&ldquo;calificado documentalmente&rdquo; (documentarily qualified, DQ)</strong> y lo coloca en la cola
        para una entrevista en la embajada o consulado de EE. UU. designado. La programación depende entonces de la
        disponibilidad de citas en esa sede específica, que varía mucho según el país. Una vez fijada la cita, el NVC
        envía la carta de entrevista y transfiere el expediente al consulado.
      </p>

      <h2>Paso Seis: El Examen Médico y la Preparación para la Entrevista</h2>
      <p>
        Antes de la entrevista, cada solicitante completa un <strong>examen médico</strong> con un{' '}
        <strong>médico del panel (panel physician)</strong> autorizado por la embajada &mdash; no su propio médico. El
        examen revisa el historial médico, confirma las <strong>vacunas</strong> requeridas y detecta condiciones que
        afectan la admisibilidad. Prográmelo temprano; en muchos países el cuello de botella es la disponibilidad del
        médico del panel, no la del consulado.
      </p>
      <p>
        Para la entrevista en sí, el solicitante debe llegar con un paquete organizado que normalmente incluye:
      </p>
      <ul>
        <li>La carta de cita de la entrevista y la página de confirmación del DS-260;</li>
        <li>Un pasaporte válido y las fotografías requeridas;</li>
        <li>Los documentos civiles originales (o copias certificadas) que coincidan con lo que se cargó al NVC;</li>
        <li>El I-864 original con evidencia financiera actualizada, ya que los ingresos pueden cambiar entre el DQ y la entrevista;</li>
        <li>Los resultados del examen médico, si el médico se los entrega al solicitante en un sobre sellado.</li>
      </ul>
      <p>
        En los casos por matrimonio especialmente, el oficial también evalúa si la relación es genuina, así que las
        respuestas consistentes y bien documentadas &mdash; y la evidencia de una relación de buena fe (bona fide)
        &mdash; importan tanto como el papeleo. Cubrimos las reglas de elegibilidad de fondo en nuestra guía sobre la{' '}
        <Link href="/es/blog/family-green-card-attorney-georgia">tarjeta verde por vía familiar en Georgia</Link>.
      </p>

      <h2>Paso Siete: La Decisión &mdash; y la Trampa del 221(g)</h2>
      <p>
        Si todo está en orden, el oficial aprueba la visa en la entrevista o poco después, coloca una visa de
        inmigrante en el pasaporte y entrega un paquete de visa sellado. (No lo abra &mdash; es para el oficial de CBP
        en el puerto de entrada de EE. UU.) Pero hay dos resultados, distintos de una aprobación limpia, lo bastante
        comunes como para anticiparlos:
      </p>
      <ul>
        <li>
          <strong>Negativa bajo la Sección 221(g).</strong> Esto no es una denegación. Significa que el caso está
          incompleto &mdash; el oficial necesita un documento adicional, una Declaración Jurada de Patrocinio Económico
          actualizada o una revisión más amplia antes de decidir. El solicitante recibe una hoja explicando qué falta,
          y el caso queda abierto a la espera de ese pendiente. Responder de manera rápida y completa lo es todo; un
          221(g) que se prolonga suele ser un 221(g) al que nadie le dio seguimiento.
        </li>
        <li>
          <strong>Procesamiento administrativo.</strong> Algunos casos se retienen después de la entrevista para
          verificaciones adicionales de seguridad o antecedentes, con poca visibilidad sobre el cronograma. A menudo no
          hay ningún documento que entregar &mdash; solo esperar &mdash; pero un abogado a veces puede consultar a
          través de los canales adecuados.
        </li>
      </ul>
      <p>
        Una determinación de <strong>inadmisibilidad</strong> &mdash; por presencia ilegal previa, ciertos antecedentes
        penales o tergiversación &mdash; es el resultado más serio y puede requerir una <strong>exención (waiver)</strong>{' '}
        antes de que la visa pueda emitirse. Para los solicitantes que activaron las barras por presencia ilegal bajo la
        INA &sect;212(a)(9)(B), la{' '}
        <Link href="/es/blog/i-601a-provisional-unlawful-presence-waiver-georgia">exención provisional I-601A</Link> es
        mejor aprobarla <em>antes</em> de la salida, razón por la cual la admisibilidad debe evaluarse temprano en la
        etapa del NVC, no descubrirse en la ventanilla.
      </p>

      <h2>Para los Peticionarios de Georgia: Esta Es su Etapa</h2>
      <p>
        La etapa del NVC es la parte del caso que el peticionario radicado en EE. UU. controla más directamente. Sus
        registros tributarios y sus ingresos impulsan la Declaración Jurada de Patrocinio Económico. Su capacidad de
        respuesta a las solicitudes de documentos es lo que lleva el caso de &ldquo;en progreso&rdquo; a
        &ldquo;calificado documentalmente&rdquo;. Y su coordinación con su familiar en el extranjero es lo que mantiene
        consistentes el DS-260 y los documentos civiles. La abogada <strong>Eszter Bardi</strong> tiene licencia en{' '}
        <strong>Georgia y Alabama</strong> y representa a peticionarios aquí mientras guía a sus familiares a través de
        cada paso del NVC y consular en el extranjero &mdash; para que ambos extremos del caso permanezcan alineados.
      </p>

      <h2>Hable con Eszter Bardi Sobre su Caso ante el NVC</h2>
      <p>
        Ya sea que su petición acabe de ser aprobada o que su caso esté atascado en el NVC, la abogada{' '}
        <strong>Eszter Bardi</strong> puede organizar las tarifas, el I-864, el DS-260 y el paquete de documentos
        civiles, preparar a su familiar para la entrevista consular y responder con rapidez a cualquier solicitud bajo
        el 221(g) &mdash; con acceso directo a la abogada, no a un especialista de admisión. Bardi Immigration Law
        atiende a clientes en todo <strong>Georgia y Alabama</strong> y trabaja con sus familiares dondequiera que se
        encuentren en el mundo.
      </p>
      <p>
        <strong>Programe una consulta hoy.</strong> Revisaremos la petición, ubicaremos su cronograma frente al boletín
        de visas y armaremos el expediente del NVC para que se despache en la primera ronda. Conozca más sobre nuestro
        trabajo en{' '}
        <Link href="/es/services/benefits-based-immigration">inmigración basada en beneficios</Link> o{' '}
        <Link href="/es/contact">solicite una consulta en línea</Link>. Hablamos español &mdash; atendemos a la
        comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo brinda información legal general y no constituye asesoría
          legal. El derecho migratorio es complejo, específico a los hechos y cambia frecuentemente. Los formularios,
          las tarifas, los requisitos de documentos y los tiempos de procesamiento cambian periódicamente y varían
          según la categoría de visa, el país y el consulado. Confirme los requisitos vigentes con USCIS, el
          Departamento de Estado de EE. UU. / Centro Nacional de Visas, y la embajada o consulado de EE. UU.
          correspondiente, y consulte a un abogado de inmigración con licencia para obtener orientación específica a su
          situación.
        </em>
      </p>
    </div>
  );
}
