// Single source of truth for the /faq and /es/faq pages.
// Body Q&A stays in English for both locales (per BAR-611); only the category
// headers differ. The FAQPage JSON-LD on each page is generated from FAQ_ITEMS
// so the structured data can never drift from the visible copy.
//
// Source content: deliverables/FAQ-PAGE.md (BAR-567). Internal
// "⚠️ ATTORNEY REVIEW REQUIRED" notes from that doc are intentionally omitted
// here, they are editorial instructions for Eszter, not public copy.

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  /** English heading. */
  title: string;
  /** Spanish heading (body answers stay English). */
  titleEs: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: 'DACA (Deferred Action for Childhood Arrivals)',
    titleEs: 'DACA (Acción Diferida para los Llegados en la Infancia)',
    items: [
      {
        q: 'Can I still renew my DACA? What documents do I need?',
        a: 'If you currently have DACA, you can generally still file to renew it. To renew, you typically file Form I-821D and Form I-765 (work permit), along with the filing fee, a copy of your current work permit (EAD), and any new documents about arrests or immigration court if your situation has changed. We recommend filing your renewal early, about 5 to 6 months before your current DACA expires, so you do not lose work authorization.',
      },
      {
        q: 'Can DACA holders travel internationally?',
        a: 'Only if you apply for and receive "Advance Parole" before you leave. Advance Parole is special permission (Form I-131) to travel and return, usually granted for work, school, or urgent humanitarian reasons. Do not leave the United States without it, traveling without Advance Parole can end your DACA and may keep you from returning.',
      },
      {
        q: 'What happens if my DACA expires before I can renew?',
        a: 'If your DACA lapses, you lose your protection from removal and your permission to work until it is renewed and approved. A short gap can sometimes still be filed as a renewal, but longer gaps may be treated differently and create more risk. This is why we file early, talk to an attorney as soon as possible if your DACA is close to expiring or already has.',
      },
    ],
  },
  {
    title: 'Green Card / Permanent Residency',
    titleEs: 'Tarjeta Verde / Residencia Permanente',
    items: [
      {
        q: 'How long does a family-based green card take?',
        a: 'It depends on your relationship to the U.S. petitioner and what country you are from. Spouses, parents, and unmarried minor children of U.S. citizens ("immediate relatives") usually move fastest, often around 12 to 18 months. Other family categories, like siblings or adult children, can take several years because of annual limits and waiting lists. We will give you a realistic timeline for your specific case at your consultation.',
      },
      {
        q: 'What is the difference between adjustment of status and consular processing?',
        a: 'Both are paths to a green card, the difference is where you finish the process. Adjustment of status is done inside the United States when you are already here and eligible, so you do not have to leave. Consular processing is done at a U.S. embassy or consulate in another country when you are abroad or not eligible to adjust here. Which one applies to you depends on how you entered, your immigration history, and your category.',
      },
      {
        q: 'Can I get a green card through my U.S. citizen spouse?',
        a: 'In most cases, yes. The spouse of a U.S. citizen is an "immediate relative," which means there is no yearly cap and no long waiting list for a visa to become available. The process still requires proving your marriage is real and showing you are admissible, and your immigration history can affect whether you adjust here or process abroad. An attorney can review your situation and flag any issues before you file.',
      },
      {
        q: 'Do I have to leave the United States to get my green card?',
        a: 'Not always. If you are already in the U.S. and eligible to adjust status, you can often complete the entire process here without leaving. Some situations do require travel to a U.S. consulate abroad, and in certain cases a waiver is needed first to avoid being barred from returning. Because leaving at the wrong time can trigger serious penalties, get advice before you make travel plans.',
      },
    ],
  },
  {
    title: 'Asylum',
    titleEs: 'Asilo',
    items: [
      {
        q: 'What is the one-year filing deadline for asylum?',
        a: 'The general rule is that you must apply for asylum within one year of your last arrival in the United States. There are exceptions, for example, if conditions in your home country changed or something outside your control caused the delay, but they are limited and must be proven. If you are close to or past one year, do not assume you are out of options; speak with an attorney quickly.',
      },
      {
        q: 'Can I apply for asylum if I entered without papers?',
        a: 'Yes. How you entered the country does not, by itself, stop you from applying for asylum. What matters is whether you fear harm in your home country based on your race, religion, nationality, political opinion, or membership in a particular social group. Your entry and immigration history can still affect your case, so it is important to review the details with an attorney.',
      },
      {
        q: 'What happens at an asylum interview?',
        a: 'If your case is with the asylum office (an "affirmative" case), you attend an interview with an asylum officer. The interview is meant to be non-adversarial, the officer asks about who you are, why you left your country, and what you fear if you return. You can bring an attorney and an interpreter, and the officer reviews your application and supporting documents. Being well-prepared and consistent is critical, which is why many people work with an attorney beforehand.',
      },
    ],
  },
  {
    title: 'Removal Defense (Immigration Court)',
    titleEs: 'Defensa contra la Deportación (Corte de Inmigración)',
    items: [
      {
        q: 'I received a Notice to Appear. What do I do now?',
        a: 'A Notice to Appear (NTA) is the document that starts your case in immigration court, take it seriously and do not ignore it. Read it for your hearing date and location, and contact an immigration attorney as soon as possible. Missing a court hearing can result in a removal order entered against you even if you were not there. The sooner you have representation, the more options you are likely to have.',
      },
      {
        q: 'What is cancellation of removal and who qualifies?',
        a: 'Cancellation of removal is a form of relief that can let certain people in removal proceedings keep or obtain lawful status instead of being deported. The requirements are strict and differ depending on whether you are a green card holder or not, they generally involve a long period of continuous time in the U.S., good moral character, and, for non-residents, proving that your removal would cause exceptional hardship to a U.S. citizen or permanent-resident family member. Whether you qualify is very fact-specific, so an attorney should review your history.',
      },
      {
        q: 'Can I stay in the U.S. while my case is pending?',
        a: 'In most situations, yes, while your case is still in front of the immigration court and you are attending your hearings, your case has not been decided and you are generally allowed to remain. Some cases also allow you to apply for a work permit while you wait. It is essential to attend every hearing and follow the court’s instructions, because missing a date can lead to a removal order.',
      },
    ],
  },
  {
    title: 'General',
    titleEs: 'General',
    items: [
      {
        q: 'How much does immigration legal help cost?',
        a: 'Costs vary depending on the type of case and how complex it is. Many immigration matters are handled on a flat-fee basis, so you know the cost up front rather than paying by the hour. The best first step is a consultation, where your attorney reviews your situation and explains the fees for your specific case before you commit to anything.',
      },
      {
        q: 'Do I need a lawyer, or can I file on my own?',
        a: 'Some people do file simple applications on their own, and there is no law requiring an attorney. But immigration is high-stakes, a small mistake on a form, a missed deadline, or a misunderstood question can cause long delays or even a denial that is hard to fix. An attorney makes sure your case is filed correctly the first time and spots problems before they become emergencies. At minimum, a consultation can tell you whether your case is straightforward or one that really needs professional help.',
      },
      {
        q: 'Can you help me if I live in another state?',
        a: 'Yes. Because immigration law is federal, Bardi Immigration Law can represent clients in immigration matters no matter where they live in the United States. If you are unsure whether we can help with your case, just ask during your consultation.',
      },
      {
        q: 'Will I work with an actual attorney, or with support staff?',
        a: 'You work directly with your attorney. At Bardi Immigration Law, your case starts with an attorney consultation, not an intake specialist, and that personal involvement continues through your case. We are a boutique practice on purpose, so your case gets real attention rather than being passed down a line.',
      },
      {
        q: 'Do you offer services in Spanish?',
        a: 'Yes. We provide consultations and services in Spanish so you can explain your situation and understand your options clearly in your own language. Immigration decisions are too important to be lost in translation. Let us know your preferred language when you reach out.',
      },
      {
        q: 'How do I get started?',
        a: 'The first step is to book a consultation. You will speak directly with your attorney, explain your situation, get straightforward answers, and learn your options before you commit to anything. You can request a consultation through the contact form on this site or by phone.',
      },
      {
        q: 'What information should I bring to my first consultation?',
        a: 'Bring any immigration documents you already have, passports, prior applications or receipts, work permits, and anything you have received from USCIS or immigration court (especially a Notice to Appear or any letter with a deadline). A short written timeline of your immigration history is also helpful. Do not worry if you are missing something; your attorney will tell you what is needed.',
      },
      {
        q: 'My case feels urgent, how fast can I be seen?',
        a: 'Some immigration matters are genuinely time-sensitive, such as an upcoming court date, a filing deadline, or a detained family member. If you are facing a deadline, say so clearly when you contact us so your request can be prioritized.',
      },
      {
        q: 'Is what I tell the attorney confidential?',
        a: 'Yes. Conversations with your attorney about your case are confidential and protected. You should feel safe being honest about your full history, including anything you are worried about, because your attorney can only protect you if they know the complete picture. Confidentiality applies whether or not you ultimately hire the firm.',
      },
    ],
  },
  {
    // BAR-697 row 28 (Eszter feedback). Her supplied answers kept verbatim;
    // unanswered items drafted in the firm's educational/non-advice voice for her review.
    title: 'About the Firm',
    titleEs: 'Sobre el Despacho',
    items: [
      {
        q: 'Is there a set fee schedule?',
        a: 'No. Every case is different, so rather than a fixed price list we provide a quote tailored to your specific situation. After your consultation you will know the cost for your matter before you decide to move forward.',
      },
      {
        q: 'Can I pay in installments?',
        a: 'Yes. We understand that immigration cases are a significant investment, and we offer flexible payment plans worked around your specific needs. We will discuss the options with you at your consultation.',
      },
      {
        q: 'How much is a consultation?',
        a: 'Your initial consultation is free. You can speak directly with an attorney about your situation at no cost — call us today to schedule.',
      },
      {
        q: 'How will I communicate with my attorney?',
        a: 'You work directly with your attorney, not an intake line. We keep you updated at each major step of your case and are reachable by phone and email for your questions. At your consultation we will explain the best way to reach us and what to expect along the way.',
      },
      {
        q: 'Where can I check my case status?',
        a: 'We keep you informed as your case moves forward, and you can always reach out to us for an update. You can also check directly with the government: USCIS case status at egov.uscis.gov, and your next immigration court hearing date through the EOIR Automated Case Information system at acis.eoir.justice.gov.',
      },
      {
        q: 'How long will my case take?',
        a: 'It varies. Immigration timelines depend on the type of case, the government agency involved, and current processing backlogs — some matters resolve in a few months, others take years. At your consultation we will give you a realistic timeline for your specific case.',
      },
    ],
  },
  {
    // BAR-697 row 29 (Eszter feedback). Eszter supplied questions only;
    // answers drafted in the firm's educational/non-advice voice for attorney review.
    title: 'Common Immigration Questions',
    titleEs: 'Preguntas Comunes de Inmigración',
    items: [
      {
        q: 'What kind of documents do I need for my waiver case?',
        a: 'It depends on which waiver you are filing, but most waiver cases rely on evidence of hardship to a qualifying U.S. citizen or permanent-resident relative — for example medical records, financial documents, country-condition evidence, and proof of close family ties. Each waiver has its own requirements, so we will give you a document checklist tailored to your case after reviewing your situation.',
      },
      {
        q: 'Who qualifies for adjustment of status through marriage?',
        a: 'Generally, the spouse of a U.S. citizen who entered the country lawfully and is otherwise admissible can apply to adjust status to a green card from inside the United States. Eligibility depends on how you entered, your immigration history, and proving the marriage is genuine. An attorney can confirm whether you qualify to adjust here or must process at a consulate abroad.',
      },
      {
        q: 'What are helpful documents for an immigration bond case?',
        a: 'Bond cases generally turn on showing strong community ties and that you are not a flight risk or a danger. Helpful evidence often includes proof of address, family relationships (especially U.S. citizen or permanent-resident relatives), employment and tax records, and letters of support from your community. The right mix depends on your situation, and we can help you assemble a strong bond packet.',
      },
      {
        q: 'When is federal litigation needed?',
        a: 'Federal litigation may be appropriate when USCIS unreasonably delays a decision (a mandamus lawsuit), when an application is wrongly denied, or when a legal or constitutional violation needs review in federal court. It is not the right tool for every situation, so we evaluate whether it fits before recommending it.',
      },
      {
        q: 'How do I calculate whether my financial sponsor qualifies?',
        a: 'A financial sponsor generally must show household income at or above 125% of the federal poverty guidelines for their household size — the standard published on USCIS Form I-864P. You can get a quick estimate with the free I-864P Sponsor Calculator on our Resources page. We will also help you work through this calculation and review the financial documents needed to prove it. Call us today and we can walk you through whether your sponsor qualifies.',
      },
    ],
  },
];

/** Flat list of every Q&A, used to build the FAQPage JSON-LD. */
export const FAQ_ITEMS: FaqItem[] = FAQ_CATEGORIES.flatMap((c) => c.items);

/** schema.org FAQPage block generated from the visible Q&A (no drift). */
export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export const FAQ_DISCLAIMER =
  'The information on this page is general and for educational purposes only. It is not legal advice and does not create an attorney–client relationship. Immigration law changes often and every case is different. For advice about your specific situation, please schedule a consultation with an attorney.';

export const FAQ_DISCLAIMER_ES =
  'La información en esta página es general y solo para fines educativos. No es asesoría legal y no crea una relación abogado–cliente. La ley de inmigración cambia con frecuencia y cada caso es diferente. Para asesoría sobre su situación específica, por favor programe una consulta con una abogada.';
