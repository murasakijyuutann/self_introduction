import styled from 'styled-components'
import { motion } from 'framer-motion'
import { animatedGradient } from '../styles/AnimatedBackground'

const Section = styled.section`
  ${animatedGradient};
  min-height: 100vh;
  padding: 6rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Wrapper = styled(motion.div)`
  max-width: 1000px;
  width: 100%;
`

const Heading = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 15px rgba(255, 255, 255, 0.3);
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 1.8rem;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  color: #fff;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
  }
`

const Title = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
`

const Description = styled.p`
  font-size: 1rem;
  color: #f2f2f2;
  margin-bottom: 1rem;
  line-height: 1.5;
`

const TechList = styled.div`
  font-size: 0.9rem;
  color: #e0e0e0;
  margin-bottom: 1rem;
  font-style: italic;
`

const Link = styled.a`
  color: #ffb6ff;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
}

export default function Projects() {
  const projects = [
  {
    title: '🔍 HR System Audit & Rebuild',
    desc: 'Inherited a production HR system with no source code or documentation, and reverse-engineered it from compiled .class files with CFR. Documented 70 backend issues, 28 security vulnerabilities and 28 database design problems, then rebuilt the core on Spring Boot 3 and Vue 3 (auth, employee management, timesheets, leave). The company later adopted commercial HR software, so the project was archived after Phase 3 of 7.',
    tech: 'Java 21 · Spring Boot 3 · Spring Security · Flyway · Vue 3 · TypeScript · MySQL',
    link: 'https://github.com/murasakijyuutann/hr_rebuild_project',
  },
  {
    title: '📅 Interview Pipeline Tracker',
    desc: 'A local-first desktop app for tracking job interviews, with list and calendar views, stage filters and a Rust background engine that fires native OS reminders before each event. All data stays in a local SQLite database, with no cloud account or server.',
    tech: 'Tauri 2 · Rust · React 19 · TypeScript · Tailwind CSS · SQLite',
    link: 'https://github.com/murasakijyuutann/interview-pipeline-tracker',
  },
  {
  title: '🎧 VocaloCart',
  desc: 'A full-stack Vocaloid merchandise store, migrated from a Spring Boot + Vite/React setup into a single Next.js monorepo. It covers authentication, product catalog, cart and checkout, with API route handlers, a Prisma-managed PostgreSQL schema, Stripe payments and transactional email.',
  tech: 'Next.js 16 · TypeScript · Prisma · PostgreSQL · NextAuth v5 · Tailwind CSS · Stripe · Resend · Vercel Blob',
  link: 'https://github.com/murasakijyuutann/vocaloidshop-fullstack',
  },
  {
    title: '🚌 Public Transport Payment System',
    desc: 'A Spring Boot payment system API featuring card management, fare calculation, and transaction processing with Thymeleaf frontend and AWS MySQL.',
    tech: 'Spring Boot · Thymeleaf · Bootstrap · MySQL · AWS RDS',
    link: 'https://github.com/murasakijyuutann/transport_payment',
  },
  {
    title: '🧾 Self Intro Repository',
    desc: 'A modern portfolio website showcasing technical skills and projects with responsive design, smooth animations, and interactive features. Deployed on Vercel.',
    tech: 'React · TypeScript · Styled-Components · Framer Motion · Vercel',
    link: 'https://github.com/murasakijyuutann/self_introduction',
  },
];

  return (
    <Section id="projects">
      <Wrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Heading>My Projects</Heading>

        <ProjectGrid>
          {projects.map((p, i) => (
            <Card
              key={p.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
            >
              <Title>{p.title}</Title>
              <Description>{p.desc}</Description>
              <TechList>{p.tech}</TechList>
              <Link href={p.link} target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </Link>
            </Card>
          ))}
        </ProjectGrid>
      </Wrapper>
    </Section>
  )
}
