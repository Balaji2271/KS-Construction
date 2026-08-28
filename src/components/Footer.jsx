import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../data/site';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="bg-ink pb-24 text-white lg:pb-0">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Logo variant="light" className="h-14" />
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-white/80">
            Building Dreams. Creating Spaces.
          </p>
          <p className="mt-3 text-white/70">
            Quality construction solutions designed around your vision, requirements and budget.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.2em] text-gold">NAVIGATION</h2>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-lg text-white/85 transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.2em] text-gold">CONTACT</h2>
          <a
            href={COMPANY.phoneTel}
            className="mt-5 flex min-h-12 items-center gap-3 text-lg font-semibold text-white hover:text-gold"
          >
            <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
            {COMPANY.phoneDisplay}
          </a>
          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex min-h-12 items-center text-lg text-white/85 hover:text-gold"
          >
            WhatsApp
          </a>
          <Link to="/contact" className="mt-2 block min-h-12 text-lg text-white/85 hover:text-gold">
            Get a Quote
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-site py-6 text-sm text-white/60">
          © 2026 KS Construction. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
