export type ProjectStatusKind = 'archived' | 'active' | 'live'

export interface ProjectFigure {
  value: string
  /** Suffix appended to `projects.items.<id>.figures.` to resolve the translated label. */
  labelKey: string
}

export interface ProjectLinks {
  source?: string
  live?: string
}

export interface Project {
  id: string
  index: number
  /** Only real, verifiable numbers — omit rather than pad with invented stats. */
  figures?: ProjectFigure[]
  stack: string[]
  status: {
    kind: ProjectStatusKind
  }
  links: ProjectLinks
}

// Translatable copy (title, description, problem, role, outcome, status label, figure
// labels) lives in `src/i18n/locales/{en,ja}.json` under `projects.items.<id>`, keyed by
// `id` below — this file only holds language-neutral structural data.
export const projects: Project[] = [
  {
    id: 'hr-audit-rebuild',
    index: 1,
    figures: [
      { value: '70+', labelKey: 'backendIssues' },
      { value: '28', labelKey: 'securityVulns' },
      { value: '28', labelKey: 'schemaIssues' },
      { value: '142', labelKey: 'filesDecompiled' },
    ],
    stack: ['Java 21', 'Spring Boot 3', 'Spring Security', 'Flyway', 'Vue 3', 'TypeScript', 'MySQL'],
    status: { kind: 'archived' },
    links: { source: 'https://github.com/murasakijyuutann/hr_rebuild_project' },
  },
  {
    id: 'vocalocart',
    index: 2,
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
    status: { kind: 'active' },
    links: { source: 'https://github.com/murasakijyuutann/vocaloidshop-fullstack' },
  },
  {
    id: 'interview-pipeline-tracker',
    index: 3,
    figures: [
      { value: '60s', labelKey: 'pollInterval' },
      { value: '0', labelKey: 'cloudDependencies' },
    ],
    stack: ['Tauri 2', 'Rust', 'React 19', 'TypeScript', 'Tailwind CSS', 'SQLite'],
    status: { kind: 'live' },
    links: { source: 'https://github.com/murasakijyuutann/interview-pipeline-tracker' },
  },
  {
    id: 'transport-payment',
    index: 4,
    stack: ['Spring Boot', 'Thymeleaf', 'Bootstrap', 'MySQL', 'AWS RDS'],
    status: { kind: 'archived' },
    links: { source: 'https://github.com/murasakijyuutann/transport_payment' },
  },
  {
    id: 'self-intro-repository',
    index: 5,
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Vercel'],
    status: { kind: 'active' },
    links: {
      source: 'https://github.com/murasakijyuutann/self_introduction',
      live: 'https://self-introduction-i11.vercel.app/',
    },
  },
]
