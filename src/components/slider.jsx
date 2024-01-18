import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import ButterflyEffect from './effects/butterflyEffect';

import slide_image_1 from '../assets/images/img_1.jpg';
import slide_image_2 from '../assets/images/img_2.jpg';
import slide_image_3 from '../assets/images/img_3.jpg';
import slide_image_4 from '../assets/images/img_4.jpg';
import slide_image_5 from '../assets/images/img_5.jpg';
import slide_image_6 from '../assets/images/img_6.jpg';
import slide_image_7 from '../assets/images/img_7.jpg';

export const Slider = () => {
  const slides = [
    { image: slide_image_1, text: "In the heart of a bustling metropolis, the cityscape hums with energy, a vibrant tapestry woven from the threads of diverse cultures and dynamic aspirations. Skyscrapers pierce the sky, reflecting the sun's warm embrace, while a kaleidoscope of neon signs illuminates the streets below. In this urban symphony, people weave through crowded sidewalks, each with a unique story etched in their expressions. The aroma of street food dances in the air, tantalizing taste buds with promises of culinary adventures. Amidst the urban hustle, hidden pockets of tranquility offer respite, inviting introspection. The city, a living organism, breathes life into dreams, aspirations, and shared moments." },
    { image: slide_image_2, text: 'Text for Slide 2' },
    { image: slide_image_3, text: 'Text for Slide 3' },
    { image: slide_image_4, text: 'Text for Slide 4' },
    { image: slide_image_5, text: 'Text for Slide 5' },
    { image: slide_image_6, text: 'Text for Slide 6' },
    { image: slide_image_7, text: 'Text for Slide 7' },
  ];

  const [clickedIndex, setClickedIndex] = useState(null);

  const handleSlideClick = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };

  return (
    <div className="container">
      <h1 className="heading">Dummy content</h1>
      <ButterflyEffect />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            onClick={() => handleSlideClick(index)}
            className={clickedIndex === index ? 'active-slide' : ''}
          >
            <div className="slide-container">
              <div className="slide-topic">{`Topic ${index + 1}`}</div>
              <img src={slide.image} alt={`slide_image_${index + 1}`} />
              {clickedIndex === index && (
                <div className="slide-overlay">
                  <div className="slide-text">{slide.text}</div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
