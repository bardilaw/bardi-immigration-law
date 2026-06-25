/* Verify before publish — references immigration law/procedure (Form I-130 Petition for Alien Relative, I-130A, immediate relative vs F1/F2A/F2B/F3/F4 preference categories, priority dates/Visa Bulletin, concurrent I-130/I-485 filing, NVC/consular processing, I-864, auto-revocation on petitioner death under 8 CFR 205.1 and INA §204(l)) that can change. Confirm against USCIS before go-live. */
import Link from 'next/link';

export function I130FamilyPetitionPostContent() {
  return (
    <div className="prose-blog">
      <p>
        Almost every family-based green card in the United States starts with the same document:{' '}
        <strong>Form I-130, Petition for Alien Relative</strong>. It is the form a U.S. citizen or green card
        holder files to tell the government, &ldquo;This person is my family, and I want to sponsor them for permanent
        residence.&rdquo; The I-130 does not, by itself, give anyone a green card or the right to live or work in the
        United States. What it does is open the door &mdash; it establishes a <strong>qualifying family
        relationship</strong> and locks in a place in line. Everything that follows depends on getting this first step
        right.
      </p>
      <p>
        This guide explains what the I-130 is, who can file it, the family categories that decide how long you wait,
        how priority dates and the Visa Bulletin work, what happens after approval, and the evidence you need &mdash;
        for families across Georgia and Alabama.
      </p>

      <h2>What the I-130 Is &mdash; and When to File It</h2>
      <p>
        The I-130 is the <strong>petition</strong> filed by the sponsoring relative (the <strong>petitioner</strong>)
        on behalf of the family member who wants a green card (the <strong>beneficiary</strong>). Its only job is to
        prove that a real, qualifying family relationship exists. You file it as soon as you are ready to start the
        process &mdash; there is no benefit to waiting, because the date USCIS receives your petition becomes your{' '}
        <strong>priority date</strong>, your place in line. For family members stuck in a backlogged category, filing
        early can shave years off the total wait.
      </p>
      <p>
        Each beneficiary needs a separate I-130. A petitioner sponsoring both a spouse and a stepchild, for example,
        files one petition for each person.
      </p>

      <h2>Who Can Be a Petitioner: U.S. Citizens vs. Green Card Holders</h2>
      <p>
        Two groups can file an I-130, and the difference between them is one of the most important facts in
        family-based immigration:
      </p>
      <ul>
        <li>
          <strong>U.S. citizens</strong> can petition for a spouse, unmarried children under 21, unmarried adult sons
          and daughters, married sons and daughters, parents (if the citizen is at least 21), and siblings (if the
          citizen is at least 21).
        </li>
        <li>
          <strong>Lawful permanent residents (green card holders)</strong> can petition for a spouse and unmarried
          children only &mdash; both minor children and unmarried adult sons and daughters. An LPR{' '}
          <strong>cannot</strong> petition for parents, married children, or siblings.
        </li>
      </ul>
      <p>
        This is why a green card holder who becomes a U.S. citizen often unlocks faster or new options for relatives.
        It is also why the category your relative falls into &mdash; not just the relationship &mdash; decides how long
        the wait will be.
      </p>

      <h2>The Family Preference Categories</h2>
      <p>
        Immigration law splits family beneficiaries into two big buckets: <strong>immediate relatives</strong>, who
        have no annual limit and never wait for a visa number, and the <strong>family preference categories</strong>,
        which have annual caps and therefore waiting lines.
      </p>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '6px 8px', borderBottom: '2px solid #1a2b5f' }}>Category</th>
            <th style={{ textAlign: 'left', padding: '6px 8px', borderBottom: '2px solid #1a2b5f' }}>Who It Covers</th>
            <th style={{ textAlign: 'left', padding: '6px 8px', borderBottom: '2px solid #1a2b5f' }}>Petitioner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>
              <strong>Immediate Relative (IR)</strong>
            </td>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>
              Spouse, unmarried child under 21, or parent of a U.S. citizen &mdash; no annual cap, no wait
            </td>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>U.S. citizen</td>
          </tr>
          <tr>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>
              <strong>F1</strong>
            </td>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>
              Unmarried sons and daughters (21 or older) of a U.S. citizen
            </td>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>U.S. citizen</td>
          </tr>
          <tr>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>
              <strong>F2A</strong>
            </td>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>
              Spouses and unmarried children (under 21) of a green card holder
            </td>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>LPR</td>
          </tr>
          <tr>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>
              <strong>F2B</strong>
            </td>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>
              Unmarried sons and daughters (21 or older) of a green card holder
            </td>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>LPR</td>
          </tr>
          <tr>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>
              <strong>F3</strong>
            </td>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>
              Married sons and daughters of a U.S. citizen
            </td>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>U.S. citizen</td>
          </tr>
          <tr>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>
              <strong>F4</strong>
            </td>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>
              Brothers and sisters of a U.S. citizen (petitioner must be 21 or older)
            </td>
            <td style={{ padding: '6px 8px', borderBottom: '1px solid #e5e0d8' }}>U.S. citizen</td>
          </tr>
        </tbody>
      </table>
      <p>
        The category matters enormously. An immediate relative can often move straight to a green card. A sibling in
        F4, by contrast, may wait well over a decade for a visa number to become available &mdash; the relationship is
        real, but the line is long.
      </p>

      <h2>Priority Dates and the Visa Bulletin</h2>
      <p>
        Because the preference categories have annual numerical limits, a waiting list forms. Your{' '}
        <strong>priority date</strong> &mdash; the day USCIS received your I-130 &mdash; is your spot on that list.
        Each month the U.S. Department of State publishes the <strong>Visa Bulletin</strong>, which shows which
        priority dates have reached the front of the line for each category and country of birth. When your priority
        date is earlier than the cutoff date listed &mdash; when it becomes &ldquo;current&rdquo; &mdash; a visa number
        is available and your relative can take the final step toward a green card.
      </p>
      <p>
        Immediate relatives of U.S. citizens skip this wait entirely; a visa number is always available to them.
        Everyone else watches the bulletin. Our guide to{' '}
        <Link href="/blog/visa-bulletin-priority-dates-family-green-card">
          priority dates and reading the Visa Bulletin
        </Link>{' '}
        explains how to track where your case stands.
      </p>

      <h2>What Happens After the I-130 Is Approved</h2>
      <p>
        I-130 approval is a milestone, not the finish line. It confirms the relationship is genuine &mdash; it does not
        grant status. What comes next depends on where your relative lives and whether a visa number is available:
      </p>
      <ul>
        <li>
          <strong>If the beneficiary is inside the United States</strong> and a visa number is available, they may be
          able to file <strong>Form I-485</strong> to get the green card without leaving the country. See our hub on{' '}
          <Link href="/blog/adjustment-of-status-green-card-georgia">adjustment of status</Link> for how that process
          works.
        </li>
        <li>
          <strong>If the beneficiary is abroad</strong> &mdash; or cannot adjust status &mdash; the case moves to the{' '}
          <strong>National Visa Center (NVC)</strong> and then to a U.S. embassy or consulate for an interview. Our
          guide to the{' '}
          <Link href="/blog/nvc-consular-interview-immigrant-visa-process-georgia">
            NVC stage and the consular interview
          </Link>{' '}
          walks through the fees, the DS-260, and the document checklist.
        </li>
      </ul>

      <h2>Concurrent Filing: I-130 and I-485 Together</h2>
      <p>
        Immediate relatives of U.S. citizens get a powerful shortcut. Because a visa number is always available to
        them, they can file the I-130 and the I-485 <strong>at the same time</strong> &mdash; called{' '}
        <strong>concurrent filing</strong> &mdash; instead of waiting for the petition to be approved first. This can
        save many months and lets the beneficiary apply for a work permit and travel document while everything is
        pending. Preference-category beneficiaries cannot file concurrently; they must wait until their priority date
        is current before filing the I-485.
      </p>

      <h2>Form I-130A: The Spouse Supplement</h2>
      <p>
        When the petition is for a <strong>spouse</strong>, the immigrating husband or wife must also complete{' '}
        <strong>Form I-130A, Supplemental Information for Spouse Beneficiary</strong>. It collects the beneficiary&apos;s
        address and employment history and is filed together with the I-130. Forgetting the I-130A is a common,
        avoidable reason marriage-based petitions get delayed.
      </p>

      <h2>Evidence: Proving Status and the Relationship</h2>
      <p>
        An I-130 stands or falls on its documentation. Every petition needs two things: proof that the petitioner is
        who they claim to be, and proof that the family relationship is real. A typical filing includes:
      </p>
      <ul>
        <li>
          <strong>Proof of the petitioner&apos;s status</strong> &mdash; a U.S. birth certificate, U.S. passport, or
          naturalization certificate for citizens; a copy of the green card for permanent residents;
        </li>
        <li>
          <strong>Proof of the qualifying relationship</strong> &mdash; a marriage certificate for a spouse, birth
          certificates showing the parent-child link for children or parents, and records tracing the chain for
          siblings;
        </li>
        <li>
          <strong>Evidence of a bona fide marriage</strong> in spousal cases &mdash; joint bank accounts, a shared
          lease or mortgage, insurance naming each other, photos together over time, and similar proof that the
          marriage is genuine and not entered for immigration purposes; and
        </li>
        <li>Documentation of any legal name changes, prior marriages and their termination, and passport-style photos where required.</li>
      </ul>
      <p>
        Marriage cases draw the most scrutiny because marriage fraud is a serious concern for USCIS. A thin or
        disorganized filing invites a <strong>Request for Evidence</strong> &mdash; or worse, a fraud interview. Build
        the relationship evidence carefully the first time.
      </p>

      <h2>Processing Times</h2>
      <p>
        How long the I-130 takes depends on the category, the service center, and where the beneficiary lives. Petitions
        for immediate relatives generally move fastest; preference-category petitions take longer, and then the
        beneficiary still has to wait for a priority date to become current. USCIS processing times shift with workload,
        so treat any published estimate as a moving target and check the current figures for your category before you
        count on a date.
      </p>

      <h2>If the Petitioner Dies Before the Case Is Done</h2>
      <p>
        A hard but important point: when the petitioner dies, an approved or pending I-130 is{' '}
        <strong>automatically revoked</strong> under the regulations. That is not always the end, though. Under{' '}
        <strong>INA &sect;204(l)</strong>, a beneficiary who was residing in the United States when the petitioner died
        may be able to have the petition continue. In other situations, a relative may ask USCIS for{' '}
        <strong>humanitarian reinstatement</strong> of an approved petition, or a substitute sponsor may step in to
        meet the affidavit-of-support obligation. These are technical, discretionary remedies with strict requirements
        &mdash; exactly the kind of situation where you want a lawyer involved quickly.
      </p>

      <h2>The I-130 Is Only the First Step</h2>
      <p>
        Approval of the I-130 establishes the relationship, but the green card still requires the next stage &mdash;
        adjustment of status or consular processing &mdash; and in nearly every family case, a financial sponsor must
        file <strong>Form I-864, Affidavit of Support</strong>, a legally binding promise to support the immigrant.
        Falling short of the income requirement is a leading cause of stalled cases, so it is worth understanding{' '}
        <Link href="/blog/affidavit-of-support-i-864-income-requirements">
          the I-864 affidavit of support and its income rules
        </Link>{' '}
        before you file.
      </p>

      <h2>Why Work With an Attorney</h2>
      <p>
        Plenty of straightforward I-130 petitions are approved. But &ldquo;straightforward&rdquo; carries weight: a
        prior marriage that was never properly ended, a stepchild relationship that needs to meet age rules, a
        beneficiary with immigration or criminal history, or a name that appears differently across documents can all
        turn a simple petition into a denied one. An attorney confirms the right category, assembles the relationship
        evidence so it holds up, files the I-130A and supporting forms correctly, and plans the path to the green card
        from the start. Learn more about our{' '}
        <Link href="/services/family-based-immigration">family-based immigration</Link> services. If you are still
        deciding who to trust, our guide on{' '}
        <Link href="/blog/how-to-choose-immigration-attorney-georgia">
          how to choose an immigration attorney in Georgia
        </Link>{' '}
        explains what to look for and how to avoid notario fraud.
      </p>

      <h2>Talk to Eszter Bardi &mdash; Free Consultation</h2>
      <p>
        Sponsoring a family member is one of the most meaningful things you can do &mdash; and one where a small filing
        mistake can cost months or years. At Bardi Immigration Law, attorney <strong>Eszter Bardi</strong> helps
        families across Georgia and Alabama file the I-130 correctly and map out the full road to a green card.
      </p>
      <p>
        <strong>Schedule your free consultation today.</strong> We will confirm which category fits your relative, what
        evidence you need, and how long the path is likely to take. You will work directly with Attorney Bardi &mdash;
        no intake specialist. <Link href="/contact">Request your free consultation online.</Link> Hablamos
        espa&ntilde;ol.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | This article provides general legal information and does not constitute
          legal advice. Immigration law is complex, fact-specific, and changes frequently. Confirm current forms, fees,
          and eligibility on the USCIS website and consult a licensed immigration attorney for guidance specific to your
          case.
        </em>
      </p>
    </div>
  );
}
