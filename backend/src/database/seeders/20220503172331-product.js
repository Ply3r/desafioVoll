'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
    {
      email: 'admin@admin.com',
      password: '$2a$08$7XF3z0E/zjTKViEco/EAMOU7JLTrlhxgw6ltofJFY6ORzPZize3fS',
      role: 'admin',
      balance: 5000.00
    },
    {
      email: 'user@user.com',
      password: '$2a$08$uf/KD7Rqn2M6ZXcunKE7sen1uTqbHXTAcm2T4Mx7CVDhq5LRVQVmq',
      role: 'user',
      balance: 1000.00
    },
    ], {});

    await queryInterface.bulkInsert('product', [{
      name: 'Teste1',
      price: 50.00,
      quantity: 15,
      image_1: "Teste",
      image_2: "Teste",
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product', null, {});
  }
};
