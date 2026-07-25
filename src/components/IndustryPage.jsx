import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, Mail, ArrowUpRight, Check } from 'lucide-react';
import SectionHead from './SectionHead';
import { useReveal } from '../lib/reveal';
import { useSeo, SITE_URL } from '../lib/seo';
import { getIndustry, INDUSTRY_LINKS } from '../lib/industries';

const CONTACT_EMAIL = 'contact@operzy.com';

function buildJsonLd(industry, path) {
  const url = SITE_URL + path;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `AI Automation for ${industry.name}`,
      serviceType: `AI and process automation for ${industry.name.toLowerCase()}`,
      description: industry.seo.description,
      url,
      areaServed: 'US',
      provider: {
        '@type': 'Organization',
        name: 'Operzy',
        url: SITE_URL,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: `${SITE_URL}/industries` },
        { '@type': 'ListItem', position: 3, name: industry.name, item: url },
      ],
    },
  ];
}

export default function IndustryPage() {
  const { slug } = useParams();
  const industry = getIndustry(slug);
  const scope = useReveal();

  // Hooks must run unconditionally, so build SEO args defensively and only
  // bail out afterwards. useSeo falls back to site defaults when given {}.
  const path = industry ? `/industries/${industry.slug}` : undefined;
  useSeo(
    industry
      ? {
          title: industry.seo.title,
          description: industry.seo.description,
          path,
          jsonLd: buildJsonLd(industry, path),
        }
      : {}
  );

  // Unknown slug → send them to the index rather than a dead page.
  if (!industry) return <Navigate to="/industries" replace />;

  const { hero, pains, useCases, trust, cta } = industry;
  const others = INDUSTRY_LINKS.filter((i) => i.slug !== industry.slug);

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
            <Link to="/industries" className="kicker transition-colors hover:text-text-muted">
              Industries
            </Link>
            <span className="text-text-dim">/</span>
            <span className="kicker text-mint">{industry.name}</span>
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

      {/* ── Where the time goes ──────────────────────────────── */}
      <section className="relative border-b border-line bg-canvas">
        <div className="shell py-24 lg:py-32">
          <SectionHead
            kicker="Where the time goes"
            title={pains.title}
            accent={pains.accent}
            lede={pains.lede}
          />

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {pains.items.map((p) => (
              <article
                key={p.title}
                data-reveal
                className="rounded-lg border border-line bg-surface p-7 transition-colors duration-400 hover:border-line-strong"
              >
                <h3 className="font-display text-[18px] font-medium tracking-[-0.02em] text-text">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-text-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we automate ─────────────────────────────────── */}
      <section className="relative border-b border-line bg-canvas">
        <div className="shell py-24 lg:py-32">
          <SectionHead
            kicker="What we automate"
            title={useCases.title}
            accent={useCases.accent}
            lede={useCases.lede}
          />

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.items.map(({ icon: Icon, title, body }) => (
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

      {/* ── Trust / compliance ───────────────────────────────── */}
      <section className="relative border-b border-line bg-canvas">
        <div className="shell py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div data-reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-6 bg-mint/50" />
                <span className="kicker">Trust &amp; compliance</span>
              </div>
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-medium leading-[1.12] tracking-[-0.03em] text-text">
                {trust.title}
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-text-muted">{trust.lede}</p>
            </div>

            <ul className="grid grid-cols-1 gap-3 lg:content-start">
              {trust.points.map((point) => (
                <li
                  key={point}
                  data-reveal
                  className="flex items-start gap-3.5 rounded-lg border border-line bg-surface p-5 transition-colors duration-400 hover:border-mint/30"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-mint/40 bg-mint/10">
                    <Check className="h-3 w-3 text-mint" strokeWidth={2.4} />
                  </span>
                  <span className="text-[14.5px] leading-[1.6] text-text-muted">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Other industries (internal links) ────────────────── */}
      <section className="relative border-b border-line bg-canvas">
        <div className="shell py-20">
          <div data-reveal className="mb-9 flex items-center gap-3">
            <span className="h-px w-6 bg-mint/50" />
            <span className="kicker">Other industries we work in</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={o.href}
                data-reveal
                className="group flex items-center justify-between gap-3 rounded-lg border border-line bg-surface px-5 py-4 transition-colors duration-300 hover:border-mint/40"
              >
                <span className="font-display text-[16px] font-medium tracking-[-0.02em] text-text">
                  {o.name}
                </span>
                <ArrowUpRight className="h-4 w-4 text-text-dim transition-colors group-hover:text-mint" />
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
