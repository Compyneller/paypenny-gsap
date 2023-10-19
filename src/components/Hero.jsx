import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import bg from "../assets/BG.png";
import iphone from "../assets/iPhone 14 Pro Mockup.png";
import qr from "../assets/Group.png";
import qr2 from "../assets/WhatsApp Image 2023-10-09 at 16.23 (1).png";
import DownlodNow from "./DownlodNow";
import gsap from "gsap";
const Hero = () => {
  const root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // all your animations go in here...
      gsap.from(["#hero-heading", "#hero-subHeading"], {
        y: 200,
        duration: 2.5,
        stagger: 0.03,
        ease: "power3.out",
      });
      gsap.from("#iphone", {
        scale: 0,
        duration: 2.5,
        ease: "power3.out",
      });
    }, root); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full min-h-[1227px] relative rounded-b-[50px] flex items-center justify-center z-0 overflow-hidden text-white hero"
      ref={root}>
      <img
        src={bg}
        className="absolute top-0 left-0 right-0 bottom-0 w-full min-h-[1227px] z-[-1]"
        alt=""
      />
      <img
        src={iphone}
        className="hidden lg:block absolute right-0 bottom-0 h-[900px]"
        id="iphone"
        alt=""
      />
      <Container className="min-h-[1227px] py-20 flex flex-col justify-between">
        <div>
          <div className="w-fit overflow-hidden">
            <h1
              className="text-[55px] lg:text-[124px] mt-[50px] font-semibold"
              id="hero-heading">
              One App, Million users,
            </h1>
          </div>
          <div className="w-fit overflow-hidden">
            <h1
              className="text-[70px] lg:text-[124px] font-semibold"
              id="hero-heading">
              Billion Transfers
            </h1>
          </div>
          <div className="w-fit overflow-hidden">
            <h5 className="text-3xl text-[#FFFFFFD9]" id="hero-subHeading">
              Send money to India, fee-free transfer.
            </h5>
          </div>
          <DownlodNow root={root} />
        </div>
        <div className="w-[168.879px] h-[168.879px] z-0 flex items-center justify-center relative">
          <img
            src={qr}
            className="hero-cst-rotate absolute z-[-1] left-0 right-0 bottom-0 top-0 w-[168.879px] h-[168.879px]"
            alt=""
          />
          <img src={qr2} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
