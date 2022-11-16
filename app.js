const express = require("express");
const app = express();
const Data =require('./src/data/data')

const api = "/api/v1";

app.get(api + "/products", (req, res) => {
  res.send(Data);
});

app.listen(3000, () => {
  console.log("Server is running  at http://localhost:3000");
});
