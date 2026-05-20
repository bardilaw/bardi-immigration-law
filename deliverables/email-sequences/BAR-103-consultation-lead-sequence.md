# Consultation Lead Email Sequence — BAR-103

Triggered when a visitor submits the consultation form at bardilaw.com.
Three touchpoints: immediate auto-reply, 24-hour follow-up (if no attorney response), 3-day nurture (if no consultation booked).

---

## Email 1 — Immediate Auto-Reply

### EN

**Subject:** We received your message — Bardi Immigration Law

Thank you for reaching out to Bardi Immigration Law. We've received your inquiry and will be in touch within one business day.

Immigration questions can feel urgent — and they often are. Attorney Eszter Bardi personally reviews every inquiry before responding, which means you'll hear from someone who already knows the basics of your situation before your first conversation.

In the meantime, please know your message is in good hands. We handle each case with the attention and care it deserves.

We look forward to speaking with you soon.

Warm regards,
Eszter Bardi
Attorney at Law | Bardi Immigration Law
[PHONE] | eszter@bardilaw.com

---

### ES

**Asunto:** Recibimos su mensaje — Bardi Immigration Law

Gracias por comunicarse con Bardi Immigration Law. Hemos recibido su consulta y nos pondremos en contacto con usted dentro de un día hábil.

Las preguntas migratorias pueden sentirse urgentes — y con frecuencia lo son. La abogada Eszter Bardi revisa personalmente cada consulta antes de responder, lo que significa que cuando hablemos por primera vez, ya estará familiarizada con su situación.

Por ahora, sepa que su mensaje está en buenas manos. Atendemos cada caso con la dedicación y el cuidado que merece.

Esperamos hablar con usted pronto.

Atentamente,
Eszter Bardi
Abogada de Inmigración | Bardi Immigration Law
[TELÉFONO] | eszter@bardilaw.com

---

## Email 2 — 24-Hour Follow-Up

_Trigger: sent 24 hours after Email 1 if attorney has not yet replied to the lead._

### EN

**Subject:** Still with you — checking in from Bardi Immigration Law

We wanted to follow up and let you know we haven't forgotten you. Attorney Bardi is reviewing your inquiry and will be in contact very soon.

If your situation feels time-sensitive or you'd prefer to speak sooner, you're welcome to call us directly at **[PHONE]**. We're here to help, and no question is too small to ask.

We appreciate your patience and look forward to connecting.

Eszter Bardi
Attorney at Law | Bardi Immigration Law
[PHONE] | eszter@bardilaw.com

---

### ES

**Asunto:** Seguimos aquí — un mensaje de Bardi Immigration Law

Queríamos comunicarnos para que sepa que no la hemos olvidado. La abogada Bardi está revisando su consulta y se pondrá en contacto con usted muy pronto.

Si su situación le parece urgente o prefiere hablar antes, no dude en llamarnos directamente al **[TELÉFONO]**. Estamos aquí para ayudarle, y ninguna pregunta es demasiado pequeña.

Agradecemos su paciencia y esperamos conectar pronto.

Eszter Bardi
Abogada de Inmigración | Bardi Immigration Law
[TELÉFONO] | eszter@bardilaw.com

---

## Email 3 — 3-Day Nurture

_Trigger: sent 3 days after form submission if no consultation has been booked._

### EN

**Subject:** A quick note about your immigration question

Navigating U.S. immigration is one of the most significant things a person can do for their family — and it's rarely straightforward. We understand that reaching out takes courage, and we don't take that lightly.

At Bardi Immigration Law, you work directly with Attorney Eszter Bardi from your first conversation to your final filing. No intake coordinators, no handoffs, no one reading from a script. Just one attorney who knows your case and is invested in your outcome.

If you're still considering your options, we'd welcome the chance to speak. You can reply to this email or call us at **[PHONE]** — no pressure, just a conversation.

We're here when you're ready.

Eszter Bardi
Attorney at Law | Bardi Immigration Law
[PHONE] | eszter@bardilaw.com

---

### ES

**Asunto:** Una nota rápida sobre su consulta migratoria

Navegar el sistema de inmigración de los Estados Unidos es una de las decisiones más importantes que una persona puede tomar para su familia — y rara vez es un proceso sencillo. Entendemos que dar el primer paso requiere valentía, y no lo tomamos a la ligera.

En Bardi Immigration Law, usted trabaja directamente con la abogada Eszter Bardi desde la primera conversación hasta la presentación final. Sin coordinadores de casos, sin transferencias, sin guiones. Solo una abogada que conoce su situación y está comprometida con su resultado.

Si todavía está evaluando sus opciones, nos encantaría tener la oportunidad de hablar. Puede responder a este correo o llamarnos al **[TELÉFONO]** — sin presión, solo una conversación.

Aquí estaremos cuando esté listo/a.

Eszter Bardi
Abogada de Inmigración | Bardi Immigration Law
[TELÉFONO] | eszter@bardilaw.com

---

## Word Counts

| Email | Language | Word Count | Limit |
|-------|----------|------------|-------|
| Email 1 | EN | ~130 | 100–150 |
| Email 1 | ES | ~128 | 100–150 |
| Email 2 | EN | ~84 | 80–100 |
| Email 2 | ES | ~82 | 80–100 |
| Email 3 | EN | ~117 | 100–120 |
| Email 3 | ES | ~113 | 100–120 |

## Deployment Notes

- Requires `RESEND_API_KEY` (tracked in [BAR-69](/BAR/issues/BAR-69))
- Phone placeholder `[PHONE]` / `[TELÉFONO]` — attorney to supply before go-live
- Email sender: `eszter@bardilaw.com` (or `info@bardilaw.com` pending attorney preference)
- Email 2 and Email 3 triggers require automation logic in the form handler or a drip service
