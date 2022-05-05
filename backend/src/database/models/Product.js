const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", 
    {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      quantity: DataTypes.INTEGER,
      image_1: DataTypes.STRING,
      image_2: DataTypes.STRING,
    },
    {
      tableName: 'product',
      timestamps: false,
      underscored: true,
    }
  );

  return Product;
}

module.exports = Product;
