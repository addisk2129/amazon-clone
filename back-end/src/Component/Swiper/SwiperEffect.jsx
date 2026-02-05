import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {imageData} from './Img/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./SwiperEffect.module.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperEffect() {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
   
        loop={true}
        scrollbar={false}
      >
        {imageData.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`slide-${index}`}
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


export default SwiperEffect
