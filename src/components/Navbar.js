import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaPinterest } from "react-icons/fa";
import logo from "./logo.png";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const changeDisplay = () => {
    if (width >= 640) {
      return (
        <nav className="flex items-center gap-3 lg:gap-4">
          <NavLink
            to="/"
            className="text-white hover:text-[#da0041] tracking-wide text-sm lg:text-base"
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-[#da0041] tracking-wide text-sm lg:text-base"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/services"
            className="text-white hover:text-[#da0041] tracking-wide text-sm lg:text-base"
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/gallery"
            className="text-white hover:text-[#da0041] tracking-wide text-sm lg:text-base"
          >
            GALLERY
          </NavLink>
          <NavLink
            to="/collaboration"
            className="text-white hover:text-[#da0041] tracking-wide text-sm lg:text-base"
          >
            COLLABORATION
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white hover:text-[#da0041] tracking-wide text-sm lg:text-base"
          >
            CONTACT
          </NavLink>

          {width > 750 && (
            <>
              <span className="border-r-[1px] border-white mx-2 h-8"></span>
              <a
                href="https://www.instagram.com/simplytogether.e/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#da0041]"
              >
                <FaInstagram className="text-lg lg:text-xl" />
              </a>
              <a
                href="https://www.pinterest.com/simplytogetherevents/_created/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#da0041]"
              >
                <FaPinterest className="text-lg lg:text-xl" />
              </a>
            </>
          )}
        </nav>
      );
    } else {
      return (
        <nav>
          <section className="MOBILE-MENU">
            <div
              className="HAMBURGER-ICON space-y-2 cursor-pointer group"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 bg-white group-hover:bg-[#da0041]"></span>
              <span className="block h-0.5 w-8 bg-white group-hover:bg-[#da0041]"></span>
              <span className="block h-0.5 w-8 bg-white group-hover:bg-[#da0041]"></span>
            </div>

            {isNavOpen && (
              <div
                className={`${
                  isNavOpen ? "showMenuNav" : "hideMenuNav"
                } animate-navslide bg-gradient-to-b from-[#800F2F] to-[#FF8FA3]`}
              >
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8 cursor-pointer"
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >
                  <svg
                    className="h-8 w-8 text-[#FFF0F3]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>

                <div className="MENU-LINK-MOBILE-OPEN flex flex-col items-start gap-5  mt-24 ml-8 truncate">
                  <NavLink
                    to="/"
                    className="font-medium tracking-wider text-2xl text-[#FFF0F3]"
                    onClick={() => setIsNavOpen(false)}
                  >
                    HOME
                  </NavLink>

                  <NavLink
                    to="/about"
                    className="font-medium tracking-wider text-2xl text-[#FFF0F3]"
                    onClick={() => setIsNavOpen(false)}
                  >
                    ABOUT
                  </NavLink>

                  <NavLink
                    to="/services"
                    className="font-medium tracking-wider text-2xl text-[#FFF0F3]"
                    onClick={() => setIsNavOpen(false)}
                  >
                    SERVICES
                  </NavLink>

                  <NavLink
                    to="/gallery"
                    className="font-medium tracking-wider text-2xl text-[#FFF0F3]"
                    onClick={() => setIsNavOpen(false)}
                  >
                    GALLERY
                  </NavLink>

                  <NavLink
                    to="/collaboration"
                    className="font-medium tracking-wider text-2xl text-[#FFF0F3]"
                    onClick={() => setIsNavOpen(false)}
                  >
                    COLLABORATION
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className="font-medium tracking-wider text-2xl text-[#FFF0F3]"
                    onClick={() => setIsNavOpen(false)}
                  >
                    CONTACT
                  </NavLink>
                </div>

                <div className="absolute bottom-3 left-[40%]">
                  <img className="w-16" src={logo} alt="site logo" />
                </div>
              </div>
            )}
            {isNavOpen && <div className="navBlur"></div>}
          </section>

          <style>{`
            .navBlur {
                display: block;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                backdrop-filter: blur(4px);
                background-color: hsla(0,0%,7%,.36);
            }

            .hideMenuNav {
                display: none;
                transition: .25s;
            }

            .showMenuNav {
                display: block;
               
                position: absolute;
                width: 80%;
                height: 100vh;
                top: 0;
                left: 0;
                z-index: 10;
            `}</style>
        </nav>
      );
    }
  };

  return (
    <header className="py-2 bg-black sticky top-0 z-50">
      <div className="grid grid-cols-3 sm:grid-cols-2 sm:place-items-center">
        {width < 640 && (
          <div className="pl-6 self-center">{changeDisplay()}</div>
        )}
        <div className="justify-self-center sm:justify-self-start sm:pl-8">
          <Link to="/">
            <img className="lg:w-20 w-16" src={logo} alt="site logo" />
          </Link>
        </div>

        {width >= 640 && (
          <div className="sm:justify-self-end sm:pr-8 sm:pl-0">
            {changeDisplay()}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
