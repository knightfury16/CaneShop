const prisma = require('../db/prisma');
const express = require('express');
const productValidationSchema = require('../utils/productValidationSchema');
const router = new express.Router();

// get all products from the database
router.get('/products', async (req, res) => {
  const products = await prisma.product.findMany({});
  res.status(200).send(products);
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
