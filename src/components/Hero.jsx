import React from "react";
import mhotel_hero from "../assets/mhotel_hero.jpg";
import NumberSearchingForm from "../forms/numberSearchingForm";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-full object-cover"
        src={mhotel_hero}
        alt="mediterranian hotel"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/70"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="font-normal">
          <span className="text-orange-300">5 Star</span> hotel on Meditteranian
          seashore
        </h1>
        <h2 className="font-normal pt-3 pb-8">Top 3 in Liguria</h2>
        <NumberSearchingForm />
      </div>
    </div>
  );
};

export default Hero;
