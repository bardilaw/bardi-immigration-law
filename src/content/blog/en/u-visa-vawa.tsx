import Link from 'next/link';

export function UVisaVawaPostContent() {
  return (
    <div className="prose-blog">
      <p className="italic text-charcoal/70 border-l-4 border-gold pl-4 mb-6">
        Si usted o alguien que conoce ha sido víctima de un crimen o violencia doméstica en Georgia o Alabama, puede que
        tenga opciones de inmigración. Siga leyendo.
      </p>

      <p>
        If you are an immigrant in Georgia or Alabama who has experienced domestic violence, sexual assault, or another
        serious crime, U.S. immigration law may offer you a path to legal protection, even without your abuser&apos;s
        knowledge or cooperation. Two of the most important programs are the <strong>U-Visa</strong> and the{' '}
        <strong>VAWA self-petition</strong>. A third, the <strong>T-Visa</strong>, protects victims of human
        trafficking.
      </p>
      <p>
        These protections exist because Congress recognized a difficult truth: immigrants who are crime victims are less
        likely to report abuse or cooperate with law enforcement when they fear deportation. Both programs are designed
        to break that cycle. If you are searching for a{' '}
        <strong>U-Visa attorney in Georgia</strong> or help with <strong>VAWA immigration in Georgia</strong>, this
        guide explains who qualifies, how the process works, and where to start.
      </p>

      <h2>What Is the U-Visa?</h2>
      <p>
        The U-Visa is a visa classification for <strong>immigrants who have been victims of serious crimes</strong> and
        who cooperate, or are willing to cooperate, with law enforcement in the investigation or prosecution of that
        crime.
      </p>
      <p>
        Qualifying crimes include domestic violence, sexual assault, trafficking, kidnapping, stalking, and felonious
        assault, among others. USCIS evaluates whether the crime is substantially similar to those listed in the statute.
      </p>
      <p><strong>To qualify for a U-Visa, you generally must:</strong></p>
      <ul>
        <li>Have been the victim of qualifying criminal activity</li>
        <li>Have suffered substantial physical or mental abuse as a result</li>
        <li>Possess information about the crime</li>
        <li>Be helpful to law enforcement or prosecutors</li>
        <li>The crime must have occurred in the United States or violated U.S. law</li>
      </ul>
      <p>
        A critical requirement: you must obtain a <strong>law enforcement certification (Form I-918B)</strong> from a
        qualifying agency, a police department, prosecutor&apos;s office, court, or federal labor agency. This certifies
        your cooperation. Without it, USCIS cannot approve your petition. In Georgia and Alabama, this often means
        working with a local police department, county sheriff, or district attorney&apos;s office that handled your
        case.
      </p>
      <p>
        <strong>Benefits of U-Visa approval:</strong> up to four years of nonimmigrant status, work authorization, and,
        after three years, potential eligibility for a green card. Certain family members may also qualify for derivative
        status.
      </p>
      <p>
        One important note: Congress caps U-Visa approvals at <strong>10,000 per year</strong>, and demand far exceeds
        supply. USCIS operates a waitlist. A bona fide determination allows eligible applicants to receive deferred
        action and work authorization while waiting. File as early as possible.
      </p>

      <h2>What Is VAWA?</h2>
      <p>
        The Violence Against Women Act (VAWA) allows{' '}
        <strong>
          certain victims of domestic violence or abuse to self-petition for immigration status without the
          abuser&apos;s knowledge or involvement
        </strong>
        . Despite the name, VAWA applies to women, men, and children.
      </p>
      <p><strong>Who can file:</strong></p>
      <ul>
        <li>
          <strong>Spouses or former spouses</strong> of U.S. citizens or lawful permanent residents (LPRs) who
          experienced battery or extreme cruelty
        </li>
        <li>
          <strong>Children</strong> of abusive U.S. citizens or LPRs (generally under 21 at filing; age-out protections
          apply)
        </li>
        <li><strong>Parents</strong> of abusive adult U.S. citizens</li>
      </ul>
      <p>
        Key feature: you self-petition. USCIS keeps all VAWA filings confidential. Your abuser is not notified and
        cannot interfere.
      </p>
      <p><strong>To qualify, you must generally show:</strong></p>
      <ul>
        <li>A qualifying family relationship to a U.S. citizen or LPR abuser</li>
        <li>That you resided with your abuser at some point</li>
        <li>That you experienced battery or extreme cruelty</li>
        <li>Good moral character</li>
      </ul>
      <p>VAWA approval can lead directly to lawful permanent residence without any sponsorship from the abuser.</p>

      <h2>What About the T-Visa?</h2>
      <p>
        If you were brought to or kept in the United States through force, fraud, or coercion for labor or commercial
        sex, you may be a victim of human trafficking and eligible for a <strong>T-Visa</strong> instead of, or in
        addition to, a U-Visa. The T-Visa provides temporary status, work authorization, and a potential path to a green
        card after three years. Like the U-Visa, it generally asks victims to assist law enforcement, though there are
        exceptions for trauma and age. If your situation involves trafficking, tell your attorney early, the evidence and
        strategy differ from a standard U-Visa case.
      </p>

      <h2>Key Differences: U-Visa vs. VAWA</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm font-sans border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left px-4 py-3 font-semibold"></th>
              <th className="text-left px-4 py-3 font-semibold">U-Visa</th>
              <th className="text-left px-4 py-3 font-semibold">VAWA Self-Petition</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Who qualifies', 'Victims of qualifying crimes who cooperated with law enforcement', 'Spouses, children, or parents of abusive U.S. citizens or LPRs'],
              ['Relationship to abuser', 'No family relationship required', 'Must have a qualifying family relationship'],
              ['Law enforcement role', 'Certification required', 'Not required'],
              ["Abuser's immigration status", 'Irrelevant', 'Must be a U.S. citizen or LPR'],
              ['Annual cap', '10,000/year, long wait list', 'No annual cap'],
              ['Path to green card', 'After 3 years in U status', 'Through the petition itself'],
              ['Confidentiality', 'USCIS does not disclose filing to abuser', 'All filings confidential by statute'],
            ].map(([label, uvisa, vawa], i) => (
              <tr key={label} className={i % 2 === 0 ? 'bg-warmgray' : 'bg-white'}>
                <td className="px-4 py-3 font-semibold text-navy">{label}</td>
                <td className="px-4 py-3 text-charcoal">{uvisa}</td>
                <td className="px-4 py-3 text-charcoal">{vawa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Both programs are designed for vulnerable individuals. Which one applies, and which is more advantageous,
        depends on your specific situation. An attorney can help you evaluate both.
      </p>

      <h2>How to Apply and What to Expect</h2>
      <p>
        <strong>For a U-Visa:</strong> Report the crime and cooperate with law enforcement. Your attorney obtains the
        law enforcement certification, then files <strong>Form I-918</strong> with supporting evidence documenting the
        crime and your abuse. If USCIS finds the petition bona fide, you receive deferred action and work authorization
        while waiting for a visa number. After three years in U status, you may apply for a green card.
      </p>
      <p>
        <strong>For a VAWA self-petition:</strong> Your attorney files <strong>Form I-360</strong> with evidence of the
        abusive relationship, your qualifying family relationship, and proof of abuse. Once approved, you are placed on
        a path toward lawful permanent residence.
      </p>
      <p>
        Neither process is fast, U-Visa wait times can extend years due to the annual cap. Errors or omissions in
        either petition can cause delays or denials that are difficult to reverse. This is not a process to navigate alone.
      </p>

      <h2>Immigration Protection for Crime Victims in Atlanta, Georgia, and Alabama</h2>
      <p>
        For many survivors, English is a second language. That matters throughout the legal process, from the first
        police report in Atlanta, Gwinnett County, or Birmingham, through the certification request, to the petition
        filed with USCIS.
      </p>
      <p>
        Statements must be accurate and consistent. Any inconsistency can create problems. A bilingual attorney ensures
        that your account is captured precisely. Forms are unforgiving, and misunderstanding a question under stress can
        create complications that follow your case for years.
      </p>
      <p>
        Privacy also matters. A Spanish-speaking immigration attorney means you are not relying on a neighbor or family
        member to translate sensitive, confidential information.
      </p>
      <p>
        At Bardi Immigration Law, Attorney Eszter Bardi handles{' '}
        <Link href="/services/u-visa">U-Visa</Link> and{' '}
        <Link href="/services/vawa">VAWA</Link> cases directly, in English, Spanish, and Hungarian. No intake
        specialist. No paralegal relay. You speak with the attorney who knows your case from the first consultation
        through resolution. Attorney Bardi is licensed in <strong>Georgia and Alabama</strong>, and because immigration
        is federal law, she represents survivors throughout both states and beyond.
      </p>

      <p>
        <strong>
          If you or someone you love has been a victim of crime or domestic violence,{' '}
          <Link href="/contact">schedule a confidential consultation</Link> with Attorney Bardi today.
        </strong>{' '}
        The sooner you start, the more options you may have.
      </p>

      <p className="italic text-charcoal/70 mt-2">
        <em>¿No habla inglés con fluidez? No hay problema. Ofrecemos consultas en español.</em>
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | This article provides general legal information as of June 2026 and
          does not constitute legal advice. Immigration law and USCIS processing times change. Consult a licensed
          immigration attorney for guidance specific to your situation.
        </em>
      </p>
    </div>
  );
}
