const {DataTypes, Sequelize} = require('sequelize')

const {connection} = require('../database/connection')

const dashboardModel = connection.define('dashboard', {
    // id: {
    //     type: DataTypes.BIGINT(11),
    //     notNull: true,
    //     notEmpty: true,
    //     primaryKey: true,
    //     autoIncrement: true
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
    // studentName: {
    //     type: DataTypes.STRING,
    //     notEmpty: true,
    //     notNull: true,
    //     references: {
    //         model: require('./studentModel').studentModel,
    //         key: 'name'
    //     }
    // },
    // hostelName: {
    //     type: DataTypes.STRING,
    //     notEmpty: true,
    //     notNull: true,
    //     references: {
    //         model: require('./studentModel').studentModel,
    //         key: 'hostel'
    //     }
    // },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        notNull: true,
        notEmpty: true
    }
})

module.exports = {dashboardModel}