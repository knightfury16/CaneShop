const prisma = require('../db/prisma');
const express = require('express');
const validUpdate = require('../utils/validUpdate');
const router = new express.Router();
const { auth, authorizeRole } = require('../middleware/auth');
const { AUTHORIZED_ROLES } = require('../utils/constants');
const { getAllProducts, getSingleProduct, createProduct } = require('../controllers/product');

//** get all products from the database
/* 
  -Get(/api/products) -> get all the products
  -Get(/api/products?keyword=apple) -> get all products where name contains the keywors query
  -Get(/api/products?category=Laptop) -> get all products where category is Laptop
  -Get(/api/products?rating=4) -> get all products where rating is greater than or equal 4
  -Get(/api/products?price=1-100) -> get all products where price is gte 1 and lte 100
  -Get(/api/products?page=2) -> get all products of page 2
*/
router.get('/', auth, getAllProducts);

//** get single product by id
router.get('/:id',getSingleProduct);

//** create product
// !Auth2
router.post('/new', auth, authorizeRole(AUTHORIZED_ROLES), createProduct);

//** update single product by id
// !Auth2
router.patch('/:id', auth, authorizeRole(AUTHORIZED_ROLES), async (req, res) => {
  //convert id from string to number
  const _id = +req.params.id;

  if (isNaN(_id)) {
    res.status(400).send({ Error: 'Invalid id' });
    return;
  }

  if (!validUpdate(req)) return res.status(400).send({ Error: 'Invalid updates' });

  try {
    const product = await prisma.product.update({
      where: { id: _id },
      data: req.body
    });
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    if (error.code === 'P2025') return res.status(404).send();
    res.status(500).send(error.toString());
  }
});

//** delete single product by id
// !Auth2
router.delete('/:id', auth, authorizeRole(AUTHORIZED_ROLES), async (req, res) => {
  //convert id from string to number
  const _id = +req.params.id;

  if (isNaN(_id)) {
    res.status(400).send({ Error: 'Invalid id' });
    return;
  }

  try {
    const product = await prisma.product.delete({ where: { id: _id } });
    res.status(200).send(product);
  } catch (error) {
    if (error.code === 'P2025') res.status(404).send();
    else res.status(500).send(error.toString());
  }
});

module.exports = router;
