const prisma = require('../db/prisma');
const express = require('express');
const router = new express.Router();

// get all products from the database
router.get('/products', async (req, res) => {
  const products = await prisma.product.findMany({});
  res.status(200).send(products);
});

// create product
router.post('/new/product', async (req, res) => {
  try {
    const product = await prisma.product.create({ data: { ...req.body } });
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
