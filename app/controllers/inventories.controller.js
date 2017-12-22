const Joi = require('joi');
const Inventory = require('../models/inventory.model');
const COUNT_PER_PAGE = 20;

const listschema = Joi.object().keys({
  sort: Joi.any().valid('created', 'price'),
  direction: Joi.any().valid('asc', 'desc'),
});

/*
 * List all inventories (with pagination)
 * @queryparam {String} q - query string
 * @queryparam {String} sort - sort field (can be created or price)
 * @queryparam {String} direction - sort direction (can be asc or desc)
 * @queryparam {String} page - page number
 *
 * @resposne
 * 200: {
 *    success: true
 *    data: [Inventory array]
 * }
 *
 * 400: {
 *    success: false,
 *    message: "validation failed",
 *    code: 400
 * }
 */
async function list(req, res, next) {
  // Validate the query parameters
  const { error } = Joi.validate(req.query, listschema, { abortEarly: false, allowUnknown: true });
  if (error) {
    return res.error(error.message);
  }
  const {page = 0, sort = 'created', direction = 'asc', q = ''} = req.query;
  const sortDirection = direction === 'asc' ? '' : '-';
  const query = {};

  if (q !== '') {
    query.$text = {$search: q}
  }

  // Query database for inventories
  const inventories = await Inventory
    .find(query)
    .sort(`${sortDirection}${sort}`)
    .skip(page * COUNT_PER_PAGE)
    .limit(COUNT_PER_PAGE);

  // Send the response
  res.success({data: inventories});
}

/*
 * List all inventories (with pagination)
 * @urlparam {String} id - inventory id
 *
 * @resposne
 * 200: {
 *    success: true
 *    data: Inventory Data
 * }
 *
 * 404: {
 *    success: false,
 *    message: "Not found",
 *    code: 404
 * }
 */
async function getById(req, res, next) {
  const {id} = req.params;
  const inventory = await Inventory.findOne({id});
  if (inventory) {
    res.success({data: inventory});
  } else {
    res.error('Not Found', 404);
  }
}

module.exports = {
  list,
  getById
};