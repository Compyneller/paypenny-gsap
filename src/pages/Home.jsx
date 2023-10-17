import React from "react";
import Hero from "../components/Hero";
import SendMoney from "../components/SendMoney";
import Benifits from "../components/Benifits";
import WhyChooseUs from "../components/WhyChooseUs";
import ClientSays from "../components/ClientSays";
import Refer from "../components/Refer";
import AppSloutley from "../components/AppSloutley";
import Benefits2 from "../components/Benefits2";
import LoadingPage from "../components/LoadingPage";

const Home = () => {
  return (
    <>
      {/* <LoadingPage /> */}
      <Hero />
      <SendMoney />
      <Benifits />
      <WhyChooseUs />
      <ClientSays />
      <Refer />
      <AppSloutley />
    </>
  );
};

export default Home;
