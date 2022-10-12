import React from "react";
import SelectsCard from "./SelectsCard";
import { useRooms } from "../hooks/useRooms";

const Selects = () => {
  const { rooms } = useRooms();

  if (rooms) {
    console.log(rooms);
    return (
      <>
        <div id="numbers" className="text-center pt-16 ">
          <h1>Our beautiful numbers</h1>
          <p className="py-4">
            All the numbers are clean and cozy and have all the necessary stuff
            for your pleasant vacation
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto px-4 pt-8 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {rooms.map((room) => (
            <SelectsCard
              key={room.id}
              bg={room.imgUrl}
              text={room.category}
              category={room.category}
              seaview={room.seaview}
              halfboard={room.halfboard}
              price={room.price}
            />
          ))}
        </div>
      </>
    );
  } else return "Loading...";
};

export default Selects;
