import { Reveal } from '@/components/Reveal'

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C', 'SQL'],
  },
  {
    title: 'Frontend Development',
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
    title: 'Backend & Frameworks',
    items: ['Spring Boot', 'MyBatis', 'Node.js', 'Express', 'NestJS', 'Prisma', 'Axios', 'REST API', 'JSP/Servlets'],
  },
  {
    title: 'Authentication & Security',
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
    title: 'Database & Data',
    items: ['MySQL', 'PostgreSQL', 'Supabase', 'Database Design', 'SQL Optimization', 'DBeaver', 'Data Modeling'],
  },
  {
    title: 'DevOps & Deployment',
    items: ['AWS EC2', 'Vercel', 'Docker', 'Linux/Unix', 'SSH', 'Tomcat', 'VMWare', 'CI/CD Basics'],
  },
  {
    title: 'Architecture & Patterns',
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
    title: 'Development Tools',
    items: ['Git & GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Swagger', 'npm/yarn', 'Maven', 'Chrome DevTools'],
  },
  {
    title: 'Testing & Quality',
    items: ['Unit Testing', 'API Testing', 'Debugging', 'Code Review', 'Performance Optimization', 'Error Handling'],
  },
  {
    title: 'Soft Skills & Languages',
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
    title: 'Currently Learning',
    items: ['Kubernetes', 'Redis', 'GraphQL', 'Microservices', 'TypeScript Advanced', 'Cloud Architecture'],
  },
  {
    title: 'Certifications',
    items: ['JLPT N1 (2024.07)', 'IELTS 7.5 (2019.11)'],
  },
]

export default function Skills() {
  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24">
        <Reveal index={0}>
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent md:text-[13px]">
            Case File No. 04 — Toolkit
          </p>
        </Reveal>

        <Reveal index={1}>
          <h1 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-fg md:text-[48px]">
            Skills
          </h1>
        </Reveal>

        <Reveal index={2}>
          <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-muted">
            A working toolkit, built through shipped projects rather than tutorials.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px border border-rule bg-rule md:mt-16 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category, i) => (
            <Reveal key={category.title} index={i} className="bg-bg p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.04em] text-accent">
                {category.title}
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
