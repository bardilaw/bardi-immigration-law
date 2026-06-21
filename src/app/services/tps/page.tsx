import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'TPS Attorney | Temporary Protected Status',
  description:
    'TPS registration and re-registration for nationals of designated countries. Deadlines are strict, do not miss yours. Attorney Bardi files proactively.',
  alternates: {
    canonical: 'https://bardilaw.com/services/tps',
    languages: {
      en: 'https://bardilaw.com/services/tps',
      es: 'https://bardilaw.com/es/services/tps',
    },
  },
  openGraph: {
    title: 'TPS Attorney | Bardi Immigration Law',
    description: 'TPS registration, re-registration, and work authorization for designated countries.',
    url: 'https://bardilaw.com/services/tps',
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
    title: 'TPS Attorney | Bardi Immigration Law',
    description: 'TPS registration, re-registration, and work authorization for designated countries.',
    images: ['/og-image.png'],
  },
};

export default function TpsPage() {
  return (
    <PracticeAreaLayout
      breadcrumbLabel="TPS"
      breadcrumbHref="/services/tps"
      title="Temporary Protected Status (TPS)"
      subhead="If you are from a country designated for Temporary Protected Status, you may be eligible for protection from removal and work authorization. TPS registration deadlines are strict, do not miss yours."
      qualifyBullets={[
        'You are a national of a country currently designated for TPS by the Secretary of Homeland Security',
        'You have been continuously physically present in the United States since the designation date',
        'You have been continuously residing in the United States since the required date',
        'You do not have disqualifying criminal convictions',
        'You file during an open registration or re-registration period',
      ]}
      qualifyDisclaimer="TPS designations and registration periods change. Contact us to confirm your country's current status and deadlines."
      processSteps={[
        { title: 'Confirm eligibility and open period', body: 'We verify your country\'s current TPS designation and whether a registration or re-registration window is open.' },
        { title: 'Gather documentation', body: 'Compile proof of nationality, continuous presence, and residence. We guide you through what is required for your specific country designation.' },
        { title: 'File Form I-821 and I-765', body: 'Submit the TPS application (I-821) and Employment Authorization application (I-765) together, with all supporting documents.' },
        { title: 'Biometrics appointment', body: 'USCIS schedules a biometrics appointment. We prepare you for what to expect.' },
        { title: 'TPS and EAD granted', body: 'If approved, you receive TPS status and a work permit (EAD) valid through the current designation period. We track your re-registration window.' },
      ]}
      helpsParagraph="TPS filings are time-sensitive and documentation-intensive. Attorney Bardi reviews your full situation, prepares your filing package completely, and tracks your re-registration windows, so you never miss a deadline."
      helpsItems={[
        'Eligibility evaluation and deadline confirmation',
        'Documentation gathering and review',
        'I-821 and I-765 preparation and filing',
        'Re-registration tracking and proactive renewal filings',
        'Response to any USCIS requests for evidence',
        'Direct attorney communication throughout',
      ]}
      faqs={[
        { q: 'What countries are currently designated for TPS?', a: 'TPS designations change based on country conditions. Current designated countries include (among others) El Salvador, Haiti, Honduras, Nepal, Nicaragua, Somalia, Sudan, South Sudan, Syria, Ukraine, and Venezuela. We confirm current status at your consultation.' },
        { q: 'Does TPS give me a path to a green card?', a: 'TPS itself does not provide a direct path to permanent residency. However, some TPS holders may be eligible for green cards through family relationships, employment, or other routes. We assess your options individually.' },
        { q: 'What if I missed a re-registration deadline?', a: 'Late re-registration may be possible during certain windows. If you missed a deadline, contact us immediately, there may still be options available depending on your situation.' },
        { q: 'Can I travel outside the United States on TPS?', a: 'TPS holders may be eligible for advance parole to travel abroad. However, travel carries risk. We advise you on whether travel is advisable given your specific situation before you book anything.' },
      ]}
      relatedAreas={[
        { href: '/services/daca', label: 'DACA', desc: 'Deferred Action for Childhood Arrivals' },
        { href: '/services/family-based-immigration', label: 'Family-Based', desc: 'Family Petitions & Green Cards' },
        { href: '/services/removal-defense', label: 'Removal Defense', desc: 'Defense in Removal Proceedings' },
      ]}
    />
  );
}
