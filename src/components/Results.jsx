import React from 'react';
import { Timer, Target, TrendingUp, Wallet } from 'lucide-react';
import SectionHead from './SectionHead';
import { useReveal } from '../lib/reveal';

// No invented client numbers here. When real engagements have been measured,
// this is the natural place to add them.
const MEASURES = [
  {
    icon: Timer,
    title: 'Time per case',
    body: 'How long one item takes to get through the process today, versus after. Usually the number that matters most.',
  },
  {
    icon: Target,
    title: 'How often it is right',
    body: 'Accuracy against real examples, checked before launch and watched afterwards. If it slips, we hear about it before you do.',
  },
  {
    icon: TrendingUp,
    title: 'Volume it can absorb',
    body: 'How much more work the process takes on without adding people, across one team or every team running it. Usually the thing that forces the next hire.',
  },
  {
    icon: Wallet,
    title: 'What it costs to run',
    body: 'The running cost of the system against the cost of the hours it replaces. Stated plainly, both directions.',
  },
];

const EXAMPLES = [
  {
    kind: 'Document-heavy work',
    body: 'Pulling the same handful of fields out of contracts, invoices or forms, at whatever monthly volume you actually run, checking them against your systems of record, and only escalating the ones that look wrong.',
  },
  {
    kind: 'Intake and routing',
    body: 'New enquiries, tickets or applications read, sorted and sent to the right person with the context already attached, instead of sitting in a shared inbox.',
  },
  {
    kind: 'Chasing and reconciling',
    body: 'The follow-ups and cross-checks nobody wants to own, matching records between systems that have never agreed with each other, flagging the gaps, drafting the chase.',
  },
];

export default function Results() {
  const scope = useReveal();

  return (
    <section id="results" ref={scope} className="relative border-t border-line bg-canvas">
      <div className="shell py-24 lg:py-32">
        <SectionHead
          kicker="Results"
          title="We agree on the number"
          accent="before we start."
          lede="We measure how the process runs today, then measure it again after. That way the result is something you can check, and something you can put in front of a board, rather than something we claim."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEASURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              data-reveal
              className="group rounded-lg border border-line bg-surface p-7 transition-colors duration-400 hover:border-mint/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-surface-2">
                <Icon className="h-[19px] w-[19px] text-mint" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 font-display text-[17px] font-medium tracking-[-0.02em] text-text">
                {title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.75] text-text-muted">{body}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-20 text-center">
          <span className="kicker">The kind of work this suits</span>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {EXAMPLES.map((e) => (
            <article
              key={e.kind}
              data-reveal
              className="rounded-lg border border-line bg-surface p-8 transition-colors duration-400 hover:border-line-strong"
            >
              <h3 className="font-display text-[18px] font-medium tracking-[-0.02em] text-text">
                {e.kind}
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.8] text-text-muted">{e.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
