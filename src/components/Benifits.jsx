import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/benefits/Group 1000003494.png";
import img2 from "../assets/benefits/Group 1000003494 (1).png";
import img3 from "../assets/benefits/Group 1000003494 (2).png";
import img4 from "../assets/benefits/Group 1000003494 (3).png";
import img5 from "../assets/benefits/Group 1000003494 (4).png";
import img6 from "../assets/benefits/Group 1000003494 (5).png";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const data = [
  {
    icon: img1,
    heading: "Govt Reg Regulated",
    text: "Our company is offcially registered with FINTRAC, highlighting the robustness of our PayPenny ecosystem.",
  },
  {
    icon: img2,
    heading: "Anytime Anywhere",
    text: "Our system's robustness ensures it's accessible anytime and anywhere, reflecting our commitment to being available for you at all times.",
  },
  {
    icon: img3,
    heading: "Better Rates",
    text: "Our system's robustness ensures it's accessible anytime and anywhere, reflecting our commitment to being available for you at all times.",
  },
  {
    icon: img4,
    heading: "Track your transfer online",
    text: "Our amazing customer support team are on standby to help you when need them. Get an answer to your question, fast.",
  },
  {
    icon: img5,
    heading: "Round The Clock Support",
    text: "Our amazing customer support team are on standby to help you when need them. Get an answer to your question, fast.",
  },
  {
    icon: img6,
    heading: "Easy Convenient",
    text: "Get started in minutes with our simple signup process. Send Money on the go with our mobile app available on android and IOS.",
  },
];

const Benifits = () => {
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
    const revealCard = gsap.fromTo(
      ".cst-card",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".cst-card",
          start: "top 70%",
        },
      }
    );
    return () => {
      revealH1.kill();
      revealP.kill();
      revealImg.kill();
      revealCard.kill();
    };
  }, []);

  return (
    <div className="w-full py-20 rounded-[60px] flex items-center justify-center overflow-hidden bg-[#010409]">
      <Container>
        <div className="w-full 2xl:w-[1240px] text-center mx-auto mb-[70px]">
          <h1
            className="text-[55px] lg:text-[106px] font-semibold text-white tracking-[-2.65px] capitalize"
            ref={headingRef}>
            Benefits of Sending Money with Paypenny
          </h1>
        </div>
        <Row className="g-5">
          {data.map((items, index) => (
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={4}
              className="cursor-pointer cst-card"
              key={index}>
              <div className="w-full hover:bg-[#222222] rounded-[30px] p-3 transition-all">
                <img src={items.icon} className="mb-[36px]" alt="" />
                <h5 className="text-[28px] font-[500] mb-3 text-white">
                  {items.heading}
                </h5>
                <p className="text-[#FFFFFFBF] text-[16px]">{items.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Benifits;
