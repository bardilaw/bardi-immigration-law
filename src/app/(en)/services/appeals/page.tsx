import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Immigration Appeals Attorney | BIA & AAO Appeals',
  description:
    'Appeals of immigration decisions: BIA appeals from immigration court (Form EOIR-26), AAO appeals from USCIS denials (Form I-290B), and motions to reopen or reconsider. Deadlines are strict.',
  alternates: {
    canonical: 'https://bardilaw.com/services/appeals',
    languages: {
      'x-default': 'https://bardilaw.com/services/appeals',
      en: 'https://bardilaw.com/services/appeals',
      es: 'https://bardilaw.com/es/services/appeals',
    },
  },
  openGraph: {
    title: 'Immigration Appeals Attorney | Bardi Immigration Law',
    description: 'BIA and AAO appeals, motions to reopen and reconsider. A denial is not always the end of the road.',
    url: 'https://bardilaw.com/services/appeals',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bardi Immigration Law',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immigration Appeals Attorney | Bardi Immigration Law',
    description: 'BIA and AAO appeals, motions to reopen and reconsider. A denial is not always the end of the road.',
    images: ['/og-image.png'],
  },
};

export default function AppealsPage() {
  return (
    <PracticeAreaLayout
      breadcrumbLabel="Appeals"
      breadcrumbHref="/services/appeals"
      title="Immigration Appeals"
      subhead="A denial is not always the end of the road. If an immigration judge or USCIS decided against you, you may be able to appeal, but the deadlines are short and unforgiving. Act quickly."
      statusCalloutTitle="Deadlines are strict and rarely extended"
      statusCalloutBody="A BIA appeal from an immigration judge's decision must be received within 30 calendar days. An AAO appeal of a USCIS denial is generally due within 30 days (33 if the decision was mailed). Missing the deadline usually ends your options. If you have received an adverse decision, contact us immediately."
      qualifyHeading="When an Appeal May Be Available"
      qualifyBullets={[
        'An immigration judge denied your case or ordered you removed (appeal to the Board of Immigration Appeals)',
        'USCIS denied a petition or application that carries appeal rights (appeal to the Administrative Appeals Office)',
        'There is a legal or factual error in the decision, or important evidence was not properly considered',
        'New facts or evidence have come to light since the decision (motion to reopen) or the decision misapplied the law (motion to reconsider)',
      ]}
      qualifyDisclaimer="Not every decision is appealable, and the right tool, appeal, motion to reopen, or motion to reconsider, depends on what went wrong. We assess your decision and advise on the strongest route."
      processSteps={[
        { title: 'Review the decision and deadline', body: 'We read the full decision, identify the errors worth raising, and confirm the exact filing deadline. This is time-sensitive, so we move fast.' },
        { title: 'File the notice of appeal', body: 'We file the correct form, Form EOIR-26 for the BIA or Form I-290B for the AAO, within the deadline, preserving your right to be heard.' },
        { title: 'Prepare the legal brief', body: 'We draft a brief that frames the legal errors, cites controlling precedent, and explains why the decision should be reversed or remanded.' },
        { title: 'Record review and decision', body: 'The Board or office reviews the record and the briefing. It may affirm, reverse, or send the case back (remand) for further proceedings.' },
        { title: 'Further review if needed', body: 'If the BIA rules against you, the next step may be a petition for review in the federal Court of Appeals. We advise on whether that step makes sense for your case.' },
      ]}
      helpsParagraph="Appellate work is about precision: the right issues, the controlling law, and a record that supports your argument, all filed on time. Attorney Bardi handles appeals and motions with the rigor they demand, and is candid with you about the realistic odds before you commit."
      helpsItems={[
        'Analysis of the decision and identification of appealable errors',
        'Timely filing of the BIA (EOIR-26) or AAO (I-290B) appeal',
        'Persuasive legal briefing grounded in controlling precedent',
        'Motions to reopen (new facts or evidence) and motions to reconsider (legal error)',
        'Coordination with federal litigation when a petition for review is the next step',
        'Direct attorney communication throughout',
      ]}
      faqs={[
        { q: 'How long do I have to appeal?', a: 'A BIA appeal from an immigration judge\'s decision must be received within 30 calendar days of the decision, this is a receipt deadline, not a postmark deadline. An AAO appeal of a USCIS denial is generally due within 30 days (33 if the decision was mailed). Because these windows are short and rarely extended, contact us the moment you receive a denial.' },
        { q: 'What is the difference between an appeal and a motion to reopen?', a: 'An appeal argues that the decision was wrong based on the existing record. A motion to reopen asks the same body to look again because of new facts or evidence, and a motion to reconsider argues the decision misapplied the law. The right tool depends on what went wrong; sometimes more than one is appropriate.' },
        { q: 'Does filing a BIA appeal stop my removal?', a: 'A timely appeal to the Board of Immigration Appeals generally stays (pauses) the removal order while the appeal is pending. That is one reason filing on time is so important, we make sure the appeal is filed correctly and within the deadline.' },
        { q: 'What if the BIA denies my appeal?', a: 'A BIA denial is often not the final word. You may be able to file a petition for review with the federal Court of Appeals for your circuit. We evaluate whether federal review is worthwhile and, when it is, can take the case forward.' },
      ]}
      relatedAreas={[
        { href: '/services/removal-defense', label: 'Removal Defense', desc: 'Defense in Removal Proceedings' },
        { href: '/services/federal-litigation', label: 'Federal Litigation', desc: 'Habeas Corpus & Mandamus in Federal Court' },
        { href: '/services/waivers', label: 'Waivers', desc: 'I-601 / I-601A Inadmissibility Waivers' },
      ]}
      relatedArticles={[
        { href: '/blog/bia-appeal-immigration-court-georgia', label: 'Appealing an Immigration Court Decision to the BIA' },
        { href: '/blog/motion-to-reopen-reconsider-immigration-georgia', label: 'Motions to Reopen and Reconsider in Immigration Cases' },
      ]}
    />
  );
}
