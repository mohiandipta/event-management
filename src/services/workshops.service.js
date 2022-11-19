const util = require('util')
const conn = require('../config/db.config')

const query = util.promisify(conn.query).bind(conn)

// find workshops with single event
const findAll = async (id) => {
    const singleEvent = await query(`select * from events where id=${id}`);
    const singleWorkshop = await query(`select * from workshops where id=${id}`);
    newItem = { ...singleEvent[0], workshop: singleWorkshop };
    return newItem
}

// workshops find by id
const findOneById = async (id) => {
    const item = await query(`select * from workshops where id=${id}`);
    const totalReservation = await query(
      `SELECT COUNT(id) AS total_Reservations FROM reservations WHERE id=${id}`
    );
    let total_reservations = JSON.stringify(
      totalReservation[0].total_Reservations
    );
    newItem = { ...item[0], total_reservations };
    return newItem
}

// Create Event
const create = async(event_id, start_at, end_at, title, description) => {
    const sql = `INSERT INTO workshops (event_id, start_at, end_at, title, description) VALUES ('${event_id}','${start_at}','${end_at}', '${title}','${description}')`;
    conn.query(sql, (err) => {
      if (err) {
        console.log(err)
        return null
      }
      return true
    })
}

module.exports = {
    findAll,
    findOneById,
    create
}