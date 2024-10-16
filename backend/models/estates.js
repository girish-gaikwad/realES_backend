"use strict";

module.exports = function (sequelize, DataTypes) {
  const Estates = sequelize.define(
    "estates",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avg_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bathtub: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bhk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sqft: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_booked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      broker_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "brokers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {
      tableName: "estates",
      timestamps: true,
      createdAt: 'created_at', // Maps createdAt to created_at in DB
    updatedAt: 'updated_at'  // Maps updatedAt to updated_at in DB
    }
  );

  // Corrected association
  Estates.associate = (models) => {
    Estates.hasMany(models.user_estates,{foreginKey:'estate_id'})
    Estates.hasMany(models.quotations,{foreginKey:'estate_id'})
    Estates.hasMany(models.user_amenities,{foreginKey:'estate_id'})
    Estates.hasMany(models.owner_utilities,{foreginKey:'estate_id'})
    Estates.hasMany(models.owner_amenities,{foreginKey:'estate_id'})
    Estates.hasMany(models.user_utilities,{foreginKey:'estate_id'})
  };

  return Estates;
};
