import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { LayoutDashboard, Users, Zap, FileText, Globe, Target } from 'lucide-react';

export default function SystemModules() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.sys-mod-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const modules = [
    { title: 'Client Onboarding', text: 'Asset collection, kickoff readiness, expectations, and role clarity built into one repeatable system.', icon: Users },
    { title: 'Reporting & Visibility', text: 'Automated updates, consolidated metrics, and AI-assisted summaries that reduce manual reporting time.', icon: LayoutDashboard },
    { title: 'Delivery Workflow', text: 'Task ownership, approvals, revisions, and recurring workflows that move work without founder intervention.', icon: CheckSquare },
    { title: 'One Source of Truth', text: 'Connected files, statuses, requests, and approvals organized in one structured workspace.', icon: Globe },
    { title: 'Internal Knowledge + AI', text: 'Turn proposals, SOPs, and operating knowledge into a usable system your team can access instantly.', icon: FileText },
    { title: 'Automation Layer', text: 'Triggers, reminders, status changes, notifications, summaries, and repetitive admin handled automatically.', icon: Zap }
  ];

  function CheckSquare(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
    );
  }

  return (
    <section className="bg-alternate-background py-32 px-6 lg:px-12 border-t border-border" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-center text-primary-text mb-20 tracking-tight">
          What the System Can Include
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <div 
              key={idx} 
              className="sys-mod-card group bg-background rounded-[2rem] border border-border p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-default"
            >
              {/* Highlight Target Indicator built from GEMINI.md Core Frameworks logic */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-border bg-alternate-background flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                 <Target className="w-5 h-5 text-accent-green" />
              </div>

              <div className="w-16 h-16 rounded-full bg-soft-green/50 border border-accent-green/20 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                <mod.icon className="w-7 h-7 text-accent-hover" />
              </div>
              
              <h3 className="font-sans font-bold text-xl text-primary-text mb-4 relative z-10 hover">
                <span className="bg-left-bottom bg-gradient-to-r from-accent-green to-accent-hover bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">{mod.title}</span>
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed relative z-10">{mod.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
