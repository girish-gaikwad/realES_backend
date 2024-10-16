'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('pricingtable', {
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
     allpriceobject: {
       type: Sequelize.JSON,
       allowNull: false
     }
   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
