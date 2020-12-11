var express = require('express');
var router = express.Router();

const SuperAdmin = require('../controllers/c_superAdmin')

router.post('/signup', SuperAdmin.postSuperAdmin)

router.post('/login', SuperAdmin.loginSuperAdmin)

router.post('/registerAdmin', SuperAdmin.postAdmin)

module.exports = router