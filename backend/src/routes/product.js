const express = require('express');
const ProductController = require('../controller/product.controller');
const verifyToken = require('../middleware/verifyToken');
const validateSchema = require('../middleware/validateSchema');
const productSchema = require('../schema/product');

const router = express.Router();

router
  .route('/product')
  .get(
    verifyToken,
    ProductController.findAll
  )
  .post(
    verifyToken,
    validateSchema(productSchema),
    ProductController.create
  );

router
  .route('/product/:id')
  .get(
    verifyToken,
    ProductController.findOne
  );


module.exports = router;
