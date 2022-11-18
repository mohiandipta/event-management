const express = require('express')
const {req, res, next} = express()

// All Events
const AllEvents = async (req, res, next) => {
    try {
      
    } catch (err) {
      console.error(err.message)
    }
}


// Active Events
const ActiveEvents = async () => {
  console.log("This is all events controllers");
};


// Events Details by id
const EventsDetails = async () => {
  console.log("This is events details controllers");
};

module.exports = {
  AllEvents,
  ActiveEvents,
  EventsDetails,
};