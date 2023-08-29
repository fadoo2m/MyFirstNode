const connection = require('../models/db');

const salesorderview = (req,res) => {

    res.render('salesorder');
}

module.exports = { // to be required in Routs salesorder_routs.js
    salesorderview
}