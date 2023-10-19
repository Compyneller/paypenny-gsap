import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/send money/image 819.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import mobile from "../assets/send money/image 862.png";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Benefits2 from "./Benefits2";

gsap.registerPlugin(ScrollTrigger);

const SendMoney = () => {
  const root = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    const h1 = new SplitType(headingRef.current, { types: "chars" });
    const h1Car = h1.chars;
    const p = new SplitType(paraRef.current, { types: "chars" });
    const pCar = p.chars;
    const revealH1 = gsap.fromTo(
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
    const revealP = gsap.fromTo(
      pCar,
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
    const revealImg = gsap.fromTo(
      imgRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        // duration: 2.5,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "bottom bottom",
        },
      }
    );

    return () => {
      revealH1.kill();
      revealP.kill();
      revealImg.kill();
    };
  }, []);

  return (
    <div className="py-20 relative overflow-hidden send-money" ref={root}>
      <Container>
        <div className="flex flex-col gap-[20px] mb-20" id="box1">
          <div className="w-full 2xl:w-[707px] text-center mx-auto ">
            <h1
              className="text-[55px] lg:text-[106px] font-semibold tracking-[-2.65px] cst-heading"
              ref={headingRef}>
              Send Money in 4 easy steps
            </h1>
          </div>
          <div className="w-full 2xl:w-[770px] text-center mx-auto">
            <p className="text-[22px] text-[#010409BF] cst-para" ref={paraRef}>
              Register online, enter your personal details for ID verification.
              Make sure what you enter matches exactly with your.
            </p>
          </div>
        </div>
        <div className="w-full relative rounded-[55px] overflow-hidden h-[880px] p-5 cst-linear-gradient">
          <Benefits2 />
          <img
            src={mobile}
            ref={imgRef}
            className="hidden lg:block absolute w-[605px]  h-[810.5px] right-0 bottom-0"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default SendMoney;
