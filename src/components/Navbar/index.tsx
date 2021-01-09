import React from 'react'
import { Nav, SLink } from './styled'

function Navbar () {
  return (
    <Nav>
      <SLink to='/'>Home</SLink>
      <SLink to='places'>Escuelas</SLink>
      <SLink to='user'>Cuenta</SLink>
    </Nav>
  )
}

export default Navbar
