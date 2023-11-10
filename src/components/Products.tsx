"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Animate from "./Animate";

const Products = () => {
  const [redbox, setRedbox] = useState("/assets/images/p-r-1.png");
  const [yellowbox, setYellowbox] = useState("/assets/images/p-y-1.png");
  const [greenbox, setGreenbox] = useState("/assets/images/p-g-1.png");


  return (
    <div className='products section-padding bg-[url("/assets/images/bg-gradian.jpg")] bg-cover text-center'>
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
          <h2 className="mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[100px] font-extrabold text-white text-[13px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[51px] text-center">
          CHOOSE YOUR BIOHAZARD CONTAINER
        </h2>
        </motion.div>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Animate>
        <div className="product xl:w-[270px]  max-w-[500px] mx-auto">
            <div className="card relative rounded-md min-h-[400px] bg-white bg-opacity-25 p-4 flex flex-col items-center justify-center gap-10">
              <div className="product-image flex items-center justify-center">
                <Image
                  className="hover:scale-125 transition-all  top-0 left-[5%] opacity-100"
                  src={redbox}
                  alt="p-1"
                  width={435}
                  height={396}
                />
              </div>
              <div className="variants flex items-center justify-between gap-4">
                <Image
                  className={`rounded-full bg-white w-[76px] h-[76px] 2xl:w-[96px] 2xl:h-[96px] p-2 cursor-pointer ${
                    redbox === "/assets/images/p-r-1.png" &&
                    "border-[3px] border-red-600"
                  }`}
                  alt="Red variant 1"
                  src={"/assets/images/p-r-1.png"}
                  width={95}
                  height={95}
                  onClick={() => setRedbox("/assets/images/p-r-1.png")}
                />
                <Image
                  className={`rounded-full bg-white  w-[76px] h-[76px] 2xl:w-[96px] 2xl:h-[96px] p-2 cursor-pointer ${
                    redbox === "/assets/images/p-r-2.png" &&
                    "border-[3px] border-red-600"
                  }`}
                  alt="Red variant 2"
                  src={"/assets/images/p-r-2.png"}
                  width={95}
                  height={95}
                  onClick={() => setRedbox("/assets/images/p-r-2.png")}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-4">
              <Link href={"#"} className="w-full flex items-center justify-center">
                <img
                  src="/assets/images/orderred.png"
                  alt="red orderred button"
                  className="h-[70px] md:h-[80px] lg:h-[90px] xl:h-[90px] 2xl:h-[120px]"
                />
              </Link>
            </div>
          </div>
        </Animate>
        <Animate>
        <div className="product xl:w-[270px] max-w-[500px] mx-auto">
            <div className="card relative rounded-md min-h-[400px] bg-white bg-opacity-25 p-4 flex flex-col items-center justify-center gap-10">
              <div className="product-image flex items-center justify-center">
                <Image
                  className="hover:scale-125 transition-all  top-0 left-[5%] opacity-100"
                  src={yellowbox}
                  alt="p-1"
                  width={435}
                  height={396}
                />
              </div>
              <div className="variants flex items-center justify-between gap-4">
                <Image
                  className={`rounded-full bg-white w-[76px] h-[76px] 2xl:w-[96px] 2xl:h-[96px] p-2 cursor-pointer ${
                    yellowbox === "/assets/images/p-y-1.png" &&
                    "border-[3px] border-red-600"
                  }`}
                  alt="Red variant 1"
                  src={"/assets/images/p-y-1.png"}
                  width={95}
                  height={95}
                  onClick={() => setYellowbox("/assets/images/p-y-1.png")}
                />
                <Image
                  className={`rounded-full bg-white w-[76px] h-[76px] 2xl:w-[96px] 2xl:h-[96px] p-2 cursor-pointer ${
                    yellowbox === "/assets/images/p-y-2.png" &&
                    "border-[3px] border-red-600"
                  }`}
                  alt="Red variant 2"
                  src={"/assets/images/p-y-2.png"}
                  width={95}
                  height={95}
                  onClick={() => setYellowbox("/assets/images/p-y-2.png")}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-4">
              <Link href={"#"} className="flex items-center justify-center">
                <img
                  src="/assets/images/orderredyellow.png"
                  alt="yellow orderred button"
                  className="h-[70px] md:h-[80px] lg:h-[90px] xl:h-[90px] 2xl:h-[120px]"
                />
              </Link>
            </div>
          </div>
        </Animate>
        <Animate>
        <div className="product xl:w-[270px] max-w-[500px] mx-auto">
            <div className="card relative rounded-md min-h-[400px] bg-white bg-opacity-25 p-4 flex flex-col items-center justify-center gap-10">
              <div className="product-image flex items-center justify-center">
                <Image
                  className="hover:scale-125 transition-all  top-0 left-[5%] opacity-100"
                  src={greenbox}
                  alt="p-1"
                  width={435}
                  height={396}
                />
              </div>
              <div className="variants flex items-center justify-between gap-4">
                <Image
                  className={`rounded-full bg-white w-[76px] h-[76px] 2xl:w-[96px] 2xl:h-[96px] p-2 cursor-pointer ${
                    greenbox === "/assets/images/p-g-1.png" &&
                    "border-[3px] border-red-600"
                  }`}
                  alt="Red variant 1"
                  src={"/assets/images/p-g-1.png"}
                  width={95}
                  height={95}
                  onClick={() => setGreenbox("/assets/images/p-g-1.png")}
                />
                <Image
                  className={`rounded-full bg-white w-[76px] h-[76px] 2xl:w-[96px] 2xl:h-[96px] p-2 cursor-pointer ${
                    greenbox === "/assets/images/p-g-2.png" &&
                    "border-[3px] border-red-600"
                  }`}
                  alt="Red variant 2"
                  src={"/assets/images/p-g-2.png"}
                  width={95}
                  height={95}
                  onClick={() => setGreenbox("/assets/images/p-g-2.png")}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-4">
              <Link href={"#"} className="flex items-center justify-center">
                <img
                  src="/assets/images/orderredgreen.png"
                  alt="green orderred button"
                  className="h-[70px] md:h-[80px] lg:h-[90px] xl:h-[90px] 2xl:h-[120px]"
                />
              </Link>
            </div>
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default Products;
