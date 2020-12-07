const {to} = require('await-to-js')

const database = require('../src/lib/models/mealsModel')
const logger = require('./../src/lib/logger/winston')
const mealsValue = require('./../src/lib/Payload/validation')

const getMeals = async (req, res) => {
    try {
        let err, result

        if (req.params.meals_id) {
            [err, result] = await to(database.mealsModel.findAll({
                // attributes: ['breakfast', 'lunch', 'snacks', 'dinner'],
                where: {
                    library_id: req.params.meals_id
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
        else {
            [err, result] = await to(database.mealsModel.findAll())
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

const postMeals = async (req, res) => {
    try {
        let err, result

        [err, result] = await to(mealsValue.mealsSelection.validateAsync(req.body))
        if (err) {
            throw new Error(err.message)
        }

        let newMeal = {
            library_id : req.user['library_id'],
            ...req.body
        };
        // console.log(newMeal);

        [err, result] = await to(database.mealsModel.create(newMeal))
        if (err) {
            throw new Error(err.message)
        }

        return res.json({
            'data': {"Success": "Meals Selected"},
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
    getMeals,
    postMeals,
    updateBreakfast,
    updateLunch,
    updateSnacks,
    updateDinner
}
