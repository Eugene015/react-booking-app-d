import React from "react";
import mhotel_hero from "../assets/mhotel_hero.jpg";
import SearchBar from "./ui/searchBar";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div
        className="w-full h-full mx-auto flex justify-center items-center"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${mhotel_hero})`,
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.65)",
        }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-center text-white pt-20 px-8 md:p-4">
          <h1 className="font-normal">
            <span className="text-orange-300">5 Star</span> hotel on
            Meditteranian seashore
          </h1>
          <h2 className="font-normal mb-6">Top 3 in Liguria</h2>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
