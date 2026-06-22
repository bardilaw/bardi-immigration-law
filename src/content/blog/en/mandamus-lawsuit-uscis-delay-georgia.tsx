/* Verify before publish — references federal litigation procedure and statutes (mandamus under 28 U.S.C. § 1361; the APA "unreasonably delayed" standard at 5 U.S.C. § 706(1) and the "reasonable time" duty at 5 U.S.C. § 555(b); federal-question jurisdiction at 28 U.S.C. § 1331; the TRAC v. FCC, 750 F.2d 70 (D.C. Cir. 1984) unreasonable-delay factors; the 60-day federal answer window for suits against the United States under Fed. R. Civ. P. 12(a)(2)–(3); the federal civil filing fee; and the Northern/Southern District of Georgia venue/divisions). Statutory citations are stable, but the filing fee, court divisions, typical USCIS-posted processing times, and the practical "how long until USCIS acts" timeline shift — reconfirm the current district-court civil filing fee, the correct division/venue for the client's county, and current USCIS processing times before go-live. Mandamus outcomes are case-specific; the post is deliberately qualitative about "success rates." */
import Link from 'next/link';

export function MandamusUscisDelayPostContent() {
  return (
    <div className="prose-blog">
      <p>
        You filed your application. You did everything right. And then &mdash; nothing. Months pass. The case status
        online never changes. USCIS&apos;s own published timeline came and went a year ago, and the agency will not give
        you a straight answer about when your <Link href="/blog/adjustment-of-status-green-card-georgia">green card</Link>,{' '}
        <Link href="/blog/naturalization-citizenship-georgia">citizenship</Link>, or petition will be decided. If that is
        your situation, you may not have to keep waiting. A federal lawsuit called a <strong>writ of mandamus</strong>{' '}
        can force USCIS to make a decision on a case it has unreasonably delayed. This guide explains what mandamus is,
        when it makes sense, and how these cases work in Georgia&apos;s federal courts.
      </p>
      <p>
        One thing to understand at the outset: a mandamus lawsuit does <strong>not</strong> ask a judge to approve your
        case. It asks the court to order USCIS to <em>decide</em> it &mdash; up or down &mdash; instead of letting it sit
        indefinitely. For people stuck in bureaucratic limbo, that distinction is the whole point.
      </p>

      <h2>What a Writ of Mandamus Is</h2>
      <p>
        &ldquo;Mandamus&rdquo; is Latin for &ldquo;we command.&rdquo; It is a federal court order directing a government
        official to perform a duty they are legally required to perform. The authority comes from{' '}
        <strong>28 U.S.C. &sect; 1361</strong>, which gives federal district courts jurisdiction over &ldquo;any action
        in the nature of mandamus to compel an officer or employee of the United States or any agency thereof to perform
        a duty owed to the plaintiff.&rdquo; In the immigration context, that duty is simple: USCIS has a legal
        obligation to actually adjudicate the applications properly filed with it. It does not have the right to ignore
        them forever.
      </p>
      <p>
        In practice, immigration delay suits rest on two legal pillars used together. The first is the mandamus statute
        above. The second is the <strong>Administrative Procedure Act (APA)</strong>: <strong>5 U.S.C. &sect; 555(b)</strong>{' '}
        requires an agency to conclude matters presented to it &ldquo;within a reasonable time,&rdquo; and{' '}
        <strong>5 U.S.C. &sect; 706(1)</strong> empowers a court to &ldquo;compel agency action unlawfully withheld or
        unreasonably delayed.&rdquo; A typical complaint invokes both, and rests jurisdiction on{' '}
        <strong>28 U.S.C. &sect; 1331</strong> (federal question). The court&apos;s power is limited but powerful: it can
        order USCIS to act, even though it cannot tell USCIS <em>how</em> to decide.
      </p>

      <h2>When It Makes Sense to File &mdash; the &ldquo;Unreasonable Delay&rdquo; Question</h2>
      <p>
        There is no bright-line rule that says &ldquo;X months equals unreasonable.&rdquo; Courts decide it case by case,
        and the most-cited framework comes from <em>Telecommunications Research &amp; Action Center v. FCC</em>, 750 F.2d
        70 (D.C. Cir. 1984) &mdash; the <strong>&ldquo;TRAC factors.&rdquo;</strong> Boiled down, courts look at how long
        the delay has been, whether Congress gave a timetable, whether human health and welfare are at stake (immigration
        cases often involve work authorization, family separation, and the ability to travel), the effect on competing
        agency priorities, and whether the government has acted in bad faith &mdash; though bad faith is not required.
      </p>
      <p>
        As a practical benchmark, attorneys generally start taking a delay seriously when a case has been pending well
        beyond USCIS&apos;s own posted processing time for that form and field office &mdash; often in the range of{' '}
        <strong>12 to 24 months or more</strong> with no movement. The strongest cases are ones where the application is
        simply <em>stuck</em>: biometrics done, interview completed or waived, no outstanding{' '}
        <abbr title="Request for Evidence">RFE</abbr>, and nothing left for you to do. The delay is entirely on the
        agency&apos;s side. Common candidates include:
      </p>
      <ul>
        <li>
          <strong>Form I-485</strong> adjustment-of-status applications sitting long after the interview or with the
          interview waived &mdash; see our{' '}
          <Link href="/blog/adjustment-of-status-green-card-georgia">adjustment of status guide</Link>;
        </li>
        <li>
          <strong>Form N-400</strong> naturalization applications stalled after the citizenship interview &mdash; see our{' '}
          <Link href="/blog/naturalization-citizenship-georgia">naturalization guide</Link>;
        </li>
        <li>
          <strong>Form I-130</strong> family petitions languishing for years past the norm &mdash; see our{' '}
          <Link href="/blog/family-green-card-attorney-georgia">family green card guide</Link>;
        </li>
        <li>
          <strong>Form I-765</strong> work permits, <strong>I-140</strong> employment petitions, and{' '}
          <strong>I-751</strong> conditional-residence petitions that blow past every published timeline.
        </li>
      </ul>
      <p>
        Mandamus is often the right tool when the case is held up by a long-running &ldquo;administrative processing&rdquo;
        or background-check hold with no end in sight &mdash; the agency cannot use an open-ended security check as an
        excuse to delay indefinitely.
      </p>

      <h2>When Mandamus Is <em>Not</em> the Answer</h2>
      <p>
        Mandamus is a remedy for <strong>delay</strong>, not for a decision you dislike. It will not help if:
      </p>
      <ul>
        <li>
          Your case was <strong>denied</strong> &mdash; the remedy there is a motion or appeal, not a delay suit. See our{' '}
          <Link href="/blog/bia-appeal-immigration-court-georgia">appeals guide</Link>.
        </li>
        <li>
          The wait is caused by a <strong>visa-number backlog</strong> rather than agency inaction. If your priority date
          is not current under the Visa Bulletin, USCIS legally cannot approve the case yet, and no court will order it
          to jump the line.
        </li>
        <li>
          The delay is genuinely <strong>within normal processing times</strong>, or the ball is in your court (an
          unanswered RFE, a missed biometrics appointment).
        </li>
        <li>
          You are in <strong>removal proceedings</strong>, where jurisdiction and strategy are different &mdash; see our{' '}
          <Link href="/blog/deportation-defense-removal-proceedings-georgia">deportation defense guide</Link>.
        </li>
      </ul>
      <p>
        An honest evaluation up front saves you the cost of a lawsuit that cannot succeed. A good immigration attorney
        will tell you when mandamus is premature or simply the wrong fit.
      </p>

      <h2>How a Mandamus Case Works in Georgia Federal Court</h2>
      <p>
        A USCIS delay suit is filed in <strong>federal district court</strong> &mdash; not immigration court, and not
        with USCIS itself. Venue is generally proper where you reside. For most of metro Atlanta and north Georgia, that
        is the <strong>U.S. District Court for the Northern District of Georgia (N.D. Ga.)</strong>, which sits in
        Atlanta with divisions including Gainesville, Newnan, and Rome. Residents of south and coastal Georgia file in
        the <strong>Southern District of Georgia (S.D. Ga.)</strong> in Savannah, Brunswick, or related divisions.
        Confirming the correct district and division for your county is one of the first things your attorney will do.
      </p>
      <p>
        The typical sequence looks like this:
      </p>
      <ul>
        <li>
          <strong>Complaint filed.</strong> Your attorney files a civil complaint naming the proper federal defendants
          (typically the USCIS Director, the relevant field-office or service-center director, the Secretary of Homeland
          Security, and sometimes the Attorney General), laying out the timeline of your delay and the legal basis under
          &sect;&nbsp;1361 and the APA.
        </li>
        <li>
          <strong>Service on the government.</strong> The United States is served through the U.S. Attorney for the
          district and the agencies. Because the defendant is a federal agency, the government gets{' '}
          <strong>60 days to respond</strong> under Fed. R. Civ. P. 12(a)(2)&ndash;(3) &mdash; longer than the usual
          window for a private defendant.
        </li>
        <li>
          <strong>What usually happens next.</strong> In a meaningful share of these cases, the lawsuit itself breaks the
          logjam. Once the U.S. Attorney&apos;s office gets involved, it asks USCIS to look at the file, and the agency
          frequently <strong>adjudicates the long-delayed application</strong> rather than litigate whether the delay was
          reasonable. When USCIS decides the case, the delay claim becomes moot and the suit is dismissed &mdash; you
          have gotten the decision you were entitled to.
        </li>
        <li>
          <strong>If the government fights.</strong> Some cases proceed to a motion to dismiss, where the government
          argues the delay is not yet &ldquo;unreasonable&rdquo; under the TRAC factors. The court then weighs those
          factors. Mandamus is an extraordinary remedy and not guaranteed, which is why the strength of the underlying
          timeline matters so much.
        </li>
      </ul>

      <h2>Costs, Timelines, and Realistic Expectations</h2>
      <p>
        A mandamus case is real federal litigation, so budget accordingly. There is a <strong>federal court filing
        fee</strong> (a few hundred dollars &mdash; confirm the current civil filing fee, recently around $400), plus
        attorney&apos;s fees, which are commonly charged as a flat fee for this kind of focused litigation. Ask any
        attorney for a clear fee quote before you commit.
      </p>
      <p>
        On timing: while every case is different, many delay suits reach resolution &mdash; usually because USCIS finally
        adjudicates the application &mdash; within a <strong>few months of filing</strong>, often faster than the case
        would have moved on its own. That is the practical appeal of mandamus: it is frequently the fastest path to an
        answer for a truly stuck case. But understand what &ldquo;success&rdquo; means here &mdash; the win is a{' '}
        <em>decision</em>, not a guaranteed approval. If USCIS responds by denying the case, you are then back to appeal
        or refiling options. For most clients whose cases were simply sitting, getting a decision at all is exactly what
        they needed.
      </p>
      <p>
        A note on a related tool: the federal <strong>Equal Access to Justice Act (EAJA)</strong> can sometimes allow a
        prevailing plaintiff to recover attorney&apos;s fees from the government in these suits. Whether that applies
        depends on the facts and how the case resolves &mdash; another reason to have counsel who handles delay
        litigation.
      </p>

      <h2>Why an Immigration Attorney Matters Here</h2>
      <p>
        Mandamus sits at the intersection of immigration law and federal civil litigation. It involves drafting a
        complaint that survives a motion to dismiss, naming the right defendants, serving the United States correctly,
        choosing the right district and division, and framing your delay against the TRAC factors. Filing too early &mdash;
        before the delay is genuinely unreasonable &mdash; can get your case dismissed and waste your filing fee. Filing a
        strong case at the right time can get a years-stalled application decided in a matter of weeks. This is not a
        do-it-yourself project, and it is not something every immigration attorney litigates.
      </p>

      <h2>Talk to Eszter Bardi &mdash; Free Consultation</h2>
      <p>
        If your USCIS case has been pending far longer than it should and you are tired of waiting with no answers,
        attorney <strong>Eszter Bardi</strong> at Bardi Immigration Law can evaluate whether a mandamus lawsuit is the
        right move &mdash; and, when it is, file it in the appropriate Georgia federal court to force a decision. She
        represents clients across Georgia and Alabama whose green card, citizenship, work permit, and petition cases have
        been stuck in agency limbo.
      </p>
      <p>
        <strong>Schedule your free consultation today.</strong> We will review your timeline, tell you honestly whether
        mandamus fits your case, and explain the cost and process before you decide. You will work directly with Attorney
        Bardi &mdash; no intake specialist. <Link href="/contact">Request your free consultation online.</Link> Hablamos
        espa&ntilde;ol.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | This article provides general legal information and does not constitute
          legal advice. Mandamus and APA delay litigation is fact-specific, and outcomes vary case by case; nothing here
          guarantees a result. Federal filing fees, court divisions, and USCIS processing times change &mdash; confirm
          current details and consult a licensed immigration attorney before filing any lawsuit.
        </em>
      </p>
    </div>
  );
}
