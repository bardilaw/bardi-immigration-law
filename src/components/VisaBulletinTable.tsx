// BAR-802 row 37 — renders the DOS Visa Bulletin Final Action Dates on the
// EN /resources and ES /es/resources pages. Data comes from the auto-generated
// visaBulletinData.ts (see scripts/fetch-visa-bulletin.mjs), so both locales
// stay in parity. Family-Sponsored is shown first, then Employment-Based.

import { VISA_BULLETIN, type VisaBulletinRow } from '@/app/(en)/resources/visaBulletinData';

type Lang = 'en' | 'es';

const COPY = {
  en: {
    family: 'Family-Sponsored Preferences',
    employment: 'Employment-Based Preferences',
    category: 'Category',
    allAreas: 'All Other',
    legend: '“C” = Current (all priority dates may file). “U” = Unavailable. Dates show the day, month, and year — e.g. 01SEP17 = September 1, 2017.',
    sourceLabel: 'Source',
    updated: 'Imported from the U.S. Department of State Visa Bulletin for',
    disclaimer:
      'Final Action Dates only. This is published by the U.S. Department of State — not USCIS — and can change every month. Always confirm your priority date with your attorney.',
  },
  es: {
    family: 'Preferencias Familiares',
    employment: 'Preferencias por Empleo',
    category: 'Categoría',
    allAreas: 'Las Demás',
    legend: '“C” = Vigente (todas las fechas de prioridad pueden presentar). “U” = No disponible. Las fechas muestran día, mes y año — p. ej. 01SEP17 = 1 de septiembre de 2017.',
    sourceLabel: 'Fuente',
    updated: 'Importado del Boletín de Visas del Departamento de Estado de los EE. UU. para',
    disclaimer:
      'Solo Fechas de Acción Final. Lo publica el Departamento de Estado de los EE. UU. — no USCIS — y puede cambiar cada mes. Confirme siempre su fecha de prioridad con su abogado.',
  },
} as const;

function Table({ rows, lang }: { rows: VisaBulletinRow[]; lang: Lang }) {
  const t = COPY[lang];
  return (
    <div className="overflow-x-auto rounded-lg border border-warmgray-200">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="bg-navy text-white text-left">
            <th scope="col" className="px-4 py-3 font-sans font-semibold">{t.category}</th>
            <th scope="col" className="px-4 py-3 font-sans font-semibold">{t.allAreas}</th>
            <th scope="col" className="px-4 py-3 font-sans font-semibold">China</th>
            <th scope="col" className="px-4 py-3 font-sans font-semibold">India</th>
            <th scope="col" className="px-4 py-3 font-sans font-semibold">{lang === 'es' ? 'México' : 'Mexico'}</th>
            <th scope="col" className="px-4 py-3 font-sans font-semibold">{lang === 'es' ? 'Filipinas' : 'Philippines'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.category} className={i % 2 === 0 ? 'bg-white' : 'bg-warmgray'}>
              <th scope="row" className="px-4 py-3 font-sans font-semibold text-navy text-left align-top">
                {lang === 'es' ? r.categoryEs : r.category}
              </th>
              <td className="px-4 py-3 text-charcoal/90 whitespace-nowrap">{r.dates.allAreas}</td>
              <td className="px-4 py-3 text-charcoal/90 whitespace-nowrap">{r.dates.china}</td>
              <td className="px-4 py-3 text-charcoal/90 whitespace-nowrap">{r.dates.india}</td>
              <td className="px-4 py-3 text-charcoal/90 whitespace-nowrap">{r.dates.mexico}</td>
              <td className="px-4 py-3 text-charcoal/90 whitespace-nowrap">{r.dates.philippines}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function VisaBulletinTable({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const monthLabel = lang === 'es' ? VISA_BULLETIN.monthLabelEs : VISA_BULLETIN.monthLabel;
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-xl font-bold text-navy mb-3">{t.family}</h3>
        <Table rows={VISA_BULLETIN.familyBased} lang={lang} />
      </div>
      <div>
        <h3 className="font-serif text-xl font-bold text-navy mb-3">{t.employment}</h3>
        <Table rows={VISA_BULLETIN.employmentBased} lang={lang} />
      </div>
      <p className="text-xs text-charcoal/60 leading-relaxed">{t.legend}</p>
      <p className="text-xs text-charcoal/70 leading-relaxed">
        {t.disclaimer}
      </p>
      <p className="text-xs text-charcoal/60">
        {t.sourceLabel}:{' '}
        <a
          href={VISA_BULLETIN.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-navy underline hover:text-gold"
        >
          travel.state.gov
        </a>{' '}
        — {t.updated} {monthLabel}.
      </p>
    </div>
  );
}
