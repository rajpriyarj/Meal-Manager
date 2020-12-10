var express = require('express');
var router = express.Router();

const Dashboard = require('../controllers/c_dashboard')
const {authenticate} = require('../controllers/auth')

router.get('/', authenticate, Dashboard.getDashboard);

router.get('/:dashboard_id', authenticate, Dashboard.getDashboard);

module.exports = router;