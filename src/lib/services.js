import {
  Sparkles,
  ShieldCheck,
  Bot,
  GraduationCap,
  BookOpen,
  Gauge,
  Wrench,
  Inbox,
  FileText,
  ClipboardCheck,
  Network,
  RefreshCw,
  BarChart3,
} from 'lucide-react';

/**
 * Services shown in the "Services" nav dropdown and footer.
 *
 * AI Audit has its own bespoke page component (AiAudit.jsx) and is NOT in
 * SERVICES below, it only appears in SERVICE_LINKS for navigation. The other
 * services render from the SERVICES data through the shared ServicePage
 * template, exactly like the industries system. Adding a templated service is
 * a matter of adding an object to SERVICES and a link to SERVICE_LINKS.
 */

export const SERVICE_LINKS = [
  {
    slug: 'ai-audit',
    name: 'AI Audit',
    blurb: 'A fixed look at what your AI is doing, costing and risking.',
    href: '/services/ai-audit',
  },
  {
    slug: 'ai-enablement',
    name: 'AI Enablement',
    blurb: 'Get your whole team using AI, safely and productively.',
    href: '/services/ai-enablement',
  },
  {
    slug: 'automations',
    name: 'Automations',
    blurb: 'Your repetitive processes, built to run end to end.',
    href: '/services/automations',
  },
];

// Full page content for the template-rendered services (everything except the
// bespoke AI Audit page).
export const SERVICES = {
  'ai-enablement': {
    slug: 'ai-enablement',
    name: 'AI Enablement',
    seo: {
      title: 'AI Enablement, Get Your Team Productive with AI | Operzy',
      description:
        "Operzy's AI enablement gets your team using AI safely and productively, the right tools, clear guardrails, hands-on training and custom assistants built on your own data.",
    },
    hero: {
      title: 'Get your whole team',
      accent: 'actually using AI.',
      lede: 'Most companies now have AI scattered across teams, trials nobody finished, a policy nobody reads, a few power users and everyone else guessing. AI enablement turns that into a real capability: the right tools, clear guardrails, hands-on training, and assistants built around the work your team actually does.',
    },
    overview: {
      kicker: 'What we set up',
      title: 'The pieces that make AI',
      accent: 'stick.',
      lede: 'Tools on their own do not change how a team works. These do.',
      items: [
        { icon: Bot, title: 'Custom assistants & copilots', body: 'Assistants built on your own documents, data and processes, so the answers are yours, not generic.' },
        { icon: ShieldCheck, title: 'Guardrails & policy', body: 'A clear, usable policy for what is allowed, what data can go where, and how sensitive information stays protected.' },
        { icon: Wrench, title: 'The right toolset', body: 'The models and tools that fit your work, set up with secure access, instead of a dozen half-used subscriptions.' },
        { icon: GraduationCap, title: 'Hands-on training', body: 'Role-specific sessions that teach your team to use AI on their real tasks, not a generic webinar forgotten by Friday.' },
        { icon: BookOpen, title: 'Prompt & template library', body: 'A shared library of prompts and templates that actually work, so good practice spreads instead of being reinvented.' },
        { icon: Gauge, title: 'Adoption & measurement', body: 'We track what gets used and what genuinely saves time, and keep tuning until AI is part of how the team works.' },
      ],
    },
    process: {
      kicker: 'How it works',
      title: 'Four steps to a team',
      accent: 'that runs on AI.',
      lede: 'The same discipline as any rollout: start where the value is, keep it safe, and make it stick.',
      steps: [
        { n: '01', title: 'Assess where you are', window: 'Week one', body: 'What your team already uses, where AI would help most, and what has to stay off-limits. An honest read, not a sales pitch.' },
        { n: '02', title: 'Set up tools & guardrails', window: 'Weeks two–three', body: 'The right tools, secure access, a workable policy, and the first custom assistants built on your own material.' },
        { n: '03', title: 'Train & roll out', window: 'Weeks three–four', body: 'Hands-on, role-specific training on real tasks, with the prompt library and templates your team will actually reach for.' },
        { n: '04', title: 'Support adoption', window: 'Ongoing', body: 'We stay on to answer questions, add assistants, and keep tuning as your team and the tools change.' },
      ],
    },
    deliverables: {
      title: 'A team that uses AI',
      accent: 'on purpose.',
      lede: 'Every piece written down and set up, so the capability outlasts the engagement.',
      items: [
        'A clear, usable AI policy your team will actually follow',
        'Custom assistants built on your own data and documents',
        'A vetted toolset with secure access, not a pile of subscriptions',
        'Role-specific training your team can put to work immediately',
        'A shared prompt and template library',
        'Adoption tracking, so you can see what is really saving time',
      ],
    },
    cta: {
      title: 'See where AI would help',
      accent: 'your team most.',
      lede: 'A short call to find where your team loses time, and where getting them properly set up with AI would pay off.',
    },
  },

  automations: {
    slug: 'automations',
    name: 'Automations',
    seo: {
      title: 'Automations, Custom Workflow Automation | Operzy',
      description:
        'Operzy builds custom automations that run your repetitive processes end to end, intake, review, approvals, follow-up and reconciliation, connected to the tools you already use.',
    },
    hero: {
      title: 'Put your busywork',
      accent: 'on autopilot.',
      lede: "The repetitive, multi-step processes that eat your team's week, intake, review, approvals, follow-up, reconciliation, built to run end to end across the tools you already use. The system handles the routine; your people stay in the loop where judgement matters.",
    },
    overview: {
      kicker: 'What we automate',
      title: 'The work that should',
      accent: 'run itself.',
      lede: 'If it is repetitive, high-volume and follows rules, it is a candidate. These are the usual suspects.',
      items: [
        { icon: Inbox, title: 'Intake & routing', body: 'Enquiries, tickets and applications read, sorted and sent to the right place with the context already attached.' },
        { icon: FileText, title: 'Document processing', body: 'The same fields pulled from contracts, invoices and forms, checked against your systems, with exceptions flagged.' },
        { icon: ClipboardCheck, title: 'Approvals & workflows', body: 'Multi-step processes that move on their own, routed for sign-off by your rules, escalated only when they need to be.' },
        { icon: Network, title: 'Data sync & integration', body: 'Records kept in step across the systems that never agree, with a full history of every change.' },
        { icon: RefreshCw, title: 'Follow-ups & chasing', body: 'The reminders, nudges and reconciliations nobody wants to own, handled consistently and on time.' },
        { icon: BarChart3, title: 'Reporting', body: 'Recurring reports assembled from source systems, the same way every time, ready when you need them.' },
      ],
    },
    process: {
      kicker: 'How it works',
      title: 'Four steps, and you can',
      accent: 'stop after any of them.',
      lede: 'We start with the process worth the most, prove it works, then expand, never a big-bang rollout.',
      steps: [
        { n: '01', title: 'Find the highest-value process', window: 'Phase one', body: 'We map where the time goes and pick the process where automation is genuinely worth it. If nothing is yet, we tell you.' },
        { n: '02', title: 'Design it', window: 'Phase two', body: 'What the new flow looks like, what connects to what, and where a person still signs off. Your IT and security review it before it is built.' },
        { n: '03', title: 'Build & prove it', window: 'Phase three', body: 'We build in stages and run it alongside your current process until it is clearly doing better, then switch over.' },
        { n: '04', title: 'Run & maintain', window: 'Ongoing', body: 'We monitor accuracy and volume, fix what drifts, and keep tuning, or hand it cleanly to your team.' },
      ],
    },
    deliverables: {
      title: 'A process that runs',
      accent: 'without you.',
      lede: 'Real, working automation, connected, monitored and documented.',
      items: [
        'A working automation running your process end to end',
        'Real integration into the tools you already use',
        'A human in the loop wherever judgement matters',
        'Monitoring and alerts so drift gets caught early',
        'Documentation your team can actually maintain',
        'Ongoing support under SLA, or a clean handover',
      ],
    },
    cta: {
      title: 'Find the process worth',
      accent: 'automating first.',
      lede: 'A short call to find where your team loses the most time to repetitive work, and what automating it is worth.',
    },
  },
};

export function getService(slug) {
  return SERVICES[slug];
}
