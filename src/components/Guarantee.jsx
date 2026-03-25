import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="bg-background py-32 px-6 lg:px-12 flex justify-center border-t border-border">
      <div className="max-w-4xl w-full bg-soft-green rounded-[3rem] p-12 lg:p-20 flex flex-col items-center text-center shadow-md relative overflow-hidden border-2 border-accent-green/30">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent-green/20 blur-[50px] rounded-full point-events-none"></div>
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-10 shadow-sm relative z-10 text-accent-green">
           <ShieldCheck className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-primary-text tracking-tight mb-8 relative z-10 w-full text-center">
          Our Benchmark Guarantee
        </h2>
        
        <p className="text-lg md:text-xl text-primary-text leading-relaxed font-medium relative z-10 max-w-2xl text-center">
          Before implementation, we benchmark your agency across workflow clarity, founder dependency, operational visibility, and reporting efficiency.
          <br /><br />
          <span className="font-bold underline decoration-accent-green decoration-4 underline-offset-4">
            If your operational score does not measurably improve within 90 days, we keep working until it does—or we refund you.
          </span>
        </p>
      </div>
    </section>
  );
}
