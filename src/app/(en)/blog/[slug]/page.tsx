import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';
import { JsonLd } from '@/components/JsonLd';
import { BLOG_POSTS, getPost, ES_BLOG_SLUGS, blogPostingSchema, breadcrumbSchema } from '@/content/blog/meta';
import { DacaRenewal2025PostContent } from '@/content/blog/en/daca-renewal-2025-georgia';
import { DacaRenewalPostContent } from '@/content/blog/en/daca-renewal-2026';
import { DacaPostContent } from '@/content/blog/en/daca-2026';
import { UVisaVawaPostContent } from '@/content/blog/en/u-visa-vawa';
import { StewartDetentionPostContent } from '@/content/blog/en/stewart-detention';
import { TpsPostContent } from '@/content/blog/en/tps-2026';
import { NoticeToAppearPostContent } from '@/content/blog/en/notice-to-appear-georgia';
import { FamilyGreenCardPostContent } from '@/content/blog/en/family-green-card-attorney-georgia';
import { AsylumApplicationPostContent } from '@/content/blog/en/asylum-application-georgia';
import { NaturalizationPostContent } from '@/content/blog/en/naturalization-citizenship-georgia';
import { EmploymentBasedImmigrationPostContent } from '@/content/blog/en/employment-based-immigration-georgia';
import { DeportationDefensePostContent } from '@/content/blog/en/deportation-defense-removal-proceedings-georgia';
import { CriminalRecordPostContent } from '@/content/blog/en/criminal-record-immigration-consequences-georgia';
import { MarriageGreenCardK1PostContent } from '@/content/blog/en/marriage-based-green-card-k1-fiance-visa-georgia';
import { ImmigrationBondHearingPostContent } from '@/content/blog/en/immigration-bond-hearing-georgia';
import { ConsularProcessingPostContent } from '@/content/blog/en/consular-processing-immigrant-visa-georgia';
import { StudentVisaF1OptPostContent } from '@/content/blog/en/student-visa-f1-opt-stem-georgia';
import { AdjustmentOfStatusPostContent } from '@/content/blog/en/adjustment-of-status-green-card-georgia';
import { CancellationOfRemovalPostContent } from '@/content/blog/en/cancellation-of-removal-georgia';
import { AdvanceParolePostContent } from '@/content/blog/en/advance-parole-travel-documents-georgia';
import { SijsPostContent } from '@/content/blog/en/special-immigrant-juvenile-status-georgia';
import { BiaAppealPostContent } from '@/content/blog/en/bia-appeal-immigration-court-georgia';
import { I601AWaiverPostContent } from '@/content/blog/en/i-601a-provisional-unlawful-presence-waiver-georgia';
import { EadWorkPermitPostContent } from '@/content/blog/en/employment-authorization-ead-georgia';
import { MandamusUscisDelayPostContent } from '@/content/blog/en/mandamus-lawsuit-uscis-delay-georgia';
import { TVisaTraffickingPostContent } from '@/content/blog/en/t-visa-trafficking-victims-georgia';
import { MotionToReopenReconsiderPostContent } from '@/content/blog/en/motion-to-reopen-reconsider-immigration-georgia';
import { H4EadPostContent } from '@/content/blog/en/h4-ead-work-authorization-h1b-spouses-georgia';
import { ParoleInPlacePostContent } from '@/content/blog/en/parole-in-place-military-families-georgia';
import { TnVisaUsmcaPostContent } from '@/content/blog/en/tn-visa-canadian-mexican-professionals-georgia';
import { IceEnforcementRightsPostContent } from '@/content/blog/en/ice-enforcement-rights-georgia';
import { RemoveConditionsI751PostContent } from '@/content/blog/en/remove-conditions-green-card-i-751-georgia';
import { I601WaiverPostContent } from '@/content/blog/en/i-601-inadmissibility-waiver-extreme-hardship-georgia';
import { TravelBan2026PostContent } from '@/content/blog/en/travel-ban-2026-proclamation-10998-waiver';
import { AffidavitOfSupportI864PostContent } from '@/content/blog/en/affidavit-of-support-i-864-income-requirements';
import { K1ProcessingTimelinePostContent } from '@/content/blog/en/k1-fiance-visa-processing-timeline-2026';

type Props = { params: Promise<{ slug: string }> };

const CONTENT_MAP: Record<string, React.ComponentType> = {
  'k1-fiance-visa-processing-timeline-2026': K1ProcessingTimelinePostContent,
  'affidavit-of-support-i-864-income-requirements': AffidavitOfSupportI864PostContent,
  'travel-ban-2026-proclamation-10998-waiver': TravelBan2026PostContent,
  'ice-enforcement-rights-georgia': IceEnforcementRightsPostContent,
  'remove-conditions-green-card-i-751-georgia': RemoveConditionsI751PostContent,
  'parole-in-place-military-families-georgia': ParoleInPlacePostContent,
  'tn-visa-canadian-mexican-professionals-georgia': TnVisaUsmcaPostContent,
  'h4-ead-work-authorization-h1b-spouses-georgia': H4EadPostContent,
  'motion-to-reopen-reconsider-immigration-georgia': MotionToReopenReconsiderPostContent,
  't-visa-trafficking-victims-georgia': TVisaTraffickingPostContent,
  'mandamus-lawsuit-uscis-delay-georgia': MandamusUscisDelayPostContent,
  'employment-authorization-ead-georgia': EadWorkPermitPostContent,
  'i-601a-provisional-unlawful-presence-waiver-georgia': I601AWaiverPostContent,
  'i-601-inadmissibility-waiver-extreme-hardship-georgia': I601WaiverPostContent,
  'bia-appeal-immigration-court-georgia': BiaAppealPostContent,
  'special-immigrant-juvenile-status-georgia': SijsPostContent,
  'advance-parole-travel-documents-georgia': AdvanceParolePostContent,
  'cancellation-of-removal-georgia': CancellationOfRemovalPostContent,
  'adjustment-of-status-green-card-georgia': AdjustmentOfStatusPostContent,
  'student-visa-f1-opt-stem-georgia': StudentVisaF1OptPostContent,
  'consular-processing-immigrant-visa-georgia': ConsularProcessingPostContent,
  'immigration-bond-hearing-georgia': ImmigrationBondHearingPostContent,
  'marriage-based-green-card-k1-fiance-visa-georgia': MarriageGreenCardK1PostContent,
  'criminal-record-immigration-consequences-georgia': CriminalRecordPostContent,
  'deportation-defense-removal-proceedings-georgia': DeportationDefensePostContent,
  'naturalization-citizenship-georgia': NaturalizationPostContent,
  'asylum-application-georgia': AsylumApplicationPostContent,
  'notice-to-appear-georgia': NoticeToAppearPostContent,
  'family-green-card-attorney-georgia': FamilyGreenCardPostContent,
  'daca-renewal-2025-georgia': DacaRenewal2025PostContent,
  'daca-renewal-2026': DacaRenewalPostContent,
  'daca-2026': DacaPostContent,
  'u-visa-vawa-crime-victims-georgia': UVisaVawaPostContent,
  'stewart-detention-attorney': StewartDetentionPostContent,
  'tps-2026': TpsPostContent,
  'employment-based-immigration-georgia': EmploymentBasedImmigrationPostContent,
};

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://bardilaw.com/blog/${slug}`,
      languages: {
        'x-default': `https://bardilaw.com/blog/${slug}`,
        en: `https://bardilaw.com/blog/${slug}`,
        // Only link to ES when translated content exists; avoid pointing to a redirect.
        ...(ES_BLOG_SLUGS.has(slug) ? { es: `https://bardilaw.com/es/blog/${slug}` } : {}),
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://bardilaw.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const PostContent = CONTENT_MAP[slug];
  if (!PostContent) notFound();

  const articleSchema = blogPostingSchema(post, 'en');
  // Breadcrumb mirrors the visible nav below: Home › Blog › Post (BAR-701).
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${slug}` },
  ]);

  return (
    <>
      <Header phone={CONTACT_PHONE} />
      <JsonLd data={[articleSchema, breadcrumb]} />
      <main id="main-content">
        <section className="bg-warmgray pt-20 pb-14 lg:pt-28 lg:pb-16">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <nav aria-label="Breadcrumb" className="text-[13px] text-charcoal/60 mb-6 font-sans">
              <Link href="/" className="hover:text-navy transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">&rsaquo;</span>
              <Link href="/blog" className="hover:text-navy transition-colors">Blog</Link>
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
                <p className="font-sans font-semibold text-navy text-[16px] mb-1">Need help with your case?</p>
                <p className="font-sans text-[14px] text-charcoal/70">
                  Book a consultation with Attorney Bardi, direct attorney access, no intake specialist.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center justify-center px-6 py-2.5 bg-navy text-white font-sans font-semibold text-[14px] rounded-[4px] hover:bg-navy/90 transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 lg:py-14">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto">
              <p className="font-sans text-xs font-semibold text-charcoal/50 uppercase tracking-widest mb-5">
                More Articles
              </p>
              <div className="flex flex-col gap-4">
                {BLOG_POSTS.filter((p) => p.slug !== slug).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
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
