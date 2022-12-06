const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  name: String,
  type: String,
  size: String,
  base64: String,
});

const gallerySchema = mongoose.Schema({
  title: { type: String, required: true },
  headingPhoto: String,
  coverPhoto: String,
  images: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
