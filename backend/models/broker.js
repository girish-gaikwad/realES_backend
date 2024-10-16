'use strict';

module.exports = (sequelize, DataTypes) => {
  const Broker = sequelize.define('brokers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,  // Ensuring email uniqueness
      validate: {
        isEmail: true // Validates email format
      }
    },
    phoneno: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [10, 15] // Validates length of phone number (adjust as needed)
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'brokers',
    timestamps: true, // This will create `createdAt` and `updatedAt` by default
    createdAt: 'created_at', // Maps createdAt to created_at in DB
    updatedAt: 'updated_at'  // Maps updatedAt to updated_at in DB
  });

  // Associations can be defined here if needed
  Broker.associate = (models) => {
    Broker.hasMany(models.users, { foreignKey: 'broker_id' }); // Corrected to reference the correct foreign key
  };

  return Broker;
};
