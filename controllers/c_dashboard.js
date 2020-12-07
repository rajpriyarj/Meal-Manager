const {to} = require('await-to-js')

const database = require('../src/lib/models/dashboardModel')
const logger = require('./../src/lib/logger/winston')

const getDashboard = async (req, res) => {
    try {
        let err, result

        if (req.params.dashboard_id) {
            [err, result] = await to(database.dashboardModel.findAll({
                where: {
                    library_id: req.params.dashboard_id
                }
            }))
            if (err) {
                throw new Error(err.message)
            }
            
            if (!result[0]) {
                throw new Error("No student found with this id !")
            }

            return res.json({
                'data': result,
                'error': null
            });
        } 
        // else if (req.params.product_id) {
        //     [err, result] = await to(database.dashboardModel.findAll({
        //         where: {
        //             product_id: req.params.product_id
        //         }
        //     }))
        //     if (err) {
        //         throw new Error(err.message)
        //     }

        //     if (!result[0]) {
        //         throw new Error('No dashboard found for this product id !')
        //     }

        //     return res.json({
        //         'data': result,
        //         'error': null
        //     });
        // } 
        // else {
        //     [err, result] = await to(database.dashboardModel.findAll())
        //     if (err) {
        //         throw new Error(err.message)
        //     }
        //     return res.json({
        //         'data': {'Category details': result},
        //         'error': null
        //     });
        // }
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