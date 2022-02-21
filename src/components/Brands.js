import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Autoplay } from "swiper";
import brand1 from '../img/brand1.png'
import brand2 from '../img/brand2.png'
import brand3 from '../img/brand3.png'
import brand4 from '../img/brand4.png'
import brand5 from '../img/brand5.png'
import brand6 from '../img/brand6.png'
import brand7 from '../img/brand7.png'
import brand8 from '../img/brand8.png'
import brand9 from '../img/brand9.png'
import brand10 from '../img/brand10.png'


function Brands() {
   
    return (
    <div className='brands'>
        <div className='brands-content container'>
            <header className='header-brands'>
                <h2 className='title-section'>Nuestros Proveedores</h2>
            </header>
            
            <Swiper
                 spaceBetween={50}
                 slidesPerView={5}
                 autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                 modules={[Autoplay]}
                 loop={true}
                 breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    860:{
                        slidesPerView: 5
                    }
                  }}
            >   
                <SwiperSlide><img src={brand1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand7} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand8} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand9} alt="" /></SwiperSlide>
                <SwiperSlide><img src={brand10} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Brands