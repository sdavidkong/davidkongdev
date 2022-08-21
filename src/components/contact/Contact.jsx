import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact' className='contact__header'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>

        </form>
        </div>
        



    
    </section>
      
  )
}

export default Contact