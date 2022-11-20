const express = require('express')
const eventRouters = express.Router()
const eventControllers = require('../controllers/events.controllers')

eventRouters.get('/', eventControllers.index)
eventRouters.get('/details/:id', eventControllers.show)
eventRouters.post('/create', eventControllers.create)


module.exports = {eventRouters};