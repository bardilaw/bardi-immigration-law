import Link from 'next/link';

/**
 * Header logo lockup: flame mark + "BARDI" wordmark with the "Immigration Law"
 * subheading set inline beside it (BAR-617 round 2: larger mark, readable
 * subheading moved to the side rather than stacked below the wordmark).
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 lg:gap-3 focus-visible:outline-none ${className}`}
      aria-label="Bardi Immigration Law, home"
    >
      <img
        src="/logo-bardi-mark.png"
        alt=""
        aria-hidden="true"
        width={32}
        height={56}
        className="h-11 lg:h-14 w-auto object-contain"
      />
      <span className="flex items-center gap-2">
        <span className="font-sans font-extrabold text-navy text-2xl lg:text-3xl tracking-[0.04em] leading-none">
          BARDI
        </span>
        <span className="hidden sm:inline-block w-px self-stretch bg-gold/50" aria-hidden="true" />
        <span className="font-sans text-gold-600 text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] leading-none">
          Immigration Law
        </span>
      </span>
    </Link>
  );
}
