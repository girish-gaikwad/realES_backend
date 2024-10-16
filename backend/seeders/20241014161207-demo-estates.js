'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    await queryInterface.bulkInsert('estates', [
      {
        name: 'gaikwad mansion',
        avg_price: 10000,
        bed: 2,
        bathtub: 1,
        bhk: 2,
        address: 'mumbai',
        sqft: 2000,
        is_booked: false,
        broker_id: 1,
        created_at: date,
        updated_at: date,
      },
      {
        name: 'sharma estate',
        avg_price: 12000,
        bed: 3,
        bathtub: 2,
        bhk: 3,
        address: 'pune',
        sqft: 3000,
        is_booked: false,
        broker_id: 2,
        created_at: date,
        updated_at: date,
      },
      {
        name: 'jadhav estate',
        avg_price: 15000,
        bed: 4,
        bathtub: 3,
        bhk: 4,
        address: 'nagpur',
        sqft: 4000,
        is_booked: false,
        broker_id: 1,
        created_at: date,
        updated_at: date,
      },
      {
        name: 'patil estate',
        avg_price: 20000,
        bed: 5,
        bathtub: 4,
        bhk: 5,
        address: 'aurangabad',
        sqft: 5000,
        is_booked: false,
        broker_id: 1,
        created_at: date,
        updated_at: date,
      },
      {
        name: 'kulkarni estate',
        avg_price: 25000,
        bed: 6,
        bathtub: 5,
        bhk: 6,
        address: 'nashik',
        sqft: 6000,
        is_booked: false,
        broker_id: 2,
        created_at: date,
        updated_at: date,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('estates', null, {});
  }
};

