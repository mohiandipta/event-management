const express = require('express')
const { AllEvents } = require('../controllers/events.controllers')
const router = express.Router()

const EventControllers = require('../controllers/events.controllers')

router.get('/all-events', EventControllers.AllEvents)
router.get('/active-events', EventControllers.ActiveEvents)


module.exports = router