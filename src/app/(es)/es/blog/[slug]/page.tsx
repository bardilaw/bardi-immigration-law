import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';
import { JsonLd } from '@/components/JsonLd';
import { BLOG_POSTS, getEsPost, isLivePost, ES_BLOG_SLUGS, blogPostingSchema, breadcrumbSchema } from '@/content/blog/meta';
import { ogImageFor } from '@/content/blog/ogImages';
import { DacaPostContent } from '@/content/blog/en/daca-2026';
import { UVisaVawaPostContent } from '@/content/blog/en/u-visa-vawa';
import { DacaRenewal2025PostContentEs } from '@/content/blog/es/daca-renewal-2025-georgia';
import { AsylumApplicationPostContentEs } from '@/content/blog/es/asylum-application-georgia';
import { DeportationDefensePostContentEs } from '@/content/blog/es/deportation-defense-removal-proceedings-georgia';
import { BiaAppealPostContentEs } from '@/content/blog/es/bia-appeal-immigration-court-georgia';
import { CancellationOfRemovalPostContentEs } from '@/content/blog/es/cancellation-of-removal-georgia';
import { ImmigrationBondHearingPostContentEs } from '@/content/blog/es/immigration-bond-hearing-georgia';
import { SijsPostContentEs } from '@/content/blog/es/special-immigrant-juvenile-status-georgia';
import { I601AWaiverPostContentEs } from '@/content/blog/es/i-601a-provisional-unlawful-presence-waiver-georgia';
import { I601WaiverPostContentEs } from '@/content/blog/es/i-601-inadmissibility-waiver-extreme-hardship-georgia';
import { AdjustmentOfStatusPostContentEs } from '@/content/blog/es/adjustment-of-status-green-card-georgia';
import { MarriageGreenCardK1PostContentEs } from '@/content/blog/es/marriage-based-green-card-k1-fiance-visa-georgia';
import { K1ProcessingTimelinePostContentEs } from '@/content/blog/es/k1-fiance-visa-processing-timeline-2026';
import { AdvanceParolePostContentEs } from '@/content/blog/es/advance-parole-travel-documents-georgia';
import { CriminalRecordPostContentEs } from '@/content/blog/es/criminal-record-immigration-consequences-georgia';
import { IceEnforcementRightsPostContentEs } from '@/content/blog/es/ice-enforcement-rights-georgia';
import { MotionToReopenReconsiderPostContentEs } from '@/content/blog/es/motion-to-reopen-reconsider-immigration-georgia';
import { StudentVisaF1OptPostContentEs } from '@/content/blog/es/student-visa-f1-opt-stem-georgia';
import { TVisaTraffickingPostContentEs } from '@/content/blog/es/t-visa-trafficking-victims-georgia';
import { RemoveConditionsI751PostContentEs } from '@/content/blog/es/remove-conditions-green-card-i-751-georgia';
import { AffidavitOfSupportI864PostContentEs } from '@/content/blog/es/affidavit-of-support-i-864-income-requirements';
import { ParoleInPlacePostContentEs } from '@/content/blog/es/parole-in-place-military-families-georgia';
import { MandamusUscisDelayPostContentEs } from '@/content/blog/es/mandamus-lawsuit-uscis-delay-georgia';
import { TravelBan2026PostContentEs } from '@/content/blog/es/travel-ban-2026-proclamation-10998-waiver';
import { EadWorkPermitPostContentEs } from '@/content/blog/es/employment-authorization-ead-georgia';
import { NaturalizationPostContentEs } from '@/content/blog/es/naturalization-citizenship-georgia';
import { NoticeToAppearPostContentEs } from '@/content/blog/es/notice-to-appear-georgia';
import { TpsPostContentEs } from '@/content/blog/es/tps-2026';
import { FamilyGreenCardPostContentEs } from '@/content/blog/es/family-green-card-attorney-georgia';
import { H4EadPostContentEs } from '@/content/blog/es/h4-ead-work-authorization-h1b-spouses-georgia';
import { TnVisaUsmcaPostContentEs } from '@/content/blog/es/tn-visa-canadian-mexican-professionals-georgia';
import { GreenCardMedicalExamI693PostContentEs } from '@/content/blog/es/green-card-medical-exam-i-693-georgia';
import { VisaBulletinPriorityDatesPostContentEs } from '@/content/blog/es/visa-bulletin-priority-dates-family-green-card';
import { VawaSelfPetitionPostContentEs } from '@/content/blog/es/vawa-self-petition-domestic-violence-immigration-georgia';
import { UVisaCrimeVictimsPostContentEs } from '@/content/blog/es/u-visa-crime-victims-immigration-georgia';
import { WithholdingOfRemovalPostContentEs } from '@/content/blog/es/withholding-of-removal-immigration-court-georgia';
import { O1VisaExtraordinaryAbilityPostContentEs } from '@/content/blog/es/o1-visa-extraordinary-ability-georgia';
import { PermLaborCertificationPostContentEs } from '@/content/blog/es/perm-labor-certification-employer-sponsored-green-card-georgia';
import { ConsularProcessingPostContentEs } from '@/content/blog/es/consular-processing-immigrant-visa-georgia';
import { EmploymentBasedGreenCardEb123PostContentEs } from '@/content/blog/es/employment-based-green-card-eb1-eb2-eb3-georgia';
import { AsylumOneYearBarPostContentEs } from '@/content/blog/es/asylum-one-year-bar-exceptions-georgia';
import { CitizenshipByMarriage3YearRulePostContentEs } from '@/content/blog/es/citizenship-by-marriage-3-year-rule-georgia';
import { Ir1Cr1SpouseVisaPostContentEs } from '@/content/blog/es/ir1-cr1-spouse-visa-married-couples-georgia';
import { FederalImmigrationLitigationPostContentEs } from '@/content/blog/es/federal-immigration-litigation-georgia';
import { Eb2NationalInterestWaiverPostContentEs } from '@/content/blog/es/eb2-national-interest-waiver-self-petition-georgia';
import { H1bVisaSponsorshipCapPostContentEs } from '@/content/blog/es/h1b-visa-sponsorship-cap-georgia';
import { AdministrativeClosurePostContentEs } from '@/content/blog/es/administrative-closure-immigration-court-georgia';
import { F2DependentVisaPostContentEs } from '@/content/blog/es/f2-dependent-visa-international-student-family-georgia';
import { UnlawfulPresenceBarPostContentEs } from '@/content/blog/es/unlawful-presence-3-year-10-year-bar-georgia';
import { VisaOverstayConsequencesPostContentEs } from '@/content/blog/es/visa-overstay-consequences-fix-status-georgia';
import { Eb1aExtraordinaryAbilityPostContentEs } from '@/content/blog/es/eb1a-extraordinary-ability-green-card-self-petition-georgia';
import { GreenCardAbandonmentTravelRulesPostContentEs } from '@/content/blog/es/green-card-abandonment-travel-rules-reentry-permit-georgia';
import { NaturalizationDenialPostContentEs } from '@/content/blog/es/naturalization-denial-disqualifiers-n400-georgia';
import { DiversityVisaLotteryPostContentEs } from '@/content/blog/es/diversity-visa-lottery-dv-application-georgia';
import { R1ReligiousWorkerVisaPostContentEs } from '@/content/blog/es/r1-religious-worker-visa-georgia';
import { B2TouristVisaPostContentEs } from '@/content/blog/es/b2-tourist-visa-adjustment-status-green-card-georgia';
import { K1FianceVisaPostContentEs } from '@/content/blog/es/k1-fiance-visa-georgia';
import { DivorceImmigrationStatusPostContentEs } from '@/content/blog/es/divorce-immigration-status-green-card-georgia';
import { ExpeditedRemovalPostContentEs } from '@/content/blog/es/expedited-removal-georgia-what-it-is-rights-challenge';
import { HowToChooseImmigrationAttorneyPostContentEs } from '@/content/blog/es/how-to-choose-immigration-attorney-georgia';
import { TemporaryProtectedStatusGeorgiaPostContentEs } from '@/content/blog/es/temporary-protected-status-tps-georgia';
import { H1bCapGapPostContentEs } from '@/content/blog/es/h1b-cap-gap-opt-work-authorization-georgia';
import { GeorgiaImmigrationCourtsPostContentEs } from '@/content/blog/es/georgia-immigration-courts-atlanta-gwinnett-dekalb-stewart-guide';
import { UscisAtlantaFieldOfficePostContentEs } from '@/content/blog/es/uscis-atlanta-field-office-appointments-interviews-georgia';
import { StemOptExtensionPostContentEs } from '@/content/blog/es/stem-opt-extension-24-month-work-authorization-georgia';
import { J1VisaWaiverPostContentEs } from '@/content/blog/es/j1-visa-two-year-home-residency-requirement-waiver-georgia';
import { L1IntracompanyTransfereePostContentEs } from '@/content/blog/es/l1-intracompany-transferee-visa-georgia';
import { NvcConsularInterviewPostContentEs } from '@/content/blog/es/nvc-consular-interview-immigrant-visa-process-georgia';
import { CancellationOfRemovalNonLprPostContentEs } from '@/content/blog/es/cancellation-of-removal-non-lpr-10-year-rule-georgia';
import { BirthrightCitizenshipPostContentEs } from '@/content/blog/es/birthright-citizenship-executive-order-14th-amendment-georgia';
import { AfterDeportationReentryBarsPostContentEs } from '@/content/blog/es/after-deportation-reentry-bars-waivers-georgia';
import { I90GreenCardRenewalPostContentEs } from '@/content/blog/es/i90-green-card-renewal-replacement-georgia';
import { DacaDeferredActionChildhoodArrivalsPostContentEs } from '@/content/blog/es/daca-deferred-action-childhood-arrivals-georgia';
import { H2aAgriculturalWorkerVisaPostContentEs } from '@/content/blog/es/h2a-agricultural-worker-visa-georgia';
import { H2bSeasonalWorkerVisaPostContentEs } from '@/content/blog/es/h2b-seasonal-worker-visa-georgia';
import { CancellationOfRemovalLprPostContentEs } from '@/content/blog/es/cancellation-of-removal-lpr-green-card-holder-georgia';
import { PublicChargeRulePostContentEs } from '@/content/blog/es/public-charge-rule-green-card-benefits-georgia';
import { VawaCancellationOfRemovalPostContentEs } from '@/content/blog/es/vawa-cancellation-of-removal-special-rule-georgia';
import { B1BusinessVisitorVisaPostContentEs } from '@/content/blog/es/b1-business-visitor-visa-georgia-allowed-activities';
import { UscisCaseStatusRfePostContentEs } from '@/content/blog/es/uscis-case-status-rfe-response-georgia';
import { F1StudentVisaReinstatementPostContentEs } from '@/content/blog/es/f1-student-visa-reinstatement-out-of-status-georgia';
import { ExtendChangeNonimmigrantStatusPostContentEs } from '@/content/blog/es/extend-change-nonimmigrant-status-i539-georgia';
import { ChildStatusProtectionActPostContentEs } from '@/content/blog/es/child-status-protection-act-cspa-aging-out-georgia';
import { ImmigrantVisaConsulateInterviewPostContentEs } from '@/content/blog/es/immigrant-visa-consulate-interview-preparation-georgia';
import { LongPendingI130PostContentEs } from '@/content/blog/es/long-pending-i130-priority-date-backlog-georgia';
import { UscisFilingFeesPostContentEs } from '@/content/blog/es/uscis-filing-fees-2025-guide-georgia';
import { ConsularProcessingVsAdjustmentPostContentEs } from '@/content/blog/es/consular-processing-vs-adjustment-of-status-georgia';
import { RemoteWorkVisaPostContentEs } from '@/content/blog/es/remote-work-immigration-visa-rules-georgia';

type Props = { params: Promise<{ slug: string }> };

const CONTENT_MAP: Record<string, React.ComponentType> = {
  'daca-2026': DacaPostContent,
  'u-visa-vawa-crime-victims-georgia': UVisaVawaPostContent,
  'daca-renewal-2025-georgia': DacaRenewal2025PostContentEs,
  'asylum-application-georgia': AsylumApplicationPostContentEs,
  'deportation-defense-removal-proceedings-georgia': DeportationDefensePostContentEs,
  'bia-appeal-immigration-court-georgia': BiaAppealPostContentEs,
  'cancellation-of-removal-georgia': CancellationOfRemovalPostContentEs,
  'immigration-bond-hearing-georgia': ImmigrationBondHearingPostContentEs,
  'special-immigrant-juvenile-status-georgia': SijsPostContentEs,
  'i-601a-provisional-unlawful-presence-waiver-georgia': I601AWaiverPostContentEs,
  'i-601-inadmissibility-waiver-extreme-hardship-georgia': I601WaiverPostContentEs,
  'adjustment-of-status-green-card-georgia': AdjustmentOfStatusPostContentEs,
  'marriage-based-green-card-k1-fiance-visa-georgia': MarriageGreenCardK1PostContentEs,
  'k1-fiance-visa-processing-timeline-2026': K1ProcessingTimelinePostContentEs,
  'advance-parole-travel-documents-georgia': AdvanceParolePostContentEs,
  'criminal-record-immigration-consequences-georgia': CriminalRecordPostContentEs,
  'ice-enforcement-rights-georgia': IceEnforcementRightsPostContentEs,
  'motion-to-reopen-reconsider-immigration-georgia': MotionToReopenReconsiderPostContentEs,
  'student-visa-f1-opt-stem-georgia': StudentVisaF1OptPostContentEs,
  't-visa-trafficking-victims-georgia': TVisaTraffickingPostContentEs,
  'affidavit-of-support-i-864-income-requirements': AffidavitOfSupportI864PostContentEs,
  'parole-in-place-military-families-georgia': ParoleInPlacePostContentEs,
  'remove-conditions-green-card-i-751-georgia': RemoveConditionsI751PostContentEs,
  'travel-ban-2026-proclamation-10998-waiver': TravelBan2026PostContentEs,
  'mandamus-lawsuit-uscis-delay-georgia': MandamusUscisDelayPostContentEs,
  'employment-authorization-ead-georgia': EadWorkPermitPostContentEs,
  'naturalization-citizenship-georgia': NaturalizationPostContentEs,
  'notice-to-appear-georgia': NoticeToAppearPostContentEs,
  'tps-2026': TpsPostContentEs,
  'family-green-card-attorney-georgia': FamilyGreenCardPostContentEs,
  'h4-ead-work-authorization-h1b-spouses-georgia': H4EadPostContentEs,
  'tn-visa-canadian-mexican-professionals-georgia': TnVisaUsmcaPostContentEs,
  'green-card-medical-exam-i-693-georgia': GreenCardMedicalExamI693PostContentEs,
  'visa-bulletin-priority-dates-family-green-card': VisaBulletinPriorityDatesPostContentEs,
  'vawa-self-petition-domestic-violence-immigration-georgia': VawaSelfPetitionPostContentEs,
  'u-visa-crime-victims-immigration-georgia': UVisaCrimeVictimsPostContentEs,
  'withholding-of-removal-immigration-court-georgia': WithholdingOfRemovalPostContentEs,
  'o1-visa-extraordinary-ability-georgia': O1VisaExtraordinaryAbilityPostContentEs,
  'perm-labor-certification-employer-sponsored-green-card-georgia': PermLaborCertificationPostContentEs,
  'consular-processing-immigrant-visa-georgia': ConsularProcessingPostContentEs,
  'employment-based-green-card-eb1-eb2-eb3-georgia': EmploymentBasedGreenCardEb123PostContentEs,
  'asylum-one-year-bar-exceptions-georgia': AsylumOneYearBarPostContentEs,
  'citizenship-by-marriage-3-year-rule-georgia': CitizenshipByMarriage3YearRulePostContentEs,
  'ir1-cr1-spouse-visa-married-couples-georgia': Ir1Cr1SpouseVisaPostContentEs,
  'federal-immigration-litigation-georgia': FederalImmigrationLitigationPostContentEs,
  'eb2-national-interest-waiver-self-petition-georgia': Eb2NationalInterestWaiverPostContentEs,
  'h1b-visa-sponsorship-cap-georgia': H1bVisaSponsorshipCapPostContentEs,
  'administrative-closure-immigration-court-georgia': AdministrativeClosurePostContentEs,
  'f2-dependent-visa-international-student-family-georgia': F2DependentVisaPostContentEs,
  'unlawful-presence-3-year-10-year-bar-georgia': UnlawfulPresenceBarPostContentEs,
  'visa-overstay-consequences-fix-status-georgia': VisaOverstayConsequencesPostContentEs,
  'eb1a-extraordinary-ability-green-card-self-petition-georgia': Eb1aExtraordinaryAbilityPostContentEs,
  'green-card-abandonment-travel-rules-reentry-permit-georgia': GreenCardAbandonmentTravelRulesPostContentEs,
  'naturalization-denial-disqualifiers-n400-georgia': NaturalizationDenialPostContentEs,
  'diversity-visa-lottery-dv-application-georgia': DiversityVisaLotteryPostContentEs,
  'r1-religious-worker-visa-georgia': R1ReligiousWorkerVisaPostContentEs,
  'b2-tourist-visa-adjustment-status-green-card-georgia': B2TouristVisaPostContentEs,
  'k1-fiance-visa-georgia': K1FianceVisaPostContentEs,
  'divorce-immigration-status-green-card-georgia': DivorceImmigrationStatusPostContentEs,
  'expedited-removal-georgia-what-it-is-rights-challenge': ExpeditedRemovalPostContentEs,
  'how-to-choose-immigration-attorney-georgia': HowToChooseImmigrationAttorneyPostContentEs,
  'temporary-protected-status-tps-georgia': TemporaryProtectedStatusGeorgiaPostContentEs,
  'h1b-cap-gap-opt-work-authorization-georgia': H1bCapGapPostContentEs,
  'georgia-immigration-courts-atlanta-gwinnett-dekalb-stewart-guide': GeorgiaImmigrationCourtsPostContentEs,
  'uscis-atlanta-field-office-appointments-interviews-georgia': UscisAtlantaFieldOfficePostContentEs,
  'stem-opt-extension-24-month-work-authorization-georgia': StemOptExtensionPostContentEs,
  'j1-visa-two-year-home-residency-requirement-waiver-georgia': J1VisaWaiverPostContentEs,
  'l1-intracompany-transferee-visa-georgia': L1IntracompanyTransfereePostContentEs,
  'nvc-consular-interview-immigrant-visa-process-georgia': NvcConsularInterviewPostContentEs,
  'cancellation-of-removal-non-lpr-10-year-rule-georgia': CancellationOfRemovalNonLprPostContentEs,
  'birthright-citizenship-executive-order-14th-amendment-georgia': BirthrightCitizenshipPostContentEs,
  'after-deportation-reentry-bars-waivers-georgia': AfterDeportationReentryBarsPostContentEs,
  'i90-green-card-renewal-replacement-georgia': I90GreenCardRenewalPostContentEs,
  'daca-deferred-action-childhood-arrivals-georgia': DacaDeferredActionChildhoodArrivalsPostContentEs,
  'h2a-agricultural-worker-visa-georgia': H2aAgriculturalWorkerVisaPostContentEs,
  'h2b-seasonal-worker-visa-georgia': H2bSeasonalWorkerVisaPostContentEs,
  'cancellation-of-removal-lpr-green-card-holder-georgia': CancellationOfRemovalLprPostContentEs,
  'public-charge-rule-green-card-benefits-georgia': PublicChargeRulePostContentEs,
  'vawa-cancellation-of-removal-special-rule-georgia': VawaCancellationOfRemovalPostContentEs,
  'b1-business-visitor-visa-georgia-allowed-activities': B1BusinessVisitorVisaPostContentEs,
  'uscis-case-status-rfe-response-georgia': UscisCaseStatusRfePostContentEs,
  'f1-student-visa-reinstatement-out-of-status-georgia': F1StudentVisaReinstatementPostContentEs,
  'extend-change-nonimmigrant-status-i539-georgia': ExtendChangeNonimmigrantStatusPostContentEs,
  'child-status-protection-act-cspa-aging-out-georgia': ChildStatusProtectionActPostContentEs,
  'immigrant-visa-consulate-interview-preparation-georgia': ImmigrantVisaConsulateInterviewPostContentEs,
  'long-pending-i130-priority-date-backlog-georgia': LongPendingI130PostContentEs,
  'uscis-filing-fees-2025-guide-georgia': UscisFilingFeesPostContentEs,
  'consular-processing-vs-adjustment-of-status-georgia': ConsularProcessingVsAdjustmentPostContentEs,
  'remote-work-immigration-visa-rules-georgia': RemoteWorkVisaPostContentEs,
};

// Only pre-render routes that have actual ES content.
export function generateStaticParams() {
  return BLOG_POSTS.filter((p) => ES_BLOG_SLUGS.has(p.slug)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getEsPost(slug);
  if (!post) return {};
  const ogImage = ogImageFor(slug, 'es');
  return {
    title: post.title,
    description: post.description,
    // Archived/backlog posts (feedback #41) stay published but are noindexed until promoted.
    robots: isLivePost(slug) ? undefined : { index: false, follow: true },
    alternates: {
      canonical: `https://bardilaw.com/es/blog/${slug}`,
      languages: {
        'x-default': `https://bardilaw.com/blog/${slug}`,
        en: `https://bardilaw.com/blog/${slug}`,
        es: `https://bardilaw.com/es/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://bardilaw.com/es/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default async function EsBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getEsPost(slug);
  if (!post) notFound();

  const PostContent = CONTENT_MAP[slug];
  // No ES translation yet — send Spanish-language visitors to the EN version rather
  // than serving a hard 404. Link equity and any inbound links land safely.
  if (!PostContent) redirect(`/blog/${slug}`);

  const articleSchema = blogPostingSchema(post, 'es');
  // Breadcrumb mirrors the visible nav below: Inicio › Blog › Post (BAR-701).
  const breadcrumb = breadcrumbSchema([
    { name: 'Inicio', path: '/es' },
    { name: 'Blog', path: '/es/blog' },
    { name: post.title, path: `/es/blog/${slug}` },
  ]);

  return (
    <>
      <Header phone={CONTACT_PHONE} />
      <JsonLd data={[articleSchema, breadcrumb]} />
      <main id="main-content">
        <section className="bg-warmgray pt-20 pb-14 lg:pt-28 lg:pb-16">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <nav aria-label="Breadcrumb" className="text-[13px] text-charcoal/60 mb-6 font-sans">
              <Link href="/es" className="hover:text-navy transition-colors">Inicio</Link>
              <span className="mx-2" aria-hidden="true">&rsaquo;</span>
              <Link href="/es/blog" className="hover:text-navy transition-colors">Blog</Link>
              <span className="mx-2" aria-hidden="true">&rsaquo;</span>
              <span className="text-navy">{post.title}</span>
            </nav>
            <p className="font-sans text-xs text-charcoal/50 uppercase tracking-widest mb-3">
              {formatDate(post.date)}
            </p>
            <h1 className="font-serif text-4xl lg:text-[48px] font-bold text-navy leading-[1.15] mb-5 max-w-[720px]">
              {post.title}
            </h1>
            <p className="font-sans text-[18px] text-charcoal leading-relaxed max-w-[640px]">
              {post.description}
            </p>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto blog-prose">
              <style>{`
                .blog-prose .prose-blog h2 {
                  font-family: var(--font-playfair), serif;
                  font-size: 1.625rem;
                  font-weight: 700;
                  color: #1a2b5f;
                  margin-top: 2.5rem;
                  margin-bottom: 0.75rem;
                  line-height: 1.3;
                }
                .blog-prose .prose-blog p {
                  font-family: var(--font-inter), sans-serif;
                  font-size: 1.0625rem;
                  color: #3d3d3d;
                  line-height: 1.75;
                  margin-bottom: 1.25rem;
                }
                .blog-prose .prose-blog ul, .blog-prose .prose-blog ol {
                  font-family: var(--font-inter), sans-serif;
                  font-size: 1.0625rem;
                  color: #3d3d3d;
                  line-height: 1.75;
                  margin-bottom: 1.25rem;
                  padding-left: 1.5rem;
                }
                .blog-prose .prose-blog ul { list-style-type: disc; }
                .blog-prose .prose-blog ol { list-style-type: decimal; }
                .blog-prose .prose-blog li { margin-bottom: 0.5rem; }
                .blog-prose .prose-blog a {
                  color: #1a2b5f;
                  text-decoration: underline;
                  text-underline-offset: 3px;
                }
                .blog-prose .prose-blog a:hover { color: #C9A84C; }
                .blog-prose .prose-blog table {
                  width: 100%;
                  border-collapse: collapse;
                  font-size: 0.875rem;
                }
                .blog-prose .prose-blog .disclaimer {
                  font-size: 0.8125rem;
                  color: #3d3d3d;
                  opacity: 0.6;
                  margin-top: 2.5rem;
                  padding-top: 1.25rem;
                  border-top: 1px solid #e5e0d8;
                }
              `}</style>
              <PostContent />
            </div>
          </div>
        </section>

        <section className="bg-warmgray py-10 lg:py-12">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto border-l-4 border-gold bg-white px-6 py-5 rounded-r-[4px] flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-sans font-semibold text-navy text-[16px] mb-1">¿Necesita ayuda con su caso?</p>
                <p className="font-sans text-[14px] text-charcoal/70">
                  Reserve una consulta con la Abogada Bardi, acceso directo, sin intermediarios.
                </p>
              </div>
              <Link
                href="/es/contact"
                className="flex-shrink-0 inline-flex items-center justify-center px-6 py-2.5 bg-navy text-white font-sans font-semibold text-[14px] rounded-[4px] hover:bg-navy/90 transition-colors"
              >
                Solicite una Consulta
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 lg:py-14">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto">
              <p className="font-sans text-xs font-semibold text-charcoal/50 uppercase tracking-widest mb-5">
                Más Artículos
              </p>
              <div className="flex flex-col gap-4">
                {BLOG_POSTS.filter((p) => p.slug !== slug).map((p) => (
                  <Link
                    key={p.slug}
                    href={ES_BLOG_SLUGS.has(p.slug) ? `/es/blog/${p.slug}` : `/blog/${p.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-5"
                  >
                    <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest sm:w-28 flex-shrink-0 pt-0.5">
                      {formatDate(p.date)}
                    </p>
                    <p className="font-sans font-semibold text-[15px] text-navy group-hover:text-gold transition-colors">
                      {p.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
