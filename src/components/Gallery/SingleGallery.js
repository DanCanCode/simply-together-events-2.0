import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import NotFound from "../NotFound";

const SingleGallery = () => {
  const galleryName = useLocation().pathname.replace("/gallery/", "");
  const [gallery, setGallery] = useState([]);

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
      .fetch(
        `*[_type == 'Galleries' && slug.current == '${galleryName}'][0]{images, heading}`
      )
      .catch((error) => console.log("the ERROR", error));

    setGallery(data);
  };

  useEffect(() => {
    getGalleries();
    // eslint-disable-next-line
  }, []);

  const loadPage = () => {
    if (0) {
      return <NotFound />;
    } else {
      return (
        <>
          <header className="grid grid-cols-1 gap-3 place-items-center my-10 mx-12">
            {gallery.heading && (
              <img
                src={urlFor(gallery?.heading).url()}
                alt={galleryName}
                className="animate-[fadein_2s_ease_1] md:w-72 sm:w-56 w-44"
              />
            )}
          </header>

          <section className="flex flex-row flex-wrap justify-center gap-2">
            {gallery?.images?.map((item, index) => {
              return (
                <img
                  loading="lazy"
                  className="w-52 sm:w-64 md:w-80 object-cover object-center"
                  key={index}
                  src={urlFor(item).url()}
                  alt={"lnin"}
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
