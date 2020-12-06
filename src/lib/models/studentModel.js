const {DataTypes} = require('sequelize')

const {connection} = require('../database/connection')

const studentModel = connection.define('student', {
    libraryId: {
        type: DataTypes.STRING,
        notNull: true,
        notEmpty: true
    },
    name: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true
    },
    email: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true
    },
    encryptedPassword: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true
    },
    hostel: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true
    },
})

module.exports = {
    studentModel
}