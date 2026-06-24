import { ogImageFor } from './ogImages';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'uscis-atlanta-field-office-appointments-interviews-georgia',
    title: 'Visiting the USCIS Atlanta Field Office: Biometrics, Interviews, and What to Expect',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney walks you through what to expect at the USCIS Atlanta Field Office at 2150 Parklake Drive NE, Atlanta, GA 30345 — from the biometrics appointment to the green card or naturalization interview. Explains where the office is and how to get there (parking, transit, and airport-style security screening), and the distinction most people miss: biometrics (fingerprints, photograph, and signature) are usually captured at a separate Application Support Center, while adjustment-of-status and naturalization interviews are held at the Field Office. Covers exactly what to bring to each — the I-797C appointment notice and a valid photo ID for biometrics; the notice, your green card, all current and expired passports, a state ID, and the originals of every document you filed for an interview — plus what happens in the room, including the English and civics tests at a naturalization interview and the relationship questions in a marriage-based green card case. Explains your right to bring a qualified interpreter and to be represented by an attorney, what to do if you miss an appointment (reschedule through the USCIS Contact Center, a myUSCIS account, or the Emma virtual assistant — the system that replaced in-person InfoPass), and how to check your case status using My Case Status online with your receipt number, a myUSCIS account, Emma, and the Contact Center at 1-800-375-5283. Closes with the most common interview mistakes to avoid. Serving immigrants across metro Atlanta and Georgia.',
  },
  {
    slug: 'h1b-cap-gap-opt-work-authorization-georgia',
    title: 'H-1B Cap-Gap in Georgia: How to Keep Working When OPT Expires Before October 1',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains the H-1B cap-gap rule under 8 CFR 214.2(f)(5)(vi) — the regulation that automatically extends an F-1 student’s status, and often their work authorization, when a selected, cap-subject H-1B petition requesting a change of status with an October 1 start date is pending or approved. Covers the core problem thousands of Atlanta-area graduates face every April through September (the H-1B begins October 1 but OPT or STEM OPT expires earlier), and the make-or-break distinction most people miss: if the H-1B is filed while the OPT EAD is still valid, cap-gap extends both status and the right to keep working through September 30, but if it is filed after the EAD expired during the 60-day grace period, cap-gap extends status only and the student may not work. Explains the conditions (lottery selection plus a timely-filed petition — selection alone is not enough; the petition must request change of status, not consular processing; and the student must keep maintaining F-1 and OPT/STEM OPT terms), why you should get an updated cap-gap I-20 from your DSO, and the costly travel trap (leaving the country during cap-gap generally breaks it because you cannot re-enter in F-1 to resume it and cannot enter on H-1B before October 1). Also covers the difference between regular OPT and STEM OPT cap-gap mechanics, what happens with RFEs, delays, denials, rejections, and revocations (cap-gap ends and the standard 60-day F-1 grace period applies), why employers use premium processing, and the April-through-September risk window for graduates of Georgia Tech, Emory, UGA, Georgia State, and Kennesaw State. Serving F-1 students and employers across Georgia.',
  },
  {
    slug: 'expedited-removal-georgia-what-it-is-rights-challenge',
    title: 'Expedited Removal in Georgia: What It Is, Who It Affects, and How to Challenge It',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains expedited removal under INA §235(b)(1) — the process that lets a CBP or ICE officer deport someone without a hearing before an immigration judge, often within days. Covers the January 2025 DHS expansion of expedited removal nationwide to the interior and to anyone who cannot prove two years of continuous physical presence, the all-important two-year rule and who is exempt (lawful permanent residents, people with valid status, asylees and refugees, unaccompanied children), and the burden being on the noncitizen to document continuous presence with leases, pay stubs, tax records, and dated mail. Explains the credible-fear safety valve: how saying you fear return triggers a credible-fear interview with an asylum officer under the significant-possibility standard, moving you into full removal proceedings if you pass, with limited immigration-judge review if you fail, and how withholding of removal and the Convention Against Torture may remain even when asylum is barred. Details the rights you keep and lose (no immigration-judge hearing, no Notice to Appear, no BIA appeal, no government-funded counsel but the right to hire your own and to remain silent), the narrow federal habeas challenges allowed under INA §242(e) after DHS v. Thuraissigiam (mistaken status or identity, ignored proof of two-year presence, a fear that was never referred, coerced sworn statements), how expedited removal differs from regular §240 proceedings and from reinstatement of removal, and the reentry consequences (the five-year bar under INA §212(a)(9)(A), the permanent bar under §212(a)(9)(C), and the I-212 waiver). Atlanta and Stewart immigration courts; Georgia and Alabama.',
  },
  {
    slug: 'how-to-choose-immigration-attorney-georgia',
    title: 'How to Choose an Immigration Attorney in Georgia: What to Look For and Questions to Ask',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains how to choose the right lawyer at the start of your immigration journey — and how to avoid the notarios and unlicensed "consultants" who cause botched cases. Covers why immigration cases benefit from real representation (the law is federal, technical, and often gives no second chance), and the all-important distinction between who can legally help: licensed attorneys in good standing with a state bar, and non-attorney accredited representatives recognized by the Department of Justice through EOIR working for recognized nonprofits — versus a "notario público," which in the U.S. is just a notary public and may not give immigration advice at all. Lays out the warning signs of immigration fraud (guaranteed outcomes, large upfront cash with no written agreement, advice to lie on forms, no bar license or EOIR accreditation, claims of special government connections), how to verify an attorney in five minutes (the State Bar of Georgia member directory at gabar.org for active status and discipline, and the EOIR Recognition & Accreditation roster), and the questions to ask in a consultation — how many cases like mine have you handled, what are the risks, what is included in the fee, and who handles my case day to day. Explains the three fee structures (flat fee, hourly, and unbundled limited-scope representation), what to bring to the first consultation, and the red flags to watch for during the representation. Includes how Bardi Immigration Law works — direct attorney access with Eszter Bardi, a written fee agreement, and clear English/Spanish communication. Serving families and individuals across metro Atlanta and Georgia.',
  },
  {
    slug: 'i90-green-card-renewal-replacement-georgia',
    title: 'How to Renew or Replace Your Green Card in Georgia: A Form I-90 Guide',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney walks permanent residents through Form I-90 — the application to renew an expiring ten-year green card or replace one that was lost, stolen, mutilated, never received, or needs a name correction. Explains the critical distinctions most people get wrong: I-90 is for the standard ten-year card, while a two-year conditional card requires Form I-751 to remove conditions, and eligible residents may be better off filing N-400 for naturalization instead. Covers filing online through a myUSCIS account versus paper by mail, current filing and biometric fees (free when USCIS made the error), realistic processing times that now stretch many months to over a year, and how to prove your status while you wait — the I-797C receipt notice that extends an expired card for work and travel, and the ADIT/I-551 passport stamp from the USCIS Atlanta Field Office. Also covers international travel on an expired card plus receipt notice, the biometrics appointment at an Application Support Center, why you should file in the six months before expiration, and the situations — conditional-versus-permanent confusion, criminal history, time abroad, or renew-versus-naturalize decisions — where you should talk to an attorney first. Serving permanent residents across Georgia.',
  },
  {
    slug: 'j1-visa-two-year-home-residency-requirement-waiver-georgia',
    title: 'J-1 Visa Waiver in Georgia: Escaping the Two-Year Home Residency Requirement',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains the J-1 two-year home-country physical presence requirement under INA §212(e) and the five ways out — with a focus on physicians completing Georgia residencies. Covers who is actually subject to the rule (foreign medical graduates in ECFMG-sponsored graduate medical education are automatically caught, plus government-financed programs and fields on the Exchange Visitor Skills List), what the requirement really does (it bars H, L, and K visas, immigrant visas, and adjustment of status until two aggregate years are spent in the home country — it does not deport you), and the Conrad State 30 program under INA §214(l) administered by the Georgia Department of Community Health: up to 30 waiver slots a year, a three-year full-time H-1B commitment at a facility serving a HPSA, MUA, or MUP, the limited FLEX slots, and the rural and south Georgia shortage counties (Clinch, Echols, Quitman) the program exists to staff — plus the trap that failing the three years reverts you to the requirement. Walks through the other four waiver bases (the No Objection Statement, which is unavailable to physicians; the Interested Government Agency request via the Appalachian Regional Commission, Delta Regional Authority, or VA; the exceptional-hardship waiver to a U.S.-citizen or LPR spouse or child on Form I-612; and the persecution waiver), the DS-3035 process through the State Department Waiver Review Division with final USCIS adjudication, the cap-exempt H-1B that often follows, and how clearing §212(e) opens an employment-based green card or a physician National Interest Waiver. Notes the major Georgia training employers — Emory, the Medical College of Georgia, Morehouse School of Medicine, Piedmont, Atrium Health Navicent, and Grady. Serving exchange visitors and physicians across Georgia and Alabama.',
  },
  {
    slug: 'georgia-immigration-courts-atlanta-gwinnett-dekalb-stewart-guide',
    title: 'Georgia Immigration Courts: An Atlanta, Gwinnett, DeKalb, and Stewart Navigation Guide',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney maps the state’s immigration court system so you know exactly where your case is heard and who is on the other side of it. Covers the Atlanta Immigration Court downtown on Peachtree as the primary venue for non-detained respondents across North and Central Georgia, the Stewart Immigration Court inside the Stewart Detention Center in Lumpkin for detained cases on a faster docket, and why there is no separate Gwinnett or DeKalb immigration court even though those counties have huge immigrant populations — their residents appear in Atlanta. Explains how Georgia fits in the EOIR structure as a Department of Justice agency, the all-important fact that Georgia sits in the Eleventh Circuit (not the more favorable Ninth) so out-of-state counsel must build for stricter Eleventh Circuit and BIA precedent, and how to look up your own hearing date for free using EOIR’s automated hotline at 1-800-898-7180 and the online portal at acis.eoir.justice.gov with your A-number. Walks through requesting a continuance for good cause, filing a motion to change venue when you move (and the EOIR-33 address-change duty within five days), and the critical distinction between who adjudicates and who enforces — EOIR judges decide the case while the ICE ERO Atlanta Field Office (covering Georgia, North Carolina, and South Carolina) detains people and executes final removal orders. Closes with the next steps after receiving a Notice to Appear. Serving immigrants across metro Atlanta, Gwinnett, DeKalb, and Georgia and Alabama.',
  },
  {
    slug: 'divorce-immigration-status-green-card-georgia',
    title: 'Divorce and Immigration Status in Georgia: Green Cards, Pending Petitions, and Your Options',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains how divorce affects immigration status — broken down by exactly where you stand in the process. Covers conditional (two-year) permanent residents who must still file Form I-751 to remove conditions after a divorce by requesting the joint-filing waiver under INA §216(c)(4) and proving the marriage was bona fide, and why missing the filing window terminates status and can trigger removal proceedings; pending or approved Form I-130 spousal petitions that are automatically revoked on divorce under 8 CFR §205.1(a)(3)(i)(C) when no green card has yet been granted; K-1 fiancé(e) visa holders whose adjustment of status is locked to the specific petitioning U.S. citizen under INA §245(d), so a split before marriage or before the green card ends the path; the three-year naturalization shortcut for spouses of U.S. citizens under INA §319(a), which a divorce terminates by breaking the marital union and reverts the applicant to the standard five-year rule under INA §316(a); and the critical VAWA exception for abuse, where an abused spouse can self-petition on Form I-360 under INA §204(a)(1)(A)(iii) — or seek an I-751 battery/extreme-cruelty waiver — without the spouse’s cooperation, even after a divorce connected to the abuse. Distinguishes every scenario by current status (U.S. citizen vs. LPR spouse, conditional vs. permanent green card, pending petition vs. approved) and stresses that an unconditional ten-year green card survives a divorce. Empathetic and legally precise. Serving families across Georgia and Alabama.',
  },
  {
    slug: 'birthright-citizenship-executive-order-14th-amendment-georgia',
    title: 'Birthright Citizenship in Georgia (2025–2026): What the Executive Order Means for Your Family',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney cuts through the fear over birthright citizenship: as of mid-2026, every child born on U.S. soil is a U.S. citizen, and the executive order that tried to change that has been blocked by the courts and is not being enforced. Explains the settled constitutional law — the Fourteenth Amendment’s "born or naturalized" Citizenship Clause and the Supreme Court’s 1898 ruling in United States v. Wong Kim Ark that a child born here is a citizen regardless of the parents’ immigration status — and what Executive Order 14160 of January 20, 2025 tried to do (deny citizenship documents to children born to mothers who are unlawfully present, or lawfully present only temporarily on a tourist, student, or work visa, when the father is not a citizen or permanent resident). Covers where the legal battle stands: multiple federal courts blocked the order, the Supreme Court’s June 2025 Trump v. CASA ruling limited nationwide injunctions but did not decide whether the order is constitutional, and litigation continues with no final merits ruling. Then the practical steps every immigrant parent should take now — get the child’s certified birth certificate and U.S. passport immediately, because a passport is itself proof of citizenship — and a clear-eyed explanation of what a U.S.-citizen child does and does not do for an undocumented parent: it does NOT automatically prevent deportation, it creates an I-130 petition path only when the child turns 21, and it builds important equities for cancellation of removal and other relief. Notes the honest uncertainty that future court rulings could change the rules going forward. For immigrant families across metro Atlanta, Gwinnett, Dalton, south Georgia, and Alabama.',
  },
  {
    slug: 'eb5-investor-visa-green-card-georgia',
    title: 'EB-5 Investor Green Card in Georgia: A Path to Permanent Residence Through U.S. Investment',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains the EB-5 immigrant investor green card — the route to permanent residence for foreign nationals of any country who invest in a job-creating U.S. business, with no employer, no job offer, and no labor certification. Covers the two investment thresholds ($1,050,000 standard; $800,000 in a Targeted Employment Area — a rural area or high-unemployment area — or a qualifying infrastructure project) and how rural and south Georgia plus high-unemployment metro Atlanta census tracts qualify as TEAs, the requirement to create 10 full-time jobs for U.S. workers, the difference between direct investment (Form I-526, only direct jobs count, you actively manage your own business) and passive Regional Center investment (Form I-526E, indirect/induced jobs may count through an economic model), the EB-5 Reform and Integrity Act of 2022 and why the program is safer after the fraud cases (the EB-5 Integrity Fund, mandatory audits and site visits, background checks, fund-administration and disclosure rules, and the 20% rural / 10% high-unemployment / 2% infrastructure visa set-asides), the set-aside advantage that can dramatically shorten the wait for India- and China-born investors, the I-526E process, concurrent I-485 filing for applicants already in the U.S., consular processing versus adjustment of status, the two-year conditional green card and Form I-829 to remove conditions, the all-important lawful source-and-path-of-funds record, and how EB-5 compares to the E-2 treaty investor visa, the L-1/EB-1C multinational manager path, and the EB-2 National Interest Waiver. Serving investors and their families across Georgia and Alabama.',
  },
  {
    slug: 'b2-tourist-visa-adjustment-status-green-card-georgia',
    title: 'Can You Get a Green Card on a Tourist Visa? B-1/B-2 to Permanent Residence in Georgia',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney answers the most common question in family immigration: whether a B-1 or B-2 visitor can get a green card without leaving the country. Explains the core rule that adjustment of status under INA §245(a) turns on a lawful inspection and admission — not on which visa was used — so a tourist who was admitted can often adjust inside the U.S. if a qualifying petition is behind them (a U.S. citizen spouse or other immediate relative, an approved I-130 from an LPR with a current priority date, or an approved I-140 with a current date). Covers the "dual intent" trap (the B-1/B-2 is not a dual-intent visa, so entering with a hidden plan to immigrate risks a misrepresentation finding under INA §212(a)(6)(C)(i) or a preconceived-intent denial under §214(b)/§212(a)(7)(B), and why the 90-day timeline of the relationship is the most important fact), what a marriage-based adjustment actually looks like (I-130 + I-130A, concurrently filed I-485 with EAD and advance parole, biometrics, the Atlanta field-office interview, and conditional residence with later I-751), why the §245(c) overstay and unauthorized-work bars are forgiven for immediate relatives of U.S. citizens so no departure is required, the consular-processing departure trap and the I-601/I-601A waiver for those who cannot adjust, and the §245(i) April 30, 2001 grandfather clause. For visitors and their families across Georgia and Alabama.',
  },
  {
    slug: 'diversity-visa-lottery-dv-application-georgia',
    title: 'Diversity Visa Lottery in Georgia: Eligibility, How to Apply, and What to Do If You Win',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains the Diversity Visa "green card lottery" for metro Atlanta’s African diaspora communities — Ethiopian, Congolese, Cameroonian, and others. Covers the two eligibility gates (being a native of a qualifying low-admission country under the annually changing excluded-country list, where Nigeria has fallen off in recent years, plus the alternate chargeability rules that let an applicant claim a spouse’s or a parent’s country of birth; and the high-school-education-or-two-years-of-qualifying-work requirement), how to enter for free only through the Electronic Diversity Visa (E-DV) system at dvlottery.state.gov during the October–November window and the mistakes that quietly disqualify entries (duplicate entries, bad photos, omitted spouses or children), why selection is not a visa — the government never emails winners and you must check Entrant Status Check yourself, far more people are selected than there are visas, cases are processed in regional rank order, and every diversity visa must be issued by the hard September 30 fiscal-year deadline that never moves — the DS-260 and Kentucky Consular Center steps, the medical exam, adjustment of status versus consular processing, and what disqualifies a selected applicant (criminal record, unlawful presence, health grounds, document failures, and missed deadlines). Explains the two moments to get an attorney: before entering and after selection. Serving the African and Caribbean diaspora across Georgia and Alabama.',
  },
  {
    slug: 'green-card-abandonment-travel-rules-reentry-permit-georgia',
    title: 'Green Card Travel Rules in Georgia: How to Keep Permanent Residence When Living Abroad',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains how long a green-card holder can stay outside the United States without losing permanent residence — and why the "six-month rule" everyone has heard is a myth. Covers the real abandonment-of-residence standard (a rebuttable presumption based on intent, not a fixed calendar deadline), how the risk rises with the length of the trip (under 6 months low risk, over 6 months invites questioning and breaks continuous residence for naturalization, one year or more is the clearest danger zone where the green card is no longer a valid travel document), the Form I-131 reentry permit (valid up to 2 years, filed from inside the U.S. with the I-551 in hand and a biometrics appointment, protecting long absences in advance), the SB-1 Returning Resident visa for when a permit expired or a trip exceeded a year because of circumstances beyond the traveler’s control, the U.S.-ties factors CBP officers and immigration judges weigh (resident tax returns, a maintained U.S. address, bank accounts, a state driver license, family, and employment), what happens at the port of entry including secondary inspection and the voluntary Form I-407 surrender that a returning resident is never required to sign, and why metro Atlanta’s large Indian, Korean, Chinese, and Latin American permanent-resident communities who travel for aging parents, family, and business are exactly the group most exposed. Serving green-card holders across Georgia and Alabama.',
  },
  {
    slug: 'eb1a-extraordinary-ability-green-card-self-petition-georgia',
    title: 'EB-1A Extraordinary Ability Green Card in Georgia: Self-Petition With No Employer and No Backlog',
    date: '2026-06-24',
    description:
      'A Georgia employment immigration attorney explains the EB-1A extraordinary-ability green card — the first-preference category under INA §203(b)(1)(A) that lets a top-of-field professional self-petition on Form I-140 with no employer, no job offer, and no PERM labor certification, and that moves years faster than EB-2 for applicants born in India and China. Covers how EB-1A (self-petition) differs from EB-1B outstanding professors and researchers and EB-1C multinational managers (both employer-sponsored), the decisive priority-date advantage of the first preference over the EB-2 National Interest Waiver, the "sustained national or international acclaim" standard and the two ways to meet it (a one-time major award like a Nobel, Olympic medal, Oscar, or Pulitzer, or at least three of the ten regulatory criteria at 8 CFR 204.5(h)(3)), the critical two-step Kazarian v. USCIS analysis (counting the criteria, then the final-merits determination that you are among the small percentage at the very top of your field), who qualifies in Georgia (Georgia Tech and Emory researchers, Tyler Perry Studios and Atlanta film creatives, PGA Tour and Atlanta United athletes, and venture-backed founders), the EB-1A-vs-EB-2-NIW choice and the O-1-to-EB-1A path, the self-filed I-140 with premium processing, and adjustment of status versus consular processing. Serving researchers, creatives, athletes, and founders across Georgia and Alabama.',
  },
  {
    slug: 'r1-religious-worker-visa-georgia',
    title: 'R-1 Religious Worker Visa in Georgia: How Churches, Temples, and Mosques Sponsor Foreign Clergy',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains the R-1 nonimmigrant religious worker visa for the diverse faith communities of metro Atlanta and across the state — Catholic parishes, Korean Presbyterian and evangelical churches, Hindu temples, Ethiopian Orthodox churches, and mosques. Covers the two halves of every R-1 case: the qualifying non-profit religious organization (IRS 501(c)(3) or group tax exemption) and the qualifying religious worker (a minister, or a person in a religious vocation or occupation working at least part-time / an average of at least 20 hours per week), the two-year same-denomination membership requirement, the compensation rule and limited missionary self-support exception, the employer-filed Form I-129 with the R-1 Classification Supplement and the USCIS compliance site inspection that catches first-time sponsors off guard, the initial 30-month admission extendable to a 60-month (5-year) maximum and the one-year-abroad reset, the EB-4 special immigrant religious worker green-card path via Form I-360 (with the permanent minister category versus the periodically reauthorized non-minister sunset category), the fact that R-1 has no foreign-residence requirement so pursuing a green card is not disqualifying, R-2 status for spouses and children under 21 and the rule that R-2 spouses cannot work, and why a B-1 visitor for religious purposes is not a work visa. Serving faith communities across Georgia and Alabama.',
  },
  {
    slug: 'visa-overstay-consequences-fix-status-georgia',
    title: 'Overstayed Your Visa in Georgia? Consequences, Options, and How to Fix Your Status',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains what to do after a visa overstay: the critical I-94 vs. visa-stamp confusion (the I-94, not the passport foil, controls how long you can stay), the consequences of overstaying (unlawful presence accrual toward the 3- and 10-year bars, an automatically voided visa under INA 222(g), loss of the ability to extend or change status, SEVIS termination for F-1/M-1 students, and EAD revocation), what an overstay does NOT do (you are not automatically arrested or immediately deported, though you become deportable under INA 237(a)(1)(B)), and the real paths back to status — adjustment of status inside the U.S. for immediate relatives of U.S. citizens under INA 245(a) (the 245(c) overstay and unauthorized-work bars are forgiven for spouses, parents, and children under 21), a timely change or extension of status before the I-94 expires, consular processing abroad and the departure trap that triggers the bar, the Form I-601A provisional and Form I-601 waivers, and voluntary departure under INA 240B. A companion to the firm’s unlawful presence 3- and 10-year bar guide. For visa overstayers across Georgia and Alabama.',
  },
  {
    slug: 'naturalization-denial-disqualifiers-n400-georgia',
    title: 'Why Naturalization Applications Get Denied in Georgia — and What to Do About It',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains why Form N-400 naturalization applications are denied and how to fix or appeal a denial: the good moral character (GMC) requirement and its five-year (INA 316(a)) and three-year (INA 319(a)) statutory lookback, the conditional GMC bars under INA 101(f) that are often curable by waiting (two or more DUIs, controlled-substance offenses, crimes involving moral turpitude, unpaid or unfiled taxes, failure to pay child support, false testimony, and 180-plus days in jail), the continuous-residence and physical-presence breaks that quietly sink applicants (six-month to one-year absences and the one-year break), the permanent bars for murder and for an aggravated felony under INA 101(a)(43), the real danger that an N-400 interview can trigger a Notice to Appear and removal for a long-removable LPR, the English and civics testing exceptions (50/20, 55/15, and the N-648 medical waiver), the Selective Service registration gap and why it is usually fixable after age 31, and the two real options after a denial — the N-336 request for a hearing within 30 days (and de novo federal court review) versus simply reapplying once a time-limited disqualifier ages out. For long-term Georgia and Alabama green-card holders with old convictions, tax gaps, or long trips abroad.',
  },
  {
    slug: 'unlawful-presence-3-year-10-year-bar-georgia',
    title: 'Unlawful Presence and the 3-Year and 10-Year Bars: A Georgia Guide',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains unlawful presence under INA 212(a)(9)(B) and the reentry bars it triggers: the critical difference between unlawful presence and unlawful status, when the clock starts (I-94 expiration, a status-violation finding, or entry without inspection) and stops (a pending bona fide adjustment or timely extension/change of status), why departure from the U.S. is what actually triggers the 3-year bar (more than 180 days) or the 10-year bar (one year or more), the 212(a)(9)(B)(iii) periods that do not count (under 18, a bona fide pending asylum application, Family Unity, and battered spouses and children under VAWA), the 212(a)(9)(B)(v) extreme-hardship waiver for those who already triggered a bar, the Form I-601A provisional and Form I-601 waivers, and how the harsher 212(a)(9)(C) permanent bar differs after an unlawful reentry. For undocumented spouses and visa overstayers across Georgia and Alabama.',
  },
  {
    slug: 'e2-investor-visa-treaty-nationals-georgia',
    title: 'E-2 Investor Visa in Georgia: Starting a Business on a Treaty Visa',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains the E-2 treaty investor visa for entrepreneurs starting, buying, or running a business in the U.S. Covers the treaty-country nationality requirement and which countries qualify (South Korea, Colombia, and Mexico are E-2 treaty countries; India and China are not), the "substantial investment" proportionality test (there is no fixed dollar minimum) and what counts as a qualifying investment (at risk and irrevocably committed, a real and active enterprise that is more than marginal, lawful source of funds, and the 50%-ownership/develop-and-direct requirement), how the E-2 compares to the EB-5 immigrant investor green card and the O-1 extraordinary-ability visa, work authorization for E-2 spouses incident to status since November 2021 (E-2S, no separate EAD needed) and the rule that E-2 children may study but not work, the up-to-two-year admissions and unlimited renewals, and the key limitation that the E-2 is a nonimmigrant visa with no direct path to a green card. Serving Korean, Colombian, and Mexican business owners and other treaty-country entrepreneurs across Georgia and Alabama.',
  },
  {
    slug: 'l1-intracompany-transferee-visa-georgia',
    title: 'L-1 Visa in Georgia: Transferring to Your Company’s Atlanta Office',
    date: '2026-06-24',
    description:
      'A Georgia employment immigration attorney explains the L-1 intracompany transferee visa for multinational companies and the managers, executives, and specialists they relocate to Atlanta and across Georgia: the difference between L-1A (managers and executives, up to seven years) and L-1B (specialized knowledge, up to five years), the qualifying corporate relationship between the foreign and U.S. entity (parent, branch, subsidiary, or affiliate), the requirement of one continuous year of full-time qualifying employment abroad within the preceding three years, the new-office L-1 with its one-year initial approval and make-or-break extension, the blanket L petition for large multinationals filing through Form I-129S at a consulate, L-2 status for spouses and children with the L-2 spouse’s open work authorization incident to status (a real advantage over the H-4 EAD), and the L-1A-to-EB-1C green card path for executives that skips PERM labor certification. No cap and no lottery, and L-1 permits dual intent. For the Coca-Cola, Home Depot, Delta, NCR, and Global Payments corridor and the hundreds of international company offices across Georgia and Alabama.',
  },
  {
    slug: 'nvc-consular-interview-immigrant-visa-process-georgia',
    title: 'NVC and the Consular Interview: The Immigrant Visa Process Step by Step (Georgia)',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney walks through the National Visa Center (NVC) stage and consular interview that follow an approved I-130 or I-140 petition for a relative abroad: how a case reaches the NVC once a visa number is current, the Consular Electronic Application Center (CEAC) portal and case/invoice numbers, the two NVC fees (the Immigrant Visa Application fee per applicant and the Affidavit of Support fee per petitioner), filing the Affidavit of Support (Form I-864) with tax and income evidence and when a joint sponsor is needed, completing the sworn DS-260 immigrant-visa application, the civil-document checklist (passport, birth and marriage certificates, police certificates, certified translations), reaching "documentarily qualified" status and interview scheduling, the panel-physician medical exam and interview preparation, and the decision — including Section 221(g) refusals, administrative processing, and inadmissibility/waiver issues (the I-601A provisional unlawful-presence waiver). Complements the firm’s broader consular processing and family-green-card guides. For Georgia and Alabama petitioners sponsoring family abroad.',
  },
  {
    slug: 'f2-dependent-visa-international-student-family-georgia',
    title: 'F-2 Dependent Visa in Georgia: Rights and Restrictions for International Students’ Families',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains the F-2 dependent visa for the spouse and unmarried minor children of an F-1 international student: who qualifies, the strict bar on F-2 employment (no EAD, no work of any kind, unlike F-1 OPT or an H-4 EAD), the study limits under 8 CFR 214.2(f)(15) (spouses may study less than full time and cannot enroll full time in a degree program, while children may attend K-12 full time), the separate I-20 issued by the DSO for each dependent and the financial-support requirement, duration of status (D/S), what happens when the F-1 student graduates or starts OPT/STEM OPT, the F-2-to-F-1 change of status on Form I-539 when a dependent wants to study or work, and how F-2 compares with B-2 visitor status and the H-4 derivative status if the principal moves to H-1B. For families at Georgia Tech, UGA, Emory, and Georgia State across Georgia and Alabama.',
  },
  {
    slug: 'administrative-closure-immigration-court-georgia',
    title: 'Administrative Closure in Georgia Immigration Court: When Your Case Can Be Put on Hold',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains administrative closure — the procedural tool that lets an immigration judge take a removal case off the active docket and pause it without deciding it. Covers how closure differs from termination and dismissal, the legal tug-of-war over judges’ authority (Matter of Avetisyan (BIA 2012), Matter of Castro-Tum (A.G. 2018), the circuit split, and the restoration of closure authority in Matter of Cruz-Valdez (A.G. 2021)), how DHS enforcement priorities and ICE prosecutorial discretion drive who can get closure, the common scenarios where it helps (a pending I-130 family petition, an I-601A provisional waiver and consular processing, a pending U-visa or VAWA self-petition, and humanitarian deferred action), how to request it by motion and the timing strategy, the real risks (the case can be recalendared, it grants no status or work permit, and it does not stop the accrual of unlawful presence under the three- and ten-year bars), why the 2025–2026 enforcement climate has made closure much harder to obtain, and how to choose between seeking closure, asking for a continuance, and fighting for relief such as cancellation of removal. Serving clients before the Atlanta and Stewart immigration courts across Georgia and Alabama.',
  },
  {
    slug: 'eb2-national-interest-waiver-self-petition-georgia',
    title: 'EB-2 National Interest Waiver in Georgia: Self-Petition for a Green Card Without an Employer',
    date: '2026-06-24',
    description:
      'A Georgia employment immigration attorney explains the EB-2 National Interest Waiver (NIW) — the rare green card path that lets a qualified professional self-petition on Form I-140 with no employer sponsor, no job offer, and no PERM labor certification. Covers the EB-2 advanced-degree and exceptional-ability baseline, the waiver authority under INA §203(b)(2)(B), and the controlling Matter of Dhanasar three-prong test (substantial merit and national importance of the proposed endeavor; whether the applicant is well positioned to advance it; and whether, on balance, it benefits the U.S. to waive the job-offer and labor-certification requirements), including the January 2025 USCIS policy update favoring advanced STEM degrees and entrepreneurs. Explains who typically qualifies in Georgia — STEM researchers at Georgia Tech, Emory, UGA, and Georgia State; physicians serving rural healthcare deserts and shortage areas (and the separate Physician NIW); engineers; and founders — the strategic NIW-vs-PERM choice, how the NIW differs from EB-1A extraordinary ability and EB-1B outstanding researcher, the I-140 filing with premium processing, and priority-date retrogression for applicants born in India and China. Serving researchers, physicians, engineers, and entrepreneurs across Georgia and Alabama.',
  },
  {
    slug: 'h1b-visa-sponsorship-cap-georgia',
    title: 'H-1B Visa in Georgia: Sponsorship, the Cap and Lottery, RFEs, and Job-Loss Options',
    date: '2026-06-23',
    description:
      'A Georgia employment immigration attorney explains the H-1B specialty-occupation visa for employers and foreign workers: what qualifies as a specialty occupation and the bachelor\'s-degree-in-the-specialty requirement, the 85,000 annual cap (65,000 regular plus the 20,000 U.S. master\'s exemption) and the electronic registration and beneficiary-centric lottery, cap-exempt employers like universities and affiliated nonprofits (Georgia Tech, Emory, the University System of Georgia), the Labor Condition Application and prevailing-wage obligation, why Requests for Evidence happen and how strong documentation prevents them, the up-to-six-year limit and AC21 extensions beyond six years, amended petitions after a material worksite change under Matter of Simeio, employer transfers, the 60-day grace period after a layoff (8 CFR 214.1(l)(2)) and portability under INA §214(n), bridging to an O-1 visa, and the H-1B-to-green-card path through EB-2/EB-3 and PERM with India/China backlogs. Includes the 2025–2026 layoff and enforcement climate. Serving Alpharetta and Midtown Atlanta tech employers and workers across Georgia and Alabama.',
  },
  {
    slug: 'perm-labor-certification-employer-sponsored-green-card-georgia',
    title: 'PERM Labor Certification in Georgia: Employer-Sponsored Green Cards Explained',
    date: '2026-06-23',
    description:
      'A Georgia employment immigration attorney explains PERM labor certification — the Department of Labor process required for most EB-2 and EB-3 employer-sponsored green cards. Covers what PERM (Program Electronic Review Management) is and why it exists to protect U.S. workers, the prevailing wage determination (ETA Form 9141 through the DOL FLAG system), the mandatory recruitment steps for professional positions (a 30-day state job order, two Sunday newspaper ads, a 10-business-day Notice of Filing, and three additional recruitment steps), the recruitment report and five-year documentation rule, the ETA Form 9089 application, DOL processing times and the high risk of audits and supervised recruitment, common denial reasons (recruitment defects, improperly rejecting U.S. applicants, unduly restrictive requirements, prevailing wage problems, and clerical errors on the 9089), and what happens after certification — the I-140 Immigrant Petition for Alien Worker, the priority date, and India/China backlogs. Explains why an attorney is critical for both employer and employee, with cross-references to EB-1 and EB-2 NIW paths that skip PERM. Serving Atlanta tech, healthcare, manufacturing, and hospitality employers and workers across Georgia and Alabama.',
  },
  {
    slug: 'withholding-of-removal-immigration-court-georgia',
    title: 'Withholding of Removal in Georgia: Staying in the U.S. When You Cannot Get Asylum',
    date: '2026-06-23',
    description:
      'A Georgia immigration attorney explains withholding of removal under INA §241(b)(3) as an alternative to asylum: how it differs from asylum (the higher "more likely than not" clear-probability standard vs. asylum\'s well-founded fear, no green card path, no derivative family benefits, no one-year filing deadline, no per-country cap, and a mandatory rather than discretionary grant), how protection under the Convention Against Torture (CAT) works as a separate third option with no protected-ground requirement and a deferral form available even to people with serious criminal history, who should pursue withholding or CAT instead of or alongside asylum (those who missed the one-year asylum deadline or face a criminal bar to asylum), what life on withholding status looks like (work authorization but no green card, no travel document, and an underlying removal order), and why an attorney is essential to navigate all three protections. Atlanta and Stewart immigration courts; Georgia and Alabama.',
  },
  {
    slug: 'o1-visa-extraordinary-ability-georgia',
    title: 'O-1 Visa for Extraordinary Ability in Georgia: Athletes, Artists, and Professionals',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains the O-1 visa for individuals of extraordinary ability: the O-1A category for sciences, education, business, and athletics (the "sustained national or international acclaim" standard and the eight evidentiary criteria, of which you must satisfy at least three, plus the two-step "totality of the evidence" analysis USCIS applies) vs. the O-1B category for the arts (the "distinction" standard) and for extraordinary achievement in the motion picture and television industry, the required written advisory opinion/consultation from a peer or labor organization, why you cannot self-petition and must have a U.S. employer or agent (and how the agent option works for freelancers and film/TV crew), the O-2 essential support personnel and O-3 dependent classifications, the up-to-three-year initial period with one-year extensions and favorable treatment of immigrant intent, and the path to an EB-1A green card. Built for Georgia’s film and TV industry, Atlanta tech founders and engineers, university researchers, and elite athletes and artists. Georgia and Alabama.',
  },
  {
    slug: 'employment-based-green-card-eb1-eb2-eb3-georgia',
    title: 'Employment-Based Green Cards in Georgia: EB-1, EB-2, and EB-3 Explained',
    date: '2026-06-24',
    description:
      'A Georgia employment immigration attorney explains the three employment-based green card categories: EB-1 priority workers (EB-1A extraordinary ability with self-petition, EB-1B outstanding professors and researchers, EB-1C multinational managers and executives) — none of which need PERM; EB-2 advanced-degree professionals and exceptional ability, plus the EB-2 National Interest Waiver (NIW) and its Matter of Dhanasar three-prong test that waives the job offer and labor certification; and EB-3 skilled workers, professionals, and other (unskilled) workers. Covers the PERM labor certification process at the Department of Labor (prevailing wage, recruitment, ETA Form 9089, audits), priority dates and Visa Bulletin retrogression by country of birth (severe India and China backlogs in EB-2/EB-3), and the final step of adjustment of status vs. consular processing — with why category choice and timing make an attorney essential. Serving Atlanta tech, healthcare, manufacturing, and university workers and employers across Georgia and Alabama.',
  },
  {
    slug: 'citizenship-by-marriage-3-year-rule-georgia',
    title: 'Citizenship by Marriage in Georgia: The 3-Year Naturalization Rule for Spouses of U.S. Citizens',
    date: '2026-06-23',
    description:
      'A Georgia naturalization attorney explains the accelerated three-year path to U.S. citizenship for spouses of U.S. citizens under INA §319(a): the requirements (three years as a green card holder, living in marital union with a citizen spouse for the full three years, continuous residence, and 18 months of physical presence), how it differs from the standard five-year rule under INA §316, when the three-year clock starts (the green card grant date), how a conditional two-year green card and a pending Form I-751 affect timing, the N-400 process and interview, common disqualifiers like separation and long trips abroad, the §319(a) battered-spouse/VAWA exception that lets survivors keep the benefit after divorce, the §319(b) expedited path for spouses of citizens stationed abroad, and the Atlanta naturalization ceremony. Licensed in Georgia and Alabama.',
  },
  {
    slug: 'asylum-one-year-bar-exceptions-georgia',
    title: 'Missed the Asylum One-Year Deadline in Georgia? Exceptions and Options',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains the asylum one-year filing bar under INA §208(a)(2)(B) and what to do if you missed it: when the clock starts (last arrival, regardless of how you entered), the clear-and-convincing standard for proving a timely filing, the "changed circumstances" exception under INA §208(a)(2)(D) and 8 CFR 208.4(a)(4) (worsening country conditions, a change in your own situation, loss of dependent status, domestic-violence/VAWA situations), the "extraordinary circumstances" exception under 8 CFR 208.4(a)(5) (serious illness, legal disability, ineffective assistance of counsel, maintaining lawful status), the reasonable-period requirement, how to raise the exception at the asylum interview or in court, and the alternative protections that have no deadline — withholding of removal under INA §241(b)(3) and Convention Against Torture (CAT) relief. Atlanta and Stewart immigration courts; states clearly that every late-filing case requires individual attorney evaluation. Georgia and Alabama.',
  },
  {
    slug: 'ir1-cr1-spouse-visa-married-couples-georgia',
    title: 'IR-1 and CR-1 Spouse Visa in Georgia: Bringing Your Married Spouse from Abroad',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains the IR-1 and CR-1 immigrant visa for married couples with a spouse abroad: the IR-1 immediate-relative visa (married two years or more, full ten-year green card) vs. the CR-1 conditional visa (married under two years, two-year green card), how the spouse visa differs from the K-1 fiancé visa (married vs. engaged) and from adjustment of status (spouse abroad vs. inside the U.S.), the full process from the I-130 petition through National Visa Center processing, the DS-260 application, the Affidavit of Support (I-864), and the embassy interview, a realistic timeline (I-130 in 6–12 months, NVC in 3–6 months, then the consular interview and entry), the F2A wait for spouses of green card holders, and the two-year conditional green card that CR-1 spouses must later remove with Form I-751. Context for metro Atlanta’s Indian, Mexican, and West African communities; Georgia and Alabama.',
  },
  {
    slug: 'notario-fraud-immigration-attorney-georgia',
    title: 'Notario Fraud in Georgia: Why Unauthorized Immigration Help Destroys Cases',
    date: '2026-06-24',
    description:
      'A licensed Georgia immigration attorney explains notario fraud: why a "notario público" in Latin America is a trained legal professional but a U.S. notary public is not a lawyer and cannot give immigration advice, who is actually allowed to represent you (licensed attorneys and DOJ/EOIR-accredited representatives only), how unauthorized "immigration consultants" destroy cases (wrong filings, baseless asylum claims, fraud findings, missed deadlines, and removal orders), the red flags of a notario scam, how to verify a real attorney through the State Bar of Georgia and the EOIR accredited-representative list, and what to do if a notario has already harmed your case — including motions to reopen and reporting fraud to USCIS, EOIR, and the Georgia Attorney General. Rampant in Gwinnett, Cobb, and DeKalb. Georgia and Alabama.',
  },
  {
    slug: 'voluntary-departure-immigration-court-georgia',
    title: 'Voluntary Departure in Immigration Court: When to Take It and When to Fight (Georgia)',
    date: '2026-06-23',
    description:
      'A Georgia deportation defense attorney explains voluntary departure under INA §240B: how it differs from a removal order and why it avoids the §212(a)(9)(A) reentry bar, the two forms (pre-conclusion §240B(a) up to 120 days vs. post-conclusion §240B(b) up to 60 days), the good-moral-character and one-year-presence requirements, the mandatory $500 voluntary-departure bond posted within 5 business days for a post-hearing grant, the harsh 10-year bar on cancellation, adjustment, and other relief if you miss the departure deadline, the unlawful-presence bars voluntary departure does not erase, and the strategic when-to-take-it / when-to-fight analysis. Atlanta and Stewart immigration courts; Georgia and Alabama.',
  },
  {
    slug: 'after-deportation-reentry-bars-waivers-georgia',
    title: 'After Deportation: Reentry Bars, I-212 Waivers, and Coming Back Legally (Georgia)',
    date: '2026-06-24',
    description:
      'A Georgia immigration attorney explains how to come back legally after a deportation: the 5-, 10-, and 20-year reentry bars triggered by different removal scenarios under INA §212(a)(9)(A) (and how the expedited-removal bar differs from a regular removal-order bar), the permanent bar for an aggravated felony, the separate §212(a)(9)(C) permanent bar that traps families who reentered illegally after a prior removal, the Form I-212 Application for Permission to Reapply, how I-212 combines with the I-601 and I-601A unlawful-presence waivers, the consular-processing pathway back, and a realistic timeline (often years, and up to a decade abroad for the permanent bar). Common Georgia situations: U.S. citizen spouse and children. Georgia and Alabama.',
  },
  {
    slug: 'daca-to-green-card-pathways-georgia',
    title: 'DACA to Green Card in Georgia: Every Pathway to Permanent Residence for Dreamers',
    date: '2026-06-23',
    description:
      'A Georgia immigration attorney answers the question every DACA recipient asks — can I get a green card? — and explains why how you entered the U.S. matters more than DACA itself. Covers the family pathways (marriage to a U.S. citizen, a petition from a U.S. citizen parent or adult child), employment sponsorship and why it is harder for Dreamers, the advance-parole-to-adjustment strategy that opens a green card for those who entered without inspection (and its real risks under Matter of Arrabally), who cannot get a green card under current law and why (no qualifying petitioner, unlawful entry without a safe travel option, prior removal orders), the rare INA §245(i) grandfathering exception, and what to do to protect yourself while DACA litigation (Texas v. United States) plays out. Georgia and Alabama.',
  },
  {
    slug: 'folkston-irwin-detention-south-georgia',
    title: 'Folkston and Irwin County ICE Detention in South Georgia: A Family Survival Guide',
    date: '2026-06-23',
    description:
      'A Georgia immigration attorney explains the two main ICE detention facilities in South Georgia: the Folkston ICE Processing Center in Charlton County (operated by the GEO Group and expanding toward nearly 3,000 beds to become the largest immigration jail in the U.S.) and the Irwin County Detention Center in Ocilla (operated by LaSalle Corrections, shut down in 2021 after the 2020 forced-sterilization and medical-neglect complaints and reactivated by ICE in October 2025). Covers how to locate a detained relative with the ICE Online Detainee Locator, visitation, phone, commissary and mail, bond hearings and the May 2026 Eleventh Circuit ruling restoring bond, your loved one’s rights, emergency legal options, and key phone numbers. Companion to our Stewart Detention guide. Georgia and Alabama.',
  },
  {
    slug: 'reinstatement-of-removal-prior-deportation-georgia',
    title: 'Reinstatement of Removal in Georgia: When a Prior Deportation Order Comes Back',
    date: '2026-06-23',
    description:
      'A Georgia deportation defense attorney explains reinstatement of removal under INA §241(a)(5): what happens when someone with a prior removal order reenters the United States without inspection, why ICE can revive the old order with no immigration-judge hearing and no bond, who it affects (people who returned to reunite with U.S. citizen family), how reinstatement differs from a new removal case, the one door that stays open (a reasonable-fear interview leading to withholding-only proceedings for those who fear persecution or torture), the narrow factual and legal challenges, the 30-day deadline to petition the Eleventh Circuit, the fast timeline, the separate illegal-reentry crime under 8 U.S.C. §1326, and why immediate legal help is critical. Atlanta and Stewart immigration courts; Georgia and Alabama.',
  },
  {
    slug: 'federal-immigration-litigation-georgia',
    title: 'Federal Immigration Litigation in Georgia: When to Sue in Federal Court',
    date: '2026-06-23',
    description:
      'A Georgia immigration attorney explains when immigrants can take USCIS, ICE, or DHS to federal court after exhausting administrative remedies: the difference between immigration court and the Article III federal courts, the four main tools (mandamus/APA delay suits, the petition for review of a removal order, habeas corpus for unlawful detention, and APA/constitutional challenges to agency action), the 30-day jurisdictional deadline to petition the Eleventh Circuit, the REAL ID Act channeling of removal-order review, where Georgia and Alabama cases are heard (the three federal districts of Georgia, Stewart Detention Center in the Middle District, and the Eleventh Circuit covering GA/AL/FL), realistic timelines and costs, and why few Georgia firms actually litigate in federal court. Georgia and Alabama.',
  },
  {
    slug: 'vawa-self-petition-domestic-violence-immigration-georgia',
    title: 'VAWA Self-Petition for Immigrant Survivors of Domestic Violence in Georgia',
    date: '2026-06-23',
    description:
      "A Georgia immigration attorney explains the VAWA self-petition (Form I-360) for immigrant survivors of domestic violence: who qualifies (abused spouses of U.S. citizens and green card holders, children, parents), what battery or extreme cruelty means under federal law, VAWA's strict confidentiality protections (USCIS cannot notify the abuser), the Form I-360 petition process and what evidence to gather, how it differs from the U-visa and the I-751 battery/cruelty waiver, the path to a green card as an immediate relative or F2A preference beneficiary, and Georgia-specific resources including the Georgia Coalition Against Domestic Violence and the Georgia Address Confidentiality Program. Georgia and Alabama.",
  },
  {
    slug: 'visa-bulletin-priority-dates-family-green-card',
    title: 'How to Read the USCIS Visa Bulletin: Priority Dates for Georgia Families',
    date: '2026-06-23',
    description:
      'A Georgia immigration attorney explains the Visa Bulletin and family-based green card waits: what a priority date is and where to find it, why immediate relatives of U.S. citizens are exempt, the family preference categories (F1, F2A, F2B, F3, F4) and per-country backlogs, the difference between Final Action Dates (Chart A) and Dates for Filing (Chart B), how USCIS decides which chart applies to adjustment-of-status filings each month, how cutoff dates advance and retrogress across the fiscal year, and how to subscribe to monthly updates from travel.state.gov. National rules with Georgia (adjustment of status vs. consular processing) context; Georgia and Alabama.',
  },
  {
    slug: 'green-card-medical-exam-i-693-georgia',
    title: 'Green Card Medical Exam in Georgia: Civil Surgeons, Form I-693, and What to Bring',
    date: '2026-06-23',
    description:
      'A Georgia immigration attorney explains the USCIS immigration medical exam required for adjustment of status (Form I-485): what Form I-693 covers, why it must be done by a USCIS-designated civil surgeon (not your own doctor) and how to find one in the Atlanta area, the TB IGRA blood test and STI screening, CDC vaccination requirements, the late-2023 policy change that means an I-693 signed on or after November 1, 2023 no longer expires, what to bring to your appointment, the sealed-envelope rule, and how it differs from the panel-physician exam used in consular processing. Georgia and Alabama.',
  },
  {
    slug: 'k1-fiance-visa-processing-timeline-2026',
    title: 'K-1 Fiancé Visa Processing Time in 2026: Timeline, Delays, and What to Do While You Wait',
    date: '2026-06-23',
    description:
      'A Georgia immigration attorney breaks down the K-1 fiancé visa timeline in 2026: the four stages from Form I-129F through NVC, the embassy interview, and the green card; realistic processing-time ranges (about 12–18 months to U.S. entry); why cases stall (RFEs, 221(g) administrative processing, thin relationship evidence, medical gaps, embassy backlogs); how to track your case with USCIS Case Status, CEAC, and posted consular wait times; the firm 90-day marriage rule; and what Georgia and Alabama couples can do during the wait. A process-and-timeline companion to our marriage green card and K-1 eligibility guide.',
  },
  {
    slug: 'affidavit-of-support-i-864-income-requirements',
    title: 'Affidavit of Support (Form I-864) in Georgia: 2025 Income Requirements and Joint Sponsors',
    date: '2026-06-23',
    description:
      'A Georgia immigration attorney explains Form I-864, the Affidavit of Support required in nearly every family-based green card case: what the INA 213A contract obligates you to, who must file, the 2025 income threshold of 125% of the Federal Poverty Guidelines (and the 100% active-duty exception), how to count household size, when and how a joint sponsor or Form I-864A household member can fill an income gap, using assets at the 5x (or 3x for a U.S. citizen’s spouse) multiplier, sponsor liability that survives divorce and lasts until citizenship or 40 work quarters, and the RFE and denial consequences of an insufficient affidavit. Atlanta-area income context; Georgia and Alabama.',
  },
  {
    slug: 'travel-ban-2026-proclamation-10998-waiver',
    title: '2026 Travel Ban: Countries Affected, Waivers, and What It Means for Your Family',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains Presidential Proclamation 10998, the 2026 travel ban effective January 1, 2026: which 39 countries are affected (the 19 full-suspension and 20 partial-suspension lists), how immigrant and nonimmigrant visas are treated differently, who is exempt (green card holders, valid-visa holders, dual nationals, diplomats) and which exemptions were removed (immediate-relative immigrant visas, adoptions, Afghan SIVs), how the rare national-interest waiver works, the impact on pending I-130, I-485, and consular cases, the metro-Atlanta communities most affected (Nigerian, Haitian, West and East African, Iranian/Syrian/Yemeni/Libyan, Venezuelan, Cuban), and what to do now if a relative is from an affected country. Note: India and Ethiopia are not on the list. Georgia and Alabama.',
  },
  {
    slug: 'remove-conditions-green-card-i-751-georgia',
    title: 'How to Remove Conditions on Your Green Card in Georgia: The I-751 Petition Guide',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains how conditional permanent residents remove the conditions on a 2-year marriage-based green card with Form I-751: who gets a conditional green card and why, the critical 90-day filing window before the 2-year anniversary and what happens if you miss it, how to file jointly when still married, the waiver options if you divorced or your spouse was abusive (good-faith marriage, battery/extreme cruelty, extreme hardship), the joint-filing evidence checklist (joint finances, lease/mortgage, insurance, children, photos, affidavits), processing times and receipt notices that extend your green card, when USCIS calls a case in for an I-751 interview, and how an attorney builds the evidence package. Georgia and Alabama.',
  },
  {
    slug: 'ice-enforcement-rights-georgia',
    title: 'ICE Encounter in Georgia: Know Your Rights and What to Do in the First 48 Hours',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains what to do during an ICE encounter: why you do not have to open the door without a judge-signed warrant, your Fourth and Fifth Amendment rights, the difference between a judicial and an administrative (ICE) warrant, the first-48-hours timeline after an arrest, what to expect at Stewart Detention Center and Irwin County, how an attorney can request a bond hearing fast, an emergency planning checklist for families and children, and the common mistakes that hurt cases. Atlanta and Stewart immigration courts; Georgia and Alabama.',
  },
  {
    slug: 'tn-visa-canadian-mexican-professionals-georgia',
    title: 'TN Visa in Georgia: USMCA Status for Canadian and Mexican Professionals',
    date: '2026-06-22',
    description:
      'A Georgia TN visa attorney explains TN nonimmigrant status under the USMCA for Canadian and Mexican professionals: who qualifies, the USMCA occupation list and credential rules, the different Canadian (port-of-entry) and Mexican (consular) processes, the 3-year admission and indefinite renewals, TD dependent status (study but no work authorization), the nonimmigrant-intent limits on a green-card path, and common denial reasons. Atlanta CBP at Hartsfield-Jackson; Georgia and Alabama.',
  },
  {
    slug: 'parole-in-place-military-families-georgia',
    title: 'Parole in Place (PIP) for Military Families: Immigration Relief in Georgia',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains parole in place (PIP) under INA 212(d)(5)(A): traditional military PIP for undocumented immediate relatives of active-duty service members, Selected Reserve members, and veterans (filed on Form I-131, no fee); the Keeping Families Together (KFT) PIP for long-term undocumented spouses of U.S. citizens (Form I-131F) and its current legal status after the program was vacated in Texas v. DHS; how PIP differs from advance parole (a status grant vs. travel permission); the adjustment-of-status (I-130/I-485) green card path it can unlock; and Georgia military context (Fort Stewart/Hinesville, Fort Moore/Columbus, Robins AFB/Warner Robins). Georgia and Alabama.',
  },
  {
    slug: 'h4-ead-work-authorization-h1b-spouses-georgia',
    title: 'H-4 EAD: Work Authorization for H-1B Spouses in Georgia',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains the H-4 EAD work permit for spouses of H-1B workers: who qualifies (H-1B principal with an approved I-140 or an AC21 post-6th-year extension), how to file Form I-539 and Form I-765 under category (c)(26) concurrently with the H-1B I-129, processing times and premium-processing limits, automatic-extension relief for timely renewals, maintaining derivative H-4 status, the I-539 travel/abandonment trap (and why the Indian Consulate in Houston covers Georgia for Indian — not U.S. — consular services), and the ongoing Save Jobs USA v. DHS litigation. For the Alpharetta, Johns Creek, and Cumming tech corridor; Georgia and Alabama.',
  },
  {
    slug: 'motion-to-reopen-reconsider-immigration-georgia',
    title: 'Motion to Reopen or Reconsider an Immigration Case in Georgia: Your Options After a Denial',
    date: '2026-06-22',
    description:
      'A Georgia immigration appeal attorney explains motions to reopen (MTR) and motions to reconsider (MTC) after a USCIS or immigration-court denial: new evidence vs. legal error, the 30-day USCIS deadline (Form I-290B), the 90-day immigration-court reopen and 30-day reconsider deadlines, why a motion does not automatically stay removal (and the in-absentia exception), changed country conditions, exceptional circumstances and equitable tolling, and how a motion differs from a BIA appeal. Atlanta and Stewart immigration courts; Georgia and Alabama.',
  },
  {
    slug: 't-visa-trafficking-victims-georgia',
    title: 'T-Visa for Trafficking Victims: Immigration Protection and a Green Card Path in Georgia',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains the T-visa (T nonimmigrant status) for survivors of severe human trafficking: how it differs from the U-visa (different crime, Form I-914 vs. I-918, no mandatory law-enforcement certification), the four eligibility requirements (severe sex or labor trafficking, physical presence on account of trafficking, cooperation with law enforcement with a minor exemption, and extreme hardship), the Form I-914 process, derivative T-visas for family, the path to a green card under INA 245(l), and Georgia\'s trafficking context (I-85 corridor, Hartsfield-Jackson, DFCS, Atlanta task force, DHS-certified providers). Georgia and Alabama.',
  },
  {
    slug: 'mandamus-lawsuit-uscis-delay-georgia',
    title: 'Mandamus Lawsuits: Suing USCIS for Unreasonable Delay — A Georgia Guide',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains the writ of mandamus and APA delay lawsuit used to force USCIS to decide a case it has unreasonably delayed: the legal basis (28 U.S.C. § 1361, 5 U.S.C. §§ 555(b) and 706(1)), the TRAC unreasonable-delay factors, when a 12–24+ month delay on an I-485, N-400, I-130, or I-765 supports a suit, how cases are filed and resolved in the Northern and Southern Districts of Georgia, the 60-day government response window, typical costs and timelines, and when mandamus is not the right remedy. Georgia and Alabama.',
  },
  {
    slug: 'employment-authorization-ead-georgia',
    title: 'Employment Authorization Documents (EAD): Work Permits for Pending Immigration Cases in Georgia',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains the Employment Authorization Document (EAD) and Form I-765: who qualifies (pending I-485 adjustment, asylum applicants, DACA, TPS, H-4 spouses, deferred action, compelling circumstances), the common category codes (c)(9), (c)(8), (c)(14) and (c)(35), processing times and premium processing, the up-to-540-day automatic extension for timely-filed renewals, what to do if your card is lost or expires, and Atlanta Field Office and lockbox filing tips. Georgia and Alabama.',
  },
  {
    slug: 'i-601a-provisional-unlawful-presence-waiver-georgia',
    title: 'I-601A Provisional Unlawful Presence Waiver: A Georgia Guide for Undocumented Spouses',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains the Form I-601A provisional unlawful presence waiver for undocumented spouses of U.S. citizens and permanent residents: how the 3- and 10-year bars under INA 212(a)(9)(B) work, how the provisional waiver lets you apply before leaving the U.S. for consular processing, the "extreme hardship" standard and qualifying relatives, National Visa Center timing, and the Atlanta consular processing context. Georgia and Alabama.',
  },
  {
    slug: 'i-601-inadmissibility-waiver-extreme-hardship-georgia',
    title: 'I-601 Inadmissibility Waivers in Georgia: What Is Extreme Hardship and How to Prove It',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains the Form I-601 waiver of inadmissibility for clients with criminal history, fraud or misrepresentation, prior removals, or health grounds: how it differs from the I-601A provisional waiver, the distinct 212(h) criminal, 212(i) fraud, and unlawful presence waivers and their different qualifying-relative rules, the Form I-212 permission to reapply after removal and the 212(a)(9)(C) permanent bar, the undefined "extreme hardship" standard and the evidence (medical, financial, psychological, country conditions, family ties) that proves it, processing and filing, and the AAO appeals path if denied. Georgia and Alabama.',
  },
  {
    slug: 'bia-appeal-immigration-court-georgia',
    title: 'BIA Appeals and Immigration Court Strategy in Georgia: How to Appeal a Removal Order',
    date: '2026-06-22',
    description:
      'A Georgia immigration appeal attorney explains how to appeal an immigration judge\'s decision to the Board of Immigration Appeals (BIA): the strict 30-day deadline and Form EOIR-26, grounds for appeal (legal error vs. clear-error fact review), briefing requirements, appeal vs. motion to reopen or reconsider, likelihood of success, the automatic stay of removal, and the Eleventh vs. Ninth Circuit distinction for petitions for review. Atlanta and Stewart immigration courts; Georgia and Alabama.',
  },
  {
    slug: 'special-immigrant-juvenile-status-georgia',
    title: 'Special Immigrant Juvenile Status (SIJS): A Green Card Path for Abused or Abandoned Children in Georgia',
    date: '2026-06-22',
    description:
      'A Georgia SIJS attorney explains Special Immigrant Juvenile Status for undocumented youth who have been abused, neglected, or abandoned: eligibility (under 21, unmarried, a state-court Special Findings Order), the two-step state court-to-USCIS process (Form I-360 then a green card), the EB-4 visa backlog and deferred action, Georgia juvenile- and probate-court jurisdiction and the age deadline, and why an attorney matters. Georgia and Alabama.',
  },
  {
    slug: 'advance-parole-travel-documents-georgia',
    title: 'Advance Parole, Reentry Permits, and Travel Documents: A Georgia Guide',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains travel documents for immigrants: Form I-131 advance parole for pending green card (I-485) and DACA recipients, the limited humanitarian/educational/employment travel rules for DACA, reentry permits for green card holders staying abroad, the I-485 abandonment trap, the 3- and 10-year unlawful presence bars, and USCIS processing times. Georgia and Alabama.',
  },
  {
    slug: 'cancellation-of-removal-georgia',
    title: 'Cancellation of Removal in Georgia: Stopping Deportation for Long-Term Residents',
    date: '2026-06-22',
    description:
      'A Georgia deportation defense attorney explains cancellation of removal: non-LPR cancellation (10 years of presence, good moral character, exceptional and extremely unusual hardship to a U.S. citizen or LPR family member), LPR cancellation (5 years as a green card holder, 7 years residence, no aggravated felony), the stop-time rule, the 4,000-per-year cap, and the EOIR process in the Atlanta immigration court. Georgia and Alabama.',
  },
  {
    slug: 'adjustment-of-status-green-card-georgia',
    title: 'Adjustment of Status (I-485): Getting a Green Card Inside the U.S. — A Georgia Guide',
    date: '2026-06-22',
    description:
      'A Georgia adjustment of status attorney explains the I-485 process: who can adjust vs. consular process, concurrent I-130/I-485 filing, priority dates and the Visa Bulletin, the I-864, I-693 medical, and I-94 documents, work authorization (I-765), Advance Parole travel, the Atlanta Field Office interview, and common RFE triggers. Georgia and Alabama.',
  },
  {
    slug: 'student-visa-f1-opt-stem-georgia',
    title: 'Student Visas, OPT, and STEM OPT: A Georgia Guide for International Students',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains F-1 student status, Optional Practical Training (OPT), the 24-month STEM OPT extension and its E-Verify requirement, cap-gap protection while an H-1B is pending, common F-1 violations, and when to hire an attorney. For students at Georgia Tech, Emory, UGA, Georgia State and across Georgia and Alabama.',
  },
  {
    slug: 'consular-processing-immigrant-visa-georgia',
    title: 'Consular Processing and Immigrant Visas: A Georgia Guide',
    date: '2026-06-22',
    description:
      'A Georgia immigrant visa attorney explains consular processing: how it differs from adjustment of status, NVC processing, the DS-260, the Affidavit of Support, the medical exam, the consular interview, timelines, and common delays like RFEs and 221(g). Serving petitioners in Georgia and Alabama.',
  },
  {
    slug: 'immigration-bond-hearing-georgia',
    title: 'Immigration Bond Hearings and ICE Detention in Georgia',
    date: '2026-06-22',
    description:
      'A Georgia immigration attorney explains ICE detention and immigration bond hearings: where ICE holds people (Stewart, Folkston, Irwin), what a bond hearing is, the factors judges weigh, bond amounts, and how to help a detained family member fast. Atlanta and Stewart immigration courts.',
  },
  {
    slug: 'marriage-based-green-card-k1-fiance-visa-georgia',
    title: 'Marriage Green Card and K-1 Fiancé Visa: A Georgia Guide',
    date: '2026-06-22',
    description:
      'A Georgia marriage green card attorney explains spousal green cards and the K-1 fiancé visa: who qualifies, the I-130 and I-129F petitions, adjustment of status vs. consular processing, the 90-day K-1 rule, timelines, and the pitfalls that derail couples in Georgia and Alabama.',
  },
  {
    slug: 'criminal-record-immigration-consequences-georgia',
    title: 'Criminal Record and Immigration Consequences in Georgia',
    date: '2026-06-21',
    description:
      'A Georgia immigration attorney explains how criminal convictions affect immigration status: aggravated felonies, crimes of moral turpitude, drug offenses and DUIs, the effect on green cards, citizenship, and visas, and what to do if you are charged. Atlanta immigration court.',
  },
  {
    slug: 'deportation-defense-removal-proceedings-georgia',
    title: 'Deportation Defense Attorney in Georgia: How Removal Proceedings Work and How to Fight Them',
    date: '2026-06-21',
    description:
      'Facing deportation in Georgia? A deportation defense attorney explains how removal proceedings start, what happens in the Atlanta immigration court, and the defenses — asylum, cancellation of removal, adjustment of status, voluntary departure — that can let you stay. Licensed in Georgia and Alabama.',
  },
  {
    slug: 'naturalization-citizenship-georgia',
    title: 'Naturalization in Georgia: Your Path to U.S. Citizenship',
    date: '2026-06-21',
    description:
      'A Georgia naturalization attorney explains N-400 eligibility, continuous residence, the English and civics tests, the timeline, the USCIS Atlanta Field Office, and the common problems that delay citizenship.',
  },
  {
    slug: 'asylum-application-georgia',
    title: 'How to Apply for Asylum in the United States: A Georgia Guide',
    date: '2026-06-21',
    description:
      'A Georgia immigration attorney explains how to apply for asylum: the five protected grounds, the one-year deadline, affirmative vs. defensive cases, Form I-589, and the mistakes that sink cases.',
  },
  {
    slug: 'notice-to-appear-georgia',
    title: 'Received a Notice to Appear? What to Do Next in Georgia',
    date: '2026-06-21',
    description:
      'Got a Notice to Appear (NTA) in Georgia? Learn what it means, your court deadlines, and your options — and why the first 30 days matter most. Call today.',
  },
  {
    slug: 'family-green-card-attorney-georgia',
    title: 'Green Card Through Family: A Complete Guide for Immigrants in Georgia',
    date: '2026-06-20',
    description:
      'A family green card attorney in Georgia explains who can petition, the I-130 process, adjustment vs. consular processing, and mistakes to avoid.',
  },
  {
    slug: 'tps-2026',
    title: 'TPS in 2026: What It Means for Georgia Immigrants',
    date: '2026-06-21',
    description:
      'Temporary Protected Status is in flux in 2026. A Georgia immigration attorney explains what TPS provides, who qualifies, re-registration deadlines, and what to do if your country\'s designation ends.',
  },
  {
    slug: 'daca-renewal-2025-georgia',
    title: 'DACA Renewal in 2025: What Georgia Dreamers Need to Know',
    date: '2026-06-20',
    description:
      'DACA renewal is still open in 2025. A Georgia immigration attorney explains who qualifies, the documents you need, timing, and mistakes to avoid.',
  },
  {
    slug: 'daca-renewal-2026',
    title: 'DACA Renewal Guide 2026: What Every Dreamer Needs to Know',
    date: '2026-06-20',
    description:
      'Your complete DACA renewal 2026 guide: who qualifies, Forms I-821D and I-765, the renewal timeline, fees, and what happens if DACA expires. From an experienced DACA attorney.',
  },
  {
    slug: 'daca-2026',
    title: 'DACA in 2026: What Georgia Dreamers Need to Know',
    date: '2026-05-20',
    description:
      'DACA renewals continue in 2026, but litigation keeps the program\'s future uncertain. Georgia Dreamers: know your eligibility, rights, and options.',
  },
  {
    slug: 'u-visa-crime-victims-immigration-georgia',
    title: 'U-Visa for Immigrant Crime Victims in Georgia: Eligibility, the I-918 Petition, and the Path to a Green Card',
    date: '2026-06-23',
    description:
      'A Georgia immigration attorney explains the U-visa (Form I-918) for immigrant crime victims: who qualifies under INA § 101(a)(15)(U), the full qualifying-crimes list, the mandatory law enforcement certification (Form I-918B), derivative visas for family members, the 4-year U-visa status, and the adjustment-of-status path to a green card after three years. Certifying agencies in Georgia include local police, the GBI, DA offices, and certain federal agencies. Distinct from the T-visa (trafficking, Form I-914) and VAWA (domestic violence self-petition). Georgia and Alabama.',
  },
  {
    slug: 'u-visa-vawa-crime-victims-georgia',
    title: 'U-Visa and VAWA: Immigration Protection for Crime Victims in Georgia',
    date: '2026-06-21',
    description:
      'A Georgia immigration attorney explains U-Visa, VAWA, and T-Visa protections for immigrant crime victims in Georgia and Alabama: who qualifies, the 10,000 U-Visa cap, VAWA self-petitions, and how to apply.',
  },
  {
    slug: 'stewart-detention-attorney',
    title: 'Detained at Stewart? Here\'s What Happens in the First 72 Hours',
    date: '2026-05-21',
    description:
      'Loved one detained at Stewart Detention Center in Lumpkin, GA? Learn what happens in the first 72 hours and how to get an attorney fast.',
  },
  {
    slug: 'employment-based-immigration-georgia',
    title: 'Employment-Based Green Cards and Work Visas: A Georgia Guide',
    date: '2026-06-21',
    description:
      'A Georgia immigration attorney explains employment-based immigration for employers and workers: H-1B, L-1, and O-1 work visas, the EB-1/EB-2/EB-3 green card categories, the EB-2 national interest waiver, and PERM labor certification.',
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

const SITE_URL = 'https://bardilaw.com';

// BlogPosting (Article) JSON-LD for a single blog post (BAR-675). Built once here and
// reused by both the EN and ES [slug] templates so the two never drift. Values are pulled
// dynamically from the post metadata; the publisher links to the site-wide firm node
// (@id #firm in RootLayout, BAR-648) so Google treats it as one entity, not a duplicate.
// We carry no per-post dateModified field yet, so dateModified mirrors datePublished —
// valid structured data and accurate (posts are evergreen and not silently edited).
export function blogPostingSchema(post: BlogPost, locale: 'en' | 'es') {
  const url = `${SITE_URL}${locale === 'es' ? '/es' : ''}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${ogImageFor(post.slug, locale)}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: locale === 'es' ? 'es-ES' : 'en-US',
    author: {
      '@type': 'Person',
      name: 'Eszter Bardi',
      jobTitle: 'Immigration Attorney',
      worksFor: { '@type': 'LegalService', name: 'Bardi Immigration Law' },
    },
    publisher: {
      '@type': 'LegalService',
      '@id': `${SITE_URL}/#firm`,
      name: 'Bardi Immigration Law',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-bardi.png`,
      },
    },
    url,
  };
}

// BreadcrumbList JSON-LD (BAR-701). Generic builder: pass crumbs ordered from the
// site root to the current page as { name, path } (path is site-relative, e.g. '/blog');
// SITE_URL is prepended and `position` is assigned automatically (1-based). Rendered
// alongside the page's primary schema (BlogPosting / FAQPage / LegalService) — multiple
// JSON-LD blocks in one <head> are valid and Google parses each independently. Mirrors
// the visible breadcrumb nav on each template so the markup never drifts from the UI.
export interface Breadcrumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Breadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

// Spanish-language title/description overrides for posts translated into /content/blog/es/.
// The shared BLOG_POSTS metadata is English; when a slug appears here, the ES [slug] template
// uses these values for the <h1>, the meta tags, and the BlogPosting JSON-LD headline so the
// page reads as native Spanish rather than an English header on a Spanish body (BAR-670).
export interface EsBlogMeta {
  title: string;
  description: string;
}

export const ES_BLOG_META: Record<string, EsBlogMeta> = {
  'h1b-visa-sponsorship-cap-georgia': {
    title: 'Visa H-1B en Georgia: Patrocinio, Tope, Lotería y el Camino a la Green Card',
    description:
      'Una abogada de inmigración en Georgia explica cómo funciona la visa H-1B: la ocupación especializada, el tope de 85,000 y la lotería, la LCA y el salario prevaleciente, las RFE, qué pasa al perder el empleo (período de gracia de 60 días y portabilidad bajo INA §214(n)) y la vía EB-2/EB-3 a la residencia. Información general, no asesoría legal.',
  },
  'eb2-national-interest-waiver-self-petition-georgia': {
    title: 'EB-2 con Exención por Interés Nacional (NIW) en Georgia: La Green Card Sin Empleador',
    description:
      'Una abogada de inmigración en Georgia explica la Exención por Interés Nacional (NIW) de la categoría EB-2 bajo INA §203(b)(2)(B): quién califica, el test de tres elementos de Matter of Dhanasar, cómo se compara con PERM y EB-1, y qué significan los atrasos de fechas de prioridad. Información general, no asesoría legal.',
  },
  'administrative-closure-immigration-court-georgia': {
    title: 'Cierre Administrativo en la Corte de Inmigración de Georgia: Cómo Pausar su Caso',
    description:
      'Una abogada de inmigración en Georgia explica qué es el cierre administrativo, en qué se diferencia de la terminación y la desestimación, cómo ha cambiado la ley con cada administración, cuándo ayuda y qué riesgos conlleva. Información general, no asesoría legal.',
  },
  'f2-dependent-visa-international-student-family-georgia': {
    title: 'Visa de Dependiente F-2 en Georgia: La Familia de un Estudiante Internacional',
    description:
      'Una abogada de inmigración en Georgia explica quién califica para la visa de dependiente F-2, por qué los cónyuges F-2 no pueden trabajar, los límites de estudio bajo 8 CFR 214.2(f)(15), el proceso del I-20 y cómo cambiar de F-2 a F-1, H-4 u otro estatus. Información general, no asesoría legal.',
  },
  'withholding-of-removal-immigration-court-georgia': {
    title: 'Retención de Remoción en Georgia: Protección Cuando el Asilo No Es Posible',
    description:
      'Una abogada de inmigración en Georgia explica la retención de remoción bajo la INA §241(b)(3): en qué se diferencia del asilo (el estándar más alto de "más probable que no", sin camino a la green card, sin beneficios derivados para la familia, sin plazo de un año y una concesión obligatoria), cómo funciona la protección bajo la Convención contra la Tortura (CAT) como una tercera opción separada, quién debe solicitar la retención o CAT en lugar de o junto con el asilo, cómo es la vida con esta protección (permiso de trabajo pero sin green card ni documento de viaje, con una orden de deportación subyacente) y por qué es esencial un abogado. Cortes de inmigración de Atlanta y Stewart; Georgia y Alabama.',
  },
  'o1-visa-extraordinary-ability-georgia': {
    title: 'Visa O-1 de Habilidad Extraordinaria en Georgia: Atletas, Artistas y Profesionales',
    description:
      'Una abogada de inmigración en Georgia explica la visa O-1 para personas de habilidad extraordinaria: la categoría O-1A para las ciencias, la educación, los negocios y el atletismo (el estándar de "aclamación nacional o internacional sostenida" y los ocho criterios de evidencia, de los cuales debe cumplir al menos tres) frente a la categoría O-1B para las artes (el estándar de "distinción") y el cine y la televisión, la opinión consultiva obligatoria, por qué no puede autopeticionarse y necesita un empleador o agente en EE. UU., las clasificaciones O-2 y O-3, el período inicial de hasta tres años con prórrogas y el camino a la green card EB-1A. Para la industria del cine y la TV de Georgia, fundadores tecnológicos de Atlanta, investigadores universitarios y atletas y artistas de élite. Georgia y Alabama.',
  },
  'perm-labor-certification-employer-sponsored-green-card-georgia': {
    title: 'Certificación Laboral PERM en Georgia: Green Cards Patrocinadas por el Empleador (EB-2 y EB-3)',
    description:
      'Una abogada de inmigración por empleo en Georgia explica la certificación laboral PERM: el proceso del Departamento de Trabajo exigido para la mayoría de las green cards EB-2 y EB-3 patrocinadas por el empleador. Cubre qué es PERM y por qué existe para proteger a los trabajadores estadounidenses, la determinación del salario prevaleciente (ETA Formulario 9141), los pasos de reclutamiento obligatorios, el informe de reclutamiento y la regla de documentación de cinco años, la solicitud ETA Formulario 9089, los tiempos de procesamiento del DOL y el alto riesgo de auditorías, las causas comunes de negación y qué ocurre tras la certificación: el I-140, la fecha de prioridad y los atrasos de India y China, con referencias a las vías EB-1 y EB-2 NIW que evitan PERM. Para empleadores y trabajadores de tecnología, salud, manufactura y hostelería de Atlanta en Georgia y Alabama.',
  },
  'consular-processing-immigrant-visa-georgia': {
    title: 'Proceso Consular en Georgia: Cómo Obtener la Visa de Inmigrante desde el Extranjero',
    description:
      'Una abogada de inmigración en Georgia explica el proceso consular paso a paso para familiares que están fuera de EE. UU.: en qué se diferencia del ajuste de estatus, el proceso desde la petición I-130 hasta la aprobación, el papel del Centro Nacional de Visas (NVC), el Formulario DS-260, la Declaración Jurada de Manutención (I-864), el examen médico del médico de panel, la entrevista consular y la admisión como residente permanente, la advertencia sobre las barras por presencia ilegal de la INA §212(a)(9)(B), la green card condicional de dos años y el I-751, y por qué es esencial un abogado. Con licencia en Georgia y Alabama.',
  },
  'employment-based-green-card-eb1-eb2-eb3-georgia': {
    title: 'Green Cards por Empleo en Georgia: EB-1, EB-2 y EB-3 Explicadas',
    description:
      'Una abogada de inmigración por empleo en Georgia explica las tres categorías de green card por empleo: los trabajadores prioritarios EB-1 (EB-1A habilidad extraordinaria con autopetición, EB-1B profesores e investigadores destacados, EB-1C gerentes y ejecutivos multinacionales), ninguna de las cuales necesita PERM; los profesionales con título avanzado y habilidad excepcional EB-2, más la Exención por Interés Nacional (NIW) y su prueba de tres puntas de Matter of Dhanasar; y los trabajadores calificados, profesionales y no calificados EB-3. Cubre el proceso de certificación laboral PERM, las fechas de prioridad y la retrogresión del Boletín de Visas por país de nacimiento (graves atrasos de India y China en EB-2/EB-3) y el paso final del ajuste de estatus frente al proceso consular. Para trabajadores y empleadores de tecnología, salud, manufactura y universidades de Atlanta en Georgia y Alabama.',
  },
  'asylum-one-year-bar-exceptions-georgia': {
    title: '¿Perdió el Plazo de Un Año para el Asilo en Georgia? Excepciones y Opciones',
    description:
      'Una abogada de inmigración en Georgia explica la barra de presentación de un año para el asilo bajo la INA §208(a)(2)(B) y qué hacer si la perdió: cuándo empieza el reloj (la última llegada, sin importar cómo entró), el estándar de prueba clara y convincente, la excepción de "circunstancias cambiadas" bajo la INA §208(a)(2)(D) y 8 CFR 208.4(a)(4), la excepción de "circunstancias extraordinarias" bajo 8 CFR 208.4(a)(5), el requisito de un plazo razonable, cómo plantear la excepción en la entrevista de asilo o en la corte, y las protecciones alternativas que no tienen plazo: la retención de remoción bajo la INA §241(b)(3) y la Convención contra la Tortura (CAT). Cortes de inmigración de Atlanta y Stewart; cada caso de presentación tardía requiere evaluación individual de un abogado. Georgia y Alabama.',
  },
  'citizenship-by-marriage-3-year-rule-georgia': {
    title: 'Ciudadanía por Matrimonio en Georgia: La Regla de Naturalización de 3 Años para Cónyuges de Ciudadanos',
    description:
      'Una abogada de naturalización en Georgia explica la vía acelerada de tres años a la ciudadanía estadounidense para cónyuges de ciudadanos bajo la INA §319(a): los requisitos (tres años como residente permanente, vivir en unión matrimonial con el cónyuge ciudadano durante los tres años completos, residencia continua y 18 meses de presencia física), en qué se diferencia de la regla estándar de cinco años bajo la INA §316, cuándo empieza el reloj de tres años, cómo afectan la green card condicional de dos años y un I-751 pendiente, el proceso y la entrevista del N-400, los descalificadores comunes, la excepción §319(a) para cónyuges maltratados/VAWA, la vía acelerada §319(b) para cónyuges de ciudadanos destacados en el extranjero y la ceremonia de naturalización de Atlanta. Con licencia en Georgia y Alabama.',
  },
  'ir1-cr1-spouse-visa-married-couples-georgia': {
    title: 'Visa de Cónyuge IR-1 y CR-1 en Georgia: Cómo Traer a su Cónyuge desde el Extranjero',
    description:
      'Una abogada de inmigración en Georgia explica la visa de inmigrante IR-1 y CR-1 para parejas casadas con un cónyuge en el extranjero: la visa de familiar inmediato IR-1 (casados dos años o más, green card completa de diez años) frente a la visa condicional CR-1 (casados menos de dos años, green card de dos años), en qué se diferencia de la visa de prometido(a) K-1 y del ajuste de estatus, el proceso completo desde la petición I-130 pasando por el Centro Nacional de Visas, el DS-260, la Declaración Jurada de Manutención (I-864) y la entrevista en la embajada, una línea de tiempo realista, la espera F2A para cónyuges de residentes y la green card condicional de dos años que los cónyuges CR-1 deben luego eliminar con el Formulario I-751. Contexto para las comunidades india, mexicana y de África Occidental del área metropolitana de Atlanta; Georgia y Alabama.',
  },
  'federal-immigration-litigation-georgia': {
    title: 'Litigio Federal de Inmigración en Georgia: Cuándo Demandar al Gobierno',
    description:
      'Una abogada de inmigración en Georgia explica cuándo los inmigrantes pueden llevar a USCIS, ICE o DHS a la corte federal tras agotar los recursos administrativos: la diferencia entre la corte de inmigración y los tribunales federales del Artículo III, las cuatro herramientas principales (demandas de mandamus/APA por demora, la petición de revisión de una orden de remoción, el habeas corpus por detención ilegal y las impugnaciones APA/constitucionales), el plazo jurisdiccional de 30 días para acudir al Undécimo Circuito, la canalización de la revisión por la Ley REAL ID, dónde se ven los casos de Georgia y Alabama, los plazos y costos realistas, y por qué pocas firmas de Georgia litigan de verdad en la corte federal. Georgia y Alabama.',
  },
  'visa-bulletin-priority-dates-family-green-card': {
    title: 'Cómo Leer el Boletín de Visas de USCIS: Fechas de Prioridad para las Familias de Georgia',
    description:
      'Una abogada de inmigración en Georgia explica el Boletín de Visas y las esperas de green card basadas en la familia: qué es una fecha de prioridad y dónde encontrarla, por qué los familiares inmediatos de ciudadanos están exentos, las categorías de preferencia familiar (F1, F2A, F2B, F3, F4) y los atrasos por país, la diferencia entre las Fechas de Acción Final (Gráfico A) y las Fechas para Presentar (Gráfico B), cómo decide USCIS cada mes qué gráfico aplica al ajuste de estatus, cómo avanzan y retroceden las fechas de corte durante el año fiscal y cómo suscribirse a las actualizaciones mensuales de travel.state.gov. Reglas nacionales con contexto de Georgia (ajuste de estatus frente a proceso consular); Georgia y Alabama.',
  },
  'green-card-medical-exam-i-693-georgia': {
    title: 'Examen Médico para la Green Card en Georgia: Médicos Civiles, Formulario I-693 y Qué Llevar',
    description:
      'Una abogada de inmigración en Georgia explica el examen médico de inmigración exigido para el ajuste de estatus (Formulario I-485): qué cubre el Formulario I-693, por qué debe hacerlo un médico civil designado por USCIS (no su propio médico) y cómo encontrar uno en el área de Atlanta, la prueba de sangre IGRA para la tuberculosis y la detección de ETS, los requisitos de vacunación de los CDC, el cambio de política de finales de 2023 que significa que un I-693 firmado en o después del 1 de noviembre de 2023 ya no vence, qué llevar a su cita, la regla del sobre sellado, y en qué se diferencia del examen del médico de panel usado en el proceso consular. Con licencia en Georgia y Alabama.',
  },
  'family-green-card-attorney-georgia': {
    title: 'Green Card por la Familia: Guía Completa para Inmigrantes en Georgia',
    description:
      'Una abogada de green card familiar en Georgia explica quién puede presentar una petición, el proceso del Formulario I-130, el ajuste de estatus frente al proceso consular y los errores que debe evitar. Con licencia en Georgia y Alabama.',
  },
  'affidavit-of-support-i-864-income-requirements': {
    title: 'Declaración Jurada de Manutención (Formulario I-864) en Georgia: Requisitos de Ingresos 2025 y Copatrocinadores',
    description:
      'Una abogada de inmigración en Georgia explica el Formulario I-864, la Declaración Jurada de Manutención exigida en casi todos los casos de green card basados en la familia: el contrato bajo la INA 213A, quién debe presentarla, el umbral de ingresos 2025 del 125% de las Guías Federales de Pobreza (y la excepción del 100% para servicio activo), cómo contar el núcleo familiar, cuándo un copatrocinador o el Formulario I-864A puede cubrir una brecha de ingresos, el uso de bienes al multiplicador de 5x (o 3x para el cónyuge de un ciudadano), la responsabilidad del patrocinador que sobrevive al divorcio, y las consecuencias de RFE y negación. Con licencia en Georgia y Alabama.',
  },
  'ice-enforcement-rights-georgia': {
    title: 'Encuentro con ICE en Georgia: Conozca Sus Derechos y Qué Hacer en las Primeras 48 Horas',
    description:
      'Una abogada de inmigración en Georgia explica qué hacer durante un encuentro con ICE: por qué no tiene que abrir la puerta sin una orden firmada por un juez, sus derechos bajo la Cuarta y Quinta Enmienda, la diferencia entre una orden judicial y una orden administrativa de ICE, qué ocurre en las primeras 48 horas tras un arresto, qué esperar en el Centro de Detención Stewart e Irwin County, cómo un abogado puede pedir una audiencia de fianza rápido, y una lista de planificación de emergencia para las familias.',
  },
  'daca-renewal-2025-georgia': {
    title: 'Renovación de DACA en 2025: Lo que los Dreamers de Georgia Deben Saber',
    description:
      'La renovación de DACA sigue abierta en 2025. Una abogada de inmigración en Georgia explica quién califica, los documentos que necesita, los plazos y los errores que debe evitar.',
  },
  'asylum-application-georgia': {
    title: 'Cómo Solicitar Asilo en Georgia: Guía de una Abogada de Inmigración',
    description:
      'Una abogada de inmigración en Georgia explica cómo solicitar asilo: los cinco motivos protegidos, el plazo de un año, el asilo afirmativo frente al defensivo, el Formulario I-589 y los errores que arruinan los casos.',
  },
  'deportation-defense-removal-proceedings-georgia': {
    title: 'Defensa Contra la Deportación en Georgia: Cómo Funcionan los Procesos de Remoción',
    description:
      '¿Enfrenta la deportación en Georgia? Una abogada de defensa contra la deportación explica cómo comienzan los procesos de remoción, qué ocurre en la corte de inmigración de Atlanta y las defensas (asilo, cancelación de remoción, ajuste de estatus, salida voluntaria) que pueden permitirle quedarse. Con licencia en Georgia y Alabama.',
  },
  'bia-appeal-immigration-court-georgia': {
    title: 'Apelación ante la BIA: Cómo Apelar una Decisión de la Corte de Inmigración en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica cómo apelar ante la Junta de Apelaciones de Inmigración (BIA): el plazo de 30 días, el Formulario EOIR-26, la suspensión automática de la deportación y el estándar de revisión.',
  },
  'cancellation-of-removal-georgia': {
    title: 'Cancelación de Remoción en Georgia: Defensa Contra la Deportación',
    description:
      'Una abogada de inmigración en Georgia explica la cancelación de remoción para no residentes (42B) y residentes permanentes (42A): requisitos, los 10 años de presencia, las dificultades excepcionales y cómo solicitarla ante la corte de inmigración.',
  },
  'immigration-bond-hearing-georgia': {
    title: 'Audiencia de Fianza de Inmigración en Georgia: Cómo Salir de la Detención de ICE',
    description:
      '¿Un ser querido está detenido por ICE en Georgia? Una abogada de inmigración explica cómo funcionan las audiencias de fianza, quién califica, qué considera el juez y cómo prepararse. Con licencia en Georgia y Alabama.',
  },
  'special-immigrant-juvenile-status-georgia': {
    title: 'Estatus Especial de Inmigrante Juvenil (SIJS) en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica el Estatus Especial de Inmigrante Juvenil (SIJS) para menores abandonados, abusados o descuidados: el proceso en la corte estatal, el Formulario I-360 y el camino a la green card.',
  },
  'i-601a-provisional-unlawful-presence-waiver-georgia': {
    title: 'Perdón Provisional I-601A por Presencia Ilegal en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica el perdón provisional I-601A: quién califica, cómo probar la dificultad extrema para un familiar ciudadano o residente, el proceso consular y las barras de 3 y 10 años.',
  },
  'i-601-inadmissibility-waiver-extreme-hardship-georgia': {
    title: 'Perdones de Inadmisibilidad I-601 en Georgia: Qué Es la Dificultad Extrema y Cómo Probarla',
    description:
      'Una abogada de inmigración en Georgia explica el Formulario I-601, el perdón de inadmisibilidad, para clientes con antecedentes penales, fraude o tergiversación, deportaciones previas o motivos de salud: en qué se diferencia del perdón provisional I-601A, los distintos perdones 212(h) penal, 212(i) por fraude y por presencia ilegal y sus diferentes reglas de familiar que califica, el Formulario I-212 de permiso para volver a solicitar admisión y la barra permanente 212(a)(9)(C), el estándar de "dificultad extrema" que la ley no define y la evidencia (médica, financiera, psicológica, condiciones del país, lazos familiares) que lo prueba. Con licencia en Georgia y Alabama.',
  },
  'adjustment-of-status-green-card-georgia': {
    title: 'Ajuste de Estatus (I-485): Cómo Obtener la Green Card dentro de EE. UU. — Guía de Georgia',
    description:
      'Una abogada de ajuste de estatus en Georgia explica el proceso del Formulario I-485: quién puede ajustar frente a procesar por vía consular, la presentación concurrente del I-130/I-485, las fechas de prioridad y el Boletín de Visas, los documentos I-864, el examen médico I-693 y el I-94, la autorización de trabajo (I-765), el viaje con Advance Parole, la entrevista en la Oficina de Campo de Atlanta y las causas comunes de un RFE. Con licencia en Georgia y Alabama.',
  },
  'marriage-based-green-card-k1-fiance-visa-georgia': {
    title: 'Green Card por Matrimonio y Visa de Prometido(a) K-1 en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica cómo obtener la green card por matrimonio y la visa K-1 de prometido(a): requisitos, ajuste de estatus frente a proceso consular, la entrevista y errores comunes. Con licencia en Georgia y Alabama.',
  },
  'k1-fiance-visa-processing-timeline-2026': {
    title: 'Tiempo de Procesamiento de la Visa de Prometido(a) K-1 en 2026: Guía Etapa por Etapa',
    description:
      'Una abogada de inmigración en Georgia explica la línea de tiempo de la visa K-1 de prometido(a) en 2026, etapa por etapa: la revisión del Formulario I-129F por USCIS (5 a 8 meses), el Centro Nacional de Visas, la entrevista en la embajada y las esperas de citas, la regla firme de los 90 días para casarse y el ajuste de estatus posterior; por qué se demoran los casos (RFE, procesamiento administrativo 221(g), inadmisibilidad), cómo monitorear su caso y qué hacer durante la espera. Para parejas de Georgia y Alabama.',
  },
  'advance-parole-travel-documents-georgia': {
    title: 'Advance Parole y Permisos de Viaje para Inmigrantes en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica el advance parole (Formulario I-131): cómo viajar al extranjero sin abandonar su caso de green card o DACA, los riesgos de las barras de 3 y 10 años y los permisos de reingreso.',
  },
  'criminal-record-immigration-consequences-georgia': {
    title: 'Antecedentes Penales y Consecuencias Migratorias en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica cómo las condenas penales afectan el estatus migratorio: delitos agravados, delitos de vileza moral, delitos de drogas y DUIs, el efecto sobre la green card, la ciudadanía y las visas, y qué hacer si lo acusan de un delito. Corte de inmigración de Atlanta.',
  },
  'motion-to-reopen-reconsider-immigration-georgia': {
    title: 'Moción para Reabrir o Reconsiderar un Caso de Inmigración en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica las mociones para reabrir y reconsiderar: la diferencia entre ambas, los plazos estrictos (USCIS 30 días, corte 90/30 días), por qué una moción no detiene la deportación y cómo se comparan con una apelación ante la BIA.',
  },
  't-visa-trafficking-victims-georgia': {
    title: 'Visa T para Víctimas de Trata de Personas en Georgia: Protección Migratoria',
    description:
      'Una abogada de inmigración en Georgia explica la visa T (estatus T de no inmigrante) para sobrevivientes de trata de personas: en qué se diferencia de la visa U, quién califica, cómo funciona el Formulario I-914, las visas derivadas para la familia y el camino a la green card. Con licencia en Georgia y Alabama.',
  },
  'student-visa-f1-opt-stem-georgia': {
    title: 'Visa de Estudiante, OPT y la Extensión STEM OPT en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica el estatus F-1: cómo funcionan el I-20 y SEVIS, cómo el OPT y la extensión STEM OPT le permiten trabajar, la protección cap-gap mientras su H-1B está pendiente, los errores que sacan a los estudiantes de estatus y cómo recuperarlo. Para estudiantes internacionales en Georgia y Alabama.',
  },
  'mandamus-lawsuit-uscis-delay-georgia': {
    title: 'Demanda de Mandamus para Obligar a USCIS a Actuar en Casos Demorados en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica la orden judicial de mandamus y la demanda por demora bajo la APA usadas para obligar a USCIS a decidir un caso que ha demorado de manera irrazonable: la base legal (28 U.S.C. § 1361, 5 U.S.C. §§ 555(b) y 706(1)), los factores TRAC de demora irrazonable, cuándo una demora de 12 a 24+ meses en un I-485, N-400, I-130 o I-765 respalda una demanda, cómo se presentan y resuelven los casos en los Distritos Norte y Sur de Georgia, el plazo de respuesta del gobierno de 60 días, los costos y plazos típicos, y cuándo el mandamus no es el remedio adecuado. Georgia y Alabama.',
  },
  'travel-ban-2026-proclamation-10998-waiver': {
    title: 'Prohibición de Viaje 2026 (Proclamación 10998): Países Afectados y Opciones de Exención',
    description:
      'Una abogada de inmigración en Georgia explica la Proclamación 10998 que entró en vigor el 1 de enero de 2026: los 39 países en suspensión total o parcial, quién está exento, las exenciones de familiar inmediato que se eliminaron, el proceso de excepción por interés nacional y qué hacer con un caso pendiente de I-130, I-485 o procesamiento consular. Para familias de Georgia y Alabama.',
  },
  'parole-in-place-military-families-georgia': {
    title: 'Parole in Place (Libertad Condicional en el País) para Familias Militares en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica el parole in place (libertad condicional en el país) para familias militares: el PIP militar tradicional con el Formulario I-131, el programa Keeping Families Together y el Formulario I-131F, por qué la corte lo anuló el 7 de noviembre de 2024 y el camino a la green card bajo la sección 245(a) de la INA. Con licencia en Georgia y Alabama.',
  },
  'employment-authorization-ead-georgia': {
    title: 'Permiso de Trabajo (EAD) y Formulario I-765 en Georgia: Autorización de Empleo para Casos de Inmigración Pendientes',
    description:
      'Una abogada de inmigración en Georgia explica el Documento de Autorización de Empleo (EAD) y el Formulario I-765: quién califica (ajuste I-485 pendiente, solicitantes de asilo, DACA, TPS, cónyuges H-4, acción diferida, circunstancias apremiantes), los códigos de categoría comunes (c)(9), (c)(8), (c)(14) y (c)(35), los tiempos de procesamiento y el procesamiento prioritario, la extensión automática de hasta 540 días para renovaciones presentadas a tiempo, qué hacer si su tarjeta se pierde o vence, y consejos sobre la Oficina de Campo de Atlanta y la presentación en lockbox. Con licencia en Georgia y Alabama.',
  },
  'remove-conditions-green-card-i-751-georgia': {
    title: 'Cómo Eliminar las Condiciones de su Green Card en Georgia: La Petición I-751',
    description:
      'Una abogada de inmigración en Georgia explica cómo los residentes permanentes condicionales eliminan las condiciones de una green card de 2 años con el Formulario I-751: quién recibe una green card condicional, la ventana crítica de 90 días antes del segundo aniversario, cómo presentar la petición conjunta, las exenciones si se divorció o sufrió abuso, la lista de pruebas y la posible entrevista. Con licencia en Georgia y Alabama.',
  },
  'naturalization-citizenship-georgia': {
    title: 'Naturalización en Georgia: Su Camino hacia la Ciudadanía Estadounidense',
    description:
      'Una abogada de naturalización en Georgia explica la elegibilidad para el Formulario N-400, la residencia continua y la presencia física, las reglas de 5 y 3 años, los exámenes de inglés y civismo, los tiempos, la Oficina Local de USCIS en Atlanta y los problemas comunes que retrasan la ciudadanía. Con licencia en Georgia y Alabama.',
  },
  'notice-to-appear-georgia': {
    title: '¿Recibió una Notificación de Comparecencia (NTA)? Qué Hacer en Georgia',
    description:
      '¿Recibió una Notificación de Comparecencia (NTA) en Georgia? Una abogada de inmigración explica qué significa, sus plazos en la corte y sus opciones — y por qué los primeros 30 días son los más importantes. Llame hoy.',
  },
  'tps-2026': {
    title: 'TPS en 2026: Lo Que Significa para los Inmigrantes de Georgia',
    description:
      'El Estatus de Protección Temporal (TPS) está en transición en 2026. Una abogada de inmigración en Georgia explica qué protege el TPS, quién califica, los plazos de re-registro y qué hacer si la designación de su país termina.',
  },
  'h4-ead-work-authorization-h1b-spouses-georgia': {
    title: 'EAD H-4: Permiso de Trabajo para Cónyuges de Titulares de H-1B en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica el permiso de trabajo EAD H-4 para cónyuges de trabajadores H-1B: quién califica (principal H-1B con un I-140 aprobado o una extensión más allá del 6.º año bajo AC21), cómo presentar el Formulario I-539 y el Formulario I-765 bajo la categoría (c)(26) de forma concurrente con el I-129 del H-1B, los tiempos de procesamiento y los límites del procesamiento prioritario, el alivio de la extensión automática para renovaciones presentadas a tiempo, cómo mantener el estatus derivado H-4, la trampa de viaje/abandono del I-539 (y por qué el Consulado de la India en Houston cubre Georgia para servicios consulares indios — no estadounidenses) y el litigio en curso Save Jobs USA v. DHS. Para el corredor tecnológico de Alpharetta, Johns Creek y Cumming; Georgia y Alabama.',
  },
  'tn-visa-canadian-mexican-professionals-georgia': {
    title: 'Visa TN en Georgia: Estatus USMCA para Profesionales de México y Canadá',
    description:
      'Una abogada de visas TN en Georgia explica el estatus TN de no inmigrante bajo el T-MEC (USMCA) para profesionales mexicanos y canadienses: quién califica, la lista de ocupaciones y los requisitos de credenciales, el proceso consular para mexicanos frente al proceso en el puerto de entrada para canadienses, la admisión de 3 años y las renovaciones indefinidas, el estatus TD para dependientes (estudiar sí, trabajar no), el límite de la intención de no inmigrante en el camino a la green card y las causas comunes de negación. Con licencia en Georgia y Alabama.',
  },
  'vawa-self-petition-domestic-violence-immigration-georgia': {
    title: 'Autopetición de VAWA para Sobrevivientes Inmigrantes de Violencia Doméstica en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica la autopetición de VAWA (Formulario I-360) para sobrevivientes inmigrantes de violencia doméstica: quién califica (cónyuges, hijos y padres abusados de ciudadanos estadounidenses y residentes permanentes), qué significa el maltrato físico o la crueldad extrema bajo la ley federal, las estrictas protecciones de confidencialidad de VAWA (USCIS no puede notificar al abusador), el proceso de la petición I-360 y qué evidencia reunir, en qué se diferencia de la visa U y de la exención por maltrato/crueldad del I-751, el camino a la green card como familiar inmediato o beneficiario de preferencia F2A, y recursos específicos de Georgia, incluida la Coalición de Georgia contra la Violencia Doméstica y el Programa de Confidencialidad de Dirección de Georgia. Georgia y Alabama.',
  },
  'u-visa-crime-victims-immigration-georgia': {
    title: 'Visa U para Víctimas Inmigrantes de Delitos en Georgia: Elegibilidad, la Petición I-918 y el Camino a la Green Card',
    description:
      'Una abogada de inmigración en Georgia explica la visa U (Formulario I-918) para víctimas inmigrantes de delitos: quién califica bajo la INA § 101(a)(15)(U), la lista completa de delitos que califican, la certificación obligatoria de las fuerzas del orden (Formulario I-918B), las visas derivadas para familiares, el estatus de visa U de 4 años y el camino del ajuste de estatus a la green card después de tres años. Las agencias certificadoras en Georgia incluyen la policía local, la GBI, las oficinas de fiscales de distrito y ciertas agencias federales. Distinta de la visa T (trata, Formulario I-914) y de VAWA (autopetición por violencia doméstica). Georgia y Alabama.',
  },
  'unlawful-presence-3-year-10-year-bar-georgia': {
    title: 'Las Barras de 3 y 10 Años por Presencia Ilegal en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica cómo funciona la presencia ilegal bajo INA §212(a)(9)(B): la diferencia entre presencia ilegal y estatus ilegal, cuándo empieza y se detiene el reloj, por qué salir del país es lo que activa la barra de 3 o 10 años, quién está protegido y las exenciones I-601A e I-601. Información general, no asesoría legal.',
  },
  'visa-overstay-consequences-fix-status-georgia': {
    title: 'Consecuencias de una Estancia Vencida y Cómo Arreglar su Estatus en Georgia',
    description:
      'Una abogada de inmigración en Georgia explica qué hace realmente una estancia vencida de visa, la diferencia entre el sello de visa y el I-94, la presencia ilegal y las barras de 3 y 10 años, y las opciones reales para recuperar el estatus — ajuste bajo INA §245(a), procesamiento consular y los perdones I-601A e I-601. Información general, no asesoría legal.',
  },
  'eb1a-extraordinary-ability-green-card-self-petition-georgia': {
    title: 'Green Card EB-1A de Habilidad Extraordinaria en Georgia: La Autopetición Más Poderosa',
    description:
      'Una abogada de inmigración en Georgia explica la green card EB-1A de habilidad extraordinaria: la autopetición sin empleador ni PERM, los diez criterios de 8 CFR 204.5(h)(3), el análisis de dos pasos de Kazarian, cómo se compara con la Exención por Interés Nacional EB-2 y por qué importa para los nacidos en India y China. Información general, no asesoría legal.',
  },
  'green-card-abandonment-travel-rules-reentry-permit-georgia': {
    title: 'Reglas de Viaje con la Green Card en Georgia: Abandono de Residencia y Permiso de Reingreso',
    description:
      'Una abogada de inmigración en Georgia explica cuánto tiempo puede estar fuera del país con su green card, por qué la "regla de los seis meses" es un mito, el estándar de abandono de residencia bajo INA §101(a)(13)(C), el permiso de reingreso (Formulario I-131), la visa SB-1 de residente que regresa y cómo proteger su residencia permanente al viajar. Información general, no asesoría legal.',
  },
  'naturalization-denial-disqualifiers-n400-georgia': {
    title: 'Por Qué se Niega la Naturalización en Georgia: Causas de Denegación del N-400',
    description:
      'Una abogada de inmigración en Georgia explica las razones más comunes por las que USCIS niega la naturalización: buen carácter moral, barras condicionales y permanentes, residencia continua y presencia física, el riesgo de que una entrevista del N-400 inicie un proceso de deportación, y sus opciones tras una denegación — la apelación N-336 y volver a presentar la solicitud. Información general, no asesoría legal.',
  },
  'diversity-visa-lottery-dv-application-georgia': {
    title: 'Lotería de Visas de Diversidad en Georgia: Cómo Aplicar y Qué Pasa si Resulta Seleccionado',
    description:
      'Una abogada de inmigración en Georgia explica la Lotería de Visas de Diversidad bajo INA §203(c): quién califica, la cargabilidad alterna, cómo registrarse gratis en E-DV, por qué la selección no es una visa, el DS-260 y el Kentucky Consular Center, y la fecha límite del año fiscal del 30 de septiembre. Información general, no asesoría legal.',
  },
  'r1-religious-worker-visa-georgia': {
    title: 'Visa de Trabajador Religioso R-1 en Georgia: Guía para Iglesias y Organizaciones de Fe',
    description:
      'Una abogada de inmigración en Georgia explica la visa R-1 de trabajador religioso: quién califica, el requisito 501(c)(3) y de membresía de dos años, el Formulario I-129, la inspección del sitio de USCIS, el límite de cinco años y el camino a la green card EB-4 mediante el Formulario I-360. Información general, no asesoría legal.',
  },
};

export function getEsPost(slug: string): BlogPost | undefined {
  const base = getPost(slug);
  if (!base) return undefined;
  const es = ES_BLOG_META[slug];
  return es ? { ...base, title: es.title, description: es.description } : base;
}

// Slugs that have actual Spanish-language content in /content/blog/es/.
// All other /es/blog/[slug] requests redirect to the EN version.
// Keep in sync with CONTENT_MAP in src/app/es/blog/[slug]/page.tsx.
export const ES_BLOG_SLUGS = new Set([
  'unlawful-presence-3-year-10-year-bar-georgia',
  'visa-overstay-consequences-fix-status-georgia',
  'eb1a-extraordinary-ability-green-card-self-petition-georgia',
  'green-card-abandonment-travel-rules-reentry-permit-georgia',
  'naturalization-denial-disqualifiers-n400-georgia',
  'diversity-visa-lottery-dv-application-georgia',
  'r1-religious-worker-visa-georgia',
  'h1b-visa-sponsorship-cap-georgia',
  'eb2-national-interest-waiver-self-petition-georgia',
  'administrative-closure-immigration-court-georgia',
  'f2-dependent-visa-international-student-family-georgia',
  'withholding-of-removal-immigration-court-georgia',
  'o1-visa-extraordinary-ability-georgia',
  'perm-labor-certification-employer-sponsored-green-card-georgia',
  'consular-processing-immigrant-visa-georgia',
  'employment-based-green-card-eb1-eb2-eb3-georgia',
  'asylum-one-year-bar-exceptions-georgia',
  'citizenship-by-marriage-3-year-rule-georgia',
  'ir1-cr1-spouse-visa-married-couples-georgia',
  'federal-immigration-litigation-georgia',
  'visa-bulletin-priority-dates-family-green-card',
  'green-card-medical-exam-i-693-georgia',
  'family-green-card-attorney-georgia',
  'affidavit-of-support-i-864-income-requirements',
  'ice-enforcement-rights-georgia',
  'daca-2026',
  'u-visa-vawa-crime-victims-georgia',
  'daca-renewal-2025-georgia',
  'asylum-application-georgia',
  'deportation-defense-removal-proceedings-georgia',
  'bia-appeal-immigration-court-georgia',
  'cancellation-of-removal-georgia',
  'immigration-bond-hearing-georgia',
  'special-immigrant-juvenile-status-georgia',
  'i-601a-provisional-unlawful-presence-waiver-georgia',
  'i-601-inadmissibility-waiver-extreme-hardship-georgia',
  'adjustment-of-status-green-card-georgia',
  'marriage-based-green-card-k1-fiance-visa-georgia',
  'k1-fiance-visa-processing-timeline-2026',
  'advance-parole-travel-documents-georgia',
  'criminal-record-immigration-consequences-georgia',
  'motion-to-reopen-reconsider-immigration-georgia',
  't-visa-trafficking-victims-georgia',
  'student-visa-f1-opt-stem-georgia',
  'mandamus-lawsuit-uscis-delay-georgia',
  'travel-ban-2026-proclamation-10998-waiver',
  'parole-in-place-military-families-georgia',
  'remove-conditions-green-card-i-751-georgia',
  'employment-authorization-ead-georgia',
  'naturalization-citizenship-georgia',
  'notice-to-appear-georgia',
  'tps-2026',
  'h4-ead-work-authorization-h1b-spouses-georgia',
  'tn-visa-canadian-mexican-professionals-georgia',
  'vawa-self-petition-domestic-violence-immigration-georgia',
  'u-visa-crime-victims-immigration-georgia',
]);
