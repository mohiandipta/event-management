const ReservationModel = require("../services/resevation.service");

const create = async (req, res, next) => {
  try {
    const { name, email, workshop_id } = req.body
    const CreateReservation = await ReservationModel.PostReservation(name, email, workshop_id);
    console.log('reservation', CreateReservation)
    res.status(201).json({message: "Reservation Ok"})
  } catch (error) {
    console.log(error.message);
    next(error)
  }
};

module.exports = {
  create,
};
