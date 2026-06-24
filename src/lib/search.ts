// Internal site search (BAR-801, BAR-697 rows 5 + 9).
//
// The site is fully static (Next.js on Cloudflare Pages), so the search index is
// built at module load from the same metadata the pages render from — no server,
// no crawl step, no extra dependency. Blog entries come straight from BLOG_POSTS /
// ES_BLOG_META (single source of truth, can never drift), and the smaller, stable
// service + static-page lists are authored here in both languages.
//
// Matching is a lightweight, accent-insensitive token scorer (titles weighted over
// body text). The corpus is ~50 EN / ~34 ES blog posts plus a handful of pages, so
// scoring the whole index on every keystroke is effectively instant in the browser.

import { BLOG_POSTS, getEsPost, ES_BLOG_SLUGS } from '@/content/blog/meta';

export type SearchType = 'blog' | 'service' | 'page';

export interface SearchEntry {
  title: string;
  description: string;
  url: string;
  type: SearchType;
  // Extra free-text (form numbers, synonyms) folded into the match haystack but
  // never shown. Improves findability without bloating the visible result.
  keywords?: string;
}

// Strip diacritics and lowercase so "naturalizacion" matches "Naturalización" and
// queries work regardless of accent input on either keyboard layout.
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// ---------------------------------------------------------------------------
// Service / practice-area pages (14 dedicated pages, EN + ES). Slugs mirror the
// /services/* and /es/services/* route folders.
// ---------------------------------------------------------------------------
interface ServiceDef {
  slug: string;
  en: { title: string; description: string };
  es: { title: string; description: string };
  keywords: string;
}

const SERVICES: ServiceDef[] = [
  {
    slug: 'removal-defense',
    en: { title: 'Deportation (Removal) Defense', description: 'Detained and non-detained defense, bond hearings, and cancellation of removal in immigration court.' },
    es: { title: 'Defensa contra la Deportación', description: 'Defensa de personas detenidas y no detenidas, audiencias de fianza y cancelación de remoción en la corte de inmigración.' },
    keywords: 'deportation removal bond hearing cancellation 42A 42B detained Stewart immigration court deportacion remocion fianza detenido',
  },
  {
    slug: 'family-based-immigration',
    en: { title: 'Family-Based Immigration', description: 'I-130 petitions, adjustment of status, and reuniting families through citizen and permanent-resident sponsorship.' },
    es: { title: 'Inmigración Familiar', description: 'Peticiones I-130, ajuste de estatus y reunificación familiar mediante el patrocinio de ciudadanos y residentes permanentes.' },
    keywords: 'family green card I-130 I-485 marriage spouse parent petition familiar matrimonio peticion green card',
  },
  {
    slug: 'benefits-based-immigration',
    en: { title: 'Benefits-Based Immigration', description: 'Green cards, work authorization, and immigration benefits for those building a life in the U.S.' },
    es: { title: 'Inmigración por Beneficios', description: 'Green cards, autorización de trabajo y beneficios migratorios para quienes construyen una vida en EE. UU.' },
    keywords: 'benefits green card work permit EAD employment beneficios permiso de trabajo',
  },
  {
    slug: 'waivers',
    en: { title: 'Waivers', description: 'I-601 and I-601A unlawful-presence and inadmissibility waivers, I-212, and extreme-hardship filings.' },
    es: { title: 'Renuncias (Waivers)', description: 'Perdones I-601 e I-601A por presencia ilegal e inadmisibilidad, I-212 y solicitudes por dificultad extrema.' },
    keywords: 'waiver I-601 I-601A I-212 inadmissibility extreme hardship unlawful presence perdon renuncia dificultad extrema',
  },
  {
    slug: 'consular-processing',
    en: { title: 'Consular Processing', description: 'Immigrant-visa processing through a U.S. consulate abroad, from approved petition through the National Visa Center to the interview.' },
    es: { title: 'Proceso Consular', description: 'Procesamiento de visa de inmigrante en un consulado de EE. UU. en el extranjero, desde la petición aprobada hasta la entrevista.' },
    keywords: 'consular processing immigrant visa NVC DS-260 interview embassy proceso consular visa entrevista consulado',
  },
  {
    slug: 'appeals',
    en: { title: 'Appeals', description: 'BIA and AAO appeals of adverse decisions, plus motions to reopen and reconsider. Deadlines are strict.' },
    es: { title: 'Apelaciones', description: 'Apelaciones ante la BIA y la AAO, además de mociones para reabrir y reconsiderar. Los plazos son estrictos.' },
    keywords: 'appeal BIA AAO motion reopen reconsider EOIR-26 apelacion mocion reabrir reconsiderar',
  },
  {
    slug: 'federal-litigation',
    en: { title: 'Federal Litigation', description: 'Habeas corpus and mandamus petitions when administrative remedies are exhausted. Federal court experience across the Southeast.' },
    es: { title: 'Litigios Federales', description: 'Peticiones de habeas corpus y mandamus cuando se agotan los recursos administrativos. Experiencia en cortes federales.' },
    keywords: 'federal litigation mandamus habeas corpus lawsuit district court eleventh circuit demanda corte federal',
  },
  {
    slug: 'sijs',
    en: { title: 'Special Immigrant Juvenile Status (SIJS)', description: 'Protection and a green card path for minors who have been abused, abandoned, or neglected.' },
    es: { title: 'Estatus Especial de Inmigrante Juvenil (SIJS)', description: 'Protección y un camino a la green card para menores que han sido abusados, abandonados o descuidados.' },
    keywords: 'SIJS juvenile minor abused abandoned neglected I-360 juvenil menor abandonado',
  },
  {
    slug: 'u-visa',
    en: { title: 'U-Visa (Crime Victims)', description: 'Immigration relief for victims of qualifying crimes who cooperate with law enforcement. Form I-918.' },
    es: { title: 'Visa U (Víctimas de Delitos)', description: 'Alivio migratorio para víctimas de delitos calificados que cooperan con las autoridades. Formulario I-918.' },
    keywords: 'U-visa crime victim I-918 certification law enforcement visa u victima delito',
  },
  {
    slug: 'vawa',
    en: { title: 'VAWA Self-Petition', description: 'Confidential self-petitions (Form I-360) for immigrant survivors of domestic violence and abuse.' },
    es: { title: 'Autopetición VAWA', description: 'Autopeticiones confidenciales (Formulario I-360) para sobrevivientes inmigrantes de violencia doméstica y abuso.' },
    keywords: 'VAWA self petition I-360 domestic violence abuse survivor violencia domestica abuso',
  },
  {
    slug: 'naturalization',
    en: { title: 'Naturalization & Citizenship', description: 'U.S. citizenship eligibility, the N-400 application, the civics and English tests, and the oath.' },
    es: { title: 'Naturalización y Ciudadanía', description: 'Elegibilidad para la ciudadanía estadounidense, la solicitud N-400, los exámenes de civismo e inglés y el juramento.' },
    keywords: 'naturalization citizenship N-400 civics test oath naturalizacion ciudadania examen',
  },
  {
    slug: 'daca',
    en: { title: 'DACA', description: 'Deferred Action for Childhood Arrivals: initial applications and renewals.' },
    es: { title: 'DACA', description: 'Acción Diferida para los Llegados en la Infancia: solicitudes iniciales y renovaciones.' },
    keywords: 'DACA dreamers deferred action I-821D renewal renovacion accion diferida',
  },
  {
    slug: 'tps',
    en: { title: 'Temporary Protected Status (TPS)', description: 'Registration and re-registration for nationals of designated countries.' },
    es: { title: 'Estatus de Protección Temporal (TPS)', description: 'Registro y re-registro para nacionales de países designados.' },
    keywords: 'TPS temporary protected status registration country designation registro proteccion temporal',
  },
  {
    slug: 'parole',
    en: { title: 'Parole-in-Place & Advance Parole', description: 'Parole-in-place for military families and advance-parole travel documents for pending applicants.' },
    es: { title: 'Parole-in-Place y Advance Parole', description: 'Parole-in-place para familias militares y documentos de viaje advance parole para solicitantes con casos pendientes.' },
    keywords: 'parole in place advance parole military I-131 travel document libertad condicional militar viaje',
  },
];

// ---------------------------------------------------------------------------
// Static pages worth surfacing in search. /resources is intentionally omitted —
// it 301-redirects to /blog (see next.config.ts), so indexing it would dead-end.
// ---------------------------------------------------------------------------
interface PageDef {
  enUrl: string;
  esUrl: string;
  en: { title: string; description: string };
  es: { title: string; description: string };
  keywords: string;
}

const PAGES: PageDef[] = [
  {
    enUrl: '/',
    esUrl: '/es',
    en: { title: 'Home', description: 'Bardi Immigration Law — immigration attorney serving Georgia and Alabama, handled directly by the attorney from day one.' },
    es: { title: 'Inicio', description: 'Bardi Immigration Law — abogada de inmigración que sirve a Georgia y Alabama, atendido directamente por la abogada desde el primer día.' },
    keywords: 'home bardi immigration law attorney georgia alabama inicio abogada',
  },
  {
    enUrl: '/services',
    esUrl: '/es/services',
    en: { title: 'All Immigration Services', description: 'Removal defense, family-based immigration, waivers, consular processing, appeals, federal litigation, and more.' },
    es: { title: 'Todos los Servicios de Inmigración', description: 'Defensa contra la deportación, inmigración familiar, perdones, proceso consular, apelaciones, litigios federales y más.' },
    keywords: 'services practice areas servicios areas de practica',
  },
  {
    enUrl: '/blog',
    esUrl: '/es/blog',
    en: { title: 'Immigration Blog & Guides', description: 'In-depth guides on green cards, visas, deportation defense, citizenship, and immigration news for Georgia.' },
    es: { title: 'Blog y Guías de Inmigración', description: 'Guías detalladas sobre green cards, visas, defensa contra la deportación, ciudadanía y noticias de inmigración para Georgia.' },
    keywords: 'blog guides articles news guias articulos noticias',
  },
  {
    enUrl: '/about',
    esUrl: '/es/about',
    en: { title: 'About the Firm', description: 'Meet attorney Eszter Bardi and learn how Bardi Immigration Law represents clients across Georgia and Alabama.' },
    es: { title: 'Sobre Nosotros', description: 'Conozca a la abogada Eszter Bardi y cómo Bardi Immigration Law representa a clientes en Georgia y Alabama.' },
    keywords: 'about firm attorney eszter bardi sobre nosotros abogada',
  },
  {
    enUrl: '/faq',
    esUrl: '/es/faq',
    en: { title: 'Frequently Asked Questions', description: 'Answers to common questions about the firm, fees, consultations, and immigration cases.' },
    es: { title: 'Preguntas Frecuentes', description: 'Respuestas a preguntas comunes sobre la firma, las tarifas, las consultas y los casos de inmigración.' },
    keywords: 'faq questions answers fees consultation preguntas frecuentes tarifas consulta',
  },
  {
    enUrl: '/contact',
    esUrl: '/es/contact',
    en: { title: 'Contact & Book a Consultation', description: 'Reach the firm and book a consultation directly with the attorney.' },
    es: { title: 'Contacto y Reservar una Consulta', description: 'Comuníquese con la firma y reserve una consulta directamente con la abogada.' },
    keywords: 'contact book consultation appointment phone email contacto reservar consulta cita',
  },
];

// Build the index for a given locale once and memoize it (the data is static).
const indexCache: Partial<Record<'en' | 'es', SearchEntry[]>> = {};

export function getSearchIndex(locale: 'en' | 'es'): SearchEntry[] {
  const cached = indexCache[locale];
  if (cached) return cached;

  const entries: SearchEntry[] = [];
  const prefix = locale === 'es' ? '/es' : '';

  // Blog posts. In ES, only index posts that actually have Spanish content so
  // Spanish users don't get English results; EN indexes every post.
  for (const post of BLOG_POSTS) {
    if (locale === 'es' && !ES_BLOG_SLUGS.has(post.slug)) continue;
    const p = locale === 'es' ? getEsPost(post.slug) ?? post : post;
    entries.push({
      title: p.title,
      description: p.description,
      url: `${prefix}/blog/${post.slug}`,
      type: 'blog',
    });
  }

  // Service / practice-area pages.
  for (const svc of SERVICES) {
    const v = svc[locale];
    entries.push({
      title: v.title,
      description: v.description,
      url: `${prefix}/services/${svc.slug}`,
      type: 'service',
      keywords: svc.keywords,
    });
  }

  // Static pages.
  for (const pg of PAGES) {
    const v = pg[locale];
    entries.push({
      title: v.title,
      description: v.description,
      url: locale === 'es' ? pg.esUrl : pg.enUrl,
      type: 'page',
      keywords: pg.keywords,
    });
  }

  indexCache[locale] = entries;
  return entries;
}

export interface SearchResult extends SearchEntry {
  score: number;
}

// Token scorer: every query token must appear somewhere in the entry (AND), with
// title hits weighted above body/keyword hits. Services and pages get a small
// boost over blog posts so a navigational query ("waivers") surfaces the page
// before the long-form article.
export function searchSite(query: string, locale: 'en' | 'es', limit = 10): SearchResult[] {
  const q = normalize(query).trim();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const results: SearchResult[] = [];

  for (const entry of getSearchIndex(locale)) {
    const title = normalize(entry.title);
    const body = normalize(`${entry.description} ${entry.keywords ?? ''}`);

    let score = 0;
    let allMatched = true;

    for (const token of tokens) {
      if (title.includes(token)) {
        // Word-boundary hit in the title scores higher than a mid-word substring.
        score += new RegExp(`\\b${escapeRegExp(token)}`).test(title) ? 4 : 3;
      } else if (body.includes(token)) {
        score += 1;
      } else {
        allMatched = false;
        break;
      }
    }

    if (!allMatched) continue;

    // Whole-phrase title hit is the strongest signal.
    if (title.includes(q)) score += 5;
    // Navigational boost for pages/services.
    if (entry.type !== 'blog') score += 2;

    results.push({ ...entry, score });
  }

  results.sort((a, b) => b.score - a.score || a.title.length - b.title.length);
  return results.slice(0, limit);
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
