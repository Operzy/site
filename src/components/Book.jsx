import React from 'react';
import { Mail } from 'lucide-react';
import { useReveal } from '../lib/reveal';
import CalendlyEmbed from './CalendlyEmbed';

const BOOKING_URL = 'https://calendly.com/operzy/discovery-call-with-jake';
const CONTACT_EMAIL = 'contact@operzy.com';

const NEXT = [
  ['01', 'A short call', 'Thirty minutes. You walk us through where the time goes, and we tell you honestly whether we think there is something here.'],
  ['02', 'A proper look', 'A longer session with whoever actually does the work, so we can size it accurately rather than guess.'],
  ['03', 'A written proposal', 'What we would build, how long it takes, what it costs, and what we are holding ourselves to.'],
];

export default function Book() {
  const scope = useReveal();

  return (
    <section ref={scope} className="relative overflow-hidden bg-canvas">
      {/* Mint bloom rising from the bottom */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-faint absolute inset-0 opacity-40" />
        <div className="bloom absolute bottom-[-45%] left-1/2 h-[760px] w-[1100px] -translate-x-1/2" />
      </div>

      <div className="shell relative py-24 text-center lg:py-32">
        <div data-reveal className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-mint/50" />
          <span className="kicker">Book a call</span>
          <span className="h-px w-6 bg-mint/50" />
        </div>

        <h1
          data-reveal
          className="mx-auto max-w-3xl font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-medium leading-[1.1] tracking-[-0.034em] text-text"
        >
          Tell us where <span className="text-gradient-mint">the time goes.</span>
        </h1>

        <p data-reveal className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.8] text-text-muted">
          Pick a time that suits you. Thirty minutes, no pitch, we listen to how the process runs
          today and tell you plainly whether we think we can help.
        </p>

        {/* Booking widget */}
        <div data-reveal className="mx-auto mt-12 max-w-3xl">
          <CalendlyEmbed url={BOOKING_URL} />
        </div>

        <div data-reveal className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <span className="text-[14px] text-text-dim">Prefer email?</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn-outline">
            <Mail className="h-3.5 w-3.5" /> {CONTACT_EMAIL}
          </a>
        </div>

        {/* What happens next */}
        <div className="mx-auto mt-24 grid max-w-4xl grid-cols-1 gap-4 text-left md:grid-cols-3">
          {NEXT.map(([n, title, body]) => (
            <div
              key={n}
              data-reveal
              className="rounded-lg border border-line bg-surface/80 p-7 backdrop-blur-sm"
            >
              <span className="font-mono text-[12px] text-mint">{n}</span>
              <h3 className="mt-4 font-display text-[17px] font-medium tracking-[-0.02em] text-text">
                {title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.75] text-text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
