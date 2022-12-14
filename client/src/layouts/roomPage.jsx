import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getRoomById } from "../store/rooms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faWater,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";

const RoomPage = () => {
  const { roomId } = useParams();
  const room = useSelector(getRoomById(roomId));
  console.log(room);

  const handleClick = (id) => {
    console.log("click");
  };

  return (
    <>
      <Navbar />

      {!room ? (
        <h1>Loading...</h1>
      ) : (
        <div className="w-full h-screen relative">
          <div className="absolute top-0 w-full h-full flex flex-row space-between">
            <div className="max-w-[70%]">
              <img src={room.imgUrl} alt="Hotel Room" />
            </div>
            <div className="p-10 pt-32">
              <h1 className="py-8">Room page</h1>
              <div className="bg-gray-400/10 p-6">
                <p>
                  <span className="font-bold">Category</span>: {room.category}
                </p>
                <p>
                  <span className="font-bold">Seaview</span>:{" "}
                  {room.seaView ? <FontAwesomeIcon icon={faWater} /> : ""}
                </p>
                <p>
                  <span className="font-bold">Halfboard</span>:{" "}
                  {room.halfBoard ? (
                    <FontAwesomeIcon icon={faUtensils} />
                  ) : (
                    <FontAwesomeIcon icon={faSlash} />
                  )}
                </p>
                <p>
                  <span className="text-lg font-bold pt-6">Price</span>:{" "}
                  {room.price}
                </p>
                <button
                  className="mt-6 mb-2"
                  onClick={() => handleClick(room._id)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomPage;
