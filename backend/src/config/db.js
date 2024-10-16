 // database.js
const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize
const sequelize = new Sequelize('realES', 'root', '2055', {
  host: 'localhost',  // Change this if your database is hosted elsewhere
  dialect: 'mysql', // Change to 'mysql' or 'sqlite' if using those databases
});


module.exports = sequelize;

