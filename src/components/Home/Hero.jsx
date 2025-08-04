import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { assets } from '../../assets/assets';

const slides = [
    {
        imgSrc: assets.sch_bg_3,
    },
    {
        imgSrc: assets.sch_bg_1,
    },
    {
        imgSrc: assets.sch_bg_2,
    },
    {
        imgSrc: assets.sch_bg_4,
    },
];


const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

        {/* <Navbar /> */}

      <div className='gradient-bg z-30'>
        {/* Swiper Background Image Slider */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          fadeEffect={{ crossFade: true }}
          speed={1000}
          autoplay={{ delay: 2000 }}
          loop
          className="w-full h-full"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${src.imgSrc})`, backgroundSize: 'cover' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>


        {/* Fixed Text Overlay */}
        <div className="absolute inset-0 flex flex-col text-color items-center justify-center z-30">
          <div className='flex flex-col items-center w-full gap-8 lg:gap-10 mb-6'>
            <div className="bg-white/20 text-color-light border border-white/30  px-5 py-2 rounded-full cursor-pointer">
              <h3>Flagship School Status</h3>
            </div>

            <div className='flex flex-col items-center gap-5 w-[70%]'>
              <h1 className="text-[2.6rem] md:text-6xl lg:text-7xl font-bold text-center leading-normal lg:leading-22 text-color-light">
                Premier Grammar School, <br /> <span className='text-color-blue'>Lafenwa Abeokuta</span>
              </h1>

              <p className='italic text-sm  text-color-blue'>"Inspiring Excellence Since 1959"</p>
            </div>

            <button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-2 rounded-full font-semibold shadow-lg cursor-pointer">
                <a href="#" className='w-full'>Explore Our Legacy</a>
            </button>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Hero