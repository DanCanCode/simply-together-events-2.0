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
      <div className="relative overflow-hidden h-[65vh] mt-12">
        <div className="relative flex items-center max-w-full h-4/6">
          <img
            className="animate-slideup  relative top-14 left-0 w-80 object-cover"
            src={photo0}
            alt="ste1"
          />
          <img
            className="animate-slidedown  relative w-60 top-8 right-10 z-20 object-cover"
            src={photo1}
            alt="ste2"
          />
          <img
            className="animate-slideup  relative w-56 top-32 right-16 z-10 object-cover"
            src={photo2}
            alt="ste3"
          />
          <img
            className="animate-slidedown  relative w-96 object-cover top-16 right-32"
            src={photo3}
            alt="ste4"
          />
          <img
            className="w-64 animate-slideup  object-cover relative z-10 top-20 right-40"
            src={photo4}
            alt="ste5"
          />
          <img
            className="w-64 animate-slidedown  object-cover relative top-4 right-56"
            src={photo5}
            alt="ste6"
          />
        </div>

        <img
          src={logo}
          alt="simplytogetherevents"
          className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-10/12 z-40"
        />
      </div>

      <div className="text-center mt-4 animate-fadein">
        <p className="font-normal text-2xl">
          simply bringing everyone together the most beautiful way we know how.
        </p>
        <Link
          to="/services"
          className="font-medium mt-4 static p-3 bg-[#A4133C] hover:bg-[#800F2F] active:scale-90 inline-block text-white rounded-md"
        >
          learn more
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
