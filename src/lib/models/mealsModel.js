const {DataTypes} = require('sequelize')

const {connection} = require('../database/connection')

const mealsModel = connection.define('meals', {
    id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        references: {
            model: require('./studentModel').studentModel,
            key: 'libraryId'
        }
    },
    studentName: {
        type: DataTypes.STRING,
        allowNull: false,
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