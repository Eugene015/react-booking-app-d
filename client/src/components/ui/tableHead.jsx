import React from "react";

const TableHead = ({ children }) => {
  return (
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
        {children}
      </table>
    </div>
  );
};

export default TableHead;
