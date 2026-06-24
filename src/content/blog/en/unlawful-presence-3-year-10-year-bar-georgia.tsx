/* Verify before publish — references immigration law/procedure (unlawful presence vs. unlawful status, INA 212(a)(9)(B) 3- and 10-year bars and the 180-day/1-year thresholds, the departure trigger, the 212(a)(9)(B)(iii) non-accrual periods (under 18, bona fide pending asylum, family unity, battered spouse/child/VAWA), the 212(a)(9)(B)(v) extreme-hardship waiver, the 212(a)(9)(C) permanent bar, tolling for a pending bona fide adjustment, and the Form I-601A provisional and Form I-601 waivers) that can change with USCIS/DOS policy and administration. Confirm against USCIS before go-live. */
import Link from 'next/link';

export function UnlawfulPresenceBarPostContent() {
  return (
    <div className="prose-blog">
      <p>
        It is one of the most misunderstood &mdash; and most dangerous &mdash; rules in all of immigration law. A person
        can live in the United States for years, marry a U.S. citizen, raise American children, and have a clear path to a
        green card on paper, only to destroy that path the moment they step on a plane to attend their visa interview
        abroad. The reason is a penalty called the <strong>three-year and ten-year bar</strong>, triggered by something
        the law calls <strong>&ldquo;unlawful presence.&rdquo;</strong>
      </p>
      <p>
        This guide explains how unlawful presence works under <strong>INA &sect; 212(a)(9)(B)</strong> for families in
        Georgia and Alabama: the critical difference between unlawful presence and unlawful <em>status</em>, when the
        clock starts and stops, why <em>leaving the country</em> is what actually triggers the bar, who is protected, and
        the waivers that can forgive it.
      </p>

      <h2>Unlawful Presence vs. Unlawful Status &mdash; the Distinction That Controls Everything</h2>
      <p>
        These two terms sound the same, but they are not, and the difference decides cases. <strong>Unlawful status</strong>
        means you are out of compliance with immigration law &mdash; for example, you violated the terms of your visa or
        you never had status to begin with. <strong>Unlawful presence</strong> is a specific, separate clock that counts
        the days you are present in the U.S. <em>after</em> your authorized stay expires or without ever having been
        admitted. Only <em>unlawful presence</em> &mdash; not unlawful status by itself &mdash; triggers the 3- and
        10-year bars.
      </p>
      <p>
        Why does this matter? Because someone can be out of status without yet accruing unlawful presence. A student in
        F-1 status, for instance, is generally admitted for &ldquo;duration of status&rdquo; (D/S) rather than to a fixed
        date. Even if that student falls out of status, unlawful presence typically does not begin to accrue until USCIS
        or an immigration judge formally finds the violation. A visitor admitted until a specific date on the{' '}
        <strong>Form I-94</strong>, by contrast, begins accruing unlawful presence the day after that date passes.
      </p>

      <h2>When the Clock Starts &mdash; and Stops</h2>
      <p>Unlawful presence generally starts accruing on the earliest of these:</p>
      <ul>
        <li>
          The day after your <strong>I-94 expiration date</strong> if you were admitted until a set date and overstayed;
        </li>
        <li>
          The day after an <strong>immigration judge</strong> or <strong>USCIS</strong> finds a status violation (common
          in the duration-of-status context); or
        </li>
        <li>
          The day you <strong>entered without inspection</strong> (&ldquo;EWI&rdquo;) &mdash; for someone who crossed the
          border without being admitted or paroled, the clock runs from the date of entry.
        </li>
      </ul>
      <p>
        The clock can also <strong>stop or pause</strong>. Filing a <strong>bona fide application for adjustment of
        status</strong> generally stops the accrual of unlawful presence while it is pending, and a timely-filed,
        nonfrivolous <strong>extension or change of status</strong> request can toll accrual while it is under review.
        These tolling rules are technical and fact-specific &mdash; getting them wrong can cost a family a decade.
      </p>

      <h2>The Departure Trigger &mdash; the Bar Only Activates When You Leave</h2>
      <p>
        Here is the part that traps good-faith families. Under <strong>INA &sect; 212(a)(9)(B)</strong>:
      </p>
      <ul>
        <li>
          More than <strong>180 days</strong> (but less than one year) of unlawful presence, followed by departure,
          triggers a <strong>three-year bar</strong> on returning; and
        </li>
        <li>
          <strong>One year or more</strong> of unlawful presence, followed by departure, triggers a{' '}
          <strong>ten-year bar</strong>.
        </li>
      </ul>
      <p>
        The bar is <em>not</em> triggered by accruing the time &mdash; it is triggered by <strong>leaving the United
        States</strong> after accruing it. That is why someone who entered without inspection and must go abroad for{' '}
        <Link href="/blog/consular-processing-immigrant-visa-georgia">consular processing</Link> faces a cruel trap: the
        very trip required to get the immigrant visa is the act that springs the ten-year bar. Anyone with significant
        unlawful presence should get a legal assessment <em>before</em> booking a single flight.
      </p>

      <h2>Who Is Protected &mdash; Periods That Do Not Count</h2>
      <p>
        Congress built in exceptions. Under <strong>INA &sect; 212(a)(9)(B)(iii)</strong>, certain periods do{' '}
        <strong>not</strong> count toward unlawful presence at all:
      </p>
      <ul>
        <li>
          <strong>Minors.</strong> No unlawful presence accrues while a person is <strong>under 18 years old</strong>.
        </li>
        <li>
          <strong>Pending asylum applicants.</strong> Time with a <strong>bona fide asylum application pending</strong>
          generally does not accrue (as long as the applicant is not employed without authorization). See our guide to
          the <Link href="/blog/asylum-one-year-bar-exceptions-georgia">asylum one-year filing deadline</Link>.
        </li>
        <li>
          <strong>Family Unity beneficiaries.</strong> Time protected under the Family Unity Program does not count.
        </li>
        <li>
          <strong>Battered spouses and children (VAWA).</strong> There is a protection for{' '}
          <Link href="/blog/vawa-self-petition-domestic-violence-immigration-georgia">VAWA self-petitioners</Link> and
          certain battered spouses and children who can show a connection between the abuse and their unlawful presence.
        </li>
      </ul>
      <p>
        A note on the statute: these <em>non-accrual</em> protections live in subsection (B)(iii). The separate{' '}
        <strong>&sect; 212(a)(9)(B)(v)</strong> provision is the <strong>waiver</strong> &mdash; the forgiveness path for
        people who <em>have</em> triggered a bar, discussed next.
      </p>

      <h2>Already Triggered a Bar? The I-601A and I-601 Waivers</h2>
      <p>
        Triggering a bar is not always the end of the road. The unlawful presence bars can be <strong>waived</strong>
        under <strong>INA &sect; 212(a)(9)(B)(v)</strong> if you can prove that refusing your admission would cause{' '}
        <strong>&ldquo;extreme hardship&rdquo;</strong> to a <strong>U.S. citizen or lawful permanent resident spouse or
        parent</strong>. (Hardship to your children, by itself, does not qualify &mdash; only its effect on a qualifying
        spouse or parent.) Two forms deliver this relief:
      </p>
      <ul>
        <li>
          <strong>Form I-601A, the provisional unlawful presence waiver.</strong> This is the breakthrough tool for
          undocumented spouses. It lets eligible applicants get the unlawful presence bar waived{' '}
          <em>while still in the United States</em>, before they leave for the consular interview &mdash; turning a
          potential ten-year separation into a trip of days or weeks. See our detailed{' '}
          <Link href="/blog/i-601a-provisional-unlawful-presence-waiver-georgia">I-601A provisional waiver guide</Link>.
        </li>
        <li>
          <strong>Form I-601, the broader waiver of inadmissibility.</strong> When other grounds are involved &mdash;
          fraud, certain crimes, or a prior removal &mdash; a full{' '}
          <Link href="/blog/i-601-inadmissibility-waiver-extreme-hardship-georgia">Form I-601 waiver</Link> may be
          required in addition to, or instead of, the I-601A.
        </li>
      </ul>

      <h2>The Permanent Bar &mdash; a Different, Harsher Trap</h2>
      <p>
        Do not confuse the 3- and 10-year bars with the <strong>&ldquo;permanent bar&rdquo;</strong> under{' '}
        <strong>INA &sect; 212(a)(9)(C)</strong>. That far more severe penalty applies to someone who accrued more than
        one year of unlawful presence (in the aggregate), <em>departed</em>, and then <strong>re-entered or tried to
        re-enter the U.S. without being admitted</strong>. The permanent bar generally cannot even be waived until the
        person has spent <strong>ten years outside</strong> the country and then obtains consent to reapply. This is why
        a single unauthorized re-entry can be catastrophic &mdash; and why anyone with a prior departure and re-entry must
        be screened carefully. See our guide to{' '}
        <Link href="/blog/after-deportation-reentry-bars-waivers-georgia">reentry bars and waivers after a departure</Link>.
      </p>

      <h2>What This Means for Georgia and Alabama Families</h2>
      <p>
        Across Georgia and Alabama, the most common scenario we see is an undocumented spouse who entered without
        inspection, married a U.S. citizen, and wants to fix their status. Because they cannot{' '}
        <Link href="/blog/adjustment-of-status-green-card-georgia">adjust status</Link> inside the country, they face
        consular processing abroad &mdash; and the unlawful presence bar that comes with departure. The right sequence is
        almost always: confirm there are no <em>other</em> grounds of inadmissibility, build the extreme-hardship record,
        secure the I-601A approval, and only then travel. Done in the wrong order, the same family that qualified for a
        green card can be separated for ten years.
      </p>

      <h2>Why an Immigration Attorney Matters</h2>
      <p>
        Unlawful presence is governed by overlapping clocks, tolling rules, and exceptions that are easy to miscount and
        unforgiving when you do. The difference between 179 days and 181 days, or between a departure that triggers a bar
        and one that does not, can decide whether a family stays together. An experienced attorney maps your exact
        accrual, screens for the permanent bar and other inadmissibility grounds, and sequences any waiver{' '}
        <em>before</em> you ever leave the country. Learn more about our{' '}
        <Link href="/services/family-based-immigration">family-based immigration</Link> services.
      </p>

      <h2>Talk to Eszter Bardi &mdash; Free Consultation</h2>
      <p>
        If you or your spouse has overstayed a visa or entered without inspection, <strong>do not leave the United
        States to &ldquo;fix&rdquo; your status without legal advice.</strong> At Bardi Immigration Law, attorney{' '}
        <strong>Eszter Bardi</strong> helps families across Georgia and Alabama understand exactly how much unlawful
        presence they have accrued, whether a bar applies, and how the I-601A and I-601 waivers can keep their time apart
        to a minimum.
      </p>
      <p>
        <strong>Schedule your free consultation today.</strong> We will calculate your unlawful presence, screen for the
        permanent bar and other issues, and map the safest path forward. You will work directly with Attorney Bardi
        &mdash; no intake specialist. <Link href="/contact">Request your free consultation online.</Link> Hablamos
        espa&ntilde;ol.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | This article provides general legal information and does not constitute
          legal advice. Immigration law is complex, fact-specific, and changes frequently. Unlawful presence accrual, the
          tolling rules, and the 3-year, 10-year, and permanent bars in particular involve detailed and technical
          eligibility rules &mdash; confirm current law and your individual case with a licensed immigration attorney
          before filing or traveling.
        </em>
      </p>
    </div>
  );
}
