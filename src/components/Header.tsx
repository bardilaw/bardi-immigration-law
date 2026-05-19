'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from './Button';

const SERVICES = [
  { label: 'Benefits-Based Immigration', href: '/services/benefits-based-immigration' },
  { label: 'Removal Defense', href: '/services/removal-defense' },
  { label: 'Federal Litigation', href: '/services/federal-litigation' },
];

export function Header() {
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
          <Link href="/" className={navLink}>Home</Link>

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className={`${navLink} flex items-center gap-1`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
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
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded shadow-lg border border-warmgray-200 py-1 z-50">
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

          <Link href="/about" className={navLink}>About</Link>
          <Link href="/resources" className={navLink}>Resources</Link>
          <Link href="/contact" className={navLink}>Contact</Link>
          <span className="text-warmgray-400 text-xs font-sans ml-2">EN | ES</span>
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
          <Link href="/" className="text-navy font-semibold" onClick={() => setMenuOpen(false)}>Home</Link>
          <div>
            <button
              className="text-navy font-semibold flex items-center gap-1 w-full text-left"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <svg className={`w-3 h-3 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
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
          <Link href="/about" className="text-navy font-semibold" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/resources" className="text-navy font-semibold" onClick={() => setMenuOpen(false)}>Resources</Link>
          <Link href="/contact" className="text-navy font-semibold" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="flex items-center gap-3 pt-2 border-t border-warmgray-200">
            <Button href="/contact" size="md" className="w-full justify-center" onClick={() => setMenuOpen(false)}>
              Book a Consultation
            </Button>
          </div>
          <span className="text-xs text-warmgray-500 font-sans">EN | ES</span>
        </div>
      )}
    </header>
  );
}
