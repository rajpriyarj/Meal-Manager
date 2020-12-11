const {DataTypes} = require('sequelize')

const {connection} = require('../database/connection')

const superAdminModel = connection.define('superAdmin', {
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
    college: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true
    }
})

module.exports = {
    superAdminModel
}