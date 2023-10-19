import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Section1 from "./WhyChooseUsComp/Section1";
import Section2 from "./WhyChooseUsComp/Section2";
import Section3 from "./WhyChooseUsComp/Section3";
const WhyChooseUs = () => {
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
  }, []);

  return (
    <div className="py-20 overflow-hidden why-choose-us">
      <Container>
        <h1
          className="text-[55px] lg:text-[106px] font-semibold tracking-[-2.65px] text-center capitalize mb-[70px]"
          ref={headingRef}>
          Why choose us?
        </h1>
        <Section1 />
        <Section2 />
        <Section3 />
      </Container>
    </div>
  );
};

export default WhyChooseUs;
