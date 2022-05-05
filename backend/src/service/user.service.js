const { User } = require('../database/models');
const { verifyHash, genereteHashPassword } = require('../utils/genHashPass');
const Jwt = require('jsonwebtoken');

const secret = process.env.SECRET;
const jsonConfig = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

class UserService {
  static async login({ email, password }) {
    const userExists = await User.findOne({ where: { email } });

    if (!userExists) {
      throw { status: 401, message: 'Invalid Email or Password!' };
    }

    const { dataValues: { password: hash } } = userExists;
    const isPasswordValid = verifyHash(password, hash);

    if (!isPasswordValid) {
      throw { status: 401, message: 'Invalid Email or Password!' }
    }

    const token = Jwt.sign({ email, password: hash }, secret, jsonConfig);
    return token;
  }

  static async create({ email, password }) {
    const hashPass = genereteHashPassword(password);

    const { dataValues: { insertId } } = await User.create({ email, password: hashPass, role: 'user' });
    return { id: insertId, email, role: 'user' }
  }

  static async findAll() {
    const result = await User.findAll({ attributes: { exclude: ['password'] } });

    return result;
  }

  static async findOne(id) {
    const result = await User.findOne({ 
      where: { id }, 
      attributes: { exclude: ['password'] } 
    });

    return result;
  }
};

module.exports = UserService;
