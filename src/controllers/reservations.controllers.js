const reservationServices = require("../services/resevation.service");

const create = async (req, res, next) => {
  try {
    const { name, email, workshop_id } = req.body
    const result = await reservationServices.create(name, email, workshop_id);
    res.status(201).json({
      reservation:{
        name: name,
        email: email,
        workshop_id: workshop_id
      },
      events: result
    })
  } catch (error) {
    console.log(error.message);
    next(error)
  }
};

module.exports = {
  create,
};
