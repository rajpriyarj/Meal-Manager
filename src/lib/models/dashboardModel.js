const {DataTypes, Sequelize} = require('sequelize')

const {connection} = require('../database/connection')

const dashboardModel = connection.define('dashboard', {
    library_id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        references: {
            model: require('./studentModel').studentModel,
            key: 'libraryId'
        },
        primaryKey: true
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
        defaultValue: Sequelize.NOW,
        allowNull: false,
        notNull: true,
        notEmpty: true
    }
})

module.exports = {dashboardModel}