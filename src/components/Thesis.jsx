import React from 'react';
import { useReveal } from '../lib/reveal';

const STATEMENTS = [
  {
    dim: 'You bought the tools. Ran the pilot. Sat through the demos.',
    bright: 'And the work still lands on the same people it always did.',
  },
];

export default function Thesis() {
  const scope = useReveal({ y: 24, stagger: 0.12 });

  return (
    <section ref={scope} className="relative overflow-hidden border-t border-line bg-canvas">
      <div className="shell py-28 text-center lg:py-36">
        {STATEMENTS.map((s) => (
          <div key={s.bright} className="mx-auto max-w-4xl">
            <p
              data-reveal
              className="font-display text-[clamp(1.5rem,3.4vw,2.6rem)] font-medium leading-[1.25] tracking-[-0.03em] text-text-dim"
            >
              {s.dim}
            </p>
            <p
              data-reveal
              className="mt-7 font-display text-[clamp(1.6rem,3.6vw,2.75rem)] font-medium leading-[1.22] tracking-[-0.03em] text-text"
            >
              {s.bright}
            </p>
          </div>
        ))}

        <div data-reveal className="mx-auto mt-16 max-w-2xl border-t border-line pt-12">
          <p className="text-[16px] leading-[1.8] text-text-muted">
            The hard part was never the AI. It is the connections between systems, the awkward edge
            cases, and keeping the whole thing accurate once real volume hits it.{' '}
            <span className="text-text">That is the part we do.</span> And if a process is not worth
            automating yet, we would rather tell you early than sell you a project.
          </p>

          <p data-reveal className="mt-7 text-[15px] leading-[1.8] text-text-dim">
            We do this for independent operators and for teams inside large, regulated organisations.
            The method does not change with the size of the company, only the number of systems it
            has to survive contact with.
          </p>
        </div>
      </div>
    </section>
  );
}
