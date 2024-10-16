'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_utilities', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      quotation_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'quotations',
          key: 'id'
        },
        allowNull: false
      },
      owner_utilities_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'owner_utilities',
          key: 'id'
        }
      },
      estate_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'estates',
          key: 'id'
        },
        allowNull: false
      },
      discount_type: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      discount_amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_utilities');
  }
};
