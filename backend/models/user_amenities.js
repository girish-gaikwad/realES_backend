"use strict";

module.exports = function (sequelize, DataTypes) {
  const User_amenities = sequelize.define(
    "user_amenities",
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
      owner_amenities_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "owner_amenities",
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
      tableName: "user_amenities",
      timestamps: true, // Enables createdAt and updatedAt fields
    }
  );

  // Corrected association
  User_amenities.associate = (models) => {
    User_amenities.belongsTo(models.quotations, { foreignKey: "quotation_id" });
    User_amenities.belongsTo(models.estates, { foreignKey: "estate_id" });
    User_amenities.belongsTo(models.owner_amenities, { foreignKey: "owner_amenities_id" });
}
  return User_amenities;
};
