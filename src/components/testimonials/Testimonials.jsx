import React from 'react'
import './testimonials.css'
// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import juan from '../../assests/juan.jpg'
import {BsLinkedin} from 'react-icons/bs'
import gerard from '../../assests/gerard.jfif'
import zach from '../../assests/zach.jfif'

const data = [
  {
    avatar: juan,
    refName: 'Juan Du',
    refTitle:'Software Engineer @ SteadyMD',
    refSocial:'https://www.linkedin.com/in/juan313/',
    review: '"David is not only smart and hardworking, he’s also a natural leader. He has a positive influence on people around him. He is one of the most passionate people I know. The crypto industry needs people like David."'
  },
  {
    avatar: gerard,
    refName: 'Gerard Degas',
    refTitle:'Senior Software Engineer @ Block (Square)',
    refSocial:'https://www.linkedin.com/in/gerard-degas-305264ab/',
    review: `"David goes after what he wants and doesn't stop until he's achieved victory. He's a great leader and friend and he's inspired me for as long as I've known him. Plain and simple - David knows how to make the impossible, possible."`
  },
  {
    avatar: zach,
    refName: 'Zach Queen',
    refTitle:'Software Engineer @ Google',
    refSocial:'https://www.linkedin.com/in/zach-queen/',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic adipisci explicabo laborum, illo iure doloremque dolor accusantium a assumenda quibusdam voluptatem voluptate facilis similique vitae sequi harum ad? Numquam.'
  },
  {
    avatar: juan,
    refName: 'Albert Einstein',
    refTitle:'',
    refSocial:'',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic adipisci explicabo laborum, illo iure doloremque dolor accusantium a assumenda quibusdam voluptatem voluptate facilis similique vitae sequi harum ad? Numquam.'
  },
]


const Testimonials = () => {
  return (

    <section id='testimonials' className='testimonial__header'>
      <h5>Want To Know More? Ask My Friends</h5>
      <h2>References</h2>

      <Swiper className='container testimonials__container' 
       modules={[Pagination, Navigation]}
       navigation
       spaceBetween={40}
       slidesPerView={1} 
       pagination={{ clickable: true }}>

        {
          data.map(({avatar,refName, review, refTitle, refSocial}, index) =>{
            return (
              <SwiperSlide className='testimonial'>
               <div className='ref__avatar'>
                 <img src={avatar} alt='a good friend of mine'/>
              </div>
              <h4 className='ref__name'>{refName}</h4>
              <h5 className='ref__title'>{refTitle}</h5>
              <a href={refSocial} target='_blank'><BsLinkedin/></a>
              <small className='ref__review'>{review}</small>

        </SwiperSlide>

            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials