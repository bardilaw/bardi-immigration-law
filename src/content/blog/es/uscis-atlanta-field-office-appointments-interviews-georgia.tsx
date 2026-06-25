/* Verificar antes de publicar — hace referencia a procedimientos migratorios y a una ubicación específica de USCIS (la Oficina de Distrito de USCIS en Atlanta, ubicada en 2150 Parklake Dr NE, Atlanta, GA 30345; la distinción entre una Oficina de Distrito (Field Office) de USCIS, que realiza entrevistas de ajuste de estatus y de naturalización y emite sellos ADIT/I-551, y un Centro de Apoyo de Solicitudes (Application Support Center, ASC), que toma los datos biométricos — huellas dactilares, fotografía y firma; qué llevar a una cita de biométricos y a una entrevista de residencia o naturalización; cómo reprogramar una cita perdida a través del Centro de Contacto de USCIS / Emma / una cuenta de myUSCIS; el derecho a llevar un intérprete y a estar representado por un abogado o representante acreditado; cómo verificar el estado del caso mediante My Case Status en línea, el asistente virtual Emma y el Centro de Contacto de USCIS al 1-800-375-5283). NOTA: el horario de las oficinas de USCIS, los procedimientos de citas y reprogramación, el sistema InfoPass/de solicitud de citas, los menús telefónicos del Centro de Contacto, las ubicaciones de los ASC y los servicios de las oficinas de distrito cambian y son específicos a los hechos. Confirme la dirección, el horario y el proceso de citas vigentes en uscis.gov y en la notificación oficial de cita antes del go-live y para cualquier caso individual. */
import Link from 'next/link';
// Adaptación al español de en/uscis-atlanta-field-office-appointments-interviews-georgia.tsx (BAR-855). Español natural, no traducción literal.

export const esTitle = 'La Oficina de USCIS en Atlanta, Georgia: Biométricos, Entrevistas y Qué Esperar';
export const esDescription =
  'Una abogada de inmigración en Georgia explica qué esperar en la Oficina de Distrito de USCIS en Atlanta (2150 Parklake Dr NE): la diferencia entre una cita de biométricos y una entrevista, qué documentos llevar a una entrevista de residencia o naturalización, su derecho a un intérprete y a un abogado, qué hacer si pierde una cita y cómo reprogramarla, cómo verificar el estado de su caso y los errores más comunes que conviene evitar. Información general, no asesoría legal.';

export function UscisAtlantaFieldOfficePostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Si tiene una solicitud pendiente de residencia (green card), naturalización o permiso de trabajo, tarde o
        temprano recibirá por correo una notificación que le indicará que debe presentarse en persona en algún
        lugar &mdash; para una <strong>cita de biométricos</strong> o para una <strong>entrevista</strong>. Para
        la mayoría de los inmigrantes que viven en el área metropolitana de Atlanta y en todo el norte de Georgia,
        eso significa un viaje a la{' '}
        <strong>Oficina de Distrito de USCIS en Atlanta, ubicada en 2150 Parklake Drive NE, Atlanta, GA 30345</strong>,
        o a un Centro de Apoyo de Solicitudes (Application Support Center) cercano. Estas citas ponen nerviosa a la
        gente, pero son trámites gubernamentales de rutina, y saber qué esperar les quita casi todo el miedo.
      </p>
      <p>
        Esta guía explica dónde queda la Oficina de Distrito de Atlanta, la diferencia entre una cita de
        biométricos y una entrevista, qué llevar, qué ocurre dentro de la sala, qué hacer si pierde su cita y cómo
        verificar el estado de su caso &mdash; para que llegue preparado(a).
      </p>

      <h2>Dónde Queda la Oficina de Distrito de Atlanta &mdash; y Cómo Llegar</h2>
      <p>
        La <strong>Oficina de Distrito de USCIS en Atlanta</strong> está ubicada en <strong>2150 Parklake Drive NE,
        Atlanta, GA 30345</strong>, justo al lado de la I-285 en el lado noreste del área metropolitana, cerca de la
        zona de Northlake, en el condado de DeKalb. Hay estacionamiento en el lugar, pero la oficina atiende a una
        población enorme, así que reserve tiempo adicional. Si depende del transporte público, planifique su ruta con
        anticipación &mdash; la oficina no está justo al lado de una estación de tren, y la conexión con el servicio
        de autobús toma tiempo.
      </p>
      <p>
        Unos cuantos consejos prácticos que evitan dolores de cabeza: <strong>llegue temprano</strong> (de 15 a 30
        minutos antes de la hora de su cita), lleve lo menos posible porque pasará por un{' '}
        <strong>control de seguridad</strong> parecido al de un aeropuerto, y deje los artículos prohibidos
        &mdash; bolsas grandes, armas de cualquier tipo y, a veces, comida o dispositivos de grabación &mdash; en su
        auto. El <strong>horario de la oficina y el proceso exacto de citas cambian</strong>, y las oficinas de
        distrito de USCIS generalmente funcionan <strong>solo con cita previa</strong>, así que guíese siempre por lo
        que digan su notificación oficial y uscis.gov en lugar de simplemente presentarse.
      </p>

      <h2>Biométricos vs. Entrevista: Dos Citas Diferentes</h2>
      <p>
        La gente suele confundir ambas cosas, pero ocurren en lugares distintos y cumplen propósitos distintos.
      </p>
      <p>
        Una <strong>cita de biométricos</strong> normalmente se realiza en un <strong>Centro de Apoyo de Solicitudes
        (Application Support Center, ASC)</strong> &mdash; hay un ASC que atiende al área metropolitana de Atlanta
        &mdash; y no en la Oficina de Distrito en sí. Es breve y administrativa: USCIS captura sus{' '}
        <strong>huellas dactilares, fotografía y firma</strong> para poder hacer las verificaciones de antecedentes y
        de seguridad y producir su tarjeta. No hay preguntas sobre el fondo de su caso. La mayoría de las citas duran
        bastante menos de una hora, y por lo general entra y sale rápido una vez que se registra.
      </p>
      <p>
        Una <strong>entrevista</strong> &mdash; para la residencia a través del{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajuste de estatus</Link> o para la{' '}
        <Link href="/es/blog/naturalization-citizenship-georgia">naturalización (ciudadanía)</Link> &mdash; se realiza
        en la <strong>Oficina de Distrito</strong> y es el paso sustantivo en el que un oficial revisa cara a cara su
        solicitud, sus documentos y su elegibilidad.
      </p>

      <h2>Qué Llevar a una Cita de Biométricos</h2>
      <ul>
        <li>Su <strong>notificación de cita</strong> (Formulario I-797C) &mdash; la carta que le indica dónde y
          cuándo presentarse. Sin ella podrían rechazarlo(a).</li>
        <li>Una <strong>identificación con foto válida emitida por el gobierno</strong> &mdash; un pasaporte, una
          green card, una licencia de conducir o una identificación estatal.</li>
        <li>Su <strong>green card o permiso de trabajo (EAD)</strong>, si lo tiene.</li>
      </ul>
      <p>
        Lleve la notificación y la identificación aunque crea que la oficina ya tiene su información. Si no puede
        asistir a la hora programada, no la deje pasar sin más &mdash; reprograme (vea más abajo).
      </p>

      <h2>Qué Esperar en una Entrevista de Residencia o Naturalización</h2>
      <p>
        La entrevista es donde la preparación rinde frutos. Después de registrarse y pasar el control de seguridad,
        esperará a ser llamado(a) por un oficial, quien lo(a) pondrá bajo juramento. A partir de ahí:
      </p>
      <ul>
        <li>
          <strong>Para una entrevista de ajuste de estatus (residencia):</strong> el oficial confirma la
          información de su solicitud, revisa sus documentos de respaldo y &mdash; en casos de matrimonio &mdash;
          hace preguntas para confirmar que la relación es genuina. Lleve los <strong>originales</strong> de los
          documentos que presentó en copia (actas de nacimiento y de matrimonio, pasaportes, el{' '}
          <Link href="/es/blog/green-card-medical-exam-i-693-georgia">examen médico I-693</Link> si aún no lo ha
          presentado, registros de impuestos y prueba de un matrimonio de buena fe cuando corresponda).
        </li>
        <li>
          <strong>Para una entrevista de naturalización (N-400):</strong> el oficial revisa su solicitud y
          administra los <strong>exámenes de inglés y de educación cívica</strong> &mdash; leer, escribir y hablar
          inglés, además de las preguntas sobre la historia y el gobierno de los Estados Unidos &mdash; a menos que
          usted califique para una exención o una adaptación.
        </li>
      </ul>
      <p>
        Lleve su <strong>notificación de cita, su green card y todos los pasaportes vigentes y vencidos, su
        identificación estatal o licencia de conducir</strong>, y los originales de todo lo que presentó. Si algo ha
        cambiado desde que presentó la solicitud &mdash; una nueva dirección, empleo, matrimonio, hijo o arresto
        &mdash; dígaselo a su abogado antes de la entrevista y lleve la documentación. Responda con la verdad y
        únicamente lo que le pregunten.
      </p>

      <h2>Su Derecho a un Intérprete &mdash; y a un Abogado</h2>
      <p>
        Si no se siente cómodo(a) llevando a cabo el trámite en inglés (y la cita en sí no evalúa su inglés, como sí
        lo hace la entrevista de naturalización), por lo general tiene derecho a llevar un <strong>intérprete
        calificado</strong>. También tiene derecho a estar <strong>representado(a) por un abogado</strong> o un
        representante acreditado, quien puede acompañarlo(a) a la entrevista. Tener un abogado presente no indica que
        usted tenga algo que ocultar &mdash; indica que tomó su caso en serio y que quiere que el expediente sea
        preciso. Bardi Immigration Law acompaña con regularidad a sus clientes a las entrevistas en la Oficina de
        Distrito de Atlanta.
      </p>

      <h2>Qué Pasa Si Pierde Su Cita</h2>
      <p>
        Perder una cita es un problema, pero por lo general tiene solución si actúa rápido. USCIS puede tratar una
        cita de biométricos perdida como <strong>abandono</strong> de su solicitud y negarla, y una entrevista
        perdida puede retrasar o descarrilar su caso. Si no puede asistir:
      </p>
      <ul>
        <li>
          <strong>Reprograme antes de la fecha siempre que sea posible.</strong> Puede solicitar una nueva cita a
          través del <strong>Centro de Contacto de USCIS</strong>, mediante su <strong>cuenta en línea de
          myUSCIS</strong>, o con la ayuda de <strong>Emma</strong>, el asistente virtual de la agencia en
          uscis.gov. (USCIS ha reemplazado en gran medida el antiguo sistema presencial &ldquo;InfoPass&rdquo; de
          atención sin cita por citas solicitadas a través del Centro de Contacto.)
        </li>
        <li>
          <strong>Tenga una buena razón y documéntela.</strong> Reprogramar por un conflicto genuino &mdash; una
          enfermedad, una emergencia de trabajo, una muerte en la familia &mdash; es mucho mejor que no presentarse.
        </li>
      </ul>
      <p>
        Si ya perdió una cita, comuníquese con USCIS (o con su abogado) de inmediato para explicar y pedir una
        reprogramación, en lugar de esperar una notificación de denegación.
      </p>

      <h2>Cómo Verificar el Estado de Su Caso</h2>
      <p>
        No tiene que adivinar en qué punto se encuentra su caso. USCIS le ofrece varias herramientas gratuitas:
      </p>
      <ul>
        <li>
          <strong>My Case Status en línea.</strong> Ingrese su <strong>número de recibo</strong> (el código de 13
          caracteres que comienza con tres letras, ubicado en su notificación I-797) en la página &ldquo;Case Status
          Online&rdquo; de USCIS para ver la última acción registrada en su caso.
        </li>
        <li>
          <strong>Una cuenta de myUSCIS.</strong> Crear una cuenta gratuita le permite dar seguimiento a sus casos,
          recibir actualizaciones, actualizar su dirección y solicitar citas, todo en un solo lugar.
        </li>
        <li>
          <strong>Emma.</strong> El asistente virtual en uscis.gov responde preguntas comunes y puede comunicarlo(a)
          con un representante en vivo.
        </li>
        <li>
          <strong>El Centro de Contacto de USCIS al 1-800-375-5283</strong> (TTY 1-800-767-1833) para ayuda en vivo,
          incluyendo solicitudes de citas y preguntas sobre su caso.
        </li>
      </ul>

      <h2>Errores Comunes en las Entrevistas que Conviene Evitar</h2>
      <ul>
        <li><strong>Presentarse sin sus originales</strong> o sin la notificación de cita.</li>
        <li><strong>Adivinar en lugar de decir &ldquo;No lo sé.&rdquo;</strong> Una respuesta equivocada bajo
          juramento se ve peor que un honesto &ldquo;No estoy seguro(a).&rdquo;</li>
        <li><strong>No revelar cambios o problemas</strong> &mdash; un nuevo arresto, una mudanza, un cambio de
          empleo o un problema migratorio anterior &mdash; que un oficial puede ver en el expediente. Las sorpresas
          dañan la credibilidad.</li>
        <li><strong>Dar más información de la que le piden.</strong> Responda la pregunta que le hacen, con claridad
          y honestidad, y deténgase.</li>
        <li><strong>Llegar sin preparación a un caso complicado</strong> &mdash; por ejemplo, un caso de matrimonio
          con pocos documentos conjuntos, un expediente que toca{' '}
          <Link href="/es/blog/criminal-record-immigration-consequences-georgia">antecedentes penales</Link>, o un
          largo período fuera de estatus. Esos son los casos en los que más importa contar con un abogado.</li>
      </ul>

      <h2>Hable con Eszter Bardi Antes de Su Cita en Atlanta</h2>
      <p>
        Una cita de biométricos por lo general no es motivo de preocupación. Una entrevista es otro asunto &mdash; es
        el momento en que se decide su caso, y una buena preparación puede marcar la diferencia entre una aprobación
        y un retraso o una denegación. La abogada <strong>Eszter Bardi</strong> prepara a sus clientes para las
        entrevistas en la <strong>Oficina de Distrito de USCIS en Atlanta</strong>, revisa los documentos que
        necesitará, explica las preguntas que probablemente enfrentará y puede acompañarlo(a) a la entrevista. Si su
        green card está por vencer mientras su caso sigue pendiente, ella también puede ayudarlo(a) a solicitar un{' '}
        <Link href="/es/blog/i90-green-card-renewal-replacement-georgia">sello ADIT o una renovación</Link> y a
        mantener vigente su prueba de estatus y su{' '}
        <Link href="/es/blog/employment-authorization-ead-georgia">autorización de trabajo</Link>.
      </p>
      <p>
        <strong>Programe una consulta hoy.</strong> Repasaremos su notificación, organizaremos sus documentos y nos
        aseguraremos de que esté listo(a) antes de que ponga un pie en el edificio.{' '}
        <Link href="/es/contact">Solicite una consulta en línea</Link>. Hablamos español &mdash; atendemos a la
        comunidad hispanohablante de Georgia.
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
