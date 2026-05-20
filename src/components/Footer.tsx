'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Button } from './Button';

export function Footer() {
  const pathname = usePathname();
  const isEs = pathname.startsWith('/es');

  const p = (enPath: string) => (isEs ? `/es${enPath}` : enPath);

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-site mx-auto px-5 lg:px-8 py-12">
        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1 — Services */}
          <div>
            <h3 className="text-gold text-xs font-semibold font-sans uppercase tracking-widest mb-3">
              {isEs ? 'Servicios' : 'Services'}
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href={p('/services/benefits-based-immigration')} className="hover:text-gold transition-colors">{isEs ? 'Inmigración por Beneficios' : 'Benefits-Based Immigration'}</Link></li>
              <li><Link href={p('/services/removal-defense')} className="hover:text-gold transition-colors">{isEs ? 'Defensa contra la Deportación' : 'Removal Defense'}</Link></li>
              <li><Link href={p('/services/federal-litigation')} className="hover:text-gold transition-colors">{isEs ? 'Litigios Federales' : 'Federal Litigation'}</Link></li>
            </ul>
          </div>

          {/* Col 2 — Firm */}
          <div>
            <h3 className="text-gold text-xs font-semibold font-sans uppercase tracking-widest mb-3">
              {isEs ? 'Bufete' : 'Firm'}
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href={p('/about')} className="hover:text-gold transition-colors">{isEs ? 'Sobre Nosotros' : 'About'}</Link></li>
              <li><Link href={p('/resources')} className="hover:text-gold transition-colors">{isEs ? 'Recursos' : 'Resources'}</Link></li>
              <li><Link href={p('/contact')} className="hover:text-gold transition-colors">{isEs ? 'Contacto' : 'Contact'}</Link></li>
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <h3 className="text-gold text-xs font-semibold font-sans uppercase tracking-widest mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">{isEs ? 'Política de Privacidad' : 'Privacy Policy'}</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-colors">{isEs ? 'Términos de Uso' : 'Terms of Use'}</Link></li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-gold text-xs font-semibold font-sans uppercase tracking-widest mb-3">
              {isEs ? 'Contacto' : 'Contact'}
            </h3>
            <ul className="space-y-2 text-sm text-white/80 mb-4">
              <li>
                <a href="tel:+1" className="hover:text-gold transition-colors">[Phone — TBD]</a>
              </li>
              <li>
                <a href="mailto:info@bardilaw.com" className="hover:text-gold transition-colors">info@bardilaw.com</a>
              </li>
            </ul>
            <Button href={p('/contact')} variant="primary" size="sm">
              {isEs ? 'Reserve una Consulta' : 'Schedule a Consultation'}
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Logo className="brightness-0 invert" />
          <p className="text-xs text-white/50 text-center">
            © {new Date().getFullYear()} Bardi Immigration Law. All rights reserved.<br />
            <span>AILA Chapter Chair, Georgia-Alabama 2025–26</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
