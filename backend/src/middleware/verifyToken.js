const Jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const secret = process.env.SECRET;

const verifyToken = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      throw { status: 404, message: 'Token not found' }
    }
  
    const { email, password } = Jwt.verify(authorization, secret);
    const userExists = await User.findOne({ where: { email, password } })
  
    if (!userExists) {
      throw { status: 404, message: 'User not found' }
    }

    req.user = userExists;
  } catch (err) {
    next(err)
  }

  next();
}

module.exports = verifyToken;
