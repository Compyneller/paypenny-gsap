import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import bg from "../../assets/BG.png";
import AccordionComp from "./AccordionComp";
import { FaqData } from "./FaqData";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
const FAQ = () => {
  return (
    <div className="relative z-0 w-full rounded-b-[50px] bg-[#0054FF] pt-32 pb-20 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <img
        src={bg}
        className="absolute top-0 left-0 right-0 bottom-0 w-full min-h-[1227px] z-[-1]"
        alt=""
      />
      <Container>
        <Row className="g-4">
          <Col xs={12} sm={12} md={5} lg={5}>
            <div className="w-full  rounded-[20px] p-5 faq-bg text-white">
              <p className="text-[40px] font-semibold  mb-3">
                24x7 Customer Care Support
              </p>
              <p className="text-[16px] text-[#FFFFFFB2] mb-5">
                We’re happy to answer any questions you may have. Get in touch
                with our Customer Care representative.
              </p>
              <p className="text-lg mb-4 font-semibold flex items-center gap-2">
                <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center">
                  <FiPhoneCall size={20} color="#0054FF" />
                </div>{" "}
                Call : +1(416)323–3112
              </p>
              <p className="text-lg mb-4 font-semibold flex items-center gap-2">
                <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center">
                  <HiOutlineMail size={20} color="#0054FF" />
                </div>{" "}
                Email : <a href="mailto:help@paypenny.org">help@paypenny.org</a>
              </p>
              <p className="text-lg flex mb-4 items-center gap-2">
                <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center">
                  <BsWhatsapp size={20} color="#0054FF" />
                </div>{" "}
                WhatsApp :{" "}
                <img
                  src="https://img.icons8.com/?size=512&id=15512&format=png"
                  className="h-[30px]"
                  alt=""
                />{" "}
                +1(825)733–0200
              </p>

              <p className="text-lg flex items-center gap-2">
                <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center">
                  <BsWhatsapp size={20} color="#0054FF" />
                </div>{" "}
                WhatsApp :{" "}
                <img
                  src="https://img.icons8.com/?size=512&id=21742&format=png"
                  className="h-[30px]"
                  alt=""
                />{" "}
                +1(825)733–0200
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="p-5 rounded-[20px] bg-white text-black">
              <p className="font-bold text-[40px] mb-5">
                Frequently Asked Questions
              </p>
              <Row className="g-3">
                {FaqData.map((items, index) => {
                  return (
                    <Col xs={12} sm={12} md={12} lg={12} key={items.id}>
                      <AccordionComp
                        heading={items.ques}
                        text={items.ans}
                        index={index}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
