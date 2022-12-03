const router = require("express").Router();
const {
  getGalleries,
  getSingleGallery,
  createGallery,
} = require("../controllers/gallery");

router.get("/", getGalleries);

router.get("/:id", getSingleGallery);

router.post("/", createGallery);

module.exports = router;
