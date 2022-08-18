import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserAstronaut} from 'react-icons/fa'
import {MdOutlineWork} from 'react-icons/md'
import {FaHandshake} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'


const Nav = () => {
  return (
    <nav>
      <a href='#'><ImHome/></a>
      <a href='#about'><FaUserAstronaut/></a>
      <a href='#experience'><MdOutlineWork/></a>
      <a href='#services'><FaHandshake/></a>
      <a href='#contact'><GrMail/></a>

    </nav>
  )
}

export default Nav