import Link from 'next/link';
// Spanish adaptation of en/student-visa-f1-opt-stem-georgia.tsx (BAR-755, source BAR-663).
// Natural Spanish, not a literal translation. GA+AL licensed-attorney framing preserved.
// Verify before publish — references immigration law/procedure (F-1 status, the I-20 / SEVIS
// framework, OPT / EAD timelines and the 90-day unemployment limit, the 24-month STEM OPT
// extension and its E-Verify / Form I-983 requirements, cap-gap protection, reinstatement)
// that change periodically and are set by USCIS, SEVP, and the school's DSO. Confirm against
// USCIS and Study in the States (ICE/SEVP) and have an attorney review before go-live.

export const esTitle = 'Visa de Estudiante, OPT y la Extensión STEM OPT en Georgia';
export const esDescription =
  'Una abogada de inmigración en Georgia explica el estatus F-1: cómo funcionan el I-20 y SEVIS, cómo el OPT y la extensión STEM OPT le permiten trabajar, la protección cap-gap mientras su H-1B está pendiente, los errores que sacan a los estudiantes de estatus y cómo recuperarlo. Para estudiantes internacionales en Georgia y Alabama.';

export function StudentVisaF1OptPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Georgia es un imán para estudiantes internacionales. Georgia Tech, Emory, la Universidad de Georgia y Georgia
        State University reciben cada año a miles de estudiantes de todo el mundo, y los empleadores de tecnología, salud
        e investigación del área metropolitana de Atlanta quieren retener ese talento después de la graduación. El puente
        entre un título y una carrera en Estados Unidos pasa por una de las áreas más reguladas del derecho migratorio:
        el estatus de estudiante F-1 y la autorización de trabajo que se deriva de él.
      </p>
      <p>
        Las reglas premian a los estudiantes que planifican con anticipación y castigan en silencio a quienes pierden un
        plazo o asumen que su escuela detectará cada problema. Esta guía explica cómo funciona el estatus F-1, cómo el
        Optional Practical Training (OPT) y la extensión STEM OPT le permiten trabajar, cómo la protección cap-gap lo
        mantiene autorizado mientras un H-1B está pendiente, y los errores comunes que sacan a los estudiantes de estatus
        &mdash; para estudiantes internacionales en universidades de Georgia y Alabama.
      </p>

      <h2>Estatus F-1: Mucho Más que un Sello en el Pasaporte</h2>
      <p>
        La <em>visa</em> F-1 en su pasaporte es solo el documento de viaje que le permitió entrar al país. El{' '}
        <strong>estatus</strong> F-1 es el conjunto de reglas que debe cumplir para permanecer aquí legalmente, y se
        rastrea a través de su <strong>Formulario I-20</strong> y la base de datos del gobierno, <strong>SEVIS</strong>.
        Mantener el estatus es su responsabilidad, no la de su escuela. Para mantener el estatus F-1 en regla, por lo
        general el estudiante debe:
      </p>
      <ul>
        <li>
          <strong>Mantener un curso completo de estudios (full course of study)</strong> en cada periodo académico, y
          obtener la aprobación de un <strong>Funcionario Escolar Designado (DSO)</strong> <em>antes</em> de bajar de la
          carga académica de tiempo completo;
        </li>
        <li>Mantener el I-20 vigente y solicitar prórrogas antes de la fecha de finalización del programa si necesita más tiempo;</li>
        <li>
          Limitar el empleo a lo que esté autorizado &mdash; por lo general, trabajo dentro del campus dentro de los
          límites de horas, o trabajo fuera del campus solo con una autorización específica como CPT u OPT;
        </li>
        <li>Reportar los cambios de domicilio y otras actualizaciones para que SEVIS se mantenga preciso;</li>
        <li>Mantener un pasaporte vigente y seguir las reglas sobre viajes y reingreso.</li>
      </ul>
      <p>
        Los pequeños descuidos aquí tienen consecuencias desproporcionadas. Trabajar sin autorización o bajar de tiempo
        completo sin aprobación puede terminar su estatus &mdash; y una vez que se pierde el estatus, el camino de
        regreso es mucho más difícil que la regla que se incumplió.
      </p>

      <h2>Optional Practical Training (OPT): Trabajar en su Campo</h2>
      <p>
        El <strong>Optional Practical Training</strong> es una autorización de trabajo temporal que permite a un
        estudiante F-1 trabajar en un empleo <strong>directamente relacionado con su carrera</strong>. La mayoría de los
        estudiantes usan el <strong>OPT posterior a la finalización (post-completion OPT)</strong> &mdash; hasta{' '}
        <strong>12 meses</strong> de autorización de trabajo a tiempo completo después de terminar un título. Las
        características clave que debe entender:
      </p>
      <ul>
        <li>
          <strong>Es flexible en cuanto al empleador, pero específico al campo.</strong> A diferencia de muchas visas de
          trabajo, el OPT no está atado a un solo empleador patrocinador, pero el trabajo debe relacionarse genuinamente
          con su campo de estudio.
        </li>
        <li>
          <strong>Se solicita a través de su DSO y USCIS.</strong> Su DSO recomienda el OPT en SEVIS, y usted presenta la
          solicitud ante USCIS para obtener un <strong>Documento de Autorización de Empleo (EAD)</strong>. No puede
          empezar a trabajar hasta que el EAD esté aprobado y llegue su fecha de inicio.
        </li>
        <li>
          <strong>Los tiempos no perdonan.</strong> Hay una ventana definida para solicitar alrededor de la fecha de
          finalización de su programa, y el procesamiento de USCIS toma tiempo. Presentar tarde &mdash; o presentar en la
          ventana equivocada &mdash; puede costarle meses de elegibilidad para trabajar, o la oportunidad por completo.
        </li>
        <li>
          <strong>El desempleo tiene un límite.</strong> Durante el OPT posterior a la finalización solo se le permite un
          número limitado de días de desempleo (por lo general 90). Si excede el límite, su estatus puede terminar, así
          que llevar la cuenta de sus días de búsqueda de empleo importa.
        </li>
      </ul>
      <p>
        Como la ventana de solicitud, la fecha de inicio del EAD y el reloj del desempleo corren con plazos estrictos, el
        OPT es un punto donde un pequeño error de planificación se convierte en un gran problema. Trazar las fechas antes
        de presentar vale mucho más que corregir un plazo perdido después.
      </p>

      <h2>Extensión STEM OPT: Otros 24 Meses</h2>
      <p>
        Los estudiantes que obtienen un título que califica en un campo de{' '}
        <strong>ciencia, tecnología, ingeniería o matemáticas (STEM)</strong> &mdash; el corazón de lo que producen
        programas como los de Georgia Tech &mdash; pueden solicitar una <strong>extensión de 24 meses</strong> de su OPT
        posterior a la finalización. Combinada con los 12 meses iniciales, eso suma hasta tres años de autorización de
        trabajo, que a menudo abarca más de un ciclo de la lotería del H-1B. La extensión STEM trae requisitos
        adicionales:
      </p>
      <ul>
        <li>
          <strong>El empleador debe estar inscrito en E-Verify.</strong> La extensión STEM solo está disponible cuando
          usted trabaja para un empleador registrado en el programa federal <strong>E-Verify</strong> &mdash; un filtro
          importante al elegir dónde trabajar.
        </li>
        <li>
          <strong>Un plan de capacitación formal (Formulario I-983).</strong> Usted y su empleador completan un plan de
          capacitación que describe los objetivos de aprendizaje y cómo su trabajo se relaciona con su título. Es un
          documento real con obligaciones reales, incluidas evaluaciones periódicas.
        </li>
        <li>
          <strong>Deberes de reporte.</strong> El STEM OPT conlleva requisitos de reporte adicionales ante su DSO, y no
          cumplirlos puede poner en peligro su autorización.
        </li>
        <li>
          <strong>Solicite antes de que venza su OPT inicial.</strong> La extensión debe presentarse en la ventana
          correcta mientras su OPT actual sigue vigente &mdash; otro plazo que no perdona la tardanza.
        </li>
      </ul>

      <h2>Cap-Gap: Mantenerse Autorizado Mientras su H-1B Está Pendiente</h2>
      <p>
        Para muchos estudiantes, el OPT es un escalón hacia una visa de trabajo <strong>H-1B</strong>. El problema es el
        momento: el H-1B tiene un tope anual y una lotería, e incluso una petición seleccionada por lo general no puede
        entrar en vigor hasta el inicio del próximo año fiscal del gobierno. Eso puede dejar un vacío entre el momento en
        que termina su OPT y el momento en que comienza su H-1B.
      </p>
      <p>
        El alivio <strong>cap-gap</strong> está diseñado para cubrir ese vacío. Cuando un empleador presenta a tiempo una
        petición H-1B sujeta al tope con una solicitud de cambio de estatus, y usted está en un periodo válido de F-1/OPT,
        su estatus F-1 y (en muchos casos) su autorización de trabajo pueden <strong>extenderse automáticamente</strong>{' '}
        hasta la fecha de inicio del H-1B. El cap-gap es poderoso pero condicional &mdash; depende del momento de la
        presentación del H-1B, del tipo de solicitud y de que usted mantenga su estatus durante todo el proceso. Como los
        detalles deciden si puede seguir trabajando o debe detenerse, este es un momento para confirmar su situación
        específica en lugar de asumir. Cubrimos el lado del H-1B en nuestra guía sobre{' '}
        <Link href="/es/blog/employment-based-immigration-georgia">green cards y visas de trabajo basadas en el empleo en Georgia</Link>.
      </p>

      <h2>Infracciones Comunes del F-1 &mdash; y Cómo se Resuelven</h2>
      <p>
        La mayoría de los problemas de estatus no son dramáticos; son errores silenciosos. Los que vemos con más
        frecuencia incluyen:
      </p>
      <ul>
        <li>
          <strong>Trabajar sin autorización</strong> &mdash; empezar un empleo antes de que el EAD sea válido, aceptar
          trabajo fuera del campus sin CPT/OPT, o exceder los límites de horas de trabajo dentro del campus;
        </li>
        <li>
          <strong>Bajar de un curso completo de estudios</strong> sin la aprobación previa del DSO;
        </li>
        <li>
          <strong>Exceder el límite de desempleo del OPT</strong> mientras se busca empleo;
        </li>
        <li>
          <strong>Dejar pasar la fecha del I-20 o de finalización del programa</strong> sin una prórroga oportuna;
        </li>
        <li>
          <strong>No reportar</strong> las actualizaciones requeridas, especialmente durante el STEM OPT.
        </li>
      </ul>
      <p>
        Cuando se pierde el estatus, por lo general existen dos caminos: solicitar la{' '}
        <strong>reinstauración (reinstatement)</strong> al estatus F-1, o salir del país y reingresar con un nuevo I-20.
        Ambos tienen requisitos, riesgos y consecuencias para futuras visas y para cualquier acumulación de presencia
        ilegal. Cuál opción conviene &mdash; y si hay que actuar rápido &mdash; es una decisión específica a los hechos
        que debe tomarse con un abogado, no adivinarse bajo la presión de un plazo.
      </p>

      <h2>Cuándo Hablar con un Abogado de Inmigración</h2>
      <p>
        Muchos estudiantes completan el F-1 y el OPT solo con la ayuda de la oficina de estudiantes internacionales de su
        escuela. Pero hay momentos en que la asesoría legal independiente protege su futuro:
      </p>
      <ul>
        <li>Antes de un cambio de empleo, una pausa en el trabajo o cualquier viaje durante el OPT o el STEM OPT;</li>
        <li>Cuando es posible que haya caído fuera de estatus, o teme que pueda suceder;</li>
        <li>Cuando está sopesando la reinstauración frente al reingreso;</li>
        <li>Cuando hay un H-1B, el cap-gap o una estrategia de green card a más largo plazo sobre la mesa;</li>
        <li>Si una solicitud anterior fue negada, o USCIS emitió una solicitud de evidencia (RFE).</li>
      </ul>
      <p>
        Un DSO asesora sobre las reglas de la escuela y de SEVIS; un abogado de inmigración asesora sobre{' '}
        <em>sus</em> opciones legales y riesgos, incluido cómo la decisión de hoy afecta su green card de mañana. Los dos
        roles se complementan.
      </p>

      <h2>Hable con la Abogada Eszter Bardi Sobre su Camino con la Visa de Estudiante</h2>
      <p>
        Si usted es un estudiante internacional en Georgia o Alabama navegando el estatus F-1, planeando su OPT o
        extensión STEM OPT, o tratando de pasar del estatus de estudiante hacia una visa de trabajo o una green card, la
        abogada <strong>Eszter Bardi</strong> puede ayudarle a trazar el camino y evitar los plazos que descarrilan
        carreras. Bardi Immigration Law trabaja con estudiantes y graduados en todo Georgia y Alabama &mdash; con acceso
        directo a la abogada, no a un especialista de admisión.
      </p>
      <p>
        <strong>Reserve una consulta hoy.</strong> Revisaremos en qué punto de su programa se encuentra, trazaremos un
        cronograma realista para el OPT y más allá, e identificaremos las decisiones que lo mantienen en estatus. Conozca
        más sobre nuestro trabajo en{' '}
        <Link href="/es/services/benefits-based-immigration">inmigración basada en beneficios</Link> o{' '}
        <Link href="/es/contact">solicite una consulta en línea</Link>. Hablamos español &mdash; atendemos a la comunidad
        hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo ofrece información legal general y no constituye asesoría
          legal. El derecho migratorio es complejo, específico a los hechos y cambia con frecuencia. Las reglas de
          estatus, los límites de tiempo, los días permitidos de desempleo, la extensión STEM, la mecánica del cap-gap,
          los formularios, las tarifas y los tiempos de procesamiento cambian periódicamente y varían según el caso.
          Confirme los requisitos actuales en los sitios de USCIS y Study in the States (ICE/SEVP), consulte al
          Funcionario Escolar Designado de su escuela, y hable con un abogado de inmigración con licencia para obtener
          orientación específica a su situación.
        </em>
      </p>
    </div>
  );
}
