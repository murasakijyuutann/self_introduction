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
      title: '🎬 Movie Explorer',
      desc: 'A TMDB-powered movie search application with infinite scroll, responsive design, and detailed movie information pages.',
      tech: 'React · Tailwind CSS · TMDB API',
      link: 'https://github.com/murasakijyuutann/movie-review-project',
    },
    {
      title: '📋 Spring Boot Board',
      desc: 'A token-authenticated backend system with DTOs, role-based access control, and Swagger API documentation.',
      tech: 'Spring Boot · MyBatis · JWT · Swagger',
      link: 'https://github.com/murasakijyuutann/spring_boot_board',
    },
    {
      title: '🎧 Vocaloid Shopping Mall',
      desc: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and order processing integrated with Spring Boot REST API.',
      tech: 'React · Styled-Components · TypeScript · Spring Boot · MySQL RDS',
      link: 'https://github.com/murasakijyuutann/vocaloidshop-fullstack',
    },
    {
      title: '🚌 Public Transport Payment System',
      desc: 'A Spring Boot payment system API featuring card management, fare calculation, and transaction processing with Thymeleaf frontend and AWS MySQL.',
      tech: 'Spring Boot · Thymeleaf · Bootstrap · MySQL · AWS RDS',
      link: 'https://github.com/murasakijyuutann/public-transport-system',
    },
    {
      title: '🧾 Self Intro Repository',
      desc: 'A modern portfolio website showcasing technical skills and projects with responsive design, smooth animations, and interactive features. Deployed on Vercel.',
      tech: 'React · TypeScript · Styled-Components · Framer Motion · Vercel',
      link: 'https://github.com/murasakijyuutann/self_introduction',
    },
    {
      title: '🎲 Chinchirorin Game',
      desc: 'A React mini-game recreating the traditional Japanese dice game with smooth animations and sound effects.',
      tech: 'React · Framer Motion · Howler.js',
      link: 'https://github.com/murasakijyuutann/self_introduction/blob/main/src/pages/Chinchiro.tsx',
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
