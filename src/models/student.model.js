const { DataTypes } = require('sequelize')
const { database } = require('../database/connection')
const { Classes } = require('./class.model')
//student model
const Student = database.define("Student", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    class_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
//association
database.sync()
module.exports.Student=Student