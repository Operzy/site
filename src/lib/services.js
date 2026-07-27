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
  Brain,
  Database,
  Search,
  MessageSquare,
  Lock,
  Plug,
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
    href: 'https://audit.operzy.com',
    external: true,
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
  {
    slug: 'company-brain',
    name: 'Company Brain',
    blurb: "All of your company's knowledge, in one AI you can ask.",
    href: '/services/company-brain',
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

  'company-brain': {
    slug: 'company-brain',
    name: 'Company Brain',
    seo: {
      title: 'Company Brain, Your Knowledge in One AI | Operzy',
      description:
        "Operzy builds your company brain, a central AI layer over your documents, data and systems, so your team gets instant, sourced answers instead of digging through drives, threads and someone's memory.",
    },
    hero: {
      title: 'Everything your company knows,',
      accent: 'in one brain.',
      lede: "Right now your company's knowledge lives in drives, inboxes, chat threads and a few people's heads. A company brain is a central AI layer over all of it, your documents, data and systems, so anyone can ask a question and get an accurate, sourced answer in seconds instead of hunting for an hour or interrupting the one person who knows.",
    },
    overview: {
      kicker: 'What goes into it',
      title: 'The pieces of a brain',
      accent: 'you can trust.',
      lede: 'A company brain is only useful if the answers are right, current and safe. That takes more than pointing a chatbot at a folder.',
      items: [
        { icon: Database, title: 'Knowledge foundation', body: 'Your documents, wikis, drives and records connected and kept in sync, so the brain always works from the current version, not a stale copy.' },
        { icon: Search, title: 'Answers with sources', body: 'Every answer cites where it came from, so your team can verify in one click instead of taking it on faith.' },
        { icon: MessageSquare, title: 'Ask it anywhere', body: 'Available where your team already works, chat, email or a simple search bar, no new tool to remember to open.' },
        { icon: Lock, title: 'Permissions that hold', body: 'People only get answers from what they are allowed to see. HR files stay with HR, financials stay with finance.' },
        { icon: Plug, title: 'Connected to your systems', body: 'Beyond documents, the brain can read from your CRM, project tools and databases, so answers reflect what is actually happening.' },
        { icon: Brain, title: 'It keeps learning', body: 'New documents, decisions and corrections flow in as they happen, so the brain gets sharper the longer it runs.' },
      ],
    },
    process: {
      kicker: 'How it works',
      title: 'Four steps to a company',
      accent: 'that remembers everything.',
      lede: 'We start with the knowledge your team reaches for most, prove the answers hold up, then widen the net.',
      steps: [
        { n: '01', title: 'Map your knowledge', window: 'Phase one', body: 'Where the knowledge actually lives, which of it matters, who should see what, and the questions your team asks most.' },
        { n: '02', title: 'Build the foundation', window: 'Phase two', body: 'We connect the sources, structure the knowledge, and set the permission boundaries, reviewed with your IT and leadership before anything goes live.' },
        { n: '03', title: 'Prove the answers', window: 'Phase three', body: 'A pilot group asks it real questions and we measure accuracy against the source material, tuning until the answers are ones you would stand behind.' },
        { n: '04', title: 'Roll out & grow', window: 'Ongoing', body: 'The whole team gets access, new sources get added, and we keep monitoring quality as your company and its knowledge change.' },
      ],
    },
    deliverables: {
      title: 'Institutional knowledge that',
      accent: 'stops walking out the door.',
      lede: 'A working system your team uses daily, not a science project.',
      items: [
        'One place to ask anything about your company and get a sourced answer',
        'Your documents, drives and systems connected and kept current',
        'Permissions enforced, people only see what they should',
        'Onboarding that takes days instead of months',
        'Answers that survive when your most experienced people leave',
        'A foundation your assistants and automations can build on',
      ],
    },
    cta: {
      title: 'See what your company brain',
      accent: 'would know on day one.',
      lede: 'A short call to map where your knowledge lives today, and what having it all in one place would change.',
    },
  },
};

export function getService(slug) {
  return SERVICES[slug];
}
