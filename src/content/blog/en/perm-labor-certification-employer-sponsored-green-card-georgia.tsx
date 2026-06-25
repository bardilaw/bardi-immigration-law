/* Verify before publish — references immigration/labor law and procedure (the DOL PERM labor certification process under 20 CFR Part 656, the prevailing wage determination via the DOL FLAG system and ETA Form 9141, the mandatory recruitment steps for professional and nonprofessional positions, the Notice of Filing, the ETA Form 9089 application, DOL processing and audit procedures, BALCA review, and the downstream I-140 Immigrant Petition for Alien Worker and priority-date mechanics). PERM processing times, audit practices, recruitment rules, wage data, and forms change frequently and the DOL applies them strictly. Confirm current rules, forms, processing times, and recruitment requirements against the DOL (flag.dol.gov) and USCIS before go-live and for any individual case. */
import Link from 'next/link';

export function PermLaborCertificationPostContent() {
  return (
    <div className="prose-blog">
      <p>
        If a Georgia employer wants to sponsor a foreign worker for a permanent green card in the{' '}
        <strong>EB-2</strong> or <strong>EB-3</strong> category, the first &mdash; and most demanding &mdash; step
        is almost always <strong>PERM labor certification</strong>. PERM stands for{' '}
        <em>Program Electronic Review Management</em>, the U.S. Department of Labor (DOL) process an employer must
        complete before it can even file the green card petition. It is technical, deadline-driven, and unforgiving
        of mistakes. A single typo or a missed recruitment step can sink a case that took more than a year to build.
      </p>
      <p>
        Georgia employers in technology, healthcare, manufacturing, and hospitality sponsor workers through PERM
        every year &mdash; software engineers in Atlanta&rsquo;s tech corridor, nurses and physicians across
        hospital systems, engineers at the Kia and Hyundai supplier plants, and skilled hospitality staff. This
        guide explains what PERM is, why it exists, how the prevailing wage and recruitment requirements work,
        what the ETA Form 9089 application involves, how long it takes, why audits are so common, the mistakes
        that get cases denied, and what happens after certification. (For how PERM fits into the broader
        employment green card system &mdash; including the EB-1 and EB-2 National Interest Waiver paths that{' '}
        <strong>skip PERM entirely</strong> &mdash; see our{' '}
        <Link href="/blog/employment-based-green-card-eb1-eb2-eb3-georgia">
          guide to EB-1, EB-2, and EB-3 employment-based green cards in Georgia
        </Link>
        .)
      </p>

      <h2>What PERM Is &mdash; and Why It Exists</h2>
      <p>
        PERM is the labor market test the government requires before a U.S. employer can permanently hire a
        foreign worker through most employment-based green cards. Governed by the DOL regulations at{' '}
        <strong>20 CFR Part 656</strong>, its purpose is written into the law: to{' '}
        <strong>protect U.S. workers</strong>. Before the DOL will let an employer sponsor a foreign national, the
        employer must show two things:
      </p>
      <ul>
        <li>
          <strong>No able, willing, qualified, and available U.S. worker</strong> exists for the job at the place
          of intended employment, tested through a structured recruitment process; and
        </li>
        <li>
          Hiring the foreign worker <strong>will not adversely affect the wages and working conditions</strong> of
          similarly employed U.S. workers &mdash; which is enforced through the prevailing wage requirement.
        </li>
      </ul>
      <p>
        Most <strong>EB-2</strong> (advanced degree or exceptional ability) and <strong>EB-3</strong> (skilled
        workers, professionals, and other workers) green cards require a certified PERM. The major exceptions all
        skip labor certification entirely:{' '}
        <Link href="/blog/eb1a-extraordinary-ability-green-card-self-petition-georgia">EB-1 priority workers</Link>;
        the{' '}
        <Link href="/blog/eb2-national-interest-waiver-self-petition-georgia">EB-2 National Interest Waiver</Link>,
        a self-petition that needs no employer sponsor and no PERM at all; and <strong>Schedule A</strong>{' '}
        occupations &mdash; currently professional <strong>nurses</strong> and{' '}
        <strong>physical therapists</strong>, which the DOL has pre-certified as chronically short of U.S. workers,
        so no individual recruitment is required. One reason category strategy matters so much before anyone files
        anything.
      </p>

      <h2>Step One: The Prevailing Wage Determination</h2>
      <p>
        PERM begins with the <strong>prevailing wage</strong>. The employer files{' '}
        <strong>ETA Form 9141</strong> through the DOL&rsquo;s online FLAG system, and the DOL&rsquo;s National
        Prevailing Wage Center issues a determination of what comparable workers earn for that occupation in that
        geographic area. The employer must commit to paying <strong>at least</strong> the prevailing wage once the
        worker becomes a permanent resident.
      </p>
      <p>
        This step matters more than employers expect. Set the job&rsquo;s requirements and duties too high, and the
        prevailing wage climbs &mdash; sometimes beyond what the employer planned to pay. Define the role
        carelessly, and the wage level can undercut the whole case. The prevailing wage determination also takes
        months to issue on its own, so it is the first place delay enters the process.
      </p>

      <h2>Step Two: Recruitment &mdash; Testing the U.S. Labor Market</h2>
      <p>
        With a prevailing wage in hand, the employer must <strong>actually recruit</strong> for the position to
        prove no qualified U.S. worker is available. For <strong>professional occupations</strong> (those normally
        requiring a degree), the DOL mandates a specific set of steps:
      </p>
      <ul>
        <li>
          A <strong>30-day job order</strong> placed with the Georgia state workforce agency;
        </li>
        <li>
          <strong>Two Sunday advertisements</strong> in a newspaper of general circulation in the area of intended
          employment;
        </li>
        <li>
          An internal <strong>Notice of Filing</strong> posted at the worksite for 10 consecutive business days
          (and through any in-house electronic media the employer normally uses); and
        </li>
        <li>
          <strong>Three additional recruitment steps</strong> chosen from a DOL list &mdash; the employer&rsquo;s
          website, job search websites, on-campus recruiting, trade or professional organizations, private
          employment firms, an employee referral program, a campus placement office, local or ethnic newspapers,
          radio or TV ads, or job fairs.
        </li>
      </ul>
      <p>
        Nonprofessional positions have a slimmer required list but still demand real recruitment. The timing rules
        are strict: recruitment generally must occur within the <strong>180 days</strong> before filing, and the
        application cannot be filed until at least <strong>30 days</strong> after the recruitment runs. Every ad,
        posting, and date has to line up exactly with what the regulations require.
      </p>

      <h2>Step Three: The Recruitment Report and Documentation</h2>
      <p>
        Recruitment is not a formality &mdash; the employer must <strong>review every U.S. applicant</strong> and
        document, in a written recruitment report, the lawful job-related reasons any applicant was rejected. If a
        qualified, available U.S. worker applies, the employer generally cannot proceed with PERM for the foreign
        worker. The employer must also keep the entire recruitment file &mdash; tear sheets, postings, resumes,
        and the report &mdash; for at least five years, because the DOL can demand it long after certification.
      </p>

      <h2>Step Four: Filing ETA Form 9089</h2>
      <p>
        Only after recruitment and the quiet period does the employer file the actual labor certification
        application, <strong>ETA Form 9089</strong>, electronically through the DOL FLAG system. The form attests
        to the job requirements, the recruitment conducted, the prevailing wage, and the employer&rsquo;s ability
        to pay. Critically, the employer does <strong>not</strong> submit the supporting evidence with the form
        &mdash; it certifies under penalty of perjury that the documentation exists and will be produced if the
        DOL asks. That is exactly what happens in an audit.
      </p>

      <h2>Processing Times and Audit Risk</h2>
      <p>
        PERM is slow, and it has gotten slower. Between the prevailing wage determination, the mandatory
        recruitment window, the quiet period, and DOL analyst review, a clean case commonly runs{' '}
        <strong>8 to 18 months</strong> from start to certification &mdash; and the DOL&rsquo;s posted processing
        times move, so the timeline should always be checked against the agency&rsquo;s current data before anyone
        counts on a date. Because the case takes so long, the sponsored worker is usually maintaining another
        status in the meantime &mdash; most often an{' '}
        <Link href="/blog/h1b-visa-sponsorship-cap-georgia">H-1B</Link>, whose dual-intent treatment lets the
        green card case proceed without jeopardizing the nonimmigrant visa.
      </p>
      <p>
        Then there are <strong>audits</strong>. The DOL audits a meaningful share of PERM cases &mdash; some
        randomly, some triggered by something on the application (a restrictive requirement, a foreign-language
        requirement, a family relationship between the worker and the employer, a layoff in the occupation). An
        audit is not a denial, but it <strong>adds many months</strong> to the case and requires the employer to
        produce the complete recruitment file and a detailed response. Audited cases that are not resolved can be
        denied or sent to <strong>supervised recruitment</strong>, where the DOL controls the entire recruitment
        process &mdash; adding far more time still. Building the file as if an audit is coming is the only safe way
        to run a PERM case.
      </p>

      <h2>Common Reasons PERM Cases Are Denied</h2>
      <p>
        The DOL applies the PERM rules strictly and has historically taken a near-zero-tolerance approach to
        error. Common denial reasons include:
      </p>
      <ul>
        <li>
          <strong>Recruitment defects</strong> &mdash; an ad that omits required content, runs on the wrong days,
          or falls outside the timing windows;
        </li>
        <li>
          <strong>Improperly rejecting a qualified U.S. applicant</strong>, or failing to document a lawful,
          job-related reason for the rejection;
        </li>
        <li>
          <strong>Unduly restrictive job requirements</strong> that exceed the normal requirements for the
          occupation without a documented business necessity;
        </li>
        <li>
          <strong>Prevailing wage problems</strong> &mdash; an expired determination or an offered wage below the
          required level; and
        </li>
        <li>
          <strong>Errors on the ETA Form 9089 itself</strong> &mdash; inconsistencies, omissions, or typos. The
          DOL has denied cases over small clerical mistakes, and there is no simple do-over: the remedies are a
          narrow request for reconsideration or an appeal to the Board of Alien Labor Certification Appeals
          (BALCA), both slow.
        </li>
      </ul>

      <h2>After PERM Is Certified: The I-140 Petition</h2>
      <p>
        A certified PERM is not the green card &mdash; it is the key that unlocks the next stage. Certification is
        valid for <strong>180 days</strong>, within which the employer must file <strong>Form I-140</strong>,
        the Immigrant Petition for Alien Worker, with USCIS. The I-140 proves the worker meets the job&rsquo;s
        requirements and that the employer has the ability to pay the offered wage.
      </p>
      <p>
        The date the PERM was filed becomes the worker&rsquo;s <strong>priority date</strong> &mdash; the place in
        line that determines when a green card becomes available. For workers born in heavily backlogged countries
        like <strong>India and China</strong>, that wait in EB-2 and EB-3 can stretch for years, governed by the
        monthly Visa Bulletin. Once the priority date is current, the worker completes the process through{' '}
        <Link href="/blog/adjustment-of-status-green-card-georgia">adjustment of status</Link> (if in the U.S.) or{' '}
        <Link href="/blog/consular-processing-immigrant-visa-georgia">consular processing</Link> (if abroad).
      </p>
      <p>
        One protection matters enormously for backlogged workers: <strong>AC21 job portability</strong> under{' '}
        <strong>INA §204(j)</strong>. Once a worker&rsquo;s adjustment-of-status application (Form I-485) has been{' '}
        <strong>pending 180 days or more</strong>, the worker can change employers &mdash; or move to a new role
        with the same employer &mdash; <strong>without redoing PERM or the I-140</strong>, as long as the new job
        is in the <strong>same or a similar occupational classification</strong>. For an Indian- or Chinese-born
        worker facing a multi-year wait, §204(j) portability is what makes it possible to take a promotion or
        switch companies instead of being locked to the sponsoring employer until the green card finally issues.
      </p>

      <h2>Why an Attorney Is Critical &mdash; for Both Sides</h2>
      <p>
        PERM is one of the few immigration processes where the <strong>employer</strong>, not the worker, is the
        applicant and bears the legal obligations &mdash; but both sides have everything at stake. For the{' '}
        <strong>employer</strong>, an attorney drafts defensible job requirements, runs the recruitment so it
        survives an audit, builds the documentation file the DOL will demand, and defends the case if it is
        audited or sent to supervised recruitment. A botched PERM is not just a delay &mdash; it is wasted
        recruitment cost and a worker the company may lose.
      </p>
      <p>
        For the <strong>worker</strong>, an attorney protects the priority date, confirms the right category was
        chosen in the first place (an EB-1 or NIW self-petition may beat a PERM-bound EB-2 or EB-3), and keeps the
        case moving from PERM to I-140 to the final green card. Because the employer technically drives the
        process, independent attention to the worker&rsquo;s interests matters &mdash; especially if the worker
        changes jobs, where the §204(j) portability rules above can preserve a hard-won priority date. For a case
        this technical, vetting counsel carefully pays off; see our guide on{' '}
        <Link href="/blog/how-to-choose-immigration-attorney-georgia">how to choose an immigration attorney</Link>.
      </p>

      <h2>Talk to Eszter Bardi About Employer-Sponsored Green Cards</h2>
      <p>
        Whether you are a Georgia employer ready to sponsor a key employee through PERM, or a worker whose green
        card depends on getting the labor certification right, attorney <strong>Eszter Bardi</strong> can map the
        process, set realistic timelines, and build the case to withstand a DOL audit. Bardi Immigration Law
        serves workers and employers across Georgia &mdash; with direct attorney access, not an intake specialist.
      </p>
      <p>
        <strong>Schedule a consultation today.</strong> We will assess whether PERM is the right path or whether a
        category that skips it fits better, and build the application correctly the first time.{' '}
        <Link href="/contact">Request a consultation online</Link>. Hablamos espa&ntilde;ol &mdash; atendemos a la
        comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | This article provides general legal information and does not
          constitute legal advice. PERM rules, processing times, audit practices, wage data, and DOL forms change
          frequently and are applied strictly. Confirm current requirements, forms, deadlines, and processing
          times on the U.S. Department of Labor (flag.dol.gov) and USCIS websites, and consult a licensed
          immigration attorney for guidance specific to your case.
        </em>
      </p>
    </div>
  );
}
