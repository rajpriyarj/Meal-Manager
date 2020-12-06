var express = require('express');
var router = express.Router();

const Dashboard = require('../controllers/c_dashboard')

router.get('/dashboard', Dashboard.getdashboard);

module.exports = router