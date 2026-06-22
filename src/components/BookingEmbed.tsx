'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { trackEvent } from '@/lib/gtag';

type BookingEmbedProps = {
  /** Cal.com booking slug, e.g. "eszter/30-min-consultation" (not a full URL). */
  calLink: string;
  /** Cal embed namespace, keep distinct per event type (e.g. "consult-en"). */
  namespace: string;
  /** UI locale for the Cal.com booking widget. */
  locale?: 'en' | 'es';
};

/**
 * Inline Cal.com booking widget (BAR-580).
 *
 * Loads the official Cal.com embed, renders the 30-minute consultation calendar
 * inline, and fires a GA4 `consultation_booked` conversion event when a visitor
 * completes a booking. Render this only when a slug is configured
 * (see `src/lib/booking.ts`); the `/contact` email form stays below as a
 * callback fallback for visitors who prefer not to self-schedule.
 */
export function BookingEmbed({ calLink, namespace, locale = 'en' }: BookingEmbedProps) {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cal = await getCalApi({ namespace });
      if (cancelled) return;
      // Light theme + month view to match the site; ui call also sets booking locale.
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#0a2540' },
          dark: { 'cal-brand': '#0a2540' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
      // Fire a GA4 conversion when a booking is confirmed.
      cal('on', {
        action: 'bookingSuccessful',
        callback: () => {
          trackEvent('consultation_booked', { cal_link: calLink, locale });
        },
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [calLink, namespace, locale]);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      config={{ layout: 'month_view', theme: 'light' }}
    />
  );
}
