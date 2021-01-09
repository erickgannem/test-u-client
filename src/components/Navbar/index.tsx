import React from 'react'
import { FaGraduationCap, FaSchool, FaUserAlt } from 'react-icons/fa'

import { Nav, SLink } from './styled'

function Navbar () {
  return (
    <Nav>
      <SLink to='/'>
        <FaGraduationCap size={'2em'}/>
      </SLink>
      <SLink to='places'>
        <FaSchool size={'2em'} />
      </SLink>
      <SLink to='user'>
        <FaUserAlt size={'2em'} />
      </SLink>
    </Nav>
  )
}

export default Navbar
