const {to} = require('await-to-js')

const database = require('../src/lib/models/mealsModel')
const logger = require('./../src/lib/logger/winston')
const mealsValue = require('./../src/lib/Payload/validation')

const postMeals = async (req, res) => {
    try {
        let err, result

        [err, result] = await to(mealsValue.mealsSelection.validateAsync(req.body))
        if (err) {
            throw new Error(err.message)
        }

        [err, result] = await to(database.mealsModel.create(req.body))
        if (err) {
            throw new Error(err.message)
        }

        return res.json({
            'data': {"Success": "Option Added"},
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
        [err, result] = await to(mealsValue.mealsSelection.breakfast.validateAsync(req.body))
        if (err) {
            throw new Error(err.message)
        }

        [err, result] = await to(database.mealsModel.update({
            breakfast: req.body.breakfast
        }, {
            where: {
                libraryId: req.user.libraryId
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
        [err, result] = await to(mealsValue.mealsSelection.lunch.validateAsync(req.body))
        if (err) {
            throw new Error(err.message)
        }

        [err, result] = await to(database.mealsModel.update({
            lunch: req.body.lunch
        }, {
            where: {
                libraryId: req.user.libraryId
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
        [err, result] = await to(mealsValue.mealsSelection.snacks.validateAsync(req.body))
        if (err) {
            throw new Error(err.message)
        }

        [err, result] = await to(database.mealsModel.update({
            snacks: req.body.snacks
        }, {
            where: {
                libraryId: req.user.libraryId
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
        [err, result] = await to(mealsValue.mealsSelection.dinner.validateAsync(req.body))
        if (err) {
            throw new Error(err.message)
        }

        [err, result] = await to(database.mealsModel.update({
            dinner: req.body.dinner
        }, {
            where: {
                libraryId: req.user.libraryId
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
    postMeals,
    updateBreakfast,
    updateLunch,
    updateSnacks,
    updateDinner
}
