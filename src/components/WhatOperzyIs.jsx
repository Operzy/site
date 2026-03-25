import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Target } from 'lucide-react';

export default function WhatOperzyIs() {
  // Bonus 1: Diagnostic Shuffler Array
  const [shufflerCards, setShufflerCards] = useState([
    { id: 1, label: 'Audit Mapping', color: 'bg-accent-green' },
    { id: 2, label: 'Bottleneck Analysis', color: 'bg-soft-green' },
    { id: 3, label: 'Visual Diagrams', color: 'bg-cool-ui-tint' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShufflerCards((prev) => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Bonus 2: Telemetry Typewriter
  const [typedText, setTypedText] = useState('');
  const fullText = "Removing repetitive admin... Auto-updating status... Sending client report...";
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        i = 0; // Restart typing
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  // Bonus 3: Cursor Protocol Scheduler
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const [activeDay, setActiveDay] = useState(-1);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      days.forEach((_, idx) => {
        tl.to(`.day-cell-${idx}`, {
            backgroundColor: '#A3E635',
            color: '#0F172A',
            duration: 0.2,
            onStart: () => setActiveDay(idx)
        }, `+=${0.5}`)
        .to(`.day-cell-${idx}`, {
            backgroundColor: 'transparent',
            color: '#334155',
            duration: 0.1
        }, `+=0.5`);
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-background py-32 px-6 lg:px-12 border-t border-border" id="features">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-center text-primary-text tracking-tight mb-6">
          We Install the Operating System Behind Your Agency
        </h2>
        <p className="text-center text-lg text-secondary-text max-w-3xl mb-20 leading-relaxed">
          Operzy transforms founder-dependent agencies into structured, AI-native businesses. We don’t sell advice, generic AI strategy, or one-off tool setups. We install the systems underneath your work.
        </p>

        {/* 3 Horizontal Feature Cards Built as "Interactive Functional Artifacts" */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full" ref={containerRef}>
          
          {/* Card 1: Diagnostic Shuffler (Workflows) */}
          <div className="group bg-background border border-border rounded-[2rem] shadow-sm flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-green transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="p-8 pb-0 flex-1 relative min-h-[220px]">
                <h3 className="font-sans font-bold text-xl text-primary-text mb-3">Workflows</h3>
                <p className="text-sm text-secondary-text mb-8">We structure how work actually moves through your agency from onboarding to delivery to reporting.</p>
                
                {/* Shuffler UI */}
                <div className="relative h-[80px] w-full mt-auto mb-6 flex items-center justify-center perspective-[1000px]">
                    {shufflerCards.map((c, i) => (
                        <div 
                           key={c.id} 
                           className={`absolute w-full px-4 py-3 rounded-xl border border-border shadow-sm flex items-center justify-center font-mono text-sm tracking-tight text-primary-text transition-all duration-[cubic-bezier(0.34,1.56,0.64,1)]`}
                           style={{
                              transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
                              zIndex: 10 - i,
                              opacity: 1 - i * 0.2,
                              backgroundColor: i === 0 ? '#FFFFFF' : '#F8FAFC'
                           }}
                        >
                            <span className={`w-2 h-2 rounded-full mr-3 ${c.color}`}></span>
                            {c.label}
                        </div>
                    ))}
                </div>
            </div>
            {/* Target indicator */}
            <Target className="absolute top-8 right-8 w-6 h-6 text-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-5 border-t border-border mt-auto bg-alternate-background/30 rounded-b-[2rem]">
                <div className="font-mono text-xs font-bold text-primary-text flex justify-between">
                    <span>SYSTEM VALUE</span>
                    <span className="text-accent-hover">OPERZY_WKFW</span>
                </div>
            </div>
          </div>

          {/* Card 2: Telemetry Typewriter (Automation) */}
          <div className="group bg-background border border-border rounded-[2rem] shadow-sm flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-green transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="p-8 pb-0 flex-1">
                <h3 className="font-sans font-bold text-xl text-primary-text mb-3">Automation</h3>
                <p className="text-sm text-secondary-text mb-8">We remove repetitive admin and coordination so the business runs with less friction and less manual effort.</p>
                
                {/* Typewriter UI */}
                <div className="bg-[#111111] rounded-xl p-4 mt-auto mb-6 h-[80px] border border-border/50 relative">
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="font-mono text-[10px] text-white/50 tracking-widest">LIVE FEED</span>
                    </div>
                    <div className="font-mono text-xs text-accent-green h-full scrollbar-hide flex items-start">
                        {typedText}<span className="inline-block w-2 h-4 bg-accent-green ml-[1px] animate-pulse"></span>
                    </div>
                </div>
            </div>
             {/* Target indicator */}
             <Target className="absolute top-8 right-8 w-6 h-6 text-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-5 border-t border-border mt-auto bg-alternate-background/30 rounded-b-[2rem]">
                <div className="font-mono text-xs font-bold text-primary-text flex justify-between">
                    <span>SYSTEM VALUE</span>
                    <span className="text-accent-hover">OPERZY_AUTO</span>
                </div>
            </div>
          </div>

          {/* Card 3: Cursor Protocol Scheduler (AI Execution) */}
          <div className="group bg-background border border-border rounded-[2rem] shadow-sm flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-green transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="p-8 pb-0 flex-1 relative">
                <h3 className="font-sans font-bold text-xl text-primary-text mb-3">AI Execution</h3>
                <p className="text-sm text-secondary-text mb-8">We install practical AI into real workflows so your team moves faster without adding complexity.</p>
                
                {/* Scheduler UI */}
                <div className="bg-alternate-background rounded-xl p-4 mt-auto mb-6 relative overflow-hidden border border-border">
                    <div className="grid grid-cols-7 gap-1">
                        {days.map((d, i) => (
                            <div key={i} className={`day-cell-${i} aspect-square rounded-md border border-border flex items-center justify-center font-mono text-[10px] font-bold text-secondary-text`}>
                                {d}
                            </div>
                        ))}
                    </div>
                    {/* Fake glowing button */}
                    <div className="mt-3 w-full py-1.5 rounded-md bg-white border border-border text-center font-mono text-[10px] text-primary-text shadow-sm">
                        Schedule Execution
                    </div>
                </div>
            </div>
             {/* Target indicator */}
             <Target className="absolute top-8 right-8 w-6 h-6 text-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-5 border-t border-border mt-auto bg-alternate-background/30 rounded-b-[2rem]">
                <div className="font-mono text-xs font-bold text-primary-text flex justify-between">
                    <span>SYSTEM VALUE</span>
                    <span className="text-accent-hover">OPERZY_EXEC</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
