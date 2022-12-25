import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../../store/users";
const NavProfile = () => {
  const currentUser = useSelector(getCurrentUserData());

  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  if (!currentUser) return "loading";
  return (
    <>
      <div
        id="dropdown"
        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>

      <img src={currentUser.image} alt="" className="h-10 pr-2" />
      <div className="m-2">Welcome, {currentUser.name}</div>
      <div
        className="text-white bg-[#3630e6] hover:bg-[#423de1]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={toggleMenu}
      >
        <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
          <Link to={`/users/${currentUser._id}`} className="dropdown-item">
            Your Profile
          </Link>
        </div>
      </div>
      <Link
        to="/logout"
        className="text-sm px-4 py-2.5 text-center inline-flex items-center"
      >
        Log Out
      </Link>
    </>
  );
};

export default NavProfile;
