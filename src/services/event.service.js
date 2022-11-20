const util = require("util");
const conn = require("../config/db.config");

const query = util.promisify(conn.query).bind(conn);

// count all doc
const countAll = async () => {
  const result = await query("SELECT COUNT(id) AS total FROM events");
  return JSON.parse(JSON.stringify(result))[0].total;
};

// find all Events
const findAll = async () => {
  const results = await query("select * from events");
  return JSON.parse(JSON.stringify(results));
};

// events Details
const findOneById = async (id) => {
  const item = await query(`select * from events where id=${id}`);
  const totalWorkshop = await query(`SELECT COUNT(id) AS total_workshops FROM reservations WHERE workshop_id=${id}`);
  let total_workshops = JSON.stringify(totalWorkshop[0].total_workshops);
  newitem = { ...item[0], total_workshops };
  return newitem;
};

// Create Event
const create = async(title, start_at, end_at) => {
    const sql = `INSERT INTO events (title, start_at, end_at) VALUES ('${title}','${start_at}','${end_at}')`
    conn.query(sql, (err, result) => {
      if (err) {
        return null
      }
      return true
    })
}

module.exports = {
  countAll,
  findAll,
  findOneById,
  create
};
