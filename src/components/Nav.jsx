import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { INDUSTRY_LINKS } from '../lib/industries';
import { SERVICE_LINKS } from '../lib/services';

// Dropdown menus keyed by id. `index` is an optional "All …" row linking to a
// landing page (industries has one; services does not, yet).
const DROPDOWNS = {
  services: {
    label: 'Services',
    items: SERVICE_LINKS,
    index: null,
    activePrefix: '/services',
  },
  industries: {
    label: 'Industries',
    items: INDUSTRY_LINKS,
    index: {
      href: '/industries',
      name: 'All industries',
      blurb: 'How the same engine adapts to each sector.',
    },
    activePrefix: '/industries',
  },
};

const LINKS = [
  { label: 'What we do', href: '#capabilities' },
  { label: 'How we build', href: '#architecture' },
  { label: 'Services', dropdown: 'services' },
  { label: 'Industries', dropdown: 'industries' },
  { label: 'Results', href: '#results' },
  { label: 'Team', href: '/team', route: true },
];

/**
 * Section anchors live on the home page. From any other route they have to be
 * prefixed so the browser navigates home first, then scrolls.
 */
export function useSectionHref() {
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  return (href) => (href.startsWith('#') && !onHome ? `/${href}` : href);
}

export function Wordmark() {
  return (
    <Link
      to="/"
      className="flex items-center opacity-95 transition-opacity duration-200 hover:opacity-100"
      aria-label="Operzy, home"
    >
      <Logo height={26} />
    </Link>
  );
}

/** Desktop-only dropdown. Opens on hover and on focus/keyboard. */
function NavDropdown({ config, active }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef();

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onFocus={openNow}
        className={`flex items-center gap-1 text-[13.5px] font-medium transition-colors duration-200 hover:text-text ${
          active ? 'text-text' : 'text-text-muted'
        }`}
      >
        {config.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          className="absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-3"
          onMouseEnter={openNow}
          onMouseLeave={closeSoon}
        >
          <div className="max-h-[76vh] overflow-y-auto rounded-lg border border-line bg-surface/95 p-2 shadow-card backdrop-blur-xl">
            {config.index && (
              <>
                <Link
                  to={config.index.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 transition-colors hover:bg-surface-2"
                >
                  <span className="text-[13.5px] font-medium text-text">{config.index.name}</span>
                  <p className="mt-0.5 text-[12px] leading-snug text-text-dim">
                    {config.index.blurb}
                  </p>
                </Link>
                <div className="my-1 h-px bg-line" />
              </>
            )}
            {config.items.map((i) => (
              <Link
                key={i.slug}
                to={i.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 transition-colors hover:bg-surface-2"
              >
                <span className="text-[13.5px] font-medium text-text">{i.name}</span>
                <p className="mt-0.5 text-[12px] leading-snug text-text-dim">{i.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sectionHref = useSectionHref();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open || pathname !== '/';

  const renderLink = (l, className) =>
    l.route ? (
      <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className={className}>
        {l.label}
      </Link>
    ) : (
      <a key={l.href} href={sectionHref(l.href)} onClick={() => setOpen(false)} className={className}>
        {l.label}
      </a>
    );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-line bg-canvas/80 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between">
        <Wordmark />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {LINKS.map((l) =>
            l.dropdown ? (
              <NavDropdown
                key={l.dropdown}
                config={DROPDOWNS[l.dropdown]}
                active={pathname.startsWith(DROPDOWNS[l.dropdown].activePrefix)}
              />
            ) : (
              renderLink(
                l,
                `text-[13.5px] font-medium transition-colors duration-200 hover:text-text ${
                  l.route && pathname === l.href ? 'text-text' : 'text-text-muted'
                }`
              )
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="btn-light hidden py-2.5 text-[12.5px] uppercase tracking-[0.06em] sm:inline-flex"
          >
            Book a call <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-text lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-canvas lg:hidden">
          <nav className="shell flex flex-col py-2" aria-label="Mobile">
            {LINKS.map((l) => {
              if (!l.dropdown) {
                return renderLink(
                  l,
                  'border-b border-line py-4 font-display text-[17px] text-text last:border-0'
                );
              }
              const d = DROPDOWNS[l.dropdown];
              return (
                <div key={l.dropdown} className="border-b border-line py-4">
                  {d.index ? (
                    <Link
                      to={d.index.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-[17px] text-text"
                    >
                      {d.label}
                    </Link>
                  ) : (
                    <span className="font-display text-[17px] text-text">{d.label}</span>
                  )}
                  <div className="mt-3 flex flex-col gap-2 pl-4">
                    {d.items.map((i) => (
                      <Link
                        key={i.slug}
                        to={i.href}
                        onClick={() => setOpen(false)}
                        className="text-[14.5px] text-text-muted transition-colors hover:text-mint"
                      >
                        {i.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
            <Link to="/book" onClick={() => setOpen(false)} className="btn-mint my-5">
              Book a call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
