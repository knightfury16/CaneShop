const express = require('express');
const { getAllOrder, createNewOrder, getSingleOrder } = require('../controllers/order');
const { auth } = require('../middleware/auth');
const router = express.Router();

// * create new order -> api/order/new
// !Auth1
router.post('/new', auth, createNewOrder);

//* get single order by id -> api/order/:id
router.get('/:id', auth, getSingleOrder);

// * get all order
router.get('/', getAllOrder);

module.exports = router;
