const eventService = require("../services/event.service");
const paginateHelper = require("../helper/pagination.helper");

// All Events
const index = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const totalCount = await eventService.countAll();
    const items = await eventService.findAll({page, limit});
   
    res.status(200).json({
      data: items,
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
    const result = await eventService.findOneById(id);
    res.status(200).json({
      data: result || null
    })
  } catch (error) {
    console.log(error);
    next(error)
  }
};

module.exports = {
  index,
  show,
};
