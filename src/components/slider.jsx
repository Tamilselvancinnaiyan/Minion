import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import ButterflyEffect from './effects/butterflyEffect';

import slide_image_1 from '../assets/images/theFirstsight.jpeg';
import slide_image_2 from '../assets/images/confused af.jpeg';
import slide_image_3 from '../assets/images/TheCourage.jpeg';
import slide_image_4 from '../assets/images/talkotalk.jpeg';
import slide_image_5 from '../assets/images/her.jpeg';
import slide_image_6 from '../assets/images/him.jpeg';
import slide_image_7 from '../assets/images/pinkey_promises.jpeg';
import slide_image_8 from '../assets/images/understanding.jpeg';
import slide_image_9 from '../assets/images/mainfesting.jpeg';

export const Slider = () => {
  const slides = [
    { image: slide_image_1, text: "Text for Slide 1", topic: '1. The First Sight' },
    { image: slide_image_2, text: 'Text for Slide 2', topic: '2. The Confused Af' },
    { image: slide_image_3, text: 'Text for Slide 3', topic: '3. The Courage' },
    { image: slide_image_4, text: 'Text for Slide 4', topic: '4. Talk ooo Talk' },
    { image: slide_image_5, text: 'Text for Slide 5', topic: '5. Her' },
    { image: slide_image_6, text: 'Text for Slide 6', topic: '6. Him' },
    { image: slide_image_7, text: 'Text for Slide 6', topic: '7. Pinky Promises' },
    { image: slide_image_8, text: 'Text for Slide 7', topic: '8. Understanding' },
    { image: slide_image_9, text: 'Text for Slide 8', topic: '9. Manifesting' },
  ];
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleSlideClick = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };

  return (
    <div className="container">
      <h1 className="heading">Kutty Story</h1>
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
            style={{
              filter: clickedIndex !== null && clickedIndex !== index ? 'grayscale(100%)' : '',
            }}
          >
            <div className="slide-container">
              <div className="slide-image-wrapper">
                <img src={slide.image} alt={`slide_image_${index + 1}`} />
                {clickedIndex === index && (
                  <div className="slide-overlay">
                    <div className="slide-text">{slide.text}</div>
                  </div>
                )}
              </div>
              <div className="slide-topic">{slide.topic}</div>
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
