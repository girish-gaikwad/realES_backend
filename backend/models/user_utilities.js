"use strict";

module.exports = function (sequelize, DataTypes) {
  const User_utilities = sequelize.define(
    "user_utilities",
    {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      quotation_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "quotations",
          key: "id",
        },
        allowNull: false,
      },
      owner_utilities_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "owner_utilities",
          key: "id",
        }
      },
      discount_type: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      discount_amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      estate_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "estates",
          key: "id",
        },
        allowNull: false,
      },
    },
    {
      tableName: "user_utilities",
      timestamps: true, // Enables createdAt and updatedAt fields
    }
  );

  // Corrected association
  User_utilities.associate = (models) => {
    User_utilities.belongsTo(models.quotations, { foreignKey: "quotation_id" });
    User_utilities.belongsTo(models.estates, { foreignKey: "estate_id" });
    User_utilities.belongsTo(models.owner_utilities, { foreignKey: "owner_utilities_id" });
}
  return User_utilities;
};
