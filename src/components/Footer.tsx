import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa'
import { SiQiita } from 'react-icons/si'

const FooterContainer = styled.footer`
  background-color: #1f1f2e;
  padding: 2rem 1.5rem;
  color: #ccc;
  text-align: center;
  font-size: 0.95rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid rgba(255, 255, 255, 0.05);
`

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a {
    color: #ccc;
    font-size: 1.4rem;
    transition: all 0.3s ease;

    &:hover {
      color: #39c5bb;
      transform: translateY(-2px);
    }
  }
`

// const ModeLinks = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 0.5rem;
//   font-size: 0.9rem;

//   a {
//     color: #aaa;
//     text-decoration: underline;
//     transition: color 0.3s;
//     &:hover {
//       color: #39c5bb;
//     }
//   }
// `

const Tagline = styled.p`
  font-size: 0.95rem;
  margin-top: 0.8rem;
  color: #aaa;
`

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #777;
  letter-spacing: 0.3px;
`

export default function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://github.com/murasakijyuutann/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sunmyung-woo-44b175221/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://x.com/hBE9ck3QAY1931" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/@%E8%8A%B1%E5%BC%81-d1d" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://qiita.com/murasakijyuutann" target="_blank" rel="noopener noreferrer" aria-label="Qiita">
          <SiQiita />
        </a>
        <a href="mailto:neneke.emu@gmail.com" aria-label="Send Email">
          <FaEnvelope />
        </a>
      </SocialIcons>

      {/* 🌐 PC/Mobile Links (manual switch) */}
      {/* <ModeLinks>
        <a href="https://your-portfolio-link.vercel.app" target="_blank" rel="noopener noreferrer">
          💻 PC Version
        </a>
        <a href="https://your-portfolio-link.vercel.app/mobile" target="_blank" rel="noopener noreferrer">
          📱 Mobile Version
        </a>
      </ModeLinks> */}

      <Tagline>Made with 💙 React, Styled Components, and creativity.</Tagline>
      <Copyright>
        © {new Date().getFullYear()} Farah Sinclair (Fishyboyxx). All Rights Reserved.
      </Copyright>
    </FooterContainer>
  )
}
