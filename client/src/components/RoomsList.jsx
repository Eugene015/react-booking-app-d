import React from "react";
import RoomCard from "./RoomCard";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { getRoomsList } from "../store/rooms";
import { getDatesInRange } from "../utils/datesInRange";
import { getSearchData } from "../store/searchData";

const RoomsList = () => {
  const state = useSelector(getSearchData());
  const rooms = useSelector(getRoomsList());
  console.log(state);

  const allDates = getDatesInRange(
    state.dates[0].startDate,
    state.dates[0].endDate
  );

  const isAvailable = (alldates, roomData) => {
    const isFound = roomData.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    console.log(isFound);

    return !isFound;
  };

  return (
    <>
      <div id="numbers" className="text-center pt-16 ">
        <h1>Our beautiful {state.category} rooms availiable for your dates</h1>
        <p className="py-4">
          All the numbers are clean and cozy and have all the necessary stuff
          for your pleasant vacation
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto px-4 pt-8 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {rooms ? (
          rooms.map((room) => {
            return (
              room.category === state.category &&
              room.maxGuests >= state.options.adult &&
              isAvailable(allDates, room) && (
                <RoomCard
                  key={room._id}
                  _id={room._id}
                  bg={room.imgUrl}
                  text={room.category}
                  category={room.category}
                  seaview={room.seaView}
                  halfboard={room.halfBoard}
                  price={room.price}
                  searchData={state}
                />
              )
            );
          })
        ) : (
          <div className="w-[80px] mx-auto pt-16">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#5651e5"
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
