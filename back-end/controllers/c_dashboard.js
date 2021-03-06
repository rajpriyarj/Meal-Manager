const {to} = require('await-to-js')

const database = require('../src/lib/models/studentModel')
const logger = require('./../src/lib/logger/winston')

const getDashboard = async (req, res) => {
    try {
        let err, result

        if (req.params.dashboard_id) {
            [err, result] = await to(database.studentModel.findAll({
                attributes: ['libraryId', 'name', 'hostel'],
                where: {
                    libraryId: req.params.dashboard_id
                }
            }))
            if (err) {
                throw new Error(err.message)
            }
            
            if (!result[0]) {
                throw new Error("No student found with this id !")
            }

            return res.json({
                'data': {'Student details': result},
                'error': null
            });
        }
        else {
            [err, result] = await to(database.studentModel.findAll({
                attributes: ['libraryId', 'name', 'hostel']
            }))
            if (err) {
                throw new Error(err.message)
            }
            return res.json({
                'data': {'Student details': result},
                'error': null
            });
        }
    } 
    catch (err) {
        logger.error(err.message)
        return {
            'data': null,
            'error': {
                'message': err.message
            }
        }
    }
}

module.exports = {getDashboard}