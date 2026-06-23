import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Consular Processing Attorney | Immigrant Visa Interviews',
  description:
    'Consular processing for family- and employment-based immigrants applying for an immigrant visa abroad. NVC, DS-260, Affidavit of Support, and interview preparation.',
  alternates: {
    canonical: 'https://bardilaw.com/services/consular-processing',
    languages: {
      'x-default': 'https://bardilaw.com/services/consular-processing',
      en: 'https://bardilaw.com/services/consular-processing',
      es: 'https://bardilaw.com/es/services/consular-processing',
    },
  },
  openGraph: {
    title: 'Consular Processing Attorney | Bardi Immigration Law',
    description: 'Immigrant visa processing through a U.S. consulate abroad: NVC, DS-260, Affidavit of Support, and interview prep.',
    url: 'https://bardilaw.com/services/consular-processing',
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
    title: 'Consular Processing Attorney | Bardi Immigration Law',
    description: 'Immigrant visa processing through a U.S. consulate abroad: NVC, DS-260, Affidavit of Support, and interview prep.',
    images: ['/og-image.png'],
  },
};

export default function ConsularProcessingPage() {
  return (
    <PracticeAreaLayout
      breadcrumbLabel="Consular Processing"
      breadcrumbHref="/services/consular-processing"
      title="Consular Processing"
      subhead="When the person you are sponsoring lives outside the United States, the green card is issued through a U.S. consulate abroad. Consular processing is document-intensive and the interview is decisive, careful preparation matters."
      qualifyBullets={[
        'You are the beneficiary of an approved or pending family-based (I-130) or employment-based (I-140) petition',
        'You are currently outside the United States, or you are inside the U.S. but choosing to process abroad',
        'An immigrant visa is available to you (your priority date is current on the Visa Bulletin, if applicable)',
        'You are admissible to the United States, or eligible for a waiver of any ground of inadmissibility',
      ]}
      qualifyDisclaimer="Whether you should pursue consular processing or adjustment of status depends on your specific situation. We help you choose the right path before you file."
      processSteps={[
        { title: 'Petition approval', body: 'The underlying petition (I-130 or I-140) is approved by USCIS and forwarded to the Department of State\'s National Visa Center (NVC).' },
        { title: 'NVC case creation and fees', body: 'The NVC opens your case, assigns a case number, and collects the immigrant visa and Affidavit of Support fees.' },
        { title: 'DS-260 and civil documents', body: 'We prepare the DS-260 immigrant visa application and assemble civil documents (birth, marriage, police certificates) and the Form I-864 Affidavit of Support with financial evidence.' },
        { title: 'Documentarily complete', body: 'The NVC reviews your submission. Once it is complete, your case is placed in line for an interview at the designated consulate.' },
        { title: 'Medical exam and interview', body: 'You complete the medical exam with an authorized panel physician and attend the immigrant visa interview. We prepare you thoroughly for what the officer will ask.' },
        { title: 'Visa issued and entry', body: 'If approved, the immigrant visa is placed in your passport. You travel to the U.S., are admitted as a permanent resident, and your green card follows by mail.' },
      ]}
      helpsParagraph="A consular case can stall for months over a single missing document or be denied over an unaddressed ground of inadmissibility. Attorney Bardi manages your case end to end, anticipates inadmissibility issues before the interview, and prepares you so nothing at the consulate comes as a surprise."
      helpsItems={[
        'Choosing between consular processing and adjustment of status',
        'NVC case management, fees, and document review',
        'DS-260 preparation and civil document assembly',
        'Form I-864 Affidavit of Support and joint-sponsor strategy',
        'Inadmissibility analysis and waiver filings (I-601 / I-601A) when needed',
        'Interview preparation and direct attorney communication throughout',
      ]}
      faqs={[
        { q: 'What is the difference between consular processing and adjustment of status?', a: 'Adjustment of status lets eligible applicants already in the U.S. get a green card without leaving. Consular processing is for applicants who are abroad (or who choose to process abroad), and it ends with an interview at a U.S. consulate in their home country. Which path is right depends on how you entered, where you are, and your inadmissibility profile, we walk you through it.' },
        { q: 'What is the National Visa Center (NVC)?', a: 'The NVC is the Department of State office that handles your case after USCIS approves the petition and before the consulate schedules your interview. It collects fees, the DS-260, and your supporting documents, then forwards the case to the consulate once it is complete.' },
        { q: 'How long does consular processing take?', a: 'Timelines vary by visa category, your priority date, and the workload at your consulate. Immediate-relative cases generally move faster than preference categories that wait for a visa number. We give you a realistic estimate for your specific situation.' },
        { q: 'What if I am found inadmissible at the interview?', a: 'Certain grounds, such as unlawful presence, can be overcome with a waiver. In many cases a provisional waiver (I-601A) can be approved before you leave the U.S., reducing the time you spend abroad. We assess inadmissibility risk before you go, not after.' },
      ]}
      relatedAreas={[
        { href: '/services/family-based-immigration', label: 'Family-Based', desc: 'I-130 Petitions & Green Cards' },
        { href: '/services/waivers', label: 'Waivers', desc: 'I-601 / I-601A Inadmissibility Waivers' },
        { href: '/services/removal-defense', label: 'Removal Defense', desc: 'Defense in Removal Proceedings' },
      ]}
      relatedArticles={[
        { href: '/blog/visa-bulletin-priority-dates-family-green-card', label: 'Visa Bulletin & Priority Dates for Family Green Cards' },
        { href: '/blog/affidavit-of-support-i-864-income-requirements', label: 'The I-864 Affidavit of Support: Income Requirements' },
      ]}
    />
  );
}
