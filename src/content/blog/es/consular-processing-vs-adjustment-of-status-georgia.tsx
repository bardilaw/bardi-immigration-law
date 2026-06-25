/* Verificar antes de publicar — hace referencia a las dos vías procesales para obtener la green card y la ley que las rige: el ajuste de estatus bajo INA §245(a) (Formulario I-485 presentado ante USCIS, que exige inspección y admisión o parole, con las barras del §245(c) y las excepciones del §245(i) y de los familiares inmediatos), la presentación concurrente del I-130 con el I-485 para familiares inmediatos, la autorización de empleo (Formulario I-765) y el permiso adelantado de viaje (Formulario I-131) mientras el I-485 está pendiente, y el examen médico en el Formulario I-693; el proceso consular a través del Centro Nacional de Visas y un consulado de EE. UU. en el extranjero (Formulario DS-260, la Declaración Jurada de Manutención I-864, y el examen médico con un médico de panel designado en el extranjero); la distinción mensual del boletín de visas entre las Fechas de Acción Final (Chart A) y las Fechas para Presentar (Chart B), y el anuncio mensual de USCIS sobre cuál tabla pueden usar los solicitantes de ajuste; las barras de inadmisibilidad por presencia ilegal bajo INA §212(a)(9)(B) que se activan al salir del país, y los perdones provisionales de presencia ilegal I-601 e I-601A (8 CFR 212.7(e)); y el contexto práctico de Georgia con la Oficina de USCIS de Atlanta y los consulados extranjeros con presencia en el área metropolitana de Atlanta. Los procedimientos, las tarifas y el movimiento del boletín de visas cambian; esta publicación es información general, no asesoría legal, e indica a los lectores confirmar las reglas vigentes y obtener una evaluación específica de su caso. Confirmar contra USCIS antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/consular-processing-vs-adjustment-of-status-georgia.tsx (BAR-896). Español natural, no traducción literal.

export const esTitle = 'Proceso Consular vs. Ajuste de Estatus en Georgia: Cómo Elegir la Vía Correcta a la Green Card';
export const esDescription =
  'Una abogada de inmigración en Georgia compara el ajuste de estatus (Formulario I-485 dentro de EE. UU.) con el proceso consular (DS-260 en el extranjero): quién puede usar cada vía bajo INA §245(a), la trampa de presencia ilegal y las barras de 3 y 10 años de la §212(a)(9)(B), el perdón I-601A, el permiso de trabajo y el permiso adelantado de viaje mientras espera, el examen médico, los tiempos del boletín de visas y por qué la decisión puede mantener a su familia unida. Información general, no asesoría legal.';

export function ConsularProcessingVsAdjustmentPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Si le aprueban una green card, hay dos caminos para obtenerla realmente: el <strong>ajuste de
        estatus</strong> (AoS) &mdash; terminar el caso <em>dentro</em> de Estados Unidos &mdash; o el{' '}
        <strong>proceso consular</strong> (CP) &mdash; terminarlo en una embajada o consulado de EE. UU.{' '}
        <em>en el extranjero</em>. Muchas familias de Georgia suponen que la elección es cuestión de
        comodidad. No lo es. La vía correcta depende de cómo entró al país, de si tiene presencia ilegal,
        de dónde se encuentra ahora mismo y de lo que diga el boletín de visas. Elegir mal puede dejar a una
        persona atrapada fuera del país durante años. Esta guía compara ambas opciones de forma objetiva. Es
        información general, no asesoría legal.
      </p>

      <h2>Las Dos Vías de un Vistazo</h2>
      <p>
        El <strong>ajuste de estatus</strong> significa presentar el <strong>Formulario I-485</strong> ante
        USCIS para convertirse en residente permanente sin salir de EE. UU. Usted asiste a una cita de datos
        biométricos y, por lo general, a una entrevista en una oficina de USCIS &mdash; para la mayor parte de
        Georgia, la <strong>Oficina de USCIS de Atlanta</strong>. Vea nuestra guía completa sobre el{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajuste de estatus y el I-485</Link>.
      </p>
      <p>
        El <strong>proceso consular</strong> significa que el caso pasa de USCIS al{' '}
        <strong>Centro Nacional de Visas (NVC)</strong>, donde usted presenta la solicitud de visa de
        inmigrante <strong>Formulario DS-260</strong> y los documentos de respaldo, y luego asiste a una
        entrevista en un consulado de EE. UU. en su país de origen. Usted entra a EE. UU. con la visa de
        inmigrante y se convierte en residente permanente en el momento de la admisión. Nuestra{' '}
        <Link href="/es/blog/nvc-consular-interview-immigrant-visa-process-georgia">guía del NVC y la
        entrevista consular</Link> recorre ese trámite paso a paso.
      </p>

      <h2>Comparación Lado a Lado</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Ajuste de Estatus (dentro de EE. UU.)</th>
            <th>Proceso Consular (en el extranjero)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Presentación principal</td>
            <td>Formulario I-485 ante USCIS</td>
            <td>Formulario DS-260 vía NVC + consulado</td>
          </tr>
          <tr>
            <td>Dónde se encuentra</td>
            <td>Permanece en EE. UU. todo el tiempo</td>
            <td>Debe estar (o ir) en el extranjero para la entrevista</td>
          </tr>
          <tr>
            <td>Quién puede usarlo</td>
            <td>Entrada legal + estatus elegible (INA §245)</td>
            <td>Disponible incluso después de presencia ilegal</td>
          </tr>
          <tr>
            <td>Permiso de trabajo mientras espera</td>
            <td>Sí &mdash; Formulario I-765 (EAD)</td>
            <td>Sin autorización de trabajo en el extranjero</td>
          </tr>
          <tr>
            <td>Viajes mientras espera</td>
            <td>Solo con permiso adelantado de viaje (Formulario I-131)</td>
            <td>Libre de viajar, pero sin entrada a EE. UU. hasta que se selle la visa</td>
          </tr>
          <tr>
            <td>Examen médico</td>
            <td>Formulario I-693 (médico civil designado en EE. UU.)</td>
            <td>Médico de panel en el extranjero</td>
          </tr>
          <tr>
            <td>Entrevista</td>
            <td>Oficina de USCIS de Atlanta</td>
            <td>Consulado de EE. UU. en el país de origen</td>
          </tr>
        </tbody>
      </table>

      <h2>Elegibilidad: La Diferencia Decisiva</h2>
      <p>
        El ajuste de estatus no está abierto para todos. Bajo la <strong>INA §245(a)</strong>, por lo general
        usted debe haber sido <strong>inspeccionado y admitido o paroled</strong> al ingresar a EE. UU.
        &mdash; es decir, haber entrado legalmente &mdash; y debe haber una green card disponible de inmediato
        para usted. Alguien que entró sin inspección por lo general <em>no puede</em> ajustar dentro del país,
        salvo excepciones estrechas (por ejemplo, la vía protegida del <strong>§245(i)</strong> para ciertas
        peticiones antiguas, o el{' '}
        <Link href="/es/blog/parole-in-place-military-families-georgia">parole in place</Link> para algunas
        familias militares).
      </p>
      <p>
        Los <strong>familiares inmediatos</strong> de ciudadanos estadounidenses &mdash; cónyuges, padres e
        hijos solteros menores de 21 &mdash; reciben una ventaja importante: las barras del §245(c) por haber
        excedido la estadía autorizada o por haber trabajado sin autorización por lo general <em>no</em>{' '}
        bloquean su ajuste, siempre que hayan entrado legalmente. Por eso una{' '}
        <Link href="/es/blog/k1-fiance-visa-georgia">green card basada en el
        matrimonio</Link> se tramita tan a menudo mediante el ajuste de estatus.
      </p>
      <p>
        El proceso consular, en cambio, está disponible para <em>cualquier persona</em> con una petición
        aprobada y una fecha de prioridad vigente &mdash; incluidas las personas que están en el extranjero,
        que entraron sin inspección, o que de otro modo no son elegibles para ajustar. Pero esa flexibilidad
        viene con una trampa seria.
      </p>

      <h2>La Trampa de la Presencia Ilegal</h2>
      <p>
        Aquí está la diferencia más importante de todas. Bajo la <strong>INA §212(a)(9)(B)</strong>, una
        persona que acumuló más de 180 días de <strong>presencia ilegal</strong> en EE. UU. y luego{' '}
        <strong>sale</strong> del país activa una <strong>barra de 3 años</strong> (de 180 días a un año de
        presencia ilegal) o una <strong>barra de 10 años</strong> (un año o más) para regresar. Como el
        proceso consular <em>exige</em> salir del país para la entrevista, puede activar esta trampa en
        alguien que habría estado bien quedándose dentro de EE. UU.
      </p>
      <p>
        La solución es el <strong>perdón provisional de presencia ilegal, Formulario I-601A</strong>. Los
        solicitantes elegibles pueden obtener el perdón <em>aprobado antes de salir</em> &mdash; de modo que
        viajan a la entrevista consular sabiendo ya que la barra está perdonada, lo que reduce al mínimo el
        tiempo separados de la familia. El perdón requiere demostrar <strong>daño extremo</strong> (extreme
        hardship) a un cónyuge o padre ciudadano estadounidense o residente permanente. Vea nuestra guía sobre
        el{' '}
        <Link href="/es/blog/i-601a-provisional-unlawful-presence-waiver-georgia">perdón provisional
        I-601A</Link>. (Otros motivos de inadmisibilidad usan el perdón estándar <strong>Formulario
        I-601</strong>, que por lo general se presenta después de la entrevista consular.) Una persona elegible
        para ajustar dentro de EE. UU. a menudo evita todo este problema, porque nunca sale del país.
      </p>

      <h2>Trabajo y Viajes Mientras Espera</h2>
      <p>
        Los solicitantes de ajuste pueden seguir viviendo con normalidad mientras el I-485 está pendiente.
        Pueden presentar el <strong>Formulario I-765</strong> para obtener un{' '}
        <Link href="/es/blog/employment-authorization-ead-georgia">permiso de trabajo (documento de
        autorización de empleo, EAD)</Link> y el <strong>Formulario I-131</strong> para el{' '}
        <Link href="/es/blog/advance-parole-travel-documents-georgia">permiso adelantado de viaje (advance
        parole)</Link> &mdash; a menudo presentados junto con el I-485 sin costo adicional.{' '}
        <strong>Importante:</strong> un solicitante de ajuste que viaja <em>sin</em> permiso adelantado de
        viaje por lo general abandona el I-485.
      </p>
      <p>
        Un solicitante consular no obtiene ninguno de los dos. <strong>No hay permiso de trabajo</strong> en
        EE. UU. mientras espera en el extranjero y, aunque es libre de viajar dentro de su propio país,{' '}
        <strong>no puede entrar a EE. UU.</strong> hasta que la visa de inmigrante se emita y se selle
        realmente. Para alguien que ya vive y trabaja en Georgia, esa diferencia por sí sola puede ser
        decisiva.
      </p>

      <h2>Tiempos y el Boletín de Visas</h2>
      <p>
        Ambas vías dependen del <strong>boletín de visas</strong> mensual, que publica dos tablas: las{' '}
        <strong>Fechas de Acción Final</strong> (Chart A, cuándo se puede emitir realmente una visa) y las{' '}
        <strong>Fechas para Presentar</strong> (Chart B, la fecha anterior en la que se puede entregar el
        papeleo). Cada mes, USCIS anuncia si los solicitantes de ajuste pueden usar la tabla de{' '}
        <strong>Fechas para Presentar</strong> &mdash; y cuando lo permite, los solicitantes de AoS pueden
        presentar el I-485 (y obtener el EAD/permiso adelantado de viaje) antes de que haya una visa
        disponible. Del lado consular, el NVC usa las Fechas para Presentar para empezar a recopilar
        documentos, pero el consulado no puede emitir la visa de inmigrante hasta que la{' '}
        <strong>Fecha de Acción Final</strong> esté al día. Para los <strong>familiares inmediatos</strong>{' '}
        no hay fila de espera en absoluto &mdash; las visas siempre están disponibles &mdash;, de modo que un
        familiar inmediato puede <strong>presentar el I-130 y el I-485 de forma concurrente</strong> y tramitar
        todo el caso como un solo paquete.
      </p>

      <h2>Logística del Examen Médico y la Entrevista</h2>
      <p>
        Los solicitantes de ajuste completan el examen médico en el <strong>Formulario I-693</strong> con un{' '}
        <strong>médico civil designado</strong> por USCIS en EE. UU. y se entrevistan en una oficina nacional.
        Los solicitantes consulares completan el examen con un <strong>médico de panel</strong> aprobado por el
        consulado en el extranjero &mdash; un formulario distinto y un médico distinto &mdash; y se entrevistan
        en el exterior. El contenido se superpone (vacunas, detección de enfermedades transmisibles), pero no
        son intercambiables.
      </p>

      <h2>Costo, Velocidad y Dónde Suele Ganar Cada Vía</h2>
      <p>
        Ninguna vía es universalmente más barata o más rápida &mdash; depende del caso. El ajuste de estatus
        suele acarrear tarifas de presentación de USCIS más altas, porque los solicitantes normalmente
        presentan el I-485 junto con el permiso de trabajo I-765 y el permiso adelantado de viaje I-131, y los
        tiempos de trámite en las oficinas con mucha carga pueden ser largos. El proceso consular a menudo
        avanza con un calendario gubernamental más predecible una vez que el caso llega al NVC, pero suma el
        costo y la interrupción de un viaje internacional, el examen con el médico de panel en el extranjero, y
        el tiempo fuera de EE. UU. esperando la entrevista. El factor decisivo rara vez es el precio: es si el
        solicitante necesita <strong>seguir trabajando y permanecer con su familia en Georgia</strong> durante
        la espera (lo que favorece el AoS) o simplemente <strong>no puede ajustar dentro del país</strong> en
        absoluto (lo que hace del CP la única vía). Las tarifas y los plazos cambian constantemente, así que
        confirme ambos antes de decidir.
      </p>

      <h2>El Ángulo de Georgia</h2>
      <p>
        Para las familias establecidas en el área metropolitana de Atlanta, el AoS por lo general significa un
        viaje manejable a la <strong>Oficina de USCIS de Atlanta</strong> en lugar de un viaje internacional y
        tiempo fuera del trabajo. Georgia también alberga varios <strong>consulados extranjeros</strong>{' '}
        &mdash; incluidos los consulados de México y Corea y de varias naciones europeas con presencia en el
        área metropolitana de Atlanta &mdash;, pero conviene aclarar: esos consulados atienden los servicios
        del país <em>extranjero</em> (pasaportes, documentos civiles del país del DS-260), mientras que la
        entrevista de visa de inmigrante de EE. UU. en sí ocurre en un{' '}
        <strong>consulado de EE. UU. en el país de origen del solicitante</strong>, no en Atlanta. El proceso
        consular, por lo tanto, casi siempre implica un viaje internacional.
      </p>

      <h2>Un Marco de Decisión Sencillo</h2>
      <p>Reducido a lo esencial:</p>
      <ul>
        <li><strong>Elija el ajuste de estatus</strong> cuando ya esté en EE. UU., haya entrado legalmente (o califique bajo el §245(i)), sea elegible para ajustar y no tenga necesidad de viajar &mdash; sobre todo como familiar inmediato que puede presentar todo de forma concurrente y obtener un permiso de trabajo mientras espera.</li>
        <li><strong>Elija el proceso consular</strong> cuando esté fuera de EE. UU., haya entrado sin inspección y no pueda ajustar, o esté atascado en una categoría de preferencia cuya visa todavía no está disponible para ajustar &mdash; planificando con cuidado en torno a las barras de la §212(a)(9)(B) y un perdón I-601A si tiene presencia ilegal.</li>
        <li><strong>Busque asesoría primero</strong> cuando la presencia ilegal, una remoción previa, un asunto penal o un fraude esté en cualquier parte del panorama &mdash; salir para una entrevista consular puede convertir una situación solucionable en una barra de varios años.</li>
      </ul>

      <h2>Hable con una Abogada de Inmigración en Georgia</h2>
      <p>
        La vía que elija no es solo una preferencia de papeleo &mdash; decide si su familia permanece unida
        durante el proceso y si una salida activa una barra. Bardi Immigration Law ayuda a familias en todo{' '}
        <strong>Georgia y Alabama</strong> a evaluar la elegibilidad, sopesar el AoS frente al proceso consular,
        y presentar los perdones que hacen posible una salida segura. La abogada <strong>Eszter Bardi</strong>{' '}
        brinda acceso directo a la abogada y una estrategia específica para su caso. Antes de decidir, conozca{' '}
        <Link href="/es/blog/how-to-choose-immigration-attorney-georgia">cómo elegir un abogado de
        inmigración</Link>.
      </p>
      <p>
        <Link href="/es/contact">Programe una consulta hoy.</Link>
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación de blog es solo para fines informativos y no
          constituye asesoría legal. La elegibilidad para el ajuste de estatus, el proceso consular y los
          perdones I-601/I-601A depende de las circunstancias individuales, y los procedimientos, las tarifas y
          el movimiento del boletín de visas cambian con el tiempo. Salir de Estados Unidos con presencia
          ilegal puede activar las barras de 3 y 10 años bajo la INA §212(a)(9)(B). Consulte a un abogado de
          inmigración con licencia sobre su situación específica antes de elegir una vía o salir del país.
        </em>
      </p>
    </div>
  );
}
