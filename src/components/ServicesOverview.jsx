import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHead from './SectionHead';
import { useReveal } from '../lib/reveal';
import { SERVICE_LINKS } from '../lib/services';

/**
 * Homepage journey section: the three stages of an engagement (discovery,
 * implementation, partnership), with each service page linked from the stage
 * it belongs to. Service links resolve from SERVICE_LINKS so hrefs and the
 * external flag stay in sync with the nav and footer.
 */
const byNav = Object.fromEntries(SERVICE_LINKS.map((s) => [s.slug, s]));

const STAGES = [
  {
    n: '01',
    title: 'Discovery',
    sub: 'Audit & roadmap',
    body: 'We start with the truth: what your processes and AI are actually doing, costing and risking, and which changes are worth making first. You leave with a roadmap you can act on, with or without us.',
    services: ['ai-audit'],
  },
  {
    n: '02',
    title: 'Implementation',
    sub: 'Build & train',
    body: "Then we build it, the automations that run your processes, the brain that holds your company's knowledge, and we train your team so the systems get used, not just installed.",
    services: ['automations', 'company-brain', 'ai-enablement'],
  },
  {
    n: '03',
    title: 'Partnership',
    sub: 'Run & grow',
    body: 'Transformation is not a handoff. We stay on to monitor, tune and extend what we built as your business changes, under SLA, and we keep finding the next thing worth transforming.',
    services: [],
    anchor: { name: 'See how we work', href: '#engagement' },
  },
];

function ServiceChip({ slug }) {
  const s = byNav[slug];
  if (!s) return null;
  const cls =
    'group/chip flex items-center justify-between gap-3 rounded-md border border-line bg-surface-2 px-4 py-3 transition-colors duration-300 hover:border-mint/40';
  const inner = (
    <>
      <span className="text-[13.5px] font-medium text-text">{s.name}</span>
      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-text-dim transition-colors group-hover/chip:text-mint" />
    </>
  );
  return s.external ? (
    <a href={s.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link to={s.href} className={cls}>
      {inner}
    </Link>
  );
}

export default function ServicesOverview() {
  const scope = useReveal();

  return (
    <section id="services" ref={scope} className="relative border-t border-line bg-canvas">
      <div className="shell py-24 lg:py-32">
        <SectionHead
          kicker="How we partner"
          title="Not a vendor. A partner for"
          accent="the whole transformation."
          lede="Most AI projects die in the gaps, after the demo, before the adoption. So we do not sell you a build and disappear. We find what is worth changing, implement it with your team, and stay accountable for it long after launch."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {STAGES.map((stage) => (
            <article
              key={stage.n}
              data-reveal
              className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface p-8 transition-colors duration-500 hover:border-line-strong lg:p-9"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-mint/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[12px] text-mint">{stage.n}</span>
                  <h3 className="font-display text-[21px] font-medium tracking-[-0.02em] text-text">
                    {stage.title}
                  </h3>
                </div>
                <span className="mt-1.5 kicker text-[10.5px] text-text-dim">{stage.sub}</span>

                <p className="mt-5 text-[14px] leading-[1.75] text-text-muted">{stage.body}</p>

                <div className="mt-auto space-y-2 border-t border-line pt-6">
                  <div className="mt-1 space-y-2">
                    {stage.services.map((slug) => (
                      <ServiceChip key={slug} slug={slug} />
                    ))}
                    {stage.anchor && (
                      <a
                        href={stage.anchor.href}
                        className="group/chip flex items-center justify-between gap-3 rounded-md border border-line bg-surface-2 px-4 py-3 transition-colors duration-300 hover:border-mint/40"
                      >
                        <span className="text-[13.5px] font-medium text-text">
                          {stage.anchor.name}
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-text-dim transition-colors group-hover/chip:text-mint" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
