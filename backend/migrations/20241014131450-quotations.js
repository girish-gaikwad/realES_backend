'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('quotations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        allowNull: false
      },
      estate_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'estates',
          key: 'id'
        },
        allowNull: false
      },
      created_at : {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('quotations');
  }
};

