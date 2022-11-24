const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    res.status(200).send("hello welcome");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
