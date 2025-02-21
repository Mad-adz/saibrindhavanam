// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  heroSliderImg1,
  heroSliderImg2,
  heroSliderImg3,
  heroSliderImg4,
  heroSliderImg5,
} from "../assets/images";

const HeroSlider = () => {

  const heroSlideImgs = [
    { id: 1, imgSrc: heroSliderImg1 },
    { id: 2, imgSrc: heroSliderImg2 },
    { id: 3, imgSrc: heroSliderImg3 },
    { id: 4, imgSrc: heroSliderImg4 },
    { id: 5, imgSrc: heroSliderImg5 },
  ];
  return (
    <section className="h-full relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {heroSlideImgs.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            <img
              src={slide.imgSrc}
              alt=""
              className="block w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
