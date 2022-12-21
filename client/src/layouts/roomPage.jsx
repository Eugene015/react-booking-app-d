import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getRoomById, getRoomsList, unavailableDatesAdd } from "../store/rooms";
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
import { isAvailable } from "../utils/isAvailable";

const RoomPage = () => {
  const { state } = useLocation();
  const history = useHistory();
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const room = useSelector(getRoomById(roomId));
  const currentUser = useSelector(getCurrentUserData());
  const rooms = useSelector(getRoomsList());
  console.log(room);

  console.log(state);
  const startDate = format(state.dates[0].startDate, "dd/MM/yyyy");
  const endDate = format(state.dates[0].endDate, "dd/MM/yyyy");

  console.log(startDate, endDate);
  const bookingMessage =
    "Congrats! You have successfully booked your room. This room will not be available for other guests on your booking dates. You could manage your bookings on your profile page.";

  const totalNights = dayDifference(
    state.dates[0].startDate,
    state.dates[0].endDate
  );

  console.log(totalNights);

  const totalPrice = totalNights * room.price;

  const allDates = getDatesInRange(
    state.dates[0].startDate,
    state.dates[0].endDate
  );

  console.log(allDates);
  const changedUnavDates = room.unavailableDates.map((date) => {
    return new Date(date).getTime();
  });

  console.log(changedUnavDates);

  const conbinedDates = [...changedUnavDates, ...allDates];

  const updatedRoom = { ...room, unavailableDates: conbinedDates };
  console.log(updatedRoom);

  const unavDates = isAvailable(allDates, room);
  console.log(unavDates);

  const handleClick = async () => {
    if (!localStorageService.getAccessToken()) {
      history.push(`/login/login`);
    }
    console.log(roomId);
    localStorageService.setRoomId(roomId);
    await dispatch(unavailableDatesAdd(updatedRoom));
    console.log(rooms);
    return history.push(`/users/${currentUser._id}`, {
      message: bookingMessage,
      totalPrice,
      state,
    });
  };

  return (
    <>
      <Navbar />

      {!room ? (
        <h1>Loading...</h1>
      ) : (
        <div className="w-full h-screen relative">
          <div className="absolute top-0 w-full h-full flex flex-row space-between">
            <div className="p-10 pt-20 min-w-[400px]">
              <h1 className="py-8">
                {state.category.charAt(0).toUpperCase() +
                  state.category.slice(1)}{" "}
                room page
              </h1>
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
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Change dates
                  </label>
                  <input
                    type="date"
                    name="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="my-6">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Change guests
                  </label>
                  <input
                    type="text"
                    name="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <button className="mt-6 mb-2" onClick={() => handleClick()}>
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
