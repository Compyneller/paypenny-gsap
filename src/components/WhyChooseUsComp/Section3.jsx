import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import img3 from "../../assets/why-choose-us/image 864.png";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Section3 = () => {
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
        scale: 1.5,
      },
      {
        scale: 1,
        stagger: 0.01,
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
    <Row className="g-5">
      <Col
        xs={12}
        sm={12}
        md={6}
        lg={6}
        className="flex flex-col justify-center">
        <h2
          className="text-[35px] lg:text-[68px] font-semibold mb-5"
          ref={headingRef}>
          Over $100+ Million last year
        </h2>
        <p className="text-[22px] text-[#010409BF]" ref={paraRef}>
          Sending Money to your home is comparatively lower than the banks, get
          the best rates at ease!
        </p>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
        <div className="w-[550px] h-[550px] overflow-hidden  rounded-[30px]">
          <img src={img3} ref={imgRef} alt="" />
        </div>
      </Col>
    </Row>
  );
};

export default Section3;
