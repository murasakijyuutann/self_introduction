import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// ========== Styled Components ==========

const NavbarContainer = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
  text-decoration: none;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 2rem;
    background: #fff;
    padding: 1.2rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 999;
    min-width: 150px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
    color: teal;
  }
`;

const Hamburger = styled.button<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  width: 26px;
  height: 26px;
  z-index: 1001;
  padding: 0;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: #333;
    margin: 2px 0;
    border-radius: 2px;
    transition: 0.3s all ease-in-out;
    transform-origin: center;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    `}
`;

// ========== Component ==========

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <NavbarContainer ref={navRef}>
      <Logo to="/">Fishyboyxx</Logo>

      <NavLinks isOpen={isOpen}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/journey" onClick={closeMenu}>Journey</NavLink>
        <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </NavLinks>

      <Hamburger onClick={toggleMenu} isOpen={isOpen} aria-label="Toggle Menu">
        <span />
        <span />
        <span />
      </Hamburger>
    </NavbarContainer>
  );
}
