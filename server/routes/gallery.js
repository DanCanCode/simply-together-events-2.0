const router = require("express").Router();
const { getGalleries, createGallery } = require("../controllers/gallery");

router.get("/", getGalleries);

router.post("/", createGallery);

// router.get("/:id", async (req, res, next) => {
//   try {
//     const post = await Post.findOn({
//       where: {
//         id: req.params.id,
//         isPublic: true,
//       },
//     });
//     res.status(200).send(post);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
