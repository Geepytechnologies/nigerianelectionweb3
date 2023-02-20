import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      effect={"fade"}
      //   autoplay={{
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   }}
      //   pagination={{
      //     clickable: true,
      //   }}
      navigation={false}
      modules={[EffectFade, Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative h-[400px] w-full">
          <motion.img src="/landscape.jpg" alt="" className="h-full w-full" />
          <div className="bg-[rgba(0,0,0,0.6)] absolute top-0 w-full h-full"></div>
          <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
            <div className="flex w-[60%]">
              <div className="h-[4px] w-[35%]  bg-[#01945a]"></div>
              <div className="h-[4px] w-[30%]  bg-white"></div>
              <div className="h-[4px] w-[35%] bg-[#01945a]"></div>
            </div>
            <p className="text-white text-[40px]">The Nigerian Dream</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[400px] w-full">
          <motion.img src="/balloons.jpg" alt="" className="h-full w-full" />
          <div className="bg-[rgba(0,0,0,0.6)] absolute top-0 w-full h-full"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[400px] w-full">
          <motion.img src="/ballotbox.jpg" alt="" className="h-full w-full" />
          <div className="bg-[rgba(0,0,0,0.6)] absolute top-0 w-full h-full"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[400px] w-full">
          <motion.img src="/flag.jpg" alt="" className="h-full w-full" />
          <div className="bg-[rgba(0,0,0,0.6)] absolute top-0 w-full h-full"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
