// const connection = require('./db');

// function createTable() {
//   const createTableQuery = `CREATE TABLE IF NOT EXISTS users (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     firstName NVARCHAR(50),
//     lastName NVARCHAR(40),
//     email NVARCHAR(40) NOT NULL,
//     password BINARY(64) NOT NULL
//   );`;

//   connection.query(createTableQuery, (err) => {
//     if (err) throw err;
//     console.log('Table Created!');
//   });
// };

// // Call the createTable function to create the table
// createTable();


// const user = {
//   id:12,
//   name: 'John Doe',
//   email: 'john.doe@example.com',
// };

// const insertUser = (user) => {
//   const { id , name, email } = user;
//   const sql = `INSERT INTO users (id, name, email) VALUES (?, ?, ?)`;
//   const values = [id, name, email];
//   connection.query(sql, values, (err, result) => {
//     if (err) throw err;
//     console.log('User inserted:', user);
//   });
// };

// insertUser(user);