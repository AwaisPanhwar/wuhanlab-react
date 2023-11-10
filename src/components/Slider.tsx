"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="section-padding">
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div
          className="card"
          variants={{
            offscreen: {
              y: 30,
            },
            onscreen: {
              y: 1,
              transition: {
                duration: 1,
              },
            },
          }}
        >
          <h2 className="mb-[20px] lg:mb-[50px] xl:mb-[30px] 2xl:mb-[100px] font-medium text-[13px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[51px] text-center">
            YOUR FAVORITE BRANDS DELIVERED IN STYLE
          </h2>
        </motion.div>
      </motion.div>

<Marquee pauseOnHover speed={80} loop={0} autoFill={true}>
          <Image className="slider-brand-image"
            src={"/assets/images/1.jpg"}
            alt="Cookies"
            width={283}
            height={130}
          />
        
          <Image className="slider-brand-image"
            src={"/assets/images/2.jpg"}
            alt="Stimzy"
            width={283}
            height={130}
          />
        
          <Image className="slider-brand-image"
            src={"/assets/images/3.jpg"}
            alt="West cost cure"
            width={283}
            height={130}
          />
        
          <Image className="slider-brand-image"
            src={"/assets/images/4.jpg"}
            alt="Floracal"
            width={283}
            height={130}
          />
        
          <Image className="slider-brand-image"
            src={"/assets/images/5.jpg"}
            alt="Jeeter"
            width={283}
            height={130}
          />
        
          <Image className="slider-brand-image"
            src={"/assets/images/6.jpg"}
            alt="Jetty"
            width={283}
            height={130}
          />
        
          <Image className="slider-brand-image"
            src={"/assets/images/7.jpg"}
            alt="Marry Jones"
            width={283}
            height={130}
          />
          <Image className="slider-brand-image"
            src={"/assets/images/8.jpg"}
            alt="Kanha"
            width={283}
            height={130}
          />
      </Marquee>
    </div>
  );
};

export default Slider;
