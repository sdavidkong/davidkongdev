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
        <p className='aboutP'>
          In 2018, I started mining Ethereum in my garage. Since then, crypto has led me on an epic journey! Formerely an operations manager in IT services, I decided to follow my passion down the Web3 rabbit hole. 
          <br></br><br></br>
          Now, I build full stack React/React Native apps that integrate with Solidity smart contracts. I'm really excited about Ethereum, Chainlink, and The Graph!<br></br><br></br>
          Besides coding, I also love traveling, trading markets, NFTs, being with the people I love, fashion, and watches! I spend most of my time between Miami, Los Angeles, and San Francisco. 
          </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About