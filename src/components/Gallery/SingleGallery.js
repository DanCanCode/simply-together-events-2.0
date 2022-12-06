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

  const gallery = useSelector((state) => state.singleGallery);
  console.log(gallery);
  return (
    <main>
      <header className="grid grid-cols-1 gap-3 place-items-center mt-10 mx-12">
        <img
          src={gallery?.headingPhoto}
          alt="galleries"
          className="animate-[fadein_2s_ease_1] md:w-72 sm:w-56 w-44"
        />
      </header>
    </main>
  );
};

export default SingleGallery;
