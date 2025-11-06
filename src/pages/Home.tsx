import styled, { keyframes } from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'
import { useNavigate } from 'react-router-dom'
import { animatedGradient } from '../styles/AnimatedBackground'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`

const Wrapper = styled.div`
  ${animatedGradient};
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const HeroSection = styled.div`
  margin-bottom: 3rem;
`

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) { 
    font-size: 2.2rem;
    min-height: 80px;
  }
`

const Tagline = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin: 2rem 0;
`

const SocialIcon = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`

const ProfileSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

const ProfileCard = styled.div`
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.18);
  }
`

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  animation: ${float} 3s ease-in-out infinite;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

const ProfileName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`

const ProfileRole = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
`

const ProfileBio = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StatItem = styled.div`
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.3rem;
  }
  
  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
`

const HighlightsCard = styled(ProfileCard)`
  text-align: left;
`

const HighlightItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  min-width: 45px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #fff;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
`

const HighlightContent = styled.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0.3rem;
  }
  
  p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.5;
  }
`

const CTASection = styled.div`
  margin-top: 3rem;
`

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  margin: 0 0.5rem;
  
  &:hover {
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.9rem 2rem;
    margin: 0.5rem;
  }
`

const SecondaryButton = styled(CTAButton)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  }
`

export default function Home() {
  const navigate = useNavigate()
  
  return (
    <Wrapper>
      <Container>
        <HeroSection>
          <Heading>
            <Typewriter
              words={[
                "Hi, I'm Fishyboyxx.",
                'Full-Stack Developer.',
                'Trilingual Engineer.',
                'Welcome to my portfolio.'
              ]}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </Heading>
          
          <Tagline>
            Building modern web applications with React & Spring Boot
          </Tagline>
          
          <SocialLinks>
            <SocialIcon href="https://github.com/murasakijyuutann" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/sunmyung-woo-44b175221/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="mailto:neneke.emu@gmail.com">
              <FaEnvelope />
            </SocialIcon>
          </SocialLinks>
        </HeroSection>

        <ProfileSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <ProfileCard>
            <Avatar>
              <img src="/images/piapro.jpg" alt="Profile Avatar" />
            </Avatar>
            <ProfileName>Fishyboyxx</ProfileName>
            <ProfileRole>Full-Stack Developer</ProfileRole>
            <ProfileBio>
              Passionate about turning ideas into real products and connecting cultures through technology.
              Fluent in React, Spring Boot, and three human languages (English, Korean, Japanese).
            </ProfileBio>
            
            <StatsGrid>
              <StatItem>
                <h3>3+</h3>
                <p>Years Experience</p>
              </StatItem>
              <StatItem>
                <h3>15+</h3>
                <p>Projects Built</p>
              </StatItem>
              <StatItem>
                <h3>3</h3>
                <p>Languages</p>
              </StatItem>
            </StatsGrid>
          </ProfileCard>

          <HighlightsCard>
            <ProfileName style={{ marginBottom: '1.5rem', textAlign: 'left' }}>Key Highlights</ProfileName>
            
            <HighlightItem>
              <IconWrapper>
                <FaGraduationCap />
              </IconWrapper>
              <HighlightContent>
                <h4>Education & Training</h4>
                <p>Bachelor's in Systems Administration (Australia) + Java Development Bootcamp (Korea)</p>
              </HighlightContent>
            </HighlightItem>
            
            <HighlightItem>
              <IconWrapper>
                <FaBriefcase />
              </IconWrapper>
              <HighlightContent>
                <h4>Professional Experience</h4>
                <p>Full-time developer role in Sydney, specializing in backend Java systems and full-stack testing</p>
              </HighlightContent>
            </HighlightItem>
            
            <HighlightItem>
              <IconWrapper>
                <FaCode />
              </IconWrapper>
              <HighlightContent>
                <h4>Technical Expertise</h4>
                <p>React, Spring Boot, AWS, MySQL, TypeScript, Docker, MyBatis, JWT Authentication</p>
              </HighlightContent>
            </HighlightItem>
          </HighlightsCard>
        </ProfileSection>

        <CTASection>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/projects')}
          >
            View My Projects →
          </CTAButton>
          <SecondaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/journey')}
          >
            See My Journey
          </SecondaryButton>
        </CTASection>
      </Container>
    </Wrapper>
  )
}
