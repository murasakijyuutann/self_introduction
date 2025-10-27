import React from 'react'
import styled, { keyframes } from 'styled-components'
import { animatedGradient } from '../styles/AnimatedBackground';
import { motion } from 'framer-motion'

// 🌈 Animate the entire background


// 💫 Full-page background
const Page = styled.section`
  min-height: 100vh;
  padding: 6rem 1.5rem;
  
  ${animatedGradient};
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Wrapper = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
`

const Heading = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 15px rgba(255, 255, 255, 0.4);
`

const Section = styled(motion.div)`
  margin-bottom: 3rem;
`

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  color: #ffeefc;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`

const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
`

const Badge = styled(motion.span)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.25s ease;
  cursor: default;

  &:hover {
    transform: scale(1.12);
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
`

// 🌀 Framer motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
}

export default function Skills() {
  const renderBadges = (badges: string[]) =>
    badges.map((text, i) => (
      <Badge
        key={text}
        variants={badgeVariants}
        initial="hidden"
        whileInView="visible"
        custom={i}
        viewport={{ once: true }}
      >
        {text}
      </Badge>
    ))

  return (
    <Page id="skills">
      <Wrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Heading>Skills & Technologies</Heading>

        <Section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle>Languages</SectionTitle>
          <BadgeList>{renderBadges(['Java', 'JavaScript', 'TypeScript', 'C'])}</BadgeList>
        </Section>

        <Section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle>Frontend</SectionTitle>
          <BadgeList>
            {renderBadges(['React', 'Vite', 'Styled Components', 'Tailwind CSS', 'HTML', 'CSS'])}
          </BadgeList>
        </Section>

        <Section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle>Backend & Frameworks</SectionTitle>
          <BadgeList>
            {renderBadges(['Spring Boot', 'MyBatis', 'Node.js', 'Express', 'NestJS', 'Prisma', 'Axios', 'REST API Design'])}
          </BadgeList>
        </Section>

        <Section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle>Authentication & Architecture</SectionTitle>
          <BadgeList>
            {renderBadges(['JWT Auth', 'Session-based Auth', 'OAuth (Google, Kakao)', 'DTO Pattern', 'Global Exception Handling', 'MVC & Layered Architecture'])}
          </BadgeList>
        </Section>

        <Section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle>Database & Tools</SectionTitle>
          <BadgeList>{renderBadges(['MySQL', 'DBeaver', 'Supabase', 'Postman', 'Swagger'])}</BadgeList>
        </Section>

        <Section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle>Infrastructure / DevOps</SectionTitle>
          <BadgeList>
            {renderBadges(['AWS EC2', 'SSH', 'Linux CLI', 'VMWare', 'Network Troubleshooting', 'Tomcat (JSP)'])}
          </BadgeList>
        </Section>

        <Section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle>Project & Dev Practice</SectionTitle>
          <BadgeList>
            {renderBadges(['Version Control (Git)', 'Multi-page Form Design', 'Responsive Layout', 'Debugging & Troubleshooting', 'Database Schema Design', 'Team Collaboration'])}
          </BadgeList>
        </Section>

        <Section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle>Languages & Communication</SectionTitle>
          <BadgeList>
            {renderBadges(['English (Fluent)', 'Japanese (JLPT N1)', 'Korean (Native)', 'Technical Writing', 'Cross-cultural Teamwork'])}
          </BadgeList>
        </Section>

        <Section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle>Certifications</SectionTitle>
          <BadgeList>{renderBadges(['JLPT N1 (2024.07)', 'IELTS 7.5 (2019.11)'])}</BadgeList>
        </Section>
      </Wrapper>
    </Page>
  )
}
