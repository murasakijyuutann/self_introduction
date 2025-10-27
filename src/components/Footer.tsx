// src/components/Footer.tsx

import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';

const FooterContainer = styled.footer`
  background-color: #1f1f2e;
  padding: 2rem 1.5rem;
  color: #ccc;
  text-align: center;
  font-size: 0.95rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a {
    color: #ccc;
    transition: color 0.3s;

    &:hover {
      color: #39c5bb; // Miku teal
    }
  }
`;

const Email = styled.a`
  color: #aaa;
  font-family: monospace;
  margin-bottom: 1rem;

  &:hover {
    color: #fff;
  }
`;

const Divider = styled.hr`
  width: 60%;
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 1rem 0;
`;

const Copyright = styled.div`
  font-size: 0.85rem;
  color: #888;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Email href="mailto:fishyboyxx@gmail.com">fishyboyxx[at]gmail.com</Email>

      <SocialIcons>
        <a href="https://github.com/murasakijyuutann/self_introduction" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/farah-sinclair-44b175221/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://qiita.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <SiQiita size={24} />
        </a>
        <a href="https://www.youtube.com/@%E3%83%81%E3%83%A0%E3%83%81%E3%83%A0-r7s" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} />
        </a>
      </SocialIcons>

      <Divider />

      <Copyright>© 2025 Fishyboyxx. All rights reserved.</Copyright>
    </FooterContainer>
  );
}
