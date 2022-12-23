import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { getSearchData } from "../store/searchData";
// import { useLocation } from "react-router-dom";
import BookingTable from "../components/ui/bookingsTable";
import {
  getReservationsLoadingStatus,
  loadReservationList,
} from "../store/reservation";
import { getCurrentUserData } from "../store/users";

const UserPage = () => {
  // const location = useLocation();
  const currentUser = useSelector(getCurrentUserData());
  const state = useSelector(getSearchData());
  const isReservLoggedIn = useSelector(getReservationsLoadingStatus());
  const userReservList = useSelector(loadReservationList(currentUser._id));
  

  return (
    <>
      <Navbar />
      <div className="pt-24 pl-8">
        <h1 className="ml-2 mt-4">User Page with Bookings</h1>

        {state ? (
          <p className="mx-2 my-4 p-6 border border-green-500 rounded bg-green-100 max-w-[750px]">
            {"bookingMessage"}
          </p>
        ) : (
          ""
        )}

        <div className="pt-6 flex ">
          <aside className="my-4 ml-4 w-[300px] rounded-xl">
            <p className="pb-4">My bookings</p>{" "}
            <p className="pb-4">Account settings</p>
          </aside>

          <div className="my-4 ml-4">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase   dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Room category
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
                <tbody>
                  {!isReservLoggedIn ? (
                    <BookingTable state={state} />
                  ) : (
                    "Loading..."
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
