import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { animatedGradient } from '../styles/AnimatedBackground'

// 🌈 Full-page animated background
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
  text-shadow: 2px 2px 15px rgba(255, 255, 255, 0.4);
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

// ✨ Glass-style cards with hover lift
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

// 🌀 Motion variants
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
      title: '🎬 Movie Explorer',
      desc: 'A movie search app using TMDB API with infinite scroll, responsive layout, and detailed movie pages.',
      tech: 'React · Tailwind CSS · TMDB API',
      link: 'https://github.com/yourusername/movie-explorer',
    },
    {
      title: '📋 Spring Boot Board',
      desc: 'A full-featured backend system with token login, DTOs, role management, and Swagger API testing.',
      tech: 'Spring Boot · MyBatis · JWT · Swagger',
      link: 'https://github.com/yourusername/board-system',
    },
    {
      title: '🛍 JSP Shopping Mall',
      desc: 'An early JSP/Servlet-based shopping mall project featuring login, product listing, and checkout flow.',
      tech: 'JSP · Servlet · JSTL · Tomcat',
      link: 'https://github.com/yourusername/jsp-practise',
    },
    {
      title: '☁️ EC2 Todo App',
      desc: 'A React + NestJS app hosted on AWS EC2 with Supabase OAuth login and full CRUD task list.',
      tech: 'React · NestJS · Prisma · EC2 · Supabase',
      link: 'https://github.com/yourusername/ec2-todo-app',
    },
    {
      title: '🎬 Movie Explorer',
      desc: 'A movie search app using TMDB API with infinite scroll, responsive layout, and detailed movie pages.',
      tech: 'React · Tailwind CSS · TMDB API',
      link: 'https://github.com/yourusername/movie-explorer',
    },
    {
      title: '🎬 Movie Explorer',
      desc: 'A movie search app using TMDB API with infinite scroll, responsive layout, and detailed movie pages.',
      tech: 'React · Tailwind CSS · TMDB API',
      link: 'https://github.com/yourusername/movie-explorer',
    },
  ]

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
