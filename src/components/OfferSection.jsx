import React, { useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function OfferSection() {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const installItems = [
    'Workflow mapping and bottleneck analysis',
    'Structured client onboarding systems',
    'Reporting and visibility systems',
    'Delivery workflow and approval handoffs',
    'One source of truth across your agency',
    'Automation for repetitive internal tasks',
    'AI-enabled execution inside key workflows',
    'Team adoption and enablement'
  ];

  const getItems = [
    '10–20+ hours saved per week',
    'Reduced founder dependency',
    'Cleaner handoffs across the team',
    'More consistent onboarding and reporting',
    'Better visibility across all clients',
    'Faster execution with less chaos',
    'An agency that can scale on systems, not memory'
  ];

  return (
    <section className="bg-alternate-background py-32 px-6 lg:px-12 border-t border-border" id="what-you-get">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-center text-primary-text tracking-tight mb-4">
          The AI-Native Agency OS
        </h2>
        <p className="text-center text-lg text-secondary-text max-w-2xl mb-16 leading-relaxed">
          A 30-day done-for-you installation that turns messy, founder-dependent operations into structured workflows, automation, and AI-enabled execution.
        </p>

        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="group relative w-full bg-background rounded-[3rem] border border-border shadow-xl p-8 md:p-12 lg:p-16 overflow-hidden transform-gpu hover:shadow-2xl transition-shadow duration-500"
        >
          {/* Subtle Fixed Background Blob */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-soft-green/20 blur-[100px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Dynamic Spotlight following cursor */}
          <div 
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-0"
            style={{
              background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(163, 230, 53, 0.1), transparent 40%)`
            }}
          />

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-soft-green/50 border border-accent-green text-sm font-bold text-primary-text mb-12 relative z-10">
            <span className="w-2 h-2 rounded-full bg-accent-green mr-2 animate-pulse"></span>
            30-Day Done-For-You Installation
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            {/* Left Column */}
            <div>
              <h3 className="font-sans font-bold text-2xl text-primary-text mb-8 flex items-center">
                <span className="text-secondary-text mr-3 md:hidden">01.</span> What We Install
              </h3>
              <ul className="space-y-5">
                {installItems.map((item, i) => (
                  <li key={i} className="flex items-start text-secondary-text font-medium group">
                    <CheckCircle2 className="w-5 h-5 text-accent-green mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-primary-text transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="absolute -left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
              <h3 className="font-sans font-bold text-2xl text-primary-text mb-8 flex items-center">
                <span className="text-secondary-text mr-3 md:hidden">02.</span> What You Get
              </h3>
              <ul className="space-y-6">
                {getItems.map((item, i) => (
                  <li key={i} className="flex items-start text-primary-text font-bold">
                    <div className="w-6 h-6 rounded-full bg-alternate-background border border-border flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 overflow-hidden">
                       <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                    </div>
                    <span>{item}</span>
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
