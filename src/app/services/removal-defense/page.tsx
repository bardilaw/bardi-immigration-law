import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Removal Defense Attorney | Fight Deportation',
  description:
    'Facing removal or deportation proceedings? Bardi Immigration Law provides full removal defense, detained and non-detained.',
  alternates: {
    canonical: 'https://bardilaw.com/services/removal-defense',
    languages: {
      en: 'https://bardilaw.com/services/removal-defense',
      es: 'https://bardilaw.com/es/services/removal-defense',
    },
  },
  openGraph: {
    title: 'Removal Defense Attorney | Bardi Immigration Law',
    description: 'Full removal defense, detained and non-detained. Bond hearings, cancellation of removal, and complete representation.',
    url: 'https://bardilaw.com/services/removal-defense',
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
    title: 'Removal Defense Attorney | Bardi Immigration Law',
    description: 'Full removal defense, detained and non-detained. Bond hearings, cancellation of removal, and complete representation.',
    images: ['/og-image.png'],
  },
};

export default function RemovalDefensePage() {
  return (
    <PracticeAreaLayout
      breadcrumbLabel="Removal Defense"
      breadcrumbHref="/services/removal-defense"
      title="Removal Defense"
      subhead="If you have received a Notice to Appear or are in immigration detention, you need an attorney immediately. We provide full representation in removal proceedings, for detained and non-detained clients."
      qualifyHeading="When You Need Removal Defense"
      qualifyBullets={[
        'You have received a Notice to Appear (NTA) for immigration court',
        'You are currently in immigration detention',
        'You have been ordered removed in absentia (without appearing in court)',
        'You are facing reinstated removal based on a prior order',
        'ICE has issued a detainer or is attempting to arrest or deport you',
        'You have a final order of removal and need to explore options',
      ]}
      qualifyDisclaimer="Removal proceedings move quickly. If you have received any immigration court notice or been taken into custody, contact us immediately."
      processSteps={[
        { title: 'Emergency consultation', body: 'We assess your situation immediately, including whether you are detained, your court date, and the grounds for removal. Time is critical.' },
        { title: 'Bond hearing (if detained)', body: 'If you are in detention, we file for a bond hearing to request release. We argue for the lowest possible bond based on your ties to the community and flight-risk factors.' },
        { title: 'Master calendar hearing', body: 'This is an initial appearance before the immigration judge. We represent you, enter pleadings, and set the case for a full hearing.' },
        { title: 'Build the defense case', body: 'We identify every available defense, cancellation of removal, asylum, withholding, CAT protection, voluntary departure, adjustment of status, and build the strongest case for relief.' },
        { title: 'Individual merits hearing', body: 'We present your case before the immigration judge. We examine witnesses, introduce evidence, and make legal arguments for relief from removal.' },
        { title: 'Appeals if necessary', body: 'If the immigration judge denies relief, we assess BIA appeal options. If administrative remedies are exhausted, we evaluate federal court options.' },
      ]}
      helpsParagraph="Removal proceedings are adversarial, the government is seeking to deport you, and the rules are strict and unforgiving. Attorney Bardi brings full, experienced advocacy to your case, from the first bond hearing through the final decision. We fight."
      helpsItems={[
        'Emergency consultations and detained client representation',
        'Bond hearings and immigration detention advocacy',
        'Full merits hearing preparation and representation',
        'Cancellation of removal applications',
        'Asylum, withholding, and CAT protection claims',
        'BIA appeals and federal court options',
      ]}
      faqs={[
        { q: 'What is the difference between detained and non-detained removal defense?', a: 'Detained cases involve clients held in immigration detention while their case proceeds. Non-detained cases involve clients who are free but have a pending removal case in immigration court. Both require experienced representation, detained cases move faster and require bond hearing advocacy as well.' },
        { q: 'I missed my court date and received an in-absentia removal order. What can I do?', a: 'In-absentia orders can sometimes be reopened if you can show you did not receive proper notice or that exceptional circumstances prevented you from appearing. Contact us immediately, there are strict deadlines.' },
        { q: 'Can my family members be protected from removal too?', a: 'Certain forms of relief, like cancellation of removal, consider the impact on qualifying U.S. citizen or LPR family members. Derivative beneficiaries may also be eligible for protection in some cases. We assess the full family situation.' },
        { q: 'How long does a removal case take?', a: 'Immigration court backlogs mean non-detained cases often take years. Detained cases move much faster, sometimes within weeks. We advise on timeline at your consultation based on the specific court and your situation.' },
      ]}
      relatedAreas={[
        { href: '/services/federal-litigation', label: 'Federal Litigation', desc: 'Federal Court Immigration Cases' },
        { href: '/services/vawa', label: 'VAWA', desc: 'Violence Against Women Act Petitions' },
        { href: '/services/waivers', label: 'Waivers', desc: 'I-601, I-212 & Other Waivers' },
      ]}
      relatedArticles={[
        { href: '/blog/deportation-defense-removal-proceedings-georgia', label: 'How Removal Proceedings Work in Georgia — and How to Fight Them' },
        { href: '/blog/immigration-bond-hearing-georgia', label: 'Immigration Bond Hearings and ICE Detention in Georgia' },
      ]}
    />
  );
}
