const express = require("express");
const app = express();
const con = require('./src/database/Database')

const api = "/api/v1";

app.get("/events", (req, res) => {
  try {
    con.query("select * from events", (err, result) => {
      if (err) {
        res.send("error in api")
      }
      return res.send(result)
    })
  } catch (error) {
    console.log(error)
  }
});

app.listen(3000, () => {
  console.log("Server is running  at http://localhost:3000");
});
