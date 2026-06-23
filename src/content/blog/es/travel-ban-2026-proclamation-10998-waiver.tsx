/* Traducción al español de /blog/travel-ban-2026-proclamation-10998-waiver (BAR-756, fuente BAR-699).
   Verificar antes de publicar — trata una acción migratoria activamente litigada (Proclamación Presidencial 10998,
   "Restricting and Limiting the Entry of Foreign Nationals to Protect the Security of the United States", firmada el
   16 de diciembre de 2025, vigente desde las 12:01 a.m. EST del 1 de enero de 2026). Las listas de países, exenciones,
   retenciones de USCIS y cualquier modificación judicial cambian con frecuencia. Mantener los 39 países exactamente
   como en la fuente en inglés (no agregar ni quitar). India y Etiopía NO están en la lista. Confirmar la lista vigente
   y el estado del litigio en travel.state.gov, el Federal Register y USCIS antes de publicar. */
import Link from 'next/link';

export function TravelBan2026PostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        El 16 de diciembre de 2025, el Presidente firmó la <strong>Proclamación Presidencial 10998</strong> y, el{' '}
        <strong>1 de enero de 2026</strong>, entró en vigor &mdash; ampliando drásticamente las restricciones de viaje que
        existían desde junio de 2025. La prohibición anterior cubría 19 países. La nueva alcanza a <strong>39 países</strong>,
        además de los titulares de documentos de viaje de la Autoridad Palestina, y elimina varias exenciones en las que las
        familias confiaban. Para el área metropolitana de Atlanta &mdash; hogar de algunas de las comunidades nigeriana,
        haitiana, de África Occidental, de África Oriental y del Medio Oriente más grandes del sureste &mdash; el cambio no es
        abstracto. Puede significar un padre o una madre varados en el extranjero, una petición aprobada congelada en el
        consulado, o una reunión largamente planeada repentinamente en pausa.
      </p>
      <p>
        Esta guía explica qué hace realmente la Proclamación 10998, qué países y categorías de visa se ven afectados, quién está
        exento, cómo funciona el estrecho proceso de exención (waiver) y qué debe hacer <em>ahora</em> una familia de Georgia o
        Alabama si un familiar es de un país afectado. La política migratoria en esta área se mueve rápido y está siendo
        impugnada en los tribunales, así que trate esto como un punto de partida &mdash; no como un sustituto de asesoría sobre
        su caso específico.
      </p>

      <h2>¿Qué Es la Proclamación 10998?</h2>
      <p>
        La Proclamación 10998 es una orden presidencial que <strong>suspende o limita la entrada</strong> de nacionales de
        países designados que se encuentran fuera de Estados Unidos y que no poseen ya una visa estadounidense válida. Se basa en
        la proclamación de junio de 2025 y divide a los países afectados en dos niveles: una lista de{' '}
        <strong>suspensión total</strong> y una lista de <strong>suspensión parcial</strong>.
      </p>
      <p>
        <strong>Suspensión total (19 países más los documentos de viaje de la Autoridad Palestina):</strong> Afganistán, Burkina
        Faso, Birmania (Myanmar), Chad, República del Congo, Guinea Ecuatorial, Eritrea, Haití, Irán, Laos, Libia, Malí, Níger,
        Sierra Leona, Somalia, Sudán del Sur, Sudán, Siria y Yemen. Para estos países, la entrada está suspendida tanto para{' '}
        <strong>inmigrantes como para no inmigrantes</strong> en prácticamente todas las categorías de visa.
      </p>
      <p>
        <strong>Suspensión parcial (20 países):</strong> Angola, Antigua y Barbuda, Benín, Burundi, Costa de Marfil, Cuba,
        Dominica, Gabón, Gambia, Malaui, Mauritania, Nigeria, Senegal, Tanzania, Togo, Tonga, Turkmenistán, Venezuela, Zambia y
        Zimbabue. Para estos países, la orden suspende la entrada de inmigrantes y de no inmigrantes con visas{' '}
        <strong>B-1/B-2</strong> (negocios y turismo), <strong>F</strong> y <strong>M</strong> (estudiantes) y{' '}
        <strong>J</strong> (visitante de intercambio), y ordena a los oficiales consulares acortar la validez de otras visas de
        no inmigrante cuando puedan.
      </p>
      <p>
        Como esta lista ya cambió una vez y es objeto de litigio activo, el paso más importante antes de actuar es{' '}
        <strong>confirmar que un país sigue en la lista, y en qué nivel</strong>, en el momento en que esté lidiando con el caso.
      </p>

      <h2>Inmigrante vs. No Inmigrante: Qué Visas Están Restringidas</h2>
      <p>
        La distinción importa. Las <strong>visas de inmigrante</strong> &mdash; el camino a la green card a través de la familia o
        el empleo &mdash; están suspendidas para los nacionales de <em>todos</em> los países de la lista, tanto de suspensión
        total como parcial. Eso incluye categorías de patrocinio familiar que antes estaban protegidas.
      </p>
      <p>
        Las <strong>visas de no inmigrante (temporales)</strong> se tratan de forma distinta según el nivel. Para los países de
        suspensión total, las categorías temporales están ampliamente suspendidas. Para los países de suspensión parcial, la
        orden apunta a las visas de visitante, estudiante e intercambio, dejando espacio para algunas categorías de empleo y
        otras &mdash; aunque se instruye a los oficiales a limitar la validez. Si está considerando una visita B-2, una admisión
        F-1 o un programa J-1 para un familiar de un país de suspensión parcial, asuma que está afectado hasta que un abogado o
        el consulado confirmen lo contrario.
      </p>

      <h2>Quién Está Exento</h2>
      <p>
        La Proclamación 10998 no alcanza a todas las personas vinculadas a un país afectado. Las{' '}
        <strong>exenciones</strong> clave incluyen:
      </p>
      <ul>
        <li><strong>Residentes permanentes legales (titulares de green card).</strong> La prohibición no le quita a un residente permanente el derecho a regresar.</li>
        <li><strong>Cualquier persona físicamente presente en Estados Unidos</strong> el 1 de enero de 2026.</li>
        <li><strong>Personas que ya tenían una visa estadounidense válida</strong> emitida antes de la fecha de vigencia &mdash; una visa estampada antes del 1 de enero de 2026 no queda revocada por la proclamación.</li>
        <li><strong>Personas con doble nacionalidad</strong> que viajan con un pasaporte de un país que <em>no</em> está en la lista.</li>
        <li><strong>Viajes diplomáticos y relacionados</strong> con visas A, C, G y de la OTAN.</li>
        <li><strong>Ciertos atletas y miembros de equipos</strong> para eventos importantes como la Copa del Mundo y los Juegos Olímpicos.</li>
        <li><strong>Titulares de Visas Especiales de Inmigrante (SIV)</strong> que trabajaron para el gobierno de Estados Unidos, y ciertas <strong>minorías étnicas y religiosas de Irán</strong>.</li>
        <li><strong>Asilados y refugiados ya admitidos</strong> en Estados Unidos; las protecciones existentes no son el objetivo de esta orden.</li>
      </ul>
      <p>
        Igual de importante es lo que la nueva orden <strong>eliminó</strong>. En comparación con la prohibición de junio de
        2025, la Proclamación 10998 <strong>eliminó las exenciones</strong> para las visas de inmigrante de familiares
        inmediatos (las categorías de cónyuge IR-1/CR-1, de hijo IR-2/CR-2 y de padre o madre IR-5), para las adopciones
        internacionales (IR-3/IR-4 e IH-3/IH-4) y para las Visas Especiales de Inmigrante de Afganistán. Las familias que
        suponían que el cónyuge o el padre de un ciudadano estadounidense pasaría sin problema no deben confiar en las reglas
        antiguas. Esta es una de las partes más trascendentales y menos comprendidas del cambio.
      </p>

      <h2>El Proceso de Exención (Waiver): Quién Califica y Qué Esperar</h2>
      <p>
        La proclamación permite <strong>excepciones caso por caso</strong> cuando se juzga que la entrada sirve al interés
        nacional de Estados Unidos. Estas se deciden a discreción del <strong>Secretario de Estado</strong>, el{' '}
        <strong>Secretario de Seguridad Nacional</strong> o el <strong>Fiscal General</strong> (o sus designados) &mdash; no por
        la propia solicitud del aplicante como un derecho.
      </p>
      <p>
        Sea honesto con sus expectativas: el gobierno ha señalado que se espera que estas excepciones sean{' '}
        <strong>extremadamente raras</strong>, y no existe <strong>ningún formulario de solicitud separado</strong> ni{' '}
        <strong>ningún plazo publicado</strong>. En la práctica, el aplicante plantea los hechos relevantes &mdash; urgencia
        humanitaria, un interés convincente de Estados Unidos, vínculos de larga data &mdash; durante la entrevista consular, y
        el oficial consular remite el caso si parece justificar una excepción. No hay una "vía de exención" pagada con un
        estándar de servicio con el que pueda contar. Esa incertidumbre es exactamente la razón por la que la documentación y la
        presentación importan: un expediente bien armado, preparado antes de la entrevista, es la única palanca real que tiene un
        aplicante. Esto es distinto de una exención prevista por la ley, como las{' '}
        <Link href="/es/services/waivers">exenciones por presencia ilegal e inadmisibilidad</Link> que manejamos en otros casos,
        y las dos no deben confundirse.
      </p>

      <h2>Impacto en Casos Pendientes de I-130, I-485 y Procesamiento Consular</h2>
      <p>
        Si ya tiene una petición en trámite, las consecuencias prácticas dependen de <em>dónde</em> se encuentra el caso.
      </p>
      <ul>
        <li>
          <strong>Peticiones I-130 / de inmigrante pendientes.</strong> Una I-130 aprobada o pendiente establece la relación,
          pero por sí sola no supera la suspensión de entrada en la etapa de la visa de inmigrante. Los informes indican que
          USCIS colocó <strong>retenciones sobre ciertas solicitudes de beneficios</strong> presentadas por nacionales de países
          afectados &mdash; de modo que incluso las aprobaciones pueden estancarse.
        </li>
        <li>
          <strong>Procesamiento consular en el extranjero.</strong> Aquí es donde la prohibición golpea más fuerte. Un familiar
          que espera la entrevista de visa de inmigrante en un consulado de Estados Unidos en un país afectado puede encontrar la
          visa suspendida incluso después de que la petición esté aprobada y el caso esté documentalmente completo. (Nuestra
          guía sobre el{' '}
          <Link href="/blog/consular-processing-immigrant-visa-georgia">procesamiento consular y la visa de inmigrante</Link>{' '}
          explica cómo funciona normalmente esa etapa.)
        </li>
        <li>
          <strong>Ajuste de estatus (I-485) dentro de EE. UU.</strong> Alguien que ya está en Estados Unidos y es elegible para
          ajustar su estatus generalmente está en una posición más fuerte que quien espera en el extranjero, porque la
          prohibición apunta a la <em>entrada</em> desde afuera. Pero pueden surgir problemas específicos del caso &mdash;
          incluidas las retenciones de USCIS &mdash;, así que no asuma que no está afectado.
        </li>
      </ul>

      <h2>Las Comunidades Afectadas de Atlanta</h2>
      <p>
        El área metropolitana de Atlanta es una de las regiones más conectadas internacionalmente del sur, y varias de sus
        comunidades inmigrantes más grandes están directamente en la lista. La comunidad <strong>nigeriana</strong> &mdash; entre
        las más grandes del país, concentrada en DeKalb, Gwinnett y el sur del área metropolitana &mdash; enfrenta suspensión
        parcial. Las familias <strong>haitianas</strong> del área metropolitana enfrentan suspensión total, al igual que quienes
        tienen raíces en <strong>Sierra Leona</strong> y otras naciones de África Occidental como{' '}
        <strong>Senegal, Gambia, Togo, Benín y Costa de Marfil</strong> (parcial). Las comunidades de África Oriental ligadas a{' '}
        <strong>Somalia, Eritrea, Sudán y Sudán del Sur</strong> caen bajo suspensión total, y las familias del Medio Oriente y
        del norte de África conectadas con <strong>Irán, Siria, Yemen y Libia</strong> también están totalmente suspendidas. Los
        nacionales <strong>venezolanos</strong> y <strong>cubanos</strong> &mdash; ambas comunidades en crecimiento en la región
        &mdash; enfrentan suspensión parcial.
      </p>
      <p>
        Cabe destacar que algunos países con grandes poblaciones en el área de Atlanta &mdash; entre ellos India y Etiopía
        &mdash; <strong>no</strong> están en la lista de la Proclamación 10998. Si no está seguro de dónde se ubica su país de
        origen, eso es lo primero que debe verificar, porque la respuesta lo cambia todo sobre cómo debe planificar sus viajes y
        sus trámites.
      </p>

      <h2>Qué Hacer Ahora Si un Familiar Es de un País Afectado</h2>
      <ul>
        <li><strong>No viaje basándose en suposiciones.</strong> Un familiar en el extranjero sin una visa válida emitida antes del 1 de enero de 2026 no debe reservar un viaje ni asistir a una entrevista sin verificar primero el estado actual.</li>
        <li><strong>Proteja a quien ya está aquí.</strong> Si su familiar está físicamente presente en Estados Unidos, analice cuidadosamente si puede buscar alivio desde dentro del país &mdash; incluida la <Link href="/es/services/family-based-immigration">inmigración basada en la familia</Link> y el ajuste de estatus &mdash; en lugar de salir y quedar atrapado afuera.</li>
        <li><strong>Reúna sus documentos.</strong> Las aprobaciones de peticiones, la prueba de la relación, la evidencia de vínculos con EE. UU. y cualquier factor humanitario deben organizarse ahora, por si acaso es siquiera posible una excepción por interés nacional.</li>
        <li><strong>Confirme la lista vigente y cualquier orden judicial.</strong> Esta proclamación está siendo litigada; un tribunal podría limitar o pausar partes de ella. La regla de hoy puede no ser la del mes que viene.</li>
        <li><strong>Obtenga una lectura específica de su caso antes de actuar.</strong> El costo de un paso en falso &mdash; una entrada denegada, un familiar varado, una solicitud abandonada &mdash; es mucho mayor que el costo de una consulta.</li>
      </ul>

      <h2>Hable con Eszter Bardi Antes de que Venza un Plazo</h2>
      <p>
        Los casos de prohibición de viaje recompensan a las familias que actúan temprano y con cuidado, y castigan a quienes
        adivinan. La abogada <strong>Eszter Bardi</strong> puede confirmar exactamente cómo se aplica la Proclamación 10998 a su
        familia, identificar cualquier exención o argumento de interés nacional que valga la pena perseguir, y trazar la
        secuencia más segura para un caso pendiente de I-130, I-485 o procesamiento consular &mdash; incluido si un familiar está
        mejor quedándose donde está o avanzando. Bardi Immigration Law ofrece acceso directo a la abogada, no a un especialista
        de admisión.
      </p>
      <p>
        <strong>Programe una consulta hoy.</strong> Atendemos a familias inmigrantes en todo Georgia y Alabama. Conozca más sobre
        nuestro trabajo de <Link href="/es/services/family-based-immigration">inmigración basada en la familia</Link> o{' '}
        <Link href="/es/contact">solicite una consulta en línea</Link>. Hablamos español &mdash; atendemos a la comunidad
        hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo ofrece información legal general y no constituye asesoría legal. La
          ley de inmigración es compleja, depende de los hechos y cambia con frecuencia. La Proclamación Presidencial 10998, sus
          listas de países, las exenciones, el manejo de los casos pendientes y la disponibilidad de excepciones por interés
          nacional están sujetos a cambios y a un litigio en curso que puede limitar, pausar o modificar la orden. Confirme las
          reglas vigentes y la lista de países con el Departamento de Estado de EE. UU. (travel.state.gov), USCIS y el Federal
          Register, y hable con un abogado de inmigración con licencia para recibir orientación específica sobre su situación.
        </em>
      </p>
    </div>
  );
}
