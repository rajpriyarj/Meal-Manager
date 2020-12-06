const {DataTypes} = require('sequelize')

const {connection} = require('../database/connection')

const dashboardModel = connection.define('dashboard', {
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
    hostelName: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: require('./studentModel').studentModel,
            key: 'hostel'
        }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        notNull: true,
        notEmpty: true
    }
})

module.exports = {dashboardModel}