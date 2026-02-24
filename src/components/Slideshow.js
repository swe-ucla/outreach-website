import React from "react";
import "./Slideshow.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


function Slideshow({images}) {
    return (
        <div className="swiper-container">
            <Swiper
                modules={[Navigation]}
                centeredSlides={true}
                slidesPerView={1.8}
                spaceBetween={60}
                navigation={true}
                loop={true}
                className="default"
                >
                {images.map((media, i) => (
                    <SwiperSlide key={i}>
                        <img src={media.src} alt={media.caption}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
  );
}

export default Slideshow;
