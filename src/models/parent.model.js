const { DataTypes } = require('sequelize')
const { database } = require('../database/connection')
//Parent model
const Parent = database.define("Parent", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
database.sync()
module.exports.Parent=Parent