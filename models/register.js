var isUnique = require("../routes/unique");
const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                isUnique: isUnique("User", "username")
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                isUnique: isUnique("User", "email")
            }
        },
        password: {
            type: Sequelize.TEXT,
            allowNull: false
            
        }

    });
    return user;
};