/* Verificar antes de publicar — hace referencia a la ley/procedimiento migratorio (la Child Status Protection Act of 2002; la definición de &ldquo;child&rdquo; bajo INA §101(b)(1) como soltero y menor de 21 años; la congelación de la edad para familiares inmediatos en la fecha en que se presenta el I-130 bajo INA §201(f); la fórmula de edad CSPA para beneficiarios de categorías de preferencia y derivados bajo INA §203(h)(1) — la edad biológica en la fecha en que una visa queda disponible menos el tiempo que la petición estuvo pendiente; el requisito de "sought to acquire" la residencia permanente legal dentro de un año bajo §203(h)(1)(A); la regla de conversión automática y de retención de la fecha de prioridad bajo INA §203(h)(3) según la interpretación de Matter of Wang, 25 I&N Dec. 28 (BIA 2009) y Scialabba v. Cuellar de Osorio, 573 U.S. 41 (2014); la actualización de febrero de 2023 del USCIS Policy Manual que usa el cuadro Dates for Filing para determinar la disponibilidad de visa a efectos de CSPA; y la aplicación de CSPA a derivados familiares, por empleo, de la lotería de visas de diversidad, refugiados/asilados y VAWA). Estas reglas, guías de la agencia y jurisprudencia se litigan y cambian. Confirme el estatuto vigente, los reglamentos, el USCIS Policy Manual, el Visa Bulletin mensual y la jurisprudencia de la BIA/Corte Suprema antes del lanzamiento. Esta publicación deliberadamente NO promete ningún resultado — cada situación requiere la evaluación individual de un abogado. */
import Link from 'next/link';

// Adaptación al español de en/child-status-protection-act-cspa-aging-out-georgia.tsx (BAR-887). Español natural, no traducción literal.

export const esTitle = 'Ley de Protección del Estatus del Menor (CSPA) en Georgia: cómo proteger a los hijos de perder la condición de menor (aging out)';
export const esDescription = 'Cómo la Ley de Protección del Estatus del Menor (CSPA) protege a los hijos que cumplen 21 años durante un caso migratorio: la fórmula de edad bajo INA §203(h)(1), el plazo de un año y la congelación de edad para familiares inmediatos. Información general, no asesoría legal.';

export function ChildStatusProtectionActPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        En la inmigración familiar, el momento lo puede decidir todo. Un padre presenta una petición de
        residencia para un hijo o hija adolescente, el caso queda atrapado en una fila de años, y para cuando
        por fin hay una visa disponible el hijo ya ha cumplido 21 años. Bajo las reglas ordinarias, ese
        cumpleaños es catastrófico: en el momento en que un hijo &ldquo;pierde la condición de menor (aging
        out),&rdquo; deja de ser <em>menor</em> a efectos migratorios y cae en una categoría más lenta
        &mdash; o pierde por completo su lugar en la fila. La{' '}
        <strong>Ley de Protección del Estatus del Menor (CSPA)</strong>, aprobada en 2002, existe para
        impedir que la demora del gobierno castigue así a las familias.
      </p>
      <p>
        Esta guía explica qué significa perder la condición de menor, cómo funciona la fórmula de edad CSPA,
        a quién protege, el plazo de un año que descalifica en silencio a quienes lo desconocen, y qué pasa
        cuando la CSPA no salva un caso. Es información general, no asesoría legal. Los cálculos de la CSPA
        son implacables y dependen de cada caso &mdash; una sola fecha mal calculada puede costarle años a
        una familia, así que esta es un área en la que una revisión temprana de un abogado realmente importa.
      </p>

      <h2>Qué significa &ldquo;perder la condición de menor (aging out)&rdquo;</h2>
      <p>
        La ley migratoria define a un <strong>menor</strong> bajo <strong>INA §101(b)(1)</strong> como
        alguien que está <strong>soltero y es menor de 21 años</strong>. De esa condición se derivan muchos
        beneficios. El hijo de un ciudadano estadounidense es un{' '}
        <Link href="/es/blog/i130-family-petition-sponsor-relative-green-card-georgia">familiar inmediato</Link>{' '}
        sin cupo anual de visas y sin lista de espera. Los hijos menores de los residentes permanentes, y los
        hijos acompañantes de casi todo beneficiario de categoría de preferencia, pueden viajar junto a la
        petición de un padre como <strong>derivados</strong>.
      </p>
      <p>
        Al cumplir 21 años, eso cambia. El hijo de un ciudadano que era familiar inmediato cae a la primera
        categoría de preferencia (F1), con su fila de varios años. Un hijo derivado que pierde la condición
        de menor puede ser retirado del caso del padre y quedar necesitando una petición totalmente nueva.
        Como los tiempos de trámite de USCIS y las filas del{' '}
        <Link href="/es/blog/visa-bulletin-priority-dates-family-green-card">Visa Bulletin</Link> suelen
        durar años, los hijos perdían la condición de menor por miles antes de que el Congreso actuara. La
        CSPA fue la solución.
      </p>

      <h2>Las dos reglas de la CSPA</h2>
      <p>
        La CSPA no eleva la mayoría de edad ni permite que nadie sea menor para siempre. En cambio, usa dos
        mecanismos distintos según la categoría.
      </p>

      <h3>1. Familiares inmediatos: edad congelada al presentar</h3>
      <p>
        Para los hijos de ciudadanos estadounidenses &mdash; familiares inmediatos &mdash; la CSPA es simple.
        Bajo <strong>INA §201(f)</strong>, la edad del hijo se <strong>congela en la fecha en que se presenta
        el Formulario I-130</strong>. Si la petición se presenta mientras el hijo es menor de 21 años, ese
        hijo sigue siendo familiar inmediato sin importar cuánto tarde USCIS en adjudicarla. La misma
        protección se extiende a un hijo cuyo padre residente permanente legal se naturaliza después (el caso
        se convierte en familiar inmediato, con la edad fijada a la fecha de la naturalización) y, en algunas
        situaciones, a un hijo o hija casado cuyo matrimonio que lo calificaba termina.
      </p>

      <h3>2. Categorías de preferencia y derivados: la fórmula CSPA</h3>
      <p>
        Para todos los que están en el sistema de preferencias &mdash; <strong>F1, F2A, F2B, F3, F4</strong>,
        los hijos derivados de inmigrantes por empleo y de la lotería de visas de diversidad, y otros &mdash;
        la edad no simplemente se congela. En cambio, <strong>INA §203(h)(1)</strong> establece un cálculo
        que resta la demora del gobierno a la edad real del hijo:
      </p>
      <p>
        <strong>
          Edad CSPA = la edad biológica del hijo cuando una visa queda disponible &minus; el número de días
          que la petición estuvo pendiente (fecha de aprobación &minus; fecha de presentación).
        </strong>
      </p>
      <p>
        Si la edad CSPA resultante es <strong>menor de 21 años</strong>, el hijo está protegido y conserva su
        estatus. La idea es que los años que la petición estuvo en USCIS no deben contar en contra del hijo.
        Un detalle clave es qué significa que &ldquo;una visa queda disponible&rdquo;: generalmente es la
        fecha posterior entre la fecha en que se aprobó la petición o la fecha en que la fecha de prioridad
        quedó vigente en el Visa Bulletin. Desde una actualización de febrero de 2023 al USCIS Policy Manual,
        la agencia ha usado el cuadro <strong>Dates for Filing</strong> (cuando ese cuadro permite presentar
        ajustes de estatus) para fijar la fecha de disponibilidad de visa a efectos de CSPA &mdash; un cambio
        que ha rescatado a muchos hijos que habrían perdido la condición de menor bajo el enfoque anterior.
        Esa guía puede cambiar, así que siempre hay que revisar el Policy Manual y el Visa Bulletin vigentes.
      </p>

      <h2>El plazo de un año para &ldquo;sought to acquire&rdquo;</h2>
      <p>
        Calcular una edad CSPA protectora es solo la mitad del trabajo. Para <em>asegurar</em> el beneficio,
        el beneficiario debe <strong>buscar adquirir la residencia permanente legal dentro de un año</strong>{' '}
        de que una visa quede disponible, como exige <strong>§203(h)(1)(A)</strong>. En la práctica eso
        significa presentar la solicitud de{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajuste de estatus Formulario
        I-485</Link> (si está en Estados Unidos) o la solicitud de visa de inmigrante DS-260 y los documentos
        requeridos a través del National Visa Center (si está en el extranjero) dentro de ese plazo. Si se
        pierde el plazo de un año sin una excusa de &ldquo;circunstancias extraordinarias,&rdquo; la
        protección de la CSPA puede perderse aunque el cálculo haya dado a favor. Este plazo es la forma más
        común en que las familias pierden un beneficio que ya se habían ganado.
      </p>

      <h2>A quién protege la CSPA</h2>
      <p>
        La CSPA alcanza a la mayor parte del sistema migratorio, no solo a las peticiones familiares. Se
        aplica a:
      </p>
      <ul>
        <li>
          <strong>Casos familiares</strong> &mdash; familiares inmediatos y los beneficiarios de las
          preferencias F1, F2A, F2B, F3 y F4 y sus hijos derivados.
        </li>
        <li>
          <strong>Casos por empleo</strong> &mdash; los hijos derivados de inmigrantes por empleo EB-1, EB-2,
          EB-3 y otros.
        </li>
        <li>
          <strong>Lotería de visas de diversidad</strong> &mdash; hijos derivados de un seleccionado de la
          lotería.
        </li>
        <li>
          <strong>Derivados de refugiados y asilados</strong> &mdash; con sus propias reglas de congelación
          de edad ligadas a la fecha en que el principal presentó.
        </li>
        <li>
          <strong>Auto-peticionarios de VAWA</strong> y ciertas otras categorías humanitarias.
        </li>
      </ul>

      <h2>Un ejemplo práctico</h2>
      <p>
        Supongamos que un padre residente permanente legal presenta una petición F2A para un hijo de 19 años.
        USCIS tarda dos años en aprobarla, y la fecha de prioridad queda vigente el día después de la
        aprobación, cuando el hijo tiene 21 años y 1 mes &mdash; biológicamente ha perdido la condición de
        menor. Aplique la fórmula: la petición estuvo pendiente dos años, así que se restan dos años de la
        edad biológica de 21 años 1 mes. La edad CSPA es de unos 19 años 1 mes &mdash; menor de 21. El hijo
        está protegido, siempre que presente el I-485 o el DS-260 dentro de un año de que la visa quede
        disponible. Cambie los hechos &mdash; una aprobación más rápida, una fecha de prioridad que queda
        vigente años después &mdash; y el mismo hijo podría perder la condición de menor. Cada caso depende
        de sus fechas exactas.
      </p>

      <h2>Cuando la CSPA no protege al hijo</h2>
      <p>
        Si la edad CSPA sigue dando 21 años o más, el hijo ha perdido la condición de menor, y las opciones
        se estrechan. Bajo <strong>INA §203(h)(3)</strong>, un beneficiario que perdió la condición de menor
        puede, en circunstancias limitadas, lograr que la petición se{' '}
        <strong>convierta automáticamente</strong> a la categoría apropiada y{' '}
        <strong>conserve la fecha de prioridad original</strong> &mdash; con mayor claridad para un derivado
        F2A que se convierte a F2B una vez que el padre es residente permanente. Hasta dónde llega esa regla
        de conversión automática y de retención de la fecha de prioridad se litigó intensamente. En{' '}
        <strong>Matter of Wang</strong>, 25 I&amp;N Dec. 28 (BIA 2009), la Junta interpretó §203(h)(3) de
        forma estrecha, y la Corte Suprema confirmó esa interpretación estrecha en{' '}
        <strong>Scialabba v. Cuellar de Osorio</strong>, 573 U.S. 41 (2014). El resultado práctico para
        muchos hijos que perdieron la condición de menor: no hay conversión automática, lo que significa una
        nueva petición &mdash; a menudo presentada por el padre ahora residente o naturalizado &mdash; y, con
        frecuencia, la pérdida de la fecha de prioridad original y años de espera. (El resumen para esta
        publicación se refería a Matter of Wang como una decisión de la AAO; es una decisión de la{' '}
        <em>BIA</em>, y la autoridad controladora de la Corte Suprema es Scialabba.)
      </p>
      <p>
        Los hijos que perdieron la condición de menor y tienen el matrimonio en su futuro enfrentan una
        complicación adicional: casarse convierte la categoría de un beneficiario F1 o F2B y puede eliminar
        por completo la elegibilidad F2B, porque los residentes permanentes no pueden peticionar por hijos o
        hijas casados. La secuencia &mdash; quién se naturaliza, quién se casa y cuándo &mdash; puede cambiar
        el resultado de forma drástica.
      </p>

      <h2>Por qué este es un asunto para un abogado</h2>
      <p>
        La CSPA parece aritmética, pero los datos de entrada son engañosamente difíciles: qué fecha cuenta
        como la fecha en que la visa queda disponible, qué cuadro del Visa Bulletin se aplica en un mes dado,
        si el reloj de un año ya empezó, y si un hijo que perdió la condición de menor puede conservar una
        fecha de prioridad. Equivocarse en cualquiera de estos puede significar perder la condición de menor
        innecesariamente o un plazo vencido que no se puede deshacer. Esto también es un blanco móvil &mdash;
        el cambio de 2023 al Policy Manual muestra cuánto puede mover los resultados una sola actualización de
        guía.
      </p>
      <p>
        Bardi Immigration Law ayuda a las familias de Georgia a calcular correctamente las edades CSPA, a
        decidir cuándo presentar{' '}
        <Link href="/es/blog/i130-family-petition-sponsor-relative-green-card-georgia">peticiones familiares</Link>{' '}
        y solicitudes de{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajuste de estatus</Link>, y a proteger a
        los hijos en riesgo de perder la condición de menor &mdash; incluso en casos de{' '}
        <Link href="/es/blog/ir1-cr1-spouse-visa-married-couples-georgia">visa de cónyuge y familiar</Link>.
        La abogada <strong>Eszter Bardi</strong> tiene licencia en <strong>Georgia y Alabama</strong> y
        ofrece acceso directo a la abogada: usted habla con su abogada, no con un asistente legal ni un
        coordinador de admisión. Como los resultados de la CSPA dependen de fechas precisas, una revisión
        temprana &mdash; idealmente antes de que se acerque el cumpleaños número 21 de un hijo &mdash; es la
        mejor protección. Aprenda{' '}
        <Link href="/es/blog/how-to-choose-immigration-attorney-georgia">cómo elegir un abogado de
        inmigración</Link> antes de comprometerse.
      </p>
      <p>
        <Link href="/es/contact">Programe una consulta hoy.</Link>
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación de blog tiene únicamente fines informativos
          y no constituye asesoría legal. La Ley de Protección del Estatus del Menor, la fórmula de edad CSPA
          bajo INA §203(h), la congelación de edad para familiares inmediatos bajo §201(f), el requisito de un
          año de &ldquo;sought to acquire,&rdquo; y las reglas de conversión automática y de fecha de
          prioridad interpretadas en Matter of Wang y Scialabba v. Cuellar de Osorio se rigen por estatutos,
          guías de política de USCIS en evolución, el Visa Bulletin mensual y jurisprudencia federal que
          cambian con el tiempo. Que la CSPA proteja a un hijo en particular depende enteramente de las fechas
          y circunstancias individuales. Consulte a un abogado de inmigración con licencia sobre su situación
          específica.
        </em>
      </p>
    </div>
  );
}
