import React from 'react'
import './experience.css'
import {ImHtmlFive2} from 'react-icons/im'

const experience = () => {
  return (
    <section id='experience'>
      <h5 className='experience__header'>Here Are Some Of</h5>
      <h2>My Skills</h2>
      <div className='container experience__container'>
        <div className='experience__web'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <ImHtmlFive2 className='experience__details-icon' />
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <ImHtmlFive2 className='experience__details-icon' />
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <ImHtmlFive2 className='experience__details-icon' />
              <h4>Javascript</h4>
              </article>
              <article className='experience__details'>
              <ImHtmlFive2 className='experience__details-icon' />
              <h4>React/React Native</h4>
            </article>
          </div>

        </div>
        <div className='experience__web3'>
        <h3>Web3 Development</h3>
        <div className='experience__content'>
            <article className='experience__details'>
              <ImHtmlFive2 className='experience__details-icon' />
              <h4>Solidity</h4>
            </article>
            <article className='experience__details'>
              <ImHtmlFive2 className='experience__details-icon' />
              <h4>ethers.js</h4>
            </article>
            <article className='experience__details'>
              <ImHtmlFive2 className='experience__details-icon' />
              <h4>Chainlink</h4>
              </article>
              <article className='experience__details'>
              <ImHtmlFive2 className='experience__details-icon' />
              <h4>Alechemy/Infura</h4>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default experience