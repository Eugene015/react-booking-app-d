import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import BookingTable from "../components/ui/bookingsTable";
import {
  getReservations,
  loadAllReservationList,
  loadUserReservationList,
} from "../store/reservation";
import { getCurrentUserData, getIsLoggedIn } from "../store/users";
import { Link } from "react-router-dom";
import TableHead from "../components/ui/tableHead";
import BookingTableAdmin from "../components/ui/bookingsTableAdmin";

const UserPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserData());
  const isLoggedIn = useSelector(getIsLoggedIn());

  useEffect(() => {
    if (currentUser.isAdmin) {
      dispatch(loadAllReservationList());
    } else if (isLoggedIn) {
      dispatch(loadUserReservationList(currentUser._id));
    }
  }, [isLoggedIn]);

  const userReservList = useSelector(getReservations());
  console.log(userReservList);

  return (
    <>
      <Navbar />
      <div className="pt-24 pl-8">
        <h1 className="ml-2 mt-4">User Page with Bookings</h1>

        <div className="pt-6 flex ">
          <aside className="my-4 ml-4 w-[300px] rounded-xl">
            <p className="py-4 font-bold">Hi, {currentUser.name}!</p>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-40 h-40 rounded-full"
                src={currentUser.image}
                alt=""
              />
              {currentUser.isAdmin ? (
                <div className="inline-block my-4 py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-orange-400 text-white rounded">
                  Admin
                </div>
              ) : (
                ""
              )}
            </div>
            <p className="pb-4 pt-8">My bookings</p>{" "}
            <p className="pb-4">Profile settings</p>
          </aside>
          <div className="my-4 ml-4">
            {currentUser.isAdmin ? (
              <p className="pb-6 font-bold">All rooms status for admin</p>
            ) : (
              ""
            )}
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase   dark:text-gray-400">
                  <tr>
                    {currentUser.isAdmin ? (
                      <th scope="col" className="py-3 px-6">
                        Guest name
                      </th>
                    ) : (
                      ""
                    )}

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
                {userReservList.length !== 0 ? (
                  userReservList.map((res) => {
                    return (
                      <BookingTable
                        reservationData={res}
                        isAdmin={currentUser.isAdmin}
                      />
                    );
                  })
                ) : (
                  <>
                    <div className="text-center">
                      <h3 className="font-bold pb-4">
                        You have no reservations for now
                      </h3>
                      <Link to="/">
                        <button className="headerBtn my-6">
                          Check for availiable rooms
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
