import React from "react";
import { useLocation } from "react-router-dom";
import NotFound from "../NotFound";

const SingleGallery = () => {
  const galleryName = useLocation().pathname.replace("/gallery/", "");
  const imgCount = useLocation().state?.items;
  const images = [];

  const loadPage = () => {
    if (!imgCount) {
      return <NotFound />;
    } else {
      for (let i = 1; i <= imgCount; i++) {
        images.push({
          id: i,
          src: require(`./photos/${galleryName}/${i}.jpg`),
          alt: i,
        });
      }

      return (
        <>
          <header className="grid grid-cols-1 gap-3 place-items-center my-10 mx-12">
            <img
              src={require(`./photos/${galleryName}/heading.png`)}
              alt={galleryName}
              className="animate-[fadein_2s_ease_1] md:w-72 sm:w-56 w-44"
            />
          </header>

          <section className="flex flex-row flex-wrap justify-center gap-2">
            {images.map((item) => {
              return (
                <img
                  loading="lazy"
                  className="w-52 sm:w-64 md:w-80"
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                />
              );
            })}
          </section>
        </>
      );
    }
  };

  return <main>{loadPage()}</main>;
};

export default SingleGallery;
