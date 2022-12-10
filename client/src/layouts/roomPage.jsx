import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { getUsersList } from "../store/users";

const RoomPage = () => {
  const users = useSelector(getUsersList());
  console.log(users);

  return (
    <>
      <Navbar />
      <div className="w-full h-screen relative bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
          <h1>RoomPage</h1>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RoomPage;
