const workshopServices = require('../services/workshops.service')

// All workshops
const index = async (req, res, next) => {
  try {
    const {id} = req.params
    const item = await workshopServices.findAll(id)
    res.status(200).json({
      event: item
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
};

// Workshop Details by id
const show = async (req, res, next) => {
  try {
    const {id} = req.params
    const item = await workshopServices.findOneById(id)
    res.status(200).json({
      workshop: item 
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
};

// Workshop create
const create = async(req, res, next) => {
  try {
    const { event_id, start_at, end_at, title, description } = req.body;
    await workshopServices.create(event_id, start_at, end_at, title, description)
    res.status(201).json({
      message: "Workshop created successfully",
      data: {
        event_id: event_id,
        start_at: start_at,
        end_at: end_at,
        title: title,
        description: description
      }
    });
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = {
  index,
  show,
  create
};
