import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/wheat.webp'

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio__header'>
      <h5 >Check Out Projects From</h5>
      <h2>My Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="a thumbnail of the project"/>
          </div>
          <h3>Project Coming Soon</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/' className='btn' target='_blank'>Github</a>
          <a href='https://' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
   
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="a thumbnail of the project"/>
          </div>
          <h3>Project Coming Soon</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/' className='btn' target='_blank'>Github</a>
          <a href='https://' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
  
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="a thumbnail of the project"/>
          </div>
          <h3>Project Coming Soon</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/' className='btn' target='_blank'>Github</a>
          <a href='https://' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="a thumbnail of the project"/>
          </div>
          <h3>Project Coming Soon</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/' className='btn' target='_blank'>Github</a>
          <a href='https://' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>



    </section>
  )
}

export default Portfolio