'use client';

// Internal site search UI (BAR-801, BAR-697 rows 5 + 9).
// A magnifying-glass button in the header that opens a minimal overlay search.
// Bilingual: the `isEs` prop drives both the result index locale and the UI copy.
// Client-only and dependency-free — see src/lib/search.ts for the index + matcher.

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { searchSite, type SearchResult } from '@/lib/search';

const COPY = {
  en: {
    open: 'Search the site',
    placeholder: 'Search guides, services, and pages…',
    label: 'Search',
    close: 'Close search',
    empty: 'No results. Try a different word.',
    hint: 'Type to search blog guides, services, and pages.',
    types: { blog: 'Guide', service: 'Service', page: 'Page' },
  },
  es: {
    open: 'Buscar en el sitio',
    placeholder: 'Buscar guías, servicios y páginas…',
    label: 'Buscar',
    close: 'Cerrar búsqueda',
    empty: 'Sin resultados. Pruebe otra palabra.',
    hint: 'Escriba para buscar guías del blog, servicios y páginas.',
    types: { blog: 'Guía', service: 'Servicio', page: 'Página' },
  },
} as const;

function SearchIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SiteSearch({
  isEs,
  variant = 'desktop',
}: {
  isEs: boolean;
  variant?: 'desktop' | 'mobile';
}) {
  const locale = isEs ? 'es' : 'en';
  const t = COPY[locale];

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setResults([]);
    setActive(0);
  }, []);

  // Recompute results as the query changes.
  useEffect(() => {
    setResults(searchSite(query, locale));
    setActive(0);
  }, [query, locale]);

  // Focus the input when the overlay opens; lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape closes from anywhere.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      const hit = results[active];
      if (hit) {
        e.preventDefault();
        // Full navigation closes the overlay; href is locale-correct already.
        window.location.href = hit.url;
      }
    }
  };

  const btnBase =
    'inline-flex items-center justify-center text-navy hover:text-gold transition-colors';

  return (
    <>
      {variant === 'mobile' ? (
        <button
          type="button"
          aria-label={t.open}
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 text-navy font-semibold"
        >
          <SearchIcon className="w-5 h-5" />
          {t.label}
        </button>
      ) : (
        <button
          type="button"
          aria-label={t.open}
          onClick={() => setOpen(true)}
          className={`${btnBase} p-2 -m-2`}
        >
          <SearchIcon className="w-5 h-5" />
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/50 flex items-start justify-center px-4 pt-20 sm:pt-28"
          role="dialog"
          aria-modal="true"
          aria-label={t.label}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="w-full max-w-xl bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 border-b border-warmgray-200">
              <SearchIcon className="w-5 h-5 text-charcoal/50 shrink-0" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder={t.placeholder}
                aria-label={t.placeholder}
                className="flex-1 py-4 text-base text-charcoal placeholder:text-charcoal/40 outline-none bg-transparent font-sans"
              />
              <button
                type="button"
                aria-label={t.close}
                onClick={close}
                className="p-2 -mr-2 text-charcoal/50 hover:text-navy transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {query.trim() === '' ? (
                <p className="px-4 py-6 text-sm text-charcoal/50 font-sans">{t.hint}</p>
              ) : results.length === 0 ? (
                <p className="px-4 py-6 text-sm text-charcoal/50 font-sans">{t.empty}</p>
              ) : (
                <ul className="py-2">
                  {results.map((r, i) => (
                    <li key={r.url}>
                      <Link
                        href={r.url}
                        onClick={close}
                        onMouseEnter={() => setActive(i)}
                        className={`block px-4 py-3 transition-colors ${
                          i === active ? 'bg-warmgray' : 'hover:bg-warmgray'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-wide font-semibold text-gold font-sans shrink-0">
                            {t.types[r.type]}
                          </span>
                          <span className="font-serif text-base font-bold text-navy truncate min-w-0">
                            {r.title}
                          </span>
                        </span>
                        <span className="block text-sm text-charcoal/60 mt-0.5 line-clamp-2">
                          {r.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
