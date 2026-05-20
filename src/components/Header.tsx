'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Button } from './Button';

const SERVICES_EN = [
  { label: 'Benefits-Based Immigration', href: '/services/benefits-based-immigration' },
  { label: 'DACA', href: '/services/daca' },
  { label: 'SIJS', href: '/services/sijs' },
  { label: 'VAWA', href: '/services/vawa' },
  { label: 'U-Visa', href: '/services/u-visa' },
  { label: 'TPS', href: '/services/tps' },
  { label: 'Family-Based Immigration', href: '/services/family-based-immigration' },
  { label: 'Waivers', href: '/services/waivers' },
  { label: 'Removal Defense', href: '/services/removal-defense' },
  { label: 'Federal Litigation', href: '/services/federal-litigation' },
];

const SERVICES_ES = [
  { label: 'Inmigración por Beneficios', href: '/es/services/benefits-based-immigration' },
  { label: 'DACA', href: '/es/services/daca' },
  { label: 'SIJS', href: '/es/services/sijs' },
  { label: 'VAWA', href: '/es/services/vawa' },
  { label: 'Visa U', href: '/es/services/u-visa' },
  { label: 'TPS', href: '/es/services/tps' },
  { label: 'Inmigración Familiar', href: '/es/services/family-based-immigration' },
  { label: 'Renuncias (Waivers)', href: '/es/services/waivers' },
  { label: 'Defensa contra la Deportación', href: '/es/services/removal-defense' },
  { label: 'Litigios Federales', href: '/es/services/federal-litigation' },
];

function getAlternatePath(pathname: string): { enPath: string; esPath: string } {
  const isEs = pathname.startsWith('/es');
  if (isEs) {
    const enPath = pathname.replace(/^\/es/, '') || '/';
    return { enPath, esPath: pathname };
  }
  const esPath = pathname === '/' ? '/es' : `/es${pathname}`;
  return { enPath: pathname, esPath };
}

export function Header() {
  const pathname = usePathname();
  const isEs = pathname.startsWith('/es');
  const { enPath, esPath } = getAlternatePath(pathname);

  const SERVICES = isEs ? SERVICES_ES : SERVICES_EN;
  const homeHref = isEs ? '/es' : '/';
  const aboutHref = isEs ? '/es/about' : '/about';
  const contactHref = isEs ? '/es/contact' : '/contact';
  const servicesHref = isEs ? '/es/services' : '/services';

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const navLink = 'font-sans text-sm font-semibold text-navy hover:text-gold transition-colors';

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className="max-w-site mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          <Link href={homeHref} className={navLink}>{isEs ? 'Inicio' : 'Home'}</Link>

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className={`${navLink} flex items-center gap-1`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              {isEs ? 'Servicios' : 'Services'}
              <svg
                className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded shadow-lg border border-warmgray-200 py-1 z-50">
                <Link
                  href={servicesHref}
                  className="block px-4 py-2 text-xs font-semibold text-charcoal/60 hover:bg-warmgray hover:text-gold transition-colors uppercase tracking-wide"
                  onClick={() => setServicesOpen(false)}
                >
                  {isEs ? 'Ver todos los servicios' : 'All Services'}
                </Link>
                <div className="border-t border-warmgray-200 my-1" />
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm text-navy hover:bg-warmgray hover:text-gold transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={aboutHref} className={navLink}>{isEs ? 'Sobre Nosotros' : 'About'}</Link>
          <Link href={contactHref} className={navLink}>{isEs ? 'Contacto' : 'Contact'}</Link>

          {/* Language switcher */}
          <div className="flex items-center gap-1 ml-2 border border-warmgray-300 rounded-full px-2 py-0.5 text-xs font-semibold font-sans">
            <Link
              href={enPath}
              aria-current={!isEs ? 'page' : undefined}
              className={`px-1.5 py-0.5 rounded-full transition-colors ${!isEs ? 'bg-navy text-white' : 'text-charcoal/60 hover:text-navy'}`}
            >
              EN
            </Link>
            <span className="text-warmgray-400" aria-hidden="true">|</span>
            <Link
              href={esPath}
              aria-current={isEs ? 'page' : undefined}
              className={`px-1.5 py-0.5 rounded-full transition-colors ${isEs ? 'bg-navy text-white' : 'text-charcoal/60 hover:text-navy'}`}
            >
              ES
            </Link>
          </div>

          <Button href={contactHref} size="sm">
            {isEs ? 'Reserve una Consulta' : 'Book a Consultation'}
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-navy"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-warmgray-200 px-5 pb-6 pt-4 flex flex-col gap-4">
          <Link href={homeHref} className="text-navy font-semibold" onClick={() => setMenuOpen(false)}>
            {isEs ? 'Inicio' : 'Home'}
          </Link>
          <div>
            <button
              className="text-navy font-semibold flex items-center gap-1 w-full text-left"
              onClick={() => setServicesOpen((v) => !v)}
            >
              {isEs ? 'Servicios' : 'Services'}
              <svg className={`w-3 h-3 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link
                  href={servicesHref}
                  className="text-xs font-semibold text-gold"
                  onClick={() => { setServicesOpen(false); setMenuOpen(false); }}
                >
                  {isEs ? 'Ver todos' : 'All Services'}
                </Link>
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="text-sm text-navy hover:text-gold"
                    onClick={() => { setServicesOpen(false); setMenuOpen(false); }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href={aboutHref} className="text-navy font-semibold" onClick={() => setMenuOpen(false)}>
            {isEs ? 'Sobre Nosotros' : 'About'}
          </Link>
          <Link href={contactHref} className="text-navy font-semibold" onClick={() => setMenuOpen(false)}>
            {isEs ? 'Contacto' : 'Contact'}
          </Link>

          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 text-sm font-semibold font-sans pt-1">
            <Link
              href={enPath}
              className={`px-3 py-1 rounded-full border ${!isEs ? 'bg-navy text-white border-navy' : 'text-charcoal/60 border-warmgray-300'}`}
              onClick={() => setMenuOpen(false)}
            >
              EN
            </Link>
            <Link
              href={esPath}
              className={`px-3 py-1 rounded-full border ${isEs ? 'bg-navy text-white border-navy' : 'text-charcoal/60 border-warmgray-300'}`}
              onClick={() => setMenuOpen(false)}
            >
              ES
            </Link>
          </div>

          <div className="pt-2 border-t border-warmgray-200">
            <Button href={contactHref} size="md" className="w-full justify-center" onClick={() => setMenuOpen(false)}>
              {isEs ? 'Reserve una Consulta' : 'Book a Consultation'}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
