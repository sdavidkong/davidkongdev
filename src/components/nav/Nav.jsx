import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserAstronaut, FaTools} from 'react-icons/fa'
import {MdOutlineWork} from 'react-icons/md'
import {FaHandshake} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import {GoMegaphone} from 'react-icons/go'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaTools/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdOutlineWork/></a>
      <a href='#testimonials' onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><GoMegaphone/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GrMail/></a>
    

    </nav>
  )
}

export default Nav