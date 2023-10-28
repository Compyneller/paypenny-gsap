import React, { useEffect } from "react";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import "./font/style.css";
// import "./Loco.css";
import NavBarComp from "./components/NavBarComp";
import Footer from "./components/Footer";
import gsap, { Power3 } from "gsap";
import LoadingPage from "./components/LoadingPage";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exchange from "./pages/Exchange";
import FAQ from "./pages/FAQ/FAQ";
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const locoScroll = new LocomotiveScroll({
  //     el: document.querySelector(".smooth-scroll"),
  //     smooth: true,
  //   });
  //   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  //   locoScroll.on("scroll", ScrollTrigger.update);
  // }, []);

  const reveal = () => {
    // window.alert("reveal");
    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
      },
    });

    tl.to(".loaderLine", {
      width: `${counter}%`,
      duration: 2,
      ease: Power3.easeInOut,
    })
      .to(".loading-logo", {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: Power3.easeInOut,
      })
      .to(".loaderLine", {
        height: "100vh",
        bottom: 0,
        duration: 0.5,
        ease: Power3.easeInOut,
      })
      .to(".loaderLine", {
        background: "black",
        duration: 0.5,
        ease: Power3.easeInOut,
      })

      .to(".loadingContainer", {
        opacity: 0,
        display: "none",
      });
  };
  useEffect(() => {
    const count = setInterval(() => {
      counter < 100
        ? setCounter((counter) => counter + 1)
        : clearInterval(count) || reveal();
    }, 2);

    return () => {
      clearInterval(count);
    };
  }, [counter]);
  return (
    <>
      {/* {loading ? (
        <LoadingPage />
      ) : ( */}
      <BrowserRouter>
        <NavBarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* )} */}
    </>
  );
};

export default App;
