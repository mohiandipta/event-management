const reservationServices = require("../services/resevation.service");

const create = async (req, res, next) => {
  try {
    const { name, email, workshop_id } = req.body
    await reservationServices.create(name, email, workshop_id);
    res.status(201).json({
      message: "Reservation Done",
      reservation:{
        name: name,
        email: email,
        workshop_id: workshop_id
      }
    })
  } catch (error) {
    console.log(error.message);
    next(error)
  }
};

module.exports = {
  create,
};
