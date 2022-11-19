const conn = require("../config/db.config");

// Create Reservations
const create = async (name, email, workshop_id) => {
    const sql = `INSERT INTO reservations (name, email, workshop_id) VALUES ('${name}', '${email}', '${workshop_id}')`;
    conn.query(sql, (err) => {
      if (err) {
        return null
      }
      return true
    })
};


module.exports = {
  create,
};