import React from "react";
import { Link } from "react-router-dom";
import logo from "../homepagePhotos/homepageText.png";
import photo0 from "../homepagePhotos/photo0.jpg";
import photo1 from "../homepagePhotos/photo1.jpg";
import photo2 from "../homepagePhotos/photo2.jpg";
import photo3 from "../homepagePhotos/photo3.jpg";
import photo4 from "../homepagePhotos/photo4.jpg";
import photo5 from "../homepagePhotos/photo5.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="relative overflow-hidden h-[65vh] mt-12">
        <div className="relative flex items-center max-w-full h-4/6">
          <img
            className="relative top-14 left-0 w-80 object-cover"
            src={photo0}
            alt="ste1"
          />
          <img
            className="relative w-60 top-8 right-10 z-20 object-cover"
            src={photo1}
            alt="ste2"
          />
          <img
            className="relative w-56 top-32 right-16 z-10 object-cover"
            src={photo2}
            alt="ste3"
          />
          <img
            className="relative w-96 object-cover top-16 right-32"
            src={photo3}
            alt="ste4"
          />
          <img
            className="w-64  object-cover relative z-10 top-20 right-40"
            src={photo4}
            alt="ste5"
          />
          <img
            className="w-64 object-cover relative top-4 right-56"
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

      <div className="text-center mt-4">
        <p>
          simply bringing everyone together the most beautiful way we know how.
        </p>
        <Link
          to="/services"
          className="mt-4 static p-3 bg-red-800 inline-block text-white rounded-md"
        >
          learn more
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
