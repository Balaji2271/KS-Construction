import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { COMPANY, NAV_LINKS } from '../data/site';
import Logo from './Logo.jsx';
import Button from './Button.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const reduce = useReducedMotion();
  const darkHero = !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-black/5 bg-white/97 shadow-nav backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site flex h-[76px] items-center justify-between lg:h-[88px]">
        <Link to="/" aria-label="KS Construction home" className="relative z-10 shrink-0">
          <Logo variant={darkHero && !open ? 'light' : 'dark'} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[15px] font-semibold tracking-wide transition ${
                  isActive
                    ? 'text-gold'
                    : darkHero
                      ? 'text-white hover:text-gold-light'
                      : 'text-ink hover:text-gold'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={COMPANY.phoneTel}
            className={`inline-flex min-h-12 items-center gap-2 text-[15px] font-semibold ${
              darkHero ? 'text-white' : 'text-ink'
            }`}
          >
            <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
            {COMPANY.phoneDisplay}
          </a>
          <Button to="/contact" className="relative z-10 uppercase tracking-[0.12em]">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex h-12 w-12 items-center justify-center rounded-sm lg:hidden ${
            darkHero && !open ? 'text-white' : 'text-ink'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
          >
            <nav className="container-site flex flex-col py-4" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center border-b border-mist text-lg font-semibold ${
                      isActive ? 'text-gold' : 'text-ink'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={COMPANY.phoneTel}
                className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-sm bg-ink text-base font-semibold text-white"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now {COMPANY.phoneDisplay}
              </a>
              <Button to="/contact" className="mt-3 w-full uppercase tracking-[0.12em]">
                Get a Quote
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
