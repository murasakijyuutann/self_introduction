import styled from 'styled-components'
import { animatedGradient } from '../styles/AnimatedBackground'
import { motion } from 'framer-motion'

const Section = styled.section`
  ${animatedGradient};
  color: #fff;
  text-align: center;
  padding: 9rem 1.5rem;
  position: relative;
`

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #39c5bb, #ff66cc);
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    border-radius: 2px;
    animation: pulse 2s infinite ease-in-out;
  }

  @keyframes pulse {
    0% { opacity: 0.6; transform: scaleX(1); }
    50% { opacity: 1; transform: scaleX(1.2); }
    100% { opacity: 0.6; transform: scaleX(1); }
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 4rem;
`

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
`

const Paragraph = styled(motion.p)`
  border-left: 4px solid rgba(255, 255, 255, 0.4);
  padding-left: 1rem;
  margin-bottom: 2rem;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #eaeaea;
`

const Signature = styled.div`
  margin-top: 3rem;
  font-style: italic;
  font-size: 1.1rem;
  color: #ffffffcc;
  text-align: center;
`

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
}

const aboutParagraphs = [
  `Full-stack developer with 3+ years of hands-on experience building modern web applications using React, Spring Boot, and cloud infrastructure.`,
  `From systems administration to full-stack development — I specialize in creating scalable backends, responsive frontends, and deploying production-ready apps on AWS EC2.`,
  `Trilingual engineer (English, Japanese N1, Korean Native) seeking to join Japanese tech teams where I can bridge cultures and build impactful software.`,
]

export default function AboutMe() {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <Subtitle>
        A developer bridging technology, culture, and creativity.
      </Subtitle>

      <ContentWrapper>
        {aboutParagraphs.map((text, idx) => (
          <Paragraph
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            {text}
          </Paragraph>
        ))}

        <Signature>"Code is my language. Culture is my bridge."</Signature>
      </ContentWrapper>
    </Section>
  )
}