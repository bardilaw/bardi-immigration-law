import Link from 'next/link';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex flex-col leading-none focus-visible:outline-none ${className}`} aria-label="Bardi Immigration Law — home">
      <span className="font-serif font-bold text-xl tracking-wide text-navy">BARDI</span>
      <span
        className="font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-navy border-t border-gold mt-0.5 pt-0.5"
      >
        Immigration Law
      </span>
    </Link>
  );
}
