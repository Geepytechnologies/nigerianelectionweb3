import React, { useState, useEffect, useRef } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={30}
      centeredSlides={true}
      effect={"fade"}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[EffectFade, Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative h-[400px] md:h-[500px] w-full">
            <motion.img src="/dubai.jpg" alt="" className="h-full w-full" />
            <div className="bg-[rgba(0,0,0,0.6)] absolute top-0 w-full h-full"></div>
            <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
              <motion.div
                animate={isActive ? "show" : "hide"}
                transition={{ duration: 1.2 }}
                variants={{
                  show: { x: 0 },
                  hide: { x: -400 },
                }}
                className="flex w-[60%]"
              >
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.2 }}
                  className="h-[4px] w-[35%]  bg-[#01945a]"
                ></motion.div>
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.2, delay: 0.1 }}
                  className="h-[4px] w-[30%]  bg-white"
                ></motion.div>
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.2, delay: 0.2 }}
                  className="h-[4px] w-[35%] bg-[#01945a]"
                ></motion.div>
              </motion.div>
              <motion.p
                animate={isActive ? "show2" : "hide2"}
                transition={{ duration: 1.2 }}
                variants={{
                  show2: { opacity: 1, y: 0 },
                  hide2: { opacity: 0, y: 20 },
                }}
                className="text-white font-neu text-[40px]"
              >
                <motion.span>The</motion.span>
                <span>
                  {" "}
                  Ni<span className="text-[#01945a]">ger</span>ian
                </span>{" "}
                Dream<span></span>
              </motion.p>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative h-[400px] md:h-[500px] w-full">
            <motion.img src="/army.jpg" alt="" className="h-full w-full" />
            <div className="bg-[rgba(0,0,0,0.6)] absolute top-0 w-full h-full"></div>
            <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
              <motion.div
                animate={isActive ? "show" : "hide"}
                transition={{ duration: 1.2 }}
                variants={{
                  show: { x: 0 },
                  hide: { x: 400 },
                }}
                className="flex w-[60%]"
              >
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.2 }}
                  className="h-[4px] w-[35%]  bg-[#01945a]"
                ></motion.div>
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.2, delay: 0.1 }}
                  className="h-[4px] w-[30%]  bg-white"
                ></motion.div>
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.2, delay: 0.2 }}
                  className="h-[4px] w-[35%] bg-[#01945a]"
                ></motion.div>
              </motion.div>
              <motion.p
                animate={isActive ? "show2" : "hide2"}
                transition={{ duration: 1.2 }}
                variants={{
                  show2: { opacity: 1, y: 0 },
                  hide2: { opacity: 0, y: 20 },
                }}
                className="text-white font-neu text-[40px]"
              >
                <motion.span>A</motion.span>
                <span> New</span>{" "}
                <span className="tracking-[2px]">
                  Ni<span className="text-[#01945a]">ger</span>
                  ia<span></span>
                </span>
              </motion.p>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative h-[400px] md:h-[500px] w-full">
            <motion.img src="/take.jpg" alt="" className="h-full w-full" />
            <div className="bg-[rgba(0,0,0,0.6)] absolute top-0 w-full h-full"></div>
            <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
              <motion.div
                animate={isActive ? "show" : "hide"}
                transition={{ duration: 1.2 }}
                variants={{
                  show: { y: 0 },
                  hide: { y: -400 },
                }}
                className="flex w-[60%]"
              >
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.2 }}
                  className="h-[4px] w-[35%]  bg-[#01945a]"
                ></motion.div>
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.2, delay: 0.1 }}
                  className="h-[4px] w-[30%]  bg-white"
                ></motion.div>
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.2, delay: 0.2 }}
                  className="h-[4px] w-[35%] bg-[#01945a]"
                ></motion.div>
              </motion.div>
              <motion.p
                animate={isActive ? "show2" : "hide2"}
                transition={{ duration: 1.2 }}
                variants={{
                  show2: { opacity: 1, y: 0 },
                  hide2: { opacity: 0, y: 20 },
                }}
                className="text-white font-neu text-center text-[40px]"
              >
                <motion.span>
                  Let&apos;s take our{" "}
                  <span className="text-[#01945a]">Nation </span>back
                </motion.span>
              </motion.p>
            </div>
          </div>
        )}
      </SwiperSlide>
      {/* <SwiperSlide>
        {({ isActive }) => (
          <div className="relative h-[400px] w-full">
            <motion.img
              src="/ballotbox-min.png"
              alt=""
              className="h-full w-full"
            />
            <div className="bg-[rgba(0,0,0,0.6)] absolute top-0 w-full h-full"></div>
            <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
              <motion.div
                animate={isActive ? "show" : "hide"}
                transition={{ duration: 1.2 }}
                variants={{
                  show: { x: 0 },
                  hide: { x: -400 },
                }}
                className="flex w-[60%]"
              >
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.2 }}
                  className="h-[4px] w-[35%]  bg-[#01945a]"
                ></motion.div>
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.2, delay: 0.1 }}
                  className="h-[4px] w-[30%]  bg-white"
                ></motion.div>
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.2, delay: 0.2 }}
                  className="h-[4px] w-[35%] bg-[#01945a]"
                ></motion.div>
              </motion.div>
              <motion.p
                animate={isActive ? "show2" : "hide2"}
                transition={{ duration: 1.2 }}
                variants={{
                  show2: { opacity: 1, y: 0 },
                  hide2: { opacity: 0, y: 20 },
                }}
                className="text-white font-neu text-center text-[40px]"
              >
                <motion.span>With Our Votes</motion.span>
              </motion.p>
            </div>
          </div>
        )}
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Hero;
