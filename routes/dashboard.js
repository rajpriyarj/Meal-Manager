var express = require('express');
var router = express.Router();

const Dashboard = require('../controllers/c_dashboard')
const {authenticate} = require('../controllers/auth')

router.get('/', authenticate, Dashboard.getdashboard);

module.exports = router