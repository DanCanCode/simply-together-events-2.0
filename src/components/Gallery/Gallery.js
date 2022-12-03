import React from "react";
import { useSelector } from "react-redux";
import headText from "./galleries.png";
// import Form from '../Form'

const Gallery = () => {
  const galleries = useSelector((state) => state.galleries);
  console.log(galleries);

  const handleClick = (title) => {
    console.log(`you clicked ${title}`);
  };

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
        {galleries?.map((gallery) => {
          return (
            <div
              key={gallery._id}
              className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
              onClick={() => handleClick(gallery.title)}
            >
              <img src={gallery.coverPhoto} alt={gallery.title} />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Gallery;
