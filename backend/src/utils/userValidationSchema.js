const Joi = require('joi');

const userValidationSchema = Joi.object({
  name: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .pattern(/^[a-zA-Z0-9]{3,30}$/),
  phoneNum: Joi.string(),
  dateOfBirth: Joi.number().integer().min(2000).max(2010),
  gender: Joi.string().valid('Male', 'Female'),
  address: Joi.string()
});

module.exports = userValidationSchema;
