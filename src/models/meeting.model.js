const { DataTypes } = require('sequelize')
const { database } = require('../database/connection')
//teacher meeting model
const Meeting = database.define("Meeting", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_parent_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    meetingStartTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    meetingEndTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
})
database.sync()
module.exports.Meeting=Meeting