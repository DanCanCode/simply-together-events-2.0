import React from "react";
import headText from "./partyRentals.png";
import welcomesign1 from "./welcome-sign-1.jpg";
import welcomesign2 from "./welcome-sign-2.jpg";
import barcart1 from "./bar-cart-1.jpg";
import barcart2 from "./bar-cart-2.jpg";
import mirror from "./mirror.jpg";
import umbrella from "./umbrella-1.jpg";
import grass1 from "./grass-backdrop-1.jpg";
import grass2 from "./grass-backdrop-2.jpg";
import fairy1 from "./fairy-backdrop-1.jpg";
import fairy2 from "./fairy-backdrop-2.jpg";

const PartyRentals = () => {
  return (
    <main>
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

      <section className="mx-auto my-10 w-[50vw] rounded-lg">
        <details className="open:bg-[#800F2F] transition duration-300 ease-in-out">
          <summary className="px-5 py-3 text-lg cursor-pointer">
            Welcome Sign | $125
          </summary>

          <div className="bg-white px-5 py-3">
            <div className="grid grid-cols-2 gap-2">
              <img src={welcomesign1} alt="welcome sign 1" />
              <img src={welcomesign2} alt="welcome sign 2" />
            </div>

            <p>handprinted acrylic sign (font & color of choice)</p>
            <p>rose gold or gold easel</p>
            <p>optional white floral swag</p>
          </div>
        </details>

        <details className="open:bg-[#800F2F] transition duration-300 ease-in-out">
          <summary className="px-5 py-3 text-lg cursor-pointer">
            Easel | $15
          </summary>

          <div className="bg-white px-5 py-3">
            <p>available in rose gold or gold</p>
            <p>holds up to 24”x36” and 8 lbs</p>
          </div>
        </details>

        <details className="open:bg-[#800F2F] transition duration-300 ease-in-out">
          <summary className="px-5 py-3 text-lg cursor-pointer">
            Mirror & Easel | $50
          </summary>

          <div className="bg-white px-5 py-3">
            <div className="grid grid-cols-1">
              <img src={mirror} alt="mirror" />
            </div>

            <p>40” lightweight easel</p>
            <p>mirror comes plain</p>
            <p>* inquire for custom design, greenery not included</p>
          </div>
        </details>

        <details className="open:bg-[#800F2F] transition duration-300 ease-in-out">
          <summary className="px-5 py-3 text-lg cursor-pointer">
            Bar Cart | $70
          </summary>

          <div className="bg-white px-5 py-3">
            <div className="grid grid-cols-2 gap-2">
              <img src={barcart1} alt="bar cart 1" />
              <img src={barcart2} alt="bar cart 2" />
            </div>

            <p>optional white floral attached</p>
            <p>With Add-ons | $125</p>
            <p>ice bucket</p>
            <p>drink sign</p>
            <p>6 champagne glasses</p>
            <p>custom photo printed (5x7)</p>
          </div>
        </details>

        <details className="open:bg-[#800F2F] transition duration-300 ease-in-out">
          <summary className="px-5 py-3 text-lg cursor-pointer">
            Polaroid Camera | $20
          </summary>

          <div className="bg-white px-5 py-3">
            <p>Includes 10 photos that you get to keep</p>
          </div>
        </details>

        <details className="open:bg-[#800F2F] transition duration-300 ease-in-out">
          <summary className="px-5 py-3 text-lg cursor-pointer">
            White Umbrella w/ Stand | $30
          </summary>

          <div className="bg-white px-5 py-3">
            <div className="grid grid-cols-1">
              <img src={umbrella} alt="Umbrella" />
            </div>
          </div>
        </details>

        <details className="open:bg-[#800F2F] transition duration-300 ease-in-out">
          <summary className="px-5 py-3 text-lg cursor-pointer">
            Grass Backdrop w/ Sign| $350
          </summary>

          <div className="bg-white px-5 py-3">
            <div className="grid grid-cols-2 gap-2">
              <img src={grass1} alt="grass backdrop 1" />
              <img src={grass2} alt="grass backdrop 2" />
            </div>

            <p>includes LED sign (Better Together or Blessed)</p>
            <p>we can attach your own sign</p>
            <p>*inquire price for bigger size</p>
          </div>
        </details>

        <details className="open:bg-[#800F2F] transition duration-300 ease-in-out">
          <summary className="px-5 py-3 text-lg cursor-pointer">
            Fairy Light Backdrop w/ Eucalyptus Garland | $450
          </summary>

          <div className="bg-white px-5 py-3">
            <div className="grid grid-cols-2 gap-2">
              <img src={fairy1} alt="fairy backdrop 1" />
              <img src={fairy2} alt="fairy backdrop 2" />
            </div>

            <p>*inquire price for bigger size</p>
          </div>
        </details>
      </section>
    </main>
  );
};

export default PartyRentals;
