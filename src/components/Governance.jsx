import React from 'react';
import { Lock, FileCheck2, ServerCog, UserCheck, ScrollText, LogOut } from 'lucide-react';
import SectionHead from './SectionHead';
import { useReveal } from '../lib/reveal';

const COMMITMENTS = [
  {
    icon: ServerCog,
    title: 'It runs in your accounts',
    body: 'We build inside your own cloud, AWS, Azure or GCP, in the region you need it to stay in. The infrastructure stays yours, not something you rent from us.',
  },
  {
    icon: Lock,
    title: 'Your data is not training data',
    body: 'We never use your data to train models, and neither do the providers we run on. Retention, residency and deletion are agreed in writing, under your DPA, before we start.',
  },
  {
    icon: UserCheck,
    title: 'Access stays tight',
    body: 'Least privilege, through your own SSO and identity provider. We only get access to what the work actually needs, and you can revoke it at any time without asking us first.',
  },
  {
    icon: ScrollText,
    title: 'You can see what it did',
    body: 'Every action is logged and exportable, what happened, what it was based on, and who approved it. Useful when something looks off, and when an auditor or regulator asks you to explain it.',
  },
  {
    icon: FileCheck2,
    title: 'You own what we build',
    body: 'The code, the configuration, the prompts, the documentation, all yours. Nothing is locked behind a platform of ours.',
  },
  {
    icon: LogOut,
    title: 'You can take it in-house',
    body: 'Every project ends with documentation good enough for your own team to run the system without us. That is the point, not a threat.',
  },
];

export default function Governance() {
  const scope = useReveal();

  return (
    <section id="governance" ref={scope} className="relative border-t border-line bg-canvas">
      <div className="shell py-24 lg:py-32">
        <SectionHead
          kicker="Your data, your system"
          title="Handing a process to software is"
          accent="a trust question first."
          lede="Before it is a technical decision, it is a question of what you are letting someone else touch. These hold on every engagement we take on, at any size, and we will walk your security team through all of it before a line of code is written."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {COMMITMENTS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              data-reveal
              className="rounded-lg border border-line bg-surface p-7 transition-colors duration-400 hover:border-line-strong"
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
