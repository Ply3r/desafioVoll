const { Purchase, Product, User } = require('../database/models');

class PurchaseService {
  static async findAll({ id, page }) {
    const result = await Purchase.findAll({
      offset: 15 * page,
      limit: 15,
      include: [
        { model: Product, as: 'product' },
        { model: User, as: 'user', attributes: { exclude: ['password'] } }
      ],
      where: { user_id: id }
    })

    return result;
  }

  static async purchase({ user_id, product_id }) {
    const product = await Product.findOne({ where: { id: product_id } });

    if (!product) {
      throw { status: 404, message: 'Product not found!' }
    }

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
      throw { status: 404, message: 'User not found!' }
    }

    if (user.balance - product.price < 0) {
      throw { status: 401, message: 'Insufficient balance!' }
    }

    if (product.quantity - 1 < 0) {
      throw { status: 401, message: 'Insufficient product quantity!' }
    }

    await Product.update({ quantity: product.quantity - 1 }, { where: { id: product.id } });
    await User.update({ balance: user.balance - product.price }, { where: { id: user.id } });
    const { dataValues: { insertId } } = await Purchase.create({ user_id, product_id });

    return { id: insertId, user_id, product_id };
  }
}

module.exports = PurchaseService;
