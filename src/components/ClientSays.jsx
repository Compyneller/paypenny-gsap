import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import ClientSwiper from "./ClientSwiper";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ClientSays = () => {
  const circle = useRef(null);
  useEffect(() => {
    const box = document.querySelector("#client-box");
    box.addEventListener("mouseenter", function () {
      gsap.fromTo(
        circle.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
        }
      );
    });
    box.addEventListener("mouseleave", function () {
      gsap.fromTo(
        circle.current,
        {
          scale: 1,
          opacity: 1,
        },
        {
          scale: 0,
          opacity: 0,
          duration: 1,
        }
      );
    });
    box.addEventListener("mousemove", function (dets) {
      gsap.to(circle.current, {
        x: dets.clientX,
        y: dets.clientY - 150,
      });
    });
  }, []);

  const headingRef = useRef(null);

  useEffect(() => {
    const h1 = new SplitType(headingRef.current, { types: "chars" });
    const h1Car = h1.chars;

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
    return () => {
      revealH1.kill();
    };
  }, []);

  return (
    <div className="w-full relative z-0 overflow-hidden flex flex-col justify-center cst-linear-gradient min-h-[798px] rounded-[60px] py-10 ">
      <div
        className="hidden w-[136px]   h-[136px] z-10 rounded-full bg-[#2890ff] lg:flex items-center justify-center  absolute left-0 top-0 "
        ref={circle}
        style={{ opacity: 0 }}>
        <p className="text-[30px] font-[500] text-white">Drag</p>
      </div>
      <div className="my-auto">
        <h1
          className="text-[55px] lg:text-[106px] font-semibold text-center capitalize text-white mb-[70px]"
          ref={headingRef}>
          What our <span className="text-[#010409]">clients</span> says
        </h1>{" "}
        <ClientSwiper />
      </div>
    </div>
  );
};

export default ClientSays;
