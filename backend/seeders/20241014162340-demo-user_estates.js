'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_estates', [
      {
        user_id: 1,
        estate_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        estate_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        estate_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      
      },
      {
        user_id: 2,
        estate_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      
      },
      {
        user_id: 2,
        estate_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_estates', null, {});
  }
};

