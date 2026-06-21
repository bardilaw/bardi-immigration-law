import Link from 'next/link';

export function Logo({
  className = '',
  variant = 'horizontal',
}: {
  className?: string;
  variant?: 'horizontal' | 'circle';
}) {
  const src = variant === 'circle' ? '/logo-bardi-circle.png' : '/logo-bardi.png';
  return (
    <Link
      href="/"
      className={`inline-flex items-center focus-visible:outline-none ${className}`}
      aria-label="Bardi Immigration Law — home"
    >
      <img
        src={src}
        alt="Bardi Immigration Law"
        className={variant === 'circle' ? 'h-12 w-12 object-contain' : 'h-9 lg:h-10 w-auto object-contain'}
      />
    </Link>
  );
}
