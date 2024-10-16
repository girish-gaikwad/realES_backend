'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('owner_amenities', [
      {
        id: 1,
        estateId: 1,
        name: 'Wifi',
        price: 100
      },
      {
        id: 2,
        estateId: 1,
        name: 'Parking',
        price: 200
      },
      {
        id: 3,
        estateId: 1,
        name: 'Swimming Pool',
        price: 500
      },
      {
        id: 4,
        estateId: 1,
        name: 'Gym',
        price: 300
      },
      {
        id: 5,
        estateId: 1,
        name: 'Spa',
        price: 200
      },
      {
        id: 6,
        estateId: 1,
        name: 'Cafeteria',
        price: 150
      },
      {
        id: 7,
        estateId: 1,
        name: 'Games Room',
        price: 250
      },
      {
        id: 8,
        estateId: 1,
        name: 'Library',
        price: 100
      },
      {
        id: 9,
        estateId: 1,
        name: 'Yoga Room',
        price: 200
      },
      {
        id: 10,
        estateId: 1,
        name: 'Concierge',
        price: 300
      },
      {
        id: 11,
        estateId: 1,
        name: 'Meeting Room',
        price: 400
      },
      {
        id: 12,
        estateId: 1,
        name: 'Party Hall',
        price: 500
      },
      {
        id: 13,
        estateId: 1,
        name: 'Terrace',
        price: 300
      },
      {
        id: 14,
        estateId: 1,
        name: 'Garden',
        price: 200
      },
      {
        id: 15,
        estateId: 1,
        name: 'Playground',
        price: 150
      },
      {
        id: 16,
        estateId: 1,
        name: 'Pet Friendly',
        price: 100
      },
      {
        id: 17,
        estateId: 1,
        name: 'Creche',
        price: 200
      },
      {
        id: 18,
        estateId: 1,
        name: 'Nursery',
        price: 300
      },
      {
        id: 19,
        estateId: 1,
        name: 'Primary School',
        price: 400
      },
      {
        id: 20,
        estateId: 1,
        name: 'Secondary School',
        price: 500
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('owner_amenities', null, {});

  }
};

