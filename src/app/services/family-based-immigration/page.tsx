import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Family-Based Immigration Attorney | Green Cards & Family Petitions',
  description:
    'Family-based green cards, I-130 petitions, naturalization, and adjustment of status. Direct attorney representation from petition to approval.',
  alternates: {
    canonical: 'https://bardilaw.com/services/family-based-immigration',
    languages: {
      en: 'https://bardilaw.com/services/family-based-immigration',
      es: 'https://bardilaw.com/es/services/family-based-immigration',
    },
  },
  openGraph: {
    title: 'Family-Based Immigration Attorney | Bardi Immigration Law',
    description: 'I-130 petitions, green cards, adjustment of status, and naturalization.',
    url: 'https://bardilaw.com/services/family-based-immigration',
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
    title: 'Family-Based Immigration Attorney | Bardi Immigration Law',
    description: 'I-130 petitions, green cards, adjustment of status, and naturalization.',
    images: ['/og-image.png'],
  },
};

export default function FamilyBasedPage() {
  return (
    <PracticeAreaLayout
      breadcrumbLabel="Family-Based Immigration"
      breadcrumbHref="/services/family-based-immigration"
      title="Family-Based Immigration"
      subhead="If you have a U.S. citizen or lawful permanent resident family member, you may have a path to a green card. We guide families through the full process, from the initial petition to lawful permanent residence and beyond."
      qualifyHeading="Who May Be Sponsored"
      qualifyBullets={[
        'Spouses of U.S. citizens (immediate relative, no visa wait)',
        'Unmarried children under 21 of U.S. citizens (immediate relative)',
        'Parents of U.S. citizens (immediate relative)',
        'Adult children of U.S. citizens (preference category)',
        'Siblings of U.S. citizens (preference category, longer wait)',
        'Spouses and children of lawful permanent residents (preference category)',
      ]}
      qualifyDisclaimer="This overview is for informational purposes only. Priority dates and processing times vary by category and country of birth. We assess current wait times at your consultation."
      processSteps={[
        { title: 'File Form I-130 (Petition for Alien Relative)', body: 'The sponsoring family member files a petition establishing the qualifying relationship. USCIS reviews and approves the petition.' },
        { title: 'Wait for visa availability (if applicable)', body: 'Immediate relatives of U.S. citizens do not wait for a visa number. Other family preference categories must wait until a visa number becomes available based on priority date and country of birth.' },
        { title: 'Adjustment of status or consular processing', body: 'If the beneficiary is in the U.S., they may file for adjustment of status (I-485). If abroad, the case proceeds through a U.S. consulate via the National Visa Center.' },
        { title: 'Medical examination and biometrics', body: 'USCIS or the consulate requires a medical examination by an approved civil surgeon, plus biometrics for identity verification.' },
        { title: 'Interview and green card issued', body: 'Most green card cases require an interview at USCIS or the consulate. If approved, the green card is issued, typically a 2-year conditional card for recent marriages, then a 10-year card.' },
      ]}
      helpsParagraph="Family-based immigration cases require precise paperwork and careful timing. Attorney Bardi manages every step, preparing complete and accurate petition packages, tracking priority dates, preparing you for your interview, and ensuring nothing falls through the cracks."
      helpsItems={[
        'I-130 petition preparation and filing',
        'Adjustment of status (I-485) packages',
        'Consular processing and NVC coordination',
        'Interview preparation and accompaniment where permitted',
        'Conditional green card removal of conditions (I-751)',
        'Naturalization (N-400) when eligible',
      ]}
      faqs={[
        { q: 'How long does the family-based green card process take?', a: 'Immediate relatives of U.S. citizens (spouses, children under 21, parents) have no wait for a visa number, cases typically take 12–24 months from filing. Other family categories can wait years depending on the category and country of birth. We provide current estimates at consultation.' },
        { q: 'My spouse is in the U.S. without status. Can they still get a green card?', a: 'In many cases, yes, spouses of U.S. citizens may be eligible for adjustment of status regardless of how they entered. However, there are exceptions and potential bars. We review your specific situation carefully before advising.' },
        { q: 'What is a conditional green card?', a: 'If a couple has been married for less than 2 years when the green card is approved, the beneficiary receives a 2-year conditional green card. Before it expires, the couple must file a joint petition (I-751) to remove the conditions and receive a full 10-year card.' },
        { q: 'When can I apply for citizenship?', a: 'Most green card holders can apply for naturalization after 5 years of permanent residence. Spouses of U.S. citizens may qualify after 3 years. We advise on eligibility at your consultation.' },
      ]}
      relatedAreas={[
        { href: '/services/waivers', label: 'Waivers', desc: 'I-601, I-212 & Other Waivers' },
        { href: '/services/vawa', label: 'VAWA', desc: 'Violence Against Women Act Petitions' },
        { href: '/services/removal-defense', label: 'Removal Defense', desc: 'Defense in Removal Proceedings' },
      ]}
      relatedArticles={[
        { href: '/blog/family-green-card-attorney-georgia', label: 'Green Card Through Family: A Complete Guide for Georgia Immigrants' },
        { href: '/blog/marriage-based-green-card-k1-fiance-visa-georgia', label: 'Marriage Green Card and K-1 Fiancé Visa: A Georgia Guide' },
      ]}
    />
  );
}
