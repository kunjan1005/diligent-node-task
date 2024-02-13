const { DataTypes } = require('sequelize')
const { database } = require('../database/connection')
const { Student } = require('./student.model')
//student model
const Classes = database.define("Class", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    class_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
database.sync()
module.exports.Classes=Classes