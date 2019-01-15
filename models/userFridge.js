var isUnique = require("../routes/unique");

module.exports = function(sequelize, DataTypes){
    var food = sequelize.define("Food", {
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        upc: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        useBy: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        remaining_percent: {
            type: DataTypes.INTEGER,
            defaultValue: 100
        },
        favorite: {
            type: DataTypes.BOOLEAN,
            defualtValue: false
        },
        mustHave: {
            type: DataTypes.BOOLEAN,
            defualtValue: false
        }
    });
    return food;
}