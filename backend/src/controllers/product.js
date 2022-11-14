const prisma = require('../db/prisma');
const { Category } = require('@prisma/client');
const productValidationSchema = require('../utils/productValidationSchema');
const validUpdate = require('../utils/validUpdate');
const { ALLOWED_PRODUCT_UPDATE } = require('../utils/constants');

//**  get all products from the database
/* 
  -Get(/api/products) -> get all the products
  -Get(/api/products?keyword=apple) -> get all products where name contains the keywors query
  -Get(/api/products?category=Laptop) -> get all products where category is Laptop
  -Get(/api/products?rating=4) -> get all products where rating is greater than or equal 4
  -Get(/api/products?price=1-100) -> get all products where price is gte 1 and lte 100
  -Get(/api/products?page=2) -> get all products of page 2

*/
const getAllProducts = async (req, res) => {
  const priceRange = req.query.price ? req.query.price.split('-') : undefined;
  const resPerPage = 5;
  const currentPage = req.query.page || 1;

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: req.query.keyword ? req.query.keyword : '',
        mode: 'insensitive'
      },
      category: {
        in: req.query.category in Category ? [req.query.category] : Object.keys(Category)
      },
      ratings: {
        gte: req.query.rating ? +req.query.rating : 1
      },
      price: priceRange
        ? {
            gte: +priceRange[0],
            lte: +priceRange[1]
          }
        : {}
    },
    orderBy: { createdAt: 'desc' },
    take: resPerPage,
    skip: resPerPage * (currentPage - 1)
  });

  res.status(200).json({
    count: products.length,
    products
  });
};

//** get single product by id */
const getSingleProduct = async (req, res) => {
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
};

const createProduct = async (req, res) => {
  try {
    const data = await productValidationSchema.validateAsync(req.body);
    const product = await prisma.product.create({ data: { userId: req.user.id, ...data } });
    res.status(201).send(product);
  } catch (err) {
    res.status(500).send(err.toString());
  }
};

//** update single product by id
const updateProduct = async (req, res) => {
  //convert id from string to number
  const _id = +req.params.id;

  if (isNaN(_id)) {
    res.status(400).send({ Error: 'Invalid id' });
    return;
  }

  if (!validUpdate(req, ALLOWED_PRODUCT_UPDATE))
    return res.status(400).send({ Error: 'Invalid updates' });

  try {
    const product = await prisma.product.update({
      where: { id: _id },
      data: req.body
    });
    res.status(201).send(product);
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).send();
    res.status(500).send(error.toString());
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct
};
