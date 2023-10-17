import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const DownlodNow = () => {
  const root = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#downloadNow", {
        y: 200,
        duration: 2.5,
        ease: "power3.out",
      });
      gsap.from(".btn1", {
        y: 200,
        opacity: 0,
        duration: 2.5,
        ease: "power3.out",
        stagger: 0.05,
      });
    }, root);

    return () => ctx.revert();
  }, []);
  return (
    <div className="mt-[131px]" ref={root}>
      <div className="w-fit overflow-hidden  mb-3">
        <p
          className="mb-[26px] my-auto text-[22px] font-bold uppercase text-white"
          id="downloadNow">
          Download Now On ↓
        </p>
      </div>
      <div className="flex flex-wrap gap-4 btn1">
        <div className="w-full lg:w-fit px-[52px] py-[32px] border rounded-[70px] custom-btn flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none">
            <path
              d="M22.5803 26.497C21.2073 27.8163 19.7081 27.6079 18.2651 26.983C16.7379 26.3442 15.3368 26.3164 13.7256 26.983C11.7081 27.844 10.6433 27.5941 9.43837 26.497C2.60119 19.5117 3.60995 8.8742 11.3718 8.48536C13.2633 8.58257 14.5803 9.513 15.6871 9.59633C17.3404 9.26304 18.9235 8.30482 20.6889 8.42981C22.8045 8.59645 24.4017 9.42968 25.4525 10.9295C21.0812 13.5264 22.118 19.234 26.125 20.831C25.3264 22.9141 24.2896 24.9833 22.5663 26.5109L22.5803 26.497ZM15.547 8.40203C15.3368 5.3052 17.8728 2.74997 20.787 2.5C21.1933 6.08288 17.5085 8.74921 15.547 8.40203Z"
              fill="white"
            />
          </svg>
          <p className="text-[26px] font-[500]">App Store</p>
        </div>
        <div className="w-full lg:w-fit  px-[52px] py-[32px] custom-btn border rounded-[70px]  flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none">
            <path
              d="M18.7003 4.7948L19.733 2.82671C19.7462 2.80149 19.7546 2.77377 19.7577 2.74513C19.7607 2.71649 19.7584 2.6875 19.7509 2.6598C19.7433 2.6321 19.7307 2.60624 19.7137 2.5837C19.6967 2.56116 19.6757 2.54238 19.6518 2.52843C19.6279 2.51447 19.6017 2.50563 19.5746 2.50239C19.5474 2.49915 19.52 2.50158 19.4938 2.50955C19.4676 2.51751 19.4431 2.53086 19.4217 2.54882C19.4004 2.56678 19.3826 2.589 19.3694 2.61422L18.3259 4.60276C17.4352 4.19022 16.4731 3.97723 15.5005 3.97723C14.5279 3.97723 13.5659 4.19022 12.6751 4.60276L11.6317 2.61422C11.605 2.56299 11.5601 2.52504 11.507 2.50874C11.4538 2.49244 11.3967 2.49911 11.3482 2.52729C11.2997 2.55547 11.2638 2.60284 11.2484 2.659C11.2329 2.71515 11.2392 2.77548 11.2659 2.82671L12.2986 4.7948C11.316 5.3067 10.4859 6.09451 9.89915 7.07186C9.31243 8.04921 8.99181 9.17835 8.97246 10.3355H22.0286C22.0091 9.17811 21.6881 8.04881 21.101 7.07144C20.5139 6.09406 19.6833 5.30638 18.7003 4.7948ZM8.97139 20.8747C8.97096 21.0941 9.01154 21.3114 9.09079 21.5142C9.17004 21.717 9.28641 21.9013 9.43322 22.0565C9.58003 22.2117 9.75439 22.3347 9.94632 22.4186C10.1382 22.5024 10.3439 22.5454 10.5516 22.5451H11.5983V25.9541C11.5983 26.3641 11.7525 26.7573 12.027 27.0472C12.3014 27.3371 12.6737 27.5 13.0619 27.5C13.45 27.5 13.8223 27.3371 14.0967 27.0472C14.3712 26.7573 14.5254 26.3641 14.5254 25.9541V22.5451H16.4768V25.9541C16.4768 26.3639 16.6309 26.757 16.9053 27.0468C17.1796 27.3366 17.5517 27.4994 17.9398 27.4994C18.3278 27.4994 18.6999 27.3366 18.9743 27.0468C19.2486 26.757 19.4028 26.3639 19.4028 25.9541V22.5451H20.4505C20.6579 22.5453 20.8633 22.5022 21.055 22.4184C21.2467 22.3347 21.4208 22.2118 21.5675 22.0569C21.7141 21.9019 21.8305 21.718 21.9098 21.5155C21.9891 21.3131 22.0298 21.0961 22.0297 20.877V10.8809H8.97031L8.97139 20.8747ZM6.96299 10.6138C6.57497 10.6145 6.20302 10.7776 5.92875 11.0675C5.65448 11.3575 5.50028 11.7505 5.5 12.1604V18.6021C5.5 18.8051 5.53784 19.006 5.61136 19.1935C5.68489 19.381 5.79265 19.5514 5.9285 19.6949C6.06435 19.8384 6.22563 19.9522 6.40313 20.0299C6.58063 20.1075 6.77087 20.1475 6.96299 20.1475C7.15512 20.1475 7.34536 20.1075 7.52286 20.0299C7.70036 19.9522 7.86164 19.8384 7.99749 19.6949C8.13334 19.5514 8.2411 19.381 8.31463 19.1935C8.38815 19.006 8.42599 18.8051 8.42599 18.6021V12.1615C8.42542 11.7518 8.2711 11.3591 7.99686 11.0694C7.72262 10.7797 7.35083 10.6167 6.96299 10.6161V10.6138ZM24.037 10.6138C23.649 10.6145 23.277 10.7776 23.0028 11.0675C22.7285 11.3575 22.5743 11.7505 22.574 12.1604V18.6021C22.574 18.8051 22.6118 19.006 22.6854 19.1935C22.7589 19.381 22.8667 19.5514 23.0025 19.6949C23.1384 19.8384 23.2996 19.9522 23.4771 20.0299C23.6546 20.1075 23.8449 20.1475 24.037 20.1475C24.2291 20.1475 24.4194 20.1075 24.5969 20.0299C24.7744 19.9522 24.9356 19.8384 25.0715 19.6949C25.2073 19.5514 25.3151 19.381 25.3886 19.1935C25.4622 19.006 25.5 18.8051 25.5 18.6021V12.1615C25.4994 11.7518 25.3451 11.3591 25.0709 11.0694C24.7966 10.7797 24.4248 10.6167 24.037 10.6161V10.6138Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M11.9987 7.09367C12.3488 7.09367 12.6325 6.80993 12.6325 6.45992C12.6325 6.10991 12.3488 5.82617 11.9987 5.82617C11.6487 5.82617 11.365 6.10991 11.365 6.45992C11.365 6.80993 11.6487 7.09367 11.9987 7.09367Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M19.0009 7.09367C19.3509 7.09367 19.6347 6.80993 19.6347 6.45992C19.6347 6.10991 19.3509 5.82617 19.0009 5.82617C18.6509 5.82617 18.3672 6.10991 18.3672 6.45992C18.3672 6.80993 18.6509 7.09367 19.0009 7.09367Z"
              fill="white"
            />
          </svg>
          <p className="text-[26px] font-[500]">Google Play</p>
        </div>
      </div>
    </div>
  );
};

export default DownlodNow;