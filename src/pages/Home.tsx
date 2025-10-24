import styled, { keyframes } from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'
import { useNavigate } from 'react-router-dom'

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
  padding: 5rem 0 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
  animation: ${fadeInUp} 0.8s ease-out;
`

const Heading = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

const Sub = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 2.5rem 0 2rem;
`

const CTAButton = styled.button`
  background: white;
  color: #764ba2;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f0f0f0;
  }
`

const ProfileCard = styled.div`
  margin-top: 2.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`

const Avatar = styled.div`
  width: 130px;
  height: 130px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

const ProfileName = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
`

const ProfileRole = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: #667eea;
  margin-bottom: 1rem;
`

const ProfileBio = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`

export default function Home() {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Container>
        <Heading>
          <Typewriter
            words={[
              'Hi, I’m Farah.',
              'Full-Stack Developer.',
              'Bilingual Engineer.',
              'Welcome to my portfolio.'
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </Heading>

        <ProfileCard>
          <Avatar>
            <img src="/images/piapro.jpg" alt="Farah Avatar" />
          </Avatar>
          <ProfileName>Fishyboyxx</ProfileName>
          <ProfileRole>Full-Stack Developer</ProfileRole>
          <ProfileBio>
            Passionate about turning ideas into real products.  
            Fluent in React, Spring Boot, and three human languages.
            🎧 Vocaloid fan and tech otaku at heart.
          </ProfileBio>
        </ProfileCard>

        <Sub>Building apps that connect code, culture, and people.</Sub>
        <CTAButton onClick={() => navigate('/projects')}>
          View My Work
        </CTAButton>
      </Container>
    </Wrapper>
  )
}
