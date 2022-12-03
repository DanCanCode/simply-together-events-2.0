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
    const singleGallery = await Gallery.findById(
      req.params.id,
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Result : ", docs);
        }
      }
    );
    res.status(200).send(singleGallery);
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
  createGallery,
};
