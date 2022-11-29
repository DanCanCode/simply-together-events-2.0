import React from "react";
import samantha from "./samantha.jpg";
import welcomeText from "./aboutWelcomeText.png";
import signature from "./ownerSignature.png";

const About = () => {
  return (
    <main>
      <header className="grid grid-cols-1 place-items-center mt-10 mx-12">
        <h1 className="animate-[fadein_2s_ease_1] md:w-72 sm:w-56 w-44">
          About
        </h1>
      </header>

      <section className="relative flex items-center justify-center m-10 gap-2">
        <div className="relative flex items-center">
          <img src={samantha} alt="samantha" className="md:w-96 w-72" />
          <img
            src={welcomeText}
            alt="welcome to simply togehter events"
            className="relative w-40 bottom-56 lg:right-10 md:right-20"
          />
        </div>

        <div className="relative md:right-6 lg:right-10 md:max-h-[60vh] lg:max-h-full w-5/12 overflow-y-auto overscroll-contain flex flex-col gap-4">
          <p>
            From a young age, I wanted nothing more than to entertain and have
            people around. From hangouts to parties, I always loved being able
            to go above and beyond in what I create. Being able to gather
            everyone together for an event and see the look on their faces shows
            me how beautifully things can come together. This made me realize I
            wanted to share that with the world.
          </p>
          <p>
            I welcome you Simply Together Events. I offer event planning, event
            design, luxury picnics, and party rentals. For whatever you may need
            for your upcoming event, I am here to do it all. I am happy that my
            wide expansion of services can carter to some of the biggest events
            and most intimate moments with your loved ones. I am here to provide
            a stress-free, fun, and beautiful gatherings for anyone.
          </p>
          <div>
            <p>With Love,</p>
            <img
              src={signature}
              alt="samantha espinal"
              className="w-80 self-center"
            />
            <p className="text-center">CEO | Founder</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
