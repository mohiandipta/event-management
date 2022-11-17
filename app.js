const express = require("express");
const app = express();
const dbcon = require('./database/Database')
require('dotenv/config')

const api = process.env.API_URL;

app.get(api + "/events", (req, res) => {
  try {
    dbcon.query("select * from events", (err, result) => {
      if (err) {
        res.send("error in api")
      }
      return res.send(result)
    })
  } catch (error) {
    console.log(error)
  }
});


// Main Routes
const EventsRoutes = require('./src/routes/events.routes')

//API URL's
app.use(api, EventsRoutes)



app.listen(3000, () => {
  console.log("Server is running  at http://localhost:3000");
});
