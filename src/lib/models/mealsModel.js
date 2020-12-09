const {DataTypes} = require('sequelize')

const {connection} = require('../database/connection')

const mealsModel = connection.define('meals', {
    // meal_id: {
    //     type: DataTypes.BIGINT(11),
    //     autoIncrement: true,
    //     primaryKey: true,
    //     notEmpty: true,
    //     notNull: true
    // },
    library_id: {
        type: DataTypes.STRING,
        notNull: true,
        notEmpty: true,
        primaryKey: true,
        references: {
            model: require('./studentModel').studentModel,
            key: 'libraryId'
        }
    },
    breakfast: {
        type: DataTypes.BOOLEAN
    },
    lunch: {
        type: DataTypes.BOOLEAN
    },
    snacks: {
        type: DataTypes.BOOLEAN
    },
    dinner: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = {
    mealsModel
}