import React from "react";
import logo from "../assets/Logo.png";

const LoadingPage = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center  bg-black relative loadingContainer overflow-hidden"
      style={{ height: "100vh" }}>
      <img src={logo} className=" loading-logo" alt="" />
      <div
        className={`h-[5px]   absolute left-0 loaderLine`}
        style={{ bottom: "10%", background: "white" }}></div>
    </div>
  );
};

export default LoadingPage;
