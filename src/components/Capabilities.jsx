import React from 'react';
import { Workflow, BrainCircuit, Network, Radar } from 'lucide-react';
import SectionHead from './SectionHead';
import { useReveal } from '../lib/reveal';

const CAPABILITIES = [
  {
    icon: Workflow,
    title: 'Process automation',
    body: 'The workflows that eat the most time, intake, review, approvals, follow-up, reconciliation, running end to end across the tools you already use.',
    points: ['Runs without a handoff', 'Exceptions flagged, not buried', 'You stay in the loop where it matters'],
  },
  {
    icon: BrainCircuit,
    title: 'Applied AI',
    body: 'Models pointed at specific jobs: reading documents, drafting the first version, sorting what comes in, and taking multi-step actions under supervision.',
    points: ['Document and contract review', 'Classification and routing', 'Prompts we test, not guess at'],
  },
  {
    icon: Network,
    title: 'Data & integration',
    body: 'The plumbing that makes any of it work: real connections into your systems, data that lines up across them, and a record of every action taken.',
    points: ['CRM, ERP, data warehouse, internal APIs', 'Data that agrees with itself', 'A full audit history you can check'],
  },
  {
    icon: Radar,
    title: 'Ongoing support',
    body: 'Systems drift. We watch accuracy and volume after launch, fix what slips, and keep tuning as your process changes, for as long as you want us involved.',
    points: ['Monitoring and alerts', 'Fixes and adjustments', 'Handover whenever you want it'],
  },
];

export default function Capabilities() {
  const scope = useReveal();

  return (
    <section id="capabilities" ref={scope} className="relative border-t border-line bg-canvas">
      <div className="shell py-24 lg:py-32">
        <SectionHead
          kicker="What we do"
          title="Four things, and we"
          accent="do all four."
          lede="Automation usually breaks in the gaps, between systems, between data, between who owns the result. Fixing one of these on its own rarely holds, which is why we do not hand you off to a second vendor for the other three."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {CAPABILITIES.map(({ icon: Icon, title, body, points }) => (
            <article
              key={title}
              data-reveal
              className="group relative overflow-hidden rounded-lg border border-line bg-surface p-8 transition-colors duration-500 hover:border-line-strong lg:p-10"
            >
              {/* Mint bloom that surfaces on hover */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-mint/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-surface-2">
                  <Icon className="h-[19px] w-[19px] text-mint" strokeWidth={1.6} />
                </div>

                <h3 className="mt-7 font-display text-[21px] font-medium tracking-[-0.02em] text-text">
                  {title}
                </h3>

                <p className="mt-4 max-w-md text-[14.5px] leading-[1.75] text-text-muted">{body}</p>

                <ul className="mt-7 space-y-2.5 border-t border-line pt-6">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[13.5px] text-text-muted">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-mint" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
