const prisma = require('../db/prisma');
const express = require('express');
const productValidationSchema = require('../utils/productValidationSchema');
const validUpdate = require('../utils/validUpdate');
const router = new express.Router();

// get all products from the database
router.get('/', async (req, res) => {
  const products = await prisma.product.findMany({});
  res.status(200).send(products);
});

// get single product by id
router.get('/:id', async (req, res) => {
  //convert id from string to number
  const _id = +req.params.id;

  if (isNaN(_id)) {
    res.status(400).send({ Error: 'Invalid id' });
    return;
  }

  try {
    const product = await prisma.product.findFirst({ where: { id: _id } });
    if (!product) res.status(404).send();
    else {
      res.status(200).send(product);
    }
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// create product
router.post('/new', async (req, res) => {
  try {
    const data = await productValidationSchema.validateAsync(req.body);
    const product = await prisma.product.create({ data });
    res.status(201).send(product);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.toString());
  }
});

// update single product by id
router.patch('/:id', async (req, res) => {
  //convert id from string to number
  const _id = +req.params.id;

  if (isNaN(_id)) {
    res.status(400).send({ Error: 'Invalid id' });
    return;
  }

  if (!validUpdate(req)) return res.status(400).send({ Error: 'Invalid updates' });

  try {
    const product = await prisma.product.update({ where: { id: _id }, data: req.body });
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    if (error.code === 'P2025') return res.status(404).send();
    res.status(500).send(error.toString());
  }
});

// delete single product by id
router.delete('/:id', async (req, res) => {
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
