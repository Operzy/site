import React from 'react';
import SectionHead from './SectionHead';
import { useReveal } from '../lib/reveal';

const LAYERS = [
  {
    name: 'What your team sees',
    desc: 'Approvals, alerts and a clear view of what the system is doing, so nobody has to take it on faith.',
    items: ['Approvals', 'Reporting', 'Escalations'],
  },
  {
    name: 'What decides',
    desc: 'The rules and the agent logic. This is the part that works out what happens next, and when to stop and ask.',
    items: ['Workflow logic', 'Agent runtime', 'Business rules'],
  },
  {
    name: 'The AI itself',
    desc: 'Models and retrieval, picked per task and checked against real examples rather than assumed to work.',
    items: ['Model choice', 'Retrieval', 'Testing'],
  },
  {
    name: 'Your systems',
    desc: 'Proper connections into the tools you already run, so the automation acts on live data instead of a copy.',
    items: ['CRM / ERP', 'Warehouse & docs', 'Internal APIs'],
  },
];

const ACROSS = [
  'Who can access what',
  'A log of every action',
  'Where your data lives',
  'A human can always step in',
];

export default function Architecture() {
  const scope = useReveal();

  return (
    <section id="architecture" ref={scope} className="relative overflow-hidden border-t border-line bg-canvas">
      <div className="grid-faint pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="shell relative py-24 lg:py-32">
        <SectionHead
          kicker="How we build"
          title="Four parts, and we build"
          accent="all of them."
          lede="Every system we put together has the same four pieces. Keeping that consistent is what lets us extend it later, explain it to your team, and hand it over cleanly if you ever want to run it yourselves."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-[1fr_260px]">
          {/* Layer stack */}
          <div className="space-y-4">
            {LAYERS.map(({ name, desc, items }) => (
              <div
                key={name}
                data-reveal
                className="group grid grid-cols-1 items-center gap-5 rounded-lg border border-line bg-surface px-6 py-7 transition-colors duration-400 hover:border-mint/30 hover:bg-surface-2 md:grid-cols-12 md:px-8"
              >
                <div className="flex items-center gap-3 md:col-span-4">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                  <h3 className="font-display text-[19px] font-medium tracking-[-0.02em] text-text">
                    {name}
                  </h3>
                </div>

                <p className="text-[14px] leading-[1.7] text-text-muted md:col-span-5">{desc}</p>

                <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                  {items.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11.5px] text-text-dim"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Runs across all four */}
          <div
            data-reveal
            className="relative flex flex-col overflow-hidden rounded-lg border border-mint/20 bg-surface p-7"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-mint/10 blur-3xl" />
            <div className="relative">
              <span className="kicker text-mint">Across all four</span>
              <p className="mt-4 text-[13.5px] leading-[1.75] text-text-muted">
                Permissions, logging and a record of what happened get built in as we go, not added
                later once something has gone wrong.
              </p>

              <ul className="mt-8 space-y-3.5 border-t border-line pt-6">
                {ACROSS.map((g) => (
                  <li key={g} className="flex items-start gap-2.5 text-[13px] leading-snug text-text">
                    <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-mint" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
