const { DataTypes } = require('sequelize')
const { database } = require('../database/connection')
//teacher model
const Teacher = database.define("Teacher", {
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
//association
database.sync()
module.exports.Teacher=Teacher