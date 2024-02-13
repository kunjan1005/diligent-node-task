const { DataTypes } = require('sequelize')
const { database } = require('../database/connection')
const { Parent } = require('./parent.model')
const { Student } = require('./student.model')
//teacher classes model
const StudentParent = database.define("StudentParent", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

})
database.sync()
module.exports.StudentParent=StudentParent