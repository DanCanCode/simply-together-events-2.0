const Gallery = require("../models/Gallery");

const getGalleries = async (req, res, next) => {
  try {
    const galleries = await Gallery.find();
    res.status(200).json(galleries);
  } catch (error) {
    next(error);
  }
};

// const getSingleGallery = async (req, res, next) => {

// }

module.exports = {
  getGalleries,
};
