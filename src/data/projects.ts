export type ProjectStatusKind = 'archived' | 'active' | 'live'

export interface ProjectFigure {
  value: string
  label: string
}

export interface ProjectLinks {
  source?: string
  live?: string
}

export interface Project {
  id: string
  index: number
  title: string
  description: string
  problem: string
  role: string
  outcome: string
  /** Only real, verifiable numbers — omit rather than pad with invented stats. */
  figures?: ProjectFigure[]
  stack: string[]
  status: {
    kind: ProjectStatusKind
    label: string
  }
  links: ProjectLinks
}

export const projects: Project[] = [
  {
    id: 'hr-audit-rebuild',
    index: 1,
    title: 'HR System Audit & Rebuild',
    description:
      'Inherited a production HR system with no source code or documentation and reverse-engineered it from 142 compiled .class files with CFR, then led a ground-up rebuild on Spring Boot 3 and Vue 3 before the audit findings informed a build-vs-buy decision.',
    problem: 'No source, no docs, no schema — only a deployed WAR',
    role: 'Independently initiated audit and rebuild lead',
    outcome: 'Findings informed a commercial build-vs-buy decision',
    figures: [
      { value: '70+', label: 'Backend Issues' },
      { value: '28', label: 'Security Vulns' },
      { value: '28', label: 'Schema Issues' },
      { value: '142', label: 'Files Decompiled' },
    ],
    stack: ['Java 21', 'Spring Boot 3', 'Spring Security', 'Flyway', 'Vue 3', 'TypeScript', 'MySQL'],
    status: { kind: 'archived', label: 'Archived — Phase 3 of 7' },
    links: { source: 'https://github.com/murasakijyuutann/hr_rebuild_project' },
  },
  {
    id: 'vocalocart',
    index: 2,
    title: 'VocaloCart',
    description:
      'A full-stack Vocaloid merchandise store, migrated from a split Spring Boot + Vite/React setup into a single Next.js monorepo covering auth, catalog, cart, checkout, Stripe payments and transactional email.',
    problem: 'Spring Boot + Vite/React split slowing iteration',
    role: 'Solo migration to a unified Next.js monorepo',
    outcome: 'Backend/architecture solid; frontend redesign in progress',
    stack: [
      'Next.js 16',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'NextAuth v5',
      'Tailwind CSS',
      'Stripe',
      'Resend',
      'Vercel Blob',
    ],
    status: { kind: 'active', label: 'In progress — frontend redesign' },
    links: { source: 'https://github.com/murasakijyuutann/vocaloidshop-fullstack' },
  },
  {
    id: 'interview-pipeline-tracker',
    index: 3,
    title: 'Interview Pipeline Tracker',
    description:
      'A local-first desktop app for tracking job interviews, with list and calendar views, stage filters, and a Rust background engine that fires native OS reminders before each event — no cloud account or server.',
    problem: 'Needed a fully local way to track interview pipelines with reminders',
    role: 'Solo build — Rust backend, React frontend',
    outcome: 'Shipped installers (NSIS/MSI); in daily personal use',
    figures: [
      { value: '60s', label: 'Poll Interval' },
      { value: '0', label: 'Cloud Dependencies' },
    ],
    stack: ['Tauri 2', 'Rust', 'React 19', 'TypeScript', 'Tailwind CSS', 'SQLite'],
    status: { kind: 'live', label: 'Live (personal tool)' },
    links: { source: 'https://github.com/murasakijyuutann/interview-pipeline-tracker' },
  },
  {
    id: 'transport-payment',
    index: 4,
    title: 'Public Transport Payment System',
    description:
      'A Spring Boot payment system API featuring card management, fare calculation and transaction processing, with a Thymeleaf frontend and AWS-hosted MySQL.',
    problem: 'Fare and payment processing needed a reliable card-to-transaction flow',
    role: 'Backend-focused build — Spring Boot API and Thymeleaf frontend',
    outcome: 'Shipped card management, fare calculation and transaction processing on AWS RDS',
    stack: ['Spring Boot', 'Thymeleaf', 'Bootstrap', 'MySQL', 'AWS RDS'],
    status: { kind: 'archived', label: 'Archived' },
    links: { source: 'https://github.com/murasakijyuutann/transport_payment' },
  },
  {
    id: 'self-intro-repository',
    index: 5,
    title: 'Self Intro Repository',
    description:
      "This portfolio itself — a continuously-iterated site currently mid-redesign into the Editorial Case File look you're reading right now.",
    problem: 'Needed a single, up-to-date home for projects, skills and story',
    role: 'Solo build and ongoing redesign — React, TypeScript, Tailwind CSS, shadcn/ui',
    outcome: 'Live and iterating; currently rebuilding the UI you\u2019re looking at',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Vercel'],
    status: { kind: 'active', label: 'In progress — UI overhaul' },
    links: {
      source: 'https://github.com/murasakijyuutann/self_introduction',
      live: 'https://self-introduction-i11.vercel.app/',
    },
  },
]
