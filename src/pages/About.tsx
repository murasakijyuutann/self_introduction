// src/components/About.tsx

import React from 'react';
import styled from 'styled-components';
import { animatedGradient } from '../styles/AnimatedBackground';
import { motion } from 'framer-motion';

const Section = styled.section`
  ${animatedGradient};

  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),

  background-size: 20px 20px, cover;

  color: #fff;
  padding: 9rem 1.5rem;
  text-align: center;
  position: relative;
`;


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
    background: linear-gradient(to right, #00c6ff, #0072ff);
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
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 4rem;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
`;

const Paragraph = styled(motion.p)`
  border-left: 4px solid rgba(255, 255, 255, 0.4);
  padding-left: 1rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.8;
  color: #eaeaea;
`;

const Signature = styled.div`
  margin-top: 2rem;
  font-style: italic;
  font-size: 1.1rem;
  color: #ffffffcc;
  text-align: center;
`;

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
};

const aboutParagraphs = [
  `I'm a self-driven full-stack developer with 3 years of hands-on experience building and deploying web applications using modern tech stacks like React, Spring Boot, MySQL, JSP/Servlets, Node.js, and more.`,
  `I majored in systems administration and completed a university cloud migration project before transitioning into full-time web development. I specialize in integrating backend APIs with responsive frontends, designing scalable database schemas, and building apps from the ground up — including deployment on AWS EC2.`,
  `My journey includes developing a TMDB-powered movie search app, a fully token-authenticated Spring Boot board system with JWT and DTOs, and a JSP-based shopping mall site. I also maintain a portfolio that bridges my language skills (English, Japanese, Korean) with my tech stack, as I aim to work in Japan as a bilingual engineer.`,
  `I'm passionate about combining language, culture, and technology into software that helps people. I value clean architecture, self-improvement, and turning ideas into real products through code.`,
];

export default function AboutMe() {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <Subtitle>A passionate full-stack developer with a love for culture and code</Subtitle>

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
  );
}
