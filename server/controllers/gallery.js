const Gallery = require("../models/Gallery");

const getGalleries = async (req, res, next) => {
  try {
    const galleries = await Gallery.find();
    res.status(200).json(galleries);
  } catch (error) {
    next(error);
  }
};

const getSingleGallery = async (req, res, next) => {
  try {
    const singleGallery = await Gallery.findOne({ _id: req.params.id });
    res.status(200).json(singleGallery);
  } catch (error) {
    next(error);
  }
};

const updateGallery = async (req, res, next) => {
  try {
    const newArr = req.body.images.map((image) => {
      return image.base64;
    });
    console.log(newArr);
    const singleGallery = await Gallery.findByIdAndUpdate(req.params.id, {
      images: newArr,
    });
    res.json(singleGallery);
  } catch (error) {
    next(error);
  }
};

const createGallery = async (req, res, next) => {
  try {
    const createdGallery = await new Gallery(req.body);
    createdGallery.save(function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
    res.status(200).json(createdGallery);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getGalleries,
  getSingleGallery,
  updateGallery,
  createGallery,
};
