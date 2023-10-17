import React, { useEffect } from "react";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import "./font/style.css";
import NavBarComp from "./components/NavBarComp";
import Footer from "./components/Footer";
import gsap, { Power3 } from "gsap";
import LoadingPage from "./components/LoadingPage";
const App = () => {
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
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
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="mainContainer">
          <NavBarComp />
          <Home />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;