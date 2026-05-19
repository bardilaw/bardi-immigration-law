'use client';

import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-b border-warmgray-200 last:border-b-0">
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-sans font-semibold text-sm text-navy">{item.q}</span>
            <svg
              className={`w-5 h-5 text-navy flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${open === i ? 'max-h-96 pb-5' : 'max-h-0'}`}
          >
            <p className="font-sans text-sm text-charcoal leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
