"use strict";

module.exports = function (sequelize, DataTypes) {
  const Owner_amenities = sequelize.define(
    "owner_amenities",
    {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
     estateId: {
        type: DataTypes.INTEGER,
        references: {
          model: "estates",
          key: "id",
        },
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "owner_amenities",
      timestamps: false, // Enables createdAt and updatedAt fields
    }
  );

  // Corrected association
  Owner_amenities.associate = (models) => {
      Owner_amenities.hasMany(models.user_amenities, { foreignKey: "owner_amenities_id" });
      Owner_amenities.belongsTo(models.estates, { foreignKey: "estateId" });
    }
  return Owner_amenities;
};
