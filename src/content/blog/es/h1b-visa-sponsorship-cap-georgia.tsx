/* Verificar antes de publicar — hace referencia a leyes/procedimientos migratorios (la visa de no inmigrante H-1B para ocupaciones especializadas: la definición de "ocupación especializada" y el requisito de título de licenciatura en la especialidad; el tope regular de 65,000 más la exención de 20,000 por maestría estadounidense para un total de 85,000; el registro electrónico y la lotería centrada en el beneficiario; los empleadores exentos del tope (cap-exempt); el salario prevaleciente y la Solicitud de Condición Laboral (LCA); las Solicitudes de Evidencia (RFE); el límite de hasta seis años y las extensiones AC21 más allá de los seis años; la portabilidad/transferencia H-1B bajo INA §214(n); las peticiones enmendadas tras un cambio material de lugar de trabajo bajo Matter of Simeio; el período de gracia de 60 días bajo 8 CFR 214.1(l)(2); la vía a la green card EB-2/EB-3 con PERM; y el clima de tarifas/fiscalización 2025–2026). Los formularios, tarifas, topes, reglas de salario prevaleciente, procedimientos de registro y cualquier nueva proclamación o tarifa cambian con frecuencia y son específicos de cada caso. Confirmar los formularios, tarifas, fechas de registro y procedimientos vigentes con USCIS y el DOL antes del go-live y para cualquier caso individual. */
import Link from 'next/link';
// Adaptación al español de en/h1b-visa-sponsorship-cap-georgia.tsx (BAR-811). Español natural, no traducción literal.

export const esTitle = 'Visa H-1B en Georgia: Patrocinio, Tope, Lotería y el Camino a la Green Card';
export const esDescription =
  'Una abogada de inmigración en Georgia explica cómo funciona la visa H-1B: la ocupación especializada, el tope de 85,000 y la lotería, la LCA y el salario prevaleciente, las RFE, qué pasa al perder el empleo (período de gracia de 60 días y portabilidad bajo INA §214(n)) y la vía EB-2/EB-3 a la residencia. Información general, no asesoría legal.';

export function H1bVisaSponsorshipCapPostContentEs() {
  return (
    <div className="prose-blog">
      <p>
        La <strong>visa H-1B</strong> es la columna vertebral del empleo calificado de extranjeros en Georgia.
        Permite a los empleadores estadounidenses contratar a profesionales extranjeros para{' '}
        <strong>ocupaciones especializadas</strong> &mdash; ingenieros de software en el corredor tecnol&oacute;gico
        de Alpharetta, cient&iacute;ficos de datos y analistas en Midtown Atlanta, profesionales financieros,
        ingenieros, especialistas en salud e investigadores universitarios. Pero la H-1B es tambi&eacute;n una de
        las visas m&aacute;s competitivas, sujetas a plazos y estrictamente reguladas del sistema. Funciona con una
        loter&iacute;a anual, un tope num&eacute;rico riguroso y un est&aacute;ndar probatorio que solo se ha vuelto
        m&aacute;s exigente. Esta gu&iacute;a explica c&oacute;mo funciona la H-1B en Georgia, qu&eacute; sucede
        cuando se pierde un empleo y c&oacute;mo una H-1B puede convertirse en el primer paso hacia una green card.
      </p>

      <h2>Qu&eacute; cuenta como &ldquo;ocupaci&oacute;n especializada&rdquo;</h2>
      <p>
        La H-1B est&aacute; reservada para <strong>ocupaciones especializadas</strong> &mdash; trabajos que exigen
        la aplicaci&oacute;n te&oacute;rica y pr&aacute;ctica de un cuerpo de conocimientos altamente especializados
        y que normalmente requieren, como m&iacute;nimo para ingresar, al menos un{' '}
        <strong>t&iacute;tulo de licenciatura (o su equivalente) en la especialidad espec&iacute;fica</strong>. El
        t&iacute;tulo debe estar conectado con el puesto: una posici&oacute;n de ingenier&iacute;a de software por lo
        general requiere un t&iacute;tulo en ciencias de la computaci&oacute;n o un campo estrechamente relacionado,
        no simplemente &ldquo;cualquier licenciatura.&rdquo;
      </p>
      <p>
        Los roles que suelen calificar incluyen desarrolladores de software, ingenieros de datos y de sistemas,
        analistas financieros, contadores, arquitectos, ingenieros civiles y mec&aacute;nicos, analistas de
        investigaci&oacute;n de mercados, fisioterapeutas e investigadores universitarios. El trabajador debe poseer
        el t&iacute;tulo requerido (un t&iacute;tulo extranjero puede evaluarse para determinar su equivalencia
        estadounidense), y el empleador debe demostrar que el puesto realmente exige ese nivel de educaci&oacute;n
        especializada. Los roles generalistas que cualquier graduado universitario podr&iacute;a ocupar son los que
        USCIS cuestiona con m&aacute;s frecuencia.
      </p>

      <h2>El tope y la loter&iacute;a</h2>
      <p>
        El Congreso limita las nuevas visas H-1B a <strong>85,000 por a&ntilde;o fiscal</strong>: un tope regular de{' '}
        <strong>65,000</strong> m&aacute;s una exenci&oacute;n de <strong>20,000</strong> para trabajadores con una
        maestr&iacute;a estadounidense o un grado superior (la &ldquo;exenci&oacute;n por t&iacute;tulo
        avanzado&rdquo;). La demanda supera ampliamente la oferta, por lo que USCIS realiza una{' '}
        <strong>loter&iacute;a</strong>.
      </p>
      <p>
        El proceso comienza con una breve ventana de <strong>registro electr&oacute;nico</strong>, t&iacute;picamente
        en marzo, cuando los empleadores registran a cada trabajador previsto y pagan una tarifa de registro. Luego
        USCIS realiza una selecci&oacute;n aleatoria. En los &uacute;ltimos a&ntilde;os la agencia pas&oacute; a una
        selecci&oacute;n <strong>centrada en el beneficiario</strong> &mdash; cada trabajador se ingresa una sola vez
        sin importar cu&aacute;ntos empleadores lo registren &mdash; para frenar el abuso del sistema. Solo los
        trabajadores que son <em>seleccionados</em> pueden tener una petici&oacute;n H-1B completa presentada, por lo
        general para una fecha de inicio del 1 de octubre. Si usted no es seleccionado, espera la loter&iacute;a del
        a&ntilde;o siguiente o busca una visa distinta.
      </p>
      <p>
        Los <strong>empleadores exentos del tope (cap-exempt)</strong> son la gran excepci&oacute;n. Las universidades
        e instituciones de educaci&oacute;n superior, las organizaciones sin fines de lucro afiliadas a ellas y las
        organizaciones de investigaci&oacute;n sin fines de lucro o gubernamentales pueden presentar peticiones H-1B{' '}
        <strong>en cualquier momento del a&ntilde;o, sin loter&iacute;a</strong>. Para Georgia, eso importa: los
        trabajadores en instituciones como Georgia Tech, Emory, el Sistema Universitario de Georgia y los hospitales
        de investigaci&oacute;n y organizaciones sin fines de lucro afiliados a menudo pueden ser contratados con una
        H-1B completamente fuera del tope. Un trabajador a veces puede tener una H-1B exenta del tope y, de forma
        concurrente, una sujeta al tope.
      </p>

      <h2>La Solicitud de Condici&oacute;n Laboral y el salario prevaleciente</h2>
      <p>
        Antes de presentar una petici&oacute;n H-1B, el empleador debe obtener una{' '}
        <strong>Solicitud de Condici&oacute;n Laboral (LCA)</strong> certificada del Departamento de Trabajo. En ella,
        el empleador atestigua que pagar&aacute; al menos el <strong>salario prevaleciente</strong> para el puesto en
        esa &aacute;rea geogr&aacute;fica (o el salario real pagado a trabajadores similares, el que sea mayor), que
        contratar al trabajador no afectar&aacute; adversamente las condiciones de los trabajadores estadounidenses y
        que no hay huelga ni cierre patronal. La obligaci&oacute;n salarial es real y se hace cumplir &mdash; pagar de
        menos a un trabajador H-1B expone al empleador a responsabilidad por salarios atrasados y a sanciones. La LCA
        tambi&eacute;n vincula el empleo a un lugar de trabajo espec&iacute;fico, lo que se vuelve importante si el
        trabajador despu&eacute;s se traslada.
      </p>

      <h2>Las RFE: por qu&eacute; gana la documentaci&oacute;n s&oacute;lida</h2>
      <p>
        Una <strong>Solicitud de Evidencia (RFE)</strong> es USCIS pidi&eacute;ndole al empleador que pruebe algo de
        lo que la agencia a&uacute;n no est&aacute; convencida. Las RFE de H-1B con mayor frecuencia cuestionan si el
        puesto es verdaderamente una ocupaci&oacute;n especializada, si el t&iacute;tulo del trabajador coincide con
        el rol, si el nivel salarial corresponde a las funciones y &mdash; en arreglos de consultor&iacute;a y
        dotaci&oacute;n de personal &mdash; si existe una relaci&oacute;n genuina entre empleador y empleado y un
        trabajo especializado real en el sitio del cliente final. Las tasas de RFE han subido y bajado con los cambios
        de pol&iacute;tica, y el clima de 2025&ndash;2026 ha tendido hacia un escrutinio m&aacute;s intenso.
      </p>
      <p>
        La defensa se construye antes de presentar, no despu&eacute;s: una descripci&oacute;n detallada del puesto
        vinculada a funciones especializadas, una conexi&oacute;n cre&iacute;ble entre el t&iacute;tulo y el rol (con
        una evaluaci&oacute;n de credenciales para los t&iacute;tulos extranjeros), niveles salariales que coincidan
        con la antig&uuml;edad del trabajo y &mdash; para colocaciones en sitios de terceros &mdash; itinerarios,
        contratos y cartas del cliente final que documenten la asignaci&oacute;n. Una petici&oacute;n bien
        documentada a menudo evita por completo una RFE; una endeble invita a una demora de meses o a una negaci&oacute;n
        incluso cuando el trabajador claramente califica. Este es exactamente el punto donde la preparaci&oacute;n de
        un abogado rinde frutos.
      </p>

      <h2>Extensiones, enmiendas y cambio de empleador</h2>
      <p>
        Una H-1B se concede por hasta <strong>tres a&ntilde;os</strong> y puede extenderse hasta un{' '}
        <strong>m&aacute;ximo de seis a&ntilde;os</strong>. M&aacute;s all&aacute; de los seis a&ntilde;os, las
        extensiones a&uacute;n son posibles cuando un proceso de green card est&aacute; en marcha &mdash; extensiones
        de un a&ntilde;o mientras una certificaci&oacute;n laboral PERM o un I-140 lleva pendiente 365 d&iacute;as o
        m&aacute;s, y extensiones de tres a&ntilde;os una vez que un I-140 est&aacute; aprobado pero a&uacute;n no hay
        un n&uacute;mero de visa disponible debido a los atrasos por pa&iacute;s (las disposiciones AC21).
      </p>
      <p>
        Dos situaciones requieren acci&oacute;n durante el per&iacute;odo de la H-1B. Se necesita una{' '}
        <strong>petici&oacute;n enmendada</strong> cuando hay un <em>cambio material</em> en el empleo &mdash; lo
        m&aacute;s com&uacute;n es un traslado a un nuevo lugar de trabajo fuera del &aacute;rea metropolitana
        original, lo que requiere una nueva LCA y una presentaci&oacute;n enmendada conforme a la regla de{' '}
        <em>Matter of Simeio Solutions</em>. Y una <strong>transferencia de empleador</strong> &mdash; cambiar de
        empleo &mdash; requiere que el nuevo empleador presente una nueva petici&oacute;n H-1B. Como el trabajador ya
        tiene estatus H-1B, una transferencia por lo general no vuelve a pasar por la loter&iacute;a.
      </p>

      <h2>Perder un empleo H-1B: el per&iacute;odo de gracia de 60 d&iacute;as y la portabilidad</h2>
      <p>
        Con la ola de despidos de 2023&ndash;2025 en el sector tecnol&oacute;gico &mdash; en gran parte ligada a la
        reestructuraci&oacute;n y a los recortes impulsados por la IA &mdash; esta es la pregunta que m&aacute;s hacen
        los trabajadores H-1B. Perder el empleo <strong>no</strong> significa que deba salir del pa&iacute;s al
        d&iacute;a siguiente. El reglamento federal (8 CFR 214.1(l)(2)) otorga a los trabajadores H-1B un{' '}
        <strong>per&iacute;odo de gracia de hasta 60 d&iacute;as</strong> &mdash; o hasta el fin de la validez de la
        petici&oacute;n vigente, lo que sea m&aacute;s corto &mdash; despu&eacute;s de que termina el empleo. Durante
        esos 60 d&iacute;as usted permanece en estatus v&aacute;lido y puede actuar.
      </p>
      <p>
        El movimiento m&aacute;s com&uacute;n es la <strong>portabilidad bajo INA §214(n)</strong> (la regla de
        portabilidad AC21): una vez que un nuevo empleador presenta una petici&oacute;n H-1B no fr&iacute;vola a su
        favor, usted puede comenzar a trabajar para ese empleador tan pronto como se presente la petici&oacute;n
        &mdash; no tiene que esperar la aprobaci&oacute;n &mdash; siempre que haya sido admitido legalmente y haya
        mantenido el estatus. Presentar esa nueva petici&oacute;n <em>dentro</em> del per&iacute;odo de gracia es lo
        que lo protege. Otras opciones dentro de la ventana incluyen cambiar a un estatus distinto (por ejemplo, un
        estatus de dependiente, un estatus de estudiante o un estatus de visitante para cerrar asuntos) o transitar
        hacia otra categor&iacute;a con autorizaci&oacute;n de trabajo. Para trabajadores con trayectorias
        s&oacute;lidas &mdash; ingenieros senior, investigadores, fundadores, profesionales destacados &mdash; la{' '}
        <Link href="/es/blog/o1-visa-extraordinary-ability-georgia">visa O-1 de habilidad extraordinaria</Link> puede
        ser una alternativa poderosa que no tiene tope ni est&aacute; sujeta a la loter&iacute;a. La clave es actuar
        temprano: 60 d&iacute;as pasan r&aacute;pido, y las opciones se estrechan una vez que vence.
      </p>

      <h2>De la H-1B a la green card: la v&iacute;a EB-2 y EB-3</h2>
      <p>
        Una gran ventaja de la H-1B es la <strong>doble intenci&oacute;n</strong> &mdash; usted puede buscar la
        residencia permanente sin poner en riesgo su H-1B. Para la mayor&iacute;a de los profesionales H-1B, el camino
        pasa por una <strong>green card EB-2 o EB-3 patrocinada por el empleador</strong>. El empleador primero
        completa la <strong>certificaci&oacute;n laboral PERM</strong> con el Departamento de Trabajo (una
        determinaci&oacute;n del salario prevaleciente y una prueba estructurada del mercado laboral estadounidense),
        luego presenta una petici&oacute;n de inmigrante I-140 y, finalmente, el trabajador ajusta su estatus una vez
        que hay un n&uacute;mero de visa disponible. Los trabajadores con t&iacute;tulos avanzados o habilidad
        excepcional pueden calificar para la EB-2, incluida la Exenci&oacute;n por Inter&eacute;s Nacional, que en el
        caso adecuado puede omitir el PERM.
      </p>
      <p>
        El momento lo es todo aqu&iacute;, porque los <strong>atrasos por pa&iacute;s</strong> &mdash; especialmente
        severos para los trabajadores nacidos en India y China &mdash; pueden significar a&ntilde;os entre un I-140
        aprobado y una green card disponible. Esa brecha es exactamente la raz&oacute;n por la que existen las
        extensiones AC21 de la H-1B m&aacute;s all&aacute; de los seis a&ntilde;os. Para el panorama completo de
        c&oacute;mo funcionan estas categor&iacute;as, vea nuestras gu&iacute;as sobre la{' '}
        <Link href="/es/blog/employment-based-immigration-georgia">inmigraci&oacute;n basada en el empleo en
        Georgia</Link> y las{' '}
        <Link href="/es/blog/employment-based-green-card-eb1-eb2-eb3-georgia">green cards EB-1, EB-2 y EB-3</Link>. Si
        su camino a la residencia permanente pasa en cambio por un familiar, nuestra{' '}
        <Link href="/es/blog/family-green-card-attorney-georgia">gu&iacute;a sobre la green card por v&iacute;a
        familiar</Link> explica esa ruta. Los c&oacute;nyuges de titulares de H-1B tambi&eacute;n deben saber que un{' '}
        <Link href="/es/blog/h4-ead-work-authorization-h1b-spouses-georgia">EAD H-4</Link> puede permitirles trabajar
        una vez que el proceso de green card llega a la etapa del I-140.
      </p>

      <h2>El clima de 2025&ndash;2026</h2>
      <p>
        Dos presiones definen el panorama actual de la H-1B. Primero, la ola de despidos &mdash; concentrada en el
        sector tecnol&oacute;gico y amplificada por la reestructuraci&oacute;n impulsada por la IA &mdash; ha puesto a
        m&aacute;s trabajadores H-1B en el per&iacute;odo de gracia de 60 d&iacute;as y ha hecho esenciales las
        decisiones r&aacute;pidas y correctas. Segundo, el entorno de fiscalizaci&oacute;n y costos se ha endurecido:
        el escrutinio de las RFE ha aumentado, las reglas de registro se han rehecho para combatir el fraude, y 2025
        trajo nuevas tarifas propuestas y una proclamaci&oacute;n que busca imponer un cargo sustancial a ciertas
        nuevas peticiones H-1B &mdash; medidas que han generado impugnaciones legales y siguen en flujo. Como estas
        reglas se mueven r&aacute;pidamente, confirme las fechas del tope, las tarifas y los procedimientos de
        registro vigentes con USCIS y un abogado calificado antes de basarse en cualquier cifra espec&iacute;fica.
      </p>

      <h2>Hable con Eszter Bardi sobre su H-1B</h2>
      <p>
        Ya sea que usted sea un empleador de Georgia que intenta patrocinar una contrataci&oacute;n clave, un
        ingeniero de software o analista que enfrenta un despido dentro de su ventana de 60 d&iacute;as, o un
        profesional H-1B listo para iniciar una green card, la abogada <strong>Eszter Bardi</strong> puede trazar las
        opciones &mdash; estrategia de loter&iacute;a, rutas exentas del tope, documentaci&oacute;n a prueba de RFE,
        una transferencia o enmienda, un puente con la O-1, o la v&iacute;a EB-2/EB-3 &mdash; y actuar en el plazo que
        la H-1B exige. Bardi Immigration Law atiende a clientes en todo Georgia con acceso directo a la abogada, no a
        un especialista de admisi&oacute;n.
      </p>
      <p>
        <strong>Agende una consulta hoy.</strong> Revisaremos su estatus, sus plazos y sus metas, y construiremos el
        camino m&aacute;s s&oacute;lido a seguir. <Link href="/es/contact">Solicite una consulta en l&iacute;nea</Link>.
        Hablamos espa&ntilde;ol &mdash; atendemos a la comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | Este art&iacute;culo ofrece informaci&oacute;n legal general y no
          constituye asesor&iacute;a legal. La ley de inmigraci&oacute;n es compleja, espec&iacute;fica de cada caso y
          cambia con frecuencia &mdash; los topes, las tarifas, las reglas de salario prevaleciente, los
          procedimientos de registro y las nuevas proclamaciones cambian con el tiempo. Confirme los formularios,
          tarifas, plazos y requisitos de elegibilidad vigentes en los sitios web de USCIS y el Departamento de
          Trabajo, y consulte a un abogado de inmigraci&oacute;n con licencia para obtener orientaci&oacute;n
          espec&iacute;fica para su caso.
        </em>
      </p>
    </div>
  );
}
