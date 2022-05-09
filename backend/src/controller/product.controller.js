const ProductService = require('../service/product.service');

class ProductController {
  static async create(req, res, next) {
    try {
      const {
        name,
        price,
        quantity,
        image_1,
        image_2,
      } = req.body;

      if (req.user.role !== 'admin') throw { status: 401, message: 'Not Authorized!' }

      const result = await ProductService.create({ name, price, quantity, image_1, image_2 })

      return res.status(201).json(result);
    } catch (err) {
      next(err)
    }
  }

  static async findAll(req, res, next) {
    try {
      const { search, order } = req.query
      const result = await ProductService.findAll({ search, order });

      return res.status(200).json(result);
    } catch (err) {
      next(err)
    }
  }

  static async findOne(req, res, next) {
    try {
      const { id } = req.params
      const result = await ProductService.findAll({ id: +id });

      return res.status(200).json(result);
    } catch (err) {
      next(err)
    }
  }
};

module.exports = ProductController;
