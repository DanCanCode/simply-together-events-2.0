import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const NotFound = () => {
  return (
    <div className="grid grid-cols-1 gap-6 place-items-center my-10 text-center mx-10">
      <img className="sm:w-[40vw]" src={logo} alt="simply together events" />
      <h1 className="font-semibold text-6xl">404</h1>
      <p className="sm:text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="font-medium lg:text-base text-sm p-3 bg-[#A4133C] hover:bg-[#800F2F] active:scale-90 inline-block text-white rounded-md"
      >
        return home
      </Link>
    </div>
  );
};

export default NotFound;
