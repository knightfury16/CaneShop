const express = require('express');
const { getAllOrder, createNewOrder } = require('../controllers/order');
const { auth } = require('../middleware/auth');
const router = express.Router();

// * create new order -> api/order/new
// !Auth1
router.post('/new', auth, createNewOrder);

// * get all order
router.get('/', getAllOrder);

module.exports = router;
