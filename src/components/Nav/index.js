import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: #999;
  color: #fff;
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit font-mono`}
  color: #fff;
  padding: 1rem;
  &:hover {
    background: #aaa;
  }
`

const Nav = () => (
  <NavContainer>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/contact">Contact</StyledLink>
  </NavContainer>
)

export default Nav
