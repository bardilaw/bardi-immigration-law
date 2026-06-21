import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'U-Visa Attorney Georgia | Victims of Crime Immigration Protection',
  description:
    'U-Visa provides status and work authorization for victims of qualifying crimes. Bardi Immigration Law handles U-Visa petitions with sensitivity and confidentiality.',
  alternates: {
    canonical: 'https://bardilaw.com/services/u-visa',
    languages: {
      en: 'https://bardilaw.com/services/u-visa',
      es: 'https://bardilaw.com/es/services/u-visa',
    },
  },
  openGraph: {
    title: 'U-Visa Attorney Georgia | Bardi Immigration Law',
    description: 'U-Visa petitions for crime victims. Licensed in Georgia and Alabama.',
    url: 'https://bardilaw.com/services/u-visa',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bardi Immigration Law — Georgia Immigration Attorney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'U-Visa Attorney Georgia | Bardi Immigration Law',
    description: 'U-Visa petitions for crime victims. Licensed in Georgia and Alabama.',
    images: ['/og-image.png'],
  },
};

export default function UVisaPage() {
  return (
    <PracticeAreaLayout
      breadcrumbLabel="U-Visa"
      breadcrumbHref="/services/u-visa"
      title="U-Visa — Protection for Victims of Crime"
      subhead="The U-Visa provides temporary immigration status and work authorization to victims of qualifying crimes who assist law enforcement. After three years, U-Visa holders may apply for a green card."
      qualifyBullets={[
        'You have been a victim of a qualifying criminal activity (including domestic violence, sexual assault, human trafficking, and other serious crimes)',
        'You have suffered substantial physical or mental abuse as a result of the crime',
        'You have information about the crime',
        'You have been, are being, or are likely to be helpful to law enforcement in the investigation or prosecution',
        'The crime violated U.S. law or occurred in the United States',
      ]}
      qualifyDisclaimer="This overview is for informational purposes only. U-Visa eligibility depends on the specific facts of your case. All matters are handled with complete confidentiality."
      processSteps={[
        { title: 'Obtain law enforcement certification', body: 'A U-Visa requires a certification from a law enforcement agency (Form I-918 Supplement B) confirming your helpfulness. We help you navigate this process.' },
        { title: 'File Form I-918', body: 'Submit the U-Visa petition (I-918) and supporting documentation to USCIS. The annual cap on U-Visas means cases may be placed on a waiting list.' },
        { title: 'Waiting list placement', body: 'If the annual cap (10,000 per year) is reached, eligible petitioners are placed on a waiting list and may receive deferred action while waiting.' },
        { title: 'U-Visa approved and EAD issued', body: 'Once approved, you receive a 4-year U-Visa and work authorization. Your qualifying family members may also be eligible for derivative status.' },
        { title: 'Green card eligibility after 3 years', body: 'After 3 years of continuous presence as a U-Visa holder, you may be eligible to apply for a green card.' },
      ]}
      helpsParagraph="U-Visa cases require coordinating with law enforcement and building a complete evidentiary record. Attorney Bardi handles every aspect of the process with sensitivity and discretion — from obtaining the law enforcement certification to filing and managing the petition through to approval."
      helpsItems={[
        'Eligibility evaluation and case strategy',
        'Law enforcement certification (I-918B) coordination',
        'I-918 petition preparation and filing',
        'Derivative petition preparation for qualifying family members',
        'Waiting list management and deferred action requests',
        'Adjustment of status after 3 years',
      ]}
      faqs={[
        { q: 'What crimes qualify for the U-Visa?', a: 'Qualifying crimes include (among others) domestic violence, sexual assault, trafficking, murder, manslaughter, rape, torture, incest, false imprisonment, kidnapping, blackmail, extortion, and other serious crimes. The list is not exhaustive — contact us if you are unsure whether your situation qualifies.' },
        { q: 'Do I have to testify in court?', a: 'You must be "helpful" to law enforcement — which can include cooperating with an investigation, providing a statement, or assisting in prosecution. You are not required to testify at trial, though willingness to do so may strengthen your case.' },
        { q: 'What if the police did not arrest or charge anyone?', a: 'Charges do not need to have been filed for you to qualify. What matters is that you reported the crime and cooperated with the investigation.' },
        { q: 'How long does the U-Visa take?', a: 'Due to annual caps, U-Visa processing can take several years. However, petitioners on the waiting list may receive deferred action (protection from removal) and work authorization while they wait.' },
      ]}
      relatedAreas={[
        { href: '/services/vawa', label: 'VAWA', desc: 'Violence Against Women Act Petitions' },
        { href: '/services/removal-defense', label: 'Removal Defense', desc: 'Defense in Removal Proceedings' },
        { href: '/services/family-based-immigration', label: 'Family-Based', desc: 'Family Petitions & Green Cards' },
      ]}
    />
  );
}
