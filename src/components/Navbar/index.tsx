import React from 'react'
import { Link } from 'react-router-dom'

import { Nav } from './styled'

function Navbar () {
  return (
    <Nav>
      <Link to='/'>Home</Link>
      <Link to='places'>Escuelas</Link>
      <Link to='user'>Cuenta</Link>
    </Nav>
  )
}

export default Navbar
