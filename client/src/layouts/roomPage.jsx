import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  getRoomById,
  getRoomsList,
  unavailableDatesUpdated,
} from "../store/rooms";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faWater,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";
import localStorageService from "../services/localStorage.service";
import { getCurrentUserData } from "../store/users";
import { dayDifference } from "../utils/dayDiff";
import { getDatesInRange } from "../utils/datesInRange";
import { getSearchData } from "../store/searchData";
import { createReservation } from "../store/reservation";

const RoomPage = () => {
  const state = useSelector(getSearchData());
  const history = useHistory();
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const room = useSelector(getRoomById(roomId));
  const currentUser = useSelector(getCurrentUserData());

  const startDate = format(state.dates[0].startDate, "dd/MM/yyyy");
  const endDate = format(state.dates[0].endDate, "dd/MM/yyyy");

  const totalNights = dayDifference(
    state.dates[0].startDate,
    state.dates[0].endDate
  );

  const totalPrice = totalNights * room.price;

  const allDates = getDatesInRange(
    state.dates[0].startDate,
    state.dates[0].endDate
  );

  const changedUnavDates = room.unavailableDates.map((date) => {
    return new Date(date).getTime();
  });
  const conbinedDates = [...changedUnavDates, ...allDates];
  const updatedRoom = { ...room, unavailableDates: conbinedDates };

  const reservationData = {
    roomNumber: room.roomNumber,
    roomId: room._id,
    guestName: currentUser.name,
    category: room.category,
    totalPrice: totalPrice,
    halfBoard: room.halfBoard,
    seaView: room.seaView,
    dates: [
      { startDate: state.dates[0].startDate, endDate: state.dates[0].endDate },
    ],
    guests: { adults: state.options.adult, children: state.options.children },
  };

  const handleClick = async () => {
    if (!localStorageService.getAccessToken()) {
      history.push(`/login`);
    }
    localStorageService.setRoomId(roomId);
    await dispatch(createReservation(reservationData));
    await dispatch(unavailableDatesUpdated(updatedRoom));
    return history.push(`/users/${currentUser._id}`);
  };

  return (
    <>
      <Navbar />

      {!room ? (
        <h1>Loading...</h1>
      ) : (
        <div className="w-full h-screen">
          <div className="w-full h-full flex flex-row space-between">
            <div className="p-10 pt-20 min-w-[400px]">
              <h1 className="py-8">
                {state.category.charAt(0).toUpperCase() +
                  state.category.slice(1)}
                room page
              </h1>
              <div className="bg-gray-400/10 p-6">
                <p>
                  <span className="font-bold">Category</span>: {room.category}
                </p>
                <p>
                  <span className="font-bold">Seaview</span>:{" "}
                  {room.seaView ? <FontAwesomeIcon icon={faWater} /> : "-"}
                </p>
                <p>
                  <span className="font-bold">Halfboard</span>:{" "}
                  {room.halfBoard ? <FontAwesomeIcon icon={faUtensils} /> : "-"}
                </p>
                <p>
                  <span className="text-lg font-bold pt-6">Price</span>:{" "}
                  {room.price}
                </p>
                <div className="my-6">
                  <p className="mb-2 font-bold">Your booking dates:</p>
                  <p>
                    <span className="text-xs">Check-in</span> {startDate}
                  </p>
                  <p>
                    <span className="text-xs">Check-out</span> {endDate}
                  </p>
                </div>
                <div className="my-6">
                  <p className="mb-2 font-bold">Guests:</p>
                  <p>
                    <span className="text-xs">Adults: </span>{" "}
                    {state.options.adult}
                  </p>
                  <p>
                    <span className="text-xs">Children: </span>{" "}
                    {state.options.children}
                  </p>
                </div>
                <div>
                  <p className="mb-2 font-bold">Total</p>
                  <p>
                    <span className="text-xs">Nights</span> {totalNights} |{" "}
                    <span className="text-xs">Price</span> ${totalPrice}
                  </p>
                </div>
                <div className="my-6">
                  <p></p>
                </div>

                <button
                  className="main mt-6 mb-2"
                  onClick={() => handleClick()}
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="max-w-[70%] pt-56">
              <img src={room.imgUrl} alt="Hotel Room" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomPage;
