import styled from 'styled-components'
import { animatedGradient } from '../styles/AnimatedBackground'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCode, FaPlane, FaRocket, FaMapMarkerAlt } from 'react-icons/fa'

const journeyData = [
  {
    year: '2015–2016',
    title: 'Began My IT Journey in Australia',
    description:
      'Completed a Diploma of IT at UTS:INSEARCH, gaining solid foundations in networking, databases, and programming.',
    icon: FaGraduationCap,
    location: 'Sydney, Australia',
  },
  {
    year: '2017–2019',
    title: 'Advanced to Bachelor Studies',
    description:
      'Majored in Systems Administration at Charles Sturt University in Sydney, deepening expertise in cloud infrastructure and IT management.',
    icon: FaGraduationCap,
    location: 'Sydney, Australia',
  },
  {
    year: '2020–2022',
    title: 'Internship & Full-Time Developer Role',
    description:
      'Worked first as an intern, then transitioned into a full-time role assisting full-stack teams — mainly testing, debugging, and improving backend Java systems.',
    icon: FaBriefcase,
    location: 'Sydney, Australia',
  },
  {
    year: '2023',
    title: 'Returned to Korea & Java Bootcamp',
    description:
      'Completed a 6-month Java developer bootcamp after returning from Australia. Strengthened full-stack fundamentals using Spring Boot, MyBatis, AWS, and React.',
    icon: FaPlane,
    location: 'Seoul, South Korea',
  },
  {
    year: '2024',
    title: 'Expanding Technical Stack',
    description:
      'Built full-stack projects integrating OAuth, JWT, MyBatis, EC2 deployments, and Vite-based React frontends while improving UI/UX design practices.',
    icon: FaCode,
    location: 'Seoul, South Korea',
  },
  {
    year: '2025',
    title: 'Preparing for a Career in Japan',
    description:
      'Currently enrolled in a Japan-placement bootcamp, refining my portfolio to present three years of experience and preparing for interviews with Japanese IT companies.',
    icon: FaRocket,
    location: 'Seoul, South Korea',
  },
]

const Section = styled.section`
  ${animatedGradient};
  padding: 6rem 1.5rem;
  color: #fff;
  text-align: center;
  min-height: 100vh;
`

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 15px rgba(255, 255, 255, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.4) 50%, 
      rgba(255, 255, 255, 0.1) 100%
    );
  }
  
  @media (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Event = styled(motion.div)<{ $isEven: boolean }>`
  position: relative;
  display: flex;
  justify-content: ${props => props.$isEven ? 'flex-end' : 'flex-start'};
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 60px;
  }
`

const EventCard = styled.div`
  width: 45%;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 1.8rem;
  text-align: left;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.18);
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.5);
  border: 4px solid rgba(255, 255, 255, 0.2);
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 30px;
  }
`

const Year = styled.div`
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 0.8rem;
  letter-spacing: 0.5px;
`

const EventTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: #fff;
`

const Description = styled.p`
  font-size: 0.98rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 0.8rem;
`

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  margin-top: 0.5rem;
`

export default function Journey() {
  return (
    <Section id="journey">
      <Container>
        <Title>My Developer Journey</Title>
        <Subtitle>
          From Australia to Korea, building towards a career in Japan 🌏
        </Subtitle>
        <Timeline>
          {journeyData.map((item, idx) => {
            const Icon = item.icon
            return (
              <Event
                key={idx}
                $isEven={idx % 2 === 0}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <IconWrapper>
                  <Icon />
                </IconWrapper>
                <EventCard>
                  <Year>{item.year}</Year>
                  <EventTitle>{item.title}</EventTitle>
                  <Description>{item.description}</Description>
                  <Location>
                    <FaMapMarkerAlt />
                    {item.location}
                  </Location>
                </EventCard>
              </Event>
            )
          })}
        </Timeline>
      </Container>
    </Section>
  )
}
