'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_estates', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // Refers to 'users' table
          key: 'id'
        },
        onUpdate: 'CASCADE', // Ensures changes in the referenced table update here
        onDelete: 'CASCADE', // Cascades delete to ensure data integrity
        allowNull: false
      },
      estate_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'estates', // Refers to 'estates' table
          key: 'id'
        },
        onUpdate: 'CASCADE', // Ensures changes in the referenced table update here
        onDelete: 'CASCADE', // Cascades delete to ensure data integrity
        allowNull: false
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Automatically set timestamp
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') // Automatically update on record changes
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_estates');
  }
};
