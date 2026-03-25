import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BeliefShift() {
  const textRef = useRef(null);

  useEffect(() => {
    // Reveal text word-by-word simulation
    const elements = textRef.current.querySelectorAll('.reveal-span');
    gsap.fromTo(elements, 
      { opacity: 0, y: 20 },
      {
        opacity: 1, 
        y: 0,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="bg-primary-text py-32 px-6 lg:px-12 relative overflow-hidden border-y border-border" id="about">
      {/* Cinematic Photography Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-luminosity z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687959-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-center text-background tracking-tight mb-20 max-w-4xl" ref={textRef}>
          <span className="reveal-span inline-block mr-2">Agencies</span> 
          <span className="reveal-span inline-block mr-2">Don’t</span> 
          <span className="reveal-span inline-block mr-2">Scale</span> 
          <span className="reveal-span inline-block mr-2">With</span> 
          <span className="reveal-span inline-block mr-2">More</span> 
          <span className="reveal-span inline-block mr-2">People.</span> 
          <br className="hidden md:block" />
          <span className="reveal-span inline-block mr-2 mt-2">They</span> 
          <span className="reveal-span inline-block mr-2 mt-2">Scale</span> 
          <span className="reveal-span inline-block mr-2 mt-2">With</span> 
          <span className="reveal-span inline-block mr-2 mt-2 font-drama italic text-accent-green massive-contrast text-6xl md:text-8xl transform translate-y-2">Better Systems.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16">
          <div className="bg-[#1E293B]/80 backdrop-blur-md border border-[#334155] rounded-xlarge p-10 flex flex-col shadow-sm transform-gpu hover:-translate-y-2 transition-transform duration-500">
            <span className="font-mono text-sm tracking-widest text-[#94A3B8] mb-6">OLD WAY</span>
            <p className="text-2xl text-background leading-tight font-medium opacity-90">
              We need better people, more tools, or tighter project management.
            </p>
          </div>
          
          <div className="bg-soft-green border border-accent-green/30 rounded-xlarge p-10 flex flex-col shadow-lg transform-gpu hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/40 blur-[30px] rounded-full pointer-events-none"></div>
            <span className="font-mono text-sm tracking-widest text-primary-text font-semibold mb-6">NEW WAY</span>
            <p className="text-2xl text-primary-text leading-tight font-bold">
              We need to redesign the business around workflows, then automate and AI-enable what can be removed.
            </p>
          </div>
        </div>

        <p className="text-center text-[#CBD5E1] font-medium text-lg max-w-3xl">
          AI does not fix broken operations. It amplifies them. <br className="hidden md:block" />
          <span className="text-background font-bold">Clear workflows come first. Automation and AI come second.</span>
        </p>

      </div>
    </section>
  );
}
