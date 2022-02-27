import React from 'react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Pagination, Navigation } from "swiper";

import "../components/component Styles/Carousel2.css"

const Carousel2 = () => {
  
  
  return (
    <div  className='mt-[10%]'>
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
    
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><button
          id="q1b"
          className="min-w-[50px] btn_roadmap btn_border "
          onClick={() => {
            // setQValue("q1");
          }}
        >
          <span className="flex ">
            Q1 <span className="ml-2 ml-0">2021</span>
          </span>
        </button></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel2