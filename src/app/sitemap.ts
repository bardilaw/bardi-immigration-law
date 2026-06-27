import type { MetadataRoute } from 'next';
import { LIVE_POSTS, ES_BLOG_SLUGS } from '@/content/blog/meta';

const BASE = 'https://bardilaw.com';

// Routes that have full ES mirrors under /es. Privacy-policy and terms are EN-only.
const BILINGUAL_ROUTES: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/benefits-based-immigration', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/removal-defense', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/family-based-immigration', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/waivers', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/consular-processing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/appeals', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/federal-litigation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/sijs', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/u-visa', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/vawa', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/naturalization', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/daca', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/tps', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/parole', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/benefits-based-immigration', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources/i-864p-sponsor-calculator', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
];

// privacy-policy and terms are noindexed — omit from sitemap entirely.

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const bilingualRoutes = BILINGUAL_ROUTES.flatMap(({ path, priority, changeFrequency }) => [
    { url: `${BASE}${path}`, lastModified: now, changeFrequency, priority },
    {
      url: `${BASE}/es${path === '/' ? '/' : path}`,
      lastModified: now,
      changeFrequency,
      priority: Math.round(priority * 0.9 * 10) / 10,
    },
  ]);

  const blogRoutes = LIVE_POSTS.flatMap((post) => {
    const en = {
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
    // Only include ES blog URL when translated content actually exists.
    if (!ES_BLOG_SLUGS.has(post.slug)) return [en];
    return [
      en,
      {
        url: `${BASE}/es/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      },
    ];
  });

  return [...bilingualRoutes, ...blogRoutes];
}
