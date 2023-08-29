const connection = require('../models/db');
// Retrieve all users
function getAllUsers(req, res) {
  connection.query('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
  res.render('users', { users: rows });
    }
  });
}
module.exports = {
    getAllUsers,
  };