import { useTranslation } from 'react-i18next'
import { Reveal } from '@/components/Reveal'

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C', 'SQL'],
  },
  {
    id: 'frontend',
    items: [
      'React',
      'React Router',
      'Vite',
      'Framer Motion',
      'Tailwind CSS',
      'shadcn/ui',
      'HTML5',
      'CSS3',
      'Responsive Design',
    ],
  },
  {
    id: 'backend',
    items: ['Spring Boot', 'MyBatis', 'Node.js', 'Express', 'NestJS', 'Prisma', 'Axios', 'REST API', 'JSP/Servlets'],
  },
  {
    id: 'auth-security',
    items: [
      'JWT Authentication',
      'Session Management',
      'OAuth 2.0',
      'Google OAuth',
      'Kakao OAuth',
      'Password Encryption',
      'CORS Configuration',
    ],
  },
  {
    id: 'database',
    items: ['MySQL', 'PostgreSQL', 'Supabase', 'Database Design', 'SQL Optimization', 'DBeaver', 'Data Modeling'],
  },
  {
    id: 'devops',
    items: ['AWS EC2', 'Vercel', 'Docker', 'Linux/Unix', 'SSH', 'Tomcat', 'VMWare', 'CI/CD Basics'],
  },
  {
    id: 'architecture',
    items: [
      'MVC Architecture',
      'DTO Pattern',
      'Layered Architecture',
      'RESTful Design',
      'Global Exception Handling',
      'Service Layer Pattern',
      'Repository Pattern',
    ],
  },
  {
    id: 'dev-tools',
    items: ['Git & GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Swagger', 'npm/yarn', 'Maven', 'Chrome DevTools'],
  },
  {
    id: 'testing',
    items: ['Unit Testing', 'API Testing', 'Debugging', 'Code Review', 'Performance Optimization', 'Error Handling'],
  },
  {
    id: 'soft-skills',
    items: [
      'English (Fluent)',
      'Japanese (JLPT N1)',
      'Korean (Native)',
      'Technical Writing',
      'Problem Solving',
      'Team Collaboration',
      'Self-Learning',
      'Agile Mindset',
    ],
  },
  {
    id: 'learning',
    items: ['Kubernetes', 'Redis', 'GraphQL', 'Microservices', 'TypeScript Advanced', 'Cloud Architecture'],
  },
  {
    id: 'certifications',
    items: ['JLPT N1 (2024.07)', 'IELTS 7.5 (2019.11)'],
  },
] as const

export default function Skills() {
  const { t } = useTranslation()

  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24">
        <Reveal index={0}>
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent md:text-[13px]">
            {t('skills.eyebrow')}
          </p>
        </Reveal>

        <Reveal index={1}>
          <h1 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-fg md:text-[48px]">
            {t('skills.heading')}
          </h1>
        </Reveal>

        <Reveal index={2}>
          <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-muted">
            {t('skills.intro')}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px border border-rule bg-rule md:mt-16 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category, i) => (
            <Reveal key={category.id} index={i} className="bg-bg p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.04em] text-accent">
                {t(`skills.categories.${category.id}`)}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-[4px] border border-rule px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.02em] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
