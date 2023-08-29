const express = require('express')
const router = express.Router();
const salesorderController = require('../controllers/salesorder_controller')

router.get('/salesorder', salesorderController.salesorderview)

module.exports = router // to be required in APP.JS 