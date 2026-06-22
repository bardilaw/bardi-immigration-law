import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Federal Immigration Litigation Attorney | Habeas Corpus & Mandamus',
  description:
    'When administrative options run out, Bardi Immigration Law takes your case to federal court. Habeas corpus petitions, mandamus actions, and APA challenges.',
  alternates: {
    canonical: 'https://bardilaw.com/services/federal-litigation',
    languages: {
      en: 'https://bardilaw.com/services/federal-litigation',
      es: 'https://bardilaw.com/es/services/federal-litigation',
    },
  },
  openGraph: {
    title: 'Federal Immigration Litigation | Bardi Immigration Law',
    description: 'Federal court immigration cases: habeas corpus, mandamus, APA. When the administrative process fails you, we take it to court.',
    url: 'https://bardilaw.com/services/federal-litigation',
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
    title: 'Federal Immigration Litigation | Bardi Immigration Law',
    description: 'Federal court immigration cases: habeas corpus, mandamus, APA. When the administrative process fails you, we take it to court.',
    images: ['/og-image.png'],
  },
};

export default function FederalLitigationPage() {
  return (
    <PracticeAreaLayout
      breadcrumbLabel="Federal Litigation"
      breadcrumbHref="/services/federal-litigation"
      title="Federal Litigation"
      subhead="When the administrative immigration process has failed you, final removal orders, unreasonably delayed applications, unlawful detention, federal court is often the last available remedy. We take cases there."
      qualifyHeading="When Federal Litigation May Apply"
      qualifyBullets={[
        'You have a final order of removal and have exhausted administrative appeals',
        'USCIS has unreasonably delayed adjudicating your application (mandamus)',
        'You are in prolonged immigration detention without a bond hearing (habeas corpus)',
        'A government decision violated the law or your constitutional rights',
        'You need to challenge a BIA decision in the federal court of appeals',
      ]}
      qualifyDisclaimer="Federal litigation involves complex procedural rules and strict deadlines. Contact us immediately if you believe federal court action may be necessary."
      processSteps={[
        { title: 'Case assessment', body: 'We review the full administrative record, identify the legal theory, and assess the realistic prospects and costs of federal litigation.' },
        { title: 'Identify the right court and claim', body: 'Depending on the issue, the appropriate court may be a district court (habeas, mandamus), a circuit court of appeals (removal order review), or another forum.' },
        { title: 'File the petition or complaint', body: 'We draft and file the petition, motion, or complaint with the appropriate federal court, along with any request for emergency relief or stay of removal.' },
        { title: 'Briefing and argument', body: 'Federal litigation involves written briefs, often oral argument, and can span months or years. We represent you through every stage.' },
        { title: 'Decision and follow-up', body: 'We advise on the decision\'s implications and, if successful, coordinate any follow-on administrative proceedings.' },
      ]}
      helpsParagraph="Federal immigration litigation requires a different skill set than administrative practice, knowledge of federal procedural rules, constitutional law, and circuit-specific precedent. Attorney Bardi brings that expertise to cases where the administrative process has failed."
      helpsItems={[
        'Habeas corpus petitions for unlawful or prolonged detention',
        'Mandamus actions for unreasonably delayed USCIS adjudications',
        'BIA petition for review in the federal courts of appeals',
        'APA challenges to unlawful agency action',
        'Emergency stays of removal',
        'Full briefing and argument through final decision',
      ]}
      faqs={[
        { q: 'What is a mandamus action?', a: 'A writ of mandamus is a federal court order compelling an agency to perform a non-discretionary duty. In immigration, mandamus is used when USCIS or another agency has unreasonably delayed adjudicating an application that has been pending for an unusually long time.' },
        { q: 'What is habeas corpus in an immigration context?', a: 'Habeas corpus is a legal challenge to unlawful detention. Immigration detainees may file a habeas petition in federal district court when they are held in prolonged detention without a bond hearing, or when their detention is otherwise unlawful.' },
        { q: 'Can a federal court overturn a removal order?', a: 'A federal court of appeals can review a final order of removal for legal error. If the BIA made an error of law, the court can vacate the removal order and remand for further proceedings. Courts generally cannot reverse factual findings, only legal errors.' },
        { q: 'How long does federal litigation take?', a: 'It varies by court and type of case. A mandamus action may resolve in a few months if it prompts USCIS to act. A petition for review in the court of appeals may take 1–3 years or more. We advise on realistic timelines at the outset.' },
      ]}
      relatedAreas={[
        { href: '/services/removal-defense', label: 'Removal Defense', desc: 'Defense in Removal Proceedings' },
        { href: '/services/waivers', label: 'Waivers', desc: 'I-601, I-212 & Other Waivers' },
        { href: '/services/family-based-immigration', label: 'Family-Based', desc: 'Family Petitions & Green Cards' },
      ]}
      relatedArticles={[
        { href: '/blog/deportation-defense-removal-proceedings-georgia', label: 'How Removal Proceedings Work in Georgia — and How to Fight Them' },
        { href: '/blog/immigration-bond-hearing-georgia', label: 'Immigration Bond Hearings and ICE Detention in Georgia' },
      ]}
    />
  );
}
