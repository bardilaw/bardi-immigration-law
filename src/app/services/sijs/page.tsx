import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Special Immigrant Juvenile Status (SIJS) Attorney',
  description:
    'SIJS provides a path to a green card for abused, neglected, or abandoned children in the U.S. Bardi Immigration Law navigates both state court and federal immigration filings.',
  alternates: {
    canonical: 'https://bardilaw.com/services/sijs',
    languages: {
      en: 'https://bardilaw.com/services/sijs',
      es: 'https://bardilaw.com/es/services/sijs',
    },
  },
  openGraph: {
    title: 'SIJS Attorney | Special Immigrant Juvenile Status | Bardi Immigration Law',
    description:
      'Specialized, sensitive SIJS representation. State court + federal immigration filings.',
    url: 'https://bardilaw.com/services/sijs',
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
    title: 'SIJS Attorney | Special Immigrant Juvenile Status | Bardi Immigration Law',
    description: 'Specialized, sensitive SIJS representation. State court + federal immigration filings.',
    images: ['/og-image.png'],
  },
};

export default function SijsPage() {
  return (
    <PracticeAreaLayout
      breadcrumbLabel="SIJS"
      breadcrumbHref="/services/sijs"
      title="Special Immigrant Juvenile Status (SIJS)"
      subhead="A path to a green card for children who have been abused, neglected, or abandoned and cannot safely be reunited with one or both parents."
      qualifyHeading="Who May Qualify"
      qualifyBullets={[
        'You are under 21 years old and unmarried',
        'You are currently in the United States',
        'A state juvenile or family court has made findings of abuse, neglect, or abandonment',
        'Reunification with one or both parents is not viable due to abuse, neglect, or abandonment',
        'It is not in your best interest to be returned to your home country or country of last habitual residence',
      ]}
      qualifyDisclaimer="SIJS eligibility is fact-specific and requires both a state court process and federal immigration filings. Eligibility depends on the specific facts of your case."
      processSteps={[
        {
          title: 'State court proceedings',
          body: 'Obtain a Special Findings Order from a state juvenile or family court. This order must make specific findings about abuse, neglect, or abandonment and best interest.',
        },
        {
          title: 'File I-360 petition',
          body: 'Submit Form I-360 (Petition for Amerasian, Widow(er), or Special Immigrant) to USCIS with the state court findings and supporting documentation.',
        },
        {
          title: 'Wait for visa availability',
          body: 'SIJS is a preference category. Depending on your country of birth, a visa number may be immediately available or require waiting.',
        },
        {
          title: 'Adjustment of status',
          body: 'Once a visa number is available, file for adjustment of status (I-485) to become a lawful permanent resident.',
        },
        {
          title: 'Green card issued',
          body: 'If approved, you receive your green card, lawful permanent resident status in the United States.',
        },
      ]}
      helpsParagraph="SIJS cases require navigating both state court and federal immigration systems simultaneously. Attorney Bardi coordinates the legal work across both tracks, ensuring the required judicial findings are obtained and the federal petition is prepared correctly and filed on time. This work is sensitive, and we approach it with the care the children and families we serve deserve."
      helpsItems={[
        'State court coordination and SIJS findings preparation',
        'I-360 petition preparation and filing',
        'Adjustment of status (I-485) filing',
        'Representation through the full state and federal process',
        'Sensitive, confidential handling at every stage',
      ]}
      faqs={[
        {
          q: 'Can SIJS be used for children already in removal proceedings?',
          a: 'Yes. SIJS can be a defense to removal for eligible children. If a child has a pending removal case, we can pursue SIJS simultaneously and request a continuance in immigration court.',
        },
        {
          q: 'Does the child need to have a guardian or sponsor?',
          a: 'A state court proceeding requires that the child be under the jurisdiction of a juvenile or family court, which typically involves a guardian, foster placement, or dependency proceeding. We assess the child\'s specific situation at consultation.',
        },
        {
          q: 'How long does the SIJS process take?',
          a: 'The timeline varies. The state court process depends on the jurisdiction and docket. Federal processing of the I-360 takes several months. For some birth countries, adjustment of status can follow quickly; for others, there may be a wait for a visa number.',
        },
        {
          q: 'What if the child turns 21 during the process?',
          a: 'Age-out protections may apply. If an I-360 was filed before the child\'s 21st birthday, the child is generally protected from aging out during adjudication. We assess this carefully at the outset.',
        },
      ]}
      relatedAreas={[
        { href: '/services/daca', label: 'DACA', desc: 'Deferred Action for Childhood Arrivals' },
        { href: '/services/vawa', label: 'VAWA', desc: 'Violence Against Women Act Petitions' },
        { href: '/services/removal-defense', label: 'Removal Defense', desc: 'Defense in Removal Proceedings' },
      ]}
      relatedArticles={[
        { href: '/blog/deportation-defense-removal-proceedings-georgia', label: 'How Removal Proceedings Work in Georgia — and How to Fight Them' },
        { href: '/blog/family-green-card-attorney-georgia', label: 'Getting a Green Card Through Family in Georgia' },
      ]}
    />
  );
}
