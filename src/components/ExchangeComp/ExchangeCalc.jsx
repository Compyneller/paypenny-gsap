import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import GBP from "../../assets/flag/icons8-great-britain-48.png";
import EURO from "../../assets/flag/icons8-europe-48.png";
import CAN from "../../assets/flag/icons8-canada-48.png";
import india from "../../assets/flag/image 827.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const data = [
  {
    icon: GBP,
    name: "GBP",
    rate: "107.3",
  },
  {
    icon: EURO,
    name: "EUR",
    rate: "90.98",
  },
  {
    icon: CAN,
    name: "CAD",
    rate: "61.98",
  },
];
const ExchangeCalc = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [rates, setRates] = useState("107.3");
  const [selectedCon, setSelectedCon] = useState({
    icon: GBP,
    name: "GBP",
    rate: "107.3",
  });
  return (
    <div className="w-full  md:max-w-[1240px] rounded-[20px]">
      <div className="w-full  h-[86px] rounded-t-[20px] border-b border-[#E2E8F0] ps-[80px] flex items-center  bg-[#F6F7F6]">
        <div className="h-[86px] w-[182px]  relative before:absolute before:bottom-0 before:h-[4px] before:bg-black before:w-[182px] flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <path
              d="M19.074 9.86166C18.1983 8.98598 17.09 8.37948 15.8803 8.11394C15.627 6.97241 15.0717 5.9199 14.2723 5.0665C13.473 4.2131 12.459 3.59017 11.3365 3.26284C10.2139 2.93552 9.02407 2.91584 7.89131 3.20585C6.75856 3.49587 5.72454 4.08493 4.89741 4.91143C4.07027 5.73792 3.48042 6.77149 3.18953 7.90402C2.89864 9.03655 2.9174 10.2264 3.24386 11.3492C3.57032 12.472 4.19247 13.4865 5.04526 14.2865C5.89804 15.0865 6.95012 15.6426 8.09146 15.8968C8.31152 16.8856 8.75874 17.8096 9.39772 18.5957C10.0367 19.3818 10.8499 20.0083 11.7729 20.4257C12.696 20.843 13.7035 21.0398 14.7157 21.0004C15.728 20.961 16.7171 20.6865 17.6049 20.1987C18.4927 19.7108 19.2548 19.023 19.8307 18.1896C20.4067 17.3563 20.7807 16.4003 20.9233 15.3974C21.0658 14.3944 20.9729 13.3721 20.6519 12.4113C20.331 11.4505 19.7907 10.5776 19.074 9.86166ZM4.48546 9.52823C4.48514 8.36459 4.88831 7.23683 5.62626 6.33712C6.36422 5.43741 7.39131 4.8214 8.53252 4.59406C9.67374 4.36672 10.8585 4.54212 11.8849 5.09036C12.9113 5.6386 13.7158 6.52577 14.1615 7.6007C14.6071 8.67563 14.6662 9.87183 14.3287 10.9855C13.9913 12.0991 13.2781 13.0613 12.3108 13.7081C11.3435 14.3548 10.1818 14.6462 9.02372 14.5325C7.86565 14.4188 6.78282 13.9071 5.95974 13.0845C5.49107 12.6187 5.11945 12.0645 4.86639 11.454C4.61333 10.8436 4.48385 10.189 4.48546 9.52823ZM18.0137 18.0354C17.0696 18.9773 15.7903 19.5063 14.4566 19.5063C13.1229 19.5063 11.8437 18.9773 10.8995 18.0354C10.3428 17.4786 9.92619 16.7977 9.68403 16.0485C10.3923 16.0308 11.0929 15.8976 11.7583 15.6542H12.138C12.4243 17.2091 13.2695 18.0079 14.6795 18.0079C16.1426 18.0079 17.3332 17.0394 17.3332 15.8505C17.327 15.6806 17.2552 15.5197 17.1328 15.4017C17.0105 15.2836 16.8471 15.2177 16.677 15.2177C16.507 15.2177 16.3436 15.2836 16.2212 15.4017C16.0988 15.5197 16.027 15.6806 16.0209 15.8505C16.0209 16.1959 15.5426 16.6957 14.6795 16.6957C14.3203 16.6957 13.728 16.6922 13.4649 15.6551H15.078C15.2273 15.6551 15.3704 15.5958 15.4759 15.4903C15.5815 15.3847 15.6407 15.2416 15.6407 15.0924C15.6407 14.9431 15.5815 14.8 15.4759 14.6945C15.3704 14.5889 15.2273 14.5297 15.078 14.5297H13.7066C13.8455 14.4139 13.9809 14.2922 14.1103 14.1637H15.078C15.2272 14.1637 15.3702 14.1044 15.4756 13.999C15.5811 13.8935 15.6403 13.7505 15.6403 13.6014C15.6403 13.4522 15.5811 13.3092 15.4756 13.2038C15.3702 13.0983 15.2272 13.0391 15.078 13.0391H15.0155C15.1886 12.7657 15.3412 12.4802 15.4715 12.1845C15.6133 12.2377 15.7385 12.3273 15.8346 12.4444C15.9306 12.5615 15.994 12.7019 16.0183 12.8514C16.0245 13.0213 16.0963 13.1822 16.2187 13.3002C16.341 13.4183 16.5044 13.4842 16.6745 13.4842C16.8445 13.4842 17.0079 13.4183 17.1303 13.3002C17.2526 13.1822 17.3245 13.0213 17.3306 12.8514C17.3058 12.4252 17.1547 12.016 16.8966 11.6759C16.6384 11.3358 16.285 11.0802 15.8812 10.9417C15.9704 10.5359 16.0209 10.1226 16.032 9.70737C16.7793 9.95004 17.4584 10.3663 18.0137 10.9219C18.9556 11.866 19.4846 13.1451 19.4846 14.4787C19.4846 15.8122 18.9556 17.0913 18.0137 18.0354Z"
              fill="#17171B"
            />
            <path
              d="M12.2096 10.8384C12.2096 9.87585 11.4399 9.10699 10.2151 8.83356L9.35106 8.61928C8.45963 8.42128 8.45963 8.24213 8.45963 8.09985C8.45963 7.80928 8.92248 7.40556 9.67677 7.40556C10.0582 7.3867 10.4328 7.51699 10.7208 7.76813C10.8198 7.85629 10.8814 7.97893 10.8931 8.11099C10.8928 8.1972 10.9096 8.28261 10.9425 8.36232C10.9754 8.44202 11.0236 8.51445 11.0846 8.57546C11.1455 8.63646 11.2178 8.68483 11.2975 8.7178C11.3772 8.75076 11.4626 8.76767 11.5488 8.76756C11.7228 8.76756 11.8896 8.6985 12.0127 8.57556C12.1358 8.45261 12.2051 8.28583 12.2053 8.11185C12.2013 7.87371 12.15 7.63874 12.0545 7.42055C11.9591 7.20236 11.8212 7.00527 11.6491 6.8407C11.2589 6.46745 10.7633 6.22327 10.2296 6.14128V5.72385C10.2296 5.57461 10.1703 5.43148 10.0648 5.32595C9.95928 5.22042 9.81615 5.16113 9.66691 5.16113C9.51767 5.16113 9.37454 5.22042 9.26901 5.32595C9.16348 5.43148 9.1042 5.57461 9.1042 5.72385V6.14899C8.60221 6.1965 8.13237 6.41712 7.7752 6.77304C7.41803 7.12897 7.19576 7.59803 7.14648 8.09985C7.14648 9.47299 8.49048 9.77299 9.0502 9.89813L9.91506 10.1116C10.3685 10.2127 10.8973 10.463 10.8973 10.8384C10.8973 11.081 10.4208 11.5456 9.67506 11.5456C8.95934 11.5456 8.45963 11.1727 8.45963 10.8384C8.45963 10.6643 8.39045 10.4973 8.26732 10.3742C8.14419 10.251 7.97719 10.1818 7.80306 10.1818C7.62892 10.1818 7.46192 10.251 7.33879 10.3742C7.21566 10.4973 7.14648 10.6643 7.14648 10.8384C7.18823 11.3464 7.40898 11.8231 7.7694 12.1835C8.12981 12.5439 8.60649 12.7647 9.11448 12.8064V13.2238C9.11448 13.373 9.17372 13.516 9.27917 13.6214C9.38462 13.7269 9.52764 13.7861 9.67677 13.7861C9.8259 13.7861 9.96892 13.7269 10.0744 13.6214C10.1798 13.516 10.2391 13.373 10.2391 13.2238V12.8004C10.7422 12.7473 11.2121 12.5236 11.5705 12.1665C11.929 11.8095 12.1545 11.3405 12.2096 10.8376V10.8384Z"
              fill="#17171B"
            />
          </svg>
          <p className="text-xl text-black my-auto">Convert</p>
        </div>
      </div>
      <div className="p-[50px] bg-white rounded-b-[20px]">
        <div className=" gap-[20px] flex items-center flex-wrap text-black relative">
          <div className="w-full xl:w-full 2xl:w-[366px]">
            <p className="text-lg">Amount</p>
            <div className="w-full h-[64px] rounded-[14px] border flex items-center ps-[20px]">
              <p className="text-[16px] my-auto ">{rates}</p>
            </div>
          </div>
          <div className="w-full xl:w-[49%] 2xl:w-[366px] relative">
            <p className="text-lg">From</p>
            <div
              className="w-full cursor-pointer h-[64px] rounded-[14px] border flex justify-between items-center px-[20px] "
              onClick={() => setShowDropDown(!showDropDown)}>
              <div className="flex items-center gap-2">
                <img
                  src={selectedCon.icon}
                  className="h-[48px] rounded-none"
                  alt=""
                />
                <p className="my-auto">
                  {selectedCon.name} -{" "}
                  <span className="text-[#17171BB2]">
                    {selectedCon.name} Dollar
                  </span>
                </p>
              </div>
              <MdKeyboardArrowDown size={30} />
            </div>
            {showDropDown && (
              <div className="absolute bottom-[-245px] w-full rounded-[14px] shadow right-0 p-3 flex flex-col gap-2 border bg-white z-20">
                {data.map((items, index) => (
                  <div
                    className="flex justify-between cursor-pointer  gap-2 items-center rounded-[14px] hover:bg-gray-300 p-2"
                    onClick={() => {
                      setSelectedCon(items);
                      setShowDropDown(false);
                    }}
                    key={index}>
                    <img src={items.icon} className="h-[48px]" alt="" />
                    <p className="my-auto text-xl font-semibold">
                      {items.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="h-[50px] w-[50px] rotate-[90deg] md:rotate-0  flex items-center justify-center rounded-full bg-white border  xl:absolute xl:right-[48%] xl:bottom-[3%] 2xl:absolute 2xl:right-[31%] 2xl:bottom-[7%] ">
            <div className="w-[38px] h-[38px] rounded-full bg-[#E2E8F0] flex items-center justify-center">
              <BsArrowRight />
            </div>
          </div>
          <div className="w-full xl:w-[49%] 2xl:w-[366px]">
            <p className="text-lg">To</p>
            <div className="w-full h-[64px] rounded-[14px] border flex items-center ps-[25px]">
              <div className="flex items-center gap-2">
                <img src={india} className="h-[30px] rounded-none" alt="" />
                <p className="my-auto">
                  INR - <span className="text-[#17171BB2]">Indian Rupee</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3  w-full justify-between">
          <div className="flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none">
              <path
                d="M24.5 14C24.5 8.20059 19.7994 3.5 14 3.5C8.20059 3.5 3.5 8.20059 3.5 14C3.5 19.7982 8.20059 24.5 14 24.5C19.7994 24.5 24.5 19.7982 24.5 14Z"
                stroke="#17171B"
                stroke-opacity="0.7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.9961 9.69092V14.7071M14.0005 18.3653V18.3096"
                stroke="#17171B"
                stroke-opacity="0.7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="w-full md:w-[568px] my-auto text-sm text-[#17171BB2]">
              We use the mid-market rate for our Converter. This is for
              informational purposes only. You won’t receive this rate when
              sending money. Login to view send rates
            </p>
          </div>
          <button
            className="w-[172px]  md:mx-1 h-[64px] bg-[#0054FF] rounded-[14px] text-lg "
            onClick={() => setRates(selectedCon.rate)}>
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCalc;
