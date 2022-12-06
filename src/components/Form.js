import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGallery, updatedGallery } from "../redux-store/galleries";
import FileBase from "react-file-base64";

const Form = (props) => {
  const [galleryData, setGalleryData] = useState({
    _id: props.id,
    title: "",
    headingPhoto: "",
    coverPhoto: "",
    images: [],
  });
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updatedGallery(galleryData));
    setGalleryData({
      title: "",
      headingPhoto: "",
      coverPhoto: "",
      images: [],
    });
  };

  return (
    <section id="FORM" className="container mx-auto">
      <form id="form" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="title" className="block mb-2 text-sm text-black/40">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="John Doe's Wedding"
            value={galleryData.title}
            onChange={(e) =>
              setGalleryData({ ...galleryData, title: e.target.value })
            }
            className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
          />
        </div>

        <div className="HEADING_PHOTO mb-6">
          <label
            htmlFor="headingPhoto"
            className="block mb-2 text-sm text-black/40"
          >
            Heading Photo
          </label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setGalleryData({ ...galleryData, headingPhoto: base64 })
            }
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="coverPhoto"
            className="block mb-2 text-sm text-black/40"
          >
            Cover Photo
          </label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setGalleryData({ ...galleryData, coverPhoto: base64 })
            }
          />
        </div>

        <div className="mb-6">
          <label htmlFor="images" className="block mb-2 text-sm text-black/40">
            images
          </label>
          <FileBase
            type="file"
            multiple={true}
            onDone={(base64) => {
              console.log(base64);
              setGalleryData({ ...galleryData, images: base64 });
            }}
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full px-3 py-4 text-white tracking-wide font-medium rounded-md bg-[#A4133C] hover:bg-[#800F2F] active:scale-90 focus:outline-none"
          >
            Submit
          </button>
        </div>
        <p className="text-base text-center text-gray-500" id="result"></p>
      </form>
    </section>
  );
};

export default Form;
