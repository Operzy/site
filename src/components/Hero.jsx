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

      // AI Node Laser Scanner Animation
      gsap.fromTo('.laser-scan', 
        { top: '0%' }, 
        { top: '100%', duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 }
      );

      // AI Node Line flowing animation
      gsap.to('.data-line', {
        strokeDashoffset: -20,
        duration: 3,
        ease: 'linear',
        repeat: -1
      });

      // AI Box Hover Breaths
      gsap.to('.ai-node', {
        y: '-=6',
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        stagger: 0.4
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
            className="hero-reveal relative flex items-center justify-center w-full lg:h-[600px] lg:w-[110%] transform-gpu"
            style={{ transform: 'rotateY(-5deg) rotateX(2deg)' }}
          >
            {/* The AI Node Graph from Banner (Scaled & Animated for React) */}
            <div className="relative w-[400px] h-[350px] scale-[0.8] sm:scale-100 lg:scale-125 xl:scale-150 origin-center filter drop-shadow-2xl">
              
              {/* SVG Wireframe Connections */}
              <svg className="absolute inset-0 w-full h-full z-0 drop-shadow-[0_0_8px_rgba(163,230,53,0.3)]" fill="none" stroke="#65A30D" strokeOpacity="0.6" strokeWidth="2.5">
                  <path className="data-line" d="M 80 70 L 130 70 L 170 140" strokeLinecap="round" strokeDasharray="4 6"/>
                  <path className="data-line" d="M 80 270 L 130 270 L 170 200" strokeLinecap="round" strokeDasharray="4 6"/>
                  <path className="data-line" d="M 260 170 L 330 170" strokeLinecap="round" strokeDasharray="4 6"/>
              </svg>

              {/* Input Node 1 */}
              <div className="ai-node absolute top-[50px] left-[-20px] w-[130px] h-[40px] bg-white border border-border rounded-lg shadow-md flex items-center px-3 z-10 transition-transform">
                  <div className="w-5 h-5 rounded-full bg-accent-green/10 flex items-center justify-center mr-2 shrink-0 border border-accent-green/30">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#65A30D" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 tracking-wider pt-px">ONBOARDING</span>
              </div>

              {/* Input Node 2 */}
              <div className="ai-node absolute top-[250px] left-[-20px] w-[130px] h-[40px] bg-white border border-border rounded-lg shadow-md flex items-center px-3 z-10 transition-transform" style={{ animationDelay: '0.4s' }}>
                  <div className="w-5 h-5 rounded-full bg-accent-green/10 flex items-center justify-center mr-2 shrink-0 border border-accent-green/30">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#65A30D" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 tracking-wider pt-px">REPORTING</span>
              </div>

              {/* API Logic Block */}
              <div className="ai-node absolute top-[30px] left-[170px] w-[150px] h-[55px] bg-white border border-border rounded-xl shadow-lg p-3 flex flex-col justify-center z-0 transition-transform">
                  <div className="flex items-center mb-1.5">
                      <span className="text-[10px] font-bold text-[#0F172A] opacity-70 font-mono">execute_task()</span>
                  </div>
                  <div className="flex items-center ml-2">
                      <div className="w-2 h-2 rounded-full bg-accent-green mr-2 shadow-[0_0_8px_#A3E635]"></div>
                      <div className="h-[4px] w-16 bg-primary/10 rounded-full"></div>
                  </div>
              </div>

              {/* Central AI Logic Core */}
              <div className="absolute top-[100px] left-[140px] w-[140px] h-[140px] bg-[#0F172A] border-[2px] border-[#334155] rounded-3xl shadow-[0_20px_40px_rgba(163,230,53,0.2)] flex items-center justify-center z-20 overflow-hidden isolation-auto">
                  {/* Laser Scanner Line */}
                  <div className="laser-scan absolute left-0 w-full h-[3px] bg-accent-green shadow-[0_0_15px_3px_#A3E635] z-30"></div>
                  
                  <div className="w-[100px] h-[100px] rounded-full border-[1.5px] border-accent-green/30 flex items-center justify-center relative">
                      {/* Rotating ring */}
                      <div className="absolute inset-0 rounded-full border border-dashed border-accent-green/50 animate-[spin_8s_linear_infinite]"></div>
                      
                      <div className="w-[60px] h-[60px] rounded-full border-2 border-accent-green/60 flex items-center justify-center bg-accent-green/10 relative z-10">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent-green drop-shadow-[0_0_8px_rgba(163,230,53,0.8)]" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" fill="rgba(163,230,53,0.4)"/>
                          </svg>
                      </div>
                  </div>
              </div>

              {/* Output Status Node */}
              <div className="ai-node absolute top-[150px] right-[-40px] w-[130px] h-[40px] bg-white border border-border rounded-lg shadow-md flex items-center px-3 z-10 transition-transform" style={{ animationDelay: '0.8s' }}>
                  <div className="w-5 h-5 rounded-full bg-accent-green/10 flex items-center justify-center mr-2 shrink-0 border border-accent-green/30">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#65A30D" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 tracking-wider pt-px">DELIVERY</span>
              </div>

              {/* Autopilot Badge */}
              <div className="absolute bottom-[20px] left-[130px] bg-[#1E293B] rounded-full px-4 py-1.5 flex items-center border border-[#334155] z-30 shadow-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-accent-green/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-green mr-2 shadow-[0_0_8px_rgba(163,230,53,1)] animate-pulse relative z-10"></div>
                  <span className="text-xs text-white font-bold tracking-[0.25em] font-mono relative z-10">AUTOPILOT</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
