const express = require("express");
require('dotenv/config')
const bodyParser = require('body-parser')
const { router } = require("./src/routes")
const app = express();
const api = process.env.API_URL;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//API URL's
app.use(api, router);
app.use('/', (req, res)=>{
  res.send("API SERVER IS RUNNING")
})


app.listen(3000, () => {
  console.log("Server is running  at http://localhost:3000");
});
