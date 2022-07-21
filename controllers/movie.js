const Movie = require("../models/movie");

exports.createMovie = async (req, res) => {
  if (!req.body.name || !req.body.link) {
    return res.status(422).json({
      name: "name is required",
      link: "link is required",
    });
  }
  const movie = new Movie(req.body);
  Movie.create(movie, function (err, movie) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(movie);
  });
};

exports.readMovie = async (req, res) => {
  Movie.read(function (err, movies) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(movies);
  });
};

exports.updateMovie = async (req, res) => {
  const id = req.params.movieId;
  Movie.update(id, new Movie(req.body), function (err, movie) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(movie);
  });
};

exports.deleteMovie = async (req, res) => {
  const id = req.params.movieId;
  Movie.delete(id, function (err, movie) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(movie);
  });
};
