import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from './Button';

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-site mx-auto px-5 lg:px-8 py-12">
        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1 — Services */}
          <div>
            <h3 className="text-gold text-xs font-semibold font-sans uppercase tracking-widest mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/services/benefits-based-immigration" className="hover:text-gold transition-colors">Benefits-Based Immigration</Link></li>
              <li><Link href="/services/removal-defense" className="hover:text-gold transition-colors">Removal Defense</Link></li>
              <li><Link href="/services/federal-litigation" className="hover:text-gold transition-colors">Federal Litigation</Link></li>
            </ul>
          </div>

          {/* Col 2 — Firm */}
          <div>
            <h3 className="text-gold text-xs font-semibold font-sans uppercase tracking-widest mb-3">Firm</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/resources" className="hover:text-gold transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <h3 className="text-gold text-xs font-semibold font-sans uppercase tracking-widest mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-gold text-xs font-semibold font-sans uppercase tracking-widest mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80 mb-4">
              <li>
                <a href="tel:+1" className="hover:text-gold transition-colors">[Phone — TBD]</a>
              </li>
              <li>
                <a href="mailto:info@bardilaw.com" className="hover:text-gold transition-colors">info@bardilaw.com</a>
              </li>
            </ul>
            <Button href="/contact" variant="primary" size="sm">
              Schedule a Consultation
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
