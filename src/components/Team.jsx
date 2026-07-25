import React from 'react';
import { GraduationCap, Building2, Workflow, LineChart, Linkedin } from 'lucide-react';
import SectionHead from './SectionHead';
import { useReveal } from '../lib/reveal';
import headshot from '../assets/jake-mamrak.jpg';

// Single place to correct the founder's details.
const FOUNDER = {
  name: 'Jake Mamrak',
  role: 'Founder',
  photo: headshot,
  linkedin: 'https://www.linkedin.com/in/jacobmamrak/',
};

const FACTS = [
  ['50+', 'businesses advised on AI and automation'],
  ['8-figure', 'businesses worked with, from first hire up'],
  ['12+', 'industries served, from clinics to logistics'],
];

const CREDENTIALS = [
  {
    icon: Workflow,
    title: 'Process before technology',
    body: 'Every engagement starts with how the work runs today: where the hours go, where it breaks, and who has to check it. The technology decision follows that, never the other way around.',
  },
  {
    icon: Building2,
    title: 'Range across company size',
    body: 'Work spanning more than fifty businesses, from early-stage companies building their first repeatable process to established operations trying to grow without adding headcount.',
  },
  {
    icon: GraduationCap,
    title: 'Analytics and systems training',
    body: 'A Business Analytics and Information Systems degree from the University of South Florida, covering both the measurement of business performance and the systems that deliver it.',
  },
  {
    icon: LineChart,
    title: 'Accountable to the numbers',
    body: 'Baselines are agreed before a build starts and measured again after it ships, so the result is something you can verify rather than something we assert.',
  },
];

export default function Team() {
  const scope = useReveal();

  return (
    <section id="team" ref={scope} className="relative border-t border-line bg-canvas">
      <div className="shell py-24 lg:py-32">
        <SectionHead
          kicker="Team"
          title="Fifty-plus businesses in,"
          accent="here's the track record."
          lede="Operzy stays deliberately small, so you work directly with the person building your system. Here is the range of companies, industries and problems that work has covered."
        />

        {/* Bio + facts */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div data-reveal className="lg:col-span-7">
            <div className="rounded-lg border border-line bg-surface p-8 lg:p-10">
              <div className="flex items-center gap-5">
                <img
                  src={FOUNDER.photo}
                  alt={`${FOUNDER.name}, ${FOUNDER.role} of Operzy`}
                  width={400}
                  height={400}
                  className="h-20 w-20 shrink-0 rounded-lg border border-line object-cover sm:h-24 sm:w-24"
                />
                <div>
                  <h3 className="font-display text-[24px] font-medium tracking-[-0.025em] text-text">
                    {FOUNDER.name}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] font-medium text-mint">{FOUNDER.role}</p>
                  <a
                    href={FOUNDER.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-text-muted transition-colors duration-200 hover:text-mint"
                    aria-label={`${FOUNDER.name} on LinkedIn`}
                  >
                    <Linkedin className="h-3.5 w-3.5" strokeWidth={1.8} />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="mt-8 space-y-5 text-[15.5px] leading-[1.8] text-text-muted">
                <p>
                  I've spent my career on a single question: which parts of a business should a
                  person never have to do by hand again? I've worked through it with more than fifty
                  companies, from first-hire startups to eight-figure operations, across more than a
                  dozen industries. The scale changes; the question does not.
                </p>
                <p>
                  My training is in Business Analytics and Information Systems, a degree split between
                  measuring how a business actually performs and building the systems that run it, and both halves matter here. But most of what I bring came from the projects
                  themselves, watching what makes automation stick and what makes it quietly fail.
                </p>
                <p>
                  Because the failures were rarely technical. Automation stalls because nobody agreed
                  on the measure, because the edge cases were never mapped, or because the system was
                  built somewhere the client could not maintain it. Operzy is built to close those
                  gaps first.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5">
            {FACTS.map(([stat, label]) => (
              <div
                key={label}
                data-reveal
                className="rounded-lg border border-line bg-surface p-7 transition-colors duration-400 hover:border-mint/30"
              >
                <p className="font-display text-[26px] font-medium leading-none tracking-[-0.03em] text-gradient-mint">
                  {stat}
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How that shows up in the work */}
        <div data-reveal className="mt-20 text-center">
          <span className="kicker">How that shows up in the work</span>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
          {CREDENTIALS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              data-reveal
              className="rounded-lg border border-line bg-surface p-8 transition-colors duration-400 hover:border-line-strong"
            >
              <Icon className="h-[19px] w-[19px] text-mint" strokeWidth={1.6} />
              <h3 className="mt-6 font-display text-[17px] font-medium tracking-[-0.02em] text-text">
                {title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.75] text-text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
