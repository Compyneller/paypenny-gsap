import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo.png";
import gsap from "gsap";
import { Expo } from "gsap";
import { Power3 } from "gsap";
const NavBarComp = () => {
  const navRef = useRef(null);
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

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      className="bg-transparent z-50">
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
