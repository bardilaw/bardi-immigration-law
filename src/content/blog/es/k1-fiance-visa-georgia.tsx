/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (visa K-1 de prometido(a), INA §101(a)(15)(K), Formulario I-129F, 8 CFR 214.2(k) requisito de reunión en persona de dos años y exenciones, entrevista K-1, regla de 90 días, ajuste I-485, INA §245(d), derivados K-2) que pueden cambiar. Confirmar contra USCIS y travel.state.gov antes del go-live. */
import Link from 'next/link';
// Adaptación al español de en/k1-fiance-visa-georgia.tsx (BAR-854). Español natural, no traducción literal.

export const esTitle = 'Visa K-1 de Prometido(a) en Georgia: Cómo Traer a su Prometido(a) a los EE. UU.';
export const esDescription =
  'Una abogada de inmigración en Georgia explica la visa K-1 de prometido(a) paso a paso: quién califica, el requisito de reunión en persona de dos años y sus exenciones limitadas, el Formulario I-129F, la entrevista consular en el extranjero, la ventana obligatoria de 90 días para casarse y ajustar el estatus, las visas derivadas K-2 para los hijos y la comparación con la visa de cónyuge CR-1. Información general, no asesoría legal.';

export function K1FianceVisaPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        Usted es ciudadano estadounidense y vive en Georgia, está comprometido(a), y la persona con quien planea casarse
        vive en otro país. La pregunta es la misma que hacen miles de parejas cada año:{' '}
        <em>¿cómo traigo a mi prometido(a) a los Estados Unidos para que podamos casarnos y construir una vida aquí?</em>{' '}
        Para una pareja comprometida, la respuesta suele ser la <strong>visa K-1 de prometido(a)</strong> — la visa de
        no inmigrante que permite a un(a) prometido(a) extranjero(a) entrar a Estados Unidos para casarse con un
        ciudadano en un plazo de <strong>90 días</strong> y luego solicitar la green card.
      </p>
      <p>
        Esta guía lleva a las parejas de Georgia por todo el proceso K-1: quién califica, el requisito de reunión en
        persona de dos años y sus excepciones limitadas, el Formulario I-129F, la entrevista en la embajada, la
        importantísima ventana de 90 días para casarse y ajustar el estatus, qué pasa con los hijos del prometido(a),
        cómo se compara el K-1 con la visa de cónyuge CR-1, y el riesgo real si la boda nunca ocurre.
      </p>

      <h2>Quién Califica para la Visa K-1</h2>
      <p>
        El K-1 es más estricto de lo que la mayoría espera. Tres requisitos fundamentales determinan la elegibilidad:
      </p>
      <ul>
        <li>
          <strong>El peticionario debe ser ciudadano estadounidense.</strong> Esta es la regla que más sorprende: un
          residente permanente (titular de green card) <em>no puede</em> solicitar el K-1 para su prometido(a). Solo un
          ciudadano puede hacerlo. Si usted tiene green card, su camino es casarse primero y luego presentar una
          petición de cónyuge.
        </li>
        <li>
          <strong>Ambos deben ser legalmente libres para casarse.</strong> Cualquier matrimonio anterior debe estar
          completamente disuelto por divorcio, anulación o muerte antes de presentar la solicitud, y ambos deben ser
          legalmente elegibles para casarse bajo la ley del lugar donde se celebrará la boda.
        </li>
        <li>
          <strong>Deben tener la intención de casarse dentro de los 90 días de la llegada del prometido(a).</strong>{' '}
          El K-1 está diseñado en torno a una intención genuina de casarse pronto — no en algún momento vago del futuro.
        </li>
      </ul>

      <h2>El Requisito de Reunión en Persona de Dos Años</h2>
      <p>
        La ley migratoria estadounidense exige que usted y su prometido(a) se hayan{' '}
        <strong>reunido en persona al menos una vez dentro de los dos años anteriores a la presentación</strong> de la
        petición. Una videollamada, una relación en línea o un compromiso concertado sin un encuentro cara a cara no
        satisface esta regla por sí solo. Conserve pruebas de la reunión — sellos de pasaporte, tarjetas de embarque,
        recibos de hotel y fotos con fecha juntos — porque USCIS esperará verlas.
      </p>
      <p>
        Existen dos excepciones limitadas, y ambas son discrecionales — USCIS no está obligado a concederlas:
      </p>
      <ul>
        <li>
          <strong>Dificultad extrema</strong> para el peticionario ciudadano que hizo imposible el encuentro en persona
          (por ejemplo, una enfermedad grave o un despliegue militar).
        </li>
        <li>
          <strong>Costumbre establecida.</strong> El encuentro previo a la boda violaría costumbres strictas y
          arraigadas de la cultura o práctica social extranjera del prometido(a) (por ejemplo, ciertas tradiciones de
          matrimonios concertados).
        </li>
      </ul>
      <p>
        Las exenciones del requisito de reunión son difíciles de obtener y requieren amplia documentación. Para la
        mayoría de las parejas, la respuesta práctica es más simple: viajen y pasen tiempo juntos antes de presentar
        la solicitud.
      </p>

      <h2>Paso Uno: Formulario I-129F, Petición de Prometido(a) Extranjero(a)</h2>
      <p>
        El proceso comienza cuando el ciudadano estadounidense presenta el <strong>Formulario I-129F</strong> ante
        USCIS. La petición establece que tienen una relación real y calificante y que tienen la intención de casarse
        dentro de 90 días. Deben presentar evidencia de una relación genuina — fotos juntos a lo largo del tiempo,
        registros de viaje, mensajes y declaraciones de cada uno describiendo cómo se conocieron y sus planes de boda.
      </p>
      <p>
        USCIS envía un aviso de recibo (Formulario I-797C) en pocas semanas — conserve el número de recibo, porque
        rastrea todo lo que sigue. Si USCIS necesita más prueba de una relación de buena fe, emite una{' '}
        <strong>Solicitud de Evidencia (RFE)</strong>, que pausa el caso hasta que responda. Una vez aprobada, USCIS
        reenvía la petición al <strong>Centro Nacional de Visas</strong>, que la dirige a la embajada o consulado de
        EE. UU. en el país del prometido(a). La aprobación del I-129F <em>no</em> es una visa — es permiso para
        solicitar una en el extranjero.
      </p>

      <h2>Paso Dos: La Entrevista de Visa K-1 en el Extranjero</h2>
      <p>
        En el consulado, su prometido(a) completa la solicitud de visa no inmigrante <strong>DS-160</strong>, paga la
        tarifa de visa, completa un <strong>examen médico</strong> con un médico de panel aprobado por la embajada, y
        reúne documentos civiles — acta de nacimiento, pasaporte, certificados policiales y prueba de que cualquier
        matrimonio anterior finalizó. Su prometido(a) también necesitará una{' '}
        <strong>Declaración Jurada de Manutención (Formulario I-134)</strong> de su parte demostrando que puede
        sostenerlo(a) económicamente.
      </p>
      <p>
        En la entrevista, un oficial consular revisa la relación y los documentos y decide si emite el K-1. Los tiempos
        de espera para citas varían ampliamente según el consulado — algunos programan en semanas, otros en meses. Si el
        oficial necesita más información, el caso puede entrar en procesamiento administrativo antes de que se emita la
        visa. Una vez aprobado, el K-1 es una visa de entrada única, generalmente válida por hasta seis meses, que
        permite a su prometido(a) viajar a los Estados Unidos.
      </p>

      <h2>La Ventana de 90 Días: Casarse y Luego Solicitar la Green Card</h2>
      <p>
        Este es el corazón del K-1, y el plazo es firme. Desde el día en que su prometido(a) es admitido(a) en los
        Estados Unidos, tienen <strong>90 días para casarse</strong> — y el matrimonio debe ser con el ciudadano
        estadounidense que presentó la petición. No hay extensión de esta ventana.
      </p>
      <p>
        Después de la boda, su nuevo(a) cónyuge presenta el <strong>Formulario I-485</strong> para ajustar su estatus
        a residente permanente legal desde dentro de los Estados Unidos — el mismo proceso de{' '}
        <Link href="/es/blog/adjustment-of-status-green-card-georgia">ajuste de estatus</Link> usado por otros casos de
        green card por matrimonio, incluyendo biometría y generalmente una entrevista. Su cónyuge también puede
        solicitar un permiso de trabajo (Formulario I-765) mientras el I-485 está pendiente. Como la pareja
        generalmente se casa con menos de dos años cuando se otorga la green card, la primera tarjeta es una{' '}
        <strong>green card condicional de dos años</strong>, y luego deberán presentar el Formulario I-751 para
        eliminar las condiciones.
      </p>
      <p>
        Un límite crítico: un titular de K-1 <em>solo</em> puede ajustar su estatus basándose en el matrimonio con el
        peticionario que lo trajo. Un titular de K-1 generalmente no puede cambiar a una categoría de visa diferente ni
        ajustar en ninguna otra base. Si la relación termina, no hay camino alternativo dentro del K-1.
      </p>

      <h2>Qué Pasa con los Hijos: Visas K-2</h2>
      <p>
        Si su prometido(a) tiene hijos solteros menores de 21 años, también pueden venir en visas{' '}
        <strong>K-2</strong> como derivados del progenitor K-1. Para preservar esta opción, liste a los hijos en la
        petición I-129F aunque vayan a viajar más tarde. Los hijos K-2 generalmente deben entrar a los Estados Unidos
        dentro de un año desde que se emitió la visa K-1, y después del matrimonio pueden solicitar el ajuste de estatus
        junto a su progenitor. Dejar a los hijos fuera de la petición puede forzar un proceso más lento y separado
        después, así que planifique para toda la familia desde el principio.
      </p>

      <h2>Visa K-1 vs. Visa de Cónyuge CR-1</h2>
      <p>
        Las parejas a menudo se angustian sobre si casarse en el extranjero y solicitar una visa de cónyuge o usar el
        K-1. La respuesta correcta depende de su situación, pero aquí está la diferencia fundamental:
      </p>
      <ul>
        <li>
          <strong>K-1 (prometido(a)):</strong> Están <em>comprometidos</em>. Solo un ciudadano puede solicitar. Su
          prometido(a) entra, se casan dentro de 90 días, y luego solicita la green card desde dentro de EE. UU. Hay
          una espera para el permiso de trabajo después de la llegada, a menos que presenten por separado.
        </li>
        <li>
          <strong>CR-1 (cónyuge):</strong> Ya están <em>casados</em>. Un ciudadano <em>o</em> un residente permanente
          puede solicitar. Su cónyuge entra al país como residente permanente con la green card ya aprobada — sin paso
          de ajuste separado y con permiso de trabajo inmediato al llegar.
        </li>
      </ul>
      <p>
        En términos generales, el K-1 puede traer a un prometido(a) al país más rápido, mientras que el CR-1 entrega
        una green card en mano al llegar y evita la espera de ajuste post-llegada. Para un análisis completo de la ruta
        de la pareja casada, vea nuestra guía de la{' '}
        <Link href="/es/blog/ir1-cr1-spouse-visa-married-couples-georgia">visa de cónyuge IR-1 y CR-1</Link>. Si su
        caso terminará en un consulado en el extranjero, nuestro resumen del{' '}
        <Link href="/es/blog/consular-processing-immigrant-visa-georgia">proceso consular para visas de
        inmigrante</Link> explica cómo funciona ese camino.
      </p>

      <h2>El Riesgo Si el Matrimonio No Ocurre</h2>
      <p>
        El K-1 es implacable en este punto. Si no se casan dentro de los 90 días de la entrada del prometido(a), el
        estatus K-1 vence y{' '}
        <strong>no hay forma de extenderlo ni de ajustar el estatus en ninguna otra base.</strong> Su prometido(a) está
        obligado(a) a salir de los Estados Unidos. Quedarse más allá de los 90 días significa acumular presencia ilegal
        y arriesgarse a la deportación — y la presencia ilegal puede activar una barra de tres o diez años para
        regresar. Un titular de K-1 tampoco puede simplemente casarse con un ciudadano diferente y ajustar; la ley ata
        el K-1 al peticionario original. Por eso las parejas deben estar genuinamente listas para casarse antes de usar
        el K-1, no poniendo a prueba la relación después de la llegada.
      </p>

      <h2>Por Qué Importa un Abogado de Inmigración en Georgia</h2>
      <p>
        Los casos K-1 se aprueban cada día, pero la ruta castiga los errores tempranos: un expediente de relación
        delgado invita a una entrevista enfocada en el fraude, un plazo de 90 días perdido termina el caso, y un
        problema migratorio o penal en la historia de cualquier pareja puede cambiar la estrategia antes de que
        alguien presente la solicitud. Las parejas del área metropolitana de Atlanta traen prometidos de México,
        Centroamérica, India, Nigeria, Ghana, las Filipinas y más — cada consulado con sus propias reglas de documentos
        y tiempos. Un abogado con experiencia detecta los problemas antes de que le cuesten meses. Si aún está eligiendo
        quién debe manejar su caso, lea nuestra guía sobre{' '}
        <Link href="/es/blog/how-to-choose-immigration-attorney-georgia">cómo elegir un abogado de inmigración en
        Georgia</Link>, y para una visión más amplia de las peticiones familiares, vea el{' '}
        <Link href="/es/blog/family-green-card-attorney-georgia">proceso de green card familiar en Georgia</Link>.
      </p>

      <h2>Hable con Eszter Bardi — Consulta Gratuita</h2>
      <p>
        Traer a su prometido(a) a Georgia no debería sentirse como un juego de azar. En Bardi Immigration Law, la
        abogada <strong>Eszter Bardi</strong> ayuda a parejas comprometidas en Georgia y Alabama a través de todo el
        proceso K-1 — desde la primera petición I-129F hasta la entrevista en la embajada, la boda y la green card.
        Trabajará directamente con la Abogada Bardi — sin especialista de admisiones.
      </p>
      <p>
        <strong>Programe su consulta gratuita hoy.</strong> Revisaremos su relación, explicaremos si el K-1 o una visa
        de cónyuge es la mejor opción para su situación, y construiremos un plan para reunir a su familia.{' '}
        <Link href="/es/contact">Solicite su consulta gratuita en línea.</Link> Hablamos español.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este artículo proporciona información legal general y no constituye
          asesoría legal. El derecho migratorio es complejo, específico a los hechos y cambia frecuentemente. Confirme
          los formularios, tarifas y requisitos de elegibilidad actuales en el sitio web de USCIS y travel.state.gov, y
          consulte a un abogado de inmigración con licencia para orientación específica a su caso.
        </em>
      </p>
    </div>
  );
}
