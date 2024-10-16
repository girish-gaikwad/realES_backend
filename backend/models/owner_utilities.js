"use strict";

module.exports = function (sequelize, DataTypes) {
  const Owner_utilities = sequelize.define(
    "owner_utilities",
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
      tableName: "owner_utilities",
      timestamps: false, // Enables createdAt and updatedAt fields
    }
  );

  // Corrected association
  Owner_utilities.associate = (models) => {
    Owner_utilities.hasMany(models.user_utilities, { foreignKey: "owner_utilities_id" });
    Owner_utilities.belongsTo(models.estates, { foreignKey: "estateId" });
    }
  return Owner_utilities;
};
