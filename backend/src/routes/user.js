const express = require('express');
const UserController = require('../controller/user.controller');
const verifyToken = require('../middleware/verifyToken');
const validateSchema = require('../middleware/validateSchema');
const userSchema = require('../schema/user');

const router = express.Router();

router
  .route('/login')
  .post(
    validateSchema(userSchema),
    UserController.login
  );

router
  .route('/user')
  .get(
    verifyToken,
    UserController.findAll,
  )
  .post(UserController.create);

router
  .route('/user/:id')
  .get(
    verifyToken,
    UserController.findOne,
  );


module.exports = router;
