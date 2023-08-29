const express = require('express')
const router = express.Router();
const usersController = require('../controllers/users_controller')

router.get('/users', usersController.getAllUsers)

module.exports = router // to be required in APP.JS 