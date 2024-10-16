'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('estates', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      avg_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bed: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bathtub: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bhk: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sqft: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      is_booked: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      broker_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'brokers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('estates');
  }
};

