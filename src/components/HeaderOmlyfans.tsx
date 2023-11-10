"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const HeaderOmlyfans = () => {
  const router = usePathname();
  const [menu, setMenu] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const [navColor, setNavColor] = useState<boolean>(false);
  const changeNavColor = () => {
    if (window.scrollY >= 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <>
    <header className="text-white sm:bg-black md:bg-black lg:bg-black xl:fixed 2xl:fixed z-10 w-full">
      <div
        className={`w-full h-[80px] xl:h-[120px] 2xl:h-[150px] flex items-center justify-between  xl:menu-bg-xl 2xl:menu-bg-2xl ${
          navColor ? "bg-black" : "backdrop-blur-[7px] bg-black bg-opacity-50"
        }`}
      >
        <div className="logo w-[20%] h-full  p-1">
          <Link
            href={"/"}
            className="h-full w-full flex items-center justify-center"
          >
            <img
              alt="Wuhan Lab"
              src={"/assets/images/logo.png"}
              className="w-[90%] md:w-[70%] lg:w-[100px] xl:w-[50%] 2xl:w-[50%]"
            />
          </Link>
        </div>
        <div className="w-[80%] h-full flex items-center justify-between px-[10%] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] tracking-[1px] xl:tracking-[5px] 2xl:tracking-[5px]">
          <div></div>
          <div className="h-full sm:hidden md:hidden lg:hidden  xl:h-[95%] 2xl:h-[95%] flex xl:flex-col 2xl:flex-col items-center">
            <Link
              href={"#"}
              className="flex flex-col items-center justify-center"
            >
              <img
                alt="Order-barcode"
                src={"/assets/images/Order-barcode.png"}
                className="hidden xl:block 2xl:block xl:w-[50%] 2xl:w-[75%]"
              />
            </Link>
            <p className="text-center font-bold">ORDER</p>
          </div>
          <div className="h-full sm:hidden md:hidden lg:hidden  xl:h-[95%] 2xl:h-[95%] flex xl:flex-col 2xl:flex-col items-center  " onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
            <Link
              href={"/onlyfans"}
              className="flex flex-col items-center justify-center"
            >
              <img
                alt="onlyfans-barcode"
                src={"/assets/images/onlyfans-barcode.png"}
                className="hidden xl:block 2xl:block xl:w-[50%] 2xl:w-[75%]"
              />
            <p className={`text-center font-bold ${router == "/onlyfans" ? "text-red-600" : ""}`}>ONLYFANS</p>
            </Link>
          </div>
          <div className="h-full xl:hidden 2xl:hidden flex xl:flex-col 2xl:flex-col items-center" onClick={()=>setMenu(true)}>
            <p className="text-center font-bold">MENU</p>
          </div>
        </div>
      </div>
    </header>
    <div className={`mobilemenu  xl:hidden 2xl:hidden fixed z-50 w-screen h-screen top-0 bg-black ${menu ? "block translate-y-0  duration-500" : "-translate-y-[120vh] duration-500"}`}>
      <div className="flex items-center justify-between p-4">
      <div className="logo w-[20%]  p-1">
          <Link
            href={"/"}
            className="w-full flex items-center justify-center"
          >
            <img
              alt="Wuhan Lab"
              src={"/assets/images/logo.png"}
              className="w-[90%] md:w-[70%] lg:w-[100px] xl:w-[50%] 2xl:w-[50%]"
            />
          </Link>
        </div>
        
      <div className="flex w-full items-center justify-end text-white pr-4" onClick={()=>setMenu(false)}>
      
        Close
      </div>
      </div>
      
              <div className="h-full w-full relative flex flex-col items-center justify-center gap-4">
              <div className=" flex flex-col  items-center justify-center">
            <Link
              href={"#"}
              className="flex flex-col items-center justify-center"
            >
              <img
                alt="Order-barcode"
                src={"/assets/images/Order-barcode.png"}
                className="w-[80%]"
              />
            </Link>
            <p className="text-center font-bold text-white text-[21px]">ORDER</p>
          </div>
          <div className=" flex flex-col  items-center justify-center" onClick={()=>setMenu(false)}>
            <Link
              href={"/onlyfans"}
              className="flex flex-col items-center justify-center"
            >
              <img
                alt="onlyfans-barcode"
                src={"/assets/images/onlyfans-barcode.png"}
                className="w-[80%]"
              />
            <p className={`text-center font-bold text-white text-[21px] `}>ONLYFANS</p>
            </Link>
          </div>
              </div>
            </div>
    </>
  );
};

export default HeaderOmlyfans;
