import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RoomsList from "../components/RoomsList";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RoomsList />
      <Footer />
    </>
  );
};

export default MainPage;
