import React, { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    heading:
      "  “It’s great to work with Alphamark. I would recommend the studio to any young business that is shaping its online and print presence.“",
    name: " James Anderson",
    position: "Co-Founder",
  },
  {
    heading:
      "  “It’s great to work with Alphamark. I would recommend the studio to any young business that is shaping its online and print presence.“",
    name: " James Anderson",
    position: "Co-Founder",
  },
  {
    heading:
      "  “It’s great to work with Alphamark. I would recommend the studio to any young business that is shaping its online and print presence.“",
    name: " James Anderson",
    position: "Co-Founder",
  },
  {
    heading:
      "  “It’s great to work with Alphamark. I would recommend the studio to any young business that is shaping its online and print presence.“",
    name: " James Anderson",
    position: "Co-Founder",
  },
  {
    heading:
      "  “It’s great to work with Alphamark. I would recommend the studio to any young business that is shaping its online and print presence.“",
    name: " James Anderson",
    position: "Co-Founder",
  },
  {
    heading:
      "  “It’s great to work with Alphamark. I would recommend the studio to any young business that is shaping its online and print presence.“",
    name: " James Anderson",
    position: "Co-Founder",
  },
  {
    heading:
      "  “It’s great to work with Alphamark. I would recommend the studio to any young business that is shaping its online and print presence.“",
    name: " James Anderson",
    position: "Co-Founder",
  },
];
const ClientSwiper = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  useEffect(() => {
    const h1 = new SplitType(headingRef.current, { types: "chars" });
    const h1Car = h1.chars;
    const p = new SplitType(paraRef.current, { types: "chars" });
    const pCar = p.chars;
    gsap.fromTo(
      h1Car,
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        scrollTrigger: {
          trigger: h1Car,
          start: "top bottom",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      [pCar],

      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        stagger: 0.01,
        duration: 1,
        scrollTrigger: {
          trigger: pCar,
          start: "bottom bottom",
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
      id="client-box">
      {data.map((items, index) => (
        <SwiperSlide key={index} className="mb-24">
          <div className="w-full text-center text-white">
            <h5 className="text-[30px] font-[500] mb-[36px]" ref={headingRef}>
              {items.heading}
            </h5>
            <p className="text-[18px] font-semibold" ref={paraRef}>
              {items.name}
            </p>
            <p className="text-[16px] text-[#FFFFFFBF]" ref={paraRef}>
              {items.position}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientSwiper;
