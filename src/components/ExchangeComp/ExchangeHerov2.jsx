import React from "react";
import { Container } from "react-bootstrap";
import ExchangeCalc from "./ExchangeCalc";
import bg from "../../assets/BG.png";

const ExchangeHerov2 = () => {
  return (
    <div className="w-full pt-32 mb-[172px] pb-20 rounded-b-[50px] min-h-screen flex items-center relative bg-[#0054FF] overflow-hidden z-0">
      <img
        src={bg}
        className="absolute top-0 left-0 right-0 bottom-0 w-full min-h-[1227px] z-[-1]"
        alt=""
      />
      <Container className="text-white">
        <h1 className="text-center text-[44px] md:text-[88px] font-bold mb-4">
          MAKE YOUR MONEY MOVE, FAST
        </h1>
        <p className="text-center text-2xl mb-5">
          Send to India, fast. Free from hidden fees and exchange rate markups
        </p>
        <ExchangeCalc />
      </Container>
    </div>
  );
};

export default ExchangeHerov2;
