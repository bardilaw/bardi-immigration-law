'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/gtag';

type CalendlyMessageData = {
  event: string;
  payload?: {
    event_type?: { name?: string };
  };
};

/**
 * Drop this component into layout.tsx (inside <body>) once Calendly is live.
 * It listens for the Calendly postMessage and fires a GA4 conversion event.
 * Renders nothing — tracking only.
 */
export function CalendlyTracker() {
  useEffect(() => {
    function onMessage(e: MessageEvent<CalendlyMessageData>) {
      if (e.data?.event === 'calendly.event_scheduled') {
        trackEvent('calendly_booking', {
          event_type: e.data.payload?.event_type?.name ?? 'consultation',
        });
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return null;
}
