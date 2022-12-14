import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RoomsList from "../components/RoomsList";

const RoomsListPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen relative bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
          <h1>RoomsList Page</h1>
        </div>
      </div>
      <RoomsList />
      <Footer />
    </>
  );
};

export default RoomsListPage;
