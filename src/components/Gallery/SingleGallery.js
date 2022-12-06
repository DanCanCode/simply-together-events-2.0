import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchSingleGallery } from "../../redux-store/singleGallery";
import { useSelector, useDispatch } from "react-redux";

const SingleGallery = () => {
  const dispatch = useDispatch();
  const galleryId = useLocation().pathname.replace("/gallery/", "");

  useEffect(() => {
    dispatch(fetchSingleGallery(galleryId));
  }, [dispatch]);

  const singleGallery = useSelector((state) => state.singleGallery);
  const galleryImages = singleGallery.images;
  return (
    <main>
      <header className="grid grid-cols-1 gap-3 place-items-center mt-10 mx-12">
        <img
          src={singleGallery?.headingPhoto}
          alt="galleries"
          className="animate-[fadein_2s_ease_1] md:w-72 sm:w-56 w-44"
        />
      </header>

      <section className="grid grid-cols-3 gap-3">
        {galleryImages?.map((image) => {
          return (
            <div className="">
              <img src={image} alt="" />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default SingleGallery;
