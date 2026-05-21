import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/content/blog/meta';

const BASE = 'https://bardilaw.com';

const ROUTES: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/benefits-based-immigration', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/removal-defense', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/federal-litigation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/daca', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/family-based-immigration', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/u-visa', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/vawa', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/tps', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/sijs', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/waivers', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ROUTES.flatMap(({ path, priority, changeFrequency }) => [
    { url: `${BASE}${path}`, lastModified: now, changeFrequency, priority },
    {
      url: `${BASE}/es${path === '/' ? '/' : path}`,
      lastModified: now,
      changeFrequency,
      priority: Math.round(priority * 0.9 * 10) / 10,
    },
  ]);

  const blogRoutes = BLOG_POSTS.flatMap((post) => [
    {
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE}/es/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]);

  return [...staticRoutes, ...blogRoutes];
}
