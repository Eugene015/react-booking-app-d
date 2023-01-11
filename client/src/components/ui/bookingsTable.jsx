import { format } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeReservation } from "../../store/reservation";
import { getRoomById } from "../../store/rooms";

const BookingTable = ({ reservationData, isAdmin }) => {
  const dispatch = useDispatch();

  const room = useSelector(getRoomById(reservationData.roomId));

  const handleDelete = (roomId) => {
    dispatch(removeReservation(roomId));
  };
  return (
    <>
      <tbody>
        <tr className="bg-white">
          {isAdmin ? (
            <td className="py-4 px-6">{reservationData.guestName}</td>
          ) : (
            ""
          )}
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
            ${reservationData.totalPrice}
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
      </tbody>
    </>
  );
};

export default BookingTable;
