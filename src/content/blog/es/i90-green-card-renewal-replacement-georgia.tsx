/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (renovación y reemplazo de la tarjeta de residente permanente con el Formulario I-90 bajo 8 CFR 264.5: quién debe presentarlo — titulares de la tarjeta estándar de 10 años que está por vencer o ya venció, tarjetas perdidas, robadas, mutiladas o destruidas, un cambio legal de nombre, una tarjeta con datos incorrectos por error de USCIS, una tarjeta que fue emitida pero nunca recibida, y un residente permanente que cumple 14 años y debe reemplazar la tarjeta; la distinción entre el I-90 (tarjeta de 10 años) y el Formulario I-751 (eliminación de condiciones de una tarjeta condicional de 2 años) y el Formulario N-400 (naturalización); presentación en línea mediante una cuenta myUSCIS frente a la presentación en papel por correo; los tiempos de procesamiento actuales del I-90 y el aviso de recibo (Formulario I-797C) como evidencia temporal de estatus y autorización de empleo; el sello ADIT / I-551 obtenido en una oficina local de USCIS como evidencia temporal; viajes internacionales con una green card vencida usando el aviso de recibo o el sello ADIT; la cita de datos biométricos en un Centro de Apoyo de Solicitudes; y que una tarjeta condicional de 2 años no puede renovarse con el I-90). NOTA: las tarifas de presentación de USCIS, la tarifa de servicios biométricos, los tiempos de procesamiento, el período de extensión automática impreso en el aviso de recibo, la elegibilidad en línea frente a correo y los procedimientos del sello ADIT en la oficina local cambian y son específicos a los hechos. Confirme tarifas, formularios y plazos vigentes en uscis.gov y con la oficina local de USCIS antes del go-live y para cualquier caso individual. */
import Link from 'next/link';
// Adaptación al español de en/i90-green-card-renewal-replacement-georgia.tsx (BAR-855). Español natural, no traducción literal.

export const esTitle = 'Cómo Renovar o Reemplazar su Green Card en Georgia: Guía del Formulario I-90';
export const esDescription =
  'Una abogada de inmigración en Georgia explica el Formulario I-90 para renovar o reemplazar la green card (tarjeta de residente permanente): quién debe presentarlo, cómo hacerlo en línea o por correo, cuánto tarda, la diferencia clave con el Formulario I-751 y el Formulario N-400, cómo probar su estatus mientras espera con el aviso de recibo (Formulario I-797C) y el sello ADIT (I-551), cómo trabajar y viajar al extranjero antes de que llegue la tarjeta nueva, y cuándo conviene hablar con un abogado. Información general, no asesoría legal.';

export function I90GreenCardRenewalPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Su <strong>green card (tarjeta de residente permanente)</strong> &mdash; oficialmente la Tarjeta de
        Residente Permanente, Formulario I-551 &mdash; es la prueba de su estatus, pero la tarjeta en sí vence.
        La tarjeta estándar es válida por <strong>diez años</strong>, y cuando se acerca el final de ese período,
        se pierde o se daña, o necesita una corrección, usted la renueva o la reemplaza con el{' '}
        <strong>Formulario I-90, Solicitud para Reemplazar la Tarjeta de Residente Permanente</strong>. Este es uno
        de los trámites más comunes que enfrentan los residentes permanentes en Georgia, y aunque es más rutinario
        que la mayoría de las solicitudes de inmigración, equivocarse en los detalles &mdash; o confundirlo con
        otro formulario &mdash; puede dejarlo sin prueba válida de su estatus durante meses.
      </p>
      <p>
        Esta guía explica quién debe presentar un I-90, cómo presentarlo, cuánto tarda y cómo probar su estatus
        mientras espera &mdash; incluyendo qué hacer si necesita trabajar o viajar antes de que llegue la tarjeta
        nueva.
      </p>

      <h2>Quién Debe Presentar el Formulario I-90</h2>
      <p>
        Usted usa el Formulario I-90 para renovar o reemplazar una{' '}
        <strong>tarjeta de residente permanente de diez años</strong>. Las razones más comunes son:
      </p>
      <ul>
        <li>
          <strong>Su tarjeta de 10 años está por vencer o ya venció.</strong> Su estatus como residente permanente{' '}
          <em>no</em> vence cuando vence la tarjeta &mdash; usted sigue siendo residente permanente legal &mdash;
          pero debe mantener una tarjeta válida como evidencia de ese estatus.
        </li>
        <li>
          <strong>Su tarjeta se perdió, fue robada, está mutilada o fue destruida.</strong>
        </li>
        <li>
          <strong>Su tarjeta tiene información incorrecta</strong> por un error de USCIS (en cuyo caso el reemplazo
          generalmente es gratuito), o su información cambió &mdash; lo más común, un{' '}
          <strong>cambio legal de nombre</strong> después del matrimonio o por orden judicial.
        </li>
        <li>
          <strong>Su tarjeta fue emitida pero nunca la recibió.</strong>
        </li>
        <li>
          <strong>Usted era residente permanente antes de cumplir 14 años</strong> y debe reemplazar su tarjeta
          después de su cumpleaños número catorce (a menos que su tarjeta actual venza antes de que cumpla 16).
        </li>
      </ul>

      <h2>Lo Que el I-90 <em>No</em> Es: No lo Confunda con el I-751 ni el N-400</h2>
      <p>
        Esta es la distinción más importante para los titulares de una green card, y presentar el formulario
        equivocado puede costarle meses y una solicitud rechazada.
      </p>
      <ul>
        <li>
          <strong>Si tiene una green card &ldquo;condicional&rdquo; de dos años</strong> &mdash; normalmente por un
          matrimonio reciente con un ciudadano estadounidense &mdash; <strong>no</strong> use el Formulario I-90.
          Debe presentar el <strong>Formulario I-751</strong> para{' '}
          <Link href="/es/blog/remove-conditions-green-card-i-751-georgia">eliminar las condiciones de su
          residencia</Link>. Un I-90 no extenderá una tarjeta condicional, y perder la ventana de presentación del
          I-751 puede colocarlo en procedimientos de deportación.
        </li>
        <li>
          <strong>Si su meta es la ciudadanía estadounidense</strong> y es elegible, es posible que no necesite
          renovar en absoluto. Presentar el <strong>Formulario N-400 para la{' '}
          <Link href="/es/blog/naturalization-citizenship-georgia">naturalización</Link></strong> puede ser la mejor
          decisión &mdash; aunque si su tarjeta vence mientras el N-400 está pendiente, es posible que aún deba
          lidiar con la tarjeta vencida para viajar y trabajar, y muchas personas presentan el I-90 de todos modos
          para tener evidencia válida en mano.
        </li>
      </ul>
      <p>
        En resumen: <strong>el I-90 es para la tarjeta estándar de diez años.</strong> Si su tarjeta dice que es
        válida por dos años, lo que le corresponde es el I-751, no el I-90.
      </p>

      <h2>Cómo Presentarlo: En Línea o por Correo</h2>
      <p>
        USCIS prefiere firmemente la <strong>presentación en línea</strong> a través de una cuenta gratuita de{' '}
        <strong>myUSCIS</strong> en uscis.gov. Presentar en línea le permite pagar la tarifa electrónicamente,
        subir documentos, recibir su aviso de recibo más rápido y dar seguimiento al estado del caso en tiempo
        real. Para la mayoría de las renovaciones sencillas, en línea es la vía más limpia.
      </p>
      <p>
        La <strong>presentación en papel por correo</strong> sigue disponible como alternativa &mdash; por ejemplo,
        si no puede usar fácilmente el sistema en línea o su situación no encaja en el formulario en línea. De
        cualquier manera, pagará una <strong>tarifa de presentación</strong> y, en la mayoría de los casos, una{' '}
        <strong>tarifa de servicios biométricos</strong>; los montos vigentes y cualquier exención de tarifa están
        en la página de tarifas del Formulario I-90 de USCIS, y cambian periódicamente, así que confirme antes de
        pagar. Los reemplazos necesarios por un error de USCIS suelen ser gratuitos.
      </p>

      <h2>Tiempos de Procesamiento y su Aviso de Recibo</h2>
      <p>
        Sea realista con los tiempos: el procesamiento del I-90 se ha extendido mucho más allá de la norma
        histórica, y los solicitantes deben prepararse para una espera que puede durar{' '}
        <strong>muchos meses hasta bastante más de un año</strong>. Por eso, el{' '}
        <strong>aviso de recibo que recibe después de presentar &mdash; el Formulario I-797C &mdash; importa
        muchísimo</strong>.
      </p>
      <p>
        El aviso de recibo del I-90 generalmente{' '}
        <strong>extiende la validez de su green card vencida o por vencer durante un período determinado</strong>{' '}
        cuando se presenta <em>junto con</em> su tarjeta existente. Esa combinación sirve como evidencia temporal
        de su estatus de residente permanente y de su autorización para trabajar y viajar. Guarde el aviso de
        recibo con su tarjeta, y entregue una copia a su empleador si necesita reverificar su autorización de
        empleo mediante el Formulario I-9 &mdash; el aviso de recibo junto con la tarjeta vencida es evidencia
        aceptable de estatus continuo durante el período de extensión impreso en el aviso.
      </p>

      <h2>El Sello ADIT (I-551): Prueba Temporal de la Oficina Local</h2>
      <p>
        Si necesita una prueba de estatus más sólida o más prolongada mientras su I-90 está pendiente &mdash; por
        ejemplo, si la extensión del aviso de recibo se está agotando, o necesita viajar y quiere un documento más
        claro &mdash; puede solicitar un <strong>sello ADIT</strong> (también llamado <strong>sello I-551</strong>)
        en su <strong>oficina local de USCIS</strong>. En el área de Atlanta, esa es normalmente la{' '}
        <strong>Oficina Local de USCIS en Atlanta</strong>. El sello se coloca en su pasaporte (o en un documento
        aparte) y sirve como <strong>evidencia temporal del estatus de residente permanente legal</strong>,
        usualmente válido por hasta un año. Por lo general, debe solicitar una cita a través del Centro de Contacto
        de USCIS; lleve su pasaporte, su tarjeta vencida y su aviso de recibo del I-90.
      </p>

      <h2>Viajar al Extranjero Mientras Espera</h2>
      <p>
        Todavía puede viajar al extranjero mientras su I-90 está pendiente, pero debe poder probar su estatus para
        volver a entrar a los Estados Unidos. En la práctica, eso significa llevar consigo cualquiera de estos:
      </p>
      <ul>
        <li>su <strong>green card vencida junto con el aviso de recibo del I-90</strong> que muestra la
          extensión; o</li>
        <li>un <strong>sello ADIT</strong> en su pasaporte.</li>
      </ul>
      <p>
        Las aerolíneas y los oficiales de Aduanas y Protección Fronteriza (CBP) están acostumbrados a estos
        documentos, pero una tarjeta que simplemente está vencida <em>sin</em> prueba de una renovación pendiente
        puede crear problemas serios en el mostrador de registro del aeropuerto y en el puerto de entrada. Planee
        con anticipación: si sabe que va a viajar, presente el I-90 temprano y, si es necesario, obtenga el sello
        ADIT antes de salir. Tenga en cuenta que el I-90 rige únicamente sobre la <em>tarjeta</em> &mdash; no
        resuelve la cuestión separada de si los viajes largos al extranjero arriesgan el{' '}
        <Link href="/es/blog/green-card-abandonment-travel-rules-reentry-permit-georgia">abandono de su residencia
        permanente</Link>, que es un análisis distinto.
      </p>

      <h2>La Cita de Datos Biométricos</h2>
      <p>
        Después de presentar, USCIS normalmente programa una <strong>cita de datos biométricos</strong> en un{' '}
        <strong>Centro de Apoyo de Solicitudes (ASC)</strong> &mdash; hay ubicaciones de ASC que atienden el área
        metropolitana de Atlanta &mdash; donde se capturan sus huellas dactilares, su fotografía y su firma. Lleve
        el aviso de la cita y una identificación con foto emitida por el gobierno. En algunos casos USCIS reutiliza
        datos biométricos capturados anteriormente y exime la cita, pero asuma que tendrá que asistir a menos que
        el aviso le indique lo contrario. Faltar a la cita sin reprogramarla puede hacer que USCIS niegue la
        solicitud.
      </p>

      <h2>No Deje que la Tarjeta Venza Sin Actuar</h2>
      <p>
        Vivir con una green card vencida y sin una renovación pendiente es arriesgado, aunque su estatus de fondo
        continúe. Puede complicar obtener o renovar una <strong>licencia de conducir</strong> en Georgia, probar
        la autorización de empleo ante un empleador, volver a entrar después de un viaje y calificar para ciertos
        beneficios. La solución es sencilla &mdash; presentar el I-90 &mdash; pero las consecuencias de dejarlo
        pasar son reales. Una buena regla general es presentar su renovación en los{' '}
        <strong>seis meses antes de que venza su tarjeta</strong>.
      </p>

      <h2>Cuándo Debe Hablar con un Abogado</h2>
      <p>
        Muchos I-90 son genuinamente rutinarios, y muchas personas los presentan por su cuenta. Pero algunas
        situaciones ameritan ayuda legal antes de presentar cualquier cosa:
      </p>
      <ul>
        <li>
          No está seguro(a) de si tiene una tarjeta <strong>condicional (de 2 años)</strong> o{' '}
          <strong>permanente (de 10 años)</strong> &mdash; el formulario equivocado desperdicia meses y dinero.
        </li>
        <li>
          Tiene <strong>antecedentes penales, problemas de deportación previos o tiempo pasado en el
          extranjero</strong> que podrían salir a la luz cuando USCIS revise el expediente &mdash; un I-90 no es
          un borrón y cuenta nueva, y renovar puede atraer escrutinio.
        </li>
        <li>
          Está evaluando <strong>la renovación frente a la naturalización</strong> y quiere gastar su dinero una
          sola vez, en el lugar correcto.
        </li>
        <li>
          Tiene una tarjeta pendiente o vencida y una <strong>necesidad urgente de viajar o empezar un
          trabajo</strong>, y necesita que el aviso de recibo o el sello ADIT se gestionen en el orden correcto.
        </li>
      </ul>

      <h2>Hable con Eszter Bardi Sobre la Renovación de su Green Card</h2>
      <p>
        Ya sea que simplemente necesite renovar una tarjeta de diez años por vencer, reemplazar una que se perdió
        o se dañó, corregir un nombre después del matrimonio, o averiguar si debería presentar un I-90, un{' '}
        <Link href="/es/blog/remove-conditions-green-card-i-751-georgia">I-751</Link> o pasar directamente a la{' '}
        <Link href="/es/blog/naturalization-citizenship-georgia">naturalización</Link>, la abogada{' '}
        <strong>Eszter Bardi</strong> puede confirmar cuál tarjeta tiene usted, presentar la solicitud correcta y
        asegurarse de que tenga prueba válida de su estatus &mdash; un aviso de recibo o un sello ADIT &mdash;
        para trabajar y viajar mientras espera. Bardi Immigration Law atiende a residentes permanentes en todo
        Georgia con acceso directo a la abogada, no a un especialista de admisión.
      </p>
      <p>
        <strong>Programe una consulta hoy.</strong> Revisaremos su tarjeta actual, confirmaremos su vía de
        presentación y mantendremos su estatus documentado de principio a fin.{' '}
        <Link href="/es/contact">Solicite una consulta en línea</Link>. Hablamos español &mdash; atendemos a la
        comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo brinda información legal general y no constituye
          asesoría legal. El derecho migratorio es complejo, específico a los hechos y cambia frecuentemente
          &mdash; las tarifas de presentación y de datos biométricos de USCIS, los tiempos de procesamiento, el
          período de extensión automática impreso en el aviso de recibo del I-90, las reglas de presentación en
          línea frente a correo y los procedimientos del sello ADIT en la oficina local cambian con el tiempo.
          Confirme los requisitos y las tarifas vigentes en uscis.gov y con la oficina local de USCIS, y consulte
          a un abogado de inmigración con licencia para orientación específica a su caso.
        </em>
      </p>
    </div>
  );
}
