import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      if (cards.length > 0 && window.innerWidth >= 1024) {
        cards.forEach((card, i) => {
          if (i !== cards.length - 1) { // Skip last card
            const nextCard = cards[i + 1];
            gsap.to(card, {
              scale: 0.9,
              filter: 'blur(20px)',
              opacity: 0.5,
              transformOrigin: 'top center',
              scrollTrigger: {
                trigger: nextCard,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              }
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01', title: 'Audit',
      text: 'We map how your agency actually runs today and identify the bottlenecks, dependencies, and highest-impact opportunities.',
      Animation: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent-green animate-[spin_20s_linear_infinite]">
          <path fill="currentColor" opacity="0.1" d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
          <polygon fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" points="50 10 90 30 90 70 50 90 10 70 10 30" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      )
    },
    {
      num: '02', title: 'Build',
      text: 'We install the workflows, automation, and AI systems that create structure, remove waste, and improve execution.',
      Animation: () => (
        <div className="relative w-full h-full overflow-hidden bg-background border border-border grid grid-cols-5 grid-rows-5 rounded-lg opacity-40">
          {Array.from({length: 25}).map((_, i) => <div key={i} className="border border-border"></div>)}
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-accent-green shadow-[0_0_15px_2px_#A3E635] animate-[scan_3s_ease-in-out_infinite_alternate]"></div>
        </div>
      )
    },
    {
      num: '03', title: 'Enable',
      text: 'We train your team, roll out usage, and make sure the system gets adopted so the gains actually stick.',
      Animation: () => (
        <svg viewBox="0 0 200 50" className="w-full h-full text-accent-green">
          <path 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="2" 
             d="M0 25 L50 25 L60 10 L70 40 L80 25 L200 25"
             className="animate-[dash_2s_linear_infinite]"
             strokeDasharray="200"
             strokeDashoffset="200"
          />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="bg-background relative protocol-wrapper" id="how-it-works">
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-center text-primary-text mb-12">
          A Simple 3-Step Process
        </h2>
      </div>

      <style>{`
        @keyframes scan { 0% { left: 0%; } 100% { left: 100%; } }
        @keyframes dash { to { stroke-dashoffset: 0; } }
      `}</style>

      {steps.map((step, idx) => (
        <div key={idx} className="protocol-card min-h-screen w-full flex items-center justify-center p-6 pb-20 sticky top-0 bg-background/90 backdrop-blur-md">
          <div className="max-w-5xl w-full bg-white border border-border rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[600px] relative z-20">
            {/* Visual Column */}
            <div className="w-full md:w-1/2 bg-[#F8FAFC] border-b md:border-b-0 md:border-r border-border p-12 flex items-center justify-center relative">
               <div className="w-64 h-64 relative">
                  <step.Animation />
               </div>
            </div>
            
            {/* Text Column */}
            <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-white relative">
              <span className="font-mono text-6xl text-border font-bold absolute top-12 right-12 opacity-50">{step.num}</span>
              <h3 className="font-sans font-bold text-4xl text-primary-text mb-6 mt-12">{step.title}</h3>
              <p className="text-xl text-secondary-text leading-relaxed">{step.text}</p>
              <div className="mt-12">
                 <div className="w-12 h-1 bg-accent-green mb-8"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
