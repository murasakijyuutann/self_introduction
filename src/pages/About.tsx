import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 4rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    z-index: 1;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out;
`

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #fff;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeInUp} 0.8s ease-out;
`

export default function About() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Heading>About Me</Heading>
          <Subtitle>A passionate full-stack developer with a love for culture and code</Subtitle>
        </Header>
        <Paragraph>
          I’m a self-driven full-stack developer with 3 years of hands-on experience building and deploying web
          applications using modern tech stacks like React, Spring Boot, MySQL, JSP/Servlets, Node.js, and more.
        </Paragraph>
        <Paragraph>
          I majored in systems administration and completed a university cloud migration project before transitioning
          into full-time web development. I specialize in integrating backend APIs with responsive frontends, designing
          scalable database schemas, and building apps from the ground up — including deployment on AWS EC2.
        </Paragraph>
        <Paragraph>
          My journey includes developing a TMDB-powered movie search app, a fully token-authenticated Spring Boot board
          system with JWT and DTOs, and a JSP-based shopping mall site. I also maintain a portfolio that bridges my
          language skills (English, Japanese, Korean) with my tech stack, as I aim to work in Japan as a bilingual
          engineer.
        </Paragraph>
        <Paragraph>
          I’m passionate about combining language, culture, and technology into software that helps people. I value clean
          architecture, self-improvement, and turning ideas into real products through code.
        </Paragraph>
      </Container>
    </Wrapper>
  )
}