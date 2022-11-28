import React from "react";
import { Link } from "react-router-dom";
import logo from "./homepageText.png";
import photo0 from "./photo0.jpg";
import photo1 from "./photo1.jpg";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";
import photo4 from "./photo4.jpg";
import photo5 from "./photo5.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="relative overflow-hidden md:h-[65vh] mt-12">
        <div className="relative flex items-center max-w-full md:h-4/6">
          <img
            className="animate-slideup relative md:top-14 xs:bottom-3 left-0 md:w-80 xs:w-48 w-28 object-cover"
            src={photo0}
            alt="ste1"
          />
          <img
            className="animate-slidedown relative md:w-60 xs:w-28 w-16 md:top-8 xs:bottom-8 bottom-4 xs:right-10 right-4 z-20 object-cover"
            src={photo1}
            alt="ste2"
          />
          <img
            className="animate-slideup relative md:w-56 xs:w-24 w-14 md:top-32 xs:top-12 top-6 xs:right-16 right-6 z-10 object-cover"
            src={photo2}
            alt="ste3"
          />
          <img
            className="animate-slidedown relative md:w-96 xs:w-56 w-32 object-cover md:top-16 md:right-32 right-10 xs:right-24"
            src={photo3}
            alt="ste4"
          />
          <img
            className="md:w-64 xs:w-36 w-20 animate-slideup object-cover relative z-10 md:top-20 xs:top-2 md:right-40 right-14 xs:right-32"
            src={photo4}
            alt="ste5"
          />
          <img
            className="md:w-64 xs:w-36 w-16 animate-slidedown object-cover relative md:top-4 xs:bottom-10 bottom-8 md:right-56 xs:right-36 right-20"
            src={photo5}
            alt="ste6"
          />
        </div>

        <img
          src={logo}
          alt="simplytogetherevents"
          className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-screen sm:w-10/12 z-40"
        />
      </div>

      <div className="text-center mt-4 mx-6 animate-fadein">
        <p className="tracking-wide text-md font-medium sm:text-lg md:font-normal md:text-xl lg:font-normal lg:text-2xl">
          simply bringing everyone together the most beautiful way we know how.
        </p>
        <Link
          to="/services"
          className="font-medium lg:text-base sm:text-sm text-xs mt-4 p-2 sm:p-3 bg-[#A4133C] hover:bg-[#800F2F] active:scale-90 inline-block text-white rounded-md"
        >
          learn more
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
