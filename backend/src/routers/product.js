const prisma = require('../db/prisma');
const express = require('express');
const productValidationSchema = require('../utils/productValidationSchema');
const router = new express.Router();

// get all products from the database
router.get('/products', async (req, res) => {
  const products = await prisma.product.findMany({});
  res.status(200).send(products);
});

// get single product by id
router.get('/products/:id', async (req, res) => {
  //convert id from string to number
  const _id = +req.params.id;

  if (isNaN(_id)) {
    res.status(400).send({ Error: 'Invalid id' });
    return;
  }

  try {
    const product = await prisma.product.findFirst({ where: { id: +_id } });
    if (!product) res.status(404).send();
    else {
      res.status(200).send(product);
    }
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// create product
router.post('/new/product', async (req, res) => {
  try {
    const data = await productValidationSchema.validateAsync(req.body);
    const product = await prisma.product.create({ data });
    res.status(201).send(product);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.toString());
  }
});

module.exports = router;
