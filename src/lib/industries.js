import {
  Stethoscope,
  ClipboardList,
  FileText,
  Receipt,
  Share2,
  FolderInput,
  Scale,
  Gavel,
  Search,
  UserCheck,
  Timer,
  Landmark,
  Calculator,
  ShieldCheck,
  LineChart,
  Megaphone,
  PenTool,
  BarChart3,
  Presentation,
  Inbox,
  BookOpen,
  Users,
  Briefcase,
} from 'lucide-react';

/**
 * One entry per industry landing page. The IndustryPage template renders
 * entirely from this data, so adding a niche is a matter of adding an object
 * here, no new component. Ordered most-lucrative-first, which is also the
 * order they appear in the nav and index.
 *
 * Copy rules (match the rest of the site): plain language, no invented client
 * numbers, no claimed certifications Operzy may not hold. Compliance is framed
 * as "built to pass your review", not "we are certified", honest and true.
 */
export const INDUSTRIES = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    navLabel: 'Healthcare',
    blurb: 'Prior auth, intake, documentation and claims, without touching clinical judgement.',
    seo: {
      title: 'AI Automation for Healthcare & Medical Practices | Operzy',
      description:
        'Operzy builds HIPAA-conscious AI automation for healthcare, prior authorizations, patient intake, clinical documentation, claims and referrals, connected to your EHR, with clinicians in control.',
    },
    hero: {
      title: 'Give your clinical staff',
      accent: 'their day back.',
      lede: 'Most of the hours in a practice go to paperwork, not patients: prior authorizations, intake forms, documentation, claims, chasing records. Operzy automates the administrative layer around care, connected to your EHR, so your people spend less time typing and more time treating. AI does the busywork; clinicians make every clinical call.',
    },
    pains: {
      title: 'The paperwork is winning.',
      lede: 'Every one of these is a real job someone on your staff does today, by hand, at volume, and every one of them is where the day disappears.',
      items: [
        { title: 'Prior authorizations', body: 'Payer forms filled, submitted, chased and resubmitted, the single biggest source of administrative burnout in most practices.' },
        { title: 'Patient intake & scheduling', body: 'New-patient forms keyed in twice, insurance verified by phone, appointments juggled across a shared calendar.' },
        { title: 'Clinical documentation', body: 'Notes, letters and after-visit summaries drafted from scratch when the raw material already exists in the encounter.' },
        { title: 'Claims & denials', body: 'Claims coded, scrubbed and submitted, then denials worked one at a time weeks later with the context long gone.' },
      ],
    },
    useCases: {
      title: 'What we automate',
      lede: 'Each of these runs across the tools you already use, your EHR, your practice management system, your payer portals, with a person signing off wherever it touches care.',
      items: [
        { icon: ClipboardList, title: 'Prior authorization', body: 'Requests assembled from the chart, submitted to the right payer, and tracked to a decision, with exceptions flagged, not buried.' },
        { icon: Stethoscope, title: 'Patient intake & scheduling', body: 'Intake read and entered, insurance eligibility checked, and appointments booked or confirmed without the phone tag.' },
        { icon: FileText, title: 'Clinical documentation support', body: 'First-draft notes, referral letters and summaries generated from the encounter for a clinician to review and sign.' },
        { icon: Receipt, title: 'Claims & denial management', body: 'Claims prepared and scrubbed before submission, and denials triaged and drafted for appeal automatically.' },
        { icon: Share2, title: 'Referral coordination', body: 'Incoming and outgoing referrals routed with the records attached, so nothing sits in a fax queue for a week.' },
        { icon: FolderInput, title: 'Records requests', body: 'Release-of-information requests read, verified and fulfilled against your rules, with a full log of what went where.' },
      ],
    },
    trust: {
      title: 'Built for the way healthcare is regulated.',
      lede: 'PHI is not something you experiment with. We design around your compliance obligations from the first session, not after the build, and your security and compliance teams review the design before anything is made.',
      points: [
        'Designed to operate within your HIPAA obligations, under a BAA',
        'A clinician or authorised staff member signs off on anything clinical',
        'Every action logged, a full audit trail you can hand to a regulator',
        'Runs inside your systems; PHI is never used to train third-party models',
      ],
    },
    cta: {
      title: 'See where the admin hours go',
      accent: 'in your practice.',
      lede: 'A short call to map where your staff lose the most time, and whether automating it is worth doing. No pitch, an honest read.',
    },
  },

  {
    slug: 'legal',
    name: 'Legal',
    navLabel: 'Legal',
    blurb: 'Contract review, intake, discovery and billing. Attorneys keep the last word.',
    seo: {
      title: 'AI Automation for Law Firms & Legal Teams | Operzy',
      description:
        'Operzy builds AI automation for law firms, contract review and abstraction, document and discovery review, client intake and conflict checks, and time capture, with privilege protected and attorneys in control.',
    },
    hero: {
      title: 'Bill the hours that',
      accent: 'are worth billing.',
      lede: 'Firms lose enormous time to work that is essential but not legal, reading, abstracting, intake, conflict checks, time capture. Operzy automates the mechanical layer of legal work so your attorneys spend their hours on judgement, not on scanning. Confidentiality and privilege are designed in; an attorney reviews everything that matters.',
    },
    pains: {
      title: 'Too much lawyer time on non-lawyer work.',
      lede: 'None of this needs a bar licence to do, and all of it eats into the hours that do.',
      items: [
        { title: 'Contract & document review', body: 'The same clauses read and pulled out of hundreds of agreements, one at a time, at associate rates.' },
        { title: 'Client intake & conflicts', body: 'New-matter intake keyed by hand and conflict checks run manually across systems that do not talk.' },
        { title: 'Discovery', body: 'Vast document sets waded through for relevance and privilege before the real analysis can even start.' },
        { title: 'Time capture & billing', body: 'Billable work reconstructed from memory at month-end, hours that quietly never make it onto an invoice.' },
      ],
    },
    useCases: {
      title: 'What we automate',
      lede: 'Everything below runs against your document management system and case tools, with an attorney signing off on any output that leaves the building.',
      items: [
        { icon: FileText, title: 'Contract review & abstraction', body: 'Key terms, dates, obligations and risk clauses extracted into a structured summary for a lawyer to check.' },
        { icon: Search, title: 'Document & discovery review', body: 'Large sets triaged for relevance and potential privilege, with a defensible log of every decision.' },
        { icon: UserCheck, title: 'Client intake & conflict checks', body: 'Intake read and entered, and conflicts run across your systems before a matter is opened.' },
        { icon: BookOpen, title: 'Legal research support', body: 'First-pass research and summaries drafted with sources cited, ready for an attorney to verify and build on.' },
        { icon: Timer, title: 'Billing & time capture', body: 'Billable activity reconstructed from your systems into draft time entries, so fewer hours slip through.' },
        { icon: Gavel, title: 'Matter management', body: 'Deadlines, filings and status tracked and chased, with the right documents assembled ahead of each step.' },
      ],
    },
    trust: {
      title: 'Confidentiality and privilege, designed in.',
      lede: 'Client data and privileged material do not go anywhere they should not. We build to your confidentiality obligations from the outset, and your risk and IT teams review the design before it is built.',
      points: [
        'Client confidentiality and privilege protected by design',
        'An attorney reviews and owns every substantive output',
        'Data stays in your environment; never used to train third-party models',
        'A full, defensible audit trail of every automated action',
      ],
    },
    cta: {
      title: 'Find the hours',
      accent: 'you are giving away.',
      lede: 'A short call to work out where your attorneys lose time to mechanical work, and whether automating it is worth it for your firm.',
    },
  },

  {
    slug: 'finance',
    name: 'Finance',
    navLabel: 'Finance',
    blurb: 'Reconciliation, AP, onboarding and reporting, with the controls to prove it.',
    seo: {
      title: 'AI Automation for Finance & Financial Services | Operzy',
      description:
        'Operzy builds AI automation for finance teams and financial-services firms, reconciliation, accounts payable, KYC/AML onboarding, reporting and audit prep, with controls and a full audit trail.',
    },
    hero: {
      title: 'Close the books faster,',
      accent: 'with the controls intact.',
      lede: 'Finance runs on reconciliation, checking and re-checking, work that is critical, repetitive and unforgiving of error. Operzy automates the processing layer while keeping the controls a finance function depends on: segregation of duties, approvals, and an audit trail for every action. The system does the matching; your team owns the sign-off.',
    },
    pains: {
      title: 'Critical work, done by hand, under a deadline.',
      lede: 'The month-end scramble is not a people problem. It is a process running on manual effort where a system should be.',
      items: [
        { title: 'Reconciliation', body: 'Ledgers, statements and sub-systems matched line by line, with the breaks investigated one at a time.' },
        { title: 'Accounts payable', body: 'Invoices keyed, matched to POs, routed for approval and chased, thousands a month, mostly by hand.' },
        { title: 'Client & vendor onboarding', body: 'KYC and AML checks assembled from documents and databases, then re-done every time something changes.' },
        { title: 'Reporting & audit prep', body: 'The same reports rebuilt each cycle, and the same evidence gathered from scratch every audit.' },
      ],
    },
    useCases: {
      title: 'What we automate',
      lede: 'Each of these connects to your ERP, banking and data systems, and every step is logged so the control environment gets stronger, not weaker.',
      items: [
        { icon: Calculator, title: 'Reconciliation', body: 'Accounts matched across systems automatically, with only the genuine breaks surfaced for a human to resolve.' },
        { icon: Receipt, title: 'Accounts payable', body: 'Invoices read, matched to POs and receipts, routed by your approval rules, and flagged when something is off.' },
        { icon: ShieldCheck, title: 'KYC / AML onboarding', body: 'Documents read, entities screened and files assembled to your standard, with exceptions escalated cleanly.' },
        { icon: LineChart, title: 'Financial reporting', body: 'Recurring reports and packs assembled from source systems, consistent every period, ready for review.' },
        { icon: FileText, title: 'Expense review', body: 'Expenses checked against policy at volume, with the outliers flagged instead of every line rubber-stamped.' },
        { icon: Landmark, title: 'Regulatory & audit prep', body: 'Evidence and schedules pulled together continuously, so audit and filing season stops being a fire drill.' },
      ],
    },
    trust: {
      title: 'Controls and audit trail, not a black box.',
      lede: 'Finance cannot adopt anything it cannot explain to an auditor. We design to your control framework, and your risk, security and audit teams sign off on the design before the build.',
      points: [
        'Segregation of duties and approval limits enforced by the system',
        'Every action logged and reviewable, built for audit, not around it',
        'Designed to pass your SOC 2 / security review, not to skirt it',
        'Data stays in your environment; never used to train third-party models',
      ],
    },
    cta: {
      title: 'Take the manual work',
      accent: 'out of month-end.',
      lede: 'A short call to find where your team loses the most time to processing and checking, and what automating it is actually worth.',
    },
  },

  {
    slug: 'professional-services',
    name: 'Professional Services',
    navLabel: 'Professional Services',
    blurb: 'Accounting, insurance, real estate and recruiting, the admin behind every billable hour.',
    seo: {
      title: 'AI Automation for Professional Services Firms | Operzy',
      description:
        'Operzy builds AI automation for professional-services firms, accounting, insurance, real estate and recruiting, automating client onboarding, document processing, recurring reporting and back-office admin.',
    },
    hero: {
      title: 'Spend your hours on clients,',
      accent: 'not on admin.',
      lede: 'Accounting, insurance, real estate, recruiting, every professional firm sells expertise but ships it through a mountain of onboarding, documents, filings and follow-up. Operzy automates that back-office layer, connected to the systems you already run, so your people spend their billable hours on clients instead of on data entry. A person owns anything that carries the firm\'s name.',
    },
    pains: {
      title: 'Expertise sold, admin delivered.',
      lede: 'None of this is why clients hire you, and all of it is where your team\'s week quietly goes.',
      items: [
        { title: 'Client & matter onboarding', body: 'New clients set up by hand across systems, documents collected by email, the same details keyed in more than once.' },
        { title: 'Document processing', body: 'Forms, statements and applications read and re-keyed one at a time, at professional rates, all day.' },
        { title: 'Recurring reporting & filings', body: 'The same reports, renewals and compliance filings rebuilt every cycle from scratch under a deadline.' },
        { title: 'Follow-up & renewals', body: 'Chasing signatures, documents, payments and renewals, the work nobody owns until something lapses.' },
      ],
    },
    useCases: {
      title: 'What we automate',
      lede: 'Each of these runs across your CRM, practice or policy systems and document store, with a person signing off on anything client-facing.',
      items: [
        { icon: UserCheck, title: 'Client onboarding & intake', body: 'Intake read and entered, documents collected and checked, and new clients set up across your systems without the re-keying.' },
        { icon: FileText, title: 'Document processing', body: 'Applications, statements and forms read and turned into structured data for a person to review, not retype.' },
        { icon: Presentation, title: 'Proposals & engagement letters', body: 'Proposals, quotes and engagement letters drafted from your templates and past work, ready to send.' },
        { icon: LineChart, title: 'Recurring reports & filings', body: 'Periodic reports, renewals and filings assembled from source systems, consistent every cycle.' },
        { icon: Inbox, title: 'Follow-up & renewals', body: 'Signatures, documents, payments and renewals chased automatically, with the exceptions surfaced to your team.' },
        { icon: Calculator, title: 'Back-office reconciliation', body: 'Records matched across the systems that never agree, with the breaks flagged instead of hunted down by hand.' },
      ],
    },
    trust: {
      title: 'Client trust, kept intact.',
      lede: 'Professional firms live on discretion. We build to your confidentiality and sector obligations from the outset, and your compliance and IT teams review the design before anything is made.',
      points: [
        'Built to your confidentiality and sector-specific obligations',
        'A person reviews and owns every client-facing output',
        'Client data stays in your environment; never used to train third-party models',
        'A full audit trail of every automated action',
      ],
    },
    cta: {
      title: 'Get your team back',
      accent: 'on client work.',
      lede: 'A short call to find where your firm loses time to back-office admin, and whether automating it is worth doing.',
    },
  },

  {
    slug: 'agencies',
    name: 'Agencies',
    navLabel: 'Agencies',
    blurb: 'Reporting, production and onboarding. Margin back into billable work.',
    seo: {
      title: 'AI Automation for Marketing & Creative Agencies | Operzy',
      description:
        'Operzy builds AI automation for marketing, creative and media agencies, client reporting, content production, campaign QA, onboarding and proposals, so your team spends time on the work clients pay for.',
    },
    hero: {
      title: 'Put your margin back',
      accent: 'into billable work.',
      lede: 'Agency profit leaks through the non-billable cracks, reporting, status decks, QA, onboarding, timesheets. Operzy automates the repetitive production and admin work so your team spends its hours on strategy and craft, not on rebuilding the same monthly report for the twentieth client. Brand-safe by design, with a human reviewing anything client-facing.',
    },
    pains: {
      title: 'The non-billable work is eating the margin.',
      lede: 'Every hour here is an hour you cannot bill and cannot get back, multiplied across every client on the roster.',
      items: [
        { title: 'Client reporting', body: 'The same dashboards and decks rebuilt every month per client, pulling numbers from a dozen platforms by hand.' },
        { title: 'Content production', body: 'Variations, resizes, first drafts and localisations produced manually when the brief and brand are already set.' },
        { title: 'Campaign QA', body: 'Links, tracking, budgets and creative checked one placement at a time before anything can go live.' },
        { title: 'Onboarding & proposals', body: 'New-client setup and pitch decks assembled from scratch each time instead of from what you already have.' },
      ],
    },
    useCases: {
      title: 'What we automate',
      lede: 'All of it runs across your ad platforms, analytics, project tools and DAM, with a human signing off on anything that reaches a client.',
      items: [
        { icon: BarChart3, title: 'Client reporting', body: 'Numbers pulled from every platform, assembled into your report and deck template, drafted with the commentary.' },
        { icon: PenTool, title: 'Content & creative production', body: 'First drafts, variations, resizes and localisations generated to brief for your team to refine and approve.' },
        { icon: ShieldCheck, title: 'Campaign QA', body: 'Tracking, links, budgets and creative checked against your pre-flight list, with issues flagged before launch.' },
        { icon: Presentation, title: 'Proposals & pitches', body: 'Decks and proposals drafted from your past work and the brief, so pitching stops eating whole days.' },
        { icon: Inbox, title: 'Client onboarding', body: 'New-client setup, access, trackers and kick-off docs assembled automatically instead of by checklist.' },
        { icon: Megaphone, title: 'Media & ad ops', body: 'Repetitive setup, tagging, pacing checks and reconciliation across accounts handled with the exceptions surfaced.' },
      ],
    },
    trust: {
      title: 'Brand-safe, and clients stay separate.',
      lede: 'Your clients trust you with their data and their brand. We build so one client\'s data never bleeds into another\'s, and so nothing reaches a client without a human eye first.',
      points: [
        'Strict separation between client data and workspaces',
        'A human reviews anything client-facing before it goes out',
        'Built to respect each client\'s brand and tone, not a generic voice',
        'Data stays in your environment; never used to train third-party models',
      ],
    },
    cta: {
      title: 'Get your team back',
      accent: 'on billable work.',
      lede: 'A short call to find where the non-billable hours go across your roster, and whether automating them earns back real margin.',
    },
  },

  {
    slug: 'consulting',
    name: 'Consulting',
    navLabel: 'Consulting',
    blurb: 'Research, decks, proposals and knowledge. Leverage without more headcount.',
    seo: {
      title: 'AI Automation for Consulting Firms | Operzy',
      description:
        'Operzy builds AI automation for consulting firms, research and synthesis, deck and report production, proposal and RFP responses, and knowledge management, with client confidentiality protected.',
    },
    hero: {
      title: 'More leverage,',
      accent: 'without more headcount.',
      lede: 'Consulting is sold on expertise but delivered through a mountain of research, synthesis and deck-building. Operzy automates the production layer so your consultants spend their time on judgement and client relationships, not on formatting slides at midnight. Client IP and confidentiality are protected by design, with a consultant owning every deliverable.',
    },
    pains: {
      title: 'Senior time lost to production work.',
      lede: 'The work below does not need your best people, but it is where their evenings go.',
      items: [
        { title: 'Research & synthesis', body: 'The same market, competitor and background research gathered and summarised by hand for every engagement.' },
        { title: 'Deck & report production', body: 'Slides and reports built and rebuilt, reformatted to the template, long after the thinking is done.' },
        { title: 'Proposals & RFPs', body: 'Responses assembled from scratch against tight deadlines, re-answering questions the firm has answered before.' },
        { title: 'Knowledge management', body: 'Hard-won insight from past projects locked in old decks nobody can find when the next client needs it.' },
      ],
    },
    useCases: {
      title: 'What we automate',
      lede: 'Everything runs inside your secure workspace against your own materials and approved sources, with a consultant reviewing and owning each output.',
      items: [
        { icon: Search, title: 'Research & synthesis', body: 'Sources gathered, read and summarised into a structured first pass with citations for a consultant to build on.' },
        { icon: Presentation, title: 'Deck & report production', body: 'First-draft slides and reports assembled to your template from the analysis, ready to refine rather than start.' },
        { icon: FileText, title: 'Proposal & RFP responses', body: 'Draft responses assembled from your past proposals and knowledge base, so the deadline scramble shrinks.' },
        { icon: BookOpen, title: 'Knowledge management', body: 'Past work indexed and made searchable, so prior insight surfaces on the next engagement instead of being lost.' },
        { icon: BarChart3, title: 'Data analysis', body: 'Client datasets cleaned, cross-checked and turned into a first-cut analysis for your team to interrogate.' },
        { icon: Briefcase, title: 'Engagement admin', body: 'Status reports, time capture and project trackers kept up to date automatically instead of by hand.' },
      ],
    },
    trust: {
      title: 'Client IP stays the client\'s.',
      lede: 'Your firm lives on trust and confidentiality. We build so each engagement is walled off, so client material never trains anything, and so a consultant owns every deliverable that carries your name.',
      points: [
        'Each client engagement isolated in its own secure workspace',
        'Client data and IP never used to train third-party models',
        'A consultant reviews and owns every client deliverable',
        'A full audit trail of every automated action',
      ],
    },
    cta: {
      title: 'Turn production time',
      accent: 'into billable time.',
      lede: 'A short call to find where your consultants lose hours to research and production, and what automating it is worth to the firm.',
    },
  },

  {
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    navLabel: 'Logistics & Supply Chain',
    blurb: 'Order processing, track-and-trace, docs and exceptions, moving without the manual chase.',
    seo: {
      title: 'AI Automation for Logistics & Supply Chain | Operzy',
      description:
        'Operzy builds AI automation for logistics and supply-chain operations, order and shipment processing, track-and-trace updates, freight and customs documents, exception handling and carrier communications.',
    },
    hero: {
      title: 'Keep the freight moving,',
      accent: 'not your inbox.',
      lede: 'Logistics runs on a constant stream of orders, documents, status updates and exceptions, most of it handled by people copying data between systems and chasing email. Operzy automates that coordination layer across your TMS, WMS and ERP, so shipments move without a human babysitting every step. People handle the genuine exceptions; the routine runs itself.',
    },
    pains: {
      title: 'The routine is done by hand.',
      lede: 'Every shipment touches a dozen manual steps, and at volume those steps are where the margin and the on-time record go.',
      items: [
        { title: 'Order & shipment processing', body: 'Orders keyed from email and portals into the TMS, details re-entered across systems that do not connect.' },
        { title: 'Freight & customs documents', body: 'Bills of lading, customs paperwork and proof of delivery produced, checked and filed one shipment at a time.' },
        { title: 'Track-and-trace', body: 'Status chased across carriers and typed into updates for customers who are already emailing to ask.' },
        { title: 'Exceptions & disputes', body: 'Delays, shortages and billing disputes worked manually, long after the context that caused them is cold.' },
      ],
    },
    useCases: {
      title: 'What we automate',
      lede: 'Everything below connects to your TMS, WMS, ERP and carrier systems, with the genuine exceptions surfaced to your team rather than buried.',
      items: [
        { icon: Inbox, title: 'Order & shipment processing', body: 'Orders read from email and portals, validated, and entered across your systems without the double keying.' },
        { icon: FileText, title: 'Freight & customs documentation', body: 'Bills of lading, customs docs and PODs generated, checked and filed automatically against each shipment.' },
        { icon: Share2, title: 'Track-and-trace updates', body: 'Status pulled from carriers and pushed to customers proactively, before they have to ask where it is.' },
        { icon: ShieldCheck, title: 'Exception handling', body: 'Delays and shortages detected early and routed with the context attached, so people fix problems, not find them.' },
        { icon: Megaphone, title: 'Carrier & vendor comms', body: 'Routine carrier and vendor back-and-forth, bookings, confirmations, chasing, handled with exceptions escalated.' },
        { icon: Receipt, title: 'Freight-bill audit', body: 'Invoices checked against rates and shipments at volume, with the discrepancies flagged instead of paid.' },
      ],
    },
    trust: {
      title: 'It plugs into what you already run.',
      lede: 'Logistics lives or dies on systems that agree with each other. We integrate with your existing stack rather than replacing it, and your IT team reviews the design before it is built.',
      points: [
        'Real integration with your TMS, WMS, ERP and carrier systems',
        'A person owns every genuine exception and dispute',
        'Every action logged, a full, checkable audit history',
        'Your data stays in your environment; never used to train third-party models',
      ],
    },
    cta: {
      title: 'Take the manual chase',
      accent: 'out of every shipment.',
      lede: 'A short call to find where your operation loses time to processing and coordination, and what automating it is worth.',
    },
  },

  {
    slug: 'home-services',
    name: 'Home Services',
    navLabel: 'Home Services',
    blurb: 'Booking, dispatch, follow-up and reviews, every lead answered, every job chased.',
    seo: {
      title: 'AI Automation for Home Services Businesses | Operzy',
      description:
        'Operzy builds AI automation for home-services businesses, HVAC, plumbing, electrical, roofing and more, answering leads, booking and dispatching jobs, chasing quotes, and following up for reviews and repeat work.',
    },
    hero: {
      title: 'Never let a job',
      accent: 'slip through the cracks.',
      lede: 'In home services, HVAC, plumbing, electrical, roofing, landscaping, the money leaks through missed calls, slow quotes and follow-ups nobody made. Operzy automates the work around the work: capturing every lead, booking and dispatching, chasing quotes and reviews, connected to the field-service software you already run. Your team stays on the tools; the office runs itself.',
    },
    pains: {
      title: 'The leaks are in the follow-up.',
      lede: 'The job on site is the easy part. The money you lose is in the calls not answered and the quotes never chased.',
      items: [
        { title: 'Missed leads', body: 'Calls and web enquiries that come in while the crew is on a job, and go to the competitor who picked up.' },
        { title: 'Scheduling & dispatch', body: 'Jobs juggled by phone and whiteboard, with the wrong tech sent to the wrong side of town.' },
        { title: 'Quote follow-up', body: 'Estimates sent and then forgotten, when a single nudge would have closed a chunk of them.' },
        { title: 'Reviews & repeat work', body: 'Happy customers who never get asked for a review, and service due dates nobody circles back on.' },
      ],
    },
    useCases: {
      title: 'What we automate',
      lede: 'Each of these connects to the field-service software and CRM you already use, so the office keeps running while the crew is on site.',
      items: [
        { icon: Inbox, title: 'Lead capture & response', body: 'Every call, form and message answered fast, qualified, and booked or routed, no lead left sitting.' },
        { icon: Timer, title: 'Booking & dispatch', body: 'Jobs scheduled and the right tech dispatched by location and skill, with customers confirmed automatically.' },
        { icon: Presentation, title: 'Quote follow-up', body: 'Estimates chased on a schedule until they close or die, so no job quietly goes cold in an inbox.' },
        { icon: Megaphone, title: 'Reviews & reputation', body: 'Happy customers asked for a review at the right moment, turning finished jobs into your next leads.' },
        { icon: Receipt, title: 'Invoicing & payment chasing', body: 'Invoices sent on completion and unpaid balances chased automatically, so you stop financing your customers.' },
        { icon: Share2, title: 'Service reminders & rebooking', body: 'Recurring maintenance and seasonal work tracked and re-booked before the customer ever thinks to call someone else.' },
      ],
    },
    trust: {
      title: 'It runs on the tools you already have.',
      lede: 'You do not want another system to learn. We connect to the field-service software and CRM you already run, and anything that speaks to a customer sounds like your business, not a robot.',
      points: [
        'Connects to your field-service software and CRM',
        'Speaks in your business\'s voice, not a generic script',
        'A person can step in on anything sensitive or high-value',
        'A full record of every message, booking and follow-up',
      ],
    },
    cta: {
      title: 'Stop leaving money',
      accent: 'on the table.',
      lede: 'A short call to find where leads and jobs are slipping, and what capturing them is worth to your business.',
    },
  },
];

/** Slim list for nav dropdowns, footer columns and the index grid. */
export const INDUSTRY_LINKS = INDUSTRIES.map(({ slug, name, navLabel, blurb }) => ({
  slug,
  name,
  navLabel,
  blurb,
  href: `/industries/${slug}`,
}));

export function getIndustry(slug) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
