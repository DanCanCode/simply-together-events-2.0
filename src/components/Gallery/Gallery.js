import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import headText from "./galleries.png";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const client = createClient({
    projectId: "35hi7jrl",
    dataset: "production",
    useCdn: true, // set to `true` to fetch from edge cache
    apiVersion: "2022-02-20", // use current date (YYYY-MM-DD) to target the latest API version
  });

  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  const getGalleries = async () => {
    const data = await client
      .fetch(`*[_type == 'Galleries']{cover, slug, name}`)
      .catch((error) => console.log("the ERROR", error));

    setGalleries(data);
  };

  useEffect(() => {
    getGalleries();
    // eslint-disable-next-line
  }, []);

  console.log(galleries[0]?.cover.asset._ref);
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
        {galleries?.map((gallery, index) => (
          <Link
            key={index}
            className="cursor-pointer drop-shadow-lg hover:scale-90 transition duration-300 ease-in-out"
            to={`/gallery/${gallery.slug.current}`}
            state={{ items: 9 }}
          >
            <img
              loading="lazy"
              src={urlFor(gallery.cover).url()}
              alt={gallery.name}
            />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Gallery;
