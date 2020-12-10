const {DataTypes} = require('sequelize')

const {connection} = require('../database/connection')

const menuModel = connection.define('menu', {
    day: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true,
        primaryKey: true
    },
    breakfast: {
        type: DataTypes.STRING,
        notNull: true,
        notEmpty: true
    },
    lunch: {
        type: DataTypes.STRING,
        notNull: true,
        notEmpty: true
    },
    snacks: {
        type: DataTypes.STRING,
        notNull: true,
        notEmpty: true
    },
    dinner: {
        type: DataTypes.STRING,
        notNull: true,
        notEmpty: true
    }
})

module.exports = {
    menuModel
}