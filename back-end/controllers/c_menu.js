const {to} = require('await-to-js')

const database = require('../src/lib/models/menuModel')
const logger = require('./../src/lib/logger/winston')
const menuValue = require('./../src/lib/Payload/validation')

const getMenu = async (req, res) => {
    try {
        let err, result

        if (req.params.day) {
            [err, result] = await to(database.menuModel.findAll({
                // attributes: ['breakfast', 'lunch', 'snacks', 'dinner'],
                where: {
                    day: req.params.day
                }
            }))
            if (err) {
                throw new Error(err.message)
            }
            
            if (!result[0]) {
                throw new Error("No day found with this !")
            }

            return res.json({
                'data': {'Day': result},
                'error': null
            });
        }
        else {
            [err, result] = await to(database.mealsModel.findAll())
            if (err) {
                throw new Error(err.message)
            }
            return res.json({
                'data': {result},
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

const postMenu = async (req, res) => {
    try {
        let err, result

        [err, result] = await to(menuValue.menu.validateAsync(req.body))
        if (err) {
            throw new Error(err.message)
        }

        // let newMeal = {
        //     library_id : req.user['library_id'],
        //     ...req.body
        // };
        // console.log(newMeal);

        [err, result] = await to(database.menuModel.findAll({
            where: {
                day: req.body.day
            }
        }))
        if (err) {
            throw new Error(err.message)
        }
        if (result[0]) {
            throw new Error(' Menu for this day already exists !')
        }

        [err, result] = await to(database.menuModel.create(req.body))
        if (err) {
            throw new Error(err.message)
        }
        if (result[0]) {
            throw new Error(' Menu is already available for this day !')
        }

        return res.json({
            'data': {"Success": "Menu Added"},
            'error': null
        });
    } catch (err) {
        logger.error(err.message)
        return res.json({
            'data': null,
            'error': {
                'message': err.message
            }
        });
    }
}

const updateBreakfast = async (req, res) => {
    try {
        let err, result
        [err, result] = await to(menuValue.menuBreakfast.validateAsync(req.body))
        if (err) {
            throw new Error(err.message)
        }

        [err, result] = await to(database.menuModel.update({
            breakfast: req.body.breakfast
        }, {
            where: {
                // library_id: req.user['library_id']
                day: req.params.day
            }
        }))
        if (err) {
            throw new Error(err.message)
        }

        return res.json({
            'data': {
                'message': 'Breakfast updated successfully!'
            }, 'error': null
        })
    } catch (err) {
        logger.error(err.message)
        return res.json({
            'data': null,
            'error': {
                'message': err.message
            }
        })
    }
}

const updateLunch = async (req, res) => {
    try {
        let err, result
        [err, result] = await to(menuValue.menuLunch.validateAsync(req.body))
        if (err) {
            throw new Error(err.message)
        }

        [err, result] = await to(database.menuModel.update({
            lunch: req.body.lunch
        }, {
            where: {
                // library_id: req.user['library_id']
                day: req.params.day
            }
        }))
        if (err) {
            throw new Error(err.message)
        }

        return res.json({
            'data': {
                'message': 'Lunch updated successfully!'
            }, 'error': null
        })
    } catch (err) {
        logger.error(err.message)
        return res.json({
            'data': null,
            'error': {
                'message': err.message
            }
        })
    }
}

const updateSnacks = async (req, res) => {
    try {
        let err, result
        [err, result] = await to(menuValue.menuSnacks.validateAsync(req.body))
        if (err) {
            throw new Error(err.message)
        }

        [err, result] = await to(database.menuModel.update({
            snacks: req.body.snacks
        }, {
            where: {
                // library_id: req.user['library_id']
                day: req.params.day
            }
        }))
        if (err) {
            throw new Error(err.message)
        }

        return res.json({
            'data': {
                'message': 'Snacks successfully!'
            }, 'error': null
        })
    } catch (err) {
        logger.error(err.message)
        return res.json({
            'data': null,
            'error': {
                'message': err.message
            }
        })
    }
}

const updateDinner = async (req, res) => {
    try {
        let err, result
        [err, result] = await to(menuValue.menuSnacks.validateAsync(req.body))
        if (err) {
            throw new Error(err.message)
        }

        [err, result] = await to(database.menuModel.update({
            dinner: req.body.dinner
        }, {
            where: {
                // library_id: req.user['library_id']
                day: req.params.day
            }
        }))
        if (err) {
            throw new Error(err.message)
        }

        return res.json({
            'data': {
                'message': 'Dinner successfully!'
            }, 'error': null
        })
    } catch (err) {
        logger.error(err.message)
        return res.json({
            'data': null,
            'error': {
                'message': err.message
            }
        })
    }
}

module.exports = {
    getMenu,
    postMenu,
    updateBreakfast,
    updateLunch,
    updateSnacks,
    updateDinner
}
