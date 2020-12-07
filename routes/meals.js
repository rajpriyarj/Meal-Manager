var express = require('express');
var router = express.Router();

const Meals = require('../controllers/c_meals')
const {authenticate} = require('../controllers/auth');
const auth = require('../controllers/auth');

router.get('/', authenticate, Meals.getMeals);

router.get('/:meals_id', authenticate, Meals.getMeals);

router.post('/', authenticate, Meals.postMeals);

router.put('/breakfast', authenticate, Meals.updateBreakfast);

router.put('/lunch', authenticate, Meals.updateLunch);

router.put('/snacks', authenticate, Meals.updateSnacks);

router.put('/dinner', authenticate, Meals.updateDinner);

module.exports = router