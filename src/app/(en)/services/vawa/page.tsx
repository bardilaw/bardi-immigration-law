import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'VAWA Immigration Attorney | Violence Against Women Act Petitions',
  description:
    'VAWA self-petitions for survivors of abuse. File without notifying the abuser. Confidential, sensitive representation from day one.',
  alternates: {
    canonical: 'https://bardilaw.com/services/vawa',
    languages: {
      'x-default': 'https://bardilaw.com/services/vawa',
      en: 'https://bardilaw.com/services/vawa',
      es: 'https://bardilaw.com/es/services/vawa',
    },
  },
  openGraph: {
    title: 'VAWA Attorney | Bardi Immigration Law',
    description: 'VAWA self-petitions for abuse survivors. USCIS does not notify the abuser.',
    url: 'https://bardilaw.com/services/vawa',
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
    title: 'VAWA Attorney | Bardi Immigration Law',
    description: 'VAWA self-petitions for abuse survivors. USCIS does not notify the abuser.',
    images: ['/og-image.png'],
  },
};

export default function VawaPage() {
  return (
    <PracticeAreaLayout
      breadcrumbLabel="VAWA"
      breadcrumbHref="/services/vawa"
      title="VAWA, Violence Against Women Act Petitions"
      subhead="VAWA allows certain abuse survivors to self-petition for immigration status, without involving or alerting the abuser. USCIS does not contact the abusive family member when a VAWA petition is filed."
      qualifyBullets={[
        'You have experienced battery or extreme cruelty from a U.S. citizen or lawful permanent resident',
        'The abuser is your current or former spouse, parent, or adult child',
        'You have lived with the abuser at some point',
        'You are a person of good moral character',
        'VAWA protection extends to all survivors regardless of gender',
      ]}
      qualifyDisclaimer="This overview is for informational purposes only. All VAWA matters are handled with complete confidentiality."
      processSteps={[
        { title: 'Confidential evaluation', body: 'We assess your eligibility in a safe environment. No information is shared without your consent.' },
        { title: 'Gather evidence safely', body: 'We help compile evidence of the qualifying relationship, abuse, and good moral character, without alerting the abuser.' },
        { title: 'Prepare personal declaration', body: 'Attorney Bardi drafts your declaration to accurately present your situation to USCIS.' },
        { title: 'File Form I-360', body: 'Submit the VAWA self-petition to the USCIS Vermont Service Center, the only office processing VAWA petitions, with enhanced privacy protections.' },
        { title: 'Approval and next steps', body: 'If approved, you receive an I-360 approval and may pursue adjustment of status or other benefits depending on your situation.' },
      ]}
      helpsParagraph="VAWA petitions require careful, sensitive preparation. Attorney Bardi handles every aspect of your case with complete confidentiality, helping you gather documentation safely, drafting your personal declaration, and managing all USCIS communications directly."
      helpsItems={[
        'Confidential eligibility evaluation',
        'Safe evidence-gathering strategy',
        'Personal declaration drafting and review',
        'I-360 petition preparation and filing',
        'Coordination of follow-on immigration benefits',
        'Direct attorney communication throughout',
      ]}
      faqs={[
        { q: 'Will the abuser be notified that I filed?', a: 'No. USCIS maintains strict confidentiality in VAWA cases and will not contact the abuser or reveal that you filed.' },
        { q: 'Can men file VAWA petitions?', a: 'Yes. VAWA protections are available to all survivors regardless of gender.' },
        { q: 'What if I am no longer married to the abuser?', a: 'Former spouses may still qualify if the petition is filed within two years of a divorce connected to the abuse.' },
        { q: 'Does VAWA lead to a green card?', a: 'An approved I-360 can be a pathway to a green card through adjustment of status, provided a visa number is available. We assess your full situation at consultation.' },
      ]}
      relatedAreas={[
        { href: '/services/u-visa', label: 'U-Visa', desc: 'Protection for Crime Victims' },
        { href: '/services/family-based-immigration', label: 'Family-Based', desc: 'Family Petitions & Green Cards' },
        { href: '/services/removal-defense', label: 'Removal Defense', desc: 'Defense in Removal Proceedings' },
      ]}
      relatedArticles={[
        { href: '/blog/u-visa-vawa-crime-victims-georgia', label: 'U-Visa and VAWA: Immigration Protection for Crime Victims in Georgia' },
      ]}
    />
  );
}
