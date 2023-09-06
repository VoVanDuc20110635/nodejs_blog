// get the client
// const mysql = require('mysql2');
import mysql from 'mysql2/promise';

// create the connection to database
console.log("Creating connection pool...");
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic'
});

// // simple query
// connection.query(
//   'SELECT * FROM `users` ',
//   function(err, results, fields) {
//     console.log('>>> check mysql');
//     let rows = results.map((row) => {return row.id});
//     console.log(rows); // results contains rows returned by server
    
//   }
// );



export default pool;