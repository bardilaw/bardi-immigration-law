/* Verificar antes de publicar — hace referencia a tarifas y procedimientos de USCIS (el calendario de tarifas de USCIS fijado por la regla final efectiva el 1 de abril de 2024, publicada en 89 FR 6194; el calendario oficial de tarifas Formulario G-1055; las reducciones de tarifas por presentación en línea para muchos formularios; la incorporación de la tarifa separada de servicios biométricos dentro de la mayoría de las solicitudes de base; la exención de tarifas Formulario I-912 y las opciones de tarifa reducida; las exenciones estatutarias y reglamentarias para autopeticionarios VAWA, solicitantes de visas T y U, ciertos solicitantes de asilo y contextos relacionados con DACA; el procesamiento premium bajo el Formulario I-907 (INA §286(u)); y las propuestas de tarifas de 2025–2026 para categorías basadas en el empleo y humanitarias). LAS TARIFAS CAMBIAN y varias fueron litigadas y ajustadas; cada cifra en dólares de esta publicación es el monto fijado por la regla del 1 de abril de 2024 y DEBE re-verificarse contra el Calendario de Tarifas de USCIS vigente (G-1055) en uscis.gov antes del go-live y antes de que cualquier lector presente algo. Esta publicación deliberadamente NO promete ningún resultado e instruye a los lectores a confirmar las tarifas vigentes. Confirmar contra USCIS antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/uscis-filing-fees-2025-guide-georgia.tsx (BAR-896). Español natural, no traducción literal.

export const esTitle = 'Tarifas de USCIS 2025: Costos de Inmigración en Georgia';
export const esDescription =
  'Una abogada de inmigración en Georgia explica las tarifas de presentación de USCIS para los formularios más comunes (I-130, I-485, I-765, I-131, N-400, I-751, I-90, I-539), quién puede evitarlas con la exención de tarifas (Formulario I-912), las categorías exentas, el procesamiento premium, y la diferencia entre las tarifas de USCIS y los honorarios del abogado. Verifique siempre las tarifas vigentes en uscis.gov. Información general, no asesoría legal.';

export function UscisFilingFeesPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Antes de que la mayoría de las personas llame a un abogado de inmigración, se hace una pregunta más
        sencilla: <em>¿cuánto costará esto?</em> La respuesta honesta tiene dos partes &mdash; las tarifas que
        USCIS cobra por presentar los formularios, y la tarifa separada que un abogado cobra por manejar el
        caso. Esta guía recorre las tarifas de presentación del gobierno para las solicitudes más comunes,
        quién puede evitarlas, y cómo pensar en el costo total. Es información general, no asesoría legal.
      </p>
      <p className="disclaimer">
        <strong>Verifique siempre la tarifa vigente antes de presentar.</strong> Los montos a continuación son
        las tarifas fijadas por la regla de tarifas de USCIS que entró en vigor el <strong>1 de abril de
        2024</strong>. Las tarifas de USCIS cambian, y algunas han sido objeto de litigio y de propuestas
        adicionales. Confirme el monto exacto y vigente en el <strong>Calendario de Tarifas oficial de USCIS
        (Formulario G-1055)</strong> en{' '}
        <a href="https://www.uscis.gov/g-1055" rel="nofollow noopener" target="_blank">uscis.gov/g-1055</a>{' '}
        antes de enviar cualquier pago &mdash; una presentación con la tarifa incorrecta es rechazada.
      </p>

      <h2>Tarifas de Presentación de USCIS para Solicitudes Comunes</h2>
      <p>
        Estas son las tarifas estándar de presentación para las solicitudes por las que más preguntan las
        familias de Georgia. Cuando USCIS ofrece una tarifa más baja por presentar en línea en lugar de en
        papel, se indica el monto en línea; muchos formularios cuestan una cantidad fija menos cuando se
        presentan a través de una cuenta en línea de USCIS.
      </p>
      <table>
        <thead>
          <tr>
            <th>Formulario</th>
            <th>Qué es</th>
            <th>Tarifa (regla del 1 de abril de 2024)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I-130</td>
            <td><Link href="/es/blog/family-green-card-attorney-georgia">Petición familiar</Link></td>
            <td>$675 papel / $625 en línea</td>
          </tr>
          <tr>
            <td>I-485</td>
            <td><Link href="/es/blog/adjustment-of-status-green-card-georgia">Ajuste de estatus</Link></td>
            <td>$1,440 (biométricos ahora incluidos)</td>
          </tr>
          <tr>
            <td>I-765</td>
            <td><Link href="/es/blog/employment-authorization-ead-georgia">Autorización de empleo (EAD)</Link></td>
            <td>$520 papel / $470 en línea (reducida cuando se presenta con un I-485)</td>
          </tr>
          <tr>
            <td>I-131</td>
            <td><Link href="/es/blog/advance-parole-travel-documents-georgia">Permiso adelantado / documento de viaje</Link></td>
            <td>$630</td>
          </tr>
          <tr>
            <td>N-400</td>
            <td><Link href="/es/blog/naturalization-citizenship-georgia">Naturalización (ciudadanía)</Link></td>
            <td>$760 papel / $710 en línea</td>
          </tr>
          <tr>
            <td>I-751</td>
            <td><Link href="/es/blog/remove-conditions-green-card-i-751-georgia">Eliminar condiciones de residencia</Link></td>
            <td>$750</td>
          </tr>
          <tr>
            <td>I-90</td>
            <td><Link href="/es/blog/i90-green-card-renewal-replacement-georgia">Renovación / reemplazo de green card</Link></td>
            <td>$465 papel / $415 en línea</td>
          </tr>
          <tr>
            <td>I-539</td>
            <td><Link href="/es/blog/extend-change-nonimmigrant-status-i539-georgia">Extender / cambiar estatus de no inmigrante</Link></td>
            <td>$470 papel / $420 en línea</td>
          </tr>
        </tbody>
      </table>
      <p>
        Dos puntos prácticos. Primero, una green card basada en el matrimonio presentada desde dentro de EE. UU.
        rara vez es una sola tarifa &mdash; un paquete típico puede incluir el I-130, el I-485, y a menudo un
        I-765 y un I-131 presentados juntos, de modo que el verdadero desembolso total es la suma de varios
        formularios. Segundo, estas son tarifas de <em>presentación</em> únicamente; no incluyen el costo del{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">examen médico</Link> requerido, las
        traducciones, las fotografías de pasaporte ni el envío.
      </p>

      <h2>La Reestructuración de Tarifas de 2024</h2>
      <p>
        La regla del 1 de abril de 2024 fue el primer aumento amplio de tarifas de USCIS desde 2016, elevando
        las tarifas aproximadamente una cuarta parte en promedio entre los formularios. Dos cambios
        estructurales importan más allá de las cifras principales. USCIS incorporó la antigua{' '}
        <strong>tarifa separada de servicios biométricos</strong> dentro del precio de la mayoría de las
        solicitudes de base, de modo que por lo general ya no la paga como un rubro independiente. Y USCIS
        comenzó a cobrar <strong>precios diferentes según el tipo de solicitante y la presentación en línea
        frente a la presentación en papel</strong> &mdash; premiando la presentación en línea con una tarifa
        más baja en muchos formularios y fijando precios separados para pequeños empleadores y organizaciones
        sin fines de lucro en algunos formularios de empleo.
      </p>

      <h2>Exenciones de Tarifas y Tarifas Reducidas (Formulario I-912)</h2>
      <p>
        Si pagar la tarifa representara una verdadera dificultad económica, es posible que pueda presentar el{' '}
        <strong>Formulario I-912</strong> para pedirle a USCIS que la exonere. Una solicitud generalmente se
        aprueba cuando usted demuestra cualquiera de los siguientes:
      </p>
      <ul>
        <li>Usted, su cónyuge o el jefe de su hogar reciben un <strong>beneficio sujeto a verificación de recursos (means-tested benefit)</strong> (como Medicaid, SNAP, TANF o SSI);</li>
        <li>El ingreso de su hogar está <strong>en o por debajo del 150% de las Pautas Federales de Pobreza</strong>; o</li>
        <li>Usted tiene una <strong>dificultad económica</strong> &mdash; como facturas médicas elevadas o una emergencia &mdash; que le impide pagar.</li>
      </ul>
      <p>
        Las exenciones de tarifas no están disponibles para todos los formularios &mdash; por lo general se
        limitan a categorías humanitarias y de beneficios específicas &mdash; así que la elegibilidad depende
        de qué solicitud está presentando. Aporte documentación (cartas de beneficios, declaraciones de
        impuestos o talones de pago, prueba de dificultad económica), y recuerde que una exención cubre
        únicamente la tarifa de <em>USCIS</em>, no los honorarios del abogado.
      </p>

      <h2>Categorías Que Están Exentas de Tarifas</h2>
      <p>
        Algunos solicitantes humanitarios no pagan ciertas tarifas en absoluto, por estatuto o por reglamento.
        Estas comúnmente incluyen:
      </p>
      <ul>
        <li><strong>Autopeticionarios VAWA</strong> que presentan el Formulario I-360 como cónyuges, hijos o padres maltratados;</li>
        <li>Solicitantes de <strong>visa T</strong> (trata de personas) y <strong>visa U</strong> (víctimas de delitos) para la petición principal y muchos formularios relacionados;</li>
        <li><strong>Ciertos solicitantes de asilo</strong> (la solicitud de asilo en sí históricamente no ha tenido tarifa, aunque las reglas sobre el permiso de trabajo relacionado han cambiado);</li>
        <li>Renovaciones de <strong>DACA</strong> en circunstancias limitadas y otras categorías estrechas.</li>
      </ul>
      <p>
        Estas exenciones son específicas y cambian con la política y el litigio, así que confirme la regla
        vigente para su formulario y categoría exactos antes de asumir que una presentación es gratuita.
      </p>

      <h2>Procesamiento Premium</h2>
      <p>
        Para las peticiones elegibles, el <strong>procesamiento premium</strong> (Formulario I-907) compra una
        adjudicación más rápida dentro de un plazo garantizado &mdash; <em>no</em> mejora sus probabilidades,
        solo la velocidad. Está disponible para muchos casos de empleo (Formularios I-129 e I-140) y se ha
        extendido a ciertas categorías de I-539 e I-765. La tarifa premium se cobra <strong>además</strong> de
        la tarifa de presentación regular y asciende a miles de dólares; el monto exacto y cuáles formularios
        califican los fija USCIS y deben verificarse en el calendario de tarifas vigente.
      </p>

      <h2>Tarifas de USCIS frente a Honorarios del Abogado</h2>
      <p>
        Esta es la distinción que más a menudo pasan por alto los solicitantes primerizos. La{' '}
        <strong>tarifa de presentación de USCIS</strong> se paga al gobierno para procesar el formulario. Los{' '}
        <strong>honorarios del abogado</strong> se pagan a su abogado por evaluar su elegibilidad, elegir la
        estrategia correcta, preparar la solicitud correctamente, y representarlo si surgen preguntas. Usted
        puede presentar la mayoría de los formularios por su cuenta y pagar solo la tarifa de USCIS &mdash;
        pero en inmigración, una presentación rechazada o mal preparada puede costar mucho más que la tarifa en
        tiempo perdido, fechas de prioridad perdidas, o una negación que crea nuevos problemas. Un buen abogado
        cotiza sus honorarios por separado de las tarifas del gobierno, y usted siempre debería saber cuál es
        cuál.
      </p>

      <h2>Mirando Hacia Adelante: 2025–2026</h2>
      <p>
        Las tarifas siguen siendo un blanco móvil. La regla de 2024 continúa atrayendo litigio, y la
        administración actual ha planteado cambios adicionales &mdash; en particular tarifas más altas y nuevas
        dirigidas a las categorías basadas en el empleo y humanitarias, y propuestas ligadas a una legislación
        migratoria más amplia. Nada de esto cambia la regla básica para los solicitantes: <strong>revise el
        calendario de tarifas oficial la semana en que presenta</strong>, porque el monto en una guía de hace
        meses puede ya estar desactualizado.
      </p>

      <h2>Hable con una Abogada de Inmigración en Georgia</h2>
      <p>
        Entender las tarifas es el primer paso para presupuestar su caso &mdash; y para evitar los costosos
        errores que vienen de presentar el formulario incorrecto o el monto incorrecto. Bardi Immigration Law
        ayuda a familias en todo <strong>Georgia y Alabama</strong> a planificar el costo completo de un caso,
        presentar exenciones de tarifas donde califican, y elegir el camino más rentable hacia su objetivo. La
        abogada <strong>Eszter Bardi</strong> brinda acceso directo a la abogada y cotiza los honorarios del
        abogado de forma separada y transparente respecto de las tarifas del gobierno. Antes de comprometerse,
        conozca{' '}
        <Link href="/es/blog/how-to-choose-immigration-attorney-georgia">cómo elegir un abogado de
        inmigración</Link>.
      </p>
      <p>
        <Link href="/es/contact">Programe una consulta hoy.</Link>
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Esta publicación de blog es solo para fines informativos y no
          constituye asesoría legal. Todos los montos de tarifas reflejan el calendario de tarifas de USCIS
          vigente desde el 1 de abril de 2024, están sujetos a cambios y a litigio en curso, y deben
          verificarse contra el Calendario de Tarifas oficial de USCIS vigente (Formulario G-1055) en
          uscis.gov antes de presentar. La elegibilidad para exenciones de tarifas y exenciones por categoría
          depende del formulario específico y de las circunstancias individuales. Consulte a un abogado de
          inmigración con licencia sobre su situación específica.
        </em>
      </p>
    </div>
  );
}
