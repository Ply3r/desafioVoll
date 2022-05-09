const express = require('express');
const PurchaseController = require('../controller/purchase.controller');
const verifyToken = require('../middleware/verifyToken');
const validateSchema = require('../middleware/validateSchema');

const router = express.Router();

router
  .route('/purchase')
  .get(
    verifyToken,
    PurchaseController.findAll
  );

router
  .route('/purchase/:id')
  .post(
    verifyToken,
    PurchaseController.purchase
  );


module.exports = router;
