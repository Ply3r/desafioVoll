const PurchaseService = require('../service/purchase.service');

class PurchaseController {
  static async purchase(req, res, next) {
    try {
      const { id } = req.params;

      const result = await PurchaseService.purchase({ product_id: id, user_id: req.user.id });

      return res.status(201).json(result);
    } catch (err) {
      next(err)
    }
  }

  static async findAll(req, res, next) {
    try {
      const { page } = req.query;
      const { id } = req.user

      const result = await PurchaseService.findAll({ id, page });

      return res.status(200).json(result);
    } catch (err) {
      next(err)
    }
  }

  static async getPages(req, res, next) {
    try {
      const { id } = req.user
      const result = await PurchaseService.findAll({ id });

      return res.status(200).json(result);
    } catch (err) {
      next(err)
    }
  }
};

module.exports = PurchaseController;
