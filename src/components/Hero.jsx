import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, PlayCircle, ShieldCheck, Clock, Zap } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const mockupRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger fade up for text
      gsap.fromTo(
        '.hero-reveal',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );
      
      // Floating orbs pulse
      gsap.to('.hero-orb', {
        y: '-=20',
        x: '+=10',
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        stagger: 0.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleMockupHover = (enter) => {
    gsap.to(mockupRef.current, {
      rotateY: enter ? 0 : -5,
      rotateX: enter ? 0 : 2,
      duration: 0.8,
      ease: 'power2.out'
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100dvh] pt-32 pb-20 px-6 lg:px-12 flex items-center overflow-hidden bg-background"
    >
      {/* Background Orbs & Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-soft-green/30 rounded-full blur-[120px] hero-orb"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cool-ui-tint/20 rounded-full blur-[100px] hero-orb"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10 relative perspective-[1200px]">
        {/* Left Column - Text Focus */}
        <div className="lg:w-[90%] xl:w-[85%] flex flex-col items-start pt-10">
          <div className="hero-reveal inline-flex items-center px-3 py-1.5 rounded-full border border-border bg-alternate-background text-xs font-semibold text-secondary-text mb-6 mt-4">
            <Zap className="w-3.5 h-3.5 mr-2 text-accent-hover" />
            Done-For-You Agency Automation
          </div>
          
          <h1 className="hero-reveal flex flex-col items-start mb-8 w-full">
            <span className="font-sans font-extrabold text-[clamp(1.875rem,3vw,3rem)] leading-[1.1] tracking-tight text-primary-text mb-1">
              Build an Agency Engineered to
            </span>
            <span className="font-drama italic text-[clamp(2.75rem,5.5vw,5rem)] leading-[0.95] tracking-tight text-accent-green pr-4" style={{ filter: 'drop-shadow(0px 4px 12px rgba(163,230,53,0.15))' }}>
              Scale Without You.
            </span>
          </h1>

          <p className="hero-reveal text-lg text-secondary-text max-w-xl leading-relaxed mb-8">
            We install the workflows, automation, and AI execution layer that removes chaos, saves 10–20+ hours per week, and makes your agency less dependent on you.
          </p>

          <div className="hero-reveal flex flex-wrap items-center gap-4 mb-12">
            <a href="#book" className="group btn-magnetic px-8 py-4 bg-accent-green rounded-2xl text-primary-text font-semibold text-base shadow-sm">
              <span className="relative z-10 flex items-center transition-colors duration-300">
                Book Your AI Readiness Call <ArrowRight className="ml-2 w-4 h-4" />
              </span>
              <span className="btn-mask group-hover:bg-accent-hover rounded-2xl"></span>
            </a>
            
            <a href="#how-it-works" className="group flex items-center px-6 py-4 text-primary-text font-medium text-base btn-magnetic">
              <span className="w-10 h-10 rounded-full bg-alternate-background border border-border flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                <PlayCircle className="w-5 h-5 text-secondary-text group-hover:text-primary-text transition-colors" />
              </span>
              See How It Works
            </a>
          </div>

          <div className="hero-reveal grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border w-full">
            <div className="flex items-center text-sm font-medium text-secondary-text">
              <Clock className="w-4 h-4 mr-2 text-accent-green" /> 30-Day Implementation
            </div>
            <div className="flex items-center text-sm font-medium text-secondary-text">
              <Zap className="w-4 h-4 mr-2 text-accent-green" /> 10–20+ Hours Saved/wk
            </div>
            <div className="flex items-center text-sm font-medium text-secondary-text">
              <ShieldCheck className="w-4 h-4 mr-2 text-accent-green" /> Built for Founders
            </div>
          </div>
        </div>

        {/* Right Column - Mockup Cluster */}
        <div 
          className="hidden lg:flex relative lg:h-[700px] items-center lg:justify-end"
          onMouseEnter={() => handleMockupHover(true)}
          onMouseLeave={() => handleMockupHover(false)}
        >
          <div 
            ref={mockupRef}
            className="hero-reveal relative w-full aspect-square md:aspect-auto lg:h-[600px] lg:w-[110%] bg-white rounded-xlarge border border-border shadow-2xl overflow-hidden transform-gpu"
            style={{ transform: 'rotateY(-5deg) rotateX(2deg) scale(0.95)' }}
          >
            {/* Minimal Dashboard Mockup Design Inside */}
            <div className="absolute inset-0 bg-alternate-background p-6 flex flex-col gap-4">
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                </div>
                <div className="w-32 h-6 bg-white rounded-full border border-border"></div>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="col-span-2 row-span-2 bg-white rounded-2xl border border-border p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
                   <div className="w-full h-8 bg-alternate-background rounded-lg mb-4 w-1/2"></div>
                   <div className="flex-1 border-l-2 border-dashed border-border ml-4 relative">
                     <div className="absolute -left-[11px] top-4 w-5 h-5 bg-accent-green rounded-full flex items-center justify-center ring-4 ring-white shadow-sm"></div>
                     <div className="absolute -left-[11px] bottom-10 w-5 h-5 bg-cool-ui-tint rounded-full flex items-center justify-center ring-4 ring-white shadow-sm"></div>
                     <div className="w-full h-12 bg-alternate-background rounded-xl ml-6 mt-1 mb-8"></div>
                     <div className="w-full h-12 bg-alternate-background rounded-xl ml-6 absolute bottom-6"></div>
                   </div>
                </div>
                <div className="col-span-1 bg-white rounded-2xl border border-border shadow-sm p-4 relative overflow-hidden">
                   <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-glow-color/40 blur-[40px] rounded-full"></div>
                   <div className="w-10 h-10 rounded-full bg-soft-green mb-3 flex items-center justify-center"><Zap className="w-5 h-5 text-accent-hover" /></div>
                   <div className="w-20 h-4 bg-alternate-background rounded-full mb-2"></div>
                   <div className="w-12 h-3 bg-border rounded-full"></div>
                </div>
                <div className="col-span-1 bg-[#0F172A] rounded-2xl shadow-lg p-5 flex flex-col justify-between transform -translate-y-2 hover:translate-y-0 transition-transform cursor-pointer group">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                    <span className="font-mono text-[10px] text-white/70">AI_EXECUTION</span>
                  </div>
                  <div>
                    <div className="text-white text-lg leading-tight mb-2 font-semibold">Running Automation...</div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-accent-green rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
