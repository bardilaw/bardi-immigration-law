/**
 * I-864P Sponsor Calculator logic (BAR-697 row 38).
 *
 * Pure data + math for the public "do I meet the minimum income to sponsor?"
 * tool on the Resources page. Kept separate from the React component so the
 * thresholds are trivial to update once a year and the qualification math is
 * unit-testable in isolation.
 *
 * SOURCE OF FIGURES: USCIS Form I-864P, HHS Poverty Guidelines for the
 * Affidavit of Support — 2026 edition, EFFECTIVE MARCH 1, 2026
 * (https://www.uscis.gov/i-864p). Values below are the "48 Contiguous States,
 * DC, Puerto Rico, USVI, Guam, and the Northern Mariana Islands" table, 125%
 * column (the threshold MOST sponsors must meet). Alaska and Hawaii publish
 * higher guidelines and active-duty military sponsors of a spouse/child use the
 * 100% column — both are out of scope of this simplified tool and are called out
 * in the on-page disclaimer.
 *
 * ⚠️ ANNUAL UPDATE: HHS republishes the poverty guidelines every year (USCIS
 * adopts them ~March 1). When that happens, update `GUIDELINE_YEAR`,
 * `GUIDELINE_EFFECTIVE`, the `POVERTY_125` map, and `ADDITIONAL_PERSON_125`.
 */

/** Tax year/edition label shown to users so the figures are dated, not stale. */
export const GUIDELINE_YEAR = 2026;

/** Human-readable effective date of the active I-864P guidelines. */
export const GUIDELINE_EFFECTIVE = 'March 1, 2026';

/**
 * 125% of the HHS Poverty Guidelines by household size — 48 contiguous states &
 * DC (and the listed territories). The official I-864P table starts at a
 * household of 2 because a sponsorship always includes at least the sponsor and
 * one intending immigrant.
 */
export const POVERTY_125: Record<number, number> = {
  2: 27050,
  3: 34150,
  4: 41250,
  5: 48350,
  6: 55450,
  7: 62550,
  8: 69650,
};

/** Amount added to the 125% threshold for each person beyond 8. */
export const ADDITIONAL_PERSON_125 = 7100;

/** Smallest household size the official I-864P table defines. */
const MIN_HOUSEHOLD = 2;
const MAX_TABLE_HOUSEHOLD = 8;

/**
 * Return the 125% minimum-income threshold for a given household size.
 * Sizes below the table minimum fall back to the size-2 figure (any sponsorship
 * involves at least 2 people); sizes above 8 extend the table by the published
 * per-person increment.
 */
export function thresholdForHousehold(size: number): number {
  const clamped = Math.max(MIN_HOUSEHOLD, Math.floor(size));
  if (clamped <= MAX_TABLE_HOUSEHOLD) {
    return POVERTY_125[clamped];
  }
  return (
    POVERTY_125[MAX_TABLE_HOUSEHOLD] +
    (clamped - MAX_TABLE_HOUSEHOLD) * ADDITIONAL_PERSON_125
  );
}

/** Raw inputs from the five questions in the on-page form. */
export interface SponsorAnswers {
  /** Q1: sponsor listed on their most recent U.S. tax return. */
  selfListed: boolean;
  /** Q2: spouse listed on that return. */
  spouseListed: boolean;
  /** Q3: children under 18 listed on that return. */
  childrenUnder18: number;
  /** Q4: other dependents (not spouse/children) listed on that return. */
  otherDependents: number;
  /** Q5: total income declared on that return, in whole dollars. */
  income: number;
}

export interface SponsorResult {
  /** Sum of questions 1–4 (the people counted on the tax return). */
  householdSize: number;
  /** 125% minimum income required for that household size. */
  threshold: number;
  /** True when declared income meets or exceeds the threshold. */
  qualifies: boolean;
}

/**
 * Compute household size and pass/fail per the client-specified formula:
 * householdSize = Q1 + Q2 + Q3 + Q4, compared against the 125% guideline.
 *
 * NOTE (flagged to the firm): this count reflects the people on the sponsor's
 * tax return and does NOT add the intending immigrant(s) being sponsored, who
 * must also be included in the true I-864 household size. Borderline results
 * should always be confirmed with the firm — surfaced in the on-page result and
 * disclaimer.
 */
export function computeSponsorResult(a: SponsorAnswers): SponsorResult {
  const householdSize =
    (a.selfListed ? 1 : 0) +
    (a.spouseListed ? 1 : 0) +
    Math.max(0, Math.floor(a.childrenUnder18 || 0)) +
    Math.max(0, Math.floor(a.otherDependents || 0));

  const threshold = thresholdForHousehold(householdSize);
  const qualifies = (a.income || 0) >= threshold;

  return { householdSize, threshold, qualifies };
}

/** Format a whole-dollar amount as e.g. "$41,250". */
export function formatUsd(n: number): string {
  return `$${Math.round(n).toLocaleString('en-US')}`;
}
