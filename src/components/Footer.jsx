import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/image 819.png";
import fb from "../assets/facebook.png";
import insta from "../assets/Group (1).png";
import linkedin from "../assets/Group (2).png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="pt-28 pb-20 overflow-hidden my-footer">
      <Container>
        <Row className="g-5">
          <Col xs={12} sm={12} md={6} lg={3}>
            <img src={logo} className="mb-6" alt="" />
            <p className="text-[16px] text-[#808385] mb-[44px]">
              Trackon Canada Private Ltd/as Paypenny
            </p>
            <div className="flex gap-[16px] items-center">
              <a href="" target="_blank">
                <img src={fb} alt="" />
              </a>
              <a href="" target="_blank">
                <img src={insta} alt="" />
              </a>
              <a href="" target="_blank">
                <img src={linkedin} alt="" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={9}>
            <Row className="g-5">
              <Col xs={6} sm={12} md={6} lg={3}>
                <h5 className="mb-[32px] text-[#808385] font-[500] text-[26px]">
                  Legal
                </h5>
                <div className="flex flex-col gap-[24px]">
                  <Link
                    to="/terms-and-conditions"
                    onClick={() => window.scroll(0, 0)}>
                    Terms & Conditions
                  </Link>
                  <Link
                    to="/privacy-policy"
                    onClick={() => window.scroll(0, 0)}>
                    Privacy Policy
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={12} md={6} lg={3}>
                <h5 className="mb-[32px] text-[#808385] font-[500] text-[26px]">
                  Company
                </h5>
                <div className="flex flex-col gap-[24px]">
                  <a href="">About</a>
                  <a href="">Blog</a>
                  <a href="">Career</a>
                  <a href="">How it Works</a>
                  <a href="">Contact Us</a>
                </div>
              </Col>
              <Col xs={6} sm={12} md={6} lg={3}>
                <h5 className="mb-[32px] text-[#808385] font-[500] text-[26px]">
                  Business
                </h5>
                <div className="flex flex-col gap-[24px]">
                  <a href="">How to use</a>
                  <a href="">Rate & Fees</a>
                  <a href="">Quick Chat</a>
                  <a href="">Review</a>
                  <a href="">Refer Friend</a>
                </div>
              </Col>

              <Col xs={6} sm={12} md={6} lg={3}>
                <h5 className="mb-[32px] text-[#808385] font-[500] text-[26px]">
                  Support
                </h5>
                <div className="flex flex-col gap-[24px]">
                  <a href="">Help</a>
                  <a href="">Contact Us</a>
                  <a href="">FAQ</a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="my-[28px] w-full h-[1px] bg-gray-300"></div>
        <p className="text-center text-[14px] text-[#808385]">
          © paypenny all Rights Reserved. The Brand PayPenny belongs to Trackon
          Canada Private Limited registered in Alberta,Canada.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
