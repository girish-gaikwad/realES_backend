'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      contry_code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phoneno: {
        type: Sequelize.STRING,
        allowNull: true
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lease_start_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      lease_end_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      rent_start_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      grace_period: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      broker_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'brokers',
          key: 'id'
        },
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
