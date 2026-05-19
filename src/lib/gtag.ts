export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? '';

/**
 * Fire a GA4 custom event. Safe to call when gtag is not loaded
 * (e.g. ad blockers, dev without GA4_ID set).
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}
