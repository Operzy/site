import React from 'react';

export default function Outcomes() {
  const cards = [
    { title: 'More Clarity', text: 'Everyone knows how work moves and where responsibility sits.' },
    { title: 'Less Founder Dependence', text: 'The business stops relying on you as the relay point for every decision.' },
    { title: 'Cleaner Client Experience', text: 'Onboarding, communication, and reporting become more consistent.' },
    { title: 'Faster Internal Execution', text: 'Approvals, handoffs, and recurring workflows move with less friction.' },
    { title: 'Time Saved Every Week', text: 'Your team gets back 10–20+ hours per week from repetitive manual work.' },
    { title: 'A Business Built to Scale', text: 'You gain a stronger operational foundation for future growth.' },
  ];

  return (
    <section className="bg-alternate-background py-32 px-6 lg:px-12 border-t border-border" id="outcomes">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-center text-primary-text tracking-tight mb-20">
          What Changes After Operzy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-background rounded-2xl p-8 border border-border shadow-sm flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-sans font-bold text-xl text-primary-text mb-4 mt-2 tracking-tight">
                {card.title}
              </h3>
              <p className="text-sm text-secondary-text leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
