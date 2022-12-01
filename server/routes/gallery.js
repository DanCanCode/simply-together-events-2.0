const router = require("express").Router();
const { getGalleries } = require("../controllers/gallery");

router.get("/", getGalleries);

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
