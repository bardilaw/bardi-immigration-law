/* Verify before publish — references nonimmigrant work rules and remote-work analysis by status: the general rule that "employment" performed while physically present in the U.S. requires authorization regardless of where the employer or paycheck sits; the B-1 business-visitor framework under INA §101(a)(15)(B) and 9 FAM 402.2 and the gray area of working remotely for a foreign employer from a U.S. address; F-1 OPT/CPT employment rules under 8 CFR 214.2(f)(10)-(11) (work must relate to the field of study, be reported in the SEVP Portal, and CPT requires a U.S. employer and curricular integration); H-1B worksite/LCA rules including Matter of Simeio Solutions, 26 I&N Dec. 542 (AAO 2015) (a move to a worksite outside the area of intended employment on the certified LCA is a material change requiring a new LCA and an amended petition) and the DOL "normal commuting distance" / home-as-worksite analysis; J-1 program-sponsor authorization and the two-year home-residence requirement under INA §212(e); L-1 employer/role specificity; and green-card abandonment risk for LPRs working abroad long-term. No outcome promised; readers told to confirm with their DSO, program sponsor, or attorney and to verify current USCIS/DOL/SEVP guidance, which has shifted post-COVID. */
import Link from 'next/link';

export function RemoteWorkVisaPostContent() {
  return (
    <div className="prose-blog">
      <p>
        Remote work changed the rules everyone thought they understood about jobs &mdash; but it did not change
        U.S. immigration law, which still asks two old-fashioned questions: <em>what does your visa allow</em>,
        and <em>where is the work actually being performed?</em> A foreign national in Georgia who is offered a
        remote job, or whose employer goes fully remote, can quickly drift into a status violation without ever
        leaving their living room. This guide explains how remote and hybrid work interacts with the most common
        visa categories. It is general information, not legal advice.
      </p>
      <p className="disclaimer">
        <strong>Remote-work rules are fact-specific and have shifted since 2020.</strong> USCIS, the Department
        of Labor, and SEVP have all updated guidance, and the answer often turns on small details &mdash; who
        pays you, where you sit, and whether your status permits employment at all. Confirm your situation with
        your school&rsquo;s DSO, your program sponsor, or an immigration attorney before you accept or change a
        remote role.
      </p>

      <h2>The One Principle That Drives Everything</h2>
      <p>
        Most remote-work confusion disappears once you understand the core rule: <strong>work physically
        performed inside the United States generally requires work authorization, no matter where your employer
        is located or where your paycheck comes from.</strong> &ldquo;I work for a company in another country&rdquo;
        is not, by itself, a defense. The flip side is also true &mdash; some categories let you do narrow
        things remotely that look like work but are not treated as unauthorized employment. Where you fall
        depends entirely on your status.
      </p>

      <h2>B-1/B-2 Visitors: The Foreign-Employer Gray Zone</h2>
      <p>
        The hardest question we get is from people here as visitors: <em>&ldquo;Can I keep doing my job back
        home from a U.S. address?&rdquo;</em> A <Link href="/blog/b1-business-visitor-visa-georgia-allowed-activities">B-1
        business visitor</Link> may attend meetings, negotiate contracts, and conduct business for a foreign
        employer who keeps them on a foreign payroll. Incidentally checking email or taking a call for that
        foreign employer during a genuine visit is generally tolerated.
      </p>
      <p>
        But relocating to the U.S. and working full-time remotely for months &mdash; even for a foreign company,
        even paid entirely abroad &mdash; is a different animal. There is no &ldquo;digital nomad&rdquo; visa in
        the United States, and a B-1/B-2 is for a <strong>temporary visit</strong>, not for living here while
        working. Long-term remote work from the U.S. on a visitor visa risks being treated as unauthorized
        employment and as evidence that you are not really a temporary visitor &mdash; which can lead to denied
        entry, a status violation, and exposure to the{' '}
        <Link href="/blog/unlawful-presence-3-year-10-year-bar-georgia">3- and 10-year bars</Link>. The
        analysis is genuinely nuanced; do not rely on internet folk wisdom that &ldquo;a foreign paycheck makes
        it legal.&rdquo;
      </p>

      <h2>F-1 Students on OPT and CPT</h2>
      <p>
        For <Link href="/blog/student-visa-f1-opt-stem-georgia">F-1 students</Link>, the key is that any
        employment must be properly authorized and must <strong>relate to your field of study</strong>.
      </p>
      <ul>
        <li>
          <strong>OPT (post-completion):</strong> Remote work for a U.S. employer is generally fine, provided the
          job relates to your degree and you report the employer in the SEVP Portal. Unemployment days still
          count against your limit, so &ldquo;remote and unpaid&rdquo; gaps can be dangerous. The{' '}
          <Link href="/blog/stem-opt-extension-24-month-work-authorization-georgia">24-month STEM OPT
          extension</Link> adds stricter rules &mdash; a formal training plan (Form I-983) and an E-Verify
          employer &mdash; that are hard to satisfy with an informal remote arrangement.
        </li>
        <li>
          <strong>Working remotely for a foreign employer on OPT:</strong> This raises real questions. The work
          is performed in the U.S., must still relate to your field, and must be reported &mdash; and a foreign
          company without a U.S. presence can make the STEM-extension requirements impossible. Clear it with your
          DSO first.
        </li>
        <li>
          <strong>CPT:</strong> Curricular Practical Training must be an integral part of your curriculum and tied
          to a specific U.S. employer and authorization. It does not stretch to cover a side remote gig.
        </li>
      </ul>

      <h2>H-1B Holders: When Going Remote Triggers a New Filing</h2>
      <p>
        The <Link href="/blog/h1b-visa-sponsorship-cap-georgia">H-1B</Link> is both employer-specific and
        <strong> location-specific</strong>, because the certified Labor Condition Application (LCA) lists the
        place of employment and the prevailing wage for that area. Two scenarios come up constantly:
      </p>
      <ul>
        <li>
          <strong>Working from home near the office:</strong> If your home is within normal commuting distance of
          the worksite already on the LCA &mdash; the same &ldquo;area of intended employment&rdquo; &mdash; the
          Department of Labor generally treats it as the same place of employment. A short-term placement under
          the 30/60-day rules may also be allowed. Usually no amended petition is needed, though the employer
          must keep its LCA records (the public access file) in order.
        </li>
        <li>
          <strong>Moving to a different metro area:</strong> Under <em>Matter of Simeio Solutions</em>, moving to
          a worksite <strong>outside the area of intended employment</strong> on the certified LCA is a material
          change. The employer must file a <strong>new LCA</strong> for the new location and an{' '}
          <strong>amended H-1B petition</strong> with USCIS <em>before</em> you start working there. So an H-1B
          employee who relocates from Atlanta to another state to work remotely cannot simply move &mdash; the
          employer has to act first.
        </li>
      </ul>
      <p>
        Bottom line: post-COVID, fully remote H-1B work is common and accepted, but the employer carries real
        LCA and amendment obligations whenever your physical work location changes. Do not assume &ldquo;remote
        means location doesn&rsquo;t matter.&rdquo;
      </p>

      <h2>J-1 Exchange Visitors</h2>
      <p>
        J-1 status is controlled by your <strong>program sponsor</strong> and the specific category on your
        DS-2019 (intern, trainee, research scholar, professor, and so on). Your activities &mdash; including a
        shift to remote or hybrid work &mdash; must stay consistent with the approved program and be authorized
        by the sponsor, not arranged privately with a host employer. Two cautions: a remote arrangement may not
        fit the supervision and training requirements your category demands, and many J-1s are subject to the
        <strong> two-year home-residence requirement under INA §212(e)</strong>, which a remote setup does
        nothing to change. Talk to your responsible officer before altering your work format.
      </p>

      <h2>L-1, TN, and Other Work Visas</h2>
      <p>
        Categories like the <Link href="/blog/l1-intracompany-transferee-visa-georgia">L-1 intracompany
        transferee</Link> are tied to a specific U.S. petitioning employer and an approved role. Remote work
        within reason is usually fine, but changes to your duties, employer, or location can implicate the same
        material-change and worksite concerns that affect H-1Bs. The safe practice across every employment
        category is the same: <strong>before you change where or for whom you work, confirm whether a new or
        amended petition is required.</strong>
      </p>

      <h2>DACA Recipients</h2>
      <p>
        <Link href="/blog/daca-deferred-action-childhood-arrivals-georgia">DACA</Link> recipients work under an
        Employment Authorization Document that authorizes employment in the United States broadly &mdash; it is
        not tied to one employer or one worksite the way an H-1B is. So remote work, hybrid work, and even
        working remotely for a foreign company are generally permissible, as long as the EAD is valid and
        unexpired. The practical risk for DACA holders is not the <em>format</em> of the work but the{' '}
        <strong>expiration of the EAD</strong>: file the renewal early (USCIS recommends 120 to 150 days
        ahead), because a lapse means you must stop working, remote or not.
      </p>

      <h2>Dependents and People Without Work Authorization</h2>
      <p>
        A remote &ldquo;work from home&rdquo; offer does not create work authorization that your status does not
        already give you. Dependents in <strong>F-2</strong> status cannot work at all. An{' '}
        <strong>H-4 spouse</strong> may work remotely only if they hold a valid{' '}
        <Link href="/blog/h4-ead-work-authorization-h1b-spouses-georgia">H-4 EAD</Link>. Anyone whose category
        does not authorize employment &mdash; or who needs an{' '}
        <Link href="/blog/employment-authorization-ead-georgia">Employment Authorization Document</Link> first
        &mdash; cannot take a remote U.S. job simply because it is remote.
      </p>

      <h2>Green Card Holders Working Remotely</h2>
      <p>
        Lawful permanent residents and U.S. citizens can work remotely without immigration restrictions inside
        the country. But an LPR who decides to work remotely <em>from abroad</em> long-term faces a different
        risk: <Link href="/blog/green-card-abandonment-travel-rules-reentry-permit-georgia">abandonment of
        permanent residence</Link>. Extended time outside the U.S. &mdash; even for a U.S. employer &mdash; can
        be read as giving up your residency. A reentry permit and careful planning matter if remote work will
        keep you overseas.
      </p>

      <h2>Talk to a Georgia Immigration Attorney</h2>
      <p>
        Remote and hybrid work has outrun the assumptions many people make about what their visa allows. The
        wrong move &mdash; taking a job your status does not authorize, or relocating without an amended petition
        &mdash; can quietly create a status problem that surfaces years later at a green-card or renewal stage.
        Bardi Immigration Law helps workers, students, and employers across <strong>Georgia and Alabama</strong>
        {' '}structure remote arrangements that keep status intact. Attorney <strong>Eszter Bardi</strong>{' '}
        provides direct attorney access and practical, status-specific guidance. If you are weighing a remote
        offer or a relocation, learn{' '}
        <Link href="/blog/how-to-choose-immigration-attorney-georgia">how to choose an immigration
        attorney</Link>.
      </p>
      <p>
        <Link href="/contact">Schedule a consultation today.</Link>
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | This blog post is for informational purposes only and does not
          constitute legal advice. Remote-work and worksite rules are fact-specific and have changed since 2020;
          USCIS, DOL, and SEVP guidance continues to evolve. Whether a particular remote arrangement is
          permitted depends on your individual status and circumstances. Confirm your situation with your DSO,
          program sponsor, or a licensed immigration attorney before accepting or changing a remote role.
        </em>
      </p>
    </div>
  );
}
