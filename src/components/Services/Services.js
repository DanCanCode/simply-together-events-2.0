import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import headText from "./services.png";
import servicePhoto0 from "./servicePhoto0.jpg";
import servicePhoto1 from "./servicePhoto1.jpg";
import serviceVideo2 from "./serviceVideo2.mp4";
import servicePhoto3 from "./servicePhoto3.jpg";
import servicePhoto4 from "./servicePhoto4.jpg";

const Services = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(".SLIDE-IN");
    let options = {
      rootMargin: "0px",
      threshold: 0.25,
    };

    let callback = (entries) => {
      entries.forEach((entry, index) => {
        let target = entry.target;

        if (entry.intersectionRatio >= 0.25) {
          if (target.classList.contains("SLIDE-REVERSE")) {
            target.classList.add("animate-slideinRight");
            target.classList.remove("opacity-0");
          } else {
            target.classList.add("animate-slideinLeft");
            target.classList.remove("opacity-0");
          }
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);
    targets.forEach((target, index) => {
      observer.observe(target);
    });
  }, []);

  return (
    <main>
      <header className="grid grid-cols-1 gap-3 place-items-center mt-10 mx-12">
        <img
          src={headText}
          alt="services"
          className="animate-[fadein_2s_ease_1] md:w-72 sm:w-56 w-44"
        />

        {width > 500 && (
          <nav className="flex flex-wrap gap-2 md:gap-3 items-center justify-center text-center">
            <a
              href="#eventDesign"
              className="hover:text-[#da0041] md:text-base text-sm"
            >
              event design
            </a>
            <a
              href="#eventPlanning"
              className="hover:text-[#da0041] md:text-base text-sm"
            >
              event planning
            </a>
            <a
              href="#eventCreation"
              className="hover:text-[#da0041] md:text-base text-sm"
            >
              event creation
            </a>
            <a
              href="#luxuryPicnics"
              className="hover:text-[#da0041] md:text-base text-sm"
            >
              luxury picnics
            </a>
            <a
              href="#eventCreation"
              className="hover:text-[#da0041] md:text-base text-sm"
            >
              party rentals
            </a>
          </nav>
        )}
      </header>

      <section
        id="SERVICE_VIEW"
        className="grid grid-cols-1 gap-14 sm:gap-24 my-12 sm:my-16 place-items-center overflow-hidden"
      >
        <article id="eventDesgin" className="flex gap-10 justify-center">
          <img
            src={servicePhoto0}
            alt="event design"
            className="SLIDE-IN w-32 xs:w-48 sm:w-64 md:w-80 opacity-0"
          ></img>

          <div className="max-h-44 xs:max-h-60 sm:max-h-72 md:max-h-96 w-5/12 overflow-y-auto overscroll-contain flex flex-col gap-4">
            <h2 className="text-base xs:text-lg sm:text-xl tracking-wide">
              Event Design
            </h2>
            <p className="sm:text-base xs:text-xs text-[10px]">
              For any event you are having, we will brainstorm together that
              vision of yours and bring it to life. This is one of the most fun
              parts of cultivating your day. We will make sure that every detail
              is executed and create an aesthetic that you’ll remember forever.
            </p>
            <p className="sm:text-base xs:text-xs text-[10px]">
              We bring in all sorts of decor to bring your event alive. We work
              with florals, branding and stationery work, to all different sorts
              of decor you want for your event. From centerpieces, to table
              design, backdrops, lighting and more; we make sure to pay
              attention to detail and your event unique and fitted to your style
              that you’ll love.
            </p>
          </div>
        </article>

        <article
          id="eventPlanning"
          className="flex flex-row-reverse gap-10 justify-center"
        >
          <img
            src={servicePhoto1}
            alt="event planning"
            className="SLIDE-IN SLIDE-REVERSE w-32 xs:w-48 sm:w-64 md:w-80 opacity-0"
          ></img>

          <div className="max-h-44 xs:max-h-60 sm:max-h-72 md:max-h-96 w-5/12 overflow-y-auto overscroll-contain flex flex-col gap-4">
            <h2 className="text-base xs:text-lg sm:text-xl tracking-wide">
              Event Planning
            </h2>

            <p className="sm:text-base xs:text-xs text-[10px]">
              We offer full service planning for any event you may have. From an
              entire wedding, engagement parties, gala’s, charity event’s, and
              much more. We will be here step by step to help you through the
              process of planning and cultivating your event.
            </p>
            <p className="sm:text-base xs:text-xs text-[10px]">
              We are your go to contact for bringing in your vendors, planning a
              timeline for the day, breaking down your budget, and taking over
              any of the stress you may have as we move through the process.
            </p>
            <p className="sm:text-base xs:text-xs text-[10px]">
              Day of Coordination is another service we offer. You may already
              have the big things handled and just need someone to take over the
              logistics and make sure everything is going according to plan. I
              bring along myself and an assistant to make sure we are with you
              throughout the day and working alongside with every vendor to make
              things go according to plan.
            </p>
          </div>
        </article>

        <article id="eventCreation" className="flex gap-10 justify-center">
          <div className="overflow-hidden w-32 xs:w-48 sm:w-64 md:w-80">
            <video
              autoPlay
              muted
              loop
              className="SLIDE-IN object-cover object-center opacity-0"
            >
              <source src={serviceVideo2} type="video/mp4" />
            </video>
          </div>

          <div className="max-h-44 xs:max-h-60 sm:max-h-72 md:max-h-96 w-5/12 overflow-y-auto overscroll-contain flex flex-col gap-4">
            <h2 className="text-base xs:text-lg sm:text-xl tracking-wide">
              Event Creation
            </h2>

            <p className="sm:text-base xs:text-xs text-[10px]">
              After any special event, do you ever wish you could have some of
              those special moments ready for you right when the night ends?
              What we do is take your phone during the duration of your event
              and capture moments in short-videos and photos. You don’t have to
              worry about any of your guest or even Maid of Honor being
              responsible for this throughout your event and let them enjoy the
              evening with you. Now you can look at some of those special
              moments on your honeymoon and reminisce on the night even sooner.
            </p>

            <div className="mt-2">
              <Link
                to="/contact"
                className="sm:font-medium md:text-base sm:text-sm xs:text-xs text-[10px] p-2 sm:p-3 bg-[#A4133C] hover:bg-[#800F2F] active:scale-90  text-white rounded-md"
              >
                contact for pricing
              </Link>
            </div>
          </div>
        </article>

        <article
          id="luxuryPicnics"
          className="flex gap-10 flex-row-reverse justify-center"
        >
          <img
            src={servicePhoto3}
            alt="luxury picnics"
            className="SLIDE-IN SLIDE-REVERSE w-32 xs:w-48 sm:w-64 md:w-80 opacity-0"
          ></img>

          <div className="max-h-44 xs:max-h-60 sm:max-h-72 md:max-h-96 w-5/12 overflow-y-auto overscroll-contain flex flex-col gap-4">
            <h2 className="text-base xs:text-lg sm:text-xl tracking-wide">
              Luxury Picnics
            </h2>

            <p className="sm:text-base xs:text-xs text-[10px]">
              Perfect for any birthday party, bridal shower, engagement, or any
              intimate event. We offer luxury picnics for up to 2-20 people. You
              pick the location (indoor or outdoor) and we bring it to life! We
              work alongside you to create a luxury picnic to a color scheme and
              theme of your choice.
            </p>
            <div className="mt-2">
              <Link
                to="/"
                className="sm:font-medium md:text-base sm:text-sm xs:text-xs text-[10px] p-2 sm:p-3 bg-[#A4133C] hover:bg-[#800F2F] active:scale-90  text-white rounded-md"
              >
                view pricing
              </Link>
            </div>
          </div>
        </article>

        <article id="partyRentals" className="flex gap-10 justify-center">
          <img
            src={servicePhoto4}
            alt="party rentals"
            className="SLIDE-IN w-32 xs:w-48 sm:w-64 md:w-80 opacity-0"
          ></img>

          <div className="max-h-44 xs:max-h-60 sm:max-h-72 md:max-h-96 w-5/12 overflow-y-auto overscroll-contain flex flex-col gap-4">
            <h2 className="text-base xs:text-lg sm:text-xl tracking-wide">
              Party Rentals
            </h2>
            <p className="sm:text-base xs:text-xs text-[10px]">
              Looking for a backdrop, welcome sign, or some last minute decor to
              bring your event alive? Check out our gallery below to view
              rentals we have. No event design or planning fee is required. We
              will rent out the item to you with full delivery*, set-up*, and
              clean-up*.
            </p>
            <p className="opacity-60 sm:text-sm xs:text-[10px] text-[8px]">
              *additonal fees applied after inquiry. fees based on location.
            </p>
            <div className="mt-2">
              <Link
                to="/party-rentals"
                className="sm:font-medium md:text-base sm:text-sm xs:text-xs text-[10px] p-2 sm:p-3 bg-[#A4133C] hover:bg-[#800F2F] active:scale-90  text-white rounded-md"
              >
                party rentals
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Services;
