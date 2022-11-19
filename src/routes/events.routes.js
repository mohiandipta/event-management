const express = require('express')
const eventRouters = express.Router()
const eventControllers = require('../controllers/events.controllers')

eventRouters.get('/', eventControllers.index)
eventRouters.get('/:id', eventControllers.show)


module.exports = {eventRouters};