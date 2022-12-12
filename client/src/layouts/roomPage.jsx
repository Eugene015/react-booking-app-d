import React from "react";
import { useParams } from "react-router-dom";
import { useRooms } from "../hooks/useRooms";

const RoomPage = () => {
  const { roomId } = useParams();
  const { rooms } = useRooms();
  const { imgUrl } = rooms.find((r) => r._id === roomId);
  console.log(imgUrl);

  // 1. Get room by Id

  return (
    <>
      <h1>Room Page</h1>
      {!rooms ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={imgUrl} alt="Hotel Room" />
        </div>
      )}
    </>
  );
};

export default RoomPage;
