const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(6).required().messages({
    'any.required': '400|"name" is required',
    'string.base': '400|"name" is a string',
    'string.min': '400|"name" is at lest 6 characteres',
    'string.empty': '400|"name" is not allowed to be empty"',
  }),
  price: Joi.number().positive().required().messages({
    'any.required': '400|"price" is required',
    'number.base': '400|"price" is a number',
    'number.positive': '400|"price" is a positive number',
    'number.empty': '400|"price" is not allowed to be empty"',
  }),
  quantity: Joi.number().positive().required().messages({
    'any.required': '400|"quantity" is required',
    'number.base': '400|"quantity" is a number',
    'number.positive': '400|"quantity" is a positive number',
    'number.empty': '400|"quantity" is not allowed to be empty"',
  }),
  image_1: Joi.string().required().messages({
    'any.required': '400|"image_1" is required',
    'string.base': '400|"image_1" is a string',
    'string.empty': '400|"image_1" is not allowed to be empty"',
  }),
  image_2: Joi.string().required().messages({
    'any.required': '400|"image_2" is required',
    'string.base': '400|"image_2" is a string',
    'string.empty': '400|"image_2" is not allowed to be empty"',
  }),
});

module.exports = productSchema;
