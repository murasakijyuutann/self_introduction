import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 900px;
  margin: 4rem auto;
  padding: 0 1rem;
`

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.2rem;
`

export default function About() {
  return (
    <Wrapper>
      <Heading>About Me</Heading>
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
    </Wrapper>
  )
}
