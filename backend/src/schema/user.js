const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': '400|"email" is required',
    'string.base': '400|"email" is a string',
    'string.empty': '400|"email" is not allowed to be empty"',
    'string.email': '400|"email" must be a valid email',
  }),
  password: Joi.string().min(4).max(20).required().messages({
    'any.required': '400|"password" is required',
    'string.base': '400|"password" is a string',
    'string.empty': '400|"password" is not allowed to be empty"',
    'string.min': '400|"password" length must be 4 characters long min',
    'string.max': '400|"password" length must be 20 characters long max',
  }),
});

module.exports = userSchema;
