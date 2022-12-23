import React from "react";
import { format } from "date-fns";

const BookingTable = ({ state }) => {
  console.log(state);
  return (
    <>
      <tr className="bg-white border-b">
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
        >
          {state
            ? state.category.charAt(0).toUpperCase() + state.category.slice(1)
            : ""}
        </th>
        <td className="py-4 px-6">
          {state ? format(state.dates[0].startDate, "dd/MM/yyyy") : ""}
        </td>
        <td className="py-4 px-6">
          {state ? format(state.dates[0].endDate, "dd/MM/yyyy") : ""}
        </td>
        <td className="py-4 px-6">
          Adults {state ? state.options.adult : ""}/ Children{" "}
          {state ? state.options.children : ""}
        </td>
        <td className="py-4 px-6 text-orange-500">${state ? "price" : ""}</td>
        <td className="py-4 px-6">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default BookingTable;
