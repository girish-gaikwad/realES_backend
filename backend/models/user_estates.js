"use strict";

module.exports = function (sequelize, DataTypes) {
  const User_estates = sequelize.define(
    "user_estates",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users", // Name of the model the foreign key references
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      estate_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "estates", // Name of the model the foreign key references
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "user_estates", // Explicitly define the table name
      timestamps: true, // Enable createdAt and updatedAt fields
      underscored: true, // Use snake_case column names in the database
    }
  );

  // Associations
  User_estates.associate = (models) => {
    User_estates.belongsTo(models.users, {
      foreignKey: "user_id",
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    User_estates.belongsTo(models.estates, {
      foreignKey: "estate_id",
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };

  return User_estates;
};
