import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import DownlodNow from "./DownlodNow";
import iphone from "../assets/iPhone 14 Pro Mockup.png";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const AppSloutley = () => {
  const headingRef = useRef(null);
  const imgRef = useRef(null);
  const paraRef = useRef(null);
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
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 50%",
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
    <div className="w-full relative z-0 min-h-[884px] rounded-[60px] bg-[#010409] flex items-center overflow-hidden">
      <Container className="flex flex-col justify-center text-white">
        <div>
          <h1
            className="text-[55px] lg:text-[106px] font-semibold mb-3 w-full 2xl:w-[644px]"
            ref={headingRef}>
            App-solutely Effortless
          </h1>
          <p className="text-[30px] font-[500]" ref={paraRef}>
            Send money to India, fee-free transfer.
          </p>
        </div>
        <DownlodNow />
      </Container>
      <img
        src={iphone}
        ref={imgRef}
        className="hidden lg:block absolute right-0 bottom-0 w-[696px] h-[757px]"
        alt=""
      />
    </div>
  );
};

export default AppSloutley;
