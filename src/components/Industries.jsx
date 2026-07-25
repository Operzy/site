import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { useReveal } from '../lib/reveal';
import { useSeo, SITE_URL } from '../lib/seo';
import { INDUSTRY_LINKS } from '../lib/industries';

const CONTACT_EMAIL = 'contact@operzy.com';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Industries, Operzy AI & Automation',
  url: `${SITE_URL}/industries`,
  hasPart: INDUSTRY_LINKS.map((i) => ({
    '@type': 'WebPage',
    name: `AI Automation for ${i.name}`,
    url: `${SITE_URL}${i.href}`,
  })),
};

export default function Industries() {
  const scope = useReveal();

  useSeo({
    title: 'Industries We Work In, AI Automation by Sector | Operzy',
    description:
      'Operzy builds AI and automation systems tailored to your sector, healthcare, legal, finance, agencies and consulting, connected to the tools you already use, with a human in control.',
    path: '/industries',
    jsonLd: JSON_LD,
  });

  return (
    <div ref={scope}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line bg-canvas">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="grid-faint absolute inset-0 opacity-40" />
          <div className="bloom absolute -top-[35%] left-1/2 h-[720px] w-[1100px] -translate-x-1/2" />
        </div>

        <div className="shell relative py-24 lg:py-32">
          <div data-reveal className="mb-6 flex items-center gap-3">
            <span className="h-px w-6 bg-mint/50" />
            <span className="kicker">Industries</span>
          </div>

          <h1
            data-reveal
            className="max-w-3xl font-display text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.034em] text-text"
          >
            The same engine, tuned to{' '}
            <span className="text-gradient-mint">the work you actually do.</span>
          </h1>

          <p data-reveal className="mt-7 max-w-2xl text-[16.5px] leading-[1.8] text-text-muted">
            The processes that eat your team's time look different in a clinic than they do in a law
            firm or a trading desk, but the way they get automated is the same discipline every
            time. Pick your sector to see the workflows we take on, and how we handle the compliance
            that comes with it.
          </p>

          <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/book" className="btn-mint">
              Book a call <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-outline">
              <Mail className="h-3.5 w-3.5" /> {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* ── Sector grid ──────────────────────────────────────── */}
      <section className="relative bg-canvas">
        <div className="shell py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {INDUSTRY_LINKS.map((i) => (
              <Link
                key={i.slug}
                to={i.href}
                data-reveal
                className="group relative overflow-hidden rounded-lg border border-line bg-surface p-8 transition-colors duration-500 hover:border-line-strong lg:p-10"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-mint/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-6">
                  <div>
                    <h2 className="font-display text-[22px] font-medium tracking-[-0.02em] text-text">
                      {i.name}
                    </h2>
                    <p className="mt-3 max-w-sm text-[14.5px] leading-[1.7] text-text-muted">
                      {i.blurb}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-mint">
                      See {i.name.toLowerCase()} workflows
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-text-dim transition-colors group-hover:text-mint" />
                </div>
              </Link>
            ))}
          </div>

          <p data-reveal className="mx-auto mt-12 max-w-2xl text-center text-[14px] leading-[1.75] text-text-dim">
            Not on the list? The approach is sector-agnostic, if your team is drowning in a
            repetitive, high-volume process, it is worth a conversation whatever industry you are in.
          </p>
        </div>
      </section>
    </div>
  );
}
