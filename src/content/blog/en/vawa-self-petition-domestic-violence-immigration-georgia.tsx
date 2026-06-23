/* Verify before publish — covers VAWA self-petition under INA § 204(a)(1)(A)(iii)-(iv) and § 204(a)(1)(B)(ii)-(iii) (I-360 for spouses of USCs and LPRs, children, and parents); the "battery or extreme cruelty" standard; VAWA confidentiality under INA § 384 (DHS/USCIS prohibited from disclosing information to the abuser); VAWA-based adjustment of status and the immediate-relative exception for USC spouses; the F2A preference category for LPR spouses and the priority-date analysis; the Vermont Service Center VAWA Unit; and the VAWA I-751 battery/cruelty waiver (distinct relief for conditional residents). Statutory framework is stable. Reconfirm current USCIS processing times for I-360 at the Vermont Service Center, Georgia Coalition Against Domestic Violence contact information, the Georgia Address Confidentiality Program (ACP) details, the Safe at Home program, and National DV Hotline current numbers before go-live. Eligibility and outcomes are case-specific; post is deliberately qualitative about approval odds. */
import Link from 'next/link';

export function VawaSelfPetitionPostContent() {
  return (
    <div className="prose-blog">
      <div className="border-l-4 border-gold bg-warmgray px-5 py-4 mb-8 rounded-r-[4px]">
        <p className="font-semibold text-navy mb-1">Safety first</p>
        <p>
          If you are in immediate danger, call <strong>911</strong>. The{' '}
          <strong>National Domestic Violence Hotline</strong> is available 24/7 at{' '}
          <strong>1-800-799-7233</strong> (TTY: 1-800-787-3224) and by text by texting START to 88788. For
          Georgia-specific resources, the{' '}
          <strong>Georgia Coalition Against Domestic Violence</strong> connects survivors to local shelters,
          legal advocates, and safety planning support across the state.
        </p>
      </div>

      <p>
        Domestic violence is one of immigration law&rsquo;s hardest intersections. An abusive spouse often uses
        immigration status as a weapon &mdash; threatening to withdraw a petition, call immigration
        authorities, or refuse to sign paperwork if the survivor tries to leave. Congress anticipated exactly
        this dynamic when it passed the <strong>Violence Against Women Act (VAWA)</strong>. One of VAWA&rsquo;s
        most powerful and least understood provisions gives immigrant survivors the right to petition for
        their own immigration status &mdash; completely independently, without the abuser&rsquo;s knowledge or
        cooperation, and with strict federal confidentiality protections preventing USCIS from ever disclosing
        the petition to the abuser.
      </p>
      <p>
        This guide explains the <strong>VAWA self-petition</strong>: who can file, what qualifies as abuse,
        how the process works, how it differs from the U-visa and other protections, and what the path to a
        green card looks like. If you are a domestic violence survivor in Georgia who is married to a U.S.
        citizen or permanent resident, or who has been abused by one, VAWA may be the most direct route to
        safety and legal status available to you.
      </p>

      <h2>What the VAWA Self-Petition Is</h2>
      <p>
        A VAWA self-petition is filed on <strong>Form I-360, Petition for Amerasian, Widow(er), or Special
        Immigrant</strong>. Despite the form&rsquo;s broad title, VAWA filers use it to establish that they
        qualify as an abused spouse, child, or parent of a U.S. citizen (USC) or lawful permanent resident
        (LPR). &ldquo;Self-petition&rdquo; means the survivor files the petition themselves &mdash; they do
        not need the abuser to cooperate, sponsor, or sign anything. The abuser is not notified that the
        petition was filed.
      </p>
      <p>
        A key feature: the USCIS VAWA Unit at the <strong>Vermont Service Center</strong> handles all VAWA
        I-360 petitions under strict confidentiality rules. Under <strong>INA &sect; 384</strong>, USCIS is
        legally <strong>prohibited from disclosing</strong> the existence of the petition, the survivor&rsquo;s
        address, or any information about the case to the abuser, the abuser&rsquo;s attorney, or anyone else
        not authorized by the survivor. This is not a policy preference &mdash; it is a federal prohibition,
        with civil penalties for violations.
      </p>

      <h2>Who Can File a VAWA Self-Petition</h2>
      <p>
        VAWA self-petition eligibility under INA &sect; 204(a) covers three categories:
      </p>
      <ul>
        <li>
          <strong>Abused spouses of U.S. citizens or LPRs.</strong> The survivor must have been legally
          married to the USC or LPR abuser, or the marriage must have been terminated within the last two
          years due to the abuse (or due to the abuser&rsquo;s death). A bigamous marriage entered into in
          good faith can qualify in some circumstances. Divorce does not automatically disqualify &mdash; the
          statute protects survivors whose marriages ended because of the violence.
        </li>
        <li>
          <strong>Abused children of U.S. citizens or LPRs.</strong> Children under 21 (or up to 25 in some
          circumstances) who have been abused by the USC or LPR parent may file on their own, or a parent may
          file on behalf of an abused child.
        </li>
        <li>
          <strong>Abused parents of U.S. citizens.</strong> Parents abused by an adult USC son or daughter
          may also self-petition. Note: the U.S. citizen child must be at least 21.
        </li>
      </ul>
      <p>
        A survivor filing as an abused spouse must also show that they <strong>co-habitated</strong> with the
        abuser at some point (even briefly), that they entered the marriage in <strong>good faith</strong> (not
        solely to obtain immigration benefits), and that they are a person of <strong>good moral
        character</strong>.
      </p>

      <h2>What Qualifies as Abuse Under VAWA</h2>
      <p>
        VAWA uses the phrase <strong>&ldquo;battery or extreme cruelty.&rdquo;</strong> This is broader than
        it might sound. Battery includes any physical assault &mdash; hitting, choking, pushing, burning. But
        extreme cruelty covers a much wider range of abuse:
      </p>
      <ul>
        <li>Psychological and emotional abuse, including isolation, threats, humiliation, and intimidation</li>
        <li>Controlling behavior: controlling finances, movement, communication, or immigration documents</li>
        <li>Threatening to report the survivor to immigration authorities or have them deported</li>
        <li>Sexual abuse or coercion</li>
        <li>Using children as leverage or threats</li>
        <li>Destruction of property or pets to instill fear</li>
      </ul>
      <p>
        The abuse does not have to be physical, and it does not have to have been reported to police. Survivors
        whose abusers never left a visible mark &mdash; but who lived in constant fear, were financially
        controlled, or were threatened with deportation &mdash; may qualify just as fully. The evidence
        standard requires that the abuse occurred; there is no minimum severity threshold beyond the statutory
        definitions.
      </p>

      <h2>VAWA Self-Petition vs. the U-Visa: An Important Distinction</h2>
      <p>
        Many survivors have heard of both VAWA and the U-visa, and the confusion between them can lead to
        filing the wrong thing. They are separate forms of relief on different forms, processed under different
        standards:
      </p>
      <ul>
        <li>
          <strong>VAWA self-petition (Form I-360)</strong> is for survivors who were abused by a USC or LPR
          family member. It does not require law enforcement involvement. The survivor does not need a police
          report, criminal charges, or a certification from any government agency.
        </li>
        <li>
          <strong>U-visa (Form I-918)</strong> is for survivors of a broader list of qualifying crimes
          (including domestic violence, but also sexual assault, stalking, felonious assault, and others) who
          cooperated with law enforcement. A U-visa <em>requires</em> a signed law enforcement certification
          (Form I-918B) &mdash; without it, there is no U-visa. It also carries a 10,000-per-year cap and a
          multi-year waitlist.
        </li>
        <li>
          <strong>VAWA I-751 battery/cruelty waiver</strong> is different from both. It is for survivors who
          already have a conditional green card (a 2-year card issued through marriage) and are trying to
          remove the conditions without a joint petition from the abusive spouse. This is not a self-petition;
          it is a waiver filed during the{' '}
          <Link href="/blog/remove-conditions-green-card-i-751-georgia">Form I-751 process</Link>.
        </li>
      </ul>
      <p>
        A survivor who was abused by a USC or LPR and who was also a victim of a qualifying crime may be
        eligible for <em>both</em> VAWA and a U-visa. An attorney can evaluate which provides a faster,
        cleaner path, or whether filing both makes strategic sense.
      </p>

      <h2>The I-360 VAWA Petition Process</h2>
      <p>
        The VAWA self-petition is filed with the <strong>Vermont Service Center VAWA Unit</strong>, which
        handles only VAWA cases and operates under strict confidentiality protocols separate from USCIS&rsquo;s
        general case processing. There is currently <strong>no filing fee</strong> for the I-360 VAWA
        self-petition &mdash; Congress removed it so that cost would not be a barrier for survivors. A strong
        I-360 package typically includes:
      </p>
      <ul>
        <li>
          <strong>Form I-360</strong> with a detailed personal declaration from the survivor describing the
          relationship, the abuse, and the facts that establish eligibility &mdash; this is the core of the
          case.
        </li>
        <li>
          <strong>Evidence of the qualifying relationship</strong>: marriage certificate, proof of the
          abuser&rsquo;s USC or LPR status (citizenship certificate, passport, green card).
        </li>
        <li>
          <strong>Evidence of good-faith marriage</strong>: joint lease, joint accounts, insurance records,
          photos, communications, birth certificates for shared children.
        </li>
        <li>
          <strong>Evidence of battery or extreme cruelty</strong>: police reports (if available), protective
          orders, medical or hospital records, mental health treatment records, photos of injuries,
          declarations from witnesses (counselors, clergy, neighbors), and records from domestic violence
          shelters or advocacy organizations.
        </li>
        <li>
          <strong>Evidence of co-habitation</strong>: lease, utility bills, or other records showing the
          survivor lived with the abuser at some point.
        </li>
        <li>
          <strong>Good moral character evidence</strong>: typically a personal statement plus any government
          or community records.
        </li>
        <li>
          A <strong>safe address</strong> for USCIS to send correspondence &mdash; which does not need to be
          the survivor&rsquo;s actual address and cannot be the abuser&rsquo;s.
        </li>
      </ul>
      <p>
        There is no USCIS interview for most VAWA I-360 petitions. Requests for Evidence (RFEs) are possible,
        and processing times vary. Once approved, the survivor receives a <strong>Notice of Approval</strong>{' '}
        and is placed in a protected category.
      </p>

      <h2>Path to a Green Card After VAWA Approval</h2>
      <p>
        An approved VAWA self-petition does not itself grant a green card &mdash; it establishes eligibility.
        The path to lawful permanent residence depends on who the abuser is:
      </p>
      <ul>
        <li>
          <strong>Abused spouses and children of U.S. citizens</strong> are treated as{' '}
          <strong>immediate relatives</strong> under INA &sect; 201(b). There is no annual cap and no waiting
          list for immediate relatives &mdash; a visa number is immediately available once the I-360 is
          approved. The survivor can file <Link href="/blog/adjustment-of-status-green-card-georgia">Form
          I-485 for adjustment of status</Link> (green card inside the U.S.) as soon as the I-360 is
          approved, or concurrently in some circumstances.
        </li>
        <li>
          <strong>Abused spouses and children of LPRs</strong> fall into the <strong>F2A preference
          category</strong>, which has a per-country annual cap. In most cases the wait is modest &mdash; F2A
          is one of the faster preference categories &mdash; but there can be a wait before a visa number
          becomes available. During that wait, an approved I-360 gives the survivor <strong>deferred
          action</strong> status and <strong>work authorization</strong>.
        </li>
        <li>
          <strong>Abused parents of U.S. citizens</strong> are also immediate relatives with no waiting
          period.
        </li>
      </ul>
      <p>
        The adjustment of status process for VAWA applicants follows the same general framework as other
        family-based green cards, with one important protection: VAWA-based applicants cannot be denied solely
        because of the abuser&rsquo;s criminal history or misconduct.
      </p>

      <h2>Georgia Context: Resources and Safety Planning</h2>
      <p>
        Georgia has a network of domestic violence organizations that work alongside immigration attorneys to
        support survivors. The <strong>Georgia Coalition Against Domestic Violence (GCADV)</strong> connects
        survivors statewide to certified domestic violence programs offering shelter, legal advocacy, and
        safety planning. Many of these organizations have experience with immigration holds and VAWA petitions
        and can provide the declaration letters and records that strengthen an I-360 case.
      </p>
      <p>
        Georgia also offers an <strong>Address Confidentiality Program (ACP)</strong> through the Secretary of
        State&rsquo;s office, sometimes called Safe at Home. Enrolled survivors receive a substitute address
        that government agencies (including USCIS where permitted) use in place of the survivor&rsquo;s real
        address, helping ensure an abuser cannot locate them through public records.
      </p>
      <p>
        For Spanish-speaking survivors, many GCADV member programs offer bilingual services, and USCIS VAWA
        petitions can be filed with Spanish-language evidence. Legal notices from USCIS are issued in English,
        and an attorney or accredited representative can help manage communications safely.
      </p>

      <h2>Why an Immigration Attorney Matters in VAWA Cases</h2>
      <p>
        VAWA self-petition cases are among the most consequential &mdash; and most personal &mdash; in
        immigration law. The personal declaration must strike a careful balance: detailed enough to satisfy the
        abuse standard, organized enough to be persuasive, and written in a way that doesn&rsquo;t re-traumatize
        the client through the drafting process. Evidence must be gathered without alerting the abuser or
        triggering a response. Safe correspondence addresses and confidentiality measures must be coordinated
        from the first filing.
      </p>
      <p>
        An experienced attorney also evaluates the full picture: whether VAWA, the U-visa, or both are
        appropriate; how prior criminal history (including anything the abuser may have fabricated or coerced
        the survivor into) affects the case; whether an inadmissibility waiver is needed; and the fastest
        route to work authorization and stable status. A VAWA petition filed incorrectly or incompletely can
        result in a denial that makes subsequent filings harder, and can leave a survivor in an uncertain status
        for longer than necessary. This is not a do-it-yourself filing.
      </p>

      <h2>Talk to Eszter Bardi &mdash; Confidential Consultation</h2>
      <p>
        Attorney <strong>Eszter Bardi</strong> at Bardi Immigration Law represents immigrant survivors across{' '}
        <strong>Georgia and Alabama</strong> in VAWA self-petition cases and related immigration matters. She
        understands that safety planning, confidentiality, and emotional care must come first in these cases,
        and works with the care these situations require.
      </p>
      <p>
        <strong>Your consultation is free and confidential.</strong> We will never contact your abuser or
        disclose your information. You work directly with Attorney Bardi &mdash; not an intake form.{' '}
        <Link href="/contact">Request your free consultation online.</Link> Hablamos espa&ntilde;ol.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | This article provides general legal information and does not
          constitute legal advice. VAWA self-petition eligibility and outcomes are case-specific; nothing here
          guarantees a result. USCIS forms, fees, processing times, and program details change &mdash; confirm
          current requirements with a licensed immigration attorney before filing. If you or someone you know
          is in immediate danger, call 911. The National Domestic Violence Hotline is 1-800-799-7233.
        </em>
      </p>
    </div>
  );
}
