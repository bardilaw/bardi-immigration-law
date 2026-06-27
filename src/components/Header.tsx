'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Button } from './Button';
import { SiteSearch } from './SiteSearch';
import { telHref } from '@/lib/contact';

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

// Inline SVG flags — render identically across OSes (flag emoji fall back to
// letter pairs on Windows). Decorative; the link carries the accessible label.
function FlagMx({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 3 2" className={className} aria-hidden="true" focusable="false">
      <rect width="1" height="2" x="0" fill="#006847" />
      <rect width="1" height="2" x="1" fill="#fff" />
      <rect width="1" height="2" x="2" fill="#ce1126" />
    </svg>
  );
}

function FlagUs({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 19 10" className={className} aria-hidden="true" focusable="false">
      <rect width="19" height="10" fill="#fff" />
      {[0, 2, 4, 6, 8].map((y) => (
        <rect key={y} width="19" height="1" y={y} fill="#b22234" />
      ))}
      <rect width="9" height="6" fill="#3c3b6e" />
    </svg>
  );
}

// Row 3/4 (BAR-697): contextual language invite — show the OTHER language with
// its flag + native-language label, so each page invites the alternate audience.
function LanguageToggle({
  isEs,
  enPath,
  esPath,
  onNavigate,
  variant = 'desktop',
}: {
  isEs: boolean;
  enPath: string;
  esPath: string;
  onNavigate?: () => void;
  variant?: 'desktop' | 'mobile';
}) {
  const href = isEs ? enPath : esPath;
  const label = isEs ? 'View in English' : 'Ver en Español';
  const aria = isEs ? 'View this page in English' : 'Ver esta página en español';
  const Flag = isEs ? FlagUs : FlagMx;
  const base =
    'inline-flex items-center gap-2 font-semibold font-sans text-charcoal/80 hover:text-navy transition-colors';
  const size = variant === 'mobile' ? 'text-sm' : 'text-xs';
  return (
    <Link
      href={href}
      hrefLang={isEs ? 'en' : 'es'}
      aria-label={aria}
      className={`${base} ${size}`}
      onClick={onNavigate}
    >
      <Flag className="w-5 h-[14px] rounded-[1px] ring-1 ring-warmgray-300 shrink-0" />
      {label}
    </Link>
  );
}

export function Header({ phone = '' }: { phone?: string }) {
  const pathname = usePathname();
  const isEs = pathname.startsWith('/es');
  const { enPath, esPath } = getAlternatePath(pathname);

  const SERVICES = isEs ? SERVICES_ES : SERVICES_EN;
  const aboutHref = isEs ? '/es/about' : '/about';
  const faqHref = isEs ? '/es/faq' : '/faq';
  const resourcesHref = isEs ? '/es/resources' : '/resources';
  const contactHref = isEs ? '/es/contact' : '/contact';
  const servicesHref = isEs ? '/es/services' : '/services';
  // Confirmed firm number (BAR-81). Shown now so the call CTA is visible in the
  // gated preview; the CONTACT_PHONE env var overrides it at launch.
  const callPhone = phone || '404-804-9432';

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
          {/* Logo is the Home link (feedback #2) — redundant "Home" text link removed. */}

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

          {/* Nav links trimmed to Services / About / Resources / FAQ (feedback #2).
              Blog + Contact remain reachable from the footer. */}
          <Link href={aboutHref} className={navLink}>{isEs ? 'Sobre Nosotros' : 'About'}</Link>
          <Link href={resourcesHref} className={navLink}>{isEs ? 'Recursos' : 'Resources'}</Link>
          <Link href={faqHref} className={navLink}>{isEs ? 'Preguntas' : 'FAQ'}</Link>

          {/* Internal site search — magnifying glass in the header top line (BAR-801,
              BAR-697 row 5) opens a bilingual overlay search (row 9). */}
          <SiteSearch isEs={isEs} />

          {/* Language switcher — contextual flag + native-language invite (BAR-697 rows 3/4) */}
          <div className="ml-2 border border-warmgray-300 rounded-full px-3 py-1">
            <LanguageToggle isEs={isEs} enPath={enPath} esPath={esPath} />
          </div>

          {/* Call Us Today — tap-to-call link (feedback #2). Uses the confirmed firm
              number now; CONTACT_PHONE overrides it at launch (BAR-81). */}
          <a
            href={telHref(callPhone)}
            className="font-sans text-sm font-semibold text-navy hover:text-gold transition-colors whitespace-nowrap"
          >
            {isEs ? `Llámenos Hoy – ${callPhone}` : `Call Us Today – ${callPhone}`}
          </a>

          {/* Primary CTA — always available (feedback #2). "Send Us a Message" removed. */}
          <Button href={contactHref} size="sm">
            {isEs ? 'Solicite una Consulta' : 'Request A Consultation'}
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
          {/* Language switcher + site search — surfaced at top of drawer (BAR-704 m-1;
              BAR-801 row 5). Tapping search closes the drawer via the overlay. */}
          <div className="pb-3 border-b border-warmgray-200 flex items-center justify-between gap-4">
            <LanguageToggle
              isEs={isEs}
              enPath={enPath}
              esPath={esPath}
              variant="mobile"
              onNavigate={() => setMenuOpen(false)}
            />
            <SiteSearch isEs={isEs} variant="mobile" />
          </div>
          {/* Logo is the Home link (feedback #2) — redundant "Home" link removed. */}
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
          <Link href={resourcesHref} className="text-navy font-semibold" onClick={() => setMenuOpen(false)}>
            {isEs ? 'Recursos' : 'Resources'}
          </Link>
          <Link href={faqHref} className="text-navy font-semibold" onClick={() => setMenuOpen(false)}>
            {isEs ? 'Preguntas' : 'FAQ'}
          </Link>

          <div className="pt-2 border-t border-warmgray-200 flex flex-col gap-3">
            {/* Primary CTA — always available (feedback #2). */}
            <Button href={contactHref} size="md" className="w-full justify-center" onClick={() => setMenuOpen(false)}>
              {isEs ? 'Solicite una Consulta' : 'Request A Consultation'}
            </Button>
            {/* Call Us Today — tap-to-call (feedback #2); env var overrides at launch. */}
            <Button href={telHref(callPhone)} size="md" variant="ghost" className="w-full justify-center" onClick={() => setMenuOpen(false)}>
              {isEs ? `Llámenos Hoy – ${callPhone}` : `Call Us Today – ${callPhone}`}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
