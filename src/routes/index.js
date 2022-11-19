const express = require("express");
const router = express.Router();
const { eventRouters } = require("./events.routes");
const { workshopRouters } = require("./workshops.routes");
const { reservationRouters } = require("./reservations.routes");

router.use("/events", eventRouters);
router.use("/workshops", workshopRouters);
router.use("/reservations", reservationRouters);

module.exports = { router };
