import { format } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations, removeReservation } from "../../store/reservation";
import { getRoomById } from "../../store/rooms";

const BookingTableAdmin = ({ reservationData }) => {
  const dispatch = useDispatch();
  const allReservations = useSelector(getReservations());
  console.log(allReservations);

  const room = useSelector(getRoomById(reservationData.roomId));
  console.log(room);

  const handleDelete = (roomId) => {
    dispatch(removeReservation(roomId));
  };
  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase   dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Room category
              </th>
              <th scope="col" className="py-3 px-6">
                Room number
              </th>
              <th scope="col" className="py-3 px-6">
                Check in
              </th>
              <th scope="col" className="py-3 px-6">
                Check out
              </th>
              <th scope="col" className="py-3 px-6">
                Guests
              </th>
              <th scope="col" className="py-3 px-6">
                Total price
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tr className="bg-white">
            <td
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
            >
              {reservationData.category.charAt(0).toUpperCase() +
                reservationData.category.slice(1)}
            </td>
            <td className="py-4 px-6">{reservationData.roomNumber}</td>
            <td className="py-4 px-6">
              {format(
                new Date(reservationData.dates[0].startDate).getTime(),
                "dd/MM/yyyy"
              )}
            </td>
            <td className="py-4 px-6">
              {format(
                new Date(reservationData.dates[0].endDate).getTime(),
                "dd/MM/yyyy"
              )}
            </td>
            <td className="py-4 px-6">
              <p>Adults {reservationData.guests.adults}</p>
              <p>Children {reservationData.guests.children}</p>
            </td>
            <td className="py-4 px-6 text-orange-500">
              {reservationData.totalPrice}
            </td>
            <td className="py-4 px-6">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                onClick={() => handleDelete(reservationData._id)}
              >
                Delete
              </a>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default BookingTableAdmin;
