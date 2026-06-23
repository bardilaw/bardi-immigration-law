import Link from 'next/link';
// Spanish adaptation of en/tn-visa-canadian-mexican-professionals-georgia.tsx (BAR-777, source BAR-696).
// Natural Spanish, not a literal translation. GA+AL licensed-attorney framing preserved.
// Intro centered on Mexican professionals — Mexico is one of only two USMCA-eligible countries and
// the primary Spanish-speaking TN audience (per BAR-777 notes). Verify before publish — references
// immigration law/procedure (TN status under the USMCA; the professional-occupations list and its
// degree/license/experience rules; the distinct Canadian port-of-entry vs. Mexican consular routes;
// the 3-year admission and indefinite renewals; TD dependent status; the nonimmigrant-intent / no
// dual-intent rule; common denials). The occupation list, credential rules, periods, fees, and forms
// (I-129, DS-160) change periodically and are administered by USCIS, CBP, and the Department of State.
// Confirm current rules against USCIS, CBP, and travel.state.gov before go-live.

export const esTitle = 'Visa TN en Georgia: Estatus USMCA para Profesionales de México y Canadá';
export const esDescription =
  'Una abogada de visas TN en Georgia explica el estatus TN de no inmigrante bajo el T-MEC (USMCA) para profesionales mexicanos y canadienses: quién califica, la lista de ocupaciones y los requisitos de credenciales, el proceso consular para mexicanos frente al proceso en el puerto de entrada para canadienses, la admisión de 3 años y las renovaciones indefinidas, el estatus TD para dependientes (estudiar sí, trabajar no), el límite de la intención de no inmigrante en el camino a la green card y las causas comunes de negación. Con licencia en Georgia y Alabama.';

export function TnVisaUsmcaPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        El área metropolitana de Atlanta funciona gracias al talento profesional. Sus corredores tecnológicos, las sedes
        de empresas Fortune 500, las operaciones de logística y cadena de suministro en torno al aeropuerto
        Hartsfield-Jackson, y un número creciente de compañías mexicanas y canadienses compiten todas por ingenieros,
        contadores, científicos y gerentes. Para los ciudadanos de México &mdash; uno de los dos únicos países elegibles
        bajo el tratado &mdash; una de las vías más eficientes hacia un empleo profesional en Estados Unidos es también
        una de las menos comprendidas: el <strong>estatus TN de no inmigrante</strong>.
      </p>
      <p>
        Ingenieros, contadores, científicos y otros profesionales mexicanos que buscan trabajar en Georgia con frecuencia
        descubren que la visa TN es más rápida y flexible que la H-1B. Creada bajo el TLCAN (NAFTA) y conservada sin
        cambios por el <strong>Tratado entre México, Estados Unidos y Canadá (T-MEC, conocido en inglés como USMCA)</strong>,
        la categoría TN permite que los profesionales mexicanos y canadienses que califican trabajen en Estados Unidos sin
        un tope anual, sin lotería y con renovaciones que pueden continuar de forma indefinida. Eso la convierte en una
        alternativa común a la H-1B. Pero la TN trae reglas que sorprenden a muchos solicitantes &mdash; sobre todo en
        cuanto a la elegibilidad, los dependientes y el camino hacia la green card. Esta guía explica cómo funciona el
        estatus TN para los profesionales que viven y trabajan en Georgia y Alabama.
      </p>

      <h2>Quién Califica para una Visa TN</h2>
      <p>
        El estatus TN está disponible únicamente para <strong>ciudadanos de México y Canadá</strong> &mdash; no para los
        residentes permanentes de esos países. Para calificar, por lo general deben coincidir cuatro elementos:
      </p>
      <ul>
        <li>
          <strong>Usted es ciudadano mexicano o canadiense.</strong> Lo que importa es la ciudadanía, no la residencia.
        </li>
        <li>
          <strong>Su puesto está en la lista de profesiones del T-MEC.</strong> El tratado contiene una lista definida de
          aproximadamente 60 profesiones &mdash; el puesto debe coincidir con una de ellas, y sus funciones reales deben
          encajar.
        </li>
        <li>
          <strong>Usted cumple con las credenciales de esa profesión.</strong> La mayoría exige al menos una licenciatura
          estadounidense o su equivalente extranjero; algunas requieren una licencia o, para unas pocas ocupaciones, cierta
          cantidad de años de experiencia.
        </li>
        <li>
          <strong>Tiene un empleador en EE. UU. y una oferta de trabajo profesional y temporal.</strong> La TN es para un
          empleo previamente concertado con un empleador estadounidense (o radicado en EE. UU.). El trabajo por cuenta
          propia &mdash; trabajar para una empresa de su propiedad &mdash; no está permitido.
        </li>
      </ul>
      <p>
        La lista del T-MEC incluye ocupaciones como contador, ingeniero, científico, analista de sistemas de cómputo,
        consultor de gestión, economista, arquitecto, abogado, enfermero registrado, técnico/tecnólogo científico,
        diseñador gráfico y profesor universitario, entre muchas otras. Cada entrada tiene su propia regla de credenciales.
        Unas pocas aceptan experiencia en lugar de un título (la categoría de consultor de gestión es el ejemplo más
        conocido), pero la mayoría no. Si su cargo es profesional pero no corresponde con claridad a una ocupación de la
        lista, la solicitud queda en riesgo antes incluso de llegar a un oficial.
      </p>

      <h2>El Proceso Mexicano y el Canadiense No Son Iguales</h2>
      <p>
        Aquí es donde los solicitantes con más frecuencia se equivocan en el procedimiento. México y Canadá usan rutas
        distintas.
      </p>
      <p>
        <strong>Los ciudadanos mexicanos deben obtener primero la visa TN.</strong> Un profesional mexicano solicita la
        visa TN en una embajada o consulado de EE. UU. en México &mdash; completa el formulario DS-160, paga la tarifa y
        asiste a una entrevista &mdash; y solo entonces solicita la admisión en un puerto de entrada. Los mexicanos no
        pueden simplemente presentar documentos en la frontera como sí lo hacen los canadienses. Para un profesional que
        se reubica en Georgia, eso significa incorporar el tiempo del trámite consular en la planificación.
      </p>
      <p>
        <strong>Los ciudadanos canadienses están exentos de visa.</strong> Un canadiense puede solicitar la admisión TN
        <em> directamente en un puerto de entrada</em> de EE. UU. &mdash; un cruce fronterizo terrestre o, más relevante
        para los profesionales con destino a Atlanta, una instalación de preinspección de CBP en un aeropuerto canadiense
        importante como Toronto o Montreal. Presenta su carta de oferta de trabajo y sus credenciales, paga la tarifa y un
        oficial de CBP decide en el momento. No hace falta obtener primero una visa de un consulado de EE. UU. (De forma
        alternativa, un empleador puede presentar el Formulario I-129 ante USCIS, lo que resulta útil para un cambio de
        estatus desde dentro de EE. UU., pero la ruta fronteriza es la norma.)
      </p>
      <p>
        En ambos casos, el corazón de la solicitud es el mismo: una <strong>carta de respaldo del empleador</strong>
        detallada que identifique la profesión del T-MEC, describa funciones que de verdad requieran a un profesional,
        indique la duración de la estadía y el salario, y esté respaldada por la prueba de ciudadanía y la prueba de sus
        credenciales que califican.
      </p>

      <h2>Los Puertos de Entrada de Atlanta y los Sectores Profesionales de Georgia</h2>
      <p>
        Para un canadiense que vuela a EE. UU. desde un tercer país, CBP en el <strong>Aeropuerto Internacional
        Hartsfield-Jackson de Atlanta (ATL)</strong> puede adjudicar una solicitud TN a la llegada &mdash; aunque la
        mayoría de los canadienses pasan la preinspección de CBP antes de abordar en Canadá. Los titulares de TN
        mexicanos llegan con la visa ya en mano y son inspeccionados en ATL u otro puerto de entrada.
      </p>
      <p>
        La demanda en Georgia es real. Los empleadores tecnológicos y las startups de Atlanta necesitan analistas de
        sistemas de cómputo e ingenieros; la economía de logística y cadena de suministro en torno al aeropuerto más
        transitado del mundo atrae a consultores de gestión, economistas e ingenieros; y los sectores de salud,
        universidades y empresas de la región contratan científicos, contadores y enfermeros registrados. Muchos de estos
        puestos corresponden directamente a ocupaciones del T-MEC, razón por la cual la TN es una herramienta cada vez más
        común para los empleadores de Georgia y Alabama que reclutan en México y Canadá.
      </p>

      <h2>Duración y Renovaciones Indefinidas</h2>
      <p>
        Por lo general, a un profesional TN se le admite por <strong>hasta tres años</strong> a la vez. El estatus es
        <strong> renovable de forma indefinida</strong> en incrementos adicionales &mdash; no existe un máximo legal, ni
        un tope de seis años como el de la H-1B. Las renovaciones pueden tramitarse en un puerto de entrada (para los
        canadienses) o presentando el Formulario I-129 ante USCIS para una extensión desde dentro de EE. UU.
      </p>
      <p>
        Esa renovabilidad sin límite es la mayor ventaja práctica de la TN &mdash; y también su mayor trampa. Como cada
        renovación es una nueva determinación de que usted sigue calificando <em>y</em> sigue teniendo la intención de una
        estadía temporal, un profesional TN nunca está tan asentado como sugieren las renovaciones. El estatus que puede
        durar una década también puede negarse en la próxima entrada si los hechos han cambiado.
      </p>

      <h2>El Estatus TD para Su Familia</h2>
      <p>
        El cónyuge y los hijos solteros menores de 21 años de un titular de TN pueden obtener el <strong>estatus TD
        (Dependiente de Comercio)</strong>. Los dependientes canadienses están exentos de visa y solicitan en el puerto de
        entrada; los dependientes mexicanos solicitan las visas TD en un consulado de EE. UU. La limitación clave: los
        <strong> dependientes con TD no pueden trabajar en Estados Unidos</strong>. Sin embargo, sí pueden
        <strong> estudiar</strong> &mdash; los hijos pueden inscribirse en la escuela y los cónyuges pueden asistir a la
        universidad. Para un hogar de dos carreras, la regla de no trabajar del TD suele ser el factor decisivo a la hora
        de determinar si la TN es el vehículo correcto o si la familia debería buscar un estatus que le permita trabajar
        al cónyuge.
      </p>

      <h2>La TN y la Green Card: El Problema de la Intención</h2>
      <p>
        Aquí está la regla que más sorprende a la gente. Las visas H-1B y L-1 permiten la <strong>doble intención</strong>
        &mdash; usted puede tener la visa y buscar una green card al mismo tiempo sin que eso se use en su contra. (Cubrimos
        esas categorías en nuestra guía sobre{' '}
        <Link href="/es/blog/employment-based-immigration-georgia">green cards basadas en el empleo y visas de trabajo en Georgia</Link>.)
        <strong> La TN no lo permite.</strong> La TN es una categoría de no inmigrante que exige la <strong>intención de no
        inmigrante</strong>: usted debe tener la intención de una estadía temporal y de partir cuando termine el trabajo.
      </p>
      <p>
        Eso no significa que un titular de TN nunca pueda obtener una green card &mdash; muchos lo logran, mediante el
        patrocinio basado en el empleo o en la familia. Pero buscar abiertamente la residencia permanente mientras se está
        en TN puede crear problemas reales. La evidencia de intención de inmigrante &mdash; un ajuste de estatus pendiente,
        una petición de inmigrante aprobada, o incluso declaraciones de que planea quedarse de forma permanente &mdash;
        puede llevar a CBP o a USCIS a negar una renovación de TN o una nueva entrada. La estrategia común y prudente es
        <strong> pasar a un estatus de doble intención como la H-1B o la L-1</strong> antes de que el proceso de la green
        card avance a la etapa que señala una intención permanente. Aquí el momento y la secuencia lo son todo, y son
        exactamente el tipo de decisión que conviene consultar con un abogado antes de presentar cualquier cosa.
      </p>

      <h2>Causas Comunes de Negación de la TN</h2>
      <p>
        La mayoría de los rechazos de TN se reducen a un puñado de problemas recurrentes:
      </p>
      <ul>
        <li>
          <strong>El puesto no está en la lista del T-MEC</strong>, o las funciones reales no coinciden con la profesión
          de la lista aunque el cargo suene profesional.
        </li>
        <li>
          <strong>Las credenciales no encajan.</strong> Un título en el campo equivocado, un título extranjero sin una
          evaluación de equivalencia adecuada, o una licencia faltante para una profesión que la exige.
        </li>
        <li>
          <strong>Una carta del empleador débil.</strong> Funciones vagas, ningún vínculo claro entre el puesto y una
          ocupación del T-MEC, o un cargo que parece no requerir en realidad a un profesional.
        </li>
        <li>
          <strong>Trabajo por cuenta propia o propiedad de la empresa.</strong> Trabajar para su propia compañía, o un
          arreglo que lo parezca, por lo general no está permitido en la TN.
        </li>
        <li>
          <strong>Aparente intención de inmigrante.</strong> Las señales de que la estadía es en realidad permanente
          &mdash; incluida una green card pendiente &mdash; socavan la intención de no inmigrante exigida.
        </li>
        <li>
          <strong>Un puesto que parece permanente o por debajo del nivel profesional.</strong> El puesto debe ser temporal
          por naturaleza y genuinamente profesional.
        </li>
      </ul>
      <p>
        Como la solicitud de un canadiense puede decidirse en minutos en un puerto de entrada, un expediente débil o mal
        ajustado a menudo fracasa en el acto &mdash; con pocas posibilidades de corregirlo en ese momento. Lo que sostiene
        una solicitud TN es la preparación, no la improvisación.
      </p>

      <h2>Hable con Eszter Bardi sobre Su Visa TN</h2>
      <p>
        Si usted es un profesional mexicano o canadiense con una oferta de trabajo en Georgia o Alabama &mdash; o un
        empleador que intenta traer a uno &mdash; la abogada <strong>Eszter Bardi</strong> puede ayudarle a confirmar la
        ocupación correcta del T-MEC, a redactar una carta del empleador que resista el escrutinio, a elegir entre las
        rutas fronteriza, consular y de USCIS, y a planificar en torno a las reglas de intención si una green card pudiera
        estar en su futuro. Bardi Immigration Law ofrece acceso directo a la abogada, no a un especialista de admisión.
      </p>
      <p>
        <strong>Reserve una consulta hoy.</strong> Revisaremos el empleo, las credenciales y los plazos, y trazaremos un
        camino realista &mdash; incluido cuándo tiene sentido pasar de la TN a un estatus de doble intención. Conozca más
        sobre nuestro trabajo de <Link href="/es/services/benefits-based-immigration">inmigración basada en beneficios</Link> o{' '}
        <Link href="/es/contact">solicite una consulta en línea</Link>. Hablamos español &mdash; atendemos a la comunidad
        hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo ofrece información legal general y no constituye asesoría
          legal. El derecho migratorio es complejo, depende de los hechos de cada caso y cambia con frecuencia. La lista de
          ocupaciones profesionales del T-MEC, las reglas de credenciales y licencias, los períodos de admisión, las rutas
          de trámite, los formularios y las tarifas cambian periódicamente y varían según el caso. Confirme los requisitos
          actuales con USCIS, la Oficina de Aduanas y Protección Fronteriza (CBP) y el Departamento de Estado de EE. UU.
          (travel.state.gov), y consulte con un abogado de inmigración con licencia para obtener orientación específica a su
          situación.
        </em>
      </p>
    </div>
  );
}
