
// pagination
const paginate = ({ page, limit, total_items }) => {
  const pageTotal = Math.ceil(total_items / limit);
  return {
    total: parseInt(total_items),
    per_page: parseInt(limit),
    total_pages: parseInt(pageTotal),
    current_page: parseInt(page),
  };
};

module.exports = {
  paginate,
};
