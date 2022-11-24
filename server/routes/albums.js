const router = require("express").Router();
// const Post = require("../database/models/posts");

// router.get("/", async (req, res, next) => {
//   try {
//     const posts = await Post.findAll({
//       where: {
//         isPublic: true,
//       },
//     });
//     res.status(200).send(posts);
//   } catch (error) {
//     next(error);
//   }
// });

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
