import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function ProjectItem(props) {
  const slides = props.slides;

  return (
    <>
    <li className='projects__item' to={props.path}> 
      <div >
        <figure className='projects__item__pic-wrap' data-category={props.label}>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((pic) => (
        <SwiperSlide><img src={pic} alt='project-snapshot'/></SwiperSlide>
      ))}
      </Swiper>
          {/* <img src={props.src} alt='project-snapshot' className='projects__item__img'/> */}
        </figure>
        <div className='projects__item__info'>
          <h5 className="projects__item__title"> {props.text}</h5> 
          <p className="projects__item__description"> {props.description} </p>
        </div>
      </div>
    </li>

  </>
  )
}

export default ProjectItem