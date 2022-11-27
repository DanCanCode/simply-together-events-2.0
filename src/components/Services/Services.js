import React from "react";
import { Link } from "react-router-dom";
import headText from "./services.png";
import servicePhoto0 from "./servicePhoto0.jpg";
import servicePhoto1 from "./servicePhoto1.jpg";
import serviceVideo2 from "./serviceVideo2.mp4";
import servicePhoto3 from "./servicePhoto3.jpg";
import servicePhoto4 from "./servicePhoto4.jpg";

const Services = () => {
  return (
    <main>
      <header className="grid grid-cols-1 gap-3 place-items-center mt-10 mx-12">
        <img
          src={headText}
          alt="services"
          className="animate-fadein sm:w-72 w-56"
        />

        <nav className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center text-center">
          <a
            href="#eventDesign"
            className="hover:text-[#da0041] sm:text-base text-sm"
          >
            event design
          </a>
          <a
            href="#eventPlanning"
            className="hover:text-[#da0041] sm:text-base text-sm"
          >
            event planning
          </a>
          <a
            href="#eventCreation"
            className="hover:text-[#da0041] sm:text-base text-sm"
          >
            event creation
          </a>
          <a
            href="#luxuryPicnics"
            className="hover:text-[#da0041] sm:text-base text-sm"
          >
            luxury picnics
          </a>
          <a
            href="#eventCreation"
            className="hover:text-[#da0041] sm:text-base text-sm"
          >
            party rentals
          </a>
        </nav>
      </header>

      <section className="grid grid-cols-1 gap-16 mt-16 overflow-hidden">
        <article id="eventDesgin" className="flex gap-10">
          <img src={servicePhoto0} alt="event design" className="w-80"></img>

          <div className="max-h-96 w-5/12 overflow-y-auto overscroll-contain grid grid-cols-1 gap-4">
            <h2 className="text-lg">Event Design</h2>
            <p>
              For any event you are having, we will brainstorm together that
              vision of yours and bring it to life. This is one of the most fun
              parts of cultivating your day. We will make sure that every detail
              is executed and create an aesthetic that you’ll remember forever.
            </p>
            <p>
              We bring in all sorts of decor to bring your event alive. We work
              with florals, branding and stationery work, to all different sorts
              of decor you want for your event. From centerpieces, to table
              design, backdrops, lighting and more; we make sure to pay
              attention to detail and your event unique and fitted to your style
              that you’ll love.
            </p>
          </div>
        </article>

        <article id="eventPlanning" className="flex gap-10">
          <img src={servicePhoto1} alt="event planning" className="w-80"></img>

          <div className="max-h-96 w-5/12 overflow-y-auto overscroll-contain grid grid-cols-1 gap-4">
            <h2 className="text-lg">Event Planning</h2>

            <p>
              We offer full service planning for any event you may have. From an
              entire wedding, engagement parties, gala’s, charity event’s, and
              much more. We will be here step by step to help you through the
              process of planning and cultivating your event.
            </p>
            <p>
              We are your go to contact for bringing in your vendors, planning a
              timeline for the day, breaking down your budget, and taking over
              any of the stress you may have as we move through the process.
            </p>
            <p>
              Day of Coordination is another service we offer. You may already
              have the big things handled and just need someone to take over the
              logistics and make sure everything is going according to plan. I
              bring along myself and an assistant to make sure we are with you
              throughout the day and working alongside with every vendor to make
              things go according to plan.
            </p>
          </div>
        </article>

        <article id="eventCreation" className="flex gap-10">
          <div className="overflow-hidden w-80">
            <video autoPlay muted loop className="object-cover object-center">
              <source src={serviceVideo2} type="video/mp4" />
            </video>
          </div>

          <div className="max-h-96 w-5/12 overflow-y-auto overscroll-contain grid grid-cols-1 gap-4">
            <h2 className="text-lg">Event Creation</h2>

            <p>
              After any special event, do you ever wish you could have some of
              those special moments ready for you right when the night ends?
              What we do is take your phone during the duration of your event
              and capture moments in short-videos and photos. You don’t have to
              worry about any of your guest or even Maid of Honor being
              responsible for this throughout your event and let them enjoy the
              evening with you. Now you can look at some of those special
              moments on your honeymoon and reminisce on the night even sooner.
            </p>

            <div>
              <Link
                to="/contact"
                className="font-medium p-3  bg-[#A4133C] hover:bg-[#800F2F] active:scale-90  text-white rounded-md"
              >
                contact for pricing
              </Link>
            </div>
          </div>
        </article>

        <article id="luxuryPicnics" className="flex gap-10">
          <img src={servicePhoto3} alt="luxury picnics" className="w-80"></img>

          <div className="max-h-96 w-5/12 overflow-y-auto overscroll-contain grid grid-cols-1 gap-4">
            <h2 className="text-lg">Luxury Picnics</h2>

            <p>
              Perfect for any birthday party, bridal shower, engagement, or any
              intimate event. We offer luxury picnics for up to 2-20 people. You
              pick the location (indoor or outdoor) and we bring it to life! We
              work alongside you to create a luxury picnic to a color scheme and
              theme of your choice.
            </p>
            <div>
              <Link
                to="/"
                className="font-medium p-3  bg-[#A4133C] hover:bg-[#800F2F] active:scale-90  text-white rounded-md"
              >
                view pricing
              </Link>
            </div>
          </div>
        </article>

        <article id="partyRentals" className="flex gap-10">
          <img src={servicePhoto4} alt="party rentals" className="w-80"></img>

          <div className="max-h-96 w-5/12 overflow-y-auto overscroll-contain grid grid-cols-1 gap-4">
            <h2 className="text-lg">Party Rentals</h2>

            <p>
              Looking for a backdrop, welcome sign, or some last minute decor to
              bring your event alive? Check out our gallery below to view
              rentals we have. No event design or planning fee is required. We
              will rent out the item to you with full delivery*, set-up*, and
              clean-up*.
            </p>
            <p>*additonal fee applied after inquiry. fee based on location.</p>
            <div>
              <Link
                to="/party-rentals"
                className="font-medium p-3 bg-[#A4133C] hover:bg-[#800F2F] active:scale-90  text-white rounded-md"
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
