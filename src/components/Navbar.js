import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const changeDisplay = () => {
    console.log(width);
    if (width >= 640) {
      return (
        <>
          <NavLink to="/" className="text-white">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white">
            About
          </NavLink>
          <NavLink to="/about" className="text-white">
            Services
          </NavLink>
          <NavLink to="/about" className="text-white">
            Colaboration
          </NavLink>
        </>
      );
    } else {
      return <FiMenu className="text-white" />;
    }
  };

  return (
    <div className="py-2 bg-black">
      <div className="flex flex-row-reverse items-center justify-center sm:justify-start sm:flex-row">
        <div className="justify-self-center  sm:justify-self-start sm:pl-8">
          <Link to="/">
            <img className="w-20 bg-white" src={logo} alt="site logo" />
          </Link>
        </div>

        <div className="justify-self-start sm:justify-self-end">
          {changeDisplay()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
