import React from 'react'
import { FaGraduationCap, FaSchool, FaUserAlt } from 'react-icons/fa'

import { Nav, Link } from './styled'

function Navbar () {
  return (
    <Nav>
      <Link to='/'>
        <FaGraduationCap size={'2em'}/>
      </Link>
      <Link to='places'>
        <FaSchool size={'2em'} />
      </Link>
      <Link to='user'>
        <FaUserAlt size={'2em'} />
      </Link>
    </Nav>
  )
}

export default Navbar
