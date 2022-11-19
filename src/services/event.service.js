const util = require("util");
const conn = require("../config/db.config");

const query = util.promisify(conn.query).bind(conn);

// count all doc
const countAll = async () => {
  const result = await query("SELECT COUNT(id) AS total FROM events");
  return JSON.parse(JSON.stringify(result))[0].total;
};

// find all Events
const findAll = async ({ page, limit }) => {
  const results = await query("select * from events");
  return JSON.parse(JSON.stringify(results));
};

// Events find by id
const findOneById = async (id) => {
  const result = await query(`select * from events where id=${id}`);
  return JSON.parse(JSON.stringify(result))[0];
};

module.exports = {
  countAll,
  findAll,
  findOneById,
};
