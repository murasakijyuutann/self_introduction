// src/components/Journey.tsx

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const journeyData = [
  {
    year: '2019–2021',
    title: 'Studied Systems Administration in Australia',
    description: 'Learned networking, cloud infrastructure, and Linux/Windows systems.',
  },
  {
    year: '2022',
    title: 'Transitioned into Software Development',
    description: 'Started exploring Java, built console apps and database projects.',
  },
  {
    year: '2023',
    title: 'Created My First Full-Stack Applications',
    description: 'Built React + Spring Boot apps, deployed to EC2, added OAuth, responsive UI.',
  },
  {
    year: '2024',
    title: 'Built Real-World Features',
    description: 'JWT login, MyBatis, Tailwind, Swiper, JSP shopping mall, infinite scroll app.',
  },
  {
    year: '2025',
    title: 'Conditional Dev Offer in Japan',
    description: 'Now refining portfolio to reflect 3 years of full-stack experience.',
  },
];

const Section = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 6rem 1rem;
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 4rem;
  font-weight: bold;
`;

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
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Event = styled(motion.div)`
  position: relative;
  padding-left: 60px;
  margin-bottom: 3rem;
  text-align: left;
`;

const Dot = styled.div`
  position: absolute;
  left: 8px;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  border: 4px solid #764ba2;
`;

const Year = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

const EventTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #e0e0e0;
`;

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
  );
}
