export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'daca-renewal-2026',
    title: 'DACA Renewal Guide 2026: What Every Dreamer Needs to Know',
    date: '2026-06-20',
    description:
      'Your complete DACA renewal 2026 guide: who qualifies, Forms I-821D and I-765, the renewal timeline, fees, and what happens if DACA expires. From a DACA attorney in Georgia.',
  },
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
  {
    slug: 'stewart-detention-attorney',
    title: 'Detained at Stewart? Here\'s What Happens in the First 72 Hours',
    date: '2026-05-21',
    description:
      'Loved one detained at Stewart Detention Center in Lumpkin, GA? Learn what happens in the first 72 hours and how to get an attorney fast.',
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
