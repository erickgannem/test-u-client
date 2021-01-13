import React from 'react'
import { FaGraduationCap, FaSchool, FaUserAlt } from 'react-icons/fa'
import { Nav, Link } from './styled'

function Navbar () {
  const handleSelect = (e: React.SyntheticEvent) => {
    console.log(e)
  }
  return (
    <Nav>
      <Link isselected='true' to='/' onClick={e => handleSelect(e)}>
        <FaGraduationCap size={'2em'}/>
      </Link>
      <Link isselected='false' to='places'>
        <FaSchool size={'2em'} />
      </Link>
      <Link isselected='false' to='user'>
        <FaUserAlt size={'2em'} />
      </Link>
    </Nav>
  )
}

export default Navbar
