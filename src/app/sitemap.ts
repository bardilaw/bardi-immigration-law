import type { MetadataRoute } from 'next';

const BASE = 'https://bardilaw.com';

const ROUTES: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/removal-defense', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/benefits-based-immigration', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/federal-litigation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.flatMap(({ path, priority, changeFrequency }) => [
    {
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    },
    // Spanish parallel pages — declared now so hreflang resolves;
    // Spanish routes will populate content in a future milestone.
    {
      url: `${BASE}/es${path === '/' ? '/' : path}`,
      lastModified: now,
      changeFrequency,
      priority: Math.round(priority * 0.9 * 10) / 10,
    },
  ]);
}
