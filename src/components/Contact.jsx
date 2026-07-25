import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import { useReveal } from '../lib/reveal';

const CONTACT_EMAIL = 'contact@operzy.com';

export default function Contact() {
  const scope = useReveal();

  return (
    <section id="contact" ref={scope} className="relative overflow-hidden border-t border-line bg-canvas">
      {/* Mint bloom rising from the bottom */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-faint absolute inset-0 opacity-40" />
        <div className="bloom absolute bottom-[-45%] left-1/2 h-[760px] w-[1100px] -translate-x-1/2" />
      </div>

      <div className="shell relative py-28 text-center lg:py-36">
        <div data-reveal className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-mint/50" />
          <span className="kicker">Get in touch</span>
          <span className="h-px w-6 bg-mint/50" />
        </div>

        <h2
          data-reveal
          className="mx-auto max-w-3xl font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-medium leading-[1.1] tracking-[-0.034em] text-text"
        >
          Tell us where <span className="text-gradient-mint">the time goes.</span>
        </h2>

        <p data-reveal className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.8] text-text-muted">
          The work we do best is for companies where a process has quietly become the bottleneck, too much volume, too many people touching it, too many things slipping through. If that
          sounds familiar, a short call is the quickest way to find out whether we can help.
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
  );
}
