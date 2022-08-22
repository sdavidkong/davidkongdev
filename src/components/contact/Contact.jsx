import React, {useRef} from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_davidkong-dev', 'template_y1rmhua', form.current, 'AzAopoIgsbn-ELgEX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert("Thank you for your message! I'll get back to you ASAP.")
  };
  return (
    <section id='contact' className='contact__header'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <form ref={form} onSubmit={sendEmail}>
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