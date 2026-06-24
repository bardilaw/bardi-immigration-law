'use client';

import { useState } from 'react';
import { Button } from './Button';
import { phoneEnabled, telHref } from '@/lib/contact';
import {
  computeSponsorResult,
  formatUsd,
  GUIDELINE_EFFECTIVE,
  GUIDELINE_YEAR,
  type SponsorResult,
} from '@/lib/i864p';

/**
 * I-864P Sponsor Calculator (BAR-697 row 38).
 *
 * Public, client-side tool: five questions → household size → pass/fail against
 * the 125% HHS Poverty Guidelines, ending in a "Call Us Today" CTA either way.
 * One shared component drives EN `/resources` and ES `/es/resources` via the
 * `lang` prop (mirrors the Header/Footer phone-prop pattern so the server-read
 * `CONTACT_PHONE` stays the single source of truth and hydration is safe).
 *
 * The math + thresholds live in `@/lib/i864p` so the annual guideline update is
 * a one-file edit and the logic is unit-testable.
 */

type Lang = 'en' | 'es';

interface Strings {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  yes: string;
  no: string;
  calculate: string;
  reset: string;
  pass: string;
  fail: string;
  resultHouseholdLabel: string;
  resultThresholdLabel: string;
  resultIncomeLabel: string;
  callCta: string;
  messageCta: string;
  immigrantNote: string;
  disclaimerHeading: string;
  disclaimer: string;
}

const COPY: Record<Lang, Strings> = {
  en: {
    q1: 'Are you listed on your most recent U.S. tax return?',
    q2: 'Do you list your spouse on your most recent U.S. tax return?',
    q3: 'How many children under age 18 are listed on your most recent U.S. tax return?',
    q4: 'How many other dependents are listed on your most recent U.S. tax return (other than your spouse and children)?',
    q5: 'How much income did you declare on your most recent U.S. tax return?',
    yes: 'Yes',
    no: 'No',
    calculate: 'Calculate',
    reset: 'Start over',
    pass: 'Congratulations! Based on your answers, you appear to meet the minimum income to be a financial sponsor.',
    fail: 'Based on your answers, you do not appear to meet the minimum income to be a financial sponsor on your own.',
    resultHouseholdLabel: 'Household size counted',
    resultThresholdLabel: `Minimum income required (125% of the ${GUIDELINE_YEAR} guidelines)`,
    resultIncomeLabel: 'Income you entered',
    callCta: 'Call Us Today',
    messageCta: 'Send Us a Message',
    immigrantNote:
      'This estimate counts the people on your tax return. Your actual sponsor household size must also include each person you are sponsoring, which can raise the required income. If your result is close to the line, contact our office before relying on it.',
    disclaimerHeading: 'Disclaimer',
    disclaimer: `[Attorney to supply final disclaimer.] This calculator is an educational estimate only and is not legal advice, nor does it create an attorney-client relationship. It uses 125% of the HHS Poverty Guidelines for the 48 contiguous states and DC, effective ${GUIDELINE_EFFECTIVE}. Alaska and Hawaii use higher figures, and active-duty members of the U.S. Armed Forces sponsoring a spouse or child may use the 100% column. Your true I-864 household size must include the immigrant(s) you are sponsoring. Speak with an attorney about your specific situation.`,
  },
  es: {
    q1: '¿Aparece usted en su declaración de impuestos de EE. UU. más reciente?',
    q2: '¿Incluye a su cónyuge en su declaración de impuestos de EE. UU. más reciente?',
    q3: '¿Cuántos hijos menores de 18 años aparecen en su declaración de impuestos de EE. UU. más reciente?',
    q4: '¿Cuántos otros dependientes aparecen en su declaración de impuestos de EE. UU. más reciente (además de su cónyuge e hijos)?',
    q5: '¿Cuánto ingreso declaró en su declaración de impuestos de EE. UU. más reciente?',
    yes: 'Sí',
    no: 'No',
    calculate: 'Calcular',
    reset: 'Empezar de nuevo',
    pass: '¡Felicidades! Según sus respuestas, parece cumplir con el ingreso mínimo para ser patrocinador económico.',
    fail: 'Según sus respuestas, no parece cumplir con el ingreso mínimo para ser patrocinador económico por su cuenta.',
    resultHouseholdLabel: 'Tamaño del hogar contado',
    resultThresholdLabel: `Ingreso mínimo requerido (125% de las guías de ${GUIDELINE_YEAR})`,
    resultIncomeLabel: 'Ingreso que ingresó',
    callCta: 'Llámenos Hoy',
    messageCta: 'Envíenos un Mensaje',
    immigrantNote:
      'Esta estimación cuenta a las personas en su declaración de impuestos. El tamaño real de su hogar como patrocinador también debe incluir a cada persona que usted patrocina, lo cual puede aumentar el ingreso requerido. Si su resultado está cerca del límite, comuníquese con nuestra oficina antes de tomar una decisión.',
    disclaimerHeading: 'Aviso legal',
    disclaimer: `[La abogada proporcionará el aviso legal final.] Esta calculadora es solo una estimación educativa y no constituye asesoría legal ni crea una relación abogado-cliente. Utiliza el 125% de las Guías de Pobreza del HHS para los 48 estados contiguos y DC, vigentes desde el ${GUIDELINE_EFFECTIVE}. Alaska y Hawái usan cifras más altas, y los miembros en servicio activo de las Fuerzas Armadas de EE. UU. que patrocinan a un cónyuge o hijo pueden usar la columna del 100%. El tamaño real de su hogar para el I-864 debe incluir a los inmigrantes que patrocina. Consulte con un abogado sobre su situación específica.`,
  },
};

interface Props {
  lang: Lang;
  /** Firm phone (server-read CONTACT_PHONE passed down, may be empty pre-launch). */
  phone: string;
}

export function I864pCalculator({ lang, phone }: Props) {
  const t = COPY[lang];
  const contactHref = lang === 'es' ? '/es/contact' : '/contact';

  const [selfListed, setSelfListed] = useState(true);
  const [spouseListed, setSpouseListed] = useState(false);
  const [childrenUnder18, setChildrenUnder18] = useState('0');
  const [otherDependents, setOtherDependents] = useState('0');
  const [income, setIncome] = useState('');
  const [result, setResult] = useState<SponsorResult | null>(null);

  function onCalculate(e: React.FormEvent) {
    e.preventDefault();
    setResult(
      computeSponsorResult({
        selfListed,
        spouseListed,
        childrenUnder18: parseInt(childrenUnder18, 10) || 0,
        otherDependents: parseInt(otherDependents, 10) || 0,
        income: parseInt(income.replace(/[^\d]/g, ''), 10) || 0,
      }),
    );
  }

  function onReset() {
    setSelfListed(true);
    setSpouseListed(false);
    setChildrenUnder18('0');
    setOtherDependents('0');
    setIncome('');
    setResult(null);
  }

  const fieldCls =
    'mt-2 w-full rounded border border-warmgray-300 px-3 py-2 text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold';
  const labelCls = 'block text-sm font-semibold text-navy';

  function YesNo({
    value,
    onChange,
    name,
  }: {
    value: boolean;
    onChange: (v: boolean) => void;
    name: string;
  }) {
    return (
      <div className="mt-2 inline-flex rounded border border-warmgray-300 overflow-hidden">
        {[true, false].map((v) => (
          <button
            key={String(v)}
            type="button"
            aria-pressed={value === v}
            onClick={() => onChange(v)}
            className={`px-5 py-2 text-sm font-semibold transition-colors ${
              value === v ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-warmgray'
            }`}
            name={name}
          >
            {v ? t.yes : t.no}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-warmgray-200 shadow-sm p-6 lg:p-8">
      <form onSubmit={onCalculate} className="space-y-6">
        <div>
          <span className={labelCls}>1. {t.q1}</span>
          <YesNo value={selfListed} onChange={setSelfListed} name="selfListed" />
        </div>
        <div>
          <span className={labelCls}>2. {t.q2}</span>
          <YesNo value={spouseListed} onChange={setSpouseListed} name="spouseListed" />
        </div>
        <div>
          <label className={labelCls} htmlFor="childrenUnder18">
            3. {t.q3}
          </label>
          <input
            id="childrenUnder18"
            type="number"
            min="0"
            inputMode="numeric"
            value={childrenUnder18}
            onChange={(e) => setChildrenUnder18(e.target.value)}
            className={fieldCls}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="otherDependents">
            4. {t.q4}
          </label>
          <input
            id="otherDependents"
            type="number"
            min="0"
            inputMode="numeric"
            value={otherDependents}
            onChange={(e) => setOtherDependents(e.target.value)}
            className={fieldCls}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="income">
            5. {t.q5}
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/60">
              $
            </span>
            <input
              id="income"
              type="text"
              inputMode="numeric"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="0"
              className={`${fieldCls} pl-7`}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button type="submit">{t.calculate}</Button>
          {result && (
            <button
              type="button"
              onClick={onReset}
              className="text-sm font-semibold text-navy underline underline-offset-2 hover:text-gold"
            >
              {t.reset}
            </button>
          )}
        </div>
      </form>

      {result && (
        <div
          className={`mt-8 rounded-lg border-2 p-6 ${
            result.qualifies ? 'border-forest-green bg-forest-green/5' : 'border-crimson bg-crimson/5'
          }`}
          role="status"
          aria-live="polite"
        >
          <p className="font-serif text-lg font-bold text-navy">
            {result.qualifies ? t.pass : t.fail}
          </p>
          <dl className="mt-4 grid gap-2 text-sm text-charcoal/80 sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-navy">{t.resultHouseholdLabel}</dt>
              <dd>{result.householdSize}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">{t.resultThresholdLabel}</dt>
              <dd>{formatUsd(result.threshold)}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">{t.resultIncomeLabel}</dt>
              <dd>{formatUsd(parseInt(income.replace(/[^\d]/g, ''), 10) || 0)}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-charcoal/70 leading-relaxed">{t.immigrantNote}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            {phoneEnabled(phone) ? (
              <Button href={telHref(phone)}>
                {t.callCta} &ndash; {phone}
              </Button>
            ) : (
              <Button href={contactHref}>{t.callCta}</Button>
            )}
            <Button href={contactHref} variant="ghost">
              {t.messageCta}
            </Button>
          </div>
        </div>
      )}

      <div className="mt-8 border-t border-warmgray-200 pt-5">
        <h4 className="text-xs font-bold uppercase tracking-wide text-charcoal/60">
          {t.disclaimerHeading}
        </h4>
        <p className="mt-2 text-xs text-charcoal/60 leading-relaxed">{t.disclaimer}</p>
      </div>
    </div>
  );
}
