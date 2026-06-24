/* Verify before publish — references the H-1B "cap-gap" rule at 8 CFR 214.2(f)(5)(vi), which automatically extends an F-1 student's status and (in some cases) employment authorization when a timely-filed, cap-subject H-1B petition requesting a change of status with an October 1 start date is pending or approved. Key accuracy points: (1) cap-gap bridges the gap between when post-completion OPT or STEM OPT expires and October 1, when the new fiscal-year H-1B begins; (2) the petition must request a change of status (not consular processing) to get cap-gap; (3) if the H-1B petition is filed BEFORE the OPT EAD expires, cap-gap extends BOTH F-1 status AND work authorization to September 30; if it is filed during the 60-day grace period AFTER the EAD expired but while F-1 status is still valid, cap-gap extends F-1 STATUS ONLY (no work authorization) — the student may remain but may not work; (4) the DSO issues a cap-gap I-20; (5) international travel during cap-gap (after the EAD has expired) generally breaks cap-gap because the student cannot re-enter in F-1 to resume it and cannot enter on H-1B before October 1; (6) if the H-1B is denied, rejected, or revoked, cap-gap ends and the standard 60-day F-1 grace period applies; (7) cap-gap requires being SELECTED in the lottery and the petition being timely filed — selection alone is not enough, and a non-selection means no cap-gap. Filing dates, fees, premium-processing availability, and lottery mechanics change — confirm current rules with USCIS and the student's DSO. This is general legal information, not legal advice. */
import Link from 'next/link';

export function H1bCapGapPostContent() {
  return (
    <div className="prose-blog">
      <p>
        Every spring, thousands of international graduates working in metro Atlanta on{' '}
        <Link href="/blog/student-visa-f1-opt-stem-georgia">F-1 Optional Practical Training</Link> hit the same
        terrifying math: their H-1B petition was selected in the lottery and starts on{' '}
        <strong>October 1</strong> &mdash; but their OPT work card expires in May, June, or July. That leaves a
        gap of weeks or months where, on paper, they are no longer authorized to work and the H-1B has not yet
        begun. The rule that closes that gap is called <strong>&ldquo;cap-gap,&rdquo;</strong> and understanding
        exactly how it works can be the difference between staying employed and being forced to stop working,
        lose status, or even leave the country. This guide explains the cap-gap rule for Georgia students and
        employers.
      </p>

      <h2>The Problem: H-1B Starts October 1, OPT Expires Earlier</h2>
      <p>
        The H-1B cap is tied to the federal fiscal year. Petitions selected in the spring lottery are filed in
        April and, if approved, take effect on <strong>October 1</strong> &mdash; the first day of the new fiscal
        year. But post-completion OPT is granted for twelve months from your program end date, and the{' '}
        <Link href="/blog/student-visa-f1-opt-stem-georgia">24-month STEM OPT extension</Link> runs from there.
        For a student who graduated in December and started a twelve-month OPT in, say, the following spring, the
        OPT can easily expire months before October 1. Without a bridge, the student would be left with no valid
        work authorization and no lawful status &mdash; despite having a winning H-1B in hand.
      </p>

      <h2>What the Cap-Gap Rule Does</h2>
      <p>
        Under <strong>8 CFR 214.2(f)(5)(vi)</strong>, when an F-1 student is the beneficiary of a{' '}
        <strong>timely-filed, cap-subject H-1B petition</strong> that requests a <strong>change of status</strong>{' '}
        with an October 1 start date, the regulation <strong>automatically extends</strong> the student&rsquo;s
        F-1 status &mdash; and, in many cases, their employment authorization &mdash; up to <strong>September
        30</strong>. In plain terms: it closes the gap so the student can keep working right up until the H-1B
        kicks in on October 1. No separate application is required; the extension flows from the H-1B petition
        itself.
      </p>
      <p>
        There is one crucial distinction that trips people up. <strong>Whether you can keep working &mdash; or
        merely keep your status &mdash; depends on when the H-1B petition was filed:</strong>
      </p>
      <ul>
        <li>
          <strong>Filed while your OPT/STEM OPT EAD was still valid:</strong> cap-gap extends <strong>both</strong>{' '}
          your F-1 status and your <strong>work authorization</strong> through September 30. You keep working.
        </li>
        <li>
          <strong>Filed after your EAD expired, but during your 60-day grace period:</strong> cap-gap extends
          your <strong>F-1 status only</strong>. You may lawfully remain in the United States until September 30,
          but you <strong>may not work</strong> until the H-1B begins on October 1.
        </li>
      </ul>
      <p>
        This is why timing matters so much. An employer who files the H-1B even a week after the OPT card expires
        can cost the employee their entire summer of paychecks &mdash; even though everyone is acting in good
        faith. The lesson for Georgia students and employers: <strong>file the H-1B before the OPT EAD
        expires.</strong>
      </p>

      <h2>The Conditions You Have to Meet</h2>
      <p>
        Cap-gap is automatic, but it is not unconditional. To benefit, all of the following must be true:
      </p>
      <ul>
        <li>
          <strong>You were selected in the lottery and the petition was timely filed.</strong> Lottery selection
          alone does nothing &mdash; the petition must actually be filed and accepted. If you were not selected,
          there is no cap-gap.
        </li>
        <li>
          <strong>The petition requests a change of status, not consular processing.</strong> If your employer
          chose consular notification (so you would get your H-1B visa stamped abroad), cap-gap does not extend
          your work authorization in the same way. Confirm which option your employer selected.
        </li>
        <li>
          <strong>The petition remains pending or is approved.</strong> If it is denied, rejected, or revoked
          before October 1, cap-gap ends.
        </li>
        <li>
          <strong>You maintain F-1 status.</strong> You continue working under your existing OPT or STEM OPT
          terms &mdash; meaning the work must remain related to your field of study, and STEM OPT students must
          continue with the E-Verify employer and training plan obligations from their{' '}
          <Link href="/blog/student-visa-f1-opt-stem-georgia">I-983</Link>.
        </li>
      </ul>

      <h2>Get Your Cap-Gap I-20 From Your DSO</h2>
      <p>
        Although cap-gap is automatic, you should ask your school&rsquo;s <strong>Designated School Official
        (DSO)</strong> to issue an updated <strong>Form I-20</strong> reflecting the cap-gap extension. This
        document is your proof &mdash; for an employer&rsquo;s I-9 records, for HR, and for your own files &mdash;
        that you remain in valid F-1 status and (where applicable) work-authorized through September 30. Do not
        assume your employer&rsquo;s HR team understands cap-gap; many do not. The updated I-20 is the cleanest
        way to document it.
      </p>

      <h2>Do Not Travel Internationally During Cap-Gap</h2>
      <p>
        This is the single biggest avoidable mistake. <strong>Traveling outside the United States during the
        cap-gap period generally breaks your cap-gap protection.</strong> Once your OPT EAD has expired, you have
        no valid work card to re-enter on, you cannot re-enter in F-1 to &ldquo;resume&rdquo; cap-gap, and you{' '}
        <strong>cannot enter on the H-1B before October 1</strong>. The result is that you can be stuck abroad,
        unable to return until you have an H-1B visa and the October 1 start date has arrived. If you have an
        emergency that requires travel, talk to an immigration attorney and your DSO <em>before</em> you book the
        ticket.
      </p>

      <h2>Regular OPT vs. STEM OPT Cap-Gap</h2>
      <p>
        Both regular 12-month OPT and the 24-month STEM OPT extension can benefit from cap-gap, but the mechanics
        differ. A student on <strong>regular post-completion OPT</strong> uses cap-gap purely as a bridge to
        October 1. A student on a <strong>STEM OPT extension</strong> usually has a longer runway to begin with,
        and the cap-gap extension simply carries that authorization through to the H-1B start if the STEM OPT
        would otherwise lapse before October. A student whose STEM OPT extension application is itself still
        pending when the H-1B is filed has additional layers of authorization to track &mdash; another reason to
        coordinate the timeline with your DSO and counsel rather than guessing.
      </p>

      <h2>RFEs, Delays, and Denials</h2>
      <p>
        Cap-gap holds as long as the H-1B is pending. If USCIS issues a <strong>Request for Evidence (RFE)</strong>,
        your cap-gap status continues while the petition is adjudicated &mdash; but the uncertainty is real, and
        a slow response can push the decision close to or past October 1. If the petition is{' '}
        <strong>denied, rejected, or revoked</strong>, cap-gap ends. At that point you generally fall into the
        standard <strong>60-day F-1 grace period</strong> measured from the relevant end date, during which you
        must stop working and either depart, change to another status, or transfer to a new program. Because the
        downside is so severe, many employers pay for <strong>premium processing</strong> to get a faster decision
        and reduce the window of uncertainty. We cover the broader H-1B process in our{' '}
        <Link href="/blog/h1b-visa-sponsorship-cap-georgia">H-1B sponsorship and cap guide</Link>.
      </p>

      <h2>The Georgia Risk Window: April Through September</h2>
      <p>
        For graduates of <strong>Georgia Tech, Emory, the University of Georgia, Georgia State, and Kennesaw
        State</strong> who feed the Atlanta technology, engineering, and healthcare corridor, the danger window
        runs every year from <strong>April through September</strong>. If your OPT or STEM OPT expires in that
        window and you have a selected H-1B, cap-gap is what keeps you employed &mdash; but only if your employer
        filed correctly and on time. The most common failures we see are: filing the H-1B after the EAD already
        expired (losing work authorization for the summer), choosing consular processing without realizing the
        cap-gap consequences, and traveling abroad mid-summer and getting stranded.
      </p>

      <h2>How Bardi Immigration Law Can Help</h2>
      <p>
        Cap-gap is unforgiving because the deadlines are fixed and the consequences of a missed filing land on the
        employee, not the employer. If you are an F-1 student with a selected H-1B and an OPT card that expires
        before October 1 &mdash; or an employer trying to keep a key hire working through the summer &mdash;
        attorney <strong>Eszter Bardi</strong> can review your timeline, confirm whether your petition preserves
        work authorization or only status, and flag the travel and filing traps before they cost you.
      </p>
      <p>
        <strong>Schedule a consultation today.</strong>{' '}
        <Link href="/contact">Request a consultation online</Link>. Hablamos espa&ntilde;ol &mdash; atendemos a la
        comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | This article provides general legal information about the H-1B
          cap-gap rule and does not constitute legal advice. Filing windows, fees, premium-processing
          availability, lottery mechanics, and adjudication times change over time and your situation is
          fact-specific &mdash; confirm current requirements with USCIS and your DSO, and consult a licensed
          immigration attorney for guidance specific to your case.
        </em>
      </p>
    </div>
  );
}
