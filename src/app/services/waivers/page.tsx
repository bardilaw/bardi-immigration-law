import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Immigration Waivers Attorney Georgia | I-601, I-212, I-929',
  description:
    'Immigration waivers for unlawful presence, prior removal, and derivative waivers. Attorney Bardi builds the strongest possible waiver application for your case.',
  alternates: {
    canonical: 'https://bardilaw.com/services/waivers',
    languages: {
      en: 'https://bardilaw.com/services/waivers',
      es: 'https://bardilaw.com/es/services/waivers',
    },
  },
  openGraph: {
    title: 'Immigration Waivers Attorney Georgia | Bardi Immigration Law',
    description: 'I-601, I-212, and I-929 waiver preparation. Serving GA, AL, NC, SC.',
    url: 'https://bardilaw.com/services/waivers',
  },
};

export default function WaiversPage() {
  return (
    <PracticeAreaLayout
      breadcrumbLabel="Waivers"
      breadcrumbHref="/services/waivers"
      title="Immigration Waivers"
      subhead="A waiver asks the government to forgive a ground of inadmissibility that would otherwise bar you from obtaining a visa or green card. Whether the bar is unlawful presence, a prior removal, or something else — a well-built waiver application is your path forward."
      qualifyHeading="Common Waivers We Handle"
      qualifyBullets={[
        'I-601 (Unlawful Presence Waiver) — for individuals who accrued unlawful presence and are seeking a visa or green card',
        'I-601A (Provisional Unlawful Presence Waiver) — allows eligible individuals to apply for a waiver before departing the U.S.',
        'I-212 (Permission to Reapply After Removal) — for individuals who were previously removed or deported',
        'I-929 (Derivative Waiver) — for qualifying family members of U-Visa holders',
        'Other inadmissibility waivers based on specific grounds',
      ]}
      qualifyDisclaimer="Waiver eligibility and strategy depend heavily on the specific ground of inadmissibility and the facts of your case. Attorney Bardi reviews your full history before advising on waiver options."
      processSteps={[
        { title: 'Full case evaluation', body: 'We review your immigration history, grounds of inadmissibility, and qualifying relatives to determine which waiver(s) apply and the strength of your case.' },
        { title: 'Gather extreme hardship evidence', body: 'Most waivers require showing "extreme hardship" to a qualifying U.S. citizen or LPR family member. We help you build the strongest possible hardship case — financial, medical, emotional, and country-conditions evidence.' },
        { title: 'Draft the waiver package', body: 'A thorough waiver package includes a legal brief, personal statements, supporting declarations, and documentary evidence. We prepare every component.' },
        { title: 'File with USCIS or at consulate', body: 'Depending on the waiver type, filing may occur with USCIS stateside, at a consular post, or in advance of a consular interview.' },
        { title: 'Decision and next steps', body: 'If approved, you proceed with the underlying immigration benefit. If denied, we assess appeal and reconsideration options.' },
      ]}
      helpsParagraph="Waivers live or die on the quality of the hardship evidence and the legal brief. Attorney Bardi has built waiver packages for complex cases — including those with multiple grounds of inadmissibility and lengthy unlawful presence. We leave nothing on the table."
      helpsItems={[
        'Full inadmissibility analysis and strategy',
        'Extreme hardship evidence gathering and framing',
        'Legal brief and personal statement drafting',
        'Supporting declaration coordination',
        'Filing and USCIS/consular coordination',
        'Response to requests for evidence or additional materials',
      ]}
      faqs={[
        { q: 'What is "extreme hardship" and how do I prove it?', a: '"Extreme hardship" means hardship beyond what is normally expected from a family member\'s removal or departure. It must be shown to a qualifying U.S. citizen or LPR relative. Evidence can include financial dependence, medical conditions, country-conditions reports, children\'s needs, and more. A strong hardship case is built — not found.' },
        { q: 'How long does a waiver take?', a: 'I-601A provisional waivers typically take 6–12 months to adjudicate. Other waivers vary. We provide current estimates at your consultation.' },
        { q: 'What if my waiver is denied?', a: 'Waiver denials can often be appealed or refiled with stronger evidence. We assess the denial notice, identify the reason, and advise on the best path forward.' },
        { q: 'Can I stay in the U.S. while the waiver is pending?', a: 'It depends on the waiver type. I-601A provisional waivers are designed to allow applicants to remain in the U.S. until the waiver is approved before departing for a consular interview. We structure the process to minimize your time outside the country.' },
      ]}
      relatedAreas={[
        { href: '/services/family-based-immigration', label: 'Family-Based', desc: 'Family Petitions & Green Cards' },
        { href: '/services/removal-defense', label: 'Removal Defense', desc: 'Defense in Removal Proceedings' },
        { href: '/services/federal-litigation', label: 'Federal Litigation', desc: 'Federal Court Immigration Cases' },
      ]}
    />
  );
}
