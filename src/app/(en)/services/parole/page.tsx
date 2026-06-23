import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Parole Attorney | Parole-in-Place & Advance Parole',
  description:
    'Parole-in-Place for military families and Advance Parole travel documents for applicants with pending cases (adjustment of status, DACA, TPS). Form I-131, handled by an immigration attorney.',
  alternates: {
    canonical: 'https://bardilaw.com/services/parole',
    languages: {
      'x-default': 'https://bardilaw.com/services/parole',
      en: 'https://bardilaw.com/services/parole',
      es: 'https://bardilaw.com/es/services/parole',
    },
  },
  openGraph: {
    title: 'Parole Attorney | Bardi Immigration Law',
    description: 'Parole-in-Place for military families and Advance Parole travel documents. Form I-131.',
    url: 'https://bardilaw.com/services/parole',
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
    title: 'Parole Attorney | Bardi Immigration Law',
    description: 'Parole-in-Place for military families and Advance Parole travel documents. Form I-131.',
    images: ['/og-image.png'],
  },
};

export default function ParolePage() {
  return (
    <PracticeAreaLayout
      breadcrumbLabel="Parole-in-Place & Advance Parole"
      breadcrumbHref="/services/parole"
      title="Parole-in-Place & Advance Parole"
      subhead="Parole is a powerful but technical tool. Parole-in-Place can give military families a lawful footing for a green card; Advance Parole lets people with pending cases travel and return. Used wrongly, either can backfire, so the details matter."
      qualifyHeading="Two Distinct Tools"
      qualifyBullets={[
        'Parole-in-Place (PIP): you are the spouse, parent, son, or daughter of a U.S. military service member, veteran, or certain enlistees, and you entered the U.S. without inspection',
        'Parole-in-Place can create the lawful "entry" that may allow adjustment of status without leaving the country',
        'Advance Parole: you have a pending adjustment of status (I-485), DACA, or TPS and you need to travel abroad and return',
        'Advance Parole must be approved before you leave, departing without it can abandon your pending case',
      ]}
      qualifyDisclaimer="Parole programs and policies change, and travel always carries some risk. Talk to us before you file, and never travel on a pending case without confirming it is safe."
      processSteps={[
        { title: 'Determine which parole applies', body: 'We confirm whether your situation calls for Parole-in-Place (military family) or Advance Parole (travel on a pending case), and whether parole is the right move at all.' },
        { title: 'Build the request', body: 'For PIP, we assemble proof of the qualifying military relationship and your equities. For Advance Parole, we document the pending case and the reason for travel.' },
        { title: 'File Form I-131', body: 'We file the Application for Travel Document (Form I-131) with the correct evidence for your category.' },
        { title: 'Biometrics and adjudication', body: 'USCIS may schedule biometrics and then reviews the request. We track the case and respond to any requests for evidence.' },
        { title: 'Approval and next steps', body: 'For PIP, an approval can open the door to adjustment of status. For Advance Parole, the document lets you travel and seek re-entry, we brief you on the risks before you book anything.' },
      ]}
      helpsParagraph="Parole sits at the intersection of policy and risk, the wrong filing, or the wrong trip, can damage an otherwise winnable case. Attorney Bardi evaluates whether parole helps you, files it correctly, and gives you straight advice about travel before you commit."
      helpsItems={[
        'Determining whether Parole-in-Place or Advance Parole fits your case',
        'Parole-in-Place filings for qualifying military families',
        'Advance Parole travel documents for pending adjustment, DACA, and TPS',
        'Form I-131 preparation and evidence assembly',
        'Travel-risk counseling before any departure',
        'Coordinating parole with your adjustment of status strategy',
      ]}
      faqs={[
        { q: 'What is the difference between Parole-in-Place and Advance Parole?', a: 'Parole-in-Place grants parole to certain people already in the U.S. (most commonly military family members who entered without inspection), which can create a lawful entry for adjustment of status. Advance Parole is a travel document that lets someone with a pending case (adjustment, DACA, or TPS) leave the U.S. and seek re-entry. They serve different purposes.' },
        { q: 'Can Parole-in-Place help me get a green card?', a: 'For many military family members who entered without inspection, a grant of Parole-in-Place provides the lawful "entry" that can make adjustment of status possible without leaving the country. Whether it works in your case depends on your full history, which we review carefully.' },
        { q: 'Is it safe to travel on Advance Parole?', a: 'Advance Parole lets you seek re-entry, but it is not an absolute guarantee of admission, and travel can carry real risks depending on your immigration history. We assess your specific situation and advise you before you make any travel plans.' },
        { q: 'I heard about a program for spouses of U.S. citizens, can I use that?', a: 'Parole programs come and go and are frequently litigated; some announced programs have been blocked or vacated by the courts. We will tell you exactly what is available and lawful for your situation right now, rather than relying on a program that may no longer be in effect.' },
      ]}
      relatedAreas={[
        { href: '/services/family-based-immigration', label: 'Family-Based', desc: 'I-130 Petitions & Green Cards' },
        { href: '/services/daca', label: 'DACA', desc: 'Deferred Action for Childhood Arrivals' },
        { href: '/services/tps', label: 'TPS', desc: 'Temporary Protected Status' },
      ]}
      relatedArticles={[
        { href: '/blog/parole-in-place-military-families-georgia', label: 'Parole-in-Place for Military Families' },
        { href: '/blog/advance-parole-travel-documents-georgia', label: 'Advance Parole and Travel Documents' },
      ]}
    />
  );
}
