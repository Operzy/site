import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, Mail, ArrowUpRight, Check } from 'lucide-react';
import SectionHead from './SectionHead';
import { useReveal } from '../lib/reveal';
import { useSeo, SITE_URL } from '../lib/seo';
import { getService } from '../lib/services';
import { SERVICE_LINKS } from '../lib/services';

const CONTACT_EMAIL = 'contact@operzy.com';

function buildJsonLd(service, path) {
  const url = SITE_URL + path;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      serviceType: service.name,
      description: service.seo.description,
      url,
      areaServed: 'US',
      provider: { '@type': 'Organization', name: 'Operzy', url: SITE_URL },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: service.name, item: url },
      ],
    },
  ];
}

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);
  const scope = useReveal();

  // Hooks must run unconditionally; build SEO args defensively and bail after.
  const path = service ? `/services/${service.slug}` : undefined;
  useSeo(
    service
      ? {
          title: service.seo.title,
          description: service.seo.description,
          path,
          jsonLd: buildJsonLd(service, path),
        }
      : {}
  );

  // Unknown slug → home rather than a dead page.
  if (!service) return <Navigate to="/" replace />;

  const { hero, overview, process, deliverables, cta } = service;
  const others = SERVICE_LINKS.filter((s) => s.slug !== service.slug);

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
            <span className="kicker">Services</span>
            <span className="text-text-dim">/</span>
            <span className="kicker text-mint">{service.name}</span>
          </div>

          <h1
            data-reveal
            className="max-w-3xl font-display text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.034em] text-text"
          >
            {hero.title} <span className="text-gradient-mint">{hero.accent}</span>
          </h1>

          <p data-reveal className="mt-7 max-w-2xl text-[16.5px] leading-[1.8] text-text-muted">
            {hero.lede}
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

      {/* ── Overview grid ────────────────────────────────────── */}
      <section className="relative border-b border-line bg-canvas">
        <div className="shell py-24 lg:py-32">
          <SectionHead
            kicker={overview.kicker}
            title={overview.title}
            accent={overview.accent}
            lede={overview.lede}
          />

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {overview.items.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                data-reveal
                className="group relative overflow-hidden rounded-lg border border-line bg-surface p-8 transition-colors duration-500 hover:border-line-strong"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-mint/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-surface-2">
                    <Icon className="h-[19px] w-[19px] text-mint" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 font-display text-[19px] font-medium tracking-[-0.02em] text-text">
                    {title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.75] text-text-muted">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="relative border-b border-line bg-canvas">
        <div className="shell py-24 lg:py-32">
          <SectionHead
            kicker={process.kicker}
            title={process.title}
            accent={process.accent}
            lede={process.lede}
          />

          <div className="mx-auto mt-16 max-w-4xl">
            {process.steps.map(({ n, title, window, body }, i) => (
              <article key={n} data-reveal className="group relative pl-10 sm:pl-14">
                <span
                  className={`absolute left-[7px] top-3 w-px bg-line sm:left-[11px] ${
                    i === process.steps.length - 1 ? 'h-0' : 'h-full'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-mint/40 bg-canvas sm:h-6 sm:w-6"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-mint transition-transform duration-300 group-hover:scale-150" />
                </span>

                <div className="pb-12">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-[12px] text-mint">{n}</span>
                    <h3 className="font-display text-[22px] font-medium tracking-[-0.025em] text-text">
                      {title}
                    </h3>
                    <span className="text-[13px] text-text-dim">{window}</span>
                  </div>
                  <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-text-muted">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deliverables ─────────────────────────────────────── */}
      <section className="relative border-b border-line bg-canvas">
        <div className="shell py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div data-reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-6 bg-mint/50" />
                <span className="kicker">What you get</span>
              </div>
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-medium leading-[1.12] tracking-[-0.03em] text-text">
                {deliverables.title}{' '}
                <span className="text-gradient-mint">{deliverables.accent}</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-text-muted">
                {deliverables.lede}
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:content-start">
              {deliverables.items.map((d) => (
                <li
                  key={d}
                  data-reveal
                  className="flex items-start gap-3.5 rounded-lg border border-line bg-surface p-5 transition-colors duration-400 hover:border-mint/30"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-mint/40 bg-mint/10">
                    <Check className="h-3 w-3 text-mint" strokeWidth={2.4} />
                  </span>
                  <span className="text-[14px] leading-[1.55] text-text-muted">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Other services (internal links) ──────────────────── */}
      <section className="relative border-b border-line bg-canvas">
        <div className="shell py-20">
          <div data-reveal className="mb-9 flex items-center gap-3">
            <span className="h-px w-6 bg-mint/50" />
            <span className="kicker">Other services</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={o.href}
                data-reveal
                className="group flex items-start justify-between gap-4 rounded-lg border border-line bg-surface px-6 py-5 transition-colors duration-300 hover:border-mint/40"
              >
                <div>
                  <span className="font-display text-[17px] font-medium tracking-[-0.02em] text-text">
                    {o.name}
                  </span>
                  <p className="mt-1 text-[13.5px] leading-[1.6] text-text-muted">{o.blurb}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-text-dim transition-colors group-hover:text-mint" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-canvas">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="grid-faint absolute inset-0 opacity-40" />
          <div className="bloom absolute bottom-[-45%] left-1/2 h-[760px] w-[1100px] -translate-x-1/2" />
        </div>

        <div className="shell relative py-28 text-center lg:py-36">
          <h2
            data-reveal
            className="mx-auto max-w-3xl font-display text-[clamp(2rem,4.4vw,3.2rem)] font-medium leading-[1.1] tracking-[-0.034em] text-text"
          >
            {cta.title} <span className="text-gradient-mint">{cta.accent}</span>
          </h2>
          <p data-reveal className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.8] text-text-muted">
            {cta.lede}
          </p>
          <div data-reveal className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Link to="/book" className="btn-mint">
              Book a call <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-outline">
              <Mail className="h-3.5 w-3.5" /> {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
