import React from "react";
import Hero from "../components/Hero";
import Selects from "../components/Selects";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Selects />
      <Footer />
    </>
  );
};

export default MainPage;
