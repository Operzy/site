import React from 'react';
import { Link } from 'react-router-dom';
import { Wordmark, useSectionHref } from './Nav';
import { INDUSTRY_LINKS } from '../lib/industries';
import { SERVICE_LINKS } from '../lib/services';

const COLUMNS = [
  {
    title: 'Operzy',
    links: [
      ['What we do', '#capabilities'],
      ['How we build', '#architecture'],
      ['Process', '#engagement'],
      ['Results', '#results'],
      ['Team', '/team'],
    ],
  },
  {
    title: 'Services',
    links: SERVICE_LINKS.map((s) => [s.name, s.href]),
  },
  {
    title: 'Industries',
    links: [
      ['All industries', '/industries'],
      ...INDUSTRY_LINKS.map((i) => [i.name, i.href]),
    ],
  },
  {
    title: 'Contact',
    links: [
      ['Book a call', '/book'],
      ['contact@operzy.com', 'mailto:contact@operzy.com'],
      ['LinkedIn', 'https://www.linkedin.com/in/jacobmamrak/'],
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const sectionHref = useSectionHref();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark />
            <p className="mt-6 max-w-xs text-[14px] leading-[1.75] text-text-muted">
              An AI and automation studio. We build the systems that take the busywork off your
              team's plate.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="kicker mb-6">{col.title}</h4>
              <ul className="space-y-3.5">
                {col.links.map(([label, href]) => {
                  const cls =
                    'text-[13.5px] text-text-muted transition-colors duration-200 hover:text-mint';
                  return (
                    <li key={label}>
                      {href.startsWith('/') && !href.startsWith('//') ? (
                        <Link to={href} className={cls}>
                          {label}
                        </Link>
                      ) : (
                        <a href={sectionHref(href)} className={cls}>
                          {label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] tracking-[0.04em] text-text-dim">
            © {year} Operzy. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-mono text-[11px] text-text-dim transition-colors hover:text-text-muted"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-mono text-[11px] text-text-dim transition-colors hover:text-text-muted"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
