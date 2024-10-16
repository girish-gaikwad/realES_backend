'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'user1',
        email: 'user1@example.com',
        phoneno: '1234567890',
        contry_code: '+91',
        role: 'tenant',
        lease_start_date: new Date(),
        lease_end_date: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        rent_start_date: new Date(),
        grace_period: 5,
        created_at: new Date(),
        updated_at: new Date(),
        broker_id: 1  // Adjust this based on your broker table data
      },
      {
        username: 'user2',
        email: 'user2@example.com',
        phoneno: '0987654321',
        contry_code: '+91',
        role: 'landlord',
        lease_start_date: new Date(),
        lease_end_date: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        rent_start_date: new Date(),
        grace_period: 7,
        created_at: new Date(),
        updated_at: new Date(),
        broker_id: 2  // Adjust this based on your broker table data
      },
      {
        username: 'user3',
        email: 'user3@example.com',
        phoneno: '1122334455',
        contry_code: '+91',
        role: 'tenant',
        lease_start_date: new Date(),
        lease_end_date: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        rent_start_date: new Date(),
        grace_period: 3,
        created_at: new Date(),
        updated_at: new Date(),
        broker_id: 1
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

