const express = require("express");
const {
  createMovie,
  readMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie");
const router = express.Router();

router.post("/movie", createMovie);

router.get("/movies", readMovie);

router.put("/movie/:movieId", updateMovie);

router.delete("/movie/:movieId", deleteMovie);

module.exports = router;
