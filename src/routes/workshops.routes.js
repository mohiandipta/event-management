const express = require('express')
const workshopRouters = express.Router()
const workshopsControllers = require('../controllers/workshops.controllers')

workshopRouters.get('/:id', workshopsControllers.index)
workshopRouters.get('/details/:id', workshopsControllers.show)
workshopRouters.post('/create', workshopsControllers.create)

module.exports = {workshopRouters}