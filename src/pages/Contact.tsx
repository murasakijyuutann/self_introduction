import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { animatedGradient } from '../styles/AnimatedBackground'

// 🌈 Full-page animated background
const Section = styled.section`
  ${animatedGradient};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 1.5rem;
  color: #fff;
  text-align: center;
  width: 100%; /* ✅ Fix: Prevent overflow */
  overflow-x: hidden; /* ✅ Fix: Prevent horizontal scroll */
`

const Wrapper = styled(motion.div)`
  max-width: 600px;
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.8rem 2.5rem;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
  box-sizing: border-box; /* ✅ Fix: Include padding in width calculation */

  @media (max-width: 768px) {
    padding: 2rem 1.5rem; /* ✅ Fix: Reduce padding on mobile */
    margin: 0 1rem; /* ✅ Fix: Add margin for mobile */
  }
`

const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.4);

  @media (max-width: 768px) {
    font-size: 2rem; /* ✅ Fix: Smaller heading on mobile */
  }
`

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #333;
  background: #fdfdfd;
  box-sizing: border-box; /* ✅ Fix: Include padding in width */

  @media (max-width: 768px) {
    padding: 0.8rem; /* ✅ Fix: Adjust padding for mobile */
    font-size: 0.95rem;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #333;
  background: #fdfdfd;
  resize: none;
  margin-bottom: 1rem;
  box-sizing: border-box; /* ✅ Fix: Include padding in width */

  @media (max-width: 768px) {
    padding: 0.8rem; /* ✅ Fix: Adjust padding for mobile */
    font-size: 0.95rem;
    height: 120px; /* ✅ Fix: Smaller height on mobile */
  }
`

const Button = styled.button`
  background: #fff;
  color: #ff66cc;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  padding: 0.8rem 2rem;
  cursor: pointer;
  transition: all 0.25s ease;
  width: 100%; /* ✅ Fix: Full width for better mobile UX */
  box-sizing: border-box; /* ✅ Fix: Include padding in width */

  &:hover {
    transform: scale(1.05);
    background: #ffe6f2;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
`

const Status = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  word-wrap: break-word; /* ✅ Fix: Prevent text overflow */

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<string>('')

  // ✉️ Handle Email Sending via EmailJS
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("✅ Thanks for reaching out! I'll get back to you soon.")
          form.current?.reset()
        },
        (error) => {
          console.error('FAILED...', error)
          setStatus('❌ Something went wrong. Please try again later.')
        }
      )
  }

  return (
    <Section id="contact">
      <Wrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading>Contact Me</Heading>

        <form ref={form} onSubmit={sendEmail}>
          <Input type="text" name="user_name" placeholder="Your Name" required />
          <Input type="email" name="user_email" placeholder="Your Email" required />
          <Input type="text" name="user_phone" placeholder="Your Phone (optional)" />
          <TextArea name="message" placeholder="Write your message here..." required />
          <Button type="submit">Send Message 💌</Button>
        </form>

        {status && <Status>{status}</Status>}
      </Wrapper>
    </Section>
  )
}