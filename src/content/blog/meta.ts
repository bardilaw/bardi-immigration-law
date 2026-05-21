export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'daca-2026',
    title: 'DACA in 2026: What Georgia Dreamers Need to Know',
    date: '2026-05-20',
    description:
      'DACA renewals continue in 2026, but litigation keeps the program\'s future uncertain. Georgia Dreamers: know your eligibility, rights, and options.',
  },
  {
    slug: 'u-visa-vawa-protections-immigrant-survivors',
    title: 'U-Visa and VAWA: Immigration Protections for Immigrant Survivors',
    date: '2026-05-20',
    description:
      'Immigrant survivors of crime or domestic violence may qualify for U-Visa or VAWA protections. Learn the difference, who qualifies, and how to apply in Georgia.',
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
