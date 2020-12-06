const {DataTypes} = require('sequelize')

const {connection} = require('../database/connection')

const mealsModel = connection.define('meals', {
    id: {
        type: DataTypes.BIGINT(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    library_id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        references: {
            model: require('../models/studentModel').studentModel,
            key: 'libraryId'
        }
    },
    studentName: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: require('../models/studentModel').studentModel,
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