import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Mail,
  FileSearch,
  ShieldCheck,
  Gauge,
  Workflow,
  Coins,
  ScrollText,
} from 'lucide-react';
import SectionHead from './SectionHead';
import { useReveal } from '../lib/reveal';
import { useSeo, SITE_URL } from '../lib/seo';

const AI_AUDIT_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Audit',
    serviceType: 'AI audit',
    description:
      'A fixed, three-week AI audit, what your AI is running, whether it is accurate, what it exposes, what it costs, and a ranked plan for what to do next.',
    url: `${SITE_URL}/services/ai-audit`,
    areaServed: 'US',
    provider: { '@type': 'Organization', name: 'Operzy', url: SITE_URL },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'AI Audit', item: `${SITE_URL}/services/ai-audit` },
    ],
  },
];

const CONTACT_EMAIL = 'contact@operzy.com';

// What an audit actually inspects. Each maps to a section of the written report.
const AREAS = [
  {
    icon: FileSearch,
    title: 'Where AI would pay off',
    body: 'We map where the time actually goes and score each process on effort, volume and how well it fits automation, so you spend on the two or three that matter, not the twenty that sound good in a deck.',
  },
  {
    icon: Gauge,
    title: 'What is already running',
    body: 'The tools, models and half-built workflows already in use, official or not. How accurate they are, whether anyone is checking, and which are quietly doing more harm than good.',
  },
  {
    icon: ShieldCheck,
    title: 'Data, security and exposure',
    body: 'What data these systems touch, where it goes, and who can see it. The gaps a security review would flag, before it does, including prompts and vendors leaking more than you think.',
  },
  {
    icon: Coins,
    title: 'Spend and licences',
    body: 'What you are paying across seats, API usage and overlapping vendors, set against what it returns. The duplicated tools and idle licences usually pay for the audit on their own.',
  },
  {
    icon: ScrollText,
    title: 'Governance and risk',
    body: 'Who owns each system, what happens when a model is wrong, and whether any of it would survive an auditor or regulator asking. The policy you need versus the policy you have.',
  },
  {
    icon: Workflow,
    title: 'A plan you can act on',
    body: 'Not a maturity score. A ranked list of what to fix, build, buy or switch off, each with the payoff, the effort and who has to sign off, so the next step is obvious.',
  },
];

// The audit runs in a fixed, short window. Real deliverables at the end.
const STEPS = [
  {
    n: '01',
    title: 'We map the ground',
    window: 'Week one',
    body: 'Short sessions with the people doing the work and whoever owns the systems. We inventory the tools in use, the data they touch and where time disappears, without pulling your team off their day job.',
  },
  {
    n: '02',
    title: 'We dig into what we found',
    window: 'Week two',
    body: 'Accuracy, security, spend and ownership, examined against real examples rather than vendor claims. Where something is already at risk, you hear about it straight away, not at the end.',
  },
  {
    n: '03',
    title: 'We hand you the findings',
    window: 'Week three',
    body: 'A written report and a walkthrough with your team: what is working, what is exposed, what to stop paying for, and a ranked plan for what to do next, costed and sequenced.',
  },
];

// Concrete artefacts the client walks away with, audit or no follow-on work.
const DELIVERABLES = [
  'A written report your board and security team can read',
  'An inventory of every AI tool, model and workflow in use',
  'A ranked roadmap, build, buy, fix or retire, with payoff and effort against each',
  'A spend review, with the duplicated and idle licences flagged',
  'The risks and data-exposure gaps, in plain language',
  'A live walkthrough with your team, and answers to what comes next',
];

export default function AiAudit() {
  const scope = useReveal();

  useSeo({
    title: 'AI Audit, What Your AI Is Doing, Costing and Risking | Operzy',
    description:
      'A fixed, three-week AI audit from Operzy: what AI is running across your teams, whether it is accurate, what it exposes, what it costs, and a ranked plan for what to do next.',
    path: '/services/ai-audit',
    jsonLd: AI_AUDIT_JSON_LD,
  });

  return (
    <div ref={scope}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line bg-canvas">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="grid-faint absolute inset-0 opacity-40" />
          <div className="bloom absolute -top-[35%] left-1/2 h-[720px] w-[1100px] -translate-x-1/2" />
        </div>

        <div className="shell relative py-24 lg:py-32">
          <div data-reveal className="mb-6 flex items-center gap-3">
            <span className="h-px w-6 bg-mint/50" />
            <span className="kicker">Services, AI Audit</span>
          </div>

          <h1
            data-reveal
            className="max-w-3xl font-display text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.034em] text-text"
          >
            Find out what your AI is actually{' '}
            <span className="text-gradient-mint">doing, costing and risking.</span>
          </h1>

          <p data-reveal className="mt-7 max-w-2xl text-[16.5px] leading-[1.8] text-text-muted">
            Most companies now have AI tools scattered across teams, some sanctioned, most not.
            An Operzy AI Audit is a fixed, three-week look at all of it: what is running, whether
            it is accurate, what it is exposing, what it is costing, and where it would genuinely
            pay to do more. You finish with a plan you can act on, not a maturity score.
          </p>

          <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/book" className="btn-mint">
              Book an audit call <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-outline">
              <Mail className="h-3.5 w-3.5" /> {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* ── What we look at ──────────────────────────────────── */}
      <section className="relative border-b border-line bg-canvas">
        <div className="shell py-24 lg:py-32">
          <SectionHead
            kicker="What we look at"
            title="Six questions, and we"
            accent="answer all six."
            lede="An audit is only useful if it is honest and specific. We go looking for the awkward findings, the tool nobody owns, the licence nobody uses, the model quietly getting things wrong, because those are the ones worth the exercise."
          />

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                data-reveal
                className="group relative overflow-hidden rounded-lg border border-line bg-surface p-8 transition-colors duration-500 hover:border-line-strong"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-mint/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-surface-2">
                    <Icon className="h-[19px] w-[19px] text-mint" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 font-display text-[19px] font-medium tracking-[-0.02em] text-text">
                    {title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.75] text-text-muted">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it runs ──────────────────────────────────────── */}
      <section className="relative border-b border-line bg-canvas">
        <div className="shell py-24 lg:py-32">
          <SectionHead
            kicker="How it runs"
            title="Three weeks, fixed scope,"
            accent="no disruption."
            lede="The audit is deliberately short and bounded. We work around your team rather than through them, and the price is agreed up front, you know the number before we start, and there is no obligation to build anything afterwards."
          />

          <div className="mx-auto mt-16 max-w-4xl">
            {STEPS.map(({ n, title, window, body }, i) => (
              <article key={n} data-reveal className="group relative pl-10 sm:pl-14">
                <span
                  className={`absolute left-[7px] top-3 w-px bg-line sm:left-[11px] ${
                    i === STEPS.length - 1 ? 'h-0' : 'h-full'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-mint/40 bg-canvas sm:h-6 sm:w-6"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-mint transition-transform duration-300 group-hover:scale-150" />
                </span>

                <div className="pb-12">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-[12px] text-mint">{n}</span>
                    <h3 className="font-display text-[22px] font-medium tracking-[-0.025em] text-text">
                      {title}
                    </h3>
                    <span className="text-[13px] text-text-dim">{window}</span>
                  </div>
                  <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-text-muted">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you walk away with ──────────────────────────── */}
      <section className="relative border-b border-line bg-canvas">
        <div className="shell py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div data-reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-6 bg-mint/50" />
                <span className="kicker">What you get</span>
              </div>
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-medium leading-[1.12] tracking-[-0.03em] text-text">
                Something you can put in front of{' '}
                <span className="text-gradient-mint">a board.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-text-muted">
                Every finding is written down, evidenced and ranked. The report stands on its own, whether you build the next thing with us, take it in-house, or simply switch off what
                you did not know you were paying for.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:content-start">
              {DELIVERABLES.map((d) => (
                <li
                  key={d}
                  data-reveal
                  className="flex items-start gap-3 rounded-lg border border-line bg-surface p-5 text-[14px] leading-[1.6] text-text-muted transition-colors duration-400 hover:border-mint/30"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-canvas">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="grid-faint absolute inset-0 opacity-40" />
          <div className="bloom absolute bottom-[-45%] left-1/2 h-[760px] w-[1100px] -translate-x-1/2" />
        </div>

        <div className="shell relative py-28 text-center lg:py-36">
          <h2
            data-reveal
            className="mx-auto max-w-3xl font-display text-[clamp(2rem,4.4vw,3.2rem)] font-medium leading-[1.1] tracking-[-0.034em] text-text"
          >
            Start with a clear picture{' '}
            <span className="text-gradient-mint">of where you stand.</span>
          </h2>
          <p data-reveal className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.8] text-text-muted">
            A short call is the quickest way to scope the audit and agree a price. No pitch, we tell
            you plainly whether it is worth doing.
          </p>
          <div data-reveal className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Link to="/book" className="btn-mint">
              Book an audit call <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-outline">
              <Mail className="h-3.5 w-3.5" /> {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
