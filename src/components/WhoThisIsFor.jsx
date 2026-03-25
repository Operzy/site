import React from 'react';
import { Check } from 'lucide-react';

export default function WhoThisIsFor() {
  const checklists = [
    'You run a 2–10+ person agency',
    'Demand is growing, but operations feel messy',
    'Your team still depends on you too much',
    'You’ve tried tools that didn’t solve the real problem',
    'You want to scale output without scaling chaos',
    'You want a system your team can actually use'
  ];

  return (
    <section className="bg-background py-32 px-6 lg:px-12" id="who-it-s-for">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary-text tracking-tight mb-8">
            This Is For You If
          </h2>
          <p className="text-lg text-secondary-text leading-relaxed max-w-sm">
            Operzy is built for founder-led agencies that are growing, feeling operational strain, and ready to install a real system beneath the work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {checklists.map((item, idx) => (
            <div 
              key={idx}
              className="bg-alternate-background border border-border rounded-xl p-5 flex items-center transition-transform hover:scale-[1.01] duration-300 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-soft-green flex items-center justify-center mr-4 flex-shrink-0">
                <Check className="w-5 h-5 text-bg-background stroke-[3]" color="#0F172A" />
              </div>
              <span className="font-semibold text-primary-text tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
