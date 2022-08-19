import React from 'react'
import './experience.css'
import {ImHtmlFive2} from 'react-icons/im'
import {SiCss3, SiJavascript, SiSolidity, SiChainlink} from 'react-icons/si'
import {FaReact, FaEthereum, FaHardHat, FaServer} from 'react-icons/fa'
import {RiCodeSSlashFill} from 'react-icons/ri'
import {WiCloudyGusts} from 'react-icons/wi'
import {TbLetterZ} from 'react-icons/tb'
import {SiGit} from 'react-icons/si'

const experience = () => {
  return (
    <section id='experience'>
      <h5 className='experience__header'>Here Are Some Of</h5>
      <h2>My Skills</h2>
      <div className='container experience__container'>
        <div className='experience__web'>
          <RiCodeSSlashFill className='experience__icon'/>
          <h3>Front-end Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <ImHtmlFive2 className='experience__details-icon' />
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <SiCss3 className='experience__details-icon' />
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <h4>Javascript</h4>
              </article>
              <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <h4>React </h4>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <h4>React Native</h4>
            </article>
            <article className='experience__details'>
              <SiGit className='experience__details-icon' />
              <h4>Git</h4>
            </article>
          </div>

        </div>
        <div className='experience__web'>
        <FaEthereum className='experience__icon'/>
        <h3> Web3 Development</h3>
        <div className='experience__content'>
            <article className='experience__details'>
              <SiSolidity className='experience__details-icon' />
              <h4>Solidity</h4>
            </article>
            <article className='experience__details'>
              <FaServer className='experience__details-icon' />
              <h4>Alchemy/Infura</h4>
            </article>
            <article className='experience__details'>
              <WiCloudyGusts className='experience__details-icon' />
              <h4>ethers.js</h4>
            </article>
            <article className='experience__details'>
              <SiChainlink className='experience__details-icon' />
              <h4>Chainlink</h4>
              </article>
            <article className='experience__details'>
              <FaHardHat className='experience__details-icon' />
              <h4>Hardhat</h4>
            </article>
            <article className='experience__details'>
              <TbLetterZ className='experience__details-icon' />
              <h4>OpenZeppelin</h4>
            </article>
            

          </div>

        </div>
      </div>
    </section>
  )
}

export default experience