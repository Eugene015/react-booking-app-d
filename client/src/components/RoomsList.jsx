import React from "react";
import RoomCard from "./RoomCard";
import { useRooms } from "../hooks/useRooms";
import { ThreeDots } from "react-loader-spinner";

const RoomsList = () => {
  const { rooms } = useRooms();
  console.log(rooms);

  return (
    <>
      <div id="numbers" className="text-center pt-16 ">
        <h1>Our beautiful numbers availiable for now</h1>
        <p className="py-4">
          All the numbers are clean and cozy and have all the necessary stuff
          for your pleasant vacation
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto px-4 pt-8 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {rooms ? (
          rooms.map((room) => (
            <RoomCard
              key={room._id}
              _id={room._id}
              bg={room.imgUrl}
              text={room.category}
              category={room.category}
              seaview={room.seaview}
              halfboard={room.halfboard}
              price={room.price}
            />
          ))
        ) : (
          <div className="text-center pt-16">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#bab1ff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default RoomsList;
