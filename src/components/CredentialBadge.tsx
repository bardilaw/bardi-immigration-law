export function CredentialBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-sm font-semibold font-sans text-navy border border-gold rounded-full px-3 py-1 ${className}`}
    >
      <span className="text-gold" aria-hidden="true">★</span>
      AILA Chapter Chair, 2025–26
    </span>
  );
}
