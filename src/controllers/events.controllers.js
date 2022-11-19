const eventServices = require("../services/event.service");
const paginateHelper = require("../helper/pagination.helper");

// All Events
const index = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const totalCount = await eventServices.countAll();
    const items = await eventServices.findAll({page, limit});
   
    res.status(200).json({
      events: items,
      paginate: paginateHelper.paginate({
        page,
        limit,
        total_items: totalCount,
      }),
    });
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

// Events Details by id
const show = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await eventServices.findOneById(id);
    res.status(200).json({
      event: item,
    });
  } catch (error) {
    console.log(error);
    next(error)
  }
};

// Event create
const create = async(req, res, next) => {
  try {
    const {title, start_at, end_at} = req.body
    await eventServices.create(title, start_at, end_at)
    res.status(201).json({
      message: "Event created successfully",
      data: {
        title: title,
        start_at: start_at,
        end_at: end_at
      }
    })
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
