/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (el sistema de preferencias familiares y los límites por país bajo INA §201–203; las fechas de prioridad y el Boletín de Visas mensual del Departamento de Estado, incluidas las Fechas de Acción Final ("Chart A") y las Fechas de Presentación ("Chart B"); las categorías de preferencia F2A/F2B/F1/F3/F4; la conversión automática y la opción de permanecer en F2B cuando el peticionario se naturaliza bajo el §6 de la Child Status Protection Act / 8 CFR 204.2(i)(1)(ii); las disposiciones de edad de la Child Status Protection Act bajo INA §201(f) y §203(h); el alivio para sobrevivientes cuando el peticionario fallece bajo INA §204(l), las autopeticiones de viudo(a) bajo INA §201(b)(2)(A)(i), la reinstalación humanitaria bajo 8 CFR 205.1(a)(3)(i)(C)(2) y los patrocinadores sustitutos bajo INA §213A(f)(5); la revocación automática de una petición ante la solicitud de retiro del peticionario o el fallecimiento del beneficiario bajo 8 CFR 205.1–205.2; la retención/recuperación de la fecha de prioridad bajo 8 CFR 204.2(h)(2); y el ajuste de estatus bajo INA §245 frente al proceso consular). Estas reglas, el Boletín de Visas y la guía de la agencia cambian con frecuencia. Esta publicación deliberadamente NO promete ningún resultado — cada patrón de hechos requiere evaluación individual de un abogado. Confirmar el estatuto, los reglamentos, el Manual de Políticas de USCIS y el Boletín de Visas del mes vigentes; confirmar contra USCIS antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/long-pending-i130-priority-date-backlog-georgia.tsx (BAR-896). Español natural, no traducción literal.

export const esTitle = 'Petición I-130 Aprobada pero la Espera No Termina: Fechas de Prioridad y el Atraso Familiar en Georgia';
export const esDescription =
  'Una abogada de inmigración en Georgia explica qué hacer cuando su I-130 está aprobada pero la fecha de prioridad está lejos de estar al día: cómo leer el Boletín de Visas (Chart A y Chart B), las pocas formas en que un caso puede avanzar más rápido, qué pasa si fallece el peticionario o el beneficiario, el error catastrófico de retirar la petición, y qué hace en realidad un abogado durante un atraso de años. Información general, no asesoría legal.';

export function LongPendingI130PostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Para muchas familias en Georgia, la parte más difícil de una green card familiar no es lograr que
        se apruebe la petición &mdash; es la espera que viene después. Un ciudadano estadounidense o un
        residente permanente presenta el{' '}
        <Link href="/es/blog/i130-family-petition-sponsor-relative-green-card-georgia">Formulario I-130</Link>,
        USCIS lo aprueba, y luego parece que no pasa nada durante años. Para un hermano de Filipinas o un
        hijo adulto casado de México, la espera puede extenderse más de dos décadas. Si su I-130 está
        aprobada pero su fecha de prioridad no está ni cerca de estar al día, no está condenado a no hacer
        nada &mdash; hay decisiones reales que tomar, trampas que evitar, y pasos que protegen el lugar en
        la fila que usted ya ganó.
      </p>
      <p>
        Esta guía explica cómo entender en qué punto se encuentra, las formas limitadas en que un caso a
        veces puede avanzar más rápido, qué sucede si alguien fallece durante la espera, el error
        catastrófico más común, y qué hace en realidad un abogado por una familia atrapada en un atraso de
        varios años. Es información general, no asesoría legal.
      </p>

      <h2>Por Qué las Peticiones Aprobadas Aún Esperan: Las Fechas de Prioridad</h2>
      <p>
        Solo los <strong>familiares inmediatos</strong> de ciudadanos estadounidenses &mdash; cónyuges,
        padres e hijos solteros menores de 21 años &mdash; tienen un suministro ilimitado de green cards.
        Todos los demás caen dentro de las <strong>categorías de preferencia familiar</strong>, que tienen
        un límite cada año y se dividen por país:
      </p>
      <ul>
        <li><strong>F1</strong> &mdash; hijos e hijas adultos solteros de ciudadanos estadounidenses.</li>
        <li><strong>F2A</strong> &mdash; cónyuges e hijos menores de residentes permanentes.</li>
        <li><strong>F2B</strong> &mdash; hijos e hijas adultos solteros de residentes permanentes.</li>
        <li><strong>F3</strong> &mdash; hijos e hijas casados de ciudadanos estadounidenses.</li>
        <li><strong>F4</strong> &mdash; hermanos y hermanas de ciudadanos estadounidenses adultos.</li>
      </ul>
      <p>
        Cuando se presenta la petición, el beneficiario recibe una <strong>fecha de prioridad</strong>
        &mdash; su lugar en la fila. Como la demanda supera con creces los límites anuales, y como la ley
        limita cuántas visas puede tomar un solo país, los solicitantes de países de alta demanda (México,
        Filipinas, India, China, Vietnam) esperan mucho más que el promedio mundial. Un hermano F4 de
        Filipinas que presente la petición hoy quizá no vea una fecha de prioridad al día sino dentro de
        aproximadamente dos décadas.
      </p>

      <h2>Cómo Saber si Su Fecha de Prioridad Está al Día</h2>
      <p>
        Cada mes el Departamento de Estado publica el{' '}
        <Link href="/es/blog/visa-bulletin-priority-dates-family-green-card">Boletín de Visas</Link>, y este
        lo controla todo. Tiene dos tablas que usted debe aprender a leer:
      </p>
      <ul>
        <li>
          <strong>Fechas de Acción Final (Chart A)</strong> &mdash; la fecha que debe alcanzarse antes de
          que una green card pueda realmente <em>emitirse</em>. Cuando su fecha de prioridad es anterior a
          la fecha de corte de su categoría y país, su caso está &ldquo;al día&rdquo; (current).
        </li>
        <li>
          <strong>Fechas de Presentación (Chart B)</strong> &mdash; una fecha anterior que, cuando USCIS
          autoriza su uso en un mes determinado, permite que las personas dentro de EE. UU. presenten el{' '}
          <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajuste de estatus</Link> (o que
          envíen documentos al Centro Nacional de Visas, si están en el extranjero) antes de que el caso
          esté del todo al día.
        </li>
      </ul>
      <p>
        Encuentre su categoría y su país de nacimiento, compare la fecha de corte con su fecha de prioridad,
        y verifique qué tabla dice USCIS que aplica ese mes. Las fechas de prioridad pueden avanzar,
        estancarse o incluso <strong>retroceder</strong> (moverse hacia atrás) cuando la demanda se dispara,
        así que este es un número que hay que vigilar cada mes, no una sola vez.
      </p>

      <h2>¿Hay Algo que Pueda Acelerarlo?</h2>
      <p>
        No existe ninguna tarifa para &ldquo;agilizar&rdquo; un atraso &mdash; la espera la impulsan los
        números de visa, no la velocidad de USCIS. Pero la <em>categoría</em> en la que se encuentra un
        beneficiario a veces puede cambiar, y una categoría más rápida es la verdadera palanca:
      </p>
      <ul>
        <li>
          <strong>El peticionario se naturaliza.</strong> Cuando un residente permanente se convierte en
          ciudadano estadounidense, un cónyuge o hijo menor F2A se convierte en familiar inmediato (sin
          espera), y un hijo o hija adulto soltero F2B se convierte en F1. La naturalización suele ayudar
          &mdash; pero para algunos países (en especial México y Filipinas) la fila F1 es en realidad{' '}
          <em>más lenta</em> que la F2B. La ley permite que ese beneficiario <strong>opte por no
          convertir</strong> (opt out) y permanezca en F2B; esa elección debe hacerse de forma deliberada.
        </li>
        <li>
          <strong>Existe una relación más rápida.</strong> El matrimonio con un ciudadano estadounidense
          crea una vía de familiar inmediato sin fila alguna &mdash; a menudo mucho más rápida que esperar
          a que se resuelva una petición F2B o F4. (Lo inverso es una trampa: un beneficiario F1 o F2B que{' '}
          <em>se casa</em> puede cambiar o perder su categoría. Vea el punto sobre el momento más abajo.)
        </li>
        <li>
          <strong>Una vía de empleo independiente.</strong> Un beneficiario con una oferta de trabajo o
          habilidades excepcionales puede calificar para una green card{' '}
          <Link href="/es/blog/employment-based-immigration-georgia">basada en el empleo</Link> (EB-1, EB-2
          o EB-3), que es una fila completamente separada y puede avanzar más rápido que una categoría
          familiar congestionada.
        </li>
      </ul>
      <p>
        Cada una de estas opciones depende de los hechos, y el movimiento equivocado puede salir mal. Si
        conviene presentar una segunda petición, cambiar de vía o quedarse quieto es exactamente el tipo de
        decisión que vale la pena consultar con un abogado antes de actuar.
      </p>

      <h2>Proteger a los Hijos que se Acercan a los 21 Años</h2>
      <p>
        Un hijo incluido en una petición que cumple 21 años durante la espera puede &ldquo;envejecer&rdquo;
        (age out) y perder su lugar. La <strong>Child Status Protection Act</strong> puede restar los años
        que la petición estuvo pendiente de la edad del hijo y, para los familiares inmediatos, congelarla a
        la fecha de presentación. La fórmula es implacable y hay un plazo de un año para actuar una vez que
        una visa está disponible. Si alguien en su familia era menor de edad cuando se presentó la petición
        y se acerca a los 21, lea nuestra guía dedicada sobre la{' '}
        <Link href="/es/blog/child-status-protection-act-cspa-aging-out-georgia">CSPA y el envejecimiento
        (aging out)</Link> y haga revisar el cálculo temprano &mdash; un solo cumpleaños puede cambiarlo
        todo.
      </p>

      <h2>Qué Sucede si el Peticionario Fallece Durante la Espera</h2>
      <p>
        El fallecimiento del familiar patrocinador es uno de los acontecimientos más aterradores en un caso
        largo, pero no siempre es el final:
      </p>
      <ul>
        <li>
          <strong>Continuación para sobrevivientes bajo la INA §204(l).</strong> Si el beneficiario residía
          en Estados Unidos cuando el peticionario falleció y sigue residiendo aquí, USCIS puede continuar la
          petición aprobada a pesar del fallecimiento, dentro de la discreción que permite el estatuto.
        </li>
        <li>
          <strong>Reinstalación humanitaria.</strong> Si una petición se revoca a causa del fallecimiento del
          peticionario, USCIS puede reinstalarla por razones humanitarias bajo el{' '}
          <strong>8 CFR 205.1(a)(3)(i)(C)</strong>, por lo general con un <strong>patrocinador
          sustituto</strong> que asume la{' '}
          <Link href="/es/blog/affidavit-of-support-i-864-income-requirements">Declaración Jurada de
          Manutención (Formulario I-864)</Link>.
        </li>
        <li>
          <strong>Autopetición de viudo(a).</strong> El cónyuge sobreviviente de un ciudadano estadounidense
          puede autopeticionar con el <strong>Formulario I-360</strong> dentro de los dos años posteriores al
          fallecimiento del ciudadano, preservando la vía sin un peticionario vivo.
        </li>
      </ul>
      <p>
        Estas opciones son discrecionales, están sujetas a plazos y son intensivas en documentación &mdash;
        el tipo de alivio que es mucho más fácil de asegurar con ayuda legal pronta que de reconstruir
        después.
      </p>

      <h2>Qué Sucede si Fallece el Beneficiario Principal</h2>
      <p>
        Este es el escenario más duro. Cuando fallece el beneficiario <em>principal</em> de una petición de
        preferencia, la petición por lo general <strong>se termina</strong>, y el cónyuge y los hijos
        derivados que dependían de esa petición suelen perder la vía junto con ella. En circunstancias
        limitadas, el alivio para sobrevivientes de la §204(l) puede preservar un caso para los derivados que
        residían en EE. UU., pero la regla por defecto es implacable. Las familias en esta situación deberían
        buscar asesoría de inmediato en lugar de dar por sentado que no se puede hacer nada.
      </p>

      <h2>El Error Catastrófico: Retirar la Petición</h2>
      <p>
        Un peticionario puede pedirle a USCIS que <strong>retire</strong> un I-130 aprobado en cualquier
        momento &mdash; y hacerlo por lo general <strong>destruye la fecha de prioridad de forma
        permanente</strong>. Vemos esto después de rupturas familiares, divorcios o simples malentendidos
        sobre cómo funciona la fila. Empezar de nuevo significa una petición totalmente nueva con una fecha de
        prioridad totalmente nueva y mucho más tardía &mdash; a veces tirando por la borda una década o más
        de espera. Existen reglas de <em>retención</em> de la fecha de prioridad para algunas conversiones,
        pero son estrechas y no rescatan a la mayoría de los retiros. Antes de que alguien retire, abandone o
        deje de responder a una petición, hable con un abogado; este es uno de los errores catastróficos más
        fáciles de prevenir y de los más difíciles de deshacer.
      </p>

      <h2>Si un Familiar Está en Procedimientos de Remoción Mientras Espera</h2>
      <p>
        Un atraso largo es especialmente peligroso cuando un beneficiario es indocumentado o pierde su
        estatus, porque una petición aprobada que está a años de estar al día no detiene por sí sola una
        deportación. Si un familiar es colocado en procedimientos de remoción en la{' '}
        <Link href="/es/blog/georgia-immigration-courts-atlanta-gwinnett-dekalb-stewart-guide">corte de
        inmigración de Atlanta o de Stewart</Link>, un I-130 aprobado aún puede importar: puede respaldar el
        ajuste de estatus ante el juez si la fecha de prioridad está (o llega a estar) al día, una solicitud
        para cerrar administrativamente o continuar el caso, u otro alivio discrecional. Si algo de esto está
        disponible depende del historial de entrada, las barras de la §245 y la postura exacta del caso
        &mdash; es una situación que exige contar de inmediato con un abogado de{' '}
        <Link href="/es/blog/deportation-defense-removal-proceedings-georgia">defensa contra la
        deportación</Link>.
      </p>

      <h2>Qué Hace en Realidad un Abogado Durante la Espera</h2>
      <p>
        Un atraso de varios años no es tiempo muerto. El trabajo que protege un caso incluye monitorear el
        Boletín de Visas y señalar el mes en que por fin puede presentar; hacer los cálculos de CSPA antes de
        que un hijo cumpla 21; decidir si la naturalización, una opción de no convertir (opt-out), el momento
        del matrimonio o una vía de empleo cambian el resultado; mantener saludable cualquier caso pendiente
        (conservar el estatus legal cuando sea posible, renovar{' '}
        <Link href="/es/blog/daca-deferred-action-childhood-arrivals-georgia">DACA</Link> y los permisos de
        trabajo, obtener el{' '}
        <Link href="/es/blog/advance-parole-travel-documents-georgia">advance parole</Link> antes de viajar);
        mantener su dirección actualizada con USCIS; y alejar a la familia de los movimientos &mdash; un
        matrimonio mal cronometrado, una petición abandonada, un viaje no autorizado al extranjero &mdash;
        que silenciosamente destruyen años de progreso.
      </p>
      <p>
        Bardi Immigration Law ayuda a las familias de Georgia &mdash; en Gwinnett, Hall, Cobb y el área
        metropolitana de Atlanta &mdash; a manejar atrasos familiares largos desde la aprobación hasta la
        green card, incluyendo decisiones de actualización de categoría, la estrategia de la{' '}
        <Link href="/es/blog/family-green-card-attorney-georgia">green card familiar</Link>, y el alivio
        para sobrevivientes cuando ocurre lo inesperado. La abogada <strong>Eszter Bardi</strong> tiene
        licencia en <strong>Georgia y Alabama</strong> y brinda acceso directo a la abogada &mdash; usted
        habla con su abogada, no con un asistente legal. Si su fecha de prioridad está a años de distancia,
        una revisión temprana puede mantener seguro el lugar en la fila que usted ya ganó. Conozca{' '}
        <Link href="/es/blog/how-to-choose-immigration-attorney-georgia">cómo elegir un abogado de
        inmigración</Link> antes de comprometerse.
      </p>
      <p>
        <Link href="/es/contact">Programe una consulta hoy.</Link>
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación de blog es solo para fines informativos y no
          constituye asesoría legal. El sistema de preferencias familiares, las fechas de prioridad y el
          Boletín de Visas mensual, la Child Status Protection Act, el alivio para sobrevivientes bajo la INA
          §204(l), las autopeticiones de viudo(a), la reinstalación humanitaria, los patrocinadores
          sustitutos, la revocación automática por retiro o fallecimiento, y la retención de la fecha de
          prioridad están regidos por estatuto, reglamentos, guía de USCIS en evolución y el Boletín de Visas
          vigente, todo lo cual cambia con el tiempo. Si alguna opción aplica depende enteramente de los
          hechos y las fechas individuales. Consulte a un abogado de inmigración con licencia sobre su
          situación específica.
        </em>
      </p>
    </div>
  );
}
