var express = require('express');
var router = express.Router();

const Menu = require('../controllers/c_menu')
const {authenticate} = require('../controllers/auth');
const auth = require('../controllers/auth');

router.get('/', authenticate, Menu.getMenu);

router.post('/', authenticate, Menu.postMenu);

router.put('/breakfast/:day', authenticate, Menu.updateBreakfast);

router.put('/lunch/:day', authenticate, Menu.updateLunch);

router.put('/snacks/:day', authenticate, Menu.updateSnacks);

router.put('/dinner/:day', authenticate, Menu.updateDinner);

module.exports = router