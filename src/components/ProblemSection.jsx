import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CircleDot } from 'lucide-react';

export default function ProblemSection() {
  const painCards = [
    { title: 'Founder Bottleneck', text: 'Your team still routes too many decisions through you.' },
    { title: 'Manual Reporting', text: 'Weekly and monthly updates take too long and drain valuable team time.' },
    { title: 'Messy Onboarding', text: 'Assets, approvals, access, and kickoff steps are inconsistent across clients.' },
    { title: 'Slow Handoffs', text: 'Work gets delayed between sales, onboarding, delivery, and approvals.' },
    { title: 'Scattered Tools', text: 'Your information lives in too many places and nothing feels fully connected.' },
    { title: 'Growth Without Control', text: 'As demand increases, operations feel worse instead of stronger.' },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.reveal-card',
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

  return (
    <section className="bg-background py-24 px-6 lg:px-12" id="problem" ref={sectionRef}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
        <div className="flex flex-col pt-4">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary-text tracking-tight mb-6">
            The Real Reason Your Agency Feels Harder Than It Should
          </h2>
          <p className="text-lg text-secondary-text leading-relaxed max-w-md">
            You’re not disorganized. You became the system. Most agencies don’t have a talent problem or a tools problem. They have a <span className="font-bold text-primary-text">workflow problem</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painCards.map((card, idx) => (
            <div 
              key={idx}
              className="reveal-card bg-alternate-background border border-border rounded-xl px-6 py-6 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start">
                <CircleDot className="w-5 h-5 text-accent-green mt-1 shrink-0 mr-4" />
                <div>
                  <h3 className="font-sans font-bold text-lg text-primary-text mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-secondary-text leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
