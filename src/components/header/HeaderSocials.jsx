import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'
import Opensea from '../../assests/opensea.png'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/sdavidkong/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/sdavidkong/' target="_blank"><BsGithub /></a>
        <a href='https://twitter.com/ShuaiDavidKong' target="_blank"><BsTwitter /></a>
        <a href='https://opensea.io/sdavidkong' target="_blank"><img className='opensea' src={Opensea}></img></a>
    </div>
  )
}

export default HeaderSocials