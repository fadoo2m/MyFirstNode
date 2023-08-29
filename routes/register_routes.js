const express = require('express')
const router = express.Router();
const registerController = require('../controllers/register_controller')

router.post('/submit', registerController.PostUser)

module.exports = router // to be required in APP.JS 