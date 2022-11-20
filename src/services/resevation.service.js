const util = require('util')
const conn = require("../config/db.config");

const query = util.promisify(conn.query).bind(conn)

// Create Reservations
const create = async (name, email, workshop_id) => {
    await  query(`INSERT INTO reservations (name, email, workshop_id) VALUES ('${name}', '${email}', '${workshop_id}')`)
    const workshops = await query(
      `SELECT * FROM workshops  WHERE id=${workshop_id}`
    )
    let event_id = JSON.parse(JSON.stringify(workshops[0].event_id));
    const events = await query(
      `SELECT * FROM events  WHERE id=${event_id}`
    );

    newItem = {...events[0], workshops}

      return newItem;
};


module.exports = {
  create,
};