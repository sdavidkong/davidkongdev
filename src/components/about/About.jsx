import React from 'react'
import './about.css'
import chania from '../../assests/chania.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {GiBarbedSun, GiMagnifyingGlass} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <div className='aboutHeading'></div>
      <h5>Some Interesting Things</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={chania} alt='Picture of smiling handsome dev'/>
          </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <RiAwardFill className='about__icon'/> 
            <h5>Dependable</h5>
            <small>2+ years as a freelance dev, 6+ years as a business operator.</small>
          </article>
          <article className='about__card'>
            <GiBarbedSun className='about__icon'/> 
            <h5>Passionate</h5>
            <small>I believe in a decentralized future built on Web3!</small>
          </article>
          <article className='about__card'>
            <GiMagnifyingGlass className='about__icon'/> 
            <h5>Curious</h5>
            <small>A self taught crypto native who takes initiative.</small>
          </article>
        </div>
        <p>
          I started mining Ethereum in my garage in 2018. Since then, crypto has led me on an unforgettable journey! Formerely the Operations Manager at TeamLogic IT, I decided to adjust my path 
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About