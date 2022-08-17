import React from 'react'
import Resume from '../../assests/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Talk to Me</a>

    </div>
  )
}

export default CTA