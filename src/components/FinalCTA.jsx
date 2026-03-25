import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-alternate-background py-40 px-6 lg:px-12 relative overflow-hidden" id="book">
      {/* Soft green glow behind button area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-color/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-sans font-bold text-primary-text tracking-tight mb-8 leading-[1.1] text-center w-full">
          Ready to Run an Agency That Doesn’t Rely on You?
        </h2>
        
        <p className="text-xl text-secondary-text mb-14 max-w-2xl leading-relaxed text-center w-full">
          Book your AI Readiness Call and see exactly where your agency is breaking, what should be automated, and how to build the operating system underneath the work.
        </p>

        <a href="#book" className="group btn-magnetic px-10 py-5 bg-accent-green rounded-xlarge text-primary-text font-bold text-lg shadow-lg">
          <span className="relative z-10 flex items-center transition-colors duration-300">
            Book Your AI Readiness Call <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="btn-mask group-hover:bg-accent-hover rounded-xlarge"></span>
        </a>
      </div>
    </section>
  );
}
