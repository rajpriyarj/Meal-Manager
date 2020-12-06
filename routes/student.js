var express = require('express');
var router = express.Router();

const Student = require('../controllers/c_student')

router.post('/signup', Student.postStudent)

router.post('/login', Student.loginStudent)

module.exports = router