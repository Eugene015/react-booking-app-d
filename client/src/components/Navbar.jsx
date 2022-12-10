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

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <>
      <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
        <div>
          <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
            MEDITERRANIAN<span className="font-extralight">hotel</span>
          </h1>
        </div>
        <ul className="hidden md:flex">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>Our Numbers</li>

          <li>Contacts</li>
        </ul>
        <div className="hidden md:flex">
          <BsPerson size={22} />
          <Link to="/login">
            <span className="font-extralight">Sign up/Sign In</span>
          </Link>
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
              <button className="my-6">Sign up/Sign In</button>
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
