"user strict";

const Movie = function (item) {
  this.name = item.name;
  this.discription = item.discription;
  this.image = item.image;
  this.link = item.link;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};

Movie.create = function (item, result) {
  connection.query("INSERT INTO movies set ?", item, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Movie.read = function (result) {
  connection.query("SELECT * FROM movies", (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Movie.update = function (id, movie, result) {
  connection.query(
    "UPDATE movies SET ? WHERE _id = ?",
    [movie, id],
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Movie.delete = function (id, result) {
  connection.query(
    "DELETE FROM movies WHERE _id = ?",
    [id],
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Movie;
