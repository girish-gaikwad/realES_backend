"use strict";

module.exports = function (sequelize, DataTypes) {
  const Pricingtable = sequelize.define(
    "pricingtable",
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
      allpriceobject: {
        type: DataTypes.JSON,
        allowNull: false
      },
    },
    {
      tableName: "pricingtable",
      timestamps: true, // Enables createdAt and updatedAt fields
    }
  );

  // Corrected association
  Pricingtable.associate = (models) => {
    Pricingtable.belongsTo(models.quotations, { foreignKey: "quotation_id" });  
}
  return Pricingtable;
};
