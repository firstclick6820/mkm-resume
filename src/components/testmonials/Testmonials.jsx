import React from 'react'
import './testmonials.css';


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





// Import Dumy Data
import reviews from '../../assets/data/TESTIMONIAL';


const Testmonials = () => {
  return (
    <section id="#testimonial">

      <h5>Review From The Clients</h5>
      <h2>Testimonials</h2>


      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}
        >

        {reviews.map(item => (
            <SwiperSlide className="testimonial" key={item.id}>
                <div className="client__avatar">
                    <img src={item.avatar} alt="Avatar" />
                </div>
                <h5>{item.name}</h5>
                <small className="client__review">
                {item.review}
                </small>
            </SwiperSlide>
        ))}

      </Swiper>

    </section>
  )
}

export default Testmonials