/* Verify before publish — references immigration law/procedure (National Visa Center (NVC) processing of approved immigrant-visa petitions; the Consular Electronic Application Center (CEAC) online portal; the immigrant-visa (IVA) application fee and the Affidavit of Support (AOS) fee; Form DS-260; the Affidavit of Support Form I-864 and supporting financial evidence; the civil-document checklist; "documentarily qualified" status and interview scheduling; the immigrant medical examination by a panel physician; the consular interview at a U.S. embassy or consulate; and Section 221(g) refusals / administrative processing). Forms, fees, document checklists, processing times, and procedures change periodically and vary by visa category, country, and consulate. Confirm current forms, fees, and steps against USCIS, the U.S. Department of State / NVC, and the specific embassy or consulate before go-live. */
import Link from 'next/link';

export function NvcConsularInterviewPostContent() {
  return (
    <div className="prose-blog">
      <p>
        Getting an I-130 or I-140 petition approved feels like the finish line. For families and workers whose immigrant is
        abroad, it is actually the starting gun for the part of the process most people have never heard of: the{' '}
        <strong>National Visa Center (NVC)</strong> stage. This is where fees get paid, documents get collected, the{' '}
        <strong>DS-260</strong> gets filed, and the case is built into something a consular officer will approve &mdash; or
        send back. Done well, it moves a case to interview in a matter of months. Done badly, it is where cases sit for a
        year with no one telling you why.
      </p>
      <p>
        This is a step-by-step guide to the NVC stage and the consular interview that follows. It picks up where our broader{' '}
        <Link href="/blog/consular-processing-immigrant-visa-georgia">consular processing overview</Link> leaves off and
        zooms in on the mechanics that actually determine your timeline. If you are a Georgia petitioner sponsoring a spouse,
        parent, child, or sibling abroad, this is the part of the case you can control.
      </p>

      <h2>When Your Case Reaches the NVC</h2>
      <p>
        After USCIS approves the petition, it forwards the file to the NVC &mdash; but the NVC can only act on a case when an
        immigrant visa number is available. For <strong>immediate relatives</strong> of U.S. citizens (spouses, parents, and
        unmarried children under 21), a number is always available, so the case moves immediately. For the{' '}
        <strong>family-preference</strong> and <strong>employment</strong> categories that are capped, the NVC holds the case
        until your <strong>priority date</strong> is current on the{' '}
        <Link href="/blog/visa-bulletin-priority-dates-family-green-card">Department of State visa bulletin</Link>. Until
        then, there is nothing to do but wait &mdash; no fees, no forms.
      </p>
      <p>
        When the case is ready, the NVC issues a <strong>case number</strong> and an <strong>invoice ID number</strong>.
        Those two numbers are your login to the <strong>Consular Electronic Application Center (CEAC)</strong>, the online
        portal where the entire NVC stage now happens. There is no mailing paper back and forth; everything is uploaded.

      </p>

      <h2>Step One: Pay the Two NVC Fees</h2>
      <p>
        Two separate fees come due at the NVC, and the case will not advance until both are paid and show as &ldquo;PAID&rdquo;
        in CEAC:
      </p>
      <ul>
        <li>
          <strong>The Immigrant Visa Application (IVA) processing fee</strong> &mdash; charged for each intending immigrant on
          the case.
        </li>
        <li>
          <strong>The Affidavit of Support (AOS) fee</strong> &mdash; charged once per petitioner, to cover review of the
          financial sponsorship documents.
        </li>
      </ul>
      <p>
        Both are paid from a U.S. bank account through CEAC. They are distinct from the petition filing fee you already paid
        USCIS, and distinct again from the <strong>USCIS Immigrant Fee</strong> you will pay later to produce the physical
        green card. Because the AOS and DS-260 steps unlock only after the matching fee clears (often after a short
        processing delay), paying promptly is the first thing that keeps a case moving.
      </p>

      <h2>Step Two: File the Affidavit of Support (Form I-864)</h2>
      <p>
        The <Link href="/blog/affidavit-of-support-i-864-income-requirements">Affidavit of Support (Form I-864)</Link> is the
        document that derails more cases at the NVC than any other. The petitioner signs it to accept a{' '}
        <em>legally enforceable</em> obligation to support the immigrant at no less than 125% of the Federal Poverty
        Guidelines for the household size. To prove they meet that threshold, the sponsor uploads:
      </p>
      <ul>
        <li>The most recent federal tax return (or IRS tax transcript), and often W-2s or 1099s;</li>
        <li>Proof of current employment and income, such as recent pay stubs or an employer letter;</li>
        <li>Evidence of U.S. citizenship or lawful permanent residence.</li>
      </ul>
      <p>
        If the petitioner&rsquo;s income falls short &mdash; common for retirees, students, recent hires, or self-employed
        sponsors with heavy deductions &mdash; a <strong>joint sponsor</strong> who independently qualifies must file a second
        I-864. Getting the household size, the income figure, and the right tax year correct the first time is the single
        biggest lever on how fast the NVC clears your case.
      </p>

      <h2>Step Three: Complete the DS-260</h2>
      <p>
        The <strong>DS-260</strong> is the online immigrant-visa application that each intending immigrant must file in CEAC.
        It is long and detailed: addresses and employment going back years, every prior U.S. visa and trip, family
        information, and an extensive list of eligibility and security questions. A few things make the DS-260 worth slowing
        down for:
      </p>
      <ul>
        <li>
          <strong>It is sworn.</strong> The answers are given under oath and must line up with the petition and the civil
          documents. Inconsistencies &mdash; a different employment history, a name spelled differently, an omitted prior visa
          &mdash; are a leading reason cases get pulled into extra scrutiny.
        </li>
        <li>
          <strong>Eligibility questions matter.</strong> Questions about prior removals, unlawful presence, criminal history,
          or misrepresentation can surface a ground of <strong>inadmissibility</strong> that needs a waiver. It is far better
          to identify that here than to be surprised at the interview.
        </li>
        <li>
          <strong>Print the confirmation page.</strong> After submission, you save the DS-260 confirmation page to bring to
          the interview.
        </li>
      </ul>

      <h2>Step Four: Upload the Civil Documents</h2>
      <p>
        Alongside the DS-260, each applicant uploads a set of <strong>civil documents</strong> to CEAC. The exact list varies
        by country and consulate, but it generally includes:
      </p>
      <ul>
        <li>A valid <strong>passport</strong> biographic page (valid at least 60 days beyond visa issuance);</li>
        <li><strong>Birth certificate</strong> for each applicant;</li>
        <li><strong>Marriage certificate</strong>, plus proof of termination of any prior marriages (divorce decrees, death certificates);</li>
        <li><strong>Police certificates</strong> from countries where the applicant has lived, per the consulate&rsquo;s rules;</li>
        <li>Where relevant, <strong>military records</strong> and <strong>court or prison records</strong> for any arrest or conviction.</li>
      </ul>
      <p>
        Any document not in English needs a <strong>certified translation</strong>. Reviewers reject blurry scans, partial
        pages, and documents from the wrong issuing authority, so quality control here directly avoids a round of
        back-and-forth.
      </p>

      <h2>Step Five: Documentarily Qualified and Interview Scheduling</h2>
      <p>
        When the NVC has both fees, the DS-260, the I-864, and all civil documents and finds them complete, it marks the case{' '}
        <strong>&ldquo;documentarily qualified&rdquo; (DQ)</strong> and places it in the queue for an interview at the
        designated U.S. embassy or consulate. Scheduling then depends on appointment availability at that specific post,
        which varies widely by country. Once the appointment is set, the NVC sends the interview letter and transfers the file
        to the consulate.
      </p>

      <h2>Step Six: The Medical Exam and Interview Prep</h2>
      <p>
        Before the interview, every applicant completes a <strong>medical examination</strong> with an embassy-authorized{' '}
        <strong>panel physician</strong> &mdash; not your own doctor. The exam reviews medical history, confirms required{' '}
        <strong>vaccinations</strong>, and screens for conditions that affect admissibility. Schedule it early; in many
        countries the panel physician&rsquo;s availability, not the consulate&rsquo;s, is the bottleneck.
      </p>
      <p>
        For the interview itself, the applicant should arrive with an organized packet that typically includes:
      </p>
      <ul>
        <li>The interview appointment letter and the DS-260 confirmation page;</li>
        <li>A valid passport and the required photographs;</li>
        <li>Original (or certified-copy) civil documents matching what was uploaded to the NVC;</li>
        <li>The original I-864 with up-to-date financial evidence, since income can change between DQ and the interview;</li>
        <li>The medical exam results, if the physician hands them to the applicant in a sealed envelope.</li>
      </ul>
      <p>
        For marriage cases especially, the officer is also gauging whether the relationship is genuine, so consistent,
        well-documented answers &mdash; and bona fide relationship evidence &mdash; matter as much as the paperwork. We cover
        the underlying eligibility rules in our guide to a{' '}
        <Link href="/blog/family-green-card-attorney-georgia">family-based green card in Georgia</Link>.
      </p>

      <h2>Step Seven: The Decision &mdash; and the 221(g) Trap</h2>
      <p>
        If everything is in order, the officer approves the visa at or shortly after the interview, places an immigrant visa in
        the passport, and provides a sealed visa packet. (Do not open it &mdash; it is for the CBP officer at the U.S. port of
        entry.) But two outcomes short of a clean approval are common enough to plan for:
      </p>
      <ul>
        <li>
          <strong>Section 221(g) refusal.</strong> This is not a denial. It means the case is incomplete &mdash; the officer
          needs an additional document, an updated Affidavit of Support, or further review before deciding. The applicant
          receives a slip explaining what is missing, and the case stays open pending that item. Responding quickly and
          completely is everything; a 221(g) that lingers is usually a 221(g) no one followed up on.
        </li>
        <li>
          <strong>Administrative processing.</strong> Some cases are held after the interview for additional security or
          background checks, with little visibility into the timeline. There is often no document to supply &mdash; only to
          wait &mdash; but an attorney can sometimes inquire through the proper channels.
        </li>
      </ul>
      <p>
        A finding of <strong>inadmissibility</strong> &mdash; from prior unlawful presence, certain criminal history, or
        misrepresentation &mdash; is the more serious outcome and may require a <strong>waiver</strong> before the visa can
        issue. For applicants who triggered the unlawful-presence bars under INA &sect;212(a)(9)(B), the{' '}
        <Link href="/blog/i-601a-provisional-unlawful-presence-waiver-georgia">I-601A provisional waiver</Link> is best
        approved <em>before</em> departure, which is why admissibility should be assessed early in the NVC stage, not
        discovered at the window.
      </p>

      <h2>For Georgia Petitioners: This Is Your Stage</h2>
      <p>
        The NVC stage is the part of the case the U.S.-based petitioner most directly controls. Your tax records and income
        drive the Affidavit of Support. Your responsiveness to document requests is what moves the case from &ldquo;in
        progress&rdquo; to &ldquo;documentarily qualified.&rdquo; And your coordination with your relative abroad is what keeps
        the DS-260 and civil documents consistent. Attorney <strong>Eszter Bardi</strong> is licensed in{' '}
        <strong>Georgia and Alabama</strong> and represents petitioners here while guiding their family members through every
        NVC and consular step abroad &mdash; so both ends of the case stay aligned.
      </p>

      <h2>Talk to Eszter Bardi About Your NVC Case</h2>
      <p>
        Whether your petition was just approved or your case is stuck at the NVC, attorney <strong>Eszter Bardi</strong> can
        organize the fees, the I-864, the DS-260, and the civil-document package, prepare your relative for the consular
        interview, and respond fast to any 221(g) request &mdash; with direct attorney access, not an intake specialist. Bardi
        Immigration Law serves clients across <strong>Georgia and Alabama</strong> and works with their relatives wherever they
        are in the world.
      </p>
      <p>
        <strong>Schedule a consultation today.</strong> We will review the petition, map your timeline against the visa
        bulletin, and build the NVC file to clear on the first pass. Learn more about our{' '}
        <Link href="/services/benefits-based-immigration">benefits-based immigration</Link> work or{' '}
        <Link href="/contact">request a consultation online</Link>. Hablamos espa&ntilde;ol &mdash; atendemos a la comunidad
        hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | This article provides general legal information and does not constitute legal
          advice. Immigration law is complex, fact-specific, and changes frequently. Forms, fees, document requirements, and
          processing times change periodically and vary by visa category, country, and consulate. Confirm current requirements
          with USCIS, the U.S. Department of State / National Visa Center, and the relevant U.S. embassy or consulate, and
          consult a licensed immigration attorney for guidance specific to your situation.
        </em>
      </p>
    </div>
  );
}
