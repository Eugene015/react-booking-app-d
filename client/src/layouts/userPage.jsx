import React, { useEffect, useState } from "react";
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

const UserPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserData());
  const isLoggedIn = useSelector(getIsLoggedIn());
  const [modal, setModal] = useState(true);

  useEffect(() => {
    if (currentUser.isAdmin) {
      dispatch(loadAllReservationList());
    } else if (isLoggedIn) {
      dispatch(loadUserReservationList(currentUser._id));
    }
  }, [isLoggedIn]);

  const userReservList = useSelector(getReservations());

  return (
    <>
      <Navbar />
      {modal && (
        <>
          <div
            className="fixed top-0 left-0 right-0 z-5 w-full p-4 md:h-full bg-black/70"
            onClick={() => setModal(false)}
          ></div>
          <div className="fixed top-[15%] w-full p-16 z-10">
            <div className="relative w-full max-w-2xl m-auto">
              <div className="relative bg-white rounded-lg shadow">
                <div className="flex items-start justify-between p-4 pl-6 border-b rounded-t border-gray-300">
                  <h3 className="text-xl font-semibold text-green-700">
                    Congratulations!
                  </h3>
                  <button
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-[#5651e5] dark:hover:text-white"
                    onClick={() => setModal(false)}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-base leading-relaxed text-gray-700">
                    You have successfully booked your room. This room will not
                    be available for other guests on your booking dates. You
                    could manage your bookings on your profile page.
                  </p>
                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b border-gray-300">
                  <button
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-[#5651e5] dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-[#5954da] dark:focus:ring-gray-600"
                    onClick={() => setModal(false)}
                  >
                    Got It
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="pt-24 pl-8">
        <h1 className="ml-2 mt-4">User Page with Bookings</h1>

        <div className="pt-6 sm:flex lg:flex xl:flex">
          <aside className="my-4 ml-4 w-[300px] rounded-xl text-center sm:text-left lg:text-left xl:text-left">
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
            <p className="pb-4 pt-8">
              <Link
                to={`/users/${currentUser._id}`}
                className="text-blue-500 hover:underline"
              >
                {" "}
                My bookings
              </Link>
            </p>{" "}
            <p className="pb-4">
              <Link
                to={`/users/${currentUser._id}/edit`}
                className="text-blue-500 hover:underline"
              >
                {" "}
                Edit profile
              </Link>
            </p>
          </aside>
          <div>
            {userReservList.length !== 0 ? (
              <>
                <div>
                  <div className="my-4 ml-4">
                    {currentUser.isAdmin ? (
                      <p className="pb-6 font-bold">
                        All rooms status for admin
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className=" shadow-md sm:rounded-lg mx-8">
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
                      {userReservList.map((res) => {
                        return (
                          <BookingTable
                            reservationData={res}
                            isAdmin={currentUser.isAdmin}
                            key={res._id}
                          />
                        );
                      })}
                    </table>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-center mt-7">
                  <h3 className="font-bold pb-4">
                    You have no reservations for now
                  </h3>
                  <Link to="/">
                    <button className="main headerBtn my-6">
                      Check for availiable rooms
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
