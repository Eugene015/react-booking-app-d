import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/users";
import NavProfile from "./ui/navProfile";

const Navbar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <>
      <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white bg-slate-600 bg-opacity-50">
        <div>
          <Link to="/">
            <h1 className={logo ? "hidden" : "block"}>
              MEDITERRANIAN<span className="font-extralight">hotel</span>
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex lg:flex sm:flex">
          {isLoggedIn ? (
            <NavProfile />
          ) : (
            <Link to="/login/login">
              <BsPerson size={20} />
              <p>Sign In</p>
            </Link>
          )}
        </div>

        {/* Hamburger */}
        <div onClick={handleNav} className="md:hidden z-10">
          {nav ? (
            <AiOutlineClose className="text-black" size={20} />
          ) : (
            <HiOutlineMenuAlt4 size={20} />
          )}
        </div>

        {/* Mobile menu dropdown */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <h1>
              MEDITERRANIAN<span className="font-extralight">hotel</span>
            </h1>
            <li className="border-b">Home</li>
            <li className="border-b">Our Numbers</li>
            <li className="border-b">Contacts</li>
            <div className="flex flex-col">
              <button className="my-6">
                {isLoggedIn ? <NavProfile /> : <Link to="/login">Login</Link>}
              </button>
            </div>
            <div className="flex justify-between my-6">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaPinterest className="icon" />
              <FaInstagram className="icon" />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
