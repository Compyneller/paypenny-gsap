import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo.png";
import gsap from "gsap";
import { Power3 } from "gsap";
const NavBarComp = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {},
    });
    tl.fromTo(
      ".nav-text",
      {
        y: 100,
      },
      {
        y: 0,
        duration: 1.5,
        ease: Power3.out,
      }
    );
    gsap.fromTo(
      ".nav-logo",
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        duration: 2.5,
        ease: Power3.out,
        opacity: 1,
      }
    );
  }, []);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      className={`w-full ${
        scrollPosition > 80 ? "bg-[#010409]" : "bg-transparent"
      }`}
      // style={{
      //   background: `${
      //     scrollPosition > 80 ? "bg-[#0054FF]" : "bg-transparent"
      //   }`,
      //   transition: "250ms easeIn",
      // }}>
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="nav-logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-[56px]">
            <Nav.Link
              className=" h-fit  relative overflow-hidden text-white"
              href="#home">
              <p className="text-[26px] nav-text">Home</p>
            </Nav.Link>
            <Nav.Link
              className=" h-fit overflow-hidden text-white"
              href="#link">
              <p className="text-[26px] nav-text">Exchange</p>
            </Nav.Link>
            <Nav.Link
              className=" h-fit overflow-hidden text-white"
              href="#link">
              <p className="text-[26px] nav-text">FAQ</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComp;
