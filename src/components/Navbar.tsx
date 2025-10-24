import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  background: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #222;
`

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: teal;
  }
`

export default function Navbar() {
  return (
    <Nav>
      <Logo>Farah.Dev</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/skills">Skills</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavLinks>
    </Nav>
  )
}
