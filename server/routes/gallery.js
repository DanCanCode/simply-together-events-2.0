const router = require("express").Router();
const {
  getGalleries,
  getSingleGallery,
  updateGallery,
  createGallery,
} = require("../controllers/gallery");

router.get("/", getGalleries);

router.get("/:id", getSingleGallery);

router.put("/:id", updateGallery);

router.post("/", createGallery);

module.exports = router;
