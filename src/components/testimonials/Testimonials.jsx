import React from 'react'
import './testimonials.css'
// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import einstein from '../../assests/einstein.jpg'

const data = [
  {
    avatar: einstein,
    refName: 'Albert Einstein',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic adipisci explicabo laborum, illo iure doloremque dolor accusantium a assumenda quibusdam voluptatem voluptate facilis similique vitae sequi harum ad? Numquam.'
  },
  {
    avatar: einstein,
    refName: 'Albert Einstein',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic adipisci explicabo laborum, illo iure doloremque dolor accusantium a assumenda quibusdam voluptatem voluptate facilis similique vitae sequi harum ad? Numquam.'
  },
  {
    avatar: einstein,
    refName: 'Albert Einstein',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic adipisci explicabo laborum, illo iure doloremque dolor accusantium a assumenda quibusdam voluptatem voluptate facilis similique vitae sequi harum ad? Numquam.'
  },
  {
    avatar: einstein,
    refName: 'Albert Einstein',
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
          data.map(({avatar,refName, review}, index) =>{
            return (
              <SwiperSlide className='testimonial'>
               <div className='ref__avatar'>
                 <img src={avatar} alt='a good friend of mine'/>
              </div>
              <h5 className='ref__name'>{refName}</h5>
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