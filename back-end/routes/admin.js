var express = require('express');
var router = express.Router();

const Admin = require('../controllers/c_admin')

const Menu = require('../controllers/c_menu')
const {authenticate} = require('../controllers/auth');

router.post('/login', Admin.loginAdmin);

router.get('/menu', authenticate, Menu.getMenu);

router.post('/menu', authenticate, Menu.postMenu);

router.put('/breakfast/:day', authenticate, Menu.updateBreakfast);

router.put('/lunch/:day', authenticate, Menu.updateLunch);

router.put('/snacks/:day', authenticate, Menu.updateSnacks);

router.put('/dinner/:day', authenticate, Menu.updateDinner);

// router.delete('/menu', authenticate, Menu.delMenu);

module.exports = router