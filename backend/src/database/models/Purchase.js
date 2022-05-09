const Purchase = (sequelize, DataTypes) => {
  const Purchase = sequelize.define("Purchase", 
    {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'purchase',
      underscored: true,
    }
  );

  Purchase.associate = (model) => {
    Purchase.belongsTo(model.Product, { foreignKey: 'product_id', as: 'product' });
    Purchase.belongsTo(model.User, { foreignKey: 'user_id', as: 'user' });
  }

  return Purchase;
}

module.exports = Purchase;
