import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Refer = () => {
  const headingRef = useRef(null);
  const card = useRef(null);
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
    const revealCard = gsap.fromTo(
      card.current,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 2,
        duration: 1,
        scrollTrigger: {
          trigger: card.current,
          start: "top bottom",
        },
      }
    );

    return () => {
      revealCard.kill();
      revealH1.kill();
    };
  }, []);
  return (
    <div className="py-32 bg-[#F4F6F5] overflow-hidden">
      <Container>
        <h1
          className="text-[55px] lg:text-[106px] font-semibold text-black text-center mb-[70px]"
          ref={headingRef}>
          <span className="text-[#0054FF]">Refer</span> a Friend, Enjoy
        </h1>
        <Row className="g-5" ref={card}>
          <Col xs={12} sm={12} md={6} lg={4}>
            <div className="w-full flex flex-col bg-white rounded-[24px] py-[40px] px-[30px] justify-center gap-[16px]">
              <h5 className="text-[28px] font-semibold text-black ">
                Share Your Referral Link
              </h5>
              <p className="text-[#010409BF]">
                Share your referral links with your friends and family members.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <div className="w-full flex flex-col bg-white rounded-[24px] py-[40px] px-[30px] justify-center gap-[16px]">
              <h5 className="text-[28px] font-semibold text-black ">
                Earn $10 now!
              </h5>
              <p className="text-[#010409BF]">
                Get $10 When a Friend Joins and Makes Their First Transaction
                Using Your Referral Link!
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <div className="w-full flex flex-col bg-white rounded-[24px] py-[40px] px-[30px] justify-center gap-[16px]">
              <h5 className="text-[28px] font-semibold text-black ">
                Spread happiness
              </h5>
              <p className="text-[#010409BF]">
                Get $10 When a Friend Joins and Makes Their First Transaction
                Using Your Referral Link!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Refer;
