import React from 'react';
import SectionHead from './SectionHead';
import { useReveal } from '../lib/reveal';

const PHASES = [
  {
    n: '01',
    title: 'Work out what to fix',
    window: 'Phase one',
    body: 'We sit with the people actually doing the work, and with whoever owns the systems behind them, find where the time goes, and figure out what automation would genuinely be worth. If the answer is "not much yet", we will tell you that.',
    deliverable: 'A written plan and an honest estimate of the payoff',
  },
  {
    n: '02',
    title: 'Design it',
    window: 'Phase two',
    body: 'What the new process looks like, what connects to what, and where a human still needs to sign off. Your security and IT teams review the design at this point, not after it is built. We agree on what "working" means before anything gets made.',
    deliverable: 'The design, the integration map, and what we are holding ourselves to',
  },
  {
    n: '03',
    title: 'Prove it, then roll it out',
    window: 'Phase three',
    body: 'We build in stages and run it alongside your current process, not instead of it. It proves itself in one team first. Once it is clearly doing better than the old way, that same system extends to the next team, region or entity.',
    deliverable: 'A proven system, then a rollout your team can follow',
  },
  {
    n: '04',
    title: 'Keep it running',
    window: 'Ongoing',
    body: 'Things change, volumes, rules, regulation, the models themselves. We stay on to keep it accurate, or hand the whole thing to your platform team whenever you would rather run it in-house.',
    deliverable: 'Ongoing support under SLA, or a clean handover',
  },
];

export default function Engagement() {
  const scope = useReveal();

  return (
    <section id="engagement" ref={scope} className="relative border-t border-line bg-canvas">
      <div className="shell py-24 lg:py-32">
        <SectionHead
          kicker="How we work"
          title="Four steps, and you can"
          accent="stop after any of them."
          lede="Plenty of AI programmes turn into pilots that quietly go nowhere. Each step here produces something real, and we agree on what success looks like before moving to the next one. We work alongside your IT, security and procurement teams, not around them."
        />

        <div className="mx-auto mt-16 max-w-4xl">
          {PHASES.map(({ n, title, window, body, deliverable }, i) => (
            <article key={n} data-reveal className="group relative pl-10 sm:pl-14">
              {/* Timeline rail */}
              <span
                className={`absolute left-[7px] top-3 w-px bg-line sm:left-[11px] ${
                  i === PHASES.length - 1 ? 'h-0' : 'h-full'
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

                <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5">
                  <span className="kicker text-[10px] text-text-dim">You get</span>
                  <span className="text-[13px] text-text">{deliverable}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p data-reveal className="mx-auto mt-4 max-w-2xl text-center text-[14px] leading-[1.75] text-text-dim">
          Cost and timeline depend on how many processes are involved, how many systems they touch,
          and how far the rollout goes. We work that out in the first phase, and you see the number
          before committing to the build. We can work to your MSA, your security review and your
          procurement process.
        </p>
      </div>
    </section>
  );
}
