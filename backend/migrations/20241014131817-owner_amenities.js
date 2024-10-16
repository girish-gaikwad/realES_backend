'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create the owner_amenities table
    await queryInterface.createTable('owner_amenities', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      estateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'estates', // Reference to the estates table
          key: 'id', // Foreign key in the estates table
        },
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    // Drop the owner_amenities table
    await queryInterface.dropTable('owner_amenities');
  },
};
