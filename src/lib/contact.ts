/**
 * Firm contact details (BAR-679).
 *
 * `CONTACT_PHONE` is the single source of truth for the firm phone number. It is
 * the same server-side env var already consumed by the contact API auto-reply
 * (`src/app/api/contact/route.ts`) and the LegalService schema (`layout.tsx`),
 * set in the Cloudflare/CI environment once the board confirms the number
 * (BAR-81). It is intentionally NOT a `NEXT_PUBLIC_` var: the value is read in
 * server components and passed down to the client `Footer` as a prop, which
 * keeps a single env var as the source of truth and is hydration-safe (the
 * server-rendered prop is serialized into the client bundle).
 *
 * When unset (the pre-launch default), `CONTACT_PHONE` is an empty string and
 * every phone affordance is hidden, so the site stays correct before the number
 * exists.
 */
export const CONTACT_PHONE = (process.env.CONTACT_PHONE ?? '').trim();

/** True when a usable firm phone number is configured. */
export function phoneEnabled(phone: string): boolean {
  return phone.length > 0;
}

/**
 * Build a `tel:` href from a human-formatted phone string, stripping everything
 * except digits and a leading `+` so tap-to-call works regardless of how the
 * env var is formatted (e.g. "(404) 555-0100" -> "tel:4045550100").
 */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, '')}`;
}
