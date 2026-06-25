/* Verificar antes de publicar — hace referencia a la regla de "cap-gap" de la H-1B en 8 CFR 214.2(f)(5)(vi), que extiende automáticamente el estatus F-1 y (en algunos casos) la autorización de empleo cuando una petición H-1B sujeta al tope presentada oportunamente, solicitando un cambio de estatus con fecha de inicio del 1 de octubre, está pendiente o aprobada. Puntos clave de precisión: (1) el cap-gap cierra la brecha entre cuando vence el OPT o STEM OPT post-finalización y el 1 de octubre; (2) la petición debe solicitar un cambio de estatus (no procesamiento consular) para obtener el cap-gap; (3) si la petición se presenta ANTES de que venza el EAD del OPT, el cap-gap extiende TANTO el estatus F-1 COMO la autorización de trabajo hasta el 30 de septiembre; si se presenta durante el período de gracia de 60 días DESPUÉS de que venció el EAD pero mientras el estatus F-1 aún es válido, el cap-gap extiende el ESTATUS F-1 ÚNICAMENTE (sin autorización de trabajo); (4) el DSO emite un I-20 de cap-gap; (5) los viajes internacionales durante el cap-gap (después de que venció el EAD) generalmente rompen el cap-gap; (6) si la petición H-1B es denegada, rechazada o revocada, el cap-gap termina y aplica el período de gracia F-1 estándar de 60 días; (7) el cap-gap requiere ser SELECCIONADO en la lotería y que la petición se haya presentado oportunamente. Confirmar reglas actuales con USCIS y el DSO del estudiante. Esta es información legal general, no asesoría legal. */
import Link from 'next/link';
// Adaptación al español de en/h1b-cap-gap-opt-work-authorization-georgia.tsx (BAR-854). Español natural, no traducción literal.

export const esTitle = 'Cap-Gap H-1B en Georgia: Cómo Mantener su Autorización de Trabajo Entre el OPT y la H-1B';
export const esDescription =
  'Una abogada de inmigración en Georgia explica la regla de cap-gap bajo 8 CFR 214.2(f)(5)(vi): qué es, la diferencia crucial entre presentar la petición H-1B antes o después de que venza el EAD del OPT (autorización de trabajo vs. solo estatus), los requisitos para beneficiarse del cap-gap, cómo obtener el I-20 de cap-gap de su DSO, por qué los viajes internacionales rompen el cap-gap y qué pasa si la H-1B es denegada. Para estudiantes internacionales y empleadores de Georgia Tech, Emory, UGA y Kennesaw State. Información general, no asesoría legal.';

export function H1bCapGapPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Cada primavera, miles de graduados internacionales que trabajan en el área metropolitana de Atlanta con{' '}
        <Link href="/es/blog/student-visa-f1-opt-stem-georgia">Práctica de Entrenamiento Opcional (OPT) con visa
        F-1</Link> se enfrentan al mismo cálculo aterrador: su petición H-1B fue seleccionada en la lotería y
        comienza el <strong>1 de octubre</strong> — pero su permiso de trabajo del OPT vence en mayo, junio o julio.
        Eso deja una brecha de semanas o meses donde, sobre el papel, ya no están autorizados para trabajar y la H-1B
        aún no ha comenzado. La regla que cierra esa brecha se llama <strong>&ldquo;cap-gap&rdquo;</strong>, y
        entender exactamente cómo funciona puede ser la diferencia entre seguir empleado y verse obligado a dejar de
        trabajar, perder el estatus o incluso salir del país. Esta guía explica la regla de cap-gap para estudiantes
        y empleadores en Georgia.
      </p>

      <h2>El Problema: La H-1B Comienza el 1 de Octubre, el OPT Vence Antes</h2>
      <p>
        El tope de la H-1B está vinculado al año fiscal federal. Las peticiones seleccionadas en la lotería de
        primavera se presentan en abril y, si se aprueban, tienen efecto el <strong>1 de octubre</strong> — el primer
        día del nuevo año fiscal. Pero el OPT post-finalización se otorga por doce meses desde la fecha de fin del
        programa, y la{' '}
        <Link href="/es/blog/stem-opt-extension-24-month-work-authorization-georgia">extensión de STEM OPT de 24
        meses</Link> se calcula a partir de ahí. Para un estudiante que se graduó en diciembre y comenzó un OPT de
        doce meses en, digamos, la primavera siguiente, el OPT puede vencer fácilmente meses antes del 1 de octubre.
        Sin un puente, el estudiante quedaría sin autorización de trabajo válida y sin estatus legal — a pesar de
        tener una H-1B ganadora en mano.
      </p>

      <h2>Qué Hace la Regla de Cap-Gap</h2>
      <p>
        Bajo el <strong>8 CFR 214.2(f)(5)(vi)</strong>, cuando un estudiante F-1 es el beneficiario de una{' '}
        <strong>petición H-1B sujeta al tope presentada oportunamente</strong> que solicita un{' '}
        <strong>cambio de estatus</strong> con fecha de inicio del 1 de octubre, el reglamento{' '}
        <strong>extiende automáticamente</strong> el estatus F-1 del estudiante — y, en muchos casos, su autorización
        de empleo — hasta el <strong>30 de septiembre</strong>. En términos simples: cierra la brecha para que el
        estudiante pueda seguir trabajando justo hasta que la H-1B entre en vigencia el 1 de octubre. No se requiere
        una solicitud separada; la extensión se deriva de la propia petición H-1B.
      </p>
      <p>
        Hay una distinción crucial que confunde a las personas.{' '}
        <strong>Si puede seguir trabajando — o simplemente mantener su estatus — depende de cuándo se presentó la
        petición H-1B:</strong>
      </p>
      <ul>
        <li>
          <strong>Presentada mientras su EAD de OPT/STEM OPT aún era válido:</strong> el cap-gap extiende{' '}
          <strong>tanto</strong> su estatus F-1 como su{' '}
          <strong>autorización de trabajo</strong> hasta el 30 de septiembre. Sigue trabajando.
        </li>
        <li>
          <strong>Presentada después de que venció su EAD, pero durante su período de gracia de 60 días:</strong>{' '}
          el cap-gap extiende <strong>solo su estatus F-1</strong>. Puede permanecer legalmente en los Estados Unidos
          hasta el 30 de septiembre, pero <strong>no puede trabajar</strong> hasta que la H-1B comience el 1 de
          octubre.
        </li>
      </ul>
      <p>
        Por eso el tiempo importa tanto. Un empleador que presenta la H-1B incluso una semana después de que vence el
        permiso del OPT puede costar al empleado todo un verano de salarios — aunque todos estén actuando de buena
        fe. La lección para estudiantes y empleadores en Georgia:{' '}
        <strong>presente la H-1B antes de que venza el EAD del OPT.</strong>
      </p>

      <h2>Los Requisitos que Debe Cumplir</h2>
      <p>
        El cap-gap es automático, pero no es incondicional. Para beneficiarse, todo lo siguiente debe ser cierto:
      </p>
      <ul>
        <li>
          <strong>Fue seleccionado en la lotería y la petición se presentó oportunamente.</strong> La selección en
          la lotería sola no hace nada — la petición debe ser presentada y aceptada. Si no fue seleccionado, no hay
          cap-gap.
        </li>
        <li>
          <strong>La petición solicita un cambio de estatus, no procesamiento consular.</strong> Si su empleador
          eligió notificación consular (para que obtenga el sello de visa H-1B en el extranjero), el cap-gap no
          extiende su autorización de trabajo de la misma manera. Confirme qué opción seleccionó su empleador.
        </li>
        <li>
          <strong>La petición sigue pendiente o es aprobada.</strong> Si es denegada, rechazada o revocada antes del
          1 de octubre, el cap-gap termina.
        </li>
        <li>
          <strong>Mantiene el estatus F-1.</strong> Continúa trabajando bajo los términos existentes de su OPT o
          STEM OPT — lo que significa que el trabajo debe seguir relacionado con su campo de estudio, y los
          estudiantes de STEM OPT deben continuar con las obligaciones del empleador E-Verify y del plan de
          capacitación de su{' '}
          <Link href="/es/blog/stem-opt-extension-24-month-work-authorization-georgia">I-983</Link>.
        </li>
      </ul>

      <h2>Obtenga su I-20 de Cap-Gap de su DSO</h2>
      <p>
        Aunque el cap-gap es automático, debe pedirle al{' '}
        <strong>Funcionario Escolar Designado (DSO)</strong> de su escuela que emita un{' '}
        <strong>Formulario I-20</strong> actualizado que refleje la extensión de cap-gap. Este documento es su prueba
        — para los registros I-9 del empleador, para Recursos Humanos y para sus propios archivos — de que sigue en
        estatus F-1 válido y (cuando aplique) con autorización de trabajo hasta el 30 de septiembre. No asuma que el
        equipo de Recursos Humanos de su empleador entiende el cap-gap; muchos no lo hacen. El I-20 actualizado es la
        forma más clara de documentarlo.
      </p>

      <h2>No Viaje Internacionalmente Durante el Cap-Gap</h2>
      <p>
        Este es el error evitable más grande.{' '}
        <strong>Viajar fuera de los Estados Unidos durante el período de cap-gap generalmente rompe su protección de
        cap-gap.</strong> Una vez que vence su EAD del OPT, no tiene una tarjeta de trabajo válida para reingresar,
        no puede reingresar en F-1 para &ldquo;reanudar&rdquo; el cap-gap, y{' '}
        <strong>no puede entrar con la H-1B antes del 1 de octubre</strong>. El resultado es que puede quedarse
        atrapado en el extranjero, sin poder regresar hasta que tenga un sello de visa H-1B y llegue la fecha de
        inicio del 1 de octubre. Si tiene una emergencia que requiere viajar, hable con un abogado de inmigración y
        su DSO <em>antes</em> de reservar el boleto.
      </p>

      <h2>OPT Regular vs. Cap-Gap del STEM OPT</h2>
      <p>
        Tanto el OPT regular de 12 meses como la extensión de STEM OPT de 24 meses pueden beneficiarse del cap-gap,
        pero los mecanismos difieren. Un estudiante con <strong>OPT post-finalización regular</strong> usa el
        cap-gap puramente como un puente hasta el 1 de octubre. Un estudiante con una{' '}
        <strong>extensión de STEM OPT</strong> generalmente tiene una pista más larga para comenzar, y la extensión
        de cap-gap simplemente lleva esa autorización hasta el inicio de la H-1B si el STEM OPT vencería antes del
        1 de octubre. Un estudiante cuya solicitud de extensión de STEM OPT está en sí misma aún pendiente cuando se
        presenta la H-1B tiene capas adicionales de autorización que rastrear — otra razón para coordinar el
        cronograma con su DSO y asesor legal en lugar de adivinar.
      </p>

      <h2>RFE, Demoras y Denegaciones</h2>
      <p>
        El cap-gap se mantiene mientras la H-1B esté pendiente. Si USCIS emite una{' '}
        <strong>Solicitud de Evidencia (RFE)</strong>, su estatus de cap-gap continúa mientras se adjudica la
        petición — pero la incertidumbre es real, y una respuesta lenta puede llevar la decisión cerca o más allá
        del 1 de octubre. Si la petición es <strong>denegada, rechazada o revocada</strong>, el cap-gap termina. En
        ese momento generalmente cae en el{' '}
        <strong>período de gracia F-1 estándar de 60 días</strong> medido desde la fecha de fin relevante, durante
        el cual debe dejar de trabajar y partir, cambiar a otro estatus o transferirse a un nuevo programa. Dado que
        la desventaja es tan grave, muchos empleadores pagan el{' '}
        <strong>procesamiento premium</strong> para obtener una decisión más rápida y reducir la ventana de
        incertidumbre. Cubrimos el proceso H-1B más amplio en nuestra guía de{' '}
        <Link href="/es/blog/h1b-visa-sponsorship-cap-georgia">patrocinio y tope H-1B</Link>.
      </p>

      <h2>La Ventana de Riesgo en Georgia: Abril a Septiembre</h2>
      <p>
        Para los graduados de <strong>Georgia Tech, Emory, la Universidad de Georgia, Georgia State y Kennesaw
        State</strong> que alimentan el corredor de tecnología, ingeniería y salud de Atlanta, la ventana de peligro
        corre cada año de <strong>abril a septiembre</strong>. Si su OPT o STEM OPT vence en esa ventana y tiene una
        H-1B seleccionada, el cap-gap es lo que lo mantiene empleado — pero solo si su empleador presentó
        correctamente y a tiempo. Los errores más comunes que vemos son: presentar la H-1B después de que ya venció
        el EAD (perdiendo la autorización de trabajo por el verano), elegir el procesamiento consular sin darse
        cuenta de las consecuencias del cap-gap, y viajar al extranjero a mitad del verano y quedarse varado.
      </p>

      <h2>Cómo Bardi Immigration Law Puede Ayudar</h2>
      <p>
        El cap-gap es implacable porque los plazos son fijos y las consecuencias de una presentación tardía recaen
        sobre el empleado, no sobre el empleador. Si es un estudiante F-1 con una H-1B seleccionada y un permiso
        del OPT que vence antes del 1 de octubre — o un empleador que intenta mantener a un empleado clave trabajando
        durante el verano — la abogada <strong>Eszter Bardi</strong> puede revisar su cronograma, confirmar si su
        petición preserva la autorización de trabajo o solo el estatus, y señalar las trampas de viaje y presentación
        antes de que le cuesten.
      </p>
      <p>
        <strong>Programe una consulta hoy.</strong>{' '}
        <Link href="/es/contact">Solicite una consulta en línea</Link>. Hablamos español — atendemos a la comunidad
        hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo proporciona información legal general sobre la regla de
          cap-gap de la H-1B y no constituye asesoría legal. Las ventanas de presentación, tarifas, disponibilidad
          del procesamiento premium, mecánicas de lotería y tiempos de adjudicación cambian con el tiempo y su
          situación es específica a los hechos — confirme los requisitos actuales con USCIS y su DSO, y consulte a
          un abogado de inmigración con licencia para orientación específica a su caso.
        </em>
      </p>
    </div>
  );
}
