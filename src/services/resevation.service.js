const con = require("../config/db.config");

// Create Reservations
const PostReservation = async (name, email, workshop_id) => {
    const sql = `INSERT INTO reservations (name, email, workshop_id) VALUES ('${name}', '${email}', '${workshop_id}')`;
    con.query(sql, (err, result) => {
      if (err) {
        return null
      }
      return true
    })
};


module.exports = {
  PostReservation,
};