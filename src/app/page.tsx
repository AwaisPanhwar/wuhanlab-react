import Header from "@/components/Header";
import Map from "@/components/Map";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <main className="home-page">
      <div className="banner">
        {/* <video
          src="/assets/videos/Home-Banner-video.mp4"
          autoPlay
          loop
          muted
          className="banner-bg-video"
        ></video> */}
        <video autoPlay loop muted playsInline className="video-background ">
            <source src="/assets/videos/Home-Banner-video.mp4" type="video/mp4" />
          </video>
      </div>
      <Slider />
      <Products />
      <Map />
    </main>
    </>
  );
}
