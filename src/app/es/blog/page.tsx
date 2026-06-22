import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_PHONE } from '@/lib/contact';
import { BLOG_POSTS } from '@/content/blog/meta';

export const metadata: Metadata = {
  title: 'Blog de Inmigración | Bardi Immigration Law',
  description:
    'Información práctica sobre leyes de inmigración para inmigrantes y familias, DACA, Visa U, VAWA, peticiones familiares y más.',
  alternates: {
    canonical: 'https://bardilaw.com/es/blog',
    languages: {
      en: 'https://bardilaw.com/blog',
      es: 'https://bardilaw.com/es/blog',
    },
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function EsBlogIndexPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-warmgray pt-20 pb-14 lg:pt-28 lg:pb-16">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <nav aria-label="Breadcrumb" className="text-[13px] text-charcoal/60 mb-6 font-sans">
              <Link href="/es" className="hover:text-navy transition-colors">Inicio</Link>
              <span className="mx-2" aria-hidden="true">&rsaquo;</span>
              <span className="text-navy">Blog</span>
            </nav>
            <h1 className="font-serif text-4xl lg:text-[52px] font-bold text-navy leading-[1.15] mb-4">
              Blog de Inmigración
            </h1>
            <p className="font-sans text-[18px] text-charcoal leading-relaxed max-w-[640px]">
              Información práctica sobre leyes de inmigración en EE.UU. para inmigrantes y familias, actualizada según cambios en políticas y decisiones judiciales.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-site mx-auto px-5 lg:px-16">
            <div className="max-w-[760px] mx-auto flex flex-col gap-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="bg-warmgray border border-warmgray-200 rounded-[4px] px-7 py-6 hover:border-navy transition-colors group"
                >
                  <p className="font-sans text-xs text-charcoal/50 uppercase tracking-widest mb-2">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="font-serif text-[22px] font-bold text-navy leading-[1.3] mb-3">
                    <Link href={`/es/blog/${post.slug}`} className="hover:text-gold transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="font-sans text-[15px] text-charcoal leading-[1.7] mb-4">
                    {post.description}
                  </p>
                  <Link
                    href={`/es/blog/${post.slug}`}
                    className="font-sans font-semibold text-[13px] text-gold hover:text-navy transition-colors"
                  >
                    Leer artículo &rarr;
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 lg:py-20 text-center">
          <div className="max-w-site mx-auto px-5 lg:px-20">
            <h2 className="font-serif text-[36px] font-bold text-white leading-[1.2] max-w-[600px] mx-auto">
              ¿Tiene preguntas sobre su caso?
            </h2>
            <p className="font-sans text-base text-white/80 mt-3">
              Hable directamente con la Abogada Bardi.
            </p>
            <div className="mt-8">
              <Link
                href="/es/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-navy font-sans font-semibold text-[15px] rounded-[4px] hover:bg-gold/90 transition-colors"
              >
                Reserve una Consulta
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer phone={CONTACT_PHONE} />
    </>
  );
}
