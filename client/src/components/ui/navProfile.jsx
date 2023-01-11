import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../../store/users";
const NavProfile = () => {
  const currentUser = useSelector(getCurrentUserData());
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  if (!currentUser)
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#5651e5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center">
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
      </div>
    </>
  );
};

export default NavProfile;
