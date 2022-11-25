import React from "react";
import { Link } from "react-router-dom";
import photo0 from "../homepagePhotos/photo0.jpg";
import photo1 from "../homepagePhotos/photo1.jpg";
import photo2 from "../homepagePhotos/photo2.jpg";
import photo3 from "../homepagePhotos/photo3.jpg";
import photo4 from "../homepagePhotos/photo4.jpg";
import photo5 from "../homepagePhotos/photo5.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="relative overflow-hidden max-w-full max-h-max mt-12">
        <div className="static flex items-center overflow-hidden max-w-full">
          <img
            className="absolute bottom-auto left-0 w-80 object-cover"
            src={photo0}
            alt="ste1"
          />
          <img
            className="absolute w-64 bottom-auto left-24 object-cover"
            src={photo1}
            alt="ste2"
          />
          <img className="absolute w-64 object-cover" src={photo2} alt="ste3" />
          <img className="w-96 object-cover" src={photo3} alt="ste4" />
          <img className="w-64 h-fit object-cover" src={photo4} alt="ste5" />
          <img className="w-64 h-fit object-cover" src={photo5} alt="ste6" />
        </div>

        <div className="text-center mt-4">
          <p>
            simply bringing everyone together the most beautiful way we know
            how.
          </p>
          <Link
            to="/services"
            className="mt-4 static p-3 bg-red-800 inline-block text-white rounded-md"
          >
            learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
