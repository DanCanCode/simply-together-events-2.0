import React, { useState } from "react";
import headText from "./partyRentals.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import welcomesign1 from "./welcome-sign-1.jpg";
import welcomesign2 from "./welcome-sign-2.jpg";
import barcart2 from "./bar-cart-2.jpg";
import mirror from "./mirror.jpg";
import polaroid from "./polaroid.jpg";
import umbrella from "./umbrella-1.jpg";
import grass1 from "./grass-backdrop-1.jpg";
import fairy1 from "./fairy-backdrop-1.jpg";

const rentals = [
  {
    title: "Welcome Sign",
    image: welcomesign1,
    price: "$125",
    description: `Handprinted acrylic sign (font & color of choice). Rose gold or
  gold easel, optional white floral swag`,
  },
  {
    title: "Easel",
    image: welcomesign2,
    price: "$15",
    description: `Available in rose gold or gold. Holds up to 24”x36” and 8 lbs. Welcome sign not included.`,
  },
  {
    title: "Bar Cart",
    image: barcart2,
    price: "$70",
    addOn: "$125",
    description: `Optional white floral attached. Ice bucket, Drink sign, 6 champagne glasses, Custom photo printed (5x7)`,
  },
  {
    title: "Mirror & Easel",
    image: mirror,
    price: "$50",
    description: `40” lightweight easel. Mirror comes plain. Inquire for custom design, greenery not included`,
  },
  {
    title: "Polaroid Camera",
    image: polaroid,
    price: "$20",
    description: `Includes 10 photos that you get to keep!`,
  },
  {
    title: "White Umbrella w/ Stand",
    image: umbrella,
    price: "$30",
    description: `An outdoor umbrella`,
  },
  {
    title: "Grass Backdrop w/ Sign",
    image: grass1,
    price: "$350",
    description: `Includes LED sign (Better Together or Blessed). We can attach your own sign. Inquire price for bigger size`,
  },
  {
    title: "Fairy Light Backdrop w/ Eucalyptus Garland",
    image: fairy1,
    price: "$450",
    description: `Inquire price for bigger size`,
  },
];

const PartyRentals = () => {
  const [current, setCurrent] = useState(0);

  const handlePrevious = () => {
    setCurrent((current + rentals.length - 1) % rentals.length);
  };

  const handleNext = () => {
    setCurrent((current + 1) % rentals.length);
  };

  return (
    <main className="h-screen">
      <header className="grid grid-cols-1 gap-3 place-items-center mt-10 mx-12">
        <img
          src={headText}
          alt="galleries"
          className="animate-[fadein_2s_ease_1] md:w-72 sm:w-56 w-44"
        />
        <h1 className="text-center text-xs xs:text-sm sm:text-base">
          view items to rent out
        </h1>
      </header>

      <section className="mx-auto my-10">
        <div className="CONTAINER flex justify-center items-center space-x-12">
          <div className="cursor-pointer hover:text-[#da0041]">
            <FaArrowLeft
              fontSize={24}
              onClick={() => {
                handlePrevious();
              }}
            />
          </div>

          <div className="md:block hidden">
            <img
              src={
                rentals[current > 0 ? current - 1 : rentals.length - 1].image
              }
              alt="welcome sign 1"
              className="w-36 opacity-60"
            />
          </div>

          <div className="flex flex-col items-center space-y-4">
            <img
              key={rentals[current].image}
              src={rentals[current].image}
              alt="welcome sign 1"
              className="xs:max-w-xs shadow-xl animate-grow"
            />
            <div className="text-center xs:max-w-xs">
              <p className="font-semibold text-xl">{rentals[current].title}</p>
              <p className="font-medium text-lg">{`Price: ${rentals[current].price}`}</p>
              {rentals[current].addOn && (
                <p>With Add-ons: {rentals[current].addOn}</p>
              )}
              <p className="mt-2">{rentals[current].description}</p>
            </div>
          </div>

          <div className="md:block hidden">
            <img
              src={
                rentals[current < rentals.length - 1 ? current + 1 : 0].image
              }
              alt="welcome sign 1"
              className="w-36 opacity-60"
            />
          </div>

          <div className="cursor-pointer hover:text-[#da0041]">
            <FaArrowRight
              fontSize={24}
              onClick={() => {
                handleNext();
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PartyRentals;
