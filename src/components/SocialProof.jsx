import React from 'react';
import { Network, Zap, Cpu, Users } from 'lucide-react';

export default function SocialProof() {
  const cards = [
    { title: 'Structured Workflows', text: 'Replace messy handoffs and scattered tasks with clear operational systems.', icon: Network },
    { title: 'Automation Layer', text: 'Remove repetitive admin, reminders, updates, and manual coordination.', icon: Zap },
    { title: 'AI Execution', text: 'Install practical AI into the workflows your team already runs every week.', icon: Cpu },
    { title: 'Less Founder Dependence', text: 'Build a business that works without you being the answer to everything.', icon: Users }
  ];

  return (
    <section className="bg-alternate-background py-24 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
           <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-border bg-background text-xs font-semibold text-secondary-text mb-4">
             <span className="w-2 h-2 rounded-full bg-accent-green mr-2 animate-pulse"></span>
             Operational Baseline
           </div>
           <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary-text mb-4 tracking-tight">The Shift to an AI-Native Standard</h2>
           <p className="text-secondary-text text-lg max-w-2xl mx-auto">Moving from scattered, founder-dependent operations to a structured, scalable foundation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 hover-group">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="group bg-background border border-border rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-accent-green to-accent-hover transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-14 h-14 rounded-full bg-soft-green/30 border border-accent-green/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                 <card.icon className="w-6 h-6 text-accent-hover" />
              </div>
              <h3 className="font-sans font-bold text-lg text-primary-text mb-3 group-hover:text-accent-hover transition-colors">
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
