/* Verify before publish — references immigration law/procedure (employment-based nonimmigrant visas H-1B, L-1, O-1; the H-1B cap and lottery; employment-based green card categories EB-1, EB-2, EB-3 including the EB-2 national interest waiver; PERM labor certification and the prevailing-wage / recruitment framework; the priority date and visa-bulletin backlog concept; and the adjustment-of-status vs. consular-processing choice). Cap numbers, lottery mechanics, wage rules, processing times, and filing fees change periodically and vary by category and country of birth. Confirm current categories, caps, wage rules, forms, and fees against USCIS and the DOL before go-live. */
import Link from 'next/link';

export function EmploymentBasedImmigrationPostContent() {
  return (
    <div className="prose-blog">
      <p>
        For a Georgia company, the right hire is sometimes a foreign national &mdash; an engineer, a physician, a
        researcher, a manager transferring from an overseas office. For the worker, a job offer in Atlanta can be the
        start of a career and, eventually, a green card. Employment-based immigration is how those two interests meet, and
        it is one of the most technical corners of U.S. immigration law.
      </p>
      <p>
        Whether you are an employer trying to sponsor talent or a worker trying to build a future here, the rules reward
        planning and punish guesswork. This guide explains the main work visas (H-1B, L-1, and O-1), the
        employment-based green card categories (EB-1, EB-2, and EB-3), and the PERM labor certification process that sits
        underneath most of them &mdash; from both the employer&rsquo;s and the employee&rsquo;s point of view.
      </p>

      <h2>Two Tracks: Temporary Work Visas vs. Green Cards</h2>
      <p>
        Employment-based immigration runs on two tracks that often connect. The first is the <strong>nonimmigrant</strong>{' '}
        track &mdash; temporary work visas that let a foreign national work for a sponsoring employer for a defined period.
        The second is the <strong>immigrant</strong> track &mdash; employment-based green cards that grant permanent
        residence. Many people start on a temporary visa like H-1B and later move to a green card through their employer.
        Understanding how the two fit together is the difference between a smooth path and a status gap that forces someone
        to stop working or leave the country.
      </p>

      <h2>H-1B: The Specialty Occupation Visa</h2>
      <p>
        The <strong>H-1B</strong> is the best-known U.S. work visa. It is for <strong>specialty occupations</strong> &mdash;
        roles that normally require at least a bachelor&rsquo;s degree (or its equivalent) in a specific field. Software
        developers, engineers, accountants, architects, and many healthcare and finance roles commonly qualify.
      </p>
      <ul>
        <li>
          <strong>The employer sponsors.</strong> An H-1B is employer-specific. The company files the petition, and the
          worker cannot simply carry it to a different employer without a new filing.
        </li>
        <li>
          <strong>The wage rules matter.</strong> Before filing, the employer certifies a Labor Condition Application with
          the Department of Labor, promising to pay at least the required wage for the role and location &mdash; a
          protection for both the foreign worker and the local labor market.
        </li>
        <li>
          <strong>The cap and the lottery.</strong> Congress limits how many new H-1Bs are issued each year. When demand
          exceeds the cap &mdash; as it routinely does &mdash; USCIS runs a <strong>lottery</strong> to select which
          registrations may proceed. Not every qualified candidate is selected, which is why employers plan their hiring
          and timing around the annual cap cycle. Certain employers, such as universities and affiliated nonprofits, are
          <strong> cap-exempt</strong> and can file year-round.
        </li>
      </ul>
      <p>
        Because the lottery is uncertain, smart employers and candidates build a backup plan &mdash; another visa
        category, cap-exempt options, or a later cycle &mdash; rather than betting everything on a single registration.
      </p>

      <h2>L-1: Transferring Talent Within a Company</h2>
      <p>
        The <strong>L-1</strong> visa moves an employee from a company&rsquo;s foreign office to a related U.S. office
        (parent, branch, subsidiary, or affiliate). It comes in two forms:
      </p>
      <ul>
        <li><strong>L-1A</strong> for executives and managers;</li>
        <li><strong>L-1B</strong> for employees with specialized knowledge of the company&rsquo;s products, systems, or processes.</li>
      </ul>
      <p>
        To qualify, the employee generally must have worked for the related foreign entity for a continuous period (about
        one year) within the few years before transfer. The L-1 is not subject to the H-1B lottery, which makes it a
        valuable option for multinational companies expanding into Georgia &mdash; and the L-1A in particular pairs
        naturally with the EB-1 green card for multinational managers and executives described below.
      </p>

      <h2>O-1: Extraordinary Ability</h2>
      <p>
        The <strong>O-1</strong> visa is for individuals with <strong>extraordinary ability</strong> in the sciences,
        arts, education, business, or athletics &mdash; people at the top of their field who can document sustained
        national or international acclaim through awards, publications, leading roles, press coverage, and similar
        evidence. It is not limited to celebrities; researchers, founders, and specialized professionals often qualify
        when the record is built carefully. Like the L-1, the O-1 is not subject to the H-1B cap, which makes it a strong
        option for exceptional candidates who were not selected in the lottery.
      </p>

      <h2>Employment-Based Green Cards: EB-1, EB-2, EB-3</h2>
      <p>
        Permanent residence through employment is organized into preference categories. The three that cover most workers
        are:
      </p>
      <ul>
        <li>
          <strong>EB-1 &mdash; Priority Workers.</strong> For people of extraordinary ability, outstanding professors and
          researchers, and certain multinational managers and executives. EB-1 is the most selective category, but it has
          a major advantage: many EB-1 cases do <em>not</em> require the PERM labor certification step, which can save a
          great deal of time.
        </li>
        <li>
          <strong>EB-2 &mdash; Advanced Degrees or Exceptional Ability.</strong> For professionals holding an advanced
          degree (or a bachelor&rsquo;s plus several years of progressive experience) and for those with exceptional
          ability. EB-2 also includes the <strong>National Interest Waiver (NIW),</strong> which can let a qualified
          person <strong>self-petition</strong> &mdash; without an employer sponsor or PERM &mdash; if their work has
          substantial merit and national importance. The NIW is a powerful option for entrepreneurs, researchers, and
          specialized professionals.
        </li>
        <li>
          <strong>EB-3 &mdash; Skilled Workers and Professionals.</strong> For skilled workers (jobs requiring at least
          two years of training or experience), professionals with a bachelor&rsquo;s degree, and certain other workers.
          EB-3 generally requires employer sponsorship and PERM.
        </li>
      </ul>
      <p>
        A critical wrinkle: green cards in these categories are limited by annual numerical caps, and the wait depends on
        your <strong>priority date</strong> and your <strong>country of birth.</strong> Applicants from countries with
        heavy demand can face long backlogs even after their case is approved &mdash; an essential planning factor that an
        attorney can map out using the monthly visa bulletin before you choose a strategy.
      </p>

      <h2>PERM Labor Certification: The Step Underneath Most Cases</h2>
      <p>
        For most EB-2 and EB-3 cases, the employer must first complete <strong>PERM labor certification</strong> through
        the Department of Labor. PERM exists to protect U.S. workers: the employer must test the labor market and show
        that there is no qualified, willing, and available U.S. worker for the position, and that hiring the foreign
        worker will not harm the wages and working conditions of similar U.S. employees. In broad strokes, PERM involves:
      </p>
      <ol>
        <li><strong>A prevailing wage determination</strong> from the Department of Labor for the role and location;</li>
        <li><strong>Recruitment</strong> &mdash; a defined set of job advertisements and good-faith review of U.S. applicants;</li>
        <li><strong>Filing the certification</strong> with the Department of Labor, attesting to the recruitment results.</li>
      </ol>
      <p>
        PERM is detailed and unforgiving &mdash; a single misstep in the wording of an ad or the timing of a step can
        force the employer to start over. After PERM is certified, the employer files the immigrant petition, and the
        worker eventually applies for the green card. EB-1 priority workers and EB-2 National Interest Waiver
        self-petitioners are the notable exceptions that skip PERM entirely.
      </p>

      <h2>For Employers: What Sponsorship Really Involves</h2>
      <p>
        Sponsoring a foreign worker is a commitment of time, money, and recordkeeping &mdash; but for the right hire, it
        is well worth it. As an employer, you should understand:
      </p>
      <ul>
        <li>The category that fits the role and candidate, and whether the H-1B cap or a backlog will affect timing;</li>
        <li>Your wage obligations and the public-access file or recordkeeping duties that come with certain visas;</li>
        <li>How to sequence a temporary visa and a green card so your employee never falls out of status;</li>
        <li>The cost allocation rules &mdash; some fees must legally be paid by the employer, not the worker.</li>
      </ul>
      <p>
        Getting the strategy right at the start &mdash; before a candidate accepts an offer &mdash; avoids expensive
        do-overs and protects both the company and the hire.
      </p>

      <h2>For Employees: Protecting Your Status and Your Path</h2>
      <p>
        If you are the worker, your status is tied to your employer and your category, so the details matter for your
        livelihood. Keep in mind:
      </p>
      <ul>
        <li>Most work visas are employer-specific &mdash; changing jobs usually requires a new petition;</li>
        <li>Your green card timeline depends on your category and country of birth, which can mean a long wait;</li>
        <li>
          Travel, job changes, promotions, and layoffs can all affect your status &mdash; check with an attorney{' '}
          <em>before</em> a major change, not after;
        </li>
        <li>
          Some categories, like the EB-2 National Interest Waiver and EB-1 extraordinary ability, let you{' '}
          <strong>petition for yourself</strong> &mdash; worth exploring if your accomplishments are strong.
        </li>
      </ul>

      <h2>Adjustment of Status vs. Consular Processing</h2>
      <p>
        When a green card finally becomes available, there are two ways to get it. If you are already in the United States
        in valid status, you may be able to <strong>adjust status</strong> here without leaving. If you are abroad &mdash;
        or not eligible to adjust &mdash; you complete <strong>consular processing</strong> at a U.S. embassy or consulate
        in your home country. Which path applies, and which is faster or safer in your situation, is a fact-specific
        question worth reviewing before you file anything.
      </p>
      <p>
        Workers who adjust status inside the U.S. can usually apply for a work permit while the green card is pending.
        Our guide to the{' '}
        <Link href="/blog/employment-authorization-ead-georgia">Employment Authorization Document (EAD) and Form I-765</Link>{' '}
        explains how to keep working legally throughout the process.
      </p>

      <h2>Why Work With an Employment Immigration Attorney</h2>
      <p>
        Employment-based cases turn on details: the right category, clean PERM recruitment, accurate wage data, careful
        timing around the H-1B cap and visa backlogs, and a sequence that keeps the worker in status from the first day to
        the green card. An experienced attorney maps the full path before anyone files, prepares the petition to withstand
        scrutiny, and helps employer and employee stay coordinated. The cost of doing it right is almost always lower than
        the cost of fixing a case that went sideways.
      </p>

      <h2>Talk to Eszter Bardi About Employment-Based Immigration</h2>
      <p>
        Whether you are a Georgia employer ready to sponsor a key hire or a professional planning your path to a green
        card, attorney <strong>Eszter Bardi</strong> can help you choose the right strategy and execute it correctly.
        Bardi Immigration Law works with employers and workers across Georgia &mdash; with direct attorney access, not an
        intake specialist.
      </p>
      <p>
        <strong>Schedule a consultation today.</strong> We will assess the role and the candidate, identify the categories
        that fit, and lay out a realistic timeline. Learn more about our{' '}
        <Link href="/services/benefits-based-immigration">benefits-based immigration</Link> work or{' '}
        <Link href="/contact">request a consultation online</Link>. Hablamos espa&ntilde;ol &mdash; atendemos a la
        comunidad hispanohablante de Georgia.
      </p>

      <p className="disclaimer">
        <em>
          Bardi Immigration Law, bardilaw.com | This article provides general legal information and does not constitute
          legal advice. Immigration law is complex, fact-specific, and changes frequently. Visa categories, caps, wage
          rules, forms, fees, and processing times change periodically and vary by case and country of birth. Confirm
          current requirements on the USCIS and U.S. Department of Labor websites and consult a licensed immigration
          attorney for guidance specific to your situation.
        </em>
      </p>
    </div>
  );
}
