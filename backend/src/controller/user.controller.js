const UserService = require('../service/user.service');

class UserController {
  static async create(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await UserService.create({ email, password })

      return res.status(201).json(result);
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const token = await UserService.login({ email, password })
      return res.status(200).json({ token })
    } catch (err) {
      next(err);
    }
  }

  static async findAll(_req, res, next) {
    try {
      const result = await UserService.findAll();

      return res.status(200).json(result);
    } catch (err) {
      next(err)
    }
  }

  static async findOne(req, res, next) {
    try {
      const { id } = req.params
      const result = await UserService.findAll({ id: +id });

      return res.status(200).json(result);
    } catch (err) {
      next(err)
    }
  }
};

module.exports = UserController;
