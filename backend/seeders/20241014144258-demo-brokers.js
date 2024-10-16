'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('brokers', [
      {
        name: 'Broker One',
        email: 'broker1@example.com',
        phoneno: '1234567890',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Broker Two',
        email: 'broker2@example.com',
        phoneno: '0987654321',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Broker Three',
        email: 'broker3@example.com',
        phoneno: '1122334455',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('brokers', null, {});
  }
};
