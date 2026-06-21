/**
 * Cal.com booking configuration (BAR-580).
 *
 * The booking links are sourced from build-time public env vars so the embed
 * can go live with a config change alone, no code edit, once the attorney has
 * created the Cal.com account and event types (see
 * `deliverables/booking-tool-recommendation.md`).
 *
 * Value format: the Cal.com booking *slug* only, e.g. `eszter/30-min-consultation`
 *, NOT the full `https://cal.com/...` URL.
 *
 * When a link is unset (the pre-launch default), the matching contact page
 * renders the email callback form alone, so the site stays correct before the
 * Cal.com account exists.
 */
export const CAL_LINK_EN = (process.env.NEXT_PUBLIC_CAL_LINK_EN ?? '').trim();
export const CAL_LINK_ES = (process.env.NEXT_PUBLIC_CAL_LINK_ES ?? '').trim();

/** True when a usable Cal.com slug is configured for the given link. */
export function bookingEnabled(link: string): boolean {
  return link.length > 0;
}
