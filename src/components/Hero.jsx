import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ClientLogos from './ClientLogos';

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.h-line', { yPercent: 105 }, { yPercent: 0, duration: 1.15, stagger: 0.1 }, 0.15)
        .fromTo('.h-fade', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, 0.6)
        .fromTo('.h-bloom', { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 2 }, 0);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={root} className="relative overflow-hidden bg-canvas">
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-faint absolute inset-0 opacity-60" />
        <div className="h-bloom bloom absolute left-1/2 top-[-10%] h-[820px] w-[1200px] -translate-x-1/2" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas" />
      </div>

      <div className="shell relative flex flex-col items-center pb-20 pt-[150px] text-center lg:pb-24 lg:pt-[190px]">
        <div className="h-fade mb-9 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-4 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
          </span>
          <span className="text-[12.5px] font-medium text-text-muted">
            AI systems, designed, deployed and operated
          </span>
        </div>

        <h1 className="max-w-5xl font-display text-[clamp(2.6rem,6.2vw,4.75rem)] font-medium leading-[1.05] tracking-[-0.035em] text-text">
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="h-line block">We don't just automate tasks.</span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="h-line block text-gradient-mint">We take the whole process off your hands.</span>
          </span>
        </h1>

        <p className="h-fade mt-8 max-w-2xl text-[16.5px] leading-[1.75] text-text-muted">
          We find the processes quietly eating your organisation's week, then design, build and run
          the AI systems that handle them, inside your own cloud, connected to the systems you
          already run, and measured against what they actually save you.
        </p>

        <div className="h-fade mt-11 flex flex-wrap items-center justify-center gap-4">
          <Link to="/book" className="btn-mint">
            Book a call <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a href="#capabilities" className="btn-outline">
            See what we do
          </a>
        </div>
      </div>

      <ClientLogos />
    </section>
  );
}
