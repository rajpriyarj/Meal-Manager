const {DataTypes} = require('sequelize')

const {connection} = require('../database/connection')

const mealsModel = connection.define('meals', {
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
    studentName: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true,
        references: {
            model: require('./studentModel').studentModel,
            key: 'name'
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