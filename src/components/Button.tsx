'use client';

import Link from 'next/link';

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  children: React.ReactNode;
};

const BASE =
  'inline-flex items-center justify-center font-sans font-semibold rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none';

const VARIANTS = {
  primary:
    'bg-gold text-navy hover:bg-gold-500 active:bg-gold-600',
  ghost:
    'border-2 border-navy text-navy hover:bg-navy hover:text-white active:bg-navy-600',
};

const SIZES = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-6 py-3',
  lg: 'text-lg px-8 py-4',
};

export function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  children,
}: ButtonProps) {
  const cls = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
