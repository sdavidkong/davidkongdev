import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me.webp'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>David Kong</h1>
        <h5 className='text-light'>A Full Stack Crypto Dev</h5>
        <CTA />
        
        <div className='me'>
          <img className='meImg' src={ME} alt='A photo of a handsome dev'/>
          
        </div>
        <HeaderSocials />
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
      

    </header>
  )
}

export default Header