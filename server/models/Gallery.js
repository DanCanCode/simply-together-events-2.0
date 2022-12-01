const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
  title: { type: String, required: true },
  headingPhoto: String,
  coverPhoto: String,
  images: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
