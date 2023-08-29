const connection = require('../models/db');
function PostUser(req, res) {
 // console.log(req.body)
    const { firstName, lastName, email, password } = req.body;
    // Inserting the values into the database
    const sql = 'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)';
    connection.query(sql, [firstName, lastName, email, password], (err, result) => {
      if (err) {
        console.error('Error inserting values into the table: ' + err.stack);
        return res.status(500).send('Error inserting values into the table');
      }
      console.log('Inserted values into the table');
      return res.redirect('/users'); // Redirect to a success page
    });
  };

module.exports = {
  PostUser,
};