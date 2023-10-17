import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/effect-fade";
import elipse from "../assets/send money/Ellipse 1338.png";
import { Mousewheel, Autoplay, EffectFade } from "swiper/modules";
import { Col, Row } from "react-bootstrap";

const data = [
  {
    heading: "Create your account",
    text: " Register online, enter your personal details for ID verification. Make sure what you enter matches exactly with your identification documents.",
  },
  {
    heading: "Choose method",
    text: "We’ll show you the exchange rate and you select the Method to add the Money to your wallet to add the Money to your wallet.    ",
  },
  {
    heading: "3. Input receiver details    ",
    text: "Tell us the details of the person receiving the Money. Tell us the details of the person receiving the Money.Tell us the details of the person    ",
  },
  {
    heading: "4. Confirm and send    ",
    text: " Verify and cross check everything is correct and send your Money. That’s it. We’ll take care of the rest and tell you when Money is transferred.    ",
  },
];
const Benefits2 = () => {
  return (
    <div className="h-full overflow-hidden relative w-full lg:w-1/2">
      <Swiper
        direction="vertical"
        slidesPerView={2.5}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Mousewheel, Autoplay]}
        effect="fade">
        {data.map((items, index) => (
          <SwiperSlide>
            <div
              className={`mx-auto h-full bg-white flex flex-col justify-center rounded-[30px] px-4`}
              style={{
                width: `calc(100% - ${index * 5}%)`,
              }}>
              {" "}
              <div className="relative  w-[62px] h-[62px] flex items-center justify-center z-0 mb-[28px]">
                <img
                  src={elipse}
                  className="absolute w-[62px] h-[62px] z-[-1]"
                  alt=""
                />
                <h3 className="text-[20px] font-semibold text-[#0054FF] m-auto">
                  0{index + 1}
                </h3>
              </div>
              <h5 className="mb-[12px] text-[28px] font-semibold ">
                {items.heading}
              </h5>
              <p className="text-gray-400 text-[14px]">{items.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Benefits2;
