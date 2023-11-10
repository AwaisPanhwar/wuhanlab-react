"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import HeaderOmlyfans from "@/components/HeaderOmlyfans";
import Animate from "@/components/Animate";

const OnlyFans = () => {
  const [condition, setCondition] = useState<boolean>(false);
  setTimeout(() => setCondition(true), 2500);
  return (
    <>
    <HeaderOmlyfans />
    <main className="onlyfans-page">
      {condition ? (
        <>
        <div className="banner h-[100vh] lg:hidden xl:hidden 2xl:hidden relative flex items-center justify-center">
            <div className="absolute z-[9] flex flex-col items-center justify-center mb-10">
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
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <h2 className="mb-[10px]  font-extrabold text-white text-[13px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[51px] text-center">
                    LIKE THIS CONTENT?
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
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                </motion.div>
              </motion.div>
              <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px] xl:w-[100px] xl:h-[100px] 2xl:w-[130px] 2xl:h-[130px]">
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
                        y: 50,
                      },
                      onscreen: {
                        y: 1,
                        transition: {
                          duration: 1,
                        },
                      },
                    }}
                  >
                    <Link
                      target="_blank"
                      href={"https://onlyfans.com/u363529139"}
                    >
                      <img className="gif-icon"
                        alt="onlyfans icon"
                        src="/assets/images/onlyfansicon.gif"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
            <video autoPlay loop muted playsInline className="video-background w-full">
            <source src="/assets/videos/Banner-video1.mp4" type="video/mp4" />
          </video>
            <video autoPlay loop muted playsInline className="video-background ">
            <source src="/assets/videos/Banner-video2.mp4" type="video/mp4" />
          </video>
          </div>
          </div>
          <div className="banner sm:hidden md:hidden relative flex items-center justify-center ">
            <div className="absolute z-[9] flex flex-col items-center justify-center">
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
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <h2 className="mb-[10px]  font-extrabold text-white text-[13px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[51px] text-center">
                    LIKE THIS CONTENT?
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
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                </motion.div>
              </motion.div>
              <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px] xl:w-[100px] xl:h-[100px] 2xl:w-[130px] 2xl:h-[130px]">
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
                        y: 50,
                      },
                      onscreen: {
                        y: 1,
                        transition: {
                          duration: 1,
                        },
                      },
                    }}
                  >
                    <Link
                      target="_blank"
                      href={"https://onlyfans.com/u363529139"}
                    >
                      <img className="gif-icon"
                        alt="onlyfans icon"
                        src="/assets/images/onlyfansicon.gif"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            {/* <video
              src="/assets/videos/Banner-video.mp4"
              autoPlay
              loop
              muted
              playsinline
              className="banner-bg-video"
            ></video> */}
            <video autoPlay loop muted playsInline poster="/assets/images/bg-video.jpg" className="video-background">
            <source src="/assets/videos/Banner-video.mp4" type="video/mp4" />
          </video>
          </div>
          <div className="telegram section-padding relative bg-[#3AABE3]">
            <img src="/assets/images/telegramcard.png" alt="telegram card plane" className="absolute right-[8%] w-[90px] md:w-[140px] lg:w-[160px] xl:w-[200px] 2xl:w-[230px]" />
            <div className="w-full flex flex-col items-center justify-center">
            <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px] xl:w-[100px] xl:h-[100px] 2xl:w-[130px] 2xl:h-[130px] mb-4">
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
                        y: 50,
                      },
                      onscreen: {
                        y: 1,
                        transition: {
                          duration: 1,
                        },
                      },
                    }}
                  >
                    <Link
                      target="_blank"
                      href={"https://t.me/WuhanLabExpress"}
                    >
                      <img className="gif-icon"
                        alt="onlyfans icon"
                        src="/assets/images/telegramicon.gif"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
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
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <h2 className="mb-[10px]  font-extrabold text-white text-[13px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[51px] text-center">
                  TELEGRAM CHANNEL
                  </h2>
                </motion.div>
              </motion.div>
            </div>
            <div className="flex sm:flex-wrap md:flex-wrap w-full gap-4 p-4 font-medium lg:items-center xl:items-center 2xl:items-center 2xl:mt-[40px]">
              <div className="img flex items-center justify-center 2xl:justify-end 2xl:mr-4 w-full lg:w-[50%] 2xl:w-[40%]">
              <motion.div
                  className="card-container"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  {/* <motion.div
                    className="card"
                    variants={{
                      offscreen: {
                        y: 50,
                      },
                      onscreen: {
                        y: 1,
                        transition: {
                          duration: 1,
                        },
                      },
                    }}
                  > */}
                  <Animate>
                    <Link
                      target="_blank"
                      href={"https://t.me/WuhanLabExpress"}
                    >
                     <img src="/assets/images/teleimg.png" alt="teleimg" className="xl:w-[80%]" />
                    </Link>
                    </Animate>
                  {/* </motion.div> */}
                </motion.div>
              </div>
              <div className="points w-full font-bold  text-white lg:ml-5 md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[32px] lg:w-[50%] 2xl:w-[60%] xl:ml-7 2xl:ml-10">
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
                        y: 50,
                      },
                      onscreen: {
                        y: 1,
                        transition: {
                          duration: 1,
                        },
                      },
                    }}
                  >
                    <ul className="list-disc ">
                  <li>VIDEO PRODUCT REVIEWS – DETAILS AND COMMENTARY</li>
                  <li>ANNOUNCEMENTS OF PRODUCT DROP DATES</li>
                  <li>EXCLUSIVE BRANDS</li>
                  <li>EXCLUSIVE OFFERS</li>
                  <li>DEALS</li>
                  <li>DIRECT CONTACT WITH US</li>
                  <li>WUHAN LAB BRANDED FUN ITEMS – FREE WITH DELIVERY ORDER</li>
                </ul>
                <ul className="list-disc ml-[4%]">
                  <li>FAUCI BUMPER STICKER</li>
                  <li>PROPERTY OF WUHAN LAB FACE MASK</li>
                  <li>AND MORE</li>
                </ul>
                  </motion.div>
                </motion.div>
                
              </div>
            </div>
          </div>
          <div className="section-padding bg-[url('/assets/images/gradbg.png')] bg-cover" >
          <div className="w-full flex items-center justify-center  2xl:-ml-[10%]">
            <div className="heading  ">
              <div className="h1">
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
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <img src="/assets/images/heading.png" alt="heading" className="w-[80%] xl:w-[60%]" />
                </motion.div>
              </motion.div>
              </div>
            </div>
            <div className="w-[130px] h-[130px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px] xl:w-[100px] xl:h-[100px] 2xl:w-[130px] 2xl:h-[130px] mb-4">
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
                        y: 50,
                      },
                      onscreen: {
                        y: 1,
                        transition: {
                          duration: 1,
                        },
                      },
                    }}
                  >
                    <Link
                      target="_blank"
                      href={"https://www.instagram.com/wuhanlabexpress/"}
                    >
                      <img className="gif-icon"
                        alt="Instagram icon"
                        src="/assets/images/instasubicon.gif"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
              </div>
              <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap mt-4">
                <div className="content lg:w-[50%] xl:w-[50%] 2xl:w-[45%]">
                  <img src="/assets/images/contentimg.png" alt="contentimg" className="xl:w-[80%]" />
                </div>
                <div className="mob  lg:w-[50%] xl:w-[50%] 2xl:w-[55%]">
                  <img src="/assets/images/mob1.png" alt="mob img" className="xl:w-[80%] 2xl:min-w-[120%]" />
                </div>
              </div>
              <div className="max-w-7xl mx-auto flex items-center justify-center xl:justify-start 2xl:justify-start flex-wrap mt-4 gap-4">
                <img src="/assets/images/slide1.png" alt="slide 1" className="max-w-[318px] xl:max-w-[250px]" />
                <img src="/assets/images/slide2.png" alt="slide 2" className="max-w-[318px] xl:max-w-[250px]" />
                <img src="/assets/images/slide3.png" alt="slide 3" className="max-w-[318px] xl:max-w-[250px]" />
              </div>
          </div>
          {/* <div className="social xl:my-[100px] 2xl:my-[150px] relative flex  flex-col-reverse xl:flex-row xl:items-end 2xl:flex-row 2xl:items-end">
            <div className="content pt-[50px]   xl:w-[50%] 2xl:w-[35%]">
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
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <h2 className="ml-4 2xl:ml-[105px] mb-[10px] leading-tight font-extrabold text-black text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] ">
                    Join the Wuhan Lab Community on Telegram
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
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <p className="ml-4 2xl:ml-[105px]  font-medium text-black sm:text-[13px]  text-[16px]">
                    Subscribe to our Telegram channel for real-time updates,
                    exclusive offers, and early glimpses of exciting upcoming
                    items, including Wuhan Lab masks, bumper stickers, and
                    fortune cookies! Stay connected for a world of surprises.
                  </p>
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
                      y: 50,
                    },
                    onscreen: {
                      y: 10,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <div>
                    <video
                      src="/assets/videos/social.mp4"
                      autoPlay
                      loop
                      muted
                      className="banner-bg-video"
                    ></video>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className="img 2xl:w-[65%] flex items-center justify-end">
              <img
                alt="social-bg"
                src="/assets/images/social-bg.png"
                className=""
              />
            </div>
            <Link
              target="_blank"
              href={"https://t.me/WuhanLabExpress"}
              aria-label="Telegram icon"
            >
              <img
                alt="telegram-icxon"
                src="/assets/images/telergramicon.png"
                className="absolute sm:w-[40%] sm:top-[15%] md:w-[40%] md:top-[20%] lg:w-[40%] lg:top-[20%] xl:w-[25%] xl:left-[35%] xl:top-[35%] 2xl:top-[40%] 2xl:left-[40%]"
              />
            </Link>
          </div>
          <div className=" bg-cover p-4 rounded-tr-[100px] rounded-bl-[100px] py-[80px] bg-gradient-to-tr to-[#803DDC] via-[#D6319C] from-[#DE7C30] xl:flex 2xl:flex">
            <div className="content xl:w-[30%] 2xl:w-[20%] xl:my-auto 2xl:my-auto 2xl:ml-auto">
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
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <h2 className=" mb-[10px] leading-tight font-extrabold text-white text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] ">
                    Follow Wuhan Lab on Instagram
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
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <p className="  font-medium text-white sm:text-[13px]  text-[16px] mb-[20px]">
                    Join us on Instagram to get instant updates, exclusive
                    deals, and early peeks at upcoming items like Wuhan Lab
                    masks, bumper stickers, and fortune cookies! Stay tuned for
                    delightful surprises
                  </p>
                </motion.div>
              </motion.div>
              <div className="w-fit">
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
                        y: 50,
                      },
                      onscreen: {
                        y: 1,
                        transition: {
                          duration: 1,
                        },
                      },
                    }}
                  >
                    <Link
                      target="_blank"
                      href={"https://www.instagram.com/wuhanlabexpress"}
                    >
                      <img alt="phone" src="/assets/images/instaicon.png" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="xl:w-[70%] 2xl:w-[70%] my-4 sm:flex sm:flex-col sm:gap-4 sm:items-center sm:justify-center md:flex md:flex-col md:gap-4 md:items-center md:justify-center lg:flex lg:flex-wrap lg:justify-center  lg:gap-4 xl:flex  xl:gap-0 xl:justify-end 2xl:flex  2xl:gap-4 2xl:justify-end">
              <motion.div
                className="card-container flex items-center xl:items-center xl:justify-end"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div
                  className="card  2xl:mt-auto xl:h-full xl:flex xl:items-end xl:justify-end"
                  variants={{
                    offscreen: {
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <img
                    alt="phone"
                    src="/assets/images/weedleft.png"
                    className="xl:w-[50%]   2xl:mt-auto"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="card-container xl:w-fit"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div
                  className="card xl:w-fit"
                  variants={{
                    offscreen: {
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <img
                    alt="phone"
                    src="/assets/images/phone.png"
                    className=""
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div
                  className="card 2xl:mb-auto xl:h-full  xl:flex xl:items-start xl:justify-start"
                  variants={{
                    offscreen: {
                      y: 50,
                    },
                    onscreen: {
                      y: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                >
                  <img
                    alt="phone"
                    src="/assets/images/weedright.png"
                    className="xl:w-[50%]  2xl:mb-auto"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div> */}
        </>
      ) : (
        <div className="w-screen h-screen flex items-center justify-center bg-black">
          <video
            src="/assets/videos/Fireworks.mp4"
            autoPlay
            muted
            className="fireworks-video"
          ></video>
        </div>
      )}
    </main>
    </>
  );
};

export default OnlyFans;
