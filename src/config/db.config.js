const { json } = require("body-parser");
const mysql = require("mysql");

const dbcon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "event_management",
  connectionLimit: 10,
});

dbcon.connect((err) => {
  if (err) {
    console.warn("erron in db connection");
  }
  else {
    console.log('db connected!')
  }
});

module.exports = dbcon;
