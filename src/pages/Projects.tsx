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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`

const Card = styled.div`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`

const Title = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1rem;
`

const TechList = styled.div`
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 1rem;
`

const Link = styled.a`
  color: teal;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

export default function Projects() {
  return (
    <Wrapper>
      <Heading>My Projects</Heading>
      <ProjectGrid>

        <Card>
          <Image src="/images/Sakine.jpg" alt="Movie Explorer" />
          <Title>🎬 Movie Explorer</Title>
          <Description>
            A movie search app using TMDB API with infinite scroll, responsive layout, and detail pages.
          </Description>
          <TechList>React · Tailwind CSS · TMDB API</TechList>
          <Link href="https://github.com/yourusername/movie-explorer" target="_blank">GitHub</Link>
        </Card>

        <Card>
          <Image src="/images/MIku.jpg" alt="Spring Boot Board" />
          <Title>📋 Spring Boot Board</Title>
          <Description>
            A full-featured backend system with token login, DTOs, user-role management, and Swagger test UI.
          </Description>
          <TechList>Spring Boot · MyBatis · JWT · Swagger</TechList>
          <Link href="https://github.com/yourusername/board-system" target="_blank">GitHub</Link>
        </Card>

        <Card>
          <Image src="/images/MEIKOV3.jpg" alt="JSP Shopping Mall" />
          <Title>🛍 JSP Shopping Mall</Title>
          <Description>
            An early JSP/Servlet-based shopping mall project with add-to-cart, login, product list, and checkout.
          </Description>
          <TechList>JSP · Servlet · JSTL · Tomcat</TechList>
          <Link href="https://github.com/yourusername/jsp-practise" target="_blank">GitHub</Link>
        </Card>

        <Card>
          <Image src="/images/MEIKO1.jpg" alt="Todo App on EC2" />
          <Title>☁️ EC2 Todo App</Title>
          <Description>
            A React + NestJS app hosted on AWS EC2 with Supabase OAuth login and full CRUD task list.
          </Description>
          <TechList>React · NestJS · Prisma · EC2 · Supabase</TechList>
          <Link href="https://github.com/yourusername/ec2-todo-app" target="_blank">GitHub</Link>
        </Card>

      </ProjectGrid>
    </Wrapper>
  )
}
