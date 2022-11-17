const mysql = require('mysql')

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "event_management",
  connectionLimit: 10,
});

con.connect((err)=>{
    if (err) {
        console.warn("erron in db connection")
    }
})

module.exports = con