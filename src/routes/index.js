const express = require("express");
const router = express.Router();
const { eventRouters } = require("./events.routes")

router.use("/events", eventRouters);

module.exports = { router };
