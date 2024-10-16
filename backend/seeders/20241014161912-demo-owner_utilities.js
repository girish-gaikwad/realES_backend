'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('owner_utilities', [
     {
      estateId: 1,
       name: 'Swimming Pool',
       price: 50000
     },
     {
      estateId: 1,
       name: 'Gym',
       price: 20000
     },
     {
      estateId: 1,
       name: 'Spa',
       price: 30000
     },
     {
      estateId: 1,
       name: 'Library',
       price: 10000
     },
     {
      estateId: 1,
       name: 'Games Room',
       price: 15000
     },
     {
      estateId: 2,
       name: 'Swimming Pool',
       price: 60000
     },
     {
      estateId: 2,
       name: 'Gym',
       price: 25000
     },
     {
      estateId: 2,
       name: 'Spa',
       price: 35000
     },
     {
      estateId: 2,
       name: 'Library',
       price: 12000
     },
     {
      estateId: 2,
       name: 'Games Room',
       price: 18000
     },
     {
      estateId: 3,
       name: 'Swimming Pool',
       price: 70000
     },
     {
      estateId: 3,
       name: 'Gym',
       price: 30000
     },
     {
      estateId: 3,
       name: 'Spa',
       price: 40000
     },
     {
      estateId: 3,
       name: 'Library',
       price: 15000
     },
     {
      estateId: 3,
       name: 'Games Room',
       price: 22000
     }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('owner_utilities', null, {});
  }
};

