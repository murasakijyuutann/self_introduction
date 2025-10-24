import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 4rem auto;
  padding: 0 1.5rem;
`

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`

const Section = styled.div`
  margin-bottom: 2.5rem;
`

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #555;
`

const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

const Badge = styled.span`
  background-color: #e0f2f1;
  color: #00695c;
  padding: 0.4rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.95rem;
  font-weight: 500;
`

export default function Skills() {
  return (
    <Wrapper>
      <Heading>Skills & Technologies</Heading>

      <Section>
        <SectionTitle>Languages</SectionTitle>
        <BadgeList>
          <Badge>Java</Badge>
          <Badge>JavaScript</Badge>
          <Badge>TypeScript</Badge>
          <Badge>C</Badge>
        </BadgeList>
      </Section>

      <Section>
        <SectionTitle>Frontend</SectionTitle>
        <BadgeList>
          <Badge>React</Badge>
          <Badge>Vite</Badge>
          <Badge>Styled Components</Badge>
          <Badge>Tailwind CSS</Badge>
          <Badge>HTML</Badge>
          <Badge>CSS</Badge>
        </BadgeList>
      </Section>

      <Section>
        <SectionTitle>Backend & Frameworks</SectionTitle>
        <BadgeList>
          <Badge>Spring Boot</Badge>
          <Badge>MyBatis</Badge>
          <Badge>Node.js</Badge>
          <Badge>Express</Badge>
          <Badge>NestJS</Badge>
          <Badge>Prisma</Badge>
          <Badge>Axios</Badge>
          <Badge>REST API Design</Badge>
        </BadgeList>
      </Section>

      <Section>
        <SectionTitle>Authentication & Architecture</SectionTitle>
        <BadgeList>
          <Badge>JWT Auth</Badge>
          <Badge>Session-based Auth</Badge>
          <Badge>OAuth (Google, Kakao)</Badge>
          <Badge>DTO Pattern</Badge>
          <Badge>Global Exception Handling</Badge>
          <Badge>MVC & Layered Architecture</Badge>
        </BadgeList>
      </Section>

      <Section>
        <SectionTitle>Database & Tools</SectionTitle>
        <BadgeList>
          <Badge>MySQL</Badge>
          <Badge>DBeaver</Badge>
          <Badge>Supabase</Badge>
          <Badge>Postman</Badge>
          <Badge>Swagger</Badge>
        </BadgeList>
      </Section>

      <Section>
        <SectionTitle>Infrastructure / DevOps</SectionTitle>
        <BadgeList>
          <Badge>AWS EC2</Badge>
          <Badge>SSH</Badge>
          <Badge>Linux CLI</Badge>
          <Badge>VMWare</Badge>
          <Badge>Network Troubleshooting</Badge>
          <Badge>Tomcat (JSP)</Badge>
        </BadgeList>
      </Section>

      <Section>
        <SectionTitle>Project & Dev Practice</SectionTitle>
        <BadgeList>
          <Badge>Version Control (Git)</Badge>
          <Badge>Multi-page Form Design</Badge>
          <Badge>Responsive Layout</Badge>
          <Badge>Debugging & Troubleshooting</Badge>
          <Badge>Database Schema Design</Badge>
          <Badge>Team Collaboration</Badge>
        </BadgeList>
      </Section>

      <Section>
        <SectionTitle>Languages & Communication</SectionTitle>
        <BadgeList>
          <Badge>English (Fluent)</Badge>
          <Badge>Japanese (JLPT N1)</Badge>
          <Badge>Korean (Native)</Badge>
          <Badge>Technical Writing</Badge>
          <Badge>Cross-cultural Teamwork</Badge>
        </BadgeList>
      </Section>

      <Section>
        <SectionTitle>Certifications</SectionTitle>
        <BadgeList>
          <Badge>JLPT N1 (2024.07)</Badge>
          <Badge>IELTS 7.5 (2019.11)</Badge>
        </BadgeList>
      </Section>
    </Wrapper>
  )
}
