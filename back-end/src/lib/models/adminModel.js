const {DataTypes} = require('sequelize')

const {connection} = require('../database/connection')

const adminModel = connection.define('admin', {
    id: {
        type: DataTypes.STRING,
        autoIncrement:true,
        notNull: true,
        notEmpty: true
    },
    name: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true,
    },
    email: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true,
        primaryKey: true
    },
    encryptedPassword: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true
    },
    mobile_number: {
        type: DataTypes.INTEGER,
        notEmpty: true,
        notNull: true
    },
    hostel: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true
    }
})

module.exports = {
    adminModel
}