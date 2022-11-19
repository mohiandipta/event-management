const express = require("express");
const router = express.Router();

const ReservationController = require('../controllers/reservations.controllers')

router.post('/create-reservation', ReservationController.create)

module.exports = router