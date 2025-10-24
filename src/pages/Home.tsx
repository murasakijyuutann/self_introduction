import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
`

export default function Home() {
  return (
    <Container>
      <Title>Hi, I'm Farah 👋</Title>
      <Subtitle>A full-stack developer passionate about building useful, multilingual apps.</Subtitle>
    </Container>
  )
}
