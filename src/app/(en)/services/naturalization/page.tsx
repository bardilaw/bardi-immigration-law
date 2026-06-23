import type { Metadata } from 'next';
import { PracticeAreaLayout } from '@/components/PracticeAreaLayout';

export const metadata: Metadata = {
  title: 'Naturalization Attorney | U.S. Citizenship (N-400)',
  description:
    'Become a U.S. citizen through naturalization. Form N-400 eligibility, the English and civics test, the interview, and the oath, handled by an immigration attorney from start to finish.',
  alternates: {
    canonical: 'https://bardilaw.com/services/naturalization',
    languages: {
      'x-default': 'https://bardilaw.com/services/naturalization',
      en: 'https://bardilaw.com/services/naturalization',
      es: 'https://bardilaw.com/es/services/naturalization',
    },
  },
  openGraph: {
    title: 'Naturalization Attorney | Bardi Immigration Law',
    description: 'U.S. citizenship through naturalization: N-400 eligibility, the test, the interview, and the oath.',
    url: 'https://bardilaw.com/services/naturalization',
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
    title: 'Naturalization Attorney | Bardi Immigration Law',
    description: 'U.S. citizenship through naturalization: N-400 eligibility, the test, the interview, and the oath.',
    images: ['/og-image.png'],
  },
};

export default function NaturalizationPage() {
  return (
    <PracticeAreaLayout
      breadcrumbLabel="Naturalization"
      breadcrumbHref="/services/naturalization"
      title="Naturalization & U.S. Citizenship"
      subhead="Citizenship is the final step, the right to vote, to a U.S. passport, and to security that cannot be taken away. We make sure your N-400 is filed cleanly and that nothing in your history derails the application."
      qualifyBullets={[
        'You have been a lawful permanent resident (green card holder) for at least 5 years, or 3 years if married to and living with a U.S. citizen',
        'You have maintained continuous residence and physical presence in the United States',
        'You can demonstrate good moral character during the required period',
        'You can read, write, and speak basic English and pass the civics test (with limited age- and disability-based exceptions)',
        'You are at least 18 years old and willing to take the Oath of Allegiance',
      ]}
      qualifyDisclaimer="Some histories, long trips abroad, certain criminal issues, or problems with how you got your green card, can complicate or even endanger an N-400. We review your full record before you file, not after."
      processSteps={[
        { title: 'Eligibility review', body: 'We confirm your residence and physical-presence math, screen for good-moral-character and continuous-residence issues, and make sure filing is safe in your situation.' },
        { title: 'File Form N-400', body: 'We prepare and submit your naturalization application with the supporting evidence USCIS expects.' },
        { title: 'Biometrics', body: 'USCIS takes your fingerprints and runs background checks. We tell you what to expect.' },
        { title: 'Interview and tests', body: 'At the interview a USCIS officer reviews your application and administers the English and civics tests. We prepare you so you walk in ready.' },
        { title: 'Oath of Allegiance', body: 'Once approved, you take the Oath of Allegiance at a ceremony and become a U.S. citizen. You can then apply for a U.S. passport.' },
      ]}
      helpsParagraph="Most N-400s are straightforward, but the ones that go wrong usually had a warning sign that a careful review would have caught. Attorney Bardi screens your history first, so you file with confidence and avoid surprises at the interview."
      helpsItems={[
        'Eligibility and good-moral-character screening before you file',
        'Continuous-residence and physical-presence analysis (including long trips abroad)',
        'N-400 preparation and filing',
        'Interview preparation and English/civics test guidance',
        'Identifying and addressing criminal or status issues that could affect eligibility',
        'Direct attorney communication throughout',
      ]}
      faqs={[
        { q: 'Do I qualify under the 3-year rule or the 5-year rule?', a: 'Most lawful permanent residents must wait 5 years. If you obtained your green card through marriage to a U.S. citizen and you have been married to and living with that citizen for the whole period, you may qualify after 3 years. We confirm which rule applies to you.' },
        { q: 'Can a criminal record stop me from naturalizing?', a: 'It can, and in some situations applying with certain records can even put your green card at risk. Some issues are permanent bars, others affect only the good-moral-character period. This is exactly why we review your record before filing.' },
        { q: 'What happens at the citizenship interview?', a: 'A USCIS officer reviews your N-400 with you under oath, then administers the English test (reading, writing, speaking) and the civics test. We prepare you for both the questions and the format.' },
        { q: 'Do long trips outside the U.S. matter?', a: 'Yes. Trips of six months or more can break the continuous residence that naturalization requires, and a pattern of long absences can raise questions even if no single trip was that long. We work the dates with you before you file.' },
      ]}
      relatedAreas={[
        { href: '/services/family-based-immigration', label: 'Family-Based', desc: 'I-130 Petitions & Green Cards' },
        { href: '/services/removal-defense', label: 'Removal Defense', desc: 'Defense in Removal Proceedings' },
        { href: '/services/waivers', label: 'Waivers', desc: 'I-601 / I-601A Inadmissibility Waivers' },
      ]}
      relatedArticles={[
        { href: '/blog/naturalization-citizenship-georgia', label: 'Naturalization and U.S. Citizenship in Georgia' },
      ]}
    />
  );
}
