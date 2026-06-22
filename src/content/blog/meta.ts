export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'criminal-record-immigration-consequences-georgia',
    title: 'Criminal Record and Immigration Consequences in Georgia',
    date: '2026-06-21',
    description:
      'A Georgia immigration attorney explains how criminal convictions affect immigration status: aggravated felonies, crimes of moral turpitude, drug offenses and DUIs, the effect on green cards, citizenship, and visas, and what to do if you are charged. Atlanta immigration court.',
  },
  {
    slug: 'deportation-defense-removal-proceedings-georgia',
    title: 'Deportation Defense in Georgia: How Removal Proceedings Work and How to Fight Them',
    date: '2026-06-21',
    description:
      'Facing deportation in Georgia? An experienced removal defense attorney explains how removal proceedings start, what happens in Atlanta immigration court, and the defenses — asylum, cancellation, adjustment of status — that can let you stay.',
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
