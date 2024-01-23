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
    { image: slide_image_1, text: 'Actually naan idha eluthanumm nu nu first ah decide pannita aana ipo innaikku(23-jan ) tha idha inga add panna pora aana romba naalaikku munndaiyee type panni vachitta. Disclaimer uh maximum ellam therinchaathu tha ungallukku apo apo oliruppa idhellam... Actually naan engayoo padichaaaaa you never fall in love with some one at firsh shigt nu athu unmai thaa...  I actually naan ungalla first pakkurapoo enakku different ah feel aachi (unmai) apro fun ahh edhuttu kitta..', topic: '1. The First Sight' },
    { image: slide_image_2, text: 'First uh peasalam nu mudivu pannitaaa naan edhutha modha mudivu insta la id search pannathu.. oru half an hour search panniruppan.. naan message panna neenga madhikavee ila... Avlo than ni vuttuta ... Apro innoru naal mess panna apoo neengaa anna nu sonnega 😂...  Apdiyee ellam avlo tha okey nu nenacha... Apro illa again poi peasunu ellam sonnga aana ennaku semma bayam nerla pesiyum neenga kandukkavee illanaa apdinu... Apvum kooda naan venanu nenacha bayanthu... Aaana ellam enga marichi theriyum ahh neenga en story ku like potta apo(thanks to messi ).. sari peasala nu mudivu panni anniku ofc la peasa vantha hi bye nu sollitu nanee poitaa ... Apro anni ofc townhall meet la kudichitti vanthu peasunaa.... Ana yarachum vera orunthanga unga edathula iruntha avlo tha mudinchiruppa naanu and thanks to you... Avlo matured ahh handle paniga enna.. even naan love sonna apo koodaa neenga enna handle pannathu greatunngaaa..', topic: '2. The Confused Af' },
    { image: slide_image_3, text: "Aaana unga kitta irunthu neraya kathukitta...  Eana naama avlo peasirukkoo intha 6 months (6 months aachi athukkulla).. may bee ellam enakku help pannaga from roshni bala and anu la irunthu keerathana vara help naa say ungala crct pannala solli kodukkala they being supportive alp these days.. athulayum keerthana la vanthu oru naal aval. Ah kan kalangamaa pathupeengala apro ava love pannuranu sonna kalayanm apo avlo prachana vatum enna pannuveenganu la kettuchiii ... But idhukkellam I've something in my mind but idheelamm I can't just decide on my own la... The two are in this who should decide together what would best for themm...", topic: '3. The Courage' },
    // { image: slide_image_4, text: 'Text for Slide 4', topic: '4. Talk ooo Talk' },
    { image: slide_image_5, text: "Ungala pathi last ahh eluthikalam nu irunthaa... Aaana anniku neenga sonnigala you need to know me a lot nu soo I'll keep this writing in my heart and epovachumm kelunga ennan nenaikkura enna pathi nu illa tell you.. kandippa kalaippa aana", topic: '5. Her' },
    { image: slide_image_6, text: 'Naan la just simple.. internet phone laptop iruntha podhumm... Aaana apo apo yosippa  😂 you are really listening to mee aathu annaikku enna pudikkum romba nu sollurapponla i was litterly flying... Avlo tha nanu', topic: '6. Him' },
    // { image: slide_image_7, text: 'Text for Slide 6', topic: '7. Pinky Promises' },
    { image: slide_image_8, text: 'actually naan eludhala idhukku... as you said i need to know you lot and  as you know with my aragora arivu i think it will take time and please bare with me', topic: '8. Understanding' },
    { image: slide_image_9, text: "Unga 20 yrs life la i know less yhe then 5%...  Aaana if you permit enna pass panni vutta I'll be there for till my end... Seriously I'm telling this.... kalaikkura nu nenaikka koodathu... Idheelamm solla over ahh irukku aanatha white nights book kodthuala athula rendu per oru long night la walk povaanga winter season la we'll do that onee day and we'll sit together and talk all the gossip and will play cricket Apro goyyalaa ungala naa oru football fan aah mathalaa....  I know it when we expecting a relationship like forever its not only about happiness Ellamee irukku nd I'll say that I'm ready for that And last ah Europe porooooooomm And avlo thaan happy birthday Dhanusuya (kyoootttuh).. thanks for ennoda ellam polambals ahh uhh kettathukku... Nandrii happy birthday once again bee happy forever", topic: '9. Manifesting' },
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
