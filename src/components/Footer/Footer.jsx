import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const buttonStyle =
    "border border-gray-300 p-2  transition duration-300 ease-in-out";
  const iconContainerStyle = {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="bg-[#72214a] pt-16 pb-5">
      <div className="grid grid-cols-4 p-5 max-md:grid-cols-2 gap-10 max-sm:grid-cols-1 ">
        <div className="flex flex-col gap-3 text-white justify-center">
          <h2 className="text-3xl font-bold">Visa Navigator</h2>
          <p>One of the easiest platform to apply world wide Visa. You can follow our social platform.</p>
          <div className="flex  gap-4">
            <button className={buttonStyle} style={iconContainerStyle}>
              <Link to="/facebook">
                <FaFacebookF className="text-base" />
              </Link>
            </button>
            <button className={buttonStyle} style={iconContainerStyle}>
              <Link to="/twitter">
                <FaTwitter className="text-base" />
              </Link>
            </button>
            <button className={buttonStyle} style={iconContainerStyle}>
              <Link to="/linkedin">
                <FaLinkedinIn className="text-base" />
              </Link>
            </button>
            <button className={buttonStyle} style={iconContainerStyle}>
              <Link to="/instagram">
                <FaInstagram className="text-base" />
              </Link>
            </button>
          </div>
        </div>
        <div className=" text-white">
          <h2 className="text-2xl my-2 font-bold">Important Links</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="./">Home</Link>
            </li>
            <li>
              <Link to="/applyOnline">Apply Online</Link>
            </li>
            <li>
              <Link to="/allvisas">All Visa</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="text-white flex flex-col gap-2">
          <h2 className="text-2xl mb-2 font-bold">Company Information</h2>
          <p className="text-[20px]">Visa Navigator Limited</p>
          <p>Phone: +880123456789</p>
          <p>Email: visa@visanavigator.com</p>
          <p>Address: Rajbari, Dhaka, Bangladesh</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl text-white font-bold">Newsletter</h2>
          <p className="text-white">Submit your email to get latest news from us.</p>
          <div className="flex flex-col">
          <form className="flex w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
        >
          Subscribe
        </button>
      </form>
          </div>
        </div>
      </div>
     <hr className="mt-20 w-4/5 mx-auto"></hr>
     <div className="text-center text-[18px] text-white">
        <p>Copyright © {new Date().getFullYear()} VisaNavigator LTD. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
