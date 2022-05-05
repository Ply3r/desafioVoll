const { Product } = require('../database/models');
const { Op } = require('sequelize');

class ProductService {
  static async create(payload) {
    const { dataValues: { insertId } } = await Product.create(payload);

    return { id: insertId, ...payload }
  }

  static async findAll({ search, order }) {
    if (!search && !order) {
      const result = await Product.findAll();
  
      return result;
    }

    const orderDefault = !order ? 'name - ASC' : order;
    const orderArray = orderDefault.split(' - ');

    const result = Product.findAll({
      where: {
        name: {
          [Op.like]: `%${search ? search : ''}%`
        },
      },
      order: [orderArray]
    })

    return result;
  }

  static async findOne(id) {
    const result = await Product.findOne({ where: { id } });

    return result;
  }
}

module.exports = ProductService;
