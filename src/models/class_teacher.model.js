const { DataTypes } = require('sequelize')
const { database } = require('../database/connection')
//teacher TeachersClasses model
const TeachersClasses = database.define("TeachersClasses", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    class_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

})
database.sync()
module.exports.TeachersClasses=TeachersClasses