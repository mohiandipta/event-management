const express = require("express");
const reservationRouters = express.Router();

const ReservationController = require('../controllers/reservations.controllers')

reservationRouters.post("/create", ReservationController.create);

module.exports = { reservationRouters };