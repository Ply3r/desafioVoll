const express = require('express');
const cors = require('cors');
const error = require('../middleware/error');
const productRouter = require('../routes/product');
const userRouter = require('../routes/user');

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use(productRouter);
app.use(userRouter);

app.use(error);

module.exports = app;
