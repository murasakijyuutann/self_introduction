import styled from 'styled-components'
import { animatedGradient } from '../styles/AnimatedBackground'
import { motion } from 'framer-motion'

const journeyData = [
  {
    year: '2015–2016',
    title: 'Began My IT Journey in Australia',
    description:
      'Completed a Diploma of IT at UTS:INSEARCH, gaining solid foundations in networking, databases, and programming.',
  },
  {
    year: '2017–2019',
    title: 'Advanced to Bachelor Studies',
    description:
      'Majored in Systems Administration at Charles Sturt University in Sydney, deepening expertise in cloud infrastructure and IT management.',
  },
  {
    year: '2020–2022',
    title: 'Internship & Full-Time Developer Role',
    description:
      'Worked first as an intern, then transitioned into a full-time role assisting full-stack teams — mainly testing, debugging, and improving backend Java systems.',
  },
  {
    year: '2023',
    title: 'Returned to Korea & Java Bootcamp',
    description:
      'Completed a 6-month Java developer bootcamp after returning from Australia. Strengthened full-stack fundamentals using Spring Boot, MyBatis, AWS, and React.',
  },
  {
    year: '2024',
    title: 'Expanding Technical Stack',
    description:
      'Built full-stack projects integrating OAuth, JWT, MyBatis, EC2 deployments, and Vite-based React frontends while improving UI/UX design practices.',
  },
  {
    year: '2025',
    title: 'Preparing for a Career in Japan',
    description:
      'Currently enrolled in a Japan-placement bootcamp, refining my portfolio to present three years of experience and preparing for interviews with Japanese IT companies.',
  },
]

const Section = styled.section`
  ${animatedGradient};
  padding: 6rem 1rem;
  color: #fff;
  text-align: center;
`

const Title = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 4rem;
  font-weight: bold;
`

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: rgba(255, 255, 255, 0.3);
  }
`

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Event = styled(motion.div)`
  position: relative;
  padding-left: 60px;
  margin-bottom: 3rem;
  text-align: left;
`

const Dot = styled.div`
  position: absolute;
  left: 8px;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  border: 4px solid #ff66cc;
  box-shadow: 0 0 12px rgba(255, 102, 204, 0.5);
`

const Year = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`

const EventTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #e0e0e0;
  margin-top: 0.25rem;
`

export default function Journey() {
  return (
    <Section id="journey">
      <Title>My Developer Journey</Title>
      <Timeline>
        {journeyData.map((item, idx) => (
          <Event
            key={idx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Dot />
            <Year>{item.year}</Year>
            <EventTitle>{item.title}</EventTitle>
            <Description>{item.description}</Description>
          </Event>
        ))}
      </Timeline>
    </Section>
  )
}
