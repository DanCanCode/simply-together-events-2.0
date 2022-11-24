require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
// const { db } = require("./database");
// const seed = require("../seed");

// Include our routes!
app.use("/api", require("./routes"));
app.use("/api/albums", require("./routes/albums"));

// Body parsing middleware
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(express.static("./"));

// Send index.html for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const error = new Error("Not found");
    res.status(404);
    next(error);
  } else {
    next();
  }
});

// Error handling endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

// Server port
const PORT = process.env.PORT || 1337;
// const init = async () => {
//   try {
//     if (process.env.SEED === "true") {
//       await seed();
//     } else {
//       db.sync().then(() => {
//         app.listen(PORT, () => {
//           console.log(`Server running on port: http://localhost:${PORT}`);
//         });
//       });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// init();
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
