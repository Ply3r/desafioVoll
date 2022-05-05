const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", 
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      balance: DataTypes.DOUBLE,
    },
    {
      tableName: 'users',
      timestamps: false,
      underscored: true,
    }
  );

  return User;
}

module.exports = User;
