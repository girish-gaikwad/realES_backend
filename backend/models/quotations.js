"use strict";

module.exports = function (sequelize, DataTypes) {
  const Quotations = sequelize.define(
    "quotations",
    {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
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
      tableName: "quotations",
      timestamps: true, // Enables createdAt and updatedAt fields
    }
  );

  // Corrected association
  Quotations.associate = (models) => {
    Quotations.belongsTo(models.users, { foreignKey: "user_id" });
    Quotations.belongsTo(models.estates, { foreignKey: "estate_id" });
    Quotations.hasOne(models.pricingtable, { foreignKey: "quotation_id" });
    Quotations.hasMany(models.user_amenities, { foreignKey: "quotation_id" });
  Quotations.hasMany(models.user_utilities, { foreignKey: "quotation_id" });
  }
  return Quotations;
};
