const express = require("express");
const app = express();

const api = "/api/v1";

const data = [
  {
    ComingSoon: true,
    Title: "Luke Cage",
    Year: "2016–",
    Rated: "TV-MA",
    Released: "30 Sep 2016",
    Runtime: "55 min",
    Genre: "Action, Crime, Drama",
    Director: "N/A",
    Writer: "Cheo Hodari Coker",
    Actors: "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
    Plot: "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
    Metascore: "N/A",
    imdbRating: "N/A",
    imdbVotes: "N/A",
    imdbID: "tt3322314",
    Type: "series",
    totalSeasons: "1",
    Response: "True",
    Images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MDg3NjY2OF5BMl5BanBnXkFtZTgwNDE1NDU4OTE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTYzOTQyNDYxNl5BMl5BanBnXkFtZTgwNzA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMjA3MTQ5Ml5BMl5BanBnXkFtZTgwOTA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNjg5ODYwNF5BMl5BanBnXkFtZTgwMTE1NDU4OTE@._V1_SY1000_CR0,0,1477,1000_AL_.jpg",
    ],
  },
];

app.get(api + "/products", (req, res) => {
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server is running  at http://localhost:3000");
});