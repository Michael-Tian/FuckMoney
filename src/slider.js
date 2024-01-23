import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Silders = ({sildes}) => {
    return(
        <Swiper
      // install Swiper modules
      
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: -4,
          stretch: 0,
          depth: 400,
          modifier: 1,
          slideShadows: true,
          spaceBetween: 50,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
    >
        {sildes.map(item => 
            <SwiperSlide key={item.images}>
                <img src={item.images}></img>
                <div className='Punk_buy'>
                    <div>{item.price} ETH</div>
                    <button>buy</button>
                </div>
            </SwiperSlide>
        )}
        
        
      
      
      
    </Swiper>
    );
    
}
export default Silders;