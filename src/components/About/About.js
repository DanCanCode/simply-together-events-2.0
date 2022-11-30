import React from "react";
import samantha from "./samantha.jpg";
import welcomeText from "./aboutWelcomeText.png";
import signature from "./ownerSignature.png";
import aboutHeader from "./about.png";

const About = () => {
  return (
    <main>
      <header className="grid grid-cols-1 place-items-center my-10 mx-12">
        <img
          src={aboutHeader}
          alt="services"
          className="animate-[fadein_2s_ease_1] md:w-72 sm:w-56 w-44"
        />
      </header>

      <section className="relative flex xs:flex-row flex-col items-center justify-center m-10 gap-2">
        <div className="relative flex xs:flex-row flex-row-reverse items-center">
          <img src={samantha} alt="samantha" className="md:w-96 sm:w-72 w-52" />
          <img
            src={welcomeText}
            alt="welcome to simply togehter events"
            className="xs:relative absolute md:w-40 sm:w-28 xs:w-20 w-28 bottom-64 right-32 md:bottom-56 sm:bottom-40 xs:bottom-32 xs:right-9 sm:right-12 lg:right-10 md:right-20"
          />
        </div>

        <div className="my-6 xs:my-0 relative md:right-6 lg:right-10 max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-full xs:w-6/12 md:w-5/12 overflow-y-auto overscroll-contain flex flex-col gap-4">
          <p className="md:text-base text-sm">
            From a young age, I wanted nothing more than to entertain and have
            people around. From hangouts to parties, I always loved being able
            to go above and beyond in what I create. Being able to gather
            everyone together for an event and see the look on their faces shows
            me how beautifully things can come together. This made me realize I
            wanted to share that with the world.
          </p>
          <p className="md:text-base text-sm">
            I welcome you Simply Together Events. I offer event planning, event
            design, luxury picnics, and party rentals. For whatever you may need
            for your upcoming event, I am here to do it all. I am happy that my
            wide expansion of services can carter to some of the biggest events
            and most intimate moments with your loved ones. I am here to provide
            a stress-free, fun, and beautiful gatherings for anyone.
          </p>
          <div className="flex flex-col">
            <p className="md:text-base text-sm">With Love,</p>
            <img
              src={signature}
              alt="samantha espinal"
              className="w-80 self-center"
            />
            <p className="text-center md:text-base text-sm">CEO | Founder</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
