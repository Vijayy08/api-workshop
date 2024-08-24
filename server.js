const express = require("express");
const app = express();

app.use(express.json());

const movies = [
  {
    id: 1,
    name: "godfather",
    genre: "crime",
    year: 1994,
  },
  {
    id: 2,
    name: "godfather2",
    genre: "crime",
    year: 1996,
  },
  {
    id: 3,
    name: "godfather3",
    genre: "crime",
    year: 1997,
  },
];

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/api/movies", (req, res) => {
  res.send(movies);
});

app.get("/api/movies/:id", (req, res) => {
  // returns
  const id = req.params.id;
  const movie = movies.find((m) => m.id === parseInt(id));
  res.send(movie);
});

app.post("/api/movies", (req, res) => {
  const movie = req.body;
  movie.id = movies.length + 1;
  movies.push(movie);
  res.send(movie);
});
