"use client"
import Image from 'next/image';
import React from 'react'
import { motion } from "framer-motion";

const Map = () => {
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
        <h2 className="mb-[10px]  font-medium text-[13px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[51px] text-center">
        DO YOU WANT TO EXPERIENCE
        </h2>
      </motion.div>
      </motion.div>
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
        <h2 className="mb-[10px]  font-extrabold text-[13px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[51px] text-center">
        WUHAN LAB DELIVERY?
        </h2>
      </motion.div>
      </motion.div>
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
        <h2 className="mb-[10px]  font-medium text-[13px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[51px] text-center">
        HERE IS WHERE WE DELIVER TODAY
        </h2>
      </motion.div>
      </motion.div>
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
      <div className='flex justify-center items-center mx-auto pt-[20px] sm:pt-[20px] md:pt-[20px] lg:pt-[25px] xl:pt-[30px] 2xl:pt-[50px] lg:max-w-[400px] xl:max-w-[500px] '>
      <Image src="/assets/images/map.jpg" alt='Map image' width={1165} height={793} />
      {/* <iframe src="https://www.google.com/maps/d/embed?mid=1lu4OfQmVWYMg_qFp71_Ve74EBpW3zV4&ehbc=2E312F" width="1165" height="600"></iframe> */}
      </div>
      </motion.div>
      </motion.div>
      </div>
  )
}

export default Map