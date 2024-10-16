"use strict";

module.exports = function (sequelize, DataTypes) {
    const Users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
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
        contry_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneno: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [10, 15],
                isNumeric: true // Ensures only numbers are allowed
            }
        },
        
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lease_start_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        lease_end_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        rent_start_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        grace_period: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 0 // Ensures grace_period is not negative
            }
        },
        
        broker_id:{
            type: DataTypes.INTEGER,
            allowNull: true

        }
    }, {
        tableName: 'users',
        timestamps: false // Enables createdAt and updatedAt fields
    });

    // Corrected association
    Users.associate = (models) => {
        Users.belongsTo(models.brokers, { foreignKey: 'broker_id' }); // Changed to 'broker_id' to match your foreign key definition
    };

    return Users;
};
