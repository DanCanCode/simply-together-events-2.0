import React from "react";
import { Link } from "react-router-dom";
import headText from "./galleries.png";
import cover1 from "./photos/david-miranda-wedding/cover.png";
import cover2 from "./photos/nick-selena-engagement/cover.png";
import cover3 from "./photos/james-wes-baptism/cover.png";
import cover4 from "./photos/colin-jeanine-gender-reveal/cover.png";
import cover5 from "./photos/giovannis-dedication/cover.png";
import cover6 from "./photos/international-womens-day-gala/cover.png";
import cover7 from "./photos/valentines-day-picnic/cover.png";
import cover8 from "./photos/omar-basma-engagement/cover.png";
import cover9 from "./photos/stephen-alyssa-engagement/cover.png";
import cover10 from "./photos/thanksgiving-picnic/cover.png";
import cover11 from "./photos/gows-graduation/cover.png";
import cover12 from "./photos/halloween-party/cover.png";
import cover13 from "./photos/denas-sweet-sixteen/cover.png";

const Gallery = () => {
  return (
    <main>
      <header className="grid grid-cols-1 gap-3 place-items-center mt-10 mx-12">
        <img
          src={headText}
          alt="galleries"
          className="animate-[fadein_2s_ease_1] md:w-72 sm:w-56 w-44"
        />
        <h1 className="text-center text-xs xs:text-sm sm:text-base">
          view photos from past events
        </h1>
      </header>

      <section className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center gap-6 my-10 mx-4 sm:mx-10">
        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/david-miranda-wedding`}
          state={{ items: 9 }}
        >
          <img
            loading="lazy"
            src={cover1}
            alt="David + Miranda Wedding Gallery"
          />
        </Link>

        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/nick-selena-engagement`}
          state={{ items: 17 }}
        >
          <img
            loading="lazy"
            src={cover2}
            alt="Nick + Selena Engagement Party"
          />
        </Link>

        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/james-wes-baptism`}
          state={{ items: 17 }}
        >
          <img loading="lazy" src={cover3} alt="James Wes Baptism" />
        </Link>

        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/colin-jeanine-gender-reveal`}
          state={{ items: 13 }}
        >
          <img
            loading="lazy"
            src={cover4}
            alt="Colin + Jeanine Gender Reveal"
          />
        </Link>

        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/giovannis-dedication`}
          state={{ items: 12 }}
        >
          <img loading="lazy" src={cover5} alt="Giovanni's Dedication" />
        </Link>

        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/international-womens-day-gala`}
          state={{ items: 22 }}
        >
          <img
            loading="lazy"
            src={cover6}
            alt="International Women's Day Gala"
          />
        </Link>

        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/valentines-day-picnic`}
          state={{ items: 9 }}
        >
          <img loading="lazy" src={cover7} alt="Valentine's Day Picnic" />
        </Link>

        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/omar-basma-engagement`}
          state={{ items: 9 }}
        >
          <img
            loading="lazy"
            src={cover8}
            alt="Omar + Basma Engagement Party"
          />
        </Link>

        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/stephen-alyssa-engagement`}
          state={{ items: 7 }}
        >
          <img
            loading="lazy"
            src={cover9}
            alt="Stephen + Alyssa Engagement Party"
          />
        </Link>

        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/thanksgiving-picnic`}
          state={{ items: 15 }}
        >
          <img loading="lazy" src={cover10} alt="Thanksgiving Luxury Picnic" />
        </Link>

        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/gows-graduation`}
          state={{ items: 7 }}
        >
          <img loading="lazy" src={cover11} alt="Gow's Graduation Party" />
        </Link>

        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/halloween-party`}
          state={{ items: 3 }}
        >
          <img loading="lazy" src={cover12} alt="Halloween Party" />
        </Link>

        <Link
          className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
          to={`/gallery/denas-sweet-sixteen`}
          state={{ items: 3 }}
        >
          <img loading="lazy" src={cover13} alt="Dena's Sweet Sixteen" />
        </Link>
      </section>
    </main>
  );
};

export default Gallery;
